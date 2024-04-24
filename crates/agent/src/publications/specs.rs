use super::{LockFailure, UncommittedBuild};
use agent_sql::publications::{LiveRevision, LiveSpecUpdate, SpecRow};
use agent_sql::{Capability, TextJson};
use anyhow::Context;
use itertools::Itertools;
use models::{CatalogType, Id};
use serde::de::DeserializeOwned;
use serde_json::value::RawValue;
use sqlx::types::Uuid;
use std::collections::{BTreeMap, BTreeSet, HashSet};
use tables::{BuiltRow, SpecExt};

pub async fn persist_updates(
    uncommitted: &mut UncommittedBuild,
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
) -> anyhow::Result<Vec<LockFailure>> {
    let UncommittedBuild {
        ref publication_id,
        ref output,
        ref mut live_spec_ids,
        ref user_id,
        ref detail,
        ..
    } = uncommitted;

    let live_spec_updates = update_live_specs(*publication_id, &output, txn).await?;
    let lock_failures = live_spec_updates
        .iter()
        .filter_map(|r| {
            if r.last_pub_id != r.expect_pub_id {
                Some(LockFailure {
                    catalog_name: r.catalog_name.clone(),
                    last_pub_id: Some(r.last_pub_id.into()).filter(|id: &models::Id| !id.is_zero()),
                    expect_pub_id: r.expect_pub_id.into(),
                })
            } else {
                None
            }
        })
        .collect::<Vec<_>>();
    if !lock_failures.is_empty() {
        return Ok(lock_failures);
    }
    let lock_failures = verify_unchanged_revisions(output, txn).await?;
    if !lock_failures.is_empty() {
        return Ok(lock_failures);
    }

    // Update `live_spec_ids` to include the ids of any newly created live specs
    for update in live_spec_updates {
        let LiveSpecUpdate {
            catalog_name,
            live_spec_id,
            ..
        } = update;
        let prev_value = live_spec_ids
            .get_mut(&catalog_name)
            .ok_or_else(|| anyhow::anyhow!("missing live_spec_ids entry for {catalog_name:?} while processing LiveSpecUpdate for {live_spec_id}"))?;
        if prev_value.is_zero() {
            *prev_value = live_spec_id.into();
        } else {
            // Just a sanity check to ensure our handling of live spec ids is correct
            assert_eq!(
                *prev_value,
                live_spec_id.into(),
                "live_specs.id changed mid-publication for {catalog_name:?}"
            );
        }
    }

    update_drafted_live_spec_flows(live_spec_ids, output, txn)
        .await
        .context("updating live spec flows")?;

    // TODO: update `presist_updates` to insert all of them in one go
    insert_publication_specs(
        *publication_id,
        *user_id,
        detail.as_ref(),
        &*live_spec_ids,
        output,
        txn,
    )
    .await
    .context("inserting publication specs")?;

    Ok(Vec::new())
}

#[tracing::instrument(skip(model, live_spec_ids, txn))]
async fn update_live_spec_flows<M: SpecExt>(
    catalog_name: &str,
    catalog_type: agent_sql::CatalogType,
    model: Option<&M>,
    live_spec_ids: &BTreeMap<String, models::Id>,
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
) -> anyhow::Result<()> {
    let live_spec_id = live_spec_ids
        .get(catalog_name)
        .ok_or_else(|| anyhow::anyhow!("missing live_spec_ids entry for {catalog_name:?}"))?;
    let live_spec_id: agent_sql::Id = (*live_spec_id).into();
    agent_sql::publications::delete_stale_flow(live_spec_id, catalog_type, txn).await?;

    let Some(model) = model else {
        return Ok(());
    };

    let reads_from = model.reads_from();
    let writes_to = model.writes_to();
    agent_sql::publications::insert_live_spec_flows(
        live_spec_id,
        catalog_type,
        Some(reads_from.iter().map(|c| c.as_str()).collect::<Vec<_>>()).filter(|a| !a.is_empty()),
        Some(writes_to.iter().map(|c| c.as_str()).collect::<Vec<_>>()).filter(|a| !a.is_empty()),
        txn,
    )
    .await?;
    Ok(())
}

async fn update_drafted_live_spec_flows(
    live_spec_ids: &BTreeMap<String, models::Id>,
    build: &build::Output,
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
) -> anyhow::Result<()> {
    for r in build.built_captures().iter().filter(|r| !r.is_unchanged()) {
        update_live_spec_flows(
            &r.catalog_name(),
            agent_sql::CatalogType::Capture,
            r.model(),
            live_spec_ids,
            txn,
        )
        .await
        .with_context(|| format!("updating live_spec_flows for '{}'", r.catalog_name()))?;
    }
    for r in build
        .built_collections()
        .iter()
        .filter(|r| !r.is_unchanged())
    {
        update_live_spec_flows(
            &r.catalog_name(),
            agent_sql::CatalogType::Collection,
            r.model(),
            live_spec_ids,
            txn,
        )
        .await
        .with_context(|| format!("updating live_spec_flows for '{}'", r.catalog_name()))?;
    }
    for r in build
        .built_materializations()
        .iter()
        .filter(|r| !r.is_unchanged())
    {
        update_live_spec_flows(
            &r.catalog_name(),
            agent_sql::CatalogType::Materialization,
            r.model(),
            live_spec_ids,
            txn,
        )
        .await
        .with_context(|| format!("updating live_spec_flows for '{}'", r.catalog_name()))?;
    }
    for r in build.built_tests().iter().filter(|r| !r.is_unchanged()) {
        update_live_spec_flows(
            &r.catalog_name(),
            agent_sql::CatalogType::Test,
            r.model(),
            live_spec_ids,
            txn,
        )
        .await
        .with_context(|| format!("updating live_spec_flows for '{}'", r.catalog_name()))?;
    }
    Ok(())
}

