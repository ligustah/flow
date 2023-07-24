"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4182],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),N=r,s=u["".concat(p,".").concat(N)]||u[N]||k[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7068:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"reference/Connectors/materialization-connectors/SQLite",id:"reference/Connectors/materialization-connectors/SQLite",title:"SQLite",description:"This connector materializes Flow collections into an ephemeral SQLite database.",source:"@site/docs/reference/Connectors/materialization-connectors/SQLite.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/SQLite",permalink:"/pr-preview/pr-1124/reference/Connectors/materialization-connectors/SQLite",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/SQLite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rockset",permalink:"/pr-preview/pr-1124/reference/Connectors/materialization-connectors/Rockset"},next:{title:"Snowflake",permalink:"/pr-preview/pr-1124/reference/Connectors/materialization-connectors/Snowflake"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2}],m={toc:d},u="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This connector materializes Flow collections into an ephemeral SQLite database.\nNote that this connector is for demo and sandbox purposes, and if the connector is restarted for any\nreason, the data materialized up to that point will be lost in the\nmaterialization (your collection will stay in-tact and your other\nmaterializations will have the data as normal)."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or\nopen-source workflows,\n",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-sqlite:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-sqlite:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At least one Flow collection")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This materialization requires no configuration, and all you need to do is choose\na collection to materialize."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name to materialize to. It will be created by the connector, unless the connector has previously created it."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-sqlite:dev\n        config: {}\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n")),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector does not support delta updates at the moment."),(0,r.kt)("h2",{id:"reserved-words"},"Reserved words"),(0,r.kt)("p",null,'SQLite has a list of reserved words that must be quoted in order to be used as an identifier.\nFlow considers all the reserved words that are marked as "reserved" in any of\nthe columns in the official ',(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/lang_keywords.html"},"SQlite documentation"),"."),(0,r.kt)("p",null,"These reserve words are listed in the table below. Flow automatically quotes fields that are in this list."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reserved words"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort"),(0,r.kt)("td",{parentName:"tr",align:null},"intersect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"into")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"add"),(0,r.kt)("td",{parentName:"tr",align:null},"is")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"after"),(0,r.kt)("td",{parentName:"tr",align:null},"isnull")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"join")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alter"),(0,r.kt)("td",{parentName:"tr",align:null},"key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"always"),(0,r.kt)("td",{parentName:"tr",align:null},"last")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"analyze"),(0,r.kt)("td",{parentName:"tr",align:null},"left")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"and"),(0,r.kt)("td",{parentName:"tr",align:null},"like")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"as"),(0,r.kt)("td",{parentName:"tr",align:null},"limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asc"),(0,r.kt)("td",{parentName:"tr",align:null},"match")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attach"),(0,r.kt)("td",{parentName:"tr",align:null},"materialized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoincrement"),(0,r.kt)("td",{parentName:"tr",align:null},"natural")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"before"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"between"),(0,r.kt)("td",{parentName:"tr",align:null},"nothing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"by"),(0,r.kt)("td",{parentName:"tr",align:null},"notnull")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cascade"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"case"),(0,r.kt)("td",{parentName:"tr",align:null},"nulls")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cast"),(0,r.kt)("td",{parentName:"tr",align:null},"of")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check"),(0,r.kt)("td",{parentName:"tr",align:null},"offset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collate"),(0,r.kt)("td",{parentName:"tr",align:null},"on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column"),(0,r.kt)("td",{parentName:"tr",align:null},"or")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commit"),(0,r.kt)("td",{parentName:"tr",align:null},"order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conflict"),(0,r.kt)("td",{parentName:"tr",align:null},"others")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"constraint"),(0,r.kt)("td",{parentName:"tr",align:null},"outer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"over")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cross"),(0,r.kt)("td",{parentName:"tr",align:null},"partition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current"),(0,r.kt)("td",{parentName:"tr",align:null},"plan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_date"),(0,r.kt)("td",{parentName:"tr",align:null},"pragma")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_time"),(0,r.kt)("td",{parentName:"tr",align:null},"preceding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"primary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"raise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deferrable"),(0,r.kt)("td",{parentName:"tr",align:null},"range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deferred"),(0,r.kt)("td",{parentName:"tr",align:null},"recursive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"references")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desc"),(0,r.kt)("td",{parentName:"tr",align:null},"regexp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detach"),(0,r.kt)("td",{parentName:"tr",align:null},"reindex")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distinct"),(0,r.kt)("td",{parentName:"tr",align:null},"release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"do"),(0,r.kt)("td",{parentName:"tr",align:null},"rename")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drop"),(0,r.kt)("td",{parentName:"tr",align:null},"replace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"each"),(0,r.kt)("td",{parentName:"tr",align:null},"restrict")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"else"),(0,r.kt)("td",{parentName:"tr",align:null},"returning")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"escape"),(0,r.kt)("td",{parentName:"tr",align:null},"rollback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"except"),(0,r.kt)("td",{parentName:"tr",align:null},"row")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exclude"),(0,r.kt)("td",{parentName:"tr",align:null},"rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exclusive"),(0,r.kt)("td",{parentName:"tr",align:null},"savepoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exists"),(0,r.kt)("td",{parentName:"tr",align:null},"select")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"explain"),(0,r.kt)("td",{parentName:"tr",align:null},"set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fail"),(0,r.kt)("td",{parentName:"tr",align:null},"table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},"temp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first"),(0,r.kt)("td",{parentName:"tr",align:null},"temporary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"following"),(0,r.kt)("td",{parentName:"tr",align:null},"then")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"for"),(0,r.kt)("td",{parentName:"tr",align:null},"ties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foreign"),(0,r.kt)("td",{parentName:"tr",align:null},"to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"full"),(0,r.kt)("td",{parentName:"tr",align:null},"trigger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generated"),(0,r.kt)("td",{parentName:"tr",align:null},"unbounded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glob"),(0,r.kt)("td",{parentName:"tr",align:null},"union")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"unique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groups"),(0,r.kt)("td",{parentName:"tr",align:null},"update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"having"),(0,r.kt)("td",{parentName:"tr",align:null},"using")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"if"),(0,r.kt)("td",{parentName:"tr",align:null},"vacuum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignore"),(0,r.kt)("td",{parentName:"tr",align:null},"values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"immediate"),(0,r.kt)("td",{parentName:"tr",align:null},"view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in"),(0,r.kt)("td",{parentName:"tr",align:null},"virtual")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"when")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indexed"),(0,r.kt)("td",{parentName:"tr",align:null},"where")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"initially"),(0,r.kt)("td",{parentName:"tr",align:null},"window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inner"),(0,r.kt)("td",{parentName:"tr",align:null},"with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"insert"),(0,r.kt)("td",{parentName:"tr",align:null},"without")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instead"),(0,r.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);