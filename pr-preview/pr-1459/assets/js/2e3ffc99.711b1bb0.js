"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8036],{14931:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(74848),a=i(28453);const o={},s="Schema evolution",r={id:"guides/schema-evolution",title:"Schema evolution",description:"When collection specifications and schemas change, you must make corresponding changes in other parts of your Data Flow to avoid errors. In this guide, you'll learn how to respond to different types of collection changes.",source:"@site/docs/guides/schema-evolution.md",sourceDirName:"guides",slug:"/guides/schema-evolution",permalink:"/pr-preview/pr-1459/guides/schema-evolution",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/schema-evolution.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customize materialized fields",permalink:"/pr-preview/pr-1459/guides/customize-materialization-fields"},next:{title:"Concepts",permalink:"/pr-preview/pr-1459/concepts/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Schema evolution scenarios",id:"schema-evolution-scenarios",level:2},{value:"Re-creating a collection",id:"re-creating-a-collection",level:3},{value:"A new field is added",id:"a-new-field-is-added",level:3},{value:"A field&#39;s data type has changed",id:"a-fields-data-type-has-changed",level:3},{value:"A field was removed",id:"a-field-was-removed",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"schema-evolution",children:"Schema evolution"}),"\n",(0,t.jsx)(n.p,{children:"When collection specifications and schemas change, you must make corresponding changes in other parts of your Data Flow to avoid errors. In this guide, you'll learn how to respond to different types of collection changes."}),"\n",(0,t.jsxs)(n.p,{children:["Manual methods (using flowctl) as well as features available in the Flow web app are covered here.\nFor an in-depth overview of the automatic schema evolution feature in the web app and how it works, see ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/advanced/evolutions",children:"this article"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Flow ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/collections",children:"collections"})," serve not only as your real-time data storage, but also as a contract between tasks that produce and consume their data. ",(0,t.jsx)(n.strong,{children:"Captures"})," are producers, ",(0,t.jsx)(n.strong,{children:"materializations"})," are consumers, and ",(0,t.jsx)(n.strong,{children:"derivations"})," can act as either."]}),"\n",(0,t.jsx)(n.p,{children:"This contract helps prevent data loss and error in your Data Flows, and is defined in terms of the collection specification, or spec, which includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The JSON schema"}),"\n",(0,t.jsxs)(n.li,{children:["The collection ",(0,t.jsx)(n.code,{children:"key"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/advanced/projections",children:"Projections"}),", if any"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There are many reasons a collection spec might change. Often, it's due to a change in the source data. Regardless, you'll need to make changes to downstream tasks \u2014 most often, materializations \u2014\xa0to avoid errors."}),"\n",(0,t.jsx)(n.h2,{id:"schema-evolution-scenarios",children:"Schema evolution scenarios"}),"\n",(0,t.jsx)(n.p,{children:"This guide is broken down into sections for different common scenarios, depending on which properties of the collection spec have changed."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"#re-creating-a-collection",children:["The ",(0,t.jsx)(n.code,{children:"key"})," pointers have changed"]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#re-creating-a-collection",children:"The logical partitioning configuration has changed"})}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"schema"})," (or ",(0,t.jsx)(n.code,{children:"readSchema"})," if defined separately) has changed","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#a-new-field-is-added",children:"A new field is added"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#a-fields-data-type-has-changed",children:"A field's data type has changed"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#a-field-was-removed",children:"A field was removed"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["There are a variety of reasons why these properties may change, and also different mechanisms for detecting changes in source data. In general, it doesn't matter why the collection spec has changed, only ",(0,t.jsx)(n.em,{children:"what"})," has changed. However, ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/captures#automatically-update-captures",children:"AutoDiscovers"})," are able to handle some of these scenarios automatically. Where applicable, AutoDiscover behavior will be called out under each section."]})}),"\n",(0,t.jsx)(n.h3,{id:"re-creating-a-collection",children:"Re-creating a collection"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Scenario: the ",(0,t.jsx)(n.code,{children:"key"})," pointer or logical partitioning configurations have changed."]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"key"})," of a Flow collection cannot be changed after the collection is created. The same is true of the logical partitioning, which also cannot be changed after the collection is created."]}),"\n",(0,t.jsx)(n.p,{children:"If you need to change either of those parts of a collection spec, you'll need to create a new collection and update the bindings of any captures or materializations that reference the old collection."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Web app workflow"})}),"\n",(0,t.jsx)(n.p,{children:"If you're working in the Flow web app, you'll see an error message and an option to re-create the collection as shown in the example below."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(65035).A+"",width:"2318",height:"1215"})}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Apply"})," to re-create the collection and update any tasks that reference the old collection with the new name."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"flowctl workflow:"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're working with flowctl, you'll need to re-create the collection manually in your ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file. You must also update any captures or materializations that reference it. For example, say you have a data flow defined by the following specs:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  acmeCo/inventory/source-postgres:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-postgres:v1\n        config: encrypted-pg-config.sops.yaml\n    bindings:\n      - resource:\n          namespace: public\n          stream: anvils\n          mode: Normal\n        target: acmeCo/inventory/anvils\n\ncollections:\n  acmeCo/inventory/anvils:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        warehouse_id: { type: string }\n        quantity: { type: integer }\n      required: [sku, warehouse_id, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils\n        resource:\n          table: anvils\n          schema: inventory\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To change the collection key, you would update the YAML like so. Note the capture ",(0,t.jsx)(n.code,{children:"target"}),", collection name, and materialization ",(0,t.jsx)(n.code,{children:"source"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  acmeCo/inventory/source-postgres:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-postgres:v1\n        config: encrypted-pg-config.sops.yaml\n    bindings:\n      - resource:\n          namespace: public\n          stream: anvils\n          mode: Normal\n        backfill: 1\n        target: acmeCo/inventory/anvils_v2\n\ncollections:\n  acmeCo/inventory/anvils_v2:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        warehouse_id: { type: string }\n        quantity: { type: integer }\n      required: [sku, warehouse_id, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils_v2\n        backfill: 1\n        resource:\n          table: anvils\n          schema: inventory\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The existing ",(0,t.jsx)(n.code,{children:"acmeCo/inventory/anvils"})," collection will not be modified and will remain in place, but won't update because no captures are writing to it."]}),"\n",(0,t.jsxs)(n.p,{children:["Also note the addition of the ",(0,t.jsx)(n.code,{children:"backfill"})," property. If the ",(0,t.jsx)(n.code,{children:"backfill"})," property already exists, just increment its value. For the materialization, this will ensure that the destination table in Snowflake gets dropped and re-created, and that the materialization will backfill it from the beginning. In the capture, it similarly causes it to start over from the beginning, writing the captured data into the new collection."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Auto-Discovers:"})}),"\n",(0,t.jsxs)(n.p,{children:["If you enabled the option to ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-1459/concepts/captures#automatically-update-captures",children:[(0,t.jsx)(n.strong,{children:"Automatically keep schemas up to date"})," (",(0,t.jsx)(n.code,{children:"autoDiscover"}),")"]})," and selected ",(0,t.jsx)(n.strong,{children:"Breaking change re-versions collections"})," (",(0,t.jsx)(n.code,{children:"evolveIncompatibleCollections"}),") for the capture, this evolution would be performed automatically."]}),"\n",(0,t.jsx)(n.h3,{id:"a-new-field-is-added",children:"A new field is added"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Scenario: this is one way in which the schema can change."})}),"\n",(0,t.jsxs)(n.p,{children:["When a new field appears in the collection schema, it ",(0,t.jsx)(n.em,{children:"may"})," automatically be added to any materializations that use ",(0,t.jsx)(n.code,{children:"recommended"})," fields. Recommended fields are enabled by default in each binding. See ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/materialization#projected-fields",children:"the materialization docs"})," for more info about how to enable or disable ",(0,t.jsx)(n.code,{children:"recommended"})," fields."]}),"\n",(0,t.jsx)(n.p,{children:'When recommended fields are enabled, new fields are added automatically if they meet the criteria for the particular materialization connector. For example, scalar fields (strings, numbers, and booleans) are considered "recommended" fields when materializing to database tables.'}),"\n",(0,t.jsxs)(n.p,{children:["If your materialization binding is set to ",(0,t.jsx)(n.code,{children:"recommended: false"}),", or if the new field is not recommended, you can manually add it to the materialization."]}),"\n",(0,t.jsx)(n.p,{children:"To manually add a field:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"In the Flow web app,"})," ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/guides/edit-data-flows#edit-a-materialization",children:"edit the materialization"}),", find the affected binding, and click ",(0,t.jsx)(n.strong,{children:"Show Fields"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Using flowctl,"})," add the field to ",(0,t.jsx)(n.code,{children:"fields.include"})," in the materialization specification as shown ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/materialization#projected-fields",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Newly added fields will not be set for rows that have already been materialized. If you want to ensure that all rows have the new field, just increment the ",(0,t.jsx)(n.code,{children:"backfill"})," counter in the affected binding to have it re-start from the beginning."]})}),"\n",(0,t.jsx)(n.h3,{id:"a-fields-data-type-has-changed",children:"A field's data type has changed"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Scenario: this is one way in which the schema can change."})}),"\n",(0,t.jsx)(n.p,{children:"When a field's data type has changed, the effect on your materialization depends on the specific connector you're using."}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["Note that these restrictions only apply to fields that are actively being materialized. If a field is ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1459/concepts/materialization#projected-fields",children:"excluded from your materialization"}),", either explicitly or because it's not recommended, then the data types may change in any way."]}),(0,t.jsxs)(n.p,{children:["Regardless of whether the field is materialized or not, it must still pass schema validation tests. Therefore, you must still make sure existing data remains valid against the new schema. For example, if you changed ",(0,t.jsx)(n.code,{children:"excluded_field: { type: string }"})," to ",(0,t.jsx)(n.code,{children:"type: integer"})," while there was existing data with string values, your materialization would fail due to a schema validation error."]})]}),"\n",(0,t.jsxs)(n.p,{children:["Database and data warehouse materializations tend to be somewhat restrictive about changing column types. They typically only allow dropping ",(0,t.jsx)(n.code,{children:"NOT NULL"})," constraints. This means that you can safely change a schema to make a required field optional, or to add ",(0,t.jsx)(n.code,{children:"null"})," as a possible type, and the materialization will continue to work normally.  Most other types of changes will require materializing into a new table."]}),"\n",(0,t.jsx)(n.p,{children:"The best way to find out whether a change is acceptable to a given connector is to run test or attempt to re-publish. Failed attempts to publish won't affect any tasks that are already running."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Web app workflow"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're working in the Flow web app, and attempt to publish a change that's unacceptable to the connector, you'll see an error message and an offer to increment the necessary ",(0,t.jsx)(n.code,{children:"backfill"})," counters, or, in rare cases, to re-create the collection."]}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Apply"})," to to accept this solution and continue to publish."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"flowctl workflow"})}),"\n",(0,t.jsx)(n.p,{children:"If you test or attempt to publish a change that's unacceptable to the connector, you'll see an error message pointing to the field that's changed. In most cases, you can work around the issue by manually updating the materialization to materialize into a new table."}),"\n",(0,t.jsx)(n.p,{children:"For example, say you have a data flow defined by the following specs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/inventory/anvils:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        quantity: { type: integer }\n        description: { type: string }\n      required: [sku, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils\n        backfill: 3\n        resource:\n          table: anvils\n          schema: inventory\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let's say the type of ",(0,t.jsx)(n.code,{children:"description"})," was broadened to allow ",(0,t.jsx)(n.code,{children:"object"})," values in addition to ",(0,t.jsx)(n.code,{children:"string"}),". You'd update your specs as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/inventory/anvils:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        quantity: { type: integer }\n        description: { type: [string, object] }\n      required: [sku, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils\n        backfill: 4\n        resource:\n          table: anvils\n          schema: inventory\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the only change was to increment the ",(0,t.jsx)(n.code,{children:"backfill"})," counter. If the previous binding spec did not specify ",(0,t.jsx)(n.code,{children:"backfill"}),", then just add ",(0,t.jsx)(n.code,{children:"backfill: 1"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This works because the type is broadened, so existing values will still validate against the new schema. If this were not the case, then you'd likely need to ",(0,t.jsx)(n.a,{href:"#re-creating-a-collection",children:"re-create the whole collection"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Auto-Discovers:"})}),"\n",(0,t.jsxs)(n.p,{children:["If you enabled the option to ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-1459/concepts/captures#automatically-update-captures",children:[(0,t.jsx)(n.strong,{children:"Automatically keep schemas up to date"})," (",(0,t.jsx)(n.code,{children:"autoDiscover"}),")"]})," and selected ",(0,t.jsx)(n.strong,{children:"Breaking change re-versions collections"})," (",(0,t.jsx)(n.code,{children:"evolveIncompatibleCollections"}),") for the capture, this evolution would be performed automatically."]}),"\n",(0,t.jsx)(n.h3,{id:"a-field-was-removed",children:"A field was removed"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Scenario: this is one way in which the schema can change."})}),"\n",(0,t.jsxs)(n.p,{children:["Removing fields is generally allowed by all connectors, and does not require new tables or collections. Note that for database materializations, the existing column will ",(0,t.jsx)(n.em,{children:"not"})," be dropped, and will just be ignored by the materialization going forward. A ",(0,t.jsx)(n.code,{children:"NOT NULL"})," constraint would be removed from that column, but it will otherwise be left in place."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},65035:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/evolution-re-create-ui-d8ae2ab634980751f8c87a0483f96d39.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);