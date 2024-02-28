"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1874],{56076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(74848),n=r(28453);const a={},s="Salesforce",c={id:"reference/Connectors/capture-connectors/Salesforce/salesforce",title:"Salesforce",description:"Overview",source:"@site/docs/reference/Connectors/capture-connectors/Salesforce/salesforce.md",sourceDirName:"reference/Connectors/capture-connectors/Salesforce",slug:"/reference/Connectors/capture-connectors/Salesforce/",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/Salesforce/",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/Salesforce/salesforce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Batch Query Connector",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/PostgreSQL/postgres-batch"},next:{title:"Salesforce \u2014 Historical data",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Salesforce Historical Data",id:"salesforce-historical-data",level:2},{value:"Salesforce Real Time Data",id:"salesforce-real-time-data",level:2},{value:"Running Both Connectors in Parallel",id:"running-both-connectors-in-parallel",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"salesforce",children:"Salesforce"}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"The Estuary Salesforce Connector facilitates seamless integration between Salesforce and Estuary's data processing framework. With this connector, users can effortlessly sync data from Salesforce objects into Estuary Flow collections. There are two primary types of connectors available: the Realtime Connector and the Historical Connector."}),"\n",(0,o.jsx)(t.h2,{id:"salesforce-historical-data",children:"Salesforce Historical Data"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data",children:"Historical Data Connector"})," is designed to capture data from Salesforce objects into Flow collections using batch processing methods. This connector is particularly suited for synchronizing historical Salesforce data. By leveraging batch processing capabilities, it efficiently retrieves and syncs large volumes of historical data, ensuring comprehensive integration with Estuary's data processing workflows."]}),"\n",(0,o.jsx)(t.h2,{id:"salesforce-real-time-data",children:"Salesforce Real Time Data"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time",children:"Real-time Connector"})," provides a mechanism to capture data from Salesforce objects into Flow collections in real time. It utilizes the Salesforce PushTopic API, which enables the streaming of data changes from Salesforce to Estuary. Leveraging the real-time capabilities of the PushTopic API, this connector ensures that updates and modifications in Salesforce objects are promptly reflected in the corresponding Estuary Flow collections."]}),"\n",(0,o.jsx)(t.h2,{id:"running-both-connectors-in-parallel",children:"Running Both Connectors in Parallel"}),"\n",(0,o.jsx)(t.p,{children:"To combine the capabilities of both connectors, users can create two separate captures: one using the Historical Connector to capture historical data, and the other using the Realtime Connector to capture real-time updates. Both captures can be configured to point to the same Flow collection, effectively merging historical and real-time data within the same destination."}),"\n",(0,o.jsx)(t.p,{children:"This approach provides a comprehensive solution, allowing users to maintain an up-to-date representation of their Salesforce data while also preserving historical context. By seamlessly integrating historical and real-time data updates, users can leverage the combined power of batch processing and real-time streaming for enhanced data analysis and insights."}),"\n",(0,o.jsxs)(t.p,{children:["For help using both connectors in parallel, ",(0,o.jsx)(t.a,{href:"mailto:info@estuary.dev",children:"contact Estuary's support team"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var o=r(96540);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);