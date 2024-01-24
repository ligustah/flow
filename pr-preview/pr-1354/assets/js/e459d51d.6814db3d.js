"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Google Firestore",l={unversionedId:"reference/Connectors/capture-connectors/google-firestore",id:"reference/Connectors/capture-connectors/google-firestore",title:"Google Firestore",description:"This connector captures data from your Google Firestore collections into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/google-firestore.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-firestore",permalink:"/pr-preview/pr-1354/reference/Connectors/capture-connectors/google-firestore",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-firestore.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Analytics UA",permalink:"/pr-preview/pr-1354/reference/Connectors/capture-connectors/google-analytics"},next:{title:"Google Search Console",permalink:"/pr-preview/pr-1354/reference/Connectors/capture-connectors/google-search-console"}},s={},c=[{value:"Data model",id:"data-model",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Backfill mode",id:"backfill-mode",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-firestore"},"Google Firestore"),(0,r.kt)("p",null,"This connector captures data from your Google Firestore collections into Flow collections."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-firestore:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-firestore:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"data-model"},"Data model"),(0,r.kt)("p",null,"Firestore is a NoSQL database. Its ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/data-model"},"data model")," consists of ",(0,r.kt)("strong",{parentName:"p"},"documents")," (lightweight records that contain mappings of fields and values) organized in ",(0,r.kt)("strong",{parentName:"p"},"collections"),"."),(0,r.kt)("p",null,"Collections are organized hierarchically. A given document in a collection can, in turn, be associated with a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://firebase.google.com/docs/firestore/data-model#subcollections"},"subcollection")),"."),(0,r.kt)("p",null,"For example, you might have a collection called ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),", which contains two documents, ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bob"),".\nEach document has a subcollection called ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"users/alice/messages"),"), which contain more documents (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"users/alice/messages/1"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"users\n\u251c\u2500\u2500 alice\n\u2502   \u2514\u2500\u2500 messages\n\u2502       \u251c\u2500\u2500 1\n\u2502       \u2514\u2500\u2500 2\n\u2514\u2500\u2500 bob\n    \u2514\u2500\u2500 messages\n        \u2514\u2500\u2500 1\n")),(0,r.kt)("p",null,"The connector works by identifying documents associated with a particular sequence of Firestore collection names,\nregardless of documents that split the hierarchy.\nThese document groupings are mapped to Flow collections using a ",(0,r.kt)("a",{parentName:"p",href:"#bindings"},"path")," in the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"collection/*/subcollection"),"."),(0,r.kt)("p",null,"In this example, we'd end up with ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"users/*/messages")," Flow collections, with the latter contain messages from both users.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"/_meta/path")," property for each document contains its full, original path, so we'd still know which messages were Alice's and which were Bob's."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google service account with:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read access to your Firestore database, via ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/datastore/docs/access/iam"},"roles/datastore.viewer"),".\nYou can assign this role when you ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating"},"create the service account"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#single-role"},"add it to an existing service account"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A generated ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating"},"JSON service account key")," for the account."))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1354/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Firestore source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/googleCredentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud Service Account JSON credentials."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/database")),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional name of the database to capture from. Leave blank to autodetect. Typically ",'"',"projects","/","$","PROJECTID","/","databases","/","(default)",'"',"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/backfillMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Backfill Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the handling of data already in the collection. See ",(0,r.kt)("a",{parentName:"td",href:"#backfill-mode"},"below")," for details or just stick with ","'","async","'"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/path"))),(0,r.kt)("td",{parentName:"tr",align:null},"Path to Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports parent","/","*","/","nested to capture all nested collections of parent","'","s children"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-firestore:dev\n        config:\n          googleCredentials:\n            "type": "service_account",\n            "project_id": "project-id",\n            "private_key_id": "key-id",\n            "private_key": "-----BEGIN PRIVATE KEY-----\\nprivate-key\\n-----END PRIVATE KEY-----\\n",\n            "client_email": "service-account-email",\n            "client_id": "client-id",\n            "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n            "token_uri": "https://accounts.google.com/o/oauth2/token",\n            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account-email"\n    bindings:\n      - resource:\n          #The below `path` will capture all Firestore documents that match the pattern\n          #`orgs/<orgID>/runs/<runID>/runResults/<runResultID>/queryResults`.\n          #See the Data Model section above for details.\n          path: orgs/*/runs/*/runResults/*/queryResults\n          backfillMode: async\n        target: ${PREFIX}/orgs_runs_runResults_queryResults\n      - resource:\n          path: orgs/*/runs/*/runResults\n          backfillMode: async\n        target: ${PREFIX}/orgs_runs_runResults\n      - resource:\n          path: orgs/*/runs\n          backfillMode: async\n        target: ${PREFIX}/orgs_runs\n      - resource:\n          path: orgs\n          backfillMode: async\n        target: ${PREFIX}/orgs\n')),(0,r.kt)("h2",{id:"backfill-mode"},"Backfill mode"),(0,r.kt)("p",null,"In each captured collection's ",(0,r.kt)("a",{parentName:"p",href:"#bindings"},"binding configuration"),", you can choose whether and how to backfill historical data.\nThere are three options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"none"),": Skip preexisting data in the Firestore collection. Capture only new documents and changes to existing documents that occur after the capture is published.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"async"),": Use two threads to capture data. The first captures new documents, as with ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),".\nThe second progressively ingests historical data in chunks. This mode is most reliable for Firestore collections of all sizes but provides slightly weaker guarantees against data duplication."),(0,r.kt)("p",{parentName:"li"},"   The connector uses a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1354/concepts/schemas#reductions"},"reduction")," to reconcile changes to the same document found on the parallel threads.\nThe version with the most recent timestamp the document metadata will be preserved (",(0,r.kt)("inlineCode",{parentName:"p"},'{"strategy": "maximize", "key": "/_meta/mtime"}'),"). For most collections, this produces an accurate copy of your Firestore collections in Flow.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sync"),": Request that Firestore stream all changes to the collection since its creation, in order."),(0,r.kt)("p",{parentName:"li"}," This mode provides the strongest guarantee against duplicated data, but can cause errors for large datasets.\nFirestore may terminate the process if the backfill of historical data has not completed within about ten minutes, forcing the capture to restart from the beginning.\nIf this happens once it is likely to recur continuously. If left unattended for an extended time this can result in a massive number of read operations and a correspondingly large bill from Firestore."),(0,r.kt)("p",{parentName:"li"}," This mode should only be used when somebody can keep an eye on the backfill and shut it down if it has not completed within half an hour at most, and on relatively small collections.\n100,000 documents or fewer should generally be safe, although this can vary depending on the average document size in the collection."))),(0,r.kt)("p",null,"If you're unsure which backfill mode to use, choose ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"."))}d.isMDXComponent=!0}}]);