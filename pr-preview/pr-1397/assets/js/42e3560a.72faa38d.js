"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1021],{72519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(74848),s=n(28453);const r={},o=void 0,c={id:"reference/Connectors/materialization-connectors/Rockset",title:"Rockset",description:"This Flow connector materializes delta updates of your Flow collections into Rockset collections.",source:"@site/docs/reference/Connectors/materialization-connectors/Rockset.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Rockset",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/Rockset",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Rockset.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for PostgreSQL",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/PostgreSQL/google-cloud-sql-postgres"},next:{title:"Microsoft SQLServer",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/SQLServer/"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates and reduction strategies",id:"delta-updates-and-reduction-strategies",level:2},{value:"Changelog",id:"changelog",level:2},{value:"V2: 2022-12-06",id:"v2-2022-12-06",level:4}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This Flow connector materializes ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1397/concepts/materialization#delta-updates",children:"delta updates"})," of your Flow collections into Rockset collections."]}),"\n",(0,i.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.jsx)(t.a,{href:"https://github.com/estuary/connectors/pkgs/container/materialize-rockset",children:(0,i.jsx)(t.code,{children:"ghcr.io/estuary/materialize-rockset:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Rockset ",(0,i.jsx)(t.a,{href:"https://rockset.com/docs/rest-api/#createapikey",children:"API key generated"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The API key must have the ",(0,i.jsx)(t.strong,{children:"Member"})," or ",(0,i.jsx)(t.strong,{children:"Admin"})," ",(0,i.jsx)(t.a,{href:"https://rockset.com/docs/iam/#users-api-keys-and-roles",children:"role"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["A Rockset workspace","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Optional; if none exist, one will be created by the connector."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["A Rockset collection","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Optional; if none exist, one will be created by the connector."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1397/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Rockset materialization, which will direct one or more of your Flow collections to your desired Rockset collections."}),"\n",(0,i.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Title"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required/Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/api_key"})})}),(0,i.jsx)(t.td,{children:"Rockset API Key"}),(0,i.jsx)(t.td,{children:"The key used to authenticate to the Rockset API. Must have role of admin or member."}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/region_base_url"})})}),(0,i.jsx)(t.td,{children:"Region Base URL"}),(0,i.jsxs)(t.td,{children:["The base URL to connect to your Rockset deployment. Example: api.usw2a1.rockset.com (do not include the protocol). ",(0,i.jsx)(t.a,{href:"https://rockset.com/docs/rest-api/",children:"See supported options and how to find yours"}),"."]}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(t.p,{children:["The binding configuration includes the optional ",(0,i.jsx)(t.strong,{children:"Advanced collection settings"})," section.\nThese settings can help optimize your output Rockset collections:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Clustering fields"}),": You can specify clustering fields\nfor your Rockset collection's columnar index to help optimize specific query patterns.\nSee the ",(0,i.jsx)(t.a,{href:"https://rockset.com/docs/query-composition/#data-clustering",children:"Rockset docs"})," for more information."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Retention period"}),": Amount of time before data is purged, in seconds.\nA low value will keep the amount of data indexed in Rockset smaller."]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Title"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required/Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/advancedCollectionSettings"})}),(0,i.jsx)(t.td,{children:"Advanced Collection Settings"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/advancedCollectionSettings/clustering_key"})}),(0,i.jsx)(t.td,{children:"Clustering Key"}),(0,i.jsx)(t.td,{children:"List of clustering fields"}),(0,i.jsx)(t.td,{children:"array"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"/advancedCollectionSettings/clustering_key/-/field_name"})})}),(0,i.jsx)(t.td,{children:"Field Name"}),(0,i.jsx)(t.td,{children:"The name of a field"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/advancedCollectionSettings/retention_secs"})}),(0,i.jsx)(t.td,{children:"Retention Period"}),(0,i.jsx)(t.td,{children:"Number of seconds after which data is purged based on event time"}),(0,i.jsx)(t.td,{children:"integer"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/collection"})})}),(0,i.jsx)(t.td,{children:"Rockset Collection"}),(0,i.jsx)(t.td,{children:"The name of the Rockset collection (will be created if it does not exist)"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/workspace"})})}),(0,i.jsx)(t.td,{children:"Workspace"}),(0,i.jsx)(t.td,{children:"The name of the Rockset workspace (will be created if it does not exist)"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n\t  endpoint:\n  \t  connector:\n    \t    config:\n               region_base_url: api.usw2a1.rockset.com\n               api_key: supersecret\n            # Path to the latest version of the connector, provided as a Docker image\n    \t    image: ghcr.io/estuary/materialize-rockset:dev\n\t# If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n  \t- resource:\n      \tworkspace: ${namespace_name}\n      \tcollection: ${table_name}\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"delta-updates-and-reduction-strategies",children:"Delta updates and reduction strategies"}),"\n",(0,i.jsxs)(t.p,{children:["The Rockset connector operates only in ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1397/concepts/materialization#delta-updates",children:"delta updates"})," mode.\nThis means that Rockset, rather than Flow, performs the document merge.\nIn some cases, this will affect how materialized views look in Rockset compared to other systems that use standard updates."]}),"\n",(0,i.jsxs)(t.p,{children:["Rockset merges documents by the key defined in the Flow collection schema, and always uses the semantics of ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7396",children:"RFC 7396 - JSON merge"}),".\nThis differs from how Flow would reduce documents, most notably in that Rockset will ",(0,i.jsx)(t.em,{children:"not"})," honor any reduction strategies defined in your Flow schema.\nFor consistent output of a given collection across Rockset and other materialization endpoints, it's important that that collection's reduction annotations\nin Flow mirror Rockset's semantics."]}),"\n",(0,i.jsxs)(t.p,{children:["To accomplish this, ensure that your collection schema has the following ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1397/concepts/schemas#reductions",children:"data reductions"})," defined in its schema:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A top-level reduction strategy of ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1397/reference/reduction-strategies/merge",children:"merge"})]}),"\n",(0,i.jsxs)(t.li,{children:["A strategy of ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1397/reference/reduction-strategies/firstwritewins-and-lastwritewins",children:"lastWriteWins"})," for all nested values (this is the default)"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsx)(t.p,{children:"The changelog includes a list of breaking changes made to this connector. Backwards-compatible changes are not listed."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Proceed with caution when editing materializations created with previous versions of this connector;\nediting always upgrades your materialization to the latest connector version."})}),"\n",(0,i.jsx)(t.h4,{id:"v2-2022-12-06",children:"V2: 2022-12-06"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Region Base URL was added and is now required as part of the endpoint configuration."}),"\n",(0,i.jsx)(t.li,{children:"Event Time fields and the Insert Only option were removed from the advanced collection settings."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);