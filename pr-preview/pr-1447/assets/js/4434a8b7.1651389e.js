"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7972],{89178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(74848),i=n(28453);const o={},s="HTTP Webhook",c={id:"reference/Connectors/materialization-connectors/http-webhook",title:"HTTP Webhook",description:"This connector lets you materialize data from Estuary Flow directly to specified HTTP endpoints via webhooks.",source:"@site/docs/reference/Connectors/materialization-connectors/http-webhook.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/http-webhook",permalink:"/pr-preview/pr-1447/reference/Connectors/materialization-connectors/http-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/http-webhook.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databricks",permalink:"/pr-preview/pr-1447/reference/Connectors/materialization-connectors/databricks"},next:{title:"MotherDuck",permalink:"/pr-preview/pr-1447/reference/Connectors/materialization-connectors/motherduck"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Bindings",id:"bindings",level:3},{value:"Sample",id:"sample",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"http-webhook",children:"HTTP Webhook"}),"\n",(0,r.jsx)(t.p,{children:"This connector lets you materialize data from Estuary Flow directly to specified HTTP endpoints via webhooks."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://ghcr.io/estuary/materialize-webhook:v1",children:(0,r.jsx)(t.code,{children:"ghcr.io/estuary/materialize-webhook:v1"})})," provides the latest connector image. For earlier versions, please follow the link in your browser."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To use this materialization connector, you\u2019ll need the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A server or service that can accept HTTP requests at the target endpoint."}),"\n",(0,r.jsx)(t.li,{children:"At least one Flow collection."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["The Webhooks connector is available for use in the Flow web application. To learn more about connectors and setting them up, visit our guide on ",(0,r.jsx)(t.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"using connectors"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/address"})})}),(0,r.jsx)(t.td,{children:"Address"}),(0,r.jsx)(t.td,{children:"The URL of the endpoint to send data to."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/method"})})}),(0,r.jsx)(t.td,{children:"HTTP Method"}),(0,r.jsxs)(t.td,{children:["HTTP method to use (e.g., ",(0,r.jsx)(t.code,{children:"POST"})," or ",(0,r.jsx)(t.code,{children:"PUT"}),")."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["default: ",(0,r.jsx)(t.code,{children:"POST"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/headers"})})}),(0,r.jsx)(t.td,{children:"Headers"}),(0,r.jsx)(t.td,{children:"Additional headers to include in the HTTP request."}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/relativePath"})})}),(0,r.jsx)(t.td,{children:"Relative Path"}),(0,r.jsx)(t.td,{children:"The relative path on the server where data will be sent."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"bindings:\n- source: ProductionData/orders/orderDetails\n  resource:\n    relativePath: webhook/estuary\nendpoint:\n  connector:\n    image: ghcr.io/estuary/materialize-webhook:v1\n    config:\n      address: http://192.168.1.100:3000/\n      method: POST\n      headers:\n        Content-Type: application/json\n        Authorization: Bearer <your_token>\n"})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);