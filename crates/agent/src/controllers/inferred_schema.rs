use std::collections::{BTreeMap, BTreeSet};

use crate::controllers::publication_status::PublicationStatus;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::types::Uuid;
use tables::{DraftRow, EitherOrBoth, SpecExt};

use super::{ControlPlane, ControllerState, NextRun};

#[derive(Debug, Serialize, Deserialize, Clone, Default)]
pub struct InferredSchemaStatus {
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub schema_last_updated: Option<DateTime<Utc>>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub schema_md5: Option<String>,
}

impl InferredSchemaStatus {
    pub async fn update<C: ControlPlane>(
        &mut self,
        state: &ControllerState,
        control_plane: &mut C,
        collection_def: &models::CollectionDef,
        publication_status: &mut PublicationStatus,
    ) -> anyhow::Result<Option<NextRun>> {
        let collection_name = models::Collection::new(&state.catalog_name);

        if !uses_inferred_schema(collection_def) {
            self.schema_md5 = None;
            return Ok(None);
        }

        let maybe_inferred_schema = control_plane
            .get_inferred_schema(collection_name.clone())
            .await?;

        if let Some(inferred_schema) = maybe_inferred_schema {
            let tables::InferredSchema {
                collection_name,
                schema,
                md5,
            } = inferred_schema;

            if self.schema_md5.as_ref() != Some(&md5) {
                tracing::info!(
                    %collection_name,
                    prev_md5 = ?self.schema_md5,
                    new_md5 = ?md5,
                    "updating inferred schema"
                );
                let publication = publication_status
                    .pending_draft("updating inferred schema".to_string(), control_plane);
                let draft_row =
                    publication
                        .draft
                        .collections
                        .get_or_insert_with(&collection_name, || tables::DraftCollection {
                            collection: collection_name.clone(),
                            scope: tables::synthetic_scope(
                                models::CatalogType::Collection,
                                &collection_name,
                            ),
                            expect_pub_id: Some(state.last_pub_id),
                            model: Some(collection_def.clone()),
                        });
                update_inferred_schema(draft_row, &schema)?;

                let pub_result = publication_status
                    .finish_pending_publication(state, control_plane)
                    .await?;

                if pub_result.publication_status.is_success() {
                    self.schema_md5 = Some(md5);
                    self.schema_last_updated = Some(pub_result.started_at);
                } else {
                    anyhow::bail!(
                        "Failed to publish inferred schema: {:?}",
                        pub_result.publication_status
                    );
                }
            }
        } else {
            tracing::debug!(%collection_name, "No inferred schema available yet");
        }

        let next_run = Some(self.next_run(state.updated_at, control_plane.current_time()));
        Ok(next_run)
    }

    fn next_run(&self, last_update: DateTime<Utc>, now: DateTime<Utc>) -> NextRun {
        // The idea here is to check frequently if there isn't an inferred schema at all yet,
        // so we can quickly start materializing some data. But after it works at least once,
        // then we want to use a longer duration in order to coalesce more schema updates into
        // each publication to prevent undue churn.
        // TODO: we might want to account for `last_backfill` times here
        let min_backoff_minutes = if self.schema_md5.is_none() {
            1i64
        } else {
            10i64
        };

        let start_time = self.schema_last_updated.unwrap_or(last_update);
        let after_minutes = now
            .signed_duration_since(start_time)
            .num_minutes()
            .max(min_backoff_minutes)
            .min(90);

        NextRun::after_minutes(after_minutes as u32).with_jitter_percent(25)
    }
}

fn update_inferred_schema(
    collection: &mut tables::DraftCollection,
    inferred_schema: &models::Schema,
) -> anyhow::Result<()> {
    let Some(model) = collection.model.as_mut() else {
        anyhow::bail!("missing model to update inferred schema");
    };
    let new_read_schema = {
        let Some(read_schema) = model.read_schema.as_ref() else {
            anyhow::bail!("model is missing read schema");
        };
        let Some(write_schema) = model.write_schema.as_ref() else {
            anyhow::bail!("model is missing write schema");
        };
        models::Schema::extend_read_bundle(read_schema, write_schema, Some(inferred_schema))
    };

    model.read_schema = Some(new_read_schema);
    Ok(())
}

pub fn uses_inferred_schema(collection: &models::CollectionDef) -> bool {
    // TODO: we might want to change how we determine whether a collection uses an inferred schema
    collection
        .read_schema
        .as_ref()
        .map(models::Schema::references_inferred_schema)
        .unwrap_or(false)
}

#[cfg(test)]
mod test {
    use crate::controllers::test_util::{self, Harness, TestPublication};
    use serde_json::{json, Value};

    use super::*;

    // #[test]
    // fn happy_path_test() {
    //     let mut harness = Harness::new();

