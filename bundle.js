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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_canvas_fit__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_canvas_fit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_canvas_fit__);
//import vizplex from 'vizplex'


var rgbaFns = [
  ['sin(1/n(x/256,y/256,t/2))','n(r,x/256,y/256)','sin(r/g)/100','0.6'],
  ['n(x/256,y/256,t)','sin(r*x/64+r*y/64)','1','0.6'],
  ['n(x/32+y/32, sin(x*y/128)/2, t*10)', 'r', 'r', '0.6']
]
var canvas = $('#bg-canvas')
var fn = rgbaFns[Math.floor(Math.random() * rgbaFns.length)]

// avoid tiny canvas flash
__WEBPACK_IMPORTED_MODULE_0_canvas_fit___default()(canvas)

// ensure mobile fits canvas
setTimeout(function () {
  __WEBPACK_IMPORTED_MODULE_0_canvas_fit___default()(canvas)
}, 200)
vizplex(canvas, fn, {
  timeFactor: 0.05
})
window.addEventListener('resize', function () {
  __WEBPACK_IMPORTED_MODULE_0_canvas_fit___default()(canvas)
})

function $ (selector) {
  return document.querySelector(selector)
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var size = __webpack_require__(2)

module.exports = fit

var scratch = new Float32Array(2)

function fit(canvas, parent, scale) {
  var isSVG = canvas.nodeName.toUpperCase() === 'SVG'

  canvas.style.position = canvas.style.position || 'absolute'
  canvas.style.top = 0
  canvas.style.left = 0

  resize.scale  = parseFloat(scale || 1)
  resize.parent = parent

  return resize()

  function resize() {
    var p = resize.parent || canvas.parentNode
    if (typeof p === 'function') {
      var dims   = p(scratch) || scratch
      var width  = dims[0]
      var height = dims[1]
    } else
    if (p && p !== document.body) {
      var psize  = size(p)
      var width  = psize[0]|0
      var height = psize[1]|0
    } else {
      var width  = window.innerWidth
      var height = window.innerHeight
    }

    if (isSVG) {
      canvas.setAttribute('width', width * resize.scale + 'px')
      canvas.setAttribute('height', height * resize.scale + 'px')
    } else {
      canvas.width = width * resize.scale
      canvas.height = height * resize.scale
    }

    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'

    return resize
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = getSize

function getSize(element) {
  // Handle cases where the element is not already
  // attached to the DOM by briefly appending it
  // to document.body, and removing it again later.
  if (element === window || element === document.body) {
    return [window.innerWidth, window.innerHeight]
  }

  if (!element.parentNode) {
    var temporary = true
    document.body.appendChild(element)
  }

  var bounds = element.getBoundingClientRect()
  var styles = getComputedStyle(element)
  var height = (bounds.height|0)
    + parse(styles.getPropertyValue('margin-top'))
    + parse(styles.getPropertyValue('margin-bottom'))
  var width  = (bounds.width|0)
    + parse(styles.getPropertyValue('margin-left'))
    + parse(styles.getPropertyValue('margin-right'))

  if (temporary) {
    document.body.removeChild(element)
  }

  return [width, height]
}

function parse(prop) {
  return parseFloat(prop) || 0
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTYxMjI3YTBkY2JjN2U5ZWNjYWEiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NhbnZhcy1maXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtc2l6ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7Ozs7OztBQzNCQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQy9DQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNjEyMjdhMGRjYmM3ZTllY2NhYSIsIi8vaW1wb3J0IHZpenBsZXggZnJvbSAndml6cGxleCdcbmltcG9ydCBmaXQgZnJvbSAnY2FudmFzLWZpdCdcblxudmFyIHJnYmFGbnMgPSBbXG4gIFsnc2luKDEvbih4LzI1Nix5LzI1Nix0LzIpKScsJ24ocix4LzI1Nix5LzI1NiknLCdzaW4oci9nKS8xMDAnLCcwLjYnXSxcbiAgWyduKHgvMjU2LHkvMjU2LHQpJywnc2luKHIqeC82NCtyKnkvNjQpJywnMScsJzAuNiddLFxuICBbJ24oeC8zMit5LzMyLCBzaW4oeCp5LzEyOCkvMiwgdCoxMCknLCAncicsICdyJywgJzAuNiddXG5dXG52YXIgY2FudmFzID0gJCgnI2JnLWNhbnZhcycpXG52YXIgZm4gPSByZ2JhRm5zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJnYmFGbnMubGVuZ3RoKV1cblxuLy8gYXZvaWQgdGlueSBjYW52YXMgZmxhc2hcbmZpdChjYW52YXMpXG5cbi8vIGVuc3VyZSBtb2JpbGUgZml0cyBjYW52YXNcbnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICBmaXQoY2FudmFzKVxufSwgMjAwKVxudml6cGxleChjYW52YXMsIGZuLCB7XG4gIHRpbWVGYWN0b3I6IDAuMDVcbn0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICBmaXQoY2FudmFzKVxufSlcblxuZnVuY3Rpb24gJCAoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RvY3Mvc2NyaXB0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaXplID0gcmVxdWlyZSgnZWxlbWVudC1zaXplJylcblxubW9kdWxlLmV4cG9ydHMgPSBmaXRcblxudmFyIHNjcmF0Y2ggPSBuZXcgRmxvYXQzMkFycmF5KDIpXG5cbmZ1bmN0aW9uIGZpdChjYW52YXMsIHBhcmVudCwgc2NhbGUpIHtcbiAgdmFyIGlzU1ZHID0gY2FudmFzLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTVkcnXG5cbiAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gY2FudmFzLnN0eWxlLnBvc2l0aW9uIHx8ICdhYnNvbHV0ZSdcbiAgY2FudmFzLnN0eWxlLnRvcCA9IDBcbiAgY2FudmFzLnN0eWxlLmxlZnQgPSAwXG5cbiAgcmVzaXplLnNjYWxlICA9IHBhcnNlRmxvYXQoc2NhbGUgfHwgMSlcbiAgcmVzaXplLnBhcmVudCA9IHBhcmVudFxuXG4gIHJldHVybiByZXNpemUoKVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgcCA9IHJlc2l6ZS5wYXJlbnQgfHwgY2FudmFzLnBhcmVudE5vZGVcbiAgICBpZiAodHlwZW9mIHAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBkaW1zICAgPSBwKHNjcmF0Y2gpIHx8IHNjcmF0Y2hcbiAgICAgIHZhciB3aWR0aCAgPSBkaW1zWzBdXG4gICAgICB2YXIgaGVpZ2h0ID0gZGltc1sxXVxuICAgIH0gZWxzZVxuICAgIGlmIChwICYmIHAgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIHZhciBwc2l6ZSAgPSBzaXplKHApXG4gICAgICB2YXIgd2lkdGggID0gcHNpemVbMF18MFxuICAgICAgdmFyIGhlaWdodCA9IHBzaXplWzFdfDBcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHdpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKGlzU1ZHKSB7XG4gICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoICogcmVzaXplLnNjYWxlICsgJ3B4JylcbiAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCAqIHJlc2l6ZS5zY2FsZSArICdweCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoICogcmVzaXplLnNjYWxlXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogcmVzaXplLnNjYWxlXG4gICAgfVxuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcblxuICAgIHJldHVybiByZXNpemVcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2FudmFzLWZpdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGdldFNpemVcblxuZnVuY3Rpb24gZ2V0U2l6ZShlbGVtZW50KSB7XG4gIC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgZWxlbWVudCBpcyBub3QgYWxyZWFkeVxuICAvLyBhdHRhY2hlZCB0byB0aGUgRE9NIGJ5IGJyaWVmbHkgYXBwZW5kaW5nIGl0XG4gIC8vIHRvIGRvY3VtZW50LmJvZHksIGFuZCByZW1vdmluZyBpdCBhZ2FpbiBsYXRlci5cbiAgaWYgKGVsZW1lbnQgPT09IHdpbmRvdyB8fCBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XVxuICB9XG5cbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB2YXIgdGVtcG9yYXJ5ID0gdHJ1ZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgfVxuXG4gIHZhciBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHZhciBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gIHZhciBoZWlnaHQgPSAoYm91bmRzLmhlaWdodHwwKVxuICAgICsgcGFyc2Uoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSlcbiAgICArIHBhcnNlKHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpXG4gIHZhciB3aWR0aCAgPSAoYm91bmRzLndpZHRofDApXG4gICAgKyBwYXJzZShzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSlcbiAgICArIHBhcnNlKHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSlcblxuICBpZiAodGVtcG9yYXJ5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICB9XG5cbiAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XVxufVxuXG5mdW5jdGlvbiBwYXJzZShwcm9wKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHByb3ApIHx8IDBcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtc2l6ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9