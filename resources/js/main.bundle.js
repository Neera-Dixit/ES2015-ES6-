/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Remind = __webpack_require__(1);

	$(document).ready(function () {

	  var remindInputText = void 0,
	      rem = void 0,
	      remindtext = void 0,
	      date = void 0,
	      storedData = new Set();

	  $("#remindbtn").on('click', function () {
	    remindInputText = $("#remindText").val();
	    rem = new _Remind.Reminder(remindInputText, date);
	    remindtext = '<div>"' + rem.msg + '" ,create on ' + rem.time + '</div>';
	    date = new Date($.now());
	    storedData.add(remindtext);

	    if (remindText !== "") {
	      $("#reminderSec").append(remindtext);
	    } else {
	      console.log("No reminder");
	    }
	  });

	  $("#displayrems").on('click', function () {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {

	      for (var _iterator = storedData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var msg = _step.value;

	        console.log(msg);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Reminder = function () {
		function Reminder(msg, time) {
			_classCallCheck(this, Reminder);

			this.msg = msg;
			this.time = time;
		}

		_createClass(Reminder, [{
			key: "saveReminder",
			value: function saveReminder() {}
		}, {
			key: "displayReminder",
			value: function displayReminder() {
				console.log(this.time + " : " + this.msg);
			}
		}]);

		return Reminder;
	}();

	exports.Reminder = Reminder;

/***/ }
/******/ ]);