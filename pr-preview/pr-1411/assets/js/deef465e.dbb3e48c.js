"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9023],{32443:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=o(74848),r=o(28453);const i={sidebar_position:1},t="Google Ads",d={id:"reference/Connectors/capture-connectors/google-ads",title:"Google Ads",description:"This connector captures data from resources in one or more Google Ads accounts into Flow collections via the Google Ads API.",source:"@site/docs/reference/Connectors/capture-connectors/google-ads.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-ads",permalink:"/pr-preview/pr-1411/reference/Connectors/capture-connectors/google-ads",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-ads.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/pr-preview/pr-1411/reference/Connectors/capture-connectors/gitlab"},next:{title:"Google Analytics 4",permalink:"/pr-preview/pr-1411/reference/Connectors/capture-connectors/google-analytics-4"}},c={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Customer Id &amp; Login Customer Id",id:"customer-id--login-customer-id",level:3},{value:"Multiple Customer Ids",id:"multiple-customer-ids",level:4},{value:"Using OAuth2 to authenticate with Google in the Flow web app",id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Custom queries",id:"custom-queries",level:2},{value:"Stream Limitations",id:"stream-limitations",level:2},{value:"ClickView",id:"clickview",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"google-ads",children:"Google Ads"}),"\n",(0,s.jsxs)(n.p,{children:["This connector captures data from ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/v11/overview",children:"resources"})," in one or more Google Ads accounts into Flow collections via the Google Ads API."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/source-google-ads:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/source-google-ads:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,s.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/google-ads/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsxs)(n.p,{children:["The following data resources are supported.\nResources ending in ",(0,s.jsx)(n.code,{children:"_report"})," represent legacy resources from the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/migration",children:"Google Adwords API"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/ad_group_ad",children:"ad_group_ads"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/ad_group_ad_label",children:"ad_group_ad_label"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/ad_group",children:"ad_groups"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/ad_group_label",children:"ad_group_label"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/v9/campaign",children:"campaigns"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/campaign_label",children:"campaign_labels"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/reference/rpc/latest/ClickView",children:"click_view"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/customer",children:"customer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/geographic_view",children:"geographic_view"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/keyword_view",children:"keyword_view"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/latest/user_location_view",children:"user_location_view"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/migration/mapping#account_performance",children:"account_performance_report"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/migration/mapping#ad_performance",children:"ad_performance_report"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/migration/mapping#display_keyword_performance",children:"display_keyword_performance_report"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/migration/mapping#display_topics_performance",children:"display_topics_performance_report"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/migration/mapping#shopping_performance",children:"shopping_performance_report"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsxs)(n.p,{children:["You may also generate custom resources using ",(0,s.jsx)(n.a,{href:"#custom-queries",children:"GAQL queries"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"There are two ways to authenticate with Google when capturing data into Flow: using OAuth2, and manually, using tokens and secret credentials.\nTheir prerequisites differ."}),"\n",(0,s.jsx)(n.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe manual method is the only supported method using the command line."}),"\n",(0,s.jsx)(n.h3,{id:"customer-id--login-customer-id",children:"Customer Id & Login Customer Id"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Login Customer Id"})," setting refers to your MCC Google Ads account Id.\nOne can easily find this number by accessing their Google Ads Dashboard and look to the far right corner of their screen."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/estuary/flow/assets/14100959/f20aeeef-eeac-432f-b547-11477e31661d",alt:"Screenshot from 2024-02-19 05-10-29"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, my ",(0,s.jsx)(n.code,{children:"login_customer_id"})," would be 1234567890."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Customer Id"})," setting refers to your Client Accounts under a MCC account.\nOne can easily find this number by accessing their Google Ads Dashboard and look to the far left corner of their screen,\nafter selecting a client account."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/estuary/flow/assets/14100959/4f171fa7-9c82-4f24-8a1d-8aacd382fb28",alt:"Screenshot from 2024-02-19 05-10-16"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, my ",(0,s.jsx)(n.code,{children:"customer_id"})," would be 9876543210."]}),"\n",(0,s.jsx)(n.h4,{id:"multiple-customer-ids",children:"Multiple Customer Ids"}),"\n",(0,s.jsxs)(n.p,{children:["This Source allows for multiple Customer Ids to be selected.\nTo allow this, simply add your ",(0,s.jsx)(n.code,{children:"customer_id"})," followed by a comma."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.p,{children:"Customer1 = 1234567890\nCustomer2 = 9876543210"}),"\n",(0,s.jsx)(n.p,{children:"customer_id = 1234567890,9876543210"}),"\n",(0,s.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Google in the Flow web app"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"One or more Google Ads accounts."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Note each account's ",(0,s.jsx)(n.a,{href:"https://support.google.com/google-ads/answer/1704344",children:"customer ID"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A Google Account that has ",(0,s.jsx)(n.a,{href:"https://support.google.com/google-ads/answer/6372672?hl=en",children:"access"})," to the Google Ads account(s)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This account may be a ",(0,s.jsx)(n.a,{href:"https://ads.google.com/home/tools/manager-accounts/",children:(0,s.jsx)(n.strong,{children:"manager account"})}),".\nIf so, ensure that it is ",(0,s.jsx)(n.a,{href:"https://support.google.com/google-ads/answer/7459601",children:"linked to each Google Ads account"})," and make note of its ",(0,s.jsx)(n.a,{href:"https://support.google.com/google-ads/answer/29198?hl=en",children:"customer ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configuring-the-connector-specification-manually",children:"Configuring the connector specification manually"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"One or more Google Ads accounts."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Note each account's ",(0,s.jsx)(n.a,{href:"https://support.google.com/google-ads/answer/1704344?hl=en",children:"customer ID"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A Google Ads ",(0,s.jsx)(n.a,{href:"https://ads.google.com/home/tools/manager-accounts/",children:(0,s.jsx)(n.strong,{children:"manager account"})})," that has been ",(0,s.jsx)(n.a,{href:"https://support.google.com/google-ads/answer/7459601",children:"linked to each Google Ads account"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A Google Ads ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/first-call/dev-token?hl=en",children:"developer token"}),". Your Google Ads manager account must be configured prior to applying for a developer token."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Developer token applications are independently reviewed by Google and may take one or more days to be approved.\nBe sure to carefully review Google's requirements before submitting an application."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/first-call/refresh-token?hl=en",children:"refresh token"}),", which fetches a new developer tokens for you as the previous token expires."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A generated ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/oauth/cloud-project#create_a_client_id_and_client_secret",children:"Client ID and Client Secret"}),", used for authentication."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Google Ads source connector."]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,s.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-google-in-the-flow-web-app",children:"OAuth2"}),",\nso many of these properties aren't required."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/conversion_window_days"})}),(0,s.jsx)(n.td,{children:"Conversion Window (Optional)"}),(0,s.jsxs)(n.td,{children:["A conversion window is the period of time after an ad interaction (such as an ad click or video view) during which a conversion, such as a purchase, is recorded in Google Ads. For more information, see ",(0,s.jsx)(n.a,{href:"https://support.google.com/google-ads/answer/3123169?hl=en",children:"Google's docs"}),"."]}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"14"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials"})})}),(0,s.jsx)(n.td,{children:"Google Credentials"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/client_id"})})}),(0,s.jsx)(n.td,{children:"Client ID"}),(0,s.jsx)(n.td,{children:"The Client ID of your Google Ads developer application."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/client_secret"})})}),(0,s.jsx)(n.td,{children:"Client Secret"}),(0,s.jsx)(n.td,{children:"The Client Secret of your Google Ads developer application."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/developer_token"})})}),(0,s.jsx)(n.td,{children:"Developer Token"}),(0,s.jsx)(n.td,{children:"Developer token granted by Google to use their APIs."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/refresh_token"})})}),(0,s.jsx)(n.td,{children:"Refresh Token"}),(0,s.jsx)(n.td,{children:"The token for obtaining a new access token."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/custom_queries"})}),(0,s.jsx)(n.td,{children:"Custom GAQL Queries (Optional)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"/custom_queries/-/query"})})}),(0,s.jsx)(n.td,{children:"Custom Query"}),(0,s.jsxs)(n.td,{children:["A custom defined GAQL query for building the report. Should not contain segments.date expression. See Google's ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/v11/overview_query_builder",children:"query builder"})," for more information."]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"/custom_queries/-/table_name"})})}),(0,s.jsx)(n.td,{children:"Destination Table Name"}),(0,s.jsx)(n.td,{children:"The table name in your destination database for chosen query."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/customer_id"})})}),(0,s.jsx)(n.td,{children:"Customer ID(s)"}),(0,s.jsx)(n.td,{children:"Comma separated list of (client) customer IDs. Each customer ID must be specified as a 10-digit number without dashes. More instruction on how to find this value in our docs.  Metrics streams like AdGroupAdReport cannot be requested for a manager account."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/end_date"})}),(0,s.jsx)(n.td,{children:"End Date (Optional)"}),(0,s.jsx)(n.td,{children:"UTC date in the format 2017-01-25. Any data after this date will not be replicated."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/login_customer_id"})}),(0,s.jsx)(n.td,{children:"Login Customer ID for Managed Accounts (Optional)"}),(0,s.jsx)(n.td,{children:"If your access to the customer account is through a manager account, this field is required and must be set to the customer ID of the manager account (10-digit number without dashes)."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/start_date"})})}),(0,s.jsx)(n.td,{children:"Start Date"}),(0,s.jsx)(n.td,{children:"UTC date in the format 2017-01-25. Any data before this date will not be replicated."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/stream"})})}),(0,s.jsx)(n.td,{children:"Stream"}),(0,s.jsx)(n.td,{children:"Google Ad resource from which a collection is captured."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/syncMode"})})}),(0,s.jsx)(n.td,{children:"Sync Mode"}),(0,s.jsx)(n.td,{children:"Connection method."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-ads:dev\n        config:\n          conversion_window_days: 7\n          credentials:\n            client_id: {secret_client_ID}\n            client_secret: {secret_secret}\n            developer_token: {access_token}\n            refresh_token: {refresh_token}\n          customer_id: 0123456789, 1234567890\n          login_customer_id: 0987654321\n          end_date: 2022-01-01\n          start_date: 2020-01-01\n          custom_queries:\n            - query:\n                SELECT\n                  campaign.id,\n                  campaign.name,\n                  campaign.status\n                FROM campaign\n                ORDER BY campaign.id\n              table_name: campaigns_custom\n    bindings:\n      - resource:\n          stream: campaign\n          syncMode: incremental\n        target: ${PREFIX}/campaign\n      {...}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"custom-queries",children:"Custom queries"}),"\n",(0,s.jsxs)(n.p,{children:["You can create custom resources using Google Analytics Query Language (GAQL) queries.\nEach generated resource will be mapped to a Flow collection.\nFor help generating a valid query, see ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/v11/overview_query_builder",children:"Google's query builder documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If a query fails to validate against a given Google Ads account, it will be skipped."}),"\n",(0,s.jsx)(n.h2,{id:"stream-limitations",children:"Stream Limitations"}),"\n",(0,s.jsx)(n.h3,{id:"clickview",children:"ClickView"}),"\n",(0,s.jsx)(n.p,{children:"Due to Google Ads API limitations, ClickView stream queries are executed with a time range limited to one day.\nAlso, data can only be requested for periods 90 days before the time of the request."}),"\n",(0,s.jsx)(n.p,{children:"In pratical terms, this means that you can only search ClickView data limited to 3 months ago, anything before this is not returned."}),"\n",(0,s.jsxs)(n.p,{children:["For more information, check ",(0,s.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/fields/v15/click_view",children:"Google's Ads API documentation"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(96540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);