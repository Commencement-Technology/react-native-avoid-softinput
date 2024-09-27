"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4667],{5678:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(4848),s=o(8453);const i={id:"recipes-bottom-sheet",title:"Bottom sheet recipe",sidebar_label:"Bottom sheet",keywords:["react-native-avoid-softinput","bottom sheet","recipe"]},r=void 0,a={id:"recipes/recipes-bottom-sheet",title:"Bottom sheet recipe",description:"Depending on bottom sheet implementation in your project, you should use either AvoidSoftInput module or AvoidSoftInputView component.",source:"@site/versioned_docs/version-4.0.x/recipes/BOTTOM_SHEET.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-bottom-sheet",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-bottom-sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-4.0.x/recipes/BOTTOM_SHEET.mdx",tags:[],version:"4.0.x",frontMatter:{id:"recipes-bottom-sheet",title:"Bottom sheet recipe",sidebar_label:"Bottom sheet",keywords:["react-native-avoid-softinput","bottom sheet","recipe"]},sidebar:"docsSidebar",previous:{title:"Modal",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-modal"},next:{title:"Sticky footer",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-sticky-footer"}},c={},l=[];function m(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Depending on bottom sheet implementation in your project, you should use either ",(0,n.jsx)(t.code,{children:"AvoidSoftInput"})," module or ",(0,n.jsx)(t.code,{children:"AvoidSoftInputView"})," component."]}),"\n",(0,n.jsxs)(t.p,{children:["If your bottom sheet implementation uses React Native ",(0,n.jsx)(t.code,{children:"Modal"})," component, you should use ",(0,n.jsx)(t.code,{children:"AvoidSoftInputView"})," component (",(0,n.jsx)(t.a,{href:"./recipes-modal",children:"check Modal recipe"}),"). Otherwise use ",(0,n.jsx)(t.code,{children:"AvoidSoftInput"})," module like in the example below."]}),"\n",(0,n.jsxs)(t.p,{children:["This example assumes the bottom sheet is implemented with ",(0,n.jsx)(t.a,{href:"https://github.com/gorhom/react-native-bottom-sheet",children:"React Native Bottom Sheet"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/screens/BottomSheetExample.tsx"',children:"import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';\nimport { useFocusEffect } from '@react-navigation/native';\nimport * as React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport { AvoidSoftInput } from 'react-native-avoid-softinput';\nimport { SafeAreaView } from 'react-native-safe-area-context';\n\nimport Button from '../components/Button';\nimport SingleInput from '../components/SingleInput';\nimport { styles as commonStyles } from '../consts/styles';\n\nconst Backdrop: React.FC = () => <View style={styles.backdrop} />;\n\nexport const BottomSheetExample: React.FC = () => {\n  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);\n\n  function dismissBottomSheet() {\n    bottomSheetModalRef.current?.dismiss();\n  }\n\n  function presentBottomSheet() {\n    bottomSheetModalRef.current?.present();\n  }\n\n  const onFocusEffect = React.useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true);\n    AvoidSoftInput.setEnabled(true);\n    AvoidSoftInput.setAvoidOffset(70);\n\n    return () => {\n      AvoidSoftInput.setAvoidOffset(0);\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>\n    <Button\n      onPress={presentBottomSheet}\n      title=\"Open bottom sheet\"\n    />\n    <BottomSheetModal\n      ref={bottomSheetModalRef}\n      backdropComponent={Backdrop}\n      enableDismissOnClose\n      enableDynamicSizing\n      enablePanDownToClose\n      index={0}\n    >\n      <BottomSheetView style={styles.bottomSheet}>\n        <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={styles.bottomSheet}>\n          <Text style={styles.header}>Header</Text>\n          <SingleInput style={styles.input} />\n          <View style={styles.submitButtonContainer}>\n            <Button\n              onPress={dismissBottomSheet}\n              title=\"Submit\"\n            />\n          </View>\n        </SafeAreaView>\n      </BottomSheetView>\n    </BottomSheetModal>\n  </SafeAreaView>;\n};\n\nconst styles = StyleSheet.create({\n  backdrop: {\n    ...StyleSheet.absoluteFillObject,\n    backgroundColor: 'rgba(0,0,0,0.5)',\n  },\n  bottomSheet: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    backgroundColor: 'white',\n  },\n  header: {\n    color: 'black',\n    fontSize: 28,\n    fontWeight: 'bold',\n    paddingBottom: 40,\n    paddingTop: 30,\n  },\n  input: {\n    marginHorizontal: 50,\n  },\n  submitButtonContainer: {\n    alignSelf: 'stretch',\n    marginBottom: 30,\n  },\n});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(6540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);