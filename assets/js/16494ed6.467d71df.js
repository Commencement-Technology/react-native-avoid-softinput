"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5474],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var o=n(3117),r=(n(7294),n(3905));const i={id:"recipes-bottom-sheet",title:"Bottom sheet recipe",sidebar_label:"Bottom sheet"},a=void 0,l={unversionedId:"recipes/recipes-bottom-sheet",id:"version-3.0.x/recipes/recipes-bottom-sheet",title:"Bottom sheet recipe",description:"Depending on bottom sheet implementation in your project, you should use either AvoidSoftInput module or AvoidSoftInputView component.",source:"@site/versioned_docs/version-3.0.x/recipes/BOTTOM_SHEET.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-bottom-sheet",permalink:"/react-native-avoid-softinput/docs/recipes/recipes-bottom-sheet",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-3.0.x/recipes/BOTTOM_SHEET.mdx",tags:[],version:"3.0.x",frontMatter:{id:"recipes-bottom-sheet",title:"Bottom sheet recipe",sidebar_label:"Bottom sheet"},sidebar:"docsSidebar",previous:{title:"Modal",permalink:"/react-native-avoid-softinput/docs/recipes/recipes-modal"},next:{title:"Sticky footer",permalink:"/react-native-avoid-softinput/docs/recipes/recipes-sticky-footer"}},s={},c=[{value:"Example (bottom sheet without modal implementation)",id:"example-bottom-sheet-without-modal-implementation",level:3},{value:"Example (bottom sheet with modal implementation)",id:"example-bottom-sheet-with-modal-implementation",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Depending on bottom sheet implementation in your project, you should use either ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput")," module or ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInputView")," component."),(0,r.kt)("p",null,"If your bottom sheet implementation uses React Native ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal")," component, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInputView")," component (",(0,r.kt)("a",{parentName:"p",href:"recipes-modal"},"check Modal recipe"),"). Otherwise use ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput")," module (",(0,r.kt)("a",{parentName:"p",href:"recipes-form"},"check Form recipe"),")."),(0,r.kt)("h3",{id:"example-bottom-sheet-without-modal-implementation"},"Example (bottom sheet without modal implementation)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export const BottomSheetExample: React.FC = () => {\n  /**\n   * If you use react-navigation and want to enable module only in specific screen,\n   * you can call it in react-navigation `useFocusEffect` callback\n   *\n   * If you want to have module always enabled,\n   * just call it inside `useEffect` in your root component\n   *\n   * ```\n   * useEffect(() => {\n   *   AvoidSoftInput.setShouldMimicIOSBehavior(true); // <---- Tell Android that library will handle keyboard insets manually to match iOS behavior\n   *   AvoidSoftInput.setEnabled(true); // <---- Enable module\n   * }, [])\n   * ```\n   */\n  const onFocusEffect = useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true); // <---- Tell Android that library will handle keyboard insets manually to match iOS behavior\n    AvoidSoftInput.setEnabled(true); // <---- Enable module\n    AvoidSoftInput.setAvoidOffset(50); // <---- if you have CTA button at the bottom of the screen, set additional offset to make button also visible\n\n    return () => {\n      AvoidSoftInput.setAvoidOffset(0);\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  // Sample bottom sheet\n  return (\n    <SafeAreaView>\n      // ... some JSX\n      <BottomSheetComponent>\n        <SafeAreaView>\n          <Text>Header</Text>\n          <TextInput />\n          <View>\n            <Button />\n          </View>\n        </SafeAreaView>\n      </BottomSheetComponent>\n    </SafeAreaView>\n  );\n};\n")),(0,r.kt)("h3",{id:"example-bottom-sheet-with-modal-implementation"},"Example (bottom sheet with modal implementation)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const ModalBottomSheetExample: React.FC = () => {\n  // Sample modal bottom sheet\n  return (\n    // ... some JSX\n    <ModalBottomSheetComponent>\n      <SafeAreaView>\n        {/** if you have CTA button at the bottom of the screen, set additional offset to make button also visible */}\n        <AvoidSoftInputView avoidOffset={50}>\n          <Text>Header</Text>\n          <TextInput />\n          <View>\n            <Button />\n          </View>\n        </AvoidSoftInputView>\n      </SafeAreaView>\n    </ModalBottomSheetComponent>\n    // ... some JSX\n  );\n};\n")))}u.isMDXComponent=!0}}]);