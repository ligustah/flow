"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"reference/Connectors/materialization-connectors/Rockset",id:"reference/Connectors/materialization-connectors/Rockset",title:"Rockset",description:"This Flow connector materializes delta updates of your Flow collections into Rockset collections.",source:"@site/docs/reference/Connectors/materialization-connectors/Rockset.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Rockset",permalink:"/pr-preview/pr-1124/reference/Connectors/materialization-connectors/Rockset",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Rockset.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/pr-preview/pr-1124/reference/Connectors/materialization-connectors/PostgreSQL"},next:{title:"SQLite",permalink:"/pr-preview/pr-1124/reference/Connectors/materialization-connectors/SQLite"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates and reduction strategies",id:"delta-updates-and-reduction-strategies",level:2},{value:"Changelog",id:"changelog",level:2},{value:"V2: 2022-12-06",id:"v2-2022-12-06",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This Flow connector materializes ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1124/concepts/materialization#delta-updates"},"delta updates")," of your Flow collections into Rockset collections."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-rockset"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-rockset:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Rockset ",(0,r.kt)("a",{parentName:"li",href:"https://rockset.com/docs/rest-api/#createapikey"},"API key generated"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The API key must have the ",(0,r.kt)("strong",{parentName:"li"},"Member")," or ",(0,r.kt)("strong",{parentName:"li"},"Admin")," ",(0,r.kt)("a",{parentName:"li",href:"https://rockset.com/docs/iam/#users-api-keys-and-roles"},"role"),"."))),(0,r.kt)("li",{parentName:"ul"},"A Rockset workspace",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."))),(0,r.kt)("li",{parentName:"ul"},"A Rockset collection",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."))),(0,r.kt)("li",{parentName:"ul"},"At least one Flow collection")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1124/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Rockset materialization, which will direct one or more of your Flow collections to your desired Rockset collections."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/api_key"))),(0,r.kt)("td",{parentName:"tr",align:null},"Rockset API Key"),(0,r.kt)("td",{parentName:"tr",align:null},"The key used to authenticate to the Rockset API. Must have role of admin or member."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region_base_url"))),(0,r.kt)("td",{parentName:"tr",align:null},"Region Base URL"),(0,r.kt)("td",{parentName:"tr",align:null},"The base URL to connect to your Rockset deployment. Example: api.usw2a1.rockset.com (do not include the protocol). ",(0,r.kt)("a",{parentName:"td",href:"https://rockset.com/docs/rest-api/"},"See supported options and how to find yours"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("p",null,"The binding configuration includes the optional ",(0,r.kt)("strong",{parentName:"p"},"Advanced collection settings")," section.\nThese settings can help optimize your output Rockset collections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clustering fields"),": You can specify clustering fields\nfor your Rockset collection's columnar index to help optimize specific query patterns.\nSee the ",(0,r.kt)("a",{parentName:"li",href:"https://rockset.com/docs/query-composition/#data-clustering"},"Rockset docs")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Retention period"),": Amount of time before data is purged, in seconds.\nA low value will keep the amount of data indexed in Rockset smaller.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings")),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Collection Settings"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/clustering_key")),(0,r.kt)("td",{parentName:"tr",align:null},"Clustering Key"),(0,r.kt)("td",{parentName:"tr",align:null},"List of clustering fields"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/advancedCollectionSettings/clustering_key/-/field_name"))),(0,r.kt)("td",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of a field"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/retention_secs")),(0,r.kt)("td",{parentName:"tr",align:null},"Retention Period"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of seconds after which data is purged based on event time"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/collection"))),(0,r.kt)("td",{parentName:"tr",align:null},"Rockset Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Rockset collection (will be created if it does not exist)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/workspace"))),(0,r.kt)("td",{parentName:"tr",align:null},"Workspace"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Rockset workspace (will be created if it does not exist)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${mat_name}:\n      endpoint:\n      connector:\n            config:\n               region_base_url: api.usw2a1.rockset.com\n               api_key: supersecret\n            # Path to the latest version of the connector, provided as a Docker image\n            image: ghcr.io/estuary/materialize-rockset:dev\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n    - resource:\n        workspace: ${namespace_name}\n        collection: ${table_name}\n    source: ${PREFIX}/${source_collection}\n")),(0,r.kt)("h2",{id:"delta-updates-and-reduction-strategies"},"Delta updates and reduction strategies"),(0,r.kt)("p",null,"The Rockset connector operates only in ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1124/concepts/materialization#delta-updates"},"delta updates")," mode.\nThis means that Rockset, rather than Flow, performs the document merge.\nIn some cases, this will affect how materialized views look in Rockset compared to other systems that use standard updates."),(0,r.kt)("p",null,"Rockset merges documents by the key defined in the Flow collection schema, and always uses the semantics of ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7396"},"RFC 7396 - JSON merge"),".\nThis differs from how Flow would reduce documents, most notably in that Rockset will ",(0,r.kt)("em",{parentName:"p"},"not")," honor any reduction strategies defined in your Flow schema.\nFor consistent output of a given collection across Rockset and other materialization endpoints, it's important that that collection's reduction annotations\nin Flow mirror Rockset's semantics."),(0,r.kt)("p",null,"To accomplish this, ensure that your collection schema has the following ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1124/concepts/schemas#reductions"},"data reductions")," defined in its schema:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A top-level reduction strategy of ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1124/reference/reduction-strategies/merge"},"merge")),(0,r.kt)("li",{parentName:"ul"},"A strategy of ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1124/reference/reduction-strategies/firstwritewins-and-lastwritewins"},"lastWriteWins")," for all nested values (this is the default)")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"The changelog includes a list of breaking changes made to this connector. Backwards-compatible changes are not listed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proceed with caution when editing materializations created with previous versions of this connector;\nediting always upgrades your materialization to the latest connector version.")),(0,r.kt)("h4",{id:"v2-2022-12-06"},"V2: 2022-12-06"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Region Base URL was added and is now required as part of the endpoint configuration."),(0,r.kt)("li",{parentName:"ul"},"Event Time fields and the Insert Only option were removed from the advanced collection settings.")))}u.isMDXComponent=!0}}]);