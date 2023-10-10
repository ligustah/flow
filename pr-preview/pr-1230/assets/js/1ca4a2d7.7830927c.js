"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Facebook Marketing",o={unversionedId:"reference/Connectors/capture-connectors/facebook-marketing",id:"reference/Connectors/capture-connectors/facebook-marketing",title:"Facebook Marketing",description:"This connector captures data from the Facebook Marketing API into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/facebook-marketing.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/facebook-marketing",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/facebook-marketing",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/facebook-marketing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Exchange Rates API",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/exchange-rates"},next:{title:"Freshdesk",permalink:"/pr-preview/pr-1230/reference/Connectors/capture-connectors/freshdesk"}},s={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Signing in with OAuth2",id:"signing-in-with-oauth2",level:3},{value:"Configuring manually with an access token",id:"configuring-manually-with-an-access-token",level:3},{value:"Setup",id:"setup",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"facebook-marketing"},"Facebook Marketing"),(0,r.kt)("p",null,"This connector captures data from the Facebook Marketing API into Flow collections."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-facebook-marketing:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-facebook-marketing:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/facebook-marketing/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"The following data resources are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/adgroup"},"Ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-activity"},"Ad activities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-creative"},"Ad creatives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/adgroup/insights/"},"Ad insights")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/business/adaccount/"},"Business ad accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group"},"Campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-image"},"Images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/video/"},"Videos"))),(0,r.kt)("p",null,"By default, each resource associated with your Facebook Business account is mapped to a Flow collection through a separate binding."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"There are two ways to authenticate with Facebook when capturing data into Flow: signing in with OAuth2, and manually supplying an access token.\nTheir prerequisites differ."),(0,r.kt)("p",null,"OAuth is recommended for simplicity in the Flow web app;\nthe manual method is the only supported method using the command line."),(0,r.kt)("h3",{id:"signing-in-with-oauth2"},"Signing in with OAuth2"),(0,r.kt)("p",null,"To use OAuth2 in the Flow web app, you'll need A Facebook Business account and its ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/1492627900875762"},"Ad Account ID"),"."),(0,r.kt)("h3",{id:"configuring-manually-with-an-access-token"},"Configuring manually with an access token"),(0,r.kt)("p",null,"To configure manually with an access token, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Facebook Business account, and its Ad Account ID."),(0,r.kt)("li",{parentName:"ul"},"A Facebook app with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/products/marketing-api/"},"Marketing API")," enabled."),(0,r.kt)("li",{parentName:"ul"},"A Marketing API access token generated."),(0,r.kt)("li",{parentName:"ul"},"Access upgrade from Standard Access (the default) to Advanced Access. This allows a sufficient ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/overview/authorization#limits"},"rate limit")," to support the connector.")))),(0,r.kt)("p",null,"Follow the steps below to meet these requirements."),(0,r.kt)("h4",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find your Facebook ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/1492627900875762"},"Ad Account ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Meta for Developers, ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/development/create-an-app/"},"create a new app")," of the type Business.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On your new app's dashboard, click the button to set up the Marketing API.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Marketing API Tools tab, generate a Marketing API access token with all available permissions (",(0,r.kt)("inlineCode",{parentName:"p"},"ads_management"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ads_read"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"read_insights"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"business_management"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/marketing-api/overview/authorization/#access-levels"},"Request Advanced Access")," for your app. Specifically request the Advanced Access to the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The feature ",(0,r.kt)("inlineCode",{parentName:"p"},"Ads Management Standard Access"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The permission ",(0,r.kt)("inlineCode",{parentName:"p"},"ads_read"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The permission ",(0,r.kt)("inlineCode",{parentName:"p"},"ads_management")))),(0,r.kt)("p",{parentName:"li"},"Once your request is approved, you'll have a high enough rate limit to proceed with running the connector."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1230/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Facebook Marketing source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"By default, this connector captures all data associated with your Business Ad Account."),(0,r.kt)("p",null,"You can refine the data you capture from Facebook Marketing using the optional Custom Insights configuration.\nYou're able to specify certain fields to capture and apply data breakdowns.\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/marketing-api/insights/breakdowns"},"Breakdowns")," are a feature of the Facebook Marketing Insights API that allows you to group API output by common metrics.\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/marketing-api/insights/breakdowns#actionsbreakdown"},"Action breakdowns"),"\nare a subset of breakdowns that must be specified separately."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/access_token"))),(0,r.kt)("td",{parentName:"tr",align:null},"Access Token"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the access token generated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/account_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Account ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The Facebook Ad account ID to use when pulling data from the Facebook Marketing API."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for ",(0,r.kt)("a",{parentName:"td",href:"#configuring-manually-with-an-access-token"},"manual authentication")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/custom_insights")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Insights"),(0,r.kt)("td",{parentName:"tr",align:null},"A list which contains insights entries. Each entry must have a name and can contains fields, breakdowns or action","_","breakdowns"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/action_breakdowns"))),(0,r.kt)("td",{parentName:"tr",align:null},"Action Breakdowns"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of chosen action","_","breakdowns to apply"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/action_breakdowns/-"))),(0,r.kt)("td",{parentName:"tr",align:null},"ValidActionBreakdowns"),(0,r.kt)("td",{parentName:"tr",align:null},"Generic enumeration. Derive from this class to define new enumerations."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/breakdowns"))),(0,r.kt)("td",{parentName:"tr",align:null},"Breakdowns"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of chosen breakdowns to apply"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/breakdowns/-"))),(0,r.kt)("td",{parentName:"tr",align:null},"ValidBreakdowns"),(0,r.kt)("td",{parentName:"tr",align:null},"Generic enumeration. Derive from this class to define new enumerations."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/end_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"End Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date until which you","'","d like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z. All data generated between the start date and this date will be replicated. Not setting this option will result in always syncing the latest data."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/fields"))),(0,r.kt)("td",{parentName:"tr",align:null},"Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of chosen fields to capture"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/fields/-"))),(0,r.kt)("td",{parentName:"tr",align:null},"ValidEnums"),(0,r.kt)("td",{parentName:"tr",align:null},"Generic enumeration. Derive from this class to define new enumerations."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/name"))),(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the insight"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date from which you","'","d like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/custom_insights/-/time_increment"))),(0,r.kt)("td",{parentName:"tr",align:null},"Time Increment"),(0,r.kt)("td",{parentName:"tr",align:null},"Time window in days by which to aggregate statistics. The sync will be chunked into N day intervals, where N is the number of days you specified. For example, if you set this value to 7, then all statistics will be reported as 7-day aggregates by starting from the start","_","date. If the start and end dates are October 1st and October 30th, then the connector will output 5 records: 01 - 06, 07 - 13, 14 - 20, 21 - 27, and 28 - 30 (3 days only)."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/end_date")),(0,r.kt)("td",{parentName:"tr",align:null},"End Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date until which you","'","d like to capture data, in the format YYYY-MM-DDT00:00:00Z. All data generated between start","_","date and this date will be replicated. Not setting this option will result in always syncing the latest data."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/fetch_thumbnail_images")),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch Thumbnail Images"),(0,r.kt)("td",{parentName:"tr",align:null},"In each Ad Creative, fetch the thumbnail","_","url and store the result in thumbnail","_","data","_","url"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/include_deleted")),(0,r.kt)("td",{parentName:"tr",align:null},"Include Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Include data from deleted Campaigns, Ads, and AdSets"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/insights_lookback_window")),(0,r.kt)("td",{parentName:"tr",align:null},"Insights Lookback Window"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.facebook.com/business/help/2198119873776795"},"attribution window")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"28"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/max_batch_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum size of Batched Requests"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum batch size used when sending batch requests to Facebook API. Most users do not need to set this field unless they specifically need to tune the connector to address specific issues or use cases."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"50"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/page_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Page Size of Requests"),(0,r.kt)("td",{parentName:"tr",align:null},"Page size used when sending requests to Facebook API to specify number of records per page when response has pagination. Most users do not need to set this field unless they specifically need to tune the connector to address specific issues or use cases."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"25"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date from which you","'","d like to begin capturing data, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource of your Facebook Marketing account from which collections are captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-facebook-marketing:dev\n        config:\n            access_token: <secret>\n            account_id: 000000000000000\n            start_date: 2022-03-01T00:00:00Z\n            custom_insights:\n              - name: my-custom-insight\n                 fields: [ad_id, account_currency]\n                 breakdowns: [device_platform]\n                 action_breakdowns: [action_type]\n                 start_date: 2022-03-01T00:00:00Z\n    bindings:\n      - resource:\n          stream: ad_account\n          syncMode: incremental\n        target: ${PREFIX}/ad_account\n      - resource:\n          stream: ad_sets\n          syncMode: incremental\n        target: ${PREFIX}/ad_sets\n      - resource:\n          stream: ads_insights\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights\n      - resource:\n          stream: ads_insights_age_and_gender\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_age_and_gender\n      - resource:\n          stream: ads_insights_country\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_country\n      - resource:\n          stream: ads_insights_region\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_region\n      - resource:\n          stream: ads_insights_dma\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_dma\n      - resource:\n          stream: ads_insights_platform_and_device\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_platform_and_device\n      - resource:\n          stream: ads_insights_action_type\n          syncMode: incremental\n        target: ${PREFIX}/ads_insights_action_type\n      - resource:\n          stream: campaigns\n          syncMode: incremental\n        target: ${PREFIX}/campaigns\n      - resource:\n          stream: activities\n          syncMode: incremental\n        target: ${PREFIX}/activities\n      - resource:\n          stream: ads\n          syncMode: incremental\n        target: ${PREFIX}/ads\n      - resource:\n          stream: ad_creatives\n          syncMode: full_refresh\n        target: ${PREFIX}/ad_creatives\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1230/concepts/captures#pull-captures"},"Learn more about capture definitions.")))}m.isMDXComponent=!0}}]);