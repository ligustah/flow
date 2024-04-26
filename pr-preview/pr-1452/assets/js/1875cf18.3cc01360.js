"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2216],{29810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(74848),r=n(28453);const i={sidebar_position:3},s="Datadog HTTP Ingest (Webhook)",a={id:"reference/Connectors/capture-connectors/datadog-ingest",title:"Datadog HTTP Ingest (Webhook)",description:"The Datadog HTTP Ingest connector allows you to capture data from incoming HTTP requests from Datadog.",source:"@site/docs/reference/Connectors/capture-connectors/datadog-ingest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/datadog-ingest",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/datadog-ingest",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/datadog-ingest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Azure Blob Storage",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/azure-blob-storage"},next:{title:"Harvest",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/harvest"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Send sample data to Flow",id:"send-sample-data-to-flow",level:3},{value:"Configure a Datadog webhook",id:"configure-a-datadog-webhook",level:3},{value:"Webhook URLs",id:"webhook-urls",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Webhook signature verification",id:"webhook-signature-verification",level:3},{value:"Endpoint Configuration",id:"endpoint-configuration",level:2},{value:"Resource configuration",id:"resource-configuration",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"datadog-http-ingest-webhook",children:"Datadog HTTP Ingest (Webhook)"}),"\n",(0,o.jsxs)(t.p,{children:["The Datadog HTTP Ingest connector allows you to capture data from ",(0,o.jsx)(t.em,{children:"incoming"})," HTTP requests from Datadog.\nA common use case is to capture webhook deliveries, turning them into a Flow collection."]}),"\n",(0,o.jsxs)(t.p,{children:["The connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,o.jsx)(t.a,{href:"https://ghcr.io/estuary/source-http-ingest:dev",children:(0,o.jsx)(t.code,{children:"ghcr.io/estuary/source-http-ingest:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:"This connector is distinct from all other capture connectors in that it's not designed to pull data from a specific\nsystem or endpoint. It requires no endpoint-specific configuration, and can accept any and all valid JSON objects from any source."}),"\n",(0,o.jsx)(t.p,{children:"This is useful primarily if you want to test out Flow or see how your webhook data will come over."}),"\n",(0,o.jsx)(t.p,{children:"To begin, use the web app to create a capture. Once published, the confirmation dialog displays\na unique URL for your public endpoint."}),"\n",(0,o.jsx)(t.p,{children:"You're now ready to send data to Flow."}),"\n",(0,o.jsx)(t.h3,{id:"send-sample-data-to-flow",children:"Send sample data to Flow"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"After publishing the capture, click the endpoint link from the confirmation dialog to open the Swagger UI page for your capture."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Expand ",(0,o.jsx)(t.strong,{children:"POST"})," or ",(0,o.jsx)(t.strong,{children:"PUT"})," and click ",(0,o.jsx)(t.strong,{children:"Try it out"})," to send some example JSON documents using the UI. You can also copy the provided ",(0,o.jsx)(t.code,{children:"curl"})," commands to send data via the command line."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["After sending data, go to the Collections page of the Flow web app and find the collection associated with your capture.\nClick ",(0,o.jsx)(t.strong,{children:"Details"})," to view the data preview."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"configure-a-datadog-webhook",children:"Configure a Datadog webhook"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"In the Datadog Cloud Monitoring Platform, navigate to the Integrations tab and click on the Integrations option in the dropdown."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Using the search bar, search for the Webhook Integration and install it."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Within the Webhook Integration configuration, select new Webhook and enter in the following information:"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Value"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Name"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"your-webhook"})}),(0,o.jsx)(t.td,{children:"The name of your webhook within Datadog"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"URL"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"https://your-unique-webhook-url/webhook-data"})}),(0,o.jsx)(t.td,{children:"The unique Estuary URL created for ingesting webhook data"})]})]})]}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"In the Datadog Cloud Monitoring Platform, navigate to Monitors/New Monitor and select Metric for the type."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Define the alert conditions and under ",(0,o.jsx)(t.code,{children:"Notify your team"})," select ",(0,o.jsx)(t.code,{children:"@your-webhook"})," from the dropdown."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"webhook-urls",children:"Webhook URLs"}),"\n",(0,o.jsxs)(t.p,{children:["To determine the full URL, start with the base URL from the Flow web app (for example ",(0,o.jsx)(t.code,{children:"https://abc123-8080.us-central1.v1.estuary-data.dev"}),"), and then append the path."]}),"\n",(0,o.jsxs)(t.p,{children:["The path will be whatever is in the ",(0,o.jsx)(t.code,{children:"paths"})," endpoint configuration field (",(0,o.jsx)(t.code,{children:"/webhook-data"})," by default). For example, your full webhook URL would be ",(0,o.jsx)(t.code,{children:"https://<your-unique-hostname>/webhook-data"}),". You can add additional paths to ",(0,o.jsx)(t.code,{children:"paths"}),', and the connector will accept webhook requests on each of them. Each path will correspond to a separate binding. If you\'re editing the capture via the UI, click the "re-fresh" button after editing the URL paths in the endpoint config to see the resulting collections in the bindings editor. For example, if you set the path to ',(0,o.jsx)(t.code,{children:"/my-webhook.json"}),", then the full URL for that binding would be ",(0,o.jsx)(t.code,{children:"https://<your-unique-hostname>/my-webhook.json"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Any URL query parameters that are sent on the request will be captured and serialized under ",(0,o.jsx)(t.code,{children:"/_meta/query/*"})," the in documents. For example, a webhook request that's sent to ",(0,o.jsx)(t.code,{children:"/webhook-data?testKey=testValue"})," would result in a document like:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n  "_meta": {\n    "webhookId": "...",\n    "query": {\n      "testKey": "testValue"\n    },\n    ...\n  }\n  ...\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(t.p,{children:["The connector can optionally require each request to present an authentication token as part of an ",(0,o.jsx)(t.code,{children:"Authorization: Bearer "}),' HTTP header. To enable authentication, generate a secret and paste it into the "Require Auth Token" field. We recommend using a password manager to generate these values, but keep in mind that not all systems will be able to send values with certain special characters, so you may want to disable special characters when you generate the secret. If you enable authentication, then each incoming request must have an ',(0,o.jsx)(t.code,{children:"Authorization"})," header with the value of your token. For example, if you use an auth token value of ",(0,o.jsx)(t.code,{children:"mySecretToken"}),", then the header on each request must be ",(0,o.jsx)(t.code,{children:"Authorization: Bearer mySecretToken"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"If you don't enable authentication, then anyone who knows the URL will be able to publish data to your collection."})," We recommend using authentication whenever possible."]}),"\n",(0,o.jsx)(t.h3,{id:"webhook-signature-verification",children:"Webhook signature verification"}),"\n",(0,o.jsxs)(t.p,{children:["This connector does not yet support webhook signature verification. If this is a requirement for your use case, please contact ",(0,o.jsx)(t.a,{href:"mailto://support@estuary.dev",children:(0,o.jsx)(t.code,{children:"support@estuary.dev"})})," and let us know."]}),"\n",(0,o.jsx)(t.h2,{id:"endpoint-configuration",children:"Endpoint Configuration"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Title"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Required/Default"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"****"}),(0,o.jsx)(t.td,{children:"EndpointConfig"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"object"}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"/require_auth_token"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"Optional bearer token to authenticate webhook requests. WARNING: If this is empty or unset, then anyone who knows the URL of the connector will be able to write data to your collections."}),(0,o.jsx)(t.td,{children:"null, string"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"null"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"/paths"})}),(0,o.jsx)(t.td,{children:"URL Paths"}),(0,o.jsx)(t.td,{children:"List of URL paths to accept requests at. Discovery will return a separate collection for each given path. Paths must be provided without any percent encoding, and should not include any query parameters or fragment."}),(0,o.jsx)(t.td,{children:"null, string"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"null"})})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"resource-configuration",children:"Resource configuration"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Title"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Required/Default"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"****"}),(0,o.jsx)(t.td,{children:"ResourceConfig"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"object"}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"/idFromHeader"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"Set the /_meta/webhookId from the given HTTP header in each request. If not set, then a random id will be generated automatically. If set, then each request will be required to have the header, and the header value will be used as the value of `/_meta/webhookId`."}),(0,o.jsx)(t.td,{children:"null, string"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"/path"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"The URL path to use for adding documents to this binding. Defaults to the name of the collection."}),(0,o.jsx)(t.td,{children:"null, string"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"/stream"})}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"The name of the binding, which is used as a merge key when doing Discovers."}),(0,o.jsx)(t.td,{children:"null, string"}),(0,o.jsx)(t.td,{})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);