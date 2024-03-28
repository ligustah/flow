"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9856],{32441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453);const i={sidebar_position:3},s="Intercom HTTP Ingest (Webhook)",c={id:"reference/Connectors/capture-connectors/intercom-ingest",title:"Intercom HTTP Ingest (Webhook)",description:"The Intercom HTTP Ingest connector allows you to capture data from incoming HTTP requests from Intercom.",source:"@site/docs/reference/Connectors/capture-connectors/intercom-ingest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/intercom-ingest",permalink:"/pr-preview/pr-1427/reference/Connectors/capture-connectors/intercom-ingest",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/intercom-ingest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instagram",permalink:"/pr-preview/pr-1427/reference/Connectors/capture-connectors/instagram"},next:{title:"Intercom",permalink:"/pr-preview/pr-1427/reference/Connectors/capture-connectors/intercom"}},a={},d=[{value:"Usage",id:"usage",level:2},{value:"Send sample data to Flow",id:"send-sample-data-to-flow",level:3},{value:"Configure a Intercom webhook",id:"configure-a-intercom-webhook",level:3},{value:"URL Paths",id:"url-paths",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Webhook signature verification",id:"webhook-signature-verification",level:3},{value:"Endpoint Configuration",id:"endpoint-configuration",level:2},{value:"Resource configuration",id:"resource-configuration",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"intercom-http-ingest-webhook",children:"Intercom HTTP Ingest (Webhook)"}),"\n",(0,o.jsxs)(n.p,{children:["The Intercom HTTP Ingest connector allows you to capture data from ",(0,o.jsx)(n.em,{children:"incoming"})," HTTP requests from Intercom.\nA common use case is to capture webhook deliveries, turning them into a Flow collection."]}),"\n",(0,o.jsxs)(n.p,{children:["The connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,o.jsx)(n.a,{href:"https://ghcr.io/estuary/source-http-ingest:dev",children:(0,o.jsx)(n.code,{children:"ghcr.io/estuary/source-http-ingest:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"This connector is distinct from all other capture connectors in that it's not designed to pull data from a specific\nsystem or endpoint. It requires no endpoint-specific configuration, and can accept any and all valid JSON objects from any source."}),"\n",(0,o.jsx)(n.p,{children:"This is useful primarily if you want to test out Flow or see how your webhook data will come over."}),"\n",(0,o.jsx)(n.p,{children:"To begin, use the web app to create a capture. Once published, the confirmation dialog displays\na unique URL for your public endpoint."}),"\n",(0,o.jsx)(n.p,{children:"You're now ready to send data to Flow."}),"\n",(0,o.jsx)(n.h3,{id:"send-sample-data-to-flow",children:"Send sample data to Flow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"After publishing the capture, click the endpoint link from the confirmation dialog to open the Swagger UI page for your capture."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Expand ",(0,o.jsx)(n.strong,{children:"POST"})," or ",(0,o.jsx)(n.strong,{children:"PUT"})," and click ",(0,o.jsx)(n.strong,{children:"Try it out"})," to send some example JSON documents using the UI. You can also copy the provided ",(0,o.jsx)(n.code,{children:"curl"})," commands to send data via the command line."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["After sending data, go to the Collections page of the Flow web app and find the collection associated with your capture.\nClick ",(0,o.jsx)(n.strong,{children:"Details"})," to view the data preview."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-a-intercom-webhook",children:"Configure a Intercom webhook"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to your App in your Developer Hub and select the ",(0,o.jsx)(n.code,{children:"Webhooks"})," from the configuration options"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under ",(0,o.jsx)(n.code,{children:"Endpoint URL"})," enter in the unique URL generated for your Estuary Webhook endpoint in the format ",(0,o.jsx)(n.code,{children:"https://<your-webhook-url>/<your-tenant>/webhook-data"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Configure the ",(0,o.jsx)(n.code,{children:"Topics"})," section to trigger on your preferred webhook events and click save. Optionally, you can select ",(0,o.jsx)(n.code,{children:"Send a test request"})," to preview how the data would be ingested into Estuary."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you entered ",(0,o.jsx)(n.code,{children:"acmeCo/foo"})," for the capture name, then\nyour collection name would default to ",(0,o.jsx)(n.code,{children:"acmeCo/foo/webhook-data"}),", and your full webhook URL would be ",(0,o.jsx)(n.code,{children:"https://<your-unique-hostname>/acmeCo/foo/webhook-data"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"url-paths",children:"URL Paths"}),"\n",(0,o.jsxs)(n.p,{children:["You can customize the URL path for each binding by setting the ",(0,o.jsx)(n.code,{children:"path"})," option in the ",(0,o.jsx)(n.a,{href:"#resource-configuration",children:"resource configuration"})," when creating the capture. For example, if you set the path to ",(0,o.jsx)(n.code,{children:"my-webhook.json"}),",\nthen the full URL for that collection would be ",(0,o.jsx)(n.code,{children:"https://<your-unique-hostname>/my-webhook.json"}),". You can even create multiple bindings to the same collection\nin order to serve webhooks from different URLs."]}),"\n",(0,o.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["The connector can optionally require each request to present an authentication token as part of an ",(0,o.jsx)(n.code,{children:"Authorization: Bearer "}),' HTTP header. To enable authentication, generate a secret and paste it into the "Require Auth Token" field. We recommend using a password manager to generate these values, but keep in mind that not all systems will be able to send values with certain special characters, so you may want to disable special characters when you generate the secret. If you enable authentication, then each incoming request must have an ',(0,o.jsx)(n.code,{children:"Authorization"})," header with the value of your token. For example, if you use an auth token value of ",(0,o.jsx)(n.code,{children:"mySecretToken"}),", then the header on each request must be ",(0,o.jsx)(n.code,{children:"Authorization: Bearer mySecretToken"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"If you don't enable authentication, then anyone who knows the URL will be able to publish data to your collection."})," We recommend using authentication whenever possible."]}),"\n",(0,o.jsx)(n.h3,{id:"webhook-signature-verification",children:"Webhook signature verification"}),"\n",(0,o.jsxs)(n.p,{children:["This connector does not yet support webhook signature verification. If this is a requirement for your use case, please contact ",(0,o.jsx)(n.a,{href:"mailto://support@estuary.dev",children:(0,o.jsx)(n.code,{children:"support@estuary.dev"})})," and let us know."]}),"\n",(0,o.jsx)(n.h2,{id:"endpoint-configuration",children:"Endpoint Configuration"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Title"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required/Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"****"}),(0,o.jsx)(n.td,{children:"EndpointConfig"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/require_auth_token"})}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"Optional bearer token to authenticate webhook requests. WARNING: If this is empty or unset, then anyone who knows the URL of the connector will be able to write data to your collections."}),(0,o.jsx)(n.td,{children:"null, string"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"null"})})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"resource-configuration",children:"Resource configuration"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Title"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required/Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"****"}),(0,o.jsx)(n.td,{children:"ResourceConfig"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/idFromHeader"})}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"Set the /_meta/webhookId from the given HTTP header in each request. If not set, then a random id will be generated automatically. If set, then each request will be required to have the header, and the header value will be used as the value of `/_meta/webhookId`."}),(0,o.jsx)(n.td,{children:"null, string"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/path"})}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"The URL path to use for adding documents to this binding. Defaults to the name of the collection."}),(0,o.jsx)(n.td,{children:"null, string"}),(0,o.jsx)(n.td,{})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);