async fn update_live_specs(
    pub_id: Id,
    output: &build::Output,
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
) -> anyhow::Result<Vec<agent_sql::publications::LiveSpecUpdate>> {
    let n_specs = output.built.count();
    let mut catalog_names = Vec::with_capacity(n_specs);
    let mut spec_types: Vec<agent_sql::CatalogType> = Vec::with_capacity(n_specs);
    let mut models = Vec::with_capacity(n_specs);
    let mut built_specs = Vec::with_capacity(n_specs);
    let mut expect_pub_ids: Vec<agent_sql::Id> = Vec::with_capacity(n_specs);
    let mut reads_froms = Vec::with_capacity(n_specs);
    let mut writes_tos = Vec::with_capacity(n_specs);

    for r in output.built_captures().iter().filter(|r| !r.is_unchanged()) {
        catalog_names.push(r.catalog_name().to_string());
        spec_types.push(agent_sql::CatalogType::Capture);
        models.push(to_raw_value(r.model(), agent_sql::TextJson));
        built_specs.push(to_raw_value(r.spec(), agent_sql::TextJson));
        expect_pub_ids.push(r.expect_pub_id().into());
        reads_froms.push(get_dependencies(r.model(), SpecExt::reads_from));
        writes_tos.push(get_dependencies(r.model(), SpecExt::writes_to));
    }
    for r in output
        .built_collections()
        .iter()
        .filter(|r| !r.is_unchanged())
    {
        catalog_names.push(r.catalog_name().to_string());
        spec_types.push(agent_sql::CatalogType::Collection);
        models.push(to_raw_value(r.model(), agent_sql::TextJson));
        built_specs.push(to_raw_value(r.spec(), agent_sql::TextJson));
        expect_pub_ids.push(r.expect_pub_id().into());
        reads_froms.push(get_dependencies(r.model(), SpecExt::reads_from));
        writes_tos.push(get_dependencies(r.model(), SpecExt::writes_to));
    }
    for r in output
        .built_materializations()
        .iter()
        .filter(|r| !r.is_unchanged())
    {
        catalog_names.push(r.catalog_name().to_string());
        spec_types.push(agent_sql::CatalogType::Materialization);
        models.push(to_raw_value(r.model(), agent_sql::TextJson));
        built_specs.push(to_raw_value(r.spec(), agent_sql::TextJson));
        expect_pub_ids.push(r.expect_pub_id().into());
        reads_froms.push(get_dependencies(r.model(), SpecExt::reads_from));
        writes_tos.push(get_dependencies(r.model(), SpecExt::writes_to));
    }
    for r in output.built_tests().iter().filter(|r| !r.is_unchanged()) {
        catalog_names.push(r.catalog_name().to_string());
        spec_types.push(agent_sql::CatalogType::Test);
        models.push(to_raw_value(r.model(), agent_sql::TextJson));
        built_specs.push(to_raw_value(r.spec(), agent_sql::TextJson));
        expect_pub_ids.push(r.expect_pub_id().into());
        reads_froms.push(get_dependencies(r.model(), SpecExt::reads_from));
        writes_tos.push(get_dependencies(r.model(), SpecExt::writes_to));
    }

    // We currently set `controller_next_run` to now for all affected specs, which can include
    // the spec corresponding to a currently running controller. Thus a controller that publishes
    // its own spec will be run again immediately. We could prevent that if we want, but I'm not
    // worrying about it for now.
    let updates = agent_sql::publications::persist_updates(
        pub_id.into(),
        &catalog_names,
        &spec_types,
        &models,
        &built_specs,
        &expect_pub_ids,
        &reads_froms,
        &writes_tos,
        chrono::Utc::now(), // run controllers immediately
        txn,
    )
    .await?;

    Ok(updates)
}

async fn insert_publication_specs(
    publication_id: models::Id,
    user_id: Uuid,
    detail: Option<&String>,
    live_spec_ids: &BTreeMap<String, models::Id>,
    built: &build::Output,
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
) -> anyhow::Result<()> {
    for r in built.built_captures().iter().filter(|r| !r.is_unchanged()) {
        let spec_id = *live_spec_ids
            .get(r.catalog_name().as_str())
            .expect("live_spec_id must be Some if spec is changed");
        let spec = to_raw_value(r.model(), agent_sql::TextJson);
        agent_sql::publications::insert_publication_spec(
            spec_id.into(),
            publication_id.into(),
            detail,
            &spec,
            &Some(agent_sql::CatalogType::Capture),
            user_id,
            txn,
        )
        .await
        .with_context(|| format!("inserting spec for '{}'", r.catalog_name()))?;
    }
    for r in built
        .built_collections()
        .iter()
        .filter(|r| !r.is_unchanged())
    {
        let spec_id = *live_spec_ids
            .get(r.catalog_name().as_str())
            .expect("live_spec_id must be Some if spec is changed");
        let spec = to_raw_value(r.model(), agent_sql::TextJson);
        agent_sql::publications::insert_publication_spec(
            spec_id.into(),
            publication_id.into(),
            detail,
            &spec,
            &Some(agent_sql::CatalogType::Collection),
            user_id,
            txn,
        )
        .await
        .with_context(|| format!("inserting spec for '{}'", r.catalog_name()))?;
    }
    for r in built
        .built_materializations()
        .iter()
        .filter(|r| !r.is_unchanged())
    {
        let spec_id = *live_spec_ids
            .get(r.catalog_name().as_str())
            .expect("live_spec_id must be Some if spec is changed");
        let spec = to_raw_value(r.model(), agent_sql::TextJson);
        agent_sql::publications::insert_publication_spec(
            spec_id.into(),
            publication_id.into(),
            detail,
            &spec,
            &Some(agent_sql::CatalogType::Materialization),
            user_id,
            txn,
        )
        .await
        .with_context(|| format!("inserting spec for '{}'", r.catalog_name()))?;
    }
    for r in built.built_tests().iter().filter(|r| !r.is_unchanged()) {
        let spec_id = *live_spec_ids
            .get(r.catalog_name().as_str())
            .expect("live_spec_id must be Some if spec is changed");
        let spec = to_raw_value(r.model(), agent_sql::TextJson);
        agent_sql::publications::insert_publication_spec(
            spec_id.into(),
            publication_id.into(),
            detail,
            &spec,
            &Some(agent_sql::CatalogType::Test),
            user_id,
            txn,
        )
        .await
        .with_context(|| format!("inserting spec for '{}'", r.catalog_name()))?;
    }
    Ok(())
}

fn get_dependencies<M, F>(model: Option<&M>, get: F) -> agent_sql::TextJson<Vec<String>>
where
    M: SpecExt,
    F: Fn(&M) -> BTreeSet<models::Collection>,
{
    agent_sql::TextJson(
        get(model.expect("model must be Some if spec is changed"))
            .into_iter()
            .map(Into::into)
            .collect(),
    )
}

async fn verify_unchanged_revisions(
    output: &build::Output,
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
) -> anyhow::Result<Vec<LockFailure>> {
    let mut expected: BTreeMap<&str, Id> = output
        .built_captures()
        .iter()
        .filter(|r| r.is_unchanged())
        .map(|r| (r.catalog_name().as_str(), r.expect_pub_id()))
        .chain(
            output
                .built_collections()
                .iter()
                .filter(|r| r.is_unchanged())
                .map(|r| (r.catalog_name().as_str(), r.expect_pub_id())),
        )
        .chain(
            output
                .built_materializations()
                .iter()
                .filter(|r| r.is_unchanged())
                .map(|r| (r.catalog_name().as_str(), r.expect_pub_id())),
        )
        .chain(
            output
                .built_tests()
                .iter()
                .filter(|r| r.is_unchanged())
                .map(|r| (r.catalog_name().as_str(), r.expect_pub_id())),
        )
        .collect();
    let catalog_names = expected.keys().map(|k| *k).collect::<Vec<_>>();
    let live_revisions = agent_sql::publications::lock_live_specs(&catalog_names, txn).await?;

    let mut errors = Vec::new();
    for LiveRevision {
        catalog_name,
        last_pub_id,
    } in live_revisions
    {
        if let Some(expect_pub_id) = expected.remove(catalog_name.as_str()) {
            if expect_pub_id != last_pub_id.into() {
                errors.push(LockFailure {
                    catalog_name,
                    last_pub_id: Some(last_pub_id.into()),
                    expect_pub_id,
                });
            }
        }
    }
    // Remaining expected pub ids are for `live_specs` rows which have been deleted since we started the publication.
    for (catalog_name, expect_pub_id) in expected {
        if !expect_pub_id.is_zero() {}
        errors.push(LockFailure {
            catalog_name: catalog_name.to_string(),
            last_pub_id: None,
            expect_pub_id,
        });
    }
    Ok(errors)
}

fn to_raw_value<T: serde::Serialize, W, F>(maybe_spec: Option<&T>, wrap: F) -> Option<W>
where
    F: Fn(Box<RawValue>) -> W,
{
    if let Some(value) = maybe_spec {
        let json = serde_json::value::to_raw_value(value).expect("must serialize spec to json");
        Some(wrap(json))
    } else {
        None
    }
}

