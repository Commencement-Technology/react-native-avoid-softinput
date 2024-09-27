"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[313],{9614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(4848),i=t(8453);const s={id:"recipes-custom-config",title:"Custom config recipe",sidebar_label:"Custom config",keywords:["react-native-avoid-softinput","custom config","recipe"]},a=void 0,c={id:"recipes/recipes-custom-config",title:"Custom config recipe",description:"Applied offset animation can be configured both when using AvoidSoftInput module and AvoidSoftInputView component.",source:"@site/versioned_docs/version-4.0.x/recipes/CUSTOM_CONFIG.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-custom-config",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-custom-config",draft:!1,unlisted:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-4.0.x/recipes/CUSTOM_CONFIG.mdx",tags:[],version:"4.0.x",frontMatter:{id:"recipes-custom-config",title:"Custom config recipe",sidebar_label:"Custom config",keywords:["react-native-avoid-softinput","custom config","recipe"]},sidebar:"docsSidebar",previous:{title:"Animations",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-animations"},next:{title:"setEnabled",permalink:"/react-native-avoid-softinput/docs/4.0.x/api/module/set-enabled"}},r={},l=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Applied offset animation can be configured both when using ",(0,o.jsx)(n.code,{children:"AvoidSoftInput"})," module and ",(0,o.jsx)(n.code,{children:"AvoidSoftInputView"})," component."]}),"\n",(0,o.jsxs)(n.p,{children:["To check how ",(0,o.jsx)(n.code,{children:"AvoidSoftInput"})," API can be customized, go to ",(0,o.jsx)(n.a,{href:"https://github.com/mateusz1913/react-native-avoid-softinput/blob/main/packages/app/src/screens/CustomAnimationConfigModuleExample.tsx",children:"CustomAnimationConfigModuleExample"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/screens/CustomAnimationConfigModuleExample.tsx"',children:"import { useFocusEffect } from '@react-navigation/native';\nimport * as React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport { AvoidSoftInput, useSoftInputState } from 'react-native-avoid-softinput';\nimport { SafeAreaView } from 'react-native-safe-area-context';\n\nimport SingleInput from '../components/SingleInput';\n\nexport const CustomAnimationConfigModuleExample: React.FC = () => {\n  const onFocusEffect = React.useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true);\n    AvoidSoftInput.setEnabled(true);\n    AvoidSoftInput.setEasing('easeOut');\n    AvoidSoftInput.setHideAnimationDelay(1000);\n    AvoidSoftInput.setHideAnimationDuration(600);\n    AvoidSoftInput.setShowAnimationDelay(1000);\n    AvoidSoftInput.setShowAnimationDuration(1200);\n    return () => {\n      AvoidSoftInput.setEasing('linear');\n      AvoidSoftInput.setHideAnimationDelay();\n      AvoidSoftInput.setHideAnimationDuration();\n      AvoidSoftInput.setShowAnimationDelay();\n      AvoidSoftInput.setShowAnimationDuration();\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  const softInputState = useSoftInputState();\n\n  return <SafeAreaView edges={[ 'left', 'bottom', 'right' ]} style={styles.container}>\n    <View style={styles.contentContainer}>\n      <SingleInput placeholder=\"1\" />\n      <View style={styles.spacer}>\n        <Text style={styles.label}>isVisible: {JSON.stringify(softInputState.isSoftInputShown)}</Text>\n        <Text style={styles.label}>height: {softInputState.softInputHeight}</Text>\n      </View>\n    </View>\n  </SafeAreaView>;\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    alignSelf: 'stretch',\n    flex: 1,\n  },\n  contentContainer: {\n    alignSelf: 'stretch',\n    flexDirection: 'column-reverse',\n    flexGrow: 1,\n  },\n  label: {\n    color: 'blue',\n    fontSize: 18,\n    fontWeight: 'bold',\n  },\n  spacer: {\n    alignItems: 'center',\n    backgroundColor: 'pink',\n    flex: 1,\n    justifyContent: 'center',\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To check how ",(0,o.jsx)(n.code,{children:"AvoidSoftInputView"})," props can be used, go to ",(0,o.jsx)(n.a,{href:"https://github.com/mateusz1913/react-native-avoid-softinput/blob/main/packages/app/src/screens/CustomAnimationConfigViewExample.tsx",children:"CustomAnimationConfigViewExample"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/screens/CustomAnimationConfigViewExample.tsx"',children:"import { useFocusEffect } from '@react-navigation/native';\nimport * as React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';\nimport { SafeAreaView } from 'react-native-safe-area-context';\n\nimport SingleInput from '../components/SingleInput';\n\nexport const CustomAnimationConfigViewExample: React.FC = () => {\n  const onFocusEffect = React.useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true);\n    AvoidSoftInput.setEnabled(true);\n    return () => {\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  return <SafeAreaView edges={[ 'left', 'bottom', 'right' ]} style={styles.container}>\n    <AvoidSoftInputView\n      easing=\"easeOut\"\n      hideAnimationDelay={1000}\n      hideAnimationDuration={600}\n      showAnimationDelay={1000}\n      showAnimationDuration={1200}\n      style={styles.contentContainer}>\n      <SingleInput placeholder=\"1\" />\n      <View style={styles.spacer}>\n        <Text style={styles.label}>SPACER</Text>\n      </View>\n    </AvoidSoftInputView>\n  </SafeAreaView>;\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    alignSelf: 'stretch',\n    flex: 1,\n  },\n  contentContainer: {\n    alignSelf: 'stretch',\n    flexDirection: 'column-reverse',\n    flexGrow: 1,\n  },\n  label: {\n    color: 'blue',\n    fontSize: 18,\n    fontWeight: 'bold',\n  },\n  spacer: {\n    alignItems: 'center',\n    backgroundColor: 'pink',\n    flex: 1,\n    justifyContent: 'center',\n  },\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(6540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);