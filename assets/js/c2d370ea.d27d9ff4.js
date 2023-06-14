"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5656],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>h});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),u=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return o.createElement(p.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||f[d]||a;return n?o.createElement(h,i(i({ref:e},l),{},{components:n})):o.createElement(h,i({ref:e},l))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4511:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={id:"use-soft-input-shown",title:"useSoftInputShown",sidebar_label:"useSoftInputShown",keywords:["react-native-avoid-softinput","useSoftInputShown","react hooks"]},i=void 0,s={unversionedId:"api/hooks/use-soft-input-shown",id:"api/hooks/use-soft-input-shown",title:"useSoftInputShown",description:"useSoftInputShown is a shortcut for using AvoidSoftInput.onSoftInputShown method inside useEffect.",source:"@site/docs/api/hooks/USE_SOFT_INPUT_SHOWN.mdx",sourceDirName:"api/hooks",slug:"/api/hooks/use-soft-input-shown",permalink:"/react-native-avoid-softinput/docs/next/api/hooks/use-soft-input-shown",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/api/hooks/USE_SOFT_INPUT_SHOWN.mdx",tags:[],version:"current",frontMatter:{id:"use-soft-input-shown",title:"useSoftInputShown",sidebar_label:"useSoftInputShown",keywords:["react-native-avoid-softinput","useSoftInputShown","react hooks"]},sidebar:"docsSidebar",previous:{title:"useSoftInputHidden",permalink:"/react-native-avoid-softinput/docs/next/api/hooks/use-soft-input-hidden"},next:{title:"useSoftInputHeightChanged",permalink:"/react-native-avoid-softinput/docs/next/api/hooks/use-soft-input-height-changed"}},p={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],l={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSoftInputShown")," is a shortcut for using ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputShown")," method inside ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"({ softInputHeight }: { softInputHeight: number }) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"function called with current soft input height when soft input is displayed")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSoftInputShown } from "react-native-avoid-softinput";\n\nuseSoftInputShown(({ softInputHeight }) => {\n  // Do sth\n});\n')))}c.isMDXComponent=!0}}]);