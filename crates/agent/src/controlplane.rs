use anyhow::Context;
use chrono::{DateTime, Utc};
use sqlx::types::Uuid;
use std::{collections::BTreeSet, ops::Deref};

use crate::{
    publications::{JobStatus, PublicationResult},
    Publisher,
};

macro_rules! unwrap_single {
    ($catalog:expr; expect $expected:ident not $( $unexpected:ident ),+) => {
        {
            $(
                if !$catalog.$unexpected.is_empty() {
                    anyhow::bail!("expected only {} but found a {}", stringify!($expected), stringify!($unexpected));
                }
            )+
            Ok($catalog.$expected.into_iter().next())
        }
    };
}

/// A trait for allowing controllers access to the database.
/// This makes it much easier to test controllers, because we don't need to mock the state of the
/// whole database inside a transaction.
#[async_trait::async_trait]
pub trait ControlPlane: Send {
    /// Returns the current time. Having controllers access the current time through this api
    /// allows tests of controllers to be deterministic.
    fn current_time(&self) -> DateTime<Utc>;

    fn next_pub_id(&mut self) -> models::Id;

    async fn notify_dependents(
        &mut self,
        catalog_name: String,
        publication_id: models::Id,
    ) -> anyhow::Result<()>;

    async fn publish(
        &mut self,
        publication_id: models::Id,
        detail: Option<String>,
        logs_token: Uuid,
        draft: tables::DraftCatalog,
    ) -> anyhow::Result<PublicationResult>;

    async fn get_live_specs(
        &mut self,
        names: BTreeSet<String>,
    ) -> anyhow::Result<tables::LiveCatalog>;

    // async fn get_connected_specs(
    //     &mut self,
    //     collection_names: BTreeSet<models::Collection>,
    // ) -> anyhow::Result<tables::LiveSpecs>;

    // async fn get_live_specs_producing(
    //     &mut self,
    //     collection_names: Vec<String>,
    // ) -> anyhow::Result<tables::LiveSpecs>;

    // async fn get_linked_materializations(
    //     &mut self,
    //     capture_names: Vec<String>,
    // ) -> anyhow::Result<tables::LiveMaterializations>;

    /// Fetches the inferred schemas for the given `collections`. The set of returned schemas
    /// may be sparse, if some did not exist.

    async fn get_inferred_schema(
        &mut self,
        collection: models::Collection,
    ) -> anyhow::Result<Option<tables::InferredSchema>> {
        let live = self.get_live_specs(set_of(collection)).await?;
        // it's ok for collections to be present in the live catalog. Just ignore it
        unwrap_single!(live; expect inferred_schemas not captures, materializations, tests)
    }

    async fn get_collection(
        &mut self,
        collection: models::Collection,
    ) -> anyhow::Result<Option<tables::LiveCollection>> {
        let live = self.get_live_specs(set_of(collection)).await?;
        // it's ok for inferred_schemas to be present in the live catalog. Just ignore it
        unwrap_single!(live; expect collections not captures, materializations, tests)
    }

    async fn get_capture(
        &mut self,
        capture: models::Capture,
    ) -> anyhow::Result<Option<tables::LiveCapture>> {
        let live = self.get_live_specs(set_of(capture)).await?;
        unwrap_single!(live; expect captures not collections, inferred_schemas, materializations, tests)
    }

    async fn get_materialization(
        &mut self,
        materialization: models::Materialization,
    ) -> anyhow::Result<Option<tables::LiveMaterialization>> {
        let live = self.get_live_specs(set_of(materialization)).await?;
        unwrap_single!(live; expect materializations not captures, collections, inferred_schemas, tests)
    }

    async fn get_test(&mut self, test: models::Test) -> anyhow::Result<Option<tables::LiveTest>> {
        let live = self.get_live_specs(set_of(test)).await?;
        unwrap_single!(live; expect tests not captures, collections, materializations, inferred_schemas)
    }
}

fn set_of<T: Into<String>>(s: T) -> BTreeSet<String> {
    let mut set = BTreeSet::new();
    set.insert(s.into());
    set
}

pub struct PGControlPlane {
    pool: sqlx::PgPool,
    system_user_id: Uuid,
    publications_handler: Publisher,
    id_generator: models::IdGenerator,
}

impl PGControlPlane {
    pub fn new(
        pool: sqlx::PgPool,
        system_user_id: Uuid,
        publications_handler: Publisher,
        id_generator: models::IdGenerator,
    ) -> Self {
        Self {
            pool,
            system_user_id,
            publications_handler,
            id_generator,
        }
    }
}

#[async_trait::async_trait]
impl ControlPlane for PGControlPlane {
    async fn notify_dependents(
        &mut self,
        catalog_name: String,
        publication_id: models::Id,
    ) -> anyhow::Result<()> {
        let now = self.current_time();
        agent_sql::controllers::notify_dependents(
            &catalog_name,
            publication_id.into(),
            now,
            &self.pool,
        )
        .await?;
        Ok(())
    }

    async fn get_live_specs(
        &mut self,
        names: BTreeSet<String>,
    ) -> anyhow::Result<tables::LiveCatalog> {
        let names = names.into_iter().collect::<Vec<_>>();
        let rows = agent_sql::live_specs::fetch_live_specs(self.system_user_id, &names, &self.pool)
            .await?;
        let mut live = tables::LiveCatalog::default();
        for row in rows {
            let Some(catalog_type) = row.spec_type.map(Into::into) else {
                continue;
            };
            let scope = tables::synthetic_scope(catalog_type, &row.catalog_name);
            let model_json = row.spec.as_ref().unwrap().deref();
            let built_spec_json = row.built_spec.as_ref().unwrap().deref();

            live.add_spec(
                catalog_type,
                &row.catalog_name,
                scope,
                row.last_build_id.into(),
                model_json,
                built_spec_json,
            )
            .with_context(|| format!("deserializing specs for {:?}", row.catalog_name))?;
        }

        // Fetch inferred schemas and add to live specs.
        let collection_names = live
            .collections
            .iter()
            .map(|c| c.collection.as_str())
            .collect::<Vec<_>>();
        let inferred_schema_rows =
            agent_sql::live_specs::fetch_inferred_schemas(&collection_names, &self.pool)
                .await
                .context("fetching inferred schemas")?;
        for row in inferred_schema_rows {
            let agent_sql::live_specs::InferredSchemaRow {
                collection_name,
                schema,
                md5,
            } = row;
            let collection_name = models::Collection::new(collection_name);
            let schema = models::Schema::new(models::RawValue::from(schema.0));
            live.inferred_schemas.insert(tables::InferredSchema {
                collection_name,
                schema,
                md5,
            });
        }

        Ok(live)
    }

    fn current_time(&self) -> DateTime<Utc> {
        Utc::now()
    }

    async fn publish(
        &mut self,
        publication_id: models::Id,
        detail: Option<String>,
        logs_token: Uuid,
        draft: tables::DraftCatalog,
    ) -> anyhow::Result<PublicationResult> {
        let built = self
            .publications_handler
            .build(
                self.system_user_id,
                publication_id,
                detail,
                draft,
                logs_token,
            )
            .await?;
        if built.errors().next().is_some() {
            Ok(built.into_result(Utc::now(), JobStatus::build_failed(Vec::new())))
        } else {
            self.publications_handler
                .commit(logs_token, built, &self.pool)
                .await
        }
    }

    fn next_pub_id(&mut self) -> models::Id {
        self.id_generator.next()
    }
}
