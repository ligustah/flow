"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4882],{1124:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(74848),s=n(28453);const i={description:"Using the merge reduction strategy",sidebar_position:3},a="merge",o={id:"reference/reduction-strategies/merge",title:"merge",description:"Using the merge reduction strategy",source:"@site/docs/reference/reduction-strategies/merge.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/merge",permalink:"/pr-preview/pr-1452/reference/reduction-strategies/merge",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/merge.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Using the merge reduction strategy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"firstWriteWins and lastWriteWins",permalink:"/pr-preview/pr-1452/reference/reduction-strategies/firstwritewins-and-lastwritewins"},next:{title:"minimize and maximize",permalink:"/pr-preview/pr-1452/reference/reduction-strategies/minimize-and-maximize"}},c={},d=[];function m(e){const r={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"merge",children:"merge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"merge"})," reduces the left-hand side and right-hand side by recursively reducing shared document locations. The LHS and RHS must either both be objects, or both be arrays."]}),"\n",(0,t.jsxs)(r.p,{children:["If both sides are objects, ",(0,t.jsx)(r.code,{children:"merge"})," performs a deep merge of each property. If LHS and RHS are both arrays, items at each index of both sides are merged together, extending the shorter of the two sides by taking items off the longer:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/merge\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Merge only works with types "array" or "object".\n          # Others will throw an error at build time.\n          type: [array, object]\n          reduce: { strategy: merge }\n          # Deeply merge sub-locations (items or properties) by summing them.\n          items:\n            type: number\n            reduce: { strategy: sum }\n          additionalProperties:\n            type: number\n            reduce: { strategy: sum }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can merge arrays by index":\n    - ingest:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: [1, 1] }\n          - { key: "key", value: [2, 2, 2] }\n    - verify:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: [3, 3, 2] }\n\n  "Expect we can merge objects by property":\n    - ingest:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: { "a": 1, "b": 1 } }\n          - { key: "key", value: { "a": 1, "c": 1 } }\n    - verify:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: { "a": 2, "b": 1, "c": 1 } }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Merge may also take a ",(0,t.jsx)(r.code,{children:"key"}),", which is one or more JSON pointers that are relative to the reduced location. If both sides are arrays and a merge key is present, then a deep sorted merge of the respective items is done, as ordered by the key. Arrays must be pre-sorted and de-duplicated by the key, and ",(0,t.jsx)(r.code,{children:"merge"})," itself always maintains this invariant."]}),"\n",(0,t.jsx)(r.p,{children:"Note that you can use a key of [\u201c\u201d] for natural item ordering, such as merging sorted arrays of scalars."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/merge-key\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          type: array\n          reduce:\n            strategy: merge\n            key: [/k]\n          items: { reduce: { strategy: firstWriteWins } }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can merge sorted arrays":\n    - ingest:\n        collection: example/reductions/merge-key\n        documents:\n          - { key: "key", value: [{ k: "a", v: 1 }, { k: "b", v: 1 }] }\n          - { key: "key", value: [{ k: "a", v: 2 }, { k: "c", v: 2 }] }\n    - verify:\n        collection: example/reductions/merge-key\n        documents:\n          - {\n              key: "key",\n              value: [{ k: "a", v: 1 }, { k: "b", v: 1 }, { k: "c", v: 2 }],\n            }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["As with ",(0,t.jsx)(r.code,{children:"append"}),", the LHS of ",(0,t.jsx)(r.code,{children:"merge"})," ",(0,t.jsx)(r.em,{children:"may"})," be null, in which case the reduction is treated as a no-op and its result remains null."]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(96540);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);