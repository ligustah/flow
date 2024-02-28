"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8362],{9737:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(74848),o=i(28453);const r={sidebar_position:4},s="Google Cloud Pub/Sub",l={id:"reference/Connectors/materialization-connectors/google-pubsub",title:"Google Cloud Pub/Sub",description:"This connector materializes Flow collections into topics in Google Cloud Pub/Sub.",source:"@site/docs/reference/Connectors/materialization-connectors/google-pubsub.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/google-pubsub",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/google-pubsub",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/google-pubsub.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Google BigQuery",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/BigQuery"},next:{title:"Google Sheets",permalink:"/pr-preview/pr-1397/reference/Connectors/materialization-connectors/Google-sheets"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"OAuth authentication using the Flow web app",id:"oauth-authentication-using-the-flow-web-app",level:3},{value:"Manual authentication",id:"manual-authentication",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Multiplex topics",id:"multiplex-topics",level:2},{value:"Delta updates",id:"delta-updates",level:2},{value:"Message ordering",id:"message-ordering",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"google-cloud-pubsub",children:"Google Cloud Pub/Sub"}),"\n",(0,t.jsx)(n.p,{children:"This connector materializes Flow collections into topics in Google Cloud Pub/Sub."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-google-pubsub:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/materialize-google-pubsub:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project",children:"Google Cloud project"})," with the Google Pub/Sub API ",(0,t.jsx)(n.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en",children:"enabled"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Access to the project. Different items are required to configure access ",(0,t.jsx)(n.a,{href:"#oauth-authentication-using-the-flow-web-app",children:"using OAuth in the Flow web app"})," (recommended),\nand ",(0,t.jsx)(n.a,{href:"#manual-authentication",children:"configuring manually"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"At least one Flow collection to materialize."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1397/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,t.jsx)(n.h3,{id:"oauth-authentication-using-the-flow-web-app",children:"OAuth authentication using the Flow web app"}),"\n",(0,t.jsx)(n.p,{children:"OAuth is the simplest authentication method, and is supported in the Flow web app. You'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Google account with the role ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/pubsub/docs/access-control#roles",children:(0,t.jsx)(n.code,{children:"roles/pubsub.editor"})}),"\nor equivalent for the Google Cloud project.\nSee the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role",children:"Google IAM documentation"})," to learn about granting roles."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You'll supply this account's username and password to authenticate."}),"\n",(0,t.jsx)(n.h3,{id:"manual-authentication",children:"Manual authentication"}),"\n",(0,t.jsx)(n.p,{children:"Manual authentication is the only method supported when using flowctl to develop locally. You'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A Google service account with the role ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/pubsub/docs/access-control#roles",children:(0,t.jsx)(n.code,{children:"roles/pubsub.editor"})}),"\nor equivalent for the Google Cloud project.\nSee the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role",children:"Google IAM documentation"})," to learn about granting roles."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A JSON key for the service account."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount",children:"Google documentation"})," for help creating a new service account and generating its key."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Google Cloud Pub/Sub materialization, which will direct one or more of your Flow collections to your desired Pub/Sub topics."}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials"})})}),(0,t.jsx)(n.td,{children:"Authentication"}),(0,t.jsx)(n.td,{children:"Credentials used to authenticate with Google."}),(0,t.jsx)(n.td,{children:"array, boolean, null, number, object, string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/auth_type"})}),(0,t.jsx)(n.td,{children:"Authentication type"}),(0,t.jsxs)(n.td,{children:["Set to ",(0,t.jsx)(n.code,{children:"Service"})," for manual authentication, or use OAuth in the web app."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/credentials_json"})}),(0,t.jsx)(n.td,{children:"Service Account JSON"}),(0,t.jsx)(n.td,{children:"The JSON key of the service account to use for authorization, if configuring manually."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/project_id"})})}),(0,t.jsx)(n.td,{children:"Google Cloud Project ID"}),(0,t.jsx)(n.td,{children:"Name of the project containing the PubSub topics for this materialization."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["PubSub topics need a ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/pubsub/docs/create-topic#properties_of_a_topic",children:"default subscription"}),";\notherwise, delivered messages will be lost. Leave ",(0,t.jsx)(n.strong,{children:"Create with Default Subscription"})," set to the default, ",(0,t.jsx)(n.code,{children:"true"}),",\nunless you have a specific reason not to do so."]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/create_default_subscription"})})}),(0,t.jsx)(n.td,{children:"Create with Default Subscription"}),(0,t.jsx)(n.td,{children:'Create a default subscription when creating the topic. Will be created as "<topic>-sub". Has no effect if the topic already exists.'}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Required, ",(0,t.jsx)(n.code,{children:"true"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"identifier"})}),(0,t.jsx)(n.td,{children:"Resource Binding Identifier"}),(0,t.jsxs)(n.td,{children:["Optional identifier for the resource binding if creating a ",(0,t.jsx)(n.a,{href:"#multiplex-topics",children:"multiplex topic"}),'. Included as "identifier" attribute in published messages if specified.']}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/topic"})})}),(0,t.jsx)(n.td,{children:"Topic Name"}),(0,t.jsx)(n.td,{children:"Name of the topic to publish materialized results to."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsxs)(n.p,{children:["This sample reflects the ",(0,t.jsx)(n.a,{href:"#manual-authentication",children:"manual authentication"})," method using the CLI."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        config:\n          credentials:\n            auth_type: Service\n            credentials_json: {secret}\n          project_id: my_google_cloud_project\n    bindings:\n  \t- resource:\n        create_default_subscription: true\n      \ttopic: my_new_topic\n      source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"multiplex-topics",children:"Multiplex topics"}),"\n",(0,t.jsxs)(n.p,{children:["You can materialize multiple Flow collections to the same Pub/Sub topic. This is known as a ",(0,t.jsx)(n.strong,{children:"multiplex topic"}),".\nYou do so by adding the optional ",(0,t.jsx)(n.code,{children:"identifier"})," field to the ",(0,t.jsx)(n.a,{href:"#bindings",children:"binding configuration"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"When materializing to a multiplex topic, ensure that:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The bindings you want to combine have the same ",(0,t.jsx)(n.code,{children:"topic"})," name."]}),"\n",(0,t.jsx)(n.li,{children:"Each binding pulls from a different Flow collection"}),"\n",(0,t.jsxs)(n.li,{children:["Each binding has a unique ",(0,t.jsx)(n.code,{children:"identifier"}),". It can be anything you'd like."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The binding configuration will look similar to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"bindings:\n  - resource:\n      identifier: one\n      topic: multiplex-topic\n    source: ${PREFIX}/source_collection_one\n  - resource:\n      identifier: two\n      topic: multiplex-topic\n    source: ${PREFIX}/source_collection_two\n"})}),"\n",(0,t.jsx)(n.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,t.jsxs)(n.p,{children:["Because Google Cloud Pub/Sub is a write-only event-streaming system, this connector uses only ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1397/concepts/materialization#delta-updates",children:"delta updates"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"message-ordering",children:"Message ordering"}),"\n",(0,t.jsxs)(n.p,{children:["Google Cloud Pub/Sub manages message ordering using ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/pubsub/docs/ordering",children:"ordering keys"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector sets the ordering key of published messages using the Flow ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1397/concepts/collections#keys",children:"collection key"}),"\nof the documents being being published.\nMessages are published in order, on a per-key basis."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);