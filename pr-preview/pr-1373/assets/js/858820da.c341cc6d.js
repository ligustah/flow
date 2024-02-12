"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},i="GitLab",s={unversionedId:"reference/Connectors/capture-connectors/gitlab",id:"reference/Connectors/capture-connectors/gitlab",title:"GitLab",description:"This connector captures data from GitLab repositories and organizations into Flow collections via GitLabs's API V4. It can also work with self-hosted GitLab.",source:"@site/docs/reference/Connectors/capture-connectors/gitlab.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/gitlab",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/gitlab",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/gitlab.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/github"},next:{title:"Google Ads",permalink:"/pr-preview/pr-1373/reference/Connectors/capture-connectors/google-ads"}},l={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Resources",id:"resources",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with GitLab in the Flow web app",id:"using-oauth2-to-authenticate-with-gitlab-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually using personal access token",id:"configuring-the-connector-specification-manually-using-personal-access-token",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Setup",id:"setup",level:3},{value:"Sample",id:"sample",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gitlab"},"GitLab"),(0,n.kt)("p",null,"This connector captures data from GitLab repositories and organizations into Flow collections via GitLabs's API V4. It can also work with self-hosted GitLab."),(0,n.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-gitlab:dev"},(0,n.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-gitlab:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,n.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/gitlab/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,n.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,n.kt)("p",null,"When you ",(0,n.kt)("a",{parentName:"p",href:"#endpoint"},"configure the connector"),", you may a list of GitLab Groups or Projects from which to capture data."),(0,n.kt)("p",null,"From your selection, the following data resources are captured:"),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/branches.html"},"Branches")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/commits.html"},"Commits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/issues.html"},"Issues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/group_boards.html"},"Group Issue Boards")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/pipelines.html"},"Pipelines")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/jobs.html"},"Jobs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/projects.html"},"Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/milestones.html"},"Project Milestones")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/merge_requests.html"},"Project Merge Requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/users.html"},"Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/groups.html"},"Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/group_milestones.html"},"Group Milestones")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/members.html"},"Group and Project Members")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/tags.html"},"Tags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/releases/index.html"},"Releases")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/group_labels.html"},"Group Labels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/labels.html"},"Project Labels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/epics.html"},"Epics"),"(only available for GitLab Ultimate and GitLab.com Gold accounts)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/epic_issues.html"},"Epic Issues")," (only available for GitLab Ultimate and GitLab.com Gold accounts)")),(0,n.kt)("p",null,"Each resource is mapped to a Flow collection through a separate binding."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"There are two ways to authenticate with GitLab when capturing data into Flow: using OAuth2, and manually, by generating a personal access token.\nTheir prerequisites differ."),(0,n.kt)("p",null,"OAuth is recommended for simplicity in the Flow web app;\nthe access token method is the only supported method using the command line. Which authentication method you choose depends on the policies of your organization. Github has special organization settings that need to be enabled in order for users to be able to access repos that are part of an organization."),(0,n.kt)("h3",{id:"using-oauth2-to-authenticate-with-gitlab-in-the-flow-web-app"},"Using OAuth2 to authenticate with GitLab in the Flow web app"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A GitLab user account with ",(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/permissions.html"},"access")," to the repositories of interest, and which is a member of organizations of interest.  ",(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project"},"How to add a member"),".")),(0,n.kt)("h3",{id:"configuring-the-connector-specification-manually-using-personal-access-token"},"Configuring the connector specification manually using personal access token"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A GitLab user account with access to all entities of interest.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A GitLab ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"personal access token"),")."))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1373/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GitHub source connector."),(0,n.kt)("h3",{id:"setup"},"Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Complete authentication using Oauth or a PAT"),(0,n.kt)("li",{parentName:"ol"},"Select your start date in the format 2023-08-31T00:00:00"),(0,n.kt)("li",{parentName:"ol"},"Optionally select Groups and Projects")),(0,n.kt)("h3",{id:"sample"},"Sample"),(0,n.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-gitlab:dev\n          config:\n            credentials:\n              option_title: PAT Credentials\n              personal_access_token: {secret}\n            groups: estuary.dev\n            projects: estuary/flow\n            start_date: 2022-01-01T00:00:00Z\n      bindings:\n        - resource:\n            stream: branches\n            syncMode: full_refresh\n          target: ${PREFIX}/assignees\n       {...}\n")))}m.isMDXComponent=!0}}]);