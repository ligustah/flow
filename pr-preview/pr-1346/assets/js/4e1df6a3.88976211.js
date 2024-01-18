(self.webpackChunksite=self.webpackChunksite||[]).push([[7723],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),o=a(2764);o.Z.initialize({startOnLoad:!0});const i=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{o.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},1616:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),i=a(1504);const l={sidebar_position:7},r="flowctl",s={unversionedId:"concepts/flowctl",id:"concepts/flowctl",title:"flowctl",description:"There are two ways to work with Flow: through the web app, and using the flowctl command-line interface.",source:"@site/docs/concepts/flowctl.md",sourceDirName:"concepts",slug:"/concepts/flowctl",permalink:"/pr-preview/pr-1346/concepts/flowctl",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/flowctl.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Web application",permalink:"/pr-preview/pr-1346/concepts/web-app"},next:{title:"Imports",permalink:"/pr-preview/pr-1346/concepts/import"}},p={},c=[{value:"Installation and setup",id:"installation-and-setup",level:2},{value:"User guides",id:"user-guides",level:2},{value:"flowctl subcommands",id:"flowctl-subcommands",level:2},{value:"Editing Data Flows with flowctl",id:"editing-data-flows-with-flowctl",level:2},{value:"Reconciling specifications in local drafts",id:"reconciling-specifications-in-local-drafts",level:3},{value:"Development directories",id:"development-directories",level:2},{value:"TypeScript code generation",id:"typescript-code-generation",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flowctl"},"flowctl"),(0,o.kt)("p",null,"There are two ways to work with Flow: through the web app, and using the flowctl command-line interface.\nflowctl gives you more direct control over the files and directories that comprise your Data Flows.\nYou can work with any catalog to which you have ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/reference/authentication"},"access"),", regardless of whether it was created from the command line or in the web app."),(0,o.kt)("p",null,"You can also authorize Flow users and roles and generate TypeScript modules to write custom transformations for your ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/derivations"},"derivations")," \u2014 workflows that aren't yet available in the web app."),(0,o.kt)("p",null,"flowctl is the only Flow binary that you need to work with,\nso distribution and upgrades are all simple."),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and setup"),(0,o.kt)("p",null,"flowctl binaries for MacOS and Linux are available. Fow Windows, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/flowctl/"},"install Windows Subsystem for Linux (WSL)")," to run Linux on Windows, or use a remote development environment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy and paste the appropriate script below into your terminal. This will download flowctl, make it executable, and add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Linux:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-x86_64-linux' && sudo chmod +x /usr/local/bin/flowctl\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Mac:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-multiarch-macos' && sudo chmod +x /usr/local/bin/flowctl\n")),(0,o.kt)("p",{parentName:"li"},"Alternatively, Mac users can install with Homebrew:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"brew tap estuary/flowctl\nbrew install flowctl\n")),(0,o.kt)("p",{parentName:"li"},"You can also find the source files on GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://go.estuary.dev/flowctl"},"here"),"."))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"To connect to your Flow account and start a session, ",(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-1346/reference/authentication#authenticating-flow-using-the-cli"},"use an authentication token")," from the web app.")),(0,o.kt)("h2",{id:"user-guides"},"User guides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/guides/flowctl/"},"View guides for common flowctl workflows"),"."),(0,o.kt)("h2",{id:"flowctl-subcommands"},"flowctl subcommands"),(0,o.kt)("p",null,"flowctl includes several top-level subcommands representing different functional areas. Each of these include multiple nested subcommands.\nImportant top-level flowctl subcommands are described below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"auth")," allows you to authenticate your development session in your local development environment.\nIt's also how you provision Flow roles and users. Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/reference/authentication"},"authentication"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"catalog")," allows you to work with your organization's current active catalog entities. You can investigate the current Data Flows,\npull specifications for local editing, test and publish specifications that you wrote or edited locally,\nand delete entities from the catalog.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"collections")," allows you to work with your Flow collections. You can read the data from the collection and output it to stdout, or list the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/advanced/journals"},"journals")," or journal fragments that comprise the collection. ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/collections#using-the-flowctl-cli"},"Learn more about reading collections with flowctl"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"draft")," provides an alternative method for many of the actions you'd normally perform with ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog"),", but common workflows have more steps."))),(0,o.kt)("p",null,"You can access full documentation of all flowctl subcommands from the command line by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," flag, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"flowctl --help")," lists top-level flowctl subcommands.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog --help")," lists subcommands of ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog"),"."))),(0,o.kt)("h2",{id:"editing-data-flows-with-flowctl"},"Editing Data Flows with flowctl"),(0,o.kt)("p",null,"flowctl allows you to work locally on the specification files that define your Data Flows.\nYou'll often need to move these specifications back and forth between your local environment and the ",(0,o.kt)("strong",{parentName:"p"},"catalog"),"\nof published entities."),(0,o.kt)("p",null,"The basic steps of this workflow are listed below, along with a diagram of the subcommands you'd use to accomplish them.\nKeep in mind that there's no single, correct way to work with flowctl,\nbut we recommend this method to get started."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"List all the active specifications in the catalog, which you can then pull into your local environment.\nYou can filter the output by ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/catalogs#namespace"},"prefix")," or entity type.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog list --prefix acmeCo/sales/ --collections")," only lists collections under the\n",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/sales/")," prefix.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pull a group of active specifications directly, resulting in local source files. You can refine results by prefix or entity type as described above (1)."),(0,o.kt)("p",{parentName:"li"},"Note that if there are already files in your working directory, flowctl must reconcile them with the newly pulled specification.\n",(0,o.kt)("a",{parentName:"p",href:"#reconciling-specifications-in-local-drafts"},"Learn more about your options"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make edits locally.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Test local specifications (2).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Publish local specifications to the catalog (3)."))),(0,o.kt)(i.Z,{chart:"\n\tgraph LR;\n    d[Local environment];\n    c[Active catalog];\n    d-- 2: flowctl catalog test --\x3ed;\n    d-- 3: flowctl catalog publish --\x3ec;\n    c-- 1: flowctl catalog pull-specs --\x3ed;\n",mdxType:"Mermaid"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/guides/flowctl/edit-specification-locally"},"View the step-by-step guide.")),(0,o.kt)("h3",{id:"reconciling-specifications-in-local-drafts"},"Reconciling specifications in local drafts"),(0,o.kt)("p",null,"When you pull specifications to your working directory directly using ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog pull-specs"),",\nthere may be conflicts between the existing files in that directory and the specifications you pull."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog pull-specs")," will abort if it detects an existing file with the same name as a specification\nit is attempting to pull. You can change this behavior with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--existing")," flag:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--existing=overwrite")," pulls the new versions of conflicting files in place of the old versions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--existing=keep")," keeps the old versions of conflicting files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--existing=merge-specs")," performs a simple merge of new and old versions of conflicting files.\nFor example, if an existing ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file references collections a and b,\nand the new version of ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," references collections a and c,\nthe merged version will reference collections a, b, and c."))),(0,o.kt)("h2",{id:"development-directories"},"Development directories"),(0,o.kt)("p",null,"Flow specifications and other files are written to your working directory when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl draft develop")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog pull-specs"),"."),(0,o.kt)("p",null,"They typically include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml"),":\nThe main specification file that imports all other Flow specification files created in a single operation.\nAs part of local development, you may add new specifications that you create as imports.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"flow_generated/"),":\nDirectory of generated files, including TypeScript classes and interfaces.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#typescript-code-generation"},"TypeScript code generation"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<prefix-name>/"),":\nDirectory of specifications that you pulled. Its name corresponds to your catalog prefix. Its contents will vary, but it may contain various YAML files and subdirectories.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json"),":\nFiles used by ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," to manage dependencies and your Data Flow's associated JavaScript project.\nYou may customize ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),",\nbut its ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," stanza will be overwritten by the\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/derivations#npm-dependencies"},"npmDependencies"),"\nof your Flow specification source files, if any exist."))),(0,o.kt)("p",null,"When you run commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog publish")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl draft author"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--source-dir")," flag\nto push specifications from a directory other than your current working directory,\nfor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl draft author --source-dir ../AcmeCoNew/marketing"),"."),(0,o.kt)("h3",{id:"typescript-code-generation"},"TypeScript code generation"),(0,o.kt)("p",null,"TypeScript files are used in the Flow catalog both as part of the automatic build process,\nand to define lambdas functions for ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/derivations"},"derivations"),", which requires your input."),(0,o.kt)("p",null,"As part of the Data Flow build process, Flow translates your\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/schemas"},"schemas"),"\ninto equivalent TypeScript types on your behalf.\nThese definitions live within ",(0,o.kt)("inlineCode",{parentName:"p"},"flow_generated/")," in your Data Flow's build directory ,\nand are frequently over-written by invocations of ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl"),".\nFiles in this subdirectory are human-readable and stable.\nYou may want to commit them as part of a GitOps-managed project, but this isn't required."),(0,o.kt)("p",null,"Whenever you define a derivation that uses a ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/derivations#lambdas"},"lambda"),",\nyou must define the lambda in an accompanying TypeScript module, and reference that module\nin the derivation's definition. To facilitate this,\nyou can generate a stub of the module using ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl generate"),"\nand simply write the function bodies.\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1346/concepts/derivations#creating-typescript-modules"},"Learn more about this workflow.")),(0,o.kt)("p",null,"If a TypeScript module exists, ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl")," will never overwrite it,\neven if you update or expand your specifications such that the required interfaces have changed."))}m.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=1748}}]);