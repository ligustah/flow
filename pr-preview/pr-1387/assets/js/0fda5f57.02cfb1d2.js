"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[929],{73193:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=o(74848),n=o(28453),r=o(61114);const s={sidebar_position:7},a="Imports",l={id:"concepts/import",title:"Imports",description:"When you work on a draft Data Flow using flowctl draft,",source:"@site/docs/concepts/import.md",sourceDirName:"concepts",slug:"/concepts/import",permalink:"/pr-preview/pr-1387/concepts/import",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/import.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"flowctl",permalink:"/pr-preview/pr-1387/concepts/flowctl"},next:{title:"Schemas",permalink:"/pr-preview/pr-1387/concepts/schemas"}},c={},h=[{value:"Specification",id:"specification",level:2},{value:"Fetch behavior",id:"fetch-behavior",level:2},{value:"Import types",id:"import-types",level:2},{value:"JSON Schema <code>$ref</code>",id:"json-schema-ref",level:2},{value:"Importing derivation resources",id:"importing-derivation-resources",level:2},{value:"Import paths",id:"import-paths",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"imports",children:"Imports"}),"\n",(0,i.jsxs)(t.p,{children:["When you work on a draft Data Flow ",(0,i.jsxs)(t.a,{href:"/pr-preview/pr-1387/concepts/flowctl#working-with-drafts",children:["using ",(0,i.jsx)(t.code,{children:"flowctl draft"})]}),",\nyour Flow specifications may be spread across multiple files.\nFor example, you may have multiple ",(0,i.jsx)(t.strong,{children:"materializations"})," that read from collections defined in separate files,\nor you could store a ",(0,i.jsx)(t.strong,{children:"derivation"})," separately from its ",(0,i.jsx)(t.strong,{children:"tests"}),".\nYou might also reference specifications that aren't in your local draft.\nFor example, you might create a derivation with a source collection that is not in your local draft."]}),"\n",(0,i.jsxs)(t.p,{children:["When you publish your draft, Flow automatically resolves references to specifications across the entirety of the ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1387/concepts/catalogs",children:"catalog"}),".\nThis is possible because every entity in Flow has a globally unique name."]}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, you can explicitly add other local specification files to the Data Flow's build process by including an ",(0,i.jsx)(t.code,{children:"import"})," section\nin the Flow specification file you'll publish.\nWhen the draft is published, the imported specifications are treated as part of the file\ninto which they are imported.\nAll entities in the draft will be used to overwrite any existing version of those entities in the global catalog."]}),"\n",(0,i.jsxs)(t.p,{children:["Explicit imports are useful when you need to update multiple components of a data flow at the same time,\nbut they're in separate files.\nFor example, when you update a derivation, you must also update its test(s) at the same time to prevent failures.\nYou could import ",(0,i.jsx)(t.code,{children:"test.yaml"})," into ",(0,i.jsx)(t.code,{children:"my-derivation.yaml"})," and then publish ",(0,i.jsx)(t.code,{children:"my-derivation.yaml"})," to update both entities in the catalog."]}),"\n",(0,i.jsxs)(t.p,{children:["A common pattern for a given draft is to have a single top-level specification\nfile which explicitly imports all the others.\nFlow automatically generates such a top-level file for your draft when you begin a local work session\nusing ",(0,i.jsx)(t.code,{children:"flowctl draft develop"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"import"})," section is structured as a list of partial or absolute URIs,\nwhich Flow always evaluates relative to the base directory of the current source file.\nFor example, these are possible imports within a collection:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'# Suppose we\'re in file "/path/dir/flow.yaml"\nimport:\n  - sub/directory/flow.yaml        # Resolves to "file:///path/dir/sub/directory/flow.yaml".\n  - ../sibling/directory/flow.yaml # Resolves to "file:///path/sibling/directory/flow.yaml".\n  - https://example/path/flow.yaml # Uses the absolute url.\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The import rule is flexible; a collection doesn\u2019t have to do anything special\nto be imported by another,\nand ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1387/concepts/flowctl",children:(0,i.jsx)(t.code,{children:"flowctl"})})," can even directly build remote sources:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# Test an example from a GitHub repository.\n$ flowctl draft test --source https://raw.githubusercontent.com/estuary/flow-template/main/word-counts.flow.yaml\n"})}),"\n",(0,i.jsx)(t.h2,{id:"fetch-behavior",children:"Fetch behavior"}),"\n",(0,i.jsxs)(t.p,{children:["Flow resolves, fetches, and validates all imports in your local environment during the catalog build process,\nand then includes their fetched contents within the published catalog on the Estuary servers.\nThe resulting catalog entities are thus self-contained snapshots of all resources\n",(0,i.jsx)(t.em,{children:"as they were"})," at the time of publication."]}),"\n",(0,i.jsx)(t.p,{children:"This means it's both safe and recommended to directly reference\nan authoritative source of a resource, such as a third-party JSON schema, as well as resources within your private network.\nIt will be fetched and verified locally at build time,\nand thereafter that fetched version will be used for execution,\nregardless of whether the authority URL itself later changes or errors."}),"\n",(0,i.jsx)(t.h2,{id:"import-types",children:"Import types"}),"\n",(0,i.jsxs)(t.p,{children:["Almost always, the ",(0,i.jsx)(t.code,{children:"import"})," stanza is used to import other Flow\nspecification files.\nThis is the default when given a string path:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"import:\n - path/to/source/catalog.flow.yaml\n"})}),"\n",(0,i.jsx)(t.p,{children:"A long-form variant also accepts a content type of the imported resource:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"import:\n - url: path/to/source/catalog.flow.yaml\n   contentType: CATALOG\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Other permitted content types include ",(0,i.jsx)(t.code,{children:"JSON_SCHEMA"}),",\nbut these are not typically used and are needed only for advanced use cases."]}),"\n",(0,i.jsxs)(t.h2,{id:"json-schema-ref",children:["JSON Schema ",(0,i.jsx)(t.code,{children:"$ref"})]}),"\n",(0,i.jsxs)(t.p,{children:["Certain catalog entities, like collections, commonly reference JSON schemas.\nIt's not necessary to explicitly add these to the ",(0,i.jsx)(t.code,{children:"import"})," section;\nthey are automatically resolved and treated as an import.\nYou can think of this as an analog to the JSON Schema ",(0,i.jsx)(t.code,{children:"$ref"})," keyword,\nwhich is used to reference a schema that may\nbe contained in another file."]}),"\n",(0,i.jsxs)(t.p,{children:["The one exception is schemas that use the ",(0,i.jsx)(t.code,{children:"$id"})," keyword\nat their root to define an alternative canonical URL.\nIn this case, the schema must be referenced through its canonical URL,\nand then explicitly added to the ",(0,i.jsx)(t.code,{children:"import"})," section\nwith ",(0,i.jsx)(t.code,{children:"JSON_SCHEMA"})," content type."]}),"\n",(0,i.jsx)(t.h2,{id:"importing-derivation-resources",children:"Importing derivation resources"}),"\n",(0,i.jsxs)(t.p,{children:["In many cases, ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1387/concepts/derivations",children:"derivations"})," in your catalog will need to import resources.\nUsually, these are TypeScript modules that define the lambda functions of a transformation,\nand, in certain cases, the NPM dependencies of that TypeScript module."]}),"\n",(0,i.jsxs)(t.p,{children:["These imports are specified in the derivation specification, ",(0,i.jsx)(t.em,{children:"not"})," in the ",(0,i.jsx)(t.code,{children:"import"})," section of the specification file."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information, see ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1387/concepts/derivations#specification",children:"Derivation specification"})," and ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-1387/concepts/derivations#creating-typescript-modules",children:"creating TypeScript modules"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"import-paths",children:"Import paths"}),"\n","\n","\n",(0,i.jsxs)(t.p,{children:["If a catalog source file ",(0,i.jsx)(t.code,{children:"foo.flow.yaml"})," references a collection in ",(0,i.jsx)(t.code,{children:"bar.flow.yaml"}),",\nfor example as a target of a capture,\nthere must be an ",(0,i.jsx)(t.em,{children:"import path"})," where either ",(0,i.jsx)(t.code,{children:"foo.flow.yaml"}),"\nimports ",(0,i.jsx)(t.code,{children:"bar.flow.yaml"})," or vice versa."]}),"\n",(0,i.jsxs)(t.p,{children:["When you omit the ",(0,i.jsx)(t.code,{children:"import"})," section, Flow chooses an import path for you.\nWhen you explicitly include the ",(0,i.jsx)(t.code,{children:"import"})," section, you have more control over the import path."]}),"\n",(0,i.jsx)(t.p,{children:"Import paths can be direct:"}),"\n",(0,i.jsx)(r.A,{chart:"\n\tgraph LR;\n\t\tfoo.flow.yaml--\x3ebar.flow.yaml;\n"}),"\n",(0,i.jsx)(t.p,{children:"Or they can be indirect:"}),"\n",(0,i.jsx)(r.A,{chart:"\n\tgraph LR;\n\t\tbar.flow.yaml--\x3eother.flow.yaml;\n        other.flow.yaml--\x3efoo.flow.yaml;\n"}),"\n",(0,i.jsxs)(t.p,{children:["The sources must still have an import path\neven if referenced from a common parent.\nThe following would ",(0,i.jsx)(t.strong,{children:"not"})," work:"]}),"\n",(0,i.jsx)(r.A,{chart:"\n\tgraph LR;\n\t\tparent.flow.yaml--\x3efoo.flow.yaml;\n\t\tparent.flow.yaml--\x3ebar.flow.yaml;\n"}),"\n",(0,i.jsxs)(t.p,{children:["These rules make your catalog sources more self-contained\nand less brittle to refactoring and reorganization.\nConsider what might otherwise happen if ",(0,i.jsx)(t.code,{children:"foo.flow.yaml"}),"\nwere imported in another project without ",(0,i.jsx)(t.code,{children:"bar.flow.yaml"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},61114:(e,t,o)=>{o.d(t,{A:()=>s});var i=o(96540),n=o(29880),r=o(74848);n.K.initialize({startOnLoad:!0});const s=e=>{let{chart:t}=e;return(0,i.useEffect)((()=>{n.K.contentLoaded()}),[]),(0,r.jsx)("div",{className:"mermaid",children:t})}}}]);