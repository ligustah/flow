"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3239],{69821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453),r=t(61114);const a={sidebar_position:3},o="Create your first dataflow with Amazon S3 and Snowflake",l={id:"getting-started/tutorials/dataflow-s3-snowflake",title:"Create your first dataflow with Amazon S3 and Snowflake",description:"In this tutorial, you'll create your first complete Data Flow with Estuary Flow using publicly available data.",source:"@site/docs/getting-started/tutorials/dataflow-s3-snowflake.md",sourceDirName:"getting-started/tutorials",slug:"/getting-started/tutorials/dataflow-s3-snowflake",permalink:"/pr-preview/pr-1463/getting-started/tutorials/dataflow-s3-snowflake",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/tutorials/dataflow-s3-snowflake.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Real-time CDC with MongoDB",permalink:"/pr-preview/pr-1463/getting-started/tutorials/real_time_cdc_with_mongodb"},next:{title:"Create a real-time materialized view in PostgreSQL",permalink:"/pr-preview/pr-1463/getting-started/tutorials/continuous-materialized-view"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"The data",id:"the-data",level:4},{value:"Estuary Flow",id:"estuary-flow",level:4},{value:"Capture Citi Bike data from S3",id:"capture-citi-bike-data-from-s3",level:2},{value:"Prepare Snowflake to use with Flow",id:"prepare-snowflake-to-use-with-flow",level:2},{value:"Materialize your Flow collection to Snowflake",id:"materialize-your-flow-collection-to-snowflake",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Want to learn more?",id:"want-to-learn-more",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-your-first-dataflow-with-amazon-s3-and-snowflake",children:"Create your first dataflow with Amazon S3 and Snowflake"}),"\n",(0,s.jsxs)(n.p,{children:["In this tutorial, you'll create your first complete ",(0,s.jsx)(n.strong,{children:"Data Flow"})," with Estuary Flow using publicly available data."]}),"\n",(0,s.jsx)(n.p,{children:"The dataset you'll use is composed of zipped CSV files in an Amazon S3 cloud storage bucket. You'll transport this data to a table in your own Snowflake data warehouse."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"You'll need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["An Estuary Flow account. If you don't have one, visit the ",(0,s.jsx)(n.a,{href:"https://dashboard.estuary.dev",children:"Flow web app"})," to register for free."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"https://signup.snowflake.com/",children:"Snowflake free trial account"})," (or a full account).\nSnowflake trials are valid for 30 days."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.h4,{id:"the-data",children:"The data"}),"\n",(0,s.jsxs)(n.p,{children:["New York City hosts the United States' largest bike share program, Citi Bike. ",(0,s.jsx)(n.a,{href:"https://ride.citibikenyc.com/system-data",children:"Citi Bike shares ride data"})," in CSV format with the public, including the starting and ending times and locations for every ride.\nThey upload new data monthly to ",(0,s.jsx)(n.a,{href:"https://s3.amazonaws.com/tripdata/index.html",children:"their Amazon S3 bucket"})," as a zipped CSV file."]}),"\n",(0,s.jsx)(n.p,{children:"In this scenario, let's imagine you're interested in urban bike safety, or perhaps you plan to open a bike store and entice Citi Bike renters to buy their own bikes.\nYou'd like to access the Citi Bike data in your Snowflake data warehouse.\nFrom there, you plan to use your data analytics platform of choice to explore the data, and perhaps integrate it with business intelligence apps."}),"\n",(0,s.jsx)(n.p,{children:"You can use Estuary Flow to build a real-time Data Flow that will capture all the new data from Citi Bike as soon as it appears, convert it to Snowflake's format, and land the data in your warehouse."}),"\n",(0,s.jsx)(n.h4,{id:"estuary-flow",children:"Estuary Flow"}),"\n",(0,s.jsxs)(n.p,{children:["In Estuary Flow, you create Data Flows to connect data ",(0,s.jsx)(n.strong,{children:"source"})," and ",(0,s.jsx)(n.strong,{children:"destination"})," systems."]}),"\n",(0,s.jsx)(n.p,{children:"The simplest Data Flow comprises three types of entities:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A data ",(0,s.jsx)(n.strong,{children:"capture"}),", which ingests data from the source. In this case, you'll capture from Amazon S3."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["One or more ",(0,s.jsx)(n.strong,{children:"collections"}),", which Flow uses to store that data inside a cloud-backed data lake"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"materialization"}),", to push the data to an external destination. In this case, you'll materialize to a Snowflake data warehouse."]}),"\n"]}),"\n"]}),"\n","\n","\n",(0,s.jsx)(r.A,{chart:"\n\tgraph LR;\n\t\tCapture--\x3eCollection;\n        Collection--\x3eMaterialization;\n"}),"\n",(0,s.jsxs)(n.p,{children:["For the capture and materialization to work, they need to integrate with outside systems: in this case, S3 and Snowflake, but many other systems can be used.\nTo accomplish this, Flow uses ",(0,s.jsx)(n.strong,{children:"connectors"}),".\nConnectors are plug-in components that interface between Flow and an outside system.\nToday, you'll use Flow's S3 capture connector and Snowflake materialization connector."]}),"\n",(0,s.jsx)(n.p,{children:"You'll start by creating your capture."}),"\n",(0,s.jsx)(n.h2,{id:"capture-citi-bike-data-from-s3",children:"Capture Citi Bike data from S3"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the Flow web app at ",(0,s.jsx)(n.a,{href:"http://dashboard.estuary.dev",children:"dashboard.estuary.dev"})," and sign in."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Sources"})," tab and choose ",(0,s.jsx)(n.strong,{children:"New Capture"})]}),"\n",(0,s.jsx)(n.p,{children:"All of the available capture connectors \u2014 representing the possible data sources \u2014 appear as tiles."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the ",(0,s.jsx)(n.strong,{children:"Amazon S3"})," tile and click ",(0,s.jsx)(n.strong,{children:"Capture"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A form appears with the properties required for an S3 capture. Every connector requires different properties to configure."}),"\n",(0,s.jsx)(n.p,{children:"First, you'll name your capture."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click inside the ",(0,s.jsx)(n.strong,{children:"Name"})," box."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Names of entities in Flow must be unique. They're organized by prefixes, similar to paths in a file system."}),"\n",(0,s.jsxs)(n.p,{children:["You'll see one or more prefixes pertaining to your organization.\nThese prefixes represent the ",(0,s.jsx)(n.strong,{children:"namespaces"})," of Flow to which you have access."]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click your prefix from the dropdown and append a unique name after it. For example, ",(0,s.jsx)(n.code,{children:"myOrg/yourname/citibiketutorial"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next, fill out the required properties for S3."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AWS Access Key ID"})," and ",(0,s.jsx)(n.strong,{children:"AWS Secret Access Key"}),": The bucket is public, so you can leave these fields blank."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AWS Region"}),": ",(0,s.jsx)(n.code,{children:"us-east-1"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Bucket"}),": ",(0,s.jsx)(n.code,{children:"tripdata"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Prefix"}),": The storage bucket isn't organized by prefixes, so leave this blank."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Match Keys"}),": ",(0,s.jsx)(n.code,{children:"2022"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The Citi Bike storage bucket has been around for a while. Some of the older datasets have incorrect file extensions or contain data in different formats. By selecting a subset of files from the year 2022, you'll make things easier to manage for the purposes of this tutorial.\n(In a real-world use case, you'd likely reconcile the different schemas of the various data formats using a ",(0,s.jsx)(n.strong,{children:"derivation"}),".\n",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1463/concepts/#derivations",children:"Derivations"})," are a more advanced Flow skill.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Flow uses the configuration you provided to initiate a connection with S3. It generates a list of ",(0,s.jsx)(n.strong,{children:"collections"})," that will store the data inside Flow. In this case, there's just one collection from the bucket."]}),"\n",(0,s.jsx)(n.p,{children:"Once this process completes, you can move on to the next step. If there's an error, go back and check your configuration."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Flow deploys, or ",(0,s.jsx)(n.strong,{children:"publishes"}),", your capture, including your change to the schema. You'll see a notification when the this is complete."]}),"\n",(0,s.jsx)(n.p,{children:"A subset of data from the Citi Bike tripdata bucket has been captured to a Flow collection. Now, you can materialize that data to Snowflake."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Materialize Collections"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prepare-snowflake-to-use-with-flow",children:"Prepare Snowflake to use with Flow"}),"\n",(0,s.jsx)(n.p,{children:"Before you can materialize from Flow to Snowflake, you need to complete some setup steps."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Leave the Flow web app open. In a new window or tab, go to your Snowflake console."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you're a new trial user, you should have received instructions by email. For additional help in this section, see the ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide-getting-started.html",children:"Snowflake documentation"}),"."]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a new SQL worksheet if you don't have one open."}),"\n",(0,s.jsx)(n.p,{children:"This provides an interface where you can run queries."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Paste the follow script into the console, changing the value for ",(0,s.jsx)(n.code,{children:"estuary_password"})," from ",(0,s.jsx)(n.code,{children:"secret"})," to a strong password):"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"set database_name = 'ESTUARY_DB';\nset warehouse_name = 'ESTUARY_WH';\nset estuary_role = 'ESTUARY_ROLE';\nset estuary_user = 'ESTUARY_USER';\nset estuary_password = 'secret';\nset estuary_schema = 'ESTUARY_SCHEMA';\n-- create role and schema for Estuary\ncreate role if not exists identifier($estuary_role);\ngrant role identifier($estuary_role) to role SYSADMIN;\n-- Create snowflake DB\ncreate database if not exists identifier($database_name);\nuse database identifier($database_name);\ncreate schema if not exists identifier($estuary_schema);\n-- create a user for Estuary\ncreate user if not exists identifier($estuary_user)\npassword = $estuary_password\ndefault_role = $estuary_role\ndefault_warehouse = $warehouse_name;\ngrant role identifier($estuary_role) to user identifier($estuary_user);\ngrant all on schema identifier($estuary_schema) to identifier($estuary_role);\n-- create a warehouse for estuary\ncreate warehouse if not exists identifier($warehouse_name)\nwarehouse_size = xsmall\nwarehouse_type = standard\nauto_suspend = 60\nauto_resume = true\ninitially_suspended = true;\n-- grant Estuary role access to warehouse\ngrant USAGE\non warehouse identifier($warehouse_name)\nto role identifier($estuary_role);\n-- grant Estuary access to database\ngrant CREATE SCHEMA, MONITOR, USAGE on database identifier($database_name) to role identifier($estuary_role);\n-- change role to ACCOUNTADMIN for STORAGE INTEGRATION support to Estuary (only needed for Snowflake on GCP)\nuse role ACCOUNTADMIN;\ngrant CREATE INTEGRATION on account to role identifier($estuary_role);\nuse role sysadmin;\nCOMMIT;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Click the drop-down arrow next to the ",(0,s.jsx)(n.strong,{children:"Run"})," button and click ",(0,s.jsx)(n.strong,{children:"Run All"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Snowflake runs all the queries and is ready to use with Flow."}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Return to the Flow web application."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"materialize-your-flow-collection-to-snowflake",children:"Materialize your Flow collection to Snowflake"}),"\n",(0,s.jsxs)(n.p,{children:["You were directed to the ",(0,s.jsx)(n.strong,{children:"Materializations"})," page.\nAll of the available materialization connectors \u2014 representing the possible data destinations \u2014 are shown as tiles."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the ",(0,s.jsx)(n.strong,{children:"Snowflake"})," tile and click ",(0,s.jsx)(n.strong,{children:"Materialization"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A new form appears with the properties required to materialize to Snowflake."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click inside the ",(0,s.jsx)(n.strong,{children:"Name"})," box."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click your prefix from the dropdown and append a unique name after it. For example, ",(0,s.jsx)(n.code,{children:"myOrg/yourname/citibiketutorial"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next, fill out the required properties for Snowflake (most of these come from the script you just ran)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Host URL"}),": This is the URL you use to log into Snowflake. If you recently signed up for a trial, it should be in your email. Omit the protocol from the beginning. For example, ",(0,s.jsx)(n.code,{children:"ACCOUNTID.region.cloudprovider.snowflakecomputing.com"})," or ",(0,s.jsx)(n.code,{children:"orgname-accountname.snowflakecomputing.com"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used",children:"Learn more about account identifiers and host URLs."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Account"}),": Your account identifier. This is part of the Host URL. Using the previous examples, it would be ",(0,s.jsx)(n.code,{children:"ACCOUNTID"})," or ",(0,s.jsx)(n.code,{children:"accountname"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"User"}),": ",(0,s.jsx)(n.code,{children:"ESTUARY_USER"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Password"}),": ",(0,s.jsx)(n.code,{children:"secret"})," (Substitute the password you set in the script.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Database"}),": ",(0,s.jsx)(n.code,{children:"ESTUARY_DB"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Schema"}),": ",(0,s.jsx)(n.code,{children:"ESTUARY_SCHEMA"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warehouse"}),": ",(0,s.jsx)(n.code,{children:"ESTUARY_WH"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Role"}),": ",(0,s.jsx)(n.code,{children:"ESTUARY_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Scroll down to view the ",(0,s.jsx)(n.strong,{children:"Source Collections"})," section and change the default name in the ",(0,s.jsx)(n.strong,{children:"Table"})," field to ",(0,s.jsx)(n.code,{children:"CitiBikeData"})," or another name of your choosing."]}),"\n",(0,s.jsxs)(n.p,{children:["Every Flow collection is defined by one or more ",(0,s.jsx)(n.strong,{children:"schemas"}),".\nBecause S3 is a cloud storage bucket, the schema used to ingest the data is quite permissive."]}),"\n",(0,s.jsx)(n.p,{children:"You'll add a more detailed schema for Flow to use to materialize the data to Snowflake. This will ensure that each field from the source CSV is mapped to a column in the Snowflake table."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["With the collection still selected, click its ",(0,s.jsx)(n.strong,{children:"Collection"})," tab. Then, click ",(0,s.jsx)(n.strong,{children:"Schema Inference"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Flow examines the data and automatically generates a new ",(0,s.jsx)(n.code,{children:"readSchema"}),". Scroll through and note the differences between this and the original schema, renamed ",(0,s.jsx)(n.code,{children:"writeSchema"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Apply Inferred Schema"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Flow uses the configuration you provided to initiate a connection with Snowflake and generate a specification with details of the materialization."}),"\n",(0,s.jsx)(n.p,{children:"Once this process completes, you can move on to the next step. If there's an error, go back and check your configuration."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Flow publishes the materialization."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Return to the Snowflake console and expand ESTUARY_DB and ESTUARY_SCHEMA.\nYou'll find the materialized table there."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"You've created a complete Data Flow that ingests the Citi Bike CSV files from an Amazon S3 bucket and materializes them into your Snowflake database."}),"\n",(0,s.jsx)(n.p,{children:"When Citi Bike uploads new data, it'll be reflected in Snowflake in near-real-time, so long as you don't disable your capture or materialization."}),"\n",(0,s.jsx)(n.p,{children:"Data warehouses like Snowflake are designed to power data analytics. From here, you can begin any number of analytical workflows."}),"\n",(0,s.jsx)(n.h4,{id:"want-to-learn-more",children:"Want to learn more?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For more information on the connectors you used today, see the pages on ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1463/reference/Connectors/capture-connectors/amazon-s3",children:"S3"})," and ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1463/reference/Connectors/materialization-connectors/Snowflake",children:"Snowflake"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can create a Data Flow using any combination of supported connectors with a similar process to the one you followed in this tutorial. For a more generalized procedure, see the ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1463/guides/create-dataflow",children:"guide to create a Data Flow"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},61114:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(96540),i=t(29880),r=t(74848);i.K.initialize({startOnLoad:!0});const a=e=>{let{chart:n}=e;return(0,s.useEffect)((()=>{i.K.contentLoaded()}),[]),(0,r.jsx)("div",{className:"mermaid",children:n})}}}]);