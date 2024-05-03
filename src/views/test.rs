use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct TestResponse {
    pub test: String,
}

impl TestResponse {
    #[must_use]
    pub fn new() -> Self {
        Self {
            test: "aaaa".to_string(),
        }
    }
}
