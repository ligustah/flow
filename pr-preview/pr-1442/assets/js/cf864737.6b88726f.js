"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4663],{27696:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(74848),a=i(28453),o=i(61114);const s={sidebar_position:1},r="Catalog",l={id:"concepts/catalogs",title:"Catalog",description:"The catalog is the set of published entities that comprise all Data Flows: captures, materializations, derivations, collections, schemas, tests, and more.",source:"@site/docs/concepts/catalogs.md",sourceDirName:"concepts",slug:"/concepts/catalogs",permalink:"/pr-preview/pr-1442/concepts/catalogs",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/catalogs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/pr-preview/pr-1442/concepts/"},next:{title:"Captures",permalink:"/pr-preview/pr-1442/concepts/captures"}},c={},d=[{value:"Data Flows",id:"data-flows",level:2},{value:"Flow specification files",id:"flow-specification-files",level:2},{value:"In the Flow web app",id:"in-the-flow-web-app",level:3},{value:"With flowctl",id:"with-flowctl",level:3},{value:"Namespace",id:"namespace",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"catalog",children:"Catalog"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"catalog"})," is the set of published entities that comprise all ",(0,n.jsx)(t.strong,{children:"Data Flows"}),": captures, materializations, derivations, collections, schemas, tests, and more."]}),"\n",(0,n.jsx)(t.h2,{id:"data-flows",children:"Data Flows"}),"\n",(0,n.jsx)(t.p,{children:"You can mix and match catalog entities to create a variety of Data Flows."}),"\n",(0,n.jsx)(t.p,{children:"The simplest Data Flow has just three entities."}),"\n","\n","\n",(0,n.jsx)(o.A,{chart:"\n\tgraph LR;\n\t\tCapture--\x3eCollection;\n        Collection--\x3eMaterialization;\n"}),"\n",(0,n.jsx)(t.p,{children:"It may also be more complex, combining multiple entities of each type."}),"\n",(0,n.jsx)(o.A,{chart:"\n\tgraph LR;\n\t\tcapture/two--\x3ecollection/D;\n\t\tcapture/one--\x3ecollection/C;\n\t\tcapture/one--\x3ecollection/A;\n        collection/A--\x3ederivation/B;\n        collection/D--\x3ederivation/E;\n        collection/C--\x3ederivation/E;\n        derivation/B--\x3ederivation/E;\n\t\tcollection/D--\x3ematerialization/one;\n\t\tderivation/E--\x3ematerialization/two;\n"}),"\n",(0,n.jsx)(t.h2,{id:"flow-specification-files",children:"Flow specification files"}),"\n",(0,n.jsxs)(t.p,{children:["Catalog entities are defined and described in Flow ",(0,n.jsx)(t.strong,{children:"specification files."}),"\nThese YAML files contain the configuration details that each entity requires."]}),"\n",(0,n.jsxs)(t.p,{children:["You work on specification files as ",(0,n.jsx)(t.strong,{children:"drafts"})," before you publish them to a catalog."]}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to create and work with specification files."}),"\n",(0,n.jsx)(t.h3,{id:"in-the-flow-web-app",children:"In the Flow web app"}),"\n",(0,n.jsxs)(t.p,{children:["You don't need to write or edit the specification files directly \u2014 the web app is designed to generate them for you.\nYou do have the option to review and edit the generated specification as you create captures and materializations using the ",(0,n.jsx)(t.strong,{children:"Catalog Editor"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"with-flowctl",children:"With flowctl"}),"\n",(0,n.jsxs)(t.p,{children:["If you prefer a developer workflow, you can also work with specification files directly in your local environment using ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1442/concepts/flowctl",children:"flowctl"}),". You then ",(0,n.jsx)(t.strong,{children:"publish"})," them back to the catalog."]}),"\n",(0,n.jsxs)(t.p,{children:["A given Data Flow may be described by one specification file, or by many, so long as a top-level file ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1442/concepts/import",children:"imports"})," all the others."]}),"\n",(0,n.jsxs)(t.p,{children:["The files use the extension ",(0,n.jsx)(t.code,{children:"*.flow.yaml"})," or are simply named ",(0,n.jsx)(t.code,{children:"flow.yaml"})," by convention.\nUsing this extension activates Flow's VS Code integration and auto-complete.\nFlow integrates with VS Code for development environment support, like auto-complete,\ntooltips, and inline documentation."]}),"\n",(0,n.jsx)(t.p,{children:"Depending on your Data Flow, you may also have TypeScript modules,\nJSON schemas, or test fixtures."}),"\n",(0,n.jsx)(t.h2,{id:"namespace",children:"Namespace"}),"\n",(0,n.jsxs)(t.p,{children:["All catalog entities (captures, materializations, and collections) are identified by a ",(0,n.jsx)(t.strong,{children:"name"}),"\nsuch as ",(0,n.jsx)(t.code,{children:"acmeCo/teams/manufacturing/anvils"}),". Names have directory-like\nprefixes and every name within Flow is globally unique."]}),"\n",(0,n.jsx)(t.p,{children:"If you've ever used database schemas to organize your tables and authorize access,\nyou can think of name prefixes as being akin to database schemas with arbitrary nesting."}),"\n",(0,n.jsxs)(t.p,{children:["All catalog entities exist together in a single ",(0,n.jsx)(t.strong,{children:"namespace"}),".\nAs a Flow customer, you're provisioned one or more high-level prefixes for your organization.\nFurther division of the namespace into prefixes is up to you."]}),"\n",(0,n.jsxs)(t.p,{children:["Prefixes of the namespace, like ",(0,n.jsx)(t.code,{children:"acmeCo/teams/manufacturing/"}),",\nare the foundation for Flow's ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1442/reference/authentication",children:"authorization model"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},61114:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(96540),a=i(29880),o=i(74848);a.K.initialize({startOnLoad:!0});const s=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{a.K.contentLoaded()}),[]),(0,o.jsx)("div",{className:"mermaid",children:t})}}}]);