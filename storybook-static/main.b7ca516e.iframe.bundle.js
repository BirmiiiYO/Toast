(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.tsx)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.tsx)$":function(module,exports,__webpack_require__){var map={"./stories/Toast.stories.tsx":"./src/stories/Toast.stories.tsx","./stories/testToast.stories.tsx":"./src/stories/testToast.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.tsx)$"},"./src/assets/svg/iconClose.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/iconClose.2ec3d420.svg"},"./src/assets/svg/iconError.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/iconError.4a713b9a.svg"},"./src/assets/svg/iconInfo.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/iconInfo.b02e4bfa.svg"},"./src/assets/svg/iconSuccess.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/iconSuccess.f5967b27.svg"},"./src/assets/svg/iconWarning.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/iconWarning.ca45d609.svg"},"./src/components/Toast/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Toast_Toast}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js");var _templateObject,_templateObject2,iconClose=__webpack_require__("./src/assets/svg/iconClose.svg"),iconClose_default=__webpack_require__.n(iconClose),toastConditions=__webpack_require__("./src/constants/toastConditions.ts"),iconError=__webpack_require__("./src/assets/svg/iconError.svg"),iconError_default=__webpack_require__.n(iconError),iconInfo=__webpack_require__("./src/assets/svg/iconInfo.svg"),iconInfo_default=__webpack_require__.n(iconInfo),iconSuccess=__webpack_require__("./src/assets/svg/iconSuccess.svg"),iconSuccess_default=__webpack_require__.n(iconSuccess),iconWarning=__webpack_require__("./src/assets/svg/iconWarning.svg"),iconWarning_default=__webpack_require__.n(iconWarning),getImage_getImage=function getImage(mode){switch(mode){case toastConditions.c.ERROR:return iconError_default.a;case toastConditions.c.SUCCESS:return iconSuccess_default.a;case toastConditions.c.INFO:return iconInfo_default.a;case toastConditions.c.WARNING:return iconWarning_default.a;default:return iconInfo_default.a}},styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var styles_templateObject,styles_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,scale=Object(styled_components_browser_esm.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n 0% { transform: scale(0) }\n 100% {transform: scale(1) }\n"]))),move=Object(styled_components_browser_esm.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n 0% { right: -120%; }\n 100% { right: 0%; }\n"]))),theme_colors={white:"#ffffff",info:"#9a40d3",success:"#37e29a",warning:"#f4e048",error:"#e25837"};function styles_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var ToastInfo=styled_components_browser_esm.b.div(styles_templateObject||(styles_templateObject=styles_taggedTemplateLiteralLoose([""]))),ToastBlock=styled_components_browser_esm.b.div(styles_templateObject2||(styles_templateObject2=styles_taggedTemplateLiteralLoose(["\nalign-items: center;\nanimation-duration: 0.5s;\nanimation-name: ",";\nbackground-color: ",";\nborder-radius: 5px;\nbox-sizing: border-box;\ncolor: white;\ndisplay:flex;\njustify-content: start;\nmax-width: 300px;\nmin-height: 100px;\nposition:relative;\n"])),(function(_ref){return function setAnimation(animation){return animation===toastConditions.a.SCALE?scale:animation===toastConditions.a.MOVE?move:void 0}(_ref.animationType)}),(function(_ref2){return function setBgColor(mode){var backgroundColor=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(backgroundColor)return backgroundColor;switch(mode){case toastConditions.c.SUCCESS:return theme_colors.success;case toastConditions.c.WARNING:return theme_colors.warning;case toastConditions.c.ERROR:return theme_colors.error;default:return theme_colors.info}}(_ref2.mode,_ref2.backgroundColor)})),ToastIcon=styled_components_browser_esm.b.img(_templateObject3||(_templateObject3=styles_taggedTemplateLiteralLoose(["\n  height: 30px;\n  padding: 0 20px;\n  width: 30px;\n"]))),ToastClose=styled_components_browser_esm.b.img(_templateObject4||(_templateObject4=styles_taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 20px;\n"]))),ToastTitle=styled_components_browser_esm.b.h1(_templateObject5||(_templateObject5=styles_taggedTemplateLiteralLoose(["\n  font-size: 24px;\n  margin: 0px;\n  overflow: hidden;\n  width: 200px;\n"]))),ToastDescription=styled_components_browser_esm.b.span(_templateObject6||(_templateObject6=styles_taggedTemplateLiteralLoose(["\n  font-size: 18px;\n  max-width: 200px;\n"]))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Toast_Toast=function Toast(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Toast title":_ref$title,_ref$mode=_ref.mode,mode=void 0===_ref$mode?"info":_ref$mode,_ref$description=_ref.description,description=void 0===_ref$description?"Toast description":_ref$description,backgroundColor=_ref.backgroundColor,_ref$animationType=_ref.animationType,animationType=void 0===_ref$animationType?toastConditions.a.SCALE:_ref$animationType,onClose=_ref.onClose;return Object(jsx_runtime.jsxs)(ToastBlock,{mode:mode,backgroundColor:backgroundColor,animationType:animationType,children:[Object(jsx_runtime.jsx)(ToastIcon,{src:getImage_getImage(mode)}),Object(jsx_runtime.jsxs)(ToastInfo,{children:[Object(jsx_runtime.jsx)(ToastTitle,{children:title}),Object(jsx_runtime.jsx)(ToastDescription,{children:description})]}),Object(jsx_runtime.jsx)(ToastClose,{onClick:function onToastClose(){onClose()},src:iconClose_default.a,alt:"close notification"})]})};Toast_Toast.displayName="Toast";try{Toast_Toast.displayName="Toast",Toast_Toast.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:{value:"Toast title"},description:"",name:"title",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"error"'}]}},description:{defaultValue:{value:"Toast description"},description:"",name:"description",required:!1,type:{name:"string"}},animationType:{defaultValue:{value:"ToastAnimation.SCALE"},description:"",name:"animationType",required:!1,type:{name:"enum",value:[{value:'"scale"'},{value:'"move"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#Toast"]={docgenInfo:Toast_Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/index.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/toastConditions.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var ToastAnimation,ToastMargin,ToastPosition,ToastMode;__webpack_require__.d(__webpack_exports__,"a",(function(){return ToastAnimation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ToastMargin})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ToastMode})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ToastPosition})),function(ToastAnimation){ToastAnimation.SCALE="scale",ToastAnimation.MOVE="move"}(ToastAnimation||(ToastAnimation={})),function(ToastMargin){ToastMargin.NONE="none",ToastMargin.SMALL="small",ToastMargin.MEDIUM="medium",ToastMargin.LARGE="large"}(ToastMargin||(ToastMargin={})),function(ToastPosition){ToastPosition.TOP_RIGHT="topRight",ToastPosition.TOP_LEFT="topLeft",ToastPosition.BOTTOM_RIGHT="bottomRight",ToastPosition.BOTTOM_LEFT="bottomLeft"}(ToastPosition||(ToastPosition={})),function(ToastMode){ToastMode.INFO="info",ToastMode.SUCCESS="success",ToastMode.WARNING="warning",ToastMode.ERROR="error"}(ToastMode||(ToastMode={}))},"./src/stories/Toast.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Info",(function(){return Info})),__webpack_require__.d(__webpack_exports__,"Success",(function(){return Success})),__webpack_require__.d(__webpack_exports__,"Warning",(function(){return Warning})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error}));__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _components_Toast__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Toast/index.tsx"),_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/toastConditions.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Toast",component:_components_Toast__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{mode:{options:Object.values(_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.c),control:{type:"radio"}},backgroundColor:{control:"color"},animationType:{options:Object.values(_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.a),control:{type:"radio"}}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Toast__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Info=Template.bind({});Info.args={title:"Info",mode:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.c.INFO,description:"Info Toast",animationType:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.a.MOVE};var Success=Template.bind({});Success.args={title:"Success",mode:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.c.SUCCESS,description:"Success Toast",animationType:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.a.SCALE};var Warning=Template.bind({});Warning.args={title:"Warning",mode:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.c.WARNING,description:"Warning Toast",animationType:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.a.MOVE};var Error=Template.bind({});Error.args={title:"Error",description:"Error Toast",mode:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.c.ERROR,animationType:_constants_toastConditions__WEBPACK_IMPORTED_MODULE_4__.a.SCALE},Info.parameters=Object.assign({storySource:{source:"(args) => <Toast {...args} />"}},Info.parameters),Success.parameters=Object.assign({storySource:{source:"(args) => <Toast {...args} />"}},Success.parameters),Warning.parameters=Object.assign({storySource:{source:"(args) => <Toast {...args} />"}},Warning.parameters),Error.parameters=Object.assign({storySource:{source:"(args) => <Toast {...args} />"}},Error.parameters)},"./src/stories/testToast.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),react_dom_default=__webpack_require__.n(react_dom),components_Toast=__webpack_require__("./src/components/Toast/index.tsx"),toastConditions=__webpack_require__("./src/constants/toastConditions.ts"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var ToastClass_Toast=_createClass((function Toast(){var _this=this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Toast),this.toasts=void 0,this.getAllToasts=function(){return _this.toasts},this.addToast=function(toast){3===_this.toasts.length?_this.toasts.splice(0,1,toast):_this.toasts.push(toast)},this.removeToast=function(toastId){_this.toasts=_this.toasts.filter((function(toast){return toast.id!==toastId}))},this.createToast=function(toastOptions){return Object.assign({id:Object(v4.a)()},toastOptions)},"object"==typeof Toast.instance?Toast.instance:(this.toasts=[],Toast.instance=this,this)}));ToastClass_Toast.instance=void 0;var _templateObject,_templateObject2,_templateObject3,_templateObject4,ToastClass=new ToastClass_Toast,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var styles_templateObject;var ToastBlock=styled_components_browser_esm.b.div(styles_templateObject||(styles_templateObject=function styles_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: ","px;\n  position: fixed;\n  ","\n"])),(function(_ref){return function setMargin(margin){switch(margin){case toastConditions.b.LARGE:return 24;case toastConditions.b.MEDIUM:return 16;case toastConditions.b.SMALL:return 8;default:return 0}}(_ref.margin)}),(function(_ref2){return function setPosition(position){switch(position){case toastConditions.d.TOP_LEFT:return Object(styled_components_browser_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n        left: 10px;\n        top: 10px;\n      "])));case toastConditions.d.TOP_RIGHT:return Object(styled_components_browser_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n        right: 10px;\n        top: 10px;\n      "])));case toastConditions.d.BOTTOM_LEFT:return Object(styled_components_browser_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n        bottom: 10px;\n        left: 10px;\n      "])));default:return Object(styled_components_browser_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n        bottom: 10px;\n        right: 10px;\n      "])))}}(_ref2.position)})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ToastContainer_slicedToArray(arr,i){return function ToastContainer_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ToastContainer_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function ToastContainer_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ToastContainer_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastContainer_arrayLikeToArray(o,minLen)}(arr,i)||function ToastContainer_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ToastContainer_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ToastContainer=Object(react.forwardRef)((function(_ref,ref){var _ref$autoClose=_ref.autoClose,autoClose=void 0!==_ref$autoClose&&_ref$autoClose,_ref$autoCloseTime=_ref.autoCloseTime,autoCloseTime=void 0===_ref$autoCloseTime?3e3:_ref$autoCloseTime,_ref$position=_ref.position,position=void 0===_ref$position?toastConditions.d.TOP_RIGHT:_ref$position,_ref$margin=_ref.margin,margin=void 0===_ref$margin?toastConditions.b.NONE:_ref$margin,toasts=ToastClass.toasts,removeToast=ToastClass.removeToast,getAllToasts=ToastClass.getAllToasts,createToast=ToastClass.createToast,addToast=ToastClass.addToast,_useToastPortal=function useToastPortal(){var _useState2=_slicedToArray(Object(react.useState)(!1),2),loaded=_useState2[0],setLoaded=_useState2[1],portalId=_slicedToArray(Object(react.useState)(""+Object(v4.a)()),1)[0];return Object(react.useEffect)((function(){var div=document.createElement("div");return div.setAttribute("id",portalId),document.getElementsByTagName("body")[0].prepend(div),setLoaded(!0),function(){document.getElementsByTagName("body")[0].removeChild(div)}}),[portalId]),{loaded:loaded,portalId:portalId}}(),loaded=_useToastPortal.loaded,portalId=_useToastPortal.portalId,_useState2=ToastContainer_slicedToArray(Object(react.useState)(""),2),removingId=_useState2[0],setRemovingId=_useState2[1],_useState4=ToastContainer_slicedToArray(Object(react.useState)(getAllToasts().length),2),toastsLength=_useState4[0],setToastsLength=_useState4[1];Object(react.useEffect)((function(){setToastsLength(toasts.length)}),[toasts.length]),Object(react.useEffect)((function(){if(autoClose&&toasts.length){var lastId=toasts[toasts.length-1].id;setTimeout((function(){return setRemovingId(lastId)}),autoCloseTime)}}),[toastsLength,autoClose,autoCloseTime,toasts]),Object(react.useEffect)((function(){removingId&&(removeToast(removingId),setToastsLength(getAllToasts().length))}),[removingId,setToastsLength,getAllToasts,removeToast]),Object(react.useImperativeHandle)(ref,(function(){return{addMessage:function addMessage(toast){var newToast=createToast(toast);addToast(newToast),setToastsLength(toasts.length)}}}));var handleClose=function handleClose(id){return function(){removeToast(id),setToastsLength(getAllToasts().length)}};return loaded?react_dom_default.a.createPortal(Object(jsx_runtime.jsx)(ToastBlock,{position:position,autoClose:autoClose,autoCloseTime:autoCloseTime,margin:margin,children:toasts.map((function(_ref2){var title=_ref2.title,id=_ref2.id,mode=_ref2.mode,description=_ref2.description,animationType=_ref2.animationType,backgroundColor=_ref2.backgroundColor;return Object(jsx_runtime.jsx)(components_Toast.a,{title:title,mode:mode,description:description,backgroundColor:backgroundColor,animationType:animationType,onClose:handleClose(id)},id)}))}),document.getElementById(portalId)):null}));try{ToastContainer.displayName="ToastContainer",ToastContainer.__docgenInfo={description:"",displayName:"ToastContainer",props:{autoClose:{defaultValue:{value:"false"},description:"",name:"autoClose",required:!1,type:{name:"boolean"}},autoCloseTime:{defaultValue:{value:"3000"},description:"",name:"autoCloseTime",required:!1,type:{name:"number"}},position:{defaultValue:{value:"ToastPosition.TOP_RIGHT"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},margin:{defaultValue:{value:"ToastMargin.NONE"},description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastContainer/index.tsx#ToastContainer"]={docgenInfo:ToastContainer.__docgenInfo,name:"ToastContainer",path:"src/components/ToastContainer/index.tsx#ToastContainer"})}catch(__react_docgen_typescript_loader_error){}var TestToast_styles_templateObject;var Button=styled_components_browser_esm.b.button(TestToast_styles_templateObject||(TestToast_styles_templateObject=function TestToast_styles_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  background-color: red;\n  margin: 8px;\n  padding: 8px;\n"]))),TestToast_TestToast=function TestToast(props){var _useToast=function useToast(){var toastRef=Object(react.useRef)(null);return{toastRef:toastRef,addToast:function addToast(options){toastRef.current&&toastRef.current.addMessage(Object.assign({},options))}}}(),toastRef=_useToast.toastRef,addToast=_useToast.addToast,position=props.position;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Button,{onClick:function addSuccess(){return addToast({title:"Success",mode:toastConditions.c.SUCCESS,description:"Success message",animationType:toastConditions.a.SCALE,position:position})},children:"Success Toast"}),Object(jsx_runtime.jsx)(Button,{onClick:function addInfo(){return addToast({title:"Info",mode:toastConditions.c.INFO,description:"Info message",animationType:toastConditions.a.MOVE,position:position})},children:"Info Toast"}),Object(jsx_runtime.jsx)(Button,{onClick:function addWarning(){return addToast({title:"Warning",mode:toastConditions.c.WARNING,description:"Warning message",animationType:toastConditions.a.SCALE,position:position})},children:"Warning Toast"}),Object(jsx_runtime.jsx)(Button,{onClick:function addError(){return addToast({title:"Error",mode:toastConditions.c.ERROR,description:"Error message",animationType:toastConditions.a.MOVE,position:position})},children:"Error Toast"}),Object(jsx_runtime.jsx)(ToastContainer,Object.assign({ref:toastRef},props))]})};try{TestToast_TestToast.displayName="TestToast",TestToast_TestToast.__docgenInfo={description:"",displayName:"TestToast",props:{autoClose:{defaultValue:null,description:"",name:"autoClose",required:!0,type:{name:"boolean"}},autoCloseTime:{defaultValue:null,description:"",name:"autoCloseTime",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TestToast/index.tsx#TestToast"]={docgenInfo:TestToast_TestToast.__docgenInfo,name:"TestToast",path:"src/components/TestToast/index.tsx#TestToast"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Test Toast",component:TestToast_TestToast,argTypes:{position:{control:"select",options:Object.values(toastConditions.d)},autoCloseTime:{options:[1e3,2e3,3e3,4e3,5e3],control:{type:"radio"}},margin:{control:"select",options:Object.values(toastConditions.b)}}};var testToast_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(TestToast_TestToast,Object.assign({},args))};testToast_stories_Template.displayName="Template";var Default=testToast_stories_Template.bind({});Default.args={position:toastConditions.d.BOTTOM_RIGHT,margin:toastConditions.b.LARGE},Default.parameters=Object.assign({storySource:{source:"(args) => <TestToast {...args} />"}},Default.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);