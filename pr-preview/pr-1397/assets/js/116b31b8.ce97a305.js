"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7843],{57693:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(74848),s=r(28453);const i={sidebar_position:5},c="Paypal Transaction",o={id:"reference/Connectors/capture-connectors/paypal-transaction",title:"Paypal Transaction",description:"This connector captures data from Paypal Transaction into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/paypal-transaction.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/paypal-transaction",permalink:"/pr-preview/pr-1397/reference/Connectors/capture-connectors/paypal-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/paypal-transaction.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Notion",permalink:"/pr-preview/pr-1397/reference/Connectors/capture-connectors/notion"},next:{title:"PostgreSQL",permalink:"/pr-preview/pr-1397/reference/Connectors/capture-connectors/PostgreSQL/"}},a={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"paypal-transaction",children:"Paypal Transaction"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from Paypal Transaction into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-paypal-transaction:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-paypal-transaction:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,t.jsxs)(n.p,{children:["You can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/paypal-transaction/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(n.p,{children:"The following data resources are supported through the Paypal APIs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.paypal.com/docs/api/transaction-search/v1/#transactions",children:"Transactions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.paypal.com/docs/api/transaction-search/v1/#balances",children:"Balances"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://developer.paypal.com/docs/api/transaction-search/v1/",children:"Paypal Transaction API"})," is used to get the history of transactions for a PayPal account."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1397/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Paypal Transaction source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/client_id"})}),(0,t.jsx)(n.td,{children:"Client ID"}),(0,t.jsx)(n.td,{children:"The Client ID of your Paypal developer application."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/client_secret"})}),(0,t.jsx)(n.td,{children:"Client Secret"}),(0,t.jsx)(n.td,{children:"The Client Secret of your Paypal developer application."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/is_sandbox"})}),(0,t.jsx)(n.td,{children:"Sandbox"}),(0,t.jsx)(n.td,{children:"Checkbox to indicate whether it is a sandbox environment or not"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/refresh_token"})}),(0,t.jsx)(n.td,{children:"Refresh token"}),(0,t.jsx)(n.td,{children:"The key to refresh the expired access token."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/start_date"})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource of your Paypal Transaction project from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-paypal-transaction:dev\n        config:\n          client_id: <secret>\n          client_secret: <secret>\n          is_sandbox: false\n          refresh_token: <secret>\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: transactions\n          syncMode: full_refresh\n        target: ${PREFIX}/transactions\n      {...}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);