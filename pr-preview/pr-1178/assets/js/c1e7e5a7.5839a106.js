"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7059],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?o.createElement(m,s(s({ref:t},c),{},{components:a})):o.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3,description:"High level explanations of Flow in terms of the systems you already know"},s="Comparisons",i={unversionedId:"overview/comparisons",id:"overview/comparisons",title:"Comparisons",description:"High level explanations of Flow in terms of the systems you already know",source:"@site/docs/overview/comparisons.md",sourceDirName:"overview",slug:"/overview/comparisons",permalink:"/pr-preview/pr-1178/overview/comparisons",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/overview/comparisons.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"High level explanations of Flow in terms of the systems you already know"},sidebar:"tutorialSidebar",previous:{title:"Who should use Flow?",permalink:"/pr-preview/pr-1178/overview/who-should-use-flow"},next:{title:"Registration and setup",permalink:"/pr-preview/pr-1178/getting-started/installation"}},l={},p=[{value:"Apache Beam and Google Cloud Dataflow",id:"apache-beam-and-google-cloud-dataflow",level:2},{value:"Kafka",id:"kafka",level:2},{value:"Spark",id:"spark",level:2},{value:"Hadoop, HDFS, and Hive",id:"hadoop-hdfs-and-hive",level:2},{value:"Fivetran, Airbyte, and other ELT solutions",id:"fivetran-airbyte-and-other-elt-solutions",level:2},{value:"dbt",id:"dbt",level:2},{value:"Materialize, Rockset, ksqlDB, and other real-time databases",id:"materialize-rockset-ksqldb-and-other-real-time-databases",level:2},{value:"Snowflake, BigQuery, and other OLAP databases",id:"snowflake-bigquery-and-other-olap-databases",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"comparisons"},"Comparisons"),(0,n.kt)("p",null,"Because Flow combines many functionalities, it's related to many types of data systems. Choose a familiar system from the list below to jump to an explanation of how it compares with Flow (or how you can use the two together)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#apache-beam-and-google-cloud-dataflow"},"Apache Beam and Google Cloud Dataflow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#kafka"},"Kafka")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#spark"},"Spark")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#hadoop-hdfs-and-hive"},"Hadoop, HDFS, and Hive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#fivetran-airbyte-and-other-elt-solutions"},"Fivetran, Airbyte, and other ELT solutions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#dbt"},"dbt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#materialize-rockset-ksqldb-and-other-real-time-databases"},"Materialize, Rockset, ksqlDB, and other realtime databases")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1178/overview/comparisons#snowflake-bigquery-and-other-olap-databases"},"Snowflake, BigQuery, and other OLAP databases"))),(0,n.kt)("h2",{id:"apache-beam-and-google-cloud-dataflow"},"Apache Beam and Google Cloud Dataflow"),(0,n.kt)("p",null,"Flow\u2019s most apt comparison is to Apache Beam. You may use a variety of runners (processing engines) for your Beam deployment. One of the most popular, Google Cloud Dataflow, is a more robust redistribution under an additional SDK. Regardless of how you use Beam, there\u2019s a lot of conceptual overlap with Flow. This makes Beam and Flow alternatives rather than complementary technologies, but there are key differences."),(0,n.kt)("p",null,"Like Beam, Flow\u2019s primary primitive is a ",(0,n.kt)("strong",{parentName:"p"},"collection"),". You build a processing graph (called a ",(0,n.kt)("strong",{parentName:"p"},"pipeline")," in Beam and a ",(0,n.kt)("strong",{parentName:"p"},"Data Flow")," in Flow) by relating multiple collections together through procedural transformations, or lambdas. As with Beam, Flow\u2019s runtime performs automatic data shuffles and is designed to allow fully automatic scaling. Also like Beam, collections have associated schemas."),(0,n.kt)("p",null,"Unlike Beam, Flow doesn\u2019t distinguish between batch and streaming contexts. Flow unifies these paradigms under a single collection concept, allowing you to seamlessly work with both data types."),(0,n.kt)("p",null,"Also, while Beam allows you the option to define combine operators, Flow\u2019s runtime always applies combine operators. These are built using the declared semantics of the document\u2019s schema, which makes it much more efficient and cost-effective to work with streaming data."),(0,n.kt)("p",null,"Finally, Flow allows stateful stream-to-stream joins without the windowing semantics imposed by Beam. Notably, Flow\u2019s modeling of state \u2013 via its per-key ",(0,n.kt)("strong",{parentName:"p"},"register")," concept \u2013 is substantially more powerful than Beam's per-key-and-window model. For example, registers can trivially model the cumulative lifetime value of a customer."),(0,n.kt)("h2",{id:"kafka"},"Kafka"),(0,n.kt)("p",null,"Flow inhabits a different space than Kafka does by itself. Kafka is an infrastructure that supports streaming applications running elsewhere. Flow is an opinionated framework for working with real-time data. You might think of Flow as an analog to an opinionated bundling of several important features from the broader Kafka ecosystem."),(0,n.kt)("p",null,"Flow is built on ",(0,n.kt)("a",{parentName:"p",href:"https://gazette.readthedocs.io/en/latest/"},"Gazette"),", a highly-scalable streaming broker similar to log-oriented pub/sub systems. Thus, Kafka is more directly comparable to Gazette. Flow also uses Gazette\u2019s consumer framework, which has similarities to Kafka ",(0,n.kt)("strong",{parentName:"p"},"consumers"),". Both manage scale-out execution contexts for consumer tasks, offer durable local task stores, and provide exactly-once semantics."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/advanced/journals"},"Journals")," in Gazette and Flow are roughly analogous to Kafka ",(0,n.kt)("strong",{parentName:"p"},"partitions"),". Each journal is a single append-only log. Gazette has no native notion of a ",(0,n.kt)("strong",{parentName:"p"},"topic"),", but instead supports label-based selection of subsets of journals, which tends to be more flexible. Gazette journals store data in contiguous chunks called ",(0,n.kt)("strong",{parentName:"p"},"fragments"),", which typically live in cloud storage. Each journal can have its own separate storage configuration, which Flow leverages to allow users to bring their own cloud storage buckets. Another unique feature of Gazette is its ability to serve reads of historical data by providing clients with pre-signed cloud storage URLs, which enables it to serve many readers very efficiently."),(0,n.kt)("p",null,"Generally, Flow users don't need to know or care much about Gazette and its architecture, since Flow provides a higher-level interface over groups of journals, called ",(0,n.kt)("strong",{parentName:"p"},"collections"),"."),(0,n.kt)("p",null,"Flow ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/collections"},"collections")," are somewhat similar to Kafka ",(0,n.kt)("strong",{parentName:"p"},"streams"),", but with some important differences. Collections always store JSON and must have an associated JSON schema. Collections also support automatic logical and physical partitioning. Each collection is backed by one or more journals, depending on the partitioning."),(0,n.kt)("p",null,"Flow ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/#tasks"},"tasks")," are most similar to Kafka ",(0,n.kt)("strong",{parentName:"p"},"stream processors"),", but are more opinionated. Tasks fall into one of three categories: captures, derivations, and materializations. Tasks may also have more than one process, which Flow calls ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/advanced/shards"},(0,n.kt)("strong",{parentName:"a"},"shards")),", to allow for parallel processing. Tasks and shards are fully managed by Flow. This includes transactional state management and zero-downtime splitting of shards, which enables turnkey scaling."),(0,n.kt)("p",null,"See how Flow compares to popular stream processing platforms that use Kafka:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://estuary.dev/vs-confluent/"},"Flow vs Confluent feature and pricing breakdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://estuary.dev/vs-debezium/"},"Flow vs Debezium feature and pricing breakdown"))),(0,n.kt)("h2",{id:"spark"},"Spark"),(0,n.kt)("p",null,"Spark can be described as a batch engine with stream processing add-ons, where Flow is fundamentally a streaming system that is able to easily integrate with batch systems."),(0,n.kt)("p",null,"You can think of a Flow ",(0,n.kt)("strong",{parentName:"p"},"collection")," as a set of RDDs with common associated metadata. In Spark, you can save an RDD to a variety of external systems, like cloud storage or a database. Likewise, you can load from a variety of external systems to create an RDD. Finally, you can transform one RDD into another. You use Flow collections in a similar manner. They represent a logical dataset, which you can ",(0,n.kt)("strong",{parentName:"p"},"materialize")," to push the data into some external system like cloud storage or a database. You can also create a collection that is ",(0,n.kt)("strong",{parentName:"p"},"derived")," by applying stateful transformations to one or more source collections."),(0,n.kt)("p",null,"Unlike Spark RDDs, Flow collections are backed by one or more unbounded append-only logs. Therefore, you don't create a new collection each time data arrives; you simply append to the existing one. Collections can be partitioned and can support extremely large volumes of data."),(0,n.kt)("p",null,"Spark's processing primitives, ",(0,n.kt)("strong",{parentName:"p"},"applications"),", ",(0,n.kt)("strong",{parentName:"p"},"jobs"),", and ",(0,n.kt)("strong",{parentName:"p"},"tasks"),", don't translate perfectly to Flow, but we can make some useful analogies. This is partly because Spark is not very opinionated about what an application does. Your Spark application could read data from cloud storage, then transform it, then write the results out to a database. The closest analog to a Spark application in Flow is the ",(0,n.kt)("strong",{parentName:"p"},"Data Flow"),". A Data Flow is a composition of Flow tasks, which are quite different from tasks in Spark."),(0,n.kt)("p",null,"In Flow, a task is a logical unit of work that does ",(0,n.kt)("em",{parentName:"p"},"one")," of capture (ingest), derive (transform), or materialize (write results to an external system). What Spark calls a task is actually closer to a Flow ",(0,n.kt)("strong",{parentName:"p"},"shard"),". In Flow, a task is a logical unit of work, and ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/advanced/shards"},"shards")," represent the potentially numerous processes that actually carry out that work. Shards are the unit of parallelism in Flow, and you can easily split them for turnkey scaling."),(0,n.kt)("p",null,"Composing Flow tasks is also a little different than composing Spark jobs. Flow tasks always produce and/or consume data in collections, instead of piping data directly from one shard to another. This is because every task in Flow is transactional and, to the greatest degree possible, fault-tolerant. This design also affords painless backfills of historical data when you want to add new transformations or materializations."),(0,n.kt)("h2",{id:"hadoop-hdfs-and-hive"},"Hadoop, HDFS, and Hive"),(0,n.kt)("p",null,"There are many different ways to use Hadoop, HDFS, and the ecosystem of related projects, several of which are useful comparisons to Flow."),(0,n.kt)("p",null,"To gain an understanding of Flow's processing model for derivations, see ",(0,n.kt)("a",{parentName:"p",href:"https://www.estuary.dev/why-mapreduce-is-making-a-comeback/"},"this blog post about MapReduce in Flow"),"."),(0,n.kt)("p",null,"HDFS is sometimes used as a system of record for analytics data, typically paired with an orchestration system for analytics jobs. If you do this, you likely export datasets from your source systems into HDFS. Then, you use some other tool to coordinate running various MapReduce jobs, often indirectly through systems like Hive."),(0,n.kt)("p",null,"For this use case, the best way of describing Flow is that it completely changes the paradigm. In Flow, you always append data to existing ",(0,n.kt)("strong",{parentName:"p"},"collections"),", rather than creating a new one each time a job is run. In fact, Flow has no notion of a ",(0,n.kt)("strong",{parentName:"p"},"job")," like there is in Hadoop. Flow tasks run continuously and everything stays up to date in real time, so there's never a need for outside orchestration or coordination. Put simply, Flow collections are log-like, and files in HDFS typically store table-like data. ",(0,n.kt)("a",{parentName:"p",href:"https://www.estuary.dev/the-power-and-implications-of-data-materialization/"},"This blog post")," explores those differences in greater depth."),(0,n.kt)("p",null,"To make this more concrete, imagine a hypothetical example of a workflow in the Hadoop world where you export data from a source system, perform some transformations, and then run some Hive queries."),(0,n.kt)("p",null,"In Flow, you instead define a ",(0,n.kt)("strong",{parentName:"p"},"capture")," of data from the source, which runs continuously and keeps a collection up to date with the latest data from the source. Then you transform the data with Flow ",(0,n.kt)("strong",{parentName:"p"},"derivations"),", which again apply the transformations incrementally and in real time. While you ",(0,n.kt)("em",{parentName:"p"},"could")," actually use tools like Hive to directly query data from Flow collections \u2014 the layout of collection data in cloud storage is intentionally compatible with this \u2014 you could also ",(0,n.kt)("strong",{parentName:"p"},"materialize")," a view of your transformation results to any database, which is also kept up to date in real time."),(0,n.kt)("h2",{id:"fivetran-airbyte-and-other-elt-solutions"},"Fivetran, Airbyte, and other ELT solutions"),(0,n.kt)("p",null,"Tools like Fivetran and Airbyte are purpose-built to move data from one place to another. These ELT tools typically model sources and destinations, and run regularly scheduled jobs to export from the source directly to the destination. Flow models things differently. Instead of modeling the world in terms of independent scheduled jobs that copy data from source to destination, Data Flows model a directed graph of\n",(0,n.kt)("a",{parentName:"p",href:"../../concepts/captures"},(0,n.kt)("strong",{parentName:"a"},"captures"))," (reads from sources),\n",(0,n.kt)("a",{parentName:"p",href:"../../concepts/derivations"},(0,n.kt)("strong",{parentName:"a"},"derivations"))," (transforms), and\n",(0,n.kt)("a",{parentName:"p",href:"../../concepts/materialization"},(0,n.kt)("strong",{parentName:"a"},"materializations"))," (writes to destinations).\nCollectively, these are called ",(0,n.kt)("em",{parentName:"p"},"tasks"),"."),(0,n.kt)("p",null,"Tasks in Flow are only indirectly linked. Captures read data from a source and output to ",(0,n.kt)("strong",{parentName:"p"},"collections"),". Flow collections store all the data in cloud storage, with configurable retention for historical data. You can then materialize each collection to any number of destination systems. Each one will be kept up to date in real time, and new materializations can automatically backfill all your historical data. Collections in Flow always have an associated JSON schema, and they use that to ensure the validity of all collection data. Tasks are also transactional and generally guarantee end-to-end exactly-once processing (so long as the endpoint system can accommodate them)."),(0,n.kt)("p",null,"Like Airbyte, Flow uses ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/connectors"},"connectors")," for interacting with external systems in captures and materializations. For captures,\nFlow integrates the Airbyte specification,\nso all Airbyte source connectors can be used with Flow.\nFor materializations, Flow uses its own protocol which is not compatible with the Airbyte spec.\nIn either case, the usage of connectors is pretty similar."),(0,n.kt)("p",null,"In terms of technical capabilities, Flow can do everything that these tools can and more.\nBoth Fivetran and Airbyte both currently have graphical interfaces that make them much easier for\nnon-technical users to configure. Flow, too, is focused on empowering non-technical users through its web application.\nAt the same time, it Flow offers declarative YAML for configuration, which works excellently in a GitOps workflow."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://estuary.dev/vs-fivetran/"},"Flow vs Fivetran feature and pricing breakdown.")),(0,n.kt)("h2",{id:"dbt"},"dbt"),(0,n.kt)("p",null,"dbt is a tool that enables data analysts and engineers to transform data in their warehouses more effectively."),(0,n.kt)("p",null,"In addition to \u2013 and perhaps more important than \u2013 its transform capability, dbt brought an entirely new workflow for working with data:\none that prioritizes version control, testing, local development, documentation, composition, and re-use."),(0,n.kt)("p",null,"Like dbt, Flow uses a declarative model and tooling, but the similarities end there. dbt is a tool for defining transformations, which are executed within your analytics warehouse.\nFlow is a tool for delivering data to that warehouse, as well as continuous operational transforms that are applied everywhere else."),(0,n.kt)("p",null,"These two tools can make lots of sense to use together. First, Flow brings timely, accurate data to the warehouse.\nWithin the warehouse, analysts can use tools like dbt to explore the data. The Flow pipeline is then ideally suited to\nproductionize important insights as materialized views or by pushing to another destination."),(0,n.kt)("p",null,"Put another way, Flow is a complete ELT platform, but you might choose to perform and manage more complex transformations in\na separate, dedicated tool like dbt. While Flow and dbt don\u2019t interact directly, both offer easy integration through your data warehouse."),(0,n.kt)("h2",{id:"materialize-rockset-ksqldb-and-other-real-time-databases"},"Materialize, Rockset, ksqlDB, and other real-time databases"),(0,n.kt)("p",null,"Modern real-time databases like Materialize, Rockset, and ksqlDB consume streams of data, oftentimes from Kafka brokers,\nand can keep SQL views up to date in real time."),(0,n.kt)("p",null,"These real-time databases have a lot of conceptual overlap with Flow. The biggest difference is that Flow can materialize this same type of incrementally updated view into any database, regardless of whether that database has real-time capabilities or not."," "),(0,n.kt)("p",null,"However, this doesn't mean that Flow should  ",(0,n.kt)("em",{parentName:"p"},"replace")," these systems in your stack. In fact, it can be optimal to use Flow to feed data into them.\nFlow adds real-time data capture and materialization options that many real-time databases don't support.\nOnce data has arrived in the database, you have access to real-time SQL analysis and other analytical tools not native to Flow.\nFor further explanation, read the section below on OLAP databases."),(0,n.kt)("h2",{id:"snowflake-bigquery-and-other-olap-databases"},"Snowflake, BigQuery, and other OLAP databases"),(0,n.kt)("p",null,"Flow differs from OLAP databases mainly in that it's not a database. Flow has no query interface, and no plans to add one. Instead, Flow allows you to use the query interfaces of any database by ",(0,n.kt)("strong",{parentName:"p"},"materializing")," views into it."),(0,n.kt)("p",null,"Flow is similar to OLAP databases in that it can be the source of truth for all analytics data (though it's also capable enough to handle operational workloads). Instead of schemas and tables, Flow defines ",(0,n.kt)("strong",{parentName:"p"},"collections"),". These collections are conceptually similar to database tables in the sense that they are containers for data with an associated (primary) key. Under the hood, Flow collections are each backed by append-only logs, where each document in the log represents a delta update for a given key."),(0,n.kt)("p",null,"Collections can be easily materialized into a variety of external systems, such as Snowflake or BigQuery. This creates a table in your OLAP database that is continuously kept up to date with the collection. With Flow, there's no need to schedule exports to these systems, and thus no need to orchestrate the timing of those exports. You can also materialize a given collection into multiple destination systems, so you can always use whichever system is best for the type of queries you want to run."),(0,n.kt)("p",null,"Like Snowflake, Flow uses inexpensive cloud storage for all collection data. It even lets you bring your own storage bucket, so you're always in control. Unlike data warehouses, Flow is able to directly capture data from source systems, and continuously and incrementally keep everything up to date."),(0,n.kt)("p",null,"A common pattern is to use Flow to capture data from multiple different sources and materialize it into a data warehouse. Flow can also help you avoid expenses associated with queries you frequently pull from a data warehouse by keeping an up-to-date view of them where you want it. Because of Flow\u2019s exactly-once processing guarantees, these materialized views are always correct, consistent, and fault-tolerant."))}u.isMDXComponent=!0}}]);