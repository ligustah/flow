"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5970],{60733:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(74848),o=s(28453);const r={sidebar_position:4},i="MongoDB",c={id:"reference/Connectors/capture-connectors/mongodb",title:"MongoDB",description:"This connector captures data from your MongoDB collections into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/mongodb.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/mongodb",permalink:"/pr-preview/pr-1386/reference/Connectors/capture-connectors/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/mongodb.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Microsoft SQL Server",permalink:"/pr-preview/pr-1386/reference/Connectors/capture-connectors/sqlserver"},next:{title:"MySQL",permalink:"/pr-preview/pr-1386/reference/Connectors/capture-connectors/MySQL"}},a={},d=[{value:"Data model",id:"data-model",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"SSH Tunneling",id:"ssh-tunneling",level:2},{value:"Backfill and real-time updates",id:"backfill-and-real-time-updates",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from your MongoDB collections into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-mongodb:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-mongodb:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"data-model",children:"Data model"}),"\n",(0,t.jsxs)(n.p,{children:["MongoDB is a NoSQL database. Its ",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/data-modeling-introduction/",children:"data\nmodel"}),"\nconsists of ",(0,t.jsx)(n.strong,{children:"documents"})," (lightweight records that contain mappings of fields\nand values) organized in ",(0,t.jsx)(n.strong,{children:"collections"}),". MongoDB documents have a mandatory\n",(0,t.jsx)(n.code,{children:"_id"})," field that is used as the key of the collection."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"You'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Credentials for connecting to your MongoDB instance and database"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Read access to your MongoDB database(s), see\n",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/authorization/",children:"Role-Based Access\nControl"})," for more\ninformation."]}),"\n",(0,t.jsxs)(n.li,{children:["Read access to the ",(0,t.jsx)(n.code,{children:"local"})," database and ",(0,t.jsx)(n.code,{children:"oplog.rs"})," collection in that\ndatabase."]}),"\n",(0,t.jsxs)(n.li,{children:["We recommend giving access to read all databases, as this allows us to\nwatch an instance-level change stream, allowing for better guarantees of\nreliability, and possibility of capturing multiple databases in the same\ntask. However, if access to all databases is not possible, you can\ngive us access to a single database and we will watch a change stream on\nthat specific database. Note that we require access on the ",(0,t.jsx)(n.em,{children:"database"})," and\nnot individual collections. This is to so that we can run a change stream on\nthe database which allows for better consistency guarantees."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In order to create a user with access to all databases, use a command like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'use admin;\ndb.createUser({\n user: "<username>",\n pwd: "<password>",\n roles: [ "readAnyDatabase" ]\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you are using a user with access to all databases, then in your mongodb\naddress, you must specify ",(0,t.jsx)(n.code,{children:"?authSource=admin"})," parameter so that\nauthentication is done through your admin database."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to create a user with access to a specific database and the ",(0,t.jsx)(n.code,{children:"local"})," database,\nuse a command like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'use <your-db>;\ndb.createUser({\n  user: "<username>",\n  pwd: "<password>",\n  roles: ["read", { role: "read", db: "local" }]\n})\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['If you are using MongoDB Atlas, this requires adding a "',(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/reference/atlas-oplog/",children:"specific privilege"}),'".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["ReplicaSet enabled on your database, see ",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/",children:"Deploy a Replica\nSet"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you are using MongoDB Atlas, or your MongoDB provider requires whitelisting\nof IPs, you need to whitelist Estuary's IP ",(0,t.jsx)(n.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1386/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Firestore source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/address"})})}),(0,t.jsx)(n.td,{children:"Address"}),(0,t.jsx)(n.td,{children:"Host and port of the database. Optionally can specify scheme for the URL such as mongodb+srv://host."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/database"})})}),(0,t.jsx)(n.td,{children:"Database"}),(0,t.jsx)(n.td,{children:"Name of the database to capture from."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/user"})})}),(0,t.jsx)(n.td,{children:"User"}),(0,t.jsx)(n.td,{children:"Database user to connect as."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/password"})})}),(0,t.jsx)(n.td,{children:"Password"}),(0,t.jsx)(n.td,{children:"Password for the specified database user."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/database"})})}),(0,t.jsx)(n.td,{children:"Database"}),(0,t.jsx)(n.td,{children:"Database name"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/collection"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Collection name"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mongodb:dev\n        config:\n          address: "mongo:27017"\n          database: "test"\n          password: "flow"\n          user: "flow"\n    bindings:\n      - resource:\n          collection: users\n          database: test\n        target: ${PREFIX}/users\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ssh-tunneling",children:"SSH Tunneling"}),"\n",(0,t.jsx)(n.p,{children:"As an alternative to connecting to your MongoDB instance directly, you can allow secure connections via SSH tunneling. To do so:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"../../../../guides/connect-network/",children:"guide"})," to configure an SSH server on the cloud platform of your choice."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure your connector as described in the ",(0,t.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, with the addition of the ",(0,t.jsx)(n.code,{children:"networkTunnel"})," stanza to enable the SSH tunnel, if using. See ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1386/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"backfill-and-real-time-updates",children:"Backfill and real-time updates"}),"\n",(0,t.jsxs)(n.p,{children:["The connector starts by backfilling data from the specified collections until it\nreaches the current time. Once all the data up to the current time has been\nbackfilled, the connector then uses ",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/changeStreams/",children:(0,t.jsx)(n.strong,{children:"change\nstreams"})})," to capture\nchange events and emit those updates to their respective flow collections."]}),"\n",(0,t.jsxs)(n.p,{children:["If the connector's process is paused for a while, it will attempt to resume\ncapturing change events since the last received change event, however the\nconnector's ability to do this depends on the size of the ",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/replica-set-oplog/",children:"replica set\noplog"}),", and in\ncertain circumstances, when the pause has been long enough for the oplog to have\nevicted old change events, the connector will need to re-do the backfill to\nensure data consistency. In these cases it is necessary to ",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/tutorial/change-oplog-size/#c.-change-the-oplog-size-of-the-replica-set-member",children:"resize your\noplog"})," or\n",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/command/replSetResizeOplog/#minimum-oplog-retention-period",children:"set a minimum retention\nperiod"}),"\nfor your oplog to be able to reliably capture data.\nThe recommended minimum retention period is at least 24 hours, but we recommend\nhigher values to improve reliability."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);