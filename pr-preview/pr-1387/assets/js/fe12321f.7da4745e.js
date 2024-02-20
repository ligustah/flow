"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8207],{21985:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var t=i(74848),r=i(28453);const a={description:"Using the minimize and maximize reduction strategies",sidebar_position:4},m="minimize and maximize",s={id:"reference/reduction-strategies/minimize-and-maximize",title:"minimize and maximize",description:"Using the minimize and maximize reduction strategies",source:"@site/docs/reference/reduction-strategies/minimize-and-maximize.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/minimize-and-maximize",permalink:"/pr-preview/pr-1387/reference/reduction-strategies/minimize-and-maximize",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/minimize-and-maximize.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Using the minimize and maximize reduction strategies",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"merge",permalink:"/pr-preview/pr-1387/reference/reduction-strategies/merge"},next:{title:"set",permalink:"/pr-preview/pr-1387/reference/reduction-strategies/set"}},c={},o=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"minimize-and-maximize",children:"minimize and maximize"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minimize"})," and ",(0,t.jsx)(n.code,{children:"maximize"})," reduce by taking the smallest or largest seen value, respectively."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/min-max\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        min: { reduce: { strategy: minimize } }\n        max: { reduce: { strategy: maximize } }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can min/max values":\n    - ingest:\n        collection: example/reductions/min-max\n        documents:\n          - { key: "key", min: 32, max: "abc" }\n          - { key: "key", min: 42, max: "def" }\n    - verify:\n        collection: example/reductions/min-max\n        documents:\n          - { key: "key", min: 32, max: "def" }\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minimize"})," and ",(0,t.jsx)(n.code,{children:"maximize"})," can also take a ",(0,t.jsx)(n.code,{children:"key"}),", which is one or more JSON pointers that are relative to the reduced location. Keys make it possible to minimize and maximize over complex types by ordering over an extracted composite key."]}),"\n",(0,t.jsx)(n.p,{children:"In the event that a right-hand side document key equals the current left-hand side minimum or maximum, the documents are deeply merged. This can be used to, for example, track not just the minimum value but also the number of times it\u2019s been seen:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/min-max-key\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        min:\n          $anchor: min-max-value\n          type: array\n          items:\n            - type: string\n            - type: number\n              reduce: { strategy: sum }\n          reduce:\n            strategy: minimize\n            key: [/0]\n        max:\n          $ref: "#min-max-value"\n          reduce:\n            strategy: maximize\n            key: [/0]\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can min/max values using a key extractor":\n    - ingest:\n        collection: example/reductions/min-max-key\n        documents:\n          - { key: "key", min: ["a", 1], max: ["a", 1] }\n          - { key: "key", min: ["c", 2], max: ["c", 2] }\n          - { key: "key", min: ["b", 3], max: ["b", 3] }\n          - { key: "key", min: ["a", 4], max: ["a", 4] }\n    - verify:\n        collection: example/reductions/min-max-key\n        documents:\n          # Min of equal keys ["a", 1] and ["a", 4] => ["a", 5].\n          - { key: "key", min: ["a", 5], max: ["c", 2] }\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>m,x:()=>s});var t=i(96540);const r={},a=t.createContext(r);function m(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:m(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);