/// This is a temporary standin for a function that will lookup the ops collection names based on
/// the data plane that's associated with the tenants of published tasks.
fn get_ops_collection_names() -> BTreeSet<String> {
    let mut names = BTreeSet::new();
    names.insert("ops.us-central1.v1/logs".to_string());
    names.insert("ops.us-central1.v1/stats".to_string());
    names
}

pub async fn resolve_live_specs(
    user_id: Uuid,
    draft: &tables::DraftCatalog,
    db: &sqlx::PgPool,
) -> anyhow::Result<(tables::LiveCatalog, BTreeMap<String, models::Id>)> {
    // We're expecting to get a row for catalog name that's either drafted or referenced
    // by a drafted spec, even if the live spec does not exist. In that case, the row will
    // still contain information on the user and spec capabilities.
    let mut all_spec_names = draft
        .all_catalog_names()
        .iter()
        .map(|n| n.to_string())
        .collect::<Vec<_>>();

    // We need to know the names of the ops collections
    let ops_collection_names = get_ops_collection_names();
    all_spec_names.extend(ops_collection_names.iter().cloned());

    let rows = agent_sql::live_specs::fetch_live_specs(user_id, &all_spec_names, db)
        .await
        .context("fetching live specs")?;

    let spec_ids = rows
        .iter()
        .map(|r| (r.catalog_name.clone(), r.id.into()))
        .collect();

    // Check the user and spec authorizations.
    // Start by making an easy way to lookup whether each row was drafted or not.
    let drafted_names = draft.all_spec_names().collect::<HashSet<_>>();
    // AuthZ errors will be pushed to the live catalog
    let mut live = tables::LiveCatalog::default();
    for spec_row in rows {
        let catalog_name = spec_row.catalog_name.as_str();
        let n_errors = live.errors.len();

        if drafted_names.contains(catalog_name) {
            // Get the metadata about the draft spec that matches this catalog name.
            // This must exist in `draft`, otherwise `spec_meta` will panic.
            let (catalog_type, reads_from, writes_to) = spec_meta(draft, catalog_name);
            let scope = tables::synthetic_scope(catalog_type, catalog_name);

            // If the spec is included in the draft, then the user must have admin capability to it.
            if !matches!(spec_row.user_capability, Some(Capability::Admin)) {
                live.errors.push(tables::Error {
                    scope: scope.clone(),
                    error: anyhow::anyhow!(
                        "User is not authorized to create or change this catalog name"
                    ),
                });
                // Continue because we'll otherwise produce superfluous auth errors
                // of referenced collections.
                continue;
            }
            for source in reads_from {
                if !spec_row.spec_capabilities.iter().any(|c| {
                    source.starts_with(&c.object_role)
                        && matches!(
                            c.capability,
                            Capability::Read | Capability::Write | Capability::Admin
                        )
                }) {
                    live.errors.push(tables::Error {
                        scope: scope.clone(),
                        error: anyhow::anyhow!(
                            "Specification '{catalog_name}' is not read-authorized to '{source}'.\nAvailable grants are: {}",
                            serde_json::to_string_pretty(&spec_row.spec_capabilities.0).unwrap(),
                        ),
                    });
                }
            }
            for target in writes_to {
                if !spec_row.spec_capabilities.iter().any(|c| {
                    target.starts_with(&c.object_role)
                        && matches!(c.capability, Capability::Write | Capability::Admin)
                }) {
                    live.errors.push(tables::Error {
                        scope: scope.clone(),
                        error: anyhow::anyhow!(
                            "Specification is not write-authorized to '{target}'.\nAvailable grants are: {}",
                            serde_json::to_string_pretty(&spec_row.spec_capabilities.0).unwrap(),
                        ),
                    });
                }
            }
        // Ops collections are automatically injected, and the user does not need (or have) any
        // access capability to them.
        } else if !ops_collection_names.contains(&spec_row.catalog_name) {
            // This is a live spec that is not included in the draft.
            // The user needs read capability to it because it was referenced by one of the specs
            // in their draft. Note that the _user_ does not need `Capability::Write` as long as
            // the _spec_ is authorized to do what it needs. The user just needs to be allowed to
            // know it exists.
            if !spec_row
                .user_capability
                .map(|c| c >= Capability::Read)
                .unwrap_or(false)
            {
                // TODO: consolidate into `tables::synthetic_scope`
                let mut scope = url::Url::parse("flow://unauthorized/").unwrap();
                scope.set_path(&spec_row.catalog_name);
                live.errors.push(tables::Error {
                    scope,
                    error: anyhow::anyhow!("User is not authorized to read this catalog name"),
                });
                continue;
            }
        }

        // Don't add the spec if the row had authorization errors, just as an extra precaution in
        // case the user isn't authorized to know about a spec.
        if live.errors.len() > n_errors {
            continue;
        }

        // TODO: return an error if any of the ops collections are missing

        if let Some(model) = spec_row.spec.as_ref() {
            let catalog_type = spec_row.spec_type.unwrap().into();
            let scope = tables::synthetic_scope(catalog_type, &spec_row.catalog_name);
            live.add_spec(
                spec_row.spec_type.unwrap().into(),
                &spec_row.catalog_name,
                scope,
                spec_row.last_build_id.into(),
                &model,
                &spec_row
                    .built_spec
                    .as_ref()
                    .expect("must have built spec if spec exists"),
            )
            .with_context(|| format!("adding live spec for {:?}", spec_row.catalog_name))?;
        }
    }

    // TODO: we probably don't need storage mappings for expanded live specs
    let all_names = all_spec_names
        .iter()
        .map(|s| s.as_str())
        .chain(live.all_spec_names())
        .sorted()
        .dedup()
        .collect::<Vec<_>>();
    let storage_rows = agent_sql::publications::resolve_storage_mappings(all_names, db).await?;
    for row in storage_rows {
        // TODO: consolidate with `tables::synthetic_scope`
        let mut scope = url::Url::parse("flow://storage-mappings/").unwrap();
        scope.set_path(&row.catalog_prefix);

        let store: models::StorageDef = match serde_json::from_value(row.spec) {
            Ok(s) => s,
            Err(err) => {
                live.errors.push(tables::Error {
                    scope: scope.clone(),
                    error: anyhow::Error::from(err).context("deserializing storage mapping spec"),
                });
                continue;
            }
        };
        live.storage_mappings.insert(tables::StorageMapping {
            catalog_prefix: models::Prefix::new(row.catalog_prefix),
            scope,
            stores: store.stores,
        });
    }

    Ok((live, spec_ids))
}

fn spec_meta(
    draft: &tables::DraftCatalog,
    catalog_name: &str,
) -> (
    models::CatalogType,
    BTreeSet<models::Collection>,
    BTreeSet<models::Collection>,
) {
    let capture = models::Capture::new(catalog_name);
    if let Some(s) = draft.captures.get_by_key(&capture) {
        return (
            models::CatalogType::Capture,
            Default::default(),
            s.model.as_ref().map(|m| m.writes_to()).unwrap_or_default(),
        );
    }
    let collection = models::Collection::new(capture);
    if let Some(s) = draft.collections.get_key(&collection) {
        return (
            models::CatalogType::Collection,
            s.model.as_ref().map(|m| m.reads_from()).unwrap_or_default(),
            s.model.as_ref().map(|m| m.writes_to()).unwrap_or_default(),
        );
    }
    let materialization = models::Materialization::new(collection);
    if let Some(s) = draft.materializations.get_key(&materialization) {
        return (
            models::CatalogType::Materialization,
            s.model.as_ref().map(|m| m.reads_from()).unwrap_or_default(),
            Default::default(),
        );
    }
    let test = models::Test::new(materialization);
    if let Some(s) = draft.tests.get_key(&test) {
        return (
            models::CatalogType::Test,
            s.model.as_ref().map(|m| m.reads_from()).unwrap_or_default(),
            s.model.as_ref().map(|m| m.writes_to()).unwrap_or_default(),
        );
    }
    panic!("draft is missing spec for '{catalog_name}'");
}

