use std::collections::BTreeSet;

use models::{Collection, TestStep};
use serde_json::value::RawValue;

// TODO: consider moving `AnySpec` to a different crate
#[derive(Debug, Clone, serde::Serialize)]
pub enum AnySpec {
    Capture(models::CaptureDef),
    Collection(models::CollectionDef),
    Materialization(models::MaterializationDef),
    Test(models::TestDef),
}

impl AnySpec {
    pub fn deserialize(
        catalog_type: models::CatalogType,
        json: &RawValue,
    ) -> anyhow::Result<AnySpec> {
        match catalog_type {
            models::CatalogType::Capture => Ok(AnySpec::Capture(serde_json::from_str(json.get())?)),
            models::CatalogType::Collection => {
                Ok(AnySpec::Collection(serde_json::from_str(json.get())?))
            }
            models::CatalogType::Materialization => {
                Ok(AnySpec::Materialization(serde_json::from_str(json.get())?))
            }
            models::CatalogType::Test => Ok(AnySpec::Test(serde_json::from_str(json.get())?)),
        }
    }

    pub fn catalog_type(&self) -> models::CatalogType {
        match self {
            AnySpec::Capture(_) => models::CatalogType::Capture,
            AnySpec::Collection(_) => models::CatalogType::Collection,
            AnySpec::Materialization(_) => models::CatalogType::Materialization,
            AnySpec::Test(_) => models::CatalogType::Test,
        }
    }
}

impl From<models::CaptureDef> for AnySpec {
    fn from(value: models::CaptureDef) -> Self {
        AnySpec::Capture(value)
    }
}
impl From<models::CollectionDef> for AnySpec {
    fn from(value: models::CollectionDef) -> Self {
        AnySpec::Collection(value)
    }
}
impl From<models::MaterializationDef> for AnySpec {
    fn from(value: models::MaterializationDef) -> Self {
        AnySpec::Materialization(value)
    }
}
impl From<models::TestDef> for AnySpec {
    fn from(value: models::TestDef) -> Self {
        AnySpec::Test(value)
    }
}

pub trait SpecExt {
    fn is_enabled(&self) -> bool;

    fn uses_any(&self, collections: &BTreeSet<Collection>) -> bool;

    fn consumes(&self, collection_name: &Collection) -> bool;
    fn produces(&self, collection_name: &Collection) -> bool;

    fn reads_from(&self) -> BTreeSet<Collection> {
        Default::default()
    }

    fn writes_to(&self) -> BTreeSet<Collection> {
        Default::default()
    }
}

impl SpecExt for AnySpec {
    fn consumes(&self, collection_name: &Collection) -> bool {
        match self {
            AnySpec::Capture(_) => false,
            AnySpec::Collection(c) => c.consumes(collection_name),
            AnySpec::Materialization(m) => m.consumes(collection_name),
            AnySpec::Test(t) => t.consumes(collection_name),
        }
    }

    fn produces(&self, collection_name: &Collection) -> bool {
        match self {
            AnySpec::Capture(c) => c.produces(collection_name),
            AnySpec::Collection(_) => false,
            AnySpec::Materialization(_) => false,
            AnySpec::Test(t) => t.produces(collection_name),
        }
    }

    fn reads_from(&self) -> BTreeSet<Collection> {
        match self {
            AnySpec::Capture(_) => BTreeSet::new(),
            AnySpec::Collection(c) => c.reads_from(),
            AnySpec::Materialization(m) => m.reads_from(),
            AnySpec::Test(t) => t.reads_from(),
        }
    }

    fn writes_to(&self) -> BTreeSet<Collection> {
        match self {
            AnySpec::Capture(c) => c.writes_to(),
            AnySpec::Collection(_) => BTreeSet::new(),
            AnySpec::Materialization(_) => BTreeSet::new(),
            AnySpec::Test(t) => t.writes_to(),
        }
    }

    fn is_enabled(&self) -> bool {
        match self {
            AnySpec::Capture(c) => c.is_enabled(),
            AnySpec::Collection(c) => c.is_enabled(),
            AnySpec::Materialization(m) => m.is_enabled(),
            AnySpec::Test(t) => t.is_enabled(),
        }
    }

