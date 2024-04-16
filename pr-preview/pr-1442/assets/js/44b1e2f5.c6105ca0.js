"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4578],{91655:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=i(74848),s=i(28453);const o={},t="Twilio",c={id:"reference/Connectors/capture-connectors/twilio",title:"Twilio",description:"This connector captures data from Twilio into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/twilio.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/twilio",permalink:"/pr-preview/pr-1442/reference/Connectors/capture-connectors/twilio",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/twilio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TikTok Marketing",permalink:"/pr-preview/pr-1442/reference/Connectors/capture-connectors/tiktok"},next:{title:"YouTube Analytics",permalink:"/pr-preview/pr-1442/reference/Connectors/capture-connectors/youtube-analytics"}},l={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"twilio",children:"Twilio"}),"\n",(0,n.jsx)(r.p,{children:"This connector captures data from Twilio into Flow collections."}),"\n",(0,n.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(r.a,{href:"https://ghcr.io/estuary/source-twilio:dev",children:(0,n.jsx)(r.code,{children:"ghcr.io/estuary/source-twilio:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsxs)(r.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/twilio/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,n.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,n.jsx)(r.p,{children:"The following data resources are supported through the Twilio APIs:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/api/account#read-multiple-account-resources",children:"Accounts"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/api/address#read-multiple-address-resources",children:"Addresses"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/monitor-alert#read-multiple-alert-resources",children:"Alerts"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/api/applications#read-multiple-application-resources",children:"Applications"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#read-a-list-of-countries",children:"Available Phone Number Countries"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumberlocal-resource#read-multiple-availablephonenumberlocal-resources",children:"Available Phone Numbers Local"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-mobile-resource#read-multiple-availablephonenumbermobile-resources",children:"Available Phone Numbers Mobile"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-tollfree-resource#read-multiple-availablephonenumbertollfree-resources",children:"Available Phone Numbers Toll Free"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/voice/api/call-resource#create-a-call-resource",children:"Calls"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/voice/api/conference-participant-resource#read-multiple-participant-resources",children:"Conference Participants"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/voice/api/conference-resource#read-multiple-conference-resources",children:"Conferences"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/conversations/api/conversation-resource#read-multiple-conversation-resources",children:"Conversations"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/conversations/api/conversation-message-resource#list-all-conversation-messages",children:"Conversation Messages"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/conversations/api/conversation-participant-resource",children:"Conversation Participants"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/api/address?code-sample=code-list-dependent-pns-subresources&code-language=curl&code-sdk-version=json#instance-subresources",children:"Dependent Phone Numbers"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources",children:"Executions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources",children:"Incoming Phone Numbers"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/studio/rest-api/flow#read-a-list-of-flows",children:"Flows"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/api/keys#read-a-key-resource",children:"Keys"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/sms/api/media-resource#read-multiple-media-resources",children:"Message Media"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/sms/api/message-resource#read-multiple-message-resources",children:"Messages"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/voice/api/outgoing-caller-ids#outgoingcallerids-list-resource",children:"Outgoing Caller Ids"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/voice/api/queue-resource#read-multiple-queue-resources",children:"Queues"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/voice/api/recording#read-multiple-recording-resources",children:"Recordings"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/voice/api/recording-transcription?code-sample=code-read-list-all-transcriptions&code-language=curl&code-sdk-version=json#read-multiple-transcription-resources",children:"Transcriptions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/api/usage-record#read-multiple-usagerecord-resources",children:"Usage Records"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.twilio.com/docs/usage/api/usage-trigger#read-multiple-usagetrigger-resources",children:"Usage Triggers"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Twilio Auth Token for authentication."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-1442/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Twilio source connector."]}),"\n",(0,n.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/account_sid"})}),(0,n.jsx)(r.td,{children:"Account ID"}),(0,n.jsx)(r.td,{children:"Twilio account SID"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/auth_token"})}),(0,n.jsx)(r.td,{children:"Auth Token"}),(0,n.jsx)(r.td,{children:"Twilio Auth Token."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/start_date"})}),(0,n.jsx)(r.td,{children:"Replication Start Date"}),(0,n.jsx)(r.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/lookback_window"})}),(0,n.jsx)(r.td,{children:"Lookback window"}),(0,n.jsx)(r.td,{children:"How far into the past to look for records. (in minutes)"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"Default"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/stream"})})}),(0,n.jsx)(r.td,{children:"Stream"}),(0,n.jsx)(r.td,{children:"Resource of your Twilio project from which collections are captured."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/syncMode"})})}),(0,n.jsx)(r.td,{children:"Sync Mode"}),(0,n.jsx)(r.td,{children:"Connection method."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-twilio:dev\n        config:\n          account_sid: <your account ID>\n          auth_token: <secret>\n          start_date: 2017-01-25T00:00:00Z\n          lookback_window: 7\n    bindings:\n      - resource:\n          stream: accounts\n          syncMode: full_refresh\n        target: ${PREFIX}/accounts\n      {...}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>t,x:()=>c});var n=i(96540);const s={},o=n.createContext(s);function t(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);