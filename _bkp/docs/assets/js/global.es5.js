(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\n// `Array.from` method implementation\n// https://tc39.github.io/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var C = typeof this == 'function' ? this : Array;\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = iteratorMethod.call(O);\n    next = iterator.next;\n    result = new C();\n    for (;!(step = next.call(iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = toLength(O.length);\n    result = new C(length);\n    for (;length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-from.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) { throw it; };\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = { length: -1 };\n\n    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });\n    else O[1] = 1;\n\n    method.call(O, argument0, argument1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-method-uses-to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f;\n\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]'\n    ? getWindowNames(it)\n    : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.5',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol-wrapped.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.github.io/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });\n\nvar SPECIES = wellKnownSymbol('species');\nvar nativeSlice = [].slice;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = toLength(O.length);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === Array || Constructor === undefined) {\n        return nativeSlice.call(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.github.io/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js/internals/object-to-string.js\");\n\n// `Object.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar flags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar TO_STRING = 'toString';\nvar RegExpPrototype = RegExp.prototype;\nvar nativeToString = RegExpPrototype[TO_STRING];\n\nvar NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });\n// FF44- RegExp#toString has a wrong name\nvar INCORRECT_NAME = nativeToString.name != TO_STRING;\n\n// `RegExp.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring\nif (NOT_GENERIC || INCORRECT_NAME) {\n  redefine(RegExp.prototype, TO_STRING, function toString() {\n    var R = anObject(this);\n    var p = String(R.source);\n    var rf = R.flags;\n    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);\n    return '/' + p + '/' + f;\n  }, { unsafe: true });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// `Symbol.prototype.description` getter\n// https://tc39.github.io/ecma262/#sec-symbol.prototype.description\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = global.Symbol;\n\nif (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||\n  // Safari 12 bug\n  NativeSymbol().description !== undefined\n)) {\n  var EmptyStringDescriptionStore = {};\n  // wrap Symbol constructor for correct work with undefined description\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var result = this instanceof SymbolWrapper\n      ? new NativeSymbol(description)\n      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'\n      : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;\n  symbolPrototype.constructor = SymbolWrapper;\n\n  var symbolToString = symbolPrototype.toString;\n  var native = String(NativeSymbol('test')) == 'Symbol(test)';\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  defineProperty(symbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = isObject(this) ? this.valueOf() : this;\n      var string = symbolToString.call(symbol);\n      if (has(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n\n  $({ global: true, forced: true }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  redefine($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol();\n    // MS Edge converts symbol values to JSON as {}\n    return $stringify([symbol]) != '[null]'\n      // WebKit converts symbol values to JSON as null\n      || $stringify({ a: symbol }) != '{}'\n      // V8 throws on boxed symbols\n      || $stringify(Object(symbol)) != '{}';\n  });\n\n  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var args = [it];\n      var index = 1;\n      var $replacer;\n      while (arguments.length > index) args.push(arguments[index++]);\n      $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return $stringify.apply(null, args);\n    }\n  });\n}\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/wtc-autoplay-video/dist/wtc-autoplay-video.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/wtc-autoplay-video/dist/wtc-autoplay-video.min.js ***!
  \************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0}),exports.default=void 0;var _wtcControllerElement=_interopRequireWildcard(__webpack_require__(/*! wtc-controller-element */ \"./node_modules/wtc-controller-element/dist/wtc-controller-element.js\")),_wtcControllerViewports=_interopRequireDefault(__webpack_require__(/*! wtc-controller-viewports */ \"./node_modules/wtc-controller-viewports/dist/wtc-controller-viewports.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,newObj}function _typeof(obj){return(_typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&\"function\"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,\"value\"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return!call||\"object\"!==_typeof(call)&&\"function\"!=typeof call?_assertThisInitialized(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return self}function _inherits(subClass,superClass){if(\"function\"!=typeof superClass&&null!==superClass)throw new TypeError(\"Super expression must either be null or a function\");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var defaults={vpOn:0,startAt:null,loopFrom:null,loopTo:null},AutoplayVideo=function(_Viewport){function AutoplayVideo(element,options){var _this;return _classCallCheck(this,AutoplayVideo),(_this=_possibleConstructorReturn(this,_getPrototypeOf(AutoplayVideo).call(this,element))).onLoopCheck=_this.onLoopCheck.bind(_assertThisInitialized(_this)),_this.init=_this.init.bind(_assertThisInitialized(_this)),_this.onEnded=_this.onEnded.bind(_assertThisInitialized(_this)),_this.onFrozen=_this.onFrozen.bind(_assertThisInitialized(_this)),_this.animationCallback=_this.viewportAnimationCallback.bind(_assertThisInitialized(_this)),options=Object.assign({},defaults,options),_this.options={vpOn:_this.element.hasAttribute(\"data-vp-on\")?parseInt(_this.element.getAttribute(\"data-vp-on\")):options.vpOn,startAt:_this.element.hasAttribute(\"data-autoplay-video--start-at\")?parseFloat(_this.element.getAttribute(\"data-autoplay-video--start-at\")):options.startAt,loopFrom:_this.element.hasAttribute(\"data-autoplay-video--loop-from\")?parseFloat(_this.element.getAttribute(\"data-autoplay-video--loop-from\")):options.loopFrom,loopTo:_this.element.hasAttribute(\"data-autoplay-video--loop-to\")?parseFloat(_this.element.getAttribute(\"data-autoplay-video--loop-to\")):options.loopTo},_this.video=_this.element.querySelector(\".autoplay-video__video\"),_this.fallback=_this.element.querySelector(\".autoplay-video__fallback\"),_this.video.muted=!0,_this.video.setAttribute(\"playsinline\",\"\"),_this.video.setAttribute(\"muted\",\"\"),isNaN(_this.startAt)||null==_this.startAt||(_this.video.currentTime=_this.startAt),navigator&&navigator.connection?navigator.connection.saveData?_this.onFrozen(_assertThisInitialized(_this)):2<=_this.video.readyState?_this.init():_this.video.addEventListener(\"canplay\",_this.init,!1):(_this.video.readyState,_this.init()),_this.loopTo&&(_this.video.loop=!1,_this.loopFrom?_this.loopPeriod=!0:_this.video.addEventListener(\"ended\",_this.onEnded,!0)),_this.video.addEventListener(\"error\",_this.onFrozen,!0),_this}return _inherits(AutoplayVideo,_wtcControllerViewports[\"default\"]),_createClass(AutoplayVideo,[{key:\"init\",value:function(){this.initiated||(this.initiated=!0,this.ratio=this.video.videoWidth/this.video.videoHeight,this.isOnScreen&&this.playVideo())}},{key:\"videoResize\",value:function(){var targetW=this.video.parentNode.offsetWidth,targetH=this.video.parentNode.offsetHeight,newW=0,newH=0;targetW/targetH>this.ratio?newH=(newW=targetW)*this.ratio:newW=(newH=targetH)*this.ratio,this.video.style.height=newH+\"px\",this.video.style.width=newW+\"px\"}},{key:\"onPlay\",value:function(){this.element.classList.add(\"is-playing\"),(this.hasStarted=!0)!==this.videoPlaying&&!0===this.loopPeriod&&(this.videoPlaying=!0,requestAnimationFrame(this.onLoopCheck))}},{key:\"onFrozen\",value:function(){this.element.classList.add(\"is-frozen\"),this.videoPlaying=!1}},{key:\"onPause\",value:function(){this.element.classList.add(\"is-paused\"),this.hasStarted=!1,this.videoPlaying=!1}},{key:\"onEnded\",value:function(){this.video.currentTime=this.loopTo,this.video.play()}},{key:\"onLoopCheck\",value:function(delta){!0===this.videoPlaying&&!0===this.loopPeriod&&requestAnimationFrame(this.onLoopCheck),this.video.currentTime>=this.loopFrom&&(this.video.currentTime=this.loopTo)}},{key:\"pauseVideo\",value:function(){this.video.pause(),this.onPause()}},{key:\"playVideo\",value:function(){if(2<=this.video.readyState)if(this.video.paused){var testPlay=this.video.play();try{\"undefined\"!=typeof Promise&&-1!==Promise.toString().indexOf(\"[native code]\")&&testPlay&&testPlay instanceof Promise?testPlay.then(this.onPlay.bind(this),this.onFrozen.bind(this)):this.video.paused?this.onFrozen():this.onPlay()}catch(error){this.onFrozen()}}else this.onPlay();else setTimeout(this.playVideo.bind(this),500)}},{key:\"viewportAnimationCallback\",value:function(topPercent){this.isOnScreen||!this.hasStarted||this.video.paused?topPercent>this.options.vpOn&&this.initiated&&!this.hasStarted&&this.video.paused&&this.playVideo():(this.pauseVideo(),isNaN(this.startAt)||null==this.startAt||(this.video.currentTime=this.startAt))}},{key:\"video\",set:function(value){value instanceof HTMLElement&&(this._video=value)},get:function(){return this._video||null}},{key:\"fallback\",set:function(value){value instanceof HTMLElement&&(this._fallback=value)},get:function(){return this._fallback||null}},{key:\"hasStarted\",set:function(value){this._hasStarted=!0===value},get:function(){return this._hasStarted||!1}},{key:\"initiated\",set:function(value){this._initiated=!0===value},get:function(){return this._initiated||!1}},{key:\"loopPeriod\",set:function(value){this._loopPeriod=!0===value},get:function(){return this._loopPeriod||!1}},{key:\"videoPlaying\",set:function(value){this._videoPlaying=!0===value},get:function(){return this._videoPlaying||!1}},{key:\"ratio\",set:function(value){isNaN(value)||(this._ratio=value)},get:function(){return this._ratio||null}},{key:\"startAt\",get:function(){return this.options.startAt||null}},{key:\"loopFrom\",get:function(){return this.options.loopFrom||null}},{key:\"loopTo\",get:function(){return this.options.loopTo||null}}]),AutoplayVideo}();_wtcControllerElement.ExecuteControllers.registerController(AutoplayVideo,\"AutoplayVideo\");var _default=AutoplayVideo;exports.default=_default;\n\n//# sourceURL=webpack:///./node_modules/wtc-autoplay-video/dist/wtc-autoplay-video.min.js?");

/***/ }),

