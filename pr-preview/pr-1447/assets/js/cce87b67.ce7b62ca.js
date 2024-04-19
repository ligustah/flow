"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5248],{49180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(74848),i=n(28453);const a={sidebar_position:1},r="Editing considerations",s={id:"reference/editing",title:"Editing considerations",description:"You can edit the components of your Data Flows in the Flow web app and with flowctl, but before you do so, it's important to consider the implications of your changes.",source:"@site/docs/reference/editing.md",sourceDirName:"reference",slug:"/reference/editing",permalink:"/pr-preview/pr-1447/reference/editing",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/editing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authorizing users and authenticating with Flow",permalink:"/pr-preview/pr-1447/reference/authentication"},next:{title:"Notifications",permalink:"/pr-preview/pr-1447/reference/notifications"}},c={},d=[{value:"How to edit Flow entities",id:"how-to-edit-flow-entities",level:2},{value:"Endpoint configuration changes",id:"endpoint-configuration-changes",level:2},{value:"Managing connector updates",id:"managing-connector-updates",level:2},{value:"Considerations for name changes",id:"considerations-for-name-changes",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"editing-considerations",children:"Editing considerations"}),"\n",(0,o.jsx)(t.p,{children:"You can edit the components of your Data Flows in the Flow web app and with flowctl, but before you do so, it's important to consider the implications of your changes."}),"\n",(0,o.jsx)(t.p,{children:"Though Flow entities like captures, collections, and materializations are discrete components, they depend on one another to form complete Data Flows. Changing a configuration or a name can have adverse effects downstream."}),"\n",(0,o.jsx)(t.p,{children:"As you edit, you'll also have to account for any updates to the configuration for the connector used."}),"\n",(0,o.jsx)(t.h2,{id:"how-to-edit-flow-entities",children:"How to edit Flow entities"}),"\n",(0,o.jsxs)(t.p,{children:["In the Flow web app, you can edit captures and materializations, and use the ",(0,o.jsx)(t.strong,{children:"Schema Inference"})," tool to edit collection schemas."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/pr-preview/pr-1447/guides/edit-data-flows#edit-a-capture",children:"Editing captures and associated collections"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/pr-preview/pr-1447/guides/edit-data-flows#edit-a-materialization",children:"Editing materializations and associated collections"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"With flowctl, you can edit captures, materializations, collections, derivations, and tests.\nYou do this by pulling the desired specification locally, editing, and re-publishing."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/pr-preview/pr-1447/concepts/flowctl#editing-data-flows-with-flowctl",children:"Editing with flowctl"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"endpoint-configuration-changes",children:"Endpoint configuration changes"}),"\n",(0,o.jsx)(t.p,{children:"A common reason to edit a capture or materialization to fix a broken endpoint configuration:\nfor example, if a database is now accessed through a different port.\nChanges that prevent Flow from finding the source system immediately cause the capture or materialization to fail."}),"\n",(0,o.jsxs)(t.p,{children:["By contrast, certain credential changes might not cause issues ",(0,o.jsx)(t.em,{children:"unless"})," you attempt to edit the capture or materialization.\nBecause Flow tasks run continuously, the connector doesn't have to re-authenticate and an outdated credential won't cause failure.\nEditing, however, requires the task to re-start, so you'll need to provide current credentials to the endpoint configuration.\nBefore editing, take note of any changed credentials, even if the task is still running successfully."]}),"\n",(0,o.jsx)(t.h2,{id:"managing-connector-updates",children:"Managing connector updates"}),"\n",(0,o.jsx)(t.p,{children:"Connectors are updated periodically. In some cases, required fields are added or removed.\nWhen you edit a capture or materialization, you'll need to update the configuration to comply with the current connector version.\nYou may need to change a property's formatting or add a new field."}),"\n",(0,o.jsx)(t.p,{children:"Additionally, certain updates to capture connectors can affect the way available collections are named.\nAfter editing, the connector may map a data resource to new collection with a different name."}),"\n",(0,o.jsxs)(t.p,{children:["For example, say you have capture that writes to a collection called ",(0,o.jsx)(t.code,{children:"post/fruity_pebbles/nutritionFacts"}),".\nYou begin to edit the capture using the latest version of the connector.\nThe connector detects the same set of nutrition facts data,\nbut maps it to a collection called ",(0,o.jsx)(t.code,{children:"post/fruity_pebbles/nutrition-facts"}),".\nIf you continue to publish the edited capture, both collections will persist,\nbut new data will be written to the new collection."]}),"\n",(0,o.jsx)(t.p,{children:"Before editing, check if a connector has been updated:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Go to the ",(0,o.jsx)(t.strong,{children:"Admin"})," tab and view the list of connectors. Each tile shows the date it was last updated."]}),"\n",(0,o.jsxs)(t.li,{children:["Check the connector's ",(0,o.jsx)(t.a,{href:"/pr-preview/pr-1447/reference/Connectors/",children:"documentation"}),". Pertinent updates, if any, are noted in the ",(0,o.jsx)(t.strong,{children:"Changelog"})," section."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"considerations-for-name-changes",children:"Considerations for name changes"}),"\n",(0,o.jsx)(t.p,{children:"You're not able to change the name of a capture or materialization after you create it.\nYou're also unable to manually change the names of collections;\nhowever, connector updates can cause collection names to change, as discussed above."}),"\n",(0,o.jsxs)(t.p,{children:["It ",(0,o.jsx)(t.em,{children:"is"})," possible to manually change the names of destination resources (tables or analogous data storage units to which collections are written) when editing a materialization.\nYou should avoid doing so unless you want to route future data to a new location."]}),"\n",(0,o.jsx)(t.p,{children:"If you do this, a new resource with that name will be created and the old resource will continue to exist.\nHistorical data will may not be backfilled into the new resource, depending on the connector used."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(96540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);