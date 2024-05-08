"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5857],{82626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={},c="LinkedIn Ads",o={id:"reference/Connectors/capture-connectors/linkedin-ads",title:"LinkedIn Ads",description:"This connector captures data from LinkedIn Ads into Flow collections through the LinkedIn Marketing API.",source:"@site/docs/reference/Connectors/capture-connectors/linkedin-ads.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/linkedin-ads",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/linkedin-ads",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/linkedin-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Klaviyo",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/klaviyo"},next:{title:"LinkedIn Pages",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/linkedin-pages"}},a={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with LinkedIn in the Flow web app",id:"using-oauth2-to-authenticate-with-linkedin-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Setup",id:"setup",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"linkedin-ads",children:"LinkedIn Ads"}),"\n",(0,i.jsx)(n.p,{children:"This connector captures data from LinkedIn Ads into Flow collections through the LinkedIn Marketing API."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://ghcr.io/estuary/source-linkedin-ads:dev",children:(0,i.jsx)(n.code,{children:"ghcr.io/estuary/source-linkedin-ads:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,i.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/linkedin-ads/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,i.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,i.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?view=li-lms-2022-08&tabs=http",children:"Accounts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?view=li-lms-2022-08&tabs=http",children:"Account users"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?view=li-lms-2022-08&tabs=http",children:"Campaign groups"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?view=li-lms-2022-08&tabs=http",children:"Campaigns"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-creatives?view=li-lms-unversioned&tabs=http",children:"Creatives"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/create-and-manage-video?view=li-lms-unversioned&tabs=http",children:"AdDirectSponsoredContents (Video ads)"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?view=li-lms-2022-08&tabs=http",children:"Ad analytics"})," by campaign"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?view=li-lms-2022-08&tabs=http",children:"Ad analytics"})," by creative"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to authenticate with LinkedIn when capturing data into Flow: using OAuth2, and manually, by creating a developer application.\nTheir prerequisites differ."}),"\n",(0,i.jsx)(n.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe developer application method is the only supported method using the command line."}),"\n",(0,i.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-linkedin-in-the-flow-web-app",children:"Using OAuth2 to authenticate with LinkedIn in the Flow web app"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["One or more LinkedIn ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/help/lms/answer/a426102/create-an-ad-account?lang=en",children:"Ad Accounts"})," with active campaigns."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A LinkedIn user with ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/help/lms/answer/a425731/user-roles-and-permissions-in-campaign-manager?lang=en",children:"access to the Ad Accounts"})," from which you want to capture data."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuring-the-connector-specification-manually",children:"Configuring the connector specification manually"}),"\n",(0,i.jsx)(n.p,{children:"To configure without using OAuth, you'll need to create an application using the LinkedIn Marketing API,\nand generate its access token."}),"\n",(0,i.jsx)(n.h4,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a marketing application on ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/developers/apps/new",children:"LinkedIn Developers"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/getting-access?view=li-lms-2022-08#how-to-apply-to-the-marketing-developer-platform",children:"Apply to the LinkedIn Developer Program"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fcontext&view=li-lms-2022-08&tabs=HTTPS",children:"Generate your access token"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"LinkedIn access tokens expire in 60 days.\nYou must manually update your capture configuration to continue to capture data from LinkedIn."})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the capture specification.\nSee ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the LinkedIn Ads source connector."]}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,i.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-linkedin-in-the-flow-web-app",children:"OAuth2"}),",\nso some of these properties aren't required."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Title"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required/Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/account_ids"})}),(0,i.jsx)(n.td,{children:"Account IDs (Optional)"}),(0,i.jsxs)(n.td,{children:["A space-separated list of the ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/help/linkedin/answer/a424270/find-linkedin-ads-account-details?lang=en",children:"account IDs"})," from which to capture data. Leave empty if you want to capture data from all linked accounts."]}),(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/credentials"})}),(0,i.jsx)(n.td,{children:"Authentication"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/credentials/auth_method"})}),(0,i.jsx)(n.td,{children:"Authentication method"}),(0,i.jsxs)(n.td,{children:["Set to ",(0,i.jsx)(n.code,{children:"access_token"})," to authenticate manually."]}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/credentials/access_token"})}),(0,i.jsx)(n.td,{children:"Access token"}),(0,i.jsx)(n.td,{children:"Access token generated from your LinkedIn Developers app."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/start_date"})})}),(0,i.jsx)(n.td,{children:"Start date"}),(0,i.jsx)(n.td,{children:"UTC date in the format 2020-09-17. Any data before this date will not be replicated."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Title"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required/Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/stream"})})}),(0,i.jsx)(n.td,{children:"Stream"}),(0,i.jsx)(n.td,{children:"LinkedIn Ads stream from which a collection is captured."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/syncMode"})})}),(0,i.jsx)(n.td,{children:"Sync Mode"}),(0,i.jsx)(n.td,{children:"Connection method."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-linkedin-ads:dev\n        config:\n          account_ids:\n            - 000000000\n            - 111111111\n          credentials:\n            auth_method: access_token\n            access_token: {secret}\n          start_date: 2022-01-01\n    bindings:\n      - resource:\n          stream: campaigns\n          syncMode: incremental\n        target: ${PREFIX}/campaign\n      {...}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);