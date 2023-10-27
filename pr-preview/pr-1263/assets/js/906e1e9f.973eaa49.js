"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(k,p(p({ref:t},c),{},{components:a})):r.createElement(k,p({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<i;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},p="Iterable",o={unversionedId:"reference/Connectors/capture-connectors/iterable",id:"reference/Connectors/capture-connectors/iterable",title:"Iterable",description:"This connector captures data from Iterable into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/iterable.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/iterable",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/iterable",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/iterable.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Intercom",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/intercom"},next:{title:"Jira",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/jira"}},l={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iterable"},"Iterable"),(0,n.kt)("p",null,"This connector captures data from Iterable into Flow collections."),(0,n.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-iterable:dev"},(0,n.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-iterable:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,n.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."),(0,n.kt)("p",null,"You can find their documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/iterable/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,n.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,n.kt)("p",null,"The following data resources are supported through the Iterable APIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#campaigns_campaigns"},"Campaigns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#campaigns_metrics"},"Campaign Metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#channels_channels"},"Channels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Bounce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Click")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Complaint")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Open")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Send")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Send Skip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Subscribe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Unsubscribe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#events_User_events"},"Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#lists_getLists"},"Lists")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#lists_getLists_0"},"List Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#messageTypes_messageTypes"},"Message Types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#metadata_list_tables"},"Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#templates_getTemplates"},"Templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushOpen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushUninstall")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushBounce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"WebPushSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"WebPushClick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"WebPushSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppOpen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppClick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppClose")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppDelete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppDelivery")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InboxSession")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InboxMessageImpression")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsBounce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsClick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsReceived")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsUsageInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Purchase")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"CustomEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"HostedUnsubscribeClick"))),(0,n.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To set up the Iterable source connector, you'll need the Iterable ",(0,n.kt)("a",{parentName:"li",href:"https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-"},(0,n.kt)("inlineCode",{parentName:"a"},"Server-side")," API Key with ",(0,n.kt)("inlineCode",{parentName:"a"},"standard")," permissions"),".")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Iterable source connector."),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"endpoint"},"Endpoint"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/apikey")),(0,n.kt)("td",{parentName:"tr",align:null},"API Key"),(0,n.kt)("td",{parentName:"tr",align:null},"The value of the Iterable API Key generated."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,n.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,n.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h4",{id:"bindings"},"Bindings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,n.kt)("td",{parentName:"tr",align:null},"Stream"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource of your Iterable project from which collections are captured."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,n.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,n.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h3",{id:"sample"},"Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-iterable:dev\n        config:\n          apikey: <secret>\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: purchase\n          syncMode: full_refresh\n        target: ${PREFIX}/purchase\n      {...}\n")))}u.isMDXComponent=!0}}]);