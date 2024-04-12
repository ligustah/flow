"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5924],{44512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),i=t(28453);const s={},o="MySQL HeatWave",l={id:"reference/Connectors/materialization-connectors/mysql-heatwave",title:"MySQL HeatWave",description:"This connector lets you materialize data from your Flow collections directly into Oracle MySQL HeatWave instances.",source:"@site/docs/reference/Connectors/materialization-connectors/mysql-heatwave.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/mysql-heatwave",permalink:"/pr-preview/pr-1440/reference/Connectors/materialization-connectors/mysql-heatwave",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/mysql-heatwave.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MotherDuck",permalink:"/pr-preview/pr-1440/reference/Connectors/materialization-connectors/motherduck"},next:{title:"Pinecone",permalink:"/pr-preview/pr-1440/reference/Connectors/materialization-connectors/pinecone"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Advanced: SSL Mode",id:"advanced-ssl-mode",level:3},{value:"Bindings",id:"bindings",level:3},{value:"Sample",id:"sample",level:2},{value:"MySQL HeatWave on Oracle Cloud Infrastructure",id:"mysql-heatwave-on-oracle-cloud-infrastructure",level:2},{value:"SSH Tunneling (Required)",id:"ssh-tunneling-required",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mysql-heatwave",children:"MySQL HeatWave"}),"\n",(0,r.jsx)(n.p,{children:"This connector lets you materialize data from your Flow collections directly into Oracle MySQL HeatWave instances."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/estuary/connectors/pkgs/container/materialize-mysql-heatwave",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/materialize-mysql-heatwave:dev"})})," provides the latest connector image. For earlier versions, please follow the link in your browser."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To use this materialization connector, you\u2019ll need the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A MySQL HeatWave database and the appropriate user credentials."}),"\n",(0,r.jsx)(n.li,{children:"At least one Flow collection."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Select one or more of your Flow collections to start using this connector. The configuration properties below will help you to materialize your collections into tables in MySQL HeatWave."}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/address"})})}),(0,r.jsx)(n.td,{children:"Address"}),(0,r.jsxs)(n.td,{children:["Host and port of the database. If only the host is specified, the port will default to ",(0,r.jsx)(n.code,{children:"3306"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/database"})})}),(0,r.jsx)(n.td,{children:"Database"}),(0,r.jsx)(n.td,{children:"Name of the logical database to send data to."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/user"})})}),(0,r.jsx)(n.td,{children:"User"}),(0,r.jsx)(n.td,{children:"Username for authentication."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/password"})})}),(0,r.jsx)(n.td,{children:"Password"}),(0,r.jsx)(n.td,{children:"Password for authentication."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/timezone"})})}),(0,r.jsx)(n.td,{children:"Timezone"}),(0,r.jsx)(n.td,{children:"Timezone to use when materializing datetime columns. Should normally be left blank to use the database's 'time_zone' system variable. Only required if the 'time_zone' system variable cannot be read."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"advanced-ssl-mode",children:"Advanced: SSL Mode"}),"\n",(0,r.jsx)(n.p,{children:"Configuring the SSL mode strengthens security when transferring data to Oracle MySQL HeatWave. Here are the possible values for SSL mode:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disabled"}),": Establishes an unencrypted connection with the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"preferred"}),": Initiates the SSL connection only if prompted by the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"required"}),": Establishes an SSL connection but doesn\u2019t verify the server\u2019s certificate."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"verify_ca"}),": Connects via SSL connection and verifies the server\u2019s certificate against the provided SSL Server CA, without validating the server's hostname. SSL Server CA is mandatory for this mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"verify_identity"}),": Ensures an SSL connection, and verifies both the server's certificate and hostname. This is the highest level of security. SSL Server CA is required for this mode."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/table"})})}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"The name of the table to send data to."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${MAT_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-mysql-heatwave:dev\n        config:\n          database: flow\n          address: localhost:5432\n          password: secret\n          user: flow\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mysql-heatwave-on-oracle-cloud-infrastructure",children:"MySQL HeatWave on Oracle Cloud Infrastructure"}),"\n",(0,r.jsx)(n.p,{children:"This connector supports cloud-based MySQL HeatWave instances hosted on Oracle Cloud Infrastructure (OCI)."}),"\n",(0,r.jsx)(n.h3,{id:"ssh-tunneling-required",children:"SSH Tunneling (Required)"}),"\n",(0,r.jsx)(n.p,{children:"You are also required to configure SSH tunneling by providing the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SSH Endpoint"}),": Enter the endpoint of the remote SSH server that supports tunneling (formatted as ",(0,r.jsx)(n.code,{children:"ssh://user@hostname[:port]"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SSH Private Key"}),": Input the full RSA Private Key for SSH connection."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);