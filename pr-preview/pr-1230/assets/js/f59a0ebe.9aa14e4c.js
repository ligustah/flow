"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},i="Aircall",o={unversionedId:"reference/Connectors/capture-connectors/aircall",id:"reference/Connectors/capture-connectors/aircall",title:"Aircall",description:"This connector captures data from Aircall into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/aircall.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/aircall",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/aircall",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/aircall.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Capture connectors",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/"},next:{title:"Airtable",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/airtable"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up the Aircall connector in Estuary Flow",id:"set-up-the-aircall-connector-in-estuary-flow",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Supported Streams",id:"supported-streams",level:2},{value:"API Method Example",id:"api-method-example",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aircall"},"Aircall"),(0,a.kt)("p",null,"This connector captures data from Aircall into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-aircall:dev provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To set up the Aircall connector, you need the following prerequisite:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access Token: An access token acting as a bearer token is required for the connector to work. You can find the access token in the settings of ",(0,a.kt)("a",{parentName:"li",href:"https://dashboard.aircall.io/integrations/api-keys"},"Aircall"),".")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Follow the steps below to set up the Aircall connector."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Obtain an Aircall access token from the Aircall ",(0,a.kt)("a",{parentName:"li",href:"https://dashboard.aircall.io/integrations/api-keys"},"settings"),".")),(0,a.kt)("h3",{id:"set-up-the-aircall-connector-in-estuary-flow"},"Set up the Aircall connector in Estuary Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into your Estuary Flow account."),(0,a.kt)("li",{parentName:"ol"},'In the left navigation bar, click on "Captures". In the top-left corner, click "Connector Search".'),(0,a.kt)("li",{parentName:"ol"},'Enter the name for the Aircall connector and select "Aircall" from the dropdown.'),(0,a.kt)("li",{parentName:"ol"},"Fill out the following endpoint configurations:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_id"),": The auto-generated ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_token"),": The access token obtained from Aircall settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start_date"),": Date filter for eligible streams. Enter the desired start date.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Aircall source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api_id")),(0,a.kt)("td",{parentName:"tr",align:null},"API ID"),(0,a.kt)("td",{parentName:"tr",align:null},"App ID found at ",(0,a.kt)("a",{parentName:"td",href:"https://dashboard.aircall.io/integrations/api-keys"},"settings")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api_token")),(0,a.kt)("td",{parentName:"tr",align:null},"API Token"),(0,a.kt)("td",{parentName:"tr",align:null},"App token found at ",(0,a.kt)("a",{parentName:"td",href:"https://dashboard.aircall.io/integrations/api-keys"},"settings")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,a.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,a.kt)("td",{parentName:"tr",align:null},"Date time filter for incremental filter, Specify which date to extract from."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource of your Aircall project from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "properties": {\n    "start_date": {\n      "default": "2023-01-01T00:00:00.000Z",\n      "format": null\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("p",null,"The Aircall connector supports the following streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"calls"),(0,a.kt)("li",{parentName:"ul"},"company"),(0,a.kt)("li",{parentName:"ul"},"contacts"),(0,a.kt)("li",{parentName:"ul"},"numbers"),(0,a.kt)("li",{parentName:"ul"},"tags"),(0,a.kt)("li",{parentName:"ul"},"user_availablity"),(0,a.kt)("li",{parentName:"ul"},"users"),(0,a.kt)("li",{parentName:"ul"},"teams"),(0,a.kt)("li",{parentName:"ul"},"webhooks")),(0,a.kt)("h2",{id:"api-method-example"},"API Method Example"),(0,a.kt)("p",null,"An example of an API method call for Aircall:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET https://api.aircall.io/v1/numbers")),(0,a.kt)("h2",{id:"performance-considerations"},"Performance Considerations"),(0,a.kt)("p",null,"The Aircall API currently uses v1. The connector defaults to using v1."))}d.isMDXComponent=!0}}]);