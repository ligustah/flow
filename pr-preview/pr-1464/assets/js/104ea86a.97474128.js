"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6313],{7723:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(74848),t=n(28453);const i={},c="Salesforce \u2014 Real-time data",l={id:"reference/Connectors/capture-connectors/Salesforce/salesforce-real-time",title:"Salesforce \u2014 Real-time data",description:"This connector captures data from Salesforce objects into Flow collections in real time via the Salesforce PushTopic API.",source:"@site/docs/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time.md",sourceDirName:"reference/Connectors/capture-connectors/Salesforce",slug:"/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Salesforce \u2014 Historical data",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data"},next:{title:"SendGrid",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/sendgrid"}},o={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Salesforce in the Flow web app",id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Setup",id:"setup",level:3},{value:"Create a read-only Salesforce user",id:"create-a-read-only-salesforce-user",level:4},{value:"Create a developer application and generate authorization tokens",id:"create-a-developer-application-and-generate-authorization-tokens",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"salesforce--real-time-data",children:"Salesforce \u2014 Real-time data"}),"\n",(0,s.jsxs)(r.p,{children:["This connector captures data from Salesforce objects into Flow collections in real time via the ",(0,s.jsx)(r.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/pushtopic_events_intro.htm",children:"Salesforce PushTopic API"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data",children:"A separate connector is available for syncing historical Salesforce data"}),".\nFor help using both connectors in parallel, ",(0,s.jsx)(r.a,{href:"mailto:info@estuary.dev",children:"contact your Estuary account manager"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["This connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(r.a,{href:"https://ghcr.io/estuary/source-salesforce-next:dev",children:(0,s.jsx)(r.code,{children:"ghcr.io/estuary/source-salesforce-next:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsxs)(r.p,{children:["This connector can capture the following Salesforce ",(0,s.jsx)(r.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm",children:"standard objects"}),", if present in your account:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Account"}),"\n",(0,s.jsx)(r.li,{children:"Contact"}),"\n",(0,s.jsx)(r.li,{children:"User"}),"\n",(0,s.jsx)(r.li,{children:"OpportunityFilledHistory"}),"\n",(0,s.jsx)(r.li,{children:"LeadHistory"}),"\n",(0,s.jsx)(r.li,{children:"Opportunity"}),"\n",(0,s.jsx)(r.li,{children:"Campaign"}),"\n",(0,s.jsx)(r.li,{children:"Case"}),"\n",(0,s.jsx)(r.li,{children:"ContactLineItem"}),"\n",(0,s.jsx)(r.li,{children:"Entitlement"}),"\n",(0,s.jsx)(r.li,{children:"Lead"}),"\n",(0,s.jsx)(r.li,{children:"LiveChatTranscript"}),"\n",(0,s.jsx)(r.li,{children:"MessagingSession"}),"\n",(0,s.jsx)(r.li,{children:"Quote"}),"\n",(0,s.jsx)(r.li,{children:"QuoteLineItem"}),"\n",(0,s.jsx)(r.li,{children:"ServiceAppointment"}),"\n",(0,s.jsx)(r.li,{children:"ServiceContract"}),"\n",(0,s.jsx)(r.li,{children:"Task"}),"\n",(0,s.jsx)(r.li,{children:"UserServicePresence"}),"\n",(0,s.jsx)(r.li,{children:"WorkOrder"}),"\n",(0,s.jsx)(r.li,{children:"WorkOrderLineItem"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Because most Salesforce accounts contain large volumes of data, you may only want to capture a subset of the available objects.\nThere are several ways to control this:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Create a ",(0,s.jsx)(r.a,{href:"#create-a-read-only-salesforce-user",children:"dedicated Salesforce user"})," with access only to the objects you'd like to capture."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["During ",(0,s.jsx)(r.a,{href:"/pr-preview/pr-1464/guides/create-dataflow#create-a-capture",children:"capture creation in the web application"}),",\nremove the bindings for objects you don't want to capture."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(r.h3,{id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Salesforce in the Flow web app"}),"\n",(0,s.jsx)(r.p,{children:"If you're using the Flow web app, you'll be prompted to authenticate with Salesforce using OAuth. You'll need the following:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["A Salesforce organization on the Enterprise tier, or with an equivalent ",(0,s.jsx)(r.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm",children:"API request allocation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Salesforce user credentials. We recommend creating a dedicated read-only ",(0,s.jsx)(r.a,{href:"#create-a-read-only-salesforce-user",children:"Salesforce user"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"configuring-the-connector-specification-manually",children:"Configuring the connector specification manually"}),"\n",(0,s.jsx)(r.p,{children:"If you're working with flowctl and writing specifications in a local development environment,\nyou'll need to manually supply OAuth credentials. You'll need:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["The items required to ",(0,s.jsx)(r.a,{href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",children:"set up with OAuth2"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["A Salesforce developer application with a generated client ID, client secret, and refresh token. ",(0,s.jsx)(r.a,{href:"#create-a-developer-application-and-generate-authorization-tokens",children:"See setup steps."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(r.h4,{id:"create-a-read-only-salesforce-user",children:"Create a read-only Salesforce user"}),"\n",(0,s.jsx)(r.p,{children:"Creating a dedicated read-only Salesforce user is a simple way to specify which objects Flow will capture."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["While signed in as an administrator, create a ",(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.users_profiles_cloning.htm&type=5",children:"new profile"})," by cloning the standard ",(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.standard_profiles.htm&type=5",children:"Minimum Access"})," profile."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.perm_sets_object_perms_edit.htm&type=5",children:"Edit the new profile's permissions"}),". Grant it read access to all the standard and custom objects you'd like to capture with Flow."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.adding_new_users.htm&type=5",children:"Create a new user"}),", applying the profile you just created.\nYou'll use this user's email address and password to authenticate Salesforce in Flow."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"create-a-developer-application-and-generate-authorization-tokens",children:"Create a developer application and generate authorization tokens"}),"\n",(0,s.jsx)(r.p,{children:"To manually write a capture specification for Salesforce, you need to create and configure a developer application.\nThrough this process, you'll obtain the client ID, client secret, and refresh token."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Create a ",(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_create_api_integration.htm&type=5",children:"new developer application"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["a. When selecting ",(0,s.jsx)(r.strong,{children:"Scopes"})," for your app, select ",(0,s.jsxs)(r.strong,{children:["Manage user data via APIs ",(0,s.jsx)(r.code,{children:"(api)"})]}),", ",(0,s.jsxs)(r.strong,{children:["Perform requests at any time ",(0,s.jsx)(r.code,{children:"(refresh_token, offline_access)"})]}),", and ",(0,s.jsxs)(r.strong,{children:["Manage user data via Web browsers ",(0,s.jsx)(r.code,{children:"(web)"})]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Edit the app to ensure that ",(0,s.jsx)(r.strong,{children:"Permitted users"})," is set to ",(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_oauth.htm&type=5",children:"All users may self-authorize"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Locate the ",(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5",children:"Consumer Key and Consumer Secret"}),". These are equivalent to the client id and client secret, respectively."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Follow the ",(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5",children:"Salesforce Web Server Flow"}),". The final POST response will include your refresh token."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(r.a,{href:"/pr-preview/pr-1464/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the real-time Salesforce source connector."]}),"\n",(0,s.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(r.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,s.jsx)(r.a,{href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",children:"OAuth2"}),",\nso you won't need the ",(0,s.jsx)(r.code,{children:"/credentials"})," values listed here."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/credentials"})})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"object"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/credentials/client_id"})})}),(0,s.jsx)(r.td,{children:"Client ID"}),(0,s.jsx)(r.td,{children:"The Salesforce Client ID, also known as a Consumer Key, for your developer application."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/credentials/client_secret"})})}),(0,s.jsx)(r.td,{children:"Client Secret"}),(0,s.jsx)(r.td,{children:"The Salesforce Client Secret, also known as a Consumer Secret, for your developer application."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/credentials/refresh_token"})})}),(0,s.jsx)(r.td,{children:"Refresh Token"}),(0,s.jsx)(r.td,{children:"The refresh token generated by your developer application."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/is_sandbox"})}),(0,s.jsx)(r.td,{children:"Sandbox"}),(0,s.jsxs)(r.td,{children:["Whether you're using a ",(0,s.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=sf.deploy_sandboxes_parent.htm&type=5",children:"Salesforce Sandbox"}),"."]}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Title"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Default"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/stream"})})}),(0,s.jsx)(r.td,{children:"Stream"}),(0,s.jsx)(r.td,{children:"Salesforce object from which a collection is captured."}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"Required"})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-salesforce-next:dev\n        config:\n          credentials:\n            client_id: {your_client_id}\n            client_secret: {secret}\n            refresh_token: {XXXXXXXX}\n          is_sandbox: false\n    bindings:\n      - resource:\n          stream: WorkOrder\n        target: ${PREFIX}/WorkOrder\n      - resource:\n          stream: WorkOrderLineItem\n        target: ${PREFIX}/WorkOrderLineItem\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>l});var s=n(96540);const t={},i=s.createContext(t);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);