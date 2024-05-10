"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[50],{81496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(74848),s=t(28453);const i={},o="Google Analytics 4",c={id:"reference/Connectors/capture-connectors/google-analytics-4",title:"Google Analytics 4",description:"This connector captures data from Google Analytics 4 properties into Flow collections via the",source:"@site/docs/reference/Connectors/capture-connectors/google-analytics-4.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-analytics-4",permalink:"/pr-preview/pr-1471/reference/Connectors/capture-connectors/google-analytics-4",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-analytics-4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Analytics UA",permalink:"/pr-preview/pr-1471/reference/Connectors/capture-connectors/google-analytics"},next:{title:"Google Drive",permalink:"/pr-preview/pr-1471/reference/Connectors/capture-connectors/google-drive"}},l={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Authenticating manually with a service account key",id:"authenticating-manually-with-a-service-account-key",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Custom reports",id:"custom-reports",level:3},{value:"Sample",id:"sample",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Data sampling",id:"data-sampling",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"google-analytics-4",children:"Google Analytics 4"}),"\n",(0,r.jsxs)(n.p,{children:["This connector captures data from Google Analytics 4 properties into Flow collections via the\n",(0,r.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/reporting/data/v1",children:"Google Analytics Data API"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"This connector supports Google Analytics 4, not Universal Analytics."}),(0,r.jsxs)(n.p,{children:["Universal Analytics is supported by a ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1471/reference/Connectors/capture-connectors/google-analytics",children:"separate connector"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["It\u2019s available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-google-analytics-data-api:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-google-analytics-data-api:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/google-analytics-v4/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Daily active users"}),"\n",(0,r.jsx)(n.li,{children:"Devices"}),"\n",(0,r.jsx)(n.li,{children:"Four-weekly active users"}),"\n",(0,r.jsx)(n.li,{children:"Locations"}),"\n",(0,r.jsx)(n.li,{children:"Pages"}),"\n",(0,r.jsx)(n.li,{children:"Traffic sources"}),"\n",(0,r.jsx)(n.li,{children:"Website overview"}),"\n",(0,r.jsx)(n.li,{children:"Weekly active users"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Each is ",(0,r.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport",children:"fetched as a report"})," and mapped to a Flow collection through a separate binding."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also capture ",(0,r.jsx)(n.a,{href:"#custom-reports",children:"custom reports"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The Google Analytics Data API ",(0,r.jsx)(n.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en",children:"enabled"})," on your Google ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/projects",children:"project"})," with which your Analytics property is associated.\n(Unless you actively develop with Google Cloud, you'll likely just have one option)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Your Google Analytics 4 ",(0,r.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/reporting/data/v1/property-id#what_is_my_property_id",children:"property ID"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"There are two ways to authenticate this connector with Google:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Directly with Google using OAuth"})," through the Flow web app. You'll only need your username and password."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Manually"}),", by generating a service account key. Using this method, there are more prerequisites."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"authenticating-manually-with-a-service-account-key",children:"Authenticating manually with a service account key"}),"\n",(0,r.jsx)(n.p,{children:"In addition to the above prerequisites, you'll need a Google service account with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A JSON key generated."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Access to the Google Analytics 4 property."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To set this up:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount",children:"service account and generate a JSON key"}),".\nDuring setup, grant the account the ",(0,r.jsx)(n.strong,{children:"Viewer"})," role on your project.\nYou'll copy the contents of the downloaded key file into the Service Account Credentials parameter when you configure the connector."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://support.google.com/analytics/answer/9305788#zippy=%2Cin-this-article",children:"Add the service account"})," to the Google Analytics property."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Grant the account ",(0,r.jsx)(n.strong,{children:"Viewer"})," permissions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing a specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1471/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Google Analytics 4 source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsx)(n.p,{children:"The following properties reflect the manual authentication method. If you authenticate directly with Google in the Flow web app, some of these properties aren't required."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/credentials"})}),(0,r.jsx)(n.td,{children:"Credentials"}),(0,r.jsx)(n.td,{children:"Credentials for the service"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/credentials/auth_type"})}),(0,r.jsx)(n.td,{children:"Authentication Method"}),(0,r.jsxs)(n.td,{children:["Set to ",(0,r.jsx)(n.code,{children:"Service"})," for manual authentication."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/credentials/credentials_json"})}),(0,r.jsx)(n.td,{children:"Service Account Credentials"}),(0,r.jsx)(n.td,{children:"Contents of the JSON key file generated during setup."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/custom_reports"})}),(0,r.jsx)(n.td,{children:"Custom Reports (Optional)"}),(0,r.jsxs)(n.td,{children:["A JSON array describing the custom reports you want to sync from Google Analytics. ",(0,r.jsx)(n.a,{href:"#custom-reports",children:"Learn more about custom reports"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/date_ranges_start_date"})})}),(0,r.jsx)(n.td,{children:"Date Range Start Date"}),(0,r.jsxs)(n.td,{children:["The start date. One of the values ",(0,r.jsx)(n.code,{children:"<N>daysago"}),", ",(0,r.jsx)(n.code,{children:"yesterday"}),", ",(0,r.jsx)(n.code,{children:"today"})," or in the format ",(0,r.jsx)(n.code,{children:"YYYY-MM-DD"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/property_id"})})}),(0,r.jsx)(n.td,{children:"Property ID"}),(0,r.jsx)(n.td,{children:"A Google Analytics GA4 property identifier whose events are tracked."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/window_in_days"})}),(0,r.jsx)(n.td,{children:"Data request time increment in days (Optional)"}),(0,r.jsxs)(n.td,{children:["The time increment used by the connector when requesting data from the Google Analytics API. We recommend setting this to 1 unless you have a hard requirement to make the sync faster at the expense of accuracy. The minimum allowed value for this field is 1, and the maximum is 364. See ",(0,r.jsx)(n.a,{href:"#data-sampling",children:"data sampling"})," for details."]}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Data resource from Google Analytics."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsxs)(n.td,{children:["Connection method. Always set to ",(0,r.jsx)(n.code,{children:"incremental"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"custom-reports",children:"Custom reports"}),"\n",(0,r.jsxs)(n.p,{children:["You can include data beyond the ",(0,r.jsx)(n.a,{href:"#supported-data-resources",children:"default data resources"})," with Custom Reports.\nThese replicate the functionality of ",(0,r.jsx)(n.a,{href:"https://support.google.com/analytics/answer/10445879?hl=en",children:"Custom Reports"})," in the Google Analytics Web console."]}),"\n",(0,r.jsx)(n.p,{children:"Fill out the Custom Reports property with a JSON array as a string with the following schema:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[{"name": "<report-name>", "dimensions": ["<dimension-name>", ...], "metrics": ["<metric-name>", ...]}]\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://support.google.com/analytics/answer/9304353#zippy=%2Cin-this-article",children:"Segments"})," and ",(0,r.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/FilterExpression#Filter",children:"filters"})," are also supported.\nWhen using segments, you must include the ",(0,r.jsx)(n.code,{children:"ga:segment"})," dimension:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[{"name": "<report-name>", "dimensions": ["ga:segment", "<other-dimension-name>", ...], "metrics": ["<metric-name>", ...], "segments": "<segment-id>", "filter": "<filter-expression>"}]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.p,{children:"This sample reflects the manual authentication method."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-analytics-data-api:dev\n          config:\n            credentials:\n              auth_type: Service\n              credentials_json: <secret>\n            date_ranges_start_date: 2023-01-01\n            property_id: 000000000\n            window_in_days: 1\n\n      bindings:\n        - resource:\n            stream: daily_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: devices\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: four_weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: locations\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: pages\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: traffic_sources\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: website_overview\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"performance-considerations",children:"Performance considerations"}),"\n",(0,r.jsx)(n.h3,{id:"data-sampling",children:"Data sampling"}),"\n",(0,r.jsxs)(n.p,{children:["The Google Analytics Data API enforces compute thresholds for ad-hoc queries and reports.\nIf a threshold is exceeded, the API will apply sampling to limit the number of sessions analyzed for the specified time range.\nThese thresholds can be found ",(0,r.jsx)(n.a,{href:"https://support.google.com/analytics/answer/2637192?hl=en&ref_topic=2601030&visit_id=637868645346124317-2833523666&rd=1#thresholds&zippy=%2Cin-this-article",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If your account is on the Analytics 360 tier, you're less likely to run into these limitations.\nFor Analytics Standard accounts, you can avoid sampling by keeping the ",(0,r.jsx)(n.code,{children:"window_in_days"})," parameter set to its default value, ",(0,r.jsx)(n.code,{children:"1"}),".\nThis makes it less likely that you will exceed the threshold."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);