"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3498],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2997:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="Databricks",o={unversionedId:"reference/Connectors/materialization-connectors/databricks",id:"reference/Connectors/materialization-connectors/databricks",title:"Databricks",description:"This connector materializes Flow collections into tables in a Databricks SQL Warehouse.",source:"@site/docs/reference/Connectors/materialization-connectors/databricks.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/databricks",permalink:"/reference/Connectors/materialization-connectors/databricks",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/databricks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Redshift",permalink:"/reference/Connectors/materialization-connectors/amazon-redshift"},next:{title:"Google Cloud SQL for MySQL",permalink:"/reference/Connectors/materialization-connectors/google-cloud-sql-mysql"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2}],p={toc:d},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databricks"},"Databricks"),(0,r.kt)("p",null,"This connector materializes Flow collections into tables in a Databricks SQL Warehouse.\nIt allows both standard and ",(0,r.kt)("a",{parentName:"p",href:"#delta-updates"},"delta updates"),"."),(0,r.kt)("p",null,"The connector first uploads data changes to a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/sql/language-manual/sql-ref-volumes.html"},"Databricks Unity Catalog Volume"),".\nFrom there, it transactionally applies the changes to the Databricks tables."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-databricks:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-databricks:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Databricks account that includes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A unity catalog"),(0,r.kt)("li",{parentName:"ul"},"A SQL Warehouse"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://docs.databricks.com/api/workspace/schemas"},"schema")," \u2014 a logical grouping of tables in a catalog"),(0,r.kt)("li",{parentName:"ul"},"A user with a role assigned that grants the appropriate access levels to these resources."))),(0,r.kt)("li",{parentName:"ul"},"At least one Flow collection")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps.")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You need to first create a SQL Warehouse if you don't already have one in your account. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/sql/admin/create-sql-warehouse.html"},"Databricks documentation")," on configuring a Databricks SQL Warehouse. After creating a SQL Warehouse, you can find the details necessary for connecting to it under the ",(0,r.kt)("strong",{parentName:"p"},"Connection Details")," tab."),(0,r.kt)("p",null,"You also need an access token for your user to be used by our connector, see the respective ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/administration-guide/access-control/tokens.html"},"documentation")," from Databricks on how to create an access token."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Databricks materialization, which will direct one or more of your Flow collections to new Databricks tables."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Host and port of the SQL warehouse (in the form of host","[:port]","). Port 443 is used as the default if no specific port is provided."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/http_path"))),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Path"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP path of your SQL warehouse"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/catalog_name"))),(0,r.kt)("td",{parentName:"tr",align:null},"Catalog Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of your Unity Catalog"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/schema_name"))),(0,r.kt)("td",{parentName:"tr",align:null},"Schema Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Default schema to materialize to"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")," schema is used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/auth_type"))),(0,r.kt)("td",{parentName:"tr",align:null},"Role"),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication type, set to ",(0,r.kt)("inlineCode",{parentName:"td"},"PAT")," for personal access token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/personal_access_token"))),(0,r.kt)("td",{parentName:"tr",align:null},"Role"),(0,r.kt)("td",{parentName:"tr",align:null},"Personal Access Token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative schema for this table"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/delta_updates")),(0,r.kt)("td",{parentName:"tr",align:null},"Delta updates"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use standard or ",(0,r.kt)("a",{parentName:"td",href:"#delta-updates"},"delta updates")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nmaterializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n        connector:\n            config:\n              address: dbc-abcdefgh-a12b.cloud.databricks.com\n              catalog_name: main\n              http_path: /sql/1.0/warehouses/abcd123efgh4567\n              schema_name: default\n              credentials:\n                auth_type: PAT\n                personal_access_token: secret\n            image: ghcr.io/estuary/materialize-databricks:dev\n  # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n    - resource:\n        table: ${table_name}\n        schema: default\n    source: ${PREFIX}/${source_collection}\n")),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector supports both standard (merge) and ",(0,r.kt)("a",{parentName:"p",href:"/concepts/materialization#delta-updates"},"delta updates"),".\nThe default is to use standard updates."),(0,r.kt)("p",null,"Enabling delta updates will prevent Flow from querying for documents in your Databricks table, which can reduce latency and costs for large datasets.\nIf you're certain that all events will have unique keys, enabling delta updates is a simple way to improve\nperformance with no effect on the output.\nHowever, enabling delta updates is not suitable for all workflows, as the resulting table in Databricks won't be fully reduced."),(0,r.kt)("p",null,"You can enable delta updates on a per-binding basis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    bindings:\n    - resource:\n        table: ${table_name}\n        schema: default\n        delta_updates: true\n    source: ${PREFIX}/${source_collection}\n")),(0,r.kt)("h2",{id:"reserved-words"},"Reserved words"),(0,r.kt)("p",null,"Databricks has a list of reserved words that must be quoted in order to be used as an identifier. Flow automatically quotes fields that are in the reserved words list. You can find this list in Databricks's documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/sql/language-manual/sql-ref-reserved-words.html"},"here")," and in the table below."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In Databricks, objects created with quoted identifiers must always be referenced exactly as created, including the quotes. Otherwise, SQL statements and queries can result in errors. See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers"},"Databricks docs"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reserved words"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANTI"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EXCEPT"),(0,r.kt)("td",{parentName:"tr",align:null},"FULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INNER"),(0,r.kt)("td",{parentName:"tr",align:null},"INTERSECT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JOIN"),(0,r.kt)("td",{parentName:"tr",align:null},"LATERAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LEFT"),(0,r.kt)("td",{parentName:"tr",align:null},"MINUS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NATURAL"),(0,r.kt)("td",{parentName:"tr",align:null},"ON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RIGHT"),(0,r.kt)("td",{parentName:"tr",align:null},"SEMI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SEMI"),(0,r.kt)("td",{parentName:"tr",align:null},"USING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,r.kt)("td",{parentName:"tr",align:null},"FALSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CROSS"),(0,r.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);