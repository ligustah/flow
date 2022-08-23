"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:8},o="Google Cloud Storage",l={unversionedId:"reference/Connectors/capture-connectors/gcs",id:"reference/Connectors/capture-connectors/gcs",title:"Google Cloud Storage",description:"This connector captures data from a Google Cloud Storage (GCS) bucket.",source:"@site/docs/reference/Connectors/capture-connectors/gcs.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/gcs",permalink:"/reference/Connectors/capture-connectors/gcs",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/gcs.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Google Analytics",permalink:"/reference/Connectors/capture-connectors/google-analytics"},next:{title:"Google Sheets",permalink:"/reference/Connectors/capture-connectors/google-sheets"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Parsing cloud storage data",id:"advanced-parsing-cloud-storage-data",level:3},{value:"CSV configuration",id:"csv-configuration",level:4},{value:"Advanced: Configure Google service account impersonation",id:"advanced-configure-google-service-account-impersonation",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,r.kt)("p",null,"This connector captures data from a Google Cloud Storage (GCS) bucket."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-gcs:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-gcs:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, either your GCS bucket must be public, or you must have access via a Google service account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For public buckets, verify that objects in the bucket are ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/access-control/making-data-public"},"publicly readable"),"."),(0,r.kt)("li",{parentName:"ul"},"For buckets accessed by a Google Service Account:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure that the user has been assigned a ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/understanding-roles"},"role")," with read access."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating"},"JSON service account key"),". Google's ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/docs/authentication/production"},"Application Default Credentials")," will use this file for authentication.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GCS source connector."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You might use ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/samples/storage-list-files-with-prefix"},"prefixes")," to organize your GCS bucket\nin a way that emulates a directory structure.\nThis connector can use prefixes in two ways: first, to perform the ",(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},(0,r.kt)("strong",{parentName:"a"},"discovery"))," phase of setup, and later, when the capture is running."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"You can specify a prefix in the endpoint configuration to limit the overall scope of data discovery."),(0,r.kt)("li",{parentName:"ul"},"You're required to specify prefixes on a per-binding basis. This allows you to map each prefix to a distinct Flow collection,\nand informs how the capture will behave in production.")),(0,r.kt)("p",{parentName:"div"},"To capture the entire bucket, omit ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," in the endpoint configuration and set ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," to the name of the bucket."))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/ascendingKeys")),(0,r.kt)("td",{parentName:"tr",align:null},"Ascending Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Improve sync speeds by listing files from the end of the last sync, rather than listing the entire bucket prefix. This requires that you write objects in ascending lexicographic order, such as an RFC-3339 timestamp, so that key ordering matches modification time ordering."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Google Cloud Storage bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/googleCredentials")),(0,r.kt)("td",{parentName:"tr",align:null},"Google Service Account"),(0,r.kt)("td",{parentName:"tr",align:null},"Service account JSON key to use as Application Default Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/matchKeys")),(0,r.kt)("td",{parentName:"tr",align:null},"Match Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter applied to all object keys under the prefix. If provided, only objects whose key (relative to the prefix) matches this regex will be read. For example, you can use ",'"',".","*","\\",".json",'"'," to only capture json files."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser")),(0,r.kt)("td",{parentName:"tr",align:null},"Parser Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures how files are parsed"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Compression"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to decompress the contents. The default, ","'","Auto","'",", will try to determine the compression automatically."),(0,r.kt)("td",{parentName:"tr",align:null},"null, string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/format")),(0,r.kt)("td",{parentName:"tr",align:null},"Format"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to parse the contents. The default, ","'","Auto","'",", will try to determine the format automatically based on the file extension or MIME type, if available."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type":"auto"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/format/type")),(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix within the bucket to capture from"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to dataset in the bucket, formatted as ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket-name/prefix-name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,r.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-gcs:dev\n        config:\n          bucket: my-bucket\n          googleCredentials:\n            "type": "service_account",\n            "project_id": "project-id",\n            "private_key_id": "key-id",\n            "private_key": "-----BEGIN PRIVATE KEY-----\\nprivate-key\\n-----END PRIVATE KEY-----\\n",\n            "client_email": "service-account-email",\n            "client_id": "client-id",\n            "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n            "token_uri": "https://accounts.google.com/o/oauth2/token",\n            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account-email"\n          parser:\n            compression: zip\n            format:\n              type: csv\n              config:\n                delimiter: ","\n                encoding: UTF-8\n                errorThreshold: 5\n                headers: [ID, username, first_name, last_name]\n                lineEnding: "\\\\r"\n                quote: "\\""\n    bindings:\n      - resource:\n          stream: my-bucket/${PREFIX}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n')),(0,r.kt)("p",null,"Your capture definition may be more complex, with additional bindings for different GCS prefixes within the same bucket."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,r.kt)("h3",{id:"advanced-parsing-cloud-storage-data"},"Advanced: Parsing cloud storage data"),(0,r.kt)("p",null,"Cloud storage platforms like GCS can support a wider variety of file types\nthan other data source systems. For each of these file types, Flow must parse\nand translate data into collections with defined fields and JSON schemas."),(0,r.kt)("p",null,"By default, the parser will automatically detect the type and shape of the data in your bucket,\nso you won't need to change the parser configuration for most captures."),(0,r.kt)("p",null,"However, the automatic detection may be incorrect in some cases.\nTo fix or prevent this, you can provide explicit information in the parser configuration,\nwhich is part of the endpoint configuration for this connector."),(0,r.kt)("p",null,"The parser configuration includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compression"),": Specify how the bucket contents are compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zstd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"none")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Format"),": Specify the data format, which determines how it will be parsed.\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Auto"),": If no format is specified, the connector will try to determine it automatically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Avro"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CSV"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"W3C Extended Log")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At this time, Flow only supports GCS captures with data of a single file type.\nSupport for multiple file types, which can be configured on a per-binding basis,\nwill be added in the future."),(0,r.kt)("p",{parentName:"div"},"For now, use a prefix in the endpoint configuration to limit the scope of each capture to data of a single file type."))))))),(0,r.kt)("h4",{id:"csv-configuration"},"CSV configuration"),(0,r.kt)("p",null,"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delimiter"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Comma (",(0,r.kt)("inlineCode",{parentName:"li"},'","'),")"),(0,r.kt)("li",{parentName:"ul"},"Pipe (",(0,r.kt)("inlineCode",{parentName:"li"},'"|"'),")"),(0,r.kt)("li",{parentName:"ul"},"Space (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x20"'),")"),(0,r.kt)("li",{parentName:"ul"},"Semicolon (",(0,r.kt)("inlineCode",{parentName:"li"},'";"'),")"),(0,r.kt)("li",{parentName:"ul"},"Tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x09"'),")"),(0,r.kt)("li",{parentName:"ul"},"Vertical tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x0B"'),")"),(0,r.kt)("li",{parentName:"ul"},"Unit separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1F"'),")"),(0,r.kt)("li",{parentName:"ul"},"SOH (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x01"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Encoding")," type, specified by its ",(0,r.kt)("a",{parentName:"p",href:"https://encoding.spec.whatwg.org/#names-and-labels"},"WHATWG label"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, an ",(0,r.kt)("strong",{parentName:"p"},"Error threshold"),", as an acceptable percentage of errors. If set to a number greater than zero, malformed rows that fall within the threshold will be excluded from the capture.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Escape characters"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Backslash (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable escapes (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, a list of column ",(0,r.kt)("strong",{parentName:"p"},"Headers"),", if not already included in the first row of the CSV file."),(0,r.kt)("p",{parentName:"li"},"If any headers are provided, it is assumed that the provided list of headers is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers), and you must provide a header value for every column in the file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Line ending")," values"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CRLF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r\\\\n"'),") (Windows)"),(0,r.kt)("li",{parentName:"ul"},"CR (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r"'),")"),(0,r.kt)("li",{parentName:"ul"},"LF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\n"'),")"),(0,r.kt)("li",{parentName:"ul"},"Record Separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1E"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Quote character")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Double Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\""'),")"),(0,r.kt)("li",{parentName:"ul"},"Single Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable Quoting (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto")))),(0,r.kt)("p",null,"The sample specification ",(0,r.kt)("a",{parentName:"p",href:"#sample"},"above")," includes these fields."),(0,r.kt)("h3",{id:"advanced-configure-google-service-account-impersonation"},"Advanced: Configure Google service account impersonation"),(0,r.kt)("p",null,"As part of your Google IAM management, you may have configured one service account to ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/impersonating-service-accounts"},"impersonate another service account"),".\nYou may find this useful when you want to easily control access to multiple service accounts with only one set of keys."),(0,r.kt)("p",null,"If necessary, you can configure this authorization model for a GCS capture in Flow using the GitOps workflow.\nTo do so, you'll enable sops encryption and impersonate the target account with JSON credentials."),(0,r.kt)("p",null,"Before you begin, make sure you're familiar with ",(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#protecting-secrets"},"how to encrypt credentials in Flow using sops"),"."),(0,r.kt)("p",null,"Use the following sample as a guide to add the credentials JSON to the capture's endpoint configuration.\nThe sample uses the ",(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#example-protect-portions-of-a-configuration"},"encrypted suffix feature")," of sops to encrypt only the sensitive credentials, but you may choose to encrypt the entire configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  bucket: <bucket-name>\n  googleCredentials_sops:\n    # URL containing the account to impersonate and the associated project\n    service_account_impersonation_url: https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/<target-account>@<project>.iam.gserviceaccount.com:generateAccessToken\n    # Credentials for the account that has been configured to impersonate the target.\n    source_credentials:\n        # In addition to the listed fields, copy and paste the rest of your JSON key file as your normally would\n        # for the `googleCredentials` field\n        client_email: <origin-account>@<anotherproject>.iam.gserviceaccount.com\n        token_uri: https://oauth2.googleapis.com/token\n        type: service_account\n    type: impersonated_service_account\n")))}u.isMDXComponent=!0}}]);