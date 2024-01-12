"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||s;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const s={},o="Task shards",i={unversionedId:"concepts/advanced/shards",id:"concepts/advanced/shards",title:"Task shards",description:"Catalog tasks \u2014 captures, derivations, and materializations \u2014",source:"@site/docs/concepts/advanced/shards.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/shards",permalink:"/pr-preview/pr-1335/concepts/advanced/shards",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/shards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Projections",permalink:"/pr-preview/pr-1335/concepts/advanced/projections"},next:{title:"Connectors",permalink:"/pr-preview/pr-1335/reference/Connectors/"}},c={},l=[{value:"Shard splits",id:"shard-splits",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Recovery logs",id:"recovery-logs",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"task-shards"},"Task shards"),(0,n.kt)("p",null,"Catalog ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/#tasks"},"tasks")," \u2014 captures, derivations, and materializations \u2014\nare executed by one or more task ",(0,n.kt)("strong",{parentName:"p"},"shards"),"."),(0,n.kt)("p",null,"Shards are a fault-tolerant and stateful unit of execution for a catalog task,\nwhich the Flow runtime assigns and runs on a scalable pool of compute resources.\nA single task can have many shards,\nwhich allow the task to scale across many machines to\nachieve more throughput and parallelism."),(0,n.kt)("p",null,"Shards are part of the Gazette project.\n",(0,n.kt)("a",{parentName:"p",href:"https://gazette.readthedocs.io/en/latest/consumers-concepts.html#shards"},"See Gazette's Shard concepts page for details"),"."),(0,n.kt)("h2",{id:"shard-splits"},"Shard splits"),(0,n.kt)("p",null,"When a task is first created, it is initialized with a single shard.\nLater and as required, shards may be split into two shards.\nThis is done by the service operator on your behalf, depending on the size of your task.\nShard splitting doesn't require downtime; your task will continue to run as normal\non the old shard until the split occurs and then shift seamlessly to the new, split shards."),(0,n.kt)("p",null,"This process can be repeated as needed until your required throughput is achieved.\nIf you have questions about how shards are split for your tasks, contact your Estuary account representative."),(0,n.kt)("h2",{id:"transactions"},"Transactions"),(0,n.kt)("p",null,"Shards process messages in dynamic ",(0,n.kt)("strong",{parentName:"p"},"transactions"),"."),(0,n.kt)("p",null,"Whenever a message is ready to be processed by the task (when new documents appear at the source endpoint or collection),\na new transaction is initiated.\nThe transaction will continue so long as further messages are available for processing.\nWhen no more messages are immediately available, the transaction closes.\nA new transaction is started whenever the next message is available."),(0,n.kt)("p",null,"In general, shorter transaction durations decrease latency, while longer transaction durations\nincrease efficiency.\nFlow automatically balances these two extremes to optimize each task,\nbut it may be useful in some cases to control transaction duration.\nFor example, materializations to large analytical warehouses may benefit from longer transactions,\nwhich can reduce cost by performing more data reduction before landing data in the warehouse.\nSome endpoint systems, like ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/reference/Connectors/materialization-connectors/BigQuery#performance-considerations"},"BigQuery"),", limit the number of table operations you can perform.\nLonger transaction durations ensure that you don't exceed these limits."),(0,n.kt)("p",null,"You can set the minimum and maximum transaction duration in a task's ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/reference/Configuring-task-shards"},"shards configuration"),"."),(0,n.kt)("h2",{id:"recovery-logs"},"Recovery logs"),(0,n.kt)("p",null,"All task shards have associated state, which is managed in the shard's store."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Capture tasks must track incremental checkpoints of their endpoint connectors."),(0,n.kt)("li",{parentName:"ul"},"Derivation tasks manage a potentially very large index of registers,\nas well as read checkpoints of sourced collection journals."),(0,n.kt)("li",{parentName:"ul"},"Materialization tasks track incremental checkpoints of their endpoint connectors,\nas well as read checkpoints of sourced collection journals.")),(0,n.kt)("p",null,"Shard stores use\n",(0,n.kt)("a",{parentName:"p",href:"https://gazette.readthedocs.io/en/latest/consumers-concepts.html#recovery-logs"},"recovery logs"),"\nto replicate updates and implement transaction semantics."),(0,n.kt)("p",null,"Recovery logs are regular ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/advanced/journals"},"journals"),",\nbut hold binary data and are not intended for direct use.\nHowever, they can hold your user data.\nRecovery logs of ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/derivations"},"derivations")," hold your derivation register values."),(0,n.kt)("p",null,"Recovery logs are stored in your cloud storage bucket,\nand must have a configured ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/storage-mappings#recovery-logs"},"storage mapping"),"."))}u.isMDXComponent=!0}}]);