"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6113],{46044:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=r(74848),t=r(28453);const i={},o="Amazon Ads",d={id:"reference/Connectors/capture-connectors/amazon-ads",title:"Amazon Ads",description:"This connector captures data from Amazon Ads into Flow collections via the Amazon Ads API.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-ads.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-ads",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/amazon-ads",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alpaca",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/alpaca"},next:{title:"Amazon DynamoDB",permalink:"/pr-preview/pr-1468/reference/Connectors/capture-connectors/amazon-dynamodb"}},a={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Amazon in the Flow web app",id:"using-oauth2-to-authenticate-with-amazon-in-the-flow-web-app",level:3},{value:"Authenticating manually using the CLI",id:"authenticating-manually-using-the-cli",level:3},{value:"Selecting data region and profiles",id:"selecting-data-region-and-profiles",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"amazon-ads",children:"Amazon Ads"}),"\n",(0,s.jsxs)(n.p,{children:["This connector captures data from Amazon Ads into Flow collections via the ",(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us",children:"Amazon Ads API"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/source-amazon-ads:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/source-amazon-ads:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,s.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/amazon-ads/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/reference/2/profiles#/Profiles",children:"Profiles"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Ad%20groups",children:"Sponsored brands ad groups"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Campaigns",children:"Sponsored brands campaigns"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Keywords",children:"Sponsored brands keywords"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Reports",children:"Sponsored brands report stream"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Reports",children:"Sponsored brands video report stream"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Ad%20groups",children:"Sponsored display ad groups"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Campaigns",children:"Sponsored display ad campaigns"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Product%20ads",children:"Sponsored display product ads"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Reports",children:" Sponsored display report stream"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Targeting",children:"Sponsored display targetings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Ad%20groups",children:"Sponsored product ad groups"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20ads",children:"Sponsored product ads"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Campaigns",children:"Sponsored product campaigns"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Keywords",children:"Sponsored product keywords"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Negative%20keywords",children:"Sponsored product negative keywords"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20targeting",children:"Sponsored product targetings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Reports",children:"Sponsored product report stream"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"This connector uses OAuth2 to authenticate with Amazon. You can do this in the Flow web app, or configure manually if you're using the flowctl CLI."}),"\n",(0,s.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-amazon-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Amazon in the Flow web app"}),"\n",(0,s.jsxs)(n.p,{children:["You'll need an Amazon user account with ",(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/help?ref_=a20m_us_blg#GDQVHVQMY9F88PCA",children:"access"})," to the ",(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/register",children:"Amazon Ads account"})," from which you wish to capture data."]}),"\n",(0,s.jsx)(n.p,{children:"You'll use these credentials to sign in."}),"\n",(0,s.jsx)(n.h3,{id:"authenticating-manually-using-the-cli",children:"Authenticating manually using the CLI"}),"\n",(0,s.jsx)(n.p,{children:"When you configure this connector manually, you provide the same credentials that OAuth2 would automatically\nfetch if you used the web app. These are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Client ID"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Client secret"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Refresh token"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To obtain these credentials:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Complete the ",(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/onboarding/overview",children:"Amazon Ads API onboarding process"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/getting-started/retrieve-access-token#retrieve-your-client-id-and-client-secret",children:"Retrieve your client ID and client secret"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/getting-started/retrieve-access-token#call-the-authorization-url-to-request-access-and-refresh-tokens",children:"Retrieve a refresh token"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"selecting-data-region-and-profiles",children:"Selecting data region and profiles"}),"\n",(0,s.jsxs)(n.p,{children:["When you ",(0,s.jsx)(n.a,{href:"#endpoint",children:"configure the endpoint"})," for this connector, you must choose an Amazon region from which to capture data.\nOptionally, you may also select profiles from which to capture data."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"region"})," must be one of:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NA (North America)"}),"\n",(0,s.jsx)(n.li,{children:"EU (European Union)"}),"\n",(0,s.jsx)(n.li,{children:"FE (Far East)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These represent the three URL endpoints provided by Amazon through which you can access the marketing API.\nEach region encompasses multiple Amazon marketplaces, which are broken down by country.\nSee the ",(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints",children:"Amazon docs"})," for details."]}),"\n",(0,s.jsxs)(n.p,{children:["If you run your Amazon ads in multiple marketplaces, you may have separate ",(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles",children:"profiles"})," for each.\nIf this is the case, you can specify the profiles from which you wish to capture data\nby supplying their ",(0,s.jsx)(n.a,{href:"https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles#retrieving-profiles-2",children:"profile IDs"}),".\nBe sure to specify only profiles that correspond to marketplaces within the region you chose."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1468/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Amazon Ads source connector."]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,s.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-amazon-in-the-flow-web-app",children:"OAuth2"}),",\nso many of these properties aren't required."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials"})})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/auth_type"})}),(0,s.jsx)(n.td,{children:"Auth Type"}),(0,s.jsxs)(n.td,{children:["Set to ",(0,s.jsx)(n.code,{children:"oauth2.0"})," for manual integration (in this method, you're re-creating the same credentials of the OAuth user interface, but doing so manually)"]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/client_id"})})}),(0,s.jsx)(n.td,{children:"Client ID"}),(0,s.jsx)(n.td,{children:"The client ID of your Amazon Ads developer application."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/client_secret"})})}),(0,s.jsx)(n.td,{children:"Client Secret"}),(0,s.jsx)(n.td,{children:"The client secret of your Amazon Ads developer application."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/refresh_token"})})}),(0,s.jsx)(n.td,{children:"Refresh Token"}),(0,s.jsx)(n.td,{children:"Amazon Ads refresh token."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/profiles"})}),(0,s.jsx)(n.td,{children:"Profile IDs (Optional)"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"#selecting-data-region-and-profiles",children:"Profile IDs"})," you want to fetch data for."]}),(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/region"})}),(0,s.jsx)(n.td,{children:"Region *"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"#selecting-data-region-and-profiles",children:"Region"})," to pull data from (EU/NA/FE)."]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"NA"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/report_generation_max_retries"})}),(0,s.jsx)(n.td,{children:"Report Generation Maximum Retries *"}),(0,s.jsx)(n.td,{children:"Maximum retries the connector will attempt for fetching report data."}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/report_wait_timeout"})}),(0,s.jsx)(n.td,{children:"Report Wait Timeout *"}),(0,s.jsx)(n.td,{children:"Timeout duration in minutes for reports."}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"60"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/start_date"})}),(0,s.jsx)(n.td,{children:"Start Date (Optional)"}),(0,s.jsx)(n.td,{children:"The start date for collecting reports, in YYYY-MM-DD format. This should not be more than 60 days in the past."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/stream"})})}),(0,s.jsx)(n.td,{children:"Stream"}),(0,s.jsx)(n.td,{children:"Amazon Ads resource from which a collection is captured."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/syncMode"})})}),(0,s.jsx)(n.td,{children:"Sync Mode"}),(0,s.jsx)(n.td,{children:"Connection method."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-amazon-ads:dev\n          config:\n            credentials:\n              auth_type: oauth2.0\n              client_id: amzn1.application-oa2-client.XXXXXXXXX\n              client_secret: <secret>\n              refresh_token: Atzr|XXXXXXXXXXXX\n            region: NA\n            report_generation_max_retries: 5\n            report_wait_timeout: 60\n            start_date: 2022-03-01\n\n      bindings:\n        - resource:\n            stream: profiles\n            syncMode: full_refresh\n          target: ${PREFIX}/profiles\n       {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);