/***/ "./node_modules/wtc-controller-element/dist/wtc-controller-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/wtc-controller-element/dist/wtc-controller-element.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * ExecuteControllers\n * Simple static class to instanciate and register all the controllers.\n *\n * @static\n * @author Marlon Marcello <marlon@wethecollective.com>\n * @version 1.1.0\n * @requirements\n * @created Nov 23, 2016\n */\n\n/**\n * Stores controllers.\n * @type {Object}\n */\nvar controllersList = new Map();\n\nvar ExecuteControllers = function () {\n  function ExecuteControllers() {\n    _classCallCheck(this, ExecuteControllers);\n  }\n\n  _createClass(ExecuteControllers, null, [{\n    key: 'instanciateAll',\n\n    /**\n     * Instanciate all the elements with registered controllers.\n     * @param {String|Object} query  - Can be a string, ex: '[data-controller]' or\n     *                                 an object, ex: {el: DOMNode, query: '[data-controller]'}\n     * @param {String} controllerAtt - Attribute with the name of the controller.\n     */\n    value: function instanciateAll() {\n      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-controller]';\n      var controllerAtt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data-controller';\n      var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      var els = null;\n\n      if (typeof query === 'string') {\n        els = document.querySelectorAll(query);\n      } else if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object') {\n        if (!query.hasOwnProperty('el')) {\n          throw 'Instanciate all is missing the DOMNode. Ex: instanciateAll({el: DOMNode, query: \"[data-controller]\"})';\n        }\n\n        if (!query.hasOwnProperty('query')) {\n          query.query = '[data-controller]';\n        }\n\n        els = query.el.querySelectorAll(query.query);\n      }\n\n      if (els.length > 0) {\n        for (var i = 0; i < els.length; i++) {\n          var op = els[i];\n          var cont = op.getAttribute(controllerAtt);\n\n          if (cont) {\n            ExecuteControllers.instanciate(op, op.getAttribute(controllerAtt), debug);\n          }\n        }\n      }\n    }\n\n    /**\n     * Instanciate controller and saves it in the data attribute.\n     * @param {DOMNode} el             - Element.\n     * @param {string|class}  controllerName - Name of the registered controller, or a Class.\n     *\n     * @return {DOMNode} Element.\n     */\n\n  }, {\n    key: 'instanciate',\n    value: function instanciate() {\n      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var controllerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      var controller = controllerName;\n\n      try {\n        if (typeof controllerName === 'string') {\n          if (el.data && el.data.instanciated) {\n            throw new Error('The element with the controller \\'' + controllerName + '\\' has already been instanciated. This error is non-critical and just means that something has tried to instanciate it twice.');\n          }\n\n          if (controllersList.has(controllerName)) {\n            controller = controllersList.get(controllerName);\n          } else {\n            throw new Error('The controller \\'' + controllerName + '\\' has not been registered. Please make sure the controller is registering itself using ExecuteController.registerController(CLASS, \\'OPTIONAL-NAME\\').');\n          }\n\n          if (!debug) {\n\n            var parameters = el.dataset;\n            var instance = new controller(el, parameters);\n\n            return el;\n          }\n        }\n      } catch (_error) {\n        console.warn(\"Error: \" + _error.message, _error.stack);\n      }\n\n      if (debug) {\n        var _parameters = el.dataset;\n        var _instance = new controller(el, _parameters);\n        return el;\n      }\n    }\n\n    /**\n     * Registers controllers\n     * @param {Class}  controller     - Controller.\n     * @param {string} [controllerName=''] - Name of the controller\n     */\n\n  }, {\n    key: 'registerController',\n    value: function registerController(controller) {\n      var controllerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n      try {\n        if (!controllerName) {\n          throw 'Controller name is required. Ex: ExecuteControllers.registerController(TestController, \\'TestController\\');';\n        }\n\n        if (controllersList.has(controllerName)) {\n          console.warn('Controller ' + controllerName + ' is already registered.');\n        } else {\n          controllersList.set(controllerName, controller);\n        }\n      } catch (e) {}\n    }\n\n    /**\n     * Get list of registered controllers.\n     * @return {Map} List\n     */\n\n  }, {\n    key: 'controllersList',\n    get: function get() {\n      return controllersList;\n    }\n  }]);\n\n  return ExecuteControllers;\n}();\n\n/**\n * Element Controller\n * Base class to be extended by controllers.\n * It saves the instance and information on the element data for future reference.\n *\n * @static\n * @author Marlon Marcello <marlon@wethecollective.com>\n * @version 1\n * @requirements\n * @created Nov 23, 2016\n */\n\n\nvar ElementController = function () {\n  function ElementController(element) {\n    _classCallCheck(this, ElementController);\n\n    this.element = element;\n    this.element.data = this.element.data || {};\n    this.element.data.controller = this;\n    this.element.data.instanciated = true;\n  }\n\n  /**\n   * Check if element exists in the DOM.\n   * @return {Bool} True/False.\n   */\n\n\n  _createClass(ElementController, [{\n    key: 'elementExistsInDOM',\n    value: function elementExistsInDOM() {\n      var element = void 0,\n          exists = void 0;\n      exists = this.element || null;\n      if (!exists) {\n        return false;\n      }\n      element = this.element;\n      while (element) {\n        if (element === document) {\n          return true;\n        }\n        element = element.parentNode;\n      }\n      return false;\n    }\n  }]);\n\n  return ElementController;\n}();\n\n// Export ElementController as defaultl\n\n\nexports.default = ElementController;\nexports.ExecuteControllers = ExecuteControllers;\n\n//# sourceURL=webpack:///./node_modules/wtc-controller-element/dist/wtc-controller-element.js?");

/***/ }),