fn deserialize_draft_spec<T: DeserializeOwned>(
    spec: &Option<TextJson<Box<RawValue>>>,
    scope: &url::Url,
    errors: &mut tables::Errors,
) -> Option<T> {
    let spec = spec.as_ref()?;
    match serde_json::from_str::<T>(spec.get()) {
        Ok(spec) => Some(spec),
        Err(e) => {
            errors.push(tables::Error {
                scope: scope.clone(),
                error: anyhow::Error::from(e).context("deserializing draft spec"),
            });
            None
        }
    }
}

pub async fn load_draft(
    draft_id: Id,
    db: impl sqlx::Executor<'_, Database = sqlx::Postgres>,
) -> anyhow::Result<tables::DraftCatalog> {
    let rows = agent_sql::drafts::fetch_draft_specs(draft_id.into(), db).await?;
    let mut draft = tables::DraftCatalog::default();
    for row in rows {
        let Some(spec_type) = row.spec_type.map(Into::into) else {
            let mut scope = url::Url::parse("flow://deletion/").unwrap();
            scope.set_path(&row.catalog_name); // url-encodes the name if needed
            draft.errors.push(tables::Error {
                scope,
                error: anyhow::anyhow!(
                    "draft contains a deletion of {:?}, but no such live spec exists",
                    row.catalog_name
                ),
            });
            continue;
        };
        let scope = tables::synthetic_scope(spec_type, &row.catalog_name);
        let expect_pub_id = row.expect_pub_id.map(Into::into);
        if let Err(err) = draft.add_spec(
            spec_type,
            &row.catalog_name,
            scope,
            expect_pub_id,
            &row.spec.as_ref().unwrap(),
        ) {
            draft.errors.push(err);
        }
    }
    Ok(draft)
}

// pub async fn apply_updates_for_row(
//     catalog: &models::Catalog,
//     detail: Option<&String>,
//     pub_id: Id,
//     spec_row: &SpecRow,
//     user_id: Uuid,
//     txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
// ) -> anyhow::Result<()> {
//     let SpecRow {
//         catalog_name,
//         draft_spec,
//         draft_spec_id,
//         draft_type,
//         expect_pub_id: _,
//         last_build_id: _,
//         last_pub_id: _,
//         live_spec: _,
//         live_spec_id,
//         live_type,
//         spec_capabilities: _,
//         user_capability,
//     } = spec_row;

//     assert!(matches!(user_capability, Some(Capability::Admin)));

//     agent_sql::drafts::delete_spec(*draft_spec_id, txn)
//         .await
//         .context("delete from draft_specs")?;

//     // Clear out data-flow edges that we'll replace.
//     match live_type {
//         Some(live_type) => {
//             agent_sql::publications::delete_stale_flow(*live_spec_id, *live_type, txn)
//                 .await
//                 .with_context(|| format!("delete stale {live_type:?} edges"))?;
//         }
//         None => {} // No-op.
//     }

//     agent_sql::publications::insert_publication_spec(
//         *live_spec_id,
//         pub_id.into(),
//         detail,
//         draft_spec,
//         draft_type,
//         user_id,
//         txn,
//     )
//     .await
//     .context("insert into publication_specs")?;

//     // Draft is an update of a live spec. The semantic insertion and deletion
//     // cases are also an update: we previously created a `live_specs` rows for
//     // the draft `catalog_name` in order to lock it. If the draft is a deletion,
//     // that's marked as a DB NULL of `spec` and `spec_type`.

//     let (reads_from, writes_to, image_parts) = extract_spec_metadata(catalog, spec_row);

//     agent_sql::publications::update_published_live_spec(
//         catalog_name,
//         image_parts.as_ref().map(|p| &p.0),
//         image_parts.as_ref().map(|p| &p.1),
//         draft_spec,
//         draft_type,
//         *live_spec_id,
//         pub_id.into(),
//         &reads_from,
//         &writes_to,
//         txn,
//     )
//     .await
//     .context("update live_specs")?;

//     agent_sql::publications::insert_live_spec_flows(
//         *live_spec_id,
//         draft_type,
//         reads_from,
//         writes_to,
//         txn,
//     )
//     .await
//     .context("insert live_spec_flow edges")?;

//     if draft_spec.is_none() {
//         agent_sql::publications::delete_data_processing_alerts(catalog_name, txn)
//             .await
//             .context("delete alert_data_processing rows")?;
//     }

//     Ok(())
// }

// add_built_specs_to_draft_specs adds the built spec and validated response to the draft_specs row
// for all tasks included in build_output if they are in the list of specifications which are
// changing in this publication per the list of spec_rows.
pub async fn add_built_specs_to_draft_specs(
    draft_id: agent_sql::Id,
    build_output: &build::Output,
    db: &sqlx::PgPool,
) -> Result<(), sqlx::Error> {
    // Possible optimization, which I'm not doing right now: collect vecs of all the
    // prepared statement parameters and update all draft specs in a single query.
    for collection in build_output.built_collections().iter() {
        if !collection.is_delete() {
            agent_sql::drafts::add_built_spec(
                draft_id,
                collection.catalog_name().as_str(),
                &collection.spec,
                collection.validated(),
                db,
            )
            .await?;
        }
    }

    for capture in build_output.built_captures().iter() {
        if !capture.is_delete() {
            agent_sql::drafts::add_built_spec(
                draft_id,
                capture.catalog_name().as_str(),
                &capture.spec,
                capture.validated(),
                db,
            )
            .await?;
        }
    }

    for materialization in build_output.built_materializations().iter() {
        if !materialization.is_delete() {
            agent_sql::drafts::add_built_spec(
                draft_id,
                materialization.catalog_name().as_str(),
                &materialization.spec,
                materialization.validated(),
                db,
            )
            .await?;
        }
    }

    for test in build_output.built_tests().iter() {
        if !test.is_delete() {
            agent_sql::drafts::add_built_spec(
                draft_id,
                test.catalog_name().as_str(),
                &test.spec,
                test.validated(),
                db,
            )
            .await?;
        }
    }

    Ok(())
}

