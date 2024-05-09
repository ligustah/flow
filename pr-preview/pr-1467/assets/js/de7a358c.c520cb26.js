"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9789],{96529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>w,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(74848),r=n(28453);const s={description:"Using the firstWriteWins and lastWriteWins reduction strategies",sidebar_position:2},a="firstWriteWins and lastWriteWins",o={id:"reference/reduction-strategies/firstwritewins-and-lastwritewins",title:"firstWriteWins and lastWriteWins",description:"Using the firstWriteWins and lastWriteWins reduction strategies",source:"@site/docs/reference/reduction-strategies/firstwritewins-and-lastwritewins.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/firstwritewins-and-lastwritewins",permalink:"/pr-preview/pr-1467/reference/reduction-strategies/firstwritewins-and-lastwritewins",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/firstwritewins-and-lastwritewins.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Using the firstWriteWins and lastWriteWins reduction strategies",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"append",permalink:"/pr-preview/pr-1467/reference/reduction-strategies/append"},next:{title:"merge",permalink:"/pr-preview/pr-1467/reference/reduction-strategies/merge"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"firstwritewins-and-lastwritewins",children:"firstWriteWins and lastWriteWins"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"firstWriteWins"})," always takes the first value seen at the annotated location. Likewise, ",(0,i.jsx)(t.code,{children:"lastWriteWins"})," always takes the last. Schemas that don\u2019t have an explicit reduce annotation default to ",(0,i.jsx)(t.code,{children:"lastWriteWins"})," behavior."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/fww-lww\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        fww: { reduce: { strategy: firstWriteWins } }\n        lww: { reduce: { strategy: lastWriteWins } }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can track first- and list-written values":\n    - ingest:\n        collection: example/reductions/fww-lww\n        documents:\n          - { key: "key", fww: "one", lww: "one" }\n          - { key: "key", fww: "two", lww: "two" }\n    - verify:\n        collection: example/reductions/fww-lww\n        documents:\n          - { key: "key", fww: "one", lww: "two" }\n'})})]})}function w(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);