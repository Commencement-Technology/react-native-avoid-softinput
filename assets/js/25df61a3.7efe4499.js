"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[669],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=u(n),c=a,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?o.createElement(f,i(i({ref:e},p),{},{components:n})):o.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2166:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={id:"set-show-animation-duration",title:"setShowAnimationDuration",sidebar_label:"setShowAnimationDuration",keywords:["react-native-avoid-softinput","setShowAnimationDuration","module"]},i=void 0,l={unversionedId:"api/module/set-show-animation-duration",id:"version-3.0.x/api/module/set-show-animation-duration",title:"setShowAnimationDuration",description:"Use setShowAnimationDuration method, to customize duration of show offset animation with duration value in ms.",source:"@site/versioned_docs/version-3.0.x/api/module/SET_SHOW_ANIMATION_DURATION.mdx",sourceDirName:"api/module",slug:"/api/module/set-show-animation-duration",permalink:"/react-native-avoid-softinput/docs/api/module/set-show-animation-duration",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-3.0.x/api/module/SET_SHOW_ANIMATION_DURATION.mdx",tags:[],version:"3.0.x",frontMatter:{id:"set-show-animation-duration",title:"setShowAnimationDuration",sidebar_label:"setShowAnimationDuration",keywords:["react-native-avoid-softinput","setShowAnimationDuration","module"]},sidebar:"docsSidebar",previous:{title:"setShowAnimationDelay",permalink:"/react-native-avoid-softinput/docs/api/module/set-show-animation-delay"},next:{title:"onSoftInputShown",permalink:"/react-native-avoid-softinput/docs/api/module/on-soft-input-shown"}},s={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],p={toc:u};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"setShowAnimationDuration")," method, to customize duration of show offset animation with duration value in ms."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"no (defaults to 660)"),(0,a.kt)("td",{parentName:"tr",align:null},"show offset animation duration")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { AvoidSoftInput } from "react-native-avoid-softinput";\n\nAvoidSoftInput.setShowAnimationDuration(800);\n')))}m.isMDXComponent=!0}}]);