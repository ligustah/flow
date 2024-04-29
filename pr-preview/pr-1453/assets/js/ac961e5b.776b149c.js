"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4109],{13767:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=r(74848),t=r(28453);const i={sidebar_position:6},c="Google Cloud SQL for SQL Server",o={id:"reference/Connectors/capture-connectors/SQLServer/google-cloud-sql-sqlserver",title:"Google Cloud SQL for SQL Server",description:"This connector uses change data capture (CDC) to continuously capture updates in a Microsoft SQL Server database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/SQLServer/google-cloud-sql-sqlserver.md",sourceDirName:"reference/Connectors/capture-connectors/SQLServer",slug:"/reference/Connectors/capture-connectors/SQLServer/google-cloud-sql-sqlserver",permalink:"/pr-preview/pr-1453/reference/Connectors/capture-connectors/SQLServer/google-cloud-sql-sqlserver",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/SQLServer/google-cloud-sql-sqlserver.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for SQL Server",permalink:"/pr-preview/pr-1453/reference/Connectors/capture-connectors/SQLServer/amazon-rds-sqlserver"},next:{title:"MixPanel",permalink:"/pr-preview/pr-1453/reference/Connectors/capture-connectors/mixpanel"}},l={},a=[{value:"Supported versions and platforms",id:"supported-versions-and-platforms",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Specifying Flow collection keys",id:"specifying-flow-collection-keys",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"google-cloud-sql-for-sql-server",children:"Google Cloud SQL for SQL Server"}),"\n",(0,s.jsx)(n.p,{children:"This connector uses change data capture (CDC) to continuously capture updates in a Microsoft SQL Server database into one or more Flow collections."}),"\n",(0,s.jsxs)(n.p,{children:["It\u2019s available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/source-sqlserver:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/source-sqlserver:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-versions-and-platforms",children:"Supported versions and platforms"}),"\n",(0,s.jsx)(n.p,{children:"This connector is designed for databases using any version of SQL Server which has CDC support, and is regularly tested against SQL Server 2017 and up."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"To capture change events from SQL Server tables using this connector, you need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For each table to be captured, a primary key should be specified in the database.\nIf a table doesn't have a primary key, you must manually specify a key in the associated Flow collection definition while creating the capture.\n",(0,s.jsx)(n.a,{href:"#specifying-flow-collection-keys",children:"See detailed steps"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/sql/relational-databases/track-changes/enable-and-disable-change-data-capture-sql-server?view=sql-server-ver16",children:"CDC enabled"}),"\non the database and the individual tables to be captured.\n(This creates ",(0,s.jsx)(n.em,{children:"change tables"})," in the database, from which the connector reads.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"watermarks table"}),". The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A user role with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SELECT"})," permissions on the CDC schema and the schemas that contain tables to be captured."]}),"\n",(0,s.jsx)(n.li,{children:"Access to the change tables created as part of the SQL Server CDC process."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SELECT"}),", ",(0,s.jsx)(n.code,{children:"INSERT"}),", and ",(0,s.jsx)(n.code,{children:"UPDATE"})," permissions on the watermarks table"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To allow direct access:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://cloud.google.com/sql/docs/sqlserver/configure-ip#add",children:"Enable public IP on your database"})," and add ",(0,s.jsx)(n.code,{children:"34.121.207.128"})," as an authorized IP address."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To allow secure connections via SSH tunneling:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Follow the guide to ",(0,s.jsx)(n.a,{href:"/guides/connect-network/",children:"configure an SSH server for tunneling"})]}),"\n",(0,s.jsxs)(n.li,{children:["When you configure your connector as described in the ",(0,s.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, including the additional ",(0,s.jsx)(n.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel. See ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your SQL client, connect to your instance as the default ",(0,s.jsx)(n.code,{children:"sqlserver"})," user and issue the following commands."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"USE <database>;\n-- Enable CDC for the database.\nEXEC msdb.dbo.gcloudsql_cdc_enable_db '<database>';\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_capture WITH PASSWORD = 'Secret123!';\nCREATE USER flow_capture FOR LOGIN flow_capture;\n-- Grant the user permissions on the CDC schema and schemas with data.\n-- This assumes all tables to be captured are in the default schema, `dbo`.\n-- Add similar queries for any other schemas that contain tables you want to capture.\nGRANT SELECT ON SCHEMA :: dbo TO flow_capture;\nGRANT SELECT ON SCHEMA :: cdc TO flow_capture;\n-- Create the watermarks table and grant permissions.\nCREATE TABLE dbo.flow_watermarks(slot INTEGER PRIMARY KEY, watermark TEXT);\nGRANT SELECT, INSERT, UPDATE ON dbo.flow_watermarks TO flow_capture;\n-- Enable CDC on tables. The below query enables CDC the watermarks table ONLY.\n-- You should add similar query for all other tables you intend to capture.\nEXEC sys.sp_cdc_enable_table @source_schema = 'dbo', @source_name = 'flow_watermarks', @role_name = 'flow_capture';\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["In the Cloud Console, note the instance's host under Public IP Address. Its port will always be ",(0,s.jsx)(n.code,{children:"1433"}),".\nTogether, you'll use the host",":port"," as the ",(0,s.jsx)(n.code,{children:"address"})," property when you configure the connector."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the SQL Server source connector."]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/address"})})}),(0,s.jsx)(n.td,{children:"Server Address"}),(0,s.jsxs)(n.td,{children:["The host or host",":port"," at which the database can be reached."]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/database"})})}),(0,s.jsx)(n.td,{children:"Database"}),(0,s.jsx)(n.td,{children:"Logical database name to capture from."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/user"})})}),(0,s.jsx)(n.td,{children:"User"}),(0,s.jsx)(n.td,{children:"The database user to authenticate as."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Required, ",(0,s.jsx)(n.code,{children:'"flow_capture"'})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/password"})})}),(0,s.jsx)(n.td,{children:"Password"}),(0,s.jsx)(n.td,{children:"Password for the specified database user."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced"})}),(0,s.jsx)(n.td,{children:"Advanced Options"}),(0,s.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced/backfill_chunk_size"})}),(0,s.jsx)(n.td,{children:"Backfill Chunk Size"}),(0,s.jsx)(n.td,{children:"The number of rows which should be fetched from the database in a single backfill query."}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"4096"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced/skip_backfills"})}),(0,s.jsx)(n.td,{children:"Skip Backfills"}),(0,s.jsx)(n.td,{children:"A comma-separated list of fully-qualified table names which should not be backfilled."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced/watermarksTable"})}),(0,s.jsx)(n.td,{children:"Watermarks Table"}),(0,s.jsx)(n.td,{children:"The name of the table used for watermark writes during backfills. Must be fully-qualified in '<schema>.<table>' form."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"dbo.flow_watermarks"'})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/namespace"})})}),(0,s.jsx)(n.td,{children:"Namespace"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/sql/relational-databases/databases/databases?view=sql-server-ver16#basic-information-about-databases",children:"namespace/schema"})," of the table."]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/stream"})})}),(0,s.jsx)(n.td,{children:"Stream"}),(0,s.jsx)(n.td,{children:"Table name."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/primary_key"})}),(0,s.jsx)(n.td,{children:"Primary Key Columns"}),(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"The columns which together form the primary key of the table."}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-sqlserver:dev"\n        config:\n          address: "<host>:1433"\n          database: "my_db"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: dbo\n          primary_key: ["id"]\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Your capture definition will likely be more complex, with additional bindings for each table in the source database."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,s.jsx)(n.h2,{id:"specifying-flow-collection-keys",children:"Specifying Flow collection keys"}),"\n",(0,s.jsxs)(n.p,{children:["Every Flow collection must have a ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/collections#keys",children:"key"}),".\nAs long as your SQL Server tables have a primary key specified, the connector will set the\ncorresponding collection's key accordingly."]}),"\n",(0,s.jsxs)(n.p,{children:["In cases where a SQL Server table you want to capture doesn't have a primary key,\nyou can manually add it to the collection definition during the ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1453/guides/create-dataflow#create-a-capture",children:"capture creation workflow"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After you input the endpoint configuration and click ",(0,s.jsx)(n.strong,{children:"Next"}),",\nthe tables in your database have been mapped to Flow collections.\nClick each collection's ",(0,s.jsx)(n.strong,{children:"Specification"})," tab and identify a collection where ",(0,s.jsx)(n.code,{children:'"key": [ ],'})," is empty."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click inside the empty key value in the editor and input the name of column in the table to use as the key, formatted as a JSON pointer. For example ",(0,s.jsx)(n.code,{children:'"key": ["/foo"],'})]}),"\n",(0,s.jsxs)(n.p,{children:["Make sure the key field is required, not nullable, and of an ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/collections#schema-restrictions",children:"allowed type"}),".\nMake any other necessary changes to the ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/collections#specification",children:"collection specification"})," to accommodate this."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Repeat with other missing collection keys, if necessary."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save and publish the capture as usual."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);