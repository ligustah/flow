"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1482],{51647:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(74848),t=n(28453);const i={sidebar_position:3},c="Instagram",o={id:"reference/Connectors/capture-connectors/instagram",title:"Instagram",description:"This connector captures data from Instagram into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/instagram.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/instagram",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/instagram",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/instagram.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hubspot",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/hubspot"},next:{title:"Intercom",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/intercom"}},a={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"instagram",children:"Instagram"}),"\n",(0,s.jsx)(r.p,{children:"This connector captures data from Instagram into Flow collections."}),"\n",(0,s.jsxs)(r.p,{children:["This ",(0,s.jsx)(r.a,{href:"https://help.instagram.com/570895513091465",children:"Instagram article"})," talks about how to connect a Facebook page to your Instagram business account."]}),"\n",(0,s.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(r.a,{href:"https://ghcr.io/estuary/source-instagram:dev",children:(0,s.jsx)(r.code,{children:"ghcr.io/estuary/source-instagram:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(r.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,s.jsxs)(r.p,{children:["You can find their documentation ",(0,s.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/instagram/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsx)(r.p,{children:"The following data resources are supported through the Instagram APIs:"}),"\n",(0,s.jsxs)(r.p,{children:["For more information, see the ",(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/",children:"Instagram Graph API"})," and ",(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/guides/insights/",children:"Instagram Insights API documentation"}),"."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user",children:"User"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/insights",children:"User Insights"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/media",children:"Media"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/reference/ig-media/insights",children:"Media Insights"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/stories/",children:"Stories"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/reference/ig-media/insights",children:"Story Insights"})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com",children:"Meta for Developers account"})}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://www.facebook.com/business/help/898752960195806",children:"Instagram business account"})," to your Facebook page"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-api/",children:"Instagram Graph API"})," to your Facebook app"]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developers.facebook.com/docs/instagram-basic-display-api/reference",children:"Facebook OAuth Reference"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.facebook.com/business/help/1492627900875762",children:"Facebook ad account ID number"})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(r.a,{href:"/pr-preview/pr-1396/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Instagram source connector."]}),"\n",(0,s.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/client_id"})}),(0,s.jsx)(r.td,{children:"Client ID"}),(0,s.jsx)(r.td,{children:"The Client ID of your Instagram developer application."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/client_secret"})}),(0,s.jsx)(r.td,{children:"Client Secret"}),(0,s.jsx)(r.td,{children:"The Client Secret of your Instagram developer application."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/access_token"})}),(0,s.jsx)(r.td,{children:"Access Token"}),(0,s.jsx)(r.td,{children:"The value of the access token generated with instagram_basic, instagram_manage_insights, pages_show_list, pages_read_engagement, Instagram Public Content Access permissions."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/start_date"})}),(0,s.jsx)(r.td,{children:"Replication Start Date"}),(0,s.jsx)(r.td,{children:"UTC date and time in the format YYYY-MM-DDT00:00:00Z. Any data before this date will not be replicated."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/stream"})})}),(0,s.jsx)(r.td,{children:"Stream"}),(0,s.jsx)(r.td,{children:"Resource of your Instagram project from which collections are captured."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/syncMode"})})}),(0,s.jsx)(r.td,{children:"Sync Mode"}),(0,s.jsx)(r.td,{children:"Connection method."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-instagram:dev\n        config:\n          client_id: <your client ID>\n          client_secret: <secret>\n          access_token: <secret>\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: stories\n          syncMode: full_refresh\n        target: ${PREFIX}/stories\n      {...}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);