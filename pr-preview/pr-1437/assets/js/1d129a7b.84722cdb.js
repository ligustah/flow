"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3380],{68463:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=t(74848),r=t(28453);const n={sidebar_position:8},a="Storage mappings",i={id:"concepts/storage-mappings",title:"Storage mappings",description:"Flow stores the documents that comprise your collections in a cloud storage bucket.",source:"@site/docs/concepts/storage-mappings.md",sourceDirName:"concepts",slug:"/concepts/storage-mappings",permalink:"/pr-preview/pr-1437/concepts/storage-mappings",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/storage-mappings.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Schemas",permalink:"/pr-preview/pr-1437/concepts/schemas"},next:{title:"Tests",permalink:"/pr-preview/pr-1437/concepts/tests"}},c={},l=[{value:"Recovery logs",id:"recovery-logs",level:2}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"storage-mappings",children:"Storage mappings"}),"\n",(0,s.jsxs)(o.p,{children:["Flow stores the documents that comprise your collections in a cloud storage bucket.\nYour ",(0,s.jsx)(o.strong,{children:"storage mapping"})," tells Flow which bucket to use."]}),"\n",(0,s.jsx)(o.p,{children:"When you first register for Flow, your storage mapping is Estuary's secure Google Cloud Storage bucket.\nData in Flow's cloud storage bucket is deleted 30 days after collection."}),"\n",(0,s.jsxs)(o.p,{children:["For production workflows, you should ",(0,s.jsx)(o.a,{href:"/pr-preview/pr-1437/getting-started/installation#configuring-your-cloud-storage-bucket-for-use-with-flow",children:"set up your own cloud storage bucket as a storage mapping"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["You may also use apply different storage mappings to different ",(0,s.jsx)(o.a,{href:"/pr-preview/pr-1437/concepts/catalogs#namespace",children:"catalog prefixes"})," within your organization's prefix."]}),"\n",(0,s.jsx)(o.p,{children:"You can set up a bucket lifecycle policy to manage data retention in your storage mapping;\nfor example, to remove data after six months."}),"\n",(0,s.jsx)(o.h2,{id:"recovery-logs",children:"Recovery logs"}),"\n",(0,s.jsxs)(o.p,{children:["In addition to collection data, Flow uses your storage mapping to temporarily store ",(0,s.jsx)(o.strong,{children:"recovery logs"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Flow tasks \u2014 captures, derivations, and materializations \u2014 use recovery logs to durably store their processing context as a backup.\nRecovery logs are an opaque binary log, but may contain user data."}),"\n",(0,s.jsxs)(o.p,{children:["The recovery logs of a task are always prefixed by ",(0,s.jsx)(o.code,{children:"recovery/"}),",\nso a task named ",(0,s.jsx)(o.code,{children:"acmeCo/produce-TNT"})," would have a recovery log called ",(0,s.jsx)(o.code,{children:"recovery/acmeCo/roduce-TNT"})]}),"\n",(0,s.jsx)(o.p,{children:"Flow prunes data from recovery logs once it is no longer required."}),"\n",(0,s.jsx)(o.admonition,{type:"warning",children:(0,s.jsx)(o.p,{children:"Deleting data from recovery logs while it is still in use can\ncause Flow processing tasks to fail permanently."})})]})}function d(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>i});var s=t(96540);const r={},n=s.createContext(r);function a(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);