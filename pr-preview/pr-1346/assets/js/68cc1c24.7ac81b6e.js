"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4},i="Google BigQuery",o={unversionedId:"reference/Connectors/materialization-connectors/BigQuery",id:"reference/Connectors/materialization-connectors/BigQuery",title:"Google BigQuery",description:"This Flow connector materializes Flow collections into tables within a Google BigQuery dataset.",source:"@site/docs/reference/Connectors/materialization-connectors/BigQuery.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/BigQuery",permalink:"/pr-preview/pr-1346/reference/Connectors/materialization-connectors/BigQuery",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/BigQuery.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Firebolt",permalink:"/pr-preview/pr-1346/reference/Connectors/materialization-connectors/Firebolt"},next:{title:"Google Cloud Pub/Sub",permalink:"/pr-preview/pr-1346/reference/Connectors/materialization-connectors/google-pubsub"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-bigquery"},"Google BigQuery"),(0,r.kt)("p",null,"This Flow connector materializes Flow collections into tables within a Google BigQuery dataset.\nIt allows both standard and ",(0,r.kt)("a",{parentName:"p",href:"#delta-updates"},"delta updates"),"."),(0,r.kt)("p",null,"The connector uses your Google Cloud service account to materialize to BigQuery tables by way of files in a Google Cloud Storage (GCS) bucket.\nThe tables in the bucket act as a temporary staging area for data storage and retrieval."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-bigquery"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-bigquery:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"new Google Cloud Storage bucket")," in the same region as the BigQuery destination dataset.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google Cloud ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started"},"service account")," with a key file generated and the following roles:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor"},(0,r.kt)("inlineCode",{parentName:"a"},"roles/bigquery.dataEditor"))," on the destination dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.jobUser"},(0,r.kt)("inlineCode",{parentName:"a"},"roles/bigquery.jobUser"))," on the\nproject with which the BigQuery destination dataset is associated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles"},(0,r.kt)("inlineCode",{parentName:"a"},"roles/storage.objectAdmin")),"\non the GCS bucket created above"),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"#setup"},"Setup")," for detailed steps to set up your service account."))))),(0,r.kt)("p",null,"The Flow collections you materialize must accommodate the following naming restrictions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Field names may not contain hyphens (",(0,r.kt)("inlineCode",{parentName:"li"},"-"),"), or the materialization will fail."),(0,r.kt)("li",{parentName:"ul"},"Field names must begin with a letter or underscore (",(0,r.kt)("inlineCode",{parentName:"li"},"_"),"), or the materialization will fail."),(0,r.kt)("li",{parentName:"ul"},"Field names ",(0,r.kt)("em",{parentName:"li"},"may")," contain non-alphanumeric characters, but these are replaced with underscores in the corresponding BigQuery column name."),(0,r.kt)("li",{parentName:"ul"},"If two field names become identical after special characters are replaced with underscores (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"field!")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"field$")," both become ",(0,r.kt)("inlineCode",{parentName:"li"},"field_"),"), the materialization will fail."),(0,r.kt)("li",{parentName:"ul"},"Collection names ",(0,r.kt)("em",{parentName:"li"},"may")," contain non-alphanumeric characters, but all such characters except hyphens are replaced with underscores in the BigQuery table name.")),(0,r.kt)("p",null,"If necessary, you can add ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/advanced/projections"},"projections")," to your collection specification to change field names."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps.")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To configure your service account, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into the Google Cloud console and ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account"},"create a service account"),".\nDuring account creation:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Grant the user access to the project."),(0,r.kt)("li",{parentName:"ol"},"Grant the user roles ",(0,r.kt)("inlineCode",{parentName:"li"},"roles/bigquery.dataEditor"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"roles/bigquery.jobUser"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"roles/storage.objectAdmin"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Done"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the new service account from the list of service accounts. On the Keys tab, click ",(0,r.kt)("strong",{parentName:"p"},"Add key")," and create a new JSON key."),(0,r.kt)("p",{parentName:"li"},"The key is automatically downloaded. You'll use it to configure the connector."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a BigQuery materialization, which will direct one or more of your Flow collections to your desired tables within a BigQuery dataset."),(0,r.kt)("p",null,"A BigQuery dataset is the top-level container within a project, and comprises multiple tables.\nYou can think of a dataset as somewhat analogous to a schema in a relational database.\nFor a complete introduction to resource organization in Bigquery, see the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/resource-hierarchy"},"BigQuery docs"),"."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/project_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The project ID for the Google Cloud Storage bucket and BigQuery dataset."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials_json"))),(0,r.kt)("td",{parentName:"tr",align:null},"Service Account JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON credentials of the service account to use for authorization."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region"))),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"The GCS region."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/dataset"))),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"BigQuery dataset for bound collection tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the GCS bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/bucket_path")),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket path"),(0,r.kt)("td",{parentName:"tr",align:null},'Base path within the GCS bucket. Also called "Folder" in the GCS console.'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/billing_project_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Billing project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The project ID to which these operations are billed in BigQuery. Typically, you want this to be the same as ",(0,r.kt)("inlineCode",{parentName:"td"},"project_id")," (the default)."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as ",(0,r.kt)("inlineCode",{parentName:"td"},"project_id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/updateDelay")),(0,r.kt)("td",{parentName:"tr",align:null},"Update Delay"),(0,r.kt)("td",{parentName:"tr",align:null},"Potentially reduce compute time by increasing the delay between updates. Defaults to 30 minutes if unset."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"To learn more about project billing, ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/billing/docs/how-to/verify-billing-enabled"},"see the BigQuery docs"),"."),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Table in the BigQuery dataset to store materialized result in."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dataset")),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative dataset for this table. Must be located in the region set in the endpoint configuration."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/delta_updates")),(0,r.kt)("td",{parentName:"tr",align:null},"Delta updates."),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use standard or ",(0,r.kt)("a",{parentName:"td",href:"#delta-updates"},"delta updates")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        config:\n          project_id: our-bigquery-project\n          dataset: materialized-data\n          region: US\n          bucket: our-gcs-bucket\n          bucket_path: bucket-path/\n          credentials_json: <secret>\n        image: ghcr.io/estuary/materialize-bigquery:dev\n    bindings:\n    - resource:\n        table: ${table_name}\n      source: ${PREFIX}/${source_collection}\n")),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector supports both standard (merge) and ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/materialization#delta-updates"},"delta updates"),".\nThe default is to use standard updates."),(0,r.kt)("p",null,"Enabling delta updates will prevent Flow from querying for documents in your BigQuery table, which can reduce latency and costs for large datasets.\nIf you're certain that all events will have unique keys, enabling delta updates is a simple way to improve\nperformance with no effect on the output.\nHowever, enabling delta updates is not suitable for all workflows, as the resulting table in BigQuery won't be fully reduced."),(0,r.kt)("p",null,"You can enable delta updates on a per-binding basis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    bindings:\n    - resource:\n        table: ${table_name}\n        delta_updates: true\n    source: ${PREFIX}/${source_collection}\n")))}c.isMDXComponent=!0}}]);