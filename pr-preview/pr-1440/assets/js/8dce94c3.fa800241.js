"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3798],{29141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const o={},s="Journals",a={id:"concepts/advanced/journals",title:"Journals",description:"Journals are an advanced concept of Flow.",source:"@site/docs/concepts/advanced/journals.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/journals",permalink:"/pr-preview/pr-1440/concepts/advanced/journals",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/journals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema evolution",permalink:"/pr-preview/pr-1440/concepts/advanced/evolutions"},next:{title:"Logs and statistics",permalink:"/pr-preview/pr-1440/concepts/advanced/logs-stats"}},l={},c=[{value:"Specification",id:"specification",level:2},{value:"Physical partitions",id:"physical-partitions",level:2},{value:"Fragment files",id:"fragment-files",level:2},{value:"Hive layouts",id:"hive-layouts",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"journals",children:"Journals"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Journals are an advanced concept of Flow.\nYou can use Flow without knowing the details of journals,\nbut this section may help you better understand how Flow works."})}),"\n",(0,i.jsxs)(n.p,{children:["Flow collections store their data in one or more ",(0,i.jsx)(n.strong,{children:"journals"}),",\nresources resembling files.\nJournals are part of the Gazette project.\n",(0,i.jsx)(n.a,{href:"https://gazette.readthedocs.io/en/latest/brokers-concepts.html#journals",children:"See Gazette's Journal concepts page for details"}),".\nThe number of journals that comprise a given collection depends\non how the collection is partitioned."]}),"\n",(0,i.jsxs)(n.p,{children:["Journals are a real-time data lake.\nHistorical journal data is stored as an organized layout of\n",(0,i.jsx)(n.a,{href:"#fragment-files",children:"fragment files"})," in cloud storage.\nFragment files are regular files that collectively hold the journal's content.\nJust-written data is held in a replicated buffer,\nwhere it is immediately available to readers.\nFrom there, buffers are regularly persisted\nto your bucket for long-term storage."]}),"\n",(0,i.jsx)(n.p,{children:"Journals may be read from any offset.\nReaders of historical data,\nsuch as a new materialization or derivation task,\nfetch files directly from your bucket for efficiency and throughput.\nThen, as they reach the present, they automatically switch to\nstreaming new documents within milliseconds of their being written."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(61344).A+"",width:"960",height:"540"})}),"\n",(0,i.jsxs)(n.p,{children:["All data of a collection is stored as regular JSON files\nunder a common and unique prefix within your cloud storage bucket.\nFor example, all fragment files of collection ",(0,i.jsx)(n.code,{children:"acmeCo/orders"}),"\nwould live under the storage prefix\n",(0,i.jsx)(n.code,{children:"s3://acmeCo-bucket/acmeCo/orders"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Files are ",(0,i.jsx)(n.strong,{children:"directly accessible"})," by other tools.\nThis is an important aspect of Flow's design,\nand it has some major implications:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can use tools including Snowflake, Spark, Hive, Pandas,\nand many others to read and process the data in your Flow collections."}),"\n",(0,i.jsxs)(n.li,{children:["You can capture and organize data into Flow collections\nwithout knowing how it will be used quite yet.\nPerform ad-hoc analysis using the collection data lake,\nand layer in ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1440/concepts/derivations",children:"derivations"}),"\nor ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1440/concepts/materialization",children:"materializations"})," later,\nor not at all."]}),"\n",(0,i.jsx)(n.li,{children:"If you ever decide to stop using Flow,\nyour data is still yours.\nThere's no lock-in or need to migrate data out."}),"\n",(0,i.jsx)(n.li,{children:"Removing files from your bucket also removes them from your collection.\nApply bucket lifecycle policies or directly delete files to permanently\ndrop their contents from the collection."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Flow collections have one or more\n",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1440/concepts/advanced/projections#logical-partitions",children:"logical partitions"}),",\nand each logical partition has one or more\n",(0,i.jsx)(n.a,{href:"#physical-partitions",children:"physical partitions"}),".\nEvery physical partition is implemented as a ",(0,i.jsx)(n.strong,{children:"journal"}),",\nand a journal may have many ",(0,i.jsx)(n.a,{href:"#fragment-files",children:"fragment files"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Entity"}),(0,i.jsx)(n.th,{children:"Example"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"acmeCo/orders"})})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Logical Partition"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"acmeCo/orders/"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"category=Anvils"})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Physical Partition / Journal"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"acmeCo/orders/category=Anvils/"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"pivot=00"})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Journal Storage"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"s3://acmeCo-bucket/"})}),(0,i.jsx)(n.code,{children:"acmeCo/orders/category=Anvils/pivot=00"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Fragment File"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"s3://acmeCo-bucket/acmeCo/orders/category=Anvils/pivot=00/"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"utc_date=2022-01-07/utc_hour=19/0000000000000000-00000000201a3f27-1ec69e2de187b7720fb864a8cd6d50bb69cc7f26.gz"})})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsxs)(n.p,{children:["Flow ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1440/concepts/collections",children:"collections"})," can control some aspects of how\ntheir contents are mapped into journals through the ",(0,i.jsx)(n.code,{children:"journals"})," stanza:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/orders:\n    schema: orders.schema.yaml\n    key: [/id]\n\n    journals:\n      # Configuration for journal fragments.\n      # Required, type: object.\n      fragments:\n        # Codec used to compress fragment files.\n        # One of ZSTANDARD, SNAPPY, GZIP, or NONE.\n        # Optional. Default is GZIP.\n        compressionCodec: GZIP\n        # Maximum flush delay before in-progress fragment buffers are closed\n        # and persisted. Default uses no flush interval.\n        # Optional. Given as a time duration.\n        flushInterval: 15m\n        # Desired content length of each fragment, in megabytes before compression.\n        # Default is 512MB.\n        # Optional, type: integer.\n        length: 512\n        # Duration for which historical files of the collection should be kept.\n        # Default is forever.\n        # Optional. Given as a time duration.\n        retention: 720h\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1440/concepts/storage-mappings",children:"storage mappings"})," determine\nwhich of your cloud storage buckets is used\nfor storage of collection fragment files."]}),"\n",(0,i.jsx)(n.h2,{id:"physical-partitions",children:"Physical partitions"}),"\n",(0,i.jsx)(n.p,{children:"Every logical partition of a Flow collection\nis created with a single physical partition.\nLater and as required, new physical partitions are added\nin order to increase the write throughput of the collection."}),"\n",(0,i.jsxs)(n.p,{children:["Each physical partition is responsible for all new writes\ncovering a range of keys occurring in collection documents.\nConceptually, if keys range from [A-Z] then one partition\nmight cover [A-F] while another covers [G-Z].\nThe ",(0,i.jsx)(n.code,{children:"pivot"})," of a partition reflects the first key\nin its covered range.\nOne physical partition is turned into more partitions\nby subdividing its range of key ownership.\nFor instance, a partition covering [A-F]\nis split into partitions [A-C] and [D-F]."]}),"\n",(0,i.jsxs)(n.p,{children:["Physical partitions are journals.\nThe relationship between the journal and\nits specific collection and logical partition are\nencoded within\n",(0,i.jsx)(n.a,{href:"https://gazette.readthedocs.io/en/latest/brokers-concepts.html#specifications",children:"its journal specification"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"fragment-files",children:"Fragment files"}),"\n",(0,i.jsx)(n.p,{children:"Journal fragment files each hold a slice of your collection's content,\nstored as a compressed file of newline-delimited JSON documents\nin your cloud storage bucket."}),"\n",(0,i.jsx)(n.p,{children:"Files are flushed to cloud storage periodically,\ntypically after they reach a desired size threshold.\nThey use a content-addressed naming scheme\nwhich allows Flow to understand\nhow each file stitches into the overall journal.\nConsider a fragment file path like:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"s3://acmeCo-bucket/acmeCo/orders/category=Anvils/pivot=00/utc_date=2022-01-07/utc_hour=19/0000000000000000-00000000201a3f27-1ec69e2de187b7720fb864a8cd6d50bb69cc7f26.gz"})}),"\n",(0,i.jsx)(n.p,{children:"This path has the following components:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Example"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Storage prefix of physical partition"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"s3://acmeCo-bucket/acmeCo/orders/category=Anvils/pivot=00/"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Supplemental time pseudo-partitions"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"utc_date=2022-01-07/utc_hour=19/"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Beginning content offset"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0000000000000000"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ending content offset"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"00000000201a3f27"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SHA content checksum"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1ec69e2de187b7720fb864a8cd6d50bb69cc7f26"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Compression codec"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:".gz"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The supplemental ",(0,i.jsx)(n.strong,{children:"time pseudo-partitions"})," are not logical partitions,\nbut are added to each fragment file path to facilitate\nintegration with external tools that understand ",(0,i.jsx)(n.strong,{children:"Hive layouts"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"hive-layouts",children:"Hive layouts"}),"\n",(0,i.jsxs)(n.p,{children:["As we've seen,\ncollection fragment files are written to cloud storage\nwith path components like\n",(0,i.jsx)(n.code,{children:"/category=Anvils/pivot=00/utc_date=2022-01-07/utc_hour=19/"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you've used tools within the Apache Hive ecosystem, this layout should feel familiar.\nFlow organizes files in this way to make them directly usable\nby tools that understand Hive partitioning, like Spark and Hive itself.\nCollections can also be integrated as Hive-compatible external tables\nin tools like\n",(0,i.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/tables-external-intro.html#partitioned-external-tables",children:"Snowflake"}),"\nand\n",(0,i.jsx)(n.a,{href:"https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs",children:"BigQuery"}),"\nfor ad-hoc analysis."]}),"\n",(0,i.jsxs)(n.p,{children:["SQL queries against these tables can even utilize ",(0,i.jsx)(n.strong,{children:"predicate push-down"}),",\ntaking query predicates over ",(0,i.jsx)(n.code,{children:"category"}),", ",(0,i.jsx)(n.code,{children:"utc_date"}),", and ",(0,i.jsx)(n.code,{children:"utc_hour"}),"\nand pushing them down into the selection of files that must be read to answer\nthe query \u2014 often offering much faster and more efficient query execution because\nfar less data must be read."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},61344:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/journals-d78b87f0eda7164e8a9936e36c4d7a0e.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);