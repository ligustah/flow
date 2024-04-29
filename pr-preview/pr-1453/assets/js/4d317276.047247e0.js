"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4147],{56923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=n(74848),a=n(28453),i=n(61114);const s={},c="Schema evolution",r={id:"concepts/advanced/evolutions",title:"Schema evolution",description:"Schema evolutions are a feature you can use to update your whole Data Flow to reflect edits to a collection, preventing your Data Flow from failing due to mismatched components.",source:"@site/docs/concepts/advanced/evolutions.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/evolutions",permalink:"/pr-preview/pr-1453/concepts/advanced/evolutions",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/evolutions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/pr-preview/pr-1453/concepts/tests"},next:{title:"Journals",permalink:"/pr-preview/pr-1453/concepts/advanced/journals"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Using evolutions",id:"using-evolutions",level:2},{value:"What do schema evolutions do?",id:"what-do-schema-evolutions-do",level:2},{value:"What causes breaking schema changes?",id:"what-causes-breaking-schema-changes",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"schema-evolution",children:"Schema evolution"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Schema evolutions"})," are a feature you can use to update your whole Data Flow to reflect edits to a collection, preventing your Data Flow from failing due to mismatched components."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Evolutions are a relatively advanced concept in Flow.\nBefore continuing, you should have a basic understanding of ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1453/concepts/captures",children:"Flow captures"}),", ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1453/concepts/collections",children:"collections"}),", ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1453/concepts/schemas",children:"schemas"}),", and ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1453/concepts/materialization",children:"materializations"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["Flow stores your real-times datasets as ",(0,o.jsx)(t.strong,{children:"collections"}),", groups of continually updating JSON documents.\n",(0,o.jsx)(t.strong,{children:"Captures"})," write data to collections, and ",(0,o.jsx)(t.strong,{children:"materializations"})," read data from collections.\nTogether, these three components form a complete Data Flow."]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"info",children:(0,o.jsx)(t.p,{children:"Derivations can also read data from and write data to collections.\nTo keep things simple in this article, we'll be referring only to captures and materializations."})}),"\n","\n","\n",(0,o.jsx)(i.A,{chart:"\n  graph LR;\n    Source[Source System]--\x3eCapture;\n\t\tCapture--\x3eCollection;\n    Collection--\x3eMaterialization;\n    Materialization--\x3eDest[Destination System];\n"}),"\n",(0,o.jsxs)(t.p,{children:["Each collection and its data are defined by a ",(0,o.jsx)(t.strong,{children:"collection specification"}),", or spec.\nThe spec serves as a formal contract between the capture and the materialization, ensuring that data is correctly shaped and moves through the Data Flow without error."]}),"\n",(0,o.jsxs)(t.p,{children:["The spec includes the collection's ",(0,o.jsx)(t.code,{children:"key"}),", its ",(0,o.jsx)(t.code,{children:"schema"}),", and ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1453/concepts/advanced/projections#logical-partitions",children:"logical partitions"})," of the collection, if any."]}),"\n",(0,o.jsx)(t.p,{children:"When any of these parts change, any capture or materialization writing to or reading from the collection must be updated to approve of the change, otherwise, the Data Flow will fail with an error."}),"\n",(0,o.jsxs)(t.p,{children:["You can use Flow's ",(0,o.jsx)(t.strong,{children:"schema evolutions"})," feature to quickly and simultaneously update other parts of a Data Flow so you're able to re-start it without error when you introduce a collection change."]}),"\n",(0,o.jsx)(t.p,{children:"Collection specs may change for a variety of reasons, such as:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The source system is a database, and someone ran an ",(0,o.jsx)(t.code,{children:"ALTER TABLE"})," statement on a captured table, so you need to update the collection schema (through ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1453/concepts/captures#autodiscover",children:"AutoDiscover"})," or manually)."]}),"\n",(0,o.jsx)(t.li,{children:"The source system contains unstructured data, and some data with a different shape was just captured so you need to update the collection schema (through AutoDiscover or manually)."}),"\n",(0,o.jsx)(t.li,{children:"Someone manually changed the collection's logical partitions."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Regardless of why or how a spec change is introduced, the effect is the same. Flow will never permit you to publish changes that break this contract between captures and materializations, so you'll need to update the contract."}),"\n",(0,o.jsx)(t.h2,{id:"using-evolutions",children:"Using evolutions"}),"\n",(0,o.jsx)(t.p,{children:"When you attempt to publish a breaking change to a collection in the Flow web app, you get an error message that looks similar to this one:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(97994).A+"",width:"2498",height:"862"})}),"\n",(0,o.jsxs)(t.p,{children:["Click the ",(0,o.jsx)(t.strong,{children:"Apply"})," button to trigger an evolution and update all necessary specification to keep your Data Flow functioning. Then, review and publish your draft."]}),"\n",(0,o.jsxs)(t.p,{children:["If you enabled ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1453/concepts/captures#autodiscover",children:"AutoDiscover"})," on a capture, any breaking changes that it introduces will trigger an automatic schema evolution, so long as you selected the ",(0,o.jsx)(t.strong,{children:"Breaking change re-versions collections"})," option(",(0,o.jsx)(t.code,{children:"evolveIncompatibleCollections"}),")."]}),"\n",(0,o.jsx)(t.h2,{id:"what-do-schema-evolutions-do",children:"What do schema evolutions do?"}),"\n",(0,o.jsx)(t.p,{children:"The schema evolution feature is available in the Flow web app when you're editing pre-existing Flow entities.\nIt notices when one of your edit would cause other components of the Data Flow to fail, alerts you, and gives you the option to automatically update the specs of these components to prevent failure."}),"\n",(0,o.jsxs)(t.p,{children:["In other words, evolutions happen in the ",(0,o.jsx)(t.em,{children:"draft"})," state. Whenever you edit, you create a draft.\nEvolutions add to the draft so that when it is published and updates the active data flow, operations can continue seamlessly."]}),"\n",(0,o.jsx)(t.p,{children:"Alternatively, you could manually update all the specs to agree to your edit, but this becomes time-consuming and repetitive."}),"\n",(0,o.jsx)(t.p,{children:"Evolutions can prevent errors resulting from mismatched specs in two ways:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Materialize data to a new resource in the endpoint system"}),": The evolution updates the affected materialization bindings to increment their ",(0,o.jsx)(t.code,{children:"backfill"})," counter, which causes the materialization to re-create the resource (database table, for example) and backfill it from the beginning."]}),"\n",(0,o.jsx)(t.p,{children:"This is a simpler change, and how evolutions work in most cases."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Re-create the Flow collection with a new name"}),": The evolution creates a completely new collection with numerical suffix, such as ",(0,o.jsx)(t.code,{children:"_v2"}),". This collection starts out empty and backfills from the source. The evolution also updates all captures and materializations that reference the old collection to instead reference the new collection, and increments their ",(0,o.jsx)(t.code,{children:"backfill"})," counters."]}),"\n",(0,o.jsx)(t.p,{children:"This is a more complicated change, and evolutions only work this way when necessary: when the collection key or logical partitioning changes."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In either case, the names of the destination resources will remain the same. For example, a materialization to Postgres would drop and re-create the affected tables with the same names they had previously."}),"\n",(0,o.jsx)(t.p,{children:"Also in either case, only the specific bindings that had incompatible changes will be affected. Other bindings will remain untouched, and will not re-backfill."}),"\n",(0,o.jsx)(t.h2,{id:"what-causes-breaking-schema-changes",children:"What causes breaking schema changes?"}),"\n",(0,o.jsxs)(t.p,{children:["Though changes to the collection ",(0,o.jsx)(t.code,{children:"key"})," or logical partition can happen, the most common cause of a breaking change is a change to the collection schema."]}),"\n",(0,o.jsx)(t.p,{children:"Generally materializations, not captures, require updates following breaking schema changes. This is because the new collection specs are usually discovered from the source, so the capture is edited at the same time as the collection."}),"\n",(0,o.jsx)(t.p,{children:"Consider a collection schema that looks like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"schema:\n  type: object\n  properties:\n    id: { type: integer }\n    foo: { type: string, format: date-time }\n  required: [id]\nkey: [/id]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you materialized that collection into a relational database table, the table would look something like ",(0,o.jsx)(t.code,{children:"my_table (id integer primary key, foo timestamptz)"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Now, say you edit the collection spec to remove ",(0,o.jsx)(t.code,{children:"format: date-time"})," from ",(0,o.jsx)(t.code,{children:"bar"}),". You'd expect the materialized database table to then look like ",(0,o.jsx)(t.code,{children:"(id integer primary key, foo text)"}),". But since the column type of ",(0,o.jsx)(t.code,{children:"foo"})," has changed, this will fail. An easy solution in this case would be to change the name of the table that the collection is materialized into. Evolutions do this by appending a suffix to the original table name. In this case, you'd end up with ",(0,o.jsx)(t.code,{children:"my_table_v2 (id integer primary key, foo text)"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},61114:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(96540),a=n(29880),i=n(74848);a.K.initialize({startOnLoad:!0});const s=e=>{let{chart:t}=e;return(0,o.useEffect)((()=>{a.K.contentLoaded()}),[]),(0,i.jsx)("div",{className:"mermaid",children:t})}},97994:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ui-evolution-re-create-de574ca2333327fc911cc8ff0e46c5b9.png"}}]);