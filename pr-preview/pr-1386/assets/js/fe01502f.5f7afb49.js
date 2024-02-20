"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9414],{19983:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(74848),i=s(28453);const r={sidebar_position:5},c="NetSuite",o={id:"reference/Connectors/capture-connectors/netsuite-odbc",title:"NetSuite",description:"This connector captures data from Oracle NetSuite into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/netsuite-odbc.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/netsuite-odbc",permalink:"/pr-preview/pr-1386/reference/Connectors/capture-connectors/netsuite-odbc",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/netsuite-odbc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for MySQL",permalink:"/pr-preview/pr-1386/reference/Connectors/capture-connectors/google-cloud-sql-mysql"},next:{title:"NetSuite",permalink:"/pr-preview/pr-1386/reference/Connectors/capture-connectors/netsuite"}},l={},d=[{value:"SuiteAnalytics vs SuiteQL via REST API",id:"suiteanalytics-vs-suiteql-via-rest-api",level:2},{value:"SuiteAnalytics Connect",id:"suiteanalytics-connect",level:3},{value:"SuiteQL via REST API",id:"suiteql-via-rest-api",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"General Setup",id:"general-setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"netsuite",children:"NetSuite"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from Oracle NetSuite into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-netsuite:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-netsuite:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.p,{children:"This connector can be used in two different modes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connect to the NetSuite Analytics Data Warehouse using the SuiteQL REST endpoint and a custom role."}),"\n",(0,t.jsx)(n.li,{children:"Connect to the NetSuite Analytics Data Warehouse using the ODBC Connector and the bundled Data Warehouse role"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"suiteanalytics-vs-suiteql-via-rest-api",children:"SuiteAnalytics vs SuiteQL via REST API"}),"\n",(0,t.jsx)(n.p,{children:"These two different connection modes have some key differences:"}),"\n",(0,t.jsx)(n.h3,{id:"suiteanalytics-connect",children:"SuiteAnalytics Connect"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Requires the SuiteAnalytics Connect feature to be purchased on your NetSuite account"}),"\n",(0,t.jsx)(n.li,{children:"Can inspect which tables (standard & custom) exist in your account"}),"\n",(0,t.jsx)(n.li,{children:"Can inspect the exact data types specified on these table columns"}),"\n",(0,t.jsx)(n.li,{children:"This means you can connect to any table in your account and all fields (booleans, date, and datetimes) are properly formatted in Estuary"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"suiteql-via-rest-api",children:"SuiteQL via REST API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Custom tables are not supported without manual work"}),"\n",(0,t.jsx)(n.li,{children:"Some standard tables may not yet be supported and will require additional work from the Estuary team"}),"\n",(0,t.jsx)(n.li,{children:"Datetime values are represented as dates without the time specification (this is a limitation of the REST API)"}),"\n",(0,t.jsx)(n.li,{children:"Data types on custom columns may not be properly represented"}),"\n",(0,t.jsx)(n.li,{children:"You are repsonsible for determining the right set of permissions to grant the connector, which can often be complicated and unintuitive"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Oracle NetSuite ",(0,t.jsx)(n.a,{href:"https://system.netsuite.com/pages/customerlogin.jsp?country=US",children:"account"})]}),"\n",(0,t.jsx)(n.li,{children:"Allowed access to all Account permissions options"}),"\n",(0,t.jsx)(n.li,{children:"A new integration with token-based authentication"}),"\n",(0,t.jsxs)(n.li,{children:["A custom role with access to objects you want to capture ",(0,t.jsx)(n.em,{children:"or"})," a purchased SuiteAnalytics Module. See ",(0,t.jsx)(n.a,{href:"#setup",children:"setup"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"A new user assigned to the custom role"}),"\n",(0,t.jsx)(n.li,{children:"Access token generated for the custom role"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"general-setup",children:"General Setup"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set up required features on your NetSuite account"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Find your Account ID\xa0(also know as the "Realm"). You\'ll use this to connect with Flow.'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your NetSuite portal, go to ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Company"})," > ",(0,t.jsx)(n.strong,{children:"Company Information"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy your Account ID."}),"\n",(0,t.jsxs)(n.p,{children:["If you have a production account, it will look like ",(0,t.jsx)(n.code,{children:"2345678"}),". If you're using a sandbox, it'll look like ",(0,t.jsx)(n.code,{children:"2345678_SB2"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enable the required features."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Company"})," > ",(0,t.jsx)(n.strong,{children:"Enable Features"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"SuiteCloud"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Manage Authentication"})," section, check the checkbox labeled ",(0,t.jsx)(n.strong,{children:"TOKEN-BASED AUTHENTICATION"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you are using the SuiteQL connection, in the ",(0,t.jsx)(n.strong,{children:"SuiteTalk (Web Services)"})," section, check the checkbox labeled ",(0,t.jsx)(n.strong,{children:"REST WEB SERVICES"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you are using SuiteAnalytics Connect, navigate to ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Company"})," > ",(0,t.jsx)(n.strong,{children:"Analytics"})," > ",(0,t.jsx)(n.strong,{children:"Connectivity"})," and check the checkbox labeled ",(0,t.jsx)(n.strong,{children:"SuiteAnalytics Connect"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a NetSuite ",(0,t.jsx)(n.em,{children:"integration"})," to obtain a Consumer Key and Consumer Secret."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Integration"})," > ",(0,t.jsx)(n.strong,{children:"Manage Integrations"})," > ",(0,t.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Give the integration a name, for example, ",(0,t.jsx)(n.code,{children:"estuary-netsuite-integration"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure the ",(0,t.jsx)(n.strong,{children:"State"})," option is enabled."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Authentication"})," section, check the ",(0,t.jsx)(n.strong,{children:"Token-Based Authentication"})," checkbox."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Your Consumer Key and Consumer Secret will be shown once. Copy them to a safe place. They will never show up again\nand will be key to the integration working properly."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you are using the ",(0,t.jsx)(n.strong,{children:"SuiteQL"})," over REST API connection, Set up a role for use with Flow."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Users/Roles"})," > ",(0,t.jsx)(n.strong,{children:"Manage Roles"})," > ",(0,t.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Give the role a name, for example, ",(0,t.jsx)(n.code,{children:"estuary-integration-role"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'The easiest thing to do here is to click "Core Administrative Permissions". If you want to scope down the permissions given to the connector (which you should) you\'ll have to determine which permissions are necessary. This can get tricky because many different settings can expand the required permissions (for instance, a custom script on a record could require additional permissions).'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Scroll to the ",(0,t.jsx)(n.strong,{children:"Permissions"})," section."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(IMPORTANT) Click ",(0,t.jsx)(n.strong,{children:"Transactions"})," and add all the dropdown entities with either ",(0,t.jsx)(n.strong,{children:"full"})," or ",(0,t.jsx)(n.strong,{children:"view"})," access level."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Find Transaction"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(IMPORTANT) Click ",(0,t.jsx)(n.strong,{children:"Setup"})," an add the following entities with either ",(0,t.jsx)(n.strong,{children:"full"})," or ",(0,t.jsx)(n.strong,{children:"view"})," access level."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Log in using Access Tokens"}),"\n",(0,t.jsx)(n.li,{children:"REST Web Services"}),"\n",(0,t.jsx)(n.li,{children:"User Access Tokens"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To allow your custom role to reflect future changes, be sure to edit these parameters again when you rename or customize any NetSuite object."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you are using ",(0,t.jsx)(n.strong,{children:"SuiteAnalytics Connect"}),' you don\'t need a custom role. Instead, you can use the bundled "Data Warehouse Integrator"']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set up user for use with the connector."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Users/Roles"})," > ",(0,t.jsx)(n.strong,{children:"Manage Users"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Find the user you want to give access to use with Flow. In the ",(0,t.jsx)(n.strong,{children:"Name"})," column, click the user's name. Then, click the ",(0,t.jsx)(n.strong,{children:"Edit"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Find the ",(0,t.jsx)(n.strong,{children:"Access"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the dropdown list, select either role you created previously (e.g. ",(0,t.jsx)(n.code,{children:"estuary-integration-role"}),") or the ",(0,t.jsx)(n.strong,{children:"Data Warehouse Integrator"})," role if you are using SuiteAnalytics Connect."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Generate an access token."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Users/Roles"})," > ",(0,t.jsx)(n.strong,{children:"Access Tokens"})," > ",(0,t.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Application Name"})," you created earlier."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"User"}),", select the user you assigned the role previously."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"Role"}),", select the role you assigned to the user previously."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"Token Name"}),",  give a descriptive name to the token you are creating, for example ",(0,t.jsx)(n.code,{children:"estuary-rest-integration-token"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Your Token ID and Token Secret will be shown once. Copy them to a safe place."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You now have a properly configured account with the correct permissions and all the information you need to connect with Flow:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Account ID (Realm)"}),"\n",(0,t.jsx)(n.li,{children:"Consumer Key"}),"\n",(0,t.jsx)(n.li,{children:"Consumer Secret"}),"\n",(0,t.jsx)(n.li,{children:"Token ID"}),"\n",(0,t.jsx)(n.li,{children:"Token Secret"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1386/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the NetSuite source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/account_id"})}),(0,t.jsx)(n.td,{children:"Realm"}),(0,t.jsxs)(n.td,{children:["Netsuite realm e.g. 2344535, as for ",(0,t.jsx)(n.code,{children:"production"})," or 2344535_SB1, as for the ",(0,t.jsx)(n.code,{children:"sandbox"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/start_date"})}),(0,t.jsx)(n.td,{children:"Token Secret"}),(0,t.jsx)(n.td,{children:"The date to start collecting data from"}),(0,t.jsx)(n.td,{children:"date"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/consumer_key"})}),(0,t.jsx)(n.td,{children:"Consumer Key"}),(0,t.jsx)(n.td,{children:"Consumer key associated with your integration."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/consumer_secret"})}),(0,t.jsx)(n.td,{children:"Consumer Secret"}),(0,t.jsx)(n.td,{children:"Consumer secret associated with your integration."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/token_key"})}),(0,t.jsx)(n.td,{children:"Token Key"}),(0,t.jsx)(n.td,{children:"Access token key"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/token_secret"})}),(0,t.jsx)(n.td,{children:"Token Secret"}),(0,t.jsx)(n.td,{children:"Access token secret"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource of your NetSuite project from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-netsuite:dev\n        config:\n          account_id: <your account id>\n          consumer_key: <key>\n          consumer_secret: <secret>\n          token_key: <key>\n          token_secret: <secret>\n          start_date: "2023-11-01T00:00:00Z"\n    bindings:\n      - resource:\n          stream: Transaction\n        target: ${PREFIX}/Transaction\n      {...}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);