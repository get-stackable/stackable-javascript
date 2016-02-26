(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Stackable"] = factory();
	else
		root["Stackable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Stackable = function () {
	  function Stackable(token) {
	    _classCallCheck(this, Stackable);
	
	    this._token = token;
	    this._apiUrl = 'http://api.stackable.space/v1/';
	  }
	
	  _createClass(Stackable, [{
	    key: 'getContainers',
	    value: function getContainers(callback) {
	      this._get('containers', function (err, res) {
	        callback(err, res);
	      });
	    }
	  }, {
	    key: 'getContainer',
	    value: function getContainer(containerId, callback) {
	      this._get('containers/' + containerId, function (err, res) {
	        callback(err, res);
	      });
	    }
	  }, {
	    key: 'getContainerItems',
	    value: function getContainerItems(containerId, callback) {
	      this._get('containers/' + containerId + '/items', function (err, res) {
	        callback(err, res);
	      });
	    }
	  }, {
	    key: 'getAllItem',
	    value: function getAllItem(callback) {
	      this._get('items', function (err, res) {
	        callback(err, res);
	      });
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem(itemId, callback) {
	      this._get('items/' + itemId, function (err, res) {
	        callback(err, res);
	      });
	    }
	  }, {
	    key: '_get',
	    value: function _get(path, callback) {
	      $.ajax({
	        url: this._apiUrl + path + '?token=' + this._token,
	        context: document.body,
	        success: function success(result) {
	          callback(null, result);
	        },
	        error: function error(err) {
	          callback(err, null);
	        }
	      });
	    }
	  }]);
	
	  return Stackable;
	}();
	
	module.exports = Stackable;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=stackable-javascript.js.map