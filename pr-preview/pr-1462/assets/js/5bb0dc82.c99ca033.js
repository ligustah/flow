"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[745],{61105:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(74848),n=s(28453);const r={sidebar_position:3},a="Working with logs and statistics",o={id:"reference/working-logs-stats",title:"Working with logs and statistics",description:"Your logs and stats collections",source:"@site/docs/reference/working-logs-stats.md",sourceDirName:"reference",slug:"/reference/working-logs-stats",permalink:"/pr-preview/pr-1462/reference/working-logs-stats",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/working-logs-stats.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Composing with conditionals",permalink:"/pr-preview/pr-1462/reference/reduction-strategies/composing-with-conditionals"},next:{title:"Organizing a Flow catalog",permalink:"/pr-preview/pr-1462/reference/organizing-catalogs"}},c={},l=[{value:"Accessing logs and statistics",id:"accessing-logs-and-statistics",level:2},{value:"Logs and statistics in the Flow web app",id:"logs-and-statistics-in-the-flow-web-app",level:3},{value:"Logs",id:"logs",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Accessing logs and statistics from the command line",id:"accessing-logs-and-statistics-from-the-command-line",level:3},{value:"Printing logs or stats since a specific time",id:"printing-logs-or-stats-since-a-specific-time",level:4},{value:"Accessing logs or stats by materialization",id:"accessing-logs-or-stats-by-materialization",level:3},{value:"Available statistics",id:"available-statistics",level:2},{value:"Shard information",id:"shard-information",level:3},{value:"Transaction information",id:"transaction-information",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"working-with-logs-and-statistics",children:"Working with logs and statistics"}),"\n",(0,i.jsxs)(t.p,{children:["Your ",(0,i.jsxs)(t.a,{href:"/pr-preview/pr-1462/concepts/advanced/logs-stats",children:[(0,i.jsx)(t.code,{children:"logs"})," and ",(0,i.jsx)(t.code,{children:"stats"})," collections"]}),"\nare useful for debugging and monitoring catalog tasks."]}),"\n",(0,i.jsx)(t.h2,{id:"accessing-logs-and-statistics",children:"Accessing logs and statistics"}),"\n",(0,i.jsx)(t.p,{children:"You can access logs and statistics in the Flow web app, by materializing them to an external endpoint, or from the command line."}),"\n",(0,i.jsx)(t.h3,{id:"logs-and-statistics-in-the-flow-web-app",children:"Logs and statistics in the Flow web app"}),"\n",(0,i.jsx)(t.p,{children:"You can view a subset of logs and statistics for individual tasks in the Flow web app."}),"\n",(0,i.jsx)(t.h4,{id:"logs",children:"Logs"}),"\n",(0,i.jsxs)(t.p,{children:["After you publish a new ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/guides/create-dataflow#create-a-capture",children:"capture"})," or ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/guides/create-dataflow#create-a-materialization",children:"materialization"}),", a pop-up window appears that displays the task's logs.\nOnce you close the window, you can't regain access to the full logs in the web app.\nFor a complete view of logs, use ",(0,i.jsx)(t.a,{href:"#accessing-logs-and-statistics-from-the-command-line",children:"flowctl"})," or ",(0,i.jsx)(t.a,{href:"#accessing-logs-or-stats-by-materialization",children:"materialize the logs collection"})," to an outside system."]}),"\n",(0,i.jsxs)(t.p,{children:["However, if a task fails, you can view the logs associated with the error(s) that caused the failure.\nIn the ",(0,i.jsx)(t.strong,{children:"Details"})," view of the published capture or materialization, click the name of its shard to display the logs."]}),"\n",(0,i.jsx)(t.h4,{id:"statistics",children:"Statistics"}),"\n",(0,i.jsx)(t.p,{children:"Two statistics are shown for each capture, collection, and materialization:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Bytes Written or Read"}),".\nThis corresponds to the ",(0,i.jsx)(t.code,{children:"bytesTotal"})," ",(0,i.jsx)(t.a,{href:"#transaction-information",children:"property of the stats collection"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Docs Written or Read"}),".\nThis corresponds to the ",(0,i.jsx)(t.code,{children:"docsTotal"})," ",(0,i.jsx)(t.a,{href:"#transaction-information",children:"property of the stats collection"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These fields have slightly different meanings for each Flow entity type:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For captures, ",(0,i.jsx)(t.strong,{children:"Bytes Written"})," and ",(0,i.jsx)(t.strong,{children:"Docs Written"})," represent the total data written across all of the\ncapture's associated collections."]}),"\n",(0,i.jsxs)(t.li,{children:["For collections, ",(0,i.jsx)(t.strong,{children:"Bytes Written"})," and ",(0,i.jsx)(t.strong,{children:"Docs Written"})," represent the data written to the collection from\nits associated capture or derivation."]}),"\n",(0,i.jsxs)(t.li,{children:["For materializations, ",(0,i.jsx)(t.strong,{children:"Bytes Read"})," and ",(0,i.jsx)(t.strong,{children:"Docs Read"})," represent the total data read from all of the\nmaterialization's associated collections."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"accessing-logs-and-statistics-from-the-command-line",children:"Accessing logs and statistics from the command line"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"flowctl logs"})," and ",(0,i.jsx)(t.code,{children:"flowctl stats"})," subcommands allow you to print logs and stats, respectively, from the command line.\nThis method allows more flexibility and is ideal for debugging."]}),"\n",(0,i.jsx)(t.p,{children:"You can retrieve logs and stats for any published Flow task. For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"flowctl logs --task acmeCo/anvils/capture-one\n\nflowctl stats --task acmeCo/anvils/capture-one --uncommitted\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Beta",type:"info",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"--uncommitted"})," flag is currently required for ",(0,i.jsx)(t.code,{children:"flowctl stats"}),". This means that all statistics are read, regardless of whether they are about a successfully committed ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/concepts/advanced/shards#transactions",children:"transaction"}),", or a transaction that was rolled back or uncommitted.\nIn the future, committed reads will be the default."]})}),"\n",(0,i.jsx)(t.h4,{id:"printing-logs-or-stats-since-a-specific-time",children:"Printing logs or stats since a specific time"}),"\n",(0,i.jsx)(t.p,{children:"To limit output, you can retrieve logs are stats starting at a specific time in the past. For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"flowctl stats --task acmeCo/anvils/materialization-one --since 1h\n"})}),"\n",(0,i.jsxs)(t.p,{children:["...will retrieve stats from approximately the last hour. The actual start time will always be at the previous ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/concepts/advanced/journals#fragment-files",children:"fragment"})," boundary, so it can be significantly before the requested time period."]}),"\n",(0,i.jsxs)(t.p,{children:["Additional options for ",(0,i.jsx)(t.code,{children:"flowctl logs"})," and ",(0,i.jsx)(t.code,{children:"flowctl stats"})," can be accessed through command-line help."]}),"\n",(0,i.jsx)(t.h3,{id:"accessing-logs-or-stats-by-materialization",children:"Accessing logs or stats by materialization"}),"\n",(0,i.jsxs)(t.p,{children:["You can materialize your ",(0,i.jsx)(t.code,{children:"logs"})," or ",(0,i.jsx)(t.code,{children:"stats"})," collections to an external system.\nThis is typically the preferred method if you\u2019d like to continuously work with or monitor logs or statistics.\nYou can materialize the logs or statistics for all tasks, or select a subset of tasks using a ",(0,i.jsx)(t.a,{href:"../../concepts/materialization/#partition-selectors",children:"partition selector"})," (the ",(0,i.jsx)(t.code,{children:"logs"})," and ",(0,i.jsx)(t.code,{children:"stats"})," collections are partitioned on tasks)."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Be sure to add a partition selector to exclude the logs and statistics of the materialization\nitself. Otherwise, you could trigger an infinite loop in which the connector\nmaterializes its own logs and statistics, collects logs and statistic on that event, and so on."})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"acmeCo/anvils/logs:\n  endpoint:\n    connector:\n      image: ghcr.io/estuary/materialize-webhook:dev\n      config:\n        address: my.webhook.com\n  bindings:\n    - resource:\n        relativePath: /log/wordcount\n      source: ops/acmeCo/logs\n      # Exclude the logs of this materialization to avoid an infinite loop.\n      partitions:\n        exclude:\n          name: ['acmeCo/anvils/logs']\n"})}),"\n",(0,i.jsx)(t.h2,{id:"available-statistics",children:"Available statistics"}),"\n",(0,i.jsx)(t.p,{children:"Available statistics include information about the amount of data in inputs and outputs of each transaction. They also include temporal information about the transaction. Statistics vary by task type (capture, materialization, or derivation)."}),"\n",(0,i.jsxs)(t.p,{children:["A thorough knowledge of Flow's ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/concepts/#advanced-concepts",children:"advanced concepts"})," is necessary to effectively leverage these statistics."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"stats"})," collection documents include the following properties."]}),"\n",(0,i.jsx)(t.h3,{id:"shard-information",children:"Shard information"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"stats"})," document begins with data about the shard processing the transaction.\nEach processing shard is uniquely identified by the combination of its ",(0,i.jsx)(t.code,{children:"name"}),", ",(0,i.jsx)(t.code,{children:"keyBegin"}),", and ",(0,i.jsx)(t.code,{children:"rClockBegin"}),".\nThis information is important for tasks with multiple shards: it allows you to determine whether data throughput is\nevenly distributed amongst those shards."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Applicable Task Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/shard"})}),(0,i.jsx)(t.td,{children:"Flow shard information"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/shard/kind"})}),(0,i.jsxs)(t.td,{children:["The type of catalog task. One of ",(0,i.jsx)(t.code,{children:'"capture"'}),", ",(0,i.jsx)(t.code,{children:'"derivation"'}),", or ",(0,i.jsx)(t.code,{children:'"materialization"'})]}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/shard/name"})}),(0,i.jsx)(t.td,{children:"The name of the catalog task (without the task type prefix)"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/shard/keyBegin"})}),(0,i.jsxs)(t.td,{children:["With ",(0,i.jsx)(t.code,{children:"rClockBegin"}),", this comprises the shard ID. The inclusive beginning of the shard's assigned key range."]}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/shard/rClockBegin"})}),(0,i.jsxs)(t.td,{children:["With ",(0,i.jsx)(t.code,{children:"keyBegin"}),", this comprises the shard ID. The inclusive beginning of the shard's assigned rClock range."]}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"All"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"transaction-information",children:"Transaction information"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"stats"})," documents include information about a transaction: its inputs and outputs,\nthe amount of data processed, and the time taken.\nYou can use this information to ensure that your Flow tasks are running efficiently,\nand that the amount of data processed matches your expectations."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Applicable Task Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/ts"})}),(0,i.jsx)(t.td,{children:"Timestamp corresponding to the start of the transaction, rounded to the nearest minute"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/openSecondsTotal"})}),(0,i.jsx)(t.td,{children:"Total time that the transaction was open before starting to commit"}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/txnCount"})}),(0,i.jsx)(t.td,{children:"Total number of transactions represented by this stats document. Used for reduction."}),(0,i.jsx)(t.td,{children:"integer"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/capture"})}),(0,i.jsx)(t.td,{children:"Capture stats, organized by collection"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Capture"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/materialize"})}),(0,i.jsx)(t.td,{children:"Materialization stats, organized by collection"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Materialization"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/derive"})}),(0,i.jsx)(t.td,{children:"Derivation statistics"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Derivation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/<task-type>/<collection-name>/right/"})}),(0,i.jsx)(t.td,{children:"Input documents from a the task's source"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Capture, materialization"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/<task-type>/<collection-name>/left/"})}),(0,i.jsxs)(t.td,{children:["Input documents from an external destination; used for ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1462/concepts/materialization#how-continuous-materialization-works",children:"reduced updates"})," in materializations"]}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Materialization"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/<task-type>/<collection-name>/out/"})}),(0,i.jsx)(t.td,{children:"Output documents from the transaction"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/<task-type>/{}/docsTotal"})}),(0,i.jsx)(t.td,{children:"Total number of documents"}),(0,i.jsx)(t.td,{children:"integer"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/<task-type>/{}/bytesTotal"})}),(0,i.jsx)(t.td,{children:"Total number of bytes representing the JSON encoded documents"}),(0,i.jsx)(t.td,{children:"integer"}),(0,i.jsx)(t.td,{children:"All"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/derivations/transforms/transformStats"})}),(0,i.jsx)(t.td,{children:"Stats for a specific transform of a derivation, which will have an update, publish, or both"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Derivation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/derivations/transforms/transformStats/input"})}),(0,i.jsx)(t.td,{children:"The input documents that were fed into this transform"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Derivation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/derivations/transforms/transformStats/update"})}),(0,i.jsx)(t.td,{children:"The outputs from update lambda invocations, which were combined into registers"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Derivation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/derivations/transforms/transformStats/publish"})}),(0,i.jsx)(t.td,{children:"The outputs from publish lambda invocations."}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Derivation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/derivations/registers/createdTotal"})}),(0,i.jsx)(t.td,{children:"The total number of new register keys that were created"}),(0,i.jsx)(t.td,{children:"integer"}),(0,i.jsx)(t.td,{children:"Derivation"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);