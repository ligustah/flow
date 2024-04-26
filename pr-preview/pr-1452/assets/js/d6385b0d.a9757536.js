"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3109],{15776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=t(74848),a=t(28453),s=t(11470),i=t(19365);const l={sidebar_position:3},o="Create a real-time materialized view in PostgreSQL",c={id:"getting-started/tutorials/continuous-materialized-view",title:"Create a real-time materialized view in PostgreSQL",description:"PostgreSQL supports materialized views: database objects that contain the result of a query, usually a focused subset of a large dataset.",source:"@site/docs/getting-started/tutorials/continuous-materialized-view.md",sourceDirName:"getting-started/tutorials",slug:"/getting-started/tutorials/continuous-materialized-view",permalink:"/pr-preview/pr-1452/getting-started/tutorials/continuous-materialized-view",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/tutorials/continuous-materialized-view.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create your first dataflow with Amazon S3 and Snowflake",permalink:"/pr-preview/pr-1452/getting-started/tutorials/dataflow-s3-snowflake"},next:{title:"Flow user guides",permalink:"/pr-preview/pr-1452/guides/"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Loading the Wikipedia Demo",id:"loading-the-wikipedia-demo",level:2},{value:"Check out the source data",id:"check-out-the-source-data",level:2},{value:"Add a derivation to transform data",id:"add-a-derivation-to-transform-data",level:2},{value:"Create the continuous materialized view",id:"create-the-continuous-materialized-view",level:2},{value:"Explore the results",id:"explore-the-results",level:2},{value:"Resources",id:"resources",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-real-time-materialized-view-in-postgresql",children:"Create a real-time materialized view in PostgreSQL"}),"\n",(0,r.jsxs)(n.p,{children:["PostgreSQL supports ",(0,r.jsx)(n.em,{children:"materialized views"}),": database objects that contain the result of a query, usually a focused subset of a large dataset."]}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, you'll use Flow and your Postgres instance to create something that's not possible in Postgres alone:\na materialized view that updates continuously based on a real-time data feed."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An Estuary Flow account. If you don't have one, visit the ",(0,r.jsx)(n.a,{href:"https://dashboard.estuary.dev",children:"Flow web app"})," to register for free."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A GitLab, GitHub, or BitBucket account. You'll use this to log into ",(0,r.jsx)(n.a,{href:"https://www.gitpod.io/",children:"GitPod"}),", the cloud development environment integrated with Flow."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Alternatively, you can complete this tutorial using a local development environment.\nIn that case, you'll need to ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/getting-started/installation#get-started-with-the-flow-cli",children:"install flowctl locally"}),".\nNote that the steps you'll need to take will be different. Refer to this ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/guides/flowctl/create-derivation#create-a-derivation-locally",children:"guide"})," for help."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A Postgres database set up to ",(0,r.jsx)(n.a,{href:"/reference/Connectors/materialization-connectors/PostgreSQL/#setup",children:"allow connections from Flow"}),".\nAmazon RDS, Amazon Aurora, Google Cloud SQL, Azure Database for PostgreSQL, and self-hosted databases are supported."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Materialized views in Postgres give you a powerful way narrow down a huge dataset into a compact one that you can easily monitor.\nBut if your data is updating in real-time, traditional materialized views introduce latency. They're batch workflows \u2014 the query is run at a set interval."}),"\n",(0,r.jsxs)(n.p,{children:["To get around this, you'll need to perform a real-time transformation elsewhere.\nFlow ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/concepts/#derivations",children:"derivations"})," are a great way to do this."]}),"\n",(0,r.jsxs)(n.p,{children:["For this example, you'll use Estuary's public data collection of recent changes to Wikipedia,\ncaptured from the ",(0,r.jsx)(n.a,{href:"https://www.mediawiki.org/wiki/API:Recent_changes_stream",children:"Wikimedia Foundation's event stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The raw dataset is quite large.\nIt captures every change to the platform \u2014 about 30 per second \u2014  and includes various properties.\nWritten to a Postgres table, it quickly grows to an size that's very expensive to query."}),"\n",(0,r.jsx)(n.p,{children:"First, you'll scope the raw data down to a small fact table with a derivation."}),"\n",(0,r.jsx)(n.p,{children:"You'll then materialize both the raw and transformed datasets to your Postgres instance and compare performance."}),"\n",(0,r.jsx)(n.h2,{id:"loading-the-wikipedia-demo",children:"Loading the Wikipedia Demo"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.a,{href:"https://dashboard.estuary.dev/welcome?activeTab=demo",children:"Live Demo"})," page and click on ",(0,r.jsx)(n.code,{children:"See the capture"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"After accepting the pop up, Estuary will populate your Sources, Collections and Destinations with the Wikipedia Demo tasks."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"check-out-the-source-data",children:"Check out the source data"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Got the the ",(0,r.jsx)(n.a,{href:"https://dashboard.estuary.dev/collections",children:"collections page"})," of the Flow web app."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Search for ",(0,r.jsx)(n.code,{children:"demo/wikipedia/recentchange"})," and click on its name."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.strong,{children:"Collection Details"})," page, click the ",(0,r.jsx)(n.strong,{children:"Spec"})," tab."]}),"\n",(0,r.jsx)(n.p,{children:"The collection schema has many fields. Because Wikipedia sees a lot of edits,\nthis would yield a large, unwieldy table in Postgres."}),"\n",(0,r.jsx)(n.admonition,{title:"Tip",type:"info",children:(0,r.jsxs)(n.p,{children:["To save on performance, you can also perform this tutorial using the smaller ",(0,r.jsx)(n.code,{children:"demo/wikipedia/recentchange-sampled"})," collection. Apart from the collection name, all other steps are the same."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Learn more about ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/concepts/collections",children:"Flow collections"})," and ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/concepts/schemas",children:"schemas"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Now you'll create the derivation. A derivation is a new collection that's defined by a transformation.\nFirst, you'll define the collection's schema. Then, you'll write the transformation to shape the data to that schema."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"add-a-derivation-to-transform-data",children:"Add a derivation to transform data"}),"\n",(0,r.jsx)(n.p,{children:"You'll write your derivation using a cloud development environment integrated in the Flow web app."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go back to the ",(0,r.jsx)(n.a,{href:"https://dashboard.estuary.dev/collections",children:"collections page"})," and click the ",(0,r.jsx)(n.strong,{children:"New Transformation"})," button."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the source collection to the raw Wikipedia data. Search for and select ",(0,r.jsx)(n.code,{children:"demo/wikipedia/recentchange"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set the transformation language to SQL."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Give the derivation a name. From the dropdown, choose the name of your catalog prefix and append a unique name, for example ",(0,r.jsx)(n.code,{children:"yourprefix/wikipedia/user-fact-table"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Proceed to GitPod"})," to create your development environment. Sign in with one of the available account types."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.strong,{children:"New Workspace"})," screen, keep the ",(0,r.jsx)(n.strong,{children:"Context URL"})," option selected and click ",(0,r.jsx)(n.strong,{children:"Continue."})]}),"\n",(0,r.jsx)(n.p,{children:"A GitPod development environment opens.\nA stubbed-out derivation with a SQL transformation has already been created for you. Next, you'll locate and open the source files."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Each slash-delimited prefix of your derivation name has become a folder. Open the nested folders to locate a ",(0,r.jsx)(n.code,{children:"flow.yaml"})," file."]}),"\n",(0,r.jsxs)(n.p,{children:["Following the example above, you'd open the folders called ",(0,r.jsx)(n.code,{children:"yourprefix"}),", then ",(0,r.jsx)(n.code,{children:"wikipedia"}),", to find the correct ",(0,r.jsx)(n.code,{children:"flow.yaml"})," file. Its contents look like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"collections:\n  yourprefix/wikipedia/user-fact-table:\n    schema:\n      properties:\n        your_key:\n          type: string\n          required:\n            - your_key\n          type: object\n    key:\n      - /your_key\n    derive:\n      using:\n        sqlite:\n          migrations:\n            - user-fact-table.migration.0.sql\n      transforms:\n        - name: recentchange\n        source: demo/wikipedia/recentchange\n        shuffle: any\n        lambda: user-fact-table.lambda.recentchange.sql\n"})}),"\n",(0,r.jsx)(n.p,{children:"Your first order of business is to replace the placeholder schema and collection key.\nAs we saw earlier, the source collection's schema and key caused every Wikipedia event to generate a new document."}),"\n",(0,r.jsx)(n.p,{children:"You'll fix that here."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Replace the existing ",(0,r.jsx)(n.code,{children:"schema"})," and ",(0,r.jsx)(n.code,{children:"key"})," stanzas with the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"schema:\n   properties:\n     edits_this_day:\n       reduce:\n         strategy: sum\n       type: integer\n     date:\n       format: date\n       type: string\n     user:\n       type: string\n   reduce:\n     strategy: merge\n   required:\n     - user\n     - date\n     - edits_this_day\n   type: object\n key:\n   - /user\n   - /date\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The new schema contains ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/concepts/schemas#reduce-annotations",children:"reduction annotations"}),".\nThese sum the changes made by a given user on a given date.\nThe collection is now keyed on each unique combination of user ID and date.\nIt has just three fields:\nthe user, date, and the number of changes made by that user on that date."]}),"\n",(0,r.jsx)(n.p,{children:"Next, you'll add the transformation."}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"transforms"})," stanza, give the transformation a new name to differentiate it from the name of the source collection. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"transforms:\n  - name: dailychangesbyuser\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Update the shuffle key. Since we're working with a large dataset, this ensures that each user is processed by the same task ",(0,r.jsx)(n.strong,{children:"shard"}),".\nThis way, you'll prevent Flow from creating multiple counts for a given user and date combination."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Learn more about ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/concepts/derivations#shuffles",children:"shuffles"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"shuffle: { key: [ /user ] }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now, the transform needs is the SQL lambda function \u2014 the function that will shape the source data to fit the new schema.\nFlow has created another file to contain it."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the file called ",(0,r.jsx)(n.code,{children:"user-fact-table.lambda.recentchange.sql"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Replace its contents with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select $user, 1 as edits_this_day, date($meta$dt) as date where $user is not null;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This creates the ",(0,r.jsx)(n.code,{children:"edits_this_day"})," field we referenced earlier, and starts the counter at 1.\nIt converts the timestamp into a simplified date format.\nFinally, it filters out ",(0,r.jsx)(n.code,{children:"null"})," users (which occasionally occur in the Wikipedia data stream and would violate your schema)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"All pieces of the derivation are in place. Double check your files against these samples:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"flow.yaml",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"file=./samples/continuous-materialized-view/flow.yaml",children:"---\ncollections:\n  yourprefix/wikipedia/user-fact-table:\n    schema:\n      properties:\n        edits_this_day:\n          reduce:\n            strategy: sum\n          type: integer\n        date:\n          format: date\n          type: string\n        user:\n          type: string\n      reduce:\n        strategy: merge\n      required:\n        - user\n        - date\n        - edits_this_day\n      type: object\n    key:\n      - /user\n      - /date\n    derive:\n      using:\n        sqlite:\n          migrations:\n            - user-fact-table.migration.0.sql\n      transforms:\n        - name: dailychangesbyuser\n          source: demo/wikipedia/recentchange\n          shuffle: { key: [ /user ] }\n          lambda: user-fact-table.lambda.recentchange.sql\n"})})}),(0,r.jsx)(i.A,{value:"user-fact-table.lambda.recentchange.sql",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",metastring:"file=./samples/continuous-materialized-view/user-fact-table.lambda.recentchange.sql",children:" select $user, 1 as edits_this_day, date($meta$dt) as date where $user is not null;\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"12",children:["\n",(0,r.jsx)(n.li,{children:"Run the derivation locally and preview its output:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"flowctl preview --source flow.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"In your terminal, you'll see JSON documents that look like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"date":"2023-07-18","edits_this_day":3,"user":"WMrapids"}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This looks right: it includes the correctly formatted date, the number of edits, and the username.\nYou're ready to publish."}),"\n",(0,r.jsxs)(n.ol,{start:"13",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Stop the local derivation with ",(0,r.jsx)(n.strong,{children:"Ctrl-C"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Publish the derivation:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"flowctl catalog publish --source flow.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The message ",(0,r.jsx)(n.code,{children:"Publish successful"})," means you're all set.\nYour transformation will continue in real time based on the raw dataset, which is also updating in real time.\nYou're free to close your GitPod."]}),"\n",(0,r.jsx)(n.h2,{id:"create-the-continuous-materialized-view",children:"Create the continuous materialized view"}),"\n",(0,r.jsx)(n.p,{children:"Now, you'll materialize your new fact table to Postgres. You'll also materialize the source dataset to compare performance."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.a,{href:"https://dashboard.estuary.dev/materializations",children:"Destinations page"})," in the Flow web app."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"New Materialization"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Find the ",(0,r.jsx)(n.strong,{children:"PostgreSQL"})," and click ",(0,r.jsx)(n.strong,{children:"Materialization"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a unique name for the materialization, for example, ",(0,r.jsx)(n.code,{children:"yourprefix/yourname-materialized-views-demo"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fill out the ",(0,r.jsx)(n.strong,{children:"Basic Config"})," with:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A username and password for the Postgres instance."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Your database host and port."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The database name (if in doubt, use the default, ",(0,r.jsx)(n.code,{children:"postgres"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://docs.estuary.dev/reference/Connectors/materialization-connectors/PostgreSQL/",children:"connector documentation"})," if you need help finding these properties."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Source Collections"})," browser, search for and add the collection ",(0,r.jsx)(n.code,{children:"demo/wikipedia/recentchange"})," and name the corresponding Postgres Table ",(0,r.jsx)(n.code,{children:"wikipedia_raw"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Also search for and add the collection you just derived, (for example, ",(0,r.jsx)(n.code,{children:"yourprefix/wikipedia/user-fact-table"}),").\nName the corresponding Postgres table ",(0,r.jsx)(n.code,{children:"wikipedia_data_by_user"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"})," to test the connection."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"explore-the-results",children:"Explore the results"}),"\n",(0,r.jsxs)(n.p,{children:["In your Postgres client of choice, note the size of each table and how they quickly change.\nTry running some basic queries against both and compare performance.\nSee the ",(0,r.jsx)(n.a,{href:"https://estuary.dev/how-to-create-a-real-time-materialized-view-in-postgresql/#step-3-compare-performance/",children:"blog post"})," for ideas."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Once you're satisfied, and to prevent continual resource use, disable or delete your materialization from the\n",(0,r.jsx)(n.a,{href:"https://dashboard.estuary.dev/materializations",children:"Destinations page"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/pr-preview/pr-1452/concepts/derivations",children:"About derivations"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=u(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),j=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function b(e){const n=(0,x.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);