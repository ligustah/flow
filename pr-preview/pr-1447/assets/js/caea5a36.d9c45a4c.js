"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3740],{14208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=n(74848),i=n(28453);const l={sidebar_position:3},o="Troubleshoot a task with flowctl",r={id:"guides/flowctl/troubleshoot-task",title:"Troubleshoot a task with flowctl",description:"The flowctl logs and stats subcommands have been temporarily disabled while we work on some important changes to our authorization system. We expect to have these working again soon. In the meantime, please reach out to us via Slack or email (support@estuary.dev) if you want any help.",source:"@site/docs/guides/flowctl/troubleshoot-task.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/troubleshoot-task",permalink:"/pr-preview/pr-1447/guides/flowctl/troubleshoot-task",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/troubleshoot-task.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a derivation with flowctl",permalink:"/pr-preview/pr-1447/guides/flowctl/create-derivation"},next:{title:"Configure connections with SSH tunneling",permalink:"/pr-preview/pr-1447/guides/connect-network"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Print task logs",id:"print-task-logs",level:2},{value:"Change log level",id:"change-log-level",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"troubleshoot-a-task-with-flowctl",children:"Troubleshoot a task with flowctl"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["The flowctl logs and stats subcommands have been temporarily disabled while we work on some important changes to our authorization system. We expect to have these working again soon. In the meantime, please reach out to us via Slack or email (",(0,s.jsx)(t.a,{href:"mailto:support@estuary.dev",children:"support@estuary.dev"}),") if you want any help."]})}),"\n",(0,s.jsxs)(t.p,{children:["flowctl offers the most advanced views of ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-1447/concepts/advanced/logs-stats",children:"task logs"}),".\nIf a task has errors or is failing in the web app, you'll be able to troubleshoot more effectively with flowctl."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"To complete this workflow, you need:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-1447/getting-started/installation",children:"Estuary account"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/pr-preview/pr-1447/getting-started/installation#get-started-with-the-flow-cli",children:"flowctl installed locally"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"print-task-logs",children:"Print task logs"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Authorize flowctl."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Go to the ",(0,s.jsx)(t.a,{href:"https://dashboard.estuary.dev/admin/api",children:"CLI-API tab of the web app"})," and copy your access token."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"flowctl auth token --token <paste-token-here>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Identify the name of the failing task in the web app; for example ",(0,s.jsx)(t.code,{children:"myOrg/marketing/leads"}),".\nUse the tables on the Captures or Materializations pages of the web app to do so."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"flowctl logs --task <task-name>"}),". You have several options to get more specific. For example:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"flowctl logs --task myOrg/marketing/leads --follow"})," \u2014 If the task hasn't failed, continuously print logs as they're generated."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"flowctl logs --task myOrg/marketing/leads --since 1h"})," \u2014 Print logs from approximately the last hour.\nThe actual output window is approximate and may somewhat exceed this time boundary.\nYou may use any time, for example ",(0,s.jsx)(t.code,{children:"10m"})," and ",(0,s.jsx)(t.code,{children:"1d"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"change-log-level",children:"Change log level"}),"\n",(0,s.jsx)(t.p,{children:"If your logs aren't providing enough detail, you can change the log level."}),"\n",(0,s.jsx)(t.p,{children:"Flow offers several log levels. From least to most detailed, these are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"error"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"warn"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"info"})," (default)"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"debug"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"trace"})}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Follow the guide to ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-1447/guides/flowctl/edit-specification-locally",children:"edit a specification with flowctl"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Working in your local specification file, add the ",(0,s.jsx)(t.code,{children:"shards"})," stanza to the capture or materialization specification:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"myOrg/marketing/leads:\n  shards:\n    logLevel: debug\n  endpoint:\n    {}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Finish the workflow as described, re-publishing the task."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/pr-preview/pr-1447/reference/working-logs-stats",children:"Learn more about working with logs"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},l=s.createContext(i);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);