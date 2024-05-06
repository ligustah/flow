"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5828],{76001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const i={},c="Snapchat Marketing",o={id:"reference/Connectors/capture-connectors/snapchat",title:"Snapchat Marketing",description:"This connector captures data from Snapchat Marketing into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/snapchat.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/snapchat",permalink:"/pr-preview/pr-1459/reference/Connectors/capture-connectors/snapchat",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/snapchat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/pr-preview/pr-1459/reference/Connectors/capture-connectors/slack"},next:{title:"Snowflake CDC Connector",permalink:"/pr-preview/pr-1459/reference/Connectors/capture-connectors/snowflake"}},a={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"snapchat-marketing",children:"Snapchat Marketing"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from Snapchat Marketing into Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-snapchat:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-snapchat:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/snapchat/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsx)(n.p,{children:"This connector can be used to sync the following tables from Snapchat:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adaccounts"}),"\n",(0,r.jsx)(n.li,{children:"Ads"}),"\n",(0,r.jsx)(n.li,{children:"Adsquads"}),"\n",(0,r.jsx)(n.li,{children:"Campaigns"}),"\n",(0,r.jsx)(n.li,{children:"Creatives"}),"\n",(0,r.jsx)(n.li,{children:"Media"}),"\n",(0,r.jsx)(n.li,{children:"Organizations"}),"\n",(0,r.jsx)(n.li,{children:"Segments"}),"\n",(0,r.jsx)(n.li,{children:"AdaccountsStatsHourly"}),"\n",(0,r.jsx)(n.li,{children:"AdaccountsStatsDaily"}),"\n",(0,r.jsx)(n.li,{children:"AdaccountsStatsLifetime"}),"\n",(0,r.jsx)(n.li,{children:"AdsStatsHourly"}),"\n",(0,r.jsx)(n.li,{children:"AdsStatsDaily"}),"\n",(0,r.jsx)(n.li,{children:"AdsStatsHourly"}),"\n",(0,r.jsx)(n.li,{children:"AdsStatsDaily"}),"\n",(0,r.jsx)(n.li,{children:"AdsStatsLifetime"}),"\n",(0,r.jsx)(n.li,{children:"AdsquadsStatsDaily"}),"\n",(0,r.jsx)(n.li,{children:"AdsquadsStatsLifetime"}),"\n",(0,r.jsx)(n.li,{children:"CampaignsStatsHourly"}),"\n",(0,r.jsx)(n.li,{children:"CampaignsStatsDaily"}),"\n",(0,r.jsx)(n.li,{children:"CampaignsStatsLifetime"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A Snapchat Marketing account with permission to access data from accounts you want to sync."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Snapchat source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/start_date"})}),(0,r.jsx)(n.td,{children:"Start Date"}),(0,r.jsx)(n.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Default"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/end_date"})}),(0,r.jsx)(n.td,{children:"End Date"}),(0,r.jsx)(n.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Resource of your Snapchat project from which collections are captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsx)(n.td,{children:"Connection method."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-snapchat:dev\n        config:\n          start_date: 2017-01-25T00:00:00Z\n          end_date: 2018-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: lists\n          syncMode: full_refresh\n        target: ${PREFIX}/lists\n      {...}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);