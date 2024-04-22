"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4787],{45549:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const l={},o="Customize materialized fields",r={id:"guides/customize-materialization-fields",title:"Customize materialized fields",description:"When you first materialize a collection to an endpoint like a database or data warehouse,",source:"@site/docs/guides/customize-materialization-fields.md",sourceDirName:"guides",slug:"/guides/customize-materialization-fields",permalink:"/pr-preview/pr-1449/guides/customize-materialization-fields",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/customize-materialization-fields.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure connections with SSH tunneling",permalink:"/pr-preview/pr-1449/guides/connect-network"},next:{title:"Schema evolution",permalink:"/pr-preview/pr-1449/guides/schema-evolution"}},c={},d=[{value:"Capture desired fields and generate projections",id:"capture-desired-fields-and-generate-projections",level:2},{value:"Captured collections",id:"captured-collections",level:3},{value:"Derived collections",id:"derived-collections",level:3},{value:"Include desired fields in your materialization",id:"include-desired-fields-in-your-materialization",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"customize-materialized-fields",children:"Customize materialized fields"}),"\n",(0,t.jsx)(n.p,{children:"When you first materialize a collection to an endpoint like a database or data warehouse,\nthe resulting table columns might not be formatted how you want.\nYou might notice missing columns, extra columns, or columns with names you don't like.\nThis happens when the collection's JSON schema doesn't map to a table schema appropriate for your use case."}),"\n",(0,t.jsx)(n.p,{children:"You can control the shape and appearance of materialized tables using a two-step process."}),"\n",(0,t.jsxs)(n.p,{children:["First, you modify the source collection ",(0,t.jsx)(n.strong,{children:"schema"}),".\nYou can change column names by adding ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/concepts/advanced/projections",children:"projections"})}),":\nJSON pointers that turn locations in a document's JSON structure into custom named fields."]}),"\n",(0,t.jsxs)(n.p,{children:["Then, you add the ",(0,t.jsx)(n.code,{children:"fields"})," stanza to the materialization specification, telling Flow which fields to materialize."]}),"\n",(0,t.jsx)(n.p,{children:"The following sections break down the process in more detail."}),"\n",(0,t.jsx)(n.admonition,{title:"Hint",type:"info",children:(0,t.jsxs)(n.p,{children:["If you just need to add a field that isn't included by default and it's already present in the schema\nwith a name you like, skip ahead to ",(0,t.jsx)(n.a,{href:"#include-desired-fields-in-your-materialization",children:"include desired fields in your materialization"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"capture-desired-fields-and-generate-projections",children:"Capture desired fields and generate projections"}),"\n",(0,t.jsxs)(n.p,{children:["Any field you eventually want to materialize must be included in the collection's schema.\nIt's ok if the field is nested in the JSON structure; you'll flatten the structure with ",(0,t.jsx)(n.strong,{children:"projections"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"In this workflow, you'll edit a collection. This change can impact other downstream materializations and derivations.\nUse caution and be mindful of any edit's consequences before publishing."})}),"\n",(0,t.jsx)(n.h3,{id:"captured-collections",children:"Captured collections"}),"\n",(0,t.jsx)(n.p,{children:"If the collection you're using was captured directly, follow these steps."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev/captures",children:"Captures"})," page of the Flow web app\nand locate the capture that produced the collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Options"})," button and choose ",(0,t.jsx)(n.strong,{children:"Edit Specification"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"Output Collections"}),", choose the binding that corresponds to the collection.\nThen, click the ",(0,t.jsx)(n.strong,{children:"Collection"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the list of fields, look for the fields you want to materialize.\nIf they're present and correctly named, you can skip to\n",(0,t.jsx)(n.a,{href:"#include-desired-fields-in-your-materialization",children:"including them in the materialization"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"hint:",type:"info",children:(0,t.jsx)(n.p,{children:"Compare the field name and pointer.\nFor nested pointers, you'll probably want to change the field name to omit slashes."})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If your desired fields aren't present or need to be re-named, edit the collection schema manually:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add missing fields to the schema in the correct location based on the source data structure."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Close"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Generate projections for new or incorrectly named fields."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If available, click the ",(0,t.jsx)(n.strong,{children:"Schema Inference"})," button. The Schema Inference Window appears. Flow cleans up your schema and adds projections for new fields."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Manually change the names of projected fields. These names will be used by the materialization and shown in the endpoint system as column names or the equivalent."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Schema Inference isn't available for all capture types.\nYou can also add projections manually with ",(0,t.jsx)(n.code,{children:"flowctl"}),".\nRefer to the guide to ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/guides/flowctl/edit-specification-locally",children:"editing with flowctl"})," and\n",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/concepts/collections#projections",children:"how to format projections"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat steps 3 through 6 with other collections, if necessary."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"derived-collections",children:"Derived collections"}),"\n",(0,t.jsx)(n.p,{children:"If the collection you're using came from a derivation, follow these steps."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/guides/flowctl/edit-specification-locally#pull-specifications-locally",children:"Pull the derived collection's specification locally"})," using ",(0,t.jsx)(n.code,{children:"flowctl"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"flowctl catalog pull-specs --name <yourOrg/full/collectionName>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Review the collection's schema to see if the fields of interest are included. If they're present, you can skip to\n",(0,t.jsx)(n.a,{href:"#include-desired-fields-in-your-materialization",children:"including them in the materialization"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If your desired fields aren't present or are incorrectly named, add any missing fields to the schema in the correct location based on the source data structure."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use schema inference to generate projections for the fields."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"flowctl preview --infer-schema --source <full\\path\\to\\flow.yaml> --collection <yourOrg/full/collectionName>\n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Review the updated schema. Manually change the names of projected fields. These names will be used by the materialization and shown in the endpoint system as column names or the equivalent."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/guides/flowctl/edit-specification-locally#edit-source-files-and-re-publish-specifications",children:"Re-publish the collection specification"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"include-desired-fields-in-your-materialization",children:"Include desired fields in your materialization"}),"\n",(0,t.jsx)(n.p,{children:"Now that all your fields are present in the collection schema as projections,\nyou can choose which ones to include in the materialization."}),"\n",(0,t.jsx)(n.p,{children:"Every included field will be mapped to a table column or equivalent in the endpoint system."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you haven't created the materialization, ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/guides/create-dataflow#create-a-materialization",children:"begin the process"}),". Pause once you've selected the collections to materialize."]}),"\n",(0,t.jsxs)(n.p,{children:["If your materialization already exists, navigate to the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1449/guides/edit-data-flows#edit-a-materialization",children:"edit materialization"})," page."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Collection Selector, choose the collection whose output fields you want to change. Click its ",(0,t.jsx)(n.strong,{children:"Collection"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Review the listed field."}),"\n",(0,t.jsx)(n.p,{children:"In most cases, Flow automatically detects all fields to materialize, projected or otherwise. However, a projected field may still be missing, or you may want to exclude other fields."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you want to make changes, click ",(0,t.jsx)(n.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the editor to add the ",(0,t.jsx)(n.code,{children:"fields"})," stanza to the collection's binding specification."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"/pr-preview/pr-1449/concepts/materialization#projected-fields",children:["Learn more about configuring ",(0,t.jsx)(n.code,{children:"fields"})," and view a sample specification"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose whether to start with Flow's recommended fields. Under ",(0,t.jsx)(n.code,{children:"fields"}),", set ",(0,t.jsx)(n.code,{children:"recommended"})," to ",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"}),". If you choose ",(0,t.jsx)(n.code,{children:"true"}),", you can exclude fields later."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"include"})," to add missing projections, or ",(0,t.jsx)(n.code,{children:"exclude"})," to remove fields."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Close"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat steps 2 through 8 with other collections, if necessary."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The named, included fields will be reflected in the endpoint system."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);