"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4974],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},821:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={sidebar_position:12},s=void 0,p={unversionedId:"reference/Connectors/capture-connectors/PostgreSQL",id:"reference/Connectors/capture-connectors/PostgreSQL",title:"PostgreSQL",description:"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/PostgreSQL.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/PostgreSQL",permalink:"/reference/Connectors/capture-connectors/PostgreSQL",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/PostgreSQL.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/reference/Connectors/capture-connectors/MySQL"},next:{title:"Materialization connectors",permalink:"/reference/Connectors/materialization-connectors/"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Setup",id:"setup",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Properties",id:"properties",children:[{value:"Endpoint",id:"endpoint",children:[],level:4},{value:"Bindings",id:"bindings",children:[],level:4}],level:3},{value:"Sample",id:"sample",children:[],level:3}],level:2},{value:"PostgreSQL on managed cloud platforms",id:"postgresql-on-managed-cloud-platforms",children:[{value:"Amazon RDS",id:"amazon-rds",children:[{value:"Setup",id:"setup-1",children:[],level:4}],level:3},{value:"Google Cloud SQL",id:"google-cloud-sql",children:[{value:"Setup",id:"setup-2",children:[],level:4}],level:3},{value:"Azure Database for PostgreSQL",id:"azure-database-for-postgresql",children:[{value:"Setup",id:"setup-3",children:[],level:4}],level:3}],level:2},{value:"TOASTed values",id:"toasted-values",children:[{value:"Troubleshooting",id:"troubleshooting",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-postgres"},(0,o.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-postgres:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This connector supports PostgreSQL versions 10.0 and later."),(0,o.kt)("p",null,"You'll need a PostgreSQL database setup with the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/runtime-config-wal.html"},"Logical replication enabled")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"wal_level=logical")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-createrole.html"},"User role")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"REPLICATION")," attribute"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION-SLOTS"},"replication slot"),". This represents a \u201ccursor\u201d into the PostgreSQL write-ahead log from which change events can be read.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."))),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-createpublication.html"},"publication"),". This represents the set of tables for which change events will be reported.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."))),(0,o.kt)("li",{parentName:"ul"},"A watermarks table. The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions.")))),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These setup instructions are PostgreSQL instances you manage yourself. If you use a cloud-based managed service\nfor your database, different setup steps may be required."),(0,o.kt)("p",{parentName:"div"},"Instructions for setup on Amazon RDS can be found ",(0,o.kt)("a",{parentName:"p",href:"#postgresql-on-amazon-rds"},"here"),". If you use a different managed service\nand the standard steps don't work as expected,\ncontact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"Estuary support"),"."))),(0,o.kt)("p",null,"The simplest way to meet the above prerequisites is to change the WAL level and have the connector use a database superuser role."),(0,o.kt)("p",null,"For a more restricted setup, create a new user with just the required permissions as detailed in the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new user and password:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER flow_capture WITH PASSWORD 'secret' REPLICATION;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign the appropriate role."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If using PostgreSQL v14 or later:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT pg_read_all_data TO flow_capture;\n")),(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"If using an earlier version:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES to flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA public, <others> TO flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA information_schema, pg_catalog TO flow_capture;\n")),(0,o.kt)("p",{parentName:"li"},"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<others>")," lists all schemas that will be captured from."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If an even more restricted set of permissions is desired, you can also grant SELECT on\njust the specific table(s) which should be captured from. The \u2018information_schema\u2019 and\n\u2018pg_catalog\u2019 access is required for stream auto-discovery, but not for capturing already\nconfigured streams.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the watermarks table, grant privileges, and create publication:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication FOR ALL TABLES;\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Set WAL level to logical:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER SYSTEM SET wal_level = logical;\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Restart PostgreSQL to allow the WAL level change to take effect.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog spec YAML.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and YAML sample below provide configuration details specific to the PostgreSQL source connector."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,o.kt)("td",{parentName:"tr",align:null},"Database"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the database to capture from."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required, ",(0,o.kt)("inlineCode",{parentName:"td"},'"postgres"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/host"))),(0,o.kt)("td",{parentName:"tr",align:null},"Host"),(0,o.kt)("td",{parentName:"tr",align:null},"Host name of the database."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,o.kt)("td",{parentName:"tr",align:null},"Password"),(0,o.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/port"))),(0,o.kt)("td",{parentName:"tr",align:null},"Port"),(0,o.kt)("td",{parentName:"tr",align:null},"Port of the database."),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Required, ",(0,o.kt)("inlineCode",{parentName:"td"},"5432"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/publicationName")),(0,o.kt)("td",{parentName:"tr",align:null},"Publication name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the PostgreSQL publication to replicate from."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"flow_publication"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/slotName")),(0,o.kt)("td",{parentName:"tr",align:null},"Slot name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the PostgreSQL replication slot to replicate from."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"flow_slot"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,o.kt)("td",{parentName:"tr",align:null},"User"),(0,o.kt)("td",{parentName:"tr",align:null},"Database user to connect as."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required, ",(0,o.kt)("inlineCode",{parentName:"td"},'"postgres"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/watermarksTable")),(0,o.kt)("td",{parentName:"tr",align:null},"Watermarks table"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes during backfills. Must be fully-qualified in ",(0,o.kt)("inlineCode",{parentName:"td"},"<schema>.<table>")," form."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"public.flow_watermarks"'))))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/namespace")),(0,o.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://www.postgresql.org/docs/9.1/ddl-schemas.html"},"namespace")," of the table, if used."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,o.kt)("td",{parentName:"tr",align:null},"Stream"),(0,o.kt)("td",{parentName:"tr",align:null},"Table name."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,o.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,o.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("p",null,"A minimal capture definition will look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${tenant}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-postgres:dev"\n        config:\n          host: "localhost"\n          port: 5432\n          database: "flow"\n          user: "flow_capture"\n          password: "secret"\n          # slot_name: \u201cflow_slot\u201d                     # Default\n          # publication_name: \u201cflow_publication\u201d       # Default\n          # watermarks_table: \u201cpublic.flow_watermarks\u201d # Default\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: ${TABLE_NAMESPACE}\n          syncMode: incremental\n        target: ${TENANT}/${COLLECTION_NAME}\n')),(0,o.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions."),"."),(0,o.kt)("h2",{id:"postgresql-on-managed-cloud-platforms"},"PostgreSQL on managed cloud platforms"),(0,o.kt)("p",null,"In addition to standard PostgreSQL, this connector supports cloud-based PostgreSQL instances on certain platforms."),(0,o.kt)("h3",{id:"amazon-rds"},"Amazon RDS"),(0,o.kt)("p",null,"You can use this connector for PostgreSQL instances on Amazon RDS using the following setup instructions."),(0,o.kt)("h4",{id:"setup-1"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You'll need to configure secure access to the database to enable the Flow capture.\nThis is currently supported through SSH tunneling.\nFollow the guide to ",(0,o.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable logical replication on your RDS PostgreSQL instance."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Creating"},"parameter group"),".\nCreate a unique name and description and set the following properties:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Family"),": postgres13"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": DB Parameter group"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Modifying"},"Modify the new parameter group")," and set ",(0,o.kt)("inlineCode",{parentName:"p"},"rds.logical_replication=1"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Associating"},"Associate the parameter group")," with the database.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reboot the database to allow the new parameter group to take effect.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the PostgreSQL client, run the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table and publication."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER flow_capture WITH PASSWORD 'secret';\nGRANT rds_replication TO flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO flow_capture;\nALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication FOR ALL TABLES;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure your connector as described in the ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section above,\nwith the additional of the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," stanza to enable the SSH tunnel.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks"),"\nfor additional details and a sample.\nYou can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardHost")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardPort")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/rds/"},"RDS console")," as the Endpoint and Port, respectively."))),(0,o.kt)("h3",{id:"google-cloud-sql"},"Google Cloud SQL"),(0,o.kt)("p",null,"You can use this connector for PostgreSQL instances on Google Cloud SQL using the following setup instructions."),(0,o.kt)("h4",{id:"setup-2"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Allow the connector to access your PostgreSQL instance using one of the following methods:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure secure access. This is currently supported through SSH tunneling.\nFollow the guide to ",(0,o.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling"),".\nYou'll need to set up a Google Cloud Virtual Machine to act as a proxy;\nbe sure to follow the prerequisites outlined in the ",(0,o.kt)("a",{parentName:"p",href:"../../../../guides/connect-network#setup-for-google-cloud"},"Google Cloud section"),"\nsection of the guide.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the instance to allow unsecured connections.\nIn your Cloud SQL settings, ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/mysql/configure-ssl-instance#enforcing-ssl"},"disable the requirement for SSL/TLS"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/mysql/configure-ip#add"},"enable public IP access"),", if necessary.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/postgres/flags"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"cloudsql.logical_decoding")," flag to ",(0,o.kt)("inlineCode",{parentName:"a"},"on"))," to enable logical replication on your loud SQL PostgreSQL instance.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your PostgreSQL client, issue the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table and publication."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER flow_capture WITH REPLICATION\nIN ROLE cloudsqlsuperuser LOGIN PASSWORD 'secret';\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO flow_capture;\nALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication FOR ALL TABLES;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure your connector as described in the ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section above,\nwith the additional of the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," stanza to enable the SSH tunnel, if using.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks"),"\nfor additional details and a sample.\nYou can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardHost")," under Public IP Address.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardPort")," is always ",(0,o.kt)("inlineCode",{parentName:"p"},"5432"),"."))),(0,o.kt)("h3",{id:"azure-database-for-postgresql"},"Azure Database for PostgreSQL"),(0,o.kt)("p",null,"You can use this connector for  instances on Azure Database for PostgreSQL using the following setup instructions."),(0,o.kt)("h4",{id:"setup-3"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You'll need to configure secure access to the database to enable the Flow capture.\nThis is currently supported through SSH tunneling.\nFollow the guide to ",(0,o.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your Azure PostgreSQL instance's server parameters, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-logical#pre-requisites-for-logical-replication-and-logical-decoding"},"set ",(0,o.kt)("inlineCode",{parentName:"a"},"wal_level")," to ",(0,o.kt)("inlineCode",{parentName:"a"},"logical"))," to enable logical replication.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the PostgreSQL client, run the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table and publication."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER flow_capture WITH PASSWORD 'secret' REPLICATION;\nGRANT pg_read_all_data TO flow_capture;\nALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES to flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA public, <others> TO flow_capture;\nGRANT SELECT ON information_schema.columns, information_schema.tables, pg_catalog.pg_attribute, pg_catalog.pg_class, pg_catalog.pg_index, pg_catalog.pg_namespace TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication FOR ALL TABLES;\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Configure your connector as described in the ",(0,o.kt)("a",{parentName:"li",href:"#configuration"},"configuration")," section above,\nwith the additional of the ",(0,o.kt)("inlineCode",{parentName:"li"},"proxy")," stanza to enable the SSH tunnel.\nSee ",(0,o.kt)("a",{parentName:"li",href:"/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks"),"\nfor additional details and a sample.\nYou can find the host as Server Name, and the port under Connection Strings (usually ",(0,o.kt)("inlineCode",{parentName:"li"},"5432"),").")),(0,o.kt)("h2",{id:"toasted-values"},"TOASTed values"),(0,o.kt)("p",null,"PostgreSQL has a hard page size limit, usually 8 KB, for performance reasons.\nIf your tables contain values that exceed the limit, those values can't be stored directly.\nPostgreSQL uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/storage-toast.html"},"TOAST")," (The Oversized-Attribute Storage Technique) to\nstore them separately."),(0,o.kt)("p",null,"TOASTed values can sometimes present a challenge for systems that rely on the PostgreSQL write-ahead log (WAL), like this connector.\nIf a change event occurs on a row that contains a TOASTed value, ",(0,o.kt)("em",{parentName:"p"},"but the TOASTed value itself is unchanged"),", it is omitted from the WAL.\nAs a result, the connector emits a row update with the a value omitted, which might cause\nunexpected results in downstream catalog tasks if adjustments are not made."),(0,o.kt)("p",null,"The PostgreSQL connector handles TOASTed values for you when you follow the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#flowctl-discover"},"standard discovery workflow"),"\nor use the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#flow-ui"},"Flow UI")," to create your capture.\nIt uses ",(0,o.kt)("a",{parentName:"p",href:"/reference/reduction-strategies/merge"},"merge")," ",(0,o.kt)("a",{parentName:"p",href:"/concepts/schemas#reductions"},"reductions"),"\nto fill in the previous known TOASTed value in cases when that value is omitted from a row update."),(0,o.kt)("p",null,"However, due to the event-driven nature of certain tasks in Flow, it's still possible to see unexpected results in your data flow, specifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you materialize the captured data to another system using a connector that requires ",(0,o.kt)("a",{parentName:"li",href:"/concepts/materialization#delta-updates"},"delta updates")),(0,o.kt)("li",{parentName:"ul"},"When you perform a ",(0,o.kt)("a",{parentName:"li",href:"/concepts/derivations"},"derivation")," that uses TOASTed values")),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you encounter an issue that you suspect is due to TOASTed values, try the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure your collection's schema is using the merge ",(0,o.kt)("a",{parentName:"li",href:"/concepts/schemas#reduce-annotations"},"reduction strategy"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/9.4/sql-altertable.html"},"Set REPLICA IDENTITY to FULL")," for the table. This circumvents the problem by forcing the\nWAL to record all values regardless of size. However, this can have performance impacts on your database and must be carefully evaluated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:support@estuary.dev"},"Contact Estuary support")," for assistance.")))}d.isMDXComponent=!0}}]);