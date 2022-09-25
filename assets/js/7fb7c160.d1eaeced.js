"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4984],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8549:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));const i={id:"usage-module",title:"Usage - module",sidebar_label:"Usage - module"},a=void 0,u={unversionedId:"guides/usage-module",id:"version-2.0.x/guides/usage-module",title:"Usage - module",description:"iOS",source:"@site/versioned_docs/version-2.0.x/guides/USAGE_MODULE.mdx",sourceDirName:"guides",slug:"/guides/usage-module",permalink:"/react-native-avoid-softinput/docs/2.0.x/guides/usage-module",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-2.0.x/guides/USAGE_MODULE.mdx",tags:[],version:"2.0.x",frontMatter:{id:"usage-module",title:"Usage - module",sidebar_label:"Usage - module"},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/react-native-avoid-softinput/docs/2.0.x/guides"},next:{title:"Usage - view",permalink:"/react-native-avoid-softinput/docs/2.0.x/guides/usage-view"}},d={},s=[{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Enable module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport { AvoidSoftInput } from "react-native-avoid-softinput";\n\nReact.useEffect(() => {\n  AvoidSoftInput.setEnabled(true);\n}, []);\n')),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"Enable module:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Before using module on Android, check if system support (",(0,o.kt)("inlineCode",{parentName:"strong"},'android:windowSoftInputMode="adjustResize"')," in Android manifest for ",(0,o.kt)("inlineCode",{parentName:"strong"},"<activity>")," tag) is enough for your use case."))),(0,o.kt)("p",null,"If you cannot, or don't want to use Android system support, then enable module and call ",(0,o.kt)("inlineCode",{parentName:"p"},"setAdjustNothing")," method or set ",(0,o.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," attribute to ",(0,o.kt)("inlineCode",{parentName:"p"},"adjustNothing")," in manifest."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Do not enable module with ",(0,o.kt)("inlineCode",{parentName:"strong"},"adjustResize")," value set, as it will result in padding being applied to already resized android window"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport { AvoidSoftInput } from "react-native-avoid-softinput";\n\nReact.useEffect(() => {\n  AvoidSoftInput.setAdjustNothing();\n  AvoidSoftInput.setEnabled(true);\n}, []);\n')))}c.isMDXComponent=!0}}]);