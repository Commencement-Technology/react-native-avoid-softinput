"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11],{912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(4848),s=t(8453);const i={id:"recipes-modal",title:"Modal recipe",sidebar_label:"Modal",keywords:["react-native-avoid-softinput","modal","recipe"]},a=void 0,r={id:"recipes/recipes-modal",title:"Modal recipe",description:"To handle forms inside React Native Modal components, check the example modal form.",source:"@site/versioned_docs/version-4.0.x/recipes/MODAL.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-modal",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-modal",draft:!1,unlisted:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-4.0.x/recipes/MODAL.mdx",tags:[],version:"4.0.x",frontMatter:{id:"recipes-modal",title:"Modal recipe",sidebar_label:"Modal",keywords:["react-native-avoid-softinput","modal","recipe"]},sidebar:"docsSidebar",previous:{title:"Form",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-form"},next:{title:"Bottom sheet",permalink:"/react-native-avoid-softinput/docs/4.0.x/recipes/recipes-bottom-sheet"}},l={},c=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["To handle forms inside React Native ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/modal",children:(0,o.jsx)(n.code,{children:"Modal"})})," components, check ",(0,o.jsx)(n.a,{href:"https://github.com/mateusz1913/react-native-avoid-softinput/blob/main/packages/app/src/screens/ModalExample.tsx",children:"the example modal form"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This is the case, where a simple form is placed inside a modal.\nWhen the keyboard is visible, the only tasks are to push the input (if needed) above the keyboard and make the submit button visible, when scrolling to the bottom."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/screens/ModalExample.tsx"',children:"import { useFocusEffect } from '@react-navigation/native';\nimport * as React from 'react';\nimport { Image, Modal, ScrollView, StyleSheet, View } from 'react-native';\nimport { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';\nimport { SafeAreaView } from 'react-native-safe-area-context';\n\nimport Button from '../components/Button';\nimport CloseButton from '../components/CloseButton';\nimport MultilineInput from '../components/MultilineInput';\nimport SingleInput from '../components/SingleInput';\nimport { styles as commonStyles } from '../consts/styles';\n\nconst icon = require('../../assets/AppIconTransparent.png');\n\nexport const ModalExample: React.FC = () => {\n  const [ modalVisible, setModalVisible ] = React.useState(false);\n\n  const onFocusEffect = React.useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true);\n    return () => {\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  function closeModal() {\n    setModalVisible(false);\n  }\n\n  function openModal() {\n    setModalVisible(true);\n  }\n\n  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>\n    <Button\n      onPress={openModal}\n      title=\"Open modal\"\n    />\n    <Modal\n      animationType=\"slide\"\n      onRequestClose={closeModal}\n      statusBarTranslucent={true}\n      style={styles.modal}\n      supportedOrientations={[ 'landscape', 'portrait' ]}\n      transparent={true}\n      visible={modalVisible}\n    >\n      <SafeAreaView edges={[ 'left', 'right', 'bottom' ]} style={styles.modalContent}>\n        <View style={styles.container}>\n          <View style={styles.closeContainer}>\n            <CloseButton onPress={closeModal} />\n          </View>\n          <AvoidSoftInputView style={commonStyles.stretch}>\n            <ScrollView\n              bounces={false}\n              contentContainerStyle={commonStyles.scrollContainer}\n              contentInsetAdjustmentBehavior=\"always\"\n              overScrollMode=\"always\"\n              showsVerticalScrollIndicator={true}\n              style={commonStyles.stretch}\n            >\n              <View style={styles.logoContainer}>\n                <Image\n                  resizeMode=\"contain\"\n                  source={icon}\n                  style={styles.logo}\n                />\n              </View>\n              <View style={styles.formContainer}>\n                <SingleInput placeholder=\"Single line\" />\n                <MultilineInput placeholder=\"Multiline\" />\n                <Button\n                  onPress={closeModal}\n                  title=\"Submit\"\n                />\n              </View>\n            </ScrollView>\n          </AvoidSoftInputView>\n        </View>\n      </SafeAreaView>\n    </Modal>\n  </SafeAreaView>;\n};\n\nconst styles = StyleSheet.create({\n  closeContainer: {\n    backgroundColor: 'transparent',\n    position: 'absolute',\n    left: 0,\n    top: 0,\n    zIndex: 999,\n  },\n  container: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    backgroundColor: 'white',\n    borderColor: 'black',\n    borderRadius: 10,\n    borderWidth: 1,\n    marginBottom: 80,\n    marginHorizontal: 10,\n    marginTop: 60,\n    overflow: 'hidden',\n  },\n  formContainer: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    justifyContent: 'center',\n    marginBottom: 80,\n    marginHorizontal: 10,\n  },\n  logo: {\n    height: 200,\n    width: 200,\n  },\n  logoContainer: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    flex: 1,\n    justifyContent: 'center',\n    paddingVertical: 100,\n  },\n  modal: {\n    alignSelf: 'stretch',\n  },\n  modalContent: {\n    alignSelf: 'stretch',\n    backgroundColor: '#00000033',\n    flex: 1,\n  },\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);