/***/ "./node_modules/wtc-controller-viewports/dist/wtc-controller-viewports.js":
/*!********************************************************************************!*\
  !*** ./node_modules/wtc-controller-viewports/dist/wtc-controller-viewports.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _wtcControllerElement = _interopRequireWildcard(__webpack_require__(/*! wtc-controller-element */ \"./node_modules/wtc-controller-element/dist/wtc-controller-element.js\"));\n\nvar _wtcUtilityHelpers = _interopRequireDefault(__webpack_require__(/*! wtc-utility-helpers */ \"./node_modules/wtc-controller-viewports/node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * The Viewport class is a controller that provides information on\n * the position of the element within the window. It does this through\n * a combination of IntersectionObserver and request animation frame.\n *\n * This class extends the element controller and requires registration\n * with the Execute controllers system in order to be instanciated as\n * a component (ie with <element data-controller=\"Viewport\" />)\n *\n * @class Viewport\n * @augments ElementController\n * @author Liam Egan <liam@wethecollective.com>\n * @version 2.0.0\n * @created Jan 30, 2019\n */\nvar Viewport =\n/*#__PURE__*/\nfunction (_ElementController) {\n  _inherits(Viewport, _ElementController);\n\n  /**\n   * The Viewport Class constructor\n   *\n   * @constructor\n   * @param {HTMLElement} element \t\t\t\tThe element to use\n   * @param {object} settings             A settings object that allows settings to be passed to the raw class. These settings are:\n   * - `vpprefix`           The prefix for the classnames\n   * - `vpstoptopthreshold` The threshold to stop the execution of at\n   * - `animationCallback`  The function to run on animation. Takes the same three parameters as the runAnimation method\n   */\n  function Viewport(element) {\n    var _this;\n\n    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Viewport);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Viewport).call(this, element)); // set up the class prefix either data-vppefix. Defaults to \"vp\"\n\n    _this.classPrefix = settings.vpprefix || \"vp\"; // Sets up the stop threshold for the element, if it exists\n\n    _this.stopTopThreshold = settings.vpstoptopthreshold; // add the animation callback, if provided\n\n    _this.animationCallback = settings.animationCallback; // Bing all of the callbacks\n\n    _this._onObserve = _this._onObserve.bind(_assertThisInitialized(_this));\n    _this._onPlay = _this._onPlay.bind(_assertThisInitialized(_this));\n    _this._onResize = _this._onResize.bind(_assertThisInitialized(_this));\n    _this._onTidy = _this._onTidy.bind(_assertThisInitialized(_this)); // Check for tidy up every 5 seconds\n\n    _this.tidyInterval = setInterval(_this._onTidy, 5000); // bind the resize handler\n\n    window.addEventListener(\"resize\", _this._onResize);\n\n    _this._onResize();\n\n    if (\"IntersectionObserver\" in window) {\n      // create the intersection ovserver\n      _this.observer = new IntersectionObserver(_this._onObserve, {\n        rootMargin: \"0%\",\n        threshold: [0.1]\n      });\n\n      _this.observer.observe(_this.element);\n    } else {\n      console.log(\"%cIntersection Observers not supported\", \"color: red\");\n\n      _this.runAnimation(100, 100, 100);\n    } // debug element\n\n\n    if (_this.element.querySelector(\".vp-debug\")) {\n      _this._debugElement = _this.element.querySelector(\".vp-debug\");\n    }\n\n    _this.element.classList.add(\"\".concat(_this.classPrefix, \"--initialised\")); // This manually sets the initial top offset to provide a single, initial call of the animation event.\n\n\n    window.addEventListener(\"load\", function () {\n      // Loop through parent nodes of the element\n      // in order to get a top offset which is relative to the document,\n      // as opposed to the immediate offset parent:\n      var element = _this.element;\n      var elementOffset = 0;\n\n      while (element !== document.body) {\n        elementOffset += element.offsetTop;\n        element = element.parentNode;\n        if (element === null) break;\n      }\n\n      _this.top = elementOffset - window.scrollY;\n    });\n    return _this;\n  }\n  /**\n   * Private methods\n   */\n\n  /**\n   * Listener for the intersection observer callback\n   *\n   * @private\n   * @param  {object} entries   the object that contains all of the elements being calculated by this observer\n   * @param  {object} observer  the observer instance itself\n   * @return void\n   */\n\n\n  _createClass(Viewport, [{\n    key: \"_onObserve\",\n    value: function _onObserve(entries, observer) {\n      var _this2 = this;\n\n      // Loop through the entries and set up the playing state based on whether the element is onscreen or not.\n      entries.forEach(function (entry, i) {\n        if (entry.isIntersecting) {\n          _this2.playing = true;\n          _this2.isOnScreen = true;\n        } else {\n          _this2.playing = false;\n          _this2.isOnScreen = false;\n        }\n      });\n    }\n    /**\n     * Listener for the request animation frame loop. This just sets\n     * the scroll position of the window.\n     *\n     * @private\n     * @param  {delta} number   the number of ms that has passed since the RaF started\n     * @return void\n     */\n\n  }, {\n    key: \"_onPlay\",\n    value: function _onPlay(delta) {\n      if (this.playing === true) {\n        requestAnimationFrame(this._onPlay);\n      }\n\n      this.scrollPos = window.scrollY || window.pageYOffset;\n    }\n    /**\n     * Listener for the window resize event. Updates the window height\n     * for the percentile calculations.\n     *\n     * @private\n     * @param  {object} e   the event object from the resize event\n     * @return void\n     */\n\n  }, {\n    key: \"_onResize\",\n    value: function _onResize(e) {\n      this.windowHeight = window.innerHeight;\n    }\n    /**\n     * Listener for the tidy timeout loop. This checks whether the\n     * element exists in the dom and removes all of the necessary\n     * traces of it if it doesn't\n     *\n     * @private\n     * @return void\n     */\n\n  }, {\n    key: \"_onTidy\",\n    value: function _onTidy() {\n      var exists = this.elementExistsInDOM();\n\n      if (!exists) {\n        this.tidy();\n      }\n    }\n    /**\n     * Getters and setters\n     */\n\n    /**\n     * (getter/setter) Scroll position. This updates the scroll position\n     * only if it's changed and then calculated the element's top\n     * position based on that.\n     *\n     * @type {number}\n     * @default -1\n     */\n\n  }, {\n    key: \"runAnimation\",\n\n    /**\n     * Public methods\n     */\n\n    /**\n     * This method is called from the run loop and updates the classes\n     * based on the percentages provided to it. This is a public method\n     * and so can be called programatically, but the use-cases for\n     * doing so are limited.\n     *\n     * @param  {number} topPercent      The percentage distance between the top of the element and the bottom of the screen.\n     * @param  {number} middlePercent   The percentage distance between the middle of the element and the bottom of the screen.\n     * @param  {number} bottomPercent   The percentage distance between the bottom of the element and the top of the screen.\n     */\n    value: function runAnimation(topPercent, middlePercent, bottomPercent) {\n      _wtcUtilityHelpers[\"default\"].removeClass(this.classes.join(\" \"), this.element);\n\n      for (var i = 0; i <= 1; i += 0.1) {\n        var perString = Math.round(i * 100);\n\n        if (topPercent >= i) {\n          _wtcUtilityHelpers[\"default\"].addClass(\"\".concat(this.classPrefix, \"--on-\").concat(perString, \" \").concat(this.classPrefix, \"--onf-\").concat(perString), this.element);\n        }\n\n        if (bottomPercent >= i) {\n          _wtcUtilityHelpers[\"default\"].addClass(\"\".concat(this.classPrefix, \"--b-\").concat(perString, \" \").concat(this.classPrefix, \"--bf-\").concat(perString), this.element);\n        }\n      } // If we have an animation callback then call it here.\n\n\n      if (this.animationCallback) {\n        this.animationCallback(topPercent, middlePercent, bottomPercent);\n      } // If we have stop threshold(s), and we've suprassed them, tidy up\n\n\n      if (this.stopTopThreshold && topPercent >= this.stopTopThreshold) {\n        this.tidy();\n        this.element.classList.add(\"\".concat(this.classPrefix, \"--thresholdReached\"));\n      }\n\n      if (this._debugElement) {\n        this._debugElement.innerHTML = topPercent;\n      }\n    }\n  }, {\n    key: \"tidy\",\n    value: function tidy() {\n      this.playing = false;\n      clearInterval(this.tidyInterval);\n      window.removeEventListener(\"resize\", this.onResize);\n      this.element.data = null;\n      this.observer.disconnect();\n    }\n  }, {\n    key: \"scrollPos\",\n    set: function set(value) {\n      if (!isNaN(value) && value != this.scrollPos) {\n        this._scrollPos = value;\n        this.top = this.offsetTop - value;\n      }\n    },\n    get: function get() {\n      return this._scrollPos || -1;\n    }\n    /**\n     * (getter) Find the offsetTop to the document top. Loop through the\n     * offset parents of this element and add their tops to the\n     * larger value.\n     *\n     * @type {number}\n     * @readonly\n     * @default 0\n     */\n\n  }, {\n    key: \"offsetTop\",\n    get: function get() {\n      var el = this.element;\n      var offsetTop = 0;\n\n      while (el.offsetParent) {\n        offsetTop += el.offsetTop;\n        el = el.offsetParent;\n      }\n\n      return offsetTop;\n    }\n    /**\n     * (getter/setter) Top position. This updates the element's top\n     * position in pixels only if the value has changed and then\n     * calculates the 3 positional percentages - top, middle and\n     * bottom and then runs the runAnimation method to perform\n     * actions based on these numbers.\n     *\n     * @type {number}\n     * @default 0\n     */\n\n  }, {\n    key: \"top\",\n    set: function set(value) {\n      if (!isNaN(value) && value != this.top) {\n        this._top = value; // The percentage of the position of the top of the element from the bottom of the screen\n\n        this._top_percentage = (this.windowHeight - value) / this.windowHeight; // The percentage of the position of the bottom of the element from the top of the sceen.\n\n        this._bottom_percentage = (value + this.elementHeight) / this.windowHeight; // The percentage of the position of the middle of the element from the bottom of the sceeen\n\n        this._middle_percentage = (this.windowHeight - (value + this.elementHeight * 0.5)) / this.windowHeight; // Run the animation with these calculated values\n\n        this.runAnimation(this._top_percentage, this._middle_percentage, this._bottom_percentage);\n      }\n    },\n    get: function get() {\n      return this._top || 0;\n    }\n    /**\n     * (getter/setter) Playing. This is set in response to a callback\n     * on the intersection observer and sets up the RaF loop to\n     * calculate the scroll position and run the animation.\n     *\n     * @type {boolean}\n     * @default false\n     */\n\n  }, {\n    key: \"playing\",\n    set: function set(value) {\n      if (this.playing === false && value === true) {\n        requestAnimationFrame(this._onPlay);\n        this._playing = true;\n      } else if (value !== true) {\n        this._playing = false;\n      }\n    },\n    get: function get() {\n      return this._playing === true;\n    }\n    /**\n     * (getter/setter) The window height. Used to calculate the\n     * positional percentages.\n     *\n     * @type {number}\n     * @default 0\n     */\n\n  }, {\n    key: \"windowHeight\",\n    set: function set(value) {\n      if (!isNaN(value)) {\n        this._windowHeight = value;\n      }\n    },\n    get: function get() {\n      return this._windowHeight || 0;\n    }\n    /**\n     * Element height.\n     *\n     * @readonly\n     * @return {number}  The element's height in pixels\n     */\n\n  }, {\n    key: \"elementHeight\",\n    get: function get() {\n      return this.element.offsetHeight || 0;\n    }\n    /**\n     * (getter/setter) Sets whether the element is onscreen. This is\n     * set from the intersection observer callback and updates the\n     * classes of the element for use.\n     *\n     * @type {boolean}\n     * @default false\n     */\n\n  }, {\n    key: \"isOnScreen\",\n    set: function set(value) {\n      this._isOnScreen = value === true;\n\n      if (value === true) {\n        this.element.classList.add(\"\".concat(this.classPrefix, \"--onscreen\"));\n      } else {\n        this.element.classList.remove(\"\".concat(this.classPrefix, \"--onscreen\"));\n      }\n    },\n    get: function get() {\n      return this._isOnScreen === true;\n    }\n  }, {\n    key: \"stopTopThreshold\",\n    set: function set(value) {\n      if (!isNaN(value)) {\n        this._stopTopThreshold = Number(value);\n      }\n    },\n    get: function get() {\n      return this._stopTopThreshold || null;\n    }\n    /**\n     * The array of classes to remove from the element on scroll.\n     *\n     * @readonly\n     * @return {array}  The classes to remove each time the animation loop is run.\n     */\n\n  }, {\n    key: \"classes\",\n    get: function get() {\n      return this._classList || [];\n    }\n    /**\n     * (getter/setter) Sets the prefix for the css classes for the\n     * element. Setting this will also set the class list.\n     *\n     * @type {string}\n     * @default 'vp'\n     */\n\n  }, {\n    key: \"classPrefix\",\n    set: function set(value) {\n      if (typeof value === \"string\") this._classPrefix = value;\n      this._classList = [\"\".concat(this.classPrefix, \"--on-10\"), \"\".concat(this.classPrefix, \"--on-20\"), \"\".concat(this.classPrefix, \"--on-30\"), \"\".concat(this.classPrefix, \"--on-40\"), \"\".concat(this.classPrefix, \"--on-50\"), \"\".concat(this.classPrefix, \"--on-60\"), \"\".concat(this.classPrefix, \"--on-70\"), \"\".concat(this.classPrefix, \"--on-80\"), \"\".concat(this.classPrefix, \"--on-90\"), \"\".concat(this.classPrefix, \"--on-100\"), \"\".concat(this.classPrefix, \"--b-10\"), \"\".concat(this.classPrefix, \"--b-20\"), \"\".concat(this.classPrefix, \"--b-30\"), \"\".concat(this.classPrefix, \"--b-40\"), \"\".concat(this.classPrefix, \"--b-50\"), \"\".concat(this.classPrefix, \"--b-60\"), \"\".concat(this.classPrefix, \"--b-70\"), \"\".concat(this.classPrefix, \"--b-80\"), \"\".concat(this.classPrefix, \"--b-90\"), \"\".concat(this.classPrefix, \"--b-100\")];\n    },\n    get: function get() {\n      return this._classPrefix || \"vp\";\n    }\n    /**\n     * (getter/setter) Sets the animation callback for custom behaviour.\n     * this function will be called each time the runAnimation function\n     * is called. Any provide function will be bound to this instance\n     * and takes three params:\n     * - topPercent;\n     * - middlePercent; and\n     * - bottomPercent\n     *\n     * @type {function}\n     * @default null\n     */\n\n  }, {\n    key: \"animationCallback\",\n    set: function set(value) {\n      if (typeof value == \"function\") {\n        this._animationCallback = value.bind(this);\n      }\n    },\n    get: function get() {\n      return this._animationCallback || null;\n    }\n  }]);\n\n  return Viewport;\n}(_wtcControllerElement[\"default\"]); // Register\n\n\n_wtcControllerElement.ExecuteControllers.registerController(Viewport, \"Viewport\");\n\nvar _default = Viewport;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/wtc-controller-viewports/dist/wtc-controller-viewports.js?");

/***/ }),

