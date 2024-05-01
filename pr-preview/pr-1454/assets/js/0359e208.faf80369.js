"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1419],{31744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(74848),r=n(28453);const i={},a="Databricks",d={id:"reference/Connectors/materialization-connectors/databricks",title:"Databricks",description:"This connector materializes Flow collections into tables in a Databricks SQL Warehouse.",source:"@site/docs/reference/Connectors/materialization-connectors/databricks.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/databricks",permalink:"/pr-preview/pr-1454/reference/Connectors/materialization-connectors/databricks",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/databricks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google BigQuery",permalink:"/pr-preview/pr-1454/reference/Connectors/materialization-connectors/BigQuery"},next:{title:"Elasticsearch",permalink:"/pr-preview/pr-1454/reference/Connectors/materialization-connectors/Elasticsearch"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Update Delay",id:"update-delay",level:2},{value:"Reserved words",id:"reserved-words",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"databricks",children:"Databricks"}),"\n",(0,s.jsxs)(t.p,{children:["This connector materializes Flow collections into tables in a Databricks SQL Warehouse.\nIt allows both standard and ",(0,s.jsx)(t.a,{href:"#delta-updates",children:"delta updates"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The connector first uploads data changes to a ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/sql/language-manual/sql-ref-volumes.html",children:"Databricks Unity Catalog Volume"}),".\nFrom there, it transactionally applies the changes to the Databricks tables."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://ghcr.io/estuary/materialize-databricks:dev",children:(0,s.jsx)(t.code,{children:"ghcr.io/estuary/materialize-databricks:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Databricks account that includes:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A unity catalog"}),"\n",(0,s.jsx)(t.li,{children:"A SQL Warehouse"}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/api/workspace/schemas",children:"schema"})," \u2014 a logical grouping of tables in a catalog"]}),"\n",(0,s.jsx)(t.li,{children:"A user with a role assigned that grants the appropriate access levels to these resources."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-1454/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,s.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:["You need to first create a SQL Warehouse if you don't already have one in your account. See ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/sql/admin/create-sql-warehouse.html",children:"Databricks documentation"})," on configuring a Databricks SQL Warehouse. After creating a SQL Warehouse, you can find the details necessary for connecting to it under the ",(0,s.jsx)(t.strong,{children:"Connection Details"})," tab."]}),"\n",(0,s.jsx)(t.p,{children:"In order to save on costs, we recommend that you set the Auto Stop parameter for your SQL warehouse to the minimum available. Estuary's Databricks connector automatically delays updates to the destination up to a configured Update Delay (see the endpoint configuration below), with a default value of 30 minutes. If your SQL warehouse is configured to have an Auto Stop of more than 15 minutes, we disable the automatic delay since the delay is not as effective in saving costs with a long Auto Stop idle period."}),"\n",(0,s.jsxs)(t.p,{children:["You also need an access token for your user to be used by our connector, see the respective ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/administration-guide/access-control/tokens.html",children:"documentation"})," from Databricks on how to create an access token."]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Databricks materialization, which will direct one or more of your Flow collections to new Databricks tables."}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Title"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required/Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/address"})})}),(0,s.jsx)(t.td,{children:"Address"}),(0,s.jsxs)(t.td,{children:["Host and port of the SQL warehouse (in the form of host[",":port","]). Port 443 is used as the default if no specific port is provided."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/http_path"})})}),(0,s.jsx)(t.td,{children:"HTTP Path"}),(0,s.jsx)(t.td,{children:"HTTP path of your SQL warehouse"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/catalog_name"})})}),(0,s.jsx)(t.td,{children:"Catalog Name"}),(0,s.jsx)(t.td,{children:"Name of your Unity Catalog"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/schema_name"})})}),(0,s.jsx)(t.td,{children:"Schema Name"}),(0,s.jsx)(t.td,{children:"Default schema to materialize to"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"default"})," schema is used"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/credentials"})})}),(0,s.jsx)(t.td,{children:"Credentials"}),(0,s.jsx)(t.td,{children:"Authentication credentials"}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/credentials/auth_type"})})}),(0,s.jsx)(t.td,{children:"Role"}),(0,s.jsxs)(t.td,{children:["Authentication type, set to ",(0,s.jsx)(t.code,{children:"PAT"})," for personal access token"]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/credentials/personal_access_token"})})}),(0,s.jsx)(t.td,{children:"Role"}),(0,s.jsx)(t.td,{children:"Personal Access Token"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"/advanced"}),(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"/advanced/updateDelay"}),(0,s.jsx)(t.td,{children:"Update Delay"}),(0,s.jsx)(t.td,{children:"Potentially reduce active warehouse time by increasing the delay between updates. Defaults to 30 minutes if unset."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"30m"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Title"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required/Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/table"})})}),(0,s.jsx)(t.td,{children:"Table"}),(0,s.jsx)(t.td,{children:"Table name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/schema"})}),(0,s.jsx)(t.td,{children:"Alternative Schema"}),(0,s.jsx)(t.td,{children:"Alternative schema for this table"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/delta_updates"})}),(0,s.jsx)(t.td,{children:"Delta updates"}),(0,s.jsxs)(t.td,{children:["Whether to use standard or ",(0,s.jsx)(t.a,{href:"#delta-updates",children:"delta updates"})]}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"\nmaterializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n  \t    connector:\n    \t    config:\n              address: dbc-abcdefgh-a12b.cloud.databricks.com\n              catalog_name: main\n              http_path: /sql/1.0/warehouses/abcd123efgh4567\n              schema_name: default\n              credentials:\n                auth_type: PAT\n                personal_access_token: secret\n    \t    image: ghcr.io/estuary/materialize-databricks:dev\n  # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n  \t- resource:\n      \ttable: ${table_name}\n        schema: default\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,s.jsxs)(t.p,{children:["This connector supports both standard (merge) and ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-1454/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]}),"\n",(0,s.jsx)(t.p,{children:"Enabling delta updates will prevent Flow from querying for documents in your Databricks table, which can reduce latency and costs for large datasets.\nIf you're certain that all events will have unique keys, enabling delta updates is a simple way to improve\nperformance with no effect on the output.\nHowever, enabling delta updates is not suitable for all workflows, as the resulting table in Databricks won't be fully reduced."}),"\n",(0,s.jsx)(t.p,{children:"You can enable delta updates on a per-binding basis:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"    bindings:\n  \t- resource:\n      \ttable: ${table_name}\n        schema: default\n        delta_updates: true\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"update-delay",children:"Update Delay"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Update Delay"})," parameter in Estuary materializations offers a flexible approach to data ingestion scheduling. This advanced option allows users to control when the materialization or capture tasks pull in new data by specifying a delay period. By incorporating an update delay into your workflow, you can effectively manage and optimize your active warehouse time, leading to potentially lower costs and more efficient data processing."]}),"\n",(0,s.jsx)(t.p,{children:"An update delay is configured in the advanced settings of a materialization's configuration. It represents the amount of time the system will wait before it begins materializing the latest data. This delay is specified in hours and can be adjusted according to the needs of your data pipeline."}),"\n",(0,s.jsx)(t.p,{children:"For example, if an update delay is set to 2 hours, the materialization task will pause for 2 hours before processing the latest available data. This delay ensures that data is not pulled in immediately after it becomes available, allowing for batching and other optimizations that can reduce warehouse load and processing time."}),"\n",(0,s.jsxs)(t.p,{children:["To configure an update delay, navigate the ",(0,s.jsx)(t.code,{children:"Advanced Options"})," section of the materialization's configuration and select a value from the drop down. The default value for the update delay in Estuary materializations is set to 30 minutes."]}),"\n",(0,s.jsx)(t.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,s.jsxs)(t.p,{children:["Databricks has a list of reserved words that must be quoted in order to be used as an identifier. Flow automatically quotes fields that are in the reserved words list. You can find this list in Databricks's documentation ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/sql/language-manual/sql-ref-reserved-words.html",children:"here"})," and in the table below."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["In Databricks, objects created with quoted identifiers must always be referenced exactly as created, including the quotes. Otherwise, SQL statements and queries can result in errors. See the ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers",children:"Databricks docs"}),"."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Reserved words"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ANTI"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"EXCEPT"}),(0,s.jsx)(t.td,{children:"FULL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"INNER"}),(0,s.jsx)(t.td,{children:"INTERSECT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JOIN"}),(0,s.jsx)(t.td,{children:"LATERAL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LEFT"}),(0,s.jsx)(t.td,{children:"MINUS"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NATURAL"}),(0,s.jsx)(t.td,{children:"ON"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RIGHT"}),(0,s.jsx)(t.td,{children:"SEMI"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SEMI"}),(0,s.jsx)(t.td,{children:"USING"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NULL"}),(0,s.jsx)(t.td,{children:"DEFAULT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TRUE"}),(0,s.jsx)(t.td,{children:"FALSE"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CROSS"}),(0,s.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);