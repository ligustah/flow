"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4018],{99660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(74848),i=n(28453);const o={},c="BigQuery Batch Query Connector",s={id:"reference/Connectors/capture-connectors/bigquery-batch",title:"BigQuery Batch Query Connector",description:"This connector captures data from BigQuery into Flow collections by periodically",source:"@site/docs/reference/Connectors/capture-connectors/bigquery-batch.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/bigquery-batch",permalink:"/pr-preview/pr-1450/reference/Connectors/capture-connectors/bigquery-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/bigquery-batch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Redshift",permalink:"/pr-preview/pr-1450/reference/Connectors/capture-connectors/amazon-redshift"},next:{title:"Gladly",permalink:"/pr-preview/pr-1450/reference/Connectors/capture-connectors/gladly"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Service Account",id:"service-account",level:3},{value:"Service Account Key",id:"service-account-key",level:3},{value:"Set up the BigQuery connector in Estuary Flow",id:"set-up-the-bigquery-connector-in-estuary-flow",level:3},{value:"Specifying Cursor Columns",id:"specifying-cursor-columns",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Query Templates",id:"query-templates",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"bigquery-batch-query-connector",children:"BigQuery Batch Query Connector"}),"\n",(0,r.jsx)(t.p,{children:"This connector captures data from BigQuery into Flow collections by periodically\nexecuting queries and translating the results into JSON documents."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To use this connector, you will need the following prerequisites:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A Google Cloud Project with BigQuery enabled"}),"\n",(0,r.jsx)(t.li,{children:'A Google Cloud Service Account with the "BigQuery User" and "BigQuery Data Viewer" roles in your GCP project'}),"\n",(0,r.jsx)(t.li,{children:"A Service Account Key to authenticate into your Service Account"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"See the setup guide for more information about how to create the required resources."}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.p,{children:"Follow the steps below to set up the BigQuery connector."}),"\n",(0,r.jsx)(t.h3,{id:"service-account",children:"Service Account"}),"\n",(0,r.jsx)(t.p,{children:'To sync data from BigQuery, you need credentials for a Service Account with the "BigQuery User" and "BigQuery Data Viewer" roles. These roles grant the necessary permissions to run BigQuery jobs, discover tables within the dataset, and read the contents of those tables. It is recommended to create a dedicated Service Account to facilitate permission management and auditing. However, if you already have a Service Account with the correct permissions, you can use it.'}),"\n",(0,r.jsx)(t.p,{children:"Here's how to provision a suitable service account:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Follow Google Cloud Platform's instructions for ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/service-accounts-create#creating",children:"Creating a Service Account"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Note down the ID of the service account you just created. Service Account IDs typically follow the format ",(0,r.jsx)(t.code,{children:"<account-name>@<project-name>.iam.gserviceaccount.com"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Follow Google Cloud Platform's instructions for ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/grant-role-console#grant_an_iam_role",children:"Granting IAM Roles"}),' to the new service account. The "principal" email address should be the ID of the service account you just created, and the roles granted should be "BigQuery User" and "BigQuery Data Viewer".']}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"service-account-key",children:"Service Account Key"}),"\n",(0,r.jsx)(t.p,{children:"Service Account Keys are used to authenticate as Google Service Accounts. To be able to utilize the permissions granted to the Service Account in the previous step, you'll need to provide its Service Account Key when creating the capture. It is a good practice, though not required, to create a new key for Flow even if you're reusing a preexisting account."}),"\n",(0,r.jsxs)(t.p,{children:["To create a new key for a service account, follow Google Cloud Platform's instructions for ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/keys-create-delete#creating",children:"Creating a Service Account Key"}),". Be sure to create the key in JSON format. Once the linked instructions have been followed you should have a key file, which will need to be uploaded to Flow when setting up your capture."]}),"\n",(0,r.jsx)(t.h3,{id:"set-up-the-bigquery-connector-in-estuary-flow",children:"Set up the BigQuery connector in Estuary Flow"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Log into your Estuary Flow account."}),"\n",(0,r.jsx)(t.li,{children:'In the left navigation bar, click on "Sources". In the top-left corner, click "New Capture".'}),"\n",(0,r.jsx)(t.li,{children:'Locate and select the "BigQuery" connector.'}),"\n",(0,r.jsx)(t.li,{children:"Enter a name and optional description for the capture task."}),"\n",(0,r.jsx)(t.li,{children:"Enter the Project ID and Dataset name that you intend to capture from, and paste or upload the service account key in the appropriate field."}),"\n",(0,r.jsx)(t.li,{children:'Click the "Next" button and wait while the connector automatically discovers the available tables in the specified project and dataset.'}),"\n",(0,r.jsx)(t.li,{children:"Select the tables you wish to capture from the bindings list."}),"\n",(0,r.jsxs)(t.li,{children:["For each binding you selected, you will likely wish to ",(0,r.jsx)(t.a,{href:"#specifying-cursor-columns",children:"specify cursor columns"}),' and a shorter "Poll Interval" setting. Otherwise the default behavior will be to recapture the entire contents of the table, once per day.']}),"\n",(0,r.jsx)(t.li,{children:'Once you are satisfied with your binding selection, click the "Save and Publish" button.'}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"specifying-cursor-columns",children:"Specifying Cursor Columns"}),"\n",(0,r.jsxs)(t.p,{children:["This connector operates by periodically executing a ",(0,r.jsx)(t.code,{children:"SELECT * FROM table"})," query and\noutputting the resulting rows as JSON documents into a Flow collection. In some cases\ndoing this once or twice a day is entirely sufficient, but when working with larger\ntables (or if a faster update rate is desired) it pays to manually configure cursor\ncolumns."]}),"\n",(0,r.jsx)(t.p,{children:"The cursor must be a column (or ordered tuple of columns) which is expected to strictly\nincrease for newly added or updated rows. Common examples of suitable cursors include:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Update timestamps, which are often the best choice if available since they can\noften be used to identify changed rows as well as new insertions."}),"\n",(0,r.jsx)(t.li,{children:"Creation timestamps, which can be used to identify newly added rows in append-only\ndatasets but won't help to identify changes to preexisting rows."}),"\n",(0,r.jsx)(t.li,{children:"Monotonically increasing IDs, which are another way of identifying newly added rows\nbut often don't help with update detection."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When a cursor is specified, the update query will take the form ",(0,r.jsx)(t.code,{children:"SELECT * FROM $table WHERE $cursorName > $lastCursorValue ORDER BY $cursorName"}),"\nand the capture connector will keep track of the highest observed cursor value between polling intervals.\nIf multiple cursor columns are specified, they will be treated as an ordered tuple of columns which\ncollectively form the cursor, and the obvious lexicographic tuple ordering will apply."]}),"\n",(0,r.jsxs)(t.p,{children:["Once you have specified a suitable cursor for a table, you will likely want to lower the\npolling interval for that binding. The default polling interval is ",(0,r.jsx)(t.code,{children:'"24h"'})," to keep data\nvolumes low, but once a cursor is specified there is usually no downside to frequent\npolling, so you may wish to lower the interval to ",(0,r.jsx)(t.code,{children:'"5m'}),'" or even ',(0,r.jsx)(t.code,{children:'"5s"'})," for that table."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,r.jsx)(t.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the BigQuery source connector."]}),"\n",(0,r.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/project_id"})}),(0,r.jsx)(t.td,{children:"Project ID"}),(0,r.jsx)(t.td,{children:"The GCP project ID for the project containing the source BigQuery dataset"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/dataset"})}),(0,r.jsx)(t.td,{children:"Dataset"}),(0,r.jsx)(t.td,{children:"The BigQuery dataset to discover tables within"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/credentials_json"})}),(0,r.jsx)(t.td,{children:"Credentials JSON"}),(0,r.jsx)(t.td,{children:"The contents of your Service Account Key JSON file"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/advanced/poll"})}),(0,r.jsx)(t.td,{children:"Poll Interval"}),(0,r.jsx)(t.td,{children:"How often to poll bindings (may be overridden for a specific binding)"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"24h"'})})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/name"})})}),(0,r.jsx)(t.td,{children:"Name"}),(0,r.jsx)(t.td,{children:"A name which uniquely identifies this binding."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/cursor"})})}),(0,r.jsx)(t.td,{children:"Cursor"}),(0,r.jsx)(t.td,{children:"The column name(s) which should be used as the incremental capture cursor"}),(0,r.jsx)(t.td,{children:"array"}),(0,r.jsx)(t.td,{children:"[]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/template"})})}),(0,r.jsx)(t.td,{children:"Template"}),(0,r.jsx)(t.td,{children:"The query (template) which will be executed every polling interval"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/poll"})})}),(0,r.jsx)(t.td,{children:"Poll Interval"}),(0,r.jsx)(t.td,{children:"Override the global polling interval for this binding."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"query-templates",children:"Query Templates"}),"\n",(0,r.jsxs)(t.p,{children:["The query template property of a binding defines what query will be executed against\nthe database, given inputs describing the configured cursor columns and whether any prior\ncursor state exists. The default template implements the behavior described in\n",(0,r.jsx)(t.a,{href:"#specifying-cursor-columns",children:"specifying cursor columns"}),"."]}),"\n",(0,r.jsx)(t.p,{children:'In principle you are free to modify this template to implement whatever query you need.\nYou could for instance create a new binding which queries a view, or which performs a\nmore complex analytics query. However this should not be combined with table auto-discovery\nin a single capture, as this can produce some counterintuitive results. Instead create two\nseparate capture tasks from the same database, one for autodiscovered tables and a separate\none with the setting "Automatically Add New Collections" disabled for your custom bindings.'})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);