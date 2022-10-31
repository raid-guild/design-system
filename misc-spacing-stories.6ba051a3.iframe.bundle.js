"use strict";(self.webpackChunk_raidguild_design_system=self.webpackChunk_raidguild_design_system||[]).push([[3541],{"./node_modules/@chakra-ui/react/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xjn:()=>index_esm_ChakraProvider});var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),vhPolyfill="\n  :root {\n    --chakra-vh: 100vh;\n  }\n\n  @supports (height: -webkit-fill-available) {\n    :root {\n      --chakra-vh: -webkit-fill-available;\n    }\n  }\n\n  @supports (height: -moz-fill-available) {\n    :root {\n      --chakra-vh: -moz-fill-available;\n    }\n  }\n\n  @supports (height: 100lvh) {\n    :root {\n      --chakra-vh: 100lvh;\n    }\n  }\n",CSSPolyfill=()=>react.createElement(emotion_react_browser_esm.Global,{styles:vhPolyfill}),CSSReset=()=>react.createElement(emotion_react_browser_esm.Global,{styles:`\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: 'kern';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n\n      ${vhPolyfill}\n    `}),index_esm=__webpack_require__("./node_modules/@chakra-ui/portal/dist/index.esm.js"),dist_index_esm=__webpack_require__("./node_modules/@chakra-ui/system/dist/index.esm.js"),color_mode_dist_index_esm=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/index.esm.js"),doc={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]})},noop=()=>{},defaultEnv="undefined"!=typeof window?{window,document}:{window:{document:doc,navigator:{userAgent:""},CustomEvent:function CustomEvent(){return this},addEventListener:noop,removeEventListener:noop,getComputedStyle:()=>({getPropertyValue:()=>""}),matchMedia:()=>({matches:!1,addListener:noop,removeListener:noop}),requestAnimationFrame:callback=>"undefined"==typeof setTimeout?(callback(),null):setTimeout(callback,0),cancelAnimationFrame(id){"undefined"!=typeof setTimeout&&clearTimeout(id)},setTimeout:()=>0,clearTimeout:noop,setInterval:()=>0,clearInterval:noop},document:doc},EnvironmentContext=(0,react.createContext)(defaultEnv);function EnvironmentProvider(props){const{children,environment:environmentProp}=props,[node,setNode]=(0,react.useState)(null),[mounted,setMounted]=(0,react.useState)(!1);(0,react.useEffect)((()=>setMounted(!0)),[]);const context=(0,react.useMemo)((()=>{if(environmentProp)return environmentProp;const doc2=null==node?void 0:node.ownerDocument,win2=null==node?void 0:node.ownerDocument.defaultView;return doc2?{document:doc2,window:win2}:defaultEnv}),[node,environmentProp]);return react.createElement(EnvironmentContext.Provider,{value:context},children,!environmentProp&&mounted&&react.createElement("span",{id:"__chakra_env",hidden:!0,ref:el=>{(0,react.startTransition)((()=>{el&&setNode(el)}))}}))}EnvironmentContext.displayName="EnvironmentContext",EnvironmentProvider.displayName="EnvironmentProvider";var ChakraProvider=props=>{const{children,colorModeManager,portalZIndex,resetCSS=!0,theme={},environment,cssVarsRoot}=props,_children=react.createElement(EnvironmentProvider,{environment},children);return react.createElement(dist_index_esm.f6,{theme,cssVarsRoot},react.createElement(color_mode_dist_index_esm.SG,{colorModeManager,options:theme.config},resetCSS?react.createElement(CSSReset,null):react.createElement(CSSPolyfill,null),react.createElement(dist_index_esm.ZL,null),portalZIndex?react.createElement(index_esm.hE,{zIndex:portalZIndex},_children):_children))},theme_dist_index_esm=__webpack_require__("./node_modules/@chakra-ui/theme/dist/index.esm.js"),toast_dist_index_esm=__webpack_require__("./node_modules/@chakra-ui/toast/dist/index.esm.js");function index_esm_ChakraProvider({children,theme=theme_dist_index_esm.rS,toastOptions,...restProps}){return react.createElement(ChakraProvider,{theme,...restProps},children,react.createElement(toast_dist_index_esm.VW,{...toastOptions}))}},"./src/stories/misc/spacing.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Spacing:()=>Spacing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"System/Spacing"};var spacingSizes=[{name:"px",space:"1px",pixels:1},{name:"0.5",space:"0.125rem",pixels:2},{name:"1",space:"0.25rem",pixels:4},{name:"1.5",space:"0.375rem",pixels:6},{name:"2",space:"0.5rem",pixels:8},{name:"2.5",space:"0.625rem",pixels:10},{name:"3",space:"0.75rem",pixels:12},{name:"3.5",space:"0.875rem",pixels:14},{name:"4",space:"1rem",pixels:16},{name:"5",space:"1.25rem",pixels:20},{name:"6",space:"1.5rem",pixels:24},{name:"7",space:"1.75rem",pixels:28},{name:"8",space:"2rem",pixels:32},{name:"9",space:"2.25rem",pixels:36},{name:"10",space:"2.5rem",pixels:40},{name:"12",space:"3rem",pixels:48},{name:"14",space:"3.5rem",pixels:56},{name:"16",space:"4rem",pixels:64},{name:"20",space:"5rem",pixels:80},{name:"24",space:"6rem",pixels:96},{name:"28",space:"7rem",pixels:112},{name:"32",space:"8rem",pixels:128},{name:"36",space:"9rem",pixels:144},{name:"40",space:"10rem",pixels:160},{name:"44",space:"11rem",pixels:176},{name:"48",space:"12rem",pixels:192},{name:"56",space:"14rem",pixels:224},{name:"60",space:"15rem",pixels:240},{name:"64",space:"16rem",pixels:256},{name:"72",space:"18rem",pixels:288},{name:"80",space:"20rem",pixels:320},{name:"96",space:"24rem",pixels:384}],HeaderFooterRow=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Tr,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Th,{width:7},"Name"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Th,{width:7},"Space"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Th,{width:7},"Pixels"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Th,null))},Spacing=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.xJi,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.iA_,{variant:"simple"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Rn9,null,"Spacing examples for the default theme"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.hrZ,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderFooterRow,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.p3B,null,spacingSizes.map((function(space){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Tr,{key:space.space},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Td,{width:7},space.name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Td,{width:7},space.space),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Td,{width:7},space.pixels+"px"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Td,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.xuv,{bg:"red.500",width:space.pixels+"px",height:"16px"})))}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.$RU,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderFooterRow,null))))};const __namedExportsOrder=["Spacing"]}}]);