/// Returns a tuple containing:
/// - catalog names that this spec reads from
/// - catalog names that this spec writes to
/// - connector image parts, if applicable
fn extract_spec_metadata<'a>(
    catalog: &'a models::Catalog,
    spec_row: &'a SpecRow,
) -> (
    Option<Vec<&'a str>>,
    Option<Vec<&'a str>>,
    Option<(String, String)>,
) {
    let SpecRow {
        user_capability: _,
        spec_capabilities: _,
        catalog_name,
        draft_spec: _,
        draft_spec_id: _,
        draft_type,
        expect_pub_id: _,
        last_build_id: _,
        last_pub_id: _,
        live_spec: _,
        live_spec_id: _,
        live_type: _,
    } = spec_row;

    let mut reads_from = Vec::new();
    let mut writes_to = Vec::new();
    let mut image_parts = None;

    match draft_type.map(Into::into) {
        Some(CatalogType::Capture) => {
            let key = models::Capture::new(catalog_name);
            let capture = catalog.captures.get(&key).unwrap();

            if let models::CaptureEndpoint::Connector(config) = &capture.endpoint {
                image_parts = Some(split_tag(&config.image));
            }
            for binding in &capture.bindings {
                if !binding.disable {
                    writes_to.push(binding.target.as_ref());
                }
            }
            writes_to.reserve(1);
        }
        Some(CatalogType::Collection) => {
            let key = models::Collection::new(catalog_name);
            let collection = catalog.collections.get(&key).unwrap();

            if let Some(derive) = &collection.derive {
                if let models::DeriveUsing::Connector(config) = &derive.using {
                    image_parts = Some(split_tag(&config.image));
                }
                for transform in &derive.transforms {
                    if !transform.disable {
                        reads_from.push(transform.source.collection().as_ref());
                    }
                }
                reads_from.reserve(1);
            }
        }
        Some(CatalogType::Materialization) => {
            let key = models::Materialization::new(catalog_name);
            let materialization = catalog.materializations.get(&key).unwrap();

            if let models::MaterializationEndpoint::Connector(config) = &materialization.endpoint {
                image_parts = Some(split_tag(&config.image));
            }
            for binding in &materialization.bindings {
                if !binding.disable {
                    reads_from.push(binding.source.collection().as_ref());
                }
            }
            reads_from.reserve(1);
        }
        Some(CatalogType::Test) => {
            let key = models::Test::new(catalog_name);
            let model = catalog.tests.get(&key).unwrap();

            for step in model.steps.iter() {
                match step {
                    models::TestStep::Ingest(ingest) => writes_to.push(ingest.collection.as_ref()),
                    models::TestStep::Verify(verify) => {
                        reads_from.push(verify.collection.collection().as_ref())
                    }
                }
            }
            writes_to.reserve(1);
            reads_from.reserve(1);
        }
        None => {} // No-op.
    }

    for v in [&mut reads_from, &mut writes_to] {
        v.sort();
        v.dedup();
    }

    (
        if reads_from.capacity() != 0 {
            Some(reads_from)
        } else {
            None
        },
        if writes_to.capacity() != 0 {
            Some(writes_to)
        } else {
            None
        },
        image_parts,
    )
}

fn split_tag(image_full: &str) -> (String, String) {
    let mut image = image_full.to_string();

    if let Some(pivot) = image.find("@sha256:").or_else(|| image.find(":")) {
        let tag = image.split_off(pivot);
        (image, tag)
    } else {
        (image, String::new())
    }
}

// #[cfg(test)]
// mod test {
//     use crate::{publications::JobStatus, FIXED_DATABASE_URL};

//     use super::super::Publisher;
//     use agent_sql::Id;
//     use reqwest::Url;
//     use serde::Deserialize;
//     use serde_json::Value;
//     use sqlx::{Connection, Postgres, Transaction};

//     // Squelch warnings about struct fields never being read.
//     // They actually are read by insta when snapshotting.
//     #[allow(dead_code)]
//     #[derive(Debug, Deserialize)]
//     struct LiveSpec {
//         catalog_name: String,
//         connector_image_name: Option<String>,
//         connector_image_tag: Option<String>,
//         reads_from: Option<Vec<String>>,
//         writes_to: Option<Vec<String>>,
//         spec: Option<Value>,
//         spec_type: Option<String>,
//     }
//     #[allow(dead_code)]
//     #[derive(Debug)]
//     struct ScenarioResult {
//         draft_id: Id,
//         status: JobStatus,
//         errors: Vec<String>,
//         live_specs: Vec<LiveSpec>,
//     }

//     async fn execute_publications(txn: &mut Transaction<'_, Postgres>) -> Vec<ScenarioResult> {
//         let bs_url: Url = "http://example.com".parse().unwrap();

//         let (logs_tx, mut logs_rx) = tokio::sync::mpsc::channel(8192);

//         // Just in case anything gets through
//         logs_rx.close();

//         let id_gen = models::IdGenerator::new(42);
//         let mut handler = Publisher::new(
//             "support@estuary.dev",
//             false,
//             "",
//             &bs_url,
//             &bs_url,
//             "",
//             &bs_url,
//             &logs_tx,
//             None,
//             id_gen,
//         );

//         let mut results: Vec<ScenarioResult> = vec![];

//         while let Some(row) = agent_sql::publications::dequeue(&mut *txn, true)
//             .await
//             .unwrap()
//         {
//             let row_draft_id = row.draft_id.clone();
//             let result = handler.process(row, &mut *txn, true).await.unwrap();
//             let pub_id = result.publication_id.into();

//             agent_sql::publications::resolve(pub_id, &result.publication_status, &mut *txn)
//                 .await
//                 .unwrap();

//             match result.publication_status {
//                 JobStatus::Success { .. } => {
//                     let specs = sqlx::query_as!(
//                         LiveSpec,
//                         r#"
//                         select catalog_name as "catalog_name!",
//                                connector_image_name,
//                                connector_image_tag,
//                                reads_from,
//                                writes_to,
//                                spec,
//                                spec_type as "spec_type: String"
//                         from live_specs
//                         where live_specs.last_pub_id = $1::flowid
//                         order by live_specs.catalog_name;"#,
//                         pub_id as Id
//                     )
//                     .fetch_all(&mut *txn)
//                     .await
//                     .unwrap();

//                     results.push(ScenarioResult {
//                         draft_id: row_draft_id,
//                         status: result.publication_status.clone(),
//                         errors: vec![],
//                         live_specs: specs,
//                     })
//                 }
//                 _ => {
//                     let errors = sqlx::query!(
//                         r#"
//                 select draft_id as "draft_id: Id", scope, detail
//                 from draft_errors
//                 where draft_errors.draft_id = $1::flowid;"#,
//                         row_draft_id as Id
//                     )
//                     .fetch_all(&mut *txn)
//                     .await
//                     .unwrap();

//                     let mut formatted_errors: Vec<String> =
//                         errors.into_iter().map(|e| e.detail).collect();
//                     // sort errors so that snapshot results are always consistent
//                     formatted_errors.sort();

//                     results.push(ScenarioResult {
//                         draft_id: row_draft_id,
//                         status: result.publication_status.clone(),
//                         errors: formatted_errors,
//                         live_specs: vec![],
//                     });
//                 }
//             };
//         }

//         results
//     }

//     #[tokio::test]
//     #[serial_test::parallel]
//     async fn test_happy_path() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(include_str!("test_resources/happy_path.sql"))
//             .execute(&mut txn)
//             .await
//             .unwrap();

//         let results = execute_publications(&mut txn).await;

//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 1110000000000000,
//                 status: Success {
//                     linked_materialization_publications: [],
//                 },
//                 errors: [],
//                 live_specs: [
//                     LiveSpec {
//                         catalog_name: "usageB/DerivationA",
//                         connector_image_name: None,
//                         connector_image_tag: None,
//                         reads_from: Some(
//                             [
//                                 "usageB/CollectionA",
//                             ],
//                         ),
//                         writes_to: None,
//                         spec: Some(
//                             Object {
//                                 "derive": Object {
//                                     "transforms": Array [
//                                         Object {
//                                             "name": String("my-name"),
//                                             "shuffle": String("any"),
//                                             "source": String("usageB/CollectionA"),
//                                         },
//                                     ],
//                                     "using": Object {
//                                         "sqlite": Object {},
//                                     },
//                                 },
//                                 "key": Array [
//                                     String("foo"),
//                                 ],
//                                 "schema": Object {},
//                             },
//                         ),
//                         spec_type: Some(
//                             "collection",
//                         ),
//                     },
//                 ],
//             },
//         ]
//         "###);
//     }

