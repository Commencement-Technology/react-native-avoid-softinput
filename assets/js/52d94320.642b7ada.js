"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,h=f["".concat(p,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"use-soft-input-height-changed",title:"useSoftInputHeightChanged",sidebar_label:"useSoftInputHeightChanged"},p=void 0,s={unversionedId:"api/hooks/use-soft-input-height-changed",id:"api/hooks/use-soft-input-height-changed",title:"useSoftInputHeightChanged",description:"useSoftInputHeightChanged is a shortcut for using AvoidSoftInput.onSoftInputHeightChange method inside useEffect.",source:"@site/docs/api/hooks/USE_SOFT_INPUT_HEIGHT_CHANGED.mdx",sourceDirName:"api/hooks",slug:"/api/hooks/use-soft-input-height-changed",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-height-changed",editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/api/hooks/USE_SOFT_INPUT_HEIGHT_CHANGED.mdx",tags:[],version:"current",frontMatter:{id:"use-soft-input-height-changed",title:"useSoftInputHeightChanged",sidebar_label:"useSoftInputHeightChanged"},sidebar:"docsSidebar",previous:{title:"useSoftInputShown",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-shown"},next:{title:"useSoftInputAppliedOffsetChanged",permalink:"/react-native-avoid-softinput/docs/api/hooks/use-soft-input-applied-offset-changed"}},c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useSoftInputHeightChanged")," is a shortcut for using ",(0,a.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputHeightChange")," method inside ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"({ softInputHeight }: { softInputHeight: number }) => void"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"function called with current soft input height when soft input is displayed")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSoftInputHeightChanged } from "react-native-avoid-softinput";\n\nuseSoftInputHeightChanged(({ softInputHeight }) => {\n  // Do sth\n});\n')))}d.isMDXComponent=!0}}]);