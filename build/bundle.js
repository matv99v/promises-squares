/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _loadImages = __webpack_require__(2);
	
	var _loadImages2 = _interopRequireDefault(_loadImages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _loadImages2.default)();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var loadImages = function loadImages() {
	
	    var adresses = ['http://www.our-happy-cat.com/images/fearful-cat.jpg', 'http://www.our-happy-cat.com/images/350xNxangry-cat-eyes.jpg.pagespeed.ic.mPb_mu73Jm.jpg', 'http://www.our-happy-cat.com/images/250xNxdefensive-cat.jpg.pagespeed.ic.16XwjHxgmG.jpg'];
	
	    var addImage = function addImage(img) {
	        document.body.appendChild(img);
	    };
	
	    var loadImage = function loadImage(url) {
	        return new Promise(function (resolve, reject) {
	            var catImg = new Image();
	            catImg.src = url;
	
	            catImg.onload = function () {
	                return resolve(catImg);
	            };
	            catImg.onerror = function () {
	                return reject(new Error('no way!'));
	            };
	        });
	    };
	
	    Promise.all([loadImage(adresses[0]), loadImage(adresses[1]), loadImage(adresses[2])]).then(function (images) {
	        images.forEach(function (img) {
	            return addImage(img);
	        });
	    }).catch(function (e) {
	        return document.write(e);
	    });
	};
	
	exports.default = loadImages;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map