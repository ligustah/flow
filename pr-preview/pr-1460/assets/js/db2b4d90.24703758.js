"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6846],{85685:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(74848),i=r(28453);const s={sidebar_position:3},a="Amazon RDS for MariaDB",o={id:"reference/Connectors/capture-connectors/MariaDB/amazon-rds-mariadb",title:"Amazon RDS for MariaDB",description:"This is a change data capture (CDC) connector that captures change events from a MariaDB database via the Binary Log.",source:"@site/docs/reference/Connectors/capture-connectors/MariaDB/amazon-rds-mariadb.md",sourceDirName:"reference/Connectors/capture-connectors/MariaDB",slug:"/reference/Connectors/capture-connectors/MariaDB/amazon-rds-mariadb",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/MariaDB/amazon-rds-mariadb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/MariaDB/amazon-rds-mariadb.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MariaDB",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/MariaDB/"},next:{title:"Marketo",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/marketo"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Troubleshooting Capture Errors",id:"troubleshooting-capture-errors",level:2},{value:"Unsupported Operations",id:"unsupported-operations",level:3},{value:"Data Manipulation Queries",id:"data-manipulation-queries",level:3},{value:"Unhandled Queries",id:"unhandled-queries",level:3},{value:"Metadata Errors",id:"metadata-errors",level:3},{value:"Insufficient Binlog Retention",id:"insufficient-binlog-retention",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"amazon-rds-for-mariadb",children:"Amazon RDS for MariaDB"}),"\n",(0,t.jsxs)(n.p,{children:["This is a change data capture (CDC) connector that captures change events from a MariaDB database via the ",(0,t.jsx)(n.a,{href:"https://mariadb.com/kb/en/overview-of-the-binary-log/",children:"Binary Log"}),".\nIt's derived from the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/MySQL/",children:"MySQL capture connector"}),",\nso the same configuration applies, but the setup steps look somewhat different."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://github.com/estuary/connectors/pkgs/container/source-mariadb",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-mariadb:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To use this connector, you'll need a MariaDB database setup with the following."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://mariadb.com/kb/en/binary-log-formats/",children:(0,t.jsx)(n.code,{children:"binlog_format"})}),"\nsystem variable set to ",(0,t.jsx)(n.code,{children:"ROW"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://mariadb.com/kb/en/using-and-maintaining-the-binary-log/#purging-log-files",children:"Binary log expiration period"})," set to at least 30 days (2592000 seconds) if at all possible.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This value may be set lower if necessary, but we ",(0,t.jsx)(n.a,{href:"#insufficient-binlog-retention",children:"strongly discourage"})," going below 7 days as this may increase the likelihood of unrecoverable failures.\nMariaDB's default value is 0 (no expiration)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:['A watermarks table. The watermarks table is a small "scratch space"\nto which the connector occasionally writes a small amount of data (a UUID,\nspecifically) to ensure accuracy when backfilling preexisting table contents.',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The default name is ",(0,t.jsx)(n.code,{children:'"flow.watermarks"'}),", but this can be overridden in ",(0,t.jsx)(n.code,{children:"config.json"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["A database user with appropriate permissions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"REPLICATION CLIENT"})," and ",(0,t.jsx)(n.code,{children:"REPLICATION SLAVE"})," ",(0,t.jsx)(n.a,{href:"https://mariadb.com/docs/skysql/ref/es10.6/privileges/",children:"privileges"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Permission to insert, update, and delete on the watermarks table."}),"\n",(0,t.jsx)(n.li,{children:"Permission to read the tables being captured."}),"\n",(0,t.jsxs)(n.li,{children:["Permission to read from ",(0,t.jsx)(n.code,{children:"information_schema"})," tables, if automatic discovery is used."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If the table(s) to be captured include columns of type ",(0,t.jsx)(n.code,{children:"DATETIME"}),", the ",(0,t.jsx)(n.code,{children:"time_zone"})," system variable\nmust be set to an IANA zone name or numerical offset or the capture configured with a ",(0,t.jsx)(n.code,{children:"timezone"})," to use by default."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Allow connections to the database from the Estuary Flow IP address."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html",children:"Modify the database"}),", setting ",(0,t.jsx)(n.strong,{children:"Public accessibility"})," to ",(0,t.jsx)(n.strong,{children:"Yes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the VPC security group associated with your database, or create a new VPC security group and associate it with the database.\nRefer to the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html#Overview.RDSSecurityGroups.Create",children:"steps in the Amazon documentation"}),".\nCreate a new inbound rule and a new outbound rule that allow all traffic from the IP address ",(0,t.jsx)(n.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Alternatively, you can allow secure connections via SSH tunneling. To do so:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Follow the guide to ",(0,t.jsx)(n.a,{href:"/guides/connect-network/",children:"configure an SSH server for tunneling"})]}),"\n",(0,t.jsxs)(n.li,{children:["When you configure your connector as described in the ",(0,t.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above,\nincluding the additional ",(0,t.jsx)(n.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1460/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"}),"\nfor additional details and a sample."]}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a RDS parameter group to enable replication in MariaDB."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Creating",children:"Create a parameter group"}),".\nCreate a unique name and description and set the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Family"}),": mariadb10.6"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": DB Parameter group"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Modifying",children:"Modify the new parameter group"})," and update the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"binlog_format: ROW"}),"\n",(0,t.jsx)(n.li,{children:"binlog_row_metadata: FULL"}),"\n",(0,t.jsx)(n.li,{children:"read_only: 0"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If using the primary instance  (not recommended), ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Associating",children:"associate the  parameter group"}),"\nwith the database and set ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.Enabling",children:"Backup Retention Period"})," to 7 days.\nReboot the database to allow the changes to take effect."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a read replica with the new parameter group applied (recommended)."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create",children:"Create a read replica"}),"\nof your MariaDB database."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html",children:"Modify the replica"}),"\nand set the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DB parameter group"}),": choose the parameter group you created previously"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Backup retention period"}),": 7 days"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Public access"}),": Publicly accessible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reboot the replica to allow the changes to take effect."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Switch to your MariaDB client. Run the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\nCREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Run the following command to set the binary log retention to 7 days, the maximum value which RDS MariaDB permits:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CALL mysql.rds_set_configuration('binlog retention hours', 168);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.a,{href:"https://console.aws.amazon.com/rds/",children:"RDS console"}),", note the instance's Endpoint and Port. You'll need these for the ",(0,t.jsx)(n.code,{children:"address"})," property when you configure the connector."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"backfills-and-performance-considerations",children:"Backfills and performance considerations"}),"\n",(0,t.jsxs)(n.p,{children:["When the a MariaDB capture is initiated, by default, the connector first ",(0,t.jsx)(n.em,{children:"backfills"}),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."]}),"\n",(0,t.jsx)(n.p,{children:"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you may turn of backfilling on a per-table basis. See ",(0,t.jsx)(n.a,{href:"#properties",children:"properties"})," for details."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1460/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the MariaDB source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/address"})})}),(0,t.jsx)(n.td,{children:"Server Address"}),(0,t.jsxs)(n.td,{children:["The host or host",":port"," at which the database can be reached."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/user"})})}),(0,t.jsx)(n.td,{children:"Login User"}),(0,t.jsx)(n.td,{children:"The database user to authenticate as."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Required, ",(0,t.jsx)(n.code,{children:'"flow_capture"'})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/password"})})}),(0,t.jsx)(n.td,{children:"Login Password"}),(0,t.jsx)(n.td,{children:"Password for the specified database user."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/timezone"})}),(0,t.jsx)(n.td,{children:"Timezone"}),(0,t.jsxs)(n.td,{children:["Timezone to use when capturing datetime columns. Should normally be left blank to use the database's ",(0,t.jsx)(n.code,{children:"'time_zone'"})," system variable. Only required if the ",(0,t.jsx)(n.code,{children:"'time_zone'"})," system variable cannot be read and columns with type datetime are being captured. Must be a valid IANA time zone name or +HH",":MM"," offset. Takes precedence over the ",(0,t.jsx)(n.code,{children:"'time_zone'"})," system variable if both are set."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/watermarks_table"})}),(0,t.jsx)(n.td,{children:"Watermarks Table Name"}),(0,t.jsx)(n.td,{children:"The name of the table used for watermark writes. Must be fully-qualified in '<schema>.<table>' form."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"flow.watermarks"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/dbname"})}),(0,t.jsx)(n.td,{children:"Database Name"}),(0,t.jsx)(n.td,{children:"The name of database to connect to. In general this shouldn't matter. The connector can discover and capture from all databases it's authorized to access."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"mysql"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/node_id"})}),(0,t.jsx)(n.td,{children:"Node ID"}),(0,t.jsx)(n.td,{children:"Node ID for the capture. Each node in a replication cluster must have a unique 32-bit ID. The specific value doesn't matter so long as it is unique. If unset or zero the connector will pick a value."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/skip_backfills"})}),(0,t.jsx)(n.td,{children:"Skip Backfills"}),(0,t.jsx)(n.td,{children:"A comma-separated list of fully-qualified table names which should not be backfilled."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/backfill_chunk_size"})}),(0,t.jsx)(n.td,{children:"Backfill Chunk Size"}),(0,t.jsx)(n.td,{children:"The number of rows which should be fetched from the database in a single backfill query."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"131072"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/skip_binlog_retention_check"})}),(0,t.jsx)(n.td,{children:"Skip Binlog Retention Sanity Check"}),(0,t.jsx)(n.td,{children:"Bypasses the 'dangerously short binlog retention' sanity check at startup. Only do this if you understand the danger and have a specific need."}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/namespace"})})}),(0,t.jsx)(n.td,{children:"Namespace"}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"https://mariadb.com/kb/en/understanding-mariadb-architecture/#databases",children:"database"})," in which the table resides."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Name of the table to be captured from the database."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync mode"}),(0,t.jsxs)(n.td,{children:["Connection method. Always set to ",(0,t.jsx)(n.code,{children:"incremental"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["When you configure this connector in the web application, the automatic ",(0,t.jsx)(n.strong,{children:"discovery"})," process sets up a binding for ",(0,t.jsx)(n.em,{children:"most"})," tables it finds in your database, but there are exceptions."]}),(0,t.jsxs)(n.p,{children:["Tables in the MariaDB system databases ",(0,t.jsx)(n.code,{children:"information_schema"}),", ",(0,t.jsx)(n.code,{children:"mysql"}),", and ",(0,t.jsx)(n.code,{children:"performance_schema"})," will not be discovered.\nYou can add bindings for such tables manually."]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.p,{children:"A minimal capture definition will look like the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mariadb:dev\n        config:\n          address: "127.0.0.1:3306"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          namespace: ${TABLE_NAMESPACE}\n          stream: ${TABLE_NAME}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Your capture definition will likely be more complex, with additional bindings for each table in the source database."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1460/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting-capture-errors",children:"Troubleshooting Capture Errors"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"source-amazon-rds-mariadb"})," connector is designed to halt immediately if something wrong or unexpected happens, instead of continuing on and potentially outputting incorrect data. What follows is a non-exhaustive list of some potential failure modes, and what action should be taken to fix these situations:"]}),"\n",(0,t.jsx)(n.h3,{id:"unsupported-operations",children:"Unsupported Operations"}),"\n",(0,t.jsxs)(n.p,{children:["If your capture is failing with an ",(0,t.jsx)(n.code,{children:'"unsupported operation {ALTER,DROP,TRUNCATE,etc} TABLE"'})," error, this indicates that such an operation has taken place impacting a table which is currently being captured."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case of ",(0,t.jsx)(n.code,{children:"DROP TABLE"})," and other destructive operations this is not supported, and can only be resolved by removing the offending table(s) from the capture bindings list, after which you may recreate the capture if desired (causing the latest state of the table to be recaptured in its entirety)."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case of ",(0,t.jsx)(n.code,{children:"ALTER TABLE"})," we currently support table alterations to add or drop columns from a table. This error indicates that whatever alteration took place is not currently supported. Practically speaking the immediate resolution is the same as for a ",(0,t.jsx)(n.code,{children:"DROP"})," or ",(0,t.jsx)(n.code,{children:"TRUNCATE TABLE"}),", but if you frequently perform schema migrations it may be worth reaching out to see if we can add support for whatever table alteration you just did."]}),"\n",(0,t.jsx)(n.h3,{id:"data-manipulation-queries",children:"Data Manipulation Queries"}),"\n",(0,t.jsxs)(n.p,{children:["If your capture is failing with an ",(0,t.jsx)(n.code,{children:'"unsupported DML query"'})," error, this means that an ",(0,t.jsx)(n.code,{children:"INSERT"}),", ",(0,t.jsx)(n.code,{children:"UPDATE"}),", ",(0,t.jsx)(n.code,{children:"DELETE"})," or other data manipulation query is present in the binlog. This should generally not happen if ",(0,t.jsx)(n.code,{children:"binlog_format = 'ROW'"})," as described in the ",(0,t.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["Resolving this error requires fixing the ",(0,t.jsx)(n.code,{children:"binlog_format"})," system variable, and then either tearing down and recreating the entire capture so that it restarts at a later point in the binlog, or in the case of an ",(0,t.jsx)(n.code,{children:"INSERT"}),"/",(0,t.jsx)(n.code,{children:"DELETE"})," query it may suffice to remove the capture binding for the offending table and then re-add it."]}),"\n",(0,t.jsx)(n.h3,{id:"unhandled-queries",children:"Unhandled Queries"}),"\n",(0,t.jsxs)(n.p,{children:["If your capture is failing with an ",(0,t.jsx)(n.code,{children:'"unhandled query"'})," error, some SQL query is present in the binlog which the connector does not (currently) understand."]}),"\n",(0,t.jsxs)(n.p,{children:["In general, this error suggests that the connector should be modified to at least recognize this type of query, and most likely categorize it as either an unsupported ",(0,t.jsx)(n.a,{href:"#data-manipulation-queries",children:"DML Query"}),", an unsupported ",(0,t.jsx)(n.a,{href:"#unsupported-operations",children:"Table Operation"}),", or something that can safely be ignored. Until such a fix is made the capture cannot proceed, and you will need to tear down and recreate the entire capture so that it restarts from a later point in the binlog."]}),"\n",(0,t.jsx)(n.h3,{id:"metadata-errors",children:"Metadata Errors"}),"\n",(0,t.jsxs)(n.p,{children:["If your capture is failing with a ",(0,t.jsx)(n.code,{children:'"metadata error"'})," then something has gone badly wrong with the capture's tracking of table metadata, such as column names or datatypes."]}),"\n",(0,t.jsx)(n.p,{children:"This should never happen, and most likely means that the binlog itself is corrupt in some way. If this occurs, it can be resolved by removing the offending table(s) from the capture bindings list and then recreating the capture (generally into a new collection, as this process will cause the table to be re-captured in its entirety)."}),"\n",(0,t.jsx)(n.h3,{id:"insufficient-binlog-retention",children:"Insufficient Binlog Retention"}),"\n",(0,t.jsxs)(n.p,{children:["If your capture fails with a ",(0,t.jsx)(n.code,{children:'"binlog retention period is too short"'})," error, it is informing you that the MariaDB binlog retention period is set to a dangerously low value, and your capture would risk unrecoverable failure if it were paused or the server became unreachable for a nontrivial amount of time, such that the database expired a binlog segment that the capture was still reading from."]}),"\n",(0,t.jsx)(n.p,{children:"(If this were to happen, then change events would be permanently lost and that particular capture would never be able to make progress without potentially producing incorrect data. Thus the capture would need to be torn down and recreated so that each table could be re-captured in its entirety, starting with a complete backfill of current contents.)"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:'"binlog retention period is too short"'})," error should normally be fixed by setting ",(0,t.jsx)(n.code,{children:"binlog_expire_logs_seconds = 2592000"})," as described in the ",(0,t.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})," section (and when running on a managed cloud platform additional steps may be required, refer to the managed cloud setup instructions above). However, advanced users who understand the risks can use the ",(0,t.jsx)(n.code,{children:"skip_binlog_retention_check"})," configuration option to disable this safety."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);