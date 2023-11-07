"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},l="Elasticsearch",o={unversionedId:"reference/Connectors/materialization-connectors/Elasticsearch",id:"reference/Connectors/materialization-connectors/Elasticsearch",title:"Elasticsearch",description:"This connector materializes Flow collections into indices in an Elasticsearch cluster.",source:"@site/docs/reference/Connectors/materialization-connectors/Elasticsearch.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Elasticsearch",permalink:"/pr-preview/pr-1277/reference/Connectors/materialization-connectors/Elasticsearch",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Elasticsearch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Apache Parquet in S3",permalink:"/pr-preview/pr-1277/reference/Connectors/materialization-connectors/Parquet"},next:{title:"Firebolt",permalink:"/pr-preview/pr-1277/reference/Connectors/materialization-connectors/Firebolt"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Setup",id:"setup",level:2},{value:"Delta updates",id:"delta-updates",level:2},{value:"Changelog",id:"changelog",level:2},{value:"V3: 2023-08-21",id:"v3-2023-08-21",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,r.kt)("p",null,"This connector materializes Flow collections into indices in an Elasticsearch cluster."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-elasticsearch:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-elasticsearch:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Elastic cluster with a known ",(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html#send-requests-to-elasticsearch"},"endpoint")),(0,r.kt)("li",{parentName:"ul"},"The role used to connect to Elasticsearch must have at least the following privileges (see Elastic's documentation on ",(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/defining-roles.html#roles-indices-priv"},"defining roles")," and ",(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/security-privileges.html#privileges-list-indices"},"security privileges"),"):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster privilege")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor")),(0,r.kt)("li",{parentName:"ul"},"For each index to be created: ",(0,r.kt)("inlineCode",{parentName:"li"},"read"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"write"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"view_index_metadata"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"create_index"),". When creating ",(0,r.kt)("strong",{parentName:"li"},"Index privileges"),", you can use a wildcard ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"')," to grant the privileges to all indices."))),(0,r.kt)("li",{parentName:"ul"},"At least one Flow collection")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure an Elasticsearch materialization, which will direct the contents of these Flow collections into Elasticsearch indices."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authentication")),(0,r.kt)("p",null,"You can authenticate to Elasticsearch using either a username and password, or using an API key."),(0,r.kt)("p",null,"The connector will automatically create an Elasticsearch index for each binding of the materialization with index mappings for each selected field of the binding. It uses the last component of the collection name as the name of the index by default. You can customize the name of the index using the ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," property in the resource configuration for each binding."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/endpoint"))),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint host or URL. Must start with http:// or https://. If using Elastic Cloud this follows the format https://CLUSTER_ID.REGION.CLOUD_PLATFORM.DOMAIN:PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/username")),(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Username to use for authenticating with Elasticsearch."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/password")),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password to use for authenticating with Elasticsearch."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/apiKey")),(0,r.kt)("td",{parentName:"tr",align:null},"API Key"),(0,r.kt)("td",{parentName:"tr",align:null},"API key for authenticating with the Elasticsearch API. Must be the 'encoded' API key credentials, which is the Base64-encoding of the UTF-8 representation of the id and api_key joined by a colon (:)."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"advanced/number_of_replicas")),(0,r.kt)("td",{parentName:"tr",align:null},"Index Replicas"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of replicas to create new indices with. Leave blank to use the cluster default."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/index"))),(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Elasticsearch index to store the materialization results."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/delta_updates"))),(0,r.kt)("td",{parentName:"tr",align:null},"Delta updates"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use standard or ",(0,r.kt)("a",{parentName:"td",href:"#delta-updates"},"delta updates"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/number_of_shards")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of shards"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of shards to create the index with. Leave blank to use the cluster default."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  PREFIX/mat_name:\n    endpoint:\n      connector:\n         # Path to the latest version of the connector, provided as a Docker image\n        image: ghcr.io/estuary/materialize-elasticsearch:dev\n        config:\n          endpoint: https://ec47fc4d2c53414e1307e85726d4b9bb.us-east-1.aws.found.io:9243\n          credentials:\n            username: flow_user\n            password: secret\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n        bindings:\n          - resource:\n              index: my-elasticsearch-index\n            source: PREFIX/source_collection\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You must configure your Elasticsearch cluster to allow connections from Estuary. It may be necessary to whitelist Estuary Flow's IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128"),"."),(0,r.kt)("p",null,"Alternatively, you can allow secure connections via SSH tunneling. To do so:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"guide")," to configure an SSH server on the cloud platform of your choice.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your connector as described in the ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section above, with the addition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"networkTunnel")," stanza to enable the SSH tunnel, if using. See ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks")," for additional details and a sample."))),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector supports both standard and delta updates. You must choose an option for each binding."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/concepts/materialization#delta-updates"},"Learn more about delta updates")," and the implications of using each update type."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"The changelog includes a list of breaking changes made to this connector. Backwards-compatible changes are not listed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proceed with caution when editing materializations created with previous versions of this connector; editing always upgrades your materialization to the latest connector version.")),(0,r.kt)("h4",{id:"v3-2023-08-21"},"V3: 2023-08-21"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Index mappings will now be created based on the selected fields of the materialization. Previously only dynamic runtime mappings were created, and the entire root document was always materialized.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Moved "number of replicas" configuration for new indices to an advanced, optional, endpoint-level configuration.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'The "number of shards" resource configuration is now optional.'))))}u.isMDXComponent=!0}}]);