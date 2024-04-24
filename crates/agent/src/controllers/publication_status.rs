use crate::{
    controlplane::ControlPlane,
    publications::{self, PublicationResult},
};
use chrono::{DateTime, Utc};
use models::Id;
use serde::{Deserialize, Serialize};
use std::collections::{BTreeSet, VecDeque};
use tables::{LiveRow, SpecExt};

use super::{ControllerState, NextRun};

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub struct PublicationInfo {
    pub id: Id,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created: Option<DateTime<Utc>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub completed: Option<DateTime<Utc>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub detail: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub result: Option<publications::JobStatus>,
}

impl PublicationInfo {
    pub fn is_success(&self) -> bool {
        // TODO: should EmptyDraft be considered successful?
        self.result.as_ref().is_some_and(|s| s.is_success())
    }

    pub fn is_incompatible_collection_error(
        &self,
        collection_name: &str,
    ) -> Option<Vec<publications::builds::AffectedConsumer>> {
        match &self.result {
            Some(publications::JobStatus::BuildFailed {
                incompatible_collections,
                ..
            }) => incompatible_collections
                .iter()
                .find(|ic| ic.collection == collection_name)
                .map(|ic| ic.affected_materializations.clone()),
            _ => None,
        }
    }

    pub fn created(id: Id, time: DateTime<Utc>) -> Self {
        PublicationInfo {
            id,
            created: Some(time),
            completed: None,
            detail: None,
            result: None,
        }
    }

    pub fn observed(publication: &PublicationResult) -> Self {
        PublicationInfo {
            id: publication.publication_id,
            created: None,
            completed: Some(publication.completed_at),
            result: Some(publication.publication_status.clone()),
            detail: None,
        }
    }
}

#[derive(Debug)]
pub struct PendingPublication {
    pub id: Id,
    pub draft: tables::DraftCatalog,
    pub details: Vec<String>,
}

impl PendingPublication {}

#[derive(Debug, Serialize, Deserialize)]
pub struct PublicationStatus {
    pub target_pub_id: Id,
    pub history: VecDeque<PublicationInfo>,
    #[serde(default, skip)]
    pub pending: Option<PendingPublication>,
}

impl Clone for PublicationStatus {
    fn clone(&self) -> Self {
        PublicationStatus {
            target_pub_id: self.target_pub_id,
            history: self.history.clone(),
            pending: None,
        }
    }
}

impl Default for PublicationStatus {
    fn default() -> Self {
        PublicationStatus {
            target_pub_id: Id::zero(),
            history: VecDeque::new(),
            pending: None,
        }
    }
}

impl PublicationStatus {
    const MAX_HISTORY: usize = 3;

    pub fn pending_draft<'a, 'c, C: ControlPlane>(
        &'a mut self,
        add_detail: String,
        cp: &'c mut C,
    ) -> &mut PendingPublication {
        if self.pending.is_none() {
            let id = cp.next_pub_id();
            tracing::debug!(publication_id = ?id, "creating new publication");
            self.pending = Some(PendingPublication {
                id,
                draft: tables::DraftCatalog::default(),
                details: vec![add_detail],
            });
        }
        self.pending.as_mut().unwrap()
    }

    pub fn has_pending(&self) -> bool {
        self.pending.is_some()
    }

    pub async fn stage_update<C: ControlPlane>(
        &mut self,
        state: &ControllerState,
        cp: &mut C,
    ) -> anyhow::Result<bool> {
        let mut deps: BTreeSet<String> = state
            .live_spec
            .reads_from()
            .into_iter()
            .map(|r| r.into())
            .collect();
        deps.extend(state.live_spec.writes_to().into_iter().map(|r| r.into()));
        if deps.is_empty() {
            return Ok(false);
        }

        let live = cp.get_live_specs(deps.clone()).await?;
        if live.collections.len() != deps.len() {
            // TODO: handle dependencies that have been deleted by automatically removing the affected bindings.
            let live_collections = live
                .collections
                .iter()
                .map(|c| c.catalog_name().to_string())
                .collect::<BTreeSet<_>>();
            let deleted = deps.difference(&live_collections).collect::<Vec<_>>();
            tracing::warn!(?deleted, "dependencies have been deleted, which is not yet handled by the controller. The publication will likely fail");
        }

        let mut greatest = self.target_pub_id;
        for row in live.collections.iter() {
            greatest = greatest.max(row.last_pub_id);
        }
        if greatest > state.last_pub_id {
            tracing::info!(target_pub_id = %greatest,
                prev_target = %self.target_pub_id,
                last_pub_id = %state.last_pub_id,
                "publication is needed");
            self.target_pub_id = greatest;

            self.pending = Some(PendingPublication {
                id: self.target_pub_id,
                draft: draft_publication(state),
                details: vec![format!(
                    "in response to publication of one or more dependencies"
                )],
            });

            Ok(true)
        } else {
            Ok(false)
        }
    }

    pub async fn finish_pending_publication<C: ControlPlane>(
        &mut self,
        state: &ControllerState,
        cp: &mut C,
    ) -> anyhow::Result<PublicationResult> {
        use itertools::Itertools;
        let Some(pending) = self.pending.take() else {
            anyhow::bail!("no pending publication to finish");
        };
        let detail = pending.details.iter().join(", ");
        let result = cp
            .publish(pending.id, Some(detail), state.logs_token, pending.draft)
            .await?;
        self.record_result(PublicationInfo::observed(&result));

        Ok(result)
    }

    pub fn next_run(&self, state: &ControllerState) -> Option<NextRun> {
        let last_pub_id = self
            .history
            .front()
            .filter(|p| p.is_success())
            .map(|p| p.id)
            .unwrap_or(state.last_pub_id);
        if self.target_pub_id > last_pub_id {
            let fail_count = self.history.iter().take_while(|p| !p.is_success()).count();
            let after_seconds = match fail_count {
                0..=1 => 60,
                2 => 180,
                3 => 300,
                _ => 600,
            };

            Some(NextRun {
                after_seconds,
                jitter_percent: 25,
            })
        } else {
            None
        }
    }

    fn record_result(&mut self, publication: PublicationInfo) {
        // if publication.is_success() && publication.id > self.target_pub_id {
        //     self.target_pub_id = publication.id;
        // }
        self.history.push_front(publication);
        while self.history.len() > PublicationStatus::MAX_HISTORY {
            self.history.pop_back();
        }
    }
}

fn draft_publication(state: &ControllerState) -> tables::DraftCatalog {
    let mut draft = tables::DraftCatalog::default();
    draft.add_any_spec(
        &state.catalog_name,
        state.live_spec.clone(),
        Some(state.last_pub_id),
    );
    draft
}
