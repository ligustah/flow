"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[383],{80639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var o=t(74848),i=t(28453),a=t(11470),r=t(19365);const s={sidebar_position:3},l="Collections",c={id:"concepts/collections",title:"Collections",description:"The documents of your Data Flows are stored in collections:",source:"@site/docs/concepts/collections.md",sourceDirName:"concepts",slug:"/concepts/collections",permalink:"/pr-preview/pr-1411/concepts/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Captures",permalink:"/pr-preview/pr-1411/concepts/captures"},next:{title:"Materializations",permalink:"/pr-preview/pr-1411/concepts/materialization"}},d={},h=[{value:"Documents",id:"documents",level:2},{value:"Viewing collection documents",id:"viewing-collection-documents",level:2},{value:"In the web application",id:"in-the-web-application",level:4},{value:"Using the flowctl CLI",id:"using-the-flowctl-cli",level:4},{value:"Specification",id:"specification",level:2},{value:"Schemas",id:"schemas",level:2},{value:"Keys",id:"keys",level:2},{value:"Schema restrictions",id:"schema-restrictions",level:3},{value:"Composite Keys",id:"composite-keys",level:3},{value:"Key behaviors",id:"key-behaviors",level:3},{value:"Empty keys",id:"empty-keys",level:3},{value:"Projections",id:"projections",level:2},{value:"Storage",id:"storage",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"collections",children:"Collections"}),"\n",(0,o.jsxs)(n.p,{children:["The documents of your Data Flows are stored in ",(0,o.jsx)(n.strong,{children:"collections"}),":\nreal-time data lakes of JSON documents in cloud storage."]}),"\n",(0,o.jsxs)(n.p,{children:["The data in a collection may be ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/captures",children:"captured"})," from an external system,\nor ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/derivations",children:"derived"})," as a transformation of one or more other collections.\nWhen you ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/guides/create-dataflow#create-a-capture",children:"create a new capture in a typical workflow"}),",\nyou define one or more new collections as part of that process.\n",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/materialization",children:"Materializations"})," then read data from collections."]}),"\n",(0,o.jsxs)(n.p,{children:["Every collection has a key and an associated ",(0,o.jsx)(n.a,{href:"#schemas",children:"schema"}),"\nthat its documents must validate against."]}),"\n",(0,o.jsx)(n.h2,{id:"documents",children:"Documents"}),"\n",(0,o.jsx)(n.p,{children:"Flow processes and stores data in terms of documents: JSON files that consist of multiple key-value pair objects. Collections are comprised of documents; Flow tasks (captures, materializations, and derivations) process data in terms of documents."}),"\n",(0,o.jsxs)(n.p,{children:["A Flow document corresponds to different units of data in different types of endpoint systems.\nFor example, it might map to a table row, a pub/sub message, or an API response.\nThe structure of a given collection\u2019s documents is determined by that collection\u2019s ",(0,o.jsx)(n.a,{href:"#schemas",children:"schema"})," and the way in which tasks handle documents is determined by the collection ",(0,o.jsx)(n.a,{href:"#keys",children:"key"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The size of a document depends on the complexity of the source data.\nFlow allows documents up to 16 MB in size, but it's rare for documents to approach this limit."}),"\n",(0,o.jsxs)(n.p,{children:["An example document for a collection with two fields, ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"count"})," is shown below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "_meta": {\n    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\n  },\n  "count": 5954,\n  "message": "Hello #5954"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"_meta"})," object is present in all Flow documents, and contains metadata added by Flow. Minimally, every document ",(0,o.jsx)(n.code,{children:"_meta"})," always has a ",(0,o.jsx)(n.code,{children:"uuid"}),", which is a globally unique id for each document. Some capture connectors may add additional ",(0,o.jsx)(n.code,{children:"_meta"})," properties to tie each document to a specific record within the source system. Documents that were captured from cloud storage connectors, for example, will contain ",(0,o.jsx)(n.code,{children:"/_meta/file"})," and ",(0,o.jsx)(n.code,{children:"/_meta/offset"})," properties that tell you where the document came from within your cloud storage bucket."]}),"\n",(0,o.jsx)(n.h2,{id:"viewing-collection-documents",children:"Viewing collection documents"}),"\n",(0,o.jsxs)(n.p,{children:["In many cases, it's not necessary to view your collection data \u2014 you're able to materialize it directly to a destination in the correct shape using a ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/#connectors",children:"connector"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"However, it can be helpful to view collection documents to confirm the source data was captured as expected, or verify a schema change."}),"\n",(0,o.jsx)(n.h4,{id:"in-the-web-application",children:"In the web application"}),"\n",(0,o.jsxs)(n.p,{children:["Sign into the Flow web application and click the ",(0,o.jsx)(n.strong,{children:"Collections"})," tab. The collections to which you have access are listed.\nClick the ",(0,o.jsx)(n.strong,{children:"Details"})," drop down to show a sample of collection documents as well as the collection ",(0,o.jsx)(n.a,{href:"#specification",children:"specification"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The collection documents are displayed by key. Click the desired key to preview it in its native JSON format."}),"\n",(0,o.jsx)(n.h4,{id:"using-the-flowctl-cli",children:"Using the flowctl CLI"}),"\n",(0,o.jsxs)(n.p,{children:["In your ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/reference/authentication#authenticating-flow-using-the-cli",children:"authenticated flowctl session"}),", issue the command ",(0,o.jsx)(n.code,{children:"flowctl collections read --collection <full/collection-name> --uncommitted"}),". For example, ",(0,o.jsx)(n.code,{children:"flowctl collections read --collection acmeCo/inventory/anvils --uncommitted"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Options are available to read a subset of data from collections.\nFor example, ",(0,o.jsx)(n.code,{children:"--since"})," allows you to specify an approximate start time from which to read data, and\n",(0,o.jsx)(n.code,{children:"--include-partition"})," allows you to read only data from a specified ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/advanced/projections#logical-partitions",children:"logical partition"}),".\nUse ",(0,o.jsx)(n.code,{children:"flowctl collections read --help"})," to see documentation for all options."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Beta",type:"info",children:[(0,o.jsx)(n.p,{children:"While in beta, this command currently has the following limitations. They will be removed in a later release:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"--uncommitted"})," flag is required. This means that all collection documents are read, regardless of whether they were successfully committed or not.\nIn the future, reads of committed documents will be the default."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Only reads of a single ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/advanced/projections#logical-partitions",children:"partition"})," are supported. If you need to read from a partitioned collection, use ",(0,o.jsx)(n.code,{children:"--include-partition"})," or ",(0,o.jsx)(n.code,{children:"--exclude-partition"})," to narrow down to a single partition."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"--output"})," flag is not usable for this command. Only JSON data can be read from collections."]}),"\n"]}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,o.jsx)(n.p,{children:"Collections are defined in Flow specification files per the following format:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'# A set of collections to include in the catalog.\n# Optional, type: object\ncollections:\n  # The unique name of the collection.\n  acmeCo/products/anvils:\n\n    # The schema of the collection, against which collection documents\n    # are validated. This may be an inline definition or a relative URI\n    # reference.\n    # Required, type: string (relative URI form) or object (inline form)\n    schema: anvils.schema.yaml\n\n    # The key of the collection, specified as JSON pointers of one or more\n    # locations within collection documents. If multiple fields are given,\n    # they act as a composite key, equivalent to a SQL table PRIMARY KEY\n    # with multiple table columns.\n    # Required, type: array\n    key: [/product/id]\n\n    # Projections and logical partitions for this collection.\n    # Optional, type: object\n    projections:\n\n    # Derivation that builds this collection from others through transformations.\n    # See the "Derivations" concept page to learn more.\n    # Optional, type: object\n    derive: ~\n'})}),"\n",(0,o.jsx)(n.h2,{id:"schemas",children:"Schemas"}),"\n",(0,o.jsxs)(n.p,{children:["Every Flow collection must declare a schema,\nand will never accept documents\nthat do not validate against the schema.\nThis helps ensure the quality of your data products\nand the reliability of your derivations and materializations.\nSchema specifications are flexible:\nyours could be exactingly strict, extremely permissive, or somewhere in between.\nFor many source types, Flow is able to generate a basic schema during ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/captures#discovery",children:"discovery"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Schemas may either be declared inline, or provided as a reference to a file.\nReferences can also include JSON pointers as a URL fragment to name a specific schema of a larger schema document:"}),"\n","\n","\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"Inline",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/collection:\n    schema:\n      type: object\n      required: [id]\n      properties:\n        id: string\n    key: [/id]\n"})})}),(0,o.jsx)(r.A,{value:"File reference",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/collection:\n    schema: ../path/to/collection.schema.yaml\n    key: [/id]\n"})})}),(0,o.jsx)(r.A,{value:"Reference with pointer",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/collection:\n    schema: ../path/to/collection.schema.yaml#/definitions/mySchema\n    key: [/id]\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/schemas",children:"Learn more about schemas"})}),"\n",(0,o.jsx)(n.h2,{id:"keys",children:"Keys"}),"\n",(0,o.jsxs)(n.p,{children:["Every Flow collection must declare a ",(0,o.jsx)(n.code,{children:"key"})," which is used to group its documents.\nKeys are specified as an array of JSON pointers to document locations. For example:"]}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"flow.yaml",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/users:\n    schema: schema.yaml\n    key: [/userId]\n"})})}),(0,o.jsx)(r.A,{value:"schema.yaml",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"type: object\n  properties:\n    userId: {type: integer}\n    name: {type: string}\n  required: [userId, name]\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Suppose the following JSON documents are captured into ",(0,o.jsx)(n.code,{children:"acmeCo/users"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{"userId": 1, "name": "Will"}\n{"userId": 1, "name": "William"}\n{"userId": 1, "name": "Will"}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As its key is ",(0,o.jsx)(n.code,{children:"[/userId]"}),", a materialization of the collection into a database table will reduce to a single row:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"userId | name\n1      | Will\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If its key were instead ",(0,o.jsx)(n.code,{children:"[/name]"}),", there would be two rows in the table:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"userId | name\n1      | Will\n1      | William\n"})}),"\n",(0,o.jsx)(n.h3,{id:"schema-restrictions",children:"Schema restrictions"}),"\n",(0,o.jsx)(n.p,{children:"Keyed document locations may be of a limited set of allowed types:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"boolean"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"integer"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"string"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Excluded types are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"array"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"null"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"object"})}),"\n",(0,o.jsxs)(n.li,{children:["Fractional ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Keyed fields also must always exist in collection documents.\nFlow performs static inference of the collection schema to verify the existence\nand types of all keyed document locations, and will report an error if the\nlocation could not exist, or could exist with the wrong type."}),"\n",(0,o.jsxs)(n.p,{children:["Flow itself doesn't mind if a keyed location has multiple types,\nso long as they're each of the allowed types: an ",(0,o.jsx)(n.code,{children:"integer"})," or ",(0,o.jsx)(n.code,{children:"string"})," for example.\nSome materialization ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/connectors",children:"connectors"}),", however, may impose further type\nrestrictions as required by the endpoint.\nFor example, SQL databases do not support multiple types for a primary key."]}),"\n",(0,o.jsx)(n.h3,{id:"composite-keys",children:"Composite Keys"}),"\n",(0,o.jsx)(n.p,{children:"A collection may have multiple locations which collectively form a composite key.\nThis can include locations within nested objects and arrays:"}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"flow.yaml",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/compound-key:\n    schema: schema.yaml\n    key: [/foo/a, /foo/b, /foo/c/0, /foo/c/1]\n"})})}),(0,o.jsx)(r.A,{value:"schema.yaml",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"type: object\nrequired: [foo]\nproperties:\n  foo:\n    type: object\n    required: [a, b, c]\n    properties:\n      a: {type: integer}\n      b: {type: string}\n      c:\n        type: array\n        items: {type: boolean}\n        minItems: 2\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"key-behaviors",children:"Key behaviors"}),"\n",(0,o.jsx)(n.p,{children:"A collection key instructs Flow how documents of a collection are to be\nreduced, such as while being materialized to an endpoint.\nFlow also performs opportunistic local reductions over windows of documents\nto improve its performance and reduce the volumes\nof data at each processing stage."}),"\n",(0,o.jsxs)(n.p,{children:["An important subtlety is that the underlying storage of a collection\nwill potentially retain ",(0,o.jsx)(n.em,{children:"many"})," documents of a given key."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"#keys",children:"acmeCo/users example"}),', each of the "Will" or "William" variants\nis likely represented in the collection\'s storage \u2014 so long as they didn\'t\narrive so closely together that they were locally combined by Flow.\nIf desired, a derivation could re-key the collection\non ',(0,o.jsx)(n.code,{children:"[/userId, /name]"})," to materialize the various ",(0,o.jsx)(n.code,{children:"/name"}),"s seen for a ",(0,o.jsx)(n.code,{children:"/userId"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This property makes keys less lossy than they might otherwise appear,\nand it is generally good practice to chose a key that reflects how\nyou wish to ",(0,o.jsx)(n.em,{children:"query"})," a collection, rather than an exhaustive key\nthat's certain to be unique for every document."]}),"\n",(0,o.jsx)(n.h3,{id:"empty-keys",children:"Empty keys"}),"\n",(0,o.jsx)(n.p,{children:"When a specification is automatically generated, there may not be an unambiguously correct key for all collections. This could occur, for example, when a SQL database doesn't have a primary key defined for some table."}),"\n",(0,o.jsx)(n.p,{children:"In cases like this, the generated specification will contain an empty collection key. However, every collection must have a non-empty key, so you'll need to manually edit the generated specification and specify keys for those collections before publishing to the catalog."}),"\n",(0,o.jsx)(n.h2,{id:"projections",children:"Projections"}),"\n",(0,o.jsx)(n.p,{children:"Projections are named locations within a collection document that may be used for\nlogical partitioning or directly exposed to databases into which collections are\nmaterialized."}),"\n",(0,o.jsxs)(n.p,{children:["Many projections are automatically inferred from the collection schema.\nThe ",(0,o.jsx)(n.code,{children:"projections"})," stanza can be used to provide additional projections,\nand to declare logical partitions:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'collections:\n  acmeCo/products/anvils:\n    schema: anvils.schema.yaml\n    key: [/product/id]\n\n    # Projections and logical partitions for this collection.\n    # Keys name the unique projection field, and values are its JSON Pointer\n    # location within the document and configure logical partitioning.\n    # Optional, type: object\n    projections:\n      # Short form: define a field "product_id" with document pointer /product/id.\n      product_id: "/product/id"\n\n      # Long form: define a field "metal" with document pointer /metal_type\n      # which is a logical partition of the collection.\n      metal:\n        location: "/metal_type"\n        partition: true\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/advanced/projections",children:"Learn more about projections"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,o.jsx)(n.p,{children:"Collections are real-time data lakes.\nHistorical documents of the collection\nare stored as an organized layout of\nregular JSON files in your cloud storage bucket.\nReads of that history are served by\ndirectly reading files from your bucket."}),"\n",(0,o.jsxs)(n.p,{children:["Your ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/storage-mappings",children:"storage mappings"}),"\ndetermine how Flow collections are mapped into\nyour cloud storage buckets."]}),"\n",(0,o.jsx)(n.p,{children:"Unlike a traditional data lake, however,\nit's very efficient to read collection documents as they are written.\nDerivations and materializations that source from a collection\nare notified of its new documents within milliseconds of their being published."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/pr-preview/pr-1411/concepts/advanced/journals",children:"Learn more about journals, which provide storage for collections"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var o=t(96540),i=t(34164),a=t(23104),r=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=u(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:t,groupId:i}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),x=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),y(e)}),[h,y,a]),tabValues:a}}var y=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==o&&(c(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function g(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(w,{...e,...n})]})}function b(e){const n=(0,y.A)();return(0,j.jsx)(g,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);