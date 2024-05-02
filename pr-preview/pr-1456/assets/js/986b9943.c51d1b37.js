"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[185],{11521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(74848),i=n(28453);const s={},d="TikTok Marketing",c={id:"reference/Connectors/capture-connectors/tiktok",title:"TikTok Marketing",description:"This connector captures data from TikTok marketing campaigns and ads into Flow collections via the TikTok API for Business. It supports production as well as sandbox accounts.",source:"@site/docs/reference/Connectors/capture-connectors/tiktok.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/tiktok",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/tiktok",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/tiktok.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Survey Monkey",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/survey-monkey"},next:{title:"Twilio",permalink:"/pr-preview/pr-1456/reference/Connectors/capture-connectors/twilio"}},o={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"OAuth authentication in the web app (production accounts)",id:"oauth-authentication-in-the-web-app-production-accounts",level:3},{value:"Sandbox access token authentication in the web app or CLI",id:"sandbox-access-token-authentication-in-the-web-app-or-cli",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Report aggregation",id:"report-aggregation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tiktok-marketing",children:"TikTok Marketing"}),"\n",(0,r.jsxs)(t.p,{children:["This connector captures data from TikTok marketing campaigns and ads into Flow collections via the ",(0,r.jsx)(t.a,{href:"https://ads.tiktok.com/marketing_api/docs",children:"TikTok API for Business"}),". It supports production as well as ",(0,r.jsx)(t.a,{href:"https://ads.tiktok.com/marketing_api/docs?id=1738855331457026",children:"sandbox"})," accounts."]}),"\n",(0,r.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(t.a,{href:"https://ghcr.io/estuary/source-tiktok-marketing:dev",children:(0,r.jsx)(t.code,{children:"ghcr.io/estuary/source-tiktok-marketing:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(t.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(t.a,{href:"https://docs.airbyte.com/integrations/sources/tiktok-marketing",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsx)(t.p,{children:"The following data resources are supported:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Resource"}),(0,r.jsx)(t.th,{children:"Production"}),(0,r.jsx)(t.th,{children:"Sandbox"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advertisers"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ad Groups"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ads"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Campaigns"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ads Reports Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ads Reports Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ads Reports Lifetime"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advertisers Reports Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advertisers Reports Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advertisers Reports Lifetime"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ad Groups Reports Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ad Groups Reports Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ad Groups Reports Lifetime"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Campaigns Reports Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Campaigns Reports Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Campaigns Reports Lifetime"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advertisers Audience Reports Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advertisers Audience Reports Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advertisers Audience Reports Lifetime"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ad Group Audience Reports Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ad Group Audience Reports Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ads Audience Reports Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ads Audience Reports Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Campaigns Audience Reports By Country Hourly"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Campaigns Audience Reports By Country Daily"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"X"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Prerequisites differ depending on whether you have a production or ",(0,r.jsx)(t.a,{href:"https://ads.tiktok.com/marketing_api/docs?id=1738855331457026",children:"sandbox"}),"\nTikTok for Business account, and on whether you'll use the Flow web app or the flowctl CLI."]}),"\n",(0,r.jsx)(t.h3,{id:"oauth-authentication-in-the-web-app-production-accounts",children:"OAuth authentication in the web app (production accounts)"}),"\n",(0,r.jsx)(t.p,{children:"If you have a TikTok marketing account in production and will use the Flow web app, you'll be able to quickly log in using OAuth."}),"\n",(0,r.jsx)(t.p,{children:"You'll need:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702715936951297",children:"TikTok for Business account"})," with one or more active campaigns."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Note the username and password used to sign into this account"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"sandbox-access-token-authentication-in-the-web-app-or-cli",children:"Sandbox access token authentication in the web app or CLI"}),"\n",(0,r.jsx)(t.p,{children:"If you're working in a Sandbox TikTok for Business account, you'll authenticate with an access token in both the web app and CLI."}),"\n",(0,r.jsx)(t.p,{children:"You'll need:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702715936951297",children:"TikTok for Business account"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1701890920013825",children:"Sandbox account"})," created under an existing\n",(0,r.jsx)(t.a,{href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702716474845185",children:"developer application"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Generate an access token and note the advertiser ID for the Sandbox."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(t.a,{href:"/pr-preview/pr-1456/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the TikTok Marketing source connector."]}),"\n",(0,r.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(t.p,{children:["The properties in the table below reflect the manual authentication method for Sandbox accounts.\nIf you're using a production account, you'll use ",(0,r.jsx)(t.a,{href:"#oauth-authentication-in-the-web-app-production-accounts",children:"OAuth2"})," to authenticate in the Flow web app,\nso many of these properties aren't required."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/credentials"})})}),(0,r.jsx)(t.td,{children:"Authentication Method"}),(0,r.jsx)(t.td,{children:"Authentication method"}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/credentials/auth_type"})})}),(0,r.jsx)(t.td,{children:"Authentication type"}),(0,r.jsxs)(t.td,{children:["Set to ",(0,r.jsx)(t.code,{children:"sandbox_access_token"})," to manually authenticate a Sandbox."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/credentials/advertiser_id"})}),(0,r.jsx)(t.td,{children:"Advertiser ID"}),(0,r.jsx)(t.td,{children:"The Advertiser ID generated for the developer's Sandbox application."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/credentials/access_token"})}),(0,r.jsx)(t.td,{children:"Access Token"}),(0,r.jsx)(t.td,{children:"The long-term authorized access token."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/end_date"})}),(0,r.jsx)(t.td,{children:"End Date"}),(0,r.jsxs)(t.td,{children:["The date until which you'd like to replicate data for all incremental streams, in the format YYYY-MM-DD. All data generated between ",(0,r.jsx)(t.code,{children:"start_date"})," and this date will be replicated. Not setting this option will result in always syncing the data till the current date."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/report_granularity"})}),(0,r.jsx)(t.td,{children:"Report Aggregation Granularity"}),(0,r.jsxs)(t.td,{children:["The granularity used for ",(0,r.jsx)(t.a,{href:"#report-aggregation",children:"aggregating performance data in reports"}),". Choose ",(0,r.jsx)(t.code,{children:"DAY"}),", ",(0,r.jsx)(t.code,{children:"LIFETIME"}),", or ",(0,r.jsx)(t.code,{children:"HOUR"}),"."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/start_date"})}),(0,r.jsx)(t.td,{children:"Start Date"}),(0,r.jsx)(t.td,{children:"Replication Start Date"}),(0,r.jsx)(t.td,{children:"The Start Date in format: YYYY-MM-DD. Any data before this date will not be replicated. If this parameter is not set, all data will be replicated."}),(0,r.jsx)(t.td,{children:"string"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/stream"})})}),(0,r.jsx)(t.td,{children:"Stream"}),(0,r.jsx)(t.td,{children:"TikTok resource from which a collection is captured."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/syncMode"})})}),(0,r.jsx)(t.td,{children:"Sync Mode"}),(0,r.jsx)(t.td,{children:"Connection method."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(t.p,{children:"This sample specification reflects the access token method for Sandbox accounts."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-tiktok-marketing:dev\n        config:\n          credentials:\n            auth_type: sandbox_access_token\n            access_token: {secret}\n            advertiser_id: {secret}\n          end_date: 2022-01-01\n          report_granularity: DAY\n          start_date: 2020-01-01\n    bindings:\n      - resource:\n          stream: campaigns\n          syncMode: incremental\n        target: ${PREFIX}/campaigns\n      {...}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"report-aggregation",children:"Report aggregation"}),"\n",(0,r.jsxs)(t.p,{children:["Many of the ",(0,r.jsx)(t.a,{href:"#supported-data-resources",children:"resources"})," this connector supports are reports.\nData in these reports is aggregated into rows based on the granularity you select in the ",(0,r.jsx)(t.a,{href:"#endpoint",children:"configuration"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"You can choose hourly, daily, or lifetime granularity. For example, if you choose daily granularity, the report will contain one row for each day."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);