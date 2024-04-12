"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6917],{18951:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(74848),s=r(28453);const i={},o="Survey Monkey",c={id:"reference/Connectors/capture-connectors/survey-monkey",title:"Survey Monkey",description:"This connector captures data from SurveyMonkey surveys into Flow collections via the SurveyMonkey API.",source:"@site/docs/reference/Connectors/capture-connectors/survey-monkey.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/survey-monkey",permalink:"/pr-preview/pr-1440/reference/Connectors/capture-connectors/survey-monkey",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/survey-monkey.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stripe",permalink:"/pr-preview/pr-1440/reference/Connectors/capture-connectors/stripe"},next:{title:"TikTok Marketing",permalink:"/pr-preview/pr-1440/reference/Connectors/capture-connectors/tiktok"}},d={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"OAuth authentication in the web app",id:"oauth-authentication-in-the-web-app",level:4},{value:"Manual authentication with flowctl",id:"manual-authentication-with-flowctl",level:4},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"survey-monkey",children:"Survey Monkey"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from SurveyMonkey surveys into Flow collections via the SurveyMonkey API."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-surveymonkey:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-surveymonkey:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/surveymonkey",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/api/v3/#api-endpoints-get-surveys",children:"Surveys"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/api/v3/#api-endpoints-get-surveys-id-pages",children:"Survey pages"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/api/v3/#api-endpoints-get-surveys-survey_id-pages-page_id-questions",children:"Survey questions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/api/v3/#api-endpoints-survey-responses",children:"Survey responses"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"You'll need to configure a SurveyMonkey private app to integrate with Flow."}),"\n",(0,t.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to your your ",(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/apps",children:"SurveyMonkey apps page"})," and create a new private app."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the following required ",(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/api/v3/#scopes",children:"scopes"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View surveys"}),"\n",(0,t.jsx)(n.li,{children:"View responses"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy the app. This requires a paid SurveyMonkey plan; otherwise, ",(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/api/v3/#deploying-an-app",children:"the app will be deleted in 90 days"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once the app is set up, there are two ways to authenticate SurveyMonkey in Flow: using OAuth in the web app, or using an access token with the flowctl CLI."}),"\n",(0,t.jsx)(n.h4,{id:"oauth-authentication-in-the-web-app",children:"OAuth authentication in the web app"}),"\n",(0,t.jsxs)(n.p,{children:["You'll need the username and password of a SurveyMonkey user that is part of the ",(0,t.jsx)(n.a,{href:"https://help.surveymonkey.com/en/billing/teams/",children:"team"}),"\nfor which the private app was created."]}),"\n",(0,t.jsx)(n.h4,{id:"manual-authentication-with-flowctl",children:"Manual authentication with flowctl"}),"\n",(0,t.jsx)(n.p,{children:"Note the client ID, secret, and access token for the private app you created. You'll use these in the connector configuration."}),"\n",(0,t.jsx)(n.h2,{id:"performance-considerations",children:"Performance considerations"}),"\n",(0,t.jsxs)(n.p,{children:["The SurveyMonkey API imposes ",(0,t.jsx)(n.a,{href:"https://developer.surveymonkey.com/api/v3/#request-and-response-limits",children:"call limits"})," of 500 per day\nand 120 per minute."]}),"\n",(0,t.jsx)(n.p,{children:"This connector uses caching to avoid exceeding these limits."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1440/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the SurveyMonkey source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,t.jsx)(n.a,{href:"#oauth-authentication-in-the-web-app",children:"OAuth2"}),",\nso many of these properties aren't required."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials"})})}),(0,t.jsx)(n.td,{children:"Credentials"}),(0,t.jsx)(n.td,{children:"Credentials for the service"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/access_token"})})}),(0,t.jsx)(n.td,{children:"Access Token"}),(0,t.jsx)(n.td,{children:"Access Token for your SurveyMonkey private app."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/client_id"})})}),(0,t.jsx)(n.td,{children:"Client ID"}),(0,t.jsx)(n.td,{children:"Client ID associated with your SurveyMonkey private app."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/credentials/client_secret"})})}),(0,t.jsx)(n.td,{children:"Client Secret"}),(0,t.jsx)(n.td,{children:"Client secret associated with your SurveyMonkey private app."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/start_date"})})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/survey_ids"})}),(0,t.jsx)(n.td,{children:"Survey Monkey survey IDs"}),(0,t.jsx)(n.td,{children:"IDs of the surveys from which you'd like to replicate data. If left empty, data from all boards to which you have access will be replicated."}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"SurveyMonkey resource from which a collection is captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-surveymonkey:dev\n        config:\n          credentials:\n            access_token: {secret}\n            client_id: XXXXXXXXXXXXXXXX\n            client_secret: {secret}\n          start_date: 2021-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: surveys\n          syncMode: incremental\n        target: ${PREFIX}/surveys\n      {...}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);