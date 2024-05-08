"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6040],{9891:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(74848),t=s(28453);const i={},o="Amazon SQS",c={id:"reference/Connectors/capture-connectors/amazon-sqs",title:"Amazon SQS",description:"This connector captures data from Amazon Simple Queue Service (SQS) into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-sqs.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-sqs",permalink:"/pr-preview/pr-1463/reference/Connectors/capture-connectors/amazon-sqs",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-sqs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon S3",permalink:"/pr-preview/pr-1463/reference/Connectors/capture-connectors/amazon-s3"},next:{title:"Amplitude",permalink:"/pr-preview/pr-1463/reference/Connectors/capture-connectors/amplitude"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Performance Considerations",id:"performance-considerations",level:3},{value:"Data Loss Warning",id:"data-loss-warning",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"amazon-sqs",children:"Amazon SQS"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from Amazon Simple Queue Service (SQS) into Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-amazon-sqs",":dev"," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AWS IAM Access Key"}),"\n",(0,r.jsx)(n.li,{children:"AWS IAM Secret Key"}),"\n",(0,r.jsx)(n.li,{children:"AWS SQS Queue"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps to set up the Amazon SQS connector:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/",children:"Create AWS IAM Keys"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html#step-create-queue",children:"Create an SQS Queue"})}),"\n",(0,r.jsx)(n.li,{children:"Enter a Primary Key and Cursor Field using the standard form editor.  Note that these values currently have to be a string or timestamp."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"If Delete Messages After Read is false"}),", the IAM User only requires sqs",":ReceiveMessage"," permission in the AWS IAM Policy.\n",(0,r.jsx)(n.strong,{children:"If Delete Messages After Read is true"}),", both sqs",":ReceiveMessage"," and sqs",":DeleteMessage"," permissions are needed in the AWS IAM Policy."]})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,r.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the AmazonSQS source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/queue_url"})}),(0,r.jsx)(n.td,{children:"Queue URL"}),(0,r.jsx)(n.td,{children:"URL of the SQS Queue"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/region"})}),(0,r.jsx)(n.td,{children:"AWS Region"}),(0,r.jsx)(n.td,{children:"AWS Region of the SQS Queue"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/access_key"})}),(0,r.jsx)(n.td,{children:"AWS IAM Access Key ID"}),(0,r.jsx)(n.td,{children:"The Access Key ID of the AWS IAM Role to use for pulling messages"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/secret_key"})}),(0,r.jsx)(n.td,{children:"AWS IAM Secret Key"}),(0,r.jsx)(n.td,{children:"The Secret Key of the AWS IAM Role to use for pulling messages"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/delete_messages"})}),(0,r.jsx)(n.td,{children:"Delete Messages After Read"}),(0,r.jsx)(n.td,{children:"Delete messages from the SQS Queue after reading them"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Resource of your Amazon SQS project from which collections are captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsx)(n.td,{children:"Connection method."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "properties": {\n    "queue_url": {\n      "order": 0\n    },\n    "region": {\n      "order": 1\n    },\n    "access_key": {\n      "order": 2\n    },\n    "secret_key": {\n      "order": 3\n    },\n    "delete_messages": {\n      "order": 4\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,r.jsx)(n.p,{children:"Consider the following performance aspects:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Max Batch Size:"})," Set the maximum number of messages to consume in a single poll."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Max Wait Time:"})," Define the maximum time (in seconds) to poll for messages before committing a batch."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Message Visibility Timeout:"})," Determine how long a message should be hidden from other consumers after being read."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"data-loss-warning",children:"Data Loss Warning"}),"\n",(0,r.jsx)(n.p,{children:"When enabling Delete Messages After Read, messages are deleted from the SQS Queue after being read. However, there is no guarantee that the downstream destination has committed or persisted the message. Exercise caution before enabling this option to avoid permanent message loss."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);