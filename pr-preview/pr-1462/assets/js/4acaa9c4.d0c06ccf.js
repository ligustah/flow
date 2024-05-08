"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4333],{12642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=t(74848),s=t(28453),r=t(11470),i=t(19365);const o={sidebar_position:7},c="Schemas",l={id:"concepts/schemas",title:"Schemas",description:"Flow documents and collections always have an associated schema",source:"@site/docs/concepts/schemas.md",sourceDirName:"concepts",slug:"/concepts/schemas",permalink:"/pr-preview/pr-1462/concepts/schemas",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/schemas.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Imports",permalink:"/pr-preview/pr-1462/concepts/import"},next:{title:"Storage mappings",permalink:"/pr-preview/pr-1462/concepts/storage-mappings"}},d={},h=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Generation",id:"generation",level:3},{value:"Translations",id:"translations",level:3},{value:"Annotations",id:"annotations",level:3},{value:"Writing schemas",id:"writing-schemas",level:2},{value:"Organization",id:"organization",level:3},{value:"Write and read schemas",id:"write-and-read-schemas",level:2},{value:"Reductions",id:"reductions",level:2},{value:"<code>reduce</code> annotations",id:"reduce-annotations",level:3},{value:"Reductions and collection keys",id:"reductions-and-collection-keys",level:4},{value:"Composition with conditionals",id:"composition-with-conditionals",level:4},{value:"Continuous schema inference",id:"continuous-schema-inference",level:2},{value:"<code>default</code> annotations",id:"default-annotations",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"schemas",children:"Schemas"}),"\n",(0,a.jsxs)(n.p,{children:["Flow documents and ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/concepts/collections",children:"collections"})," always have an associated schema\nthat defines the structure, representation, and constraints\nof your documents.\nCollections must have one schema, but ",(0,a.jsx)(n.a,{href:"#write-and-read-schemas",children:"may have two distinct schemas"}),": one for when documents are added to the collection, and one for when documents are read from that collection."]}),"\n",(0,a.jsx)(n.p,{children:'Schemas are a powerful tool for data quality.\nFlow verifies every document against its schema whenever it\'s read or written,\nwhich provides a strong guarantee that your collections hold only "clean" data,\nand that bugs and invalid documents are caught before they can impact downstream data products.'}),"\n",(0,a.jsxs)(n.p,{children:["In most cases, Flow generates a functioning schema on your behalf during the ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/concepts/captures#discovery",children:"discovery"}),"\nphase of capture.\nIn advanced use cases, however, customizing your schema becomes more important."]}),"\n",(0,a.jsx)(n.h2,{id:"json-schema",children:"JSON Schema"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/",children:"JSON Schema"}),"\nis an expressive open standard for defining the schema and structure of documents.\nFlow uses it for all schemas defined in Flow specifications."]}),"\n",(0,a.jsxs)(n.p,{children:["JSON Schema goes well beyond basic type information and can model\n",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Tagged_union",children:"tagged unions"}),",\nrecursion, and other complex, real-world composite types.\nSchemas can also define rich data validations like minimum and maximum values,\nregular expressions, dates, timestamps, email addresses, and other formats."]}),"\n",(0,a.jsxs)(n.p,{children:["Together, these features let schemas represent structure ",(0,a.jsx)(n.em,{children:"as well as"}),"\nexpectations and constraints that are evaluated and must hold true\nfor every collection document ",(0,a.jsx)(n.em,{children:"before"})," it\u2019s added to the collection.\nThey\u2019re a powerful tool for ensuring end-to-end data quality:\nfor catching data errors and mistakes early,\nbefore they can impact your production data products."]}),"\n",(0,a.jsx)(n.h3,{id:"generation",children:"Generation"}),"\n",(0,a.jsx)(n.p,{children:"When capturing data from an external system,\nFlow can usually generate suitable JSON schemas on your behalf."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/concepts/connectors#using-connectors",children:"Learn more about using connectors"})}),"\n",(0,a.jsx)(n.p,{children:"For systems like relational databases, Flow will typically generate a complete JSON schema by introspecting the table definition."}),"\n",(0,a.jsxs)(n.p,{children:["For systems that store unstructured data, Flow will typically generate a very minimal schema, and will rely on schema inferrence to fill in the details. See ",(0,a.jsx)(n.a,{href:"#continuous-schema-inference",children:"continuous schema inferenece"})," for more information."]}),"\n",(0,a.jsx)(n.h3,{id:"translations",children:"Translations"}),"\n",(0,a.jsxs)(n.p,{children:["You must only provide Flow\na model of a given dataset ",(0,a.jsx)(n.em,{children:"one time"}),", as a JSON schema.\nHaving done that, Flow leverages static inference over your schemas\nto perform many build-time validations of your catalog entities,\nhelping you catch potential problems early."]}),"\n",(0,a.jsx)(n.p,{children:"Schema inference is also used to provide translations into other schema flavors:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Most ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/concepts/advanced/projections",children:"projections"})," of a collection\nare automatically inferred from its schema.\nMaterializations use your projections to create appropriate representations\nin your endpoint system.\nA SQL connector will create table definitions with appropriate\ncolumns, types, and constraints."]}),"\n",(0,a.jsx)(n.li,{children:"Flow generates TypeScript definitions from schemas to provide\ncompile-time type checks of user lambda functions.\nThese checks are immensely helpful for surfacing mismatched expectations around,\nfor example, whether a field could ever be null or is misspelt \u2014\nwhich, if not caught, might otherwise fail at runtime."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"annotations",children:"Annotations"}),"\n",(0,a.jsxs)(n.p,{children:["The JSON Schema standard introduces the concept of\n",(0,a.jsx)(n.a,{href:"http://json-schema.org/understanding-json-schema/reference/generic.html#annotations",children:"annotations"}),",\nwhich are keywords that attach metadata to a location within a validated JSON document.\nFor example, ",(0,a.jsx)(n.code,{children:"title"})," and ",(0,a.jsx)(n.code,{children:"description"})," can be used to annotate a schema with its meaning:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"properties:\n  myField:\n    title: My Field\n    description: A description of myField\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Flow extends JSON Schema with additional annotation keywords,\nwhich provide Flow with further instruction for how documents should be processed.\nIn particular, the ",(0,a.jsx)(n.a,{href:"#reduce-annotations",children:(0,a.jsx)(n.code,{children:"reduce"})})," and ",(0,a.jsx)(n.a,{href:"#default-annotations",children:(0,a.jsx)(n.code,{children:"default"})})," keywords\nhelp you define merge behaviors and avoid null values at your destination systems, respectively."]}),"\n",(0,a.jsxs)(n.p,{children:["What\u2019s especially powerful about annotations is that they respond to\n",(0,a.jsx)(n.strong,{children:"conditionals"})," within the schema.\nConsider a schema validating a positive or negative number:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"type: number\noneOf:\n  - exclusiveMinimum: 0\n    description: A positive number.\n  - exclusiveMaximum: 0\n    description: A negative number.\n  - const: 0\n    description: Zero.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here, the activated ",(0,a.jsx)(n.code,{children:"description"})," of this schema location depends\non whether the integer is positive, negative, or zero."]}),"\n",(0,a.jsx)(n.h2,{id:"writing-schemas",children:"Writing schemas"}),"\n",(0,a.jsx)(n.p,{children:"Your schema can be quite permissive or as strict as you wish.\nThere are a few things to know, however."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The top-level type must be ",(0,a.jsx)(n.code,{children:"object"}),".\nFlow adds a bit of metadata to each of your documents under the ",(0,a.jsx)(n.code,{children:"_meta"})," property,\nwhich can only be done with a top-level object."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Any fields that are part of the collection's ",(0,a.jsx)(n.code,{children:"key"})," must provably exist\nin any document that validates against the schema.\nPut another way, every document within a collection must include all of the fields\nof the collection's key, and the schema must guarantee that."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, the following collection schema would be invalid because\nthe ",(0,a.jsx)(n.code,{children:"id"})," field, which is used as its key, is not ",(0,a.jsx)(n.code,{children:"required"}),",\nso it might not actually exist in all documents:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/whoops:\n    schema:\n      type: object\n      required: [value]\n      properties:\n        id: {type: integer}\n        value: {type: string}\n    key: [/id]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To fix the above schema, change ",(0,a.jsx)(n.code,{children:"required"})," to ",(0,a.jsx)(n.code,{children:"[id, value]"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/concepts/collections#Schemas",children:"Learn more of how schemas can be expressed within collections"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"organization",children:"Organization"}),"\n",(0,a.jsxs)(n.p,{children:["JSON schema has a ",(0,a.jsx)(n.code,{children:"$ref"})," keyword which is used to reference a schema stored elsewhere.\nFlow resolves ",(0,a.jsx)(n.code,{children:"$ref"})," as a relative URL of the current file,\nand also supports\n",(0,a.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6901#section-6",children:"JSON fragment pointers"}),"\nfor referencing a specific schema within a larger schema document,\nsuch as ",(0,a.jsx)(n.code,{children:"../my/widget.schema.yaml#/path/to/schema"}),".\nIt's recommended to use references in order to organize your schemas for reuse."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$ref"})," can also be used in combination with other schema keywords\nto further refine a base schema.\nHere's an example that uses references to organize and\nfurther tighten the constraints of a reused base schema:"]}),"\n","\n","\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(i.A,{value:"flow.yaml",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/coordinates:\n    key: [/id]\n    schema: schemas.yaml#/definitions/coordinate\n\n  acmeCo/integer-coordinates:\n    key: [/id]\n    schema: schemas.yaml#/definitions/integer-coordinate\n\n  acmeCo/positive-coordinates:\n    key: [/id]\n    schema:\n      # Compose a restriction that `x` & `y` must be positive.\n      $ref: schemas.yaml#/definitions/coordinate\n      properties:\n        x: {exclusiveMinimum: 0}\n        y: {exclusiveMinimum: 0}\n"})})}),(0,a.jsx)(i.A,{value:"schemas.yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'definitions:\n  coordinate:\n    type: object\n    required: [id, x, y]\n    properties:\n      id: {type: string}\n      x:\n        description: The X axis value of the coordinate.\n        type: number\n      y:\n        description: The Y axis value of the coordinate.\n        type: number\n\n  integer-coordinate:\n    $ref: "#/definitions/coordinate"\n    # Compose a restriction that `x` & `y` cannot be fractional.\n    properties:\n      x: {type: integer}\n      y: {type: integer}\n'})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"You can write your JSON schemas as either YAML or JSON across any number\nof files, all referenced from Flow catalog files or other schemas."}),(0,a.jsxs)(n.p,{children:["Schema references are always resolved as URLs relative to the current file,\nbut you can also use absolute URLs to a third-party schema like\n",(0,a.jsx)(n.a,{href:"https://www.schemastore.org",children:"schemastore.org"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"write-and-read-schemas",children:"Write and read schemas"}),"\n",(0,a.jsxs)(n.p,{children:["In some cases, you may want to impose different constraints to data that is being added (",(0,a.jsx)(n.em,{children:"written"}),") to the collection\nand data that is exiting (",(0,a.jsx)(n.em,{children:"read from"}),") the collection."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, you may need to start capturing data ",(0,a.jsx)(n.em,{children:"now"})," from a source system; say, a pub-sub system with short-lived\nhistorical data support or an HTTP endpoint, but don't know or don't control the endpoint's schema.\nYou can capture the data with a permissive write schema, and impose a stricter read schema on the data\nas you need to perform a derivation or materialization.\nYou can safely experiment with the read schema at your convenience, knowing the data has already been captured."]}),"\n",(0,a.jsxs)(n.p,{children:["To achieve this, edit the collection, re-naming the standard ",(0,a.jsx)(n.code,{children:"schema"})," to ",(0,a.jsx)(n.code,{children:"writeSchema"})," and adding a ",(0,a.jsx)(n.code,{children:"readSchema"}),".\nMake sure that the field used as the collection key is defined in both schemas."]}),"\n",(0,a.jsxs)(n.p,{children:["You can either perform this manually, or use Flow's ",(0,a.jsx)(n.strong,{children:"Schema Inference"})," tool to infer a read schema.\nSchema Inference is available in the web app when you ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/guides/edit-data-flows",children:"edit a capture or materialization"})," and ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/guides/create-dataflow#create-a-materialization",children:"create a materialization"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Before separating your write and read schemas, have the following in mind:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The write schema comes from the capture connector that produced the collection and shouldn't be modified.\nAlways apply your schema changes to the ",(0,a.jsx)(n.em,{children:"read"})," schema."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Separate read and write schemas are typically useful for collections that come from a source system with a flat or loosely\ndefined data structure, such as cloud storage or pub-sub systems.\nCollections sourced from databases and most SaaS systems come with an explicitly defined data structure and shouldn't\nneed a different read schema."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If you're using standard ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/concepts/advanced/projections",children:"projections"}),", you must only define them in the read schema.\nHowever, if your projections are ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/concepts/advanced/projections#logical-partitions",children:"logical partitions"}),", you must define them in both schemas."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Here's a simple example in which you don't know how purchase prices are formatted when capturing them,\nbut find out later that ",(0,a.jsx)(n.code,{children:"number"})," is the appropriate data type:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"collections:\n  purchases:\n    writeSchema:\n      type: object\n      title: Store price as strings\n      description: Not sure if prices are formatted as numbers or strings.\n      properties:\n        id: { type: integer}\n        price: {type: [string, number]}\n    readSchema:\n      type: object\n      title: Prices as numbers\n      properties:\n        id: { type: integer}\n        price: {type: number}\n    key: [/id]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"reductions",children:"Reductions"}),"\n",(0,a.jsxs)(n.p,{children:["Flow collections have keys, and multiple documents\nmay be added to collections that share a common key.\nWhen this happens, Flow will opportunistically merge all such documents\ninto a single representative document for that key through a process\nknown as ",(0,a.jsx)(n.em,{children:"reduction"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Flow's default is simply to retain the most recent document of a given key,\nwhich is often the behavior that you're after.\nSchema ",(0,a.jsx)(n.code,{children:"reduce"})," annotations allow for far more powerful behaviors."]}),"\n",(0,a.jsx)(n.p,{children:"The Flow runtime performs reductions frequently and continuously\nto reduce the overall movement and cost of data transfer and storage.\nA torrent of input collection documents can often become a trickle\nof reduced updates that must be stored or materialized into your\nendpoints."}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Flow never delays processing in order to batch or combine more documents,\nas some systems do (commonly known as ",(0,a.jsx)(n.em,{children:"micro-batches"}),", or time-based ",(0,a.jsx)(n.em,{children:"polling"}),").\nEvery document is processed as quickly as possible, from end to end."]}),(0,a.jsx)(n.p,{children:"Instead Flow uses optimistic transaction pipelining to do as much useful work as possible,\nwhile it awaits the commit of a previous transaction.\nThis natural back-pressure affords plenty of opportunity for\ndata reductions while minimizing latency."})]}),"\n",(0,a.jsxs)(n.h3,{id:"reduce-annotations",children:[(0,a.jsx)(n.code,{children:"reduce"})," annotations"]}),"\n",(0,a.jsxs)(n.p,{children:["Reduction behaviors are defined by ",(0,a.jsx)(n.code,{children:"reduce"}),"\n",(0,a.jsx)(n.a,{href:"#annotations",children:"JSON schema annotations"}),"\nwithin your document schemas.\nThese annotations provide Flow with the specific reduction strategies\nto use at your various document locations."]}),"\n",(0,a.jsxs)(n.p,{children:["If you're familiar with the ",(0,a.jsx)(n.em,{children:"map"})," and ",(0,a.jsx)(n.em,{children:"reduce"})," primitives present in\nPython, Javascript, and many other languages, this should feel familiar.\nWhen multiple documents map into a collection with a common key,\nFlow reduces them on your behalf by using your ",(0,a.jsx)(n.code,{children:"reduce"})," annotations."]}),"\n",(0,a.jsx)(n.p,{children:"Here's an example that sums an integer:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"type: integer\nreduce: { strategy: sum }\n\n# 1, 2, -1 => 2\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or deeply merges a map:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'type: object\nreduce: { strategy: merge }\n\n# {"a": "b"}, {"c": "d"} => {"a": "b", "c": "d"}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Learn more in the\n",(0,a.jsx)(n.a,{href:"../../reference/reduction-strategies/",children:"reduction strategies"}),"\nreference documentation."]}),"\n",(0,a.jsx)(n.h4,{id:"reductions-and-collection-keys",children:"Reductions and collection keys"}),"\n",(0,a.jsx)(n.p,{children:"Reduction annotations change the common patterns for how you think about collection keys."}),"\n",(0,a.jsx)(n.p,{children:"Suppose you are building a reporting fact table over events of your business.\nToday you would commonly consider a unique event ID to be its natural key.\nYou would load all events into your warehouse and perform query-time aggregation.\nWhen that becomes too slow, you periodically refresh materialized views for fast-but-stale queries."}),"\n",(0,a.jsxs)(n.p,{children:["With Flow, you instead use a collection key of your ",(0,a.jsx)(n.em,{children:"fact table dimensions"}),",\nand use ",(0,a.jsx)(n.code,{children:"reduce"})," annotations to define your metric aggregations.\nA materialization of the collection then maintains a\ndatabase table which is keyed on your dimensions,\nso that queries are both fast ",(0,a.jsx)(n.em,{children:"and"})," up to date."]}),"\n",(0,a.jsx)(n.h4,{id:"composition-with-conditionals",children:"Composition with conditionals"}),"\n",(0,a.jsxs)(n.p,{children:["Like any other JSON Schema annotation,\n",(0,a.jsx)(n.code,{children:"reduce"})," annotations respond to schema conditionals.\nHere we compose ",(0,a.jsx)(n.code,{children:"append"})," and ",(0,a.jsx)(n.code,{children:"lastWriteWins"})," strategies to\nreduce an appended array which can also be cleared:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"type: array\noneOf:\n  # If the array is non-empty, reduce by appending its items.\n  - minItems: 1\n    reduce: { strategy: append }\n  # Otherwise, if the array is empty, reset the reduced array to be empty.\n  - maxItems: 0\n    reduce: { strategy: lastWriteWins }\n\n# [1, 2], [3, 4, 5] => [1, 2, 3, 4, 5]\n# [1, 2], [], [3, 4, 5] => [3, 4, 5]\n# [1, 2], [3, 4, 5], [] => []\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can combine schema conditionals with annotations to build\n",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1462/reference/reduction-strategies/composing-with-conditionals",children:"rich behaviors"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"continuous-schema-inference",children:"Continuous schema inference"}),"\n",(0,a.jsx)(n.p,{children:"Flow automatically infers a JSON schema for every captured collection. This schema is updated automatically as data is captured."}),"\n",(0,a.jsx)(n.p,{children:"For some systems, like relational databases, Flow is able to determine a complete JSON schema for each collection up front, before even starting the capture. But many other systems are not able to provide detailed and accurate information about the data before it's captured. Often, this is because the source system data is unstructured or loosely structured. For these systems, the schema can only be known after the data is captured. Continuous schema inference is most useful in these scenarios."}),"\n",(0,a.jsxs)(n.p,{children:["For example, say you're capturing from MongoDB. MongoDB documents must all have an ",(0,a.jsx)(n.code,{children:"_id"})," field, but that is essentially the only requirement. You can't know what other fields may exist on MongoDB documents until you've read them. When you set up a capture from MongoDB using the Flow web app, the collection specifications will look something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"key: [ /_id ]\nwriteSchema:\n  type: object\n  properties:\n    _id: { type: string }\n  required: [ _id ]\nreadSchema:\n  allOf:\n    - $ref: flow://write-schema\n    - $ref: flow://inferred-schema\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that this spec uses separate read and write schemas. The ",(0,a.jsx)(n.code,{children:"writeSchema"})," is extremely permissive, and only requires an ",(0,a.jsx)(n.code,{children:"_id"})," property with a string value. The ",(0,a.jsx)(n.code,{children:"readSchema"})," references ",(0,a.jsx)(n.code,{children:"flow://inferred-schema"}),", which expands to the current inferred schema when the collection is published."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"$ref: flow://write-schema"})," expands to the current ",(0,a.jsx)(n.code,{children:"writeSchema"}),". Whenever you use ",(0,a.jsx)(n.code,{children:"$ref: flow://inferred-schema"}),", you should always include the ",(0,a.jsx)(n.code,{children:"flow://write-schema"})," as well, so that you don't need to repeat any fields that are defined in the ",(0,a.jsx)(n.code,{children:"writeSchema"})," or wait for those fields to be observed by schema inference."]})}),"\n",(0,a.jsxs)(n.p,{children:["When you first publish a collection using the inferred schema, ",(0,a.jsx)(n.code,{children:"flow://inferred-schema"})," expands to a special placeholder schema that rejects ",(0,a.jsx)(n.em,{children:"all"})," documents. This is to ensure that a non-placeholder inferred schema has been published before allowing any documents to be materialized. Once data is captured to the collection, the inferred schema immediately updates to strictly and minimally describe the captured."]}),"\n",(0,a.jsxs)(n.p,{children:["Because the effective ",(0,a.jsx)(n.code,{children:"readSchema"})," is only ever updated when the collection is published, the best option is usually to use the inferred schema in conjunction with ",(0,a.jsx)(n.a,{href:"/concepts/captures/#autodiscover",children:"autoDiscover"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"default-annotations",children:[(0,a.jsx)(n.code,{children:"default"})," annotations"]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"default"})," annotations to prevent null values from being materialized to your endpoint system."]}),"\n",(0,a.jsxs)(n.p,{children:["When this annotation is absent for a non-required field, missing values in that field are materialized as ",(0,a.jsx)(n.code,{children:"null"}),".\nWhen the annotation is present, missing values are materialized with the field's ",(0,a.jsx)(n.code,{children:"default"})," value:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/coyotes:\n    schema:\n      type: object\n      required: [id]\n      properties:\n        id: {type: integer}\n        anvils_dropped: {type: integer}\n          reduce: {strategy: sum }\n          default: 0\n    key: [/id]\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"default"})," annotations are only used for materializations; they're ignored by captures and derivations.\nIf your collection has both a ",(0,a.jsx)(n.a,{href:"#write-and-read-schemas",children:"write and read schema"}),", make sure you add this annotation to the read schema."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var a=t(96540),s=t(34164),r=t(23104),i=t(56347),o=t(205),c=t(57485),l=t(31682),d=t(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,h]=p({queryString:t,groupId:s}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),x=(()=>{const e=l??f;return m({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),y(e)}),[h,y,r]),tabValues:r}}var y=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function w(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==a&&(l(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(w,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function b(e){const n=(0,y.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);