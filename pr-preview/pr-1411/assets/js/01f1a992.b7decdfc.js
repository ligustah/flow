"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6802],{23746:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=s(74848),n=s(28453);const i={sidebar_position:3},c="Harvest",o={id:"reference/Connectors/capture-connectors/harvest",title:"Harvest",description:"This connector captures data from Harvest into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/harvest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/harvest",permalink:"/pr-preview/pr-1411/reference/Connectors/capture-connectors/harvest",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/harvest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for SQL Server",permalink:"/pr-preview/pr-1411/reference/Connectors/capture-connectors/SQLServer/google-cloud-sql-sqlserver"},next:{title:"HTTP File",permalink:"/pr-preview/pr-1411/reference/Connectors/capture-connectors/http-file"}},a={},h=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"harvest",children:"Harvest"}),"\n",(0,r.jsx)(t.p,{children:"This connector captures data from Harvest into Flow collections."}),"\n",(0,r.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(t.a,{href:"https://ghcr.io/estuary/source-harvest:dev",children:(0,r.jsx)(t.code,{children:"ghcr.io/estuary/source-harvest:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(t.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(t.a,{href:"https://docs.airbyte.com/integrations/sources/harvest/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsx)(t.p,{children:"The following data resources are supported through the Harvest APIs:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/clients-api/clients/contacts/",children:"Client Contacts"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/clients-api/clients/clients/",children:"Clients"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/company-api/company/company/",children:"Company"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/",children:"Invoice Messages"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-payments/",children:"Invoice Payments"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/",children:"Invoices"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/",children:"Invoice Item Categories"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/",children:"Estimate Messages"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/",children:"Estimates"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/",children:"Estimate Item Categories"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/",children:"Expenses"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/",children:"Expense Categories"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/",children:"Tasks"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/",children:"Time Entries"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/",children:"Project User Assignments"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/",children:"Project Task Assignments"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/",children:"Projects"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/roles-api/roles/roles/",children:"Roles"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/users-api/users/billable-rates/",children:"User Billable Rates"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/users-api/users/cost-rates/",children:"User Cost Rates"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/users-api/users/project-assignments/",children:"User Project Assignments"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/",children:"Expense Reports"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/reports-api/reports/uninvoiced-report/",children:"Uninvoiced Report"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/reports-api/reports/time-reports/",children:"Time Reports"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/reports-api/reports/project-budget-report/",children:"Project Budget Report"}),"\nBy default, each resource is mapped to a Flow collection through a separate binding."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["To set up the Harvest source connector, you'll need the ",(0,r.jsx)(t.a,{href:"https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/",children:"Harvest Account ID and API key"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(t.a,{href:"/pr-preview/pr-1411/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Harvest source connector."]}),"\n",(0,r.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/account_id"})}),(0,r.jsx)(t.td,{children:"Account ID"}),(0,r.jsx)(t.td,{children:"Harvest account ID. Required for all Harvest requests in pair with Personal Access Token."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/start_date"})}),(0,r.jsx)(t.td,{children:"Start Date"}),(0,r.jsx)(t.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/end_date"})}),(0,r.jsx)(t.td,{children:"End Date"}),(0,r.jsx)(t.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Default"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/stream"})})}),(0,r.jsx)(t.td,{children:"Stream"}),(0,r.jsx)(t.td,{children:"Resource of your Harvest project from which collections are captured."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/syncMode"})})}),(0,r.jsx)(t.td,{children:"Sync Mode"}),(0,r.jsx)(t.td,{children:"Connection method."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-harvest:dev\n        config:\n          account_id: <account id>\n          start_date: 2017-01-25T00:00:00Z\n          end_date: 2020-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: clients\n          syncMode: incremental\n        target: ${PREFIX}/clients\n      {...}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);