"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7196],{11477:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=r(74848),s=r(28453);const n={},i="AlloyDB",l={id:"reference/Connectors/materialization-connectors/alloydb",title:"AlloyDB",description:"This connector materializes Flow collections into tables in an AlloyDB database.",source:"@site/docs/reference/Connectors/materialization-connectors/alloydb.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/alloydb",permalink:"/pr-preview/pr-1453/reference/Connectors/materialization-connectors/alloydb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/alloydb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Materialization connectors",permalink:"/pr-preview/pr-1453/reference/Connectors/materialization-connectors/"},next:{title:"Amazon DynamoDB",permalink:"/pr-preview/pr-1453/reference/Connectors/materialization-connectors/amazon-dynamodb"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Reserved words",id:"reserved-words",level:2}];function x(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h1,{id:"alloydb",children:"AlloyDB"}),"\n",(0,t.jsx)(d.p,{children:"This connector materializes Flow collections into tables in an AlloyDB database."}),"\n",(0,t.jsxs)(d.p,{children:["AlloyDB is a fully managed, PostgreSQL-compatible database available in the Google Cloud platform.\nThis connector is derived from the ",(0,t.jsx)(d.a,{href:"/reference/Connectors/materialization-connectors/PostgreSQL/",children:"PostgreSQL materialization connector"}),",\nso the same configuration applies, but the setup steps look somewhat different."]}),"\n",(0,t.jsxs)(d.p,{children:["It's available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(d.a,{href:"https://ghcr.io/estuary/materialize-alloydb:dev",children:(0,t.jsx)(d.code,{children:"ghcr.io/estuary/materialize-alloydb:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(d.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(d.p,{children:"To use this connector, you'll need:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"An AlloyDB database to which to materialize, and user credentials.\nThe connector will create new tables in the database per your specification. Tables created manually in advance are not supported."}),"\n",(0,t.jsxs)(d.li,{children:["A virtual machine to connect securely to the instance via SSH tunneling. (AlloyDB doesn't support IP whitelisting.)\nFollow the instructions to create a ",(0,t.jsx)(d.a,{href:"/pr-preview/pr-1453/guides/connect-network#setup-for-google-cloud",children:"virtual machine for SSH tunneling"}),"\nin the same Google Cloud project as your instance."]}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(d.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a AlloyDB materialization, which will direct one or more of your Flow collections to your desired tables, or views, in the database."}),"\n",(0,t.jsx)(d.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(d.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(d.p,{children:["The SSH config section is required for this connector.\nYou'll fill in the database address with a localhost IP address,\nand specify your VM's IP address as the SSH address.\nSee the table below and the ",(0,t.jsx)(d.a,{href:"#sample",children:"sample config"}),"."]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Property"}),(0,t.jsx)(d.th,{children:"Title"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Required/Default"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"/database"})}),(0,t.jsx)(d.td,{children:"Database"}),(0,t.jsx)(d.td,{children:"Name of the logical database to materialize to."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/address"})})}),(0,t.jsx)(d.td,{children:"Address"}),(0,t.jsxs)(d.td,{children:["Host and port. Set to ",(0,t.jsx)(d.code,{children:"127.0.0.1:5432"})," to enable SSH tunneling."]}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/password"})})}),(0,t.jsx)(d.td,{children:"Password"}),(0,t.jsx)(d.td,{children:"Password for the specified database user."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"/schema"})}),(0,t.jsx)(d.td,{children:"Database Schema"}),(0,t.jsxs)(d.td,{children:["Database ",(0,t.jsx)(d.a,{href:"https://www.postgresql.org/docs/current/ddl-schemas.html",children:"schema"})," to use for materialized tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables"]}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:'"public"'})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/user"})})}),(0,t.jsx)(d.td,{children:"User"}),(0,t.jsx)(d.td,{children:"Database user to connect as."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"networkTunnel"})}),(0,t.jsx)(d.td,{children:"Network Tunnel"}),(0,t.jsx)(d.td,{children:"Connect to your system through an SSH server that acts as a bastion host for your network."}),(0,t.jsx)(d.td,{children:"Object"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"networkTunnel/sshForwarding"})}),(0,t.jsx)(d.td,{children:"SSH Forwarding"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Object"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"networkTunnel/sshForwarding/sshEndpoint"})}),(0,t.jsx)(d.td,{children:"SSH Endpoint"}),(0,t.jsx)(d.td,{children:"Endpoint of the remote SSH server (in this case, your Google Cloud VM) that supports tunneling (in the form of ssh://user@address."}),(0,t.jsx)(d.td,{children:"String"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"networkTunnel/sshForwarding/privateKey"})}),(0,t.jsx)(d.td,{children:"SSH Private Key"}),(0,t.jsx)(d.td,{children:"Private key to connect to the remote SSH server."}),(0,t.jsx)(d.td,{children:"String"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Property"}),(0,t.jsx)(d.th,{children:"Title"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Required/Default"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"/additional_table_create_sql"})}),(0,t.jsx)(d.td,{children:"Additional Table Create SQL"}),(0,t.jsx)(d.td,{children:"Additional SQL statement(s) to be run in the same transaction that creates the table."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"/delta_updates"})}),(0,t.jsx)(d.td,{children:"Delta Update"}),(0,t.jsx)(d.td,{children:"Should updates to this table be done via delta updates."}),(0,t.jsx)(d.td,{children:"boolean"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"/schema"})}),(0,t.jsx)(d.td,{children:"Alternative Schema"}),(0,t.jsx)(d.td,{children:"Alternative schema for this table (optional). Overrides schema set in endpoint configuration."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/table"})})}),(0,t.jsx)(d.td,{children:"Table"}),(0,t.jsx)(d.td,{children:"Table name to materialize to. It will be created by the connector, unless the connector has previously created it."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-alloydb:dev\n        config:\n          database: postgres\n          address: 127.0.0.1:5432\n          password: flow\n          user: flow\n          networkTunnel:\n            sshForwarding:\n              sshEndpoint: ssh://sshUser@<vm-ip-address>\n              privateKey: |2\n              -----BEGIN RSA PRIVATE KEY-----\n              MIICXAIBAAKBgQCJO7G6R+kv2MMS8Suw21sk2twHg8Vog0fjimEWJEwyAfFM/Toi\n              EJ6r5RTaSvN++/+MPWUll7sUdOOBZr6ErLKLHEt7uXxusAzOjMxFKZpEARMcjwHY\n              v/tN1A2OYU0qay1DOwknEE0i+/Bvf8lMS7VDjHmwRaBtRed/+iAQHf128QIDAQAB\n              AoGAGoOUBP+byAjDN8esv1DCPU6jsDf/Tf//RbEYrOR6bDb/3fYW4zn+zgtGih5t\n              CR268+dwwWCdXohu5DNrn8qV/Awk7hWp18mlcNyO0skT84zvippe+juQMK4hDQNi\n              ywp8mDvKQwpOuzw6wNEitcGDuACx5U/1JEGGmuIRGx2ST5kCQQDsstfWDcYqbdhr\n              5KemOPpu80OtBYzlgpN0iVP/6XW1e5FCRp2ofQKZYXVwu5txKIakjYRruUiiZTza\n              QeXRPbp3AkEAlGx6wMe1l9UtAAlkgCFYbuxM+eRD4Gg5qLYFpKNsoINXTnlfDry5\n              +1NkuyiQDjzOSPiLZ4Abpf+a+myjOuNL1wJBAOwkdM6aCVT1J9BkW5mrCLY+PgtV\n              GT80KTY/d6091fBMKhxL5SheJ4SsRYVFtguL2eA7S5xJSpyxkadRzR0Wj3sCQAvA\n              bxO2fE1SRqbbF4cBnOPjd9DNXwZ0miQejWHUwrQO0inXeExNaxhYKQCcnJNUAy1J\n              6JfAT/AbxeSQF3iBKK8CQAt5r/LLEM1/8ekGOvBh8MAQpWBW771QzHUN84SiUd/q\n              xR9mfItngPwYJ9d/pTO7u9ZUPHEoat8Ave4waB08DsI=\n              -----END RSA PRIVATE KEY-----\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,t.jsx)(d.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,t.jsxs)(d.p,{children:['PostgreSQL has a list of reserved words that must be quoted in order to be used as an identifier.\nFlow considers all the reserved words that are marked as "reserved" in any of the columns in the official ',(0,t.jsx)(d.a,{href:"https://www.postgresql.org/docs/current/sql-keywords-appendix.html",children:"PostgreSQL documentation"}),"."]}),"\n",(0,t.jsx)(d.p,{children:"These reserve words are listed in the table below. Flow automatically quotes fields that are in this list."}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Reserved words"}),(0,t.jsx)(d.th,{}),(0,t.jsx)(d.th,{}),(0,t.jsx)(d.th,{}),(0,t.jsx)(d.th,{})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"abs"}),(0,t.jsx)(d.td,{children:"current_transform_group_for_type"}),(0,t.jsx)(d.td,{children:"indicator"}),(0,t.jsx)(d.td,{children:"order"}),(0,t.jsx)(d.td,{children:"sqlexception"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"absolute"}),(0,t.jsx)(d.td,{children:"current_user"}),(0,t.jsx)(d.td,{children:"initial"}),(0,t.jsx)(d.td,{children:"out"}),(0,t.jsx)(d.td,{children:"sqlstate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"acos"}),(0,t.jsx)(d.td,{children:"cursor"}),(0,t.jsx)(d.td,{children:"initially"}),(0,t.jsx)(d.td,{children:"outer"}),(0,t.jsx)(d.td,{children:"sqlwarning"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"action"}),(0,t.jsx)(d.td,{children:"cycle"}),(0,t.jsx)(d.td,{children:"inner"}),(0,t.jsx)(d.td,{children:"output"}),(0,t.jsx)(d.td,{children:"sqrt"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"add"}),(0,t.jsx)(d.td,{children:"datalink"}),(0,t.jsx)(d.td,{children:"inout"}),(0,t.jsx)(d.td,{children:"over"}),(0,t.jsx)(d.td,{children:"start"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"all"}),(0,t.jsx)(d.td,{children:"date"}),(0,t.jsx)(d.td,{children:"input"}),(0,t.jsx)(d.td,{children:"overlaps"}),(0,t.jsx)(d.td,{children:"static"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocate"}),(0,t.jsx)(d.td,{children:"day"}),(0,t.jsx)(d.td,{children:"insensitive"}),(0,t.jsx)(d.td,{children:"overlay"}),(0,t.jsx)(d.td,{children:"stddev_pop"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"alter"}),(0,t.jsx)(d.td,{children:"deallocate"}),(0,t.jsx)(d.td,{children:"insert"}),(0,t.jsx)(d.td,{children:"pad"}),(0,t.jsx)(d.td,{children:"stddev_samp"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"analyse"}),(0,t.jsx)(d.td,{children:"dec"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"parameter"}),(0,t.jsx)(d.td,{children:"submultiset"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"analyze"}),(0,t.jsx)(d.td,{children:"decfloat"}),(0,t.jsx)(d.td,{children:"integer"}),(0,t.jsx)(d.td,{children:"partial"}),(0,t.jsx)(d.td,{children:"subset"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"and"}),(0,t.jsx)(d.td,{children:"decimal"}),(0,t.jsx)(d.td,{children:"intersect"}),(0,t.jsx)(d.td,{children:"partition"}),(0,t.jsx)(d.td,{children:"substring"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"any"}),(0,t.jsx)(d.td,{children:"declare"}),(0,t.jsx)(d.td,{children:"intersection"}),(0,t.jsx)(d.td,{children:"pattern"}),(0,t.jsx)(d.td,{children:"substring_regex"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"are"}),(0,t.jsx)(d.td,{children:"default"}),(0,t.jsx)(d.td,{children:"interval"}),(0,t.jsx)(d.td,{children:"per"}),(0,t.jsx)(d.td,{children:"succeeds"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"array"}),(0,t.jsx)(d.td,{children:"deferrable"}),(0,t.jsx)(d.td,{children:"into"}),(0,t.jsx)(d.td,{children:"percent"}),(0,t.jsx)(d.td,{children:"sum"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"array_agg"}),(0,t.jsx)(d.td,{children:"deferred"}),(0,t.jsx)(d.td,{children:"is"}),(0,t.jsx)(d.td,{children:"percentile_cont"}),(0,t.jsx)(d.td,{children:"symmetric"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"array_max_cardinality"}),(0,t.jsx)(d.td,{children:"define"}),(0,t.jsx)(d.td,{children:"isnull"}),(0,t.jsx)(d.td,{children:"percentile_disc"}),(0,t.jsx)(d.td,{children:"system"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"as"}),(0,t.jsx)(d.td,{children:"delete"}),(0,t.jsx)(d.td,{children:"isolation"}),(0,t.jsx)(d.td,{children:"percent_rank"}),(0,t.jsx)(d.td,{children:"system_time"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"asc"}),(0,t.jsx)(d.td,{children:"dense_rank"}),(0,t.jsx)(d.td,{children:"join"}),(0,t.jsx)(d.td,{children:"period"}),(0,t.jsx)(d.td,{children:"system_user"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"asensitive"}),(0,t.jsx)(d.td,{children:"deref"}),(0,t.jsx)(d.td,{children:"json_array"}),(0,t.jsx)(d.td,{children:"permute"}),(0,t.jsx)(d.td,{children:"table"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"asin"}),(0,t.jsx)(d.td,{children:"desc"}),(0,t.jsx)(d.td,{children:"json_arrayagg"}),(0,t.jsx)(d.td,{children:"placing"}),(0,t.jsx)(d.td,{children:"tablesample"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"assertion"}),(0,t.jsx)(d.td,{children:"describe"}),(0,t.jsx)(d.td,{children:"json_exists"}),(0,t.jsx)(d.td,{children:"portion"}),(0,t.jsx)(d.td,{children:"tan"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"asymmetric"}),(0,t.jsx)(d.td,{children:"descriptor"}),(0,t.jsx)(d.td,{children:"json_object"}),(0,t.jsx)(d.td,{children:"position"}),(0,t.jsx)(d.td,{children:"tanh"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"at"}),(0,t.jsx)(d.td,{children:"deterministic"}),(0,t.jsx)(d.td,{children:"json_objectagg"}),(0,t.jsx)(d.td,{children:"position_regex"}),(0,t.jsx)(d.td,{children:"temporary"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"atan"}),(0,t.jsx)(d.td,{children:"diagnostics"}),(0,t.jsx)(d.td,{children:"json_query"}),(0,t.jsx)(d.td,{children:"power"}),(0,t.jsx)(d.td,{children:"then"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"atomic"}),(0,t.jsx)(d.td,{children:"disconnect"}),(0,t.jsx)(d.td,{children:"json_table"}),(0,t.jsx)(d.td,{children:"precedes"}),(0,t.jsx)(d.td,{children:"time"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"authorization"}),(0,t.jsx)(d.td,{children:"distinct"}),(0,t.jsx)(d.td,{children:"json_table_primitive"}),(0,t.jsx)(d.td,{children:"precision"}),(0,t.jsx)(d.td,{children:"timestamp"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"avg"}),(0,t.jsx)(d.td,{children:"dlnewcopy"}),(0,t.jsx)(d.td,{children:"json_value"}),(0,t.jsx)(d.td,{children:"prepare"}),(0,t.jsx)(d.td,{children:"timezone_hour"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"begin"}),(0,t.jsx)(d.td,{children:"dlpreviouscopy"}),(0,t.jsx)(d.td,{children:"key"}),(0,t.jsx)(d.td,{children:"preserve"}),(0,t.jsx)(d.td,{children:"timezone_minute"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"begin_frame"}),(0,t.jsx)(d.td,{children:"dlurlcomplete"}),(0,t.jsx)(d.td,{children:"lag"}),(0,t.jsx)(d.td,{children:"primary"}),(0,t.jsx)(d.td,{children:"to"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"begin_partition"}),(0,t.jsx)(d.td,{children:"dlurlcompleteonly"}),(0,t.jsx)(d.td,{children:"language"}),(0,t.jsx)(d.td,{children:"prior"}),(0,t.jsx)(d.td,{children:"trailing"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"between"}),(0,t.jsx)(d.td,{children:"dlurlcompletewrite"}),(0,t.jsx)(d.td,{children:"large"}),(0,t.jsx)(d.td,{children:"privileges"}),(0,t.jsx)(d.td,{children:"transaction"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bigint"}),(0,t.jsx)(d.td,{children:"dlurlpath"}),(0,t.jsx)(d.td,{children:"last"}),(0,t.jsx)(d.td,{children:"procedure"}),(0,t.jsx)(d.td,{children:"translate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"binary"}),(0,t.jsx)(d.td,{children:"dlurlpathonly"}),(0,t.jsx)(d.td,{children:"last_value"}),(0,t.jsx)(d.td,{children:"ptf"}),(0,t.jsx)(d.td,{children:"translate_regex"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bit"}),(0,t.jsx)(d.td,{children:"dlurlpathwrite"}),(0,t.jsx)(d.td,{children:"lateral"}),(0,t.jsx)(d.td,{children:"public"}),(0,t.jsx)(d.td,{children:"translation"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bit_length"}),(0,t.jsx)(d.td,{children:"dlurlscheme"}),(0,t.jsx)(d.td,{children:"lead"}),(0,t.jsx)(d.td,{children:"range"}),(0,t.jsx)(d.td,{children:"treat"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"blob"}),(0,t.jsx)(d.td,{children:"dlurlserver"}),(0,t.jsx)(d.td,{children:"leading"}),(0,t.jsx)(d.td,{children:"rank"}),(0,t.jsx)(d.td,{children:"trigger"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"boolean"}),(0,t.jsx)(d.td,{children:"dlvalue"}),(0,t.jsx)(d.td,{children:"left"}),(0,t.jsx)(d.td,{children:"read"}),(0,t.jsx)(d.td,{children:"trim"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"both"}),(0,t.jsx)(d.td,{children:"do"}),(0,t.jsx)(d.td,{children:"level"}),(0,t.jsx)(d.td,{children:"reads"}),(0,t.jsx)(d.td,{children:"trim_array"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"by"}),(0,t.jsx)(d.td,{children:"domain"}),(0,t.jsx)(d.td,{children:"like"}),(0,t.jsx)(d.td,{children:"real"}),(0,t.jsx)(d.td,{children:"true"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"call"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"like_regex"}),(0,t.jsx)(d.td,{children:"recursive"}),(0,t.jsx)(d.td,{children:"truncate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"called"}),(0,t.jsx)(d.td,{children:"drop"}),(0,t.jsx)(d.td,{children:"limit"}),(0,t.jsx)(d.td,{children:"ref"}),(0,t.jsx)(d.td,{children:"uescape"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cardinality"}),(0,t.jsx)(d.td,{children:"dynamic"}),(0,t.jsx)(d.td,{children:"listagg"}),(0,t.jsx)(d.td,{children:"references"}),(0,t.jsx)(d.td,{children:"union"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cascade"}),(0,t.jsx)(d.td,{children:"each"}),(0,t.jsx)(d.td,{children:"ln"}),(0,t.jsx)(d.td,{children:"referencing"}),(0,t.jsx)(d.td,{children:"unique"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cascaded"}),(0,t.jsx)(d.td,{children:"element"}),(0,t.jsx)(d.td,{children:"local"}),(0,t.jsx)(d.td,{children:"regr_avgx"}),(0,t.jsx)(d.td,{children:"unknown"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"case"}),(0,t.jsx)(d.td,{children:"else"}),(0,t.jsx)(d.td,{children:"localtime"}),(0,t.jsx)(d.td,{children:"regr_avgy"}),(0,t.jsx)(d.td,{children:"unmatched"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cast"}),(0,t.jsx)(d.td,{children:"empty"}),(0,t.jsx)(d.td,{children:"localtimestamp"}),(0,t.jsx)(d.td,{children:"regr_count"}),(0,t.jsx)(d.td,{children:"unnest"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"catalog"}),(0,t.jsx)(d.td,{children:"end"}),(0,t.jsx)(d.td,{children:"log"}),(0,t.jsx)(d.td,{children:"regr_intercept"}),(0,t.jsx)(d.td,{children:"update"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ceil"}),(0,t.jsx)(d.td,{children:"end-exec"}),(0,t.jsx)(d.td,{children:"log10"}),(0,t.jsx)(d.td,{children:"regr_r2"}),(0,t.jsx)(d.td,{children:"upper"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ceiling"}),(0,t.jsx)(d.td,{children:"end_frame"}),(0,t.jsx)(d.td,{children:"lower"}),(0,t.jsx)(d.td,{children:"regr_slope"}),(0,t.jsx)(d.td,{children:"usage"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"char"}),(0,t.jsx)(d.td,{children:"end_partition"}),(0,t.jsx)(d.td,{children:"match"}),(0,t.jsx)(d.td,{children:"regr_sxx"}),(0,t.jsx)(d.td,{children:"user"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"character"}),(0,t.jsx)(d.td,{children:"equals"}),(0,t.jsx)(d.td,{children:"matches"}),(0,t.jsx)(d.td,{children:"regr_sxy"}),(0,t.jsx)(d.td,{children:"using"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"character_length"}),(0,t.jsx)(d.td,{children:"escape"}),(0,t.jsx)(d.td,{children:"match_number"}),(0,t.jsx)(d.td,{children:"regr_syy"}),(0,t.jsx)(d.td,{children:"value"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"char_length"}),(0,t.jsx)(d.td,{children:"every"}),(0,t.jsx)(d.td,{children:"match_recognize"}),(0,t.jsx)(d.td,{children:"relative"}),(0,t.jsx)(d.td,{children:"values"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"check"}),(0,t.jsx)(d.td,{children:"except"}),(0,t.jsx)(d.td,{children:"max"}),(0,t.jsx)(d.td,{children:"release"}),(0,t.jsx)(d.td,{children:"value_of"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"classifier"}),(0,t.jsx)(d.td,{children:"exception"}),(0,t.jsx)(d.td,{children:"measures"}),(0,t.jsx)(d.td,{children:"restrict"}),(0,t.jsx)(d.td,{children:"varbinary"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clob"}),(0,t.jsx)(d.td,{children:"exec"}),(0,t.jsx)(d.td,{children:"member"}),(0,t.jsx)(d.td,{children:"result"}),(0,t.jsx)(d.td,{children:"varchar"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"close"}),(0,t.jsx)(d.td,{children:"execute"}),(0,t.jsx)(d.td,{children:"merge"}),(0,t.jsx)(d.td,{children:"return"}),(0,t.jsx)(d.td,{children:"variadic"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"coalesce"}),(0,t.jsx)(d.td,{children:"exists"}),(0,t.jsx)(d.td,{children:"method"}),(0,t.jsx)(d.td,{children:"returning"}),(0,t.jsx)(d.td,{children:"varying"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"collate"}),(0,t.jsx)(d.td,{children:"exp"}),(0,t.jsx)(d.td,{children:"min"}),(0,t.jsx)(d.td,{children:"returns"}),(0,t.jsx)(d.td,{children:"var_pop"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"collation"}),(0,t.jsx)(d.td,{children:"external"}),(0,t.jsx)(d.td,{children:"minute"}),(0,t.jsx)(d.td,{children:"revoke"}),(0,t.jsx)(d.td,{children:"var_samp"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"collect"}),(0,t.jsx)(d.td,{children:"extract"}),(0,t.jsx)(d.td,{children:"mod"}),(0,t.jsx)(d.td,{children:"right"}),(0,t.jsx)(d.td,{children:"verbose"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"column"}),(0,t.jsx)(d.td,{children:"false"}),(0,t.jsx)(d.td,{children:"modifies"}),(0,t.jsx)(d.td,{children:"rollback"}),(0,t.jsx)(d.td,{children:"versioning"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"commit"}),(0,t.jsx)(d.td,{children:"fetch"}),(0,t.jsx)(d.td,{children:"module"}),(0,t.jsx)(d.td,{children:"rollup"}),(0,t.jsx)(d.td,{children:"view"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"concurrently"}),(0,t.jsx)(d.td,{children:"filter"}),(0,t.jsx)(d.td,{children:"month"}),(0,t.jsx)(d.td,{children:"row"}),(0,t.jsx)(d.td,{children:"when"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"condition"}),(0,t.jsx)(d.td,{children:"first"}),(0,t.jsx)(d.td,{children:"multiset"}),(0,t.jsx)(d.td,{children:"rows"}),(0,t.jsx)(d.td,{children:"whenever"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"connect"}),(0,t.jsx)(d.td,{children:"first_value"}),(0,t.jsx)(d.td,{children:"names"}),(0,t.jsx)(d.td,{children:"row_number"}),(0,t.jsx)(d.td,{children:"where"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"connection"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"national"}),(0,t.jsx)(d.td,{children:"running"}),(0,t.jsx)(d.td,{children:"width_bucket"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"constraint"}),(0,t.jsx)(d.td,{children:"floor"}),(0,t.jsx)(d.td,{children:"natural"}),(0,t.jsx)(d.td,{children:"savepoint"}),(0,t.jsx)(d.td,{children:"window"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"constraints"}),(0,t.jsx)(d.td,{children:"for"}),(0,t.jsx)(d.td,{children:"nchar"}),(0,t.jsx)(d.td,{children:"schema"}),(0,t.jsx)(d.td,{children:"with"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"contains"}),(0,t.jsx)(d.td,{children:"foreign"}),(0,t.jsx)(d.td,{children:"nclob"}),(0,t.jsx)(d.td,{children:"scope"}),(0,t.jsx)(d.td,{children:"within"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"continue"}),(0,t.jsx)(d.td,{children:"found"}),(0,t.jsx)(d.td,{children:"new"}),(0,t.jsx)(d.td,{children:"scroll"}),(0,t.jsx)(d.td,{children:"without"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"convert"}),(0,t.jsx)(d.td,{children:"frame_row"}),(0,t.jsx)(d.td,{children:"next"}),(0,t.jsx)(d.td,{children:"search"}),(0,t.jsx)(d.td,{children:"work"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"copy"}),(0,t.jsx)(d.td,{children:"free"}),(0,t.jsx)(d.td,{children:"no"}),(0,t.jsx)(d.td,{children:"second"}),(0,t.jsx)(d.td,{children:"write"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"corr"}),(0,t.jsx)(d.td,{children:"freeze"}),(0,t.jsx)(d.td,{children:"none"}),(0,t.jsx)(d.td,{children:"section"}),(0,t.jsx)(d.td,{children:"xml"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"corresponding"}),(0,t.jsx)(d.td,{children:"from"}),(0,t.jsx)(d.td,{children:"normalize"}),(0,t.jsx)(d.td,{children:"seek"}),(0,t.jsx)(d.td,{children:"xmlagg"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cos"}),(0,t.jsx)(d.td,{children:"full"}),(0,t.jsx)(d.td,{children:"not"}),(0,t.jsx)(d.td,{children:"select"}),(0,t.jsx)(d.td,{children:"xmlattributes"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cosh"}),(0,t.jsx)(d.td,{children:"function"}),(0,t.jsx)(d.td,{children:"notnull"}),(0,t.jsx)(d.td,{children:"sensitive"}),(0,t.jsx)(d.td,{children:"xmlbinary"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"count"}),(0,t.jsx)(d.td,{children:"fusion"}),(0,t.jsx)(d.td,{children:"nth_value"}),(0,t.jsx)(d.td,{children:"session"}),(0,t.jsx)(d.td,{children:"xmlcast"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"covar_pop"}),(0,t.jsx)(d.td,{children:"get"}),(0,t.jsx)(d.td,{children:"ntile"}),(0,t.jsx)(d.td,{children:"session_user"}),(0,t.jsx)(d.td,{children:"xmlcomment"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"covar_samp"}),(0,t.jsx)(d.td,{children:"global"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"set"}),(0,t.jsx)(d.td,{children:"xmlconcat"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"create"}),(0,t.jsx)(d.td,{children:"go"}),(0,t.jsx)(d.td,{children:"nullif"}),(0,t.jsx)(d.td,{children:"show"}),(0,t.jsx)(d.td,{children:"xmldocument"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cross"}),(0,t.jsx)(d.td,{children:"goto"}),(0,t.jsx)(d.td,{children:"numeric"}),(0,t.jsx)(d.td,{children:"similar"}),(0,t.jsx)(d.td,{children:"xmlelement"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cube"}),(0,t.jsx)(d.td,{children:"grant"}),(0,t.jsx)(d.td,{children:"occurrences_regex"}),(0,t.jsx)(d.td,{children:"sin"}),(0,t.jsx)(d.td,{children:"xmlexists"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cume_dist"}),(0,t.jsx)(d.td,{children:"group"}),(0,t.jsx)(d.td,{children:"octet_length"}),(0,t.jsx)(d.td,{children:"sinh"}),(0,t.jsx)(d.td,{children:"xmlforest"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current"}),(0,t.jsx)(d.td,{children:"grouping"}),(0,t.jsx)(d.td,{children:"of"}),(0,t.jsx)(d.td,{children:"size"}),(0,t.jsx)(d.td,{children:"xmliterate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_catalog"}),(0,t.jsx)(d.td,{children:"groups"}),(0,t.jsx)(d.td,{children:"offset"}),(0,t.jsx)(d.td,{children:"skip"}),(0,t.jsx)(d.td,{children:"xmlnamespaces"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_date"}),(0,t.jsx)(d.td,{children:"having"}),(0,t.jsx)(d.td,{children:"old"}),(0,t.jsx)(d.td,{children:"smallint"}),(0,t.jsx)(d.td,{children:"xmlparse"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_default_transform_group"}),(0,t.jsx)(d.td,{children:"hold"}),(0,t.jsx)(d.td,{children:"omit"}),(0,t.jsx)(d.td,{children:"some"}),(0,t.jsx)(d.td,{children:"xmlpi"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_path"}),(0,t.jsx)(d.td,{children:"hour"}),(0,t.jsx)(d.td,{children:"on"}),(0,t.jsx)(d.td,{children:"space"}),(0,t.jsx)(d.td,{children:"xmlquery"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_role"}),(0,t.jsx)(d.td,{children:"identity"}),(0,t.jsx)(d.td,{children:"one"}),(0,t.jsx)(d.td,{children:"specific"}),(0,t.jsx)(d.td,{children:"xmlserialize"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_row"}),(0,t.jsx)(d.td,{children:"ilike"}),(0,t.jsx)(d.td,{children:"only"}),(0,t.jsx)(d.td,{children:"specifictype"}),(0,t.jsx)(d.td,{children:"xmltable"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_schema"}),(0,t.jsx)(d.td,{children:"immediate"}),(0,t.jsx)(d.td,{children:"open"}),(0,t.jsx)(d.td,{children:"sql"}),(0,t.jsx)(d.td,{children:"xmltext"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_time"}),(0,t.jsx)(d.td,{children:"import"}),(0,t.jsx)(d.td,{children:"option"}),(0,t.jsx)(d.td,{children:"sqlcode"}),(0,t.jsx)(d.td,{children:"xmlvalidate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"current_timestamp"}),(0,t.jsx)(d.td,{children:"in"}),(0,t.jsx)(d.td,{children:"or"}),(0,t.jsx)(d.td,{children:"sqlerror"}),(0,t.jsx)(d.td,{children:"year"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>i,x:()=>l});var t=r(96540);const s={},n=t.createContext(s);function i(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);