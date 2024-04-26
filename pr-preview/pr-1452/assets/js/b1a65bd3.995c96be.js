"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1751],{16387:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=n(74848),o=n(28453);const s={},i="YouTube Analytics",c={id:"reference/Connectors/capture-connectors/youtube-analytics",title:"YouTube Analytics",description:"This connector captures data from YouTube Analytics into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/youtube-analytics.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/youtube-analytics",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/youtube-analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/youtube-analytics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Twilio",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/twilio"},next:{title:"Zendesk Chat",permalink:"/pr-preview/pr-1452/reference/Connectors/capture-connectors/zendesk-chat"}},l={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"youtube-analytics",children:"YouTube Analytics"}),"\n",(0,t.jsx)(r.p,{children:"This connector captures data from YouTube Analytics into Flow collections."}),"\n",(0,t.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(r.a,{href:"https://ghcr.io/estuary/source-youtube-analytics:dev",children:(0,t.jsx)(r.code,{children:"ghcr.io/estuary/source-youtube-analytics:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(r.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,t.jsxs)(r.p,{children:["You can find their documentation ",(0,t.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/youtube-analytics/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(r.p,{children:"The following data resources are supported through the YouTube Analytics APIs:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-annotations",children:"channel_annotations_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-user-activity",children:"channel_basic_a2"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-cards",children:"channel_cards_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-combined",children:"channel_combined_a2"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-viewer-demographics",children:"channel_demographics_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-device-type-and-operating-system",children:"channel_device_os_a2"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-end-screens",children:"channel_end_screens_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-playback-locations",children:"channel_playback_location_a2"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-province",children:"channel_province_a2"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-content-sharing",children:"channel_sharing_service_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-subtitles",children:"channel_subtitles_a2"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-traffic-sources",children:"channel_traffic_source_a2"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-user-activity",children:"playlist_basic_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-combined",children:"playlist_combined_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-device-type-and-operating-system",children:"playlist_device_os_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-playback-locations",children:"playlist_playback_location_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-province",children:"playlist_province_a1"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-traffic-sources",children:"playlist_traffic_source_a1"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-1452/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the YouTube Analytics source connector."]}),"\n",(0,t.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/client_id"})})}),(0,t.jsx)(r.td,{children:"Client ID"}),(0,t.jsx)(r.td,{children:"Your Client ID"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/client_secret"})})}),(0,t.jsx)(r.td,{children:"Secret Key"}),(0,t.jsx)(r.td,{children:"Your Client Secret"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/refresh_token"})})}),(0,t.jsx)(r.td,{children:"Refresh Token"}),(0,t.jsx)(r.td,{children:"Your Refresh Token"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/stream"})})}),(0,t.jsx)(r.td,{children:"Stream"}),(0,t.jsx)(r.td,{children:"Resource of your YouTube Analytics project from which collections are captured."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/syncMode"})})}),(0,t.jsx)(r.td,{children:"Sync Mode"}),(0,t.jsx)(r.td,{children:"Connection method."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-youtube-analytics:dev\n        config:\n          credentials:\n            auth_type: OAuth\n    bindings:\n      - resource:\n          stream: channel_annotations_a1\n          syncMode: incremental\n        target: ${PREFIX}/channel_annotations_a1\n      {...}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);