//     #[tokio::test]
//     #[serial_test::serial]
//     async fn test_source_capture_validation() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(include_str!("test_resources/linked_materializations.sql"))
//             .execute(&mut txn)
//             .await
//             .unwrap();

//         sqlx::query(r#"
//             with p1 as (
//                 insert into drafts (id, user_id) values ('00:01:02:03:00:00:00:00', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             ),
//             p2 as (
//                 insert into draft_specs (draft_id, spec_type, catalog_name, spec) values
//                 ('00:01:02:03:00:00:00:00', 'materialization', 'acmeCo/from-captureA', '{
//                     "endpoint": {"connector":{"image":"matImage:v1","config":{}}},
//                     "sourceCapture": "acmeCo/captureA/source-happy",
//                     "bindings": [ ]
//                 }'::json),
//                 ('00:01:02:03:00:00:00:00', 'materialization', 'acmeCo/from-wrong-spec-type', '{
//                     "endpoint": {"connector":{"image":"matImage:v1","config":{}}},
//                     "sourceCapture": "acmeCo/matB/other-bindings",
//                     "bindings": [ ]
//                 }'::json),
//                 ('00:01:02:03:00:00:00:00', 'materialization', 'acmeCo/from-non-existant', '{
//                     "endpoint": {"connector":{"image":"matImage:v1","config":{}}},
//                     "sourceCapture": "acmeCo/not/a/real/thing",
//                     "bindings": [ ]
//                 }'::json),
//                 ('00:01:02:03:00:00:00:00', 'materialization', 'acmeCo/from-unauthorized', '{
//                     "endpoint": {"connector":{"image":"matImage:v1","config":{}}},
//                     "sourceCapture": "coyoteCo/not/authorized",
//                     "bindings": [ ]
//                 }'::json),
//                 ('00:01:02:03:00:00:00:00', 'materialization', 'acmeCo/from-invalid-name', '{
//                     "endpoint": {"connector":{"image":"matImage:v1","config":{}}},
//                     "sourceCapture": "no-slash",
//                     "bindings": [ ]
//                 }'::json),
//                 ('00:01:02:03:00:00:00:00', 'materialization', 'acmeCo/from-deleted', '{
//                     "endpoint": {"connector":{"image":"matImage:v1","config":{}}},
//                     "sourceCapture": "acmeCo/deleted/thing",
//                     "bindings": [ ]
//                 }'::json)
//             ),
//             p3 as (
//                 insert into publications (draft_id, user_id) values ('00:01:02:03:00:00:00:00', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             )
//             select 1;
//             "#).execute(&mut txn).await.unwrap();

//         let results = execute_publications(&mut txn).await;
//         insta::assert_debug_snapshot!(results);
//     }

//     #[tokio::test]
//     #[serial_test::parallel]
//     async fn test_incompatible_collections() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(r#"
//             with p1 as (
//               insert into auth.users (id) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120003')
//             ),
//             p2 as (
//               insert into drafts (id, user_id) values
//               ('2220000000000000', '43a18a3e-5a59-11ed-9b6a-0242ac120003')
//             ),
//             p3 as (
//                 insert into live_specs (id, catalog_name, spec, spec_type, last_build_id, last_pub_id) values
//                 ('6000000000000000', 'compat-test/CollectionA', '{"schema": {},"key": ["/foo"]}'::json, 'collection', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('7000000000000000', 'compat-test/CollectionB', '{
//                     "schema": {},
//                     "key": ["/foo"],
//                     "projections": {
//                         "foo": { "location": "/foo", "partition": true }
//                     }
//                 }'::json, 'collection', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb')
//             ),
//             p4 as (
//               insert into draft_specs (id, draft_id, catalog_name, spec, spec_type) values
//               (
//                 '2222000000000000',
//                 '2220000000000000',
//                 'compat-test/CollectionA',
//                 '{ "schema": {}, "key": ["/new_key"] }'::json,
//                 'collection'
//               ),
//               (
//                 '3333000000000000',
//                 '2220000000000000',
//                 'compat-test/CollectionB',
//                 -- missing partition definition, which should be an error
//                 '{ "schema": {}, "key": ["/foo"] }'::json,
//                 'collection'
//               )

//             ),
//             p5 as (
//               insert into publications (id, job_status, user_id, draft_id) values
//               ('2222200000000000', '{"type": "queued"}'::json, '43a18a3e-5a59-11ed-9b6a-0242ac120003', '2220000000000000')
//             ),
//             p6 as (
//               insert into role_grants (subject_role, object_role, capability) values
//               ('compat-test/', 'compat-test/', 'admin')
//             ),
//             p7 as (
//               insert into user_grants (user_id, object_role, capability) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120003', 'compat-test/', 'admin')
//             )
//             select 1;"#,
//         )
//         .execute(&mut txn)
//         .await
//         .unwrap();

//         let results = execute_publications(&mut txn).await;

//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 2220000000000000,
//                 status: BuildFailed {
//                     incompatible_collections: [
//                         IncompatibleCollection {
//                             collection: "compat-test/CollectionA",
//                             requires_recreation: [
//                                 KeyChange,
//                             ],
//                             affected_materializations: [],
//                         },
//                         IncompatibleCollection {
//                             collection: "compat-test/CollectionB",
//                             requires_recreation: [
//                                 PartitionChange,
//                             ],
//                             affected_materializations: [],
//                         },
//                     ],
//                     evolution_id: None,
//                 },
//                 errors: [
//                     "Cannot change key of an established collection from CompositeKey([JsonPointer(\"/foo\")]) to CompositeKey([JsonPointer(\"/new_key\")])",
//                     "Cannot change partitions of an established collection (from [\"foo\"] to [])",
//                 ],
//                 live_specs: [],
//             },
//         ]
//         "###);
//     }

//     #[tokio::test]
//     #[serial_test::parallel]
//     async fn test_forbidden_connector() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(r#"
//             with p1 as (
//               insert into auth.users (id) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             ),
//             p2 as (
//               insert into drafts (id, user_id) values
//               ('1110000000000000', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             ),
//             p3 as (
//               insert into draft_specs (id, draft_id, catalog_name, spec, spec_type) values
//               ('1111000000000000', '1110000000000000', 'usageB/CaptureC', '{
//                   "bindings": [{"target": "usageB/CaptureC", "resource": {"binding": "foo", "syncMode": "incremental"}}],
//                   "endpoint": {"connector": {"image": "forbidden_connector", "config": {}}}
//               }'::json, 'capture')
//             ),
//             p4 as (
//               insert into publications (id, job_status, user_id, draft_id) values
//               ('1111100000000000', '{"type": "queued"}'::json, '43a18a3e-5a59-11ed-9b6a-0242ac120002', '1110000000000000')
//             ),
//             p5 as (
//               insert into role_grants (subject_role, object_role, capability) values
//               ('usageB/', 'usageB/', 'admin')
//             ),
//             p6 as (
//               insert into user_grants (user_id, object_role, capability) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120002', 'usageB/', 'admin')
//             )
//             select 1;
//         "#).execute(&mut txn).await.unwrap();

//         let results = execute_publications(&mut txn).await;

//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 1110000000000000,
//                 status: BuildFailed {
//                     incompatible_collections: [],
//                     evolution_id: None,
//                 },
//                 errors: [
//                     "Forbidden connector image 'forbidden_connector'",
//                 ],
//                 live_specs: [],
//             },
//         ]
//         "###);
//     }

