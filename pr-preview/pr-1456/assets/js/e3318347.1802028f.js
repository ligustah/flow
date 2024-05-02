"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5423],{90492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(74848),s=n(28453);const i={},c="MotherDuck",d={id:"reference/Connectors/materialization-connectors/motherduck",title:"MotherDuck",description:"This connector materializes Flow collections into tables in a MotherDuck database.",source:"@site/docs/reference/Connectors/materialization-connectors/motherduck.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/motherduck",permalink:"/pr-preview/pr-1456/reference/Connectors/materialization-connectors/motherduck",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/motherduck.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/pr-preview/pr-1456/reference/Connectors/materialization-connectors/mongodb"},next:{title:"MySQL",permalink:"/pr-preview/pr-1456/reference/Connectors/materialization-connectors/MySQL/"}},o={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"motherduck",children:"MotherDuck"}),"\n",(0,r.jsx)(t.p,{children:"This connector materializes Flow collections into tables in a MotherDuck database."}),"\n",(0,r.jsx)(t.p,{children:"The connector uses your AWS account to materialize to MotherDuck tables by way of files in an S3\nbucket. The files in the bucket as as a temporary staging area for data storage and retrieval."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://ghcr.io/estuary/materialize-motherduck:dev",children:(0,r.jsx)(t.code,{children:"ghcr.io/estuary/materialize-motherduck:dev"})}),"\nprovides the latest connector image. You can also follow the link in your browser to see past image\nversions."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"https://motherduck.com/",children:"MotherDuck"})," account and ",(0,r.jsx)(t.a,{href:"https://motherduck.com/docs/authenticating-to-motherduck#fetching-the-service-token",children:"Service\nToken"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["An S3 bucket for staging temporary files. See ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html",children:"this\nguide"})," for\ninstructions on setting up a new S3 bucket."]}),"\n",(0,r.jsxs)(t.li,{children:["An AWS root or IAM user with ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html",children:"read and write\naccess"}),"\nto the S3 bucket. For this user, you'll need the ",(0,r.jsx)(t.strong,{children:"access key"})," and ",(0,r.jsx)(t.strong,{children:"secret access key"}),". See the\n",(0,r.jsx)(t.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help finding\nthese credentials."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Use the below properties to configure MotherDuck materialization, which will direct one or\nmore of your Flow collections to your desired tables in the database."}),"\n",(0,r.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/token"})})}),(0,r.jsx)(t.td,{children:"MotherDuck Service Token"}),(0,r.jsx)(t.td,{children:"Service token for authenticating with MotherDuck."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/database"})})}),(0,r.jsx)(t.td,{children:"Database"}),(0,r.jsx)(t.td,{children:"The database to materialize to."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/schema"})})}),(0,r.jsx)(t.td,{children:"Database Schema"}),(0,r.jsx)(t.td,{children:"Database schema for bound collection tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/bucket"})})}),(0,r.jsx)(t.td,{children:"S3 Staging Bucket"}),(0,r.jsx)(t.td,{children:"Name of the S3 bucket to use for staging data loads."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/awsAccessKeyId"})})}),(0,r.jsx)(t.td,{children:"Access Key ID"}),(0,r.jsx)(t.td,{children:"AWS Access Key ID for reading and writing data to the S3 staging bucket."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/awsSecretAccessKey"})})}),(0,r.jsx)(t.td,{children:"Secret Access Key"}),(0,r.jsx)(t.td,{children:"AWS Secret Access Key for reading and writing data to the S3 staging bucket."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/bucketPath"})}),(0,r.jsx)(t.td,{children:"Bucket Path"}),(0,r.jsx)(t.td,{children:"A prefix that will be used to store objects in S3."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/table"})})}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"Name of the database table."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/delta_updates"})}),(0,r.jsx)(t.td,{children:"Delta Update"}),(0,r.jsx)(t.td,{children:"Should updates to this table be done via delta updates. Currently this connector only supports delta updates."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/schema"})}),(0,r.jsx)(t.td,{children:"Alternative Schema"}),(0,r.jsx)(t.td,{children:"Alternative schema for this table (optional)."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/materialize-motherduck:dev"\n        config:\n          token: <motherduck_service_token>\n          database: my_db\n          schema: main\n          bucket: my_bucket\n          awsAccessKeyId: <access_key_id>\n          awsSecretAccessKey: <secret_access_key>\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,r.jsxs)(t.p,{children:["This connector currently supports only ",(0,r.jsx)(t.a,{href:"../../../../concepts/materialization/#delta-updates",children:"delta updates"}),".\nFuture support for standard updates is planned."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);