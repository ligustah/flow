"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7376],{15370:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(74848),i=s(28453);const t={sidebar_position:3},d="HTTP File",c={id:"reference/Connectors/capture-connectors/http-file",title:"HTTP File",description:"This connector captures data from an HTTP endpoint into a Flow collection.",source:"@site/docs/reference/Connectors/capture-connectors/http-file.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/http-file",permalink:"/pr-preview/pr-1398/reference/Connectors/capture-connectors/http-file",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/http-file.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Harvest",permalink:"/pr-preview/pr-1398/reference/Connectors/capture-connectors/harvest"},next:{title:"HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1398/reference/Connectors/capture-connectors/http-ingest"}},o={},l=[{value:"Supported data types",id:"supported-data-types",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Parsing HTTP-hosted data",id:"advanced-parsing-http-hosted-data",level:3},{value:"CSV configuration",id:"csv-configuration",level:4},{value:"Advanced: Using HTTP headers",id:"advanced-using-http-headers",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"http-file",children:"HTTP File"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from an HTTP endpoint into a Flow collection."}),"\n",(0,r.jsxs)(n.p,{children:["To capture data from an ",(0,r.jsx)(n.em,{children:"incoming"})," HTTP request, see the ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1398/reference/Connectors/capture-connectors/http-ingest",children:"HTTP Ingest"})," connector."]}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-http-file:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-http-file:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-data-types",children:"Supported data types"}),"\n",(0,r.jsx)(n.p,{children:"This connector automatically captures the data hosted at the specified URL into a single Flow collection."}),"\n",(0,r.jsx)(n.p,{children:"The following file types are supported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avro"}),"\n",(0,r.jsx)(n.li,{children:"CSV"}),"\n",(0,r.jsx)(n.li,{children:"JSON"}),"\n",(0,r.jsx)(n.li,{children:"Protobuf"}),"\n",(0,r.jsx)(n.li,{children:"W3C Extended Log"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following compression methods are supported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ZIP"}),"\n",(0,r.jsx)(n.li,{children:"GZIP"}),"\n",(0,r.jsx)(n.li,{children:"ZSTD"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, Flow automatically detects the file type and compression method.\nIf necessary, you can specify the correct file type, compression, and other properties (CSV only) using the optional ",(0,r.jsx)(n.a,{href:"#advanced-parsing-http-hosted-data",children:"parser configuration"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["To use this connector, you'll need the URL to an HTTP endpoint that hosts data of one of the supported types.\nThe HTTP endpoint must support ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD",children:(0,r.jsx)(n.code,{children:"HEAD"})})," HTTP requests, and the response to this request must include a ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified",children:(0,r.jsx)(n.code,{children:"Last-Modified"})})," header."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can send a test ",(0,r.jsx)(n.code,{children:"HEAD"})," request using Curl with the ",(0,r.jsx)(n.code,{children:"-I"})," parameter, for example:\n",(0,r.jsx)(n.code,{children:"curl -I https://my-site.com/my_hosted_dataset.json.zip"}),"\nUse ",(0,r.jsx)(n.a,{href:"https://reqbin.com/req/c-tmyvmbgu/curl-head-request-example",children:"this online tool"})," to easily do so in your browser."]})}),"\n",(0,r.jsx)(n.p,{children:"Some HTTP endpoints require credentials for access.\nIf this is the case, have your username and password ready."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1398/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the HTTP file source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/credentials"})}),(0,r.jsx)(n.td,{children:"Credentials"}),(0,r.jsx)(n.td,{children:"User credentials, if required to access the data at the HTTP URL."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/credentials/password"})}),(0,r.jsx)(n.td,{children:"Password"}),(0,r.jsx)(n.td,{children:"Password, if required to access the HTTP endpoint."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/credentials/user"})}),(0,r.jsx)(n.td,{children:"User"}),(0,r.jsx)(n.td,{children:"Username, if required to access the HTTP endpoint."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/headers"})}),(0,r.jsx)(n.td,{children:"Headers"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/headers/items"})}),(0,r.jsx)(n.td,{children:"Additional HTTP Headers"}),(0,r.jsx)(n.td,{children:"Additional HTTP headers when requesting the file. These are uncommon."}),(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"/headers/items/-/key"})})}),(0,r.jsx)(n.td,{children:"Header Key"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"/headers/items/-/value"})})}),(0,r.jsx)(n.td,{children:"Header Value"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser"})}),(0,r.jsx)(n.td,{children:"Parser Configuration"}),(0,r.jsx)(n.td,{children:"Configures how files are parsed"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser/compression"})}),(0,r.jsx)(n.td,{children:"Compression"}),(0,r.jsx)(n.td,{children:"Determines how to decompress the contents. The default, 'Auto', will try to determine the compression automatically."}),(0,r.jsx)(n.td,{children:"null, string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser/format"})}),(0,r.jsx)(n.td,{children:"Format"}),(0,r.jsx)(n.td,{children:"Determines how to parse the contents. The default, 'Auto', will try to determine the format automatically based on the file extension or MIME type, if available."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"type":"auto"}'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser/format/type"})}),(0,r.jsx)(n.td,{children:"Type"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/url"})})}),(0,r.jsx)(n.td,{children:"HTTP File URL"}),(0,r.jsx)(n.td,{children:"A valid HTTP url for downloading the source file."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Name of the dataset"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-http-file:dev\n        config:\n          url: https://my-site.com/my_hosted_dataset.json.zip\n          parser:\n            compression: zip\n            format:\n              type: csv\n              config:\n                delimiter: ","\n                encoding: UTF-8\n                errorThreshold: 5\n                headers: [ID, username, first_name, last_name]\n                lineEnding: "\\\\r"\n                quote: "\\""\n    bindings:\n      - resource:\n          stream: my_hosted_dataset.json.zip\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"advanced-parsing-http-hosted-data",children:"Advanced: Parsing HTTP-hosted data"}),"\n",(0,r.jsx)(n.p,{children:"HTTP endpoints can support a variety of file types.\nFor each file type, Flow must parse\nand translate data into collections with defined fields and JSON schemas."}),"\n",(0,r.jsx)(n.p,{children:"By default, the parser will automatically detect the type and shape of the data at the HTTP endpoint,\nso you won't need to change the parser configuration for most captures."}),"\n",(0,r.jsx)(n.p,{children:"However, the automatic detection may be incorrect in some cases.\nTo fix or prevent this, you can provide explicit information in the parser configuration,\nwhich is part of the endpoint configuration for this connector."}),"\n",(0,r.jsx)(n.p,{children:"The parser configuration includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compression"}),": Specify how the data is compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"zip"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"gzip"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"zstd"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"none"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Format"}),": Specify the data format, which determines how it will be parsed.\nIf no file type is specified, the connector will try to determine the file type automatically\nOptions are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Avro"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"CSV"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"JSON"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Protobuf"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"W3C Extended Log"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"csv-configuration",children:"CSV configuration"}),"\n",(0,r.jsx)(n.p,{children:"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Delimiter"}),". Options are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comma (",(0,r.jsx)(n.code,{children:'","'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Pipe (",(0,r.jsx)(n.code,{children:'"|"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Space (",(0,r.jsx)(n.code,{children:'"0x20"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Semicolon (",(0,r.jsx)(n.code,{children:'";"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Tab (",(0,r.jsx)(n.code,{children:'"0x09"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Vertical tab (",(0,r.jsx)(n.code,{children:'"0x0B"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Unit separator (",(0,r.jsx)(n.code,{children:'"0x1F"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["SOH (",(0,r.jsx)(n.code,{children:'"0x01"'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Encoding"})," type, specified by its ",(0,r.jsx)(n.a,{href:"https://encoding.spec.whatwg.org/#names-and-labels",children:"WHATWG label"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Optionally, an ",(0,r.jsx)(n.strong,{children:"Error threshold"}),", as an acceptable percentage of errors. If set to a number greater than zero, malformed rows that fall within the threshold will be excluded from the capture."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Escape characters"}),". Options are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Backslash (",(0,r.jsx)(n.code,{children:'"\\\\"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Disable escapes (",(0,r.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Optionally, a list of column ",(0,r.jsx)(n.strong,{children:"Headers"}),", if not already included in the first row of the CSV file."]}),"\n",(0,r.jsx)(n.p,{children:"If any headers are provided, it is assumed that the provided list of headers is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers), and you must provide a header value for every column in the file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Line ending"})," values"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CRLF (",(0,r.jsx)(n.code,{children:'"\\\\r\\\\n"'}),") (Windows)"]}),"\n",(0,r.jsxs)(n.li,{children:["CR (",(0,r.jsx)(n.code,{children:'"\\\\r"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["LF (",(0,r.jsx)(n.code,{children:'"\\\\n"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Record Separator (",(0,r.jsx)(n.code,{children:'"0x1E"'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Quote character"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Double Quote (",(0,r.jsx)(n.code,{children:'"\\""'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Single Quote (",(0,r.jsx)(n.code,{children:'"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Disable Quoting (",(0,r.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The sample specification ",(0,r.jsx)(n.a,{href:"#sample",children:"above"})," includes these fields."]}),"\n",(0,r.jsx)(n.h3,{id:"advanced-using-http-headers",children:"Advanced: Using HTTP headers"}),"\n",(0,r.jsxs)(n.p,{children:["For data accessed through certain APIs, you may need to send ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header",children:"headers as part of your HTTP request"}),".\nThis is uncommon, and is supported by the optional ",(0,r.jsx)(n.strong,{children:"Headers"})," configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["This configuration section is ",(0,r.jsxs)(n.a,{href:"/pr-preview/pr-1398/concepts/connectors#protecting-secrets",children:["encrypted with ",(0,r.jsx)(n.code,{children:"sops"})]}),", so you can safely include secretes such as API keys."]}),"\n",(0,r.jsx)(n.p,{children:"See the source data's API documentation for headers that may be required for your capture."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);