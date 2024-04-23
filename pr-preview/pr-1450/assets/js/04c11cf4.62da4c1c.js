"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6221],{78935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),o=t(28453);const r={},s="Projections",a={id:"concepts/advanced/projections",title:"Projections",description:"Projections are an advanced concept of Flow.",source:"@site/docs/concepts/advanced/projections.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/projections",permalink:"/pr-preview/pr-1450/concepts/advanced/projections",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/projections.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logs and statistics",permalink:"/pr-preview/pr-1450/concepts/advanced/logs-stats"},next:{title:"Task shards",permalink:"/pr-preview/pr-1450/concepts/advanced/shards"}},c={},l=[{value:"Logical partitions",id:"logical-partitions",level:2},{value:"Partition selectors",id:"partition-selectors",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"projections",children:"Projections"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Projections are an advanced concept of Flow.\nYou can use Flow without knowing the details of projections,\nbut this section may help you better understand how Flow works."})}),"\n",(0,i.jsx)(n.p,{children:"Flow documents are arbitrary JSON, and may contain multiple levels of hierarchy and nesting.\nHowever, systems that Flow integrates with often model flat tables of rows and columns, without hierarchy.\nOthers are somewhere in between."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Projections"})," are the means by which Flow translates between the documents\nof a collection and a table representation.\nA projection defines a mapping between a structured document location,\ngiven as a ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6901",children:"JSON-Pointer"}),",\nand a corresponding ",(0,i.jsx)(n.strong,{children:"field"})," name used as, for example, a CSV file header or SQL table column."]}),"\n",(0,i.jsxs)(n.p,{children:["Many projections are inferred automatically from a collection\u2019s JSON schema,\nusing a field that is simply the JSON Pointer with its leading slash removed.\nFor example, a schema scalar with pointer ",(0,i.jsx)(n.code,{children:"/myScalar"})," will generate a projection with field ",(0,i.jsx)(n.code,{children:"myScalar"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can supplement by providing additional collection projections,\nand a document location can have more than one projection field that references it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'collections:\n  acmeCo/user-sessions:\n    schema: session.schema.yaml\n    key: [/user/id, /timestamp]\n    projections:\n      # A "user/id" projection field is automatically inferred.\n      # Add an additional field that doesn\'t have a slash.\n      user_id: /user/id\n      # Partly decompose a nested array of requests into a handful of named projections.\n      "first request": /requests/0\n      "second request": /requests/1\n      "third request": /requests/2\n'})}),"\n",(0,i.jsx)(n.h2,{id:"logical-partitions",children:"Logical partitions"}),"\n",(0,i.jsx)(n.p,{children:"Projections can also be used to logically partition a collection,\nspecified as a longer-form variant of a projection definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/user-sessions:\n    schema: session.schema.yaml\n    key: [/user/id, /timestamp]\n    projections:\n      country:\n        location: /country\n        partition: true\n      device:\n        location: /agent/type\n        partition: true\n      network:\n        location: /agent/network\n        partition: true\n"})}),"\n",(0,i.jsx)(n.p,{children:"Logical partitions isolate the storage of documents\nby their differing values for partitioned fields.\nFlow extracts partitioned fields from each document,\nand every unique combination of partitioned fields\nis a separate logical partition."}),"\n",(0,i.jsxs)(n.p,{children:["Every logical partition has one or more ",(0,i.jsx)(n.strong,{children:"physical partitions"}),"\ninto which their documents are written,\nwhich in turn controls\nhow files are arranged within cloud storage."]}),"\n",(0,i.jsx)(n.p,{children:'For example, a document of "acmeCo/user-sessions" like:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"country": "CA", "agent": {"type": "iPhone", "network": "LTE"}, ...}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Might produce files in cloud storage like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"s3://bucket/example/sessions/country=CA/device=iPhone/network=LTE/pivot=00/utc_date=2020-11-04/utc_hour=16/<name>.gz\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"country"}),", ",(0,i.jsx)(n.code,{children:"device"}),", and ",(0,i.jsx)(n.code,{children:"network"})," together identify a ",(0,i.jsx)(n.em,{children:"logical partition"}),",\nwhile ",(0,i.jsx)(n.code,{children:"pivot"})," identifies a ",(0,i.jsx)(n.em,{children:"physical partition"}),".\n",(0,i.jsx)(n.code,{children:"utc_date"})," and ",(0,i.jsx)(n.code,{children:"utc_hour"})," is the time at which the journal fragment was created."]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/advanced/journals#physical-partitions",children:"Learn more about physical partitions"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"partition-selectors",children:"Partition selectors"}),"\n",(0,i.jsxs)(n.p,{children:["When reading from a collection, Flow catalog entities like derivations, materializations,\nand tests can provide a ",(0,i.jsx)(n.strong,{children:"partition selector"}),", which identifies the subset\nof partitions that should be read from a source collection:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# Partition selectors are included as part of a larger entity,\n# such as a derivation or materialization.\npartitions:\n  # `include` selects partitioned fields and corresponding values that\n  # must be matched in order for a partition to be processed.\n  # All of the included fields must be matched.\n  # Default: All partitions are included. type: object\n  include:\n    # Include partitions from North America.\n    country: [US, CA]\n    # AND where the device is a mobile phone.\n    device: [iPhone, Android]\n\n  # `exclude` selects partitioned fields and corresponding values which,\n  # if matched, exclude the partition from being processed.\n  # A match of any of the excluded fields will exclude the partition.\n  # Default: No partitions are excluded. type: object\n  exclude:\n    # Skip sessions which were over a 3G network.\n    network: ["3G"]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Partition selectors are efficient as they allow Flow to altogether\navoid reading documents that aren\u2019t needed."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);