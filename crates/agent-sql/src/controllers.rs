use crate::{CatalogType, Id, TextJson};
use chrono::prelude::*;
use serde::Serialize;
use serde_json::value::RawValue;
use sqlx::types::Uuid;
use std::fmt::Debug;

#[derive(Debug)]
pub struct ControllerJob {
    pub catalog_name: String,
    pub last_pub_id: Id,
    pub live_spec: TextJson<Box<RawValue>>,
    pub spec_type: CatalogType,
    pub controller_next_run: Option<DateTime<Utc>>,
    pub controller_version: i32,
    pub updated_at: DateTime<Utc>,
    pub logs_token: Uuid,
    pub status: TextJson<Box<RawValue>>,
    pub failures: i32,
    pub error: Option<String>,
}

#[tracing::instrument(level = "debug", skip(txn))]
pub async fn dequeue(
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    controller_version: i32,
) -> sqlx::Result<Option<ControllerJob>> {
    // TODO: It ought to be possible for the live_specs queries to use an index-only scan
    sqlx::query_as!(
        ControllerJob,
        r#"with needs_periodic(catalog_name) as (
            select catalog_name
            from live_specs
            where controller_next_run <= now()
                and spec is not null
            order by controller_next_run asc
        ),
        needs_upgrade(catalog_name) as (
            select catalog_name
            from controller_jobs
            where controller_version < $1
        ),
        next(catalog_name) as (
            select catalog_name
            from needs_periodic
            union
            select catalog_name
            from needs_upgrade
        )
        select
            next.catalog_name as "catalog_name!: String",
            ls.controller_next_run,
            ls.last_pub_id as "last_pub_id: Id",
            ls.spec as "live_spec!: TextJson<Box<RawValue>>",
            ls.spec_type as "spec_type!: CatalogType",
            cj.controller_version as "controller_version: i32",
            cj.updated_at,
            cj.logs_token,
            cj.status as "status: TextJson<Box<RawValue>>",
            cj.failures,
            cj.error
        from next
        join controller_jobs cj on next.catalog_name = cj.catalog_name
        join live_specs ls on next.catalog_name = ls.catalog_name and ls.spec is not null
        limit 1
        for update of cj skip locked;
        "#,
        controller_version as i32,
    )
    .fetch_optional(txn)
    .await
}

#[tracing::instrument(level = "debug", skip(txn, status, controller_version))]
pub async fn update<S: Serialize + Send + Sync + Debug>(
    txn: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    catalog_name: &str,
    controller_version: i32,
    status: S,
    failures: i32,
    error: Option<&str>,
    expect_next_run: Option<DateTime<Utc>>,
    set_next_run: Option<DateTime<Utc>>,
) -> sqlx::Result<()> {
    sqlx::query!(
        r#"
        with update_next_run as (
            update live_specs
            set controller_next_run = case
                when controller_next_run is not distinct from $6 then $7
                else controller_next_run end
            where catalog_name = $1
        )
        insert into controller_jobs(catalog_name, controller_version, status, failures, error)
        values ($1, $2, $3, $4, $5)
        on conflict (catalog_name) do update set
            controller_version = $2,
            status = $3,
            failures = $4,
            error = $5,
            updated_at = now()
        where controller_jobs.catalog_name = $1;
        "#,
        catalog_name,
        controller_version as i32,
        TextJson(status) as TextJson<S>,
        failures,
        error,
        expect_next_run,
        set_next_run,
    )
    .execute(txn)
    .await?;
    Ok(())
}

// #[tracing::instrument(level = "debug", err, skip_all, fields(n_rows = catalog_names.len()))]
// pub async fn upsert_many(
//     txn: &mut sqlx::Transaction<'static, sqlx::Postgres>,
//     catalog_names: &[String],
//     controllers: &[String],
//     next_runs: &[Option<DateTime<Utc>>],
//     statuses: &[Option<TextJson<Box<RawValue>>>],
//     active: &[bool],
// ) -> sqlx::Result<()> {
//     sqlx::query(
//         r#"insert into controller_jobs (
//             catalog_name,
//             controller,
//             next_run,
//             status,
//             active
//         ) select * from unnest($1, $2, $3, $4, $5)
//         on conflict (catalog_name, controller) do update set
//         next_run = excluded.next_run,
//         status = case when excluded.status is not null then excluded.status else controller_jobs.status end,
//         active = excluded.active;
//     "#)
//     .bind(catalog_names)
//     .bind(controllers)
//     .bind(next_runs)
//     .bind(statuses)
//     .bind(active)
//     .execute(txn).await?;
//     Ok(())
// }
