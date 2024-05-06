"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3663],{12927:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(74848),o=r(28453);const s={},i="WooCommerce",c={id:"reference/Connectors/capture-connectors/woocommerce",title:"WooCommerce",description:"This connector captures data from WooCommerce into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/woocommerce.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/woocommerce",permalink:"/pr-preview/pr-1459/reference/Connectors/capture-connectors/woocommerce",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/woocommerce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Twilio",permalink:"/pr-preview/pr-1459/reference/Connectors/capture-connectors/twilio"},next:{title:"YouTube Analytics",permalink:"/pr-preview/pr-1459/reference/Connectors/capture-connectors/youtube-analytics"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up WooCommerce",id:"set-up-woocommerce",level:3},{value:"Set up the WooCommerce connector in Estuary Flow",id:"set-up-the-woocommerce-connector-in-estuary-flow",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Connector-Specific Features &amp; Highlights",id:"connector-specific-features--highlights",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"woocommerce",children:"WooCommerce"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from WooCommerce into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-woocommerce",":dev"," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To set up the WooCommerce source connector with: you need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"WooCommerce 3.5+"}),"\n",(0,t.jsx)(n.li,{children:"WordPress 4.4+"}),"\n",(0,t.jsx)(n.li,{children:"Pretty permalinks in Settings > Permalinks so that the custom endpoints are supported. e.g. /%year%/%monthnum%/%day%/%postname%/"}),"\n",(0,t.jsx)(n.li,{children:"A new API key with read permissions and access to Customer key and Customer Secret."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to set up the WooCommerce source connector."}),"\n",(0,t.jsx)(n.h3,{id:"set-up-woocommerce",children:"Set up WooCommerce"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Generate a new Rest API key."}),"\n",(0,t.jsx)(n.li,{children:"Obtain Customer key and Customer Secret."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"set-up-the-woocommerce-connector-in-estuary-flow",children:"Set up the WooCommerce connector in Estuary Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Log into your Estuary Flow account."}),"\n",(0,t.jsx)(n.li,{children:'In the left navigation bar, click on "Captures". In the top-left corner, click "Connector Search".'}),"\n",(0,t.jsx)(n.li,{children:'Enter the name for the WooCommerce connector and select "WooCommerce" from the dropdown.'}),"\n",(0,t.jsx)(n.li,{children:'Fill in "Customer key" and "Customer Secret" with the data from Step 1 of this guide.'}),"\n",(0,t.jsxs)(n.li,{children:['Fill in "Shop Name". For example, if your shop URL is ',(0,t.jsx)(n.a,{href:"https://EXAMPLE.com",children:"https://EXAMPLE.com"}),", the shop name is 'EXAMPLE.com'."]}),"\n",(0,t.jsx)(n.li,{children:"Choose the start date you want to start syncing data from."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,t.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the WooCommerce source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/customer_key"})}),(0,t.jsx)(n.td,{children:"Customer Key"}),(0,t.jsx)(n.td,{children:"Customer Key for API in WooCommerce shop"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/customer_secret"})}),(0,t.jsx)(n.td,{children:"Customer Secret"}),(0,t.jsx)(n.td,{children:"Customer Secret for API in WooCommerce shop"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/shop_name"})}),(0,t.jsx)(n.td,{children:"Shop Name"}),(0,t.jsx)(n.td,{children:"The name of the store."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/start_date"})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"The date you would like to replicate data from. Format: YYYY-MM-DD"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource of your WooCommerce project from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "properties": {\n\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"supported-streams",children:"Supported Streams"}),"\n",(0,t.jsx)(n.p,{children:"The WooCommerce source connector in Estuary Flow supports the following streams:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Coupons (Incremental)"}),"\n",(0,t.jsx)(n.li,{children:"Customers (Incremental)"}),"\n",(0,t.jsx)(n.li,{children:"Orders (Incremental)"}),"\n",(0,t.jsx)(n.li,{children:"Order notes"}),"\n",(0,t.jsx)(n.li,{children:"Payment gateways"}),"\n",(0,t.jsx)(n.li,{children:"Product attribute terms"}),"\n",(0,t.jsx)(n.li,{children:"Product attributes"}),"\n",(0,t.jsx)(n.li,{children:"Product categories"}),"\n",(0,t.jsx)(n.li,{children:"Product reviews (Incremental)"}),"\n",(0,t.jsx)(n.li,{children:"Product shipping classes"}),"\n",(0,t.jsx)(n.li,{children:"Product tags"}),"\n",(0,t.jsx)(n.li,{children:"Product variations"}),"\n",(0,t.jsx)(n.li,{children:"Products (Incremental)"}),"\n",(0,t.jsx)(n.li,{children:"Refunds"}),"\n",(0,t.jsx)(n.li,{children:"Shipping methods"}),"\n",(0,t.jsx)(n.li,{children:"Shipping zone locations"}),"\n",(0,t.jsx)(n.li,{children:"Shipping zone methods"}),"\n",(0,t.jsx)(n.li,{children:"Shipping zones"}),"\n",(0,t.jsx)(n.li,{children:"System status tools"}),"\n",(0,t.jsx)(n.li,{children:"Tax classes"}),"\n",(0,t.jsx)(n.li,{children:"Tax rates"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"connector-specific-features--highlights",children:"Connector-Specific Features & Highlights"}),"\n",(0,t.jsx)(n.p,{children:"Useful links:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction",children:"WooCommerce Rest API Docs"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);