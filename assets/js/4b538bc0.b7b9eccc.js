"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8768],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,h=f["".concat(p,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));const a={id:"use-soft-input-height-changed",title:"useSoftInputHeightChanged",sidebar_label:"useSoftInputHeightChanged"},i=void 0,u={unversionedId:"api/hooks/use-soft-input-height-changed",id:"version-2.0.x/api/hooks/use-soft-input-height-changed",title:"useSoftInputHeightChanged",description:"useSoftInputHeightChanged is a shortcut for using AvoidSoftInput.onSoftInputHeightChange method inside useEffect.",source:"@site/versioned_docs/version-2.0.x/api/hooks/USE_SOFT_INPUT_HEIGHT_CHANGED.mdx",sourceDirName:"api/hooks",slug:"/api/hooks/use-soft-input-height-changed",permalink:"/react-native-avoid-softinput/docs/2.0.x/api/hooks/use-soft-input-height-changed",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-2.0.x/api/hooks/USE_SOFT_INPUT_HEIGHT_CHANGED.mdx",tags:[],version:"2.0.x",frontMatter:{id:"use-soft-input-height-changed",title:"useSoftInputHeightChanged",sidebar_label:"useSoftInputHeightChanged"},sidebar:"docsSidebar",previous:{title:"useSoftInputShown",permalink:"/react-native-avoid-softinput/docs/2.0.x/api/hooks/use-soft-input-shown"},next:{title:"useSoftInputAppliedOffsetChanged",permalink:"/react-native-avoid-softinput/docs/2.0.x/api/hooks/use-soft-input-applied-offset-changed"}},p={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSoftInputHeightChanged")," is a shortcut for using ",(0,o.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputHeightChange")," method inside ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"({ softInputHeight }: { softInputHeight: number }) => void"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"function called with current soft input height when soft input is displayed")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSoftInputHeightChanged } from "react-native-avoid-softinput";\n\nuseSoftInputHeightChanged(({ softInputHeight }) => {\n  // Do sth\n});\n')))}c.isMDXComponent=!0}}]);