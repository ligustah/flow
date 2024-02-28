"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[722],{55874:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(74848),i=s(28453);const r={sidebar_position:1},c="Facebook Marketing",d={id:"reference/Connectors/capture-connectors/facebook-marketing",title:"Facebook Marketing",description:"This connector captures data from the Facebook Marketing API into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/facebook-marketing.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/facebook-marketing",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/facebook-marketing",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/facebook-marketing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Exchange Rates API",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/exchange-rates"},next:{title:"Freshdesk",permalink:"/pr-preview/pr-1396/reference/Connectors/capture-connectors/freshdesk"}},o={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Signing in with OAuth2",id:"signing-in-with-oauth2",level:3},{value:"Configuring manually with an access token",id:"configuring-manually-with-an-access-token",level:3},{value:"Setup",id:"setup",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"facebook-marketing",children:"Facebook Marketing"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from the Facebook Marketing API into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-facebook-marketing:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-facebook-marketing:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/facebook-marketing/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/reference/adgroup",children:"Ads"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/reference/ad-activity",children:"Ad activities"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/reference/ad-creative",children:"Ad creatives"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/reference/adgroup/insights/",children:"Ad insights"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/reference/business/adaccount/",children:"Business ad accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group",children:"Campaigns"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/reference/ad-image",children:"Images"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/graph-api/reference/video/",children:"Videos"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By default, each resource associated with your Facebook Business account is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to authenticate with Facebook when capturing data into Flow: signing in with OAuth2, and manually supplying an access token.\nTheir prerequisites differ."}),"\n",(0,t.jsx)(n.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe manual method is the only supported method using the command line."}),"\n",(0,t.jsx)(n.h3,{id:"signing-in-with-oauth2",children:"Signing in with OAuth2"}),"\n",(0,t.jsxs)(n.p,{children:["To use OAuth2 in the Flow web app, you'll need A Facebook Business account and its ",(0,t.jsx)(n.a,{href:"https://www.facebook.com/business/help/1492627900875762",children:"Ad Account ID"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configuring-manually-with-an-access-token",children:"Configuring manually with an access token"}),"\n",(0,t.jsx)(n.p,{children:"To configure manually with an access token, you'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Facebook Business account, and its Ad Account ID."}),"\n",(0,t.jsxs)(n.li,{children:["A Facebook app with:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/products/marketing-api/",children:"Marketing API"})," enabled."]}),"\n",(0,t.jsx)(n.li,{children:"A Marketing API access token generated."}),"\n",(0,t.jsxs)(n.li,{children:["Access upgrade from Standard Access (the default) to Advanced Access. This allows a sufficient ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/overview/authorization#limits",children:"rate limit"})," to support the connector."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to meet these requirements."}),"\n",(0,t.jsx)(n.h4,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Find your Facebook ",(0,t.jsx)(n.a,{href:"https://www.facebook.com/business/help/1492627900875762",children:"Ad Account ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Meta for Developers, ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app/",children:"create a new app"})," of the type Business."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On your new app's dashboard, click the button to set up the Marketing API."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the Marketing API Tools tab, generate a Marketing API access token with all available permissions (",(0,t.jsx)(n.code,{children:"ads_management"}),", ",(0,t.jsx)(n.code,{children:"ads_read"}),", ",(0,t.jsx)(n.code,{children:"read_insights"}),", and ",(0,t.jsx)(n.code,{children:"business_management"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/overview/authorization/#access-levels",children:"Request Advanced Access"})," for your app. Specifically request the Advanced Access to the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The feature ",(0,t.jsx)(n.code,{children:"Ads Management Standard Access"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The permission ",(0,t.jsx)(n.code,{children:"ads_read"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The permission ",(0,t.jsx)(n.code,{children:"ads_management"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once your request is approved, you'll have a high enough rate limit to proceed with running the connector."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1396/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Facebook Marketing source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsx)(n.p,{children:"By default, this connector captures all data associated with your Business Ad Account."}),"\n",(0,t.jsxs)(n.p,{children:["You can refine the data you capture from Facebook Marketing using the optional Custom Insights configuration.\nYou're able to specify certain fields to capture and apply data breakdowns.\n",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/insights/breakdowns",children:"Breakdowns"})," are a feature of the Facebook Marketing Insights API that allows you to group API output by common metrics.\n",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/marketing-api/insights/breakdowns#actionsbreakdown",children:"Action breakdowns"}),"\nare a subset of breakdowns that must be specified separately."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/access_token"})})}),(0,t.jsx)(n.td,{children:"Access Token"}),(0,t.jsx)(n.td,{children:"The value of the access token generated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/account_id"})})}),(0,t.jsx)(n.td,{children:"Account ID"}),(0,t.jsx)(n.td,{children:"The Facebook Ad account ID to use when pulling data from the Facebook Marketing API."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Required for ",(0,t.jsx)(n.a,{href:"#configuring-manually-with-an-access-token",children:"manual authentication"})," only"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/custom_insights"})}),(0,t.jsx)(n.td,{children:"Custom Insights"}),(0,t.jsx)(n.td,{children:"A list which contains insights entries. Each entry must have a name and can contains fields, breakdowns or action_breakdowns"}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/action_breakdowns"})})}),(0,t.jsx)(n.td,{children:"Action Breakdowns"}),(0,t.jsx)(n.td,{children:"A list of chosen action_breakdowns to apply"}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/action_breakdowns/-"})})}),(0,t.jsx)(n.td,{children:"ValidActionBreakdowns"}),(0,t.jsx)(n.td,{children:"Generic enumeration. Derive from this class to define new enumerations."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/breakdowns"})})}),(0,t.jsx)(n.td,{children:"Breakdowns"}),(0,t.jsx)(n.td,{children:"A list of chosen breakdowns to apply"}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/breakdowns/-"})})}),(0,t.jsx)(n.td,{children:"ValidBreakdowns"}),(0,t.jsx)(n.td,{children:"Generic enumeration. Derive from this class to define new enumerations."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/end_date"})})}),(0,t.jsx)(n.td,{children:"End Date"}),(0,t.jsx)(n.td,{children:"The date until which you'd like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z. All data generated between the start date and this date will be replicated. Not setting this option will result in always syncing the latest data."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/fields"})})}),(0,t.jsx)(n.td,{children:"Fields"}),(0,t.jsx)(n.td,{children:"A list of chosen fields to capture"}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/fields/-"})})}),(0,t.jsx)(n.td,{children:"ValidEnums"}),(0,t.jsx)(n.td,{children:"Generic enumeration. Derive from this class to define new enumerations."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/name"})})}),(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"The name of the insight"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/start_date"})})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"The date from which you'd like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/custom_insights/-/time_increment"})})}),(0,t.jsx)(n.td,{children:"Time Increment"}),(0,t.jsx)(n.td,{children:"Time window in days by which to aggregate statistics. The sync will be chunked into N day intervals, where N is the number of days you specified. For example, if you set this value to 7, then all statistics will be reported as 7-day aggregates by starting from the start_date. If the start and end dates are October 1st and October 30th, then the connector will output 5 records: 01 - 06, 07 - 13, 14 - 20, 21 - 27, and 28 - 30 (3 days only)."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/end_date"})}),(0,t.jsx)(n.td,{children:"End Date"}),(0,t.jsx)(n.td,{children:"The date until which you'd like to capture data, in the format YYYY-MM-DDT00:00:00Z. All data generated between start_date and this date will be replicated. Not setting this option will result in always syncing the latest data."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/fetch_thumbnail_images"})}),(0,t.jsx)(n.td,{children:"Fetch Thumbnail Images"}),(0,t.jsx)(n.td,{children:"In each Ad Creative, fetch the thumbnail_url and store the result in thumbnail_data_url"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/include_deleted"})}),(0,t.jsx)(n.td,{children:"Include Deleted"}),(0,t.jsx)(n.td,{children:"Include data from deleted Campaigns, Ads, and AdSets"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/insights_lookback_window"})}),(0,t.jsx)(n.td,{children:"Insights Lookback Window"}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.facebook.com/business/help/2198119873776795",children:"attribution window"})]}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"28"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/max_batch_size"})}),(0,t.jsx)(n.td,{children:"Maximum size of Batched Requests"}),(0,t.jsx)(n.td,{children:"Maximum batch size used when sending batch requests to Facebook API. Most users do not need to set this field unless they specifically need to tune the connector to address specific issues or use cases."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"50"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/page_size"})}),(0,t.jsx)(n.td,{children:"Page Size of Requests"}),(0,t.jsx)(n.td,{children:"Page size used when sending requests to Facebook API to specify number of records per page when response has pagination. Most users do not need to set this field unless they specifically need to tune the connector to address specific issues or use cases."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"25"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/start_date"})})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"The date from which you'd like to begin capturing data, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource of your Facebook Marketing account from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-facebook-marketing:dev\n        config:\n            access_token: <secret>\n            account_id: 000000000000000\n            start_date: 2022-03-01T00:00:00Z\n            custom_insights:\n              - name: my-custom-insight\n                 fields: [ad_id, account_currency]\n                 breakdowns: [device_platform]\n                 action_breakdowns: [action_type]\n                 start_date: 2022-03-01T00:00:00Z\n    bindings:\n      - resource:\n          stream: ad_account\n          syncMode: incremental\n        target: ${PREFIX}/ad_account\n      - resource:\n          stream: ad_sets\n          syncMode: incremental\n        target: ${PREFIX}/ad_sets\n      - resource:\n          stream: ads_insights\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights\n      - resource:\n          stream: ads_insights_age_and_gender\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_age_and_gender\n      - resource:\n          stream: ads_insights_country\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_country\n      - resource:\n          stream: ads_insights_region\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_region\n      - resource:\n          stream: ads_insights_dma\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_dma\n      - resource:\n          stream: ads_insights_platform_and_device\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_platform_and_device\n      - resource:\n          stream: ads_insights_action_type\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_action_type\n      - resource:\n          stream: campaigns\n          syncMode: incremental\n        target: ${PREFIX}/campaigns\n      - resource:\n          stream: activities\n          syncMode: incremental\n        target: ${PREFIX}/activities\n      - resource:\n          stream: ads\n          syncMode: incremental\n        target: ${PREFIX}/ads\n      - resource:\n          stream: ad_creatives\n          syncMode: full_refresh\n        target: ${PREFIX}/ad_creatives\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1396/concepts/captures#pull-captures",children:"Learn more about capture definitions."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);