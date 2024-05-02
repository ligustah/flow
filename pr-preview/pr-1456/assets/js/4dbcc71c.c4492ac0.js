"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3060],{59969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(74848),r=n(28453);const s={},c="MySQL Batch Query Connector",i={id:"reference/Connectors/capture-connectors/MySQL/mysql-batch",title:"MySQL Batch Query Connector",description:"This connector captures data from MySQL into Flow collections by periodically",source:"@site/docs/reference/Connectors/capture-connectors/MySQL/mysql-batch.md",sourceDirName:"reference/Connectors/capture-connectors/MySQL",slug:"/reference/Connectors/capture-connectors/MySQL/mysql-batch",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/MySQL/mysql-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/MySQL/mysql-batch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for MySQL",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/MySQL/google-cloud-sql-mysql"},next:{title:"NetSuite",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/netsuite"}},a={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"mysql-batch-query-connector",children:"MySQL Batch Query Connector"}),"\n",(0,o.jsx)(t.p,{children:"This connector captures data from MySQL into Flow collections by periodically\nexecuting queries and translating the results into JSON documents."}),"\n",(0,o.jsxs)(t.p,{children:["We recommend using our ",(0,o.jsx)(t.a,{href:"http://go.estuary.dev/source-mysql",children:"MySQL CDC Connector"}),"\ninstead where possible. Using CDC provides lower latency data capture, delete and\nupdate events, and usually has a smaller impact on the source database."]}),"\n",(0,o.jsx)(t.p,{children:"However there are some circumstances where this might not be feasible. Perhaps you need\nto capture from a managed MySQL instance which doesn't support logical replication. Or\nperhaps you need to capture the contents of a view or the result of an ad-hoc query.\nThat's the sort of situation this connector is intended for."}),"\n",(0,o.jsxs)(t.p,{children:["The number one caveat you need to be aware of when using this connector is that ",(0,o.jsx)(t.strong,{children:"it will\nperiodically execute its update query over and over"}),". The default polling interval is set\nto 24 hours to minimize the impact of this behavior, but even then it could mean a lot of\nduplicated data being processed depending on the size of your tables."]}),"\n",(0,o.jsxs)(t.p,{children:["If the dataset has a natural cursor which could be used to identify only new or updated\nrows, this should be specified by editing the ",(0,o.jsx)(t.code,{children:"Cursor"})," property of the binding. Common\nexamples of suitable cursors include:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Update timestamps, which are usually the best choice if available since they\ncan be used to identify all changed rows, not just updates."}),"\n",(0,o.jsx)(t.li,{children:"Creation timestamps, which can be used to identify newly added rows in append-only\ndatasets but can't be used to identify updates."}),"\n",(0,o.jsx)(t.li,{children:"Serially increasing IDs can also be used to identify newly added rows."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);