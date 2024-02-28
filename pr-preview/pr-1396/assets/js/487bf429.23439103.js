"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4865],{65708:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(74848),o=i(28453);const r={sidebar_position:1},a="Time Travel",l={id:"reference/time-travel",title:"Time Travel",description:"Time travel functionality allows you to restrict the data materialization process to a specific date range. When applying time travel to an existing materialization, it's important to note that it won't remove any existing documents. Instead, it will only materialize new data that falls within the specified date and time window. New data will not be included in your materialization destination unless it conforms to the specified date range criteria. Consequently, setting a lower boundary in the future date will delay the materialization of data until that future date is reached.",source:"@site/docs/reference/time-travel.md",sourceDirName:"reference",slug:"/reference/time-travel",permalink:"/pr-preview/pr-1396/reference/time-travel",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/time-travel.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Editing considerations",permalink:"/pr-preview/pr-1396/reference/editing"},next:{title:"Configuring task shards",permalink:"/pr-preview/pr-1396/reference/Configuring-task-shards"}},s={},d=[{value:"How to configure time travel",id:"how-to-configure-time-travel",level:2},{value:"Specification",id:"specification",level:3},{value:"Properties",id:"properties",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"time-travel",children:"Time Travel"}),"\n",(0,n.jsx)(t.p,{children:"Time travel functionality allows you to restrict the data materialization process to a specific date range. When applying time travel to an existing materialization, it's important to note that it won't remove any existing documents. Instead, it will only materialize new data that falls within the specified date and time window. New data will not be included in your materialization destination unless it conforms to the specified date range criteria. Consequently, setting a lower boundary in the future date will delay the materialization of data until that future date is reached."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-configure-time-travel",children:"How to configure time travel"}),"\n",(0,n.jsxs)(t.p,{children:["In the Flow web app, either navigate to an existing materialization or create a new one. Under ",(0,n.jsx)(t.strong,{children:"Source Collections"})," scroll to the bottom of a ",(0,n.jsx)(t.strong,{children:"Resource Configuration"})," for a specific collection. If you are working with a new materialization, you must link a collection to the materialization before continuing."]}),"\n",(0,n.jsxs)(t.p,{children:["You'll find two optional date-time fields for implementing time travel: ",(0,n.jsx)(t.code,{children:"notBefore"})," and ",(0,n.jsx)(t.code,{children:"notAfter"}),". Click on either field to open a date/time picker that you can use to set the values. It's not mandatory to select values for both fields for time travel to take effect. However, selecting values for both fields will ensure that only data meeting both criteria is materialized. In other words, new data must fall before the ",(0,n.jsx)(t.code,{children:"notAfter"})," date and after the ",(0,n.jsx)(t.code,{children:"notBefore"})," date to be included in the materialization."]}),"\n",(0,n.jsx)(t.h3,{id:"specification",children:"Specification"}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, both fields can be defined in the Flow specification file with the following format:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"materializations:\n  # The name of the materialization.\n  acmeCo/example/database-views:\n  \t# Endpoint defines how to connect to the destination of the materialization.\n    # Required, type: object\n    endpoint:\n      # This endpoint uses a connector provided as a Docker image.\n      connector:\n        # Docker image that implements the materialization connector.\n        image: ghcr.io/estuary/materialize-mysql:dev\n        # File that provides the connector's required configuration.\n        # Configuration may also be presented inline.\n        config: path/to//connector-config.yaml\n    bindings:\n      - # Source collection read by this binding.\n        # Required, type: object or string\n        source:\n          # Name of the collection to be read.\n          # Required.\n          name: acmeCo/example/collection\n          # Lower bound date-time for documents which should be processed. \n          # Source collection documents published before this date-time are filtered.\n          # `notBefore` is *only* a filter. Updating its value will not cause Flow\n          # to re-process documents that have already been read.\n          # Optional. Default is to process all documents.\n          notBefore: 2023-01-23T01:00:00Z\n          # Upper bound date-time for documents which should be processed.\n          # Source collection documents published after this date-time are filtered.\n          # Like `notBefore`, `notAfter` is *only* a filter. Updating its value will\n          # not cause Flow to re-process documents that have already been read.\n          # Optional. Default is to process all documents.\n          notAfter: 2023-01-23T02:00:00Z\n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Title"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/notBefore"})})}),(0,n.jsx)(t.td,{children:"Not Before"}),(0,n.jsx)(t.td,{children:"Only include date before this time"}),(0,n.jsx)(t.td,{children:"date-time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"/notAfter"})})}),(0,n.jsx)(t.td,{children:"Not After"}),(0,n.jsx)(t.td,{children:"Only include data after this time"}),(0,n.jsx)(t.td,{children:"date-time"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(96540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);