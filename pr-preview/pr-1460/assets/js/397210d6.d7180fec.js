"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9065],{9520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(74848),o=n(28453);const i={id:"real_time_cdc_with_mongodb",title:"Real-time CDC with MongoDB",sidebar_position:2},s="Real-time CDC with MongoDB",r={id:"getting-started/tutorials/real_time_cdc_with_mongodb",title:"Real-time CDC with MongoDB",description:"A step-by-step guide to setting up Change Data Capture (CDC) from MongoDB with Estuary Flow.",source:"@site/docs/getting-started/tutorials/real-time-cdc-with-mongodb.md",sourceDirName:"getting-started/tutorials",slug:"/getting-started/tutorials/real_time_cdc_with_mongodb",permalink:"/pr-preview/pr-1460/getting-started/tutorials/real_time_cdc_with_mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/tutorials/real-time-cdc-with-mongodb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"real_time_cdc_with_mongodb",title:"Real-time CDC with MongoDB",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL CDC streaming to Snowflake",permalink:"/pr-preview/pr-1460/getting-started/tutorials/postgresql_cdc_to_snowflake"},next:{title:"Create your first dataflow with Amazon S3 and Snowflake",permalink:"/pr-preview/pr-1460/getting-started/tutorials/dataflow-s3-snowflake"}},l={},c=[{value:"What is CDC?<a></a>",id:"what-is-cdc",level:2},{value:"Understanding Change Events in MongoDB<a></a>",id:"understanding-change-events-in-mongodb",level:2},{value:"Introduction to Estuary Flow<a></a>",id:"introduction-to-estuary-flow",level:2},{value:"Prerequisites<a></a>",id:"prerequisites",level:2},{value:"Setting up MongoDB<a></a>",id:"setting-up-mongodb",level:2},{value:"Credentials<a></a>",id:"credentials",level:3},{value:"Read Access<a></a>",id:"read-access",level:3},{value:"Configuration Considerations<a></a>",id:"configuration-considerations",level:3},{value:"Configure MongoDB<a></a>",id:"configure-mongodb",level:3},{value:"Setting up Estuary Flow<a></a>",id:"setting-up-estuary-flow",level:2},{value:"MongoDB Capture Configuration<a></a>",id:"mongodb-capture-configuration",level:3},{value:"Documents and Collections<a></a>",id:"documents-and-collections",level:3},{value:"Automating schema evolution<a></a>",id:"automating-schema-evolution",level:3},{value:"Publishing the Capture<a></a>",id:"publishing-the-capture",level:3},{value:"Real-time CDC<a></a>",id:"real-time-cdc",level:2},{value:"Wrapping up<a></a>",id:"wrapping-up",level:2},{value:"Next Steps<a></a>",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{children:(0,a.jsx)("meta",{property:"og:image",content:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image4_5c651b17d6/image4_5c651b17d6.png"})}),"\n",(0,a.jsxs)(t.h1,{id:"real-time-cdc-with-mongodb",children:["Real-time CDC with MongoDB",(0,a.jsx)("a",{id:"real-time-cdc-with-mongodb"})]}),"\n",(0,a.jsx)(t.p,{children:"A step-by-step guide to setting up Change Data Capture (CDC) from MongoDB with Estuary Flow."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image4_5c651b17d6/image4_5c651b17d6.png",alt:"High level architecture"})}),"\n",(0,a.jsx)(t.p,{children:"MongoDB is still one of the most popular document stores powering web applications today. Due to its flexible schema handling and tight integration with JSON-based libraries developers love working with it. It\u2019s easy to set up, painless to maintain, and works at scale."}),"\n",(0,a.jsx)(t.p,{children:"Because it\u2019s the centerpiece of so many applications, it\u2019s a common data engineering challenge to extract data out of MongoDB in order to power a data warehouse or enable other downstream use cases, like AI or operational analytics."}),"\n",(0,a.jsx)(t.p,{children:"This tutorial will guide you through using Estuary Flow to capture data from MongoDB using change data capture (CDC), requiring minimal configuration. By following these steps, you can empower your organization to leverage its application data in just a few minutes."}),"\n",(0,a.jsxs)(t.h2,{id:"what-is-cdc",children:["What is CDC?",(0,a.jsx)("a",{id:"what-is-cdc"})]}),"\n",(0,a.jsx)(t.p,{children:"CDC, or Change Data Capture, is a method used to track and capture changes made to data in a database. It enables the real-time capture of insertions, updates, and deletions, providing a continuous stream of changes."}),"\n",(0,a.jsx)(t.p,{children:"This stream of data is invaluable for keeping downstream systems synchronized and up-to-date with the source database, facilitating real-time analytics, replication, and data integration. In essence, CDC allows organizations to capture and react to data changes as they occur, ensuring data accuracy and timeliness across their systems."}),"\n",(0,a.jsxs)(t.p,{children:["Optionally, if you are interested in the intricacies of change data capture, head over to ",(0,a.jsx)(t.a,{href:"https://estuary.dev/cdc-done-correctly/",children:"this"})," article, where we explain the theory behind it - this is not a requirement for this tutorial, so if you want to dive in head first, keep on reading!"]}),"\n",(0,a.jsxs)(t.h2,{id:"understanding-change-events-in-mongodb",children:["Understanding Change Events in MongoDB",(0,a.jsx)("a",{id:"understanding-change-events-in-mongodb"})]}),"\n",(0,a.jsxs)(t.p,{children:["Change events in MongoDB are notifications triggered by modifications to the database's data, configuration, or structure through a mechanism called ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/changeStreams/",children:"change streams"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Change Streams in MongoDB are a convenient way for CDC, enabling real-time monitoring of data changes without having to directly interact with the underlying oplog. CDC processes leverage Change Streams to subscribe to data changes, capturing detailed events promptly as insertions, updates, or deletions occur."}),"\n",(0,a.jsx)(t.p,{children:"This approach ensures efficient data propagation to downstream systems, scalability for high-throughput environments, and robust error handling for operations."}),"\n",(0,a.jsx)(t.p,{children:"MongoDB supports various types of change events, each catering to different aspects of database operations. For data synchronization, the following three events are the only ones that matter:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Insert Events: Triggered when new documents are inserted into a collection."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image5_b1229ced25/image5_b1229ced25.png",alt:"Create event"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Update Events: Fired upon modifications to existing documents, including field updates and replacements."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image6_e1604c59d7/image6_e1604c59d7.png",alt:"Update event"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Delete Events: Signaled when documents are removed from a collection."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:'In MongoDB, if you delete a key from a document, the corresponding change event that gets fired is an "update" event. This may seem counterintuitive at first, but in MongoDB, updates are atomic operations that can modify specific fields within a document, including removing keys. So, when a key is deleted from a document, MongoDB interprets it as an update operation where the specific field (i.e., the key) is being removed, resulting in an "update" event being generated in the oplog.',type:"note"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image3_5dc8c9ea52/image3_5dc8c9ea52.png",alt:"Delete event"})}),"\n",(0,a.jsxs)(t.h2,{id:"introduction-to-estuary-flow",children:["Introduction to Estuary Flow",(0,a.jsx)("a",{id:"introduction-to-estuary-flow"})]}),"\n",(0,a.jsx)(t.p,{children:"Estuary is the best tool for integrating CDC streams from MongoDB. Here are a few reasons why:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Unlike ELT vendors, Estuary does streaming CDC and incremental snapshots, not full snapshots or batch change data extraction. This puts less of a load on the source database and lowers latency."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Estuary also extracts exactly-and-only-once. As it streams snapshots and changes data it also stores it as a collection for later reuse, such as for backfilling or stream replay. ELT vendors require you to re-extract every time to want to resend the data or restart a change data stream."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Estuary supports both real-time and batch. Its streaming latency is within 100ms, and it always extracts in real-time. But it supports any latency from real-time to hours or days for destinations."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Estuary guarantees change data is delivered exactly once."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Estuary can also maintain type I and type II slowly changing dimensions directly into a target."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Estuary streaming has 50MB/sec per connection per table throughput rates, which is 5-10x any other benchmarks for CDC. It also scales horizontally to increase throughput."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Time to build a real-time CDC pipeline!"}),"\n",(0,a.jsxs)(t.h2,{id:"prerequisites",children:["Prerequisites",(0,a.jsx)("a",{id:"prerequisites"})]}),"\n",(0,a.jsx)(t.p,{children:"To follow along with the tutorial, you\u2019ll need the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["An Estuary Flow account. If you haven\u2019t yet, sign up for free ",(0,a.jsx)(t.a,{href:"https://dashboard.estuary.dev/register",children:"here"}),". A fully-managed MongoDB Capture connector is ready for you to get started."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"A MongoDB Atlas cluster: This tutorial uses Atlas as the source database, but Estuary supports other types of MongoDB deployments as well."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"setting-up-mongodb",children:["Setting up MongoDB",(0,a.jsx)("a",{id:"setting-up-mongodb"})]}),"\n",(0,a.jsx)(t.p,{children:"To prepare MongoDB for Estuary Flow, you need to ensure the following prerequisites are met:"}),"\n",(0,a.jsxs)(t.h3,{id:"credentials",children:["Credentials",(0,a.jsx)("a",{id:"credentials"})]}),"\n",(0,a.jsx)(t.p,{children:"Obtain the necessary credentials for connecting to your MongoDB instance and database. This includes credentials for authentication purposes, typically a username and password."}),"\n",(0,a.jsxs)(t.h3,{id:"read-access",children:["Read Access",(0,a.jsx)("a",{id:"read-access"})]}),"\n",(0,a.jsx)(t.p,{children:"Ensure that you have read access to the MongoDB database(s) from which you intend to capture data. MongoDB utilizes Role-Based Access Control (RBAC), so make sure your user account has the appropriate permissions to read data."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image15_627fe98d52/image15_627fe98d52.png",alt:"MongoDB built-in roles"})}),"\n",(0,a.jsx)(t.p,{children:"In MongoDB Atlas, any of the built-in Roles will work for the tutorial, but Flow needs at least read permissions over the data you wish to capture if you wish to set up more granular, restricted permissions."}),"\n",(0,a.jsxs)(t.h3,{id:"configuration-considerations",children:["Configuration Considerations",(0,a.jsx)("a",{id:"configuration-considerations"})]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["If you haven't already, make sure you deploy a Replica Set-type MongoDB cluster. ",(0,a.jsx)(t.strong,{children:"Change streams"})," require a replica set in order to work. A replica set is a group of MongoDB deployments that maintain the same data set. If you are working following along with a fresh MongoDB Atlas project, you shouldn\u2019t need to configure anything manually for this, as the default free-tier instance is a cluster of 3 replicas. To learn more about replica sets, see the Replication Introduction in the ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/replication/",children:"MongoDB manual"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Ensure that Estuary's IP (",(0,a.jsx)(t.code,{children:"34.121.207.128"}),") is whitelisted to allow access. We\u2019ll show you how to do this in the next section."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.h3,{id:"configure-mongodb",children:["Configure MongoDB",(0,a.jsx)("a",{id:"configure-mongodb"})]}),"\n",(0,a.jsx)(t.p,{children:"Let\u2019s start by provisioning our database. As you can see, for this tutorial, you can just deploy an M0-category cluster, which is free to use."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image12_664e3a1404/image12_664e3a1404.png",alt:"MongoDB deployment options"})}),"\n",(0,a.jsxs)(t.p,{children:["After the cluster has finished provisioning, we\u2019ll need to make sure that Estuary Flow is able to connect to the database. For this, the only requirement with MongoDB Atlas is allowlisting the public IP used by Flow, ",(0,a.jsx)(t.code,{children:"34.121.207.128"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Navigate to the \u201cNetwork Access\u201d page using the left hand sidebar, and using the \u201cAdd new IP address\u201d button, create the list entry which enables the communication between the two services."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image13_3294633b1f/image13_3294633b1f.png",alt:"Allowlisting Estuary Flow's IP"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, find your connection string by navigating to the ",(0,a.jsx)(t.code,{children:"mongosh"})," setup page by clicking the \u201cConnect\u201d button on the database overview section, then choosing the \u201cShell\u201d option."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["You\u2019re not going to set up ",(0,a.jsx)(t.code,{children:"mongosh"})," for this tutorial, but this is the easiest way to get ahold of the connection string we\u2019ll be using."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image9_81fdbf1a20/image9_81fdbf1a20.png",alt:"Grab your MongoDB connection string"})}),"\n",(0,a.jsxs)(t.p,{children:["Copy the connection string and head over to your ",(0,a.jsx)(t.a,{href:"https://dashboard.estuary.dev/",children:"Estuary Flow dashboard"})," to continue the tutorial."]}),"\n",(0,a.jsxs)(t.h2,{id:"setting-up-estuary-flow",children:["Setting up Estuary Flow",(0,a.jsx)("a",{id:"setting-up-estuary-flow"})]}),"\n",(0,a.jsx)(t.p,{children:"On the dashboard, create a new capture by navigating to the \u201cSources\u201d menu using the sidebar, then pressing the \u201cNew Capture\u201d button. In the list of available connectors, search for \u201cMongoDB\u201d, then press \u201cCapture\u201d."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image7_4cd384d7bd/image7_4cd384d7bd.png",alt:"Create a Source Capture"})}),"\n",(0,a.jsx)(t.p,{children:"Pressing this button will bring you to the connector configuration page, where you\u2019ll be able to provision your fully managed real-time Data Flow."}),"\n",(0,a.jsxs)(t.h3,{id:"mongodb-capture-configuration",children:["MongoDB Capture Configuration",(0,a.jsx)("a",{id:"mongodb-capture-configuration"})]}),"\n",(0,a.jsx)(t.p,{children:"As a first step, in the Capture Details section, name your capture and optionally add a description for it."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image14_17211852c9/image14_17211852c9.png",alt:"Capture details configuration"})}),"\n",(0,a.jsx)(t.p,{children:"Once you are finished, step down to the second configuration section, called \u201cEndpoint Config\u201d. Here you have to use the address for the database you took a note of in the MongoDB setup section, along with your username and password which you configured when setting up MongoDB Atlas."}),"\n",(0,a.jsxs)(t.p,{children:["If your user has access to all databases, ensure that in your MongoDB address, you specify the ",(0,a.jsx)(t.code,{children:"?authSource=admin"})," parameter in the connection address. In this case, authentication is performed through your admin database."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image17_80203a1a77/image17_80203a1a77.png",alt:"Capture endpoint configuration"})}),"\n",(0,a.jsx)(t.p,{children:'As for the "Database" option, feel free to leave it empty, that way the automated discovery process of Flow will make sure every available database is ready for data extraction.'}),"\n",(0,a.jsx)(t.p,{children:"After you press the blue \u201cNext\u201d button in the top right corner, Flow will automatically crawl through the connection to discover available resources. Next up, you\u2019ll see the third, and final configuration section, where you are able to view and choose from all the databases and collections which are discovered by Flow."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image18_77d0afe861/image18_77d0afe861.png",alt:"Capture output collections confuration"})}),"\n",(0,a.jsxs)(t.h3,{id:"documents-and-collections",children:["Documents and Collections",(0,a.jsx)("a",{id:"documents-and-collections"})]}),"\n",(0,a.jsx)(t.p,{children:"Before we initialize the connector, let\u2019s talk a little bit about how incoming data is represented in Flow."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"documents"})," of your flows are stored in ",(0,a.jsx)(t.strong,{children:"collections"}),": real-time data lakes of JSON documents in cloud storage."]}),"\n",(0,a.jsx)(t.admonition,{title:"Keep in mind, these are not the same documents and collections as the ones in MongoDB, only the names are similar, but we are talking about separate systems.",type:"note"}),"\n",(0,a.jsxs)(t.p,{children:["Collections being stored in an object storage mean that once you start capturing data, you won\u2019t have to worry about it not being available to replay \u2013 object stores such as S3 can be configured to cheaply store data forever. See ",(0,a.jsx)(t.a,{href:"https://docs.estuary.dev/concepts/collections/#documents",children:"docs page"})," for more information about documents."]}),"\n",(0,a.jsx)(t.p,{children:"To see how Flow parsed the incoming records, click on the \u201cCollection\u201d tab on the UI."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image16_aa92057159/image16_aa92057159.png",alt:"Capture bindings configuration"})}),"\n",(0,a.jsx)(t.p,{children:"When you set up a capture from MongoDB using the Flow web app, the underlying collection specifications will look something like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"key: [ /_id ]\nwriteSchema:\n\xa0\xa0type: object\n\xa0\xa0properties:\n\xa0\xa0\xa0\xa0_id: { type: string }\n\xa0\xa0required: [ _id ]\nreadSchema:\n\xa0\xa0allOf:\n\xa0\xa0\xa0\xa0- $ref: flow://write-schema\n\xa0\xa0\xa0\xa0- $ref: flow://inferred-schema\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This specification uses separate ",(0,a.jsx)(t.a,{href:"https://docs.estuary.dev/concepts/schemas/#write-and-read-schemas",children:"read and write schemas"}),". The ",(0,a.jsx)(t.code,{children:"writeSchema"})," is extremely permissive, and only requires an ",(0,a.jsx)(t.code,{children:"_id"})," property with a string value. The ",(0,a.jsx)(t.code,{children:"readSchema"})," references ",(0,a.jsx)(t.code,{children:"flow://inferred-schema"}),", which expands to the current inferred schema when the collection is published."]}),"\n",(0,a.jsxs)(t.p,{children:["MongoDB documents have a mandatory ",(0,a.jsx)(t.code,{children:"_id"})," field that is used as the key of the collection. But that is essentially the only requirement. You can't know what other fields may exist on MongoDB documents until you've read them.\xa0 On the UI, for this reason, only three fields are visible initially in the collection schema tab."]}),"\n",(0,a.jsxs)(t.h3,{id:"automating-schema-evolution",children:["Automating schema evolution",(0,a.jsx)("a",{id:"automating-schema-evolution"})]}),"\n",(0,a.jsxs)(t.p,{children:["In addition to selecting the collections for capture, this interface provides access to three settings that govern schema evolution. In a NoSQL database environment like MongoDB, schema alterations are frequent occurrences. Manually synchronizing source and destination schemas can end up being a lot of maintenance. To help with this, Estuary introduces a more ",(0,a.jsx)(t.a,{href:"https://docs.estuary.dev/concepts/advanced/evolutions/#what-do-schema-evolutions-do",children:"sophisticated schema evolution strategy"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["With Estuary Flow, teams can opt to suspend the Data Flow using data contracts, automate the update of the target schema with the new MongoDB schema, or create a new table in the destination to maintain separation between old and new schemas. Details can be found in our ",(0,a.jsx)(t.a,{href:"https://docs.estuary.dev/concepts/advanced/evolutions/",children:"schema evolution"})," docs."]}),"\n",(0,a.jsx)(t.p,{children:"Schema evolutions serve to prevent errors stemming from discrepancies between specifications in a number of ways:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Materializations will automatically apply backward-compatible schema changes, like adding a new column. This doesn't require re-backfilling the target tables or re-creating the Flow collection."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"For more complex scenarios, the evolution adjusts the affected materialization bindings to increment their backfill counter, prompting the materialization process to reconstruct the resource (such as a database table) and backfill it from the offset."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In instances where necessary, such as when the collection key or logical partitioning undergoes changes, the evolution generates a completely new collection with a numerical suffix (e.g., ",(0,a.jsx)(t.code,{children:"_v2"}),"). This new collection initializes as empty and undergoes backfilling from the source. Moreover, the evolution updates all captures and materializations referencing the old collection to point to the new collection, incrementing their backfill counters accordingly. This method is more intricate and is only invoked when essential alterations are identified."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In these scenarios, the names of destination resources remain unaltered. For instance, a materialization to Postgres would drop and re-establish the affected tables with their original names."}),"\n",(0,a.jsxs)(t.h3,{id:"publishing-the-capture",children:["Publishing the Capture",(0,a.jsx)("a",{id:"publishing-the-capture"})]}),"\n",(0,a.jsx)(t.p,{children:"To finalize the connector configuration and kick it off, press the \u201cSave and Publish\u201d button. Flow will test, save and publish your capture. You\u2019ll see a similar screen if everything went well or if there were any issues setting up the connector, you\u2019ll see detailed error messages instead."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image2_b4e6afde4d/image2_b4e6afde4d.png",alt:"Successful capture publish screen"})}),"\n",(0,a.jsx)(t.p,{children:"During the initial database snapshot \u2013 which is triggered automatically \u2013 the connector seamlessly captures change events by continuously monitoring change streams while concurrently executing collection scans to backfill pre-existing documents. Following the initial snapshot, the connector perpetually monitors change streams to capture all subsequent changes in real-time."}),"\n",(0,a.jsx)(t.p,{children:"Incremental backfills in the MongoDB connector follow a straightforward approach to ensure comprehensive data capture with minimal latency. Initially, all tracked change streams are synchronized to maintain data integrity. Then, a targeted backfilling effort occurs across MongoDB collections until all are up to date. Continuous monitoring via change streams ensures ongoing data capture and means there is no need to pause replication during an ongoing backfill."}),"\n",(0,a.jsx)(t.p,{children:"In the event of a pause in the connector's process, it resumes capturing change events from the point of interruption. However, the connector's ability to accomplish this depends on the size of the replica set oplog. In certain scenarios where the pause duration is significant enough for the oplog to purge old change events, the connector may necessitate redoing the backfill to maintain data consistency."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["To ensure reliable data capture, it is recommended to ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/tutorial/change-oplog-size/#c.-change-the-oplog-size-of-the-replica-set-member",children:"adjust the oplog size"})," or set a ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/reference/command/replSetResizeOplog/#minimum-oplog-retention-period",children:"minimum retention period"}),". A recommended minimum retention period of at least 24 hours is sufficient for most cases."]})}),"\n",(0,a.jsxs)(t.h2,{id:"real-time-cdc",children:["Real-time CDC",(0,a.jsx)("a",{id:"real-time-cdc"})]}),"\n",(0,a.jsx)(t.p,{children:"Let\u2019s head over to the collections page to see our arriving documents."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image8_515f331796/image8_515f331796.png",alt:"Collections"})}),"\n",(0,a.jsx)(t.p,{children:"Looks like all of the selected MongoDB collections have been fully replicated into Flow by the initial backfill."}),"\n",(0,a.jsxs)(t.p,{children:["Let\u2019s take a look at the ",(0,a.jsx)(t.code,{children:"movies"})," collection to see what details Flow can tell us about the documents. You can see some statistics about the integration throughput and you can also take a look at the actual documents in a preview window."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image10_77731295df/image10_77731295df.png",alt:"Collection details"})}),"\n",(0,a.jsx)(t.p,{children:"You can also check out the generated specification, which is the Flow\u2019s behind-the-scenes declarative way of representing the Collection resource."}),"\n",(0,a.jsxs)(t.p,{children:["For the ",(0,a.jsx)(t.code,{children:"movies"})," collection, this is what it looks like:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\xa0"writeSchema": {\n\xa0\xa0\xa0"type": "object",\n\xa0\xa0\xa0"required": [\n\xa0\xa0\xa0\xa0\xa0"_id"\n\xa0\xa0\xa0],\n\xa0\xa0\xa0"properties": {\n\xa0\xa0\xa0\xa0\xa0"_id": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0"type": "string"\n\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0"_meta": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0"$schema": "http://json-schema.org/draft/2020-12/schema",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0"properties": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"op": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"type": "string",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"enum": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"c",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"u",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"d"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0],\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"title": "Change Operation",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"description": "Change operation type: \'c\' Create/Insert \'u\' Update \'d\' Delete."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0"type": "object"\n\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0},\n\xa0\xa0\xa0"x-infer-schema": true\n\xa0},\n\xa0"readSchema": {\n\xa0\xa0\xa0"allOf": [\n\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0"$ref": "flow://write-schema"\n\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0"$ref": "flow://inferred-schema"\n\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0]\n\xa0},\n\xa0"key": [\n\xa0\xa0\xa0"/_id"\n\xa0]\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can see the flexible ",(0,a.jsx)(t.code,{children:"readSchema"})," configuration in action we mentioned above."]}),"\n",(0,a.jsxs)(t.p,{children:["You can use the preview window on the collections \u201cOverview\u201d page to quickly test how change events propagate from MongoDB. Head over to the MongoDB Atlas UI and insert a new document into the ",(0,a.jsx)(t.code,{children:"movies"})," collection.\xa0"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image1_0a5fb197d3/image1_0a5fb197d3.png",alt:"Insert new document"})}),"\n",(0,a.jsx)(t.p,{children:"Here\u2019s a sample JSON (describing non-existent but very intriguing movie) you can copy paste into the pop-up modal to spare you the trouble."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\xa0\xa0\xa0"title":"Dataflow",\n\xa0\xa0\xa0"fullplot":"In a near-future world driven by data, a team of maverick engineers and programmers set out to revolutionize the way information is processed and transmitted. As they delve deeper into the complexities of real-time data streaming, they uncover dark secrets and face moral dilemmas that threaten to unravel their ambitious project.", \xa0 "plot":"A team of brilliant engineers embark on a groundbreaking project to develop a real-time data streaming platform, but they soon discover unexpected challenges and threats lurking in the digital realm.",\n\xa0\xa0\xa0"genres":[\n\xa0\xa0\xa0\xa0\xa0\xa0"Drama",\n\xa0\xa0\xa0\xa0\xa0\xa0"Sci-Fi",\n\xa0\xa0\xa0\xa0\xa0\xa0"Thriller"\n\xa0\xa0\xa0],\n\xa0\xa0\xa0"runtime":135,\n\xa0\xa0\xa0"cast":[\n\xa0\xa0\xa0\xa0\xa0\xa0"Emily Blunt",\n\xa0\xa0\xa0\xa0\xa0\xa0"Michael B. Jordan",\n\xa0\xa0\xa0\xa0\xa0\xa0"Idris Elba",\n\xa0\xa0\xa0\xa0\xa0\xa0"Zendaya",\n\xa0\xa0\xa0\xa0\xa0\xa0"Oscar Isaac"\n\xa0\xa0\xa0],\n\xa0\xa0\xa0"poster":"https://example.com/posters/real-time-data-streaming.jpg",\n\xa0\xa0\xa0"languages":[\n\xa0\xa0\xa0\xa0\xa0\xa0"English"\n\xa0\xa0\xa0],\n\xa0\xa0\xa0"released":1739808000000,\n\xa0\xa0\xa0"directors":[\n\xa0\xa0\xa0\xa0\xa0\xa0"Christopher Nolan"\n\xa0\xa0\xa0],\n\xa0\xa0\xa0"rated":"PG-13",\n\xa0\xa0\xa0"awards":{\n\xa0\xa0\xa0\xa0\xa0\xa0"wins":3,\n\xa0\xa0\xa0\xa0\xa0\xa0"nominations":8,\n\xa0\xa0\xa0\xa0\xa0\xa0"text":"3 wins, 8 nominations"\n\xa0\xa0\xa0},\n\xa0\xa0\xa0"lastupdated":"2024-04-30 10:15:00.000000",\n\xa0\xa0\xa0"year":2024,\n\xa0\xa0\xa0"imdb":{\n\xa0\xa0\xa0\xa0\xa0\xa0"rating":8.5,\n\xa0\xa0\xa0\xa0\xa0\xa0"votes":15234,\n\xa0\xa0\xa0\xa0\xa0\xa0"id":1001\n\xa0\xa0\xa0},\n\xa0\xa0\xa0"countries":[\n\xa0\xa0\xa0\xa0\xa0\xa0"USA",\n\xa0\xa0\xa0\xa0\xa0\xa0"United Kingdom"\n\xa0\xa0\xa0],\n\xa0\xa0\xa0"type":"movie",\n\xa0\xa0\xa0"tomatoes":{\n\xa0\xa0\xa0\xa0\xa0\xa0"viewer":{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"rating":4.2,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"numReviews":3856,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"meter":82\n\xa0\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0"fresh":34,\n\xa0\xa0\xa0\xa0\xa0\xa0"critic":{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"rating":8.0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"numReviews":22,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"meter":91\n\xa0\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0"rotten":2,\n\xa0\xa0\xa0\xa0\xa0\xa0"lastUpdated":1739894400000\n\xa0\xa0\xa0},\n\xa0\xa0\xa0"num_mflix_comments":120\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"After you insert the document, check out the collection preview on the Flow UI to verify it has indeed arrived. The process for updating and deleting collections in MongoDB works similarly."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//image11_772715227c/image11_772715227c.png",alt:"CDC event verification"})}),"\n",(0,a.jsxs)(t.h2,{id:"wrapping-up",children:["Wrapping up",(0,a.jsx)("a",{id:"wrapping-up"})]}),"\n",(0,a.jsx)(t.p,{children:"In this tutorial, you set up a MongoDB Change Data Capture (CDC) integration using Estuary Flow. Throughout the process, you learned about the technical nuances of capturing and synchronizing data changes from MongoDB collections in real-time."}),"\n",(0,a.jsx)(t.p,{children:"Key takeaways from this tutorial:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"MongoDB's document-based approach and schema flexibility present unique challenges and opportunities for Change Data Capture workflows."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You explored the prerequisites and configuration settings required to establish a seamless connection between MongoDB and Estuary, ensuring efficient data capture and synchronization."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Estuary's schema evolution capabilities enable data teams to manage schema changes effectively, ensuring data consistency and integrity across source and destination systems."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You learned how Flow continuously monitors MongoDB change streams and executes backfilling processes to capture changes accurately, even in the event of interruptions or schema alterations."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"next-steps",children:["Next Steps",(0,a.jsx)("a",{id:"next-steps"})]}),"\n",(0,a.jsx)(t.p,{children:"That\u2019s it! You should have everything you need to know to create your own data pipeline for capturing change events from MongoDB!\xa0"}),"\n",(0,a.jsx)(t.p,{children:"Now try it out on your own CloudSQL database or other sources."}),"\n",(0,a.jsxs)(t.p,{children:["If you want to learn more, make sure you read through the ",(0,a.jsx)(t.a,{href:"https://docs.estuary.dev/",children:"Estuary documentation"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["You\u2019ll find instructions on how to use other connectors ",(0,a.jsx)(t.a,{href:"https://docs.estuary.dev/",children:"here"}),". There are more tutorials ",(0,a.jsx)(t.a,{href:"https://docs.estuary.dev/guides/",children:"here"}),".\xa0"]}),"\n",(0,a.jsxs)(t.p,{children:["Also, don\u2019t forget to join the ",(0,a.jsx)(t.a,{href:"https://estuary-dev.slack.com/ssb/redirect#/shared-invite/email",children:"Estuary Slack Community"}),"!"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);