"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[75],{1504:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(7273);i.Z.initialize({startOnLoad:!0});const r=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{i.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},5040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(1504);const l={},o=void 0,s={unversionedId:"reference/Connectors/materialization-connectors/Rockset",id:"reference/Connectors/materialization-connectors/Rockset",title:"Rockset",description:"This Flow connector materializes delta updates of your Flow collections into Rockset collections.",source:"@site/docs/reference/Connectors/materialization-connectors/Rockset.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Rockset",permalink:"/reference/Connectors/materialization-connectors/Rockset",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Rockset.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/reference/Connectors/materialization-connectors/PostgreSQL"},next:{title:"Snowflake",permalink:"/reference/Connectors/materialization-connectors/Snowflake"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates and reduction strategies",id:"delta-updates-and-reduction-strategies",level:2},{value:"Bulk ingestion for large backfills of historical data",id:"bulk-ingestion-for-large-backfills-of-historical-data",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"How to perform a bulk ingestion",id:"how-to-perform-a-bulk-ingestion",level:3}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This Flow connector materializes ",(0,i.kt)("a",{parentName:"p",href:"/concepts/materialization#delta-updates"},"delta updates")," of your Flow collections into Rockset collections."),(0,i.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-rockset"},(0,i.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-rockset:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use this connector, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Rockset account with an ",(0,i.kt)("a",{parentName:"li",href:"https://rockset.com/docs/rest-api/#createapikey"},"API key generated")," from the web UI"),(0,i.kt)("li",{parentName:"ul"},"A Rockset workspace",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."))),(0,i.kt)("li",{parentName:"ul"},"A Rockset collection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."))),(0,i.kt)("li",{parentName:"ul"},"At least one Flow collection")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,i.kt)("a",{parentName:"p",href:"/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Rockset materialization, which will direct one or more of your Flow collections to your desired Rockset collections."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("h4",{id:"endpoint"},"Endpoint"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/api_key"))),(0,i.kt)("td",{parentName:"tr",align:null},"API key"),(0,i.kt)("td",{parentName:"tr",align:null},"The key used to authenticate to the Rockset API."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("h4",{id:"bindings"},"Bindings"),(0,i.kt)("p",null,"The binding configuration for this connector includes two optional sections.\n",(0,i.kt)("strong",{parentName:"p"},"Backfill from S3")," allows you to backfill historical data from an S3 bucket, ",(0,i.kt)("a",{parentName:"p",href:"#bulk-ingestion-for-large-backfills-of-historical-data"},"as detailed below"),".\n",(0,i.kt)("strong",{parentName:"p"},"Advanced collection settings")," includes settings that may help optimize your resulting Rockset collections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clustering fields"),": You can specify clustering fields\nfor your Rockset collection's columnar index to help optimize specific query patterns.\nSee the ",(0,i.kt)("a",{parentName:"li",href:"https://rockset.com/docs/query-composition/#data-clustering"},"Rockset docs")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Event time field"),": All Rockset documents have an associated ",(0,i.kt)("inlineCode",{parentName:"li"},"_event_time")," field,\nwhich is created for each collection.\nYou can specify an existing integer or timestamp field in your data to be used for ",(0,i.kt)("inlineCode",{parentName:"li"},"_event_time"),".\nSee the ",(0,i.kt)("a",{parentName:"li",href:"https://rockset.com/docs/special-fields/#the-_event_time-field"},"Rockset docs")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Insert only"),": Disallows updates and deletes. The materialization will fail if there are documents with duplicate keys, but indexing in Rockset will be more efficient."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retention period"),": Amount of time before data is purged, in seconds.\nA low value will keep the amount of data indexed in Rockset smaller.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings")),(0,i.kt)("td",{parentName:"tr",align:null},"Advanced Collection Settings"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/clustering_key")),(0,i.kt)("td",{parentName:"tr",align:null},"Clustering Key"),(0,i.kt)("td",{parentName:"tr",align:null},"List of clustering fields"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"em"},"/advancedCollectionSettings/clustering_key/-/field_name"))),(0,i.kt)("td",{parentName:"tr",align:null},"Field Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of a field"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/event_time_info")),(0,i.kt)("td",{parentName:"tr",align:null},"Event Time Info"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/event_time_info/field")),(0,i.kt)("td",{parentName:"tr",align:null},"Field Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the field containing the event time"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/event_time_info/format")),(0,i.kt)("td",{parentName:"tr",align:null},"Format"),(0,i.kt)("td",{parentName:"tr",align:null},"Format of the time field"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/event_time_info/time_zone")),(0,i.kt)("td",{parentName:"tr",align:null},"Timezone"),(0,i.kt)("td",{parentName:"tr",align:null},"Default timezone"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/insert_only")),(0,i.kt)("td",{parentName:"tr",align:null},"Insert Only"),(0,i.kt)("td",{parentName:"tr",align:null},"If true disallows updates and deletes. The materialization will fail if there are documents with duplicate keys."),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advancedCollectionSettings/retention_secs")),(0,i.kt)("td",{parentName:"tr",align:null},"Retention Period"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of seconds after which data is purged based on event time"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/collection")),(0,i.kt)("td",{parentName:"tr",align:null},"Rockset Collection"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Rockset collection (will be created if it does not exist)"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/initializeFromS3")),(0,i.kt)("td",{parentName:"tr",align:null},"Backfill from S3"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/initializeFromS3/bucket")),(0,i.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the S3 bucket to load data from."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/initializeFromS3/integration")),(0,i.kt)("td",{parentName:"tr",align:null},"Integration Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the integration that was previously created in the Rockset UI"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/initializeFromS3/pattern")),(0,i.kt)("td",{parentName:"tr",align:null},"Pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"A regex that is used to match objects to be ingested"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/initializeFromS3/prefix")),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix of the data within the S3 bucket. All files under this prefix will be loaded. Optional. Must not be set if ","'","pattern","'"," is defined."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/initializeFromS3/region")),(0,i.kt)("td",{parentName:"tr",align:null},"Region"),(0,i.kt)("td",{parentName:"tr",align:null},"The AWS region in which the bucket resides. Optional."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/workspace")),(0,i.kt)("td",{parentName:"tr",align:null},"Workspace"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Rockset workspace (will be created if it does not exist)"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"sample"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${mat_name}:\n      endpoint:\n      connector:\n            config:\n               api_key: supersecret\n            # Path to the latest version of the connector, provided as a Docker image\n            image: ghcr.io/estuary/materialize-rockset:dev\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n    - resource:\n        workspace: ${namespace_name}\n        collection: ${table_name}\n    source: ${PREFIX}/${source_collection}\n")),(0,i.kt)("h2",{id:"delta-updates-and-reduction-strategies"},"Delta updates and reduction strategies"),(0,i.kt)("p",null,"The Rockset connector operates only in ",(0,i.kt)("a",{parentName:"p",href:"/concepts/materialization#delta-updates"},"delta updates")," mode.\nThis means that Rockset, rather than Flow, performs the document merge.\nIn some cases, this will affect how materialized views look in Rockset compared to other systems that use standard updates."),(0,i.kt)("p",null,"Rockset merges documents by the key defined in the Flow collection schema, and always uses the semantics of ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7396"},"RFC 7396 - JSON merge"),".\nThis differs from how Flow would reduce documents, most notably in that Rockset will ",(0,i.kt)("em",{parentName:"p"},"not")," honor any reduction strategies defined in your Flow schema.\nFor consistent output of a given collection across Rockset and other materialization endpoints, it's important that that collection's reduction annotations\nin Flow mirror Rockset's semantics."),(0,i.kt)("p",null,"To accomplish this, ensure that your collection schema has the following ",(0,i.kt)("a",{parentName:"p",href:"/concepts/schemas#reductions"},"data reductions")," defined in its schema:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A top-level reduction strategy of ",(0,i.kt)("a",{parentName:"li",href:"/reference/reduction-strategies/merge"},"merge")),(0,i.kt)("li",{parentName:"ul"},"A strategy of ",(0,i.kt)("a",{parentName:"li",href:"/reference/reduction-strategies/firstwritewins-and-lastwritewins"},"lastWriteWins")," for all nested values (this is the default)")),(0,i.kt)("h2",{id:"bulk-ingestion-for-large-backfills-of-historical-data"},"Bulk ingestion for large backfills of historical data"),(0,i.kt)("p",null,"You can backfill large amounts of historical data into Rockset using a ",(0,i.kt)("em",{parentName:"p"},"bulk ingestion"),". Bulk ingestion must originate in S3 and requires additional steps in your dataflow.\nThis workflow is supported using the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/flowctl"},"flowctl")," CLI."),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"Before completing this workflow, make sure you have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A working catalog spec including at least one Flow collection."),(0,i.kt)("li",{parentName:"ul"},"A production or ",(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation"},"development")," environment",(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following is an intermediate workflow. As needed, refer to ",(0,i.kt)("a",{parentName:"p",href:"/guides/create-dataflow"},"this guide")," for the basic steps to create and deploy a catalog spec using the GitOps workflow."))))),(0,i.kt)("h3",{id:"how-to-perform-a-bulk-ingestion"},"How to perform a bulk ingestion"),(0,i.kt)("p",null,"A bulk ingestion from a Flow collection into Rockset is essentially a two-step process. First, Flow writes your historical data into an S3 bucket using Estuary's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-s3-parquet"},"S3-Parquet materialization")," connector. Once the data is caught up, it uses the Rockset connector to backfill the data from S3 into Rockset and then switches to the Rockset Write API for the continuous materialization of new data."),(0,i.kt)(r.Z,{chart:"\n\tgraph TD\n    A[Create an S3 integration in Rockset] --\x3e B\n    B[Create Flow materialization into S3 bucket] --\x3e C\n    C[Wait for S3 materialization to catch up with historical data] --\x3e|When ready to bulk ingest into Rockset| D\n    D[Disable S3 materialization shards] --\x3e E\n    E[Update same materialization to use the Rockset connector with the integration created in first step] --\x3e F\n    F[Rockset connector automatically continues materializing after the bulk ingestion completes]\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"To set this up, use the following procedure as a guide, substituting ",(0,i.kt)("inlineCode",{parentName:"p"},"example/flow/collection")," for your collection:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You'll need an ",(0,i.kt)("a",{parentName:"li",href:"https://rockset.com/docs/amazon-s3/"},"S3 integration")," in Rockset. To create one, follow the ",(0,i.kt)("a",{parentName:"li",href:"https://rockset.com/docs/amazon-s3/#create-an-s3-integration"},"instructions here"),", but ",(0,i.kt)("em",{parentName:"li"},"do not create the Rockset collection yet"),"."),(0,i.kt)("li",{parentName:"ol"},"Create and activate a materialization of ",(0,i.kt)("inlineCode",{parentName:"li"},"example/flow/collection")," into a unique prefix within an S3 bucket of your choosing.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  example/toRockset:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-s3-parquet:dev\n        config:\n          bucket: example-s3-bucket\n          region: us-east-1\n          awsAccessKeyId: <your key>\n          awsSecretAccessKey: <your secret>\n          uploadIntervalInSeconds: 300\n    bindings:\n      - resource:\n          pathPrefix: example/s3-prefix/\n        source: example/flow/collection\n"))),(0,i.kt)("li",{parentName:"ol"},"Once the  S3 materialization is caught up with your historical data, you'll switch to the Rockset write API for your future data. To make the switch, first disable the S3 materialization by setting shards to disabled in the definition, and re-deploy the catalog. This is necessary to ensure correct ordering of documents written to Rockset.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  example/toRockset:\n    shards:\n      disable: true\n    # ...the remainder of the materialization yaml remains the same as above\n"))),(0,i.kt)("li",{parentName:"ol"},"Update the materialization to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"materialize-rockset")," connector, and re-enable the shards. Here you'll provide the name of the Rockset S3 integration you created above, as well as the bucket and prefix that you previously materialized into. ",(0,i.kt)("strong",{parentName:"li"},"It's critical that the name of the materialization remains the same as it was for materializing into S3."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  example/toRockset:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-rockset:dev\n        config:\n          api_key: <your rockset API key here>\n    bindings:\n      - resource:\n          workspace: <your rockset workspace name>\n          collection: <your rockset collection name>\n          initializeFromS3:\n            integration: <rockset integration name>\n            bucket: example-s3-bucket\n            region: us-east-1\n            prefix: example/s3-prefix/\n        source: example/flow/collection\n"))),(0,i.kt)("li",{parentName:"ol"},"When you activate the new materialization, the connector will create the Rockset collection using the given integration, and wait for it to ingest all of the historical data from S3 before it continues. Once this completes, the Rockset connector will automatically switch over to the incoming stream of new data.")))}p.isMDXComponent=!0}}]);