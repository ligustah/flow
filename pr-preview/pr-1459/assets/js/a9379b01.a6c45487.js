"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1851],{32019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const i={sidebar_position:2},o="Configuring task shards",a={id:"reference/Configuring-task-shards",title:"Configuring task shards",description:"For some catalog tasks, it's helpful to control the behavior of shards",source:"@site/docs/reference/Configuring-task-shards.md",sourceDirName:"reference",slug:"/reference/Configuring-task-shards",permalink:"/pr-preview/pr-1459/reference/Configuring-task-shards",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Configuring-task-shards.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Time Travel",permalink:"/pr-preview/pr-1459/reference/time-travel"},next:{title:"Reduction strategies",permalink:"/pr-preview/pr-1459/reference/reduction-strategies/"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"Sample",id:"sample",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"configuring-task-shards",children:"Configuring task shards"}),"\n",(0,r.jsxs)(t.p,{children:["For some catalog tasks, it's helpful to control the behavior of ",(0,r.jsx)(t.a,{href:"/pr-preview/pr-1459/concepts/advanced/shards",children:"shards"}),"\nYou do this by adding the ",(0,r.jsx)(t.code,{children:"shards"})," configuration to the capture or materialization configuration."]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/disable"})}),(0,r.jsx)(t.td,{children:"Disable"}),(0,r.jsx)(t.td,{children:"Disable processing of the task's shards."}),(0,r.jsx)(t.td,{children:"Boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/logLevel"})}),(0,r.jsx)(t.td,{children:"Log level"}),(0,r.jsx)(t.td,{children:'Log levels may currently be "error", "warn", "info", "debug", or "trace". If not set, the effective log level is "info".'}),(0,r.jsx)(t.td,{children:"String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/maxTxnDuration"})}),(0,r.jsx)(t.td,{children:"Maximum transaction duration"}),(0,r.jsx)(t.td,{children:"This duration upper-bounds the amount of time during which a transaction may process documents before it must initiate a commit. Note that it may take some additional time for the commit to complete after it is initiated. The shard may run for less time if there aren't additional ready documents for it to process. If not set, the maximum duration defaults to one second for captures and derivations, and 5 minutes for materializations."}),(0,r.jsx)(t.td,{children:"String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/minTxnDuration"})}),(0,r.jsx)(t.td,{children:"Minimum transaction duration"}),(0,r.jsx)(t.td,{children:"This duration lower-bounds the amount of time during which a transaction must process documents before it must flush and commit. It may run for more time if additional documents are available. The default value is zero seconds."}),(0,r.jsx)(t.td,{children:"String"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"For more information about these controls and when you might need to use them, see:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1459/concepts/advanced/shards#transactions",children:"Transactions"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1459/concepts/advanced/logs-stats#log-level",children:"Log level"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"materializations:\n  acmeCo/snowflake-materialization:\n    endpoint:\n      connector:\n        config:\n          account: acmeCo\n          database: acmeCo_db\n          password: secret\n          cloud_provider: aws\n          region: us-east-1\n          schema: acmeCo_flow_schema\n          user: snowflake_user\n          warehouse: acmeCo_warehouse\n        image: ghcr.io/estuary/materialize-snowflake:dev\n    bindings:\n    - resource:\n        table: anvils\n      source: acmeCo/anvils\n    shards:\n      logLevel: debug\n      minTxnDuration: 30s\n      maxTxnDuration: 4m\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);