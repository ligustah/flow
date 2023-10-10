"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},i="HTTP Ingest (Webhook)",l={unversionedId:"reference/Connectors/capture-connectors/http-ingest",id:"reference/Connectors/capture-connectors/http-ingest",title:"HTTP Ingest (Webhook)",description:"The HTTP Ingest connector allows you to capture data from incoming HTTP requests.",source:"@site/docs/reference/Connectors/capture-connectors/http-ingest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/http-ingest",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/http-ingest",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/http-ingest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP File",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/http-file"},next:{title:"HubSpot",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/hubspot"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Send sample data to Flow",id:"send-sample-data-to-flow",level:3},{value:"Configure a webhook",id:"configure-a-webhook",level:3},{value:"URL Paths",id:"url-paths",level:3},{value:"Webhook IDs",id:"webhook-ids",level:3},{value:"Custom collection IDs",id:"custom-collection-ids",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Webhook signature verification",id:"webhook-signature-verification",level:3},{value:"Endpoint Configuration",id:"endpoint-configuration",level:2},{value:"Resource configuration",id:"resource-configuration",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-ingest-webhook"},"HTTP Ingest (Webhook)"),(0,o.kt)("p",null,"The HTTP Ingest connector allows you to capture data from ",(0,o.kt)("em",{parentName:"p"},"incoming")," HTTP requests.\nA common use case is to capture webhook deliveries, turning them into a Flow collection."),(0,o.kt)("p",null,"If you need to capture a dataset hosted at at HTTP endpoint, see the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/http-file"},"HTTP File")," connector."),(0,o.kt)("p",null,"The connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,o.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-http-ingest:dev"},(0,o.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-http-ingest:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This connector is distinct from all other capture connectors in that it's not designed to pull data from a specific\nsystem or endpoint. It requires no endpoint-specific configuration, and can accept any and all valid JSON objects from any source."),(0,o.kt)("p",null,"This is useful primarily if you want to test out Flow or see how your webhook data will come over."),(0,o.kt)("p",null,"To begin, use the web app to create a capture. Once published, the confirmation dialog displays\na unique URL for your public endpoint."),(0,o.kt)("p",null,"You're now ready to send data to Flow."),(0,o.kt)("h3",{id:"send-sample-data-to-flow"},"Send sample data to Flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After publishing the capture, click the endpoint link from the confirmation dialog to open the Swagger UI page for your capture.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand ",(0,o.kt)("strong",{parentName:"p"},"POST")," or ",(0,o.kt)("strong",{parentName:"p"},"PUT")," and click ",(0,o.kt)("strong",{parentName:"p"},"Try it out")," to send some example JSON documents using the UI. You can also copy the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," commands to send data via the command line.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After sending data, go to the Collections page of the Flow web app and find the collection associated with your capture.\nClick ",(0,o.kt)("strong",{parentName:"p"},"Details")," to view the data preview."))),(0,o.kt)("h3",{id:"configure-a-webhook"},"Configure a webhook"),(0,o.kt)("p",null,"To configure a webhook in another service, such as Github, Shopify, or Segment, you'll need to paste a webhook URL into the configuration of their service."),(0,o.kt)("p",null,"You can copy and paste that URL from the Flow web app into a webhook origination service, appending the full name of the collection of the bound collection. This collection name\nis typically determined automatically when you create the capture in the UI, formatted as ",(0,o.kt)("inlineCode",{parentName:"p"},"prefixes/captureName/webhook-data"),"."),(0,o.kt)("p",null,"For example, if you entered ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/foo")," for the capture name, then\nyour collection name would default to ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/foo/webhook-data"),", and your full webhook URL would be ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<your-unique-hostname>/acmeCo/foo/webhook-data"),"."),(0,o.kt)("h3",{id:"url-paths"},"URL Paths"),(0,o.kt)("p",null,"You can customize the URL path for each binding by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," option in the ",(0,o.kt)("a",{parentName:"p",href:"#resource-configuration"},"resource configuration")," when creating the capture. For example, if you set the path to ",(0,o.kt)("inlineCode",{parentName:"p"},"my-webhook.json"),",\nthen the full URL for that collection would be ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<your-unique-hostname>/my-webhook.json"),". You can even create multiple bindings to the same collection\nin order to serve webhooks from different URLs."),(0,o.kt)("h3",{id:"webhook-ids"},"Webhook IDs"),(0,o.kt)("p",null,'Webhook delivery is typically "at least once". This means that webhooks from common services such as Github, Segment, Shopify, etc. may sometimes be sent multiple times.\nIn order to prevent problems due to duplicate processing of webhooks, these services typically provide either an HTTP header or a field within each document that serves\nas a unique ID for each webhook event. This can be used to deduplicate the events in your ',(0,o.kt)("inlineCode",{parentName:"p"},"webhook-data")," collection. The key of the discovered ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-data")," collection is ",(0,o.kt)("inlineCode",{parentName:"p"},"/_meta/webhookId"),".\nBy default, this value is generated automatically by the connector, and no-deduplication will be performed.\nYou can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"idFromHeader")," option in the ",(0,o.kt)("a",{parentName:"p",href:"#resource-configuration"},"resource configuration")," to have the connector automatically assign the value of the given HTTP header to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/_meta/webhookId")," property.\nDoing so means that a materialization of the ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-data")," collection will automatically deduplicate the webhook events."),(0,o.kt)("p",null,"Here's a table with some common webhook services and headers that they use:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Service"),(0,o.kt)("th",{parentName:"tr",align:null},"Value to use for ",(0,o.kt)("inlineCode",{parentName:"th"},"idFromHeader")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Github"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-Github-Event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Shopify"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-Shopify-Webhook-Id"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Zendesk"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"x-zendesk-webhook-id"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Jira"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-Atlassian-Webhook-Identifier"))))),(0,o.kt)("h3",{id:"custom-collection-ids"},"Custom collection IDs"),(0,o.kt)("p",null,"Some webhooks don't pass a deduplication ID as part of the HTTP headers. That's fine, and you can still easily deduplicate the events.\nTo do so, you'll just need to customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," of your webhook-data collection, or bind the webhook to an existing collection that already has the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),".\nJust set the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," to the field(s) within the webhook payload that uniquely identify the event.\nFor example, to capture webhooks from Segment, you'll want to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," to ",(0,o.kt)("inlineCode",{parentName:"p"},'["/messageId"]'),", and ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," requires that property to exist and be a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"The connector can optionally require each request to present an authentication token as part of an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer "),' HTTP header. To enable authentication, generate a secret and paste it into the "Require Auth Token" field. We recommend using a password manager to generate these values, but keep in mind that not all systems will be able to send values with certain special characters, so you may want to disable special characters when you generate the secret. If you enable authentication, then each incoming request must have an ',(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header with the value of your token. For example, if you use an auth token value of ",(0,o.kt)("inlineCode",{parentName:"p"},"mySecretToken"),", then the header on each request must be ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer mySecretToken"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you don't enable authentication, then anyone who knows the URL will be able to publish data to your collection.")," We recommend using authentication whenever possible."),(0,o.kt)("h3",{id:"webhook-signature-verification"},"Webhook signature verification"),(0,o.kt)("p",null,"This connector does not yet support webhook signature verification. If this is a requirement for your use case, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto://support@estuary.dev"},(0,o.kt)("inlineCode",{parentName:"a"},"support@estuary.dev"))," and let us know."),(0,o.kt)("h2",{id:"endpoint-configuration"},"Endpoint Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"****"),(0,o.kt)("td",{parentName:"tr",align:null},"EndpointConfig"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/require_auth_token")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Optional bearer token to authenticate webhook requests. WARNING: If this is empty or unset, then anyone who knows the URL of the connector will be able to write data to your collections."),(0,o.kt)("td",{parentName:"tr",align:null},"null, string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"null"))))),(0,o.kt)("h2",{id:"resource-configuration"},"Resource configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"****"),(0,o.kt)("td",{parentName:"tr",align:null},"ResourceConfig"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/idFromHeader")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Set the ","/","_","meta","/","webhookId from the given HTTP header in each request. If not set, then a random id will be generated automatically. If set, then each request will be required to have the header, and the header value will be used as the value of ","`","/","_","meta","/","webhookId","`","."),(0,o.kt)("td",{parentName:"tr",align:null},"null, string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/path")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The URL path to use for adding documents to this binding. Defaults to the name of the collection."),(0,o.kt)("td",{parentName:"tr",align:null},"null, string"),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);