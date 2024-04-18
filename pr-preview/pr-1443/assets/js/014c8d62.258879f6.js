"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3161],{84895:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=i(74848),r=i(28453);const s={sidebar_position:3},c="Elasticsearch",o={id:"reference/Connectors/materialization-connectors/Elasticsearch",title:"Elasticsearch",description:"This connector materializes Flow collections into indices in an Elasticsearch cluster.",source:"@site/docs/reference/Connectors/materialization-connectors/Elasticsearch.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Elasticsearch",permalink:"/pr-preview/pr-1443/reference/Connectors/materialization-connectors/Elasticsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Elasticsearch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Apache Parquet in S3",permalink:"/pr-preview/pr-1443/reference/Connectors/materialization-connectors/Parquet"},next:{title:"Firebolt",permalink:"/pr-preview/pr-1443/reference/Connectors/materialization-connectors/Firebolt"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Setup",id:"setup",level:2},{value:"Delta updates",id:"delta-updates",level:2},{value:"Keyword Fields",id:"keyword-fields",level:2},{value:"Changelog",id:"changelog",level:2},{value:"V3: 2023-08-21",id:"v3-2023-08-21",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,t.jsx)(n.p,{children:"This connector materializes Flow collections into indices in an Elasticsearch cluster."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-elasticsearch:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/materialize-elasticsearch:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An Elastic cluster with a known ",(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html#send-requests-to-elasticsearch",children:"endpoint"})]}),"\n",(0,t.jsxs)(n.li,{children:["The role used to connect to Elasticsearch must have at least the following privileges (see Elastic's documentation on ",(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/defining-roles.html#roles-indices-priv",children:"defining roles"})," and ",(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/security-privileges.html#privileges-list-indices",children:"security privileges"}),"):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cluster privilege"})," of ",(0,t.jsx)(n.code,{children:"monitor"})]}),"\n",(0,t.jsxs)(n.li,{children:["For each index to be created: ",(0,t.jsx)(n.code,{children:"read"}),", ",(0,t.jsx)(n.code,{children:"write"}),", ",(0,t.jsx)(n.code,{children:"view_index_metadata"}),", and ",(0,t.jsx)(n.code,{children:"create_index"}),". When creating ",(0,t.jsx)(n.strong,{children:"Index privileges"}),", you can use a wildcard ",(0,t.jsx)(n.code,{children:'"*"'})," to grant the privileges to all indices."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1443/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure an Elasticsearch materialization, which will direct the contents of these Flow collections into Elasticsearch indices."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Authentication"})}),"\n",(0,t.jsx)(n.p,{children:"You can authenticate to Elasticsearch using either a username and password, or using an API key."}),"\n",(0,t.jsxs)(n.p,{children:["The connector will automatically create an Elasticsearch index for each binding of the materialization with index mappings for each selected field of the binding. It uses the last component of the collection name as the name of the index by default. You can customize the name of the index using the ",(0,t.jsx)(n.code,{children:"index"})," property in the resource configuration for each binding."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/endpoint"})})}),(0,t.jsx)(n.td,{children:"Endpoint"}),(0,t.jsxs)(n.td,{children:["Endpoint host or URL. Must start with http:// or https://. If using Elastic Cloud this follows the format https://CLUSTER_ID.REGION.CLOUD_PLATFORM.DOMAIN",":PORT"]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials"})})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/username"})}),(0,t.jsx)(n.td,{children:"Username"}),(0,t.jsx)(n.td,{children:"Username to use for authenticating with Elasticsearch."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/password"})}),(0,t.jsx)(n.td,{children:"Password"}),(0,t.jsx)(n.td,{children:"Password to use for authenticating with Elasticsearch."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/apiKey"})}),(0,t.jsx)(n.td,{children:"API Key"}),(0,t.jsx)(n.td,{children:"API key for authenticating with the Elasticsearch API. Must be the 'encoded' API key credentials, which is the Base64-encoding of the UTF-8 representation of the id and api_key joined by a colon (:)."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"advanced/number_of_replicas"})}),(0,t.jsx)(n.td,{children:"Index Replicas"}),(0,t.jsx)(n.td,{children:"The number of replicas to create new indices with. Leave blank to use the cluster default."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/index"})})}),(0,t.jsx)(n.td,{children:"index"}),(0,t.jsx)(n.td,{children:"Name of the Elasticsearch index to store the materialization results."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/delta_updates"})})}),(0,t.jsx)(n.td,{children:"Delta updates"}),(0,t.jsxs)(n.td,{children:["Whether to use standard or ",(0,t.jsx)(n.a,{href:"#delta-updates",children:"delta updates"}),"."]}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/number_of_shards"})}),(0,t.jsx)(n.td,{children:"Number of shards"}),(0,t.jsx)(n.td,{children:"The number of shards to create the index with. Leave blank to use the cluster default."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  PREFIX/mat_name:\n    endpoint:\n      connector:\n         # Path to the latest version of the connector, provided as a Docker image\n        image: ghcr.io/estuary/materialize-elasticsearch:dev\n        config:\n          endpoint: https://ec47fc4d2c53414e1307e85726d4b9bb.us-east-1.aws.found.io:9243\n          credentials:\n            username: flow_user\n            password: secret\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n        bindings:\n          - resource:\n              index: my-elasticsearch-index\n            source: PREFIX/source_collection\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["You must configure your Elasticsearch cluster to allow connections from Estuary. It may be necessary to whitelist Estuary Flow's IP address ",(0,t.jsx)(n.code,{children:"34.121.207.128"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, you can allow secure connections via SSH tunneling. To do so:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"../../../../guides/connect-network/",children:"guide"})," to configure an SSH server on the cloud platform of your choice."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure your connector as described in the ",(0,t.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, with the addition of the ",(0,t.jsx)(n.code,{children:"networkTunnel"})," stanza to enable the SSH tunnel, if using. See ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1443/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,t.jsx)(n.p,{children:"This connector supports both standard and delta updates. You must choose an option for each binding."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/pr-preview/pr-1443/concepts/materialization#delta-updates",children:"Learn more about delta updates"})," and the implications of using each update type."]}),"\n",(0,t.jsx)(n.h2,{id:"keyword-fields",children:"Keyword Fields"}),"\n",(0,t.jsxs)(n.p,{children:["Collection fields with ",(0,t.jsx)(n.code,{children:"type: string"})," will have ",(0,t.jsx)(n.code,{children:"keyword"})," index mappings created for them if they\nare part of the collection key, and ",(0,t.jsx)(n.code,{children:"text"})," mappings for them if they are not part of the collection\nkey."]}),"\n",(0,t.jsxs)(n.p,{children:["To materialize a collection field with ",(0,t.jsx)(n.code,{children:"type: string"})," as a ",(0,t.jsx)(n.code,{children:"keyword"})," mapping instead of a ",(0,t.jsx)(n.code,{children:"text"}),"\nmapping, configure the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1443/concepts/materialization#projected-fields",children:"field selection"})," for\nthe binding to indicate which fields should having keyword mappings created for them using the key\nand value of ",(0,t.jsx)(n.code,{children:'"keyword": true'}),". This can be changed by updating the JSON in the ",(0,t.jsx)(n.strong,{children:"Advanced\nSpecification Editor"})," in the web app or by using ",(0,t.jsx)(n.code,{children:"flowctl"})," to edit the specification directly, see\n",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1443/guides/edit-data-flows#edit-a-materialization",children:"edit a materialization"})," for more details."]}),"\n",(0,t.jsxs)(n.p,{children:["An example JSON configuration for a binding that materializes ",(0,t.jsx)(n.code,{children:"stringField"})," as a ",(0,t.jsx)(n.code,{children:"keyword"})," mapping\nis shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "bindings": [\n    {\n      "resource": {\n        "index": "my-elasticsearch-index",\n      },\n      "source": "PREFIX/source_collection",\n      "fields": {\n        "include": {\n          "stringField": {\n            "keyword": true\n          }\n        },\n        "recommended": true\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(n.p,{children:"The changelog includes a list of breaking changes made to this connector. Backwards-compatible changes are not listed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Proceed with caution when editing materializations created with previous versions of this connector; editing always upgrades your materialization to the latest connector version."})}),"\n",(0,t.jsx)(n.h4,{id:"v3-2023-08-21",children:"V3: 2023-08-21"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Index mappings will now be created based on the selected fields of the materialization. Previously only dynamic runtime mappings were created, and the entire root document was always materialized."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Moved "number of replicas" configuration for new indices to an advanced, optional, endpoint-level configuration.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'The "number of shards" resource configuration is now optional.'}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);