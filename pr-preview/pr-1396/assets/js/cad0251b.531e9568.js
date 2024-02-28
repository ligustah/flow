"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1033],{13956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=t(74848),i=t(28453);const o={description:"Using conditionals statements to fine-tune reductions",sidebar_position:30},r="Composing with conditionals",c={id:"reference/reduction-strategies/composing-with-conditionals",title:"Composing with conditionals",description:"Using conditionals statements to fine-tune reductions",source:"@site/docs/reference/reduction-strategies/composing-with-conditionals.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/composing-with-conditionals",permalink:"/pr-preview/pr-1396/reference/reduction-strategies/composing-with-conditionals",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/composing-with-conditionals.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{description:"Using conditionals statements to fine-tune reductions",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"sum",permalink:"/pr-preview/pr-1396/reference/reduction-strategies/sum"},next:{title:"Working with logs and statistics",permalink:"/pr-preview/pr-1396/reference/working-logs-stats"}},a={},u=[];function d(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"composing-with-conditionals",children:"Composing with conditionals"}),"\n",(0,s.jsxs)(n.p,{children:["Reduction strategies are JSON Schema ",(0,s.jsx)(n.a,{href:"https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.7.7",children:"annotations"}),". As such, their applicability at a given document location can be controlled through the use of ",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/conditionals.html",children:"conditional"})," keywords within the schema, like ",(0,s.jsx)(n.code,{children:"oneOf"})," or ",(0,s.jsx)(n.code,{children:"if/then/else"}),". This means Flow\u2019s built-in strategies can be combined with schema conditionals to construct a wider variety of custom reduction behaviors."]}),"\n",(0,s.jsx)(n.p,{children:"For example, here\u2019s a reset-able counter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/sum-reset\n    schema:\n      type: object\n      properties:\n        key: { type: string }\n        value: { type: number }\n      required: [key]\n      # Use oneOf to express a tagged union over "action".\n      oneOf:\n        # When action = reset, reduce by taking this document.\n        - properties: { action: { const: reset } }\n          reduce: { strategy: lastWriteWins }\n        # When action = sum, reduce by summing "value". Keep the LHS "action",\n        # preserving a LHS "reset", so that resets are properly associative.\n        - properties:\n            action:\n              const: sum\n              reduce: { strategy: firstWriteWins }\n            value: { reduce: { strategy: sum } }\n          reduce: { strategy: merge }\n    key: [/key]\n\ntests:\n  "Expect we can sum or reset numbers":\n    - ingest:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", action: sum, value: 5 }\n          - { key: "key", action: sum, value: -1.2 }\n    - verify:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", value: 3.8 }\n    - ingest:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", action: reset, value: 0 }\n          - { key: "key", action: sum, value: 1.3 }\n    - verify:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", value: 1.3 }\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);