/***/ "./node_modules/wtc-controller-viewports/node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/wtc-controller-viewports/node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar utilities = {};\n\n/**\n * floatRandomBetween\n * Generate a random float number max and min.\n * @min {number} Minimum value.\n * @max {number} Maximum value.\n * return {number} Random integer.\n */\nutilities.floatRandomBetween = function (min, max) {\n  return Math.random() * (max - min + 1) + min;\n};\n\n/**\n * randomBetween\n * Generate a random integer number max and min.\n * @min {number} Minimum value.\n * @max {number} Maximum value.\n * return {number} Random integer.\n */\nutilities.randomBetween = function (min, max) {\n  return Math.floor(utilities.floatRandomBetween(min, max));\n};\n\n/**\n * lerp\n * Linearly interpolate between two values by a unit interval\n * @param {number} x The lower value\n * @param {number} y The upper value\n * @param {number} amount the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well.\n * @return {number} The interpolated value\n */\nutilities.lerp = function (x, y, amount) {\n  return (1 - amount) * x + amount * y;\n};\n\n/**\n * getStyle\n * Get the current style value from an element.\n * @el {DOMNode} Target element.\n * @prop {string} CSS property name.\n * @stripUnit {boolean} Remove units.\n * return {string} Current CSS value WITH unit.\n */\nutilities.getStyle = function (el, prop, stripUnit) {\n  var strValue = \"\";\n\n  if (window.getComputedStyle) {\n    strValue = getComputedStyle(el).getPropertyValue(prop);\n  }\n  //IE\n  else if (el.currentStyle) {\n      try {\n        strValue = el.currentStyle[prop];\n      } catch (e) {}\n    }\n\n  if (stripUnit) {\n    strValue = parseInt(strValue);\n  }\n\n  return strValue;\n};\n\n/**\n * Log\n * Simple log function to show different colors on the console.\n * @status {string} Status type.\n * @msg {string} Message to show.\n */\nutilities.log = function (status, msg) {\n  var bgc, color;\n\n  switch (status) {\n    case \"success\":\n      color = \"Green\";\n      bgc = \"LimeGreen\";\n      break;\n    case \"info\":\n      color = \"DodgerBlue\";\n      bgc = \"Turquoise\";\n      break;\n    case \"error\":\n      color = \"Black\";\n      bgc = \"Red\";\n      break;\n    case \"warning\":\n      color = \"Tomato\";\n      bgc = \"Gold\";\n      break;\n    default:\n      color = \"black\";\n      bgc = \"White\";\n  }\n\n  if ((typeof msg === \"undefined\" ? \"undefined\" : _typeof(msg)) === \"object\") {\n    console.log(msg);\n  } else {\n    console.log(\"%c\" + msg, \"color:\" + color + \";font-weight:bold; background-color: \" + bgc + \";\");\n  }\n};\n\n/**\n * once\n * Fires an event only once and executes the callback.\n * @node {DOMElement} Dom element to attach event.\n * @type {String} Type of event.\n * @callback {function} Callback.\n */\nutilities.once = function (node, type, callback) {\n  node.addEventListener(type, function (e) {\n    e.target.removeEventListener(e.type, arguments.callee);\n    return callback(e);\n  });\n};\n\n/**\n * shuffleArray\n * Shuffle an array.\n * @array Arrray to be shuffled.\n * return {array} Shuffled array.\n */\nutilities.shuffleArray = function (array) {\n  var currentIndex = array.length,\n      temporaryValue,\n      randomIndex;\n\n  // While there remain elements to shuffle...\n  while (0 !== currentIndex) {\n\n    // Pick a remaining element...\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1;\n\n    // And swap it with the current element.\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n};\n\n/**\n * fireCustomEvent\n * Fire a custom event.\n * @name {string} Name of the event.\n * @data {object} Object to be passed to the event.\n */\nutilities.fireCustomEvent = function (name, data, bubbles, cancelable) {\n  var ev;\n  var params = {\n    bubbles: bubbles || true,\n    cancelable: cancelable || true,\n    detail: data || null\n  };\n\n  if (typeof window.CustomEvent === \"function\") {\n    ev = new CustomEvent(name, params);\n  } else {\n    ev = document.createEvent('CustomEvent');\n    ev.initCustomEvent(name, params.bubbles, params.cancelable, params.detail);\n  }\n\n  window.dispatchEvent(ev);\n};\n\n/**\n * forEachNode\n * Loop through and array of DOM elements.\n * @array {DOM Node List} List of elements.\n * @callback {function} Callback.\n * @scope *optional {function} Scope to pass to callback.\n */\nutilities.forEachNode = function (array, callback, scope) {\n  for (var i = 0; i < array.length; i++) {\n    callback.call(scope, i, array[i]); // passes back stuff we need\n  }\n};\n\n/**\n * getElementPosition\n * Get the position of the element relative to document.\n * @element {DOM Node} Element.\n * returns Object with element coordinates.\n */\nutilities.getElementPosition = function (element) {\n  var positionToViewport = element.getBoundingClientRect();\n\n  var scrollTop = window.pageYOffset;\n  var scrollLeft = window.pageXOffset;\n\n  var clientTop = document.body.clientTop || 0;\n  var clientLeft = document.body.clientLeft || 0;\n\n  var top = positionToViewport.top + scrollTop - clientTop;\n  var left = positionToViewport.left + scrollLeft - clientLeft;\n\n  return {\n    top: Math.round(top),\n    left: Math.round(left)\n  };\n};\n\n/**\n * getViewportDimensions\n * Get the browser window size.\n * retuns Object with dimensions.\n */\nutilities.getViewportDimensions = function () {\n  return {\n    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),\n    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)\n  };\n};\n\n/**\n * classExtend\n * Extends a parent class.\n * @child {function} Child class.\n * @parent {function} Parent class.\n * returns updated Child class;\n */\nutilities.classExtend = function (child, parent) {\n  var hasProp = {}.hasOwnProperty;\n\n  for (var key in parent) {\n    if (hasProp.call(parent, key)) child[key] = parent[key];\n  }\n\n  function ctor() {\n    this.constructor = child;\n  }\n\n  ctor.prototype = parent.prototype;\n  child.prototype = new ctor();\n  child.__super__ = parent.prototype;\n\n  return child;\n};\n\n/**\n * HasClass\n * Checks for class on element.\n * @cl {string} Names. You can split the names with a space\n * @e {DOM Element} Element\n */\nutilities.hasClass = function (cl, e) {\n\n  var c, classes, i, j, len, len1;\n  classes = cl.split(' ');\n\n  if (e.classList) {\n    for (i = 0, len = classes.length; i < len; i++) {\n      c = classes[i];\n      if (e.classList.contains(c) === true) {\n        return true;\n      }\n    }\n  } else {\n    for (j = 0, len1 = classes.length; j < len1; j++) {\n      c = classes[j];\n      if (new RegExp('(^| )' + c + '( |$)', 'gi').test(e.c)) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\n/**\n * RemoveClass\n * Remove class from element.\n * @c {string} name of the class\n * @e {DOM Element} Element\n */\nutilities.removeClass = function (c, e) {\n\n  var classes, i, j, len, len1;\n  classes = c.split(' ');\n  if (e.classList) {\n    for (i = 0, len = classes.length; i < len; i++) {\n      c = classes[i];\n      e.classList.remove(c);\n    }\n  } else {\n    for (j = 0, len1 = classes.length; j < len1; j++) {\n      c = classes[j];\n      e.className = e.className.replace(new RegExp('(^|\\\\b)' + c.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');\n    }\n  }\n};\n\n/**\n * AddClass\n * Add class to element.\n * @c {string} Name of the class\n * @e {DOM Element} Element\n */\nutilities.addClass = function (c, e) {\n\n  var classes, i, j, len, len1;\n  classes = c.split(' ');\n\n  if (e.classList) {\n    for (i = 0, len = classes.length; i < len; i++) {\n      c = classes[i];\n      e.classList.add(c);\n    }\n  } else {\n    for (j = 0, len1 = classes.length; j < len1; j++) {\n      c = classes[j];\n      e.className += ' ' + c;\n    }\n  }\n};\n\n/**\n * GetSiblings\n * Get siblings from element\n * @e {DOM Element} Element\n * @return Array of DOM Elements\n */\nutilities.getSiblings = function (e) {\n\n  return Array.prototype.filter.call(e.parentNode.children, function (child) {\n    return child !== e;\n  });\n};\n\n/**\n * Function to normalize the selctor 'matchesSelector' across browsers\n */\nutilities.matches = function () {\n\n  var doc, matches;\n  doc = document.documentElement;\n  matches = doc.matchesSelector || doc.webkitMatchesSelector || doc.mozMatchesSelector || doc.oMatchesSelector || doc.msMatchesSelector;\n\n  return matches;\n};\n\n/**\n * Extend\n * Similar to jquery.extend, it appends the properties from 'options' to default and overwrite the ones that already exist in 'defaults'\n * @defaults {Object} Default values\n * @options {Object} New values\n */\nutilities.extend = function (defaults, options) {\n\n  var extended = {},\n      key = null;\n\n  for (key in defaults) {\n    if (defaults.hasOwnProperty(key)) extended[key] = defaults[key];\n  }\n\n  for (key in options) {\n    if (options.hasOwnProperty(key)) extended[key] = options[key];\n  }\n\n  return extended;\n};\n\n/**\n * Extends a base object with a series of other objects.\n *\n * @example\n * objA = {a: '1', b: '2', c: '3'};\n * objB = {d: {a: 'x', b: 'y', c: 'z'}};\n * objC = {b: 'foo'};\n\n * objD = utilities.deepExtend({}, objA, objB, objC);\n * // Outputs:\n * // [object Object] {\n * // a: \"1\",\n * // b: \"foo\",\n * // c: \"3\",\n * // d: [object Object] {\n * //   a: \"x\",\n * //   b: \"y\",\n * //   c: \"z\"\n * // }\n}\n *\n * @static\n * @param  {...Object}   object      The objects to extend. The first object in the list will be the default.\n * @return {Object}                  The extended object in full.\n */\nutilities.deepExtend = function () {\n\n  if (Object.assign) {\n    return Object.assign.apply(Object, arguments);\n  }\n\n  // This is here for older browsers\n  var out = arguments[0] || {};\n  var i = 0;\n  var key = null;\n\n  while (i++ < arguments.length) {\n    var obj = arguments[i];\n    if (obj && (typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj)) == 'object') {\n      for (key in obj) {\n        if (obj.hasOwnProperty(key)) {\n          if (_typeof(obj[key]) == 'object' && obj[key] != null) {\n            out[key] = utilities.deepExtend(out[key], obj[key]);\n          } else {\n            out[key] = obj[key];\n          }\n        }\n      }\n    }\n  }\n\n  return out;\n};\n\n/**\n * Returns the CSS selector for a provided element\n *\n * @static\n * @param  {DOMElement}   el         The DOM node to find a selector for\n * @return {String}                  The CSS selector the describes exactly where to find the element\n */\nutilities.getSelectorForElement = function (el) {\n  var particles = [];\n  while (el.parentNode) {\n    if (el.id) {\n      particles.unshift('#' + el.id);\n      break;\n    } else {\n      if (el == el.ownerDocument.documentElement) particles.unshift(el.tagName);else {\n        for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++) {}\n        particles.unshift(el.tagName + \":nth-child(\" + c + \")\");\n      }\n      el = el.parentNode;\n    }\n  }\n  return particles.join(\" > \");\n};\n\n/**\n * A singleton class that provides Framerate information for a website. When running, this will produce a \n * number of useful internal properties.\n * \n * - current\n *   The current framerate\n * - low\n *   The lowest overall framerate\n * - averageOverall\n *   The average overall framerate\n * - average60\n *   The average framerate in the last 60 frames (ideally this is a second)\n * \n * ## Usage\n * ```\n * let fps = utilities.getFPSMeasure();\n * console.log(fps.current); // 60\n * ```\n * \n * When using this class, it is often fortiuitous to cycle it down and back up after a big FPS dip:\n * ```\n * fps.stop();\n * fps.start();\n * ```\n * \n * @private\n * @class MeasureFPS\n */\n\nvar MeasureFPS = function () {\n  function MeasureFPS() {\n    _classCallCheck(this, MeasureFPS);\n\n    this.start();\n  }\n\n  _createClass(MeasureFPS, [{\n    key: \"start\",\n    value: function start() {\n      if (this.running === true) return;\n\n      this.elapsedTime = 0;\n      this.lastTime = 0;\n\n      this.current = 0;\n      this.low = 60;\n      this.averageOverall = 60;\n      this.average60 = 60;\n      this.ticks = 0;\n\n      this.running = true;\n\n      requestAnimationFrame(this.run.bind(this));\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.running = false;\n    }\n  }, {\n    key: \"run\",\n    value: function run(now) {\n      var tick60 = void 0;\n      this.elapsedTime = (now - (this.lastTime || now)) / 1000;\n      this.lastTime = now;\n      this.ticks += 1;\n      this.current = 1 / this.elapsedTime;\n      if (this.current < this.low) {\n        this.low = this.current;\n      }\n      if (!isNaN(parseInt(this.current))) {\n        this.averageOverall = (this.ticks * this.averageOverall + this.current) / (this.ticks + 1);\n        if (this.ticks % 60 === 0) {\n          this.average60 = 60;\n        }\n        tick60 = this.ticks % 60 + 1;\n        this.average60 = (tick60 * this.average60 + this.current) / (tick60 + 1);\n      }\n\n      if (this.running === true) {\n        requestAnimationFrame(this.run.bind(this));\n      }\n    }\n  }]);\n\n  return MeasureFPS;\n}();\n\nvar measureFPSInstance = null;\n\nutilities.getFPSMeasure = function () {\n  if (measureFPSInstance === null) measureFPSInstance = new MeasureFPS();\n  return measureFPSInstance;\n};\n\n// Fix widows replaces the last space in a sentence with a non-breaking space\n// This function is a little dangerous at the moment so we should revisit it at some point in the future\nutilities.fixWidows = function (els) {\n  _els = els;\n  if (els instanceof Node) {\n    _els = [els];\n  }\n  if (_els && _els.length) {\n    for (var i = 0; i < _els.length; i++) {\n      var el = _els[i];\n      if (el instanceof Node) {\n        el.innerHTML = el.innerHTML.replace(/\\s(?=[^\\s]*$)/g, \"&nbsp;\");\n      }\n    }\n  }\n};\n\nexports.default = utilities;\n\n//# sourceURL=webpack:///./node_modules/wtc-controller-viewports/node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js?");

