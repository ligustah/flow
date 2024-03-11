"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6803],{22171:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(74848),l=n(28453),t=n(61114);const r={sidebar_position:1},c="Edit a Flow specification locally",o={id:"guides/flowctl/edit-specification-locally",title:"Edit a Flow specification locally",description:"The Flow web application is designed to make the most common Flow tasks quick and easy.",source:"@site/docs/guides/flowctl/edit-specification-locally.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/edit-specification-locally",permalink:"/pr-preview/pr-1411/guides/flowctl/edit-specification-locally",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/edit-specification-locally.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"flowctl guides",permalink:"/pr-preview/pr-1411/guides/flowctl/"},next:{title:"Edit a draft created in the web app",permalink:"/pr-preview/pr-1411/guides/flowctl/edit-draft-from-webapp"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pull specifications locally",id:"pull-specifications-locally",level:2},{value:"Edit source files and re-publish specifications",id:"edit-source-files-and-re-publish-specifications",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"edit-a-flow-specification-locally",children:"Edit a Flow specification locally"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/concepts/web-app",children:"Flow web application"})," is designed to make the most common Flow tasks quick and easy.\nWith the app, you're able to create, monitor, and manage captures, materializations, and more.\nFor ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/guides/create-dataflow",children:"creating basic Data Flows"}),", the web app is by far the most efficient option,\nand ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/guides/edit-data-flows",children:"basic editing capabilities"})," are provided."]}),"\n",(0,s.jsx)(i.p,{children:"However, advanced editing tasks are only possible using flowctl. These include:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Manually editing collection schemas, for example, to add ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/concepts/advanced/projections",children:"projections"}),"\nor change the ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/reference/reduction-strategies/",children:"reduction strategy"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Editing, testing, and publishing multiple entities at once."}),"\n",(0,s.jsx)(i.li,{children:"Creating and editing derivations."}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["A simplified development experience for derivations is available. You can use the web app to create a cloud-based development environment pre-populated with the components you need. Learn how ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/guides/flowctl/create-derivation",children:"here"}),"."]})}),"\n",(0,s.jsx)(i.p,{children:"This guide covers the basic procedure of pulling one or more live Flow entities to your local development environment,\nediting their specifications, and re-publishing them."}),"\n",(0,s.jsx)(t.A,{chart:"\n\tgraph LR;\n    d[Local files];\n    c[Catalog];\n    d-- 2: Test --\x3ed;\n    d-- 3: Publish specifications --\x3ec;\n    c-- 1: Pull specifications --\x3ed;\n"}),"\n",(0,s.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.p,{children:"To complete this workflow, you need:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["An ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/getting-started/installation#registration-and-setup",children:"Estuary account"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/getting-started/installation#get-started-with-the-flow-cli",children:"flowctl installed locally"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["One or more published Flow entities. (To edit unpublished drafts, ",(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/guides/flowctl/edit-draft-from-webapp",children:"use this guide"}),".)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"pull-specifications-locally",children:"Pull specifications locally"}),"\n",(0,s.jsxs)(i.p,{children:["Every ",(0,s.jsx)(i.em,{children:"entity"})," (including active ",(0,s.jsx)(i.em,{children:"tasks"}),", like captures and materializations, and static ",(0,s.jsx)(i.em,{children:"collections"}),")\nhas a globally unique name in the Flow catalog."]}),"\n",(0,s.jsx)(i.p,{children:"For example, a given Data Flow may comprise:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A capture, ",(0,s.jsx)(i.code,{children:"myOrg/marketing/leads"}),", which writes to..."]}),"\n",(0,s.jsxs)(i.li,{children:["Two collections, ",(0,s.jsx)(i.code,{children:"myOrg/marketing/emailList"})," and ",(0,s.jsx)(i.code,{children:"myOrg/marketing/socialMedia"}),", which are materialized as part of..."]}),"\n",(0,s.jsxs)(i.li,{children:["A materialization, ",(0,s.jsx)(i.code,{children:"myOrg/marketing/contacts"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Using these names, you'll identify and pull the relevant specifications for editing."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Authorize flowctl."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Go to the ",(0,s.jsx)(i.a,{href:"https://dashboard.estuary.dev/admin/api",children:"CLI-API tab of the web app"})," and copy your access token."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Run ",(0,s.jsx)(i.code,{children:"flowctl auth token --token <paste-token-here>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Determine which entities you need to pull from the catalog. You can:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Check the web app's ",(0,s.jsx)(i.strong,{children:"Sources"}),", ",(0,s.jsx)(i.strong,{children:"Collections"}),", and ",(0,s.jsx)(i.strong,{children:"Destinations"})," pages.\nAll published entities to which you have access are listed and can be searched."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Run ",(0,s.jsx)(i.code,{children:"flowctl catalog list"}),". This command returns a complete list of entities to which you have access.\nYou can refine by specifying a ",(0,s.jsx)(i.code,{children:"--prefix"})," and filter by entity type:  ",(0,s.jsx)(i.code,{children:"--captures"}),", ",(0,s.jsx)(i.code,{children:"--collections"}),", ",(0,s.jsx)(i.code,{children:"--materializations"}),", or ",(0,s.jsx)(i.code,{children:"--tests"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["From the above example, ",(0,s.jsx)(i.code,{children:"flowctl catalog list --prefix myOrg/marketing --captures --materializations"})," would return\n",(0,s.jsx)(i.code,{children:"myOrg/marketing/leads"})," and ",(0,s.jsx)(i.code,{children:"myOrg/marketing/contacts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Pull the specifications you need by running ",(0,s.jsx)(i.code,{children:"flowctl catalog pull-specs"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Pull one or more specifications by name, for example: ",(0,s.jsx)(i.code,{children:"flowctl catalog pull-specs --name myOrg/marketing/emailList"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Pull a group of specifications by prefix or type filter, for example: ",(0,s.jsx)(i.code,{children:"flowctl catalog pull-specs --prefix myOrg/marketing --collections"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The source files are written to your current working directory."}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsx)(i.li,{children:"Browse the source files."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"flowctl pulls specifications into subdirectories organized by entity name,\nand specifications sharing a catalog prefix are written to the same YAML file."}),"\n",(0,s.jsxs)(i.p,{children:["Regardless of what you pull, there is always a top-level file called ",(0,s.jsx)(i.code,{children:"flow.yaml"})," that ",(0,s.jsx)(i.em,{children:"imports"})," all other nested YAML files.\nThese, in turn, contain the entities' specifications."]}),"\n",(0,s.jsx)(i.h2,{id:"edit-source-files-and-re-publish-specifications",children:"Edit source files and re-publish specifications"}),"\n",(0,s.jsx)(i.p,{children:"Next, you'll complete your edits, test that they were performed correctly, and re-publish everything."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open the YAML files that contain the specification you want to edit."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Make changes. For guidance on how to construct Flow specifications, see the documentation for the task type:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/concepts/captures#specification",children:"Captures"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/concepts/collections#specification",children:"Collections"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/concepts/materialization#specification",children:"Materializations"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/concepts/derivations#specification",children:"Derivations"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/pr-preview/pr-1411/concepts/tests",children:"Tests"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["When you're done, you can test your changes:\n",(0,s.jsx)(i.code,{children:"flowctl catalog test --source flow.yaml"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["You'll almost always use the top-level ",(0,s.jsx)(i.code,{children:"flow.yaml"})," file as the source here because it imports all other Flow specifications\nin your working directory."]}),"\n",(0,s.jsx)(i.p,{children:"Once the test has passed, you can publish your specifications."}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsxs)(i.li,{children:["Re-publish all the specifications you pulled: ",(0,s.jsx)(i.code,{children:"flowctl catalog publish --source flow.yaml"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Again you'll almost always want to use the top-level ",(0,s.jsx)(i.code,{children:"flow.yaml"})," file. If you want to publish only certain specifications,\nyou can provide a path to a different file."]}),"\n",(0,s.jsxs)(i.ol,{start:"5",children:["\n",(0,s.jsxs)(i.li,{children:["Return to the web app or use ",(0,s.jsx)(i.code,{children:"flowctl catalog list"})," to check the status of the entities you just published.\nTheir publication time will be updated to reflect the work you just did."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"If you're not satisfied with the results of your edits, repeat the process iteratively until you are."})]})}function p(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},61114:(e,i,n)=>{n.d(i,{A:()=>r});var s=n(96540),l=n(29880),t=n(74848);l.K.initialize({startOnLoad:!0});const r=e=>{let{chart:i}=e;return(0,s.useEffect)((()=>{l.K.contentLoaded()}),[]),(0,t.jsx)("div",{className:"mermaid",children:i})}}}]);