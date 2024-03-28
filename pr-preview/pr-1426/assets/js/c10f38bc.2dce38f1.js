"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9057],{23762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(74848),s=t(28453);const i={sidebar_position:1},o="Amplitude",c={id:"reference/Connectors/capture-connectors/amplitude",title:"Amplitude",description:"This connector captures data from Amplitude into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/amplitude.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amplitude",permalink:"/pr-preview/pr-1426/reference/Connectors/capture-connectors/amplitude",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amplitude.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amazon SQS",permalink:"/pr-preview/pr-1426/reference/Connectors/capture-connectors/amazon-sqs"},next:{title:"Apache Kafka",permalink:"/pr-preview/pr-1426/reference/Connectors/capture-connectors/apache-kafka"}},d={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"amplitude",children:"Amplitude"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from Amplitude into Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-amplitude:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-amplitude:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/amplitude/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsx)(n.p,{children:"The following data resources are supported through the Amplitude APIs:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.amplitude.com/docs/dashboard-rest-api#active-and-new-user-counts",children:"Active User Counts"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.amplitude.com/docs/chart-annotations-api#get-all-annotations",children:"Annotations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.amplitude.com/docs/dashboard-rest-api#average-session-length",children:"Average Session Length"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.amplitude.com/docs/behavioral-cohorts-api#listing-all-cohorts",children:"Cohorts"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.amplitude.com/docs/export-api#export-api---export-your-projects-event-data",children:"Events"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["An Amplitude project with an ",(0,r.jsx)(n.a,{href:"https://help.amplitude.com/hc/en-us/articles/360058073772-Create-and-manage-organizations-and-projects",children:"API Key and Secret Key"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1426/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Amplitude source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/api_key"})})}),(0,r.jsx)(n.td,{children:"API Key"}),(0,r.jsx)(n.td,{children:"Amplitude API Key."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/secret_key"})})}),(0,r.jsx)(n.td,{children:"Secret Key"}),(0,r.jsx)(n.td,{children:"Amplitude Secret Key."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/start_date"})})}),(0,r.jsx)(n.td,{children:"Replication Start Date"}),(0,r.jsx)(n.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Resource of your Amplitude project from which collections are captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsx)(n.td,{children:"Connection method."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-amplitude:dev\n        config:\n            api_key: <secret>\n            secret_key: <secret>\n            start_date: 2022-06-18T00:00:00Z\n    bindings:\n      - resource:\n          stream: cohorts\n          syncMode: full_refresh\n        target: ${PREFIX}/cohorts\n      - resource:\n          stream: annotations\n          syncMode: full_refresh\n        target: ${PREFIX}/annotations\n      - resource:\n          stream: events\n          syncMode: incremental\n        target: ${PREFIX}/events\n      - resource:\n          stream: active_users\n          syncMode: incremental\n        target: ${PREFIX}/activeusers\n      - resource:\n          stream: average_session_length\n          syncMode: incremental\n        target: ${PREFIX}/averagesessionlength\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);