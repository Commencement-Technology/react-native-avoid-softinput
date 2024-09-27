"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8179],{5665:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(4848),o=t(8453);const r={id:"migration_from_2_x_x",title:"Migration from 2.x.x",sidebar_label:"Migration from 2.x.x",keywords:["react-native-avoid-softinput","migration"]},s=void 0,a={id:"guides/migration_from_2_x_x",title:"Migration from 2.x.x",description:"WindowInsetsCompat API (BREAKING CHANGE)",source:"@site/docs/guides/MIGRATION_FROM_2_X_X.mdx",sourceDirName:"guides",slug:"/guides/migration_from_2_x_x",permalink:"/react-native-avoid-softinput/docs/next/guides/migration_from_2_x_x",draft:!1,unlisted:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/guides/MIGRATION_FROM_2_X_X.mdx",tags:[],version:"current",frontMatter:{id:"migration_from_2_x_x",title:"Migration from 2.x.x",sidebar_label:"Migration from 2.x.x",keywords:["react-native-avoid-softinput","migration"]},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/react-native-avoid-softinput/docs/next/guides"},next:{title:"Usage - module",permalink:"/react-native-avoid-softinput/docs/next/guides/usage-module"}},d={},l=[{value:"WindowInsetsCompat API (BREAKING CHANGE)",id:"windowinsetscompat-api-breaking-change",level:2},{value:"Example",id:"example",level:4},{value:"Support for Fabric &amp; TurboModules",id:"support-for-fabric--turbomodules",level:2},{value:"Bumping minimal supported React Native and iOS versions (BREAKING CHANGE)",id:"bumping-minimal-supported-react-native-and-ios-versions-breaking-change",level:2},{value:"Version 4.x.x",id:"version-4xx",level:3},{value:"Version 3.x.x",id:"version-3xx",level:3}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"windowinsetscompat-api-breaking-change",children:"WindowInsetsCompat API (BREAKING CHANGE)"}),"\n",(0,n.jsxs)(i.p,{children:["From version 3.x.x Android implementation starts using ",(0,n.jsx)(i.a,{href:"https://developer.android.com/reference/androidx/core/view/WindowInsetsCompat",children:"WindowInsetsCompat"})," API. This made library's Android implementation more predictible and less hacky."]}),"\n",(0,n.jsxs)(i.p,{children:["As a consequence, from version 3.x.x onwards library to handle padding/translation on Android needs to call new method ",(0,n.jsx)(i.code,{children:"setShouldMimicIOSBehavior"})," instead of ",(0,n.jsx)(i.code,{children:"setAdjustNothing"})]}),"\n",(0,n.jsxs)(i.p,{children:["If you upgrade to version 3.x.x or newer (and you don't use ",(0,n.jsx)(i.code,{children:"setAdjustNothing"})," or ",(0,n.jsx)(i.code,{children:"setDefaultAppSoftInputMode"})," intentionally to handle sth else then library's correct usage on Android), just replace all ",(0,n.jsx)(i.code,{children:"setAdjustNothing"})," (and ",(0,n.jsx)(i.code,{children:"setDefaultAppSoftInputMode"}),") calls with ",(0,n.jsx)(i.code,{children:"setShouldMimicIOSBehavior(<boolean-value>)"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",children:"  /**\n   * If module in your app is always enabled,\n   * just change `setAdjustNothing` with `setShouldMimicIOSBehavior(true)`\n   */\n  useEffect(() => {\n-    AvoidSoftInput.setAdjustNothing(); // <---- Set windowSoftInputMode on Android to match iOS behavior\n+    AvoidSoftInput.setShouldMimicIOSBehavior(true); // <---- Tell Android that library will handle keyboard insets manually to match iOS behavior\n    AvoidSoftInput.setEnabled(true); // <---- Enable module\n  }, []);\n\n  /**\n   * If you used module only in specific screen with react-navigation,\n   * change `setAdjustNothing` with `setShouldMimicIOSBehavior(true)`\n   * and replace `setDefaultAppSoftInputMode` with `setShouldMimicIOSBehavior(false)`\n   */\n  const onFocusEffect = useCallback(() => {\n-    AvoidSoftInput.setAdjustNothing(); // <---- Set windowSoftInputMode on Android to match iOS behavior\n+    AvoidSoftInput.setShouldMimicIOSBehavior(true); // <---- Tell Android that library will handle keyboard insets manually to match iOS behavior\n    AvoidSoftInput.setEnabled(true); // <---- Enable module\n    return () => {\n      AvoidSoftInput.setEnabled(false);\n-      AvoidSoftInput.setDefaultAppSoftInputMode();\n+      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n"})}),"\n",(0,n.jsx)(i.h2,{id:"support-for-fabric--turbomodules",children:"Support for Fabric & TurboModules"}),"\n",(0,n.jsxs)(i.p,{children:["From version 3.x.x onwards library supports RN's new architecture in projects with RN version >= 0.70. Autolinking of Fabric & TurboModule library version is handled automatically with projects using ",(0,n.jsx)(i.code,{children:"@react-native-community/cli"})," version >= 9.0.0 (",(0,n.jsx)(i.a,{href:"https://github.com/react-native-community/cli/commit/86df104250608977130378b9b59d8a9e12d0212a",children:"support was implemented with this commit"}),")"]}),"\n",(0,n.jsx)(i.h2,{id:"bumping-minimal-supported-react-native-and-ios-versions-breaking-change",children:"Bumping minimal supported React Native and iOS versions (BREAKING CHANGE)"}),"\n",(0,n.jsx)(i.h3,{id:"version-4xx",children:"Version 4.x.x"}),"\n",(0,n.jsxs)(i.p,{children:["This library follows the React Native releases support policy.\nIt is supporting ",(0,n.jsx)(i.strong,{children:"the latest version"}),", and ",(0,n.jsx)(i.strong,{children:"the two previous minor series"}),"."]}),"\n",(0,n.jsx)(i.p,{children:'You may find it working correctly with some older React Native versions, but it\'ll be a "Use at your own risk" case.'}),"\n",(0,n.jsx)(i.h3,{id:"version-3xx",children:"Version 3.x.x"}),"\n",(0,n.jsx)(i.p,{children:"As a result of introducing support for Fabric & TurboModules library bumped its minimal supported RN version (on old architecture) to 0.65 and minimal supported iOS version to 11.0."}),"\n",(0,n.jsx)(i.p,{children:"If you use library on older project (RN version <= 0.64), you have to upgrade RN to version >= 0.65."})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(6540);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);