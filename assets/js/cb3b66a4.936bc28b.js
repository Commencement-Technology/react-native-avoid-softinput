"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[264],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,m=d["".concat(u,".").concat(c)]||d[c]||f[c]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"use-soft-input-applied-offset-changed",title:"useSoftInputAppliedOffsetChanged",sidebar_label:"useSoftInputAppliedOffsetChanged"},u=void 0,s={unversionedId:"api/hooks/use-soft-input-applied-offset-changed",id:"api/hooks/use-soft-input-applied-offset-changed",title:"useSoftInputAppliedOffsetChanged",description:"useSoftInputAppliedOffsetChanged is a shortcut for using AvoidSoftInput.onSoftInputAppliedOffsetChange method inside useEffect.",source:"@site/docs/api/hooks/USE_SOFT_INPUT_APPLIED_OFFSET_CHANGED.mdx",sourceDirName:"api/hooks",slug:"/api/hooks/use-soft-input-applied-offset-changed",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-applied-offset-changed",editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/api/hooks/USE_SOFT_INPUT_APPLIED_OFFSET_CHANGED.mdx",tags:[],version:"current",frontMatter:{id:"use-soft-input-applied-offset-changed",title:"useSoftInputAppliedOffsetChanged",sidebar_label:"useSoftInputAppliedOffsetChanged"},sidebar:"docsSidebar",previous:{title:"useSoftInputHeightChanged",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-height-changed"},next:{title:"useSoftInputState",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-state"}},l={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],d={toc:f};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSoftInputAppliedOffsetChanged")," is a shortcut for using ",(0,o.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputAppliedOffsetChange")," method inside ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"({ appliedOffset }: { appliedOffset: number }) => void"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"function called during applying padding or translation with current applied value")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSoftInputAppliedOffsetChanged } from "react-native-avoid-softinput";\n\nuseSoftInputAppliedOffsetChanged(({ appliedOffset }) => {\n  // Do sth\n});\n')))}c.isMDXComponent=!0}}]);