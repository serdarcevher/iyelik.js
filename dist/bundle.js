var tpsh =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/utils */ \"./src/library/utils.js\");\n/* harmony import */ var _library_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_library_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _library_suffixes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/suffixes */ \"./src/library/suffixes.js\");\n/* harmony import */ var _sample_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-words */ \"./src/sample-words.js\");\n/* harmony import */ var _sample_words__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sample_words__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nString.prototype.iyelik = function (person) {\n    return new turkishPossessiveSuffixHandler().getPossessedVersion(person, this);\n};\n\nclass turkishPossessiveSuffixHandler {\n\n    constructor() {\n        this.utils = new _library_utils__WEBPACK_IMPORTED_MODULE_0___default.a.handler();\n        this.suffixes = new _library_suffixes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n\n    getPossessedVersion (person, content) {\n        if (content == \"su\")// the only exception...\n            content+= \"y\"\n\n        this.person = person;\n\n        this.phrase = {};\n        this.phrase.content = content;\n        this.phrase.lastLetter = this.utils.getLastLetter(this.phrase.content.toLocaleLowerCase('tr'));\n        this.phrase.endsWithConsonant = !this.utils.vowels.includes(this.phrase.lastLetter);\n\n        if (this.phrase.endsWithConsonant) {\n            //this.phrase.content = this.getMutatedPhrase(this.phrase.content);\n        }\n\n\n        this.suffix = this.suffixes.get(this.person, this.phrase);\n\n        return this.phrase.content + this.suffix;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    populateSamples: function () {\n        _sample_words__WEBPACK_IMPORTED_MODULE_2___default.a.populate();\n    },\n});\n\n//# sourceURL=webpack://tpsh/./src/index.js?");

/***/ }),

/***/ "./src/library/suffixes.js":
/*!*********************************!*\
  !*** ./src/library/suffixes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/library/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass handler {\n\n    constructor() {\n        this.utils = new _utils__WEBPACK_IMPORTED_MODULE_0___default.a.handler();\n    }\n\n    getAllForPerson (person, endsWithConsonant) {\n    \n        switch (person) {\n            case 'ben':\n            case 'benim':\n                if (endsWithConsonant) {\n                    return ['ım', 'im', 'um', 'üm'];\n                    break;\n                }\n                return ['m', 'm', 'm', 'm'];\n                break;\n\n            case 'sen':\n            case 'senin':\n                if (endsWithConsonant) {\n                    return ['ın', 'in', 'un', 'ün'];\n                    break;\n                }\n                return ['n', 'n', 'n', 'n'];\n                break;\n\n            case 'o':\n            case 'onun':\n            case 'onlar':\n            case 'onların':\n                if (endsWithConsonant) {\n                    return ['ı', 'i', 'u', 'ü'];\n                    break;\n                }\n                return ['sı', 'si', 'su', 'sü'];\n                break;\n\n            case 'biz':\n            case 'bizim':\n                if (endsWithConsonant) {\n                    return ['ımız', 'imiz', 'umuz', 'ümüz'];\n                    break;\n                }\n                return ['mız', 'miz', 'muz', 'müz'];\n                break;\n\n            case 'siz':\n            case 'sizin':\n                if (endsWithConsonant) {\n                    return ['ınız', 'iniz', 'unuz', 'ünüz'];\n                    break;\n                }\n                return ['nız', 'niz', 'nuz', 'nüz'];\n                break;\n        }\n    }\n\n    get (person, phrase) {\n        let suffixes = this.getAllForPerson(person, phrase.endsWithConsonant)\n        let lastVowel = this.utils.getLastVowel(phrase.content);\n\n        let index = 0;\n        switch (lastVowel.toLocaleLowerCase('tr')) {\n            case 'a':\n            case 'ı':\n                index = 0;\n                break;\n\n            case 'e':\n            case 'i':\n                index = 1;\n                break;\n\n            case 'o':\n            case 'u':\n                index = 2;\n                break;\n\n            case 'ö':\n            case 'ü':\n                index = 3;\n                break;\n\n        }\n\n        return suffixes[index];\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);\n\n//# sourceURL=webpack://tpsh/./src/library/suffixes.js?");

/***/ }),

/***/ "./src/library/utils.js":
/*!******************************!*\
  !*** ./src/library/utils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class handler {\n    constructor() {\n        this.vowels = 'aeıioöuü';\n    }\n    \n    getLastLetter(phrase) {\n        return phrase.charAt(phrase.length - 1);\n    }\n\n    getLastConsonant(phrase) {\n        let i = 1;\n        let lastConsonant = this.getLastLetter(phrase);\n\n        while (this.vowels.includes(lastConsonant)) {\n\n            lastConsonant = phrase.charAt(phrase.length - i);\n            i++;\n            if (i > phrase.length+1) {\n                break;\n            }\n        }\n\n        return lastConsonant;\n    }\n\n    getLastVowel(phrase) {\n        let i = 1;\n        let lastVowel = this.getLastLetter(phrase);\n\n        while (!this.vowels.includes(lastVowel)) {\n\n            lastVowel = phrase.charAt(phrase.length - i);\n            i++;\n            if (i > phrase.length+1) {\n                break;\n            }\n        }\n\n        return lastVowel;\n    }\n}\n\nexports.handler = handler;\n\n//# sourceURL=webpack://tpsh/./src/library/utils.js?");

/***/ }),

/***/ "./src/sample-words.js":
/*!*****************************!*\
  !*** ./src/sample-words.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const samples = [\n    'hikaye',\n    'toprak',\n    'bisiklet',\n    'bilgisayar',\n    'kabak',\n    'renk',\n    'semizotu',\n    'koltuk',\n    'hak',\n    'hukuk',\n    'adalet',\n    'kelam',\n    'kek',\n    'televizyon',\n    'kulaklık'\n];\n\nexports.getRandomWord = () => {\n    return samples[Math.floor(Math.random() * samples.length)];\n}\n\nexports.populate = () => {\n    let buttons = '';\n    samples.forEach(sample => {\n        buttons+= \"<button class=\\\"sample-button\\\">\" + sample + \"</button>\";\n    })\n    document.getElementById('samples').innerHTML = buttons; \n}\n\nexports.samples = samples;\n\n//# sourceURL=webpack://tpsh/./src/sample-words.js?");

/***/ })

/******/ });