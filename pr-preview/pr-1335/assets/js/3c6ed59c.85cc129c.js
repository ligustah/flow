"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?i.createElement(h,r(r({ref:t},c),{},{components:a})):i.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const o={},r="Customize materialized fields",l={unversionedId:"guides/customize-materialization-fields",id:"guides/customize-materialization-fields",title:"Customize materialized fields",description:"When you first materialize a collection to an endpoint like a database or data warehouse,",source:"@site/docs/guides/customize-materialization-fields.md",sourceDirName:"guides",slug:"/guides/customize-materialization-fields",permalink:"/pr-preview/pr-1335/guides/customize-materialization-fields",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/customize-materialization-fields.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure connections with SSH tunneling",permalink:"/pr-preview/pr-1335/guides/connect-network"},next:{title:"Schema evolution",permalink:"/pr-preview/pr-1335/guides/schema-evolution"}},s={},p=[{value:"Capture desired fields and generate projections",id:"capture-desired-fields-and-generate-projections",level:2},{value:"Captured collections",id:"captured-collections",level:3},{value:"Derived collections",id:"derived-collections",level:3},{value:"Include desired fields in your materialization",id:"include-desired-fields-in-your-materialization",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customize-materialized-fields"},"Customize materialized fields"),(0,n.kt)("p",null,"When you first materialize a collection to an endpoint like a database or data warehouse,\nthe resulting table columns might not be formatted how you want.\nYou might notice missing columns, extra columns, or columns with names you don't like.\nThis happens when the collection's JSON schema doesn't map to a table schema appropriate for your use case."),(0,n.kt)("p",null,"You can control the shape and appearance of materialized tables using a two-step process."),(0,n.kt)("p",null,"First, you modify the source collection ",(0,n.kt)("strong",{parentName:"p"},"schema"),".\nYou can change column names by adding ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/pr-preview/pr-1335/concepts/advanced/projections"},"projections")),":\nJSON pointers that turn locations in a document's JSON structure into custom named fields."),(0,n.kt)("p",null,"Then, you add the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," stanza to the materialization specification, telling Flow which fields to materialize."),(0,n.kt)("p",null,"The following sections break down the process in more detail."),(0,n.kt)("admonition",{title:"Hint",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you just need to add a field that isn't included by default and it's already present in the schema\nwith a name you like, skip ahead to ",(0,n.kt)("a",{parentName:"p",href:"#include-desired-fields-in-your-materialization"},"include desired fields in your materialization"),".")),(0,n.kt)("h2",{id:"capture-desired-fields-and-generate-projections"},"Capture desired fields and generate projections"),(0,n.kt)("p",null,"Any field you eventually want to materialize must be included in the collection's schema.\nIt's ok if the field is nested in the JSON structure; you'll flatten the structure with ",(0,n.kt)("strong",{parentName:"p"},"projections"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In this workflow, you'll edit a collection. This change can impact other downstream materializations and derivations.\nUse caution and be mindful of any edit's consequences before publishing.")),(0,n.kt)("h3",{id:"captured-collections"},"Captured collections"),(0,n.kt)("p",null,"If the collection you're using was captured directly, follow these steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/captures"},"Captures")," page of the Flow web app\nand locate the capture that produced the collection.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Options")," button and choose ",(0,n.kt)("strong",{parentName:"p"},"Edit Specification"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under ",(0,n.kt)("strong",{parentName:"p"},"Output Collections"),", choose the binding that corresponds to the collection.\nThen, click the ",(0,n.kt)("strong",{parentName:"p"},"Collection")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the list of fields, look for the fields you want to materialize.\nIf they're present and correctly named, you can skip to\n",(0,n.kt)("a",{parentName:"p",href:"#include-desired-fields-in-your-materialization"},"including them in the materialization"),"."))),(0,n.kt)("admonition",{title:"hint:",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Compare the field name and pointer.\nFor nested pointers, you'll probably want to change the field name to omit slashes.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If your desired fields aren't present or need to be re-named, edit the collection schema manually:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Edit"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add missing fields to the schema in the correct location based on the source data structure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Close"),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generate projections for new or incorrectly named fields."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If available, click the ",(0,n.kt)("strong",{parentName:"p"},"Schema Inference")," button. The Schema Inference Window appears. Flow cleans up your schema and adds projections for new fields.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Manually change the names of projected fields. These names will be used by the materialization and shown in the endpoint system as column names or the equivalent.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),"."))),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Schema Inference isn't available for all capture types.\nYou can also add projections manually with ",(0,n.kt)("inlineCode",{parentName:"p"},"flowctl"),".\nRefer to the guide to ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/guides/flowctl/edit-specification-locally"},"editing with flowctl")," and\n",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/collections#projections"},"how to format projections"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Repeat steps 3 through 6 with other collections, if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save and Publish"),"."))),(0,n.kt)("h3",{id:"derived-collections"},"Derived collections"),(0,n.kt)("p",null,"If the collection you're using came from a derivation, follow these steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1335/guides/flowctl/edit-specification-locally#pull-specifications-locally"},"Pull the derived collection's specification locally")," using ",(0,n.kt)("inlineCode",{parentName:"li"},"flowctl"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flowctl catalog pull-specs --name <yourOrg/full/collectionName>\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the collection's schema to see if the fields of interest are included. If they're present, you can skip to\n",(0,n.kt)("a",{parentName:"p",href:"#include-desired-fields-in-your-materialization"},"including them in the materialization"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If your desired fields aren't present or are incorrectly named, add any missing fields to the schema in the correct location based on the source data structure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use schema inference to generate projections for the fields."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flowctl preview --infer-schema --source <full\\path\\to\\flow.yaml> --collection <yourOrg/full/collectionName>\n\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the updated schema. Manually change the names of projected fields. These names will be used by the materialization and shown in the endpoint system as column names or the equivalent.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/guides/flowctl/edit-specification-locally#edit-source-files-and-re-publish-specifications"},"Re-publish the collection specification"),"."))),(0,n.kt)("h2",{id:"include-desired-fields-in-your-materialization"},"Include desired fields in your materialization"),(0,n.kt)("p",null,"Now that all your fields are present in the collection schema as projections,\nyou can choose which ones to include in the materialization."),(0,n.kt)("p",null,"Every included field will be mapped to a table column or equivalent in the endpoint system."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you haven't created the materialization, ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/guides/create-dataflow#create-a-materialization"},"begin the process"),". Pause once you've selected the collections to materialize."),(0,n.kt)("p",{parentName:"li"},"If your materialization already exists, navigate to the ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/guides/edit-data-flows#edit-a-materialization"},"edit materialization")," page.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Collection Selector, choose the collection whose output fields you want to change. Click its ",(0,n.kt)("strong",{parentName:"p"},"Collection")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the listed field."),(0,n.kt)("p",{parentName:"li"},"In most cases, Flow automatically detects all fields to materialize, projected or otherwise. However, a projected field may still be missing, or you may want to exclude other fields.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you want to make changes, click ",(0,n.kt)("strong",{parentName:"p"},"Edit"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the editor to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," stanza to the collection's binding specification."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1335/concepts/materialization#projected-fields"},"Learn more about configuring ",(0,n.kt)("inlineCode",{parentName:"a"},"fields")," and view a sample specification"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose whether to start with Flow's recommended fields. Under ",(0,n.kt)("inlineCode",{parentName:"p"},"fields"),", set ",(0,n.kt)("inlineCode",{parentName:"p"},"recommended")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". If you choose ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", you can exclude fields later.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"include")," to add missing projections, or ",(0,n.kt)("inlineCode",{parentName:"p"},"exclude")," to remove fields.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Close"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Repeat steps 2 through 8 with other collections, if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save and Publish"),"."))),(0,n.kt)("p",null,"The named, included fields will be reflected in the endpoint system."))}m.isMDXComponent=!0}}]);