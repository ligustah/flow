"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[228],{93290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(74848),n=r(28453);const i={},d="Starburst",c={id:"reference/Connectors/materialization-connectors/starburst",title:"Starburst",description:"This connector materializes transactionally Flow collections into Iceberg or Delta Lake tables using AWS S3 storage in Starburst Galaxy.",source:"@site/docs/reference/Connectors/materialization-connectors/starburst.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/starburst",permalink:"/pr-preview/pr-1467/reference/Connectors/materialization-connectors/starburst",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/starburst.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQLite",permalink:"/pr-preview/pr-1467/reference/Connectors/materialization-connectors/SQLite"},next:{title:"TimescaleDB",permalink:"/pr-preview/pr-1467/reference/Connectors/materialization-connectors/timescaledb"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Reserved words",id:"reserved-words",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"starburst",children:"Starburst"}),"\n",(0,s.jsxs)(t.p,{children:["This connector materializes transactionally Flow collections into Iceberg or Delta Lake tables using AWS S3 storage in ",(0,s.jsx)(t.a,{href:"https://www.starburst.io/platform/starburst-galaxy/",children:"Starburst Galaxy"}),".\nStarburst Galaxy connector supports only standard(merge) updates."]}),"\n",(0,s.jsx)(t.p,{children:"The connector makes use of S3 AWS storage for storing temporarily data during the materialization process."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://ghcr.io/estuary/materialize-starburst:dev",children:(0,s.jsx)(t.code,{children:"ghcr.io/estuary/materialize-starburst:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Starburst Galaxy account (To create one: ",(0,s.jsx)(t.a,{href:"https://www.starburst.io/platform/starburst-galaxy/start/",children:"Staburst Galaxy start"})," that includes:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A running cluster containing an ",(0,s.jsx)(t.a,{href:"https://docs.starburst.io/starburst-galaxy/working-with-data/create-catalogs/object-storage/s3.html",children:"Amazon S3"})," catalog"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://docs.starburst.io/starburst-galaxy/data-engineering/working-with-data-lakes/table-formats/index.html#create-schema",children:"schema"})," which is a logical grouping of tables"]}),"\n",(0,s.jsxs)(t.li,{children:["Storage on S3 for temporary data with ",(0,s.jsx)(t.code,{children:"awsAccessKeyId"})," and ",(0,s.jsx)(t.code,{children:"awsSecretAccessKey"})," which should correspond to used catalog"]}),"\n",(0,s.jsx)(t.li,{children:"A user with a role assigned that grants access to create, modify, drop tables in specified Amazon S3 catalog"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:["To get host go to your Cluster -> Connection info -> Other clients (",(0,s.jsx)(t.a,{href:"https://docs.starburst.io/starburst-galaxy/working-with-data/query-data/connect-clients.html",children:"Connect clients"}),")"]}),"\n",(0,s.jsxs)(t.p,{children:['There is also need to grant access to temporary storage (Roles and privileges -> Select specific role -> Privileges -> Add privilege -> Location). "Create schema and table in location" should be selected. ',(0,s.jsx)(t.a,{href:"https://docs.starburst.io/starburst-galaxy/cluster-administration/manage-cluster-access/manage-users-roles-and-tags/account-and-cluster-privileges-and-entities.html#location-privileges-",children:"Doc"})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Starburst materialization, which will direct one or more of your Flow collections to new Starburst tables."}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Title"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required/Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/host"})})}),(0,s.jsx)(t.td,{children:"Host and optional port"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/catalog"})})}),(0,s.jsx)(t.td,{children:"Catalog Name"}),(0,s.jsx)(t.td,{children:"Galaxy catalog Catalog"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/schema"})})}),(0,s.jsx)(t.td,{children:"Schema Name"}),(0,s.jsx)(t.td,{children:"Default schema to materialize to"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/account"})})}),(0,s.jsx)(t.td,{children:"Account"}),(0,s.jsx)(t.td,{children:"Galaxy account name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/password"})})}),(0,s.jsx)(t.td,{children:"Password"}),(0,s.jsx)(t.td,{children:"Galaxy account password"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/awsAccessKeyId"})})}),(0,s.jsx)(t.td,{children:"AWS Access Key ID"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/awsSecretAccessKey"})})}),(0,s.jsx)(t.td,{children:"AWS Secret Access Key"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/region"})})}),(0,s.jsx)(t.td,{children:"AWS Region"}),(0,s.jsx)(t.td,{children:"Region of AWS storage"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/bucket"})})}),(0,s.jsx)(t.td,{children:"Bucket name"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/bucketPath"})})}),(0,s.jsx)(t.td,{children:"Bucket path"}),(0,s.jsx)(t.td,{children:"A prefix that will be used to store objects in S3."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"/advanced"}),(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"/advanced/updateDelay"}),(0,s.jsx)(t.td,{children:"Update Delay"}),(0,s.jsx)(t.td,{children:"Potentially reduce active warehouse time by increasing the delay between updates. Defaults to 30 minutes if unset."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"30m"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Title"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required/Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"/table"})})}),(0,s.jsx)(t.td,{children:"Table"}),(0,s.jsx)(t.td,{children:"Table name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/schema"})}),(0,s.jsx)(t.td,{children:"Alternative Schema"}),(0,s.jsx)(t.td,{children:"Alternative schema for this table"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"\nmaterializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n  \t    connector:\n    \t    config:\n              host: HOST:PORT\n              account: ACCOUNT\n              password: PASSWORD\n              catalog: CATALOG_NAME\n              schema: SCHEMA_NAME\n              awsAccessKeyId: AWS_ACCESS_KEY_ID\n              awsSecretAccessKey: AWS_SECRET_KEY_ID\n              region: REGION\n              bucket: BUCKET\n              bucketPath: BUCKET_PATH\n    \t    image: ghcr.io/estuary/materialize-starburst:dev\n  # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n      - resource:\n          table: ${table_name}\n          schema: default\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,s.jsxs)(t.p,{children:["Starburst Galaxy has a list of reserved words that must be quoted in order to be used as an identifier. Flow automatically quotes fields that are in the reserved words list. You can find this list in Trino's documentation ",(0,s.jsx)(t.a,{href:"https://trino.io/docs/current/language/reserved.html",children:"here"})," and in the table below."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["In Starburst Galaxy, objects created with quoted identifiers must always be referenced exactly as created, including the quotes. Otherwise, SQL statements and queries can result in errors. See the ",(0,s.jsx)(t.a,{href:"https://trino.io/docs/current/language/reserved.html#language-identifiers",children:"Trino docs"}),"."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Reserved words"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CUBE"}),(0,s.jsx)(t.td,{children:"INSERT"}),(0,s.jsx)(t.td,{children:"TABLE"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_CATALOG"}),(0,s.jsx)(t.td,{children:"INTERSECT"}),(0,s.jsx)(t.td,{children:"THEN"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_DATE"}),(0,s.jsx)(t.td,{children:"INTO"}),(0,s.jsx)(t.td,{children:"TRIM"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_PATH"}),(0,s.jsx)(t.td,{children:"IS"}),(0,s.jsx)(t.td,{children:"TRUE"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_ROLE"}),(0,s.jsx)(t.td,{children:"JOIN"}),(0,s.jsx)(t.td,{children:"UESCAPE"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_SCHEMA"}),(0,s.jsx)(t.td,{children:"JSON_ARRAY"}),(0,s.jsx)(t.td,{children:"UNION"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_TIME"}),(0,s.jsx)(t.td,{children:"JSON_EXISTS"}),(0,s.jsx)(t.td,{children:"UNNEST"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_TIMESTAMP"}),(0,s.jsx)(t.td,{children:"JSON_OBJECT"}),(0,s.jsx)(t.td,{children:"USING"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CURRENT_USER"}),(0,s.jsx)(t.td,{children:"JSON_QUERY"}),(0,s.jsx)(t.td,{children:"VALUES"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DEALLOCATE"}),(0,s.jsx)(t.td,{children:"JSON_TABLE"}),(0,s.jsx)(t.td,{children:"WHEN"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE"}),(0,s.jsx)(t.td,{children:"JSON_VALUE"}),(0,s.jsx)(t.td,{children:"WHERE"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DESCRIBE"}),(0,s.jsx)(t.td,{children:"LEFT"}),(0,s.jsx)(t.td,{children:"WITH"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DISTINCT"}),(0,s.jsx)(t.td,{children:"LIKE"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DROP"}),(0,s.jsx)(t.td,{children:"LISTAGG"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ELSE"}),(0,s.jsx)(t.td,{children:"LOCALTIME"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"END"}),(0,s.jsx)(t.td,{children:"LOCALTIMESTAMP"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ESCAPE"}),(0,s.jsx)(t.td,{children:"NATURAL"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"EXCEPT"}),(0,s.jsx)(t.td,{children:"NORMALIZE"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"EXECUTE"}),(0,s.jsx)(t.td,{children:"NOT"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"EXISTS"}),(0,s.jsx)(t.td,{children:"NULL"}),(0,s.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);