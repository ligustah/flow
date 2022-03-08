"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[75],{1504:function(e,t,a){var n=a(7294),i=a(7273);i.Z.initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,n.useEffect)((function(){i.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},5040:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=a(1504),l=["components"],s={},c=void 0,u={unversionedId:"reference/Connectors/materialization-connectors/Rockset",id:"reference/Connectors/materialization-connectors/Rockset",title:"Rockset",description:"This Flow connector materializes delta updates of your Flow collections into Rockset collections.",source:"@site/docs/reference/Connectors/materialization-connectors/Rockset.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Rockset",permalink:"/reference/Connectors/materialization-connectors/Rockset",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Rockset.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google BigQuery",permalink:"/reference/Connectors/materialization-connectors/BigQuery"},next:{title:"Reduction strategies",permalink:"/reference/reduction-strategies/"}},d=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Values",id:"values",children:[{value:"Endpoint",id:"endpoint",children:[],level:4},{value:"Bindings",id:"bindings",children:[],level:4}],level:3},{value:"Sample",id:"sample",children:[],level:3}],level:2},{value:"Delta updates and reduction strategies",id:"delta-updates-and-reduction-strategies",children:[],level:2},{value:"Bulk ingestion for large backfills of historical data",id:"bulk-ingestion-for-large-backfills-of-historical-data",children:[{value:"Prerequisites",id:"prerequisites-1",children:[],level:3},{value:"How to perform a bulk ingestion",id:"how-to-perform-a-bulk-ingestion",children:[],level:3}],level:2}],m={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Flow connector materializes ",(0,o.kt)("a",{parentName:"p",href:"/concepts/materialization#delta-updates"},"delta updates")," of your Flow collections into Rockset collections."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-rockset"},(0,o.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-rockset:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To use this connector, you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An existing catalog spec that includes at least one collection with its schema specified"),(0,o.kt)("li",{parentName:"ul"},"A Rockset account with an ",(0,o.kt)("a",{parentName:"li",href:"https://rockset.com/docs/rest-api/#createapikey"},"API key generated")," from the web UI"),(0,o.kt)("li",{parentName:"ul"},"A Rockset workspace",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."))),(0,o.kt)("li",{parentName:"ul"},"A Rockset collection",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector.")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To use this connector, begin with a Flow catalog that has at least one ",(0,o.kt)("strong",{parentName:"p"},"collection"),". You'll add a Rockset materialization, which will direct one or more of your Flow collections to your desired Rockset collections. Follow the basic ",(0,o.kt)("a",{parentName:"p",href:"/concepts/materialization#specification"},"materialization setup")," and add the required Rockset configuration values per the table below."),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api_key")),(0,o.kt)("td",{parentName:"tr",align:null},"API Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Rockset API key generated from the web UI."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpLogging")),(0,o.kt)("td",{parentName:"tr",align:null},"HTTP Logging"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable verbose logging of the HTTP calls to the Rockset API"),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MaxConcurrentRequests")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum Concurrent Requests"),(0,o.kt)("td",{parentName:"tr",align:null},"The upper limit on how many concurrent requests will be sent to Rockset."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"workspace")),(0,o.kt)("td",{parentName:"tr",align:null},"Workspace"),(0,o.kt)("td",{parentName:"tr",align:null},"For each binding, name of the Rockset workspace"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"collection")),(0,o.kt)("td",{parentName:"tr",align:null},"Rockset collection"),(0,o.kt)("td",{parentName:"tr",align:null},"For each binding, the name of the destination Rockset table"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"workspace")),(0,o.kt)("td",{parentName:"tr",align:null},"Workspace"),(0,o.kt)("td",{parentName:"tr",align:null},"Rockset namespace. If it doesn't exist, the connector will create it."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"collection")),(0,o.kt)("td",{parentName:"tr",align:null},"Collection"),(0,o.kt)("td",{parentName:"tr",align:null},"Rockset collection name. If it doesn't exist, the connector will create it."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# If this is the first materialization, add the section to your catalog spec\nmaterializations:\n  ${tenant}/${mat_name}:\n      endpoint:\n      connector:\n            config:\n               api_key: supersecret\n            # Path to the latest version of the connector, provided as a Docker image\n            image: ghcr.io/estuary/materialize-rockset:dev\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n    - resource:\n        workspace: ${namespace_name}\n        collection: ${table_name}\n    source: ${tenant}/${source_collection}\n")),(0,o.kt)("h2",{id:"delta-updates-and-reduction-strategies"},"Delta updates and reduction strategies"),(0,o.kt)("p",null,"The Rockset connector operates only in ",(0,o.kt)("a",{parentName:"p",href:"/concepts/materialization#delta-updates"},"delta updates")," mode.\nThis means that Rockset, rather than Flow, performs the document merge.\nIn some cases, this will affect how materialized views look in Rockset compared to other systems that use standard updates."),(0,o.kt)("p",null,"Rockset merges documents by the key defined in the Flow collection schema, and always uses the semantics of ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7396"},"RFC 7396 - JSON merge"),".\nThis differs from how Flow would reduce documents, most notably in that Rockset will ",(0,o.kt)("em",{parentName:"p"},"not")," honor any reduction strategies defined in your Flow schema.\nFor consistent output of a given collection across Rockset and other materialization endpoints, it's important that that collection's reduction annotations\nin Flow mirror Rockset's semantics."),(0,o.kt)("p",null,"To accomplish this, ensure that your collection schema has the following ",(0,o.kt)("a",{parentName:"p",href:"/concepts/schemas#reductions"},"data reductions")," defined in its schema:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A top-level reduction strategy of ",(0,o.kt)("a",{parentName:"li",href:"/reference/reduction-strategies/merge"},"merge")),(0,o.kt)("li",{parentName:"ul"},"A strategy of ",(0,o.kt)("a",{parentName:"li",href:"/reference/reduction-strategies/firstwritewins-and-lastwritewins"},"lastWriteWins")," for all nested values (this is the default)")),(0,o.kt)("h2",{id:"bulk-ingestion-for-large-backfills-of-historical-data"},"Bulk ingestion for large backfills of historical data"),(0,o.kt)("p",null,"You can backfill large amounts of historical data into Rockset using a ",(0,o.kt)("em",{parentName:"p"},"bulk ingestion"),". Bulk ingestion must originate in S3 and requires additional steps in your dataflow. Flow's Rockset connector supports this through the GitOps workflow."),(0,o.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,o.kt)("p",null,"Before completing this workflow, make sure you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A working catalog spec including at least one Flow collection."),(0,o.kt)("li",{parentName:"ul"},"A production or ",(0,o.kt)("a",{parentName:"li",href:"/getting-started/installation"},"development")," environment",(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following is an intermediate workflow. As needed, refer to ",(0,o.kt)("a",{parentName:"p",href:"/guides/create-dataflow"},"this guide")," for the basic steps to create and deploy a catalog spec using the GitOps workflow."))))),(0,o.kt)("h3",{id:"how-to-perform-a-bulk-ingestion"},"How to perform a bulk ingestion"),(0,o.kt)("p",null,"A bulk ingestion from a Flow collection into Rockset is essentially a two-step process. First, Flow writes your historical data into an S3 bucket using Estuary's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-s3-parquet"},"S3-Parquet materialization")," connector. Once the data is caught up, it uses the Rockset connector to backfill the data from S3 into Rockset and then switches to the Rockset Write API for the continuous materialization of new data."),(0,o.kt)(r.Z,{chart:"\n\tgraph TD\n    A[Create an S3 integration in Rockset] --\x3e B\n    B[Create Flow materialization into S3 bucket] --\x3e C\n    C[Wait for S3 materialization to catch up with historical data] --\x3e|When ready to bulk ingest into Rockset| D\n    D[Disable S3 materialization shards] --\x3e E\n    E[Update same materialization to use the Rockset connector with the integration created in first step] --\x3e F\n    F[Rockset connector automatically continues materializing after the bulk ingestion completes]\n",mdxType:"Mermaid"}),(0,o.kt)("p",null,"To set this up, use the following procedure as a guide, substituting ",(0,o.kt)("inlineCode",{parentName:"p"},"example/flow/collection")," for your collection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You'll need an ",(0,o.kt)("a",{parentName:"li",href:"https://rockset.com/docs/amazon-s3/"},"S3 integration")," in Rockset. To create one, follow the ",(0,o.kt)("a",{parentName:"li",href:"https://rockset.com/docs/amazon-s3/#create-an-s3-integration"},"instructions here"),", but ",(0,o.kt)("em",{parentName:"li"},"do not create the Rockset collection yet"),"."),(0,o.kt)("li",{parentName:"ol"},"Create and activate a materialization of ",(0,o.kt)("inlineCode",{parentName:"li"},"example/flow/collection")," into a unique prefix within an S3 bucket of your choosing.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  example/toRockset:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-s3-parquet:dev\n        config:\n          bucket: example-s3-bucket\n          region: us-east-1\n          awsAccessKeyId: <your key>\n          awsSecretAccessKey: <your secret>\n          uploadIntervalInSeconds: 300\n    bindings:\n      - resource:\n          pathPrefix: example/s3-prefix/\n        source: example/flow/collection\n"))),(0,o.kt)("li",{parentName:"ol"},"Once the  S3 materialization is caught up with your historical data, you'll switch to the Rockset write API for your future data. To make the switch, first disable the S3 materialization by setting shards to disabled in the definition, and re-deploy the catalog. This is necessary to ensure correct ordering of documents written to Rockset.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  example/toRockset:\n    shards:\n      disable: true\n    # ...the remainder of the materialization yaml remains the same as above\n"))),(0,o.kt)("li",{parentName:"ol"},"Update the materialization to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"materialize-rockset")," connector, and re-enable the shards. Here you'll provide the name of the Rockset S3 integration you created above, as well as the bucket and prefix that you previously materialized into. ",(0,o.kt)("strong",{parentName:"li"},"It's critical that the name of the materialization remains the same as it was for materializing into S3."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  example/toRockset:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-rockset:dev\n        config:\n          api_key: <your rockset API key here>\n          max_concurrent_requests: 5\n    bindings:\n      - resource:\n          workspace: <your rockset workspace name>\n          collection: <your rockset collection name>\n          initializeFromS3:\n            integration: <rockset integration name>\n            bucket: example-s3-bucket\n            region: us-east-1\n            prefix: example/s3-prefix/\n        source: example/flow/collection\n"))),(0,o.kt)("li",{parentName:"ol"},"When you activate the new materialization, the connector will create the Rockset collection using the given integration, and wait for it to ingest all of the historical data from S3 before it continues. Once this completes, the Rockset connector will automatically switch over to the incoming stream of new data.")))}p.isMDXComponent=!0}}]);