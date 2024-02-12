"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="BigQuery Batch Query Connector",l={unversionedId:"reference/Connectors/capture-connectors/bigquery-batch",id:"reference/Connectors/capture-connectors/bigquery-batch",title:"BigQuery Batch Query Connector",description:"This connector captures data from BigQuery into Flow collections by periodically",source:"@site/docs/reference/Connectors/capture-connectors/bigquery-batch.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/bigquery-batch",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/bigquery-batch",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/bigquery-batch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Redshift",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/amazon-redshift"},next:{title:"Google Drive",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/google-drive"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Service Account",id:"service-account",level:3},{value:"Service Account Key",id:"service-account-key",level:3},{value:"Set up the BigQuery connector in Estuary Flow",id:"set-up-the-bigquery-connector-in-estuary-flow",level:3},{value:"Specifying Cursor Columns",id:"specifying-cursor-columns",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Query Templates",id:"query-templates",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bigquery-batch-query-connector"},"BigQuery Batch Query Connector"),(0,a.kt)("p",null,"This connector captures data from BigQuery into Flow collections by periodically\nexecuting queries and translating the results into JSON documents."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use this connector, you will need the following prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Google Cloud Project with BigQuery enabled"),(0,a.kt)("li",{parentName:"ul"},'A Google Cloud Service Account with the "BigQuery User" and "BigQuery Data Viewer" roles in your GCP project'),(0,a.kt)("li",{parentName:"ul"},"A Service Account Key to authenticate into your Service Account")),(0,a.kt)("p",null,"See the setup guide for more information about how to create the required resources."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Follow the steps below to set up the BigQuery connector."),(0,a.kt)("h3",{id:"service-account"},"Service Account"),(0,a.kt)("p",null,'To sync data from BigQuery, you need credentials for a Service Account with the "BigQuery User" and "BigQuery Data Viewer" roles. These roles grant the necessary permissions to run BigQuery jobs, discover tables within the dataset, and read the contents of those tables. It is recommended to create a dedicated Service Account to facilitate permission management and auditing. However, if you already have a Service Account with the correct permissions, you can use it.'),(0,a.kt)("p",null,"Here's how to provision a suitable service account:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow Google Cloud Platform's instructions for ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/service-accounts-create#creating"},"Creating a Service Account"),"."),(0,a.kt)("li",{parentName:"ol"},"Note down the ID of the service account you just created. Service Account IDs typically follow the format ",(0,a.kt)("inlineCode",{parentName:"li"},"<account-name>@<project-name>.iam.gserviceaccount.com"),"."),(0,a.kt)("li",{parentName:"ol"},"Follow Google Cloud Platform's instructions for ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/grant-role-console#grant_an_iam_role"},"Granting IAM Roles"),' to the new service account. The "principal" email address should be the ID of the service account you just created, and the roles granted should be "BigQuery User" and "BigQuery Data Viewer".')),(0,a.kt)("h3",{id:"service-account-key"},"Service Account Key"),(0,a.kt)("p",null,"Service Account Keys are used to authenticate as Google Service Accounts. To be able to utilize the permissions granted to the Service Account in the previous step, you'll need to provide its Service Account Key when creating the capture. It is a good practice, though not required, to create a new key for Flow even if you're reusing a preexisting account."),(0,a.kt)("p",null,"To create a new key for a service account, follow Google Cloud Platform's instructions for ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/keys-create-delete#creating"},"Creating a Service Account Key"),". Be sure to create the key in JSON format. Once the linked instructions have been followed you should have a key file, which will need to be uploaded to Flow when setting up your capture."),(0,a.kt)("h3",{id:"set-up-the-bigquery-connector-in-estuary-flow"},"Set up the BigQuery connector in Estuary Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into your Estuary Flow account."),(0,a.kt)("li",{parentName:"ol"},'In the left navigation bar, click on "Sources". In the top-left corner, click "New Capture".'),(0,a.kt)("li",{parentName:"ol"},'Locate and select the "BigQuery" connector.'),(0,a.kt)("li",{parentName:"ol"},"Enter a name and optional description for the capture task."),(0,a.kt)("li",{parentName:"ol"},"Enter the Project ID and Dataset name that you intend to capture from, and paste or upload the service account key in the appropriate field."),(0,a.kt)("li",{parentName:"ol"},'Click the "Next" button and wait while the connector automatically discovers the available tables in the specified project and dataset.'),(0,a.kt)("li",{parentName:"ol"},"Select the tables you wish to capture from the bindings list."),(0,a.kt)("li",{parentName:"ol"},"For each binding you selected, you will likely wish to ",(0,a.kt)("a",{parentName:"li",href:"#specifying-cursor-columns"},"specify cursor columns"),' and a shorter "Poll Interval" setting. Otherwise the default behavior will be to recapture the entire contents of the table, once per day.'),(0,a.kt)("li",{parentName:"ol"},'Once you are satisfied with your binding selection, click the "Save and Publish" button.')),(0,a.kt)("h3",{id:"specifying-cursor-columns"},"Specifying Cursor Columns"),(0,a.kt)("p",null,"This connector operates by periodically executing a ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM table")," query and\noutputting the resulting rows as JSON documents into a Flow collection. In some cases\ndoing this once or twice a day is entirely sufficient, but when working with larger\ntables (or if a faster update rate is desired) it pays to manually configure cursor\ncolumns."),(0,a.kt)("p",null,"The cursor must be a column (or ordered tuple of columns) which is expected to strictly\nincrease for newly added or updated rows. Common examples of suitable cursors include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update timestamps, which are often the best choice if available since they can\noften be used to identify changed rows as well as new insertions."),(0,a.kt)("li",{parentName:"ul"},"Creation timestamps, which can be used to identify newly added rows in append-only\ndatasets but won't help to identify changes to preexisting rows."),(0,a.kt)("li",{parentName:"ul"},"Monotonically increasing IDs, which are another way of identifying newly added rows\nbut often don't help with update detection.")),(0,a.kt)("p",null,"When a cursor is specified, the update query will take the form ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM $table WHERE $cursorName > $lastCursorValue ORDER BY $cursorName"),"\nand the capture connector will keep track of the highest observed cursor value between polling intervals.\nIf multiple cursor columns are specified, they will be treated as an ordered tuple of columns which\ncollectively form the cursor, and the obvious lexicographic tuple ordering will apply."),(0,a.kt)("p",null,"Once you have specified a suitable cursor for a table, you will likely want to lower the\npolling interval for that binding. The default polling interval is ",(0,a.kt)("inlineCode",{parentName:"p"},'"24h"')," to keep data\nvolumes low, but once a cursor is specified there is usually no downside to frequent\npolling, so you may wish to lower the interval to ",(0,a.kt)("inlineCode",{parentName:"p"},'"5m'),'" or even ',(0,a.kt)("inlineCode",{parentName:"p"},'"5s"')," for that table."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the BigQuery source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/project_id")),(0,a.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,a.kt)("td",{parentName:"tr",align:null},"The GCP project ID for the project containing the source BigQuery dataset"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/dataset")),(0,a.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,a.kt)("td",{parentName:"tr",align:null},"The BigQuery dataset to discover tables within"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/credentials_json")),(0,a.kt)("td",{parentName:"tr",align:null},"Credentials JSON"),(0,a.kt)("td",{parentName:"tr",align:null},"The contents of your Service Account Key JSON file"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/advanced/poll")),(0,a.kt)("td",{parentName:"tr",align:null},"Poll Interval"),(0,a.kt)("td",{parentName:"tr",align:null},"How often to poll bindings (may be overridden for a specific binding)"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"24h"'))))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/name"))),(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"A name which uniquely identifies this binding."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/cursor"))),(0,a.kt)("td",{parentName:"tr",align:null},"Cursor"),(0,a.kt)("td",{parentName:"tr",align:null},"The column name(s) which should be used as the incremental capture cursor"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/template"))),(0,a.kt)("td",{parentName:"tr",align:null},"Template"),(0,a.kt)("td",{parentName:"tr",align:null},"The query (template) which will be executed every polling interval"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/poll"))),(0,a.kt)("td",{parentName:"tr",align:null},"Poll Interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Override the global polling interval for this binding."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},'""')))),(0,a.kt)("h3",{id:"query-templates"},"Query Templates"),(0,a.kt)("p",null,"The query template property of a binding defines what query will be executed against\nthe database, given inputs describing the configured cursor columns and whether any prior\ncursor state exists. The default template implements the behavior described in\n",(0,a.kt)("a",{parentName:"p",href:"#specifying-cursor-columns"},"specifying cursor columns"),"."),(0,a.kt)("p",null,'In principle you are free to modify this template to implement whatever query you need.\nYou could for instance create a new binding which queries a view, or which performs a\nmore complex analytics query. However this should not be combined with table auto-discovery\nin a single capture, as this can produce some counterintuitive results. Instead create two\nseparate capture tasks from the same database, one for autodiscovered tables and a separate\none with the setting "Automatically Add New Collections" disabled for your custom bindings.'))}d.isMDXComponent=!0}}]);