"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},l="Google Analytics UA",i={unversionedId:"reference/Connectors/capture-connectors/google-analytics",id:"reference/Connectors/capture-connectors/google-analytics",title:"Google Analytics UA",description:"This connector captures data from a view in Google Universal Analytics.",source:"@site/docs/reference/Connectors/capture-connectors/google-analytics.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-analytics",permalink:"/pr-preview/pr-1335/reference/Connectors/capture-connectors/google-analytics",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-analytics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/pr-preview/pr-1335/reference/Connectors/capture-connectors/gcs"},next:{title:"Google Firestore",permalink:"/pr-preview/pr-1335/reference/Connectors/capture-connectors/google-firestore"}},s={},p=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Google in the Flow web app",id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",level:3},{value:"Authenticating manually with a service account key",id:"authenticating-manually-with-a-service-account-key",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Custom reports",id:"custom-reports",level:3},{value:"Sample",id:"sample",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Data sampling",id:"data-sampling",level:3},{value:"Processing latency",id:"processing-latency",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-analytics-ua"},"Google Analytics UA"),(0,r.kt)("p",null,"This connector captures data from a view in Google Universal Analytics."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This connector supports Universal Analytics, not Google Analytics 4."),(0,r.kt)("p",{parentName:"admonition"},"Google Analytics 4 is supported by a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/reference/Connectors/capture-connectors/google-analytics-4"},"separate connector"),".")),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-google-analytics-ua:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-google-analytics-ua:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/google-analytics-universal-analytics"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"The following data resources are captured to Flow collections by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website overview"),(0,r.kt)("li",{parentName:"ul"},"Traffic sources"),(0,r.kt)("li",{parentName:"ul"},"Pages"),(0,r.kt)("li",{parentName:"ul"},"Locations"),(0,r.kt)("li",{parentName:"ul"},"Monthly active users"),(0,r.kt)("li",{parentName:"ul"},"Four weekly active users"),(0,r.kt)("li",{parentName:"ul"},"Two weekly active users"),(0,r.kt)("li",{parentName:"ul"},"Weekly active users"),(0,r.kt)("li",{parentName:"ul"},"Daily active users"),(0,r.kt)("li",{parentName:"ul"},"Devices")),(0,r.kt)("p",null,"Each resource is mapped to a Flow collection through a separate binding."),(0,r.kt)("p",null,"You can also configure ",(0,r.kt)("a",{parentName:"p",href:"#custom-reports"},"custom reports"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"There are two ways to authenticate with Google when capturing data from a Google Analytics view: using OAuth2, and manually, by generating a service account key.\nTheir prerequisites differ."),(0,r.kt)("p",null,"OAuth is recommended for simplicity in the Flow web app;\nthe service account key method is the only supported method using the command line."),(0,r.kt)("h3",{id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app"},"Using OAuth2 to authenticate with Google in the Flow web app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The View ID for your Google Analytics account.\nYou can find this using Google's ",(0,r.kt)("a",{parentName:"p",href:"https://ga-dev-tools.web.app/account-explorer/"},"Account Explorer")," tool.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Google account username and password."))),(0,r.kt)("h3",{id:"authenticating-manually-with-a-service-account-key"},"Authenticating manually with a service account key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The View ID for your Google Analytics account.\nYou can find this using Google's ",(0,r.kt)("a",{parentName:"p",href:"https://ga-dev-tools.web.app/account-explorer/"},"Account Explorer")," tool.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Google Analytics and Google Analytics Reporting APIs enabled on your Google account.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google service account with:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A JSON key generated."),(0,r.kt)("li",{parentName:"ul"},"Access to the source Google Analytics view.")))),(0,r.kt)("p",null,"Follow the steps below to meet these prerequisites:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158841?hl=en"},"Enable")," the Google Analytics and Google Analytics Reporting APIs\nfor the Google ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/projects"},"project")," with which your Analytics view is associated.\n(Unless you actively develop with Google Cloud, you'll likely just have one option).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount"},"service account and generate a JSON key"),"\nDuring setup, grant the account the ",(0,r.kt)("strong",{parentName:"p"},"Viewer")," role on your project.\nYou'll copy the contents of the downloaded key file into the Service Account Credentials parameter when you configure the connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1009702#Add&zippy=%2Cin-this-article"},"Add the service account")," to the Google Analytics view."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Grant the account ",(0,r.kt)("strong",{parentName:"li"},"Viewer")," permissions (formerly known as Read & Analyze permissions).")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors.\nThe values and specification sample below provide configuration details specific to the Google Analytics source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The following properties reflect the Service Account Key authentication method. If you're working in the Flow web app, you'll use ",(0,r.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-google--in-the-flow-web-app"},"OAuth2"),", so some of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials")),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials for the service"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/auth_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication method. Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Service")," for manual configuration, or use OAuth in the web app."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credentials/credentials_json")),(0,r.kt)("td",{parentName:"tr",align:null},"Service Account Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Contents of the JSON key file generated during setup."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/custom_reports")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Reports (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"A JSON array describing the custom reports you want to sync from GA."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date in the format YYYY-MM-DD. Any data before this date will not be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/view_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"View ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID for the Google Analytics View you want to fetch data from. This can be found from the Google Analytics Account Explorer: https:","/","/","ga-dev-tools.appspot.com","/","account-explorer","/"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/window_in_days")),(0,r.kt)("td",{parentName:"tr",align:null},"Window in days (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of days each stream slice would consist of beginning from start","_","date. Bigger the value - faster the fetch. (Min=1, as for a Day; Max=364, as for a Year)."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Data resource from the Google Analytics view."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,r.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"custom-reports"},"Custom reports"),(0,r.kt)("p",null,"You can include data beyond the ",(0,r.kt)("a",{parentName:"p",href:"#supported-data-resources"},"default data resources")," with Custom Reports.\nThese replicate the functionality of ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/10445879?hl=en"},"Custom Reports")," in the Google Analytics Web console."),(0,r.kt)("p",null,"To do so, fill out the Custom Reports property with a JSON array as a string with the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{"name": string, "dimensions": [string], "metrics": [string]}]\n')),(0,r.kt)("p",null,"You may specify ",(0,r.kt)("a",{parentName:"p",href:"https://ga-dev-tools.web.app/dimensions-metrics-explorer/"},"default Google Analytics dimensions and metrics")," from the table below,\nor custom dimensions and metrics you've previously defined.\nEach custom report may contain up to 7 unique dimensions and 10 unique metrics.\nYou must include the ",(0,r.kt)("inlineCode",{parentName:"p"},"ga:date")," dimension for proper data flow."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Supported GA dimensions"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported GA metrics"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:browser")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:14dayUsers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:city")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:1dayUsers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:continent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:28dayUsers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:country")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:30dayUsers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:7dayUsers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:deviceCategory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:avgSessionDuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:hostname")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:avgTimeOnPage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:medium")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:bounceRate"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:metro")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:entranceRate"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:operatingSystem")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:entrances"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:pagePath")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:exits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:region")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:newUsers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:socialNetwork")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:pageviews"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:source")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:pageviewsPerSession"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:subContinent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:sessions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:sessionsPerUser"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:uniquePageviews"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ga:users"))))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-analytics-v4:dev\n          config:\n            view_id: 000000000\n            start_date: 2022-03-01\n            credentials:\n              auth_type: service\n              credentials_json: <secret>\n            window_in_days: 1\n\n      bindings:\n        - resource:\n            stream: daily_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: devices\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: four_weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: locations\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: monthly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: pages\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: traffic_sources\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: two_weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: website_overview\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("h3",{id:"data-sampling"},"Data sampling"),(0,r.kt)("p",null,"The Google Analytics Reporting API enforces compute thresholds for ad-hoc queries and reports.\nIf a threshold is exceeded, the API will apply sampling to limit the number of sessions analyzed for the specified time range.\nThese thresholds can be found ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/2637192?hl=en&ref_topic=2601030&visit_id=637868645346124317-2833523666&rd=1#thresholds&zippy=%2Cin-this-article"},"here"),"."),(0,r.kt)("p",null,"If your account is on the Analytics 360 tier, you're less likely to run into these limitations.\nFor Analytics Standard accounts, you can avoid sampling by keeping the ",(0,r.kt)("inlineCode",{parentName:"p"},"window_in_days")," parameter set to its default value, ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),".\nThis makes it less likely that you will exceed the threshold.\nWhen sampling occurs, a warning is written to the capture log."),(0,r.kt)("h3",{id:"processing-latency"},"Processing latency"),(0,r.kt)("p",null,"Data in Google Analytics reports may continue to update ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1070983?hl=en#DataProcessingLatency&zippy=%2Cin-this-article"},"up to 48 hours after it appears"),"."),(0,r.kt)("p",null,"To ensure data correctness, each time it reads from Google Analytics,\nthis connector automatically applies a lookback window of 2 days prior to its last read.\nThis allows it to double-check and correct for any changes in reports resulting from latent data updates."),(0,r.kt)("p",null,"This mechanism relies on the ",(0,r.kt)("inlineCode",{parentName:"p"},"isDataGolden")," flag in the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/core/v4/rest/v4/reports/batchGet#reportdata"},"Google Analytics Reporting API"),"."))}d.isMDXComponent=!0}}]);