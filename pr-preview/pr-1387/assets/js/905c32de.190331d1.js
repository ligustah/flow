"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9090],{23190:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(74848),t=s(28453);const i={sidebar_position:1},l="AlloyDB",c={id:"reference/Connectors/capture-connectors/alloydb",title:"AlloyDB",description:"This connector uses change data capture (CDC) to continuously capture table updates in an AlloyDB database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/alloydb.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/alloydb",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/alloydb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/alloydb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Airtable",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/airtable"},next:{title:"Alpaca",permalink:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/alpaca"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alloydb",children:"AlloyDB"}),"\n",(0,r.jsx)(n.p,{children:"This connector uses change data capture (CDC) to continuously capture table updates in an AlloyDB database into one or more Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["AlloyDB is a fully managed, PostgreSQL-compatible database available in the Google Cloud platform.\nThis connector is derived from the ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1387/reference/Connectors/capture-connectors/PostgreSQL",children:"PostgreSQL capture connector"}),",\nso the same configuration applies, but the setup steps look somewhat different."]}),"\n",(0,r.jsxs)(n.p,{children:["It's available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://github.com/estuary/connectors/pkgs/container/source-alloydb",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-alloydb:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"You'll need a AlloyDB database setup with the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Logical decoding enabled"}),"\n",(0,r.jsxs)(n.li,{children:["User role with ",(0,r.jsx)(n.code,{children:"REPLICATION"})," attribute"]}),"\n",(0,r.jsxs)(n.li,{children:["A replication slot. This represents a \u201ccursor\u201d into the PostgreSQL write-ahead log from which change events can be read.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Optional; if none exist, one will be created by the connector."}),"\n",(0,r.jsxs)(n.li,{children:["If you wish to run multiple captures from the same database, each must have its own slot.\nYou can create these slots yourself, or by specifying a name other than the default in the advanced ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["A publication. This represents the set of tables for which change events will be reported.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["A watermarks table. The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You'll also need a virtual machine to connect securely to the instance via SSH tunnelling (AlloyDB\ndoesn't support IP whitelisting)."}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"To meet the prerequisites, complete these steps."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsxs)(n.a,{href:"https://cloud.google.com/alloydb/docs/reference/alloydb-flags",children:["the ",(0,r.jsx)(n.code,{children:"alloydb.logical_decoding"})," flag to ",(0,r.jsx)(n.code,{children:"on"})]})," to enable logical replication on your AlloyDB instance."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In your ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/alloydb/docs/connect-psql",children:"psql client"}),", connect to your instance and issue the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table and publication."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE USER flow_capture WITH REPLICATION\nIN ROLE alloydbsuperuser LOGIN PASSWORD 'secret';\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO flow_capture;\nALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO flow_capture;\nCREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication FOR ALL TABLES;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Follow the instructions to create a ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1387/guides/connect-network#setup-for-google-cloud",children:"virtual machine for SSH tunneling"}),"\nin the same Google Cloud project as your instance."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backfills-and-performance-considerations",children:"Backfills and performance considerations"}),"\n",(0,r.jsxs)(n.p,{children:["When the a AlloyDB capture is initiated, by default, the connector first ",(0,r.jsx)(n.em,{children:"backfills"}),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."]}),"\n",(0,r.jsx)(n.p,{children:"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."}),"\n",(0,r.jsxs)(n.p,{children:["In this case, you may turn of backfilling on a per-table basis. See ",(0,r.jsx)(n.a,{href:"#properties",children:"properties"})," for details."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1387/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the PostgreSQL source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["The SSH config section is required for this connector.\nYou'll fill in the database address with a localhost IP address,\nand specify your VM's IP address as the SSH address.\nSee the table below and the ",(0,r.jsx)(n.a,{href:"#sample",children:"sample config"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/address"})})}),(0,r.jsx)(n.td,{children:"Address"}),(0,r.jsxs)(n.td,{children:["The host or host",":port"," at which the database can be reached."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/database"})})}),(0,r.jsx)(n.td,{children:"Database"}),(0,r.jsx)(n.td,{children:"Logical database name to capture from."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Required, ",(0,r.jsx)(n.code,{children:'"postgres"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/user"})})}),(0,r.jsx)(n.td,{children:"User"}),(0,r.jsx)(n.td,{children:"The database user to authenticate as."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Required, ",(0,r.jsx)(n.code,{children:'"flow_capture"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/password"})})}),(0,r.jsx)(n.td,{children:"Password"}),(0,r.jsx)(n.td,{children:"Password for the specified database user."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced"})}),(0,r.jsx)(n.td,{children:"Advanced Options"}),(0,r.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/backfill_chunk_size"})}),(0,r.jsx)(n.td,{children:"Backfill Chunk Size"}),(0,r.jsx)(n.td,{children:"The number of rows which should be fetched from the database in a single backfill query."}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"4096"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/publicationName"})}),(0,r.jsx)(n.td,{children:"Publication Name"}),(0,r.jsx)(n.td,{children:"The name of the PostgreSQL publication to replicate from."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"flow_publication"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/skip_backfills"})}),(0,r.jsx)(n.td,{children:"Skip Backfills"}),(0,r.jsx)(n.td,{children:"A comma-separated list of fully-qualified table names which should not be backfilled."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/slotName"})}),(0,r.jsx)(n.td,{children:"Slot Name"}),(0,r.jsx)(n.td,{children:"The name of the PostgreSQL replication slot to replicate from."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"flow_slot"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/watermarksTable"})}),(0,r.jsx)(n.td,{children:"Watermarks Table"}),(0,r.jsx)(n.td,{children:"The name of the table used for watermark writes during backfills. Must be fully-qualified in '<schema>.<table>' form."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"public.flow_watermarks"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"networkTunnel"})}),(0,r.jsx)(n.td,{children:"Network Tunnel"}),(0,r.jsx)(n.td,{children:"Connect to your system through an SSH server that acts as a bastion host for your network."}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"networkTunnel/sshForwarding"})}),(0,r.jsx)(n.td,{children:"SSH Forwarding"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"networkTunnel/sshForwarding/sshEndpoint"})}),(0,r.jsx)(n.td,{children:"SSH Endpoint"}),(0,r.jsx)(n.td,{children:"Endpoint of the remote SSH server (in this case, your Google Cloud VM) that supports tunneling (in the form of ssh://user@address)."}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"networkTunnel/sshForwarding/privateKey"})}),(0,r.jsx)(n.td,{children:"SSH Private Key"}),(0,r.jsx)(n.td,{children:"Private key to connect to the remote SSH server."}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/namespace"})})}),(0,r.jsx)(n.td,{children:"Namespace"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/alloydb/docs/overview#hierarchical_resource_structure",children:"namespace/instance"})," of the table."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Table name."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync mode"}),(0,r.jsxs)(n.td,{children:["Connection method. Always set to ",(0,r.jsx)(n.code,{children:"incremental"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.p,{children:"A minimal capture definition will look like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-alloydb:dev"\n        config:\n          address: "127.0.0.1:5432"\n          database: "postgres"\n          user: "flow_capture"\n          password: "secret"\n          networkTunnel:\n            sshForwarding:\n              sshEndpoint: ssh://sshUser@vm-ip-address\n              privateKey: |2\n              -----BEGIN RSA PRIVATE KEY-----\n              MIICXAIBAAKBgQCJO7G6R+kv2MMS8Suw21sk2twHg8Vog0fjimEWJEwyAfFM/Toi\n              EJ6r5RTaSvN++/+MPWUll7sUdOOBZr6ErLKLHEt7uXxusAzOjMxFKZpEARMcjwHY\n              v/tN1A2OYU0qay1DOwknEE0i+/Bvf8lMS7VDjHmwRaBtRed/+iAQHf128QIDAQAB\n              AoGAGoOUBP+byAjDN8esv1DCPU6jsDf/Tf//RbEYrOR6bDb/3fYW4zn+zgtGih5t\n              CR268+dwwWCdXohu5DNrn8qV/Awk7hWp18mlcNyO0skT84zvippe+juQMK4hDQNi\n              ywp8mDvKQwpOuzw6wNEitcGDuACx5U/1JEGGmuIRGx2ST5kCQQDsstfWDcYqbdhr\n              5KemOPpu80OtBYzlgpN0iVP/6XW1e5FCRp2ofQKZYXVwu5txKIakjYRruUiiZTza\n              QeXRPbp3AkEAlGx6wMe1l9UtAAlkgCFYbuxM+eRD4Gg5qLYFpKNsoINXTnlfDry5\n              +1NkuyiQDjzOSPiLZ4Abpf+a+myjOuNL1wJBAOwkdM6aCVT1J9BkW5mrCLY+PgtV\n              GT80KTY/d6091fBMKhxL5SheJ4SsRYVFtguL2eA7S5xJSpyxkadRzR0Wj3sCQAvA\n              bxO2fE1SRqbbF4cBnOPjd9DNXwZ0miQejWHUwrQO0inXeExNaxhYKQCcnJNUAy1J\n              6JfAT/AbxeSQF3iBKK8CQAt5r/LLEM1/8ekGOvBh8MAQpWBW771QzHUN84SiUd/q\n              xR9mfItngPwYJ9d/pTO7u9ZUPHEoat8Ave4waB08DsI=\n              -----END RSA PRIVATE KEY-----\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: ${TABLE_NAMESPACE}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Your capture definition will likely be more complex, with additional bindings for each table in the source database."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/pr-preview/pr-1387/concepts/captures#pull-captures",children:"Learn more about capture definitions."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);