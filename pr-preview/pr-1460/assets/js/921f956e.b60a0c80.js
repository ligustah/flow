"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9922],{74564:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(74848),r=t(28453);const i={},o="Hubspot",c={id:"reference/Connectors/capture-connectors/hubspot",title:"Hubspot",description:"This connector captures data from a Hubspot account.",source:"@site/docs/reference/Connectors/capture-connectors/hubspot.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/hubspot",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/hubspot",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/hubspot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/http-ingest"},next:{title:"HubSpot ( Real-Time )",permalink:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/hubspot-real-time"}},d={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Hubspot in the Flow web app",id:"using-oauth2-to-authenticate-with-hubspot-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Setup",id:"setup",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"hubspot",children:"Hubspot"}),"\n",(0,n.jsx)(s.p,{children:"This connector captures data from a Hubspot account."}),"\n",(0,n.jsxs)(s.p,{children:["Estuary offers a in-house real time version of this connector. For more information take a look at our ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1460/reference/Connectors/capture-connectors/hubspot-real-time",children:"HubSpot Real-Time"})," docs."]}),"\n",(0,n.jsxs)(s.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(s.a,{href:"https://ghcr.io/estuary/source-hubspot:dev",children:(0,n.jsx)(s.code,{children:"ghcr.io/estuary/source-hubspot:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsxs)(s.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.jsx)(s.a,{href:"https://docs.airbyte.com/integrations/sources/hubspot",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,n.jsx)(s.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,n.jsx)(s.p,{children:"By default, each resource associated with your Hubspot account is mapped to a Flow collection through a separate binding."}),"\n",(0,n.jsx)(s.p,{children:"The following data resources are supported for all subscription levels:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/methods/email/get_campaign_data",children:"Campaigns"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/companies",children:"Companies"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"http://developers.hubspot.com/docs/methods/lists/get_lists",children:"Contact Lists"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/methods/contacts/get_contacts",children:"Contacts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts",children:"Contacts List Memberships"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/methods/pipelines/get_pipelines_for_object_type",children:"Deal Pipelines"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/deals",children:"Deals"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/methods/email/get_events",children:"Email Events"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://legacydocs.hubspot.com/docs/methods/engagements/get-all-engagements",children:"Engagements"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/calls",children:"Engagements Calls"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/email",children:"Engagements Emails"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/meetings",children:"Engagements Meetings"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/notes",children:"Engagements Notes"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/tasks",children:"Engagements Tasks"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/marketing/forms",children:"Forms"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://legacydocs.hubspot.com/docs/methods/forms/get-submissions-for-a-form",children:"Form Submissions"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/line-items",children:"Line Items"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/methods/owners/get_owners",children:"Owners"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/products",children:"Products"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts",children:"Property History"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/quotes",children:"Quotes"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/methods/email/get_subscriptions_timeline",children:"Subscription Changes"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/tickets",children:"Tickets"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/pipelines",children:"Ticket Pipelines"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The following data resources are supported for pro accounts (set ",(0,n.jsx)(s.strong,{children:"Subscription type"})," to ",(0,n.jsx)(s.code,{children:"pro"})," in the ",(0,n.jsx)(s.a,{href:"#endpoint",children:"configuration"}),"):"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/crm/feedback-submissions",children:"Feedback Submissions"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://legacydocs.hubspot.com/docs/methods/cms_email/get-all-marketing-email-statistics",children:"Marketing Emails"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://legacydocs.hubspot.com/docs/methods/workflows/v3/get_workflows",children:"Workflows"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.p,{children:"There are two ways to authenticate with Hubspot when capturing data: using OAuth2 or with a private app access token.\nTheir prerequisites differ."}),"\n",(0,n.jsx)(s.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe access token method is the only supported method using the command line."}),"\n",(0,n.jsx)(s.h3,{id:"using-oauth2-to-authenticate-with-hubspot-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Hubspot in the Flow web app"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"A Hubspot account"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"configuring-the-connector-specification-manually",children:"Configuring the connector specification manually"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"A Hubspot account"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The access token for an appropriately configured ",(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/private-apps",children:"private app"})," on the Hubspot account."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(s.p,{children:"To create a private app in Hubspot and generate its access token, do the following."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Ensure that your Hubspot user account has ",(0,n.jsx)(s.a,{href:"https://knowledge.hubspot.com/settings/hubspot-user-permissions-guide#super-admin",children:"super admin"})," privileges."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["In Hubspot, create a ",(0,n.jsx)(s.a,{href:"https://developers.hubspot.com/docs/api/private-apps#create-a-private-app",children:"new private app"}),"."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:'Name the app "Estuary Flow," or choose another name that is memorable to you.'}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Grant the new app ",(0,n.jsx)(s.strong,{children:"Read"})," access for all available scopes."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Copy the access token for use in the connector configuration."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(s.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-1460/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Hubspot source connector."]}),"\n",(0,n.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsx)(s.p,{children:"The following properties reflect the access token authentication method."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Title"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Required/Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/credentials"})})}),(0,n.jsx)(s.td,{children:"Private Application"}),(0,n.jsx)(s.td,{children:"Authenticate with a private app access token"}),(0,n.jsx)(s.td,{children:"object"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/credentials/access_token"})})}),(0,n.jsx)(s.td,{children:"Access Token"}),(0,n.jsx)(s.td,{children:"HubSpot Access token."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/credentials/credentials_title"})})}),(0,n.jsx)(s.td,{children:"Credentials"}),(0,n.jsx)(s.td,{children:"Name of the credentials set"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsxs)(s.td,{children:["Required, ",(0,n.jsx)(s.code,{children:'"Private App Credentials"'})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/start_date"})})}),(0,n.jsx)(s.td,{children:"Start Date"}),(0,n.jsx)(s.td,{children:"UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/subscription_type"})}),(0,n.jsx)(s.td,{children:"Your HubSpot account subscription type"}),(0,n.jsx)(s.td,{children:"Some streams are only available to certain subscription packages, we use this information to select which streams to pull data from."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"starter"'})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Title"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Required/Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/stream"})})}),(0,n.jsx)(s.td,{children:"Data resource"}),(0,n.jsx)(s.td,{children:"Name of the data resource."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/syncMode"})})}),(0,n.jsx)(s.td,{children:"Sync Mode"}),(0,n.jsx)(s.td,{children:"Connection method"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-hubspot:dev\n          config:\n            credentials:\n              credentials_title: Private App Credentials\n              access_token: <secret>\n      bindings:\n        - resource:\n            stream: companies\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Your configuration will have many more bindings representing all supported ",(0,n.jsx)(s.a,{href:"#supported-data-resources",children:"resources"}),"\nin your Hubspot account."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/pr-preview/pr-1460/concepts/captures#pull-captures",children:"Learn more about capture definitions."})})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var n=t(96540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);