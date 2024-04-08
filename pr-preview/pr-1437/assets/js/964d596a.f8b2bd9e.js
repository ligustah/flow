"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6523],{58829:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=r(74848),s=r(28453);const i={},c="Zendesk Support",o={id:"reference/Connectors/capture-connectors/zendesk-support",title:"Zendesk Support",description:"This connector captures data from Zendesk into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/zendesk-support.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/zendesk-support",permalink:"/pr-preview/pr-1437/reference/Connectors/capture-connectors/zendesk-support",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/zendesk-support.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zendesk Chat",permalink:"/pr-preview/pr-1437/reference/Connectors/capture-connectors/zendesk-chat"},next:{title:"Materialization connectors",permalink:"/pr-preview/pr-1437/reference/Connectors/materialization-connectors/"}},d={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"zendesk-support",children:"Zendesk Support"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from Zendesk into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-zendesk-support:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-zendesk-support:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/zendesk-support/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(n.p,{children:"The following data resources are supported through the Zendesk API:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/",children:"Brands"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/",children:"Custom roles"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/groups/group_memberships/",children:"Group memberships"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/groups/groups/",children:"Groups"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/",children:"Macros"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/",children:"Organizations"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/satisfaction_ratings/",children:"Satisfaction ratings"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/schedules/",children:"Schedules"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/business-rules/sla_policies/",children:"SLA policies"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/tags/",children:"Tags"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/",children:"Ticket audits"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/",children:"Ticket comments"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/",children:"Ticket fields"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/",children:"Ticket forms"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_metrics/",children:"Ticket metrics"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_metric_events/",children:"Ticket metric events"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-export-time-based",children:"Tickets"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-user-export",children:"Users"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Subdomain of your Zendesk URL. In the URL ",(0,t.jsx)(n.code,{children:"https://MY_SUBDOMAIN.zendesk.com/"}),", ",(0,t.jsx)(n.code,{children:"MY_SUBDOMAIN"})," is the subdomain."]}),"\n",(0,t.jsx)(n.li,{children:"Email address associated with your Zendesk account."}),"\n",(0,t.jsxs)(n.li,{children:["A Zendesk API token. See the ",(0,t.jsx)(n.a,{href:"https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token",children:"Zendesk docs"})," to enable tokens and generate a new token."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification files.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1437/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Zendesk Support source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/api_token"})}),(0,t.jsx)(n.td,{children:"API Token"}),(0,t.jsx)(n.td,{children:"The value of the API token generated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/credentials"})}),(0,t.jsx)(n.td,{children:"Credentials method"}),(0,t.jsxs)(n.td,{children:["Type of credentials used. Set to ",(0,t.jsx)(n.code,{children:"api-token"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/email"})}),(0,t.jsx)(n.td,{children:"Email"}),(0,t.jsx)(n.td,{children:"The user email for your Zendesk account."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/start_date"})})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"The date from which you'd like to replicate data for Zendesk Support API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/subdomain"})})}),(0,t.jsx)(n.td,{children:"Subdomain"}),(0,t.jsxs)(n.td,{children:["This is your Zendesk subdomain that can be found in your account URL. For example, in ",(0,t.jsx)(n.code,{children:"https://MY_SUBDOMAIN.zendesk.com/"}),", where ",(0,t.jsx)(n.code,{children:"MY_SUBDOMAIN"})," is the value of your subdomain."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource in Zendesk from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-zendesk-support:dev\n        config:\n            credentials:\n              api_token: <secret>\n              credentials: api_token\n              email: user@domain.com\n            start_date: 2022-03-01T00:00:00Z\n            subdomain: my_subdomain\n    bindings:\n      - resource:\n          stream: group_memberships\n          syncMode: incremental\n        target: ${PREFIX}/groupmemberships\n      - resource:\n          stream: groups\n          syncMode: incremental\n        target: ${PREFIX}/groups\n      - resource:\n          stream: macros\n          syncMode: incremental\n        target: ${PREFIX}/macros\n      - resource:\n          stream: organizations\n          syncMode: incremental\n        target: ${PREFIX}/organizations\n      - resource:\n          stream: satisfaction_ratings\n          syncMode: incremental\n        target: ${PREFIX}/satisfactionratings\n      - resource:\n          stream: sla_policies\n          syncMode: full_refresh\n        target: ${PREFIX}/slapoliciies\n      - resource:\n          stream: tags\n          syncMode: full_refresh\n        target: ${PREFIX}/tags\n      - resource:\n          stream: ticket_audits\n          syncMode: incremental\n        target: ${PREFIX}/ticketaudits\n      - resource:\n          stream: ticket_comments\n          syncMode: incremental\n        target: ${PREFIX}/ticketcomments\n      - resource:\n          stream: ticket_fields\n          syncMode: incremental\n        target: ${PREFIX}/ticketfields\n      - resource:\n          stream: ticket_forms\n          syncMode: incremental\n        target: ${PREFIX}/ticketforms\n      - resource:\n          stream: ticket_metrics\n          syncMode: incremental\n        target: ${PREFIX}/ticketmetrics\n      - resource:\n          stream: ticket_metric_events\n          syncMode: incremental\n        target: ${PREFIX}/ticketmetricevents\n      - resource:\n          stream: tickets\n          syncMode: incremental\n        target: ${PREFIX}/tickets\n      - resource:\n          stream: users\n          syncMode: incremental\n        target: ${PREFIX}/users\n      - resource:\n          stream: brands\n          syncMode: full_refresh\n        target: ${PREFIX}/brands\n      - resource:\n          stream: custom_roles\n          syncMode: full_refresh\n        target: ${PREFIX}/customroles\n      - resource:\n          stream: schedules\n          syncMode: full_refresh\n        target: ${PREFIX}/schedules\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);