/***/ }),

/***/ "./node_modules/wtc-gallery-component/dist/wtc-gallery-component.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/wtc-gallery-component/dist/wtc-gallery-component.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0}),exports.default=void 0;var _wtcUtilityPreloader=_interopRequireDefault(__webpack_require__(/*! wtc-utility-preloader */ \"./node_modules/wtc-utility-preloader/dist/wtc-utility-preloader.js\")),_wtcControllerElement=_interopRequireWildcard(__webpack_require__(/*! wtc-controller-element */ \"./node_modules/wtc-controller-element/dist/wtc-controller-element.js\"));function _getRequireWildcardCache(){if(\"function\"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function(){return cache},cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||\"object\"!==_typeof(obj)&&\"function\"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _typeof(obj){return(_typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&\"function\"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj})(obj)}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||\"[object Arguments]\"===Object.prototype.toString.call(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,\"value\"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return!call||\"object\"!==_typeof(call)&&\"function\"!=typeof call?_assertThisInitialized(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return self}function _inherits(subClass,superClass){if(\"function\"!=typeof superClass&&null!==superClass)throw new TypeError(\"Super expression must either be null or a function\");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var Gallery=function(){function Gallery(element){var _this,options=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(_classCallCheck(this,Gallery),(_this=_possibleConstructorReturn(this,_getPrototypeOf(Gallery).call(this,element))).options={nav:\"true\"==_this.element.getAttribute(\"data-nav\"),debug:\"true\"==_this.element.getAttribute(\"data-debug\"),autoplay:\"true\"==_this.element.getAttribute(\"data-autoplay\"),delay:0<parseInt(_this.element.getAttribute(\"data-delay\"))?parseInt(_this.element.getAttribute(\"data-delay\")):5e3,pauseOnHover:\"true\"==_this.element.getAttribute(\"data-pause-on-hover\"),loop:\"true\"==_this.element.getAttribute(\"data-loop\"),draggable:\"true\"==_this.element.getAttribute(\"data-draggable\"),dragThreshold:0<parseInt(_this.element.getAttribute(\"data-drag-threshold\"))?parseInt(_this.element.getAttribute(\"data-drag-threshold\")):40,pagination:\"true\"==_this.element.getAttribute(\"data-pagination\"),paginationTarget:_this.element.getAttribute(\"data-pagination-target\")&&1<_this.element.getAttribute(\"data-pagination-target\").length?_this.element.getAttribute(\"data-pagination-target\"):null,nextBtnMarkup:_this.element.getAttribute(\"data-next-btn-markup\")?_this.element.getAttribute(\"data-next-btn-markup\"):'Next <span class=\"visually-hidden\">carousel item.</span>',prevBtnMarkup:_this.element.getAttribute(\"data-prev-btn-markup\")?_this.element.getAttribute(\"data-prev-btn-markup\"):'Previous <span class=\"visually-hidden\">carousel item.</span>',liveRegionText:_this.element.getAttribute(\"data-live-region-text\")?_this.element.getAttribute(\"data-live-region-text\"):\"Active carousel item\",onLoad:null,onWillChange:null,onHasChanged:null},options&&(_this.options=Object.assign({},_this.options,options)),_this.wrapper=_this.element.querySelector(\"ul\"),_this.items=_toConsumableArray(_this.wrapper.children),_this.overlay=document.createElement(\"div\"),_this.currentItem=_this.items[0],_this.currentIndex=0,_this.options.nav&&(_this.nextBtn=document.createElement(\"button\"),_this.nextBtn.innerHTML=_this.options.nextBtnMarkup,_this.prevBtn=document.createElement(\"button\"),_this.prevBtn.innerHTML=_this.options.prevBtnMarkup,_this.nextBtn.className=\"gallery__nav gallery__nav-next\",_this.prevBtn.className=\"gallery__nav gallery__nav-prev\",_this.nextBtn.addEventListener(\"click\",_this.next.bind(_assertThisInitialized(_this))),_this.prevBtn.addEventListener(\"click\",_this.prev.bind(_assertThisInitialized(_this))),_this.wrapper.insertAdjacentElement(\"afterend\",_this.nextBtn),_this.wrapper.insertAdjacentElement(\"afterend\",_this.prevBtn)),_this.options.pagination){var itemList;if(_this.options.paginationTarget){_toConsumableArray((itemList=document.querySelector(_this.options.paginationTarget)).children).forEach(function(el,i){el.classList.add(\"gallery__pagination-item\"),el.dataset.index||(el.dataset.index=i),0===i&&el.classList.add(\"is-active\"),el.addEventListener(\"click\",_this.handlePagination.bind(_assertThisInitialized(_this)))})}else{var i=0,length=_this.items.length;for(itemList=document.createElement(\"ul\");i<length;i++){var item=document.createElement(\"li\"),itemBtn=document.createElement(\"button\"),itemBtnContent=document.createTextNode(i+1);item.classList.add(\"gallery__pagination-item\"),0===(item.dataset.index=i)&&item.classList.add(\"is-active\"),item.addEventListener(\"click\",_this.handlePagination.bind(_assertThisInitialized(_this))),itemBtn.appendChild(itemBtnContent),item.appendChild(itemBtn),itemList.appendChild(item)}_this.element.appendChild(itemList)}_this.paginationList=itemList,_this.paginationItems=_toConsumableArray(_this.paginationList.children),itemList.classList.add(\"gallery__pagination\")}_this.liveRegion=null,_this.options.liveRegionText&&(_this.liveRegion=document.createElement(\"p\"),_this.liveRegion.setAttribute(\"aria-live\",\"polite\"),_this.liveRegion.classList.add(\"visually-hidden\"),_this.element.insertAdjacentElement(\"afterbegin\",_this.liveRegion)),_this.options.pauseOnHover&&(window.PointerEvent?(element.addEventListener(\"pointerover\",_this.pause.bind(_assertThisInitialized(_this)),!1),element.addEventListener(\"pointerout\",_this.resume.bind(_assertThisInitialized(_this)),!1)):(element.addEventListener(\"mouseenter\",_this.pause.bind(_assertThisInitialized(_this)),!1),element.addEventListener(\"mouseleave\",_this.resume.bind(_assertThisInitialized(_this)),!1))),_this.options.draggable&&(_this.dragStartX=null,element.addEventListener(\"mousedown\",_this.draggablePointerDown.bind(_assertThisInitialized(_this)),!1),element.addEventListener(\"touchstart\",_this.draggablePointerDown.bind(_assertThisInitialized(_this)),!1),element.addEventListener(\"mouseup\",_this.draggablePointerUp.bind(_assertThisInitialized(_this)),!1),element.addEventListener(\"touchend\",_this.draggablePointerUp.bind(_assertThisInitialized(_this)),!1)),_this.element.classList.add(\"gallery\"),_this.overlay.classList.add(\"gallery__overlay\"),_this.wrapper.classList.add(\"gallery__wrapper\"),_this.items.forEach(function(item,i){if(item.classList.add(\"gallery__item\"),item.dataset.index=i,item.setAttribute(\"tabindex\",-1),_this.currentIndex!==i){var focusableChildren=item.querySelectorAll(\"button, [href], [tabindex]\"),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=focusableChildren[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){_step.value.setAttribute(\"tabindex\",-1)}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}item.setAttribute(\"aria-hidden\",\"true\")}item.addEventListener(\"transitionend\",_this.itemTransitioned.bind(_assertThisInitialized(_this),item))}),_this.currentItem.classList.add(\"is-active\"),_this.element.classList.add(\"is-loading\"),_this.element.appendChild(_this.overlay);var images=_this.wrapper.querySelectorAll(\"img\");if(0<images.length){var preloader=new _wtcUtilityPreloader.default({debug:_this.options.debug}),_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,_iterator2=images[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var _item=_step2.value;preloader.add(_item.getAttribute(\"src\"),\"image\")}}catch(err){_didIteratorError2=!0,_iteratorError2=err}finally{try{_iteratorNormalCompletion2||null==_iterator2.return||_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}preloader.load(_this.loaded.bind(_assertThisInitialized(_this)))}else _this.loaded();return _this}return _inherits(Gallery,_wtcControllerElement[\"default\"]),_createClass(Gallery,[{key:\"handlePagination\",value:function(e){var target=e.target.closest(\".gallery__pagination-item\");if(target){var paginationIndex=+target.dataset.index;this.paginationItems.forEach(function(item,i){paginationIndex===i?item.classList.add(\"is-active\"):item.classList.remove(\"is-active\")}),this.moveByIndex(paginationIndex),this.currentItem.focus()}}},{key:\"draggablePointerDown\",value:function(e){if(!e.target.closest(\"button\")){e.preventDefault();var xPos=e.clientX||e.touches[0].clientX;this.dragStartX=xPos}}},{key:\"draggablePointerUp\",value:function(e){if(!e.target.closest(\"button\")&&!e.target.closest(\"[href]\")){e.preventDefault();var xPos=e.clientX||e.changedTouches[0].clientX;Math.abs(xPos-this.dragStartX)>this.options.dragThreshold&&(xPos>this.dragStartX?this.prev():this.next())}}},{key:\"resize\",value:function(){var newH=0,_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _step3,_iterator3=this.items[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){var h=_step3.value.offsetHeight;newH<h&&(newH=h)}}catch(err){_didIteratorError3=!0,_iteratorError3=err}finally{try{_iteratorNormalCompletion3||null==_iterator3.return||_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}return this.wrapper.style.height=\"\".concat(newH,\"px\"),this}},{key:\"loaded\",value:function(){return window.addEventListener(\"resize\",this.resize.bind(this)),this.resize(),this.element.classList.remove(\"is-loading\"),this.element.classList.add(\"is-loaded\"),this.options.autoplay&&(this.player=setTimeout(this.next.bind(this),this.options.delay)),this.options.nav&&!this.options.loop&&0==this.currentIndex&&this.prevBtn.setAttribute(\"disabled\",!0),\"function\"==typeof this.options.onLoad&&this.options.onLoad(this),this}},{key:\"itemTransitioned\",value:function(item){return item.classList.remove(\"is-transitioning\"),item.classList.remove(\"is-transitioning--center\"),item.classList.remove(\"is-transitioning--backward\"),item.classList.remove(\"is-transitioning--forward\"),this}},{key:\"moveByIndex\",value:function(index){var next=this.items[index];if(this.options.autoplay&&clearTimeout(this.player),next){if(this.currentItem!=next&&(this.currentItem.setAttribute(\"aria-hidden\",\"true\"),next.removeAttribute(\"aria-hidden\"),next.classList.add(\"is-active\"),next.classList.add(\"is-transitioning\"),next.classList.add(\"is-transitioning--center\"),this.currentItem.classList.remove(\"is-active\")),this.options.pagination){var _iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _step4,_iterator4=this.paginationItems[Symbol.iterator]();!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0){var item=_step4.value;item.dataset.index==index?item.classList.add(\"is-active\"):item.classList.remove(\"is-active\")}}catch(err){_didIteratorError4=!0,_iteratorError4=err}finally{try{_iteratorNormalCompletion4||null==_iterator4.return||_iterator4.return()}finally{if(_didIteratorError4)throw _iteratorError4}}}this.liveRegion&&this.options.liveRegionText&&(this.liveRegion.innerHTML=\"\".concat(this.options.liveRegionText,\": \").concat(index+1,\" of \").concat(this.items.length,\".\"));var prev=this.currentItem;return this.currentItem=next,this.currentIndex=index,!this.options.loop&&this.options.nav&&(this.currentIndex==this.items.length-1?(this.nextBtn.setAttribute(\"disabled\",!0),this.prevBtn.removeAttribute(\"disabled\")):0==this.currentIndex?(this.prevBtn.setAttribute(\"disabled\",!0),this.nextBtn.removeAttribute(\"disabled\")):(this.nextBtn.removeAttribute(\"disabled\"),this.prevBtn.removeAttribute(\"disabled\"))),\"function\"==typeof this.options.onHasChanged&&this.options.onHasChanged(this.currentItem,prev,this),this.options.autoplay&&(this.player=setTimeout(this.next.bind(this),this.options.delay)),this}console.warn(\"No item with index: \"+index)}},{key:\"move\",value:function(argument_0){var direction=!(0<arguments.length&&void 0!==argument_0)||argument_0;this.options.autoplay&&clearTimeout(this.player);var next=direction?this.currentItem.nextElementSibling:this.currentItem.previousElementSibling;(next=next||(direction?this.items[0]:this.items[this.items.length-1])).classList.add(\"is-active\"),next.classList.add(\"is-transitioning\"),next.classList.add(\"is-transitioning--center\"),this.currentItem.classList.remove(\"is-active\"),this.currentItem.setAttribute(\"aria-hidden\",\"true\"),next.removeAttribute(\"aria-hidden\"),this.options.pagination&&this.paginationItems.forEach(function(item,i){i==next.dataset.index?item.classList.add(\"is-active\"):item.classList.remove(\"is-active\")});var prev=this.currentItem;this.currentItem=next,this.currentIndex=+next.dataset.index,!this.options.loop&&this.options.nav&&(this.currentIndex==this.items.length-1?(this.nextBtn.setAttribute(\"disabled\",!0),this.prevBtn.removeAttribute(\"disabled\")):0==this.currentIndex?(this.prevBtn.setAttribute(\"disabled\",!0),this.nextBtn.removeAttribute(\"disabled\")):(this.nextBtn.removeAttribute(\"disabled\"),this.prevBtn.removeAttribute(\"disabled\"))),\"function\"==typeof this.options.onHasChanged&&this.options.onHasChanged(this.currentItem,prev,this),this.options.autoplay?this.player=setTimeout(this.next.bind(this),this.options.delay):this.liveRegion&&this.options.liveRegionText&&(this.liveRegion.innerHTML=\"\".concat(this.options.liveRegionText,\": \").concat(this.currentIndex+1,\" of \").concat(this.items.length,\".\"))}},{key:\"next\",value:function(){return this.currentIndex=parseInt(this.currentItem.dataset.index),\"function\"==typeof this.options.onWillChange&&this.options.onWillChange(this,!0),this.currentItem.classList.remove(\"is-transitioning--center\"),this.currentItem.classList.add(\"is-transitioning\"),this.currentItem.classList.add(\"is-transitioning--backward\"),this.move(),this}},{key:\"prev\",value:function(){return this.currentIndex=this.currentItem.dataset.index,\"function\"==typeof this.options.onWillChange&&this.options.onWillChange(this,!1),this.currentItem.classList.remove(\"is-transitioning--center\"),this.currentItem.classList.add(\"is-transitioning\"),this.currentItem.classList.add(\"is-transitioning--forward\"),this.move(!1),this}},{key:\"pause\",value:function(){return this.options.autoplay&&clearTimeout(this.player),this}},{key:\"resume\",value:function(){return this.options.autoplay&&(this.player=setTimeout(this.next.bind(this),this.options.delay)),this}},{key:\"active\",get:function(){return this.currentItem}},{key:\"activeIndex\",get:function(){return this.currentIndex}}]),Gallery}();_wtcControllerElement.ExecuteControllers.registerController(Gallery,\"Gallery\");var _default=Gallery;exports.default=_default;\n\n//# sourceURL=webpack:///./node_modules/wtc-gallery-component/dist/wtc-gallery-component.min.js?");

