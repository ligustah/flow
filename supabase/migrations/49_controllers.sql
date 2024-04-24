begin;

-- TODO: create index on `live_specs` to make it easier to lookup by `live_version > observed_version`
-- TODO: add comments
alter table live_specs add column controller_next_run timestamptz;
-- This constraint is removed because we're changing how we represent deleted specs, so that only
-- the `spec` column is null. Setting `spec_type` to null was unnecessary, and retaining it is
-- now necessary in order for `live_spec_flows` to stay consistent with `live_specs` in case of
-- spec deletions that don't draft all the connected specs.
alter table live_specs drop constraint "spec and spec_type must be consistent";

create table controller_jobs (
    -- The name of the live spec that this pertains to
    catalog_name catalog_name not null references live_specs (catalog_name) on delete cascade,
    -- The version of the controller that last updated this row. Used to identify controllers to run
    -- whenever we update the controller code. Is compared to the `agent::controllers::CONTROLLER_VERSION`
    -- constant.
    controller_version integer not null default 0,

    -- Arbitrary JSON that's updated by the controller. Can be used as state for the controller,
    -- and also for communicating status to end users.
    status json not null default '{}'::json,
    -- Informational only
    updated_at timestamptz not null default now(),

    -- Always use the same logs_token for each controller, so the logs from all runs are in one place
    logs_token uuid not null default gen_random_uuid(),

    -- Error handling still needs more consideration
    failures integer not null default 0,
    -- Errors executing the controller will be shown here
    error text,

    primary key (catalog_name)
);

-- TODO: add index on `controller_jobs` to make it easier to deque jobs by `next_run < now()` or `controller_version`

insert into controller_jobs (catalog_name)
    select catalog_name from live_specs;

commit;
