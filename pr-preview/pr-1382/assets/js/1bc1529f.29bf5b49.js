"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,m=p["".concat(c,".").concat(y)]||p[y]||u[y]||s;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={description:"Using the set reduction strategy",sidebar_position:5},i="set",o={unversionedId:"reference/reduction-strategies/set",id:"reference/reduction-strategies/set",title:"set",description:"Using the set reduction strategy",source:"@site/docs/reference/reduction-strategies/set.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/set",permalink:"/pr-preview/pr-1382/reference/reduction-strategies/set",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/set.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Using the set reduction strategy",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"minimize and maximize",permalink:"/pr-preview/pr-1382/reference/reduction-strategies/minimize-and-maximize"},next:{title:"sum",permalink:"/pr-preview/pr-1382/reference/reduction-strategies/sum"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set"},"set"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"set")," interprets the document location as an update to a set."),(0,a.kt)("p",null,'The location must be an object having only \u201cadd", \u201cintersect", and \u201cremove\u201d properties. Any single \u201cadd", \u201cintersect", or \u201cremove\u201d is always allowed.'),(0,a.kt)("p",null,"A document with \u201cintersect\u201d and \u201cadd\u201d is allowed, and is interpreted as applying the intersection to the left-hand side set, followed by a union with the additions."),(0,a.kt)("p",null,"A document with \u201cremove\u201d and \u201cadd\u201d is also allowed, and is interpreted as applying the removals to the base set, followed by a union with the additions."),(0,a.kt)("p",null,"\u201cremove\u201d and \u201cintersect\u201d within the same document are prohibited."),(0,a.kt)("p",null,"Set additions are deeply merged. This makes sets behave like associative maps, where the \u201cvalue\u201d of a set member can be updated by adding it to the set again, with a reducible update."),(0,a.kt)("p",null,"Sets may be objects, in which case the object property serves as the set item key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/set\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sets are always represented as an object.\n          type: object\n          reduce: { strategy: set }\n          # Schema for "add", "intersect", and "remove" properties\n          # (each a map of keys and their associated sums):\n          additionalProperties:\n            type: object\n            additionalProperties:\n              type: number\n              reduce: { strategy: sum }\n            # Flow requires that all parents of locations with a reduce\n            # annotation also have one themselves.\n            # This strategy therefore must (currently) be here, but is ignored.\n            reduce: { strategy: lastWriteWins }\n\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can apply set operations to incrementally build associative maps":\n    - ingest:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 1, "b": 1, "c": 1 } } }\n          - { key: "key", value: { "remove": { "b": 0 } } }\n          - { key: "key", value: { "add": { "a": 1, "d": 1 } } }\n    - verify:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 2, "c": 1, "d": 1 } } }\n    - ingest:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "intersect": { "a": 0, "d": 0 } } }\n          - { key: "key", value: { "add": { "a": 1, "e": 1 } } }\n    - verify:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 3, "d": 1, "e": 1 } } }\n')),(0,a.kt)("p",null,"Sets can also be sorted arrays, which are ordered using a provide ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," extractor. Keys are given as one or more JSON pointers, each relative to the item. As with ",(0,a.kt)("inlineCode",{parentName:"p"},"merge"),", arrays must be pre-sorted and de-duplicated by the key, and set reductions always maintain this invariant."),(0,a.kt)("p",null,"Use a key extractor of ",(0,a.kt)("inlineCode",{parentName:"p"},"[\u201c\u201d]")," to apply the natural ordering of scalar values."),(0,a.kt)("p",null,"Whether array or object types are used, the type must always be consistent across the \u201cadd\u201d / \u201cintersect\u201d / \u201cremove\u201d terms of both sides of the reduction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/set-array\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sets are always represented as an object.\n          type: object\n          reduce:\n            strategy: set\n            key: [/0]\n          # Schema for "add", "intersect", & "remove" properties\n          # (each a sorted array of [key, sum] 2-tuples):\n          additionalProperties:\n            type: array\n            # Flow requires that all parents of locations with a reduce\n            # annotation also have one themselves.\n            # This strategy therefore must (currently) be here, but is ignored.\n            reduce: { strategy: lastWriteWins }\n            # Schema for contained [key, sum] 2-tuples:\n            items:\n              type: array\n              items:\n                - type: string\n                - type: number\n                  reduce: { strategy: sum }\n              reduce: { strategy: merge }\n\n      required: [key]\n    key: [/key]\n\ntests:\n  ? "Expect we can apply operations of sorted-array sets to incrementally build associative maps"\n  : - ingest:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 1], ["b", 1], ["c", 1]] } }\n          - { key: "key", value: { "remove": [["b", 0]] } }\n          - { key: "key", value: { "add": [["a", 1], ["d", 1]] } }\n    - verify:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 2], ["c", 1], ["d", 1]] } }\n    - ingest:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "intersect": [["a", 0], ["d", 0]] } }\n          - { key: "key", value: { "add": [["a", 1], ["e", 1]] } }\n    - verify:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 3], ["d", 1], ["e", 1]] } }\n')))}u.isMDXComponent=!0}}]);