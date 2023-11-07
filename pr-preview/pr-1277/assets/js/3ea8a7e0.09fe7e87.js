"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Google Cloud SQL for MySQL",l={unversionedId:"reference/Connectors/capture-connectors/google-cloud-sql-mysql",id:"reference/Connectors/capture-connectors/google-cloud-sql-mysql",title:"Google Cloud SQL for MySQL",description:"This is a change data capture (CDC) connector that captures change events from a MySQL database via the Binary Log.",source:"@site/docs/reference/Connectors/capture-connectors/google-cloud-sql-mysql.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-cloud-sql-mysql",permalink:"/pr-preview/pr-1277/reference/Connectors/capture-connectors/google-cloud-sql-mysql",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-cloud-sql-mysql.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/pr-preview/pr-1277/reference/Connectors/capture-connectors/MySQL"},next:{title:"NetSuite",permalink:"/pr-preview/pr-1277/reference/Connectors/capture-connectors/netsuite"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Setting the MySQL time zone",id:"setting-the-mysql-time-zone",level:3},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Troubleshooting Capture Errors",id:"troubleshooting-capture-errors",level:2},{value:"Unsupported Operations",id:"unsupported-operations",level:3},{value:"Data Manipulation Queries",id:"data-manipulation-queries",level:3},{value:"Unhandled Queries",id:"unhandled-queries",level:3},{value:"Metadata Errors",id:"metadata-errors",level:3},{value:"Insufficient Binlog Retention",id:"insufficient-binlog-retention",level:3},{value:"Empty Collection Key",id:"empty-collection-key",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-cloud-sql-for-mysql"},"Google Cloud SQL for MySQL"),(0,r.kt)("p",null,"This is a change data capture (CDC) connector that captures change events from a MySQL database via the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/binary-log.html"},"Binary Log"),"."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-mysql"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-mysql:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need a MySQL database setup with the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_format"},(0,r.kt)("inlineCode",{parentName:"a"},"binlog_format")),"\nsystem variable set to ",(0,r.kt)("inlineCode",{parentName:"li"},"ROW")," (the default value)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_expire_logs_seconds"},"Binary log expiration period")," set to MySQL's default value of 30 days (2592000 seconds) if at all possible.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This value may be set lower if necessary, but we ",(0,r.kt)("a",{parentName:"li",href:"#insufficient-binlog-retention"},"strongly discourage")," going below 7 days as this may increase the likelihood of unrecoverable failures."))),(0,r.kt)("li",{parentName:"ul"},'A watermarks table. The watermarks table is a small "scratch space"\nto which the connector occasionally writes a small amount of data (a UUID,\nspecifically) to ensure accuracy when backfilling preexisting table contents.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The default name is ",(0,r.kt)("inlineCode",{parentName:"li"},'"flow.watermarks"'),", but this can be overridden in ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json"),"."))),(0,r.kt)("li",{parentName:"ul"},"A database user with appropriate permissions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REPLICATION CLIENT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLICATION SLAVE")," privileges."),(0,r.kt)("li",{parentName:"ul"},"Permission to insert, update, and delete on the watermarks table."),(0,r.kt)("li",{parentName:"ul"},"Permission to read the tables being captured."),(0,r.kt)("li",{parentName:"ul"},"Permission to read from ",(0,r.kt)("inlineCode",{parentName:"li"},"information_schema")," tables, if automatic discovery is used."))),(0,r.kt)("li",{parentName:"ul"},"If the table(s) to be captured include columns of type ",(0,r.kt)("inlineCode",{parentName:"li"},"DATETIME"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"time_zone")," system variable\nmust be set to an IANA zone name or numerical offset or the capture configured with a ",(0,r.kt)("inlineCode",{parentName:"li"},"timezone")," to use by default.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To allow direct access:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sql/docs/mysql/configure-ip#add"},"Enable public IP on your database")," and add ",(0,r.kt)("inlineCode",{parentName:"li"},"34.121.207.128")," as an authorized IP address."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To allow secure connections via SSH tunneling:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Follow the guide to ",(0,r.kt)("a",{parentName:"li",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling")),(0,r.kt)("li",{parentName:"ul"},"When you configure your connector as described in the ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration")," section above, including the additional ",(0,r.kt)("inlineCode",{parentName:"li"},"networkTunnel")," configuration to enable the SSH tunnel. See ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1277/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks")," for additional details and a sample."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the instance's ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_expire_logs_seconds")," ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/mysql/flags?_ga=2.8077298.-1359189752.1655241239&_gac=1.226418280.1655849730.Cj0KCQjw2MWVBhCQARIsAIjbwoOczKklaVaykkUiCMZ4n3_jVtsInpmlugWN92zx6rL5i7zTxm3AALIaAv6nEALw_wcB"},"flag"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"2592000"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/mysql/connect-instance-cloud-shell"},"Google Cloud Shell")," or your preferred client, create the watermarks table."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"flow_capture")," user with replication permission, the ability to read all tables, and the ability to read and write the watermarks table."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," permission can be restricted to just the tables that need to be\ncaptured, but automatic discovery requires ",(0,r.kt)("inlineCode",{parentName:"p"},"information_schema")," access as well."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\n  COMMENT 'User account for Flow MySQL data capture';\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"In the Cloud Console, note the instance's host under Public IP Address. Its port will always be ",(0,r.kt)("inlineCode",{parentName:"li"},"3306"),".\nTogether, you'll use the host:port as the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," property when you configure the connector.")),(0,r.kt)("h3",{id:"setting-the-mysql-time-zone"},"Setting the MySQL time zone"),(0,r.kt)("p",null,"MySQL's ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_time_zone"},(0,r.kt)("inlineCode",{parentName:"a"},"time_zone")," server system variable")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM")," by default."),(0,r.kt)("p",null,"If you intend to capture tables including columns of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"DATETIME"),",\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"time_zone")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM"),",\nFlow won't be able to detect the time zone and convert the column to ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3339"},"RFC3339 format"),".\nTo avoid this, you must explicitly set the time zone for your database."),(0,r.kt)("p",null,"You can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify a numerical offset from UTC."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For MySQL version 8.0.19 or higher, values from ",(0,r.kt)("inlineCode",{parentName:"li"},"-13:59")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"+14:00"),", inclusive, are permitted."),(0,r.kt)("li",{parentName:"ul"},"Prior to MySQL 8.0.19, values from ",(0,r.kt)("inlineCode",{parentName:"li"},"-12:59")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"+13:00"),", inclusive, are permitted"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify a named timezone in ",(0,r.kt)("a",{parentName:"p",href:"https://www.iana.org/time-zones"},"IANA timezone format"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you're using Amazon Aurora, create or modify the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithDBClusterParamGroups.html"},"DB cluster parameter group"),"\nassociated with your MySQL database.\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithDBClusterParamGroups.html#USER_WorkingWithParamGroups.ModifyingCluster"},"Set")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"time_zone")," parameter to the correct value."))),(0,r.kt)("p",null,"For example, if you're located in New Jersey, USA, you could set ",(0,r.kt)("inlineCode",{parentName:"p"},"time_zone")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"-05:00")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-04:00"),", depending on the time of year.\nBecause this region observes daylight savings time, you'd be responsible for changing the offset.\nAlternatively, you could set ",(0,r.kt)("inlineCode",{parentName:"p"},"time_zone")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"America/New_York"),", and time changes would occur automatically."),(0,r.kt)("p",null,"If using IANA time zones, your database must include time zone tables. ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html"},"Learn more in the MySQL docs"),"."),(0,r.kt)("admonition",{title:"Capture Timezone Configuration",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are unable to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"time_zone")," in the database and need to capture tables with ",(0,r.kt)("inlineCode",{parentName:"p"},"DATETIME")," columns, the capture can be configured to assume a time zone using the ",(0,r.kt)("inlineCode",{parentName:"p"},"timezone")," configuration property (see below). The ",(0,r.kt)("inlineCode",{parentName:"p"},"timezone")," configuration property can be set as a numerical offset or IANA timezone format.")),(0,r.kt)("h2",{id:"backfills-and-performance-considerations"},"Backfills and performance considerations"),(0,r.kt)("p",null,"When the a MySQL capture is initiated, by default, the connector first ",(0,r.kt)("em",{parentName:"p"},"backfills"),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."),(0,r.kt)("p",null,"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."),(0,r.kt)("p",null,"In this case, you may turn of backfilling on a per-table basis. See ",(0,r.kt)("a",{parentName:"p",href:"#properties"},"properties")," for details."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the MySQL source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Server Address"),(0,r.kt)("td",{parentName:"tr",align:null},"The host or host:port at which the database can be reached."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"Login User"),(0,r.kt)("td",{parentName:"tr",align:null},"The database user to authenticate as."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"flow_capture"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Login Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/timezone")),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone to use when capturing datetime columns. Should normally be left blank to use the database's ",(0,r.kt)("inlineCode",{parentName:"td"},"'time_zone'")," system variable. Only required if the ",(0,r.kt)("inlineCode",{parentName:"td"},"'time_zone'")," system variable cannot be read and columns with type datetime are being captured. Must be a valid IANA time zone name or +HH:MM offset. Takes precedence over the ",(0,r.kt)("inlineCode",{parentName:"td"},"'time_zone'")," system variable if both are set."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/watermarks_table")),(0,r.kt)("td",{parentName:"tr",align:null},"Watermarks Table Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes. Must be fully-qualified in ","'","<","schema",">",".","<","table",">","'"," form."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"flow.watermarks"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/dbname")),(0,r.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of database to connect to. In general this shouldn","'","t matter. The connector can discover and capture from all databases it","'","s authorized to access."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"mysql"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/node_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Node ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Node ID for the capture. Each node in a replication cluster must have a unique 32-bit ID. The specific value doesn","'","t matter so long as it is unique. If unset or zero the connector will pick a value."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/skip_backfills")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip Backfills"),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list of fully-qualified table names which should not be backfilled."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/backfill_chunk_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Backfill Chunk Size"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rows which should be fetched from the database in a single backfill query."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"131072"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/skip_binlog_retention_check")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip Binlog Retention Sanity Check"),(0,r.kt)("td",{parentName:"tr",align:null},"Bypasses the ","'","dangerously short binlog retention","'"," sanity check at startup. Only do this if you understand the danger and have a specific need."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/namespace"))),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc/refman/8.0/en/show-databases.html"},"database/schema")," in which the table resides."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the table to be captured from the database."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,r.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you configure this connector in the web application, the automatic ",(0,r.kt)("strong",{parentName:"p"},"discovery")," process sets up a binding for ",(0,r.kt)("em",{parentName:"p"},"most")," tables it finds in your database, but there are exceptions."),(0,r.kt)("p",{parentName:"admonition"},"Tables in the MySQL system schemas ",(0,r.kt)("inlineCode",{parentName:"p"},"information_schema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"performance_schema"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sys")," will not be discovered.\nYou can add bindings for such tables manually.")),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"A minimal capture definition will look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mysql:dev\n        config:\n          address: "127.0.0.1:3306"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          namespace: ${TABLE_NAMESPACE}\n          stream: ${TABLE_NAME}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n')),(0,r.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,r.kt)("h2",{id:"troubleshooting-capture-errors"},"Troubleshooting Capture Errors"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"source-mysql")," connector is designed to halt immediately if something wrong or unexpected happens, instead of continuing on and potentially outputting incorrect data. What follows is a non-exhaustive list of some potential failure modes, and what action should be taken to fix these situations:"),(0,r.kt)("h3",{id:"unsupported-operations"},"Unsupported Operations"),(0,r.kt)("p",null,"If your capture is failing with an ",(0,r.kt)("inlineCode",{parentName:"p"},'"unsupported operation {ALTER,DROP,TRUNCATE,etc} TABLE"')," error, this indicates that such an operation has taken place impacting a table which is currently being captured."),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," and other destructive operations this is not supported, and can only be resolved by removing the offending table(s) from the capture bindings list, after which you may recreate the capture if desired (causing the latest state of the table to be recaptured in its entirety)."),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," we currently support table alterations to add or drop columns from a table. This error indicates that whatever alteration took place is not currently supported. Practically speaking the immediate resolution is the same as for a ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE"),", but if you frequently perform schema migrations it may be worth reaching out to see if we can add support for whatever table alteration you just did."),(0,r.kt)("h3",{id:"data-manipulation-queries"},"Data Manipulation Queries"),(0,r.kt)("p",null,"If your capture is failing with an ",(0,r.kt)("inlineCode",{parentName:"p"},'"unsupported DML query"')," error, this means that an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," or other data manipulation query is present in the MySQL binlog. This should generally not happen if ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_format = 'ROW'")," as described in the ",(0,r.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section."),(0,r.kt)("p",null,"Resolving this error requires fixing the ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_format")," system variable, and then either tearing down and recreating the entire capture so that it restarts at a later point in the binlog, or in the case of an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," query it may suffice to remove the capture binding for the offending table and then re-add it."),(0,r.kt)("h3",{id:"unhandled-queries"},"Unhandled Queries"),(0,r.kt)("p",null,"If your capture is failing with an ",(0,r.kt)("inlineCode",{parentName:"p"},'"unhandled query"')," error, some SQL query is present in the binlog which the connector does not (currently) understand."),(0,r.kt)("p",null,"In general, this error suggests that the connector should be modified to at least recognize this type of query, and most likely categorize it as either an unsupported ",(0,r.kt)("a",{parentName:"p",href:"#data-manipulation-queries"},"DML Query"),", an unsupported ",(0,r.kt)("a",{parentName:"p",href:"#unsupported-operations"},"Table Operation"),", or something that can safely be ignored. Until such a fix is made the capture cannot proceed, and you will need to tear down and recreate the entire capture so that it restarts from a later point in the binlog."),(0,r.kt)("h3",{id:"metadata-errors"},"Metadata Errors"),(0,r.kt)("p",null,"If your capture is failing with a ",(0,r.kt)("inlineCode",{parentName:"p"},'"metadata error"')," then something has gone badly wrong with the capture's tracking of table metadata, such as column names or datatypes."),(0,r.kt)("p",null,"This should never happen, and most likely means that the MySQL binlog itself is corrupt in some way. If this occurs, it can be resolved by removing the offending table(s) from the capture bindings list and then recreating the capture (generally into a new collection, as this process will cause the table to be re-captured in its entirety)."),(0,r.kt)("h3",{id:"insufficient-binlog-retention"},"Insufficient Binlog Retention"),(0,r.kt)("p",null,"If your capture fails with a ",(0,r.kt)("inlineCode",{parentName:"p"},'"binlog retention period is too short"')," error, it is informing you that the MySQL binlog retention period is set to a dangerously low value, and your capture would risk unrecoverable failure if it were paused or the server became unreachable for a nontrivial amount of time, such that the database expired a binlog segment that the capture was still reading from."),(0,r.kt)("p",null,"(If this were to happen, then change events would be permanently lost and that particular capture would never be able to make progress without potentially producing incorrect data. Thus the capture would need to be torn down and recreated so that each table could be re-captured in its entirety, starting with a complete backfill of current contents.)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"binlog retention period is too short"')," error should normally be fixed by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_expire_logs_seconds = 2592000")," as described in the ",(0,r.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section (and when running on a managed cloud platform additional steps may be required, refer to the managed cloud setup instructions above). However, advanced users who understand the risks can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"skip_binlog_retention_check")," configuration option to disable this safety."),(0,r.kt)("h3",{id:"empty-collection-key"},"Empty Collection Key"),(0,r.kt)("p",null,"Every Flow collection must declare a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/concepts/collections#keys"},"key")," which is used to group its documents. When testing your capture, if you encounter an error indicating collection key cannot be empty, you will need to either add a key to the table in your source, or manually edit the generated specification and specify keys for the collection before publishing to the catalog as documented ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/concepts/collections#empty-keys"},"here"),"."))}c.isMDXComponent=!0}}]);