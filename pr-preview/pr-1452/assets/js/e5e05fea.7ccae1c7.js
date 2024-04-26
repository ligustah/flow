"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1557],{7966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(74848),r=n(28453);const s={},c="PostgreSQL Batch Query Connector",a={id:"reference/Connectors/capture-connectors/PostgreSQL/postgres-batch",title:"PostgreSQL Batch Query Connector",description:"This connector captures data from Postgres into Flow collections by periodically",source:"@site/docs/reference/Connectors/capture-connectors/PostgreSQL/postgres-batch.md",sourceDirName:"reference/Connectors/capture-connectors/PostgreSQL",slug:"/reference/Connectors/capture-connectors/PostgreSQL/postgres-batch",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/PostgreSQL/postgres-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/PostgreSQL/postgres-batch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for PostgreSQL",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/PostgreSQL/google-cloud-sql-postgres"},next:{title:"Salesforce",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/Salesforce/"}},i={},u=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"postgresql-batch-query-connector",children:"PostgreSQL Batch Query Connector"}),"\n",(0,o.jsx)(t.p,{children:"This connector captures data from Postgres into Flow collections by periodically\nexecuting queries and translating the results into JSON documents."}),"\n",(0,o.jsxs)(t.p,{children:["We recommend using our ",(0,o.jsx)(t.a,{href:"http://go.estuary.dev/source-postgres",children:"PostgreSQL CDC Connector"})," instead\nif possible. Using CDC provides lower latency data capture, delete and update events, and usually\nhas a smaller impact on the source database."]}),"\n",(0,o.jsx)(t.p,{children:"However there are some circumstances where this might not be feasible. Perhaps you need\nto capture from a managed PostgreSQL instance which doesn't support logical replication.\nOr perhaps you need to capture the contents of a view or the result of an ad-hoc query.\nThat's the sort of situation this connector is intended for."}),"\n",(0,o.jsxs)(t.p,{children:["The number one caveat you need to be aware of when using this connector is that ",(0,o.jsx)(t.strong,{children:"it will\nperiodically execute its update query over and over"}),". At the default polling interval of\n5 minutes, a naive ",(0,o.jsx)(t.code,{children:"SELECT * FROM foo"})," query against a 100 MiB view will produce 30 GiB/day\nof ingested data, most of it duplicated."]}),"\n",(0,o.jsxs)(t.p,{children:["This is why the connector's autodiscovery logic only returns ordinary tables of data, because\nin that particular case we can use the ",(0,o.jsx)(t.code,{children:"xmin"})," system column as a cursor and ask the database\nto ",(0,o.jsx)(t.code,{children:"SELECT xmin, * FROM foo WHERE xmin::text::bigint > $1;"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:['If you start editing these queries or manually adding capture bindings for views or to run\nad-hoc queries, you need to either have some way of restricting the query to "just the new\nrows since last time" or else have your polling interval set high enough that the data rate\n',(0,o.jsx)(t.code,{children:"<DatasetSize> / <PollingInterval>"})," is an amount of data you're willing to deal with."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);