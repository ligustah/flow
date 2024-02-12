"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),g=r,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},l="Google Ads",i={unversionedId:"reference/Connectors/capture-connectors/google-ads",id:"reference/Connectors/capture-connectors/google-ads",title:"Google Ads",description:"This connector captures data from resources in one or more Google Ads accounts into Flow collections via the Google Ads API.",source:"@site/docs/reference/Connectors/capture-connectors/google-ads.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-ads",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/google-ads",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-ads.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/gitlab"},next:{title:"Google Analytics 4",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/google-analytics-4"}},p={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Google in the Flow web app",id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Custom queries",id:"custom-queries",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-ads"},"Google Ads"),(0,r.kt)("p",null,"This connector captures data from ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/fields/v11/overview"},"resources")," in one or more Google Ads accounts into Flow collections via the Google Ads API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-google-ads:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-google-ads:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/google-ads/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"The following data resources are supported.\nResources ending in ",(0,r.kt)("inlineCode",{parentName:"p"},"_report")," represent legacy resources from the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/docs/migration"},"Google Adwords API"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/ad_group_ad"},"ad_group_ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/ad_group_ad_label"},"ad_group_ad_label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/ad_group"},"ad_groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/ad_group_label"},"ad_group_label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v9/campaign"},"campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/campaign_label"},"campaign_labels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/reference/rpc/latest/ClickView"},"click_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/customer"},"customer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/geographic_view"},"geographic_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/keyword_view"},"keyword_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/latest/user_location_view"},"user_location_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/migration/mapping#account_performance"},"account_performance_report")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/migration/mapping#ad_performance"},"ad_performance_report")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/migration/mapping#display_keyword_performance"},"display_keyword_performance_report")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/migration/mapping#display_topics_performance"},"display_topics_performance_report")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/migration/mapping#shopping_performance"},"shopping_performance_report"))),(0,r.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,r.kt)("p",null,"You may also generate custom resources using ",(0,r.kt)("a",{parentName:"p",href:"#custom-queries"},"GAQL queries"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"There are two ways to authenticate with Google when capturing data into Flow: using OAuth2, and manually, using tokens and secret credentials.\nTheir prerequisites differ."),(0,r.kt)("p",null,"OAuth is recommended for simplicity in the Flow web app;\nthe manual method is the only supported method using the command line."),(0,r.kt)("h3",{id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app"},"Using OAuth2 to authenticate with Google in the Flow web app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One or more Google Ads accounts."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note each account's ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/1704344"},"customer ID")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google Account that has ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/google-ads/answer/6372672?hl=en"},"access")," to the Google Ads account(s)."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This account may be a ",(0,r.kt)("a",{parentName:"li",href:"https://ads.google.com/home/tools/manager-accounts/"},(0,r.kt)("strong",{parentName:"a"},"manager account")),".\nIf so, ensure that it is ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/7459601"},"linked to each Google Ads account")," and make note of its ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/29198?hl=en"},"customer ID"),".")))),(0,r.kt)("h3",{id:"configuring-the-connector-specification-manually"},"Configuring the connector specification manually"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One or more Google Ads accounts."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note each account's ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/1704344?hl=en"},"customer ID")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google Ads ",(0,r.kt)("a",{parentName:"p",href:"https://ads.google.com/home/tools/manager-accounts/"},(0,r.kt)("strong",{parentName:"a"},"manager account"))," that has been ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/google-ads/answer/7459601"},"linked to each Google Ads account"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google Ads ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/docs/first-call/dev-token?hl=en"},"developer token"),". Your Google Ads manager account must be configured prior to applying for a developer token."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Developer token applications are independently reviewed by Google and may take one or more days to be approved.\nBe sure to carefully review Google's requirements before submitting an application.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/docs/first-call/refresh-token?hl=en"},"refresh token"),", which fetches a new developer tokens for you as the previous token expires.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A generated ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/docs/oauth/cloud-project#create_a_client_id_and_client_secret"},"Client ID and Client Secret"),", used for authentication."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1373/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Google Ads source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,r.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-google-in-the-flow-web-app"},"OAuth2"),",\nso many of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/conversion_window_days")),(0,r.kt)("td",{parentName:"tr",align:null},"Conversion Window (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"A conversion window is the period of time after an ad interaction (such as an ad click or video view) during which a conversion, such as a purchase, is recorded in Google Ads. For more information, see ",(0,r.kt)("a",{parentName:"td",href:"https://support.google.com/google-ads/answer/3123169?hl=en"},"Google","'","s docs"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"14"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Google Credentials"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/client_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The Client ID of your Google Ads developer application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/client_secret"))),(0,r.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"The Client Secret of your Google Ads developer application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/developer_token"))),(0,r.kt)("td",{parentName:"tr",align:null},"Developer Token"),(0,r.kt)("td",{parentName:"tr",align:null},"Developer token granted by Google to use their APIs."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/refresh_token"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refresh Token"),(0,r.kt)("td",{parentName:"tr",align:null},"The token for obtaining a new access token."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/custom_queries")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom GAQL Queries (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_queries/-/query"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Query"),(0,r.kt)("td",{parentName:"tr",align:null},"A custom defined GAQL query for building the report. Should not contain segments.date expression. See Google","'","s ",(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/google-ads/api/fields/v11/overview_query_builder"},"query builder")," for more information."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_queries/-/table_name"))),(0,r.kt)("td",{parentName:"tr",align:null},"Destination Table Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The table name in your destination database for chosen query."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/customer_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer ID(s)"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of (client) customer IDs. Each customer ID must be specified as a 10-digit number without dashes. More instruction on how to find this value in our docs.  Metrics streams like AdGroupAdReport cannot be requested for a manager account."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/end_date")),(0,r.kt)("td",{parentName:"tr",align:null},"End Date (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date in the format 2017-01-25. Any data after this date will not be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/login_customer_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Login Customer ID for Managed Accounts (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"If your access to the customer account is through a manager account, this field is required and must be set to the customer ID of the manager account (10-digit number without dashes)."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date in the format 2017-01-25. Any data before this date will not be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Google Ad resource from which a collection is captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-ads:dev\n        config:\n          conversion_window_days: 7\n          credentials:\n            client_id: {secret_client_ID}\n            client_secret: {secret_secret}\n            developer_token: {access_token}\n            refresh_token: {refresh_token}\n          customer_id: 0123456789, 1234567890\n          login_customer_id: 0987654321\n          end_date: 2022-01-01\n          start_date: 2020-01-01\n          custom_queries:\n            - query:\n                SELECT\n                  campaign.id,\n                  campaign.name,\n                  campaign.status\n                FROM campaign\n                ORDER BY campaign.id\n              table_name: campaigns_custom\n    bindings:\n      - resource:\n          stream: campaign\n          syncMode: incremental\n        target: ${PREFIX}/campaign\n      {...}\n")),(0,r.kt)("h2",{id:"custom-queries"},"Custom queries"),(0,r.kt)("p",null,"You can create custom resources using Google Analytics Query Language (GAQL) queries.\nEach generated resource will be mapped to a Flow collection.\nFor help generating a valid query, see ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/fields/v11/overview_query_builder"},"Google's query builder documentation"),"."),(0,r.kt)("p",null,"If a query fails to validate against a given Google Ads account, it will be skipped."))}u.isMDXComponent=!0}}]);