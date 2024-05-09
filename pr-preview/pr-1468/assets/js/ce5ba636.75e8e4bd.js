"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8904],{87424:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=r(74848),s=r(28453);const c={},i="Intercom",o={id:"reference/Connectors/capture-connectors/intercom",title:"Intercom",description:"This connector captures data from Intercom into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/intercom.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/intercom",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/intercom",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/intercom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Instagram",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/instagram"},next:{title:"Intercom HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/intercom-ingest"}},a={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"intercom",children:"Intercom"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from Intercom into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-intercom:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-intercom:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/intercom/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(n.p,{children:"The following data resources are supported through the Intercom API:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-admins",children:"Admins"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-companies",children:"Companies"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-data-attributes",children:"Company attributes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-attached-segments-1",children:"Company segments"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-contacts",children:"Contacts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-data-attributes",children:"Contact attributes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-conversations",children:"Conversations"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/retrieve-a-conversation",children:"Conversation parts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-segments",children:"Segments"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-tags-for-an-app",children:"Tags"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.intercom.com/intercom-api-reference/reference/list-teams",children:"Teams"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to authenticate with Intercom:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Flow web app, you sign in directly. You'll need the username and password associated with ",(0,t.jsx)(n.a,{href:"https://www.intercom.com/help/en/articles/280-how-do-i-add-remove-or-delete-a-teammate",children:"a user with full permissions"})," on your Intercom workspace."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Using the flowctl CLI, you configure authentication manually. You'll need the ",(0,t.jsx)(n.a,{href:"https://developers.intercom.com/building-apps/docs/authentication-types#section-how-to-get-your-access-token",children:"access token"})," for you Intercom account."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1468/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Intercom source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsx)(n.p,{children:"The properties in the table below reflect manual authentication using the CLI. In the Flow web app,\nyou'll sign in directly and won't need the access token."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/access_token"})})}),(0,t.jsx)(n.td,{children:"Access token"}),(0,t.jsx)(n.td,{children:"Access token for making authenticated requests."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/start_date"})})}),(0,t.jsx)(n.td,{children:"Start date"}),(0,t.jsx)(n.td,{children:"UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource from Intercom from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.p,{children:"The sample below reflects manual authentication in the CLI."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-intercom:dev\n        config:\n            access_token: <secret>\n            start_date: 2022-06-18T00:00:00Z\n    bindings:\n      - resource:\n          stream: admins\n          syncMode: full_refresh\n        target: ${PREFIX}/admins\n      - resource:\n          stream: companies\n          syncMode: incremental\n        target: ${PREFIX}/companies\n      - resource:\n          stream: company_segments\n          syncMode: incremental\n        target: ${PREFIX}/companysegments\n      - resource:\n          stream: conversations\n          syncMode: incremental\n        target: ${PREFIX}/conversations\n      - resource:\n          stream: conversation_parts\n          syncMode: incremental\n        target: ${PREFIX}/conversationparts\n      - resource:\n          stream: contacts\n          syncMode: incremental\n        target: ${PREFIX}/contacts\n      - resource:\n          stream: company_attributes\n          syncMode: full_refresh\n        target: ${PREFIX}/companyattributes\n      - resource:\n          stream: contact_attributes\n          syncMode: full_refresh\n        target: ${PREFIX}/contactattributes\n      - resource:\n          stream: segments\n          syncMode: incremental\n        target: ${PREFIX}/segments\n      - resource:\n          stream: tags\n          syncMode: full_refresh\n        target: ${PREFIX}/tags\n      - resource:\n          stream: teams\n          syncMode: full_refresh\n        target: ${PREFIX}/teams\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);