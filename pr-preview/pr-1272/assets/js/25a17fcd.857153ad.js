"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},i="Slack",o={unversionedId:"reference/Connectors/materialization-connectors/slack",id:"reference/Connectors/materialization-connectors/slack",title:"Slack",description:"This connector lets you materialize data from Estuary Flow directly into Slack channels.",source:"@site/docs/reference/Connectors/materialization-connectors/slack.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/slack",permalink:"/pr-preview/pr-1272/reference/Connectors/materialization-connectors/slack",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/slack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pinecone",permalink:"/pr-preview/pr-1272/reference/Connectors/materialization-connectors/pinecone"},next:{title:"Microsoft SQLServer",permalink:"/pr-preview/pr-1272/reference/Connectors/materialization-connectors/sqlserver"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slack"},"Slack"),(0,a.kt)("p",null,"This connector lets you materialize data from Estuary Flow directly into Slack channels."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ghcr.io/estuary/materialize-slack:dev")," provides the latest connector image. For earlier versions, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-slack"},"GitHub Container Registry")," page."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use this connector, ensure you have the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An active Slack workspace with appropriate permissions."),(0,a.kt)("li",{parentName:"ol"},"Slack credentials and access token for authentication."),(0,a.kt)("li",{parentName:"ol"},"At least one Flow collection.")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Slack connector is available for use in the Flow web application. To learn more about connectors and how to set them up, read our guide on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"using connectors"),"."),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/access_token"),(0,a.kt)("td",{parentName:"tr",align:null},"Access Token"),(0,a.kt)("td",{parentName:"tr",align:null},"The Slack API access token for authentication."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/client_id"),(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Client ID for authentication."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/client_secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"The Slack API client secret."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/source"),(0,a.kt)("td",{parentName:"tr",align:null},"Source"),(0,a.kt)("td",{parentName:"tr",align:null},"Source data in Flow to be sent to Slack."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/channel"),(0,a.kt)("td",{parentName:"tr",align:null},"Channel"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the Slack channel to send messages to."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/display_name"),(0,a.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The display name for the sender in Slack."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/logo_emoji"),(0,a.kt)("td",{parentName:"tr",align:null},"Logo Emoji"),(0,a.kt)("td",{parentName:"tr",align:null},"The emoji to be used."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'materializations:\n  ${PREFIX}/${MATERIALIZATION_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-slack:dev\n        config:\n          credentials:\n            auth_type: OAuth\n            access_token: {secret}\n            client_id: {your_client_id}\n            client_secret: {secret}\n    bindings:\n      - source: ${PREFIX}/source_name\n        resource:\n          channel: "id: C05A95LJHSL"\n          sender_config:\n            display_name: Task Monitor\n            logo_emoji: ":eyes:"\n')))}m.isMDXComponent=!0}}]);