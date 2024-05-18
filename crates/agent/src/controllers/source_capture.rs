use serde::{Deserialize, Serialize};
use tables::SpecExt;

use crate::controlplane::{ConnectorSpec, ControlPlane};

use super::{publication_status::PublicationStatus, ControllerState, NextRun};

#[derive(Debug, Clone, Serialize, Deserialize)]
enum Action {
    Added(Vec<String>),
    Removed(Vec<String>),
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct SourceCaptureStatus {
    up_to_date: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    last: Option<Action>,
}

impl SourceCaptureStatus {
    pub async fn update<C: ControlPlane>(
        &mut self,
        state: &ControllerState,
        control_plane: &mut C,
        model: &models::MaterializationDef,
        pub_status: &mut PublicationStatus,
    ) -> anyhow::Result<Option<NextRun>> {
        let Some(capture) = &model.source_capture else {
            anyhow::bail!("source_capture is not defined");
        };

        let maybe_capture_spec = control_plane.get_capture(capture.clone()).await?;
        let Some(capture_spec) = maybe_capture_spec else {
            on_source_capture_deleted(capture, state, pub_status, control_plane, model).await?;
            return Ok(None);
        };

        // Check the materialization bindings against those of the source capture and see if we need to update
        let models::MaterializationEndpoint::Connector(config) = &model.endpoint else {
            anyhow::bail!(
                "unexpected materialization endpoint type, only image connectors are supported"
            );
        };
        let connector_spec = control_plane
            .get_connector_spec(config.image.clone())
            .await?;
        let collection_name_pointer = crate::resource_configs::pointer_for_schema(
            connector_spec.resource_config_schema.get(),
        )?;

        // The set of collection names of the capture bindings.
        // Note that disabled bindings are not included here.
        let mut bindings_to_add = capture_spec.writes_to();

        // Remove any that are already present in the materialization, regardless of whether they are
        // disabled in the materialization. The goal is to preserve any changes that users have made to
        // the materialization bindings, so we only ever add new bindings to the materialization. We
        // don't remove or disable materialization bindings, as long as their source collections continue
        // to exist.
        for mat_binding in materialization.bindings.iter() {
            bindings_to_add.remove(mat_binding.source.collection().as_str());
        }
        let changed = bindings_to_add.len();

        if changed > 0 {
            // TODO: get a draft and update the materialization spec
            let n_added = update_linked_materialization(collection_name_pointer, capture_spec, materialization)
        }
    }
}

async fn update_linked_materialization(
    resource_collection_name_ptr: doc::Pointer,
    capture_spec: &models::CaptureDef,
    materialization: &mut MaterializationDef,
) -> anyhow::Result<usize> {

    for collection_name in bindings_to_add {
        let mut resource_spec = serde_json::json!({});
        crate::resource_configs::update_materialization_resource_spec(
            &mut resource_spec,
            &resource_collection_name_ptr,
            &collection_name,
        )?;

        let binding = MaterializationBinding {
            resource: models::RawValue::from_value(&resource_spec),
            source: Source::Collection(Collection::new(collection_name)),
            disable: false,
            fields: Default::default(),
            priority: Default::default(),
            backfill: 0,
        };
        materialization.bindings.push(binding);
    }

    Ok(changed)
}

async fn on_source_capture_deleted(
    source_capture: &models::Capture,
    state: &ControllerState,
    pub_status: &mut PublicationStatus,
    control_plane: &mut C,
    model: &models::MaterializationDef,
) -> Result<(), anyhow::Error> {
    let materialization = models::Materialization::new(&state.catalog_name);
    let draft = pub_status
        .pending_draft(
            format!("disabling materialization and removing sourceCapture '{source_capture}' because the capture was deleted"),
            control_plane,
        )
        .await?;
    let draft_row = draft
        .materializations
        .get_or_insert_with(&materialization, || tables::DraftMaterialization {
            materialization,
            scope: tables::synthetic_scope(
                models::CatalogType::Materialization,
                &state.catalog_name,
            ),
            expect_pub_id: Some(state.last_pub_id),
            model: Some(model.clone()),
        });
    let draft_model = draft_row.model.as_mut().unwrap();
    draft_model.source_capture = None;
    draft_model.shards.disable = true;
    Ok(())
}
