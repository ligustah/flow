"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8113],{92771:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=i(74848),t=i(28453),l=i(61114);const s={sidebar_position:7},c="flowctl",r={id:"concepts/flowctl",title:"flowctl",description:"There are two ways to work with Flow: through the web app, and using the flowctl command-line interface.",source:"@site/docs/concepts/flowctl.md",sourceDirName:"concepts",slug:"/concepts/flowctl",permalink:"/pr-preview/pr-1450/concepts/flowctl",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/flowctl.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Web application",permalink:"/pr-preview/pr-1450/concepts/web-app"},next:{title:"Imports",permalink:"/pr-preview/pr-1450/concepts/import"}},a={},d=[{value:"Installation and setup",id:"installation-and-setup",level:2},{value:"User guides",id:"user-guides",level:2},{value:"flowctl subcommands",id:"flowctl-subcommands",level:2},{value:"Editing Data Flows with flowctl",id:"editing-data-flows-with-flowctl",level:2},{value:"Reconciling specifications in local drafts",id:"reconciling-specifications-in-local-drafts",level:3},{value:"Development directories",id:"development-directories",level:2},{value:"TypeScript code generation",id:"typescript-code-generation",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"flowctl",children:"flowctl"}),"\n",(0,o.jsxs)(n.p,{children:["There are two ways to work with Flow: through the web app, and using the flowctl command-line interface.\nflowctl gives you more direct control over the files and directories that comprise your Data Flows.\nYou can work with any catalog to which you have ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/reference/authentication",children:"access"}),", regardless of whether it was created from the command line or in the web app."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also authorize Flow users and roles and generate TypeScript modules to write custom transformations for your ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/derivations",children:"derivations"})," \u2014 workflows that aren't yet available in the web app."]}),"\n",(0,o.jsx)(n.p,{children:"flowctl is the only Flow binary that you need to work with,\nso distribution and upgrades are all simple."}),"\n",(0,o.jsx)(n.h2,{id:"installation-and-setup",children:"Installation and setup"}),"\n",(0,o.jsxs)(n.p,{children:["flowctl binaries for MacOS and Linux are available. Fow Windows, ",(0,o.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/flowctl/",children:"install Windows Subsystem for Linux (WSL)"})," to run Linux on Windows, or use a remote development environment."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy and paste the appropriate script below into your terminal. This will download flowctl, make it executable, and add it to your ",(0,o.jsx)(n.code,{children:"PATH"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"For Linux:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-x86_64-linux' && sudo chmod +x /usr/local/bin/flowctl\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"For Mac:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-multiarch-macos' && sudo chmod +x /usr/local/bin/flowctl\n"})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, Mac users can install with Homebrew:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"brew tap estuary/flowctl\nbrew install flowctl\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can also find the source files on GitHub ",(0,o.jsx)(n.a,{href:"https://go.estuary.dev/flowctl",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To connect to your Flow account and start a session, ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/reference/authentication#authenticating-flow-using-the-cli",children:"use an authentication token"})," from the web app."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"user-guides",children:"User guides"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/guides/flowctl/",children:"View guides for common flowctl workflows"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"flowctl-subcommands",children:"flowctl subcommands"}),"\n",(0,o.jsx)(n.p,{children:"flowctl includes several top-level subcommands representing different functional areas. Each of these include multiple nested subcommands.\nImportant top-level flowctl subcommands are described below."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"auth"})," allows you to authenticate your development session in your local development environment.\nIt's also how you provision Flow roles and users. Learn more about ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/reference/authentication",children:"authentication"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"catalog"})," allows you to work with your organization's current active catalog entities. You can investigate the current Data Flows,\npull specifications for local editing, test and publish specifications that you wrote or edited locally,\nand delete entities from the catalog."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"collections"})," allows you to work with your Flow collections. You can read the data from the collection and output it to stdout, or list the ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/advanced/journals",children:"journals"})," or journal fragments that comprise the collection. ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/collections#using-the-flowctl-cli",children:"Learn more about reading collections with flowctl"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"draft"})," provides an alternative method for many of the actions you'd normally perform with ",(0,o.jsx)(n.code,{children:"catalog"}),", but common workflows have more steps."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can access full documentation of all flowctl subcommands from the command line by passing the ",(0,o.jsx)(n.code,{children:"--help"})," or ",(0,o.jsx)(n.code,{children:"-h"})," flag, for example:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"flowctl --help"})," lists top-level flowctl subcommands."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"flowctl catalog --help"})," lists subcommands of ",(0,o.jsx)(n.code,{children:"catalog"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"editing-data-flows-with-flowctl",children:"Editing Data Flows with flowctl"}),"\n",(0,o.jsxs)(n.p,{children:["flowctl allows you to work locally on the specification files that define your Data Flows.\nYou'll often need to move these specifications back and forth between your local environment and the ",(0,o.jsx)(n.strong,{children:"catalog"}),"\nof published entities."]}),"\n",(0,o.jsx)(n.p,{children:"The basic steps of this workflow are listed below, along with a diagram of the subcommands you'd use to accomplish them.\nKeep in mind that there's no single, correct way to work with flowctl,\nbut we recommend this method to get started."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["List all the active specifications in the catalog, which you can then pull into your local environment.\nYou can filter the output by ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/catalogs#namespace",children:"prefix"})," or entity type.\nFor example, ",(0,o.jsx)(n.code,{children:"flowctl catalog list --prefix acmeCo/sales/ --collections"})," only lists collections under the\n",(0,o.jsx)(n.code,{children:"acmeCo/sales/"})," prefix."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Pull a group of active specifications directly, resulting in local source files. You can refine results by prefix or entity type as described above (1)."}),"\n",(0,o.jsxs)(n.p,{children:["Note that if there are already files in your working directory, flowctl must reconcile them with the newly pulled specification.\n",(0,o.jsx)(n.a,{href:"#reconciling-specifications-in-local-drafts",children:"Learn more about your options"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Make edits locally."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Test local specifications (2)."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Publish local specifications to the catalog (3)."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(l.A,{chart:"\n\tgraph LR;\n    d[Local environment];\n    c[Active catalog];\n    d-- 2: flowctl catalog test --\x3ed;\n    d-- 3: flowctl catalog publish --\x3ec;\n    c-- 1: flowctl catalog pull-specs --\x3ed;\n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/guides/flowctl/edit-specification-locally",children:"View the step-by-step guide."})}),"\n",(0,o.jsx)(n.h3,{id:"reconciling-specifications-in-local-drafts",children:"Reconciling specifications in local drafts"}),"\n",(0,o.jsxs)(n.p,{children:["When you pull specifications to your working directory directly using ",(0,o.jsx)(n.code,{children:"flowctl catalog pull-specs"}),",\nthere may be conflicts between the existing files in that directory and the specifications you pull."]}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"flowctl catalog pull-specs"})," will abort if it detects an existing file with the same name as a specification\nit is attempting to pull. You can change this behavior with the ",(0,o.jsx)(n.code,{children:"--existing"})," flag:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"--existing=overwrite"})," pulls the new versions of conflicting files in place of the old versions."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"--existing=keep"})," keeps the old versions of conflicting files."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"--existing=merge-specs"})," performs a simple merge of new and old versions of conflicting files.\nFor example, if an existing ",(0,o.jsx)(n.code,{children:"flow.yaml"})," file references collections a and b,\nand the new version of ",(0,o.jsx)(n.code,{children:"flow.yaml"})," references collections a and c,\nthe merged version will reference collections a, b, and c."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"development-directories",children:"Development directories"}),"\n",(0,o.jsxs)(n.p,{children:["Flow specifications and other files are written to your working directory when you run ",(0,o.jsx)(n.code,{children:"flowctl draft develop"})," or ",(0,o.jsx)(n.code,{children:"flowctl catalog pull-specs"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"They typically include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"flow.yaml"}),":\nThe main specification file that imports all other Flow specification files created in a single operation.\nAs part of local development, you may add new specifications that you create as imports."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"flow_generated/"}),":\nDirectory of generated files, including TypeScript classes and interfaces.\nSee ",(0,o.jsx)(n.a,{href:"#typescript-code-generation",children:"TypeScript code generation"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<prefix-name>/"}),":\nDirectory of specifications that you pulled. Its name corresponds to your catalog prefix. Its contents will vary, but it may contain various YAML files and subdirectories."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"package.json"})," and ",(0,o.jsx)(n.code,{children:"package-lock.json"}),":\nFiles used by ",(0,o.jsx)(n.code,{children:"npm"})," to manage dependencies and your Data Flow's associated JavaScript project.\nYou may customize ",(0,o.jsx)(n.code,{children:"package.json"}),",\nbut its ",(0,o.jsx)(n.code,{children:"dependencies"})," stanza will be overwritten by the\n",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/derivations#npm-dependencies",children:"npmDependencies"}),"\nof your Flow specification source files, if any exist."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When you run commands like ",(0,o.jsx)(n.code,{children:"flowctl catalog publish"})," or ",(0,o.jsx)(n.code,{children:"flowctl draft author"}),", you can use the ",(0,o.jsx)(n.code,{children:"--source-dir"})," flag\nto push specifications from a directory other than your current working directory,\nfor example, ",(0,o.jsx)(n.code,{children:"flowctl draft author --source-dir ../AcmeCoNew/marketing"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"typescript-code-generation",children:"TypeScript code generation"}),"\n",(0,o.jsxs)(n.p,{children:["TypeScript files are used in the Flow catalog both as part of the automatic build process,\nand to define lambdas functions for ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/derivations",children:"derivations"}),", which requires your input."]}),"\n",(0,o.jsxs)(n.p,{children:["As part of the Data Flow build process, Flow translates your\n",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/schemas",children:"schemas"}),"\ninto equivalent TypeScript types on your behalf.\nThese definitions live within ",(0,o.jsx)(n.code,{children:"flow_generated/"})," in your Data Flow's build directory ,\nand are frequently over-written by invocations of ",(0,o.jsx)(n.code,{children:"flowctl"}),".\nFiles in this subdirectory are human-readable and stable.\nYou may want to commit them as part of a GitOps-managed project, but this isn't required."]}),"\n",(0,o.jsxs)(n.p,{children:["Whenever you define a derivation that uses a ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/derivations#lambdas",children:"lambda"}),",\nyou must define the lambda in an accompanying TypeScript module, and reference that module\nin the derivation's definition. To facilitate this,\nyou can generate a stub of the module using ",(0,o.jsx)(n.code,{children:"flowctl generate"}),"\nand simply write the function bodies.\n",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1450/concepts/derivations#creating-typescript-modules",children:"Learn more about this workflow."})]}),"\n",(0,o.jsxs)(n.p,{children:["If a TypeScript module exists, ",(0,o.jsx)(n.code,{children:"flowctl"})," will never overwrite it,\neven if you update or expand your specifications such that the required interfaces have changed."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},61114:(e,n,i)=>{i.d(n,{A:()=>s});var o=i(96540),t=i(29880),l=i(74848);t.K.initialize({startOnLoad:!0});const s=e=>{let{chart:n}=e;return(0,o.useEffect)((()=>{t.K.contentLoaded()}),[]),(0,l.jsx)("div",{className:"mermaid",children:n})}}}]);