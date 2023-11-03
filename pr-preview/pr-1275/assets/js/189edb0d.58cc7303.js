"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},i="Create a derivation with flowctl",l={unversionedId:"guides/flowctl/create-derivation",id:"guides/flowctl/create-derivation",title:"Create a derivation with flowctl",description:"Once you're familiar with creating a basic Data Flow, you can take things a step further",source:"@site/docs/guides/flowctl/create-derivation.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/create-derivation",permalink:"/pr-preview/pr-1275/guides/flowctl/create-derivation",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/create-derivation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edit a draft created in the web app",permalink:"/pr-preview/pr-1275/guides/flowctl/edit-draft-from-webapp"},next:{title:"Troubleshoot a task with flowctl",permalink:"/pr-preview/pr-1275/guides/flowctl/troubleshoot-task"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get started with GitPod",id:"get-started-with-gitpod",level:2},{value:"Add a SQL derivation in GitPod",id:"add-a-sql-derivation-in-gitpod",level:2},{value:"Add a TypeScript derivation in GitPod",id:"add-a-typescript-derivation-in-gitpod",level:2},{value:"Create a derivation locally",id:"create-a-derivation-locally",level:2},{value:"Updating an existing derivation",id:"updating-an-existing-derivation",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-derivation-with-flowctl"},"Create a derivation with flowctl"),(0,o.kt)("p",null,"Once you're familiar with creating a basic ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/#essential-concepts"},"Data Flow"),", you can take things a step further\nand transform your data with ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/derivations"},"derivations"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"derivation")," is a kind of Flow collection that results from the transformation of one or more other collections.\nThis transformed stream of data keeps the order of the source data intact,\nand can then be ",(0,o.kt)("strong",{parentName:"p"},"materialized")," to an outside system or further transformed with another derivation.\nWhen you master derivations, you unlock the full flexibility and power of Flow."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Flow account and access to the web app.\nIf you don't have an account yet, ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev"},"go to the web app")," to register for free.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An existing Flow ",(0,o.kt)("strong",{parentName:"p"},"collection"),". Typically, you create this through a ",(0,o.kt)("strong",{parentName:"p"},"capture")," in the Flow web application.\nIf you need help, see the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/guides/create-dataflow"},"guide to create a Data Flow"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A development environment to work with flowctl. Choose between:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.gitpod.io/"},"GitPod"),", the cloud development environment integrated with Flow.\nGitPod comes ready for derivation writing, with stubbed out files and flowctl installed. You'll need a GitLab, GitHub, or BitBucket account to log in.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your local development environment. ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/getting-started/installation#get-started-with-the-flow-cli"},"Install flowctl locally")))))),(0,o.kt)("h2",{id:"get-started-with-gitpod"},"Get started with GitPod"),(0,o.kt)("p",null,"You'll write your derivation using GitPod, a cloud development environment integrated in the Flow web app."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/collections"},"Collections")," page in Flow.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"New Transformation")," button."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Derive A New Collection")," pop-up window appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Available Collections")," dropdown, select the collection you want to use as the source."),(0,o.kt)("p",{parentName:"li"},"For example, if your organization is ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo"),", you might choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/resources/anvils")," collection.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the transformation language to either ",(0,o.kt)("strong",{parentName:"p"},"SQL")," and ",(0,o.kt)("strong",{parentName:"p"},"TypeScript"),"."),(0,o.kt)("p",{parentName:"li"},"SQL transformations can be a more approachable place to start if you're new to derivations.\nTypeScript transformations can provide more resiliency against failures through static type checking.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give your derivation a name. From the dropdown, choose the name of your catalog prefix and append a unique name, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/resources/anvil-status."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Proceed to GitPod")," to create your development environment. Sign in with one of the available account types.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"New Workspace")," screen, keep the ",(0,o.kt)("strong",{parentName:"p"},"Context URL")," option selected and click ",(0,o.kt)("strong",{parentName:"p"},"Continue.")),(0,o.kt)("p",{parentName:"li"},"A GitPod development environment opens.\nA stubbed-out derivation with a transformation has already been created for you in the language you chose. Next, you'll locate and open the source files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Each slash-delimited prefix of your derivation name has become a folder. Open the nested folders to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file with the derivation specification."),(0,o.kt)("p",{parentName:"li"},"Following the example above, you'd open the folders called ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," to find the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file."),(0,o.kt)("p",{parentName:"li"},"The file contains a placeholder collection specification and schema for the derivation."),(0,o.kt)("p",{parentName:"li"},"In the same folder, you'll also find supplementary TypeScript or SQL files you'll need for your transformation."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#add-a-sql-derivation-in-gitpod"},"Continue with SQL")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#add-a-typescript-derivation-in-gitpod"},"Continue with TypeScript")),(0,o.kt)("admonition",{title:"Authentication",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When you first connect to GitPod, you will have already authenticated Flow, but if you leave GitPod opened for too long, you may have to reauthenticate Flow. To do this:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/api"},"CLI-API tab of the web app")," and copy your access token.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl auth token --token <paste-token-here>")," in the GitPod terminal.")))),(0,o.kt)("h2",{id:"add-a-sql-derivation-in-gitpod"},"Add a SQL derivation in GitPod"),(0,o.kt)("p",null,"If you chose ",(0,o.kt)("strong",{parentName:"p"},"SQL")," as your transformation language, follow these steps."),(0,o.kt)("p",null,"Along with the derivation's ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," you found in the previous steps, there are two other files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"lambda")," file. This is where you'll write your first SQL transformation.\nIts name follows the pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"derivation-name.lambda.source-collection-name.sql"),".\nUsing the example above, it'd be called ",(0,o.kt)("inlineCode",{parentName:"p"},"anvil-status.lambda.anvils.sql"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"migrations")," file. ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/derivations#migrations"},"Migrations")," allow you to leverage other features of the sqlite database that backs your derivation by creating tables, indices, views, and more.\nIts name follows the pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"derivation-name.migration.0.sql"),".\nUsing the example above, it'd be called ",(0,o.kt)("inlineCode",{parentName:"p"},"anvil-status.migration.0.sql"),"."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file for your derivation. It looks something like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/resources/anvil-status:\n    schema:\n      properties:\n        your_key:\n          type: string\n        required:\n          - your_key\n      type: object\n    key:\n      - /your_key\n    derive:\n      using:\n        sqlite:\n          migrations:\n            - anvil-status.migration.0.sql\n      transforms:\n        - name: anvils\n          source: acmeCo/resources/anvils\n          shuffle: any\n          lambda: anvil-status.lambda.anvils.sql\n")),(0,o.kt)("p",{parentName:"li"},"Note the stubbed out schema and key.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/schemas"},"schema")," you'd like your derivation to conform to and specify its ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/collections#keys"},"collection key"),". Keep in mind:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The source collection's schema.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The transformation required to get from the source schema to the new schema.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give the transform a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," (by default, it's the name of the source collection).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the lambda file, write your SQL transformation."))),(0,o.kt)("admonition",{title:"Tip",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For help writing your derivation, start with these examples:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-1275/getting-started/tutorials/continuous-materialized-view"},"Continuous materialized view tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-1275/concepts/derivations#tutorial"},"Acme Bank examples"))),(0,o.kt)("p",{parentName:"admonition"},"The main ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/derivations"},"derivations page")," includes many other examples and in-depth explanations of how derivations work.")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If necessary, open the migration file and write your migration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Preview the derivation locally."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl preview --source flow.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the preview output appears as expected, ",(0,o.kt)("strong",{parentName:"p"},"publish")," the derivation."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog publish --source flow.yaml\n")))),(0,o.kt)("p",null,"The derivation you created is now live and ready for further use.\nYou can access it from the web application and ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/guides/create-dataflow#create-a-materialization"},"materialize it to a destination"),",\njust as you would any other Flow collection."),(0,o.kt)("h2",{id:"add-a-typescript-derivation-in-gitpod"},"Add a TypeScript derivation in GitPod"),(0,o.kt)("p",null,"If you chose ",(0,o.kt)("strong",{parentName:"p"},"TypeScript")," as your transformation language, follow these steps."),(0,o.kt)("p",null,"Along with the derivation's ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," you found in the previous steps, there's another file for the TypeScript transformation.\nIt follows the naming convention ",(0,o.kt)("inlineCode",{parentName:"p"},"derivation-name.ts"),".\nUsing the example above, it'd be called ",(0,o.kt)("inlineCode",{parentName:"p"},"anvil-status.ts"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file for your derivation. It looks something like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/resources/anvil-status:\n    schema:\n      properties:\n        your_key:\n          type: string\n        required:\n          - your_key\n      type: object\n    key:\n      - /your_key\n    derive:\n      using:\n        typescript:\n          module: anvil-status.ts\n      transforms:\n        - name: anvils\n        source: acmeCo/resources/anvils\n        shuffle: any\n")),(0,o.kt)("p",{parentName:"li"},"Note the stubbed out schema and key.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/schemas"},"schema")," you'd like your derivation to conform to and specify the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/collections#keys"},"collection key"),". Keep in mind:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The source collection's schema.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The transformation required to get from the source schema to the new schema.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give the transform a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," (by default, it's the name of the source collection).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the TypeScript file, write your transformation."))),(0,o.kt)("admonition",{title:"Tip",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For help writing a TypeScript derivation, start with ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/derivations#current-account-balances"},"this example"),"."),(0,o.kt)("p",{parentName:"admonition"},"The main ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/derivations"},"derivations page")," includes many other examples and in-depth explanations of how derivations work.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Preview the derivation locally."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl preview --source flow.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the preview output appears how you'd expect, ",(0,o.kt)("strong",{parentName:"p"},"publish")," the derivation."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog publish --source flow.yaml\n")))),(0,o.kt)("p",null,"The derivation you created is now live and ready for further use.\nYou can access it from the web application and ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/guides/create-dataflow#create-a-materialization"},"materialize it to a destination"),",\njust as you would any other Flow collection."),(0,o.kt)("h2",{id:"create-a-derivation-locally"},"Create a derivation locally"),(0,o.kt)("p",null,"Creating a derivation locally is largely the same as using GitPod, but has some extra steps. Those extra steps are explained here, but you'll find more useful context in the sections above."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Authorize flowctl."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/api"},"CLI-API tab of the web app")," and copy your access token.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl auth token --token <paste-token-here>")," in your local environment.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the source collection for your derivation."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the web app's ",(0,o.kt)("strong",{parentName:"p"},"Collections"),".\nAll published entities to which you have access are listed and can be searched.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog list --collections"),". This command returns a complete list of collections to which you have access.\nYou can refine by specifying a ",(0,o.kt)("inlineCode",{parentName:"p"},"--prefix"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pull the source collection locally using the full collection name."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog pull-specs --name acmeCo/resources/anvils\n")),(0,o.kt)("p",{parentName:"li"},"The source files are written to your current working directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Each slash-delimited prefix of your collection name has become a folder. Open the nested folders to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file with the collection specification."),(0,o.kt)("p",{parentName:"li"},"Following the example above, you'd open the folders called ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," to find the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file."),(0,o.kt)("p",{parentName:"li"},"The file contains the source collection specification and schema.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the derivation as a second collection in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/schemas"},"schema")," you'd like your derivation to conform to and specify the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/concepts/collections#keys"},"collection key"),". Reference the source collection's schema, and keep in mind the transformation required to get from the source schema to the new schema.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"derive")," stanza. See examples for ",(0,o.kt)("a",{parentName:"p",href:"#add-a-sql-derivation-in-gitpod"},"SQL")," and ",(0,o.kt)("a",{parentName:"p",href:"#add-a-sql-derivation-in-gitpod"},"TypeScript")," above. Give your transform a a unique name.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stub out the SQL or TypeScript files for your transform."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl generate --source flow.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the generated file, likely in the same subdirectory as the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file you've been working in.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write your transformation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Preview the derivation locally."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl preview --source flow.yaml\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"If the preview output appears how you'd expect, ",(0,o.kt)("strong",{parentName:"li"},"publish")," the derivation.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog publish --source flow.yaml\n")),(0,o.kt)("p",null,"The derivation you created is now live and ready for further use.\nYou can access it from the web application and ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1275/guides/create-dataflow#create-a-materialization"},"materialize it to a destination"),",\njust as you would any other Flow collection."),(0,o.kt)("h2",{id:"updating-an-existing-derivation"},"Updating an existing derivation"),(0,o.kt)("p",null,"Derivations are applied on a go-forward basis only."),(0,o.kt)("p",null,"If you would like to make an update to an existing derivation (for example, adding columns to the derived collection), you can add a new transform by changing the name of your existing transform to a new name, and at the same time updating your lambda or TypeScript module."),(0,o.kt)("p",null,"From the Flow's perspective, this is equivalent to deleting the old transform and adding a new one. This will backfill over the source collection again with the updated SQL statement."))}d.isMDXComponent=!0}}]);