#![allow(clippy::unused_async)]
use loco_rs::prelude::*;

use crate::{views::test::TestResponse};
pub async fn echo(req_body: String) -> String {
    req_body
}

pub async fn hello(
    State(_ctx): State<AppContext>
) -> Result<Response> {
    // do something with context (database, etc)
    format::json(TestResponse::new())
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("api/guide")
        .add("/", get(hello))
        .add("/echo", post(echo))
}