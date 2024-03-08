"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2369],{96509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const a={sidebar_position:4},s="Materializations",r={id:"concepts/materialization",title:"Materializations",description:"A materialization is how Flow pushes data to an external destination.",source:"@site/docs/concepts/materialization.md",sourceDirName:"concepts",slug:"/concepts/materialization",permalink:"/pr-preview/pr-1407/concepts/materialization",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/materialization.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Collections",permalink:"/pr-preview/pr-1407/concepts/collections"},next:{title:"Connectors",permalink:"/pr-preview/pr-1407/concepts/connectors"}},c={},l=[{value:"Discovery",id:"discovery",level:2},{value:"Specification",id:"specification",level:2},{value:"How continuous materialization works",id:"how-continuous-materialization-works",level:2},{value:"Projected fields",id:"projected-fields",level:2},{value:"Partition selectors",id:"partition-selectors",level:2},{value:"Destination-specific performance",id:"destination-specific-performance",level:2},{value:"Delta updates",id:"delta-updates",level:2},{value:"Using <code>sourceCapture</code> to synchronize capture and materialization bindings",id:"using-sourcecapture-to-synchronize-capture-and-materialization-bindings",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"materializations",children:"Materializations"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"materialization"})," is how Flow pushes data to an external destination."]}),"\n",(0,i.jsxs)(n.p,{children:["Materializations are a type of Flow ",(0,i.jsx)(n.strong,{children:"task"}),".\nThey connect to an external destination system,\nor ",(0,i.jsx)(n.strong,{children:"endpoint"}),", and bind one or more Flow collections to resources at the endpoint, such as database tables."]}),"\n",(0,i.jsxs)(n.p,{children:["As documents added to the bound collections,\nthe materialization continuously pushes it to the destination resources, where it is reflected with very low latency.\nMaterializations can process ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/collections#documents",children:"documents"})," up to 16 MB in size."]}),"\n",(0,i.jsxs)(n.p,{children:["Materializations are the conceptual inverse of ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/captures",children:"captures"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(933).A+"",width:"960",height:"540"})}),"\n",(0,i.jsxs)(n.p,{children:["You define and configure materializations in ",(0,i.jsx)(n.strong,{children:"Flow specifications"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/guides/create-dataflow#create-a-materialization",children:"See the guide to create a materialization"})}),"\n",(0,i.jsx)(n.h2,{id:"discovery",children:"Discovery"}),"\n",(0,i.jsxs)(n.p,{children:["Materializations use real-time ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/connectors",children:"connectors"})," to connect to many endpoint types."]}),"\n",(0,i.jsxs)(n.p,{children:["When you use a materialization connector in the Flow web app,\nflow helps you configure it through the ",(0,i.jsx)(n.strong,{children:"discovery"})," workflow."]}),"\n",(0,i.jsxs)(n.p,{children:["To begin discovery, you tell Flow the connector you'd like to use, basic information about the endpoint,\nand the collection(s) you'd like to materialize there.\nFlow maps the collection(s) to one or more ",(0,i.jsx)(n.strong,{children:"resources"})," \u2014 tables, data streams, or the equivalent \u2014\nthrough one or more ",(0,i.jsx)(n.strong,{children:"bindings"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You may then modify the generated configuration as needed before publishing the materialization."}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.p,{children:"Materializations are defined in Flow specification files per the following format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# A set of materializations to include in the catalog.\n# Optional, type: object\nmaterializations:\n  # The name of the materialization.\n  acmeCo/example/database-views:\n    # Endpoint defines how to connect to the destination of the materialization.\n    # Required, type: object\n    endpoint:\n      # This endpoint uses a connector provided as a Docker image.\n      connector:\n        # Docker image that implements the materialization connector.\n        image: ghcr.io/estuary/materialize-postgres:dev\n        # File that provides the connector's required configuration.\n        # Configuration may also be presented inline.\n        config: path/to/connector-config.yaml\n\n    # Bindings define how one or more collections map to materialized endpoint resources.\n    # A single materialization may include many collections and endpoint resources,\n    # each defined as a separate binding.\n    # Required, type: object\n    bindings:\n      - # Source collection read by this binding.\n        # Required, type: object or string\n        source:\n          # Name of the collection to be read.\n          # Required.\n          name: acmeCo/example/collection\n          # Lower bound date-time for documents which should be processed. \n          # Source collection documents published before this date-time are filtered.\n          # `notBefore` is *only* a filter. Updating its value will not cause Flow\n          # to re-process documents that have already been read.\n          # Optional. Default is to process all documents.\n          notBefore: 2023-01-23T01:00:00Z\n          # Upper bound date-time for documents which should be processed.\n          # Source collection documents published after this date-time are filtered.\n          # Like `notBefore`, `notAfter` is *only* a filter. Updating its value will\n          # not cause Flow to re-process documents that have already been read.\n          # Optional. Default is to process all documents.\n          notAfter: 2023-01-23T02:00:00Z\n\n        # The resource is additional configuration required by the endpoint\n        # connector to identify and materialize a specific endpoint resource.\n        # The structure and meaning of this configuration is defined by\n        # the specific connector.\n        # Required, type: object\n        resource:\n          # The materialize-postgres connector expects a `table` key\n          # which names a table to materialize into.\n          table: example_table\n\n        # Priority applied to documents processed by this binding.\n        # When all bindings are of equal priority, documents are processed\n        # in order of their associated publishing time.\n        # \n        # However, when one binding has a higher priority than others,\n        # then *all* ready documents are processed through the binding\n        # before *any* documents of other bindings are processed.\n        # \n        # Optional. Default: 0, integer >= 0\n        priority: 0\n\n    # A sourceCapture allows bindings to be managed automatically based on the\n    # bindings of the given capture. As new bindings are added to the capture,\n    # they will automatically be added to the materialization. This property\n    # is optional.\n    sourceCapture: acmeCo/example/a-capture\n"})}),"\n",(0,i.jsx)(n.h2,{id:"how-continuous-materialization-works",children:"How continuous materialization works"}),"\n",(0,i.jsxs)(n.p,{children:["Flow materializations are ",(0,i.jsx)(n.strong,{children:"continuous materialized views"}),".\nThey maintain a representation of the collection within the endpoint system\nthat is updated in near real-time. It's indexed on the\n",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/collections#collection-keys",children:"collection key"}),".\nAs the materialization runs, it ensures that all collection documents\nand their accumulated ",(0,i.jsx)(n.a,{href:"../#reductions",children:"reductions"})," are reflected in this\nmanaged endpoint resource."]}),"\n",(0,i.jsx)(n.p,{children:"When you first publish a materialization,\nFlow back-fills the endpoint resource with the historical documents of the collection.\nOnce caught up, Flow applies new collection documents using incremental and low-latency updates."}),"\n",(0,i.jsx)(n.p,{children:"As collection documents arrive, Flow:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reads"})," previously materialized documents from the endpoint for the relevant keys"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reduces"})," new documents into these read documents"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Writes"})," updated documents back into the endpoint resource, indexed by their keys"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, consider a collection and its materialization:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\ncollections:\n  acmeCo/colors:\n    key: [/color]\n    schema:\n      type: object\n      required: [color, total]\n      reduce: {strategy: merge}\n      properties:\n        color: {enum: [red, blue, purple]}\n        total:\n          type: integer\n          reduce: {strategy: sum}\n\nmaterializations:\n  acmeCo/example/database-views:\n    endpoint: ...\n    bindings:\n      - source: acmeCo/colors\n        resource: { table: colors }\n"})}),"\n",(0,i.jsx)(n.p,{children:"Suppose documents are periodically added to the collection:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"color": "red", "total": 1}\n{"color": "blue", "total": 2}\n{"color": "blue", "total": 3}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Its materialization into a database table will have a single row for each unique color.\nAs documents arrive in the collection, the row ",(0,i.jsx)(n.code,{children:"total"})," is updated within the\nmaterialized table so that it reflects the overall count:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(4684).A+"",width:"769",height:"322"})}),"\n",(0,i.jsxs)(n.p,{children:["Flow does ",(0,i.jsx)(n.em,{children:"not"}),' keep separate internal copies of collection or reduction states,\nas some other systems do. The endpoint resource is the one and only place\nwhere state "lives" within a materialization. This makes materializations very\nefficient and scalable to operate. They are able to maintain ',(0,i.jsx)(n.em,{children:"very"})," large tables\nstored in highly scaled storage systems like OLAP data warehouses."]}),"\n",(0,i.jsx)(n.h2,{id:"projected-fields",children:"Projected fields"}),"\n",(0,i.jsxs)(n.p,{children:["Many endpoint systems are document-oriented and can directly work\nwith collections of JSON documents.\nOthers are table-oriented and require an up-front declaration\nof columns and types to be most useful, such as a SQL ",(0,i.jsx)(n.code,{children:"CREATE TABLE"})," definition."]}),"\n",(0,i.jsxs)(n.p,{children:["Flow uses collection ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/advanced/projections",children:"projections"})," to relate locations within\na hierarchical JSON document to equivalent named fields.\nA materialization can in turn select a subset of available projected fields\nwhere, for example, each field becomes a column in a SQL table created by\nthe connector."]}),"\n",(0,i.jsxs)(n.p,{children:["It would be tedious to explicitly list projections for every materialization,\nthough you certainly can if desired.\nInstead, Flow and the materialization connector ",(0,i.jsx)(n.em,{children:"negotiate"})," a recommended field selection\non your behalf, which can be fine-tuned.\nFor example, a SQL database connector will typically ",(0,i.jsx)(n.em,{children:"require"})," that fields\ncomprising the primary key be included, and will ",(0,i.jsx)(n.em,{children:"recommend"})," that scalar\nvalues be included, but will by default exclude document locations that\ndon't have native SQL representations, such as locations which can have\nmultiple JSON types or are arrays or maps."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  acmeCo/example/database-views:\n    endpoint: ...\n    bindings:\n      - source: acmeCo/example/collection\n        resource: { table: example_table }\n\n        # Select (or exclude) projections of the collection for materialization as fields.\n        # If not provided, the recommend fields of the endpoint connector are used.\n        # Optional, type: object\n        fields:\n          # Whether to include fields that are recommended by the endpoint connector.\n          # If false, then fields can still be added using `include`.\n          # Required, type: boolean\n          recommended: true\n\n          # Fields to exclude. This is useful for deselecting a subset of recommended fields.\n          # Default: [], type: array\n          exclude: [myField, otherField]\n\n          # Fields to include. This can supplement recommended fields, or can\n          # designate explicit fields to use if recommended fields are disabled.\n          #\n          # Values of this map are used to customize connector behavior on a per-field basis.\n          # They are passed directly to the connector and are not interpreted by Flow.\n          # Consult your connector's documentation for details of what customizations are available.\n          # This is an advanced feature and is not commonly used.\n          #\n          # default: {}, type: object\n          include:  {goodField: {}, greatField: {}}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"partition-selectors",children:"Partition selectors"}),"\n",(0,i.jsxs)(n.p,{children:["Partition selectors let you materialize only a subset of a collection that has\n",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/advanced/projections#logical-partitions",children:"logical partitions"}),".\nFor example, you might have a large collection that is logically partitioned\non each of your customers:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/anvil/orders:\n    key: [/id]\n    schema: orders.schema.yaml\n    projections:\n      customer:\n        location: /order/customer\n        partition: true\n"})}),"\n",(0,i.jsx)(n.p,{children:"A large customer asks if you can provide an up-to-date accounting of their orders.\nThis can be accomplished with a partition selector:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'materializations:\n  acmeCo/example/database-views:\n    endpoint: ...\n    bindings:\n      # The source can be specified as an object, which allows setting a partition selector.\n      - source:\n          name: acmeCo/anvil/orders\n          # Process partitions where "Coyote" is the customer.\n          partitions:\n            include:\n              customer: [Coyote]\n        resource: { table: coyote_orders }\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/concepts/advanced/projections#partition-selectors",children:"Learn more about partition selectors"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"destination-specific-performance",children:"Destination-specific performance"}),"\n",(0,i.jsx)(n.p,{children:"Flow processes updates in transactions, as quickly as the destination endpoint can handle them.\nThis might be milliseconds in the case of a fast key/value store,\nor many minutes in the case of an OLAP warehouse."}),"\n",(0,i.jsx)(n.p,{children:"If the endpoint is also transactional, Flow integrates its internal transactions\nwith those of the endpoint for integrated end-to-end \u201cexactly once\u201d semantics."}),"\n",(0,i.jsx)(n.p,{children:"The materialization is sensitive to back pressure from the endpoint.\nAs a database gets busy, Flow adaptively batches and combines documents to consolidate updates:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In a given transaction, Flow reduces all incoming documents on the collection key.\nMultiple documents combine and result in a single endpoint read and write during the transaction."}),"\n",(0,i.jsx)(n.li,{children:"As a target database becomes busier or slower, transactions become larger.\nFlow does more reduction work within each transaction, and each endpoint read or write\naccounts for an increasing volume of collection documents."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This allows you to safely materialize a collection with a high rate of changes into a small database,\nso long as the cardinality of the materialization is of reasonable size."}),"\n",(0,i.jsx)(n.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,i.jsxs)(n.p,{children:["As described ",(0,i.jsx)(n.a,{href:"#how-continuous-materialization-works",children:"above"}),", Flow's standard materialization\nmechanism involves querying the target system for data state before reducing new documents\ndirectly into it."]}),"\n",(0,i.jsx)(n.p,{children:"For these standard updates to work, the endpoint must be a stateful system, like a relational database.\nHowever, other systems \u2014 like Webhooks and Pub/Sub \u2014 may also be endpoints.\nNone of these typically provide a state representation that Flow can query.\nThey are write-only in nature, so Flow cannot use their endpoint state\nto help it fully reduce collection documents on their keys.\nEven some stateful systems are incompatible with Flow's standard updates due to their unique\ndesign and architecture."}),"\n",(0,i.jsxs)(n.p,{children:["For all of these endpoints, Flow offers a ",(0,i.jsx)(n.strong,{children:"delta-updates"}),' mode.\nWhen using delta updates, Flow does not attempt to maintain\nfull reductions of each unique collection key.\nInstead, Flow locally reduces documents within each transaction\n(this is often called a "combine"), and then materializes one\n',(0,i.jsx)(n.em,{children:"delta"})," document per key to the endpoint."]}),"\n",(0,i.jsx)(n.p,{children:"In other words, when delta updates are used, Flow sends information about data changes by key,\nand further reduction is left up to the endpoint system.\nSome systems may reduce documents similar to Flow; others use a different\nmechanism; still others may not perform reductions at all."}),"\n",(0,i.jsxs)(n.p,{children:["A given endpoint may support standard updates, delta updates, or both.\nThis depends on the ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1407/reference/Connectors/materialization-connectors/",children:"materialization connector"}),". Expect that a connector will use\nstandard updates only unless otherwise noted in its documentation."]}),"\n",(0,i.jsxs)(n.h2,{id:"using-sourcecapture-to-synchronize-capture-and-materialization-bindings",children:["Using ",(0,i.jsx)(n.code,{children:"sourceCapture"})," to synchronize capture and materialization bindings"]}),"\n",(0,i.jsxs)(n.p,{children:["In some cases, you just want a destination system to always reflects the source\nsystem as closely as possible, even as the source system changes over time. The\n",(0,i.jsx)(n.code,{children:"sourceCapture"})," property of a materialization allows you to do exactly that.\nIf you set a ",(0,i.jsx)(n.code,{children:"sourceCapture"})," on your materialization, then the bindings of the\nmaterialization will be automatically kept in sync with the bindings of the\ncapture. As bindings are added to the capture, they will be automatically added\nto the materialization. This works regardless of whether the bindings were added\nto the capture manually or automatically. Bindings that are removed from the\ncapture are ",(0,i.jsx)(n.em,{children:"not"})," removed from the materialization."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},933:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/materialization-new-bbe45dcc13bded994190ac75f86dc01f.svg"},4684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/materialization-13219c2248a49327c4c97340d0216bed.gif"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);