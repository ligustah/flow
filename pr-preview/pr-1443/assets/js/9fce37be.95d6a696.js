"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1771],{52214:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(74848),r=t(28453);const i={sidebar_position:6},o="Supabase",a={id:"reference/Connectors/capture-connectors/PostgreSQL/Supabase",title:"Supabase",description:"This connector uses change data capture (CDC) to continuously capture updates in a Supabase PostgreSQL database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/PostgreSQL/Supabase.md",sourceDirName:"reference/Connectors/capture-connectors/PostgreSQL",slug:"/reference/Connectors/capture-connectors/PostgreSQL/Supabase",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/PostgreSQL/Supabase",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/PostgreSQL/Supabase.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/PostgreSQL/"},next:{title:"Amazon RDS for PostgreSQL",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/PostgreSQL/amazon-rds-postgres"}},l={},c=[{value:"Supported versions and platforms",id:"supported-versions-and-platforms",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"SSL Mode",id:"ssl-mode",level:4},{value:"Sample",id:"sample",level:3},{value:"TOASTed values",id:"toasted-values",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Publications",id:"publications",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"supabase",children:"Supabase"}),"\n",(0,n.jsx)(s.p,{children:"This connector uses change data capture (CDC) to continuously capture updates in a Supabase PostgreSQL database into one or more Flow collections."}),"\n",(0,n.jsxs)(s.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(s.a,{href:"https://github.com/estuary/connectors/pkgs/container/source-postgres",children:(0,n.jsx)(s.code,{children:"ghcr.io/estuary/source-postgres:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsx)(s.h2,{id:"supported-versions-and-platforms",children:"Supported versions and platforms"}),"\n",(0,n.jsx)(s.p,{children:"This connector supports all Supabase PostgreSQL instances."}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.p,{children:"You'll need a Supabase PostgreSQL database setup with the following:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/runtime-config-wal.html",children:"Logical replication enabled"})," \u2014 ",(0,n.jsx)(s.code,{children:"wal_level=logical"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/sql-createrole.html",children:"User role"})," with ",(0,n.jsx)(s.code,{children:"REPLICATION"})," attribute"]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION-SLOTS",children:"replication slot"}),". This represents a \u201ccursor\u201d into the PostgreSQL write-ahead log from which change events can be read.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Optional; if none exist, one will be created by the connector."}),"\n",(0,n.jsxs)(s.li,{children:["If you wish to run multiple captures from the same database, each must have its own slot.\nYou can create these slots yourself, or by specifying a name other than the default in the advanced ",(0,n.jsx)(s.a,{href:"#configuration",children:"configuration"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/sql-createpublication.html",children:"publication"}),". This represents the set of tables for which change events will be reported.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["A watermarks table. The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"Configuration Tip",type:"tip",children:(0,n.jsxs)(s.p,{children:["To configure this connector to capture data from databases hosted on your internal network, you must set up SSH tunneling. For more specific instructions on setup, see ",(0,n.jsx)(s.a,{href:"/guides/connect-network/",children:"configure connections with SSH tunneling"}),"."]})}),"\n",(0,n.jsx)(s.p,{children:"Additional Prequisties:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'A Supabase IPV4 address.  This can be configured under "Project Settings" -> "Add ons" within Supabase\'s UI.'}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(s.p,{children:"The simplest way to meet the above prerequisites is to change the WAL level and have the connector use a database superuser role."}),"\n",(0,n.jsx)(s.p,{children:"For a more restricted setup, create a new user with just the required permissions as detailed in the following steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Connect to your instance and create a new user and password:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE USER flow_capture WITH PASSWORD 'secret' REPLICATION;\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Assign the appropriate role."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"If using PostgreSQL v14 or later:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"GRANT pg_read_all_data TO flow_capture;\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"If using an earlier version:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES to flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA public, <other_schema> TO flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA information_schema, pg_catalog TO flow_capture;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["where ",(0,n.jsx)(s.code,{children:"<other_schema>"})," lists all schemas that will be captured from."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"If an even more restricted set of permissions is desired, you can also grant SELECT on\njust the specific table(s) which should be captured from. The \u2018information_schema\u2019 and\n\u2018pg_catalog\u2019 access is required for stream auto-discovery, but not for capturing already\nconfigured streams."})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create the watermarks table, grant privileges, and create publication:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication;\nALTER PUBLICATION flow_publication SET (publish_via_partition_root = true);\nALTER PUBLICATION flow_publication ADD TABLE public.flow_watermarks, <other_tables>;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["where ",(0,n.jsx)(s.code,{children:"<other_tables>"})," lists all tables that will be captured from. The ",(0,n.jsx)(s.code,{children:"publish_via_partition_root"}),"\nsetting is recommended (because most users will want changes to a partitioned table to be captured\nunder the name of the root table) but is not required."]}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsx)(s.li,{children:"Set WAL level to logical:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ALTER SYSTEM SET wal_level = logical;\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"5",children:["\n",(0,n.jsx)(s.li,{children:"Restart PostgreSQL to allow the WAL level change to take effect."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"backfills-and-performance-considerations",children:"Backfills and performance considerations"}),"\n",(0,n.jsxs)(s.p,{children:["When the a PostgreSQL capture is initiated, by default, the connector first ",(0,n.jsx)(s.em,{children:"backfills"}),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."]}),"\n",(0,n.jsx)(s.p,{children:"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."}),"\n",(0,n.jsxs)(s.p,{children:["In this case, you may turn of backfilling on a per-table basis. See ",(0,n.jsx)(s.a,{href:"#properties",children:"properties"})," for details."]}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(s.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the PostgreSQL source connector."]}),"\n",(0,n.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Title"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Required/Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/address"})})}),(0,n.jsx)(s.td,{children:"Address"}),(0,n.jsxs)(s.td,{children:["The host or host",":port"," at which the database can be reached."]}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/database"})})}),(0,n.jsx)(s.td,{children:"Database"}),(0,n.jsx)(s.td,{children:"Logical database name to capture from."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsxs)(s.td,{children:["Required, ",(0,n.jsx)(s.code,{children:'"postgres"'})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/user"})})}),(0,n.jsx)(s.td,{children:"User"}),(0,n.jsx)(s.td,{children:"The database user to authenticate as."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsxs)(s.td,{children:["Required, ",(0,n.jsx)(s.code,{children:'"flow_capture"'})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/password"})})}),(0,n.jsx)(s.td,{children:"Password"}),(0,n.jsx)(s.td,{children:"Password for the specified database user."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/advanced"})}),(0,n.jsx)(s.td,{children:"Advanced Options"}),(0,n.jsx)(s.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,n.jsx)(s.td,{children:"object"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/advanced/backfill_chunk_size"})}),(0,n.jsx)(s.td,{children:"Backfill Chunk Size"}),(0,n.jsx)(s.td,{children:"The number of rows which should be fetched from the database in a single backfill query."}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"4096"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/advanced/publicationName"})}),(0,n.jsx)(s.td,{children:"Publication Name"}),(0,n.jsx)(s.td,{children:"The name of the PostgreSQL publication to replicate from."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"flow_publication"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/advanced/skip_backfills"})}),(0,n.jsx)(s.td,{children:"Skip Backfills"}),(0,n.jsx)(s.td,{children:"A comma-separated list of fully-qualified table names which should not be backfilled."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/advanced/slotName"})}),(0,n.jsx)(s.td,{children:"Slot Name"}),(0,n.jsx)(s.td,{children:"The name of the PostgreSQL replication slot to replicate from."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"flow_slot"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/advanced/watermarksTable"})}),(0,n.jsx)(s.td,{children:"Watermarks Table"}),(0,n.jsx)(s.td,{children:"The name of the table used for watermark writes during backfills. Must be fully-qualified in '<schema>.<table>' form."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"public.flow_watermarks"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/advanced/sslmode"})}),(0,n.jsx)(s.td,{children:"SSL Mode"}),(0,n.jsx)(s.td,{children:"Overrides SSL connection behavior by setting the 'sslmode' parameter."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Title"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Required/Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/namespace"})})}),(0,n.jsx)(s.td,{children:"Namespace"}),(0,n.jsxs)(s.td,{children:["The ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/9.1/ddl-schemas.html",children:"namespace/schema"})," of the table."]}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/stream"})})}),(0,n.jsx)(s.td,{children:"Stream"}),(0,n.jsx)(s.td,{children:"Table name."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/syncMode"})})}),(0,n.jsx)(s.td,{children:"Sync mode"}),(0,n.jsxs)(s.td,{children:["Connection method. Always set to ",(0,n.jsx)(s.code,{children:"incremental"}),"."]}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"ssl-mode",children:"SSL Mode"}),"\n",(0,n.jsxs)(s.p,{children:["Certain managed PostgreSQL implementations may require you to explicitly set the ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/libpq-ssl.html#LIBPQ-SSL-PROTECTION",children:"SSL Mode"})," to connect with Flow. One example is ",(0,n.jsx)(s.a,{href:"https://neon.tech/docs/connect/connect-securely",children:"Neon"}),", which requires the setting ",(0,n.jsx)(s.code,{children:"verify-full"}),". Check your managed PostgreSQL's documentation for details if you encounter errors related to the SSL mode configuration."]}),"\n",(0,n.jsx)(s.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(s.p,{children:"A minimal capture definition will look like the following:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-postgres:dev"\n        config:\n          address: "localhost:5432"\n          database: "postgres"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: ${TABLE_NAMESPACE}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Your capture definition will likely be more complex, with additional bindings for each table in the source database."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,n.jsx)(s.h2,{id:"toasted-values",children:"TOASTed values"}),"\n",(0,n.jsxs)(s.p,{children:["PostgreSQL has a hard page size limit, usually 8 KB, for performance reasons.\nIf your tables contain values that exceed the limit, those values can't be stored directly.\nPostgreSQL uses ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/storage-toast.html",children:"TOAST"})," (The Oversized-Attribute Storage Technique) to\nstore them separately."]}),"\n",(0,n.jsxs)(s.p,{children:["TOASTed values can sometimes present a challenge for systems that rely on the PostgreSQL write-ahead log (WAL), like this connector.\nIf a change event occurs on a row that contains a TOASTed value, ",(0,n.jsx)(s.em,{children:"but the TOASTed value itself is unchanged"}),", it is omitted from the WAL.\nAs a result, the connector emits a row update with the a value omitted, which might cause\nunexpected results in downstream catalog tasks if adjustments are not made."]}),"\n",(0,n.jsxs)(s.p,{children:["The PostgreSQL connector handles TOASTed values for you when you follow the ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/connectors#flowctl-discover",children:"standard discovery workflow"}),"\nor use the ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/connectors#flow-ui",children:"Flow UI"})," to create your capture.\nIt uses ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/reference/reduction-strategies/merge",children:"merge"})," ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/schemas#reductions",children:"reductions"}),"\nto fill in the previous known TOASTed value in cases when that value is omitted from a row update."]}),"\n",(0,n.jsx)(s.p,{children:"However, due to the event-driven nature of certain tasks in Flow, it's still possible to see unexpected results in your data flow, specifically:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["When you materialize the captured data to another system using a connector that requires ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/materialization#delta-updates",children:"delta updates"})]}),"\n",(0,n.jsxs)(s.li,{children:["When you perform a ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/derivations",children:"derivation"})," that uses TOASTed values"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(s.p,{children:"If you encounter an issue that you suspect is due to TOASTed values, try the following:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Ensure your collection's schema is using the merge ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1443/concepts/schemas#reduce-annotations",children:"reduction strategy"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/9.4/sql-altertable.html",children:"Set REPLICA IDENTITY to FULL"})," for the table. This circumvents the problem by forcing the\nWAL to record all values regardless of size. However, this can have performance impacts on your database and must be carefully evaluated."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"mailto:support@estuary.dev",children:"Contact Estuary support"})," for assistance."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"publications",children:"Publications"}),"\n",(0,n.jsx)(s.p,{children:"It is recommended that the publication used by the capture only contain the tables that will be captured. In some cases it may be desirable to create this publication for all tables in the database instead of specific tables, for example using:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE PUBLICATION flow_publication FOR ALL TABLES WITH (publish_via_partition_root = true);\n"})}),"\n",(0,n.jsx)(s.p,{children:"Caution must be used if creating the publication in this way as all existing tables (even those not part of the capture) will be included in it, and if any of them do not have a primary key they will no longer be able to process updates or deletes."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var n=t(96540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);