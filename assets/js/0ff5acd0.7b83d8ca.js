"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,h=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"use-soft-input-height-changed",title:"useSoftInputHeightChanged",sidebar_label:"useSoftInputHeightChanged",keywords:["react-native-avoid-softinput","useSoftInputHeightChanged","react hooks"]},i=void 0,s={unversionedId:"api/hooks/use-soft-input-height-changed",id:"version-3.0.x/api/hooks/use-soft-input-height-changed",title:"useSoftInputHeightChanged",description:"useSoftInputHeightChanged is a shortcut for using AvoidSoftInput.onSoftInputHeightChange method inside useEffect.",source:"@site/versioned_docs/version-3.0.x/api/hooks/USE_SOFT_INPUT_HEIGHT_CHANGED.mdx",sourceDirName:"api/hooks",slug:"/api/hooks/use-soft-input-height-changed",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-height-changed",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-3.0.x/api/hooks/USE_SOFT_INPUT_HEIGHT_CHANGED.mdx",tags:[],version:"3.0.x",frontMatter:{id:"use-soft-input-height-changed",title:"useSoftInputHeightChanged",sidebar_label:"useSoftInputHeightChanged",keywords:["react-native-avoid-softinput","useSoftInputHeightChanged","react hooks"]},sidebar:"docsSidebar",previous:{title:"useSoftInputShown",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-shown"},next:{title:"useSoftInputAppliedOffsetChanged",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-applied-offset-changed"}},p={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useSoftInputHeightChanged")," is a shortcut for using ",(0,a.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputHeightChange")," method inside ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"({ softInputHeight }: { softInputHeight: number }) => void"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"function called with current soft input height when soft input is displayed")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSoftInputHeightChanged } from "react-native-avoid-softinput";\n\nuseSoftInputHeightChanged(({ softInputHeight }) => {\n  // Do sth\n});\n')))}c.isMDXComponent=!0}}]);