    //     let initial_draft = test_util::draft_of(json!({
    //         "captures": {
    //             "a/cap": mock_capture_spec(&["acmeCo/a"]),
    //         },
    //         "collections": {
    //             "a/a": mock_collection_spec(true),
    //             "a/d": mock_derivation_spec(true, &["a/a"]),
    //             // f should be ignored because it doesn't use schema inference
    //             "a/f": mock_collection_spec(false),
    //         },
    //         "materializations": {
    //             "a/m1": mock_materialization_spec(&["a/a", "a/d"]),
    //             "a/m2": mock_materialization_spec(&["a/a"]),
    //             "a/m3": mock_materialization_spec(&["a/d"]),
    //         }
    //     }));

    //     let (info, updates) = harness.observe_publication(TestPublication::of_draft(initial_draft));
    //     // Expect to see updates for both "a/a" and "a/d" that initialize new controller states
    //     // for those collections.
    //     insta::with_settings!({ info => &info }, {
    //         insta::assert_json_snapshot!("initial-updates", &updates);
    //     });

    //     // The inferred schema of a/a gets updated.
    //     harness.update_inferred_schema("a/a", 1);

    //     // Technically, either a/a or a/d could be run next in the real world, since they both have
    //     // identical next_run values. Time is deterministic in the test environment, though, and the
    //     // harness always selects controllers in lexicographical order.
    //     let (info, update, mut publications) = harness.next_run_update();
    //     assert_eq!(info.catalog_name, "a/a");
    //     // Expect to see that a publication of a/a was created in response to the schema being updated
    //     insta::with_settings!({ info => &info }, {
    //         insta::assert_json_snapshot!("update-after-a-schema-updated-1", (update, &publications));
    //     });

    //     // Now the controller observes the successful completion of that publication
    //     let publication = publications.pop().unwrap();
    //     let (info, updates) = harness.observe_publication(publication);

    //     // Expect to see the successful publication in the history of a/a
    //     insta::with_settings!({ info => &info }, {
    //         insta::assert_json_snapshot!("observe-pub-a-1-completed", &updates);
    //     });

    //     // Now the inferred schema for a/d gets updated
    //     harness.update_inferred_schema("a/d", 1);

    //     let (info, update, mut publications) = harness.next_run_update();

    //     assert_eq!(info.catalog_name, "a/d");
    //     // Expect to see that a publication of a/d was created in response to the schema being updated
    //     insta::with_settings!({ info => &info }, {
    //         insta::assert_json_snapshot!("update-after-d-schema-updated-1", (update, &publications));
    //     });

    //     let (info, updates) = harness.observe_publication(publications.pop().unwrap());

    //     // Expect to see the successful publication in the history of a/d
    //     insta::with_settings!({ info => &info }, {
    //         insta::assert_json_snapshot!("observe-pub-d-1-completed", &updates);
    //     });

    //     // Assert that the next update runs don't publish anthing, since the inferred schemas haven't been updated
    //     let (info, update, publications) = harness.next_run_update();
    //     assert_eq!(info.catalog_name, "a/a");
    //     assert!(publications.is_empty());
    //     assert!(update.next_run.is_some());

    //     let (info, update, publications) = harness.next_run_update();
    //     assert_eq!(info.catalog_name, "a/d");
    //     assert!(publications.is_empty());
    //     assert!(update.next_run.is_some());
    // }

    fn mock_derivation_spec(use_inferred: bool, sources: &[&str]) -> Value {
        let mut collection = mock_collection_spec(use_inferred);

        let transforms = sources
            .iter()
            .map(|name| {
                json!({
                    "name": name, "source": name, "lambda": "shelect shtar"
                })
            })
            .collect::<Vec<_>>();
        let derive = json!({
            "using": {
                "sqlite": {}
            },
            "transforms": transforms,
        });
        collection
            .as_object_mut()
            .unwrap()
            .insert("derive".to_owned(), derive);
        collection
    }

    fn mock_collection_spec(uses_inferred: bool) -> Value {
        let read_schema = if uses_inferred {
            json!({
                "allOf": [
                    { "$ref": "flow://inferred-schema" },
                    { "$ref": "flow://write-schema" },
                ]
            })
        } else {
            json!({"type": "object"})
        };
        json!({
            "key": ["/id"],
            "writeSchema": {
                "type": "object",
                "properties": {
                    "id": {"type": "string"}
                }
            },
            "readSchema": read_schema,
        })
    }

    fn mock_capture_spec(bound_collections: &[&str]) -> Value {
        let bindings = bound_collections
            .into_iter()
            .map(|collection| {
                json!({
                    "resource": { "thing": collection },
                    "target": collection,
                })
            })
            .collect();
        mock_connector_task(bindings)
    }

    fn mock_materialization_spec(bound_collections: &[&str]) -> Value {
        let bindings = bound_collections
            .into_iter()
            .map(|collection| {
                json!({
                    "resource": { "thing": collection },
                    "source": collection,
                })
            })
            .collect();
        mock_connector_task(bindings)
    }

    fn mock_connector_task(bindings: Vec<Value>) -> Value {
        serde_json::json!({
            "endpoint": {
                "connector": {
                    "image": "foo:test",
                    "config": {},
                }
            },
            "bindings": bindings,
        })
    }
}
