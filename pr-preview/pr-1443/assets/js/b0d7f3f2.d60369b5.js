"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3355],{49334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(74848),r=t(28453);const c={},i="Zendesk Chat",o={id:"reference/Connectors/capture-connectors/zendesk-chat",title:"Zendesk Chat",description:"This connector captures data from Zendesk into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/zendesk-chat.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/zendesk-chat",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/zendesk-chat",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/zendesk-chat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"YouTube Analytics",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/youtube-analytics"},next:{title:"Zendesk Support",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/zendesk-support"}},d={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"zendesk-chat",children:"Zendesk Chat"}),"\n",(0,s.jsx)(n.p,{children:"This connector captures data from Zendesk into Flow collections."}),"\n",(0,s.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/source-zendesk-chat:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/source-zendesk-chat:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,s.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/zendesk-chat/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsx)(n.p,{children:"The following data resources are supported through the Zendesk API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/accounts#show-account",children:"Accounts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/agents#list-agents",children:"Agents"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/incremental_export#incremental-agent-timeline-export",children:"Agent Timelines"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/chats#list-chats",children:"Chats"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/shortcuts#list-shortcuts",children:"Shortcuts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/triggers#list-triggers",children:"Triggers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/bans#list-bans",children:"Bans"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/departments#list-departments",children:"Departments"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/goals#list-goals",children:"Goals"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/skills#list-skills",children:"Skills"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/roles#list-roles",children:"Roles"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/routing_settings#show-account-routing-settings",children:"Routing Settings"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A Zendesk Account with permission to access data from accounts you want to sync."}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.a,{href:"https://developer.zendesk.com/rest_api/docs/chat/auth",children:"Access Token"}),". We recommend creating a restricted, read-only key specifically for Estuary access to allow you to control which resources Estuary should be able to access."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification files.\nSee ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1443/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Zendesk Chat source connector."]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/start_date"})})}),(0,s.jsx)(n.td,{children:"Start Date"}),(0,s.jsx)(n.td,{children:"The date from which you would like to replicate data for Zendesk Support API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/subdomain"})})}),(0,s.jsx)(n.td,{children:"Subdomain"}),(0,s.jsx)(n.td,{children:"This is your Zendesk subdomain that can be found in your account URL."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/stream"})})}),(0,s.jsx)(n.td,{children:"Stream"}),(0,s.jsx)(n.td,{children:"Resource in Zendesk from which collections are captured."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/syncMode"})})}),(0,s.jsx)(n.td,{children:"Sync Mode"}),(0,s.jsx)(n.td,{children:"Connection method."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-zendesk-chat:dev\n        config:\n            credentials:\n              access_token: <secret>\n              credentials: access_token\n            start_date: 2022-03-01T00:00:00Z\n            subdomain: my_subdomain\n    bindings:\n      - resource:\n          stream: accounts\n          syncMode: full_refresh\n        target: ${PREFIX}/accounts\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);