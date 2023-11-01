"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},i="Projections",s={unversionedId:"concepts/advanced/projections",id:"concepts/advanced/projections",title:"Projections",description:"Projections are an advanced concept of Flow.",source:"@site/docs/concepts/advanced/projections.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/projections",permalink:"/pr-preview/pr-1272/concepts/advanced/projections",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/projections.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logs and statistics",permalink:"/pr-preview/pr-1272/concepts/advanced/logs-stats"},next:{title:"Task shards",permalink:"/pr-preview/pr-1272/concepts/advanced/shards"}},c={},l=[{value:"Logical partitions",id:"logical-partitions",level:2},{value:"Partition selectors",id:"partition-selectors",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"projections"},"Projections"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Projections are an advanced concept of Flow.\nYou can use Flow without knowing the details of projections,\nbut this section may help you better understand how Flow works.")),(0,o.kt)("p",null,"Flow documents are arbitrary JSON, and may contain multiple levels of hierarchy and nesting.\nHowever, systems that Flow integrates with often model flat tables of rows and columns, without hierarchy.\nOthers are somewhere in between."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Projections")," are the means by which Flow translates between the documents\nof a collection and a table representation.\nA projection defines a mapping between a structured document location,\ngiven as a ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6901"},"JSON-Pointer"),",\nand a corresponding ",(0,o.kt)("strong",{parentName:"p"},"field")," name used as, for example, a CSV file header or SQL table column."),(0,o.kt)("p",null,"Many projections are inferred automatically from a collection\u2019s JSON schema,\nusing a field that is simply the JSON Pointer with its leading slash removed.\nFor example, a schema scalar with pointer ",(0,o.kt)("inlineCode",{parentName:"p"},"/myScalar")," will generate a projection with field ",(0,o.kt)("inlineCode",{parentName:"p"},"myScalar"),"."),(0,o.kt)("p",null,"You can supplement by providing additional collection projections,\nand a document location can have more than one projection field that references it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  acmeCo/user-sessions:\n    schema: session.schema.yaml\n    key: [/user/id, /timestamp]\n    projections:\n      # A "user/id" projection field is automatically inferred.\n      # Add an additional field that doesn\'t have a slash.\n      user_id: /user/id\n      # Partly decompose a nested array of requests into a handful of named projections.\n      "first request": /requests/0\n      "second request": /requests/1\n      "third request": /requests/2\n')),(0,o.kt)("h2",{id:"logical-partitions"},"Logical partitions"),(0,o.kt)("p",null,"Projections can also be used to logically partition a collection,\nspecified as a longer-form variant of a projection definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/user-sessions:\n    schema: session.schema.yaml\n    key: [/user/id, /timestamp]\n    projections:\n      country:\n        location: /country\n        partition: true\n      device:\n        location: /agent/type\n        partition: true\n      network:\n        location: /agent/network\n        partition: true\n")),(0,o.kt)("p",null,"Logical partitions isolate the storage of documents\nby their differing values for partitioned fields.\nFlow extracts partitioned fields from each document,\nand every unique combination of partitioned fields\nis a separate logical partition."),(0,o.kt)("p",null,"Every logical partition has one or more ",(0,o.kt)("strong",{parentName:"p"},"physical partitions"),"\ninto which their documents are written,\nwhich in turn controls\nhow files are arranged within cloud storage."),(0,o.kt)("p",null,'For example, a document of "acmeCo/user-sessions" like:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"country": "CA", "agent": {"type": "iPhone", "network": "LTE"}, ...}\n')),(0,o.kt)("p",null,"Might produce files in cloud storage like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s3://bucket/example/sessions/country=CA/device=iPhone/network=LTE/pivot=00/utc_date=2020-11-04/utc_hour=16/<name>.gz\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"country"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"device"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," together identify a ",(0,o.kt)("em",{parentName:"p"},"logical partition"),",\nwhile ",(0,o.kt)("inlineCode",{parentName:"p"},"pivot")," identifies a ",(0,o.kt)("em",{parentName:"p"},"physical partition"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"utc_date")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"utc_hour")," is the time at which the journal fragment was created.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1272/concepts/advanced/journals#physical-partitions"},"Learn more about physical partitions"),"."),(0,o.kt)("h3",{id:"partition-selectors"},"Partition selectors"),(0,o.kt)("p",null,"When reading from a collection, Flow catalog entities like derivations, materializations,\nand tests can provide a ",(0,o.kt)("strong",{parentName:"p"},"partition selector"),", which identifies the subset\nof partitions that should be read from a source collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Partition selectors are included as part of a larger entity,\n# such as a derivation or materialization.\npartitions:\n  # `include` selects partitioned fields and corresponding values that\n  # must be matched in order for a partition to be processed.\n  # All of the included fields must be matched.\n  # Default: All partitions are included. type: object\n  include:\n    # Include partitions from North America.\n    country: [US, CA]\n    # AND where the device is a mobile phone.\n    device: [iPhone, Android]\n\n  # `exclude` selects partitioned fields and corresponding values which,\n  # if matched, exclude the partition from being processed.\n  # A match of any of the excluded fields will exclude the partition.\n  # Default: No partitions are excluded. type: object\n  exclude:\n    # Skip sessions which were over a 3G network.\n    network: ["3G"]\n')),(0,o.kt)("p",null,"Partition selectors are efficient as they allow Flow to altogether\navoid reading documents that aren\u2019t needed."))}u.isMDXComponent=!0}}]);