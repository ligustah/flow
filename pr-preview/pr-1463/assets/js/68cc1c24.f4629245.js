"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3349],{78324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(74848),r=n(28453);const a={},s="Google BigQuery",o={id:"reference/Connectors/materialization-connectors/BigQuery",title:"Google BigQuery",description:"This Flow connector materializes Flow collections into tables within a Google BigQuery dataset.",source:"@site/docs/reference/Connectors/materialization-connectors/BigQuery.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/BigQuery",permalink:"/pr-preview/pr-1463/reference/Connectors/materialization-connectors/BigQuery",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/BigQuery.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apache Parquet in S3",permalink:"/pr-preview/pr-1463/reference/Connectors/materialization-connectors/apache-parquet"},next:{title:"Databricks",permalink:"/pr-preview/pr-1463/reference/Connectors/materialization-connectors/databricks"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Update Delay",id:"update-delay",level:2},{value:"Delta updates",id:"delta-updates",level:2},{value:"Table Partitioning",id:"table-partitioning",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"google-bigquery",children:"Google BigQuery"}),"\n",(0,i.jsxs)(t.p,{children:["This Flow connector materializes Flow collections into tables within a Google BigQuery dataset.\nIt allows both standard and ",(0,i.jsx)(t.a,{href:"#delta-updates",children:"delta updates"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The connector uses your Google Cloud service account to materialize to BigQuery tables by way of files in a Google Cloud Storage (GCS) bucket.\nThe tables in the bucket act as a temporary staging area for data storage and retrieval."}),"\n",(0,i.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.jsx)(t.a,{href:"https://github.com/estuary/connectors/pkgs/container/materialize-bigquery",children:(0,i.jsx)(t.code,{children:"ghcr.io/estuary/materialize-bigquery:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"new Google Cloud Storage bucket"})," in the same region as the BigQuery destination dataset."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["A Google Cloud ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/docs/authentication/getting-started",children:"service account"})," with a key file generated and the following roles:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor",children:(0,i.jsx)(t.code,{children:"roles/bigquery.dataEditor"})})," on the destination dataset"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.jobUser",children:(0,i.jsx)(t.code,{children:"roles/bigquery.jobUser"})})," on the\nproject with which the BigQuery destination dataset is associated"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles",children:(0,i.jsx)(t.code,{children:"roles/storage.objectAdmin"})}),"\non the GCS bucket created above"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"#setup",children:"Setup"})," for detailed steps to set up your service account."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1463/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,i.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.p,{children:"To configure your service account, complete the following steps."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Log into the Google Cloud console and ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account",children:"create a service account"}),".\nDuring account creation:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Grant the user access to the project."}),"\n",(0,i.jsxs)(t.li,{children:["Grant the user roles ",(0,i.jsx)(t.code,{children:"roles/bigquery.dataEditor"}),", ",(0,i.jsx)(t.code,{children:"roles/bigquery.jobUser"}),", and ",(0,i.jsx)(t.code,{children:"roles/storage.objectAdmin"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select the new service account from the list of service accounts. On the Keys tab, click ",(0,i.jsx)(t.strong,{children:"Add key"})," and create a new JSON key."]}),"\n",(0,i.jsx)(t.p,{children:"The key is automatically downloaded. You'll use it to configure the connector."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a BigQuery materialization, which will direct one or more of your Flow collections to your desired tables within a BigQuery dataset."}),"\n",(0,i.jsxs)(t.p,{children:["A BigQuery dataset is the top-level container within a project, and comprises multiple tables.\nYou can think of a dataset as somewhat analogous to a schema in a relational database.\nFor a complete introduction to resource organization in Bigquery, see the ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/resource-hierarchy",children:"BigQuery docs"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Title"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required/Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/project_id"})})}),(0,i.jsx)(t.td,{children:"Project ID"}),(0,i.jsx)(t.td,{children:"The project ID for the Google Cloud Storage bucket and BigQuery dataset."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/credentials_json"})})}),(0,i.jsx)(t.td,{children:"Service Account JSON"}),(0,i.jsx)(t.td,{children:"The JSON credentials of the service account to use for authorization."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/region"})})}),(0,i.jsx)(t.td,{children:"Region"}),(0,i.jsx)(t.td,{children:"The GCS region."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/dataset"})})}),(0,i.jsx)(t.td,{children:"Dataset"}),(0,i.jsx)(t.td,{children:"BigQuery dataset for bound collection tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/bucket"})})}),(0,i.jsx)(t.td,{children:"Bucket"}),(0,i.jsx)(t.td,{children:"Name of the GCS bucket."}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/bucket_path"})}),(0,i.jsx)(t.td,{children:"Bucket path"}),(0,i.jsx)(t.td,{children:'Base path within the GCS bucket. Also called "Folder" in the GCS console.'}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/billing_project_id"})}),(0,i.jsx)(t.td,{children:"Billing project ID"}),(0,i.jsxs)(t.td,{children:["The project ID to which these operations are billed in BigQuery. Typically, you want this to be the same as ",(0,i.jsx)(t.code,{children:"project_id"})," (the default)."]}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsxs)(t.td,{children:["Same as ",(0,i.jsx)(t.code,{children:"project_id"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/advanced"})}),(0,i.jsx)(t.td,{children:"Advanced Options"}),(0,i.jsx)(t.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/advanced/updateDelay"})}),(0,i.jsx)(t.td,{children:"Update Delay"}),(0,i.jsx)(t.td,{children:"Potentially reduce compute time by increasing the delay between updates. Defaults to 30 minutes if unset."}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about project billing, ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/billing/docs/how-to/verify-billing-enabled",children:"see the BigQuery docs"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Title"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required/Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/table"})})}),(0,i.jsx)(t.td,{children:"Table"}),(0,i.jsx)(t.td,{children:"Table in the BigQuery dataset to store materialized result in."}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/dataset"})}),(0,i.jsx)(t.td,{children:"Table"}),(0,i.jsx)(t.td,{children:"Alternative dataset for this table. Must be located in the region set in the endpoint configuration."}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/delta_updates"})}),(0,i.jsx)(t.td,{children:"Delta updates."}),(0,i.jsxs)(t.td,{children:["Whether to use standard or ",(0,i.jsx)(t.a,{href:"#delta-updates",children:"delta updates"})]}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        config:\n          project_id: our-bigquery-project\n          dataset: materialized-data\n          region: US\n          bucket: our-gcs-bucket\n          bucket_path: bucket-path/\n          credentials_json: <secret>\n        image: ghcr.io/estuary/materialize-bigquery:dev\n    bindings:\n  \t- resource:\n      \ttable: ${table_name}\n      source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"update-delay",children:"Update Delay"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Update Delay"})," parameter in Estuary materializations offers a flexible approach to data ingestion scheduling. This advanced option allows users to control when the materialization or capture tasks pull in new data by specifying a delay period. By incorporating an update delay into your workflow, you can effectively manage and optimize your active warehouse time, leading to potentially lower costs and more efficient data processing."]}),"\n",(0,i.jsx)(t.p,{children:"An update delay is configured in the advanced settings of a materialization's configuration. It represents the amount of time the system will wait before it begins materializing the latest data. This delay is specified in hours and can be adjusted according to the needs of your data pipeline."}),"\n",(0,i.jsx)(t.p,{children:"For example, if an update delay is set to 2 hours, the materialization task will pause for 2 hours before processing the latest available data. This delay ensures that data is not pulled in immediately after it becomes available, allowing for batching and other optimizations that can reduce warehouse load and processing time."}),"\n",(0,i.jsxs)(t.p,{children:["To configure an update delay, navigate the ",(0,i.jsx)(t.code,{children:"Advanced Options"})," section of the materialization's configuration and select a value from the drop down. The default value for the update delay in Estuary materializations is set to 30 minutes."]}),"\n",(0,i.jsx)(t.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,i.jsxs)(t.p,{children:["This connector supports both standard (merge) and ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1463/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]}),"\n",(0,i.jsx)(t.p,{children:"Enabling delta updates will prevent Flow from querying for documents in your BigQuery table, which can reduce latency and costs for large datasets.\nIf you're certain that all events will have unique keys, enabling delta updates is a simple way to improve\nperformance with no effect on the output.\nHowever, enabling delta updates is not suitable for all workflows, as the resulting table in BigQuery won't be fully reduced."}),"\n",(0,i.jsx)(t.p,{children:"You can enable delta updates on a per-binding basis:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"    bindings:\n  \t- resource:\n      \ttable: ${table_name}\n        delta_updates: true\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"table-partitioning",children:"Table Partitioning"}),"\n",(0,i.jsxs)(t.p,{children:["Tables are automatically created with\n",(0,i.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/clustered-tables",children:"clustering"})," based on the Flow collection\nprimary keys. Tables are not created with any other ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/partitioned-tables",children:"partitioning"}),", but pre-existing partitioned tables can be materialized to."]}),"\n",(0,i.jsx)(t.p,{children:"It isn't possible to alter the partitioning of an existing table, but you can convert an existing table to one with partitioning by creating a new table and copying the data from the existing table into it. This can be done to tables that the connector is materializing to, as long as the materializing task is temporarily disabled while doing the conversion."}),"\n",(0,i.jsx)(t.p,{children:"To convert an existing materialized table to one with different partitioning:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Pause your materialization by disabling it from the ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1463/concepts/web-app",children:"UI"})," or editing the task specification with the ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1463/guides/flowctl/edit-specification-locally",children:"CLI"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Create a new table with the partitioning you want from the data in the existing table:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"create table <your_dataset>.<your_schema>.<your_table>_copy\npartition by <your_partitioning>\nas select * from <your_dataset>.<your_schema>.<your_table>;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Verify that the data in ",(0,i.jsx)(t.code,{children:"<your_table>_copy"})," looks good, then drop the original table:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"drop table <your_dataset>.<your_schema>.<your_table>;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:['"Rename" ',(0,i.jsx)(t.code,{children:"<your_table>_copy"})," back to ",(0,i.jsx)(t.code,{children:"<your_table>"})," by copying it as a new table with the original name of ",(0,i.jsx)(t.code,{children:"<your_table>"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"create table <your_dataset>.<your_schema>.<your_table> copy <your_dataset>.<your_schema>.<your_table>_copy;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Verify that the data in ",(0,i.jsx)(t.code,{children:"<your_table>"})," looks good, then drop the ",(0,i.jsx)(t.code,{children:"<your_table>_copy"})," table:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"drop table <your_dataset>.<your_schema>.<your_table>_copy;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"Re-enable the materialization to continue materializing data to the now partitioned table."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);