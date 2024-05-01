"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4430],{61821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(74848),a=n(28453);const o={sidebar_position:2,description:"Common pain points you might have, and how Flow addresses them."},s="Who should use Flow?",r={id:"overview/who-should-use-flow",title:"Who should use Flow?",description:"Common pain points you might have, and how Flow addresses them.",source:"@site/docs/overview/who-should-use-flow.md",sourceDirName:"overview",slug:"/overview/who-should-use-flow",permalink:"/pr-preview/pr-1454/overview/who-should-use-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/overview/who-should-use-flow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Common pain points you might have, and how Flow addresses them."},sidebar:"tutorialSidebar",previous:{title:"Flow documentation",permalink:"/pr-preview/pr-1454/"},next:{title:"Comparisons",permalink:"/pr-preview/pr-1454/overview/comparisons"}},l={},c=[{value:"How Flow can help",id:"how-flow-can-help",level:2},{value:"Fully integrated pipelines",id:"fully-integrated-pipelines",level:3},{value:"Efficient architecture",id:"efficient-architecture",level:3},{value:"Powerful transformations",id:"powerful-transformations",level:3},{value:"Data integrity",id:"data-integrity",level:3},{value:"Dynamic scaling",id:"dynamic-scaling",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"who-should-use-flow",children:"Who should use Flow?"}),"\n",(0,i.jsxs)(t.p,{children:["Flow is a data movement and transformation platform designed for all members of your data team. Its powerful command-line interface gives backend engineers data integration superpowers.\nAt the same time, Flow allows data analysts and other user cohorts to meaningfully contribute to and manage the same data pipelines, or ",(0,i.jsx)(t.strong,{children:"data flows"}),", using the web application."]}),"\n",(0,i.jsx)(t.p,{children:'If you answer "yes" to any of the following questions, Flow can help:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Do you work with multiple databases and struggle to keep them in sync with one another?"}),"\n",(0,i.jsxs)(t.li,{children:["Do you issue repeated OLAP queries to your warehouse that are expensive to execute?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Or do you need instant metrics for specific events like Black Friday?"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Do you operate separate batch and streaming systems, and grapple with reconciling them?"}),"\n",(0,i.jsx)(t.li,{children:"Do you manage continuous processing workflows with tools like Spark,\nFlink, or Google Cloud Dataflow, and want a faster, easier-to-evolve alternative?"}),"\n",(0,i.jsx)(t.li,{children:"Is your organization held back by a data engineering bottleneck,\nwhile less-technical stakeholders are blocked from contributing by a high barrier to entry?"}),"\n",(0,i.jsxs)(t.li,{children:["Are you implementing a new data architecture framework, like a\n",(0,i.jsx)(t.a,{href:"https://martinfowler.com/articles/data-monolith-to-mesh.html",children:"distributed data mesh"}),"\nand are seeking a tool to help with orchestration?"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-flow-can-help",children:"How Flow can help"}),"\n",(0,i.jsx)(t.p,{children:"These unique Flow features can help you solve the problems listed above."}),"\n",(0,i.jsx)(t.h3,{id:"fully-integrated-pipelines",children:"Fully integrated pipelines"}),"\n",(0,i.jsx)(t.p,{children:"With Flow, you can build, test, and evolve pipelines that continuously capture, transform, and materialize data across all of your systems. With one tool, you can power workflows that have historically required you to first piece together services, then integrate and operate them in-house to meet your needs."}),"\n",(0,i.jsx)(t.p,{children:"To achieve comparable capabilities to Flow you would need:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A low-latency streaming system, such as AWS Kinesis"}),"\n",(0,i.jsx)(t.li,{children:"Data lake build-out, such as Kinesis Firehose to S3"}),"\n",(0,i.jsx)(t.li,{children:"Custom ETL application development, such as Spark, Flink, or AWS \u03bb"}),"\n",(0,i.jsx)(t.li,{children:"Supplemental data stores for intermediate transformation states"}),"\n",(0,i.jsx)(t.li,{children:"ETL job management and execution, such as a self-hosting or Google Cloud Dataflow"}),"\n",(0,i.jsx)(t.li,{children:"Custom reconciliation of historical vs streaming datasets, including onerous backfills of new streaming applications from historical data"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Flow dramatically simplifies this inherent complexity. It saves you time and costs, catches mistakes before they hit production, and keeps your data fresh across all the places you use it.\nWith both a UI-forward web application and a powerful CLI ,\nmore types of professionals can contribute to what would otherwise require a\nhighly specialized set of technical skills."}),"\n",(0,i.jsx)(t.h3,{id:"efficient-architecture",children:"Efficient architecture"}),"\n",(0,i.jsx)(t.p,{children:"Flow mixes a variety of architectural techniques to deliver high throughput, avoid latency, and minimize operating costs. These include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Leveraging ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1454/concepts/schemas#reductions",children:"reductions"})," to reduce the amount of data that must be ingested, stored, and processed, often dramatically"]}),"\n",(0,i.jsx)(t.li,{children:"Executing transformations predominantly in-memory"}),"\n",(0,i.jsx)(t.li,{children:"Optimistic pipelining and vectorization of internal remote procedure calls (RPCs) and operations"}),"\n",(0,i.jsx)(t.li,{children:"A cloud-native design that optimizes for public cloud pricing models"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Flow also makes it easy to ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1454/concepts/materialization",children:(0,i.jsx)(t.strong,{children:"materialize"})})," focused data views directly into your warehouse, so you don't need to repeatedly query the much larger source datasets. This can dramatically lower warehouse costs."]}),"\n",(0,i.jsx)(t.h3,{id:"powerful-transformations",children:"Powerful transformations"}),"\n",(0,i.jsx)(t.p,{children:"With Flow, you can build pipelines that join a current event with an event that happened days, weeks, even years in the past. Flow can model arbitrary stream-to-stream joins without the windowing constraints imposed by other systems, which limit how far back in time you can join."}),"\n",(0,i.jsx)(t.p,{children:"Flow transforms data in durable micro-transactions, meaning that an outcome, once committed, won't be silently re-ordered or changed due to a crash or machine failure. This makes Flow uniquely suited for operational workflows, like assigning a dynamic amount of available inventory to a stream of requests \u2014 decisions that, once made, should not be forgotten. You can also evolve transformations as business requirements change, enriching them with new datasets or behaviors without needing to re-compute from scratch."}),"\n",(0,i.jsx)(t.h3,{id:"data-integrity",children:"Data integrity"}),"\n",(0,i.jsx)(t.p,{children:"Flow is architected to ensure that your data is accurate and that changes don't break pipelines.\nIt supports strong schematization, durable transactions with exactly-once semantics, and easy end-to-end testing."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Required JSON schemas ensure that only clean, consistent data is ingested into Flow or written to external systems. If a document violates its schema, Flow pauses the pipeline, giving you a chance to fix the error."}),"\n",(0,i.jsx)(t.li,{children:"Schemas can encode constraints, like that a latitude value must be between +90 and -90 degrees, or that a field must be a valid email address."}),"\n",(0,i.jsx)(t.li,{children:"Flow can project JSON schema into other flavors, like TypeScript types or SQL tables. Strong type checking catches bugs before they're applied to production."}),"\n",(0,i.jsx)(t.li,{children:"Flow's declarative tests verify the integrated, end-to-end behavior of data flows."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"dynamic-scaling",children:"Dynamic scaling"}),"\n",(0,i.jsx)(t.p,{children:"The Flow runtime scales from a single process up to a large Kubernetes cluster for high-volume production deployments. Processing tasks are quickly reassigned upon any machine failure for high availability."}),"\n",(0,i.jsxs)(t.p,{children:["Each process can also be scaled independently, at any time, and without downtime. This is unique to Flow. Comparable systems require that an arbitrary data partitioning be decided upfront, a crucial performance knob that's awkward and expensive to change. Instead, Flow can repeatedly ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1454/concepts/advanced/shards",children:"split a running task"})," into two new tasks, each half the size, without stopping it or impacting its downstream uses."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);