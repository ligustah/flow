"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[354],{54101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),i=t(28453);const s={},o="Pinterest",c={id:"reference/Connectors/capture-connectors/pinterest",title:"Pinterest",description:"This connector captures data from Pinterest into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/pinterest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/pinterest",permalink:"/pr-preview/pr-1467/reference/Connectors/capture-connectors/pinterest",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/pinterest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Paypal Transaction",permalink:"/pr-preview/pr-1467/reference/Connectors/capture-connectors/paypal-transaction"},next:{title:"PostgreSQL",permalink:"/pr-preview/pr-1467/reference/Connectors/capture-connectors/PostgreSQL/"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pinterest",children:"Pinterest"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from Pinterest into Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-pinterest",":dev"," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To set up the Pinterest source connector, you'll need the following prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pinterest App ID and secret key"}),"\n",(0,r.jsx)(n.li,{children:"Refresh Token"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"Follow the steps below to set up the Pinterest source connector."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Log into your Estuary Flow account."}),"\n",(0,r.jsx)(n.li,{children:'Navigate to the "Captures" section'}),"\n",(0,r.jsx)(n.li,{children:'For the "Start Date," provide the date in YYYY-MM-DD format. Data added on and after this date will be replicated.'}),"\n",(0,r.jsx)(n.li,{children:'Next, go to "Authorization Method"'}),"\n",(0,r.jsx)(n.li,{children:'Authenticate your Pinterest account using OAuth2.0 or an Access Token. The OAuth2.0 authorization method is selected by default. For "Client ID" and "Client Secret," enter your Pinterest App ID and secret key. For the "Refresh Token," enter your Pinterest Refresh Token.\nClick "Set up source."'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,r.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Pinterest source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/start_date"})}),(0,r.jsx)(n.td,{children:"Start Date"}),(0,r.jsx)(n.td,{children:"A date in the format YYYY-MM-DD. If you have not set a date, it would be defaulted to latest allowed date by api (89 days from today)."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Resource of your Pinterest project from which collections are captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsx)(n.td,{children:"Connection method."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "required": ["start_date", "credentials"],\n  "properties": {\n    "start_date": {\n      "pattern_descriptor": null\n    },\n    "credentials": {\n      "discriminator": {\n        "propertyName": "auth_method"\n      },\n      "oneOf": [\n        {\n          "title": "OAuth2.0",\n          "type": "object",\n          "x-oauth2-provider": "pinterest",\n          "properties": {\n            "auth_method": {\n              "const": "oauth2.0",\n              "order": 0,\n              "type": "string",\n              "default": "oauth2.0"\n            },\n            "client_id": {\n              "airbyte_secret": true,\n              "description": "The Client ID of your OAuth application",\n              "title": "Client ID",\n              "type": "string"\n            },\n            "client_secret": {\n              "airbyte_secret": true,\n              "description": "The Client Secret of your OAuth application.",\n              "title": "Client Secret",\n              "type": "string"\n            },\n            "refresh_token": {\n              "airbyte_secret": true,\n              "description": "Refresh Token to obtain new Access Token, when it\'s expired.",\n              "title": "Refresh Token",\n              "type": "string"\n            }\n          },\n          "required": [\n            "auth_method",\n            "refresh_token"\n          ]\n        },\n        {\n          "title": "Access Token",\n          "type": "object",\n          "properties": {\n            "access_token": {\n              "airbyte_secret": true,\n              "description": "The Access Token to make authenticated requests.",\n              "title": "Access Token",\n              "type": "string"\n            },\n            "auth_method": {\n              "const": "access_token",\n              "order": 0,\n              "type": "string",\n              "default": "access_token"\n            }\n          },\n          "required": [\n            "auth_method",\n            "access_token"\n          ]\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"supported-streams",children:"Supported Streams"}),"\n",(0,r.jsx)(n.p,{children:"The Pinterest source connector supports the following streams:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Account analytics (Incremental)"}),"\n",(0,r.jsx)(n.li,{children:"Boards (Full table)"}),"\n",(0,r.jsx)(n.li,{children:"Board sections (Full table)"}),"\n",(0,r.jsx)(n.li,{children:"Pins on board section (Full table)"}),"\n",(0,r.jsx)(n.li,{children:"Pins on board (Full table)"}),"\n",(0,r.jsx)(n.li,{children:"Ad accounts (Full table)"}),"\n",(0,r.jsx)(n.li,{children:"Ad account analytics (Incremental)"}),"\n",(0,r.jsx)(n.li,{children:"Campaigns (Incremental)"}),"\n",(0,r.jsx)(n.li,{children:"Campaign analytics (Incremental)"}),"\n",(0,r.jsx)(n.li,{children:"Ad groups (Incremental)"}),"\n",(0,r.jsx)(n.li,{children:"Ad group analytics (Incremental)"}),"\n",(0,r.jsx)(n.li,{children:"Ads (Incremental)"}),"\n",(0,r.jsx)(n.li,{children:"Ad analytics (Incremental)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,r.jsx)(n.p,{children:"The Pinterest API imposes certain rate limits for the connector. Please take note of the following limits:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Analytics streams: 300 calls per day per user"}),"\n",(0,r.jsx)(n.li,{children:"Ad accounts streams (Campaigns, Ad groups, Ads): 1000 calls per minute per user per app"}),"\n",(0,r.jsx)(n.li,{children:"Boards streams: 10 calls per second per user per app"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"For any additional information or troubleshooting, refer to the official Pinterest API documentation."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);