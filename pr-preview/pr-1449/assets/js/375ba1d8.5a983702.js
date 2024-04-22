"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6386],{34390:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=r(74848),s=r(28453);const i={},c="Salesforce \u2014 Historical data",l={id:"reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data",title:"Salesforce \u2014 Historical data",description:"This connector captures data from Salesforce objects into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data.md",sourceDirName:"reference/Connectors/capture-connectors/Salesforce",slug:"/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data",permalink:"/pr-preview/pr-1449/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/Salesforce/salesforce-historical-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Salesforce",permalink:"/pr-preview/pr-1449/reference/Connectors/capture-connectors/Salesforce/"},next:{title:"Salesforce \u2014 Real-time data",permalink:"/pr-preview/pr-1449/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time"}},a={},o=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Salesforce in the Flow web app",id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Setup",id:"setup",level:3},{value:"Create a read-only Salesforce user",id:"create-a-read-only-salesforce-user",level:4},{value:"Create a developer application and generate authorization tokens",id:"create-a-developer-application-and-generate-authorization-tokens",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Formula Fields",id:"formula-fields",level:3},{value:"Slowly Changing Dimensions Type 2",id:"slowly-changing-dimensions-type-2",level:3},{value:"Merging Real Time and Batch Data",id:"merging-real-time-and-batch-data",level:3},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"salesforce--historical-data",children:"Salesforce \u2014 Historical data"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from Salesforce objects into Flow collections.\nIt uses batch processing and is ideal for syncing your historical Salesforce data."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time",children:"A separate connector is available for real-time Salesforce data capture"}),".\nFor help using both connectors in parallel, ",(0,t.jsx)(n.a,{href:"mailto:info@estuary.dev",children:"contact your Estuary account manager"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is available for use in the Flow web application.\nFor local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-salesforce:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-salesforce:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/salesforce/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsxs)(n.p,{children:["This connector can capture the following Salesforce ",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm",children:"standard objects"}),", if present in your account:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Account"}),"\n",(0,t.jsx)(n.li,{children:"Contact"}),"\n",(0,t.jsx)(n.li,{children:"User"}),"\n",(0,t.jsx)(n.li,{children:"OpportunityFilledHistory"}),"\n",(0,t.jsx)(n.li,{children:"LeadHistory"}),"\n",(0,t.jsx)(n.li,{children:"Opportunity"}),"\n",(0,t.jsx)(n.li,{children:"Campaign"}),"\n",(0,t.jsx)(n.li,{children:"Case"}),"\n",(0,t.jsx)(n.li,{children:"ContactLineItem"}),"\n",(0,t.jsx)(n.li,{children:"Entitlement"}),"\n",(0,t.jsx)(n.li,{children:"Lead"}),"\n",(0,t.jsx)(n.li,{children:"LiveChatTranscript"}),"\n",(0,t.jsx)(n.li,{children:"MessagingSession"}),"\n",(0,t.jsx)(n.li,{children:"Quote"}),"\n",(0,t.jsx)(n.li,{children:"QuoteLineItem"}),"\n",(0,t.jsx)(n.li,{children:"ServiceAppointment"}),"\n",(0,t.jsx)(n.li,{children:"ServiceContract"}),"\n",(0,t.jsx)(n.li,{children:"Task"}),"\n",(0,t.jsx)(n.li,{children:"UserServicePresence"}),"\n",(0,t.jsx)(n.li,{children:"WorkOrder"}),"\n",(0,t.jsx)(n.li,{children:"WorkOrderLineItem"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Salesforce connector has the ability to capture all standard Salesforce objects as well as custom objects. All available objects will appear after connecting to Salesforce."}),"\n",(0,t.jsx)(n.p,{children:"Because most Salesforce accounts contain large volumes of data, you may only want to capture a subset of the available objects.\nThere are several ways to control this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.a,{href:"#create-a-read-only-salesforce-user",children:"dedicated Salesforce user"})," with access only to the objects you'd like to capture."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Apply a filter when you ",(0,t.jsx)(n.a,{href:"#endpoint",children:"configure"})," the connector. If you don't apply a filter, the connector captures all objects available to the user."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["During ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/guides/create-dataflow#create-a-capture",children:"capture creation in the web application"}),",\nremove the bindings for objects you don't want to capture."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Salesforce in the Flow web app"}),"\n",(0,t.jsx)(n.p,{children:"If you're using the Flow web app, you'll be prompted to authenticate with Salesforce using OAuth. You'll need the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A Salesforce organization on the Enterprise tier, or with an equivalent ",(0,t.jsx)(n.a,{href:"https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm",children:"API request allocation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Salesforce user credentials. We recommend creating a dedicated read-only ",(0,t.jsx)(n.a,{href:"#create-a-read-only-salesforce-user",children:"Salesforce user"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-connector-specification-manually",children:"Configuring the connector specification manually"}),"\n",(0,t.jsx)(n.p,{children:"If you're working with flowctl and writing specifications in a local development environment,\nyou'll need to manually supply OAuth credentials. You'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The items required to ",(0,t.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",children:"set up with OAuth2"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A Salesforce developer application with a generated client ID, client secret, and refresh token. ",(0,t.jsx)(n.a,{href:"#create-a-developer-application-and-generate-authorization-tokens",children:"See setup steps."})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h4,{id:"create-a-read-only-salesforce-user",children:"Create a read-only Salesforce user"}),"\n",(0,t.jsx)(n.p,{children:"Creating a dedicated read-only Salesforce user is a simple way to specify which objects Flow will capture.\nThis is useful if you have a large amount of data in your Salesforce organization."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["While signed in as an administrator, create a ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.users_profiles_cloning.htm&type=5",children:"new profile"})," by cloning the standard ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.standard_profiles.htm&type=5",children:"Minimum Access"})," profile."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.perm_sets_object_perms_edit.htm&type=5",children:"Edit the new profile's permissions"}),". Grant it read access to all the standard and custom objects you'd like to capture with Flow."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.adding_new_users.htm&type=5",children:"Create a new user"}),", applying the profile you just created.\nYou'll use this user's email address and password to authenticate Salesforce in Flow."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"create-a-developer-application-and-generate-authorization-tokens",children:"Create a developer application and generate authorization tokens"}),"\n",(0,t.jsx)(n.p,{children:"To manually write a capture specification for Salesforce, you need to create and configure a developer application.\nThrough this process, you'll obtain the client ID, client secret, and refresh token."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_create_api_integration.htm&type=5",children:"new developer application"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["a. When selecting ",(0,t.jsx)(n.strong,{children:"Scopes"})," for your app, select ",(0,t.jsxs)(n.strong,{children:["Manage user data via APIs ",(0,t.jsx)(n.code,{children:"(api)"})]}),", ",(0,t.jsxs)(n.strong,{children:["Perform requests at any time ",(0,t.jsx)(n.code,{children:"(refresh_token, offline_access)"})]}),", and ",(0,t.jsxs)(n.strong,{children:["Manage user data via Web browsers ",(0,t.jsx)(n.code,{children:"(web)"})]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the app to ensure that ",(0,t.jsx)(n.strong,{children:"Permitted users"})," is set to ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_oauth.htm&type=5",children:"All users may self-authorize"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Locate the ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5",children:"Consumer Key and Consumer Secret"}),". These are equivalent to the client id and client secret, respectively."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5",children:"Salesforce Web Server Flow"}),". The final POST response will include your refresh token."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the batch Salesforce source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"formula-fields",children:"Formula Fields"}),"\n",(0,t.jsx)(n.p,{children:"Estuary is able to capture Salesforce formula fields, however, regular full syncs must be configured in order to ensure up to date formula fields. Given the batch processing of this connector, if formula field values are updated in between syncs, Estuary will not be aware of any changes."}),"\n",(0,t.jsx)(n.p,{children:"In order to ensure data freshness, it is recommended that you configure your capture to regularly initiate full refreshes of your source. Once a historical backfill is complete, updated formula field values will be reflected within Estuary."}),"\n",(0,t.jsx)(n.h3,{id:"slowly-changing-dimensions-type-2",children:"Slowly Changing Dimensions Type 2"}),"\n",(0,t.jsxs)(n.p,{children:["Estuary is capable of capturing a stream of your Salesforce data as it changes through a feature called Delta Updates. To read more about how Delta Updates works visit our ",(0,t.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/materialization/#delta-updates",children:"docs"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"merging-real-time-and-batch-data",children:"Merging Real Time and Batch Data"}),"\n",(0,t.jsx)(n.p,{children:"Estuary offers connectors for both batch and real time capture. It is possible to create collections that reflect both batch and real time data capture using the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a new capture using the batch capture connector."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a new capture using the real time capture connector."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Both captures should share the same namespace in order to write to the same collection. For example, you would end up with a batch connector named ",(0,t.jsx)(n.code,{children:"Tenant/Salesforce/source-salesforce"})," and a real time capture named ",(0,t.jsx)(n.code,{children:"Tenant/Salesforce/source-salesforce-real-time"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If configured correctly, both captures will read data into the same collections that are titled ",(0,t.jsx)(n.code,{children:"Tenant/Salesforce/your-stream"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Estuary should automatically merge your documents, ensuring that duplicates are not produced when pulling from two captures with the same source. Before continuing, it is important to make sure that a reduction strategy has been implemented for your collections."}),"\n",(0,t.jsxs)(n.p,{children:["This step requires using ",(0,t.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/flowctl/",children:"flowctl"}),", please visit our documentation for more information."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Pull down your active specifications into your local environment using the command ",(0,t.jsx)(n.code,{children:"flowctl catalog pull-specs --prefix Tenant/Salesforce"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This command will generate a folder for each subtree of your tenant. Using the above example tenant, you would end up with a top level folder structure named Tenant and a sub folder named Salesforce."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Within the sub folder for your Salesforce capture you will find yaml specification files for your each of your collections that follow the naming convention ",(0,t.jsx)(n.code,{children:"BindingName.schema.yaml"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For each newly created collection, make sure that it contains the following reduction strategy:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\ntype: object\nadditionalProperties: true\nproperties:\n  Id:\n    type:\n      - string\n  ...\nrequired:\n  - Id\n# Your collection must include this line. If missing, please add below\nreduce:\n  strategy: merge\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["If the above line was missing you must also run the command ",(0,t.jsx)(n.code,{children:"flowctl catalog publish --source flow.yaml"})," at the root level of your local folder structure to publish the changes to Flow."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,t.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",children:"OAuth2"}),",\nso you won't need the ",(0,t.jsx)(n.code,{children:"/credentials"})," values listed here."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials"})})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/auth_type"})}),(0,t.jsx)(n.td,{children:"Authorization type"}),(0,t.jsxs)(n.td,{children:["Set to ",(0,t.jsx)(n.code,{children:"Client"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/client_id"})})}),(0,t.jsx)(n.td,{children:"Client ID"}),(0,t.jsx)(n.td,{children:"The Salesforce Client ID, also known as a Consumer Key, for your developer application."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/client_secret"})})}),(0,t.jsx)(n.td,{children:"Client Secret"}),(0,t.jsx)(n.td,{children:"The Salesforce Client Secret, also known as a Consumer Secret, for your developer application."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/refresh_token"})})}),(0,t.jsx)(n.td,{children:"Refresh Token"}),(0,t.jsx)(n.td,{children:"The refresh token generated by your developer application."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/is_sandbox"})}),(0,t.jsx)(n.td,{children:"Sandbox"}),(0,t.jsxs)(n.td,{children:["Whether you're using a ",(0,t.jsx)(n.a,{href:"https://help.salesforce.com/s/articleView?id=sf.deploy_sandboxes_parent.htm&type=5",children:"Salesforce Sandbox"}),"."]}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/start_date"})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"Start date in the format YYYY-MM-DD. Data added on and after this date will be captured. If this field is blank, all data will be captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/streams_criteria"})}),(0,t.jsx)(n.td,{children:"Filter Salesforce Objects (Optional)"}),(0,t.jsx)(n.td,{children:"Filter Salesforce objects for capture."}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/streams_criteria/-/criteria"})})}),(0,t.jsx)(n.td,{children:"Search criteria"}),(0,t.jsxs)(n.td,{children:["Possible criteria are ",(0,t.jsx)(n.code,{children:'"starts with"'}),", ",(0,t.jsx)(n.code,{children:'"ends with"'}),", ",(0,t.jsx)(n.code,{children:'"contains"'}),", ",(0,t.jsx)(n.code,{children:'"exacts"'}),", ",(0,t.jsx)(n.code,{children:'"starts not with"'}),", ",(0,t.jsx)(n.code,{children:'"ends not with"'}),", ",(0,t.jsx)(n.code,{children:'"not contains"'}),", and ",(0,t.jsx)(n.code,{children:'"not exacts"'}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"contains"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"/streams_criteria/-/value"})})}),(0,t.jsx)(n.td,{children:"Search value"}),(0,t.jsx)(n.td,{children:"Search term used with the selected criterion to filter objects."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/cursorField"})}),(0,t.jsx)(n.td,{children:"Cursor field"}),(0,t.jsx)(n.td,{children:"Field used as a cursor to track data replication; typically a timestamp field."}),(0,t.jsx)(n.td,{children:"array, null"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Salesforce object from which a collection is captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-salesforce:dev\n        config:\n          credentials:\n            auth_type: Client\n            client_id: {your_client_id}\n            client_secret: {secret}\n            refresh_token: {XXXXXXXX}\n          is_sandbox: false\n          start_date: 2022-01-01\n          streams_criteria:\n            - criteria: "starts with"\n              value: "Work"\n    bindings:\n      - resource:\n          cursorField: [SystemModstamp]\n          stream: WorkOrder\n          syncMode: incremental\n        target: ${PREFIX}/WorkOrder\n      - resource:\n          cursorField: [SystemModstamp]\n          stream: WorkOrderLineItem\n          syncMode: incremental\n        target: ${PREFIX}/WorkOrderLineItem\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);