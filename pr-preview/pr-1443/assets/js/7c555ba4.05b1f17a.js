"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2333],{90146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(74848),r=t(28453);const i={},c="Stripe",o={id:"reference/Connectors/capture-connectors/stripe",title:"Stripe",description:"This connector captures data from Stripe into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/stripe.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/stripe",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/stripe",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/stripe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snowflake CDC Connector",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/snowflake"},next:{title:"Survey Monkey",permalink:"/pr-preview/pr-1443/reference/Connectors/capture-connectors/survey-monkey"}},a={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Choosing your start date and lookback window",id:"choosing-your-start-date-and-lookback-window",level:3},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"stripe",children:"Stripe"}),"\n",(0,s.jsx)(n.p,{children:"This connector captures data from Stripe into Flow collections."}),"\n",(0,s.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/source-stripe:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/source-stripe:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,s.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/stripe/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsx)(n.p,{children:"The following data resources are supported through the Stripe API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/balance_transactions/list",children:"Balance transactions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/customer_bank_accounts/list",children:"Bank accounts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/charges/list",children:"Charges"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/checkout/sessions/list",children:"Checkout sessions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/checkout/sessions/line_items",children:"Checkout sessions line items"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/coupons/list",children:"Coupons"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/customer_balance_transactions/list",children:"Customer balance transactions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/customers/list",children:"Customers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/disputes/list",children:"Disputes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/events/list",children:"Events"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/invoiceitems/list",children:"Invoice items"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/invoices/invoice_lines",children:"Invoice line items"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/invoices/list",children:"Invoices"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/payment_intents/list",children:"Payment intents"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/payouts/list",children:"Payouts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/plans/list",children:"Plans"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/products/list",children:"Products"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/promotion_codes/list",children:"Promotion codes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/refunds/list",children:"Refunds"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/subscription_items/list",children:"Subscription items"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/subscriptions/list",children:"Subscriptions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stripe.com/docs/api/transfers/list",children:"Transfers"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://stripe.com/docs/dashboard/basics#find-account-id",children:"Account ID"})," of your Stripe account."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://stripe.com/docs/keys#obtain-api-keys",children:"Secret key"})," for the Stripe API."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1443/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Stripe source connector."]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/account_id"})})}),(0,s.jsx)(n.td,{children:"Account ID"}),(0,s.jsxs)(n.td,{children:["Your Stripe account ID (starts with 'acct_', find yours here ",(0,s.jsx)(n.a,{href:"https://dashboard.stripe.com/settings/account",children:"https://dashboard.stripe.com/settings/account"})]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/client_secret"})})}),(0,s.jsx)(n.td,{children:"Secret Key"}),(0,s.jsxs)(n.td,{children:["Stripe API key (usually starts with 'sk_live_'; find yours here ",(0,s.jsx)(n.a,{href:"https://dashboard.stripe.com/apikeys",children:"https://dashboard.stripe.com/apikeys"})]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/lookback_window_days"})}),(0,s.jsx)(n.td,{children:"Lookback Window in days (Optional)"}),(0,s.jsx)(n.td,{children:"When set, the connector will always re-export data from the past N days, where N is the value set here. This is useful if your data is frequently updated after creation."}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/start_date"})})}),(0,s.jsx)(n.td,{children:"Replication start date"}),(0,s.jsx)(n.td,{children:"UTC date and time in the format 2017-01-25T00:00:00Z. Only data generated after this date will be replicated."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/stream"})})}),(0,s.jsx)(n.td,{children:"Stream"}),(0,s.jsx)(n.td,{children:"Resource from Stripe from which collections are captured."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/syncMode"})})}),(0,s.jsx)(n.td,{children:"Sync Mode"}),(0,s.jsx)(n.td,{children:"Connection method."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"choosing-your-start-date-and-lookback-window",children:"Choosing your start date and lookback window"}),"\n",(0,s.jsxs)(n.p,{children:["The connector will continually capture data beginning on the ",(0,s.jsx)(n.strong,{children:"Replication start date"})," you choose."]}),"\n",(0,s.jsxs)(n.p,{children:["However, some data from the Stripe API is mutable; for example, ",(0,s.jsx)(n.a,{href:"https://stripe.com/docs/billing/migration/invoice-states",children:"a draft invoice can be completed"})," at a later date than it was created.\nTo account for this, it's useful to set the ",(0,s.jsx)(n.strong,{children:"Lookback Window"}),". When this is set, at a given point in time, the connector will not only look for new data;\nit will also capture changes made to data within the window."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you start the connector with the start date of ",(0,s.jsx)(n.code,{children:"2022-06-06T00:00:00Z"})," (June 6) and the lookback window of ",(0,s.jsx)(n.code,{children:"3"}),", the connector will begin to capture data starting from June 3.\nAs time goes on while the capture remains active, the lookback window rolls forward along with the current timestamp.\nOn June 10, the connector will continue to monitor data starting from June 7 and capture any changes to that data, and so on."]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-stripe:dev\n        config:\n            account_id: 00000000\n            client_secret: <secret>\n            start_date: 2022-06-18T00:00:00Z\n    bindings:\n      - resource:\n          stream: balance_transactions\n          syncMode: incremental\n        target: ${PREFIX}/balancetransactions\n      - resource:\n          stream: bank_accounts\n          syncMode: full_refresh\n        target: ${PREFIX}/bankaccounts\n      - resource:\n          stream: charges\n          syncMode: incremental\n        target: ${PREFIX}/charges\n      - resource:\n          stream: checkout_sessions\n          syncMode: incremental\n        target: ${PREFIX}/checkoutsessions\n      - resource:\n          stream: checkout_sessions_line_items\n          syncMode: incremental\n        target: ${PREFIX}/checkoutsessionslineitems\n      - resource:\n          stream: coupons\n          syncMode: incremental\n        target: ${PREFIX}/coupons\n      - resource:\n          stream: customer_balance_transactions\n          syncMode: full_refresh\n        target: ${PREFIX}/customerbalancetransactions\n      - resource:\n          stream: customers\n          syncMode: incremental\n        target: ${PREFIX}/customers\n      - resource:\n          stream: disputes\n          syncMode: incremental\n        target: ${PREFIX}/disputes\n      - resource:\n          stream: events\n          syncMode: incremental\n        target: ${PREFIX}/events\n      - resource:\n          stream: invoice_items\n          syncMode: incremental\n        target: ${PREFIX}/invoice_items\n      - resource:\n          stream: invoice_line_items\n          syncMode: full_refresh\n        target: ${PREFIX}/invoicelineitems\n      - resource:\n          stream: invoices\n          syncMode: incremental\n        target: ${PREFIX}/invoices\n      - resource:\n          stream: payment_intents\n          syncMode: incremental\n        target: ${PREFIX}/paymentintents\n      - resource:\n          stream: payouts\n          syncMode: incremental\n        target: ${PREFIX}/payouts\n      - resource:\n          stream: plans\n          syncMode: incremental\n        target: ${PREFIX}/plans\n      - resource:\n          stream: products\n          syncMode: incremental\n        target: ${PREFIX}/products\n      - resource:\n          stream: promotion_codes\n          syncMode: incremental\n        target: ${PREFIX}/promotioncodes\n      - resource:\n          stream: refunds\n          syncMode: incremental\n        target: ${PREFIX}/refunds\n      - resource:\n          stream: subscription_items\n          syncMode: full_refresh\n        target: ${PREFIX}/subscriptionitems\n      - resource:\n          stream: subscriptions\n          syncMode: incremental\n        target: ${PREFIX}/subscriptions\n      - resource:\n          stream: transfers\n          syncMode: incremental\n        target: ${PREFIX}/transfers\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);