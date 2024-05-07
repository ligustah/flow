"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2340],{21581:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=t(74848),s=t(28453);const n={},a="Iterable",o={id:"reference/Connectors/capture-connectors/iterable",title:"Iterable",description:"This connector captures data from Iterable into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/iterable.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/iterable",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/iterable",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/iterable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intercom HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/intercom-ingest"},next:{title:"Jira",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/jira"}},c={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"iterable",children:"Iterable"}),"\n",(0,i.jsx)(r.p,{children:"This connector captures data from Iterable into Flow collections."}),"\n",(0,i.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.jsx)(r.a,{href:"https://ghcr.io/estuary/source-iterable:dev",children:(0,i.jsx)(r.code,{children:"ghcr.io/estuary/source-iterable:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsx)(r.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,i.jsxs)(r.p,{children:["You can find their documentation ",(0,i.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/iterable/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,i.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,i.jsx)(r.p,{children:"The following data resources are supported through the Iterable APIs:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#campaigns_campaigns",children:"Campaigns"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#campaigns_metrics",children:"Campaign Metrics"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#channels_channels",children:"Channels"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Bounce"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Click"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Complaint"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Open"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Send"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Send Skip"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Subscribe"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Email Unsubscribe"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#events_User_events",children:"Events"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#lists_getLists",children:"Lists"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#lists_getLists_0",children:"List Users"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#messageTypes_messageTypes",children:"Message Types"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#metadata_list_tables",children:"Metadata"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#templates_getTemplates",children:"Templates"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Users"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"PushSend"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"PushSendSkip"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"PushOpen"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"PushUninstall"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"PushBounce"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"WebPushSend"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"WebPushClick"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"WebPushSendSkip"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InAppSend"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InAppOpen"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InAppClick"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InAppClose"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InAppDelete"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InAppDelivery"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InAppSendSkip"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InboxSession"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"InboxMessageImpression"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"SmsSend"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"SmsBounce"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"SmsClick"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"SmsReceived"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"SmsSendSkip"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"SmsUsageInfo"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"Purchase"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"CustomEvent"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://api.iterable.com/api/docs#export_exportDataJson",children:"HostedUnsubscribeClick"})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,i.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["To set up the Iterable source connector, you'll need the Iterable ",(0,i.jsxs)(r.a,{href:"https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-",children:[(0,i.jsx)(r.code,{children:"Server-side"})," API Key with ",(0,i.jsx)(r.code,{children:"standard"})," permissions"]}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,i.jsx)(r.a,{href:"/pr-preview/pr-1460/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Iterable source connector."]}),"\n",(0,i.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Title"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required/Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"/apikey"})}),(0,i.jsx)(r.td,{children:"API Key"}),(0,i.jsx)(r.td,{children:"The value of the Iterable API Key generated."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"/start_date"})}),(0,i.jsx)(r.td,{children:"Start Date"}),(0,i.jsx)(r.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Title"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required/Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"/stream"})})}),(0,i.jsx)(r.td,{children:"Stream"}),(0,i.jsx)(r.td,{children:"Resource of your Iterable project from which collections are captured."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"/syncMode"})})}),(0,i.jsx)(r.td,{children:"Sync Mode"}),(0,i.jsx)(r.td,{children:"Connection method."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-iterable:dev\n        config:\n          apikey: <secret>\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: purchase\n          syncMode: full_refresh\n        target: ${PREFIX}/purchase\n      {...}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var i=t(96540);const s={},n=i.createContext(s);function a(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);