"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,m=l["".concat(u,".").concat(f)]||l[f]||c[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={id:"set-adjust-nothing",title:"setAdjustNothing",sidebar_label:"setAdjustNothing",keywords:["react-native-avoid-softinput","setAdjustNothing","module"]},a=void 0,s={unversionedId:"api/module/set-adjust-nothing",id:"version-3.0.x/api/module/set-adjust-nothing",title:"setAdjustNothing",description:"Use setAdjustNothing, to set android:windowSoftInputMode attribute to adjustNothing value.",source:"@site/versioned_docs/version-3.0.x/api/module/SET_ADJUST_NOTHING.mdx",sourceDirName:"api/module",slug:"/api/module/set-adjust-nothing",permalink:"/react-native-avoid-softinput/docs/api/module/set-adjust-nothing",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-3.0.x/api/module/SET_ADJUST_NOTHING.mdx",tags:[],version:"3.0.x",frontMatter:{id:"set-adjust-nothing",title:"setAdjustNothing",sidebar_label:"setAdjustNothing",keywords:["react-native-avoid-softinput","setAdjustNothing","module"]},sidebar:"docsSidebar",previous:{title:"onSoftInputAppliedOffsetChange",permalink:"/react-native-avoid-softinput/docs/api/module/on-soft-input-applied-offset-change"},next:{title:"setAdjustPan",permalink:"/react-native-avoid-softinput/docs/api/module/set-adjust-pan"}},u={},d=[{value:"Example",id:"example",level:3}],p={toc:d};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"setAdjustNothing"),", to set ",(0,r.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," attribute to ",(0,r.kt)("inlineCode",{parentName:"p"},"adjustNothing")," value."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { AvoidSoftInput } from "react-native-avoid-softinput";\n\nAvoidSoftInput.setAdjustNothing();\n')))}l.isMDXComponent=!0}}]);