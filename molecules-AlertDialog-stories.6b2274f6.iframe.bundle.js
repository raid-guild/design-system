"use strict";(self.webpackChunk_raidguild_design_system=self.webpackChunk_raidguild_design_system||[]).push([[882],{"./src/stories/molecules/AlertDialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertDialog:()=>AlertDialog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),AlertDialog=function(){var _a=(0,___WEBPACK_IMPORTED_MODULE_1__.qY0)(),isOpen=_a.isOpen,onOpen=_a.onOpen,onClose=_a.onClose,buttons=[{label:"Cancel",onClick:onClose,isCancel:!0,isPrimary:!1},{label:"Submit",onClick:function(){console.log("submitted")},isCancel:!1,isPrimary:!0}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.xuv,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.zxk,{onClick:onOpen},"Test it out"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.aRR,{heading:"testing 123",body:"beep beep beep beep",buttons,isOpen,onClose}))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Molecules/Alert Dialog",component:___WEBPACK_IMPORTED_MODULE_1__.aRR};AlertDialog.parameters=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({},AlertDialog.parameters),{docs:(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({},null===(_a=AlertDialog.parameters)||void 0===_a?void 0:_a.docs),{source:(0,tslib__WEBPACK_IMPORTED_MODULE_2__.pi)({originalSource:"() => {\n  const {\n    isOpen,\n    onOpen,\n    onClose\n  } = useDisclosure();\n  const submit = () => {\n    console.log('submitted');\n  };\n  const buttons = [{\n    label: 'Cancel',\n    onClick: onClose,\n    isCancel: true,\n    isPrimary: false\n  }, {\n    label: 'Submit',\n    onClick: submit,\n    isCancel: false,\n    isPrimary: true\n  }];\n  return <Box>\n      <Button onClick={onOpen}>Test it out</Button>\n\n      <AlertDialogComponent heading='testing 123' body='beep beep beep beep' buttons={buttons} isOpen={isOpen} onClose={onClose} />\n    </Box>;\n}"},null===(_c=null===(_b=AlertDialog.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["AlertDialog"]}}]);