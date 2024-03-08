"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2135],{82969:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=n(74848),i=n(28453);const t={},c="SendGrid",d={id:"reference/Connectors/capture-connectors/sendgrid",title:"SendGrid",description:"This connector captures data from SendGrid into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/sendgrid.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/sendgrid",permalink:"/pr-preview/pr-1407/reference/Connectors/capture-connectors/sendgrid",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/sendgrid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recharge",permalink:"/pr-preview/pr-1407/reference/Connectors/capture-connectors/recharge"},next:{title:"Sentry",permalink:"/pr-preview/pr-1407/reference/Connectors/capture-connectors/sentry"}},o={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"sendgrid",children:"SendGrid"}),"\n",(0,s.jsx)(r.p,{children:"This connector captures data from SendGrid into Flow collections."}),"\n",(0,s.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(r.a,{href:"https://ghcr.io/estuary/source-sendgrid:dev",children:(0,s.jsx)(r.code,{children:"ghcr.io/estuary/source-sendgrid:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsxs)(r.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,s.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/sendgrid/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsx)(r.p,{children:"The following data resources are supported through the SendGrid APIs:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/campaigns-api/retrieve-all-campaigns",children:"Campaigns"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/lists/get-all-lists",children:"Lists"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/contacts/export-contacts",children:"Contacts"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/marketing-campaign-stats/get-all-automation-stats",children:"Stats automations"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/segmenting-contacts/get-list-of-segments",children:"Segments"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/marketing-campaign-stats/get-all-single-sends-stats",children:"Single Sends"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/transactional-templates/retrieve-paged-transactional-templates",children:"Templates"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/suppressions-global-suppressions/retrieve-all-global-suppressions",children:"Global suppression"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/suppressions-unsubscribe-groups/retrieve-all-suppression-groups-associated-with-the-user",children:"Suppression groups"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/suppressions-suppressions/retrieve-all-suppressions",children:"Suppression group members"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/blocks-api/retrieve-all-blocks",children:"Blocks"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/bounces-api/retrieve-all-bounces",children:"Bounces"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/invalid-e-mails-api/retrieve-all-invalid-emails",children:"Invalid emails"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/spam-reports-api/retrieve-all-spam-reports",children:"Spam reports"})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["SendGrid ",(0,s.jsx)(r.a,{href:"https://docs.sendgrid.com/api-reference/api-keys/create-api-keys",children:"API Key"})," for authentication."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(r.a,{href:"/pr-preview/pr-1407/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the SendGrid source connector."]}),"\n",(0,s.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/apikey"})}),(0,s.jsx)(r.td,{children:"Sendgrid API key"}),(0,s.jsx)(r.td,{children:"The value of the SendGrid API Key generated."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/start_date"})}),(0,s.jsx)(r.td,{children:"Start Date"}),(0,s.jsx)(r.td,{children:"The date from which you'd like to replicate data for SendGrid API, in the format YYYY-MM-DDT00:00:00Z. Any data before this date will not be replicated."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/stream"})})}),(0,s.jsx)(r.td,{children:"Stream"}),(0,s.jsx)(r.td,{children:"Resource of your SendGrid project from which collections are captured."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/syncMode"})})}),(0,s.jsx)(r.td,{children:"Sync Mode"}),(0,s.jsx)(r.td,{children:"Connection method."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-sendgrid:dev\n        config:\n          apikey: <secret>\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: blocks\n          syncMode: incremental\n        target: ${PREFIX}/blocks\n      {...}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>d});var s=n(96540);const i={},t=s.createContext(i);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);