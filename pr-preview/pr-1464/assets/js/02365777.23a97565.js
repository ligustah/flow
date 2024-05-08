"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6792],{4242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),a=t(28453),o=t(61114);const i={},r="Concepts",c={id:"concepts/README",title:"Concepts",description:"Flow helps you define data pipelines, known as Data Flows, that connect multiple data systems, APIs, and storage, and optionally transform data along the way.",source:"@site/docs/concepts/README.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/pr-preview/pr-1464/concepts/",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema evolution",permalink:"/pr-preview/pr-1464/guides/schema-evolution"},next:{title:"Catalog",permalink:"/pr-preview/pr-1464/concepts/catalogs"}},l={},d=[{value:"Working with Flow",id:"working-with-flow",level:2},{value:"Web application",id:"web-application",level:3},{value:"flowctl",id:"flowctl",level:3},{value:"Essential concepts",id:"essential-concepts",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Collections",id:"collections",level:3},{value:"Captures",id:"captures",level:3},{value:"Materializations",id:"materializations",level:3},{value:"Endpoints",id:"endpoints",level:3},{value:"Connectors",id:"connectors",level:3},{value:"Intermediate concepts",id:"intermediate-concepts",level:2},{value:"Derivations",id:"derivations",level:3},{value:"Schemas",id:"schemas",level:3},{value:"Reductions",id:"reductions",level:3},{value:"Tests",id:"tests",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Resources and bindings",id:"resources-and-bindings",level:3},{value:"Storage mappings",id:"storage-mappings",level:3},{value:"Advanced concepts",id:"advanced-concepts",level:2},{value:"Journals",id:"journals",level:3},{value:"Task shards",id:"task-shards",level:3},{value:"Projections",id:"projections",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsxs)(n.p,{children:["Flow helps you define data pipelines, known as ",(0,s.jsx)(n.strong,{children:"Data Flows"}),", that connect multiple data systems, APIs, and storage, and optionally transform data along the way.\nData Flows are defined by a set of ",(0,s.jsx)(n.strong,{children:"Flow specifications"})," and deployed using either the web application or the command-line interface."]}),"\n",(0,s.jsx)(n.p,{children:"This page introduces concepts and terms that will help you begin working with Flow and better understand its underlying mechanisms.\nThese concepts are discussed in more detail on subsequent pages."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(74532).A+"",width:"960",height:"540"})}),"\n",(0,s.jsx)(n.h2,{id:"working-with-flow",children:"Working with Flow"}),"\n",(0,s.jsx)(n.p,{children:"There are two main environments in which you can work with Flow:\nthe web application or your preferred local environment using the flowctl command-line tool."}),"\n",(0,s.jsx)(n.h3,{id:"web-application",children:"Web application"}),"\n",(0,s.jsxs)(n.p,{children:["The Flow web application is where you'll most likely create, monitor, and update your Data Flows.\nYou can find it at ",(0,s.jsx)(n.a,{href:"https://dashboard.estuary.dev",children:"dashboard.estuary.dev"}),".\nThe app is backed by secure, cloud-hosted infrastructure that Estuary manages."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/web-app",children:"Take a tour of the web app"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/guides/create-dataflow",children:"Create your first Data Flow with the web app"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"flowctl",children:"flowctl"}),"\n",(0,s.jsx)(n.p,{children:"flowctl is a command-line interface for working with Flow's public API.\nUsing flowctl, developers can inspect, edit, test, and publish Data Flows \u2014 just as with the web application.\nFor example, you can create a Data Flow with the web app, and then use flowctl to fetch it into files that you manage within a Git repo."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/flowctl",children:"Learn more about flowctl"})}),"\n",(0,s.jsx)(n.h2,{id:"essential-concepts",children:"Essential concepts"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"In this section, you'll find the most important Flow terms and concepts. If you're new to Flow, start here."})}),"\n",(0,s.jsxs)(n.p,{children:["A complete end-to-end ",(0,s.jsx)(n.strong,{children:"Data Flow"})," between two systems has three components:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Capture"}),": Flow ingests data from an outside source."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collections"}),": Flow maintains the captured data in cloud storage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Materialization"}),": Flow pushes data to an outside destination."]}),"\n"]}),"\n","\n","\n",(0,s.jsx)(o.A,{chart:"\n\tgraph LR;\n\t\tCapture--\x3eCollection;\n        Collection--\x3eMaterialization;\n"}),"\n",(0,s.jsx)(n.p,{children:"It may also include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Derivations"}),": You apply a transformation to data in a collection, resulting in a new collection."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All of these entities are described in the ",(0,s.jsx)(n.strong,{children:"catalog"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"catalog",children:"Catalog"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"catalog"})," is the set of active entities that comprise all ",(0,s.jsx)(n.strong,{children:"Data Flows"}),": captures, materializations, derivations, collections, schemas, tests, and more."]}),"\n",(0,s.jsxs)(n.p,{children:["All catalog entities are defined in ",(0,s.jsx)(n.strong,{children:"Flow specification files"})," \u2014 either manually, by you, or generated by the Flow web app. You create the specifications as ",(0,s.jsx)(n.strong,{children:"drafts"}),", and ",(0,s.jsx)(n.strong,{children:"publish"})," them to add them to the catalog."]}),"\n",(0,s.jsx)(n.p,{children:"You can mix and match catalog entities to create a variety of Data Flows."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/catalogs",children:"Learn more about the catalog"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"collections",children:"Collections"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Collections"})," represent datasets within Flow.\nAll captured documents are written to a collection, and all materialized documents are read from a collection."]}),"\n",(0,s.jsx)(n.p,{children:"Collections are a real-time data lake.\nLike a traditional data lake, the documents that make up a collection are stored as plain JSON in your cloud storage bucket.\nUnlike a traditional data lake, updates to the collection are reflected downstream in the data flow\nwithin milliseconds."}),"\n",(0,s.jsx)(n.p,{children:"Documents in collections are stored indefinitely in your cloud storage bucket (or may be managed with your regular bucket lifecycle policies).\nThis means that the full historical content of a collection is available to support future data operations and perform backfills without going back to the source."}),"\n",(0,s.jsxs)(n.p,{children:["Each collection has a keyed ",(0,s.jsx)(n.a,{href:"#schemas",children:"schema"})," against which incoming documents are validated.\nThis ensures that data is always clean and organized."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/collections",children:"Learn more about collections"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"captures",children:"Captures"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"capture"})," is a Flow task that ingests data from an external source into one or more Flow collections.\nDocuments continuously move from the source into Flow;\nas new documents become available at the source,\nFlow validates their schema and adds them to their corresponding collection.\nCaptures interface with source systems using ",(0,s.jsx)(n.a,{href:"#connectors",children:"connectors"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/captures",children:"Learn more about captures"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"materializations",children:"Materializations"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"materialization"})," is a Flow task that pushes data from one or more collections\nto an external destination.\nDocuments continuously moves from each Flow collection to the destination.\nMaterializations are the conceptual inverse of ",(0,s.jsx)(n.strong,{children:"captures."})]}),"\n",(0,s.jsxs)(n.p,{children:["As new documents become available within bound collections, the materialization\nkeeps the destination up to date within milliseconds, or as fast as that system allows.\nMaterializations interface with destinations using ",(0,s.jsx)(n.a,{href:"#connectors",children:"connectors"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/materialization",children:"Learn more about materializations"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoints"})," are the source systems from which Flow captures data and the destination systems to which Flow materializes data. All kinds of data systems can be endpoints, including databases, key/value stores, streaming pub/sub systems, SaaS products, and cloud storage locations."]}),"\n",(0,s.jsxs)(n.p,{children:["Flow connects to this wide variety of endpoints using ",(0,s.jsx)(n.strong,{children:"connectors"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"connectors",children:"Connectors"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Connectors"})," are plugin components that allow Flow to interface with endpoint data systems.\nThey power captures and materializations."]}),"\n",(0,s.jsx)(n.p,{children:"Flow uses an open-source connector model.\nMany connectors are made by Estuary, and others are made by third parties.\nBecause connectors are open-source and kept separate from Flow itself,\nnew integrations can be added and updated quickly.\nThis is important, as the landscape of data systems and platforms is constantly evolving."}),"\n",(0,s.jsx)(n.p,{children:"All currently supported connectors are ready to use in the Flow web application.\nThey're also available as Docker images, each encapsulating the details of working with\na particular source or destination system."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/connectors",children:"Learn more about connectors"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"intermediate-concepts",children:"Intermediate concepts"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"In this section, you'll find important concepts that are optional for basic usage.\nRead this to unlock more powerful workflows."})}),"\n",(0,s.jsx)(n.h3,{id:"derivations",children:"Derivations"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"derivation"})," is a collection that results from the transformation of one or more other collections,\nwhich is continuously updated in sync with its source collection(s)."]}),"\n",(0,s.jsx)(n.p,{children:"You can use derivations to map, reshape, and filter documents.\nThey can also be used to tackle complex stateful streaming workflows,\nincluding joins and aggregations,\nwithout windowing and scaling limitations."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"derivations/",children:"Learn more about derivations"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"schemas",children:"Schemas"}),"\n",(0,s.jsxs)(n.p,{children:["All collections in Flow have an associated\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/",children:"JSON schema"}),"\nagainst which documents are validated every time they're written or read.\nSchemas are critical to how Flow ensures the integrity of your data.\nFlow validates your documents to ensure that\nbad data doesn't make it into your collections \u2014 or worse,\ninto downstream data products!"]}),"\n",(0,s.jsx)(n.p,{children:"JSON schema is a flexible standard for representing structure, invariants,\nand other constraints over your documents.\nSchemas can be very permissive, highly exacting, or somewhere in between."}),"\n",(0,s.jsx)(n.p,{children:"Flow pauses catalog tasks when documents don't match the collection schema,\nalerting you to the mismatch and allowing you to fix it before it creates a bigger problem."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/schemas",children:"Learn more about schemas"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"reductions",children:"Reductions"}),"\n",(0,s.jsxs)(n.p,{children:["Every Flow collection ",(0,s.jsx)(n.a,{href:"#schemas",children:"schema"})," includes a  ",(0,s.jsx)(n.strong,{children:"key"}),".\nThe key is used to identify collection documents and determine how they are grouped.\nWhen a collection is materialized into a database table, for example, its key becomes\nthe SQL primary key of the materialized table."]}),"\n",(0,s.jsxs)(n.p,{children:["Flow also uses the key to ",(0,s.jsx)(n.strong,{children:"reduce"})," documents in collections, making storage and materializations more efficient.\nIf multiple documents of a given key are added to a collection,\nby default, the most recent document supersedes all previous documents of that key."]}),"\n",(0,s.jsx)(n.p,{children:"You can exert more control over your data by changing the default reduction strategy.\nBy doing so, you can deeply merge documents, maintain running counts,\nand achieve other complex aggregation behaviors."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/schemas#reductions",children:"Learn more about reductions"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tests",children:"Tests"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tests"})," become an important part of your Data Flows when you add derivations and customized reduction behavior.\nYou use tests to verify the end-to-end behavior of your collections and derivations."]}),"\n",(0,s.jsx)(n.p,{children:"A test is a sequence of ingestion or verification steps.\nIngestion steps ingest one or more document fixtures into a collection,\nand verification steps assert that the contents of another derived collection match a test expectation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/tests",children:"Learn more about tests"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tasks",children:"Tasks"}),"\n",(0,s.jsxs)(n.p,{children:["Captures, derivations, and materializations are collectively referred to as catalog ",(0,s.jsx)(n.strong,{children:"tasks"}),'.\nThey are the "active" components of a Data Flow, each running continuously and reacting to documents\nas they become available.']}),"\n",(0,s.jsx)(n.p,{children:"Collections, by way of comparison, are inert. They reflect data at rest, and are acted upon by\ncatalog tasks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A capture adds documents to a collection pulled from a source endpoint."}),"\n",(0,s.jsx)(n.li,{children:"A derivation updates a collection by applying transformations to other collections."}),"\n",(0,s.jsx)(n.li,{children:"A materialization reacts to changes of a collection to update a destination endpoint."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"resources-and-bindings",children:"Resources and bindings"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"resource"})," is an addressable collection of data within a source or destination system.\nThe exact meaning of a resource is up to the endpoint and its connector. For example:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Resources of a database endpoint might be its individual tables."}),"\n",(0,s.jsx)(n.li,{children:"Resources of a Kafka cluster might be its topics."}),"\n",(0,s.jsx)(n.li,{children:"Resources of a SaaS connector might be its various API feeds."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you create capture or materialization, it connects a collection to a resource through a ",(0,s.jsx)(n.strong,{children:"binding"}),".\nA given capture or materialization may have multiple bindings, which connect multiple collections to different resources."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"storage-mappings",children:"Storage mappings"}),"\n",(0,s.jsxs)(n.p,{children:["Flow ",(0,s.jsx)(n.a,{href:"#collections",children:"collections"})," use cloud storage buckets for the durable storage of data.\nStorage mappings define how Flow maps your various collections into your storage buckets and prefixes."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/storage-mappings",children:"Learn more about storage mappings"})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-concepts",children:"Advanced concepts"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section discusses advanced Flow concepts. The information here unlocks\na more technical understanding of how Flow works, and may be helpful in advanced use cases."})}),"\n",(0,s.jsx)(n.h3,{id:"journals",children:"Journals"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Journals"})," provide the low-level storage for Flow collections.\nEach logical and physical partition of a collection is backed by a journal."]}),"\n",(0,s.jsxs)(n.p,{children:["Task ",(0,s.jsx)(n.a,{href:"#task-shards",children:"shards"})," also use journals to provide for their durability\nand fault tolerance.\nEach shard has an associated ",(0,s.jsx)(n.strong,{children:"recovery log"}),", which is a journal into which\ninternal checkpoint states are written."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/advanced/journals",children:"Learn more about journals"})}),"\n",(0,s.jsx)(n.h3,{id:"task-shards",children:"Task shards"}),"\n",(0,s.jsxs)(n.p,{children:["Task ",(0,s.jsx)(n.strong,{children:"shards"})," are the unit of execution for a catalog ",(0,s.jsx)(n.a,{href:"#tasks",children:"task"}),".\nA single task can have many shards, which allow the task to scale across\nmany machines to achieve more throughput and parallelism."]}),"\n",(0,s.jsx)(n.p,{children:"Shards are created and managed by the Flow runtime.\nEach shard represents a slice of the overall work of the catalog task,\nincluding its processing status and associated internal checkpoints.\nCatalog tasks are created with a single shard,\nwhich can be repeatedly subdivided at any time \u2014 with no downtime \u2014 to\nincrease the processing capacity of the task."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/advanced/shards",children:"Learn more about shards"})}),"\n",(0,s.jsx)(n.h3,{id:"projections",children:"Projections"}),"\n",(0,s.jsxs)(n.p,{children:["Flow leverages your JSON schemas to produce other types of schemas as needed,\nsuch as TypeScript types and SQL ",(0,s.jsx)(n.code,{children:"CREATE TABLE"})," statements."]}),"\n",(0,s.jsx)(n.p,{children:"In many cases these projections provide comprehensive end-to-end type safety\nof Data Flows and their TypeScript transformations, all statically verified\nat build time."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-1464/concepts/advanced/projections",children:"Learn more about projections"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},61114:(e,n,t)=>{t.d(n,{A:()=>i});var s=t(96540),a=t(29880),o=t(74848);a.K.initialize({startOnLoad:!0});const i=e=>{let{chart:n}=e;return(0,s.useEffect)((()=>{a.K.contentLoaded()}),[]),(0,o.jsx)("div",{className:"mermaid",children:n})}},74532:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/at-a-glance-013b784deb2b72b4632eee51e5b90252.png"}}]);