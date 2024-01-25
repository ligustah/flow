"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6691:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={},i="Logs and statistics",l={unversionedId:"concepts/advanced/logs-stats",id:"concepts/advanced/logs-stats",title:"Logs and statistics",description:"Flow collects logs and statistics of catalog tasks to aid in debugging and refinement of your workflows.",source:"@site/docs/concepts/advanced/logs-stats.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/logs-stats",permalink:"/pr-preview/pr-1356/concepts/advanced/logs-stats",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/logs-stats.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Journals",permalink:"/pr-preview/pr-1356/concepts/advanced/journals"},next:{title:"Projections",permalink:"/pr-preview/pr-1356/concepts/advanced/projections"}},s={},c=[{value:"Logs",id:"logs",level:2},{value:"Log level",id:"log-level",level:3},{value:"Statistics",id:"statistics",level:2},{value:"Working with logs and statistics",id:"working-with-logs-and-statistics",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logs-and-statistics"},"Logs and statistics"),(0,o.kt)("p",null,"Flow collects logs and statistics of catalog tasks to aid in debugging and refinement of your workflows."),(0,o.kt)("h2",{id:"logs"},"Logs"),(0,o.kt)("p",null,"Each organization that uses Flow has a ",(0,o.kt)("inlineCode",{parentName:"p"},"logs")," collection under the global ",(0,o.kt)("inlineCode",{parentName:"p"},"ops")," prefix.\nFor the organization Acme Co, it would have the name ",(0,o.kt)("inlineCode",{parentName:"p"},"ops/acmeCo/logs"),"."),(0,o.kt)("p",null,"These can be thought of as standard application logs:\nthey store information about events that occur at runtime.\nThey\u2019re distinct from ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/concepts/advanced/shards#recovery-logs"},"recovery logs"),", which track the state of various task shards."),(0,o.kt)("p",null,"Regardless of how many Data Flows your organization has, all logs are stored in the same collection,\nwhich is read-only and ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/concepts/advanced/projections#logical-partitions"},"logically partitioned")," on ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/concepts/#tasks"},"tasks"),".\nLogs are collected from events that occur within the Flow runtime,\nas well as the capture and materialization ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/concepts/connectors"},"connectors")," your Data Flow is using."),(0,o.kt)("h3",{id:"log-level"},"Log level"),(0,o.kt)("p",null,"You can set the log level for each catalog task to control the level of detail at which logs are collected for that task.\nThe available levels, listed from least to most detailed, are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": Non-recoverable errors from the Flow runtime or connector that are critical to know about"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"warn"),": Errors that can be re-tried, but likely require investigation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"info"),": Task lifecycle events, or information you might want to collect on an ongoing basis"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"debug"),": Details that will help debug an issue with a task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trace"),": Maximum level of detail that may yield gigabytes of logs")),(0,o.kt)("p",null,"The default log level is ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),". You can change a task\u2019s log level by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"shards")," keyword to its definition in the catalog spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  acmeCo/debugMaterialization:\n    shards:\n      logLevel: debug\n    endpoint:\n        {}\n")),(0,o.kt)("h2",{id:"statistics"},"Statistics"),(0,o.kt)("p",null,"Each organization that uses Flow has a ",(0,o.kt)("inlineCode",{parentName:"p"},"stats")," collection under the global ",(0,o.kt)("inlineCode",{parentName:"p"},"ops")," prefix.\nFor the organization Acme Co, it would have the name ",(0,o.kt)("inlineCode",{parentName:"p"},"ops/acmeCo/stats"),"."),(0,o.kt)("p",null,"Regardless of how many Data Flows your organization has, all stats are stored in the same collection,\nwhich is read-only and ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/concepts/advanced/projections#logical-partitions"},"logically partitioned")," on ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/concepts/#tasks"},"tasks"),"."),(0,o.kt)("p",null,"A new document is published to the ",(0,o.kt)("inlineCode",{parentName:"p"},"stats")," collection for each task transaction.\nEach document includes information about the time and quantity of data inputs and outputs.\nStatistics vary by task type (capture, materialization, or derivation)."),(0,o.kt)("p",null,"Use stats to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Evaluate the data throughput of a task; for example, a derivation."),(0,o.kt)("li",{parentName:"ul"},"Compare a data throughput of a task between platforms; for example, compare reported data capture by Flow to detected change rate in a source system."),(0,o.kt)("li",{parentName:"ul"},"Access the same information used by Estuary for billing."),(0,o.kt)("li",{parentName:"ul"},"Optimize your tasks for increased efficiency.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/reference/working-logs-stats#available-statistics"},"See a detailed table of the properties included in ",(0,o.kt)("inlineCode",{parentName:"a"},"stats")," documents.")),(0,o.kt)("h2",{id:"working-with-logs-and-statistics"},"Working with logs and statistics"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1356/reference/working-logs-stats"},"Learn more about working with logs and statistics")))}u.isMDXComponent=!0}}]);