/***/ }),

/***/ "./node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! exports used: getElementPosition */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.serializeArray = exports.fixWidows = exports.getSelectorForElement = exports.matches = exports.getAncestors = exports.getSiblings = exports.isChildOf = exports.getElementPosition = exports.fireCustomEvent = exports.shuffleArray = exports.lerp = exports.randomBetween = exports.floatRandomBetween = void 0;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/**\n * Generate a random float number max and min.\n *\n * ```javascript\n * floatRandomBetween(-10, 20); // 12.513\n * ```\n *\n * @param {number} min Minimum value.\n * @param {number} max Maximum value.\n * @return {number} Random number.\n */\nvar floatRandomBetween = function floatRandomBetween(min, max) {\n  return Math.random() * (max - min) + min;\n};\n/**\n * Generate a random integer number max and min.\n *\n * ```javascript\n * randomBetween(-10, 20); // 12\n * ```\n *\n * @param {number} min Minimum value.\n * @param {number} max Maximum value.\n * @return {number} Random number.\n */\n\n\nexports.floatRandomBetween = floatRandomBetween;\n\nvar randomBetween = function randomBetween(min, max) {\n  return Math.round(floatRandomBetween(min, max));\n};\n/**\n * Linearly interpolate between two values by a unit interval\n *\n * ```javascript\n * lerp(100, 200, .5); // 150\n * ```\n *\n * @param {number} x The lower value\n * @param {number} y The upper value\n * @param {number} amount the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well.\n * @return {number} The interpolated value\n */\n\n\nexports.randomBetween = randomBetween;\n\nvar lerp = function lerp(x, y, amount) {\n  return (1 - amount) * x + amount * y;\n};\n/**\n * Shuffle an array.\n *\n * @param {Array} array Arrray to be shuffled.\n * @param {Boolean=} modifyOriginal A boolean indicating whether the original array should be modified or whether a copy should be created. (default True)\n * @return {array} Shuffled array.\n */\n\n\nexports.lerp = lerp;\n\nvar shuffleArray = function shuffleArray(array) {\n  var modifyOriginal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var currentIndex = array.length,\n      temporaryValue,\n      randomIndex; // destructuring this to essentially clone the array\n  // this will not clone array values, which shouldn't\n  // matter. But if it does, in your case, then now\n  // you know why.\n\n  if (modifyOriginal === false) {\n    var _array = array;\n\n    var _array2 = _toArray(_array);\n\n    array = _array2.slice(0);\n  } // While there remain elements to shuffle...\n\n\n  while (0 !== currentIndex) {\n    // Pick a remaining element...\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1; // And swap it with the current element.\n\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n};\n/**\n * Fire a custom event.\n *\n * ```javascript\n * fireCustomEvent(name, data);\n * ```\n *\n * @param {string} name Name of the event.\n * @param {object} data Object to be passed to the event.\n * @param {Boolean=} bubbles Indicates whether the event bubbles (default True)\n * @param {Boolean=} cancelable Indicates whether the event is cancellable  default True)\n */\n\n\nexports.shuffleArray = shuffleArray;\n\nvar fireCustomEvent = function fireCustomEvent(name, data, bubbles, cancelable) {\n  var ev;\n  var params = {\n    bubbles: bubbles || true,\n    cancelable: cancelable || true,\n    detail: data || null\n  };\n  ev = new CustomEvent(name, params);\n  window.dispatchEvent(ev);\n};\n/**\n * Get the position of the element relative to document or optionally to the nearest offset parent.\n *\n * ```javascript\n * getElementPosition(element); // returns something like { top: 100, left: 500 }\n * ```\n *\n * @param {DOMNode} element Element.\n * @param {Boolean=} toWorld indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True)\n * @returns {Object} the element coordinates.\n */\n\n\nexports.fireCustomEvent = fireCustomEvent;\n\nvar getElementPosition = function getElementPosition(element) {\n  var toWorld = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var offset = {\n    top: 0,\n    left: 0\n  };\n\n  if (toWorld === false) {\n    offset.top = element.offsetTop;\n    offset.left = element.offsetLeft;\n  } else {\n    var positionToViewport = element.getBoundingClientRect();\n    var scrollTop = window.pageYOffset;\n    var scrollLeft = window.pageXOffset;\n    var clientTop = document.body.clientTop || 0;\n    var clientLeft = document.body.clientLeft || 0;\n    offset.top += Math.round(positionToViewport.top + scrollTop - clientTop);\n    offset.left += Math.round(positionToViewport.left + scrollLeft - clientLeft);\n  }\n\n  return offset;\n};\n/**\n * Determines whether the element is a child 0 ancestor of the other.\n * If the toWorld flag is true (default), this will test recursively\n * up the node hierarchy.\n *\n * This method can be used to determine whether a node is detached\n * by something like:\n * ```\n * attached = isChildOf(element, document.body);\n * ```\n * @param {DomNode} element The element to test with\n * @param {DomNode} parentElement The parent element to test against\n * @param {Boolean=} toWorld Whether to test this up the DOM hierarchy\n * @return {Boolean} true is the parentElement is parent (or ancestor) to Element\n */\n\n\nexports.getElementPosition = getElementPosition;\n\nvar isChildOf = function isChildOf(element, parentElement) {\n  var toWorld = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var isChildOf = false;\n\n  if (element.parentNode === parentElement) {\n    isChildOf = true;\n  }\n\n  if (toWorld === true && isChildOf === false && element.parentNode) {\n    isChildOf = isChildOf(element.parentNode, parentElement);\n  }\n\n  return isChildOf;\n};\n/**\n * Get siblings from element\n *\n * ```javascript\n * getSiblings(e);\n * ```\n *\n * @param {DOMElement} e Element\n * @return Returns a list with the element's siblings.\n */\n\n\nexports.isChildOf = isChildOf;\n\nvar getSiblings = function getSiblings(element) {\n  return _toConsumableArray(element.parentNode.children).filter(function (child) {\n    return child !== element;\n  });\n};\n/**\n * Retrieves all of the ancestors of an element, optionally to\n * the document body (true by default). The list that is\n * returned is the list of ancestors in order from the oldest\n * to youngest.\n *\n * @param {DOMElement} e The element to retrieve the ancestors for\n * @param {boolean=} toBody whether to only test to the body (default True)\n * @param {array=} ancestors the list of already existing elements to pass. This is nromally only used internally\n */\n\n\nexports.getSiblings = getSiblings;\n\nvar getAncestors = function getAncestors(e) {\n  var toBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var ancestors = arguments.length > 2 ? arguments[2] : undefined;\n  if (!ancestors) ancestors = [];\n\n  if (toBody === true && e.parentNode === document.body) {\n    return ancestors;\n  }\n\n  if (e.parentNode) {\n    ancestors.splice(0, 0, [e.parentNode]);\n    getAncestors(e.parentNode, toBody, ancestors);\n  }\n\n  return ancestors;\n};\n/**\n * Function to normalize the selctor 'matchesSelector' across browsers\n */\n\n\nexports.getAncestors = getAncestors;\n\nvar matches = function matches() {\n  var doc, matches;\n  doc = document.documentElement;\n  matches = doc.matchesSelector || doc.webkitMatchesSelector || doc.mozMatchesSelector || doc.oMatchesSelector || doc.msMatchesSelector;\n  return matches;\n};\n/**\n * Returns the CSS selector for a provided element\n *\n * @param  {DOMElement}   el         The DOM node to find a selector for\n * @return {String}                  The CSS selector the describes exactly where to find the element\n */\n\n\nexports.matches = matches;\n\nvar getSelectorForElement = function getSelectorForElement(element) {\n  var particles = [];\n\n  while (element.parentNode) {\n    if (element.id) {\n      particles.unshift(\"#\" + element.id);\n      break;\n    } else {\n      if (element == element.ownerDocument.documentElement) particles.unshift(element.tagName);else {\n        for (var c = 1, e = element; e.previousElementSibling; e = e.previousElementSibling, c++) {\n          ;\n        }\n\n        particles.unshift(element.tagName + \":nth-child(\" + c + \")\");\n      }\n      element = element.parentNode;\n    }\n  }\n\n  return particles.join(\" > \");\n};\n/**\n * Fix widows replaces the last space in a sentence with a non-breaking space\n * This function is a little dangerous at the moment so we should revisit it at some point in the future\n */\n\n\nexports.getSelectorForElement = getSelectorForElement;\n\nvar fixWidows = function fixWidows(els) {\n  _els = els;\n\n  if (els instanceof Node) {\n    _els = [els];\n  }\n\n  if (_els && _els.length) {\n    for (var i = 0; i < _els.length; i++) {\n      var el = _els[i];\n\n      if (el instanceof Node) {\n        el.innerHTML = el.innerHTML.replace(/\\s(?=[^\\s]*$)/g, \"&nbsp;\");\n      }\n    }\n  }\n};\n/**\n * Returns the form data as an array of name/value pairs.\n *\n * @param  {DOMElement}   form       The <form> DOM node\n * @return {Array}                   Serialized data\n */\n\n\nexports.fixWidows = fixWidows;\n\nvar serializeArray = function serializeArray(form) {\n  var s = [];\n\n  if (_typeof(form) == \"object\" && form.nodeName == \"FORM\") {\n    for (var i = 0; i < form.elements.length; i++) {\n      var field = form.elements[i];\n\n      if (field.name && !field.disabled && field.type != \"file\" && field.type != \"reset\" && field.type != \"submit\" && field.type != \"button\") {\n        if (field.type == \"select-multiple\") {\n          for (var j = 0; j < form.elements[i].options.length; j++) {\n            if (field.options[j].selected) s[s.length] = {\n              name: field.name,\n              value: field.options[j].value\n            };\n          }\n        } else if (field.type != \"checkbox\" && field.type != \"radio\" || field.checked) {\n          s[s.length] = {\n            name: field.name,\n            value: field.value\n          };\n        }\n      }\n    }\n  }\n\n  return s;\n};\n\nexports.serializeArray = serializeArray;\n\n//# sourceURL=webpack:///./node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js?");