    fn uses_any(&self, collections: &BTreeSet<Collection>) -> bool {
        match self {
            AnySpec::Capture(c) => c.uses_any(collections),
            AnySpec::Collection(c) => c.uses_any(collections),
            AnySpec::Materialization(m) => m.uses_any(collections),
            AnySpec::Test(t) => t.uses_any(collections),
        }
    }
}

impl SpecExt for models::CaptureDef {
    fn consumes(&self, _: &Collection) -> bool {
        false
    }

    fn produces(&self, collection_name: &Collection) -> bool {
        self.bindings
            .iter()
            .any(|b| !b.disable && b.target == *collection_name)
    }

    fn writes_to(&self) -> BTreeSet<Collection> {
        self.bindings
            .iter()
            .filter(|b| !b.disable)
            .map(|b| b.target.clone())
            .collect()
    }

    fn is_enabled(&self) -> bool {
        !self.shards.disable
    }

    fn uses_any(&self, collections: &BTreeSet<Collection>) -> bool {
        self.bindings
            .iter()
            .any(|b| !b.disable && collections.contains(&b.target))
    }
}

impl SpecExt for models::MaterializationDef {
    fn uses_any(&self, collections: &BTreeSet<Collection>) -> bool {
        self.bindings
            .iter()
            .any(|b| !b.disable && collections.contains(b.source.collection()))
    }

    fn consumes(&self, collection_name: &Collection) -> bool {
        self.bindings
            .iter()
            .any(|b| !b.disable && b.source.collection() == collection_name)
    }

    fn produces(&self, _: &Collection) -> bool {
        false
    }

    fn reads_from(&self) -> BTreeSet<Collection> {
        self.bindings
            .iter()
            .filter(|b| !b.disable)
            .map(|b| b.source.collection().clone())
            .collect()
    }

    fn is_enabled(&self) -> bool {
        !self.shards.disable
    }
}

impl SpecExt for models::CollectionDef {
    fn consumes(&self, collection_name: &Collection) -> bool {
        let Some(derive) = &self.derive else {
            return false;
        };
        derive
            .transforms
            .iter()
            .any(|t| !t.disable && t.source.collection() == collection_name)
    }

    fn produces(&self, _: &Collection) -> bool {
        false
    }

    fn reads_from(&self) -> BTreeSet<Collection> {
        self.derive
            .iter()
            .flat_map(|derive| {
                derive
                    .transforms
                    .iter()
                    .filter(|b| !b.disable)
                    .map(|b| b.source.collection().clone())
            })
            .collect()
    }

    fn is_enabled(&self) -> bool {
        self.derive
            .as_ref()
            .map(|d| !d.shards.disable)
            .unwrap_or(true)
    }

    fn uses_any(&self, collections: &BTreeSet<Collection>) -> bool {
        self.derive
            .iter()
            .flat_map(|derive| {
                derive
                    .transforms
                    .iter()
                    .filter(|b| !b.disable)
                    .map(|b| b.source.collection())
            })
            .any(|c| collections.contains(c))
    }
}

impl SpecExt for models::TestDef {
    fn consumes(&self, collection_name: &Collection) -> bool {
        self.steps.iter().any(|step| match step {
            TestStep::Verify(v) => v.collection.collection() == collection_name,
            _ => false,
        })
    }

    fn produces(&self, collection_name: &Collection) -> bool {
        self.steps.iter().any(|step| match step {
            TestStep::Ingest(i) => i.collection == *collection_name,
            _ => false,
        })
    }

    fn reads_from(&self) -> BTreeSet<Collection> {
        Default::default()
    }

    fn writes_to(&self) -> BTreeSet<Collection> {
        Default::default()
    }

    fn is_enabled(&self) -> bool {
        true // there's no way to disable a test
    }

    fn uses_any(&self, collections: &BTreeSet<Collection>) -> bool {
        self.steps.iter().any(|step| match step {
            TestStep::Verify(v) => collections.contains(&v.collection.collection()),
            _ => false,
        })
    }
}
