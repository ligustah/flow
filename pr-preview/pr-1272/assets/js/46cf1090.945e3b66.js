"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},l="MongoDB",i={unversionedId:"reference/Connectors/capture-connectors/mongodb",id:"reference/Connectors/capture-connectors/mongodb",title:"MongoDB",description:"This connector captures data from your MongoDB collections into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/mongodb.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/mongodb",permalink:"/pr-preview/pr-1272/reference/Connectors/capture-connectors/mongodb",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/mongodb.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Microsoft SQL Server",permalink:"/pr-preview/pr-1272/reference/Connectors/capture-connectors/sqlserver"},next:{title:"MySQL",permalink:"/pr-preview/pr-1272/reference/Connectors/capture-connectors/MySQL"}},s={},p=[{value:"Data model",id:"data-model",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Backfill and real-time updates",id:"backfill-and-real-time-updates",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,"This connector captures data from your MongoDB collections into Flow collections."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-mongodb:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-mongodb:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"data-model"},"Data model"),(0,r.kt)("p",null,"MongoDB is a NoSQL database. Its ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/data-modeling-introduction/"},"data\nmodel"),"\nconsists of ",(0,r.kt)("strong",{parentName:"p"},"documents")," (lightweight records that contain mappings of fields\nand values) organized in ",(0,r.kt)("strong",{parentName:"p"},"collections"),". MongoDB documents have a mandatory\n",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," field that is used as the key of the collection."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Credentials for connecting to your MongoDB instance and database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read access to your MongoDB database(s), see\n",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/authorization/"},"Role-Based Access\nControl")," for more\ninformation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," database and ",(0,r.kt)("inlineCode",{parentName:"p"},"oplog.rs")," collection in that\ndatabase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We recommend giving access to read all databases, as this allows us to\nwatch an instance-level change stream, allowing for better guarantees of\nreliability, and possibility of capturing multiple databases in the same\ntask. However, if access to all databases is not possible, you can\ngive us access to a single database and we will watch a change stream on\nthat specific database."),(0,r.kt)("p",{parentName:"li"}," In order to create a user with access to all databases, use a command like so:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'use admin;\ndb.createUser({\n user: "<username>",\n pwd: "<password>",\n roles: [ "readAnyDatabase" ]\n})\n')),(0,r.kt)("p",{parentName:"li"}," If you are using a userw ith access to all databases, then in your mongodb\naddress, you must specify ",(0,r.kt)("inlineCode",{parentName:"p"},"?authSource=admin")," parameter so that\nauthentication is done through your admin database."),(0,r.kt)("p",{parentName:"li"}," In order to create a user with access to a specific database and the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," database,\nuse a command like so:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'use <your-db>;\ndb.createUser({\n  user: "<username>",\n  pwd: "<password>",\n  roles: ["read", { role: "read", db: "local" }]\n})\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ReplicaSet enabled on your database, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/"},"Deploy a Replica\nSet"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are using MongoDB Atlas, or your MongoDB provider requires whitelisting\nof IPs, you need to whitelist Estuary's IP ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128"),"."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1272/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Firestore source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Host and port of the database. Optionally can specify scheme for the URL such as mongodb+srv://host."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database to capture from."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Database user to connect as."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Database name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/collection"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mongodb:dev\n        config:\n          address: "mongo:27017"\n          database: "test"\n          password: "flow"\n          user: "flow"\n    bindings:\n      - resource:\n          collection: users\n          database: test\n        target: ${PREFIX}/users\n')),(0,r.kt)("h2",{id:"backfill-and-real-time-updates"},"Backfill and real-time updates"),(0,r.kt)("p",null,"The connector starts by backfilling data from the specified collections until it\nreaches the current time. Once all the data up to the current time has been\nbackfilled, the connector then uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/changeStreams/"},(0,r.kt)("strong",{parentName:"a"},"change\nstreams"))," to capture\nchange events and emit those updates to their respective flow collections."),(0,r.kt)("p",null,"If the connector's process is paused for a while, it will attempt to resume\ncapturing change events since the last received change event, however the\nconnector's ability to do this depends on the size of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/replica-set-oplog/"},"replica set\noplog"),", and in\ncertain circumstances, when the pause has been long enough for the oplog to have\nevicted old change events, the connector will need to re-do the backfill to\nensure data consistency. In these cases it is necessary to ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/change-oplog-size/#c.-change-the-oplog-size-of-the-replica-set-member"},"resize your\noplog")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/command/replSetResizeOplog/#minimum-oplog-retention-period"},"set a minimum retention\nperiod"),"\nfor your oplog to be able to reliably capture data.\nThe recommended minimum retention period is at least 24 hours, but we recommend\nhigher values to improve reliability."))}u.isMDXComponent=!0}}]);