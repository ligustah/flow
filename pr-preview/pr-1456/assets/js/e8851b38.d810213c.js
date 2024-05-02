"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7233],{34995:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=d(74848),n=d(28453);const t={},i="Microsoft SQLServer",l={id:"reference/Connectors/materialization-connectors/SQLServer/sqlserver",title:"Microsoft SQLServer",description:"This connector materializes Flow collections into tables in a Microsoft SQLServer database.",source:"@site/docs/reference/Connectors/materialization-connectors/SQLServer/sqlserver.md",sourceDirName:"reference/Connectors/materialization-connectors/SQLServer",slug:"/reference/Connectors/materialization-connectors/SQLServer/",permalink:"/pr-preview/pr-1456/reference/Connectors/materialization-connectors/SQLServer/",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/SQLServer/sqlserver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Webhook",permalink:"/pr-preview/pr-1456/reference/Connectors/materialization-connectors/http-webhook"},next:{title:"Amazon RDS for SQL Server",permalink:"/pr-preview/pr-1456/reference/Connectors/materialization-connectors/SQLServer/amazon-rds-sqlserver"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Self-hosted SQL Server",id:"self-hosted-sql-server",level:3},{value:"Azure SQL Database",id:"azure-sql-database",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2},{value:"Changelog",id:"changelog",level:2},{value:"V1: 2023-09-01",id:"v1-2023-09-01",level:4}];function x(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"microsoft-sqlserver",children:"Microsoft SQLServer"}),"\n",(0,s.jsx)(r.p,{children:"This connector materializes Flow collections into tables in a Microsoft SQLServer database."}),"\n",(0,s.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or\nopen-source workflows,\n",(0,s.jsx)(r.a,{href:"https://ghcr.io/estuary/materialize-sqlserver:dev",children:(0,s.jsx)(r.code,{children:"ghcr.io/estuary/materialize-sqlserver:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(r.p,{children:"To use this connector, you'll need:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["A SQLServer database to which to materialize, and user credentials.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"SQLServer 2017 and later are supported"}),"\n",(0,s.jsx)(r.li,{children:"The connector will create new tables in the database per your specification,\nso user credentials must have access to create new tables."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(r.p,{children:"To meet these requirements, follow the steps for your hosting type."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#self-hosted-sql-server",children:"Self-hosted SQL Server"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#azure-sql-database",children:"Azure SQL Database"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"./amazon-rds-sqlserver/",children:"Amazon RDS for SQL Server"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"./google-cloud-sql-sqlserver/",children:"Google Cloud SQL for SQL Server"})}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"self-hosted-sql-server",children:"Self-hosted SQL Server"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Connect to the server and issue the following commands:"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"USE <database>;\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_materialize WITH PASSWORD = 'secret';\nCREATE USER flow_materialize FOR LOGIN flow_materialize;\n-- Grant control on the database to flow_materialize\nGRANT CONTROL ON DATABASE::<database> TO flow_materialize;\n"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsxs)(r.li,{children:["Allow secure connection to Estuary Flow from your hosting environment. Either:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Set up an ",(0,s.jsx)(r.a,{href:"/guides/connect-network/",children:"SSH server for tunneling"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["When you fill out the ",(0,s.jsx)(r.a,{href:"#endpoint",children:"endpoint configuration"}),",\ninclude the additional ",(0,s.jsx)(r.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel.\nSee ",(0,s.jsx)(r.a,{href:"/pr-preview/pr-1456/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"}),"\nfor additional details and a sample."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Whitelist the Estuary IP address, ",(0,s.jsx)(r.code,{children:"34.121.207.128"})," in your firewall rules."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"azure-sql-database",children:"Azure SQL Database"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"To allow direct access:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Create a new ",(0,s.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure?view=azuresql#use-the-azure-portal-to-manage-server-level-ip-firewall-rules",children:"firewall rule"})," that grants access to the IP address ",(0,s.jsx)(r.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"To allow secure connections via SSH tunneling:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Follow the guide to ",(0,s.jsx)(r.a,{href:"/guides/connect-network/",children:"configure an SSH server for tunneling"})]}),"\n",(0,s.jsxs)(r.li,{children:["When you configure your connector as described in the ",(0,s.jsx)(r.a,{href:"#configuration",children:"configuration"})," section above, including the additional ",(0,s.jsx)(r.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel. See ",(0,s.jsx)(r.a,{href:"/pr-preview/pr-1456/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["In your SQL client, connect to your instance as the default ",(0,s.jsx)(r.code,{children:"sqlserver"})," user and issue the following commands."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"USE <database>;\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_materialize WITH PASSWORD = 'secret';\nCREATE USER flow_materialize FOR LOGIN flow_materialize;\n-- Grant control on the database to flow_materialize\nGRANT CONTROL ON DATABASE::<database> TO flow_materialize;\n"})}),"\n",(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Note the following important items for configuration:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Find the instance's host under Server Name. The port is always ",(0,s.jsx)(r.code,{children:"1433"}),". Together, you'll use the host",":port"," as the ",(0,s.jsx)(r.code,{children:"address"})," property when you configure the connector."]}),"\n",(0,s.jsxs)(r.li,{children:["Format ",(0,s.jsx)(r.code,{children:"user"})," as ",(0,s.jsx)(r.code,{children:"username@databasename"}),"; for example, ",(0,s.jsx)(r.code,{children:"flow_materialize@myazuredb"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(r.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a SQLServer materialization, which will direct one or more of your Flow collections to your desired tables, or views, in the database."}),"\n",(0,s.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/database"})})}),(0,s.jsx)(r.td,{children:"Database"}),(0,s.jsx)(r.td,{children:"Name of the logical database to materialize to."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/address"})})}),(0,s.jsx)(r.td,{children:"Address"}),(0,s.jsxs)(r.td,{children:["Host and port of the database. If only the host is specified, port will default to ",(0,s.jsx)(r.code,{children:"3306"}),"."]}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/password"})})}),(0,s.jsx)(r.td,{children:"Password"}),(0,s.jsx)(r.td,{children:"Password for the specified database user."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/user"})})}),(0,s.jsx)(r.td,{children:"User"}),(0,s.jsx)(r.td,{children:"Database user to connect as."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/table"})})}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"Table name to materialize to. It will be created by the connector, unless the connector has previously created it."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/delta_updates"})}),(0,s.jsx)(r.td,{children:"Delta Update"}),(0,s.jsx)(r.td,{children:"Should updates to this table be done via delta updates."}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-sqlserver:dev\n        config:\n          database: flow\n          address: localhost:5432\n          password: flow\n          user: flow\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,s.jsxs)(r.p,{children:["This connector supports both standard (merge) and ",(0,s.jsx)(r.a,{href:"/pr-preview/pr-1456/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]}),"\n",(0,s.jsx)(r.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,s.jsxs)(r.p,{children:["SQLServer has a list of reserved words that must be quoted in order to be used as an identifier.\nFlow considers all the reserved words in the official ",(0,s.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/sql/t-sql/language-elements/reserved-keywords-transact-sql?view=sql-server-2017",children:"SQLServer documentation"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"These reserved words are listed in the table below. Flow automatically quotes fields that are in this list."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Reserved words"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"absolute"}),(0,s.jsx)(r.td,{children:"connect"}),(0,s.jsx)(r.td,{children:"else"}),(0,s.jsx)(r.td,{children:"intersect"}),(0,s.jsx)(r.td,{children:"on"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"action"}),(0,s.jsx)(r.td,{children:"connection"}),(0,s.jsx)(r.td,{children:"end"}),(0,s.jsx)(r.td,{children:"intersection"}),(0,s.jsx)(r.td,{children:"only"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ada"}),(0,s.jsx)(r.td,{children:"constraint"}),(0,s.jsx)(r.td,{children:"end-exec"}),(0,s.jsx)(r.td,{children:"interval"}),(0,s.jsx)(r.td,{children:"open"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"add"}),(0,s.jsx)(r.td,{children:"constraints"}),(0,s.jsx)(r.td,{children:"equals"}),(0,s.jsx)(r.td,{children:"into"}),(0,s.jsx)(r.td,{children:"opendatasourc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"admin"}),(0,s.jsx)(r.td,{children:"constructor"}),(0,s.jsx)(r.td,{children:"errlvl"}),(0,s.jsx)(r.td,{children:"is"}),(0,s.jsx)(r.td,{children:"openquery"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"after"}),(0,s.jsx)(r.td,{children:"contains"}),(0,s.jsx)(r.td,{children:"escape"}),(0,s.jsx)(r.td,{children:"isolation"}),(0,s.jsx)(r.td,{children:"openrowset"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aggregate"}),(0,s.jsx)(r.td,{children:"containstable"}),(0,s.jsx)(r.td,{children:"every"}),(0,s.jsx)(r.td,{children:"iterate"}),(0,s.jsx)(r.td,{children:"openxml"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"alias"}),(0,s.jsx)(r.td,{children:"continue"}),(0,s.jsx)(r.td,{children:"except"}),(0,s.jsx)(r.td,{children:"join"}),(0,s.jsx)(r.td,{children:"operation"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"all"}),(0,s.jsx)(r.td,{children:"convert"}),(0,s.jsx)(r.td,{children:"exception"}),(0,s.jsx)(r.td,{children:"key"}),(0,s.jsx)(r.td,{children:"option"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"allocate"}),(0,s.jsx)(r.td,{children:"corr"}),(0,s.jsx)(r.td,{children:"exec"}),(0,s.jsx)(r.td,{children:"kill"}),(0,s.jsx)(r.td,{children:"or"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"alter"}),(0,s.jsx)(r.td,{children:"corresponding"}),(0,s.jsx)(r.td,{children:"execute"}),(0,s.jsx)(r.td,{children:"language"}),(0,s.jsx)(r.td,{children:"order"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"and"}),(0,s.jsx)(r.td,{children:"count"}),(0,s.jsx)(r.td,{children:"exists"}),(0,s.jsx)(r.td,{children:"large"}),(0,s.jsx)(r.td,{children:"ordinality"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"any"}),(0,s.jsx)(r.td,{children:"covar_pop"}),(0,s.jsx)(r.td,{children:"exit"}),(0,s.jsx)(r.td,{children:"last"}),(0,s.jsx)(r.td,{children:"out"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"are"}),(0,s.jsx)(r.td,{children:"covar_samp"}),(0,s.jsx)(r.td,{children:"external"}),(0,s.jsx)(r.td,{children:"lateral"}),(0,s.jsx)(r.td,{children:"outer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"array"}),(0,s.jsx)(r.td,{children:"create"}),(0,s.jsx)(r.td,{children:"extract"}),(0,s.jsx)(r.td,{children:"leading"}),(0,s.jsx)(r.td,{children:"output"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"as"}),(0,s.jsx)(r.td,{children:"cross"}),(0,s.jsx)(r.td,{children:"false"}),(0,s.jsx)(r.td,{children:"left"}),(0,s.jsx)(r.td,{children:"over"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"asc"}),(0,s.jsx)(r.td,{children:"cube"}),(0,s.jsx)(r.td,{children:"fetch"}),(0,s.jsx)(r.td,{children:"less"}),(0,s.jsx)(r.td,{children:"overlaps"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"asensitive"}),(0,s.jsx)(r.td,{children:"cume_dist"}),(0,s.jsx)(r.td,{children:"file"}),(0,s.jsx)(r.td,{children:"level"}),(0,s.jsx)(r.td,{children:"overlay"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"assertion"}),(0,s.jsx)(r.td,{children:"current"}),(0,s.jsx)(r.td,{children:"fillfactor"}),(0,s.jsx)(r.td,{children:"like"}),(0,s.jsx)(r.td,{children:"pad"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"asymmetric"}),(0,s.jsx)(r.td,{children:"current_catal"}),(0,s.jsx)(r.td,{children:"filter"}),(0,s.jsx)(r.td,{children:"like_regex"}),(0,s.jsx)(r.td,{children:"parameter"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"at"}),(0,s.jsx)(r.td,{children:"current_date"}),(0,s.jsx)(r.td,{children:"first"}),(0,s.jsx)(r.td,{children:"limit"}),(0,s.jsx)(r.td,{children:"parameters"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"atomic"}),(0,s.jsx)(r.td,{children:"current_defau"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"lineno"}),(0,s.jsx)(r.td,{children:"partial"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"authorization"}),(0,s.jsx)(r.td,{children:"current_path"}),(0,s.jsx)(r.td,{children:"for"}),(0,s.jsx)(r.td,{children:"ln"}),(0,s.jsx)(r.td,{children:"partition"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"avg"}),(0,s.jsx)(r.td,{children:"current_role"}),(0,s.jsx)(r.td,{children:"foreign"}),(0,s.jsx)(r.td,{children:"load"}),(0,s.jsx)(r.td,{children:"pascal"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"backup"}),(0,s.jsx)(r.td,{children:"current_schem"}),(0,s.jsx)(r.td,{children:"fortran"}),(0,s.jsx)(r.td,{children:"local"}),(0,s.jsx)(r.td,{children:"path"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"before"}),(0,s.jsx)(r.td,{children:"current_time"}),(0,s.jsx)(r.td,{children:"found"}),(0,s.jsx)(r.td,{children:"localtime"}),(0,s.jsx)(r.td,{children:"percent"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"begin"}),(0,s.jsx)(r.td,{children:"current_times"}),(0,s.jsx)(r.td,{children:"free"}),(0,s.jsx)(r.td,{children:"localtimestam"}),(0,s.jsx)(r.td,{children:"percent_rank"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"between"}),(0,s.jsx)(r.td,{children:"current_trans"}),(0,s.jsx)(r.td,{children:"freetext"}),(0,s.jsx)(r.td,{children:"locator"}),(0,s.jsx)(r.td,{children:"percentile_co"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"binary"}),(0,s.jsx)(r.td,{children:"current_user"}),(0,s.jsx)(r.td,{children:"freetexttable"}),(0,s.jsx)(r.td,{children:"lower"}),(0,s.jsx)(r.td,{children:"percentile_di"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bit"}),(0,s.jsx)(r.td,{children:"cursor"}),(0,s.jsx)(r.td,{children:"from"}),(0,s.jsx)(r.td,{children:"map"}),(0,s.jsx)(r.td,{children:"pivot"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bit_length"}),(0,s.jsx)(r.td,{children:"cycle"}),(0,s.jsx)(r.td,{children:"full"}),(0,s.jsx)(r.td,{children:"match"}),(0,s.jsx)(r.td,{children:"plan"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"blob"}),(0,s.jsx)(r.td,{children:"data"}),(0,s.jsx)(r.td,{children:"fulltexttable"}),(0,s.jsx)(r.td,{children:"max"}),(0,s.jsx)(r.td,{children:"position"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsx)(r.td,{children:"database"}),(0,s.jsx)(r.td,{children:"function"}),(0,s.jsx)(r.td,{children:"member"}),(0,s.jsx)(r.td,{children:"position_rege"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"both"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"fusion"}),(0,s.jsx)(r.td,{children:"merge"}),(0,s.jsx)(r.td,{children:"postfix"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"breadth"}),(0,s.jsx)(r.td,{children:"day"}),(0,s.jsx)(r.td,{children:"general"}),(0,s.jsx)(r.td,{children:"method"}),(0,s.jsx)(r.td,{children:"precision"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"break"}),(0,s.jsx)(r.td,{children:"dbcc"}),(0,s.jsx)(r.td,{children:"get"}),(0,s.jsx)(r.td,{children:"min"}),(0,s.jsx)(r.td,{children:"prefix"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"browse"}),(0,s.jsx)(r.td,{children:"deallocate"}),(0,s.jsx)(r.td,{children:"global"}),(0,s.jsx)(r.td,{children:"minute"}),(0,s.jsx)(r.td,{children:"preorder"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bulk"}),(0,s.jsx)(r.td,{children:"dec"}),(0,s.jsx)(r.td,{children:"go"}),(0,s.jsx)(r.td,{children:"mod"}),(0,s.jsx)(r.td,{children:"prepare"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"by"}),(0,s.jsx)(r.td,{children:"decimal"}),(0,s.jsx)(r.td,{children:"goto"}),(0,s.jsx)(r.td,{children:"modifies"}),(0,s.jsx)(r.td,{children:"preserve"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"call"}),(0,s.jsx)(r.td,{children:"declare"}),(0,s.jsx)(r.td,{children:"grant"}),(0,s.jsx)(r.td,{children:"modify"}),(0,s.jsx)(r.td,{children:"primary"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"called"}),(0,s.jsx)(r.td,{children:"default"}),(0,s.jsx)(r.td,{children:"group"}),(0,s.jsx)(r.td,{children:"module"}),(0,s.jsx)(r.td,{children:"print"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cardinality"}),(0,s.jsx)(r.td,{children:"deferrable"}),(0,s.jsx)(r.td,{children:"grouping"}),(0,s.jsx)(r.td,{children:"month"}),(0,s.jsx)(r.td,{children:"prior"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cascade"}),(0,s.jsx)(r.td,{children:"deferred"}),(0,s.jsx)(r.td,{children:"having"}),(0,s.jsx)(r.td,{children:"multiset"}),(0,s.jsx)(r.td,{children:"privileges"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cascaded"}),(0,s.jsx)(r.td,{children:"delete"}),(0,s.jsx)(r.td,{children:"hold"}),(0,s.jsx)(r.td,{children:"names"}),(0,s.jsx)(r.td,{children:"proc"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"case"}),(0,s.jsx)(r.td,{children:"deny"}),(0,s.jsx)(r.td,{children:"holdlock"}),(0,s.jsx)(r.td,{children:"national"}),(0,s.jsx)(r.td,{children:"procedure"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cast"}),(0,s.jsx)(r.td,{children:"depth"}),(0,s.jsx)(r.td,{children:"host"}),(0,s.jsx)(r.td,{children:"natural"}),(0,s.jsx)(r.td,{children:"public"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"catalog"}),(0,s.jsx)(r.td,{children:"deref"}),(0,s.jsx)(r.td,{children:"hour"}),(0,s.jsx)(r.td,{children:"nchar"}),(0,s.jsx)(r.td,{children:"raiserror"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"char"}),(0,s.jsx)(r.td,{children:"desc"}),(0,s.jsx)(r.td,{children:"identity"}),(0,s.jsx)(r.td,{children:"nclob"}),(0,s.jsx)(r.td,{children:"range"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"char_length"}),(0,s.jsx)(r.td,{children:"describe"}),(0,s.jsx)(r.td,{children:"identity_inse"}),(0,s.jsx)(r.td,{children:"new"}),(0,s.jsx)(r.td,{children:"read"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"character"}),(0,s.jsx)(r.td,{children:"descriptor"}),(0,s.jsx)(r.td,{children:"identitycol"}),(0,s.jsx)(r.td,{children:"next"}),(0,s.jsx)(r.td,{children:"reads"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"character_len"}),(0,s.jsx)(r.td,{children:"destroy"}),(0,s.jsx)(r.td,{children:"if"}),(0,s.jsx)(r.td,{children:"no"}),(0,s.jsx)(r.td,{children:"readtext"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"check"}),(0,s.jsx)(r.td,{children:"destructor"}),(0,s.jsx)(r.td,{children:"ignore"}),(0,s.jsx)(r.td,{children:"nocheck"}),(0,s.jsx)(r.td,{children:"real"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"checkpoint"}),(0,s.jsx)(r.td,{children:"deterministic"}),(0,s.jsx)(r.td,{children:"immediate"}),(0,s.jsx)(r.td,{children:"nonclustered"}),(0,s.jsx)(r.td,{children:"reconfigure"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"class"}),(0,s.jsx)(r.td,{children:"diagnostics"}),(0,s.jsx)(r.td,{children:"in"}),(0,s.jsx)(r.td,{children:"none"}),(0,s.jsx)(r.td,{children:"recursive"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clob"}),(0,s.jsx)(r.td,{children:"dictionary"}),(0,s.jsx)(r.td,{children:"include"}),(0,s.jsx)(r.td,{children:"normalize"}),(0,s.jsx)(r.td,{children:"ref"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"close"}),(0,s.jsx)(r.td,{children:"disconnect"}),(0,s.jsx)(r.td,{children:"index"}),(0,s.jsx)(r.td,{children:"not"}),(0,s.jsx)(r.td,{children:"references"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"clustered"}),(0,s.jsx)(r.td,{children:"disk"}),(0,s.jsx)(r.td,{children:"indicator"}),(0,s.jsx)(r.td,{children:"null"}),(0,s.jsx)(r.td,{children:"referencing"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"coalesce"}),(0,s.jsx)(r.td,{children:"distinct"}),(0,s.jsx)(r.td,{children:"initialize"}),(0,s.jsx)(r.td,{children:"nullif"}),(0,s.jsx)(r.td,{children:"regr_avgx"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"collate"}),(0,s.jsx)(r.td,{children:"distributed"}),(0,s.jsx)(r.td,{children:"initially"}),(0,s.jsx)(r.td,{children:"numeric"}),(0,s.jsx)(r.td,{children:"regr_avgy"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"collation"}),(0,s.jsx)(r.td,{children:"domain"}),(0,s.jsx)(r.td,{children:"inner"}),(0,s.jsx)(r.td,{children:"object"}),(0,s.jsx)(r.td,{children:"regr_count"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"collect"}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"inout"}),(0,s.jsx)(r.td,{children:"occurrences_r"}),(0,s.jsx)(r.td,{children:"regr_intercep"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"column"}),(0,s.jsx)(r.td,{children:"drop"}),(0,s.jsx)(r.td,{children:"input"}),(0,s.jsx)(r.td,{children:"octet_length"}),(0,s.jsx)(r.td,{children:"regr_r2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"commit"}),(0,s.jsx)(r.td,{children:"dump"}),(0,s.jsx)(r.td,{children:"insensitive"}),(0,s.jsx)(r.td,{children:"of"}),(0,s.jsx)(r.td,{children:"regr_slope"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"completion"}),(0,s.jsx)(r.td,{children:"dynamic"}),(0,s.jsx)(r.td,{children:"insert"}),(0,s.jsx)(r.td,{children:"off"}),(0,s.jsx)(r.td,{children:"regr_sxx"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"compute"}),(0,s.jsx)(r.td,{children:"each"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"offsets"}),(0,s.jsx)(r.td,{children:"regr_sxy"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"condition"}),(0,s.jsx)(r.td,{children:"element"}),(0,s.jsx)(r.td,{children:"integer"}),(0,s.jsx)(r.td,{children:"old"}),(0,s.jsx)(r.td,{children:"regr_syy"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"relative"}),(0,s.jsx)(r.td,{children:"semanticsimil"}),(0,s.jsx)(r.td,{children:"structure"}),(0,s.jsx)(r.td,{children:"truncate"}),(0,s.jsx)(r.td,{children:"window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"release"}),(0,s.jsx)(r.td,{children:"semanticsimil"}),(0,s.jsx)(r.td,{children:"submultiset"}),(0,s.jsx)(r.td,{children:"try_convert"}),(0,s.jsx)(r.td,{children:"with"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"replication"}),(0,s.jsx)(r.td,{children:"sensitive"}),(0,s.jsx)(r.td,{children:"substring"}),(0,s.jsx)(r.td,{children:"tsequal"}),(0,s.jsx)(r.td,{children:"within"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"restore"}),(0,s.jsx)(r.td,{children:"sequence"}),(0,s.jsx)(r.td,{children:"substring_reg"}),(0,s.jsx)(r.td,{children:"uescape"}),(0,s.jsx)(r.td,{children:"within"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"restrict"}),(0,s.jsx)(r.td,{children:"session"}),(0,s.jsx)(r.td,{children:"sum"}),(0,s.jsx)(r.td,{children:"under"}),(0,s.jsx)(r.td,{children:"without"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"result"}),(0,s.jsx)(r.td,{children:"session_user"}),(0,s.jsx)(r.td,{children:"symmetric"}),(0,s.jsx)(r.td,{children:"union"}),(0,s.jsx)(r.td,{children:"work"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"return"}),(0,s.jsx)(r.td,{children:"set"}),(0,s.jsx)(r.td,{children:"system"}),(0,s.jsx)(r.td,{children:"unique"}),(0,s.jsx)(r.td,{children:"write"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"returns"}),(0,s.jsx)(r.td,{children:"sets"}),(0,s.jsx)(r.td,{children:"system_user"}),(0,s.jsx)(r.td,{children:"unknown"}),(0,s.jsx)(r.td,{children:"writetext"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"revert"}),(0,s.jsx)(r.td,{children:"setuser"}),(0,s.jsx)(r.td,{children:"table"}),(0,s.jsx)(r.td,{children:"unnest"}),(0,s.jsx)(r.td,{children:"xmlagg"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"revoke"}),(0,s.jsx)(r.td,{children:"shutdown"}),(0,s.jsx)(r.td,{children:"tablesample"}),(0,s.jsx)(r.td,{children:"unpivot"}),(0,s.jsx)(r.td,{children:"xmlattributes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"right"}),(0,s.jsx)(r.td,{children:"similar"}),(0,s.jsx)(r.td,{children:"temporary"}),(0,s.jsx)(r.td,{children:"update"}),(0,s.jsx)(r.td,{children:"xmlbinary"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"role"}),(0,s.jsx)(r.td,{children:"size"}),(0,s.jsx)(r.td,{children:"terminate"}),(0,s.jsx)(r.td,{children:"updatetext"}),(0,s.jsx)(r.td,{children:"xmlcast"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rollback"}),(0,s.jsx)(r.td,{children:"smallint"}),(0,s.jsx)(r.td,{children:"textsize"}),(0,s.jsx)(r.td,{children:"upper"}),(0,s.jsx)(r.td,{children:"xmlcomment"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rollup"}),(0,s.jsx)(r.td,{children:"some"}),(0,s.jsx)(r.td,{children:"than"}),(0,s.jsx)(r.td,{children:"usage"}),(0,s.jsx)(r.td,{children:"xmlconcat"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"routine"}),(0,s.jsx)(r.td,{children:"space"}),(0,s.jsx)(r.td,{children:"then"}),(0,s.jsx)(r.td,{children:"use"}),(0,s.jsx)(r.td,{children:"xmldocument"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"row"}),(0,s.jsx)(r.td,{children:"specific"}),(0,s.jsx)(r.td,{children:"time"}),(0,s.jsx)(r.td,{children:"user"}),(0,s.jsx)(r.td,{children:"xmlelement"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rowcount"}),(0,s.jsx)(r.td,{children:"specifictype"}),(0,s.jsx)(r.td,{children:"timestamp"}),(0,s.jsx)(r.td,{children:"using"}),(0,s.jsx)(r.td,{children:"xmlexists"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rowguidcol"}),(0,s.jsx)(r.td,{children:"sql"}),(0,s.jsx)(r.td,{children:"timezone_hour"}),(0,s.jsx)(r.td,{children:"value"}),(0,s.jsx)(r.td,{children:"xmlforest"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rows"}),(0,s.jsx)(r.td,{children:"sqlca"}),(0,s.jsx)(r.td,{children:"timezone_minu"}),(0,s.jsx)(r.td,{children:"values"}),(0,s.jsx)(r.td,{children:"xmliterate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rule"}),(0,s.jsx)(r.td,{children:"sqlcode"}),(0,s.jsx)(r.td,{children:"to"}),(0,s.jsx)(r.td,{children:"var_pop"}),(0,s.jsx)(r.td,{children:"xmlnamespaces"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"save"}),(0,s.jsx)(r.td,{children:"sqlerror"}),(0,s.jsx)(r.td,{children:"top"}),(0,s.jsx)(r.td,{children:"var_samp"}),(0,s.jsx)(r.td,{children:"xmlparse"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"savepoint"}),(0,s.jsx)(r.td,{children:"sqlexception"}),(0,s.jsx)(r.td,{children:"trailing"}),(0,s.jsx)(r.td,{children:"varchar"}),(0,s.jsx)(r.td,{children:"xmlpi"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"schema"}),(0,s.jsx)(r.td,{children:"sqlstate"}),(0,s.jsx)(r.td,{children:"tran"}),(0,s.jsx)(r.td,{children:"variable"}),(0,s.jsx)(r.td,{children:"xmlquery"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"scope"}),(0,s.jsx)(r.td,{children:"sqlwarning"}),(0,s.jsx)(r.td,{children:"transaction"}),(0,s.jsx)(r.td,{children:"varying"}),(0,s.jsx)(r.td,{children:"xmlserialize"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"scroll"}),(0,s.jsx)(r.td,{children:"start"}),(0,s.jsx)(r.td,{children:"translate"}),(0,s.jsx)(r.td,{children:"view"}),(0,s.jsx)(r.td,{children:"xmltable"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"search"}),(0,s.jsx)(r.td,{children:"state"}),(0,s.jsx)(r.td,{children:"translate_reg"}),(0,s.jsx)(r.td,{children:"waitfor"}),(0,s.jsx)(r.td,{children:"xmltext"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"second"}),(0,s.jsx)(r.td,{children:"statement"}),(0,s.jsx)(r.td,{children:"translation"}),(0,s.jsx)(r.td,{children:"when"}),(0,s.jsx)(r.td,{children:"xmlvalidate"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"section"}),(0,s.jsx)(r.td,{children:"static"}),(0,s.jsx)(r.td,{children:"treat"}),(0,s.jsx)(r.td,{children:"whenever"}),(0,s.jsx)(r.td,{children:"year"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"securityaudit"}),(0,s.jsx)(r.td,{children:"statistics"}),(0,s.jsx)(r.td,{children:"trigger"}),(0,s.jsx)(r.td,{children:"where"}),(0,s.jsx)(r.td,{children:"zone"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"select"}),(0,s.jsx)(r.td,{children:"stddev_pop"}),(0,s.jsx)(r.td,{children:"trim"}),(0,s.jsx)(r.td,{children:"while"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"semantickeyph"}),(0,s.jsx)(r.td,{children:"stddev_samp"}),(0,s.jsx)(r.td,{children:"true"}),(0,s.jsx)(r.td,{children:"width_bucket"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(r.p,{children:"The changelog includes a list of breaking changes made to this connector. Backwards-compatible changes are not listed."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Proceed with caution when editing materializations created with previous versions of this connector;\nediting always upgrades your materialization to the latest connector version."})}),"\n",(0,s.jsx)(r.h4,{id:"v1-2023-09-01",children:"V1: 2023-09-01"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"First version"}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>l});var s=d(96540);const n={},t=s.createContext(n);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);