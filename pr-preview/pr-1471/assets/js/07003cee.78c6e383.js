"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1036],{87362:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=s(74848),r=s(28453),i=s(11470),c=s(19365);const l={},o="Amazon S3",a={id:"reference/Connectors/capture-connectors/amazon-s3",title:"Amazon S3",description:"This connector captures data from an Amazon S3 bucket.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-s3.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-s3",permalink:"/pr-preview/pr-1471/reference/Connectors/capture-connectors/amazon-s3",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-s3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Redshift",permalink:"/pr-preview/pr-1471/reference/Connectors/capture-connectors/amazon-redshift"},next:{title:"Amazon SQS",permalink:"/pr-preview/pr-1471/reference/Connectors/capture-connectors/amazon-sqs"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup: Public buckets",id:"setup-public-buckets",level:3},{value:"Setup: Accessing with a user account",id:"setup-accessing-with-a-user-account",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Parsing cloud storage data",id:"advanced-parsing-cloud-storage-data",level:3},{value:"CSV configuration",id:"csv-configuration",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"amazon-s3",children:"Amazon S3"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from an Amazon S3 bucket."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-s3:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-s3:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["You can use this connector to capture data from an entire S3 bucket or for a ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html",children:"prefix"})," within a bucket.\nThis bucket or prefix must be either be:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Publicly accessible and allowing anonymous reads."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Accessible via a root or ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",children:"IAM user"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In either case, you'll need an ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_controlling.html",children:"access policy"}),".\nPolicies in AWS are JSON objects that define permissions. You attach them to ",(0,t.jsx)(n.em,{children:"resources"}),", which include both IAM users and S3 buckets."]}),"\n",(0,t.jsx)(n.p,{children:"See the steps below to set up access."}),"\n",(0,t.jsx)(n.h3,{id:"setup-public-buckets",children:"Setup: Public buckets"}),"\n",(0,t.jsx)(n.p,{children:"For a public buckets, the bucket access policy must allow anonymous reads on the whole bucket or a specific prefix."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a bucket policy using the templates below."}),"\n"]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(c.A,{value:"Anonymous reads policy - Full bucket",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"file=./policies/public-full-bucket.json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "BucketAnonymousRead",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/*"\n            ]\n        }\n    ]\n}\n'})})}),(0,t.jsx)(c.A,{value:"Anonymous reads policy - Specific prefix",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"file=./policies/public-prefix-only.json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "BucketPrefixAnonymousRead",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ],\n            "Condition": {\n                "StringLike": {\n                    "s3:prefix": [\n                        "EXAMPLE_PREFIX",\n                        "EXAMPLE_PREFIX/*"\n                    ]\n                }\n            }\n        },\n        {\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/EXAMPLE_PREFIX/*"\n            ]\n        }\n    ]\n}\n'})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-bucket-policy.html",children:"Add the policy to your bucket"}),". Paste over the existing policy and resolve any errors or warnings before saving."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Confirm that the ",(0,t.jsx)(n.strong,{children:"Block public access"})," setting on the bucket is ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html",children:"disabled"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"setup-accessing-with-a-user-account",children:"Setup: Accessing with a user account"}),"\n",(0,t.jsxs)(n.p,{children:["For buckets accessed by a user account, you'll need the AWS ",(0,t.jsx)(n.strong,{children:"access key"})," and ",(0,t.jsx)(n.strong,{children:"secret access key"})," for the user.\nYou'll also need to apply an access policy to the user to grant access to the specific bucket or prefix."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",children:"Create an IAM user"})," if you don't yet have one to use with Flow."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Note the user's access key and secret access key.\nSee the ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help finding these credentials."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an IAM policy using the templates below."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(c.A,{value:"IAM user access policy - Full bucket",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"file=./policies/iam-user-full-bucket.json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "UserAccessFullBucket",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/*"\n            ]\n        }\n    ]\n}\n'})})}),(0,t.jsx)(c.A,{value:"IAM user access policy - Specific prefix",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"file=./policies/iam-user-prefix-only.json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "UserAccessBucketPrefix",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ],\n            "Condition": {\n                "StringLike": {\n                    "s3:prefix": [\n                        "EXAMPLE_PREFIX",\n                        "EXAMPLE_PREFIX/*"\n                    ]\n                }\n            }\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/EXAMPLE_PREFIX/*"\n            ]\n        }\n    ]\n}\n'})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html#access_policies_create-json-editor",children:"Add the policy"})," to AWS."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html#add-policies-console",children:"Attach the policy to the IAM user"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1471/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the S3 source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/ascendingKeys"})}),(0,t.jsx)(n.td,{children:"Ascending Keys"}),(0,t.jsx)(n.td,{children:"Improve sync speeds by listing files from the end of the last sync, rather than listing the entire bucket prefix. This requires that you write objects in ascending lexicographic order, such as an RFC-3339 timestamp, so that key ordering matches modification time ordering. If data is not ordered correctly, using ascending keys could cause errors."}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/advanced/endpoint"})}),(0,t.jsx)(n.td,{children:"AWS Endpoint"}),(0,t.jsx)(n.td,{children:"The AWS endpoint URI to connect to. Use if you're capturing from a S3-compatible API that isn't provided by AWS"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/awsAccessKeyId"})}),(0,t.jsx)(n.td,{children:"AWS Access Key ID"}),(0,t.jsx)(n.td,{children:"Part of the AWS credentials that will be used to connect to S3. Required unless the bucket is public and allows anonymous listings and reads."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/awsSecretAccessKey"})}),(0,t.jsx)(n.td,{children:"AWS Secret Access Key"}),(0,t.jsx)(n.td,{children:"Part of the AWS credentials that will be used to connect to S3. Required unless the bucket is public and allows anonymous listings and reads."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/bucket"})})}),(0,t.jsx)(n.td,{children:"Bucket"}),(0,t.jsx)(n.td,{children:"Name of the S3 bucket"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/matchKeys"})}),(0,t.jsx)(n.td,{children:"Match Keys"}),(0,t.jsx)(n.td,{children:'Filter applied to all object keys under the prefix. If provided, only objects whose absolute path matches this regex will be read. For example, you can use ".*\\.json" to only capture json files.'}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/parser"})}),(0,t.jsx)(n.td,{children:"Parser Configuration"}),(0,t.jsx)(n.td,{children:"Configures how files are parsed (optional, see below)"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/parser/compression"})}),(0,t.jsx)(n.td,{children:"Compression"}),(0,t.jsx)(n.td,{children:"Determines how to decompress the contents. The default, 'Auto', will try to determine the compression automatically."}),(0,t.jsx)(n.td,{children:"null, string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/parser/format"})}),(0,t.jsx)(n.td,{children:"Format"}),(0,t.jsx)(n.td,{children:"Determines how to parse the contents. The default, 'Auto', will try to determine the format automatically based on the file extension or MIME type, if available."}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{"type":"auto"}'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/parser/format/type"})}),(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/prefix"})}),(0,t.jsx)(n.td,{children:"Prefix"}),(0,t.jsx)(n.td,{children:"Prefix within the bucket to capture from. Use this to limit the data in your capture."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/region"})})}),(0,t.jsx)(n.td,{children:"AWS Region"}),(0,t.jsx)(n.td,{children:'The name of the AWS region where the S3 bucket is located. "us-east-1" is a popular default you can try, if you\'re unsure what to put here.'}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Required, ",(0,t.jsx)(n.code,{children:'"us-east-1"'})]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Prefix"}),(0,t.jsxs)(n.td,{children:["Path to dataset in the bucket, formatted as ",(0,t.jsx)(n.code,{children:"bucket-name/prefix-name"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-s3:dev\n        config:\n          bucket: "my-bucket"\n          parser:\n            compression: zip\n            format:\n              type: csv\n              config:\n                delimiter: ","\n                encoding: UTF-8\n                errorThreshold: 5\n                headers: [ID, username, first_name, last_name]\n                lineEnding: "\\\\r"\n                quote: "\\""\n          region: "us-east-1"\n    bindings:\n      - resource:\n          stream: my-bucket/${PREFIX}\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Your capture definition may be more complex, with additional bindings for different S3 prefixes within the same bucket."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1471/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,t.jsx)(n.h3,{id:"advanced-parsing-cloud-storage-data",children:"Advanced: Parsing cloud storage data"}),"\n",(0,t.jsx)(n.p,{children:"Cloud storage platforms like S3 can support a wider variety of file types\nthan other data source systems. For each of these file types, Flow must parse\nand translate data into collections with defined fields and JSON schemas."}),"\n",(0,t.jsx)(n.p,{children:"By default, the parser will automatically detect the type and shape of the data in your bucket,\nso you won't need to change the parser configuration for most captures."}),"\n",(0,t.jsxs)(n.p,{children:["However, the automatic detection may be incorrect in some cases.\nTo fix or prevent this, you can provide explicit information in the parser configuration,\nwhich is part of the ",(0,t.jsx)(n.a,{href:"#endpoint",children:"endpoint configuration"})," for this connector."]}),"\n",(0,t.jsx)(n.p,{children:"The parser configuration includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compression"}),": Specify how the bucket contents are compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"zip"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"gzip"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"zstd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"none"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Format"}),": Specify the data format, which determines how it will be parsed.\nOptions are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto"}),": If no format is specified, the connector will try to determine it automatically."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Avro"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"CSV"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"JSON"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Protobuf"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"W3C Extended Log"})}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"At this time, Flow only supports S3 captures with data of a single file type.\nSupport for multiple file types, which can be configured on a per-binding basis,\nwill be added in the future."}),(0,t.jsx)(n.p,{children:"For now, use a prefix in the endpoint configuration to limit the scope of each capture to data of a single file type."})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"csv-configuration",children:"CSV configuration"}),"\n",(0,t.jsx)(n.p,{children:"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Delimiter"}),". Options are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Comma (",(0,t.jsx)(n.code,{children:'","'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Pipe (",(0,t.jsx)(n.code,{children:'"|"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Space (",(0,t.jsx)(n.code,{children:'"0x20"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Semicolon (",(0,t.jsx)(n.code,{children:'";"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Tab (",(0,t.jsx)(n.code,{children:'"0x09"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Vertical tab (",(0,t.jsx)(n.code,{children:'"0x0B"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Unit separator (",(0,t.jsx)(n.code,{children:'"0x1F"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["SOH (",(0,t.jsx)(n.code,{children:'"0x01"'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Encoding"})," type, specified by its ",(0,t.jsx)(n.a,{href:"https://encoding.spec.whatwg.org/#names-and-labels",children:"WHATWG label"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optionally, an ",(0,t.jsx)(n.strong,{children:"Error threshold"}),", as an acceptable percentage of errors. If set to a number greater than zero, malformed rows that fall within the threshold will be excluded from the capture."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Escape characters"}),". Options are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Backslash (",(0,t.jsx)(n.code,{children:'"\\\\"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Disable escapes (",(0,t.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optionally, a list of column ",(0,t.jsx)(n.strong,{children:"Headers"}),", if not already included in the first row of the CSV file."]}),"\n",(0,t.jsx)(n.p,{children:"If any headers are provided, it is assumed that the provided list of headers is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers), and you must provide a header value for every column in the file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Line ending"})," values"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CRLF (",(0,t.jsx)(n.code,{children:'"\\\\r\\\\n"'}),") (Windows)"]}),"\n",(0,t.jsxs)(n.li,{children:["CR (",(0,t.jsx)(n.code,{children:'"\\\\r"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["LF (",(0,t.jsx)(n.code,{children:'"\\\\n"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Record Separator (",(0,t.jsx)(n.code,{children:'"0x1E"'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Quote character"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Double Quote (",(0,t.jsx)(n.code,{children:'"\\""'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Single Quote (",(0,t.jsx)(n.code,{children:'"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Disable Quoting (",(0,t.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The sample specification ",(0,t.jsx)(n.a,{href:"#sample",children:"above"})," includes these fields."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>c});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function c(e){let{children:n,hidden:s,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,c),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>v});var t=s(96540),r=s(34164),i=s(23104),c=s(56347),l=s(205),o=s(57485),a=s(31682),d=s(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,c.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=u(e),[c,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[a,h]=x({queryString:s,groupId:r}),[j,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),m=(()=>{const e=a??j;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=s(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function g(e){let{className:n,block:s,selectedValue:t,selectValue:c,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),r=l[s].value;r!==t&&(a(n),c(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function v(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);