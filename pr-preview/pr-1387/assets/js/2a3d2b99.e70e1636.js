"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8935],{96521:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=n(74848),r=n(28453);const i={sidebar_position:6},o="Google Cloud SQL for PostgreSQL",l={id:"reference/Connectors/capture-connectors/google-cloud-sql-postgres",title:"Google Cloud SQL for PostgreSQL",description:"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/google-cloud-sql-postgres.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-cloud-sql-postgres",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/google-cloud-sql-postgres",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-cloud-sql-postgres.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for PostgreSQL",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/amazon-rds-postgres"},next:{title:"Google Cloud SQL for SQL Server",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/google-cloud-sql-sqlserver"}},c={},a=[{value:"Supported versions and platforms",id:"supported-versions-and-platforms",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"TOASTed values",id:"toasted-values",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Publications",id:"publications",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"google-cloud-sql-for-postgresql",children:"Google Cloud SQL for PostgreSQL"}),"\n",(0,t.jsx)(s.p,{children:"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections."}),"\n",(0,t.jsxs)(s.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(s.a,{href:"https://github.com/estuary/connectors/pkgs/container/source-postgres",children:(0,t.jsx)(s.code,{children:"ghcr.io/estuary/source-postgres:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(s.h2,{id:"supported-versions-and-platforms",children:"Supported versions and platforms"}),"\n",(0,t.jsx)(s.p,{children:"This connector supports PostgreSQL versions 10.0 and later."}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(s.p,{children:"You'll need a PostgreSQL database setup with the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/runtime-config-wal.html",children:"Logical replication enabled"})," \u2014 ",(0,t.jsx)(s.code,{children:"wal_level=logical"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/sql-createrole.html",children:"User role"})," with ",(0,t.jsx)(s.code,{children:"REPLICATION"})," attribute"]}),"\n",(0,t.jsxs)(s.li,{children:["A ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION-SLOTS",children:"replication slot"}),". This represents a \u201ccursor\u201d into the PostgreSQL write-ahead log from which change events can be read.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Optional; if none exist, one will be created by the connector."}),"\n",(0,t.jsxs)(s.li,{children:["If you wish to run multiple captures from the same database, each must have its own slot.\nYou can create these slots yourself, or by specifying a name other than the default in the advanced ",(0,t.jsx)(s.a,{href:"#configuration",children:"configuration"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["A ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/sql-createpublication.html",children:"publication"}),". This represents the set of tables for which change events will be reported.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["A watermarks table. The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"To allow direct access:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://cloud.google.com/sql/docs/mysql/configure-ip#add",children:"Enable public IP on your database"})," and add ",(0,t.jsx)(s.code,{children:"34.121.207.128"})," as an authorized IP address."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"To allow secure connections via SSH tunneling:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Follow the guide to ",(0,t.jsx)(s.a,{href:"../../../../guides/connect-network/",children:"configure an SSH server for tunneling"})]}),"\n",(0,t.jsxs)(s.li,{children:["When you configure your connector as described in the ",(0,t.jsx)(s.a,{href:"#configuration",children:"configuration"})," section above, including the additional ",(0,t.jsx)(s.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel. See ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:['On Google Cloud, navigate to your instance\'s Overview page. Click "Edit configuration". Scroll down to the Flags section. Click "ADD FLAG". Set ',(0,t.jsxs)(s.a,{href:"https://cloud.google.com/sql/docs/postgres/flags",children:["the ",(0,t.jsx)(s.code,{children:"cloudsql.logical_decoding"})," flag to ",(0,t.jsx)(s.code,{children:"on"})]})," to enable logical replication on your Cloud SQL PostgreSQL instance."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"In your PostgreSQL client, connect to your instance and issue the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table and publication."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE USER flow_capture WITH REPLICATION\nIN ROLE cloudsqlsuperuser LOGIN PASSWORD 'secret';\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO flow_capture;\nALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication;\nALTER PUBLICATION flow_publication SET (publish_via_partition_root = true);\nALTER PUBLICATION flow_publication ADD TABLE public.flow_watermarks, <other_tables>;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["where ",(0,t.jsx)(s.code,{children:"<other_tables>"})," lists all tables that will be captured from. The ",(0,t.jsx)(s.code,{children:"publish_via_partition_root"}),"\nsetting is recommended (because most users will want changes to a partitioned table to be captured\nunder the name of the root table) but is not required."]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["In the Cloud Console, note the instance's host under Public IP Address. Its port will always be ",(0,t.jsx)(s.code,{children:"5432"}),".\nTogether, you'll use the host",":port"," as the ",(0,t.jsx)(s.code,{children:"address"})," property when you configure the connector."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"backfills-and-performance-considerations",children:"Backfills and performance considerations"}),"\n",(0,t.jsxs)(s.p,{children:["When the a PostgreSQL capture is initiated, by default, the connector first ",(0,t.jsx)(s.em,{children:"backfills"}),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."]}),"\n",(0,t.jsx)(s.p,{children:"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."}),"\n",(0,t.jsxs)(s.p,{children:["In this case, you may turn of backfilling on a per-table basis. See ",(0,t.jsx)(s.a,{href:"#properties",children:"properties"})," for details."]}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(s.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the PostgreSQL source connector."]}),"\n",(0,t.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property"}),(0,t.jsx)(s.th,{children:"Title"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required/Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/address"})})}),(0,t.jsx)(s.td,{children:"Address"}),(0,t.jsxs)(s.td,{children:["The host or host",":port"," at which the database can be reached."]}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/database"})})}),(0,t.jsx)(s.td,{children:"Database"}),(0,t.jsx)(s.td,{children:"Logical database name to capture from."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Required, ",(0,t.jsx)(s.code,{children:'"postgres"'})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/user"})})}),(0,t.jsx)(s.td,{children:"User"}),(0,t.jsx)(s.td,{children:"The database user to authenticate as."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Required, ",(0,t.jsx)(s.code,{children:'"flow_capture"'})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/password"})})}),(0,t.jsx)(s.td,{children:"Password"}),(0,t.jsx)(s.td,{children:"Password for the specified database user."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/advanced"})}),(0,t.jsx)(s.td,{children:"Advanced Options"}),(0,t.jsx)(s.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,t.jsx)(s.td,{children:"object"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/advanced/backfill_chunk_size"})}),(0,t.jsx)(s.td,{children:"Backfill Chunk Size"}),(0,t.jsx)(s.td,{children:"The number of rows which should be fetched from the database in a single backfill query."}),(0,t.jsx)(s.td,{children:"integer"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"4096"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/advanced/publicationName"})}),(0,t.jsx)(s.td,{children:"Publication Name"}),(0,t.jsx)(s.td,{children:"The name of the PostgreSQL publication to replicate from."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"flow_publication"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/advanced/skip_backfills"})}),(0,t.jsx)(s.td,{children:"Skip Backfills"}),(0,t.jsx)(s.td,{children:"A comma-separated list of fully-qualified table names which should not be backfilled."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/advanced/slotName"})}),(0,t.jsx)(s.td,{children:"Slot Name"}),(0,t.jsx)(s.td,{children:"The name of the PostgreSQL replication slot to replicate from."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"flow_slot"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/advanced/watermarksTable"})}),(0,t.jsx)(s.td,{children:"Watermarks Table"}),(0,t.jsx)(s.td,{children:"The name of the table used for watermark writes during backfills. Must be fully-qualified in '<schema>.<table>' form."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'"public.flow_watermarks"'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/advanced/sslmode"})}),(0,t.jsx)(s.td,{children:"SSL Mode"}),(0,t.jsx)(s.td,{children:"Overrides SSL connection behavior by setting the 'sslmode' parameter."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property"}),(0,t.jsx)(s.th,{children:"Title"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required/Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/namespace"})})}),(0,t.jsx)(s.td,{children:"Namespace"}),(0,t.jsxs)(s.td,{children:["The ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/9.1/ddl-schemas.html",children:"namespace/schema"})," of the table."]}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/stream"})})}),(0,t.jsx)(s.td,{children:"Stream"}),(0,t.jsx)(s.td,{children:"Table name."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/syncMode"})})}),(0,t.jsx)(s.td,{children:"Sync mode"}),(0,t.jsxs)(s.td,{children:["Connection method. Always set to ",(0,t.jsx)(s.code,{children:"incremental"}),"."]}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(s.p,{children:"A minimal capture definition will look like the following:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-postgres:dev"\n        config:\n          address: "localhost:5432"\n          database: "postgres"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: ${TABLE_NAMESPACE}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Your capture definition will likely be more complex, with additional bindings for each table in the source database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,t.jsx)(s.h2,{id:"toasted-values",children:"TOASTed values"}),"\n",(0,t.jsxs)(s.p,{children:["PostgreSQL has a hard page size limit, usually 8 KB, for performance reasons.\nIf your tables contain values that exceed the limit, those values can't be stored directly.\nPostgreSQL uses ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/storage-toast.html",children:"TOAST"})," (The Oversized-Attribute Storage Technique) to\nstore them separately."]}),"\n",(0,t.jsxs)(s.p,{children:["TOASTed values can sometimes present a challenge for systems that rely on the PostgreSQL write-ahead log (WAL), like this connector.\nIf a change event occurs on a row that contains a TOASTed value, ",(0,t.jsx)(s.em,{children:"but the TOASTed value itself is unchanged"}),", it is omitted from the WAL.\nAs a result, the connector emits a row update with the a value omitted, which might cause\nunexpected results in downstream catalog tasks if adjustments are not made."]}),"\n",(0,t.jsxs)(s.p,{children:["The PostgreSQL connector handles TOASTed values for you when you follow the ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/connectors#flowctl-discover",children:"standard discovery workflow"}),"\nor use the ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/connectors#flow-ui",children:"Flow UI"})," to create your capture.\nIt uses ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/reference/reduction-strategies/merge",children:"merge"})," ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/schemas#reductions",children:"reductions"}),"\nto fill in the previous known TOASTed value in cases when that value is omitted from a row update."]}),"\n",(0,t.jsx)(s.p,{children:"However, due to the event-driven nature of certain tasks in Flow, it's still possible to see unexpected results in your data flow, specifically:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["When you materialize the captured data to another system using a connector that requires ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/materialization#delta-updates",children:"delta updates"})]}),"\n",(0,t.jsxs)(s.li,{children:["When you perform a ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/derivations",children:"derivation"})," that uses TOASTed values"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(s.p,{children:"If you encounter an issue that you suspect is due to TOASTed values, try the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Ensure your collection's schema is using the merge ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1387/concepts/schemas#reduce-annotations",children:"reduction strategy"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/9.4/sql-altertable.html",children:"Set REPLICA IDENTITY to FULL"})," for the table. This circumvents the problem by forcing the\nWAL to record all values regardless of size. However, this can have performance impacts on your database and must be carefully evaluated."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"mailto:support@estuary.dev",children:"Contact Estuary support"})," for assistance."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"publications",children:"Publications"}),"\n",(0,t.jsx)(s.p,{children:"It is recommended that the publication used by the capture only contain the tables that will be captured. In some cases it may be desirable to create this publication for all tables in the database instead of specific tables, for example using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE PUBLICATION flow_publication FOR ALL TABLES WITH (publish_via_partition_root = true);\n"})}),"\n",(0,t.jsx)(s.p,{children:"Caution must be used if creating the publication in this way as all existing tables (even those not part of the capture) will be included in it, and if any of them do not have a primary key they will no longer be able to process updates or deletes."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var t=n(96540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);