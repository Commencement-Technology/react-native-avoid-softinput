"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9978],{704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(4848),i=n(8453);const s={id:"usage-module",title:"Usage - module",sidebar_label:"Usage - module",keywords:["react-native-avoid-softinput","module","usage"]},a=void 0,r={id:"guides/usage-module",title:"Usage - module",description:"The preferrable usage of the module is to enable it where it's actually needed.",source:"@site/versioned_docs/version-5.0.x/guides/USAGE_MODULE.mdx",sourceDirName:"guides",slug:"/guides/usage-module",permalink:"/react-native-avoid-softinput/docs/5.0.x/guides/usage-module",draft:!1,unlisted:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-5.0.x/guides/USAGE_MODULE.mdx",tags:[],version:"5.0.x",frontMatter:{id:"usage-module",title:"Usage - module",sidebar_label:"Usage - module",keywords:["react-native-avoid-softinput","module","usage"]},sidebar:"docsSidebar",previous:{title:"Migration from 2.x.x",permalink:"/react-native-avoid-softinput/docs/5.0.x/guides/migration_from_2_x_x"},next:{title:"Usage - view",permalink:"/react-native-avoid-softinput/docs/5.0.x/guides/usage-view"}},u={},d=[];function c(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The preferrable usage of the module is to enable it where it's actually needed."}),"\n",(0,o.jsx)(t.p,{children:"Depending on the navigation setup you have, check the navigation's library documentation for correct way to run some actions when the screen gains/loses focus."}),"\n",(0,o.jsxs)(t.p,{children:["The following example assumes ",(0,o.jsx)(t.code,{children:"react-navigation"})," is used as a navigation:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'import * as React from "react";\nimport { Button, ScrollView, TextInput, View } from "react-native";\nimport { AvoidSoftInput } from "react-native-avoid-softinput";\nimport { useFocusEffect } from "@react-navigation/native";\n\nexport const FormExample: React.FC = () => {\n// highlight-start\n  const onFocusEffect = React.useCallback(() => {\n    // This should be run when screen gains focus - enable the module where it\'s needed\n    AvoidSoftInput.setShouldMimicIOSBehavior(true);\n    AvoidSoftInput.setEnabled(true);\n    return () => {\n      // This should be run when screen loses focus - disable the module where it\'s not needed, to make a cleanup\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect); // register callback to focus events\n// highlight-end\n\n  return <ScrollView>\n    <View>\n      <TextInput placeholder="Single line input" />\n      <TextInput placeholder="Multiline input" />\n      <TextInput placeholder="Large multiline input" />\n    </View>\n    <View>\n      <Button\n        onPress={NOOP}\n        title="Submit"\n      />\n    </View>\n  </ScrollView>;\n};\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);