"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6519],{9472:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(74848),r=i(28453);const s={},o="LinkedIn Pages",c={id:"reference/Connectors/capture-connectors/linkedin-pages",title:"LinkedIn Pages",description:"This connector captures data from one LinkedIn Page into Flow collections via the LinkedIn Marketing API.",source:"@site/docs/reference/Connectors/capture-connectors/linkedin-pages.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/linkedin-pages",permalink:"/pr-preview/pr-1454/reference/Connectors/capture-connectors/linkedin-pages",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/linkedin-pages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LinkedIn Ads",permalink:"/pr-preview/pr-1454/reference/Connectors/capture-connectors/linkedin-ads"},next:{title:"Mailchimp",permalink:"/pr-preview/pr-1454/reference/Connectors/capture-connectors/mailchimp"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Access Token Authentication",id:"access-token-authentication",level:3},{value:"Oauth Authentication",id:"oauth-authentication",level:3},{value:"Create a LinkedIn OAuth App",id:"create-a-linkedin-oauth-app",level:4},{value:"Create a Refresh Token",id:"create-a-refresh-token",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Supported Streams",id:"supported-streams",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"linkedin-pages",children:"LinkedIn Pages"}),"\n",(0,t.jsxs)(n.p,{children:["This connector captures data from one LinkedIn Page into Flow collections via the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/linkedin/marketing/integrations/marketing-integrations-overview?view=li-lms-2024-03",children:"LinkedIn Marketing API"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/linkedin-pages",children:"here"}),", but keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An existing LinkedIn Account"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The API user account should be assigned the ",(0,t.jsx)(n.code,{children:"ADMIN"})," role and the following permissions for the API endpoints.\nEndpoints such as: ",(0,t.jsx)(n.code,{children:"Organization Lookup API"}),", ",(0,t.jsx)(n.code,{children:"Follower Statistics"})," and ",(0,t.jsx)(n.code,{children:"Share Statistics"})," require these permissions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"r_organization_social"}),": Read the organization's posts, comments, reactions, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rw_organization_admin"}),": Write and read the organization's pages and read reporting data."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsx)(n.p,{children:"This connector's authentication can be configured by either passing a LinkedIn access token or using Oauth to connect to your source. Oauth requires the additional setup of verifying your application with LinkedIn in order to use the required scopes."}),"\n",(0,t.jsxs)(n.p,{children:["You can see more details about the Community Management App Review in ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/linkedin/marketing/community-management-app-review?view=li-lms-2024-03",children:"LinkedIn's Docs"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"LinkedIn access tokens expire in 60 days.\nYou must manually update your capture configuration to continue to capture data from LinkedIn."}),(0,t.jsxs)(n.p,{children:["Refresh tokens expire after 365 days from their creation date. If you receive a ",(0,t.jsx)(n.code,{children:"401 invalid token response"})," error, it means that the access token has expired and you need to generate a new token. You can see more details about it in ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow",children:"LinkedIn's Docs"}),"."]})]}),"\n",(0,t.jsx)(n.h3,{id:"access-token-authentication",children:"Access Token Authentication"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the LinkedIn Developers' ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/developers/tools/oauth",children:"OAuth Token Tools"})," and click ",(0,t.jsx)(n.strong,{children:"Create token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Your app will need the ",(0,t.jsx)(n.code,{children:"r_organization_social"})," and ",(0,t.jsx)(n.code,{children:"rw_organization_admin"})," scopes:"]}),"\n",(0,t.jsx)(n.li,{children:'Click "Request access token" and save the token.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"oauth-authentication",children:"Oauth Authentication"}),"\n",(0,t.jsx)(n.h4,{id:"create-a-linkedin-oauth-app",children:"Create a LinkedIn OAuth App"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/help/linkedin/answer/a543852",children:"LinkedIn Page"})," if you don't have one."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.linkedin.com/developers/apps/new",children:"Create"})," a developer application in LinkedIn's Developer Portal."]}),"\n",(0,t.jsxs)(n.li,{children:["Ensure your application complies with the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/linkedin/marketing/restricted-use-cases?view=li-lms-2024-03",children:"Restricted Uses of LinkedIn Marketing APIs and Data"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/linkedin/marketing/increasing-access?view=li-lms-2024-03#increasing-access",children:"Apply"})," to the Community Management API under the Products tab of your LinkedIn app and complete the form."]}),"\n",(0,t.jsxs)(n.li,{children:["Save your ",(0,t.jsx)(n.code,{children:"client_id"})," and ",(0,t.jsx)(n.code,{children:"client_secret"})," from the Auth tab."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"create-a-refresh-token",children:"Create a Refresh Token"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the LinkedIn Developers' ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/developers/tools/oauth",children:"OAuth Token Tools"})," and click ",(0,t.jsx)(n.strong,{children:"Create token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Your app will need the ",(0,t.jsx)(n.code,{children:"r_organization_social"})," and ",(0,t.jsx)(n.code,{children:"rw_organization_admin"})," scopes:"]}),"\n",(0,t.jsx)(n.li,{children:'Click "Request access token" and save the token.'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1454/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the LinkedIn Pages source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/organization_id"})}),(0,t.jsx)(n.td,{children:"Organization ID"}),(0,t.jsx)(n.td,{children:"Your unique organization's id, found in the url of your bussiness' Organization Page"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/client_id"})}),(0,t.jsx)(n.td,{children:"Client ID"}),(0,t.jsx)(n.td,{children:"Your Oauth app's client id."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/client_secret"})}),(0,t.jsx)(n.td,{children:"Client Secret"}),(0,t.jsx)(n.td,{children:"Your Oauth app's client secret."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/refresh_token"})}),(0,t.jsx)(n.td,{children:"Refresh Token"}),(0,t.jsxs)(n.td,{children:["The token value generated using the LinkedIn Developers ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/developers/tools/oauth",children:"OAuth Token Tools"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/access_token"})}),(0,t.jsx)(n.td,{children:"Access Token"}),(0,t.jsxs)(n.td,{children:["The token value generated using the LinkedIn Developers ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/developers/tools/oauth",children:"OAuth Token Tools"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"supported-streams",children:"Supported Streams"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/organization-lookup-api?tabs=http#retrieve-organizations",children:"Organization Lookup"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/follower-statistics?tabs=http#retrieve-lifetime-follower-statistics",children:"Follower Statistics"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/share-statistics?tabs=http#retrieve-lifetime-share-statistics",children:"Share Statistics"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/organization-lookup-api?tabs=http#retrieve-organization-follower-count",children:"Total Follower Count"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);