"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6656],{32111:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(74848),r=i(28453);const s={},d="Pinecone",c={id:"reference/Connectors/materialization-connectors/pinecone",title:"Pinecone",description:"This connector materializes Flow collections into namespaces in a Pinecone index.",source:"@site/docs/reference/Connectors/materialization-connectors/pinecone.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/pinecone",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/pinecone",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/pinecone.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL HeatWave",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/mysql-heatwave"},next:{title:"Slack",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/slack"}},o={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Embedding Input",id:"embedding-input",level:2},{value:"Pinecone Record Metadata",id:"pinecone-record-metadata",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta Updates",id:"delta-updates",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pinecone",children:"Pinecone"}),"\n",(0,t.jsx)(n.p,{children:"This connector materializes Flow collections into namespaces in a Pinecone index."}),"\n",(0,t.jsxs)(n.p,{children:["The connector uses the ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/embeddings",children:"OpenAI Embedding API"})," to\ncreate vector embeddings based on the documents in your collections and inserts these vector\nembeddings and associated metadata into Pinecone for storage and retrieval."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-pinecone:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/materialize-pinecone:dev"})}),"\nprovides the latest connector image. You can also follow the link in your browser to see past image\nversions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://www.pinecone.io/",children:"Pinecone"})," account with an ",(0,t.jsx)(n.a,{href:"https://docs.pinecone.io/docs/quickstart#2-get-and-verify-your-pinecone-api-key",children:"API\nKey"})," for\nauthentication."]}),"\n",(0,t.jsxs)(n.li,{children:["An ",(0,t.jsx)(n.a,{href:"https://openai.com/",children:"OpenAI"})," account with an ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/authentication",children:"API\nKey"})," for authentication."]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://docs.pinecone.io/docs/indexes",children:"Pinecone Index"})," created to store materialized vector\nembeddings. When using the embedding model ",(0,t.jsx)(n.code,{children:"text-embedding-ada-002"})," (recommended), the index must\nhave ",(0,t.jsx)(n.code,{children:"Dimensions"})," set to 1536."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"embedding-input",children:"Embedding Input"}),"\n",(0,t.jsx)(n.p,{children:"The materialization creates a vector embedding for each collection document. Its structure is based\non the collection fields."}),"\n",(0,t.jsxs)(n.p,{children:["By default, fields of a single scalar type are including in the embedding: strings, integers,\nnumbers, and booleans. You can include additional array or object type fields using ",(0,t.jsx)(n.a,{href:"../../../../concepts/materialization/#projected-fields",children:"projected\nfields"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The text generated for the embedding has this structure, with field names and their values separated\nby newlines:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"stringField: stringValue\nintField: 3\nnumberField: 1.2\nboolField: false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pinecone-record-metadata",children:"Pinecone Record Metadata"}),"\n",(0,t.jsxs)(n.p,{children:["Pinecone supports metadata fields associated with stored vectors that can be used when performing\n",(0,t.jsx)(n.a,{href:"https://www.pinecone.io/learn/vector-search-filtering/",children:"vector queries"}),". This materialization will\ninclude the materialized document as a JSON string in the metadata field ",(0,t.jsx)(n.code,{children:"flow_document"})," to enable\nretrieval of the document from vectors returned by Pinecone queries."]}),"\n",(0,t.jsxs)(n.p,{children:["Pinecone indexes all metadata fields by default. To manage memory usage of the index, use ",(0,t.jsx)(n.a,{href:"https://docs.pinecone.io/docs/manage-indexes#selective-metadata-indexing",children:"selective\nmetadata indexing"})," to\nexclude the ",(0,t.jsx)(n.code,{children:"flow_document"})," metadata field."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/index"})})}),(0,t.jsx)(n.td,{children:"Pinecone Index"}),(0,t.jsx)(n.td,{children:"Pinecone index for this materialization. Must already exist and have appropriate dimensions for the embedding model used."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/environment"})})}),(0,t.jsx)(n.td,{children:"Pinecone Environment"}),(0,t.jsx)(n.td,{children:"Cloud region for your Pinecone project. Example: us-central1-gcp"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/pineconeApiKey"})})}),(0,t.jsx)(n.td,{children:"Pinecone API Key"}),(0,t.jsx)(n.td,{children:"Pinecone API key used for authentication."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/openAiApiKey"})})}),(0,t.jsx)(n.td,{children:"OpenAI API Key"}),(0,t.jsx)(n.td,{children:"OpenAI API key used for authentication."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/embeddingModel"})}),(0,t.jsx)(n.td,{children:"Embedding Model ID"}),(0,t.jsx)(n.td,{children:"Embedding model ID for generating OpenAI bindings. The default text-embedding-ada-002 is recommended."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"text-embedding-ada-002"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advaned/openAiOrg"})}),(0,t.jsx)(n.td,{children:"OpenAI Organization"}),(0,t.jsx)(n.td,{children:"Optional organization name for OpenAI requests. Use this if you belong to multiple organizations to specify which organization is used for API requests."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/namespace"})})}),(0,t.jsx)(n.td,{children:"Pinecone Namespace"}),(0,t.jsx)(n.td,{children:"Name of the Pinecone namespace that this collection will materialize vectors into."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/materialize-pinecone:dev"\n        config:\n          index: your-index\n          environment: us-central1-gcp\n          pineconeApiKey: <YOUR_PINECONE_API_KEY>\n          openAiApiKey: <YOUR_OPENAI_API_KEY>\n    bindings:\n      - resource:\n          namespace: your-namespace\n        source: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"delta-updates",children:"Delta Updates"}),"\n",(0,t.jsxs)(n.p,{children:["This connector operates only in ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1397/concepts/materialization#delta-updates",children:"delta updates"})," mode."]}),"\n",(0,t.jsxs)(n.p,{children:["Pinecone ",(0,t.jsx)(n.a,{href:"https://docs.pinecone.io/reference/upsert",children:"upserts"})," vectors based on their ",(0,t.jsx)(n.code,{children:"id"}),". The ",(0,t.jsx)(n.code,{children:"id"}),"\nfor materialized vectors is based on the Flow Collection key."]}),"\n",(0,t.jsxs)(n.p,{children:["For collections with a a top-level reduction strategy of\n",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1397/reference/reduction-strategies/merge",children:"merge"})," and a strategy of\n",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1397/reference/reduction-strategies/firstwritewins-and-lastwritewins",children:"lastWriteWins"}),' for all nested\nvalues (this is also the default), collections will be materialized "effectively once", with any\nupdated Flow documents replacing vectors in the Pinecone index if they have the same key.']})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);