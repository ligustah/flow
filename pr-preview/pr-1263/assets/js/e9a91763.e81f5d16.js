"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7628],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Salesforce \u2014 Historical data",o={unversionedId:"reference/Connectors/capture-connectors/salesforce",id:"reference/Connectors/capture-connectors/salesforce",title:"Salesforce \u2014 Historical data",description:"This connector captures data from Salesforce objects into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/salesforce.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/salesforce",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/salesforce",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/salesforce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Salesforce \u2014 Real-time data",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/salesforce-real-time"},next:{title:"SendGrid",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/sendgrid"}},s={},p=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Salesforce in the Flow web app",id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Setup",id:"setup",level:3},{value:"Create a read-only Salesforce user",id:"create-a-read-only-salesforce-user",level:4},{value:"Create a developer application and generate authorization tokens",id:"create-a-developer-application-and-generate-authorization-tokens",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"salesforce--historical-data"},"Salesforce \u2014 Historical data"),(0,r.kt)("p",null,"This connector captures data from Salesforce objects into Flow collections.\nIt uses batch processing and is ideal for syncing your historical Salesforce data."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/salesforce-real-time"},"A separate connector is available for real-time Salesforce data capture"),".\nFor help using both connectors in parallel, ",(0,r.kt)("a",{parentName:"p",href:"mailto:info@estuary.dev"},"contact your Estuary account manager"),"."),(0,r.kt)("p",null,"This connector is available for use in the Flow web application.\nFor local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-salesforce:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-salesforce:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/salesforce/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"This connector can capture the following Salesforce ",(0,r.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm"},"standard objects"),", if present in your account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Account"),(0,r.kt)("li",{parentName:"ul"},"Contact"),(0,r.kt)("li",{parentName:"ul"},"User"),(0,r.kt)("li",{parentName:"ul"},"OpportunityFilledHistory"),(0,r.kt)("li",{parentName:"ul"},"LeadHistory"),(0,r.kt)("li",{parentName:"ul"},"Opportunity"),(0,r.kt)("li",{parentName:"ul"},"Campaign"),(0,r.kt)("li",{parentName:"ul"},"Case"),(0,r.kt)("li",{parentName:"ul"},"ContactLineItem"),(0,r.kt)("li",{parentName:"ul"},"Entitlement"),(0,r.kt)("li",{parentName:"ul"},"Lead"),(0,r.kt)("li",{parentName:"ul"},"LiveChatTranscript"),(0,r.kt)("li",{parentName:"ul"},"MessagingSession"),(0,r.kt)("li",{parentName:"ul"},"Quote"),(0,r.kt)("li",{parentName:"ul"},"QuoteLineItem"),(0,r.kt)("li",{parentName:"ul"},"ServiceAppointment"),(0,r.kt)("li",{parentName:"ul"},"ServiceContract"),(0,r.kt)("li",{parentName:"ul"},"Task"),(0,r.kt)("li",{parentName:"ul"},"UserServicePresence"),(0,r.kt)("li",{parentName:"ul"},"WorkOrder"),(0,r.kt)("li",{parentName:"ul"},"WorkOrderLineItem")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.dev_object_def.htm&type=5"},"Custom objects")," aren't currently supported.\nEach captured object is mapped to a Flow collection through a separate binding."),(0,r.kt)("p",null,"Because most Salesforce accounts contain large volumes of data, you may only want to capture a subset of the available objects.\nThere are several ways to control this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"#create-a-read-only-salesforce-user"},"dedicated Salesforce user")," with access only to the objects you'd like to capture.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apply a filter when you ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"configure")," the connector. If you don't apply a filter, the connector captures all objects available to the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"During ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/guides/create-dataflow#create-a-capture"},"capture creation in the web application"),",\nremove the bindings for objects you don't want to capture."))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app"},"Using OAuth2 to authenticate with Salesforce in the Flow web app"),(0,r.kt)("p",null,"If you're using the Flow web app, you'll be prompted to authenticate with Salesforce using OAuth. You'll need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Salesforce organization on the Enterprise tier, or with an equivalent ",(0,r.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm"},"API request allocation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Salesforce user credentials. We recommend creating a dedicated read-only ",(0,r.kt)("a",{parentName:"p",href:"#create-a-read-only-salesforce-user"},"Salesforce user"),"."))),(0,r.kt)("h3",{id:"configuring-the-connector-specification-manually"},"Configuring the connector specification manually"),(0,r.kt)("p",null,"If you're working with flowctl and writing specifications in a local development environment,\nyou'll need to manually supply OAuth credentials. You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The items required to ",(0,r.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app"},"set up with OAuth2"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Salesforce developer application with a generated client ID, client secret, and refresh token. ",(0,r.kt)("a",{parentName:"p",href:"#create-a-developer-application-and-generate-authorization-tokens"},"See setup steps.")))),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("h4",{id:"create-a-read-only-salesforce-user"},"Create a read-only Salesforce user"),(0,r.kt)("p",null,"Creating a dedicated read-only Salesforce user is a simple way to specify which objects Flow will capture.\nThis is useful if you have a large amount of data in your Salesforce organization."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"While signed in as an administrator, create a ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.users_profiles_cloning.htm&type=5"},"new profile")," by cloning the standard ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.standard_profiles.htm&type=5"},"Minimum Access")," profile.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.perm_sets_object_perms_edit.htm&type=5"},"Edit the new profile's permissions"),". Grant it read access to all the standard and custom objects you'd like to capture with Flow.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.adding_new_users.htm&type=5"},"Create a new user"),", applying the profile you just created.\nYou'll use this user's email address and password to authenticate Salesforce in Flow."))),(0,r.kt)("h4",{id:"create-a-developer-application-and-generate-authorization-tokens"},"Create a developer application and generate authorization tokens"),(0,r.kt)("p",null,"To manually write a capture specification for Salesforce, you need to create and configure a developer application.\nThrough this process, you'll obtain the client ID, client secret, and refresh token."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_create_api_integration.htm&type=5"},"new developer application"),"."),(0,r.kt)("p",{parentName:"li"},"a. When selecting ",(0,r.kt)("strong",{parentName:"p"},"Scopes")," for your app, select ",(0,r.kt)("strong",{parentName:"p"},"Manage user data via APIs ",(0,r.kt)("inlineCode",{parentName:"strong"},"(api)")),", ",(0,r.kt)("strong",{parentName:"p"},"Perform requests at any time ",(0,r.kt)("inlineCode",{parentName:"strong"},"(refresh_token, offline_access)")),", and ",(0,r.kt)("strong",{parentName:"p"},"Manage user data via Web browsers ",(0,r.kt)("inlineCode",{parentName:"strong"},"(web)")),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the app to ensure that ",(0,r.kt)("strong",{parentName:"p"},"Permitted users")," is set to ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_oauth.htm&type=5"},"All users may self-authorize"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate the ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5"},"Consumer Key and Consumer Secret"),". These are equivalent to the client id and client secret, respectively.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5"},"Salesforce Web Server Flow"),". The final POST response will include your refresh token."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the batch Salesforce source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,r.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app"},"OAuth2"),",\nso you won't need the ",(0,r.kt)("inlineCode",{parentName:"p"},"/credentials")," values listed here."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/auth_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization type"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Client")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/client_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The Salesforce Client ID, also known as a Consumer Key, for your developer application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/client_secret"))),(0,r.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"The Salesforce Client Secret, also known as a Consumer Secret, for your developer application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/refresh_token"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refresh Token"),(0,r.kt)("td",{parentName:"tr",align:null},"The refresh token generated by your developer application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/is_sandbox")),(0,r.kt)("td",{parentName:"tr",align:null},"Sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether you","'","re using a ",(0,r.kt)("a",{parentName:"td",href:"https://help.salesforce.com/s/articleView?id=sf.deploy_sandboxes_parent.htm&type=5"},"Salesforce Sandbox"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date in the format YYYY-MM-DD. Data added on and after this date will be captured. If this field is blank, all data will be captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/streams_criteria")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter Salesforce Objects (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter Salesforce objects for capture."),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/streams_criteria/-/criteria"))),(0,r.kt)("td",{parentName:"tr",align:null},"Search criteria"),(0,r.kt)("td",{parentName:"tr",align:null},"Possible criteria are ",(0,r.kt)("inlineCode",{parentName:"td"},'"starts with"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"ends with"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"contains"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"exacts"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"starts not with"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"ends not with"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"not contains"'),", and ",(0,r.kt)("inlineCode",{parentName:"td"},'"not exacts"'),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"contains"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/streams_criteria/-/value"))),(0,r.kt)("td",{parentName:"tr",align:null},"Search value"),(0,r.kt)("td",{parentName:"tr",align:null},"Search term used with the selected criterion to filter objects."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/cursorField")),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor field"),(0,r.kt)("td",{parentName:"tr",align:null},"Field used as a cursor to track data replication; typically a timestamp field."),(0,r.kt)("td",{parentName:"tr",align:null},"array, null"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Salesforce object from which a collection is captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-salesforce:dev\n        config:\n          credentials:\n            auth_type: Client\n            client_id: {your_client_id}\n            client_secret: {secret}\n            refresh_token: {XXXXXXXX}\n          is_sandbox: false\n          start_date: 2022-01-01\n          streams_criteria:\n            - criteria: "starts with"\n              value: "Work"\n    bindings:\n      - resource:\n          cursorField: [SystemModstamp]\n          stream: WorkOrder\n          syncMode: incremental\n        target: ${PREFIX}/WorkOrder\n      - resource:\n          cursorField: [SystemModstamp]\n          stream: WorkOrderLineItem\n          syncMode: incremental\n        target: ${PREFIX}/WorkOrderLineItem\n')))}d.isMDXComponent=!0}}]);