/***/ }),

/***/ "./node_modules/wtc-utility-preloader/dist/wtc-utility-preloader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/wtc-utility-preloader/dist/wtc-utility-preloader.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Simple Preloader\n * Simple preloader to load images using promises or callbacks.\n * Requirements: none\n * Usage:\n * var preloader = new window.wtc.utilities.Preloader();\n * preloader.add('imagename.jpg', 'image');\n *   OR use an ARRAY\n * preloader.add([{file: 'imagename.jpg', type:'image'}, {file: 'imagename.jpg', type:'image'}]);\n * preloader.load(callback);\n */\n\nvar Preloader = function () {\n  function Preloader() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$debug = _ref.debug,\n        debug = _ref$debug === undefined ? false : _ref$debug;\n\n    _classCallCheck(this, Preloader);\n\n    var _files = [];\n    var _loadCounter = 0;\n\n    this.debug = debug;\n\n    this.filesLoading = [];\n    this.callback = function () {};\n\n    this.addFiles = function (file) {\n      _files.push(file);\n    };\n    this.getFiles = function () {\n      return _files;\n    };\n\n    this.incrementLoadCounter = function () {\n      _loadCounter++;\n    };\n    this.getLoadCounter = function () {\n      return _loadCounter;\n    };\n  }\n\n  /**\n   * Add Files to preloader\n   *\n   * @param  {String or Array} files String filename or Array of File Objects\n   */\n\n\n  _createClass(Preloader, [{\n    key: 'add',\n    value: function add(files) {\n      if (typeof files === 'string' || files instanceof String) {\n        var type = arguments[1] || 'image';\n        this.addFiles({\n          file: files,\n          type: type\n        });\n      } else {\n        //appending files array to _files array\n        files.map(this.addFiles);\n      }\n    }\n  }, {\n    key: 'getImageWithPromise',\n    value: function getImageWithPromise(file) {\n      var that = this;\n      return new Promise(function (resolve, reject) {\n        var img = new Image();\n        img.onload = function () {\n          that.incrementLoadCounter();\n          if (that.debug) {\n            console.log(\"i'm loaded: \" + file.file);\n          }\n          resolve(file);\n        };\n        img.onerror = function () {\n          if (that.debug) {\n            console.log(\"file not found: \" + file.file);\n          }\n          resolve(file);\n        };\n        img.src = file.file;\n      });\n    }\n  }, {\n    key: 'loadWithPromises',\n    value: function loadWithPromises(callback) {\n      var that = this;\n      var f = that.getFiles();\n      //create an array of images\n      var imagePromises = f.map(this.getImageWithPromise.bind(this));\n      //wait until all images are loaded.\n      Promise.all(imagePromises).then(function (file) {\n        callback();\n      }).catch(function (err) {\n        if (that.debug) {\n          console.log('there was an error:');\n          console.log('Error Message:');\n          console.log(err.message);\n          console.log('Error Object:');\n          console.log(err);\n        }\n      });\n    }\n  }, {\n    key: 'loadWithCallbacks',\n    value: function loadWithCallbacks(callback) {\n      var f = this.getFiles();\n      for (var num = 0; num < f.length; num++) {\n        if (!f[num].type || f[num].type == 'image') {\n          var img = new Image();\n          img.addEventListener('load', this.onFilesLoaded.bind(this, callback), false);\n          img.addEventListener('error', this.onFilesLoaded.bind(this, callback), false);\n          img.src = f[num].file;\n          this.filesLoading.push(img);\n        }\n      }\n    }\n  }, {\n    key: 'onFilesLoaded',\n    value: function onFilesLoaded(callback) {\n      if (this.debug) {\n        if (event.type === \"load\") {\n          console.log(\"i'm loaded: \" + event.path[0].src);\n        } else {\n          console.log(\"file not found: \" + event.path[0].src);\n        }\n      }\n      this.incrementLoadCounter();\n      if (this.getLoadCounter() === this.filesLoading.length && callback) {\n        callback(this.getFiles());\n      }\n    }\n\n    /**\n     * Trigger preloader to load assets. Call callback function when complete.\n     *\n     * @param  {function} callback - Callback function\n     */\n\n  }, {\n    key: 'load',\n    value: function load(callback) {\n      if (window.Promise) {\n        this.loadWithPromises(callback);\n      } else {\n        this.loadWithCallbacks(callback);\n      }\n    }\n  }]);\n\n  return Preloader;\n}();\n\nexports.default = Preloader;\n\n//# sourceURL=webpack:///./node_modules/wtc-utility-preloader/dist/wtc-utility-preloader.js?");

/***/ }),

/***/ "./src/components/lazy-img/lazy-img.js":
/*!*********************************************!*\
  !*** ./src/components/lazy-img/lazy-img.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar LAZY_IMGS = document.querySelectorAll('img[loading=\"lazy\"]');\nvar DISTANCE_THRESHOLD = 0;\n\nvar lazyImgInit = function lazyImgInit() {\n  if (LAZY_IMGS && LAZY_IMGS.length > 0) {\n    // check if native lazy-loading is supported.\n    // otherwise, fall back to our IntersectionObserver method of loading.\n    if (\"loading\" in HTMLImageElement.prototype) {\n      var _iterator = _createForOfIteratorHelper(LAZY_IMGS),\n          _step;\n\n      try {\n        var _loop = function _loop() {\n          var img = _step.value;\n          img.addEventListener(\"load\", function () {\n            img.classList.add(\"loaded\");\n          }, {\n            once: true\n          });\n          if (img.dataset.src) img.src = img.dataset.src;\n          if (img.dataset.srcset) img.srcset = img.dataset.srcset;\n        };\n\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          _loop();\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    } else {\n      attachObserver();\n    }\n  }\n};\n\nvar observerConfig = {\n  root: null,\n  rootMargin: \"0px 0px \".concat(DISTANCE_THRESHOLD, \"px 0px\"),\n  threshold: 0\n};\n\nvar attachObserver = function attachObserver() {\n  var observer = new IntersectionObserver(function (entries, self) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        loadImage(entry.target);\n        self.unobserve(entry.target);\n      }\n    });\n  }, observerConfig);\n\n  var _iterator2 = _createForOfIteratorHelper(LAZY_IMGS),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var img = _step2.value;\n      observer.observe(img);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\n\nvar loadImage = function loadImage(element) {\n  element.src = element.dataset.src;\n  if (element.dataset.srcset) element.srcset = element.dataset.srcset;\n  element.addEventListener(\"load\", function () {\n    element.classList.add(\"loaded\");\n  }, {\n    once: true\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (lazyImgInit);\n\n//# sourceURL=webpack:///./src/components/lazy-img/lazy-img.js?");

/***/ }),

