"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6097],{32046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),o=n(28453);const r={},s="Google Sheets",l={id:"reference/Connectors/materialization-connectors/Google-sheets",title:"Google Sheets",description:"This connector materializes Flow collections into sheets in a Google Sheets spreadsheet.",source:"@site/docs/reference/Connectors/materialization-connectors/Google-sheets.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Google-sheets",permalink:"/pr-preview/pr-1462/reference/Connectors/materialization-connectors/Google-sheets",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Google-sheets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Pub/Sub",permalink:"/pr-preview/pr-1462/reference/Connectors/materialization-connectors/google-pubsub"},next:{title:"HTTP Webhook",permalink:"/pr-preview/pr-1462/reference/Connectors/materialization-connectors/http-webhook"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"OAuth authentication using the Flow web app",id:"oauth-authentication-using-the-flow-web-app",level:3},{value:"Manual authentication",id:"manual-authentication",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"google-sheets",children:"Google Sheets"}),"\n",(0,i.jsx)(t.p,{children:"This connector materializes Flow collections into sheets in a Google Sheets spreadsheet."}),"\n",(0,i.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.jsx)(t.a,{href:"https://ghcr.io/estuary/materialize-google-sheets:dev",children:(0,i.jsx)(t.code,{children:"ghcr.io/estuary/materialize-google-sheets:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"At least one Flow collection."}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsx)(t.p,{children:"For performance reasons, this connector is limited to 1 million cells per materialized sheet.\nIf a bound collection has more than 1 million unique keys, the materialization will fail."}),(0,i.jsxs)(t.p,{children:["If you plan to materialize a collection with an unbounded number of keys,\nyou should first use a ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/guides/flowctl/create-derivation",children:"derivation"})," to summarize it\ninto a collection with a bounded set of keys."]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The URL of a Google spreadsheet that ",(0,i.jsx)(t.em,{children:"does not"})," contain the output of a prior Flow materialization."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Materializing data to a spreadsheet that already contains the output of another Flow materialization can result in an error.\nUse a new spreadsheet for each materialization, or completely clear the output of prior materializations from the spreadsheet before you continue."})}),"\n",(0,i.jsx)(t.p,{children:"There are two ways to authenticate with Google when using this connector:\nsigning in with Google through OAuth in the web app, and configuring manually with a Google service account key.\nOAuth is simpler, and is recommended when using the web app.\nOnly manual configuration is supported using the CLI."}),"\n",(0,i.jsx)(t.p,{children:"Additional prerequisites depend on the authentication method you choose."}),"\n",(0,i.jsx)(t.h3,{id:"oauth-authentication-using-the-flow-web-app",children:"OAuth authentication using the Flow web app"}),"\n",(0,i.jsx)(t.p,{children:"You'll need:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The username and password of a Google account with edit access to the destination spreadsheet."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"manual-authentication",children:"Manual authentication"}),"\n",(0,i.jsx)(t.p,{children:"You'll need:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Google Sheets and Google Drive APIs enabled on your Google account."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"A Google service account with:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A JSON key generated."}),"\n",(0,i.jsx)(t.li,{children:"Edit access to the destination spreadsheet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Follow the steps below to meet these prerequisites:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en",children:"Enable"})," the Google Sheets and Google Drive APIs\nfor the Google ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/projects",children:"project"})," with which your spreadsheet is associated.\n(Unless you actively develop with Google Cloud, you'll likely just have one option)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a ",(0,i.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount",children:"service account and generate a JSON key"}),".\nDuring setup, grant the account the ",(0,i.jsx)(t.strong,{children:"Editor"})," role on your project.\nYou'll copy the contents of the downloaded key file into the Service Account JSON parameter when you configure the connector."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Share your Google spreadsheet with the service account, granting edit access."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Google Sheets materialization."}),"\n",(0,i.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["The following properties reflect the manual authentication method. If you're working in the Flow web app, you can use ",(0,i.jsx)(t.a,{href:"#oauth-authentication-using-the-flow-web-app",children:"OAuth"}),", so some of these properties aren't required."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Title"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required/Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/credentials"})})}),(0,i.jsx)(t.td,{children:"Authentication"}),(0,i.jsx)(t.td,{children:"Credentials used to authenticate with Google."}),(0,i.jsx)(t.td,{children:"array, boolean, null, number, object, string"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/credentials/auth_type"})}),(0,i.jsx)(t.td,{children:"Authentication type"}),(0,i.jsxs)(t.td,{children:["Set to ",(0,i.jsx)(t.code,{children:"Service"})," for manual authentication, or use OAuth in the web app."]}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/credentials/credentials_json"})})}),(0,i.jsx)(t.td,{children:"Service Account JSON"}),(0,i.jsxs)(t.td,{children:["The JSON key of the service account to use for authorization, when using the ",(0,i.jsx)(t.code,{children:"Service"})," authentication method."]}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/spreadsheetURL"})})}),(0,i.jsx)(t.td,{children:"Spreadsheet URL"}),(0,i.jsx)(t.td,{children:"URL of the spreadsheet to materialize into, which is shared with the service account."}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsx)(t.p,{children:"Configure a separate binding for each collection you want to materialize to a sheet.\nNote that the connector will add an addition column to the beginning of each sheet;\nthis is to track the internal state of the data."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Title"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required/Default"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/sheet"})})}),(0,i.jsx)(t.td,{children:"Sheet Name"}),(0,i.jsx)(t.td,{children:"Name of the spreadsheet sheet to materialize into"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsxs)(t.p,{children:["This sample reflects the ",(0,i.jsx)(t.a,{href:"#manual-authentication",children:"manual authentication"})," method using the CLI."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n\t  endpoint:\n        connector:\n          config:\n            credentials:\n              auth_type: Service\n              credentials_json: <secret>\n            spreadsheetURL: `https://docs.google.com/spreadsheets/d/<your_spreadsheet_ID>/edit\n          image: ghcr.io/estuary/materialize-google-sheets:dev\n\t# If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n      - resource:\n          sheet: my_sheet\n      source: ${PREFIX}/${source_collection}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);