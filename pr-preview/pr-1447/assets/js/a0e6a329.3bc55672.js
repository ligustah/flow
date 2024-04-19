"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5266],{50214:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(74848),i=r(28453);const s={sidebar_position:3},c="Azure Blob Storage",o={id:"reference/Connectors/capture-connectors/azure-blob-storage",title:"Azure Blob Storage",description:"This connector captures data from an Azure Blob Storage Account.",source:"@site/docs/reference/Connectors/capture-connectors/azure-blob-storage.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/azure-blob-storage",permalink:"/pr-preview/pr-1447/reference/Connectors/capture-connectors/azure-blob-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/azure-blob-storage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for SQL Server",permalink:"/pr-preview/pr-1447/reference/Connectors/capture-connectors/SQLServer/google-cloud-sql-sqlserver"},next:{title:"Datadog HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1447/reference/Connectors/capture-connectors/datadog-ingest"}},l={},d=[{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:2},{value:"Setup <strong>a Microsoft Entra application</strong>",id:"setup-a-microsoft-entra-application",level:2},{value:"<strong>Configuration</strong>",id:"configuration",level:2},{value:"<strong>Properties</strong>",id:"properties",level:3},{value:"<strong>Endpoint</strong>",id:"endpoint",level:4},{value:"<strong>Bindings</strong>",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"<strong>Advanced: Parsing cloud storage data</strong>",id:"advanced-parsing-cloud-storage-data",level:3},{value:"CSV configuration",id:"csv-configuration",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"azure-blob-storage",children:"Azure Blob Storage"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from an Azure Blob Storage Account."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.code,{children:"[ghcr.io/estuary/source-azure-blob-storage:dev](https://ghcr.io/estuary/source-s3:dev)"})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,t.jsx)(n.p,{children:"You will need the following values to authenticate to Azure and an active subscription"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Subscription ID"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Client ID"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Client Secret"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Tenant ID"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"setup-a-microsoft-entra-application",children:["Setup ",(0,t.jsx)(n.strong,{children:"a Microsoft Entra application"})]}),"\n",(0,t.jsx)(n.p,{children:"These values can be obtained from the portal, here's the instructions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Get Subscription ID","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Login into your Azure account","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.a,{href:"https://portal.azure.com/#view/Microsoft_Azure_Billing/SubscriptionsBladeV2",children:"Subscriptions"})," in the left sidebar"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Select whichever subscription is needed"}),"\n",(0,t.jsx)(n.li,{children:"Click on Overview"}),"\n",(0,t.jsx)(n.li,{children:"Copy the Subscription ID"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Get Client ID / Client Secret / Tenant ID","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Azure Active Directory, then select App registrations."}),"\n",(0,t.jsx)(n.li,{children:"Click New registration, fill out the required fields like Name and Supported account types."}),"\n",(0,t.jsx)(n.li,{children:"Click Register to create the new app registration."}),"\n",(0,t.jsx)(n.li,{children:"After registration, note down the Application (client) ID value."}),"\n",(0,t.jsx)(n.li,{children:"Go to Certificates & secrets and click New client secret. Fill in a Description, choose a Secret value type and length, then click Add to save the secret. A pop-up will appear with your new client secret value; copy it immediately as you won't be able to view it again."}),"\n",(0,t.jsx)(n.li,{children:"Go back to Overview page and copy the Directory (tenant) ID under Properties."}),"\n",(0,t.jsx)(n.li,{children:"Your service principal is now created, and you have its Application (client) ID, Directory (tenant) ID, and a client secret key. Use these values when configuring your application or service to interact with Azure services that require authentication through AAD."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:(0,t.jsx)(n.strong,{children:"Configuration"})}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,t.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Azure Blob Storage source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:(0,t.jsx)(n.strong,{children:"Properties"})}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:(0,t.jsx)(n.strong,{children:"Endpoint"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/advanced"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/advanced/ascendingKeys"}),(0,t.jsx)(n.td,{children:"Ascending Keys"}),(0,t.jsx)(n.td,{children:"Improve sync speeds by listing files from the end of the last sync, rather than listing the entire bucket prefix. This requires that you write objects in ascending lexicographic order, such as an RFC-3339 timestamp, so that key ordering matches modification time ordering. If data is not ordered correctly, using ascending keys could cause errors."}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/credentials"}),(0,t.jsx)(n.td,{children:"Credentials"}),(0,t.jsx)(n.td,{children:"Azure credentials used to authenticate with Azure Blob Storage."}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/credentials/storageAccountName"}),(0,t.jsx)(n.td,{children:"Storage Account Name"}),(0,t.jsx)(n.td,{children:"The name of the Azure Blob Storage account."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/credentials/azureClientID"}),(0,t.jsx)(n.td,{children:"Azure Client ID"}),(0,t.jsx)(n.td,{children:"The client ID used to authenticate with Azure Blob Storage."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required if using OAuth2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/credentials/azureClientSecret"}),(0,t.jsx)(n.td,{children:"Azure Client Secret"}),(0,t.jsx)(n.td,{children:"The client secret used to authenticate with Azure Blob Storage."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required if using OAuth2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/credentials/azureTenantID"}),(0,t.jsx)(n.td,{children:"Azure Tenant ID"}),(0,t.jsx)(n.td,{children:"The ID of the Azure tenant where the Azure Blob Storage account is located."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required if using OAuth2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/credentials/azureSubscriptionID"}),(0,t.jsx)(n.td,{children:"Azure Subscription ID"}),(0,t.jsx)(n.td,{children:"The ID of the Azure subscription that contains the Azure Blob Storage account."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required if using OAuth2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/credentials/ConnectionString"}),(0,t.jsx)(n.td,{children:"Connection String"}),(0,t.jsx)(n.td,{children:"The connection string used to authenticate with Azure Blob Storage."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required if using the Connection String authentication."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/containerName"}),(0,t.jsx)(n.td,{children:"Container Name"}),(0,t.jsx)(n.td,{children:"The name of the Azure Blob Storage container to read from."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/matchKeys"}),(0,t.jsx)(n.td,{children:"Match Keys"}),(0,t.jsx)(n.td,{children:'Filter applied to all object keys under the prefix. If provided, only objects whose absolute path matches this regex will be read. For example, you can use ".*\\.json" to only capture json files.'}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:(0,t.jsx)(n.strong,{children:"Bindings"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/stream"}),(0,t.jsx)(n.td,{children:"Container"}),(0,t.jsx)(n.td,{children:"The container name"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"required"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-azure-blob-storage:dev"\n        config:\n          containerName: example\n          credentials:\n            azureClientID: e2889d31-aaaa-bbbb-cccc-85bb5a33d7a5\n            azureClientSecret: just-a-secret\n            azureSubscriptionID: f1a5bc81-aaaa-bbbb-cccc-b926c154ecc7\n            azureTenantID: d494a2c6-aaaa-bbbb-cccc-ef1e5eaa64a6\n            storageAccountName: example\n          parser:\n            compression: zip\n            format:\n              type: csv\n              config:\n                delimiter: ","\n                encoding: UTF-8\n                errorThreshold: 5\n                headers: [ID, username, first_name, last_name]\n                lineEnding: "\\\\r"\n                quote: "\\""\n    bindings:\n      - resource:\n          stream: example\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"advanced-parsing-cloud-storage-data",children:(0,t.jsx)(n.strong,{children:"Advanced: Parsing cloud storage data"})}),"\n",(0,t.jsx)(n.p,{children:"Cloud storage platforms like Azure Blob Storage can support a wider variety of file types than other data source systems. For each of these file types, Flow must parse and translate data into collections with defined fields and JSON schemas."}),"\n",(0,t.jsx)(n.p,{children:"By default, the parser will automatically detect the type and shape of the data in your bucket, so you won't need to change the parser configuration for most captures."}),"\n",(0,t.jsx)(n.p,{children:"However, the automatic detection may be incorrect in some cases. To fix or prevent this, you can provide explicit information in the parser configuration, which is part of the endpoint configuration for this connector."}),"\n",(0,t.jsx)(n.p,{children:"The parser configuration includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compression"}),": Specify how the bucket contents are compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"zip"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"gzip"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"zstd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"none"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Format"}),": Specify the data format, which determines how it will be parsed.\nOptions are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto"}),": If no format is specified, the connector will try to determine it automatically."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Avro"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"CSV"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"JSON"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Protobuf"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"W3C Extended Log"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"info"}),"\n",(0,t.jsx)(n.p,{children:"At this time, Flow only supports S3 captures with data of a single file type.\nSupport for multiple file types, which can be configured on a per-binding basis,\nwill be added in the future."}),"\n",(0,t.jsx)(n.p,{children:"For now, use a prefix in the endpoint configuration to limit the scope of each capture to data of a single file type."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"csv-configuration",children:"CSV configuration"}),"\n",(0,t.jsx)(n.p,{children:"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Delimiter"}),". Options are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Comma (",(0,t.jsx)(n.code,{children:'","'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Pipe (",(0,t.jsx)(n.code,{children:'"|"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Space (",(0,t.jsx)(n.code,{children:'"0x20"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Semicolon (",(0,t.jsx)(n.code,{children:'";"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Tab (",(0,t.jsx)(n.code,{children:'"0x09"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Vertical tab (",(0,t.jsx)(n.code,{children:'"0x0B"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Unit separator (",(0,t.jsx)(n.code,{children:'"0x1F"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["SOH (",(0,t.jsx)(n.code,{children:'"0x01"'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Encoding"})," type, specified by its ",(0,t.jsx)(n.a,{href:"https://encoding.spec.whatwg.org/#names-and-labels",children:"WHATWG label"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optionally, an ",(0,t.jsx)(n.strong,{children:"Error threshold"}),", as an acceptable\npercentage of errors. If set to a number greater than zero, malformed\nrows that fall within the threshold will be excluded from the capture."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Escape characters"}),". Options are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Backslash (",(0,t.jsx)(n.code,{children:'"\\\\"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Disable escapes (",(0,t.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optionally, a list of column ",(0,t.jsx)(n.strong,{children:"Headers"}),", if not already included in the first row of the CSV file."]}),"\n",(0,t.jsx)(n.p,{children:"If any headers are provided, it is assumed that the provided list of\nheaders is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers),\nand you must provide a header value for every column in the file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Line ending"})," values"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CRLF (",(0,t.jsx)(n.code,{children:'"\\\\r\\\\n"'}),") (Windows)"]}),"\n",(0,t.jsxs)(n.li,{children:["CR (",(0,t.jsx)(n.code,{children:'"\\\\r"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["LF (",(0,t.jsx)(n.code,{children:'"\\\\n"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Record Separator (",(0,t.jsx)(n.code,{children:'"0x1E"'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Quote character"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Double Quote (",(0,t.jsx)(n.code,{children:'"\\""'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Single Quote (",(0,t.jsx)(n.code,{children:'"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Disable Quoting (",(0,t.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The sample specification ",(0,t.jsx)(n.a,{href:"https://docs.estuary.dev/reference/Connectors/capture-connectors/amazon-s3/#sample",children:"above"})," includes these fields."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);