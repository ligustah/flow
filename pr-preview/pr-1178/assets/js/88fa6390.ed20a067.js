"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="Snowflake",o={unversionedId:"reference/Connectors/materialization-connectors/Snowflake",id:"reference/Connectors/materialization-connectors/Snowflake",title:"Snowflake",description:"This connector materializes Flow collections into tables in a Snowflake database.",source:"@site/docs/reference/Connectors/materialization-connectors/Snowflake.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Snowflake",permalink:"/pr-preview/pr-1178/reference/Connectors/materialization-connectors/Snowflake",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Snowflake.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQLite",permalink:"/pr-preview/pr-1178/reference/Connectors/materialization-connectors/SQLite"},next:{title:"Amazon Redshift",permalink:"/pr-preview/pr-1178/reference/Connectors/materialization-connectors/amazon-redshift"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Optimizing performance for standard updates",id:"optimizing-performance-for-standard-updates",level:3},{value:"Reducing active warehouse time",id:"reducing-active-warehouse-time",level:3},{value:"Reserved words",id:"reserved-words",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snowflake"},"Snowflake"),(0,r.kt)("p",null,"This connector materializes Flow collections into tables in a Snowflake database.\nIt allows both standard and ",(0,r.kt)("a",{parentName:"p",href:"#delta-updates"},"delta updates"),"."),(0,r.kt)("p",null,"The connector first uploads data changes to a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html#table-stages"},"Snowflake table stage"),".\nFrom there, it transactionally applies the changes to the Snowflake table."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-snowflake:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-snowflake:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Snowflake account that includes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A target database, to which you'll materialize data"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/ddl-database.html"},"schema")," \u2014 a logical grouping of database objects \u2014 within the target database"),(0,r.kt)("li",{parentName:"ul"},"A virtual warehouse"),(0,r.kt)("li",{parentName:"ul"},"A user with a role assigned that grants the appropriate access levels to these resources.\nSee the ",(0,r.kt)("a",{parentName:"li",href:"#setup"},"script below")," for details."))),(0,r.kt)("li",{parentName:"ul"},"Know your Snowflake account's host URL. This is formatted using your ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used"},"Snowflake account identifier"),",\nfor example, ",(0,r.kt)("inlineCode",{parentName:"li"},"orgname-accountname.snowflakecomputing.com"),"."),(0,r.kt)("li",{parentName:"ul"},"At least one Flow collection")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps.")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To meet the prerequisites, copy and paste the following script into the Snowflake SQL editor, replacing the variable names in the first six lines."),(0,r.kt)("p",null,"If you'd like to use an existing database, warehouse, and/or schema, be sure to set\n",(0,r.kt)("inlineCode",{parentName:"p"},"database_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warehouse_name"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary_schema")," accordingly. If you specify a new name, the script will create the item for you. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary_role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary_user"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary_password")," to whatever you'd like."),(0,r.kt)("p",null,"Check the ",(0,r.kt)("strong",{parentName:"p"},"All Queries")," check box, and click ",(0,r.kt)("strong",{parentName:"p"},"Run"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set database_name = 'ESTUARY_DB';\nset warehouse_name = 'ESTUARY_WH';\nset estuary_role = 'ESTUARY_ROLE';\nset estuary_user = 'ESTUARY_USER';\nset estuary_password = 'secret';\nset estuary_schema = 'ESTUARY_SCHEMA';\n-- create role and schema for Estuary\ncreate role if not exists identifier($estuary_role);\ngrant role identifier($estuary_role) to role SYSADMIN;\n-- Create snowflake DB\ncreate database if not exists identifier($database_name);\nuse database identifier($database_name);\ncreate schema if not exists identifier($estuary_schema);\n-- create a user for Estuary\ncreate user if not exists identifier($estuary_user)\npassword = $estuary_password\ndefault_role = $estuary_role\ndefault_warehouse = $warehouse_name;\ngrant role identifier($estuary_role) to user identifier($estuary_user);\ngrant all on schema identifier($estuary_schema) to identifier($estuary_role);\n-- create a warehouse for estuary\ncreate warehouse if not exists identifier($warehouse_name)\nwarehouse_size = xsmall\nwarehouse_type = standard\nauto_suspend = 60\nauto_resume = true\ninitially_suspended = true;\n-- grant Estuary role access to warehouse\ngrant USAGE\non warehouse identifier($warehouse_name)\nto role identifier($estuary_role);\n-- grant Estuary access to database\ngrant CREATE SCHEMA, MONITOR, USAGE on database identifier($database_name) to role identifier($estuary_role);\n-- change role to ACCOUNTADMIN for STORAGE INTEGRATION support to Estuary (only needed for Snowflake on GCP)\nuse role ACCOUNTADMIN;\ngrant CREATE INTEGRATION on account to role identifier($estuary_role);\nuse role sysadmin;\nCOMMIT;\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Snowflake materialization, which will direct one or more of your Flow collections to new Snowflake tables."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/account"))),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"The Snowflake account identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Snowflake database to which to materialize"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/host"))),(0,r.kt)("td",{parentName:"tr",align:null},"Host URL"),(0,r.kt)("td",{parentName:"tr",align:null},"The Snowflake Host used for the connection. Example: orgname-accountname.snowflakecomputing.com (do not include the protocol)."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake user password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/role")),(0,r.kt)("td",{parentName:"tr",align:null},"Role"),(0,r.kt)("td",{parentName:"tr",align:null},"Role assigned to the user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/schema"))),(0,r.kt)("td",{parentName:"tr",align:null},"Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake schema within the database to which to materialize"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/warehouse")),(0,r.kt)("td",{parentName:"tr",align:null},"Warehouse"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the data warehouse that contains the database"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/updateDelay")),(0,r.kt)("td",{parentName:"tr",align:null},"Update Delay"),(0,r.kt)("td",{parentName:"tr",align:null},"Potentially reduce active warehouse time by increasing the delay between updates."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/delta_updates")),(0,r.kt)("td",{parentName:"tr",align:null},"Delta updates"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use standard or ",(0,r.kt)("a",{parentName:"td",href:"#delta-updates"},"delta updates")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nmaterializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n        connector:\n            config:\n              account: acmeCo\n              database: acmeCo_db\n              host: orgname-accountname.snowflakecomputing.com\n              password: secret\n              schema: acmeCo_flow_schema\n              user: snowflake_user\n              warehouse: acmeCo_warehouse\n            image: ghcr.io/estuary/materialize-snowflake:dev\n  # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n    - resource:\n        table: ${table_name}\n    source: ${PREFIX}/${source_collection}\n")),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector supports both standard (merge) and ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/materialization#delta-updates"},"delta updates"),".\nThe default is to use standard updates."),(0,r.kt)("p",null,"Enabling delta updates will prevent Flow from querying for documents in your Snowflake table, which can reduce latency and costs for large datasets.\nIf you're certain that all events will have unique keys, enabling delta updates is a simple way to improve\nperformance with no effect on the output.\nHowever, enabling delta updates is not suitable for all workflows, as the resulting table in Snowflake won't be fully reduced."),(0,r.kt)("p",null,"You can enable delta updates on a per-binding basis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    bindings:\n    - resource:\n        table: ${table_name}\n        delta_updates: true\n    source: ${PREFIX}/${source_collection}\n")),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("h3",{id:"optimizing-performance-for-standard-updates"},"Optimizing performance for standard updates"),(0,r.kt)("p",null,"When using standard updates for a large dataset, the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/collections#keys"},"collection key")," you choose can have a significant impact on materialization performance and efficiency."),(0,r.kt)("p",null,"Snowflake uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html"},"micro partitions")," to physically arrange data within tables.\nEach micro partition includes metadata, such as the minimum and maximum values for each column.\nIf you choose a collection key that takes advantage of this metadata to help Snowflake prune irrelevant micro partitions,\nyou'll see dramatically better performance."),(0,r.kt)("p",null,"For example, if you materialize a collection with a key of ",(0,r.kt)("inlineCode",{parentName:"p"},"/user_id"),", it will tend to perform far worse than a materialization of ",(0,r.kt)("inlineCode",{parentName:"p"},"/date, /user_id"),".\nThis is because most materializations tend to be roughly chronological over time, and that means that data is written to Snowflake in roughly ",(0,r.kt)("inlineCode",{parentName:"p"},"/date")," order."),(0,r.kt)("p",null,"This means that updates of keys ",(0,r.kt)("inlineCode",{parentName:"p"},"/date, /user_id")," will need to physically read far fewer rows as compared to a key like ",(0,r.kt)("inlineCode",{parentName:"p"},"/user_id"),",\nbecause those rows will tend to live in the same micro-partitions, and Snowflake is able to cheaply prune micro-partitions that aren't relevant to the transaction."),(0,r.kt)("h3",{id:"reducing-active-warehouse-time"},"Reducing active warehouse time"),(0,r.kt)("p",null,"Snowflake compute is ",(0,r.kt)("a",{parentName:"p",href:"https://www.snowflake.com/pricing/"},"priced")," per second of activity, with a minimum of 60 seconds.\nInactive warehouses don't incur charges.\nTo keep costs down, you'll want to minimize your warehouse's active time."),(0,r.kt)("p",null,"Like other Estuary connectors, this is a real-time connector that materializes documents using continuous ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1178/concepts/advanced/shards#transactions"},(0,r.kt)("strong",{parentName:"a"},"transactions")),".\nEvery time a Flow materialization commits a transaction, your warehouse becomes active."),(0,r.kt)("p",null,"If your source data collection or collections don't change much, this shouldn't cause an issue;\nFlow only commits transactions when data has changed.\nHowever, if your source data is frequently updated, your materialization may have frequent transactions that result in\nexcessive active time in the warehouse, and thus a higher bill from Snowflake."),(0,r.kt)("p",null,"To mitigate this, we recommend a two-pronged approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/sql/create-warehouse.html#:~:text=Specifies%20the%20number%20of%20seconds%20of%20inactivity%20after%20which%20a%20warehouse%20is%20automatically%20suspended."},"Configure your Snowflake warehouse to auto-suspend")," after 60 seconds."),(0,r.kt)("p",{parentName:"li"}," This ensures that after each transaction completes, you'll only be charged for one minute of compute, Snowflake's smallest granularity."),(0,r.kt)("p",{parentName:"li"}," Use a query like the one shown below, being sure to substitute your warehouse name:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER WAREHOUSE ESTUARY_WH SET auto_suspend = 60;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure the materialization's ",(0,r.kt)("strong",{parentName:"p"},"update delay")," by setting a value in the advanced configuration."))),(0,r.kt)("p",null,"For example, if you set the warehouse to auto-suspend after 60 seconds and set the materialization's\nupdate delay to 30 minutes, you can incur as little as 48 minutes per day of active time in the warehouse."),(0,r.kt)("h2",{id:"reserved-words"},"Reserved words"),(0,r.kt)("p",null,"Snowflake has a list of reserved words that must be quoted in order to be used as an identifier. Flow automatically quotes fields that are in the reserved words list. You can find this list in Snowflake's documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/reserved-keywords.html"},"here")," and in the table below."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In Snowflake, objects created with quoted identifiers must always be referenced exactly as created, including the quotes. Otherwise, SQL statements and queries can result in errors. See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers"},"Snowflake docs"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reserved words"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},"qualify")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"full"),(0,r.kt)("td",{parentName:"tr",align:null},"regexp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alter"),(0,r.kt)("td",{parentName:"tr",align:null},"grant"),(0,r.kt)("td",{parentName:"tr",align:null},"revoke")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"and"),(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"gscluster"),(0,r.kt)("td",{parentName:"tr",align:null},"rlike")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"as"),(0,r.kt)("td",{parentName:"tr",align:null},"having"),(0,r.kt)("td",{parentName:"tr",align:null},"row")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"between"),(0,r.kt)("td",{parentName:"tr",align:null},"ilike"),(0,r.kt)("td",{parentName:"tr",align:null},"rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"by"),(0,r.kt)("td",{parentName:"tr",align:null},"in"),(0,r.kt)("td",{parentName:"tr",align:null},"sample")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"case"),(0,r.kt)("td",{parentName:"tr",align:null},"increment"),(0,r.kt)("td",{parentName:"tr",align:null},"schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cast"),(0,r.kt)("td",{parentName:"tr",align:null},"inner"),(0,r.kt)("td",{parentName:"tr",align:null},"select")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check"),(0,r.kt)("td",{parentName:"tr",align:null},"insert"),(0,r.kt)("td",{parentName:"tr",align:null},"set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column"),(0,r.kt)("td",{parentName:"tr",align:null},"intersect"),(0,r.kt)("td",{parentName:"tr",align:null},"some")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect"),(0,r.kt)("td",{parentName:"tr",align:null},"into"),(0,r.kt)("td",{parentName:"tr",align:null},"start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection"),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null},"table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"constraint"),(0,r.kt)("td",{parentName:"tr",align:null},"issue"),(0,r.kt)("td",{parentName:"tr",align:null},"tablesample")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"join"),(0,r.kt)("td",{parentName:"tr",align:null},"then")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cross"),(0,r.kt)("td",{parentName:"tr",align:null},"lateral"),(0,r.kt)("td",{parentName:"tr",align:null},"to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current"),(0,r.kt)("td",{parentName:"tr",align:null},"left"),(0,r.kt)("td",{parentName:"tr",align:null},"trigger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_date"),(0,r.kt)("td",{parentName:"tr",align:null},"like"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_time"),(0,r.kt)("td",{parentName:"tr",align:null},"localtime"),(0,r.kt)("td",{parentName:"tr",align:null},"try_cast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"localtimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"union")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_user"),(0,r.kt)("td",{parentName:"tr",align:null},"minus"),(0,r.kt)("td",{parentName:"tr",align:null},"unique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"natural"),(0,r.kt)("td",{parentName:"tr",align:null},"update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"not"),(0,r.kt)("td",{parentName:"tr",align:null},"using")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distinct"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drop"),(0,r.kt)("td",{parentName:"tr",align:null},"of"),(0,r.kt)("td",{parentName:"tr",align:null},"view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"else"),(0,r.kt)("td",{parentName:"tr",align:null},"on"),(0,r.kt)("td",{parentName:"tr",align:null},"when")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exists"),(0,r.kt)("td",{parentName:"tr",align:null},"or"),(0,r.kt)("td",{parentName:"tr",align:null},"whenever")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"order"),(0,r.kt)("td",{parentName:"tr",align:null},"where")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"following"),(0,r.kt)("td",{parentName:"tr",align:null},"organization"),(0,r.kt)("td",{parentName:"tr",align:null},"with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"for"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);