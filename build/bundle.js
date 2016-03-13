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
	
	var _delayFunc = __webpack_require__(3);
	
	var _delayFunc2 = _interopRequireDefault(_delayFunc);
	
	var _animation = __webpack_require__(4);
	
	var _animation2 = _interopRequireDefault(_animation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// loadImages();
	// delayFunc();
	
	document.getElementById('btn').addEventListener('click', function () {
	    var sq = document.getElementById('squareNum').value;
	    var dur = document.getElementById('animationDur').value;
	
	    while (document.body.firstChild) {
	        document.body.removeChild(document.body.firstChild);
	    }
	
	    (0, _animation2.default)(sq, dur);
	});

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	
	    var foo = function foo() {
	        return Math.floor(Math.random() * 10);
	    };
	
	    var delayed = function delayed(fn, ms) {
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                resolve(fn());
	            }, ms);
	        });
	    };
	
	    console.log('start!');
	    delayed(foo, 2000).then(function (result) {
	        console.log(result);
	        return delayed(foo, 3000);
	    }).then(function (res) {
	        return console.log(res);
	    });
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (divsPerLine, generalDurationMs) {
	
	    var colors = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff', '#00bfff', '#0080ff', '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000'];
	
	    document.body.style.margin = '0';
	
	    var squareDimmension = window.innerWidth / divsPerLine;
	    var rows = Math.floor(window.innerHeight / squareDimmension);
	    var numOfDivs = divsPerLine * rows;
	    var drawFrequencyMs = generalDurationMs / numOfDivs;
	    var divs = [];
	
	    for (var i = 0; i < numOfDivs; i++) {
	        divs.push(null);
	    }
	
	    var createDiv = function createDiv(color) {
	        var square = document.createElement('div');
	        square.style.width = squareDimmension + 'px';
	        square.style.height = squareDimmension + 'px';
	        square.style.display = 'inline-block';
	        square.style.float = 'left';
	        square.style.backgroundColor = color;
	        document.body.appendChild(square);
	    };
	
	    function waitAndDrawDiv(color) {
	        return new Promise(function (resolve) {
	            setTimeout(function () {
	                createDiv(color);
	                resolve();
	            }, drawFrequencyMs);
	        });
	    }
	
	    divs.reduce(function (accumulation, curr, ind) {
	        var curColor = colors[ind % colors.length];
	        return accumulation.then(function () {
	            return waitAndDrawDiv(curColor);
	        });
	    }, Promise.resolve());
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map