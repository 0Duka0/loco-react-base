// src/controllers/home.rs
#![allow(clippy::unused_async)]
use loco_rs::prelude::*;

// _ctx contains your database connection, as well as other app resource that you'll need
pub async fn hello(State(_ctx): State<AppContext>) -> Result<Response> {
    format::text("ola, mundo")
}

pub fn routes() -> Routes {
    Routes::new().prefix("api/home").add("/hello", get(hello))
}