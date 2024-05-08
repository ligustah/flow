"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2172],{79659:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var n=t(74848),s=t(28453);const c={},i="Chargebee",o={id:"reference/Connectors/capture-connectors/chargebee",title:"Chargebee",description:"This connector captures data from Chargebee into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/chargebee.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/chargebee",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/chargebee",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/chargebee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Braze",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/braze"},next:{title:"Confluence",permalink:"/pr-preview/pr-1464/reference/Connectors/capture-connectors/confluence"}},d={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"chargebee",children:"Chargebee"}),"\n",(0,n.jsx)(r.p,{children:"This connector captures data from Chargebee into Flow collections."}),"\n",(0,n.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(r.a,{href:"https://ghcr.io/estuary/source-chargebee:dev",children:(0,n.jsx)(r.code,{children:"ghcr.io/estuary/source-chargebee:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsxs)(r.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/chargebee/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,n.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,n.jsx)(r.p,{children:"The following data resources are supported through the Chargebee APIs:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/subscriptions?prod_cat_ver=2#list_subscriptions",children:"Subscriptions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/customers?prod_cat_ver=2#list_customers",children:"Customers"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver=2#list_invoices",children:"Invoices"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/orders?prod_cat_ver=2#list_orders",children:"Orders"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/plans?prod_cat_ver=1&lang=curl#list_plans",children:"Plans"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/addons?prod_cat_ver=1&lang=curl#list_addons",children:"Addons"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/items?prod_cat_ver=2#list_items",children:"Items"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/item_prices?prod_cat_ver=2#list_item_prices",children:"Item Prices"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/attached_items?prod_cat_ver=2#list_attached_items",children:"Attached Items"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["To set up the Chargebee source connector, you'll need the ",(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2#api_authentication",children:"Chargebee API key"})," and the ",(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2",children:"Product Catalog version"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-1464/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Chargebee source connector."]}),"\n",(0,n.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/site_api_key"})}),(0,n.jsx)(r.td,{children:"API Key"}),(0,n.jsx)(r.td,{children:"Chargebee API Key."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/site"})}),(0,n.jsx)(r.td,{children:"Site"}),(0,n.jsx)(r.td,{children:"The site prefix for your Chargebee instance."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/start_date"})}),(0,n.jsx)(r.td,{children:"Start Date"}),(0,n.jsx)(r.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/product_catalog"})}),(0,n.jsx)(r.td,{children:"Product Catalog"}),(0,n.jsxs)(r.td,{children:["Product Catalog version of your Chargebee site. Instructions on how to find your version you may find under 'API Version' section ",(0,n.jsx)(r.a,{href:"https://apidocs.chargebee.com/docs/api/versioning?prod_cat_ver=2",children:"in the Chargebee docs"}),"."]}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/stream"})})}),(0,n.jsx)(r.td,{children:"Stream"}),(0,n.jsx)(r.td,{children:"Resource of your Chargebee project from which collections are captured."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/syncMode"})})}),(0,n.jsx)(r.td,{children:"Sync Mode"}),(0,n.jsx)(r.td,{children:"Connection method."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-chargebee:dev\n        config:\n          site_api_key: <secret>\n          site: <your site>\n          start_date: 2017-01-25T00:00:00Z\n          product_catalog: <your product catalog>\n    bindings:\n      - resource:\n          stream: items\n          syncMode: full_refresh\n        target: ${PREFIX}/items\n      {...}\n"})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},c=n.createContext(s);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);