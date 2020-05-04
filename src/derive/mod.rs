mod error;
pub use error::Error;
pub type Result<T> = std::result::Result<T, Error>;

pub mod executor;
mod nodejs;
pub mod state;

mod service;
pub use service::build as build_service;

mod framing;
pub use framing::{data_into_record_batches, RecordBatch};

pub use nodejs::Service as NodeJsHandle;