//     #[tokio::test]
//     #[serial_test::parallel]
//     async fn test_allowed_connector() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(r#"
//             with p1 as (
//               insert into auth.users (id) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             ),
//             p2 as (
//               insert into drafts (id, user_id) values
//               ('1110000000000000', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             ),
//             p3 as (
//               insert into draft_specs (id, draft_id, catalog_name, spec, spec_type) values
//               ('1111000000000000', '1110000000000000', 'usageB/CaptureC', '{
//                   "bindings": [{"target": "usageB/CaptureC", "resource": {"binding": "foo", "syncMode": "incremental"}}],
//                   "endpoint": {"connector": {"image": "allowed_connector", "config": {}}}
//               }'::json, 'capture')
//             ),
//             p4 as (
//               insert into publications (id, job_status, user_id, draft_id) values
//               ('1111100000000000', '{"type": "queued"}'::json, '43a18a3e-5a59-11ed-9b6a-0242ac120002', '1110000000000000')
//             ),
//             p5 as (
//               insert into role_grants (subject_role, object_role, capability) values
//               ('usageB/', 'usageB/', 'admin')
//             ),
//             p6 as (
//               insert into user_grants (user_id, object_role, capability) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120002', 'usageB/', 'admin')
//             ),
//             p7 as (
//                 insert into connectors (external_url, image_name, title, short_description, logo_url) values
//                     ('http://example.com', 'allowed_connector', '{"en-US": "foo"}'::json, '{"en-US": "foo"}'::json, '{"en-US": "foo"}'::json)
//             )
//             select 1;
//             "#).execute(&mut txn).await.unwrap();

//         let results = execute_publications(&mut txn).await;

//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 1110000000000000,
//                 status: Success {
//                     linked_materialization_publications: [],
//                 },
//                 errors: [],
//                 live_specs: [
//                     LiveSpec {
//                         catalog_name: "usageB/CaptureC",
//                         connector_image_name: Some(
//                             "allowed_connector",
//                         ),
//                         connector_image_tag: Some(
//                             "",
//                         ),
//                         reads_from: None,
//                         writes_to: Some(
//                             [
//                                 "usageB/CaptureC",
//                             ],
//                         ),
//                         spec: Some(
//                             Object {
//                                 "bindings": Array [
//                                     Object {
//                                         "resource": Object {
//                                             "binding": String("foo"),
//                                             "syncMode": String("incremental"),
//                                         },
//                                         "target": String("usageB/CaptureC"),
//                                     },
//                                 ],
//                                 "endpoint": Object {
//                                     "connector": Object {
//                                         "config": Object {},
//                                         "image": String("allowed_connector"),
//                                     },
//                                 },
//                             },
//                         ),
//                         spec_type: Some(
//                             "capture",
//                         ),
//                     },
//                 ],
//             },
//         ]
//         "###);
//     }

//     #[tokio::test]
//     #[serial_test::serial]
//     async fn test_quota_single_task() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(r#"
//             with p1 as (
//                 insert into live_specs (id, catalog_name, spec, spec_type, last_build_id, last_pub_id) values
//                 ('1000000000000000', 'usageB/CollectionA', '{}'::json, 'collection', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('1100000000000000', 'usageB/CollectionB', '{}'::json, 'collection', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('2000000000000000', 'usageB/CaptureA', '{"endpoint": {},"bindings": []}'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('3000000000000000', 'usageB/CaptureB', '{"endpoint": {},"bindings": []}'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('4000000000000000', 'usageB/CaptureDisabled', '{"shards": {"disable": true}}'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb')
//               ),
//               p2 as (
//                   insert into tenants (tenant, tasks_quota, collections_quota) values
//                   ('usageB/', 2, 2)
//               ),
//               p3 as (
//                 insert into auth.users (id) values
//                 ('43a18a3e-5a59-11ed-9b6a-0242ac120002')
//               ),
//               p4 as (
//                 insert into drafts (id, user_id) values
//                 ('1110000000000000', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//               ),
//               p5 as (
//                 insert into draft_specs (id, draft_id, catalog_name, spec, spec_type) values
//                 ('1111000000000000', '1110000000000000', 'usageB/CaptureC', '{
//                     "bindings": [{"target": "usageB/CaptureC", "resource": {"binding": "foo", "syncMode": "incremental"}}],
//                     "endpoint": {"connector": {"image": "foo", "config": {}}}
//                 }'::json, 'capture'),
//                 -- This collection should be pruned, and thus _not_ count against the quota of 2 collections.
//                 ('1111200000000000', '1110000000000000', 'usageB/UnboundCollection', '{
//                     "schema": {},
//                     "key": ["/id"]
//                 }'::json, 'collection')
//               ),
//               p6 as (
//                 insert into publications (id, job_status, user_id, draft_id) values
//                 ('1111100000000000', '{"type": "queued"}'::json, '43a18a3e-5a59-11ed-9b6a-0242ac120002', '1110000000000000')
//               ),
//               p7 as (
//                 insert into role_grants (subject_role, object_role, capability) values
//                 ('usageB/', 'usageB/', 'admin')
//               ),
//               p8 as (
//                 insert into user_grants (user_id, object_role, capability) values
//                 ('43a18a3e-5a59-11ed-9b6a-0242ac120002', 'usageB/', 'admin')
//               )
//               select 1;
//               "#).execute(&mut txn).await.unwrap();

//         let results = execute_publications(&mut txn).await;

//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 1110000000000000,
//                 status: BuildFailed {
//                     incompatible_collections: [],
//                     evolution_id: None,
//                 },
//                 errors: [
//                     "Request to add 1 task(s) would exceed tenant 'usageB/' quota of 2. 2 are currently in use.",
//                 ],
//                 live_specs: [],
//             },
//         ]
//         "###);
//     }

//     #[tokio::test]
//     #[serial_test::serial]
//     async fn test_quota_derivations() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(r#"
//             with p1 as (
//                 insert into live_specs (id, catalog_name, spec, spec_type, last_build_id, last_pub_id) values
//                 ('1000000000000000', 'usageB/CollectionA', '{}'::json, 'collection', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('1100000000000000', 'usageB/CollectionB', '{}'::json, 'collection', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('2000000000000000', 'usageB/CaptureA', '{"endpoint": {},"bindings": []}'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('3000000000000000', 'usageB/CaptureB', '{"endpoint": {},"bindings": []}'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('4000000000000000', 'usageB/CaptureDisabled', '{"shards": {"disable": true}}'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb')
//               ),
//               p2 as (
//                   insert into tenants (tenant, tasks_quota, collections_quota) values
//                   ('usageB/', 2, 2)
//               ),
//               p3 as (
//                 insert into auth.users (id) values
//                 ('43a18a3e-5a59-11ed-9b6a-0242ac120002')
//               ),
//               p4 as (
//                 insert into drafts (id, user_id) values
//                 ('1120000000000000', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//               ),
//               p5 as (
//                 insert into draft_specs (id, draft_id, catalog_name, spec, spec_type) values
//                 ('1112000000000000', '1120000000000000', 'usageB/DerivationA', '{
//                   "schema": {},
//                   "key": ["foo"],
//                   "derive": {
//                     "using":{"typescript": {"module": "foo.ts"}},
//                     "transforms": [{"source":"usageB/CollectionA","shuffle":"any","name":"foo"}]
//                   }
//                 }'::json, 'collection')
//               ),
//               p6 as (
//                 insert into publications (id, job_status, user_id, draft_id) values
//                 ('1111200000000000', '{"type": "queued"}'::json, '43a18a3e-5a59-11ed-9b6a-0242ac120002', '1120000000000000')
//               ),
//               p7 as (
//                 insert into role_grants (subject_role, object_role, capability) values
//                 ('usageB/', 'usageB/', 'admin')
//               ),
//               p8 as (
//                 insert into user_grants (user_id, object_role, capability) values
//                 ('43a18a3e-5a59-11ed-9b6a-0242ac120002', 'usageB/', 'admin')
//               )
//               select 1;
//               "#).execute(&mut txn).await.unwrap();

