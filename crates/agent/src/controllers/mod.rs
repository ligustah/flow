mod handler;
mod inferred_schema;
mod publication_status;
mod source_capture;

#[cfg(test)]
pub mod test_util;

use crate::controlplane::ControlPlane;
use anyhow::Context;
use chrono::{DateTime, Utc};
use models::Id;
use serde::{Deserialize, Serialize};
use sqlx::types::Uuid;
use std::fmt::Debug;

use self::{
    inferred_schema::InferredSchemaStatus, publication_status::PublicationStatus,
    source_capture::SourceCaptureStatus,
};

pub use handler::ControllerHandler;

/// This version is used to determine if the controller state is compatible with the current
/// code. Any controller state having a lower version than this will need to be run in order
/// to "upgrade" it. Any controller state having a higher version than this _must_ be ignored.
///
/// Increment this version whenever we need to ensure that controllers re-visit all live specs.
pub const CONTROLLER_VERSION: i32 = 1;

/// Represents the state of a specific controller and catalog_name.
#[derive(Clone, Debug, Serialize)]
pub struct ControllerState {
    pub catalog_name: String,
    pub live_spec: tables::AnySpec,
    pub next_run: Option<DateTime<Utc>>,
    pub updated_at: DateTime<Utc>,
    pub failures: i32,
    pub errror: Option<String>,
    pub last_pub_id: Id,
    pub logs_token: Uuid,
    pub controller_version: i32,
    pub current_status: Status,
}

#[derive(Debug, Serialize, Clone, Copy, PartialEq, Eq)]
pub struct NextRun {
    pub after_seconds: u32,
    pub jitter_percent: u16,
}

impl std::cmp::PartialOrd for NextRun {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.cmp(other))
    }
}

impl std::cmp::Ord for NextRun {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.after_seconds
            .cmp(&other.after_seconds)
            .then(self.jitter_percent.cmp(&other.jitter_percent))
    }
}

impl NextRun {
    const DEFAULT_JITTER: u16 = 20;

    pub fn after_minutes(minutes: u32) -> NextRun {
        NextRun {
            after_seconds: minutes * 60,
            jitter_percent: NextRun::DEFAULT_JITTER,
        }
    }

    pub fn with_jitter_percent(self, jitter_percent: u16) -> Self {
        NextRun {
            after_seconds: self.after_seconds,
            jitter_percent,
        }
    }

    pub fn compute_time(&self) -> DateTime<Utc> {
        use rand::Rng;

        let mut delta_millis = self.after_seconds as i64 * 1000;

        let jitter_mul = self.jitter_percent as f64 / 100.0;
        let jitter_max = (delta_millis as f64 * jitter_mul) as i64;
        let jitter_add = rand::thread_rng().gen_range(0..jitter_max);
        let dur = chrono::TimeDelta::milliseconds(delta_millis + jitter_add);
        Utc::now() + dur
    }
}

/// placeholder capture status
#[derive(Debug, Clone, Serialize, Deserialize, Default)]
struct CaptureStatus {
    #[serde(default, skip_serializing_if = "Option::is_none")]
    next_auto_discover: Option<DateTime<Utc>>,
}

impl CaptureStatus {
    pub async fn update<C: ControlPlane>(
        &mut self,
        _state: &ControllerState,
        _control_plane: &mut C,
        _model: &models::CaptureDef,
        _publication_status: &mut PublicationStatus,
    ) -> anyhow::Result<Option<NextRun>> {
        tracing::info!("updating capture status");
        Ok(None)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
struct CollectionStatus {
    #[serde(default, skip_serializing_if = "Option::is_none")]
    inferred_schema: Option<InferredSchemaStatus>,
}

impl CollectionStatus {
    async fn update<C: ControlPlane>(
        &mut self,
        state: &ControllerState,
        control_plane: &mut C,
        model: &models::CollectionDef,
        publication_status: &mut PublicationStatus,
    ) -> anyhow::Result<Option<NextRun>> {
        tracing::info!("updating collection status");
        if self::inferred_schema::uses_inferred_schema(model) {
            if self.inferred_schema.is_none() {
                self.inferred_schema = Some(InferredSchemaStatus::default());
            }
            self.inferred_schema
                .as_mut()
                .unwrap()
                .update(state, control_plane, model, publication_status)
                .await
        } else {
            self.inferred_schema = None;
            Ok(None)
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
struct MaterializationStatus {
    #[serde(default, skip_serializing_if = "Option::is_none")]
    source_capture: Option<SourceCaptureStatus>,
}
impl MaterializationStatus {
    pub async fn update<C: ControlPlane>(
        &mut self,
        state: &ControllerState,
        control_plane: &mut C,
        model: &models::MaterializationDef,
        publication_status: &mut PublicationStatus,
    ) -> anyhow::Result<Option<NextRun>> {
        if model.source_capture.is_some() {
            if self.source_capture.is_none() {
                self.source_capture = Some(SourceCaptureStatus::default());
            }
            self.source_capture
                .as_mut()
                .unwrap()
                .update(state, control_plane, model, publication_status)
                .await?;
        } else {
            self.source_capture = None;
        }
        Ok(None)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
struct TestStatus {
    up_to_date: bool,
}
impl TestStatus {
    pub async fn update<C: ControlPlane>(
        &mut self,
        _state: &ControllerState,
        _control_plane: &mut C,
        _model: &models::TestDef,
        _publication_status: &mut PublicationStatus,
    ) -> anyhow::Result<Option<NextRun>> {
        // TODO: impl TestStatus by trying to publish the test and recording any test failure errors
        Ok(None)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Status {
    #[serde(default, skip_serializing_if = "Option::is_none")]
    capture: Option<CaptureStatus>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    collection: Option<CollectionStatus>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    materialization: Option<MaterializationStatus>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    test: Option<TestStatus>,
    #[serde(default)]
    publication: PublicationStatus,
}

impl Status {
    async fn update<C: ControlPlane>(
        &mut self,
        state: &ControllerState,
        control_plane: &mut C,
    ) -> anyhow::Result<Option<NextRun>> {
        let Status {
            capture,
            collection,
            materialization,
            test,
            publication,
        } = self;

        publication.stage_update(state, control_plane).await?;

        let next_run = match &state.live_spec {
            tables::AnySpec::Capture(c) => {
                if capture.is_none() {
                    *capture = Some(Default::default());
                }
                let capture_status = capture.as_mut().unwrap();
                capture_status
                    .update(state, control_plane, c, publication)
                    .await?
            }
            tables::AnySpec::Collection(c) => {
                if collection.is_none() {
                    *collection = Some(Default::default());
                }
                let collection_status = collection.as_mut().unwrap();
                collection_status
                    .update(state, control_plane, c, publication)
                    .await?
            }
            tables::AnySpec::Materialization(m) => {
                if materialization.is_none() {
                    *materialization = Some(Default::default());
                }
                let materialization_status = materialization.as_mut().unwrap();
                materialization_status
                    .update(state, control_plane, m, publication)
                    .await?
            }
            tables::AnySpec::Test(t) => {
                if test.is_none() {
                    *test = Some(Default::default());
                }
                let test_status = test.as_mut().unwrap();
                test_status
                    .update(state, control_plane, t, publication)
                    .await?
            }
        };

        if publication.has_pending() {
            let result = publication
                .finish_pending_publication(state, control_plane)
                .await?;
            tracing::info!(status = ?result.publication_status, "finished pending publication");
        }

        let next_run = match (next_run, publication.next_run(state)) {
            (Some(l), Some(r)) => Some(l.min(r)),
            (a, b) => a.or(b),
        };

        Ok(next_run)
    }
}
