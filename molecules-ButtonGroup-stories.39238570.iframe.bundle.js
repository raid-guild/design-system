"use strict";(self.webpackChunk_raidguild_design_system=self.webpackChunk_raidguild_design_system||[]).push([[6859],{"./src/stories/molecules/ButtonGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Attached:()=>Attached,Spaced:()=>Spaced,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Molecules/ButtonGroup",component:___WEBPACK_IMPORTED_MODULE_1__.hE2,argTypes:{isAttached:{control:"boolean"},spacing:{control:"number"},size:{options:["xs","sm","md","lg"],control:{type:"radio"}}}};var Template=function(_a){var buttons=_a.buttons,args=__rest(_a,["buttons"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.hE2,__assign({buttons,onSelect:function(){return null}},args))},Attached=Template.bind({});Attached.args={buttons:["Tic","Tac","Toe"],isAttached:!0};var Spaced=Template.bind({});Spaced.args={buttons:["Pinapple","Pen"],isAttached:!1},Attached.parameters={...Attached.parameters,docs:{...Attached.parameters?.docs,source:{originalSource:"({\n  buttons,\n  ...args\n}: {\n  buttons: string[];\n}) => <ButtonGroup buttons={buttons} onSelect={() => null} {...args} />",...Attached.parameters?.docs?.source}}},Spaced.parameters={...Spaced.parameters,docs:{...Spaced.parameters?.docs,source:{originalSource:"({\n  buttons,\n  ...args\n}: {\n  buttons: string[];\n}) => <ButtonGroup buttons={buttons} onSelect={() => null} {...args} />",...Spaced.parameters?.docs?.source}}};const __namedExportsOrder=["Attached","Spaced"]}}]);