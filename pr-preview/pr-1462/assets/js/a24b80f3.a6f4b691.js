"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9225],{52760:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(74848),r=i(28453);const s={sidebar_position:1},o="Notifications",a={id:"reference/notifications",title:"Notifications",description:"Estuary allows users to configure email notifications on specific tenants to send out alerts when a task hasn't received data within a time window and when billing information has been updated.",source:"@site/docs/reference/notifications.md",sourceDirName:"reference",slug:"/reference/notifications",permalink:"/pr-preview/pr-1462/reference/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/notifications.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Editing considerations",permalink:"/pr-preview/pr-1462/reference/editing"},next:{title:"Time Travel",permalink:"/pr-preview/pr-1462/reference/time-travel"}},l={},d=[{value:"Data Movement Alerts",id:"data-movement-alerts",level:2},{value:"Billing Alerts",id:"billing-alerts",level:2},{value:"Properties",id:"properties",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"notifications",children:"Notifications"}),"\n",(0,n.jsx)(t.p,{children:"Estuary allows users to configure email notifications on specific tenants to send out alerts when a task hasn't received data within a time window and when billing information has been updated."}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"Admin"})," section of the Flow Web Application, navigate to the the ",(0,n.jsx)(t.code,{children:"Settings"})," tab. Here you will be able to input your email to receive notifications from your tenant."]}),"\n",(0,n.jsx)(t.h2,{id:"data-movement-alerts",children:"Data Movement Alerts"}),"\n",(0,n.jsxs)(t.p,{children:["When navigating to the main view of a capture or a materialization, a user can select an interval for tracking zero data movement. Under the ",(0,n.jsx)(t.code,{children:"Nofitification Settiings"})," card, select a time interval from the dropdown labeled ",(0,n.jsx)(t.code,{children:"Interval"}),". There is no need to save, but you must also have already configured notifications in order for the alert to take into effect. If you are not yet subscribed to notifications, a pop up will appear prompting you to set up a subscribing by clicking on ",(0,n.jsx)(t.code,{children:"CLICK HERE"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If your task does not receive any new documents with the selected timeframe, an email will be sent to any email addresses that are subscribed to this tenant."}),"\n",(0,n.jsx)(t.h2,{id:"billing-alerts",children:"Billing Alerts"}),"\n",(0,n.jsxs)(t.p,{children:["Billing alerts are automatically subscribed to when a user inputs their email into the ",(0,n.jsx)(t.code,{children:"Organization Notifications"})," table. Alerts will be sent out for the following events:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Free Tier Started"}),": A tenenat has transitioned into the free trial"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Free Trial Ending"}),": Five days are remaining in a tenant's free trial"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Free Trial Ended"}),": A tenant's free trial has ended"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Provided Payment Method"}),": A valid payment method has been provided for a tenant"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Title"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/catalogPrefix"})})}),(0,n.jsx)(t.td,{children:"Prefix"}),(0,n.jsx)(t.td,{children:"Subscribe to notifications for this tenant"}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/email"})})}),(0,n.jsx)(t.td,{children:"Email"}),(0,n.jsx)(t.td,{children:"Alert the following email with all notifications"}),(0,n.jsx)(t.td,{children:"string"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);