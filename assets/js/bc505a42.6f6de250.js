"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[229],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3685:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},s=void 0,p={unversionedId:"reference/Connectors/capture-connectors/MySQL",id:"reference/Connectors/capture-connectors/MySQL",title:"MySQL",description:"This is a change data capture (CDC) connector that captures change events from a MySQL database via the Binary Log.",source:"@site/docs/reference/Connectors/capture-connectors/MySQL.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/MySQL",permalink:"/reference/Connectors/capture-connectors/MySQL",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/MySQL.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/reference/Connectors/capture-connectors/gcs"},next:{title:"PostgreSQL",permalink:"/reference/Connectors/capture-connectors/PostgreSQL"}},m=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Setup",id:"setup",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Values",id:"values",children:[{value:"Endpoint",id:"endpoint",children:[],level:4},{value:"Bindings",id:"bindings",children:[],level:4}],level:3},{value:"Sample",id:"sample",children:[],level:3}],level:2},{value:"Connecting to secure networks",id:"connecting-to-secure-networks",children:[],level:2},{value:"MySQL on Amazon RDS",id:"mysql-on-amazon-rds",children:[{value:"Setup",id:"setup-1",children:[],level:3}],level:2}],c={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is a change data capture (CDC) connector that captures change events from a MySQL database via the ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/binary-log.html"},"Binary Log"),"."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This connector is still under development. Estuary does not currently guarantee\nthat it will behave as expected in all production environments."))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-mysql"},(0,l.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-mysql:dev"))," provides the latest connector image.\nYou can also follow the link in your browser to see past image versions."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"To use this connector, you'll need a MySQL database setup with the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"binlog_row_metadata")),"\nsystem variable set to ",(0,l.kt)("inlineCode",{parentName:"li"},"FULL"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Note that this can be done on a dedicated replica even if the primary database has it set to ",(0,l.kt)("inlineCode",{parentName:"li"},"MINIMAL"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_expire_logs_seconds"},"Binary log expiration period")," of at at least seven days.\nIf possible, it's recommended to keep the default setting of 2592000 seconds (30 days)."),(0,l.kt)("li",{parentName:"ul"},'A watermarks table. The watermarks table is a small "scratch space"\nto which the connector occasionally writes a small amount of data (a UUID,\nspecifically) to ensure accuracy when backfilling preexisting table contents.',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The default name is ",(0,l.kt)("inlineCode",{parentName:"li"},'"flow.watermarks"'),", but this can be overridden in ",(0,l.kt)("inlineCode",{parentName:"li"},"config.json"),"."))),(0,l.kt)("li",{parentName:"ul"},"A capture user with appropriate permissions:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"REPLICATION CLIENT")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"REPLICATION SLAVE")," privileges."),(0,l.kt)("li",{parentName:"ul"},"Permission to insert, update, and delete on the watermarks table."),(0,l.kt)("li",{parentName:"ul"},"Permission to read the tables being captured."),(0,l.kt)("li",{parentName:"ul"},"Permission to read from ",(0,l.kt)("inlineCode",{parentName:"li"},"information_schema")," tables, if automatic discovery is used.")))),(0,l.kt)("h3",{id:"setup"},"Setup"),(0,l.kt)("p",null,"To meet these requirements, do the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create the watermarks table. This table can have any name and be in any database, so long as ",(0,l.kt)("inlineCode",{parentName:"li"},"config.json")," is modified accordingly.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the ",(0,l.kt)("inlineCode",{parentName:"p"},"flow_capture")," user with replication permission, the ability to read all tables, and the ability to read and write the watermarks table."),(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," permission can be restricted to just the tables that need to be\ncaptured, but automatic discovery requires ",(0,l.kt)("inlineCode",{parentName:"p"},"information_schema")," access as well."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\n  COMMENT 'User account for Flow MySQL data capture';\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Configure the binary log to record complete table metadata.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PERSIST binlog_row_metadata = 'FULL';\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Configure the binary log to retain data for at least seven days, if previously set lower.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PERSIST binlog_expire_logs_seconds = 604800;\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"There are various ways to configure connectors. See ",(0,l.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about these methods. The values and YAML sample below provide configuration details specific to the MySQL source connector."),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"endpoint"},"Endpoint"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"Address"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address and port of the database host."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"User"),(0,l.kt)("td",{parentName:"tr",align:null},"Database user to connect as."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dbname")),(0,l.kt)("td",{parentName:"tr",align:null},"Database name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the database to connect to."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"server_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Server ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Server ID for replication."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"watermarks_table")),(0,l.kt)("td",{parentName:"tr",align:null},"Watermarks Table"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes during backfills."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"flow.watermarks"'))))),(0,l.kt)("h4",{id:"bindings"},"Bindings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc/refman/5.6/en/ha-memcached-using-namespaces.html"},"namespace")," of the table, if used."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stream")),(0,l.kt)("td",{parentName:"tr",align:null},"Stream"),(0,l.kt)("td",{parentName:"tr",align:null},"Table name."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"syncMode")),(0,l.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,l.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Required")))),(0,l.kt)("h3",{id:"sample"},"Sample"),(0,l.kt)("p",null,"A minimal capture definition within the catalog spec will look like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${TENANT}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mysql:dev\n        config:\n          address: "127.0.0.1:3306"\n          dbname: "test"\n          password: "secret"\n          server_id: 12345\n          user: "flow_capture"\n          watermarks_table: "flow.watermarks"\n    bindings:\n      - resource:\n          namespace: ${TABLE_NAMESPACE}\n          stream: ${TABLE_NAME}\n          syncMode: incremental\n        target: ${TENANT}/${COLLECTION_NAME}\n\n')),(0,l.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions."),"."),(0,l.kt)("h2",{id:"connecting-to-secure-networks"},"Connecting to secure networks"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"beta")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"SSH tunneling on the MySQL source connector is actively being worked on and will be fully supported soon.\nIf you encounter issues with this feature, ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"contact Estuary support"),"."))),(0,l.kt)("p",null,"The MySQL source connector ",(0,l.kt)("a",{parentName:"p",href:"/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"supports SSH tunneling"),"\nto allow Flow to connect to databases ports in secure networks."),(0,l.kt)("p",null,"To set up and configure your SSH server, see the ",(0,l.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"guide"),"."),(0,l.kt)("h2",{id:"mysql-on-amazon-rds"},"MySQL on Amazon RDS"),(0,l.kt)("p",null,"Amazon Relational Database Service (RDS) is a managed web service providing cloud-based instances\nof popular relational databases, including MySQL."),(0,l.kt)("p",null,"You can use this Flow connector for MySQL instances on RDS, but the setup requirements are different."),(0,l.kt)("p",null,"Estuary recommends creating a ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rds/features/read-replicas/"},"read replica"),"\nin RDS for use with Flow; however, it's not required.\nYou're able to apply the connector directly to the primary instance if you'd like."),(0,l.kt)("h3",{id:"setup-1"},"Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You'll need to configure secure access to the database to enable the Flow capture.\nEstuary recommends SSH tunneling to allow this.\nFollow the guide to ",(0,l.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling"),"."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"beta")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"SSH tunneling on the MySQL source connector is actively being worked on and will be fully supported soon.\nIf you encounter issues with this feature, ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"contact Estuary support"),".")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a RDS parameter group to enable replication in MySQL."),(0,l.kt)("p",{parentName:"li"},"a. ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Creating"},"Create a parameter group"),".\nCreate a unique name and description and set the following properties:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Family"),": mysql"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type"),": DB Parameter group")),(0,l.kt)("p",{parentName:"li"},"b. ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Modifying"},"Modify the new parameter group")," and update the following parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"binlog_format: ROW"),(0,l.kt)("li",{parentName:"ul"},"binlog_row_metadata: FULL"),(0,l.kt)("li",{parentName:"ul"},"read_only: 0")),(0,l.kt)("p",{parentName:"li"},"c. If using the primary instance (not recommended), ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Associating"},"associate the parameter group"),"\nwith the database and reboot the database to allow the change to take effect")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a read replica with the new parameter group applied (recommended)."),(0,l.kt)("p",{parentName:"li"},"a. ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create"},"Create a read replica"),"\nof your MySQL database."),(0,l.kt)("p",{parentName:"li"},"b. ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html"},"Modify the replica"),"\nand set the following:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DB parameter group"),": choose the parameter group you created previously"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Backup retention period"),": 7 days")),(0,l.kt)("p",{parentName:"li"},"c. Reboot the replica to allow the changes to take effect.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Switch to your MySQL client. Run the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\nCREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\n  COMMENT 'User account for Flow MySQL data capture';\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Run the following command to set the binary log retention to seven days:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CALL mysql.rds_set_configuration('binlog retention hours', 168);\n")))}d.isMDXComponent=!0}}]);