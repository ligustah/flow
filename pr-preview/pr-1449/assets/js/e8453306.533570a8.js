"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3973],{18463:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(74848),i=r(28453);const s={sidebar_position:3},o="MixPanel",c={id:"reference/Connectors/capture-connectors/mixpanel",title:"MixPanel",description:"This connector captures data from MixPanel into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/mixpanel.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/mixpanel",permalink:"/pr-preview/pr-1449/reference/Connectors/capture-connectors/mixpanel",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/mixpanel.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Marketo",permalink:"/pr-preview/pr-1449/reference/Connectors/capture-connectors/marketo"},next:{title:"MongoDB",permalink:"/pr-preview/pr-1449/reference/Connectors/capture-connectors/mongodb"}},d={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mixpanel",children:"MixPanel"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from MixPanel into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-mixpanel:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-mixpanel:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,t.jsxs)(n.p,{children:["You can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/mixpanel/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(n.p,{children:"The following data resources are supported through the MixPanel APIs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/raw-event-export",children:"Export"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/engage-query",children:"Engage"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/funnels-query",children:"Funnels"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/engage-query",children:"Revenue"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/overview-1",children:"Annotations"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/cohorts-list",children:"Cohorts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/engage-query",children:"Cohort Members"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To set up the Mixpanel source connector, you'll need a Mixpanel ",(0,t.jsx)(n.a,{href:"https://developer.mixpanel.com/reference/service-accounts",children:"Service Account"})," and it's ",(0,t.jsx)(n.a,{href:"https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings#project-id",children:"Project ID"}),", the ",(0,t.jsx)(n.a,{href:"https://help.mixpanel.com/hc/en-us/articles/115004547203-Manage-Timezones-for-Projects-in-Mixpanel",children:"Project Timezone"}),", and the Project region (",(0,t.jsx)(n.code,{children:"US"})," or ",(0,t.jsx)(n.code,{children:"EU"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the MixPanel source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/project_id"})}),(0,t.jsx)(n.td,{children:"Project ID"}),(0,t.jsxs)(n.td,{children:["Your project ID number. See the ",(0,t.jsx)(n.a,{href:"https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings#project-id",children:"docs"})," for more information on how to obtain this."]}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/attribution_window"})}),(0,t.jsx)(n.td,{children:"Attribution Window"}),(0,t.jsx)(n.td,{children:"A period of time for attributing results to ads and the lookback period after those actions occur during which ad results are counted. Default attribution window is 5 days."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Default"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/project_timezone"})}),(0,t.jsx)(n.td,{children:"Project Timezone"}),(0,t.jsxs)(n.td,{children:["Time zone in which integer date times are stored. The project timezone may be found in the project settings in the ",(0,t.jsx)(n.a,{href:"https://help.mixpanel.com/hc/en-us/articles/115004547203-Manage-Timezones-for-Projects-in-Mixpanel",children:"Mixpanel console"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Default"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/select_properties_by_default"})}),(0,t.jsx)(n.td,{children:"Select Properties By Default"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/start_date"})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"The date in the format YYYY-MM-DD. Any data before this date will not be replicated. If this option is not set, the connector will replicate data from up to one year ago by default."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/end_date"})}),(0,t.jsx)(n.td,{children:"End Date"}),(0,t.jsx)(n.td,{children:"The date in the format YYYY-MM-DD. Any data after this date will not be replicated. Left empty to always sync to most recent date."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Default"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/region"})}),(0,t.jsx)(n.td,{children:"Region"}),(0,t.jsx)(n.td,{children:"The region of mixpanel domain instance either US or EU."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Default"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/date_window_size"})}),(0,t.jsx)(n.td,{children:"Date slicing window"}),(0,t.jsx)(n.td,{children:"Defines window size in days, that used to slice through data. You can reduce it, if amount of data in each window is too big for your environment."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Default"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource of your MixPanel project from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mixpanel:dev\n        config:\n          credentials:\n            auth_type: ServiceAccount\n            secret: {secret}\n            username: {your_username}\n          project_id: 1234567\n          attribution_window: 5\n          project_timezone: US/Pacific\n          select_properties_by_default: true\n          start_date: 2017-01-25T00:00:00Z\n          end_date: 2019-01-25T00:00:00Z\n          region: US\n          date_window_size: 30\n    bindings:\n      - resource:\n          stream: annotations\n          syncMode: full_refresh\n        target: ${PREFIX}/annotations\n      {...}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);