"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9938],{94766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(74848),i=t(28453);const r={},a="Amazon Redshift",d={id:"reference/Connectors/materialization-connectors/amazon-redshift",title:"Amazon Redshift",description:"This connector materializes Flow collections into tables in an Amazon Redshift database.",source:"@site/docs/reference/Connectors/materialization-connectors/amazon-redshift.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/amazon-redshift",permalink:"/pr-preview/pr-1437/reference/Connectors/materialization-connectors/amazon-redshift",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/amazon-redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snowflake",permalink:"/pr-preview/pr-1437/reference/Connectors/materialization-connectors/Snowflake"},next:{title:"Databricks",permalink:"/pr-preview/pr-1437/reference/Connectors/materialization-connectors/databricks"}},c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Setup",id:"setup",level:2},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Maximum record size",id:"maximum-record-size",level:2},{value:"Delta updates",id:"delta-updates",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"amazon-redshift",children:"Amazon Redshift"}),"\n",(0,s.jsx)(n.p,{children:"This connector materializes Flow collections into tables in an Amazon Redshift database."}),"\n",(0,s.jsx)(n.p,{children:"The connector uses your AWS account to materialize to Redshift tables by way of files in an S3\nbucket. The files in the bucket as as a temporary staging area for data storage and retrieval."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-redshift:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/materialize-redshift:dev"})}),"\nprovides the latest connector image. You can also follow the link in your browser to see past image\nversions."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['A Redshift cluster accessible either directly or using an SSH tunnel. The user configured to\nconnect to Redshift must have at least "create table" permissions for the configured schema. The\nconnector will create new tables in the database per your specification. Tables created manually\nin advance are not supported. See ',(0,s.jsx)(n.a,{href:"#setup",children:"setup"})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:["An S3 bucket for staging temporary files. For best performance the bucket should be in the same\nregion as your Redshift cluster. See ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html",children:"this\nguide"})," for\ninstructions on setting up a new S3 bucket."]}),"\n",(0,s.jsxs)(n.li,{children:["An AWS root or IAM user with ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html",children:"read and write\naccess"}),"\nto the S3 bucket. For this user, you'll need the ",(0,s.jsx)(n.strong,{children:"access key"})," and ",(0,s.jsx)(n.strong,{children:"secret access key"}),". See the\n",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help finding\nthese credentials."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Use the below properties to configure an Amazon Redshift materialization, which will direct one or\nmore of your Flow collections to your desired tables in the database."}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/address"})})}),(0,s.jsx)(n.td,{children:"Address"}),(0,s.jsx)(n.td,{children:"Host and port of the database. Example: red-shift-cluster-name.account.us-east-2.redshift.amazonaws.com:5439"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/user"})})}),(0,s.jsx)(n.td,{children:"User"}),(0,s.jsx)(n.td,{children:"Database user to connect as."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/password"})})}),(0,s.jsx)(n.td,{children:"Password"}),(0,s.jsx)(n.td,{children:"Password for the specified database user."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/database"})}),(0,s.jsx)(n.td,{children:"Database"}),(0,s.jsx)(n.td,{children:"Name of the logical database to materialize to. The materialization will attempt to connect to the default database for the provided user if omitted."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/schema"})}),(0,s.jsx)(n.td,{children:"Database Schema"}),(0,s.jsx)(n.td,{children:"Database schema for bound collection tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"public"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/awsAccessKeyId"})})}),(0,s.jsx)(n.td,{children:"Access Key ID"}),(0,s.jsx)(n.td,{children:"AWS Access Key ID for reading and writing data to the S3 staging bucket."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/awsSecretAccessKey"})})}),(0,s.jsx)(n.td,{children:"Secret Access Key"}),(0,s.jsx)(n.td,{children:"AWS Secret Access Key for reading and writing data to the S3 staging bucket."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/bucket"})})}),(0,s.jsx)(n.td,{children:"S3 Staging Bucket"}),(0,s.jsx)(n.td,{children:"Name of the S3 bucket to use for staging data loads."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/region"})})}),(0,s.jsx)(n.td,{children:"Region"}),(0,s.jsx)(n.td,{children:"Region of the S3 staging bucket. For optimal performance this should be in the same region as the Redshift database cluster."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/bucketPath"})}),(0,s.jsx)(n.td,{children:"Bucket Path"}),(0,s.jsx)(n.td,{children:"A prefix that will be used to store objects in S3."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced"})}),(0,s.jsx)(n.td,{children:"Advanced Options"}),(0,s.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced/updateDelay"})}),(0,s.jsx)(n.td,{children:"Update Delay"}),(0,s.jsx)(n.td,{children:"Potentially reduce active cluster time by increasing the delay between updates. Defaults to 30 minutes if unset."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/table"})})}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"Name of the database table."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/delta_updates"})}),(0,s.jsx)(n.td,{children:"Delta Update"}),(0,s.jsx)(n.td,{children:"Should updates to this table be done via delta updates. Default is false."}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/schema"})}),(0,s.jsx)(n.td,{children:"Alternative Schema"}),(0,s.jsx)(n.td,{children:"Alternative schema for this table (optional)."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/materialize-redshift:dev"\n        config:\n          address: "redshift-cluster.account.us-east-2.redshift.amazonaws.com:5439"\n          user: user\n          password: password\n          database: db\n          awsAccessKeyId: access_key_id\n          awsSecretAccessKey: secret_access_key\n          bucket: my-bucket\n          region: us-east-2\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["You must configure your cluster to allow connections from Estuary. This can be accomplished by\nmaking your cluster accessible over the internet for Estuary Flow's IP address ",(0,s.jsx)(n.code,{children:"34.121.207.128"}),", or\nusing an SSH tunnel. Connecting to the S3 staging bucket does not use the network tunnel and\nconnects over HTTPS only."]}),"\n",(0,s.jsxs)(n.p,{children:["Instructions for making a cluster accessible over the internet can be found\n",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/redshift-cluster-private-public/",children:"here"}),".\nWhen using this option, database connections are made over SSL only."]}),"\n",(0,s.jsx)(n.p,{children:"For allowing secure connections via SSH tunneling:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"../../../../guides/connect-network/",children:"guide"})," to configure an SSH server on using an\nAWS EC2 instance."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure your connector as described in the ",(0,s.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, with\nthe additional of the ",(0,s.jsx)(n.code,{children:"networkTunnel"})," stanza to enable the SSH tunnel, if using. See ",(0,s.jsx)(n.a,{href:"../../../../concepts/connectors/#connecting-to-endpoints-on-secure-networks",children:"Connecting to\nendpoints on secure\nnetworks"})," for additional\ndetails and a sample."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,s.jsxs)(n.p,{children:["Redshift has requirements for ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/redshift/latest/dg/r_names.html",children:"names and\nidentifiers"})," and this connector will\nautomatically apply quoting when needed. All table identifiers and column identifiers (corresponding\nto Flow collection fields) are treated as lowercase. Table names for bindings must be unique on a\ncase-insensitive basis, as well as field names of the source collection. If any names are not unique\non a case-insensitive basis (ex: ",(0,s.jsx)(n.code,{children:"myField"})," vs. ",(0,s.jsx)(n.code,{children:"MyField"}),") the materialization will fail to apply."]}),"\n",(0,s.jsxs)(n.p,{children:["If necessary, you can add ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1437/concepts/advanced/projections",children:"projections"})," to your\ncollection specification to change field names."]}),"\n",(0,s.jsx)(n.h2,{id:"performance-considerations",children:"Performance considerations"}),"\n",(0,s.jsx)(n.p,{children:"For best performance there should at most one Redshift materialization active per Redshift schema.\nAdditional collections to be materialized should be added as bindings to this single materialization\nrather than creating a separate materialization for each collection."}),"\n",(0,s.jsxs)(n.p,{children:["In order to achieve exactly-once processing of collection documents, the materialization creates and\nuses metadata tables located in the schema configured by the endpoint ",(0,s.jsx)(n.code,{children:"schema"}),' property. To commit a\ntransaction, a table-level lock is acquired on these metadata tables. If there are multiple\nmaterializations using the same metadata tables, they will need to take turns acquiring these locks.\nThis locking behavior prevents "serializable isolation violation" errors in the case of multiple\nmaterializations sharing the same metadata tables at the expense of allowing only a single\nmaterialization to be actively committing a transaction.']}),"\n",(0,s.jsx)(n.h2,{id:"maximum-record-size",children:"Maximum record size"}),"\n",(0,s.jsxs)(n.p,{children:["The maximum size of a single input document is 4 MB. Attempting to materialize collections with\ndocuments larger than 4 MB will result in an error. To materialize this data you can use a\n",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1437/concepts/derivations",children:"derivation"})," to create a derived collection with smaller\ndocuments, or exclude fields containing excessive amounts of data by ",(0,s.jsx)(n.a,{href:"../../../../guides/customize-materialization-fields/#include-desired-fields-in-your-materialization",children:"customizing the materialized\nfields"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,s.jsxs)(n.p,{children:["This connector supports both standard (merge) and ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1437/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);