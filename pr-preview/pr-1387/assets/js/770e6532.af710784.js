"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3756],{90511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(74848),s=t(28453);const i={},a="Snowflake CDC Connector",o={id:"reference/Connectors/capture-connectors/snowflake",title:"Snowflake CDC Connector",description:"This connector captures change events from source tables in a Snowflake database.",source:"@site/docs/reference/Connectors/capture-connectors/snowflake.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/snowflake",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/snowflake",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/snowflake.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snapchat Marketing",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/snapchat"},next:{title:"Stripe",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/stripe"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Endpoint Properties",id:"endpoint-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Polling Interval",id:"polling-interval",level:3},{value:"Sample Configuration",id:"sample-configuration",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"snowflake-cdc-connector",children:"Snowflake CDC Connector"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures change events from source tables in a Snowflake database."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Snowflake account that includes:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A target database containing the tables you want to capture from."}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/warehouses",children:"virtual warehouse"})," which the connector can use to execute queries."]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://docs.snowflake.com/en/sql-reference/ddl-database.html",children:"schema"})," which will hold ",(0,r.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/streams-intro",children:"streams"})," and staging tables managed by the connector. The default name for this schema is ",(0,r.jsx)(n.code,{children:"ESTUARY_STAGING"})," unless overridden in the capture's advanced configuration."]}),"\n",(0,r.jsx)(n.li,{children:"A user with access grants for these resources, as well as authorization to read from the desired source tables, and to create streams and transient tables in the staging schema based on the source tables."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["The host URL for your Snowflake account. This is formatted using your ",(0,r.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used",children:"Snowflake account identifier"}),", and might look something like ",(0,r.jsx)(n.code,{children:"sg31386.snowflakecomputing.com"})," or ",(0,r.jsx)(n.code,{children:"df98701.us-central1.gcp.snowflakecomputing.com"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"#setup",children:"script below"})," for details."]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"To set up a user account and warehouse for use with the Snowflake CDC connector,\ncopy and paste the following script into the Snowflake SQL editor. Modify the\nvariable declarations in the first few lines to set the password and optionally\ncustomize the names involved."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"set database_name = 'SOURCE_DB';         -- The database to capture from\nset warehouse_name = 'ESTUARY_WH';       -- The warehouse to execute queries in\nset estuary_user = 'ESTUARY_USER';       -- The name of the capture user\nset estuary_password = 'secret';         -- The password of the capture user\nset estuary_role = 'ESTUARY_ROLE';       -- A role for the capture user's permissions\n\n-- Create a role and user for Estuary\ncreate role if not exists identifier($estuary_role);\ngrant role identifier($estuary_role) to role SYSADMIN;\ncreate user if not exists identifier($estuary_user)\n  password = $estuary_password\n  default_role = $estuary_role\n  default_warehouse = $warehouse_name;\ngrant role identifier($estuary_role) to user identifier($estuary_user);\n\n-- Create a warehouse for Estuary and grant access to it\ncreate warehouse if not exists identifier($warehouse_name)\n  warehouse_size = xsmall\n  warehouse_type = standard\n  auto_suspend = 60\n  auto_resume = true\n  initially_suspended = true;\ngrant USAGE\n  on warehouse identifier($warehouse_name)\n  to role identifier($estuary_role);\n\n-- Grant Estuary access to read from all tables in the database and to create a staging schema\ngrant CREATE SCHEMA, MONITOR, USAGE\n  on database identifier($database_name)\n  to role identifier($estuary_role);\ngrant USAGE\n  on future schemas in database identifier($database_name)\n  to role identifier($estuary_role);\ngrant USAGE\n  on all schemas in database identifier($database_name)\n  to role identifier($estuary_role);\ngrant SELECT\n  on future tables in database identifier($database_name)\n  to role identifier($estuary_role);\ngrant SELECT\n  on all tables in database identifier($database_name)\n  to role identifier($estuary_role);\n\ncommit;\n"})}),"\n",(0,r.jsx)(n.p,{children:'Be sure to run the entire script with the "Run All" option.'}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You can configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,r.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Snowflake CDC source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"endpoint-properties",children:"Endpoint Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/host"})})}),(0,r.jsx)(n.td,{children:"Host URL"}),(0,r.jsx)(n.td,{children:"The Snowflake Host used for the connection. Example: orgname-accountname.snowflakecomputing.com (do not include the protocol)."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/account"})})}),(0,r.jsx)(n.td,{children:"Account"}),(0,r.jsx)(n.td,{children:"The Snowflake account identifier"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/database"})})}),(0,r.jsx)(n.td,{children:"Database"}),(0,r.jsx)(n.td,{children:"The name of the Snowflake database to capture from"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/user"})})}),(0,r.jsx)(n.td,{children:"User"}),(0,r.jsx)(n.td,{children:"The Snowflake user login name"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/password"})})}),(0,r.jsx)(n.td,{children:"Password"}),(0,r.jsx)(n.td,{children:"The password for the specified login user"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/warehouse"})}),(0,r.jsx)(n.td,{children:"Warehouse"}),(0,r.jsx)(n.td,{children:"The Snowflake virtual warehouse used to execute queries. The default warehouse for the user will be used if this is blank."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced"})}),(0,r.jsx)(n.td,{children:"Advanced Options"}),(0,r.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/flowSchema"})}),(0,r.jsx)(n.td,{children:"Flow Schema"}),(0,r.jsx)(n.td,{children:"The schema in which Flow will create and manage its streams and staging tables."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"ESTUARY_STAGING"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"binding-properties",children:"Binding Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/table"})})}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"The name of the table to capture"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/schema"})})}),(0,r.jsx)(n.td,{children:"Schema"}),(0,r.jsx)(n.td,{children:"The schema in which the table resides"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"polling-interval",children:"Polling Interval"}),"\n",(0,r.jsxs)(n.p,{children:['Keeping a Snowflake compute warehouse active 24/7 can be prohibitively expensive for many users,\nso the Snowflake CDC connector is designed to poll for changes at a configurable interval, at\nwhich time it will capture into Flow all new changes since the previous execution. This polling\ninterval is set to 5 minutes by default, in an attempt to strike a balance between cost savings\nwhile still providing "good enough" capture latency for most streaming uses. The interval may\nbe configured by editing the task spec ',(0,r.jsx)(n.code,{children:"interval"})," property ",(0,r.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/captures/#specification",children:"as described here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Specifying a smaller interval can provide even lower capture latencies but is likely to incur\nhigher costs for Snowflake warehouse usage. A higher interval will reduce Snowflake costs by\nallowing the warehouse to be idle for longer, in cases where it's okay for the captured data\nto lag the source dataset by a few hours. Note that regardless of the polling interval the\noutput collections will contain an accurate representation of the source tables up to some\nmoment in time, the interval merely controls how frequent and fine-grained the updates are."}),"\n",(0,r.jsx)(n.h3,{id:"sample-configuration",children:"Sample Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  ${prefix}/source-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-snowflake:v1\n        config:\n          host: cf22902.us-central1.gcp.snowflakecomputing.com\n          account: cf22902\n          database: SOURCE_DB\n          user: ESTUARY_USER\n          password: secret\n    bindings:\n      - resource:\n          schema: ${schema_name}\n          table: ${table_name}\n        target: ${prefix}/collection_name\n    interval: 30m\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);