/***/ "./src/components/main-nav/main-nav.js":
/*!*********************************************!*\
  !*** ./src/components/main-nav/main-nav.js ***!
  \*********************************************/
/*! exports provided: mnInit, mnDestroy */
/*! exports used: mnInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return mnInit; });\n/* unused harmony export mnDestroy */\n/* harmony import */ var wtc_utility_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wtc-utility-helpers */ \"./node_modules/wtc-utility-helpers/dist/wtc-utility-helpers.js\");\n/* harmony import */ var wtc_utility_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wtc_utility_helpers__WEBPACK_IMPORTED_MODULE_0__);\n\nvar MAIN_NAV = document.querySelector(\".main-nav\");\nvar TOGGLER = MAIN_NAV.querySelector(\".main-nav__toggler\");\nvar CLOSE_BTN = MAIN_NAV.querySelector(\".main-nav__close\");\nvar isOpen = false;\nvar init = false;\n\nvar HANDLE_CLICK = function HANDLE_CLICK() {\n  isOpen = !isOpen;\n  TOGGLER.setAttribute(\"aria-expanded\", isOpen);\n  if (isOpen) MAIN_NAV.setAttribute(\"data-open\", isOpen);else MAIN_NAV.removeAttribute(\"data-open\");\n};\n\nvar GET_SCROLL = function GET_SCROLL() {\n  var doc = document.documentElement;\n  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);\n};\n\nvar GET_MIN_TOP = function GET_MIN_TOP() {\n  return Object(wtc_utility_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getElementPosition\"])(MAIN_NAV).top + MAIN_NAV.clientHeight;\n};\n\nvar HANDLE_SCROLL = function HANDLE_SCROLL() {\n  if (GET_SCROLL() > GET_MIN_TOP()) {\n    MAIN_NAV.setAttribute(\"data-fixed\", true);\n  } else {\n    MAIN_NAV.removeAttribute(\"data-fixed\");\n  }\n};\n\nvar mnInit = function mnInit() {\n  if (init) return;\n  init = true;\n\n  if (MAIN_NAV) {\n    TOGGLER.addEventListener(\"click\", HANDLE_CLICK);\n    CLOSE_BTN.addEventListener(\"click\", HANDLE_CLICK);\n    window.addEventListener(\"scroll\", HANDLE_SCROLL);\n  }\n};\n\nvar mnDestroy = function mnDestroy() {\n  if (MAIN_NAV) {\n    TOGGLER.removeEventListener(\"click\", HANDLE_CLICK);\n    CLOSE_BTN.removeEventListener(\"click\", HANDLE_CLICK);\n    window.removeEventListener(\"scroll\", HANDLE_SCROLL);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/components/main-nav/main-nav.js?");

/***/ }),

/***/ "./src/components/reduce-motion/reduce-motion.js":
/*!*******************************************************!*\
  !*** ./src/components/reduce-motion/reduce-motion.js ***!
  \*******************************************************/
/*! exports provided: rmGetState, rmOn, rmOff, rmInit, rmDestroy */
/*! exports used: rmInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export rmGetState */\n/* unused harmony export rmOn */\n/* unused harmony export rmOff */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return rmInit; });\n/* unused harmony export rmDestroy */\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar HTML_EL = document.documentElement;\nvar LOCAL_KEY = \"prefersReducedMotion\";\nvar STATE_CLASS = \"is-reduced-motion\";\nvar buttonList = [];\nvar currentState = localStorage.getItem(LOCAL_KEY);\ncurrentState = currentState ? currentState.toLowerCase() === \"true\" : false;\n\nvar FIRE_EVENT = function FIRE_EVENT() {\n  var EVENT = new CustomEvent(\"wtc-reduce-motion\", {\n    detail: {\n      state: currentState\n    }\n  });\n  window.dispatchEvent(EVENT);\n};\n\nvar TOGGLE = function TOGGLE() {\n  if (currentState) rmOff();else rmOn();\n};\n\nvar MATCH_MEDIA = function MATCH_MEDIA() {\n  return window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n};\n\nvar rmOn = function rmOn() {\n  currentState = true;\n  localStorage.setItem(LOCAL_KEY, currentState);\n  HTML_EL.classList.add(STATE_CLASS);\n  FIRE_EVENT();\n};\n\nvar rmOff = function rmOff() {\n  currentState = false;\n  localStorage.setItem(LOCAL_KEY, currentState);\n  HTML_EL.classList.remove(STATE_CLASS);\n  FIRE_EVENT();\n}; // Returns the current state\n\n\nvar rmGetState = function rmGetState() {\n  var MQ = MATCH_MEDIA();\n  if (MQ) return true;\n  return currentState;\n};\n\nvar rmInit = function rmInit() {\n  var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-controller=\"ReduceMotion\"]';\n  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_13___default()(buttons) === \"object\" && buttons.length <= 0) return;\n  var ELEMENTS = typeof buttons === \"string\" ? document.querySelectorAll(buttons) : buttons;\n  if (!ELEMENTS) return;\n  var MQ = MATCH_MEDIA();\n  var state = rmGetState();\n\n  var _iterator = _createForOfIteratorHelper(ELEMENTS),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var button = _step.value;\n      if (MQ) button.setAttribute(\"hidden\", \"true\");else button.addEventListener(\"click\", TOGGLE);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  buttonList.concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default()(ELEMENTS));\n  if (state) rmOn();else rmOff();\n};\n\nvar rmDestroy = function rmDestroy() {\n  if (buttonList && buttonList.length > 0) {\n    var _iterator2 = _createForOfIteratorHelper(buttonList),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var btn = _step2.value;\n        btn.addEventListener(\"click\", TOGGLE);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    buttonList = [];\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/components/reduce-motion/reduce-motion.js?");

/***/ }),

/***/ "./src/polyfills/rel-preload.js":
/*!**************************************!*\
  !*** ./src/polyfills/rel-preload.js ***!
  \**************************************/
/*! exports provided: default, DOMTokenListSupports */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return linkSupportsPreload; });\n/* unused harmony export DOMTokenListSupports */\nvar DOMTokenListSupports = function DOMTokenListSupports(tokenList, token) {\n  if (!tokenList || !tokenList.supports) {\n    return;\n  }\n\n  try {\n    return tokenList.supports(token);\n  } catch (e) {\n    if (e instanceof TypeError) {\n      console.log(\"The DOMTokenList doesn't have a supported tokens list\");\n    } else {\n      console.error(\"That shouldn't have happened\");\n    }\n  }\n};\n\nvar linkSupportsPreload = DOMTokenListSupports(document.createElement(\"link\").relList, \"preload\");\n\n\n//# sourceURL=webpack:///./src/polyfills/rel-preload.js?");

/***/ }),

/***/ "./src/website/assets/js/global.js":
/*!*****************************************!*\
  !*** ./src/website/assets/js/global.js ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var wtc_controller_viewports__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! wtc-controller-viewports */ \"./node_modules/wtc-controller-viewports/dist/wtc-controller-viewports.js\");\n/* harmony import */ var wtc_controller_viewports__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(wtc_controller_viewports__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var wtc_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! wtc-gallery-component */ \"./node_modules/wtc-gallery-component/dist/wtc-gallery-component.min.js\");\n/* harmony import */ var wtc_gallery_component__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(wtc_gallery_component__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var wtc_autoplay_video__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! wtc-autoplay-video */ \"./node_modules/wtc-autoplay-video/dist/wtc-autoplay-video.min.js\");\n/* harmony import */ var wtc_autoplay_video__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(wtc_autoplay_video__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _polyfills_rel_preload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../polyfills/rel-preload */ \"./src/polyfills/rel-preload.js\");\n/* harmony import */ var _components_reduce_motion_reduce_motion_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/reduce-motion/reduce-motion.js */ \"./src/components/reduce-motion/reduce-motion.js\");\n/* harmony import */ var _components_main_nav_main_nav_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/main-nav/main-nav.js */ \"./src/components/main-nav/main-nav.js\");\n/* harmony import */ var _components_lazy_img_lazy_img_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/lazy-img/lazy-img.js */ \"./src/components/lazy-img/lazy-img.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n // The browser doesn't support preload of styles so we append it\n\nif (!_polyfills_rel_preload__WEBPACK_IMPORTED_MODULE_14__[/* default */ \"a\"]) {\n  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('[rel=\"preload\"][as=\"style\"]')),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var link = _step.value;\n      link.setAttribute(\"rel\", \"stylesheet\");\n      link.onload = null;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n} // Set reduce motion\n\n\nObject(_components_reduce_motion_reduce_motion_js__WEBPACK_IMPORTED_MODULE_15__[/* rmInit */ \"a\"])(); // main nav\n\nObject(_components_main_nav_main_nav_js__WEBPACK_IMPORTED_MODULE_16__[/* mnInit */ \"a\"])(); // Lazy Images\n\nObject(_components_lazy_img_lazy_img_js__WEBPACK_IMPORTED_MODULE_17__[/* default */ \"a\"])(); // Viewports\n\nvar vpElements = document.querySelectorAll('[data-controller=\"Viewport\"]');\n\nif (vpElements && vpElements.length > 0) {\n  var _iterator2 = _createForOfIteratorHelper(vpElements),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var element = _step2.value;\n      new wtc_controller_viewports__WEBPACK_IMPORTED_MODULE_11___default.a(element);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n} // Gallery\n\n\nvar galleryElements = document.querySelectorAll('[data-controller=\"Gallery\"]');\n\nif (galleryElements && galleryElements.length > 0) {\n  var _iterator3 = _createForOfIteratorHelper(galleryElements),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var _element = _step3.value;\n      new wtc_gallery_component__WEBPACK_IMPORTED_MODULE_12___default.a(_element, {\n        nav: true,\n        draggable: true,\n        nextBtnMarkup: _element.querySelector(\".gallery__nav-markup--next\").innerHTML,\n        prevBtnMarkup: _element.querySelector(\".gallery__nav-markup--prev\").innerHTML\n      });\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n} // Autoplay Videos\n\n\nvar autoplayVids = document.querySelectorAll(\".autoplay-video\");\n\nvar _iterator4 = _createForOfIteratorHelper(autoplayVids),\n    _step4;\n\ntry {\n  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n    var _element2 = _step4.value;\n    new wtc_autoplay_video__WEBPACK_IMPORTED_MODULE_13___default.a(_element2);\n  }\n} catch (err) {\n  _iterator4.e(err);\n} finally {\n  _iterator4.f();\n}\n\n//# sourceURL=webpack:///./src/website/assets/js/global.js?");

/***/ })

},[["./src/website/assets/js/global.js","runtime"]]]);