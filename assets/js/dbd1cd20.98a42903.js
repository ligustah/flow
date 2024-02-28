"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8707],{90154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(74848),t=s(28453);const i={sidebar_position:6},o="PostgreSQL",l={id:"reference/Connectors/capture-connectors/PostgreSQL/PostgreSQL",title:"PostgreSQL",description:"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/PostgreSQL/PostgreSQL.md",sourceDirName:"reference/Connectors/capture-connectors/PostgreSQL",slug:"/reference/Connectors/capture-connectors/PostgreSQL/",permalink:"/reference/Connectors/capture-connectors/PostgreSQL/",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/PostgreSQL/PostgreSQL.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Paypal Transaction",permalink:"/reference/Connectors/capture-connectors/paypal-transaction"},next:{title:"Amazon RDS for PostgreSQL",permalink:"/reference/Connectors/capture-connectors/PostgreSQL/amazon-rds-postgres"}},a={},c=[{value:"Supported versions and platforms",id:"supported-versions-and-platforms",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Self-hosted PostgreSQL",id:"self-hosted-postgresql",level:3},{value:"Amazon Aurora",id:"amazon-aurora",level:3},{value:"Azure Database for PostgreSQL",id:"azure-database-for-postgresql",level:3},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"SSL Mode",id:"ssl-mode",level:4},{value:"Sample",id:"sample",level:3},{value:"TOASTed values",id:"toasted-values",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Publications",id:"publications",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,r.jsx)(n.p,{children:"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://github.com/estuary/connectors/pkgs/container/source-postgres",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-postgres:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(n.p,{children:["For managed PostgreSQL insteances that do not support logical replication, we offer a ",(0,r.jsx)(n.a,{href:"./postgres-batch/",children:"PostgreSQL Batch Connector"})," as an alternative."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-versions-and-platforms",children:"Supported versions and platforms"}),"\n",(0,r.jsx)(n.p,{children:"This connector supports PostgreSQL versions 10.0 and later on major cloud platforms, as well as self-hosted instances."}),"\n",(0,r.jsx)(n.p,{children:"Setup instructions are provided for the following platforms:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#self-hosted-postgresql",children:"Self-hosted PostgreSQL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./amazon-rds-postgres/",children:"Amazon RDS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#amazon-aurora",children:"Amazon Aurora"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./google-cloud-sql-postgres/",children:"Google Cloud SQL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#azure-database-for-postgresql",children:"Azure Database for PostgreSQL"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"You'll need a PostgreSQL database setup with the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/runtime-config-wal.html",children:"Logical replication enabled"})," \u2014 ",(0,r.jsx)(n.code,{children:"wal_level=logical"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/sql-createrole.html",children:"User role"})," with ",(0,r.jsx)(n.code,{children:"REPLICATION"})," attribute"]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION-SLOTS",children:"replication slot"}),". This represents a \u201ccursor\u201d into the PostgreSQL write-ahead log from which change events can be read.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Optional; if none exist, one will be created by the connector."}),"\n",(0,r.jsxs)(n.li,{children:["If you wish to run multiple captures from the same database, each must have its own slot.\nYou can create these slots yourself, or by specifying a name other than the default in the advanced ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/sql-createpublication.html",children:"publication"}),". This represents the set of tables for which change events will be reported.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["A watermarks table. The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Configuration Tip",type:"tip",children:(0,r.jsxs)(n.p,{children:["To configure this connector to capture data from databases hosted on your internal network, you must set up SSH tunneling. For more specific instructions on setup, see ",(0,r.jsx)(n.a,{href:"/guides/connect-network/",children:"configure connections with SSH tunneling"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"To meet these requirements, follow the steps for your hosting type."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#self-hosted-postgresql",children:"Self-hosted PostgreSQL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./amazon-rds-postgres/",children:"Amazon RDS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#amazon-aurora",children:"Amazon Aurora"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./google-cloud-sql-postgres/",children:"Google Cloud SQL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#azure-database-for-postgresql",children:"Azure Database for PostgreSQL"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"self-hosted-postgresql",children:"Self-hosted PostgreSQL"}),"\n",(0,r.jsx)(n.p,{children:"The simplest way to meet the above prerequisites is to change the WAL level and have the connector use a database superuser role."}),"\n",(0,r.jsx)(n.p,{children:"For a more restricted setup, create a new user with just the required permissions as detailed in the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Connect to your instance and create a new user and password:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE USER flow_capture WITH PASSWORD 'secret' REPLICATION;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assign the appropriate role."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"If using PostgreSQL v14 or later:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT pg_read_all_data TO flow_capture;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"If using an earlier version:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES to flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA public, <other_schema> TO flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA information_schema, pg_catalog TO flow_capture;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"<other_schema>"})," lists all schemas that will be captured from."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If an even more restricted set of permissions is desired, you can also grant SELECT on\njust the specific table(s) which should be captured from. The \u2018information_schema\u2019 and\n\u2018pg_catalog\u2019 access is required for stream auto-discovery, but not for capturing already\nconfigured streams."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create the watermarks table, grant privileges, and create publication:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication;\nALTER PUBLICATION flow_publication SET (publish_via_partition_root = true);\nALTER PUBLICATION flow_publication ADD TABLE public.flow_watermarks, <other_tables>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"<other_tables>"})," lists all tables that will be captured from. The ",(0,r.jsx)(n.code,{children:"publish_via_partition_root"}),"\nsetting is recommended (because most users will want changes to a partitioned table to be captured\nunder the name of the root table) but is not required."]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Set WAL level to logical:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER SYSTEM SET wal_level = logical;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Restart PostgreSQL to allow the WAL level change to take effect."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"amazon-aurora",children:"Amazon Aurora"}),"\n",(0,r.jsx)(n.p,{children:"You must apply some of the settings to the entire Aurora DB cluster, and others to a database instance within the cluster.\nFor each step, take note of which entity you're working with."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To allow direct access:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Modifying.html#Aurora.Modifying.Instance",children:"Modify the instance"}),", choosing ",(0,r.jsx)(n.strong,{children:"Publicly accessible"})," in the ",(0,r.jsx)(n.strong,{children:"Connectivity"})," settings."]}),"\n",(0,r.jsxs)(n.li,{children:["Edit the VPC security group associated with your instance, or create a new VPC security group and associate it with the instance as described in ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html#Overview.RDSSecurityGroups.Create",children:"the Amazon documentation"}),". Create a new inbound rule and a new outbound rule that allow all traffic from the IP address ",(0,r.jsx)(n.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To allow secure connections via SSH tunneling:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow the guide to ",(0,r.jsx)(n.a,{href:"/guides/connect-network/",children:"configure an SSH server for tunneling"})]}),"\n",(0,r.jsxs)(n.li,{children:["When you configure your connector as described in the ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, including the additional ",(0,r.jsx)(n.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel. See ",(0,r.jsx)(n.a,{href:"/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable logical replication on your Aurora DB cluster."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithDBClusterParamGroups.html#USER_WorkingWithParamGroups.CreatingCluster",children:"parameter group"}),".\nCreate a unique name and description and set the following properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Family"}),": aurora-postgresql13, or substitute the version of Aurora PostgreSQL used for your cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": DB Cluster Parameter group"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithDBClusterParamGroups.html#USER_WorkingWithParamGroups.ModifyingCluster",children:"Modify the new parameter group"})," and set ",(0,r.jsx)(n.code,{children:"rds.logical_replication=1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithDBClusterParamGroups.html#USER_WorkingWithParamGroups.AssociatingCluster",children:"Associate the parameter group"})," with the DB cluster."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Reboot the cluster to allow the new parameter group to take effect."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the PostgreSQL client, connect to your instance and run the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table and publication."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE USER flow_capture WITH PASSWORD 'secret';\nGRANT rds_replication TO flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO flow_capture;\nALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication;\nALTER PUBLICATION flow_publication SET (publish_via_partition_root = true);\nALTER PUBLICATION flow_publication ADD TABLE public.flow_watermarks, <other_tables>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"<other_tables>"})," lists all tables that will be captured from. The ",(0,r.jsx)(n.code,{children:"publish_via_partition_root"}),"\nsetting is recommended (because most users will want changes to a partitioned table to be captured\nunder the name of the root table) but is not required."]}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.a,{href:"https://console.aws.amazon.com/rds/",children:"RDS console"}),", note the instance's Endpoint and Port. You'll need these for the ",(0,r.jsx)(n.code,{children:"address"})," property when you configure the connector."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"azure-database-for-postgresql",children:"Azure Database for PostgreSQL"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To allow direct access:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a new ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-manage-firewall-portal#create-a-firewall-rule-after-server-is-created",children:"firewall rule"})," that grants access to the IP address ",(0,r.jsx)(n.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To allow secure connections via SSH tunneling:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow the guide to ",(0,r.jsx)(n.a,{href:"/guides/connect-network/",children:"configure an SSH server for tunneling"})]}),"\n",(0,r.jsxs)(n.li,{children:["When you configure your connector as described in the ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, including the additional ",(0,r.jsx)(n.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel. See ",(0,r.jsx)(n.a,{href:"/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In your Azure PostgreSQL instance's support parameters, ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/postgresql/single-server/concepts-logical#set-up-your-server",children:"set replication to logical"})," to enable logical replication."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the PostgreSQL client, connect to your instance and run the following commands to create a new user for the capture with appropriate permissions."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE USER flow_capture WITH PASSWORD 'secret' REPLICATION;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If using PostgreSQL v14 or later:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT pg_read_all_data TO flow_capture;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If using an earlier version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES to flow_capture;\n    GRANT SELECT ON ALL TABLES IN SCHEMA public, <others> TO flow_capture;\n    GRANT SELECT ON ALL TABLES IN SCHEMA information_schema, pg_catalog TO flow_capture;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"<others>"})," lists all schemas that will be captured from."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If an even more restricted set of permissions is desired, you can also grant SELECT on\njust the specific table(s) which should be captured from. The \u2018information_schema\u2019 and      \u2018pg_catalog\u2019 access is required for stream auto-discovery, but not for capturing already\nconfigured streams."})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Set up the watermarks table and publication."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES to flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA public, <others> TO flow_capture;\nGRANT SELECT ON information_schema.columns, information_schema.tables, pg_catalog.pg_attribute, pg_catalog.pg_class, pg_catalog.pg_index, pg_catalog.pg_namespace TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication;\nALTER PUBLICATION flow_publication SET (publish_via_partition_root = true);\nALTER PUBLICATION flow_publication ADD TABLE public.flow_watermarks, <other_tables>;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Note the following important items for configuration:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Find the instance's host under Server Name, and the port under Connection Strings (usually ",(0,r.jsx)(n.code,{children:"5432"}),"). Together, you'll use the host",":port"," as the ",(0,r.jsx)(n.code,{children:"address"})," property when you configure the connector."]}),"\n",(0,r.jsxs)(n.li,{children:["Format ",(0,r.jsx)(n.code,{children:"user"})," as ",(0,r.jsx)(n.code,{children:"username@databasename"}),"; for example, ",(0,r.jsx)(n.code,{children:"flow_capture@myazuredb"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backfills-and-performance-considerations",children:"Backfills and performance considerations"}),"\n",(0,r.jsxs)(n.p,{children:["When the a PostgreSQL capture is initiated, by default, the connector first ",(0,r.jsx)(n.em,{children:"backfills"}),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."]}),"\n",(0,r.jsx)(n.p,{children:"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."}),"\n",(0,r.jsxs)(n.p,{children:["In this case, you may turn of backfilling on a per-table basis. See ",(0,r.jsx)(n.a,{href:"#properties",children:"properties"})," for details."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the PostgreSQL source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/address"})})}),(0,r.jsx)(n.td,{children:"Address"}),(0,r.jsxs)(n.td,{children:["The host or host",":port"," at which the database can be reached."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/database"})})}),(0,r.jsx)(n.td,{children:"Database"}),(0,r.jsx)(n.td,{children:"Logical database name to capture from."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Required, ",(0,r.jsx)(n.code,{children:'"postgres"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/user"})})}),(0,r.jsx)(n.td,{children:"User"}),(0,r.jsx)(n.td,{children:"The database user to authenticate as."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Required, ",(0,r.jsx)(n.code,{children:'"flow_capture"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/password"})})}),(0,r.jsx)(n.td,{children:"Password"}),(0,r.jsx)(n.td,{children:"Password for the specified database user."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced"})}),(0,r.jsx)(n.td,{children:"Advanced Options"}),(0,r.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/backfill_chunk_size"})}),(0,r.jsx)(n.td,{children:"Backfill Chunk Size"}),(0,r.jsx)(n.td,{children:"The number of rows which should be fetched from the database in a single backfill query."}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"4096"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/publicationName"})}),(0,r.jsx)(n.td,{children:"Publication Name"}),(0,r.jsx)(n.td,{children:"The name of the PostgreSQL publication to replicate from."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"flow_publication"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/skip_backfills"})}),(0,r.jsx)(n.td,{children:"Skip Backfills"}),(0,r.jsx)(n.td,{children:"A comma-separated list of fully-qualified table names which should not be backfilled."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/slotName"})}),(0,r.jsx)(n.td,{children:"Slot Name"}),(0,r.jsx)(n.td,{children:"The name of the PostgreSQL replication slot to replicate from."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"flow_slot"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/watermarksTable"})}),(0,r.jsx)(n.td,{children:"Watermarks Table"}),(0,r.jsx)(n.td,{children:"The name of the table used for watermark writes during backfills. Must be fully-qualified in '<schema>.<table>' form."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"public.flow_watermarks"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/sslmode"})}),(0,r.jsx)(n.td,{children:"SSL Mode"}),(0,r.jsx)(n.td,{children:"Overrides SSL connection behavior by setting the 'sslmode' parameter."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/namespace"})})}),(0,r.jsx)(n.td,{children:"Namespace"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/9.1/ddl-schemas.html",children:"namespace/schema"})," of the table."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Table name."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync mode"}),(0,r.jsxs)(n.td,{children:["Connection method. Always set to ",(0,r.jsx)(n.code,{children:"incremental"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ssl-mode",children:"SSL Mode"}),"\n",(0,r.jsxs)(n.p,{children:["Certain managed PostgreSQL implementations may require you to explicitly set the ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/libpq-ssl.html#LIBPQ-SSL-PROTECTION",children:"SSL Mode"})," to connect with Flow. One example is ",(0,r.jsx)(n.a,{href:"https://neon.tech/docs/connect/connect-securely",children:"Neon"}),", which requires the setting ",(0,r.jsx)(n.code,{children:"verify-full"}),". Check your managed PostgreSQL's documentation for details if you encounter errors related to the SSL mode configuration."]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.p,{children:"A minimal capture definition will look like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-postgres:dev"\n        config:\n          address: "localhost:5432"\n          database: "postgres"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: ${TABLE_NAMESPACE}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Your capture definition will likely be more complex, with additional bindings for each table in the source database."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,r.jsx)(n.h2,{id:"toasted-values",children:"TOASTed values"}),"\n",(0,r.jsxs)(n.p,{children:["PostgreSQL has a hard page size limit, usually 8 KB, for performance reasons.\nIf your tables contain values that exceed the limit, those values can't be stored directly.\nPostgreSQL uses ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/storage-toast.html",children:"TOAST"})," (The Oversized-Attribute Storage Technique) to\nstore them separately."]}),"\n",(0,r.jsxs)(n.p,{children:["TOASTed values can sometimes present a challenge for systems that rely on the PostgreSQL write-ahead log (WAL), like this connector.\nIf a change event occurs on a row that contains a TOASTed value, ",(0,r.jsx)(n.em,{children:"but the TOASTed value itself is unchanged"}),", it is omitted from the WAL.\nAs a result, the connector emits a row update with the a value omitted, which might cause\nunexpected results in downstream catalog tasks if adjustments are not made."]}),"\n",(0,r.jsxs)(n.p,{children:["The PostgreSQL connector handles TOASTed values for you when you follow the ",(0,r.jsx)(n.a,{href:"/concepts/connectors#flowctl-discover",children:"standard discovery workflow"}),"\nor use the ",(0,r.jsx)(n.a,{href:"/concepts/connectors#flow-ui",children:"Flow UI"})," to create your capture.\nIt uses ",(0,r.jsx)(n.a,{href:"/reference/reduction-strategies/merge",children:"merge"})," ",(0,r.jsx)(n.a,{href:"/concepts/schemas#reductions",children:"reductions"}),"\nto fill in the previous known TOASTed value in cases when that value is omitted from a row update."]}),"\n",(0,r.jsx)(n.p,{children:"However, due to the event-driven nature of certain tasks in Flow, it's still possible to see unexpected results in your data flow, specifically:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When you materialize the captured data to another system using a connector that requires ",(0,r.jsx)(n.a,{href:"/concepts/materialization#delta-updates",children:"delta updates"})]}),"\n",(0,r.jsxs)(n.li,{children:["When you perform a ",(0,r.jsx)(n.a,{href:"/concepts/derivations",children:"derivation"})," that uses TOASTed values"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.p,{children:"If you encounter an issue that you suspect is due to TOASTed values, try the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure your collection's schema is using the merge ",(0,r.jsx)(n.a,{href:"/concepts/schemas#reduce-annotations",children:"reduction strategy"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/9.4/sql-altertable.html",children:"Set REPLICA IDENTITY to FULL"})," for the table. This circumvents the problem by forcing the\nWAL to record all values regardless of size. However, this can have performance impacts on your database and must be carefully evaluated."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"mailto:support@estuary.dev",children:"Contact Estuary support"})," for assistance."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"publications",children:"Publications"}),"\n",(0,r.jsx)(n.p,{children:"It is recommended that the publication used by the capture only contain the tables that will be captured. In some cases it may be desirable to create this publication for all tables in the database instead of specific tables, for example using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE PUBLICATION flow_publication FOR ALL TABLES WITH (publish_via_partition_root = true);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Caution must be used if creating the publication in this way as all existing tables (even those not part of the capture) will be included in it, and if any of them do not have a primary key they will no longer be able to process updates or deletes."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);