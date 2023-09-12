"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={description:"Using the append reduction strategy",sidebar_position:1},o="append",s={unversionedId:"reference/reduction-strategies/append",id:"reference/reduction-strategies/append",title:"append",description:"Using the append reduction strategy",source:"@site/docs/reference/reduction-strategies/append.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/append",permalink:"/pr-preview/pr-1178/reference/reduction-strategies/append",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/append.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Using the append reduction strategy",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reduction strategies",permalink:"/pr-preview/pr-1178/reference/reduction-strategies/"},next:{title:"firstWriteWins and lastWriteWins",permalink:"/pr-preview/pr-1178/reference/reduction-strategies/firstwritewins-and-lastwritewins"}},p={},c=[],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"append"},"append"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"append")," works with arrays, and extends the left-hand array with items from the right-hand side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/append\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Append only works with type "array".\n          # Others will throw an error at build time.\n          type: array\n          reduce: { strategy: append }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can append arrays":\n    - ingest:\n        collection: example/reductions/append\n        documents:\n          - { key: "key", value: [1, 2] }\n          - { key: "key", value: [3, null, "abc"] }\n    - verify:\n        collection: example/reductions/append\n        documents:\n          - { key: "key", value: [1, 2, 3, null, "abc"] }\n')),(0,a.kt)("p",null,"The right-hand side must always be an array. The left-hand side may be null, in which case the reduction is treated as a no-op and its result remains null. This can be combined with schema conditionals to toggle whether reduction-reduction should be done or not."))}u.isMDXComponent=!0}}]);