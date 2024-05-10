"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7272],{34754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),o=t(28453);const r={},s="How to transform data using TypeScript",a={id:"guides/transform_data_using_typescript",title:"How to transform data using TypeScript",description:"This guide will teach you how to write and publish a simple TypeScript derivation.",source:"@site/docs/guides/transform_data_using_typescript.md",sourceDirName:"guides",slug:"/guides/transform_data_using_typescript",permalink:"/pr-preview/pr-1467/guides/transform_data_using_typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/transform_data_using_typescript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema evolution",permalink:"/pr-preview/pr-1467/guides/schema-evolution"},next:{title:"Concepts",permalink:"/pr-preview/pr-1467/concepts/"}},l={},c=[{value:"Introduction<a></a>",id:"introduction",level:2},{value:"Setting up your development environment<a></a>",id:"setting-up-your-development-environment",level:2},{value:"Writing the derivation<a></a>",id:"writing-the-derivation",level:2},{value:"The transformation code<a></a>",id:"the-transformation-code",level:2},{value:"Verify<a></a>",id:"verify",level:2},{value:"Wrapping up<a></a>",id:"wrapping-up",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-transform-data-using-typescript",children:"How to transform data using TypeScript"}),"\n",(0,i.jsx)(n.p,{children:"This guide will teach you how to write and publish a simple TypeScript derivation."}),"\n",(0,i.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,i.jsx)("a",{id:"introduction"})]}),"\n",(0,i.jsx)(n.p,{children:"This tutorial will show you how to implement a stateless transformation using TypeScript. You\u2019ll learn how to implement a flow that filters events coming from the live, real-time Wikipedia API."}),"\n",(0,i.jsxs)(n.h2,{id:"setting-up-your-development-environment",children:["Setting up your development environment",(0,i.jsx)("a",{id:"setting-up-your-development-environment"})]}),"\n",(0,i.jsxs)(n.p,{children:["In order to implement transformations through ",(0,i.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/#derivations",children:"derivations"}),", you\u2019ll need to set up your development environment. You\u2019ll need a text editor and ",(0,i.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/flowctl/",children:"flowtcl"}),", the CLI-tool for Flow installed on your machine. Check out the ",(0,i.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/flowctl/#installation-and-setup",children:"docs page"})," on installation instructions."]}),"\n",(0,i.jsxs)(n.p,{children:["Before continuing, sign in to the Estuary Flow dashboard, make sure you enable access to the Wikipedia demo. Using ",(0,i.jsx)(n.code,{children:"flowtcl"}),", quickly verify you are able to view the demo collections used in this guide."]}),"\n",(0,i.jsxs)(n.p,{children:["Execute the below command to display the documents in the ",(0,i.jsx)(n.code,{children:"demo/wikipedia/recentchange-sampled"})," collection:"]}),"\n",(0,i.jsxs)(n.p,{children:["::note This collection is a 3% sample of the enormous ",(0,i.jsx)(n.code,{children:"demo/wikipedia/recentchange"})," collection which contains millions of documents. Since the purpose of this tutorial is to demonstrate a proof of concept, we avoid publishing a derivation that processes hundreds of gigabytes of data.\n:::"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"flowctl collections read --collection demo/wikipedia/recentchange-sampled --uncommitted\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you see a stream of JSON documents on your terminal, you\u2019re all good - feel free to cancel the process by pressing ",(0,i.jsx)(n.code,{children:"C^C"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Examine a sample JSON that lives in the demo collection, as this is the data you\u2019ll be using as the input for our derivation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0"$schema": "/mediawiki/recentchange/1.0.0",\n\xa0\xa0"_meta": {\n\xa0\xa0\xa0\xa0"file": "recentchange",\n\xa0\xa0\xa0\xa0"offset": 12837,\n\xa0\xa0\xa0\xa0"uuid": "f8f07d87-f5bf-11ee-8401-4fdf95f7b91a"\n\xa0\xa0},\n\xa0\xa0"bot": false,\n\xa0\xa0"comment": "[[:File:Jeton. Ordinaire des guerres - btv1b10405460g (1 of 2).jpg]] added to category",\n\xa0\xa0"id": 2468434138,\n\xa0\xa0"meta": {\n\xa0\xa0\xa0\xa0"domain": "commons.wikimedia.org",\n\xa0\xa0\xa0\xa0"dt": "2024-04-08T15:52:13Z",\n\xa0\xa0\xa0\xa0"id": "d9e8698f-4eac-4262-a451-b7ca247e401c",\n\xa0\xa0\xa0\xa0"offset": 5008568732,\n\xa0\xa0\xa0\xa0"partition": 0,\n\xa0\xa0\xa0\xa0"request_id": "b5372124-63fa-45e1-b35e-86784f1692bc",\n\xa0\xa0\xa0\xa0"stream": "mediawiki.recentchange",\n\xa0\xa0\xa0\xa0"topic": "eqiad.mediawiki.recentchange",\n\xa0\xa0\xa0\xa0"uri": "https://commons.wikimedia.org/wiki/Category:Jetons"\n\xa0\xa0},\n\xa0\xa0"namespace": 14,\n\xa0\xa0"notify_url": "https://commons.wikimedia.org/w/index.php?diff=866807860&oldid=861559382&rcid=2468434138",\n\xa0\xa0"parsedcomment": "<a href=\\"/wiki/File:Jeton._Ordinaire_des_guerres_-_btv1b10405460g_(1_of_2).jpg\\" title=\\"File:Jeton. Ordinaire des guerres - btv1b10405460g (1 of 2).jpg\\">File:Jeton. Ordinaire des guerres - btv1b10405460g (1 of 2).jpg</a> added to category",\n\xa0\xa0"server_name": "commons.wikimedia.org",\n\xa0\xa0"server_script_path": "/w",\n\xa0\xa0"server_url": "https://commons.wikimedia.org",\n\xa0\xa0"timestamp": 1712591533,\n\xa0\xa0"title": "Category:Jetons",\n\xa0\xa0"title_url": "https://commons.wikimedia.org/wiki/Category:Jetons",\n\xa0\xa0"type": "categorize",\n\xa0\xa0"user": "Denghi\xf9Comm",\n\xa0\xa0"wiki": "commonswiki"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["There\u2019s a bunch of fields available, but as mentioned earlier, the scope of the transformation for this tutorial is limited to only one field, which lives nested inside the ",(0,i.jsx)(n.code,{children:"meta"})," object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\xa0...\n\xa0"meta": {\n\xa0\xa0\xa0...\n\xa0\xa0\xa0"domain": "commons.wikimedia.org",\n\xa0\xa0\xa0...\n\xa0\xa0},\n\xa0...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This field is composed of the various wikipedia domains that are used to serve different sites of the organization. This is what you\u2019ll use as the base of the filter derivation. Let's say that the goal is to only keep events that originate from the English-language wikipedia page, which is running under the domain ",(0,i.jsx)(n.code,{children:"en.wikipedia.org"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"writing-the-derivation",children:["Writing the derivation",(0,i.jsx)("a",{id:"writing-the-derivation"})]}),"\n",(0,i.jsxs)(n.p,{children:["Set up your folder structure so you can organize the resources required for the derivation. Create a working directory to follow along, and inside, create a ",(0,i.jsx)(n.code,{children:"flow.yaml"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["Inside your ",(0,i.jsx)(n.code,{children:"flow.yaml "}),"file, add the following contents:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\ncollections:\n\xa0\xa0Dani/derivation-tutorial/recentchange-filtered-typescript:\n\xa0\xa0\xa0\xa0schema: recentchange-filtered.schema.yaml\n\xa0\xa0\xa0\xa0key:\n\xa0\xa0\xa0\xa0\xa0\xa0- /_meta/file\n\xa0\xa0\xa0\xa0\xa0\xa0- /_meta/offset\n\xa0\xa0\xa0\xa0derive:\n\xa0\xa0\xa0\xa0\xa0\xa0using:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0typescript:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0module: recentchange-filtered.ts\n\xa0\xa0\xa0\xa0\xa0\xa0transforms:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- name: filter_values_typescript\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0source: demo/wikipedia/recentchange-sampled\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0shuffle: any\n"})}),"\n",(0,i.jsx)(n.p,{children:"\xa0"}),"\n",(0,i.jsxs)(n.p,{children:["The Flow consists of just one collection, which is what you define here, called ",(0,i.jsx)(n.code,{children:"Dani/derivation-tutorial/recentchange-filtered-typescript"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Let\u2019s go over this in a bit more detail."}),"\n",(0,i.jsxs)(n.p,{children:["First of all, the collection needs a schema. The schema of the incoming data (also called the ",(0,i.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/schemas/#write-and-read-schemas",children:"\u201cwrite\u201d schema"}),") is already defined by the demo, you only have to define the schema of the documents the transformation will output, which is the \u201cread\u201d schema."]}),"\n",(0,i.jsx)(n.p,{children:"Let\u2019s define what the final documents will look like."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'---\n$schema: "http://json-schema.org/draft-07/schema#"\nproperties:\n\xa0\xa0_meta:\n\xa0\xa0\xa0\xa0properties:\n\xa0\xa0\xa0\xa0\xa0\xa0file:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0type: string\n\xa0\xa0\xa0\xa0\xa0\xa0offset:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0type: integer\n\xa0\xa0\xa0\xa0\xa0\xa0uuid:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0type: string\n\xa0\xa0\xa0\xa0required:\n\xa0\xa0\xa0\xa0\xa0\xa0- file\n\xa0\xa0\xa0\xa0\xa0\xa0- offset\n\xa0\xa0\xa0\xa0type: object\n\xa0\xa0domain:\n\xa0\xa0\xa0\xa0type: string\n\xa0\xa0title:\n\xa0\xa0\xa0\xa0type: string\n\xa0\xa0user:\n\xa0\xa0\xa0\xa0type: string\ntype: object\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Save this schema as ",(0,i.jsx)(n.code,{children:"recentchange-filtered.schema.yaml"})," next to your ",(0,i.jsx)(n.code,{children:"flow.yaml"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"As you can see, this schema definition includes a lot less fields than what is available in the incoming documents, this is expected, but if you wish to include more, this is where you would add them first."}),"\n",(0,i.jsx)(n.p,{children:"In the collection yaml definition, the next section defines the key of the documents."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"key:\n\xa0\xa0- /_meta/file\n\xa0\xa0- /_meta/offset\n"})}),"\n",(0,i.jsx)(n.p,{children:"Every Flow collection must declare a key which is used to group its documents. Keys are specified as an array of JSON pointers to document locations. The important detail here is to know that a collection key instructs Flow how documents of a collection are to be reduced, such as while being materialized to an endpoint. For this tutorial, you are just going to reuse the key definition of the base collection."}),"\n",(0,i.jsx)(n.p,{children:"The final section is where you specify that this collection is derived from another collection."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"derive:\n\xa0\xa0using:\n\xa0\xa0\xa0\xa0typescript:\n\xa0\xa0\xa0\xa0\xa0\xa0module: recentchange-filtered.ts\n\xa0\xa0transforms:\n\xa0\xa0\xa0\xa0- name: filter_values_typescript\n\xa0\xa0\xa0\xa0\xa0\xa0source: demo/wikipedia/recentchange-sampled\n\xa0\xa0\xa0\xa0\xa0\xa0shuffle: any\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here you configure the name of the Typescript file that will contain the code for the actual transformation (don\u2019t worry about the file not existing yet!) and give a name to the transformation.\xa0"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"source: demo/wikipedia/recentchange-sampled"})," property lets Flow know that the source collection is the demo collection from mentioned at in the beginning of the tutorial while ",(0,i.jsx)(n.code,{children:"shuffle"})," tells Flow how to colocate documents while processing, which in this case is set to ",(0,i.jsx)(n.code,{children:"any"}),", meaning source documents can be processed by any available compute."]}),"\n",(0,i.jsx)(n.p,{children:"Alright, the configuration required for the derivation is in place, all that\u2019s left is to write some TypeScript!"}),"\n",(0,i.jsxs)(n.h2,{id:"the-transformation-code",children:["The transformation code",(0,i.jsx)("a",{id:"the-transformation-code"})]}),"\n",(0,i.jsxs)(n.p,{children:["The next step is to use ",(0,i.jsx)(n.code,{children:"flowctl"})," to generate TypeScript stubs you can use as aid when writing the transformation code."]}),"\n",(0,i.jsx)(n.p,{children:"Execute the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"flowctl generate --source flow.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If everything went well, you\u2019ll see a bunch of new files that ",(0,i.jsx)(n.code,{children:"flowctl"})," generated for you in your working directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\u279c tree\n.\n\u251c\u2500\u2500 deno.json\n\u251c\u2500\u2500 flow.yaml\n\u251c\u2500\u2500 flow_generated\n\u2502 \xa0 \u2514\u2500\u2500 typescript\n\u2502 \xa0 \xa0 \xa0 \u2514\u2500\u2500 Dani\n\u2502 \xa0 \xa0 \xa0 \xa0 \xa0 \u2514\u2500\u2500 derivation-tutorial\n\u2502 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \u2514\u2500\u2500 recentchange-filtered-typescript.ts\n\u251c\u2500\u2500 recentchange-filtered.schema.yaml\n\u2514\u2500\u2500 recentchange-filtered.ts\n\n5 directories, 5 files\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The folder ",(0,i.jsx)(n.code,{children:"flow_generated"})," along with the ",(0,i.jsx)(n.code,{children:"deno.json"})," file are two things you won\u2019t have to modify during this tutorial. If you take a look at file that ",(0,i.jsx)(n.code,{children:"flowtcl"})," generated under ",(0,i.jsx)(n.code,{children:"flow_generated/typescript/<your_working_directory>/<your_prefix>/recentchange-filtered-typescript.ts"})," you can see the types you are able to use in your transformations."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Generated for published documents of derived collection Dani/derivation-tutorial/recentchange-filtered-typescript.\nexport type Document = {\n\xa0\xa0\xa0\xa0"_meta"?: {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0file: string;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0offset: number;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0uuid?: string;\n\xa0\xa0\xa0\xa0};\n\xa0\xa0\xa0\xa0domain?: string;\n\xa0\xa0\xa0\xa0title?: string;\n\xa0\xa0\xa0\xa0user?: string;\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now, the actual transformation code will live in the following file: ",(0,i.jsx)(n.code,{children:"recentchange-filtered.ts"}),". Take a look at the default contents."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { IDerivation, Document, SourceFilterValuesTypescript } from 'flow/Dani/derivation-tutorial/recentchange-filtered-typescript.ts';\n\n// Implementation for derivation Dani/derivation-tutorial/recentchange-filtered-typescript.\nexport class Derivation extends IDerivation {\n\xa0\xa0\xa0\xa0filterValuesTypescript(_read: { doc: SourceFilterValuesTypescript }): Document[] {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0throw new Error(\"Not implemented\");\n\xa0\xa0\xa0\xa0}\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Helpfully, ",(0,i.jsx)(n.code,{children:"flowctl"})," provides a skeleton function. Update the function body to implement the filter functionality."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'export class Derivation extends IDerivation {\n\xa0\xa0\xa0\xa0filterValuesTypescript(_read: { doc: SourceFilterValuesTypescript }): Document[] {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (_read.doc.meta?.domain == \'en.wikipedia.org\') {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return [{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"_meta": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"file": _read.doc._meta.file,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"offset": _read.doc._meta.offset,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"uuid": _read.doc._meta.uuid,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"domain": _read.doc.meta.domain,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"title": _read.doc.title,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"user": _read.doc.user\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}];\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0else {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return []\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0}\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"As you can see, only documents which contain the \u201cen.wikipedia.org\u201d domain are being returned, in addition to discarding most fields from the incoming record, and just keeping the ones defined in the collection schema."}),"\n",(0,i.jsxs)(n.h2,{id:"verify",children:["Verify",(0,i.jsx)("a",{id:"verify"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"flowctl"})," to quickly verify your derivation before publishing it. Use the ",(0,i.jsx)(n.code,{children:"preview"})," command to get an idea of the resulting collections."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\u279c flowctl preview --source flow.yaml --name Dani/derivation-tutorial/recentchange-filtered-typescript\n\n{"_meta":{"file":"recentchange","offset":13757,"uuid":"079296fe-f5c0-11ee-9401-4fdf95f7b91a"},"domain":"en.wikipedia.org","title":"Adoption","user":"JustBeCool"}\n{"_meta":{"file":"recentchange","offset":13772,"uuid":"082ae4fc-f5c0-11ee-8801-4fdf95f7b91a"},"domain":"en.wikipedia.org","title":"Wikipedia:Teahouse","user":"Subanark"}\n{"_meta":{"file":"recentchange","offset":13774,"uuid":"082ae4fc-f5c0-11ee-9001-4fdf95f7b91a"},"domain":"en.wikipedia.org","title":"Islandia, New York","user":"204.116.28.102"}\n^C\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see, the output format matches the defined schema.\xa0 The last step would be to publish your derivation to Flow, which you can also do using ",(0,i.jsx)(n.code,{children:"flowctl"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Publishing the derivation will initialize the transformation on the live, real-time Wikipedia stream, make sure to delete it after completing the tutorial.",type:"warning"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"flowctl catalog publish --source flow.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"After successfully publishing your derivation, head over to the Collections page on the Web UI and you will be able to see your derivation in action!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://storage.googleapis.com/estuary-marketing-strapi-uploads/uploads//Screenshot_2024_05_09_at_14_06_03_90f8bb7c34/Screenshot_2024_05_09_at_14_06_03_90f8bb7c34.png",alt:"Verify Derivation on Web UI"})}),"\n",(0,i.jsxs)(n.h2,{id:"wrapping-up",children:["Wrapping up",(0,i.jsx)("a",{id:"wrapping-up"})]}),"\n",(0,i.jsx)(n.p,{children:"In this guide you learned how to write your first stateless TypeScript derivation to filter data in a collection."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);