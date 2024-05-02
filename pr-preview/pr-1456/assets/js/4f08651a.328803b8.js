"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2912],{43166:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=n(74848),s=n(28453);const c={},i="Recharge",o={id:"reference/Connectors/capture-connectors/recharge",title:"Recharge",description:"This connector captures data from Recharge into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/recharge.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/recharge",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/recharge",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/recharge.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Batch Query Connector",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/PostgreSQL/postgres-batch"},next:{title:"Salesforce",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/Salesforce/"}},h={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"recharge",children:"Recharge"}),"\n",(0,t.jsx)(r.p,{children:"This connector captures data from Recharge into Flow collections."}),"\n",(0,t.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(r.a,{href:"https://ghcr.io/estuary/source-recharge:dev",children:(0,t.jsx)(r.code,{children:"ghcr.io/estuary/source-recharge:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(r.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/recharge/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(r.p,{children:"The following data resources are supported through the Recharge APIs:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-addresses",children:"Addresses"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-charges",children:"Charges"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify",children:"Collections"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-customers",children:"Customers"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-discounts",children:"Discounts"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-metafields",children:"Metafields"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-onetimes",children:"Onetimes"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-orders",children:"Orders"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-products",children:"Products"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#shop",children:"Shop"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.rechargepayments.com/v1-shopify?python#list-subscriptions",children:"Subscriptions"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Recharge Access Token for authentication."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-1456/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Recharge source connector."]}),"\n",(0,t.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/access_token"})}),(0,t.jsx)(r.td,{children:"Access Token"}),(0,t.jsx)(r.td,{children:"The value of the Access Token generated."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/start_date"})}),(0,t.jsx)(r.td,{children:"Start Date"}),(0,t.jsx)(r.td,{children:"The date from which you'd like to replicate data for Recharge API, in the format YYYY-MM-DDT00:00:00Z. Any data before this date will not be replicated."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/stream"})})}),(0,t.jsx)(r.td,{children:"Stream"}),(0,t.jsx)(r.td,{children:"Resource of your Recharge project from which collections are captured."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/syncMode"})})}),(0,t.jsx)(r.td,{children:"Sync Mode"}),(0,t.jsx)(r.td,{children:"Connection method."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-recharge:dev\n        config:\n          access_token: <secret>\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: addresses\n          syncMode: full_refresh\n        target: ${PREFIX}/addresses\n      {...}\n"})})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const s={},c=t.createContext(s);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);