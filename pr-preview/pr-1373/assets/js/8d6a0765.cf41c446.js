"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,N=c["".concat(p,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},l="NetSuite",i={unversionedId:"reference/Connectors/capture-connectors/netsuite",id:"reference/Connectors/capture-connectors/netsuite",title:"NetSuite",description:"This connector captures data from Oracle NetSuite into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/netsuite.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/netsuite",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/netsuite",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/netsuite.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"NetSuite",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/netsuite-odbc"},next:{title:"Notion",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/notion"}},p={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"netsuite"},"NetSuite"),(0,r.kt)("p",null,"This connector captures data from Oracle NetSuite into Flow collections."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-netsuite:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-netsuite:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."),(0,r.kt)("p",null,"You can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/netsuite/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"Flow captures collections from any NetSuite object to which you grant access during ",(0,r.kt)("a",{parentName:"p",href:"#setup"},"setup"),", including ",(0,r.kt)("inlineCode",{parentName:"p"},"Transactions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Reports"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Lists"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Setup"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oracle NetSuite ",(0,r.kt)("a",{parentName:"li",href:"https://system.netsuite.com/pages/customerlogin.jsp?country=US"},"account")),(0,r.kt)("li",{parentName:"ul"},"Allowed access to all Account permissions options"),(0,r.kt)("li",{parentName:"ul"},"A new integration with token-based authentication"),(0,r.kt)("li",{parentName:"ul"},"A custom role with access to objects you want to capture. See ",(0,r.kt)("a",{parentName:"li",href:"#setup"},"setup"),"."),(0,r.kt)("li",{parentName:"ul"},"A new user assigned to the custom role"),(0,r.kt)("li",{parentName:"ul"},"Access token generated for the custom role")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a NetSuite account")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an account on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.netsuite.com/portal/home.shtml"},"Oracle NetSuite")," portal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm your email address."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set up your NetSuite account")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find your ",(0,r.kt)("em",{parentName:"p"},"Realm"),", or Account ID. You'll use this to connect with Flow."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your NetSuite portal, go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Company")," > ",(0,r.kt)("strong",{parentName:"p"},"Company Information"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy your Account ID."),(0,r.kt)("p",{parentName:"li"},"If you have a production account, it will look like ",(0,r.kt)("inlineCode",{parentName:"p"},"2345678"),". If you're using a sandbox, it'll look like ",(0,r.kt)("inlineCode",{parentName:"p"},"2345678_SB2"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the required features."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Company")," > ",(0,r.kt)("strong",{parentName:"p"},"Enable Features"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"SuiteCloud")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"SuiteScript")," section, check the checkboxes labeled ",(0,r.kt)("strong",{parentName:"p"},"CLIENT SUITESCRIPT")," and ",(0,r.kt)("strong",{parentName:"p"},"SERVER SUITESCRIPT"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Manage Authentication")," section, check the checkbox labeled ",(0,r.kt)("strong",{parentName:"p"},"TOKEN-BASED AUTHENTICATION"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"SuiteTalk (Web Services)")," section, check the checkbox labeled ",(0,r.kt)("strong",{parentName:"p"},"REST WEB SERVICES"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a NetSuite ",(0,r.kt)("em",{parentName:"p"},"integration")," to obtain a Consumer Key and Consumer Secret."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Integration")," > ",(0,r.kt)("strong",{parentName:"p"},"Manage Integrations")," > ",(0,r.kt)("strong",{parentName:"p"},"New"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the integration a name, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-rest-integration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the ",(0,r.kt)("strong",{parentName:"p"},"State")," option is enabled.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Authentication")," section, check the ",(0,r.kt)("strong",{parentName:"p"},"Token-Based Authentication")," checkbox.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes."))),(0,r.kt)("p",{parentName:"li"},"Your Consumer Key and Consumer Secret will be shown once. Copy them to a safe place.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up a role for use with Flow."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Users/Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"Manage Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"New"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the role a name, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-integration-role"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll to the ",(0,r.kt)("strong",{parentName:"p"},"Permissions")," section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(IMPORTANT) Click ",(0,r.kt)("strong",{parentName:"p"},"Transactions")," and add all the dropdown entities with either ",(0,r.kt)("strong",{parentName:"p"},"full")," or ",(0,r.kt)("strong",{parentName:"p"},"view")," access level.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(IMPORTANT) Click ",(0,r.kt)("strong",{parentName:"p"},"Reports")," and add all the dropdown entities with either ",(0,r.kt)("strong",{parentName:"p"},"full")," or ",(0,r.kt)("strong",{parentName:"p"},"view")," access level.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(IMPORTANT) Click ",(0,r.kt)("strong",{parentName:"p"},"Lists")," and add all the dropdown entities with either ",(0,r.kt)("strong",{parentName:"p"},"full")," or ",(0,r.kt)("strong",{parentName:"p"},"view")," access level.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(IMPORTANT) Click ",(0,r.kt)("strong",{parentName:"p"},"Setup")," an add all the dropdown entities with either ",(0,r.kt)("strong",{parentName:"p"},"full")," or ",(0,r.kt)("strong",{parentName:"p"},"view")," access level."))),(0,r.kt)("p",{parentName:"li"},"To allow your custom role to reflect future changes, be sure to edit these parameters again when you rename or customize any NetSuite object.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up user for use with Flow."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Users/Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"Manage Users"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the user you want to give access to use with Flow. In the ",(0,r.kt)("strong",{parentName:"p"},"Name")," column, click the user's name. Then, click the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("strong",{parentName:"p"},"Access")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the dropdown list, select role you created previously; for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-integration-role"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate an access token."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Users/Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"Access Tokens")," > ",(0,r.kt)("strong",{parentName:"p"},"New"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select an ",(0,r.kt)("strong",{parentName:"p"},"Application Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"User"),", select the user you assigned the role previously.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Role"),", select the role you assigned to the user previously.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Token Name"),",  give a descriptive name to the token you are creating, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-rest-integration-token"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes."))),(0,r.kt)("p",{parentName:"li"},"Your Token ID and Token Secret will be shown once. Copy them to a safe place."))),(0,r.kt)("p",null,"You now have a properly configured account with the correct permissions and all the information you need to connect with Flow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Realm (Account ID)"),(0,r.kt)("li",{parentName:"ul"},"Consumer Key"),(0,r.kt)("li",{parentName:"ul"},"Consumer Secret"),(0,r.kt)("li",{parentName:"ul"},"Token ID"),(0,r.kt)("li",{parentName:"ul"},"Token Secret")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1373/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the NetSuite source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/realm")),(0,r.kt)("td",{parentName:"tr",align:null},"Realm"),(0,r.kt)("td",{parentName:"tr",align:null},"Netsuite realm e.g. 2344535, as for ",(0,r.kt)("inlineCode",{parentName:"td"},"production")," or 2344535_SB1, as for the ",(0,r.kt)("inlineCode",{parentName:"td"},"sandbox")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/consumer_key")),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer key associated with your integration."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/consumer_secret")),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer secret associated with your integration."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/token_key")),(0,r.kt)("td",{parentName:"tr",align:null},"Token Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Access token key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/token_secret")),(0,r.kt)("td",{parentName:"tr",align:null},"Token Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Access token secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource of your NetSuite project from which collections are captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-netsuite:dev\n        config:\n          realm: <your account id>\n          consumer_key: <key>\n          consumer_secret: <secret>\n          token_key: <key>\n          token_secret: <secret>\n    bindings:\n      - resource:\n          stream: items\n          syncMode: full_refresh\n        target: ${PREFIX}/items\n      {...}\n")))}u.isMDXComponent=!0}}]);