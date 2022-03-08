"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6437],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4178:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},c="Google Cloud Storage",s={unversionedId:"reference/Connectors/capture-connectors/gcs",id:"reference/Connectors/capture-connectors/gcs",title:"Google Cloud Storage",description:"This connector captures data from an Google Cloud Storage (GCS) bucket.",source:"@site/docs/reference/Connectors/capture-connectors/gcs.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/gcs",permalink:"/reference/Connectors/capture-connectors/gcs",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/gcs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka",permalink:"/reference/Connectors/capture-connectors/apache-kafka"},next:{title:"MySQL",permalink:"/reference/Connectors/capture-connectors/MySQL"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Values",id:"values",children:[{value:"Endpoint",id:"endpoint",children:[],level:4},{value:"Bindings",id:"bindings",children:[],level:4}],level:3},{value:"Sample",id:"sample",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,i.kt)("p",null,"This connector captures data from an Google Cloud Storage (GCS) bucket."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-gcs:dev"},(0,i.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-gcs:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use this connector, either your GCS bucket must be public, or you must have access via a Google service account."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For public buckets, verify that objects in the bucket are ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/access-control/making-data-public"},"publicly readable"),"."),(0,i.kt)("li",{parentName:"ul"},"For buckets accessed by a Google Service Account:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure that the user has been assigned a ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/understanding-roles"},"role")," with read access."),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating"},"JSON service account key"),". Google's ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/docs/authentication/production"},"Application Default Credentials")," will use this file for authentication.")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"There are various ways to configure connectors. See ",(0,i.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about these methods. The values and YAML sample in this section provide configuration details specific to the GCS source connector."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You might use ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/samples/storage-list-files-with-prefix"},"prefixes")," to organize your GCS bucket\nin a way that emulates a directory structure.\nThis connector can use prefixes in two ways: first, to perform the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/connectors#flowctl-discover"},(0,i.kt)("strong",{parentName:"a"},"discovery"))," phase of setup, and later, when the capture is running."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"You can specify a prefix in the endpoint configuration to limit the overall scope of data discovery."),(0,i.kt)("li",{parentName:"ul"},"You're required to specify prefixes on a per-binding basis. This allows you to map each prefix to a distinct Flow collection,\nand informs how the capture will behave in production.")),(0,i.kt)("p",{parentName:"div"},"To capture the entire bucket, omit ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," in the endpoint configuration and set ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," to the name of the bucket."))),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"endpoint"},"Endpoint"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ascendingKeys")),(0,i.kt)("td",{parentName:"tr",align:null},"Ascending Keys"),(0,i.kt)("td",{parentName:"tr",align:null},"Improve sync speeds by listing files from the end of the last sync, rather than listing the entire bucket prefix.*"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bucket")),(0,i.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the GCS bucket."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"googleCredentials")),(0,i.kt)("td",{parentName:"tr",align:null},"Google Service Account"),(0,i.kt)("td",{parentName:"tr",align:null},"Service account JSON file. Required unless the bucket is public."),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"matchKeys")),(0,i.kt)("td",{parentName:"tr",align:null},"Match Keys"),(0,i.kt)("td",{parentName:"tr",align:null},"Regex filter applied to all object keys under the prefix. Only objects whose absolute path match are read. For example, the match key ",(0,i.kt)("inlineCode",{parentName:"td"},'".*\\\\.json\\"')," captures only JSON files."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"prefix")),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix within the bucket to capture from."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"*To use ascending keys, you must write objects in ascending lexicographic order, such as using RFC-3339 timestamps to record modification times.\nThis ensures that key ordering matches the order of changes."),(0,i.kt)("h4",{id:"bindings"},"Bindings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"stream")),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to dataset in the bucket, formatted as ",(0,i.kt)("inlineCode",{parentName:"td"},"bucket-name/prefix-name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"syncMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,i.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,i.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("h3",{id:"sample"},"Sample"),(0,i.kt)("p",null,"A minimal capture definition within the catalog spec will look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${TENANT}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-gcs:dev\n        config:\n          bucket: "my-bucket"\n    bindings:\n      - resource:\n          stream: my-bucket/${PREFIX}\n          syncMode: incremental\n        target: ${TENANT}/${COLLECTION_NAME}\n\n')),(0,i.kt)("p",null,"Your capture definition may be more complex, with additional bindings for different GCS prefixes within the same bucket."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions.")))}d.isMDXComponent=!0}}]);