"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:6},o="Google Cloud SQL for PostgreSQL",i={unversionedId:"reference/Connectors/capture-connectors/google-cloud-sql-postgres",id:"reference/Connectors/capture-connectors/google-cloud-sql-postgres",title:"Google Cloud SQL for PostgreSQL",description:"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/google-cloud-sql-postgres.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-cloud-sql-postgres",permalink:"/pr-preview/pr-1335/reference/Connectors/capture-connectors/google-cloud-sql-postgres",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-cloud-sql-postgres.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for PostgreSQL",permalink:"/pr-preview/pr-1335/reference/Connectors/capture-connectors/amazon-rds-postgres"},next:{title:"Google Cloud SQL for SQL Server",permalink:"/pr-preview/pr-1335/reference/Connectors/capture-connectors/google-cloud-sql-sqlserver"}},s={},p=[{value:"Supported versions and platforms",id:"supported-versions-and-platforms",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"TOASTed values",id:"toasted-values",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Publications",id:"publications",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-cloud-sql-for-postgresql"},"Google Cloud SQL for PostgreSQL"),(0,r.kt)("p",null,"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-postgres"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-postgres:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"supported-versions-and-platforms"},"Supported versions and platforms"),(0,r.kt)("p",null,"This connector supports PostgreSQL versions 10.0 and later."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You'll need a PostgreSQL database setup with the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/runtime-config-wal.html"},"Logical replication enabled")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"wal_level=logical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-createrole.html"},"User role")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLICATION")," attribute"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION-SLOTS"},"replication slot"),". This represents a \u201ccursor\u201d into the PostgreSQL write-ahead log from which change events can be read.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."),(0,r.kt)("li",{parentName:"ul"},"If you wish to run multiple captures from the same database, each must have its own slot.\nYou can create these slots yourself, or by specifying a name other than the default in the advanced ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration"),"."))),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-createpublication.html"},"publication"),". This represents the set of tables for which change events will be reported.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."))),(0,r.kt)("li",{parentName:"ul"},"A watermarks table. The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions.")))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To allow direct access:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sql/docs/mysql/configure-ip#add"},"Enable public IP on your database")," and add ",(0,r.kt)("inlineCode",{parentName:"li"},"34.121.207.128")," as an authorized IP address."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To allow secure connections via SSH tunneling:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Follow the guide to ",(0,r.kt)("a",{parentName:"li",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling")),(0,r.kt)("li",{parentName:"ul"},"When you configure your connector as described in the ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration")," section above, including the additional ",(0,r.kt)("inlineCode",{parentName:"li"},"networkTunnel")," configuration to enable the SSH tunnel. See ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1335/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks")," for additional details and a sample."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'On Google Cloud, navigate to your instance\'s Overview page. Click "Edit configuration". Scroll down to the Flags section. Click "ADD FLAG". Set ',(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/postgres/flags"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"cloudsql.logical_decoding")," flag to ",(0,r.kt)("inlineCode",{parentName:"a"},"on"))," to enable logical replication on your Cloud SQL PostgreSQL instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your PostgreSQL client, connect to your instance and issue the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table and publication."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER flow_capture WITH REPLICATION\nIN ROLE cloudsqlsuperuser LOGIN PASSWORD 'secret';\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO flow_capture;\nALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication;\nALTER PUBLICATION flow_publication SET (publish_via_partition_root = true);\nALTER PUBLICATION flow_publication ADD TABLE public.flow_watermarks, <other_tables>;\n")),(0,r.kt)("p",{parentName:"li"},"  where ",(0,r.kt)("inlineCode",{parentName:"p"},"<other_tables>")," lists all tables that will be captured from. The ",(0,r.kt)("inlineCode",{parentName:"p"},"publish_via_partition_root"),"\nsetting is recommended (because most users will want changes to a partitioned table to be captured\nunder the name of the root table) but is not required.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Cloud Console, note the instance's host under Public IP Address. Its port will always be ",(0,r.kt)("inlineCode",{parentName:"p"},"5432"),".\nTogether, you'll use the host:port as the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," property when you configure the connector."))),(0,r.kt)("h2",{id:"backfills-and-performance-considerations"},"Backfills and performance considerations"),(0,r.kt)("p",null,"When the a PostgreSQL capture is initiated, by default, the connector first ",(0,r.kt)("em",{parentName:"p"},"backfills"),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."),(0,r.kt)("p",null,"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."),(0,r.kt)("p",null,"In this case, you may turn of backfilling on a per-table basis. See ",(0,r.kt)("a",{parentName:"p",href:"#properties"},"properties")," for details."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the PostgreSQL source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"The host or host:port at which the database can be reached."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Logical database name to capture from."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"postgres"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"The database user to authenticate as."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"flow_capture"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/backfill_chunk_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Backfill Chunk Size"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rows which should be fetched from the database in a single backfill query."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/publicationName")),(0,r.kt)("td",{parentName:"tr",align:null},"Publication Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the PostgreSQL publication to replicate from."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"flow_publication"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/skip_backfills")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip Backfills"),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list of fully-qualified table names which should not be backfilled."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/slotName")),(0,r.kt)("td",{parentName:"tr",align:null},"Slot Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the PostgreSQL replication slot to replicate from."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"flow_slot"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/watermarksTable")),(0,r.kt)("td",{parentName:"tr",align:null},"Watermarks Table"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes during backfills. Must be fully-qualified in ","'","<","schema",">",".","<","table",">","'"," form."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"public.flow_watermarks"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/sslmode")),(0,r.kt)("td",{parentName:"tr",align:null},"SSL Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides SSL connection behavior by setting the 'sslmode' parameter."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/namespace"))),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.postgresql.org/docs/9.1/ddl-schemas.html"},"namespace/schema")," of the table."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,r.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"A minimal capture definition will look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-postgres:dev"\n        config:\n          address: "localhost:5432"\n          database: "postgres"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: ${TABLE_NAMESPACE}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n')),(0,r.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,r.kt)("h2",{id:"toasted-values"},"TOASTed values"),(0,r.kt)("p",null,"PostgreSQL has a hard page size limit, usually 8 KB, for performance reasons.\nIf your tables contain values that exceed the limit, those values can't be stored directly.\nPostgreSQL uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/storage-toast.html"},"TOAST")," (The Oversized-Attribute Storage Technique) to\nstore them separately."),(0,r.kt)("p",null,"TOASTed values can sometimes present a challenge for systems that rely on the PostgreSQL write-ahead log (WAL), like this connector.\nIf a change event occurs on a row that contains a TOASTed value, ",(0,r.kt)("em",{parentName:"p"},"but the TOASTed value itself is unchanged"),", it is omitted from the WAL.\nAs a result, the connector emits a row update with the a value omitted, which might cause\nunexpected results in downstream catalog tasks if adjustments are not made."),(0,r.kt)("p",null,"The PostgreSQL connector handles TOASTed values for you when you follow the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/connectors#flowctl-discover"},"standard discovery workflow"),"\nor use the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/connectors#flow-ui"},"Flow UI")," to create your capture.\nIt uses ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/reference/reduction-strategies/merge"},"merge")," ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/schemas#reductions"},"reductions"),"\nto fill in the previous known TOASTed value in cases when that value is omitted from a row update."),(0,r.kt)("p",null,"However, due to the event-driven nature of certain tasks in Flow, it's still possible to see unexpected results in your data flow, specifically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you materialize the captured data to another system using a connector that requires ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1335/concepts/materialization#delta-updates"},"delta updates")),(0,r.kt)("li",{parentName:"ul"},"When you perform a ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1335/concepts/derivations"},"derivation")," that uses TOASTed values")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you encounter an issue that you suspect is due to TOASTed values, try the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure your collection's schema is using the merge ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1335/concepts/schemas#reduce-annotations"},"reduction strategy"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/9.4/sql-altertable.html"},"Set REPLICA IDENTITY to FULL")," for the table. This circumvents the problem by forcing the\nWAL to record all values regardless of size. However, this can have performance impacts on your database and must be carefully evaluated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:support@estuary.dev"},"Contact Estuary support")," for assistance.")),(0,r.kt)("h2",{id:"publications"},"Publications"),(0,r.kt)("p",null,"It is recommended that the publication used by the capture only contain the tables that will be captured. In some cases it may be desirable to create this publication for all tables in the database instead of specific tables, for example using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PUBLICATION flow_publication FOR ALL TABLES WITH (publish_via_partition_root = true);\n")),(0,r.kt)("p",null,"Caution must be used if creating the publication in this way as all existing tables (even those not part of the capture) will be included in it, and if any of them do not have a primary key they will no longer be able to process updates or deletes."))}d.isMDXComponent=!0}}]);