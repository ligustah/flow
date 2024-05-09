"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7544],{53833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(74848),s=r(28453);const i={},d="Firebolt",l={id:"reference/Connectors/materialization-connectors/Firebolt",title:"Firebolt",description:"This Flow connector materializes delta updates of Flow collections into Firebolt FACT or DIMENSION tables.",source:"@site/docs/reference/Connectors/materialization-connectors/Firebolt.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Firebolt",permalink:"/pr-preview/pr-1467/reference/Connectors/materialization-connectors/Firebolt",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Firebolt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/pr-preview/pr-1467/reference/Connectors/materialization-connectors/Elasticsearch"},next:{title:"Google Cloud Pub/Sub",permalink:"/pr-preview/pr-1467/reference/Connectors/materialization-connectors/google-pubsub"}},c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"firebolt",children:"Firebolt"}),"\n",(0,n.jsxs)(t.p,{children:["This Flow connector materializes ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1467/concepts/materialization#delta-updates",children:"delta updates"})," of Flow collections into Firebolt ",(0,n.jsx)(t.code,{children:"FACT"})," or ",(0,n.jsx)(t.code,{children:"DIMENSION"})," tables."]}),"\n",(0,n.jsxs)(t.p,{children:["To interface between Flow and Firebolt, the connector uses Firebolt's method for ",(0,n.jsx)(t.a,{href:"https://docs.firebolt.io/loading-data/loading-data.html",children:"loading data"}),":\nFirst, it stores data as JSON documents in an S3 bucket.\nIt then references the S3 bucket to create a ",(0,n.jsxs)(t.a,{href:"https://docs.firebolt.io/loading-data/working-with-external-tables.html",children:["Firebolt ",(0,n.jsx)(t.em,{children:"external table"})]}),",\nwhich acts as a SQL interface between the JSON documents and the destination table in Firebolt."]}),"\n",(0,n.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(t.a,{href:"https://ghcr.io/estuary/materialize-firebolt:dev",children:(0,n.jsx)(t.code,{children:"ghcr.io/estuary/materialize-firebolt:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Firebolt database with at least one ",(0,n.jsx)(t.a,{href:"https://docs.firebolt.io/working-with-engines/",children:"engine"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The engine must be started before creating the materialization."}),"\n",(0,n.jsxs)(t.li,{children:["It's important that the engine stays up throughout the lifetime of the materialization. To ensure this is the case, select Edit Engine on your engine. In the engine settings, set ",(0,n.jsx)(t.strong,{children:"Auto-stop engine after"})," to ",(0,n.jsx)(t.strong,{children:"Always On"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["An S3 bucket where JSON documents will be stored prior to loading","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The bucket must be in a ",(0,n.jsx)(t.a,{href:"https://docs.firebolt.io/general-reference/available-regions.html",children:"supported AWS region"})," matching your Firebolt database."]}),"\n",(0,n.jsxs)(t.li,{children:["The bucket may be public, or may be accessible by an IAM user. To configure your IAM user, see the ",(0,n.jsx)(t.a,{href:"#setup",children:"steps below"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["At least one Flow ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1467/concepts/collections",children:"collection"})]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you haven't yet captured your data from its external source,\nstart at the beginning of the ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1467/guides/create-dataflow",children:"guide to create a dataflow"}),".\nYou'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,n.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(t.p,{children:"For non-public buckets, you'll need to configure access in AWS IAM."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Follow the ",(0,n.jsx)(t.a,{href:"https://docs.firebolt.io/loading-data/configuring-aws-role-to-access-amazon-s3.html",children:"Firebolt documentation"})," to set up an IAM policy and role, and add it to the external table definition."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a new ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console",children:"IAM user"}),". During setup:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Choose ",(0,n.jsx)(t.strong,{children:"Programmatic"})," (access key) access. This ensures that an ",(0,n.jsx)(t.strong,{children:"access key ID"})," and ",(0,n.jsx)(t.strong,{children:"secret access key"})," are generated. You'll use these to configure the connector."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On the ",(0,n.jsx)(t.strong,{children:"Permissions"})," page, choose ",(0,n.jsx)(t.strong,{children:"Attach existing policies directly"})," and attach the policy you created in step 1."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["After creating the user, download the IAM credentials file.\nTake note of the ",(0,n.jsx)(t.strong,{children:"access key ID"})," and ",(0,n.jsx)(t.strong,{children:"secret access key"})," and use them  to configure the connector.\nSee the ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html",children:"Amazon docs"})," if you lose your credentials."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Firebolt materialization, which will direct Flow data to your desired Firebolt tables via an external table."}),"\n",(0,n.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Title"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required/Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/aws_key_id"})}),(0,n.jsx)(t.td,{children:"AWS key ID"}),(0,n.jsx)(t.td,{children:"AWS access key ID for accessing the S3 bucket."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/aws_region"})}),(0,n.jsx)(t.td,{children:"AWS region"}),(0,n.jsx)(t.td,{children:"AWS region the bucket is in."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/aws_secret_key"})}),(0,n.jsx)(t.td,{children:"AWS secret access key"}),(0,n.jsx)(t.td,{children:"AWS secret key for accessing the S3 bucket."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/database"})})}),(0,n.jsx)(t.td,{children:"Database"}),(0,n.jsx)(t.td,{children:"Name of the Firebolt database."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/engine_url"})})}),(0,n.jsx)(t.td,{children:"Engine URL"}),(0,n.jsxs)(t.td,{children:["Engine URL of the Firebolt database, in the format: ",(0,n.jsx)(t.code,{children:"<engine-name>.<organization>.<region>.app.firebolt.io"}),"."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/password"})})}),(0,n.jsx)(t.td,{children:"Password"}),(0,n.jsx)(t.td,{children:"Firebolt password."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/s3_bucket"})})}),(0,n.jsx)(t.td,{children:"S3 bucket"}),(0,n.jsx)(t.td,{children:"Name of S3 bucket where the intermediate files for external table will be stored."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/s3_prefix"})}),(0,n.jsx)(t.td,{children:"S3 prefix"}),(0,n.jsx)(t.td,{children:"A prefix for files stored in the bucket."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/username"})})}),(0,n.jsx)(t.td,{children:"Username"}),(0,n.jsx)(t.td,{children:"Firebolt username."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Title"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required/Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/table"})})}),(0,n.jsx)(t.td,{children:"Table"}),(0,n.jsxs)(t.td,{children:["Name of the Firebolt table to store materialized results in. The external table will be named after this table with an ",(0,n.jsx)(t.code,{children:"_external"})," suffix."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/table_type"})})}),(0,n.jsx)(t.td,{children:"Table type"}),(0,n.jsxs)(t.td,{children:["Type of the Firebolt table to store materialized results in. See the ",(0,n.jsx)(t.a,{href:"https://docs.firebolt.io/working-with-tables.html",children:"Firebolt docs"})," for more details."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n\t  endpoint:\n        connector:\n          config:\n            database: my-db\n            engine_url: my-db-my-engine-name.my-organization.us-east-1.app.firebolt.io\n            password: secret\n            # For public S3 buckets, only the bucket name is required\n            s3_bucket: my-bucket\n            username: firebolt-user\n          # Path to the latest version of the connector, provided as a Docker image\n          image: ghcr.io/estuary/materialize-firebolt:dev\n\t# If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n      - resource:\n          table: table-name\n          table_type: fact\n      source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,n.jsxs)(t.p,{children:["Firebolt is an insert-only system; it doesn't support updates or deletes.\nBecause of this, the Firebolt connector operates only in ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1467/concepts/materialization#delta-updates",children:"delta updates"})," mode.\nFirebolt stores all deltas \u2014 the unmerged collection documents \u2014 directly."]}),"\n",(0,n.jsx)(t.p,{children:"In some cases, this will affect how materialized views look in Firebolt compared to other systems that use standard updates."}),"\n",(0,n.jsx)(t.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,n.jsx)(t.p,{children:"Firebolt has a list of reserved words, which my not be used in identifiers.\nCollections with field names that include a reserved word will automatically be quoted as part of a Firebolt materialization."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Reserved words"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"all"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"or"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"alter"}),(0,n.jsx)(t.td,{children:"fetch"}),(0,n.jsx)(t.td,{children:"order"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"and"}),(0,n.jsx)(t.td,{children:"first"}),(0,n.jsx)(t.td,{children:"outer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"over"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"between"}),(0,n.jsx)(t.td,{children:"from"}),(0,n.jsx)(t.td,{children:"partition"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bigint"}),(0,n.jsx)(t.td,{children:"full"}),(0,n.jsx)(t.td,{children:"precision"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"generate"}),(0,n.jsx)(t.td,{children:"prepare"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"group"}),(0,n.jsx)(t.td,{children:"primary"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"both"}),(0,n.jsx)(t.td,{children:"having"}),(0,n.jsx)(t.td,{children:"quarter"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"case"}),(0,n.jsx)(t.td,{children:"if"}),(0,n.jsx)(t.td,{children:"right"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cast"}),(0,n.jsx)(t.td,{children:"ilike"}),(0,n.jsx)(t.td,{children:"row"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"char"}),(0,n.jsx)(t.td,{children:"in"}),(0,n.jsx)(t.td,{children:"rows"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"concat"}),(0,n.jsx)(t.td,{children:"inner"}),(0,n.jsx)(t.td,{children:"sample"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"copy"}),(0,n.jsx)(t.td,{children:"insert"}),(0,n.jsx)(t.td,{children:"select"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"create"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"set"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cross"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"show"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_date"}),(0,n.jsx)(t.td,{children:"intersect"}),(0,n.jsx)(t.td,{children:"text"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_timestamp"}),(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"database"}),(0,n.jsx)(t.td,{children:"is"}),(0,n.jsx)(t.td,{children:"timestamp"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"isnull"}),(0,n.jsx)(t.td,{children:"top"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"join"}),(0,n.jsx)(t.td,{children:"trailing"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"decimal"}),(0,n.jsx)(t.td,{children:"join_type"}),(0,n.jsx)(t.td,{children:"trim"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"delete"}),(0,n.jsx)(t.td,{children:"leading"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"describe"}),(0,n.jsx)(t.td,{children:"left"}),(0,n.jsx)(t.td,{children:"truncate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"distinct"}),(0,n.jsx)(t.td,{children:"like"}),(0,n.jsx)(t.td,{children:"union"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"unknown_char"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"doublecolon"}),(0,n.jsx)(t.td,{children:"limit_distinct"}),(0,n.jsx)(t.td,{children:"unnest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dow"}),(0,n.jsx)(t.td,{children:"localtimestamp"}),(0,n.jsx)(t.td,{children:"unterminated_string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"doy"}),(0,n.jsx)(t.td,{children:"long"}),(0,n.jsx)(t.td,{children:"update"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"drop"}),(0,n.jsx)(t.td,{children:"natural"}),(0,n.jsx)(t.td,{children:"using"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"empty_identifier"}),(0,n.jsx)(t.td,{children:"next"}),(0,n.jsx)(t.td,{children:"varchar"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"epoch"}),(0,n.jsx)(t.td,{children:"not"}),(0,n.jsx)(t.td,{children:"week"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"except"}),(0,n.jsx)(t.td,{children:"null"}),(0,n.jsx)(t.td,{children:"when"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"execute"}),(0,n.jsx)(t.td,{children:"numeric"}),(0,n.jsx)(t.td,{children:"where"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exists"}),(0,n.jsx)(t.td,{children:"offset"}),(0,n.jsx)(t.td,{children:"with"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"explain"}),(0,n.jsx)(t.td,{children:"on"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"extract"}),(0,n.jsx)(t.td,{children:"only"}),(0,n.jsx)(t.td,{})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);