"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[225],{22505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(74848),r=t(28453);const s={},o="Apache Parquet in S3",c={id:"reference/Connectors/materialization-connectors/apache-parquet",title:"Apache Parquet in S3",description:"This connector materializes delta updates of Flow collections into an S3 bucket in the Apache Parquet format.",source:"@site/docs/reference/Connectors/materialization-connectors/apache-parquet.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/apache-parquet",permalink:"/pr-preview/pr-1460/reference/Connectors/materialization-connectors/apache-parquet",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/apache-parquet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Redshift",permalink:"/pr-preview/pr-1460/reference/Connectors/materialization-connectors/amazon-redshift"},next:{title:"Google BigQuery",permalink:"/pr-preview/pr-1460/reference/Connectors/materialization-connectors/BigQuery"}},d={},a=[{value:"Supported field types",id:"supported-field-types",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Materializing arrays and objects",id:"materializing-arrays-and-objects",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"apache-parquet-in-s3",children:"Apache Parquet in S3"}),"\n",(0,i.jsxs)(n.p,{children:["This connector materializes ",(0,i.jsx)(n.a,{href:"#delta-updates",children:"delta updates"})," of Flow collections into an S3 bucket in the Apache Parquet format."]}),"\n",(0,i.jsx)(n.p,{children:"The delta updates are batched within Flow, converted to Parquet files, and then pushed to the S3 bucket at a time interval that you set."}),"\n",(0,i.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-s3-parquet:dev",children:(0,i.jsx)(n.code,{children:"ghcr.io/estuary/materialize-s3-parquet:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsx)(n.h2,{id:"supported-field-types",children:"Supported field types"}),"\n",(0,i.jsx)(n.p,{children:"All possible field types in Flow collections are materialized into Parquet by default, with the exception of arrays.\nBy default, the connector makes its best effort to flatten fields of type object."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#materializing-arrays-and-objects",children:"You can override the default and materialize arrays and objects as JSON strings"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An AWS root or IAM user with access to the S3 bucket. For this user, you'll need the ",(0,i.jsx)(n.strong,{children:"access key"})," and ",(0,i.jsx)(n.strong,{children:"secret access key"}),".\nSee the ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help finding these credentials."]}),"\n",(0,i.jsx)(n.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1460/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a  materialization, which will direct the contents of these Flow collections to Parquet files in S3."}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Title"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required/Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/advanced"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/advanced/endpoint"})}),(0,i.jsx)(n.td,{children:"Endpoint"}),(0,i.jsx)(n.td,{children:"The endpoint URI to connect to. Useful if you're connecting to a S3-compatible API that isn't provided by AWS."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/awsAccessKeyId"})})}),(0,i.jsx)(n.td,{children:"Access Key ID"}),(0,i.jsx)(n.td,{children:"AWS credential used to connect to S3."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/awsSecretAccessKey"})})}),(0,i.jsx)(n.td,{children:"Secret Access Key"}),(0,i.jsx)(n.td,{children:"AWS credential used to connect to S3."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/bucket"})})}),(0,i.jsx)(n.td,{children:"Bucket"}),(0,i.jsx)(n.td,{children:"Name of the S3 bucket."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/region"})})}),(0,i.jsx)(n.td,{children:"Region"}),(0,i.jsx)(n.td,{children:"The name of the AWS region where the S3 bucket is located."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/uploadIntervalInSeconds"})})}),(0,i.jsx)(n.td,{children:"Upload Interval in Seconds"}),(0,i.jsx)(n.td,{children:"Time interval, in seconds, at which to upload data from Flow to S3."}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Title"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required/Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/compressionType"})}),(0,i.jsx)(n.td,{children:"Compression type"}),(0,i.jsx)(n.td,{children:"The method used to compress data in Parquet."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/pathPrefix"})})}),(0,i.jsx)(n.td,{children:"Path prefix"}),(0,i.jsxs)(n.td,{children:["The desired Parquet file path within the bucket as determined by an S3 ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html",children:"prefix"}),"."]}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The following compression types are supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"snappy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"gzip"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"lz4"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"zstd"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  PREFIX/mat_name:\n\t  endpoint:\n        connector:\n          config:\n            awsAccessKeyId: AKIAIOSFODNN7EXAMPLE\n            awsSecretAccessKey: wJalrXUtnFEMI/K7MDENG/bPxRfiCYSECRET\n            bucket: my-bucket\n            uploadIntervalInSeconds: 300\n          # Path to the latest version of the connector, provided as a Docker image\n          image: ghcr.io/estuary/materialize-s3-parquet:dev\n\t# If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n      - resource:\n          pathPrefix: /my-prefix\n      source: PREFIX/source_collection\n"})}),"\n",(0,i.jsx)(n.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,i.jsxs)(n.p,{children:["This connector uses only ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1460/concepts/materialization#delta-updates",children:"delta updates"})," mode.\nCollection documents are converted to Parquet format and stored in their unmerged state."]}),"\n",(0,i.jsx)(n.h2,{id:"materializing-arrays-and-objects",children:"Materializing arrays and objects"}),"\n",(0,i.jsx)(n.p,{children:"If your collection contains array or object fields, by default, the connector will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Skip arrays."}),"\n",(0,i.jsx)(n.li,{children:"Attempt to flatten objects."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can materialize either of these field types as JSON strings.\nYou do so by editing the materialization specification and adding ",(0,i.jsx)(n.strong,{children:"projected fields"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Projections"})," are how Flow maps hierarchical JSON locations into fields.\nBy listing projected fields to include, you override the connector's default behavior."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/pr-preview/pr-1460/concepts/materialization#projected-fields",children:"Learn more about how projected fields work"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To materialize an array or object as a JSON string, do the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.a,{href:"https://dashboard.estuary.dev/collections",children:"collections page of the web app"}),",\nlocate the collection to be materialized and view its specification.\nNote the names of arrays or objects you want to materialize as strings."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, the collection ",(0,i.jsx)(n.code,{children:"estuary/public/wikipedia/recentchange"})," (visible to all users in the web app)\nhas many objects, but we want to materialize ",(0,i.jsx)(n.code,{children:'"length"'})," and ",(0,i.jsx)(n.code,{children:'"revision'}),'" as strings.']}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Begin to set up your S3 Parquet materialization. After you initiate the connection with S3, the ",(0,i.jsx)(n.strong,{children:"Specification Editor"})," becomes available."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Specification Editor, locate the ",(0,i.jsx)(n.strong,{children:"binding"})," of the collection with the arrays or objects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:'"fields"'})," object to the binding and list the objects or arrays in the following format:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"bindings": [\n    {\n      "resource": {\n        "pathPrefix": "recentchanges"\n      },\n      "source": "estuary/public/wikipedia/recentchange",\n      "fields": {\n        "include": {\n          "length": {},\n          "revision": {}\n        },\n        "recommended": true\n      }\n    }\n  ],\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Proceed to save and publish the materialization as usual."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);