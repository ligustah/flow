"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3353],{17644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(74848),i=n(28453);const o={sidebar_position:1},r="GitLab",c={id:"reference/Connectors/capture-connectors/gitlab",title:"GitLab",description:"This connector captures data from GitLab repositories and organizations into Flow collections via GitLabs's API V4. It can also work with self-hosted GitLab.",source:"@site/docs/reference/Connectors/capture-connectors/gitlab.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/gitlab",permalink:"/pr-preview/pr-1450/reference/Connectors/capture-connectors/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/gitlab.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/pr-preview/pr-1450/reference/Connectors/capture-connectors/github"},next:{title:"Google Ads",permalink:"/pr-preview/pr-1450/reference/Connectors/capture-connectors/google-ads"}},a={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Resources",id:"resources",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with GitLab in the Flow web app",id:"using-oauth2-to-authenticate-with-gitlab-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually using personal access token",id:"configuring-the-connector-specification-manually-using-personal-access-token",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Setup",id:"setup",level:3},{value:"Sample",id:"sample",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"gitlab",children:"GitLab"}),"\n",(0,s.jsx)(t.p,{children:"This connector captures data from GitLab repositories and organizations into Flow collections via GitLabs's API V4. It can also work with self-hosted GitLab."}),"\n",(0,s.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(t.a,{href:"https://ghcr.io/estuary/source-gitlab:dev",children:(0,s.jsx)(t.code,{children:"ghcr.io/estuary/source-gitlab:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsxs)(t.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,s.jsx)(t.a,{href:"https://docs.airbyte.com/integrations/sources/gitlab/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(t.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsxs)(t.p,{children:["When you ",(0,s.jsx)(t.a,{href:"#endpoint",children:"configure the connector"}),", you may a list of GitLab Groups or Projects from which to capture data."]}),"\n",(0,s.jsx)(t.p,{children:"From your selection, the following data resources are captured:"}),"\n",(0,s.jsx)(t.h3,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/branches.html",children:"Branches"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/commits.html",children:"Commits"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/issues.html",children:"Issues"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/group_boards.html",children:"Group Issue Boards"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/pipelines.html",children:"Pipelines"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/jobs.html",children:"Jobs"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/projects.html",children:"Projects"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/milestones.html",children:"Project Milestones"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/merge_requests.html",children:"Project Merge Requests"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/users.html",children:"Users"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/groups.html",children:"Groups"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/group_milestones.html",children:"Group Milestones"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/members.html",children:"Group and Project Members"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/tags.html",children:"Tags"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/releases/index.html",children:"Releases"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/group_labels.html",children:"Group Labels"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/labels.html",children:"Project Labels"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/epics.html",children:"Epics"}),"(only available for GitLab Ultimate and GitLab.com Gold accounts)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/api/epic_issues.html",children:"Epic Issues"})," (only available for GitLab Ultimate and GitLab.com Gold accounts)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"There are two ways to authenticate with GitLab when capturing data into Flow: using OAuth2, and manually, by generating a personal access token.\nTheir prerequisites differ."}),"\n",(0,s.jsx)(t.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe access token method is the only supported method using the command line. Which authentication method you choose depends on the policies of your organization. Github has special organization settings that need to be enabled in order for users to be able to access repos that are part of an organization."}),"\n",(0,s.jsx)(t.h3,{id:"using-oauth2-to-authenticate-with-gitlab-in-the-flow-web-app",children:"Using OAuth2 to authenticate with GitLab in the Flow web app"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A GitLab user account with ",(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/permissions.html",children:"access"})," to the repositories of interest, and which is a member of organizations of interest.  ",(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project",children:"How to add a member"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"configuring-the-connector-specification-manually-using-personal-access-token",children:"Configuring the connector specification manually using personal access token"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"A GitLab user account with access to all entities of interest."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["A GitLab ",(0,s.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",children:"personal access token"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-1450/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GitHub source connector."]}),"\n",(0,s.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Complete authentication using Oauth or a PAT"}),"\n",(0,s.jsx)(t.li,{children:"Select your start date in the format 2023-08-31T00:00:00"}),"\n",(0,s.jsx)(t.li,{children:"Optionally select Groups and Projects"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(t.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-gitlab:dev\n          config:\n            credentials:\n              option_title: PAT Credentials\n              personal_access_token: {secret}\n            groups: estuary.dev\n            projects: estuary/flow\n            start_date: 2022-01-01T00:00:00Z\n      bindings:\n        - resource:\n            stream: branches\n            syncMode: full_refresh\n          target: ${PREFIX}/assignees\n       {...}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);