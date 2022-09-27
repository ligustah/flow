"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[152],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?r.createElement(m,i(i({ref:e},u),{},{components:a})):r.createElement(m,i({ref:e},u))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},681:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},i="Registration and setup",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Registration and setup",description:"Estuary Flow is a hosted web application that also offers a robust CLI.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Comparisons",permalink:"/overview/comparisons"},next:{title:"Create a simple data flow",permalink:"/guides/create-dataflow"}},s={},p=[{value:"Get started with the Flow web application",id:"get-started-with-the-flow-web-application",level:2},{value:"Get started with the Flow CLI",id:"get-started-with-the-flow-cli",level:2},{value:"Self-hosting Flow",id:"self-hosting-flow",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],u={toc:p};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registration-and-setup"},"Registration and setup"),(0,n.kt)("p",null,"Estuary Flow is a hosted web application that also offers a robust CLI."),(0,n.kt)("p",null,"Flow is currently in private beta. Essentially, this means that it's available to you, but new sign-ups are personally reviewed by our team."),(0,n.kt)("h2",{id:"get-started-with-the-flow-web-application"},"Get started with the Flow web application"),(0,n.kt)("p",null,"You can sign up to get started as a Flow trial user by visiting the web application ",(0,n.kt)("a",{parentName:"p",href:"https://go.estuary.dev/dashboard"},"here"),"."),(0,n.kt)("p",null,"Once you've signed up with your personal information, an Estuary team member will be in touch to activate your account and discuss your business use-case, if applicable."),(0,n.kt)("h2",{id:"get-started-with-the-flow-cli"},"Get started with the Flow CLI"),(0,n.kt)("p",null,"After your account has been activated through the ",(0,n.kt)("a",{parentName:"p",href:"#get-started-with-the-flow-web-application"},"web app"),", you can begin to work with your data flows from the command line.\nThis is not required, but it enables more advanced workflows or might simply be your preference."),(0,n.kt)("p",null,"Flow has a single binary, ",(0,n.kt)("strong",{parentName:"p"},"flowctl"),"."),(0,n.kt)("p",null,"flowctl is available for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Linux")," x86-64. All distributions are supported."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MacOS")," 11 (Big Sur) or later. Both Intel and M1 chips are supported.")),(0,n.kt)("p",null,"To install, copy and paste the appropriate script below into your terminal. This will download flowctl, make it executable, and add it to your ",(0,n.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For Linux:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-x86_64-linux' && sudo chmod +x /usr/local/bin/flowctl\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For Mac:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-multiarch-macos' && sudo chmod +x /usr/local/bin/flowctl\n")))),(0,n.kt)("p",null,"Alternatively, you can find the source files on GitHub ",(0,n.kt)("a",{parentName:"p",href:"https://go.estuary.dev/flowctl"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/concepts/flowctl"},"Learn more about using flowctl.")),(0,n.kt)("h2",{id:"self-hosting-flow"},"Self-hosting Flow"),(0,n.kt)("p",null,"The Flow runtime is available under the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/estuary/flow/blob/master/LICENSE-BSL"},"Business Source License"),". It's possible to self-host Flow using a cloud provider of your choice."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Beta")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Setup for self-hosting is not covered in this documentation, and full support is not guaranteed at this time.\nWe recommend using the ",(0,n.kt)("a",{parentName:"p",href:"#get-started-with-the-flow-web-application"},"hosted version of Flow")," for the best experience.\nIf you'd still like to self-host, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/estuary/flow"},"GitHub repository")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/t/estuary-dev/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ"},"Estuary Slack"),"."))),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("p",null,"Start using Flow with these recommended resources."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/guides/create-dataflow"},"Create your first data flow")),":\nFollow this guide to create your first data flow in the Flow web app, while learning essential flow concepts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/concepts/"},"High level concepts")),": Start here to learn more about important Flow terms."))))}c.isMDXComponent=!0}}]);