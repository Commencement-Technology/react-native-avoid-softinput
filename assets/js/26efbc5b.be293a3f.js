"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"recipes-form",title:"Form recipe",sidebar_label:"Form",keywords:["react-native-avoid-softinput","form","recipe"]},a=void 0,s={unversionedId:"recipes/recipes-form",id:"recipes/recipes-form",title:"Form recipe",description:"To handle fullscreen form, check the example form component",source:"@site/docs/recipes/FORM.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-form",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-form",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/recipes/FORM.mdx",tags:[],version:"current",frontMatter:{id:"recipes-form",title:"Form recipe",sidebar_label:"Form",keywords:["react-native-avoid-softinput","form","recipe"]},sidebar:"docsSidebar",previous:{title:"Alternatives",permalink:"/react-native-avoid-softinput/docs/next/guides/alternatives"},next:{title:"Modal",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-modal"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To handle fullscreen form, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mateusz1913/react-native-avoid-softinput/blob/main/packages/app/src/screens/FormExample.tsx"},"the example form component")),(0,o.kt)("p",null,"This is the basic case, where all form elements are placed inside scrollable container.\nWhen the keyboard is visible, the only tasks are to push the input (if needed) above the keyboard and make the submit button visible, when scrolling to the bottom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="packages/app/src/screens/FormExample.tsx"',title:'"packages/app/src/screens/FormExample.tsx"'},"import { useFocusEffect } from '@react-navigation/native';\nimport * as React from 'react';\nimport { Image, ScrollView, StyleSheet, View } from 'react-native';\nimport { AvoidSoftInput, useSoftInputAppliedOffsetChanged } from 'react-native-avoid-softinput';\nimport { SafeAreaView } from 'react-native-safe-area-context';\n\nimport Button from '../components/Button';\nimport MultilineInput from '../components/MultilineInput';\nimport SingleInput from '../components/SingleInput';\nimport { styles as commonStyles } from '../consts/styles';\n\nconst icon = require('../../assets/AppIconTransparent.png');\n\n// eslint-disable-next-line @typescript-eslint/no-empty-function\nconst NOOP = () => {};\n\nexport const FormExample: React.FC = () => {\n  const onFocusEffect = React.useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true);\n    AvoidSoftInput.setEnabled(true);\n    return () => {\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  useSoftInputAppliedOffsetChanged(({ appliedOffset }) => {\n    console.log({ appliedOffset });\n  });\n\n  return <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={commonStyles.screenContainer}>\n    <ScrollView\n      bounces={false}\n      contentContainerStyle={commonStyles.scrollContainer}\n      contentInsetAdjustmentBehavior=\"always\"\n      overScrollMode=\"always\"\n      showsVerticalScrollIndicator={true}\n      style={commonStyles.stretch}>\n      <View style={styles.logoContainer}>\n        <Image\n          resizeMode=\"contain\"\n          source={icon}\n          style={styles.logo}\n        />\n      </View>\n      <View style={styles.formContainer}>\n        <SingleInput placeholder=\"Single line input\" />\n        <MultilineInput placeholder=\"Multiline input\" style={styles.secondInput} />\n        <MultilineInput placeholder=\"Large multiline input\" />\n      </View>\n      <View style={styles.submitButtonContainer}>\n        <Button\n          onPress={NOOP}\n          title=\"Submit\"\n        />\n      </View>\n    </ScrollView>\n  </SafeAreaView>;\n};\n\nconst styles = StyleSheet.create({\n  formContainer: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    justifyContent: 'center',\n    paddingHorizontal: 10,\n  },\n  logo: {\n    height: 200,\n    width: 200,\n  },\n  logoContainer: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    flex: 1,\n    justifyContent: 'center',\n    paddingVertical: 100,\n  },\n  secondInput: {\n    height: 200,\n  },\n  submitButtonContainer: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    justifyContent: 'center',\n    marginTop: 100,\n  },\n});\n")))}u.isMDXComponent=!0}}]);