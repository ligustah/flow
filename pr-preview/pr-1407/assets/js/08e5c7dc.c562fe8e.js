"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8164],{33633:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(74848),t=r(28453);const i={sidebar_position:1},c="Confluence",s={id:"reference/Connectors/capture-connectors/confluence",title:"Confluence",description:"This connector captures data from Confluence into Flow collections via the Confluence Cloud REST API.",source:"@site/docs/reference/Connectors/capture-connectors/confluence.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/confluence",permalink:"/pr-preview/pr-1407/reference/Connectors/capture-connectors/confluence",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/confluence.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chargebee",permalink:"/pr-preview/pr-1407/reference/Connectors/capture-connectors/chargebee"},next:{title:"Exchange Rates API",permalink:"/pr-preview/pr-1407/reference/Connectors/capture-connectors/exchange-rates"}},a={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"resources",id:"resources",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Sample",id:"sample",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"confluence",children:"Confluence"}),"\n",(0,o.jsxs)(n.p,{children:["This connector captures data from Confluence into Flow collections via the Confluence ",(0,o.jsx)(n.a,{href:"https://developer.atlassian.com/cloud/confluence/rest/v1/intro/#about",children:"Cloud REST API"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,o.jsx)(n.a,{href:"https://ghcr.io/estuary/source-confluence:dev",children:(0,o.jsx)(n.code,{children:"ghcr.io/estuary/source-confluence:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,o.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,o.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/confluence/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,o.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,o.jsxs)(n.p,{children:["When you ",(0,o.jsx)(n.a,{href:"#endpoint",children:"configure the connector"}),", you specify your email, api and domain name"]}),"\n",(0,o.jsx)(n.p,{children:"From your selection, the following data resources are captured:"}),"\n",(0,o.jsx)(n.h3,{id:"resources",children:"resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-audit/#api-wiki-rest-api-audit-get",children:"Audit"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-content/#api-wiki-rest-api-content-get",children:"Blog Posts"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-group/#api-wiki-rest-api-group-get",children:"Group"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-content/#api-wiki-rest-api-content-get",children:"Pages"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-space/#api-wiki-rest-api-space-get",children:"Space"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Atlassian API Token"}),"\n",(0,o.jsx)(n.li,{children:"Your Confluence domain name"}),"\n",(0,o.jsx)(n.li,{children:"Your Confluence login email"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GitHub source connector."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create an API Token"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For detailed instructions on creating an Atlassian API Token, please refer to the ",(0,o.jsx)(n.a,{href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/",children:"official documentation"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Set up the Confluence connector in Estuary Flow"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Log into Estuary Flow and click "Captures".'}),"\n",(0,o.jsx)(n.li,{children:'Select "Create Capture" search for and click on "Confluence"'}),"\n",(0,o.jsx)(n.li,{children:"Enter a Capture Name"}),"\n",(0,o.jsx)(n.li,{children:'In the "API Token" field, enter your Atlassian API Token'}),"\n",(0,o.jsx)(n.li,{children:'In the "Domain Name" field, enter your Confluence Domain name'}),"\n",(0,o.jsx)(n.li,{children:'In the "Email" field, enter your Confluence login email'}),"\n",(0,o.jsx)(n.li,{children:'Click "Save and Publish"'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,o.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-confluence:dev\n          config:\n            credentials:\n              api_token: PAT Credentials\n            domain_name: estuary1.atlassian.net\n            email: dave@estuary.dev\n      bindings:\n        - resource:\n            stream: audit\n            syncMode: full_refresh\n          target: ${PREFIX}/audit\n       {...}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var o=r(96540);const t={},i=o.createContext(t);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);