"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9777],{34241:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(74848),s=n(28453);const i={sidebar_position:1},c="Braze",d={id:"reference/Connectors/capture-connectors/braze",title:"Braze",description:"This connector captures data from Braze into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/braze.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/braze",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/braze",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/braze.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Braintree",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/braintree"},next:{title:"Chargebee",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/chargebee"}},o={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"braze",children:"Braze"}),"\n",(0,t.jsx)(r.p,{children:"This connector captures data from Braze into Flow collections."}),"\n",(0,t.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(r.a,{href:"https://ghcr.io/estuary/source-braze:dev",children:(0,t.jsx)(r.code,{children:"ghcr.io/estuary/source-braze:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(r.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/braze/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(r.p,{children:"The following data resources are supported through the Braze APIs:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#f3b0b3ef-04fb-4a31-8570-e6ad88dacb18",children:"campaigns"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#c07b5ebd-0246-471e-b154-416d63ae28a1",children:"campaigns_analytics"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#e6c150d7-fceb-4b10-91e2-a9ca4d5806d1",children:"canvases"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#0fd61e93-7edf-4d87-a8dc-052420aefb73",children:"canvases_analytics"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#93ecd8a5-305d-4b72-ae33-2d74983255c1",children:"events"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#0bd1ab63-d1a5-4301-8d17-246cf24a178c",children:"events_analytics"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#07756c39-cfa0-40a0-8101-03f8791cec01",children:"kpi_daily_new_users"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#90a64560-65aa-4f71-a8ef-1edf49321986",children:"kpi_daily_active_users"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#59c4d592-3e77-42f8-8ff1-d5d250acbeae",children:"kpi_daily_app_uninstalls"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#9fa7a3bc-4a02-4de2-bc4c-8f111750665e",children:"cards"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#9cdc3b1e-641e-4d62-b9e8-42d04ee9d4d8",children:"cards_analytics"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#1349e6f4-3ce7-4e60-b3e9-951c99c0993f",children:"segments"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/4689407/SVYrsdsG?version=latest#62d9d142-cdec-4aea-a287-c13efea7415e",children:"segments_analytics"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.p,{children:["It is required to have an account on Braze to provide us with ",(0,t.jsx)(r.code,{children:"URL"})," and ",(0,t.jsx)(r.code,{children:"Rest API Key"})," during set up."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"Rest API Key"})," could be found on Braze Dashboard -> Developer Console tab -> API Settings -> Rest API Keys"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"URL"})," could be found on Braze Dashboard -> Manage Settings -> Settings tab -> ",(0,t.jsx)(r.code,{children:"Your App name"})," -> SDK Endpoint"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-1452/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Braze source connector."]}),"\n",(0,t.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/api_key"})}),(0,t.jsx)(r.td,{children:"Braze REST API Key"}),(0,t.jsx)(r.td,{children:"Braze API Key."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/start_date"})}),(0,t.jsx)(r.td,{children:"Start Date"}),(0,t.jsx)(r.td,{children:"Rows after this date will be synced."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/url"})}),(0,t.jsx)(r.td,{children:"URL"}),(0,t.jsx)(r.td,{children:"Braze REST API endpoint."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/stream"})})}),(0,t.jsx)(r.td,{children:"Stream"}),(0,t.jsx)(r.td,{children:"Resource of your Braze project from which collections are captured."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/syncMode"})})}),(0,t.jsx)(r.td,{children:"Sync Mode"}),(0,t.jsx)(r.td,{children:"Connection method."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-braze:dev\n        config:\n          api_key: <key>\n          start_date: 2017-01-25T00:00:00Z\n          url: <url>\n    bindings:\n      - resource:\n          stream: events\n          syncMode: full_refresh\n        target: ${PREFIX}/events\n      {...}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>d});var t=n(96540);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);