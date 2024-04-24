use serde::{Deserialize, Serialize};

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
