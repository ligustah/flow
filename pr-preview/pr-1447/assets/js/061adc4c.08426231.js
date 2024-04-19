"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5039],{38357:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=i(74848),r=i(28453);const c={sidebar_position:3},s="Mailchimp",o={id:"reference/Connectors/capture-connectors/mailchimp",title:"Mailchimp",description:"This connector captures data from a Mailchimp account.",source:"@site/docs/reference/Connectors/capture-connectors/mailchimp.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/mailchimp",permalink:"/pr-preview/pr-1447/reference/Connectors/capture-connectors/mailchimp",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/mailchimp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"LinkedIn Ads",permalink:"/pr-preview/pr-1447/reference/Connectors/capture-connectors/linkedin-ads"},next:{title:"Marketo",permalink:"/pr-preview/pr-1447/reference/Connectors/capture-connectors/marketo"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Mailchimp in the Flow web app",id:"using-oauth2-to-authenticate-with-mailchimp-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mailchimp",children:"Mailchimp"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from a Mailchimp account."}),"\n",(0,t.jsx)(n.p,{children:"Three data resources are supported, each of which is mapped to a Flow collection: lists, campaigns, and email activity."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-mailchimp:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-mailchimp:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/mailchimp",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to authenticate with MailChimp when capturing data: using OAuth2, and manually, with an API key.\nTheir prerequisites differ."}),"\n",(0,t.jsx)(n.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe API key method is the only supported method using the command line."}),"\n",(0,t.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-mailchimp-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Mailchimp in the Flow web app"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Mailchimp account"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-connector-specification-manually",children:"Configuring the connector specification manually"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A Mailchimp account"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A Mailchimp ",(0,t.jsx)(n.a,{href:"https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key",children:"API key"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1447/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Mailchimp source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsx)(n.p,{children:"The following properties reflect the API Key authentication method."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials"})})}),(0,t.jsx)(n.td,{children:"Authentication"}),(0,t.jsx)(n.td,{children:"Authentication Type and Details"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/auth_type"})})}),(0,t.jsx)(n.td,{children:"Authentication Type"}),(0,t.jsxs)(n.td,{children:["Authentication type. Set to ",(0,t.jsx)(n.code,{children:"apikey"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/apikey"})})}),(0,t.jsx)(n.td,{children:"API Key"}),(0,t.jsx)(n.td,{children:"Your Mailchimp API key"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Resource"}),(0,t.jsxs)(n.td,{children:["Mailchimp ",(0,t.jsx)(n.code,{children:"lists"}),", ",(0,t.jsx)(n.code,{children:"campaigns"}),", or ",(0,t.jsx)(n.code,{children:"email_activity"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsxs)(n.td,{children:["Connection method. Always set to ",(0,t.jsx)(n.code,{children:"incremental"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mailchimp:dev\n          config:\n            credentials:\n              auth_type: apikey\n              apikey: <secret>\n      bindings:\n        - resource:\n            stream: lists\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: campaigns\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: email_activity\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1447/concepts/captures#pull-captures",children:"Learn more about capture definitions."})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const r={},c=t.createContext(r);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);