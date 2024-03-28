"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9515],{3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=n(74848),s=n(28453);const i={description:"Using the sum reduction strategy",sidebar_position:6},o="sum",c={id:"reference/reduction-strategies/sum",title:"sum",description:"Using the sum reduction strategy",source:"@site/docs/reference/reduction-strategies/sum.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/sum",permalink:"/pr-preview/pr-1427/reference/reduction-strategies/sum",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/sum.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Using the sum reduction strategy",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/pr-preview/pr-1427/reference/reduction-strategies/set"},next:{title:"Composing with conditionals",permalink:"/pr-preview/pr-1427/reference/reduction-strategies/composing-with-conditionals"}},u={},a=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"sum",children:"sum"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"sum"})," reduces two numbers or integers by adding their values."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/sum\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sum only works with types "number" or "integer".\n          # Others will throw an error at build time.\n          type: number\n          reduce: { strategy: sum }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can sum two numbers":\n    - ingest:\n        collection: example/reductions/sum\n        documents:\n          - { key: "key", value: 5 }\n          - { key: "key", value: -1.2 }\n    - verify:\n        collection: example/reductions/sum\n        documents:\n          - { key: "key", value: 3.8 }\n'})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);