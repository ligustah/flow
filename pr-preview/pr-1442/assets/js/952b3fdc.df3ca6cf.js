"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2505],{99347:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});var i=s(74848),t=s(28453);const a={sidebar_position:3},o="Jira",n={id:"reference/Connectors/capture-connectors/jira",title:"Jira",description:"This connector captures data from Jira into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/jira.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/jira",permalink:"/pr-preview/pr-1442/reference/Connectors/capture-connectors/jira",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/jira.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Jira HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1442/reference/Connectors/capture-connectors/jira-ingest"},next:{title:"Klaviyo",permalink:"/pr-preview/pr-1442/reference/Connectors/capture-connectors/klaviyo"}},l={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"jira",children:"Jira"}),"\n",(0,i.jsx)(r.p,{children:"This connector captures data from Jira into Flow collections."}),"\n",(0,i.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.jsx)(r.a,{href:"https://ghcr.io/estuary/source-jira:dev",children:(0,i.jsx)(r.code,{children:"ghcr.io/estuary/source-jira:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsx)(r.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,i.jsxs)(r.p,{children:["You can find their documentation ",(0,i.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/jira/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,i.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,i.jsx)(r.p,{children:"The following data resources are supported through the Jira APIs:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-application-roles/#api-rest-api-3-applicationrole-get",children:"Application roles"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-avatars/#api-rest-api-3-avatar-type-system-get",children:"Avatars"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-other-operations/#api-agile-1-0-board-get",children:"Boards"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-dashboards/#api-rest-api-3-dashboard-get",children:"Dashboards"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-filters/#api-rest-api-3-filter-search-get",children:"Filters"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-filter-sharing/#api-rest-api-3-filter-id-permission-get",children:"Filter sharing"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-groups-picker-get",children:"Groups"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/#api-rest-api-3-field-get",children:"Issue fields"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-field-configurations/#api-rest-api-3-fieldconfiguration-get",children:"Issue field configurations"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-contexts/#api-rest-api-3-field-fieldid-context-get",children:"Issue custom field contexts"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-get",children:"Issue link types"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-navigator-settings/#api-rest-api-3-settings-columns-get",children:"Issue navigator settings"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-notification-schemes/#api-rest-api-3-notificationscheme-get",children:"Issue notification schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-get",children:"Issue priorities"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-get",children:"Issue properties"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-remote-links/#api-rest-api-3-issue-issueidorkey-remotelink-get",children:"Issue remote links"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-resolutions/#api-rest-api-3-resolution-search-get",children:"Issue resolutions"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-security-schemes/#api-rest-api-3-issuesecurityschemes-get",children:"Issue security schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-schemes/#api-rest-api-3-issuetypescheme-get",children:"Issue type schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-screen-schemes/#api-rest-api-3-issuetypescreenscheme-get",children:"Issue type screen schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-votes/#api-group-issue-votes",children:"Issue votes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-watchers/#api-rest-api-3-issue-issueidorkey-watchers-get",children:"Issue watchers"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-jira-settings/#api-rest-api-3-application-properties-get",children:"Jira settings"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-labels/#api-rest-api-3-label-get",children:"Labels"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permissions/#api-rest-api-3-mypermissions-get",children:"Permissions"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permission-schemes/#api-rest-api-3-permissionscheme-get",children:"Permission schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-search-get",children:"Projects"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-avatars/#api-rest-api-3-project-projectidorkey-avatars-get",children:"Project avatars"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-categories/#api-rest-api-3-projectcategory-get",children:"Project categories"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-project-projectidorkey-component-get",children:"Project components"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-email/#api-rest-api-3-project-projectid-email-get",children:"Project email"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-permission-schemes/#api-group-project-permission-schemes",children:"Project permission schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-types/#api-rest-api-3-project-type-get",children:"Project types"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-project-projectidorkey-version-get",children:"Project versions"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screens/#api-rest-api-3-screens-get",children:"Screens"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tabs/#api-rest-api-3-screens-screenid-tabs-get",children:"Screen tabs"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tab-fields/#api-rest-api-3-screens-screenid-tabs-tabid-fields-get",children:"Screen tab fields"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-schemes/#api-rest-api-3-screenscheme-get",children:"Screen schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-board/#api-rest-agile-1-0-board-boardid-sprint-get",children:"Sprints"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-time-tracking/#api-rest-api-3-configuration-timetracking-list-get",children:"Time tracking"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-search/#api-rest-api-3-user-search-get",children:"Users"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-user-get",children:"UsersGroupsDetailed"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/#api-rest-api-3-workflow-search-get",children:"Workflows"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-schemes/#api-rest-api-3-workflowscheme-get",children:"Workflow schemes"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-statuses/#api-rest-api-3-status-get",children:"Workflow statuses"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-status-categories/#api-rest-api-3-statuscategory-get",children:"Workflow status categories"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-board/#api-rest-agile-1-0-board-boardid-issue-get",children:"Board issues"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-get",children:"Issue comments"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-worklogs/#api-rest-api-3-issue-issueidorkey-worklog-get",children:"Issue worklogs"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-get",children:"Issues"})}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-sprint/#api-rest-agile-1-0-sprint-sprintid-issue-get",children:"Sprint issues"}),"\nBy default, each resource is mapped to a Flow collection through a separate binding."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["API Token: You can create an API token following ",(0,i.jsx)(r.a,{href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/",children:"these steps from Jira"})]}),"\n",(0,i.jsx)(r.li,{children:"Domain"}),"\n",(0,i.jsx)(r.li,{children:"Email"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,i.jsx)(r.a,{href:"/pr-preview/pr-1442/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Jira source connector."]}),"\n",(0,i.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Title"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required/Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"/api_token"})}),(0,i.jsx)(r.td,{children:"API Token"}),(0,i.jsx)(r.td,{children:"Jira API Token is used for Authorization to your account by BasicAuth."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"/domain"})}),(0,i.jsx)(r.td,{children:"Domain"}),(0,i.jsx)(r.td,{children:"The Domain for your Jira account, e.g. estuary.atlassian.net, estuary.jira.com, jira.your-domain.com"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"/email"})}),(0,i.jsx)(r.td,{children:"Email"}),(0,i.jsx)(r.td,{children:"The user email for your Jira account which you used to generate the API token. This field is used for Authorization to your account by BasicAuth."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Title"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required/Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"/stream"})})}),(0,i.jsx)(r.td,{children:"Stream"}),(0,i.jsx)(r.td,{children:"Resource of your Jira project from which collections are captured."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"/syncMode"})})}),(0,i.jsx)(r.td,{children:"Sync Mode"}),(0,i.jsx)(r.td,{children:"Connection method."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-jira:dev\n        config:\n          api_token: <token>\n          domain: <domain>\n          email: <email>\n    bindings:\n      - resource:\n          stream: issues\n          syncMode: incremental\n        target: ${PREFIX}/issues\n      {...}\n"})})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>n});var i=s(96540);const t={},a=i.createContext(t);function o(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);