//         let results = execute_publications(&mut txn).await;

//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 1120000000000000,
//                 status: BuildFailed {
//                     incompatible_collections: [],
//                     evolution_id: None,
//                 },
//                 errors: [
//                     "Request to add 1 collections(s) would exceed tenant 'usageB/' quota of 2. 2 are currently in use.",
//                     "Request to add 1 task(s) would exceed tenant 'usageB/' quota of 2. 2 are currently in use.",
//                 ],
//                 live_specs: [],
//             },
//         ]
//         "###);
//     }

//     // Testing that we can disable tasks to reduce usage when at quota
//     #[tokio::test]
//     #[serial_test::parallel]
//     async fn test_disable_when_over_quota() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(r#"
//             with p1 as (
//                 insert into live_specs (id, catalog_name, spec, spec_type, last_build_id, last_pub_id) values
//                 ('a100000000000000', 'usageC/CollectionA', '{"schema": {}, "key": ["foo"]}'::json, 'collection', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('a200000000000000', 'usageC/CaptureA', '{
//                     "bindings": [{"target": "usageC/CollectionA", "resource": {"binding": "foo", "syncMode": "incremental"}}],
//                     "endpoint": {"connector": {"image": "foo", "config": {}}}
//                 }'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb'),
//                 ('a300000000000000', 'usageC/CaptureB', '{
//                     "bindings": [{"target": "usageC/CollectionA", "resource": {"binding": "foo", "syncMode": "incremental"}}],
//                     "endpoint": {"connector": {"image": "foo", "config": {}}}
//                 }'::json, 'capture', 'bbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbb')
//               ),
//               p2 as (
//                   insert into tenants (tenant, tasks_quota, collections_quota) values
//                   ('usageC/', 1, 1)
//               ),
//               p3 as (
//                 insert into auth.users (id) values
//                 ('43a18a3e-5a59-11ed-9b6a-0242ac120002')
//               ),
//               p4 as (
//                 insert into drafts (id, user_id) values
//                 ('1130000000000000', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//               ),
//               p5 as (
//                 insert into draft_specs (id, draft_id, catalog_name, spec, spec_type) values
//                 ('1113000000000000', '1130000000000000', 'usageC/CaptureA', '{
//                     "bindings": [{"target": "usageC/CollectionA", "resource": {"binding": "foo", "syncMode": "incremental"}}],
//                     "endpoint": {"connector": {"image": "foo", "config": {}}},
//                     "shards": {"disable": true}
//                 }'::json, 'capture')
//               ),
//               p6 as (
//                 insert into publications (id, job_status, user_id, draft_id) values
//                 ('1111300000000000', '{"type": "queued"}'::json, '43a18a3e-5a59-11ed-9b6a-0242ac120002', '1130000000000000')
//               ),
//               p7 as (
//                 insert into role_grants (subject_role, object_role, capability) values
//                 ('usageC/', 'usageC/', 'admin')
//               ),
//               p8 as (
//                 insert into user_grants (user_id, object_role, capability) values
//                 ('43a18a3e-5a59-11ed-9b6a-0242ac120002', 'usageC/', 'admin')
//               ),
//               p9 as (
//                 insert into connectors (external_url, image_name, title, short_description, logo_url) values
//                     ('http://example.com', 'foo', '{"en-US": "foo"}'::json, '{"en-US": "foo"}'::json, '{"en-US": "foo"}'::json)
//             )
//               select 1;
//               "#).execute(&mut txn).await.unwrap();

//         let results = execute_publications(&mut txn).await;

//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 1130000000000000,
//                 status: Success {
//                     linked_materialization_publications: [],
//                 },
//                 errors: [],
//                 live_specs: [
//                     LiveSpec {
//                         catalog_name: "usageC/CaptureA",
//                         connector_image_name: Some(
//                             "foo",
//                         ),
//                         connector_image_tag: Some(
//                             "",
//                         ),
//                         reads_from: None,
//                         writes_to: Some(
//                             [
//                                 "usageC/CollectionA",
//                             ],
//                         ),
//                         spec: Some(
//                             Object {
//                                 "bindings": Array [
//                                     Object {
//                                         "resource": Object {
//                                             "binding": String("foo"),
//                                             "syncMode": String("incremental"),
//                                         },
//                                         "target": String("usageC/CollectionA"),
//                                     },
//                                 ],
//                                 "endpoint": Object {
//                                     "connector": Object {
//                                         "config": Object {},
//                                         "image": String("foo"),
//                                     },
//                                 },
//                                 "shards": Object {
//                                     "disable": Bool(true),
//                                 },
//                             },
//                         ),
//                         spec_type: Some(
//                             "capture",
//                         ),
//                     },
//                 ],
//             },
//         ]
//         "###);
//     }

//     #[tokio::test]
//     #[serial_test::parallel]
//     async fn test_prune_unbound_collections_publication() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(include_str!("test_resources/prune_collections.sql"))
//             .execute(&mut txn)
//             .await
//             .unwrap();

//         let results = execute_publications(&mut txn).await;
//         insta::assert_debug_snapshot!(results);
//     }

//     #[tokio::test]
//     #[serial_test::parallel]
//     async fn test_publish_error_when_all_collections_are_pruned() {
//         let mut conn = sqlx::postgres::PgConnection::connect(&FIXED_DATABASE_URL)
//             .await
//             .unwrap();
//         let mut txn = conn.begin().await.unwrap();

//         sqlx::query(r#"
//           with setup_user as (
//               insert into auth.users (id) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             ),
//             setup_user_grants as (
//               insert into user_grants (user_id, object_role, capability) values
//               ('43a18a3e-5a59-11ed-9b6a-0242ac120002', 'acmeCo/', 'admin')
//             ),
//             setup_role_grants as (
//               insert into role_grants (subject_role, object_role, capability) values
//               ('acmeCo/', 'acmeCo/', 'admin')
//             ),
//             setup_draft as (
//               insert into drafts (id, user_id) values
//               ('1111000000000000', '43a18a3e-5a59-11ed-9b6a-0242ac120002')
//             ),
//             setup_draft_specs as (
//               insert into draft_specs (id, draft_id, catalog_name, spec, spec_type) values
//               ('1111111111111111', '1111000000000000', 'acmeCo/should_prune', '{
//                 "schema": { "type": "object" },
//                 "key": ["/id"]
//               }', 'collection')
//             ),
//             setup_publications as (
//               insert into publications (id, job_status, user_id, draft_id) values
//               ('1111100000000000', '{"type": "queued"}'::json, '43a18a3e-5a59-11ed-9b6a-0242ac120002', '1111000000000000')
//             )
//             select 1;
//             "#)
//             .execute(&mut txn)
//             .await
//             .unwrap();

//         let results = execute_publications(&mut txn).await;
//         insta::assert_debug_snapshot!(results, @r###"
//         [
//             ScenarioResult {
//                 draft_id: 1111000000000000,
//                 status: EmptyDraft,
//                 errors: [],
//                 live_specs: [],
//             },
//         ]
//         "###);
//     }
// }
