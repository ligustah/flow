"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4480],{73248:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(74848),r=s(28453);const i={},o="Amazon S3 to Snowflake",l={id:"guides/system-specific-dataflows/s3-to-snowflake",title:"Amazon S3 to Snowflake",description:"This guide walks you through the process of creating an",source:"@site/docs/guides/system-specific-dataflows/s3-to-snowflake.md",sourceDirName:"guides/system-specific-dataflows",slug:"/guides/system-specific-dataflows/s3-to-snowflake",permalink:"/pr-preview/pr-1453/guides/system-specific-dataflows/s3-to-snowflake",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/system-specific-dataflows/s3-to-snowflake.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Firestore to Snowflake",permalink:"/pr-preview/pr-1453/guides/system-specific-dataflows/firestore-to-dwh"},next:{title:"Edit Data Flows in the web app",permalink:"/pr-preview/pr-1453/guides/edit-data-flows"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Capture from S3",id:"capture-from-s3",level:2},{value:"Materialize to Snowflake",id:"materialize-to-snowflake",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"amazon-s3-to-snowflake",children:"Amazon S3 to Snowflake"}),"\n",(0,t.jsx)(n.p,{children:"This guide walks you through the process of creating an\nend-to-end real-time Data Flow from Amazon S3 to Snowflake using Estuary Flow."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"You'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(Recommended) understanding of the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/#essential-concepts",children:"basic Flow concepts"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Access to the ",(0,t.jsx)(n.a,{href:"http://dashboard.estuary.dev",children:(0,t.jsx)(n.strong,{children:"Flow web application"})})," through an Estuary account.\nIf you don't have one, visit the web app to register for free."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"S3 bucket"})," that contains the data you'd like to move to Snowflake."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For public buckets, verify that the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html#access-control-resources-manage-permissions-basics",children:"access policy"})," allows anonymous reads."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For buckets accessed by a user account, you'll need the AWS ",(0,t.jsx)(n.strong,{children:"access key"})," and ",(0,t.jsx)(n.strong,{children:"secret access key"})," for the user.\nSee the ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help finding these credentials."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A Snowflake account with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A target ",(0,t.jsx)(n.strong,{children:"database"}),", ",(0,t.jsx)(n.strong,{children:"schema"}),", and virtual ",(0,t.jsx)(n.strong,{children:"warehouse"}),"; and a ",(0,t.jsx)(n.strong,{children:"user"})," with a ",(0,t.jsx)(n.strong,{children:"role"})," assigned that grants the appropriate access levels to these resources.\n",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/reference/Connectors/materialization-connectors/Snowflake#setup",children:"You can use a script to quickly create all of these items."})," Have these details on hand for setup with Flow."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The account identifier and host URL noted. ",(0,t.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used",children:"The URL is formatted using the account identifier"}),". For example, you might have the account identifier ",(0,t.jsx)(n.code,{children:"orgname-accountname.snowflakecomputing.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["In Estuary Flow, you create ",(0,t.jsx)(n.strong,{children:"Data Flows"})," to transfer data from ",(0,t.jsx)(n.strong,{children:"source"})," systems to ",(0,t.jsx)(n.strong,{children:"destination"})," systems in real time.\nIn this use case, your source is an Amazon S3 bucket and your destination is a Snowflake data warehouse."]}),"\n",(0,t.jsx)(n.p,{children:"After following this guide, you'll have a Data Flow that comprises:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.strong,{children:"capture"}),", which ingests data from S3"]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.strong,{children:"collection"}),", a cloud-backed copy of that data in the Flow system"]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.strong,{children:"materialization"}),", which pushes the data to Snowflake"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The capture and materialization rely on plug-in components called ",(0,t.jsx)(n.strong,{children:"connectors"}),".\nWe'll walk through how to configure the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/reference/Connectors/capture-connectors/amazon-s3",children:"S3"})," and ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/reference/Connectors/materialization-connectors/Snowflake",children:"Snowflake"})," connectors to integrate these systems with Flow."]}),"\n",(0,t.jsx)(n.h2,{id:"capture-from-s3",children:"Capture from S3"}),"\n",(0,t.jsx)(n.p,{children:"You'll first create a capture to connect to your S3 bucket, which will yield one or more Flow collections."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the Flow web application at ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev/",children:"dashboard.estuary.dev"})," and sign in using the\ncredentials provided by your Estuary account manager."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Sources"})," tab and choose ",(0,t.jsx)(n.strong,{children:"New Capture"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Find the ",(0,t.jsx)(n.strong,{children:"Amazon S3"})," tile and click ",(0,t.jsx)(n.strong,{children:"Capture"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A form appears with the properties required for an S3 capture."}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Type a name for your capture."}),"\n",(0,t.jsxs)(n.p,{children:["Your capture name must begin with a ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/concepts/catalogs#namespace",children:"prefix"})," to which you ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/reference/authentication",children:"have access"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Name"})," field, use the drop-down to select your prefix.\nAppend a unique capture name after the ",(0,t.jsx)(n.code,{children:"/"})," to create the full name, for example, ",(0,t.jsx)(n.code,{children:"acmeCo/myS3Capture"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fill out the required properties for S3."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:[(0,t.jsx)(n.strong,{children:"AWS Access Key ID"})," and ",(0,t.jsx)(n.strong,{children:"AWS Secret Access Key"})]}),": Required for private buckets."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AWS Region"})," and ",(0,t.jsx)(n.strong,{children:"Bucket"}),": These are listed in your ",(0,t.jsx)(n.a,{href:"https://s3.console.aws.amazon.com/s3/buckets",children:"S3 console"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Prefix"}),": You might organize your S3 bucket using ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html",children:"prefixes"}),", which emulate a directory structure. To capture ",(0,t.jsx)(n.em,{children:"only"})," from a specific prefix, add it here."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Match Keys"}),": Filters to apply to the objects in the S3 bucket. If provided, only data whose absolute path matches the filter will be captured. For example, ",(0,t.jsx)(n.code,{children:"*\\.json"})," will only capture JSON file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See the S3 connector documentation for information on ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/reference/Connectors/capture-connectors/amazon-s3#endpoint",children:"advanced fields"})," and ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/reference/Connectors/capture-connectors/amazon-s3#advanced-parsing-cloud-storage-data",children:"parser settings"}),". (You're unlikely to need these for most use cases.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Flow uses the provided configuration to initiate a connection to S3."}),"\n",(0,t.jsx)(n.p,{children:"It generates a permissive schema and details of the Flow collection that will store the data from S3."}),"\n",(0,t.jsx)(n.p,{children:"You'll have the chance to tighten up each collection's JSON schema later, when you materialize to Snowflake."}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and publish"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You'll see a notification when the capture publishes successfully."}),"\n",(0,t.jsx)(n.p,{children:"The data currently in your S3 bucket has been captured, and future updates to it will be captured continuously."}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Materialize Collections"})," to continue."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"materialize-to-snowflake",children:"Materialize to Snowflake"}),"\n",(0,t.jsx)(n.p,{children:"Next, you'll add a Snowflake materialization to connect the captured data to its destination: your data warehouse."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Locate the ",(0,t.jsx)(n.strong,{children:"Snowflake"})," tile and click ",(0,t.jsx)(n.strong,{children:"Materialization"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A form appears with the properties required for a Snowflake materialization."}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose a unique name for your materialization like you did when naming your capture; for example, ",(0,t.jsx)(n.code,{children:"acmeCo/mySnowflakeMaterialization"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fill out the required properties for Snowflake (you should have most of these handy from the ",(0,t.jsx)(n.a,{href:"#prerequisites",children:"prerequisites"}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Host URL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Account"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"User"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Password"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Database"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Schema"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Warehouse"}),": optional"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Role"}),": optional"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Flow uses the provided configuration to initiate a connection to Snowflake."}),"\n",(0,t.jsxs)(n.p,{children:["You'll be notified if there's an error. In that case, fix the configuration form or Snowflake setup as needed and click ",(0,t.jsx)(n.strong,{children:"Next"})," to try again."]}),"\n",(0,t.jsxs)(n.p,{children:["Once the connection is successful, the Endpoint Config collapses and the ",(0,t.jsx)(n.strong,{children:"Source Collections"})," browser  becomes prominent.\nIt shows the collection you captured previously, which will be mapped to a Snowflake table."]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Collection Selector"}),", optionally change the name in the ",(0,t.jsx)(n.strong,{children:"Table"})," field."]}),"\n",(0,t.jsx)(n.p,{children:"This will be the name of the output table in Snowflake."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose whether to ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/reference/Connectors/materialization-connectors/Snowflake#delta-updates",children:"enable delta updates"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Apply a stricter schema to the collection for the materialization."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["S3 has a flat data structure.\nTo materialize this data effectively to Snowflake, you should apply a schema that can translate to a table structure.\nFlow's ",(0,t.jsx)(n.strong,{children:"Schema Inference"})," tool can help."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Source Collections"})," browser, click the collection's ",(0,t.jsx)(n.strong,{children:"Collection"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Schema Inference"})]}),"\n",(0,t.jsxs)(n.p,{children:["The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,t.jsx)(n.code,{children:"readSchema"}),", to use for the materialization."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Review the new schema and click ",(0,t.jsx)(n.strong,{children:"Apply Inferred Schema"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"})," to apply the changes you made to the collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Publish"}),". You'll see a notification when the full Data Flow publishes successfully."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,t.jsx)(n.p,{children:"Your Data Flow has been deployed, and will run continuously until it's stopped. Updates in your S3 bucket will be reflected in your Snowflake table as they occur."}),"\n",(0,t.jsxs)(n.p,{children:["You can advance your Data Flow by adding a ",(0,t.jsx)(n.strong,{children:"derivation"}),". Derivations are real-time data transformations.\nSee the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1453/guides/flowctl/create-derivation",children:"guide to create a derivation"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);