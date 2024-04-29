"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2902],{6222:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(74848),t=r(28453);const i={},o="Freshdesk",c={id:"reference/Connectors/capture-connectors/freshdesk",title:"Freshdesk",description:"This connector captures Freshdesk data into Flow collections via the Freshdesk API.",source:"@site/docs/reference/Connectors/capture-connectors/freshdesk.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/freshdesk",permalink:"/reference/Connectors/capture-connectors/freshdesk",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/freshdesk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Facebook Marketing",permalink:"/reference/Connectors/capture-connectors/facebook-marketing"},next:{title:"Google Cloud Storage",permalink:"/reference/Connectors/capture-connectors/gcs"}},d={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"freshdesk",children:"Freshdesk"}),"\n",(0,n.jsxs)(s.p,{children:["This connector captures Freshdesk data into Flow collections via the ",(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#introduction",children:"Freshdesk API"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(s.a,{href:"https://ghcr.io/estuary/source-freshdesk:dev",children:(0,n.jsx)(s.code,{children:"ghcr.io/estuary/source-freshdesk:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsxs)(s.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.jsx)(s.a,{href:"https://docs.airbyte.com/integrations/sources/freshdesk/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,n.jsx)(s.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,n.jsx)(s.p,{children:"The following data resources are supported:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#agents",children:"Agents"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#business-hours",children:"Business hours"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#list_all_canned_response_folders",children:"Canned response folders"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#canned-responses",children:"Canned responses"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#companies",children:"Companies"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#contacts",children:"Contacts"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#conversations",children:"Conversations"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#category_attributes",children:"Discussion categories"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#comment_attributes",children:"Discussion comments"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#forum_attributes",children:"Discussion forums"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#topic_attributes",children:"Discussion topics"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#email-configs",children:"Email configs"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#email-mailboxes",children:"Email mailboxes"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#groups",children:"Groups"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#products",children:"Products"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#roles",children:"Roles"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#satisfaction-ratings",children:"Satisfaction ratings"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#scenario-automations",children:"Scenario automations"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#settings",children:"Settings"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#skills",children:"Skills"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#sla-policies",children:"SLA policies"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#solution_article_attributes",children:"Solution articles"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#solution_category_attributes",children:"Solution categories"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#solution_folder_attributes",children:"Solution folders"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#surveys",children:"Surveys"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#ticket-fields",children:"Ticket fields"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#tickets",children:"Tickets"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.freshdesk.com/api/#time-entries",children:"Time entries"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.p,{children:"To use this connector, you'll need:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Your ",(0,n.jsx)(s.a,{href:"https://support.freshdesk.com/en/support/solutions/articles/237264-how-do-i-find-my-freshdesk-account-url-using-my-email-address-",children:"Freshdesk account URL"})]}),"\n",(0,n.jsxs)(s.li,{children:["Your ",(0,n.jsx)(s.a,{href:"https://support.freshdesk.com/en/support/solutions/articles/215517",children:"Freshdesk API key"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(s.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.jsx)(s.a,{href:"/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Freshdesk source connector."]}),"\n",(0,n.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Title"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Required/Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/api_key"})})}),(0,n.jsx)(s.td,{children:"API Key"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://support.freshdesk.com/en/support/solutions/articles/215517",children:"Freshdesk API Key."})}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/domain"})})}),(0,n.jsx)(s.td,{children:"Domain"}),(0,n.jsx)(s.td,{children:"Freshdesk domain"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/requests_per_minute"})}),(0,n.jsx)(s.td,{children:"Requests per minute"}),(0,n.jsx)(s.td,{children:"The number of requests per minute that this source is allowed to use. There is a rate limit of 50 requests per minute per app per account."}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"/start_date"})}),(0,n.jsx)(s.td,{children:"Start Date"}),(0,n.jsx)(s.td,{children:"UTC date and time. Any data created after this date will be replicated. If this parameter is not set, all data will be replicated."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Title"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Required/Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/stream"})})}),(0,n.jsx)(s.td,{children:"Stream"}),(0,n.jsx)(s.td,{children:"Resource from the Freshdesk API from which a collection is captured."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"/syncMode"})})}),(0,n.jsx)(s.td,{children:"Sync mode"}),(0,n.jsx)(s.td,{children:"Connection method."}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-freshdesk:dev\n        config:\n            api_key: xxxxxxxxxxxxxxxx\n            domain: acmesupport.freshdesk.com\n    bindings:\n      - resource:\n          stream: agents\n          syncMode: incremental\n        target: ${PREFIX}/agents\n      {...}\n"})})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var n=r(96540);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);