"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5970],{60733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(74848),s=t(28453);const r={},i="MongoDB",c={id:"reference/Connectors/capture-connectors/mongodb",title:"MongoDB",description:"This connector captures data from your MongoDB collections into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/mongodb.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/mongodb",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MixPanel",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/mixpanel"},next:{title:"MySQL",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/MySQL/"}},d={},a=[{value:"Data model",id:"data-model",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"SSH Tunneling",id:"ssh-tunneling",level:2},{value:"Backfill and real-time updates",id:"backfill-and-real-time-updates",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,o.jsx)(n.p,{children:"This connector captures data from your MongoDB collections into Flow collections."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://ghcr.io/estuary/source-mongodb:dev",children:(0,o.jsx)(n.code,{children:"ghcr.io/estuary/source-mongodb:dev"})})," provides the\nlatest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,o.jsx)(n.h2,{id:"data-model",children:"Data model"}),"\n",(0,o.jsxs)(n.p,{children:["MongoDB is a NoSQL database. Its ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/data-modeling-introduction/",children:"data\nmodel"})," consists of\n",(0,o.jsx)(n.strong,{children:"documents"})," (lightweight records that contain mappings of fields and values) organized in\n",(0,o.jsx)(n.strong,{children:"collections"}),". MongoDB documents have a mandatory ",(0,o.jsx)(n.code,{children:"_id"})," field that is used as the key of the\ncollection."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"You'll need:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Credentials for connecting to your MongoDB instance and database"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Read access to your MongoDB database(s), see ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/authorization/",children:"Role-Based Access\nControl"})," for more information."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Configuration Tip",type:"tip",children:(0,o.jsxs)(n.p,{children:["If you are using a user with access to all databases, then in your mongodb address, you must specify\n",(0,o.jsx)(n.code,{children:"?authSource=admin"})," parameter so that authentication is done through your admin database."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["ReplicaSet enabled on your database, see ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/",children:"Deploy a Replica\nSet"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you are using MongoDB Atlas, or your MongoDB provider requires whitelisting of IPs, you need to\nwhitelist Estuary's IP ",(0,o.jsx)(n.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the Flow specification\nfile. See ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1468/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using\nconnectors. The values and specification sample below provide configuration details specific to the\nMongoDB source connector."]}),"\n",(0,o.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Title"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required/Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/address"})})}),(0,o.jsx)(n.td,{children:"Address"}),(0,o.jsx)(n.td,{children:"Host and port of the database. Optionally can specify scheme for the URL such as mongodb+srv://host."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/user"})})}),(0,o.jsx)(n.td,{children:"User"}),(0,o.jsx)(n.td,{children:"Database user to connect as."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/password"})})}),(0,o.jsx)(n.td,{children:"Password"}),(0,o.jsx)(n.td,{children:"Password for the specified database user."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/database"})}),(0,o.jsx)(n.td,{children:"Database"}),(0,o.jsx)(n.td,{children:"Optional comma-separated list of the databases to discover. If not provided will discover all available databases in the instance."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Title"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required/Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/database"})})}),(0,o.jsx)(n.td,{children:"Database"}),(0,o.jsx)(n.td,{children:"Database name"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/collection"})})}),(0,o.jsx)(n.td,{children:"Stream"}),(0,o.jsx)(n.td,{children:"Collection name"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mongodb:dev\n        config:\n          address: "mongo:27017"\n          password: "flow"\n          user: "flow"\n    bindings:\n      - resource:\n          collection: users\n          database: test\n        target: ${PREFIX}/users\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ssh-tunneling",children:"SSH Tunneling"}),"\n",(0,o.jsx)(n.p,{children:"As an alternative to connecting to your MongoDB instance directly, you can allow secure connections via SSH tunneling. To do so:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Refer to the ",(0,o.jsx)(n.a,{href:"../../../../guides/connect-network/",children:"guide"})," to configure an SSH server on the cloud platform of your choice."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Configure your connector as described in the ",(0,o.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, with the addition of the ",(0,o.jsx)(n.code,{children:"networkTunnel"})," stanza to enable the SSH tunnel, if using. See ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1468/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"backfill-and-real-time-updates",children:"Backfill and real-time updates"}),"\n",(0,o.jsxs)(n.p,{children:["When performing the initial database snapshot, the connector continuously reads from ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/changeStreams/",children:(0,o.jsx)(n.strong,{children:"change\nstreams"})})," to capture change events while\nexecuting collection scans to backfill pre-existing documents. After the initial snapshot, the\nconnector continues to read from the change streams indefinitely to capture all changes going\nforward."]}),"\n",(0,o.jsxs)(n.p,{children:["If the connector's process is paused for a while, it will attempt to resume capturing change events\nfrom where it left off, however the connector's ability to do this depends on the size of the\n",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/replica-set-oplog/",children:"replica set oplog"}),", and in certain\ncircumstances, when the pause has been long enough for the oplog to have evicted old change events,\nthe connector will need to re-do the backfill to ensure data consistency. In these cases it is\nnecessary to ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/tutorial/change-oplog-size/#c.-change-the-oplog-size-of-the-replica-set-member",children:"resize your\noplog"}),"\nor ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/command/replSetResizeOplog/#minimum-oplog-retention-period",children:"set a minimum retention\nperiod"}),"\nfor your oplog to be able to reliably capture data. The recommended minimum retention period is at\nleast 24 hours, but we recommend higher values to improve reliability."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);