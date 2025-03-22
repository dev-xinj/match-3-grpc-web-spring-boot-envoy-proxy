/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Đảm bảo trang web có chiều cao đầy đủ và căn giữa */

/* src/css/style.css */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin: 0;
    background-size: cover;
    background-position: center center;
    /* Căn giữa hình nền */
    background-repeat: no-repeat;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    flex-direction: column;
}

/* Container cho game và các phần tử con */
.game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.canvas-frame {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
    margin-bottom: 30px;
    font-size: 5em;
    color: #c71212;
}

.score-box {
    font-weight: 900;
    font-size: 50px;
    margin-bottom: 20px;
    color: #0744b6;
}

#canvas {
    background-position: center center;
    background-color: #e3e3e3;
    border: 2px solid #333;
    box-sizing: border-box;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,sDAAsD;;AAEtD,sBAAsB;AACtB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,sBAAsB;IACtB,kCAAkC;IAClC,sBAAsB;IACtB,4BAA4B;IAC5B,yBAAyB;IACzB,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA,0CAA0C;AAC1C;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,kCAAkC;IAClC,yBAAyB;IACzB,sBAAsB;IACtB,sBAAsB;AAC1B","sourcesContent":["/* Đảm bảo trang web có chiều cao đầy đủ và căn giữa */\r\n\r\n/* src/css/style.css */\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 80vh;\r\n    margin: 0;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    /* Căn giữa hình nền */\r\n    background-repeat: no-repeat;\r\n    background-color: #f0f0f0;\r\n    font-family: Arial, sans-serif;\r\n    flex-direction: column;\r\n}\r\n\r\n/* Container cho game và các phần tử con */\r\n.game {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 20px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.canvas-frame {\r\n    padding: 20px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 30px;\r\n    font-size: 5em;\r\n    color: #c71212;\r\n}\r\n\r\n.score-box {\r\n    font-weight: 900;\r\n    font-size: 50px;\r\n    margin-bottom: 20px;\r\n    color: #0744b6;\r\n}\r\n\r\n#canvas {\r\n    background-position: center center;\r\n    background-color: #e3e3e3;\r\n    border: 2px solid #333;\r\n    box-sizing: border-box;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/google-protobuf/google-protobuf.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-protobuf/google-protobuf.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof __webpack_require__.g&&null!=__webpack_require__.g?__webpack_require__.g:this;function ba(a,b){if(b){var c=e;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function da(){da=function(){};e.Symbol||(e.Symbol=ea)}function fa(a,b){this.a=a;aa(this,"description",{configurable:!0,writable:!0,value:b})}fa.prototype.toString=function(){return this.a};var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function ha(){da();var a=e.Symbol.iterator;a||(a=e.Symbol.iterator=e.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}});ha=function(){}}function ia(a){ha();a={next:a};a[e.Symbol.iterator]=function(){return this};return a}
function ja(a,b){ha();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}ba("Array.prototype.entries",function(a){return a?a:function(){return ja(this,function(b,c){return[b,c]})}});var ka=this||self;
function g(a,b,c){a=a.split(".");c=c||ka;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ma(a,b,c){g(a,b,c)}function na(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var h=0;h<oa.length;h++)c=oa[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},l=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),f="string"===typeof a?a.split(""):a,h=0;h<c;h++)h in f&&(d[h]=b.call(void 0,f[h],h,a));return d};
function ra(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};function sa(a,b,c,d){var f="Assertion failed";if(c){f+=": "+c;var h=d}else a&&(f+=": "+a,h=b);throw Error(f,h||[]);}function n(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];a||sa("",null,b,d);return a}function ta(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];"string"!==typeof a&&sa("Expected string but got %s: %s.",[k(a),a],b,d)}
function ua(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];Array.isArray(a)||sa("Expected array but got %s: %s.",[k(a),a],b,d)}function p(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];throw Error("Failure"+(a?": "+a:""),c);}function q(a,b,c,d){for(var f=[],h=3;h<arguments.length;++h)f[h-3]=arguments[h];a instanceof b||sa("Expected instanceof %s but got %s.",[va(b),va(a)],c,f)}
function va(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};function r(a,b){this.c=a;this.b=b;this.a={};this.arrClean=!0;if(0<this.c.length){for(a=0;a<this.c.length;a++){b=this.c[a];var c=b[0];this.a[c.toString()]=new wa(c,b[1])}this.arrClean=!0}}g("jspb.Map",r,void 0);
r.prototype.g=function(){if(this.arrClean){if(this.b){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.g()}}}else{this.c.length=0;a=u(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.g();this.c.push([d.key,d.value])}this.arrClean=!0}return this.c};r.prototype.toArray=r.prototype.g;
r.prototype.Mc=function(a,b){for(var c=this.g(),d=[],f=0;f<c.length;f++){var h=this.a[c[f][0].toString()];v(this,h);var m=h.a;m?(n(b),d.push([h.key,b(a,m)])):d.push([h.key,h.value])}return d};r.prototype.toObject=r.prototype.Mc;r.fromObject=function(a,b,c){b=new r([],b);for(var d=0;d<a.length;d++){var f=a[d][0],h=c(a[d][1]);b.set(f,h)}return b};function w(a){this.a=0;this.b=a}w.prototype.next=function(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(w.prototype[Symbol.iterator]=function(){return this});r.prototype.Jb=function(){return u(this).length};r.prototype.getLength=r.prototype.Jb;r.prototype.clear=function(){this.a={};this.arrClean=!1};r.prototype.clear=r.prototype.clear;r.prototype.Cb=function(a){a=a.toString();var b=this.a.hasOwnProperty(a);delete this.a[a];this.arrClean=!1;return b};r.prototype.del=r.prototype.Cb;
r.prototype.Eb=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,d.value])}return a};r.prototype.getEntryList=r.prototype.Eb;r.prototype.entries=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,v(this,d)])}return new w(a)};r.prototype.entries=r.prototype.entries;r.prototype.keys=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new w(a)};
r.prototype.keys=r.prototype.keys;r.prototype.values=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(v(this,this.a[b[c]]));return new w(a)};r.prototype.values=r.prototype.values;r.prototype.forEach=function(a,b){var c=u(this);c.sort();for(var d=0;d<c.length;d++){var f=this.a[c[d]];a.call(b,v(this,f),f.key,this)}};r.prototype.forEach=r.prototype.forEach;
r.prototype.set=function(a,b){var c=new wa(a);this.b?(c.a=b,c.value=b.g()):c.value=b;this.a[a.toString()]=c;this.arrClean=!1;return this};r.prototype.set=r.prototype.set;function v(a,b){return a.b?(b.a||(b.a=new a.b(b.value)),b.a):b.value}r.prototype.get=function(a){if(a=this.a[a.toString()])return v(this,a)};r.prototype.get=r.prototype.get;r.prototype.has=function(a){return a.toString()in this.a};r.prototype.has=r.prototype.has;
r.prototype.Jc=function(a,b,c,d,f){var h=u(this);h.sort();for(var m=0;m<h.length;m++){var t=this.a[h[m]];b.Va(a);c.call(b,1,t.key);this.b?d.call(b,2,v(this,t),f):d.call(b,2,t.value);b.Ya()}};r.prototype.serializeBinary=r.prototype.Jc;r.deserializeBinary=function(a,b,c,d,f,h,m){for(;b.oa()&&!b.bb();){var t=b.c;1==t?h=c.call(b):2==t&&(a.b?(n(f),m||(m=new a.b),d.call(b,m,f)):m=d.call(b))}n(void 0!=h);n(void 0!=m);a.set(h,m)};
function u(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function wa(a,b){this.key=a;this.value=b;this.a=void 0};function xa(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)b+=String.fromCharCode.apply(null,ra(a,c,c+8192));return b};var ya={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},za={"'":"\\'"};var Aa={},x=null;function Ba(a,b){void 0===b&&(b=0);Ca();b=Aa[b];for(var c=[],d=0;d<a.length;d+=3){var f=a[d],h=d+1<a.length,m=h?a[d+1]:0,t=d+2<a.length,B=t?a[d+2]:0,M=f>>2;f=(f&3)<<4|m>>4;m=(m&15)<<2|B>>6;B&=63;t||(B=64,h||(m=64));c.push(b[M],b[f],b[m]||"",b[B]||"")}return c.join("")}function Da(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Ea(a,function(h){d[f++]=h});return d.subarray(0,f)}
function Ea(a,b){function c(B){for(;d<a.length;){var M=a.charAt(d++),La=x[M];if(null!=La)return La;if(!/^[\s\xa0]*$/.test(M))throw Error("Unknown base64 encoding at char: "+M);}return B}Ca();for(var d=0;;){var f=c(-1),h=c(0),m=c(64),t=c(64);if(64===t&&-1===f)break;b(f<<2|h>>4);64!=m&&(b(h<<4&240|m>>2),64!=t&&b(m<<6&192|t))}}
function Ca(){if(!x){x={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Aa[c]=d;for(var f=0;f<d.length;f++){var h=d[f];void 0===x[h]&&(x[h]=f)}}}};g("jspb.ConstBinaryMessage",function(){},void 0);g("jspb.BinaryMessage",function(){},void 0);g("jspb.BinaryConstants.FieldType",{yb:-1,ee:1,FLOAT:2,ke:3,te:4,je:5,xb:6,wb:7,BOOL:8,re:9,ie:10,le:11,ce:12,se:13,ge:14,me:15,ne:16,oe:17,pe:18,he:30,ve:31},void 0);g("jspb.BinaryConstants.WireType",{yb:-1,ue:0,xb:1,de:2,qe:3,fe:4,wb:5},void 0);
g("jspb.BinaryConstants.FieldTypeToWireType",function(a){switch(a){case 5:case 3:case 13:case 4:case 17:case 18:case 8:case 14:case 31:return 0;case 1:case 6:case 16:case 30:return 1;case 9:case 11:case 12:return 2;case 2:case 7:case 15:return 5;default:return-1}},void 0);g("jspb.BinaryConstants.INVALID_FIELD_NUMBER",-1,void 0);g("jspb.BinaryConstants.FLOAT32_EPS",1.401298464324817E-45,void 0);g("jspb.BinaryConstants.FLOAT32_MIN",1.1754943508222875E-38,void 0);
g("jspb.BinaryConstants.FLOAT32_MAX",3.4028234663852886E38,void 0);g("jspb.BinaryConstants.FLOAT64_EPS",4.9E-324,void 0);g("jspb.BinaryConstants.FLOAT64_MIN",2.2250738585072014E-308,void 0);g("jspb.BinaryConstants.FLOAT64_MAX",1.7976931348623157E308,void 0);g("jspb.BinaryConstants.TWO_TO_20",1048576,void 0);g("jspb.BinaryConstants.TWO_TO_23",8388608,void 0);g("jspb.BinaryConstants.TWO_TO_31",2147483648,void 0);g("jspb.BinaryConstants.TWO_TO_32",4294967296,void 0);
g("jspb.BinaryConstants.TWO_TO_52",4503599627370496,void 0);g("jspb.BinaryConstants.TWO_TO_63",0x7fffffffffffffff,void 0);g("jspb.BinaryConstants.TWO_TO_64",1.8446744073709552E19,void 0);g("jspb.BinaryConstants.ZERO_HASH","\x00\x00\x00\x00\x00\x00\x00\x00",void 0);var y=0,z=0;g("jspb.utils.getSplit64Low",function(){return y},void 0);g("jspb.utils.getSplit64High",function(){return z},void 0);function Fa(a){var b=a>>>0;a=Math.floor((a-b)/4294967296)>>>0;y=b;z=a}g("jspb.utils.splitUint64",Fa,void 0);function A(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));y=c;z=a}g("jspb.utils.splitInt64",A,void 0);
function Ga(a){var b=0>a;a=2*Math.abs(a);Fa(a);a=y;var c=z;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);y=a;z=c}g("jspb.utils.splitZigzag64",Ga,void 0);
function Ha(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?y=z=0:(z=0,y=2147483648);else if(isNaN(a))z=0,y=2147483647;else if(3.4028234663852886E38<a)z=0,y=(b<<31|2139095040)>>>0;else if(1.1754943508222875E-38>a)a=Math.round(a/Math.pow(2,-149)),z=0,y=(b<<31|a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(8388608*a);16777216<=a&&++c;z=0;y=(b<<31|c+127<<23|a&8388607)>>>0}}g("jspb.utils.splitFloat32",Ha,void 0);
function Ia(a){var b=0>a?1:0;a=b?-a:a;if(0===a)z=0<1/a?0:2147483648,y=0;else if(isNaN(a))z=2147483647,y=4294967295;else if(1.7976931348623157E308<a)z=(b<<31|2146435072)>>>0,y=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),z=(b<<31|a/4294967296)>>>0,y=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);z=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;y=4503599627370496*a>>>0}}g("jspb.utils.splitFloat64",Ia,void 0);
function C(a){var b=a.charCodeAt(4),c=a.charCodeAt(5),d=a.charCodeAt(6),f=a.charCodeAt(7);y=a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)>>>0;z=b+(c<<8)+(d<<16)+(f<<24)>>>0}g("jspb.utils.splitHash64",C,void 0);function D(a,b){return 4294967296*b+(a>>>0)}g("jspb.utils.joinUint64",D,void 0);function E(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=D(a,b);return c?-a:a}g("jspb.utils.joinInt64",E,void 0);
function Ja(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)}g("jspb.utils.toZigzag64",Ja,void 0);function Ka(a,b){return Ma(a,b,E)}g("jspb.utils.joinZigzag64",Ka,void 0);function Ma(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)}g("jspb.utils.fromZigzag64",Ma,void 0);function Na(a){var b=2*(a>>31)+1,c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))}g("jspb.utils.joinFloat32",Na,void 0);
function Oa(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=4294967296*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+4503599627370496)}g("jspb.utils.joinFloat64",Oa,void 0);function Pa(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)}g("jspb.utils.joinHash64",Pa,void 0);g("jspb.utils.DIGITS","0123456789abcdef".split(""),void 0);
function F(a,b){function c(f,h){f=f?String(f):"";return h?"0000000".slice(f.length)+f:f}if(2097151>=b)return""+D(a,b);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)}g("jspb.utils.joinUnsignedDecimalString",F,void 0);function G(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=F(a,b);return c?"-"+a:a}
g("jspb.utils.joinSignedDecimalString",G,void 0);function Qa(a,b){C(a);a=y;var c=z;return b?G(a,c):F(a,c)}g("jspb.utils.hash64ToDecimalString",Qa,void 0);g("jspb.utils.hash64ArrayToDecimalStrings",function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Qa(a[d],b);return c},void 0);
function H(a){function b(m,t){for(var B=0;8>B&&(1!==m||0<t);B++)t=m*f[B]+t,f[B]=t&255,t>>>=8}function c(){for(var m=0;8>m;m++)f[m]=~f[m]&255}n(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var f=[0,0,0,0,0,0,0,0],h=0;h<a.length;h++)b(10,a.charCodeAt(h)-48);d&&(c(),b(1,1));return xa(f)}g("jspb.utils.decimalStringToHash64",H,void 0);g("jspb.utils.splitDecimalString",function(a){C(H(a))},void 0);function Ra(a){return String.fromCharCode(10>a?48+a:87+a)}
function Sa(a){return 97<=a?a-97+10:a-48}g("jspb.utils.hash64ToHexString",function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=Ra(d>>4);b[2*c+3]=Ra(d&15)}return b.join("")},void 0);g("jspb.utils.hexStringToHash64",function(a){a=a.toLowerCase();n(18==a.length);n("0"==a[0]);n("x"==a[1]);for(var b="",c=0;8>c;c++)b=String.fromCharCode(16*Sa(a.charCodeAt(2*c+2))+Sa(a.charCodeAt(2*c+3)))+b;return b},void 0);
g("jspb.utils.hash64ToNumber",function(a,b){C(a);a=y;var c=z;return b?E(a,c):D(a,c)},void 0);g("jspb.utils.numberToHash64",function(a){A(a);return Pa(y,z)},void 0);g("jspb.utils.countVarints",function(a,b,c){for(var d=0,f=b;f<c;f++)d+=a[f]>>7;return c-b-d},void 0);
g("jspb.utils.countVarintFields",function(a,b,c,d){var f=0;d*=8;if(128>d)for(;b<c&&a[b++]==d;)for(f++;;){var h=a[b++];if(0==(h&128))break}else for(;b<c;){for(h=d;128<h;){if(a[b]!=(h&127|128))return f;b++;h>>=7}if(a[b++]!=h)break;for(f++;h=a[b++],0!=(h&128););}return f},void 0);function Ta(a,b,c,d,f){var h=0;if(128>d)for(;b<c&&a[b++]==d;)h++,b+=f;else for(;b<c;){for(var m=d;128<m;){if(a[b++]!=(m&127|128))return h;m>>=7}if(a[b++]!=m)break;h++;b+=f}return h}
g("jspb.utils.countFixed32Fields",function(a,b,c,d){return Ta(a,b,c,8*d+5,4)},void 0);g("jspb.utils.countFixed64Fields",function(a,b,c,d){return Ta(a,b,c,8*d+1,8)},void 0);g("jspb.utils.countDelimitedFields",function(a,b,c,d){var f=0;for(d=8*d+2;b<c;){for(var h=d;128<h;){if(a[b++]!=(h&127|128))return f;h>>=7}if(a[b++]!=h)break;f++;for(var m=0,t=1;h=a[b++],m+=(h&127)*t,t*=128,0!=(h&128););b+=m}return f},void 0);
g("jspb.utils.debugBytesToTextFormat",function(a){var b='"';if(a){a=Ua(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'},void 0);
g("jspb.utils.debugScalarToTextFormat",function(a){if("string"===typeof a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),f=d.charCodeAt(0),h=c+1,m;if(!(m=ya[d])){if(!(31<f&&127>f))if(f=d,f in za)d=za[f];else if(f in ya)d=za[f]=ya[f];else{m=f.charCodeAt(0);if(31<m&&127>m)d=f;else{if(256>m){if(d="\\x",16>m||256<m)d+="0"}else d="\\u",4096>m&&(d+="0");d+=m.toString(16).toUpperCase()}d=za[f]=d}m=d}b[h]=m}b.push('"');a=b.join("")}else a=a.toString();return a},void 0);
g("jspb.utils.stringToByteArray",function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b},void 0);
function Ua(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer)return new Uint8Array(a);if(a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return Da(a);if(a instanceof Uint8Array)return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);p("Type not convertible to Uint8Array.");return new Uint8Array(0)}g("jspb.utils.byteSourceToUint8Array",Ua,void 0);function I(a,b,c){this.b=null;this.a=this.c=this.h=0;this.v=!1;a&&this.H(a,b,c)}g("jspb.BinaryDecoder",I,void 0);var Va=[];I.getInstanceCacheLength=function(){return Va.length};function Wa(a,b,c){if(Va.length){var d=Va.pop();a&&d.H(a,b,c);return d}return new I(a,b,c)}I.alloc=Wa;I.prototype.Ca=function(){this.clear();100>Va.length&&Va.push(this)};I.prototype.free=I.prototype.Ca;I.prototype.clone=function(){return Wa(this.b,this.h,this.c-this.h)};I.prototype.clone=I.prototype.clone;
I.prototype.clear=function(){this.b=null;this.a=this.c=this.h=0;this.v=!1};I.prototype.clear=I.prototype.clear;I.prototype.Y=function(){return this.b};I.prototype.getBuffer=I.prototype.Y;I.prototype.H=function(a,b,c){this.b=Ua(a);this.h=void 0!==b?b:0;this.c=void 0!==c?this.h+c:this.b.length;this.a=this.h};I.prototype.setBlock=I.prototype.H;I.prototype.Db=function(){return this.c};I.prototype.getEnd=I.prototype.Db;I.prototype.setEnd=function(a){this.c=a};I.prototype.setEnd=I.prototype.setEnd;
I.prototype.reset=function(){this.a=this.h};I.prototype.reset=I.prototype.reset;I.prototype.B=function(){return this.a};I.prototype.getCursor=I.prototype.B;I.prototype.Ma=function(a){this.a=a};I.prototype.setCursor=I.prototype.Ma;I.prototype.advance=function(a){this.a+=a;n(this.a<=this.c)};I.prototype.advance=I.prototype.advance;I.prototype.ya=function(){return this.a==this.c};I.prototype.atEnd=I.prototype.ya;I.prototype.Qb=function(){return this.a>this.c};I.prototype.pastEnd=I.prototype.Qb;
I.prototype.getError=function(){return this.v||0>this.a||this.a>this.c};I.prototype.getError=I.prototype.getError;I.prototype.w=function(a){for(var b=128,c=0,d=0,f=0;4>f&&128<=b;f++)b=this.b[this.a++],c|=(b&127)<<7*f;128<=b&&(b=this.b[this.a++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(f=0;5>f&&128<=b;f++)b=this.b[this.a++],d|=(b&127)<<7*f+3;if(128>b)return a(c>>>0,d>>>0);p("Failed to read varint, encoding is invalid.");this.v=!0};I.prototype.readSplitVarint64=I.prototype.w;
I.prototype.ea=function(a){return this.w(function(b,c){return Ma(b,c,a)})};I.prototype.readSplitZigzagVarint64=I.prototype.ea;I.prototype.ta=function(a){var b=this.b,c=this.a;this.a+=8;for(var d=0,f=0,h=c+7;h>=c;h--)d=d<<8|b[h],f=f<<8|b[h+4];return a(d,f)};I.prototype.readSplitFixed64=I.prototype.ta;I.prototype.kb=function(){for(;this.b[this.a]&128;)this.a++;this.a++};I.prototype.skipVarint=I.prototype.kb;I.prototype.mb=function(a){for(;128<a;)this.a--,a>>>=7;this.a--};I.prototype.unskipVarint=I.prototype.mb;
I.prototype.o=function(){var a=this.b;var b=a[this.a];var c=b&127;if(128>b)return this.a+=1,n(this.a<=this.c),c;b=a[this.a+1];c|=(b&127)<<7;if(128>b)return this.a+=2,n(this.a<=this.c),c;b=a[this.a+2];c|=(b&127)<<14;if(128>b)return this.a+=3,n(this.a<=this.c),c;b=a[this.a+3];c|=(b&127)<<21;if(128>b)return this.a+=4,n(this.a<=this.c),c;b=a[this.a+4];c|=(b&15)<<28;if(128>b)return this.a+=5,n(this.a<=this.c),c>>>0;this.a+=5;128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=
a[this.a++]&&n(!1);n(this.a<=this.c);return c};I.prototype.readUnsignedVarint32=I.prototype.o;I.prototype.da=function(){return~~this.o()};I.prototype.readSignedVarint32=I.prototype.da;I.prototype.O=function(){return this.o().toString()};I.prototype.Ea=function(){return this.da().toString()};I.prototype.readSignedVarint32String=I.prototype.Ea;I.prototype.Ia=function(){var a=this.o();return a>>>1^-(a&1)};I.prototype.readZigzagVarint32=I.prototype.Ia;I.prototype.Ga=function(){return this.w(D)};
I.prototype.readUnsignedVarint64=I.prototype.Ga;I.prototype.Ha=function(){return this.w(F)};I.prototype.readUnsignedVarint64String=I.prototype.Ha;I.prototype.sa=function(){return this.w(E)};I.prototype.readSignedVarint64=I.prototype.sa;I.prototype.Fa=function(){return this.w(G)};I.prototype.readSignedVarint64String=I.prototype.Fa;I.prototype.Ja=function(){return this.w(Ka)};I.prototype.readZigzagVarint64=I.prototype.Ja;I.prototype.fb=function(){return this.ea(Pa)};
I.prototype.readZigzagVarintHash64=I.prototype.fb;I.prototype.Ka=function(){return this.ea(G)};I.prototype.readZigzagVarint64String=I.prototype.Ka;I.prototype.Gc=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a};I.prototype.readUint8=I.prototype.Gc;I.prototype.Ec=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return a<<0|b<<8};I.prototype.readUint16=I.prototype.Ec;
I.prototype.m=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return(a<<0|b<<8|c<<16|d<<24)>>>0};I.prototype.readUint32=I.prototype.m;I.prototype.ga=function(){var a=this.m(),b=this.m();return D(a,b)};I.prototype.readUint64=I.prototype.ga;I.prototype.ha=function(){var a=this.m(),b=this.m();return F(a,b)};I.prototype.readUint64String=I.prototype.ha;
I.prototype.Xb=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a<<24>>24};I.prototype.readInt8=I.prototype.Xb;I.prototype.Vb=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return(a<<0|b<<8)<<16>>16};I.prototype.readInt16=I.prototype.Vb;I.prototype.P=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return a<<0|b<<8|c<<16|d<<24};I.prototype.readInt32=I.prototype.P;
I.prototype.ba=function(){var a=this.m(),b=this.m();return E(a,b)};I.prototype.readInt64=I.prototype.ba;I.prototype.ca=function(){var a=this.m(),b=this.m();return G(a,b)};I.prototype.readInt64String=I.prototype.ca;I.prototype.aa=function(){var a=this.m();return Na(a,0)};I.prototype.readFloat=I.prototype.aa;I.prototype.Z=function(){var a=this.m(),b=this.m();return Oa(a,b)};I.prototype.readDouble=I.prototype.Z;I.prototype.pa=function(){return!!this.b[this.a++]};I.prototype.readBool=I.prototype.pa;
I.prototype.ra=function(){return this.da()};I.prototype.readEnum=I.prototype.ra;
I.prototype.fa=function(a){var b=this.b,c=this.a;a=c+a;for(var d=[],f="";c<a;){var h=b[c++];if(128>h)d.push(h);else if(192>h)continue;else if(224>h){var m=b[c++];d.push((h&31)<<6|m&63)}else if(240>h){m=b[c++];var t=b[c++];d.push((h&15)<<12|(m&63)<<6|t&63)}else if(248>h){m=b[c++];t=b[c++];var B=b[c++];h=(h&7)<<18|(m&63)<<12|(t&63)<<6|B&63;h-=65536;d.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=d.length&&(f+=String.fromCharCode.apply(null,d),d.length=0)}f+=xa(d);this.a=c;return f};
I.prototype.readString=I.prototype.fa;I.prototype.Dc=function(){var a=this.o();return this.fa(a)};I.prototype.readStringWithLength=I.prototype.Dc;I.prototype.qa=function(a){if(0>a||this.a+a>this.b.length)return this.v=!0,p("Invalid byte length!"),new Uint8Array(0);var b=this.b.subarray(this.a,this.a+a);this.a+=a;n(this.a<=this.c);return b};I.prototype.readBytes=I.prototype.qa;I.prototype.ia=function(){return this.w(Pa)};I.prototype.readVarintHash64=I.prototype.ia;
I.prototype.$=function(){var a=this.b,b=this.a,c=a[b],d=a[b+1],f=a[b+2],h=a[b+3],m=a[b+4],t=a[b+5],B=a[b+6];a=a[b+7];this.a+=8;return String.fromCharCode(c,d,f,h,m,t,B,a)};I.prototype.readFixedHash64=I.prototype.$;function J(a,b,c){this.a=Wa(a,b,c);this.O=this.a.B();this.b=this.c=-1;this.h=!1;this.v=null}g("jspb.BinaryReader",J,void 0);var K=[];J.clearInstanceCache=function(){K=[]};J.getInstanceCacheLength=function(){return K.length};function Xa(a,b,c){if(K.length){var d=K.pop();a&&d.a.H(a,b,c);return d}return new J(a,b,c)}J.alloc=Xa;J.prototype.zb=Xa;J.prototype.alloc=J.prototype.zb;J.prototype.Ca=function(){this.a.clear();this.b=this.c=-1;this.h=!1;this.v=null;100>K.length&&K.push(this)};
J.prototype.free=J.prototype.Ca;J.prototype.Fb=function(){return this.O};J.prototype.getFieldCursor=J.prototype.Fb;J.prototype.B=function(){return this.a.B()};J.prototype.getCursor=J.prototype.B;J.prototype.Y=function(){return this.a.Y()};J.prototype.getBuffer=J.prototype.Y;J.prototype.Hb=function(){return this.c};J.prototype.getFieldNumber=J.prototype.Hb;J.prototype.Lb=function(){return this.b};J.prototype.getWireType=J.prototype.Lb;J.prototype.Mb=function(){return 2==this.b};
J.prototype.isDelimited=J.prototype.Mb;J.prototype.bb=function(){return 4==this.b};J.prototype.isEndGroup=J.prototype.bb;J.prototype.getError=function(){return this.h||this.a.getError()};J.prototype.getError=J.prototype.getError;J.prototype.H=function(a,b,c){this.a.H(a,b,c);this.b=this.c=-1};J.prototype.setBlock=J.prototype.H;J.prototype.reset=function(){this.a.reset();this.b=this.c=-1};J.prototype.reset=J.prototype.reset;J.prototype.advance=function(a){this.a.advance(a)};J.prototype.advance=J.prototype.advance;
J.prototype.oa=function(){if(this.a.ya())return!1;if(this.getError())return p("Decoder hit an error"),!1;this.O=this.a.B();var a=this.a.o(),b=a>>>3;a&=7;if(0!=a&&5!=a&&1!=a&&2!=a&&3!=a&&4!=a)return p("Invalid wire type: %s (at position %s)",a,this.O),this.h=!0,!1;this.c=b;this.b=a;return!0};J.prototype.nextField=J.prototype.oa;J.prototype.Oa=function(){this.a.mb(this.c<<3|this.b)};J.prototype.unskipHeader=J.prototype.Oa;
J.prototype.Lc=function(){var a=this.c;for(this.Oa();this.oa()&&this.c==a;)this.C();this.a.ya()||this.Oa()};J.prototype.skipMatchingFields=J.prototype.Lc;J.prototype.lb=function(){0!=this.b?(p("Invalid wire type for skipVarintField"),this.C()):this.a.kb()};J.prototype.skipVarintField=J.prototype.lb;J.prototype.gb=function(){if(2!=this.b)p("Invalid wire type for skipDelimitedField"),this.C();else{var a=this.a.o();this.a.advance(a)}};J.prototype.skipDelimitedField=J.prototype.gb;
J.prototype.hb=function(){5!=this.b?(p("Invalid wire type for skipFixed32Field"),this.C()):this.a.advance(4)};J.prototype.skipFixed32Field=J.prototype.hb;J.prototype.ib=function(){1!=this.b?(p("Invalid wire type for skipFixed64Field"),this.C()):this.a.advance(8)};J.prototype.skipFixed64Field=J.prototype.ib;J.prototype.jb=function(){var a=this.c;do{if(!this.oa()){p("Unmatched start-group tag: stream EOF");this.h=!0;break}if(4==this.b){this.c!=a&&(p("Unmatched end-group tag"),this.h=!0);break}this.C()}while(1)};
J.prototype.skipGroup=J.prototype.jb;J.prototype.C=function(){switch(this.b){case 0:this.lb();break;case 1:this.ib();break;case 2:this.gb();break;case 5:this.hb();break;case 3:this.jb();break;default:p("Invalid wire encoding for field.")}};J.prototype.skipField=J.prototype.C;J.prototype.Hc=function(a,b){null===this.v&&(this.v={});n(!this.v[a]);this.v[a]=b};J.prototype.registerReadCallback=J.prototype.Hc;J.prototype.Ic=function(a){n(null!==this.v);a=this.v[a];n(a);return a(this)};
J.prototype.runReadCallback=J.prototype.Ic;J.prototype.Yb=function(a,b){n(2==this.b);var c=this.a.c,d=this.a.o();d=this.a.B()+d;this.a.setEnd(d);b(a,this);this.a.Ma(d);this.a.setEnd(c)};J.prototype.readMessage=J.prototype.Yb;J.prototype.Ub=function(a,b,c){n(3==this.b);n(this.c==a);c(b,this);this.h||4==this.b||(p("Group submessage did not end with an END_GROUP tag"),this.h=!0)};J.prototype.readGroup=J.prototype.Ub;
J.prototype.Gb=function(){n(2==this.b);var a=this.a.o(),b=this.a.B(),c=b+a;a=Wa(this.a.Y(),b,a);this.a.Ma(c);return a};J.prototype.getFieldDecoder=J.prototype.Gb;J.prototype.P=function(){n(0==this.b);return this.a.da()};J.prototype.readInt32=J.prototype.P;J.prototype.Wb=function(){n(0==this.b);return this.a.Ea()};J.prototype.readInt32String=J.prototype.Wb;J.prototype.ba=function(){n(0==this.b);return this.a.sa()};J.prototype.readInt64=J.prototype.ba;J.prototype.ca=function(){n(0==this.b);return this.a.Fa()};
J.prototype.readInt64String=J.prototype.ca;J.prototype.m=function(){n(0==this.b);return this.a.o()};J.prototype.readUint32=J.prototype.m;J.prototype.Fc=function(){n(0==this.b);return this.a.O()};J.prototype.readUint32String=J.prototype.Fc;J.prototype.ga=function(){n(0==this.b);return this.a.Ga()};J.prototype.readUint64=J.prototype.ga;J.prototype.ha=function(){n(0==this.b);return this.a.Ha()};J.prototype.readUint64String=J.prototype.ha;J.prototype.zc=function(){n(0==this.b);return this.a.Ia()};
J.prototype.readSint32=J.prototype.zc;J.prototype.Ac=function(){n(0==this.b);return this.a.Ja()};J.prototype.readSint64=J.prototype.Ac;J.prototype.Bc=function(){n(0==this.b);return this.a.Ka()};J.prototype.readSint64String=J.prototype.Bc;J.prototype.Rb=function(){n(5==this.b);return this.a.m()};J.prototype.readFixed32=J.prototype.Rb;J.prototype.Sb=function(){n(1==this.b);return this.a.ga()};J.prototype.readFixed64=J.prototype.Sb;J.prototype.Tb=function(){n(1==this.b);return this.a.ha()};
J.prototype.readFixed64String=J.prototype.Tb;J.prototype.vc=function(){n(5==this.b);return this.a.P()};J.prototype.readSfixed32=J.prototype.vc;J.prototype.wc=function(){n(5==this.b);return this.a.P().toString()};J.prototype.readSfixed32String=J.prototype.wc;J.prototype.xc=function(){n(1==this.b);return this.a.ba()};J.prototype.readSfixed64=J.prototype.xc;J.prototype.yc=function(){n(1==this.b);return this.a.ca()};J.prototype.readSfixed64String=J.prototype.yc;
J.prototype.aa=function(){n(5==this.b);return this.a.aa()};J.prototype.readFloat=J.prototype.aa;J.prototype.Z=function(){n(1==this.b);return this.a.Z()};J.prototype.readDouble=J.prototype.Z;J.prototype.pa=function(){n(0==this.b);return!!this.a.o()};J.prototype.readBool=J.prototype.pa;J.prototype.ra=function(){n(0==this.b);return this.a.sa()};J.prototype.readEnum=J.prototype.ra;J.prototype.fa=function(){n(2==this.b);var a=this.a.o();return this.a.fa(a)};J.prototype.readString=J.prototype.fa;
J.prototype.qa=function(){n(2==this.b);var a=this.a.o();return this.a.qa(a)};J.prototype.readBytes=J.prototype.qa;J.prototype.ia=function(){n(0==this.b);return this.a.ia()};J.prototype.readVarintHash64=J.prototype.ia;J.prototype.Cc=function(){n(0==this.b);return this.a.fb()};J.prototype.readSintHash64=J.prototype.Cc;J.prototype.w=function(a){n(0==this.b);return this.a.w(a)};J.prototype.readSplitVarint64=J.prototype.w;
J.prototype.ea=function(a){n(0==this.b);return this.a.w(function(b,c){return Ma(b,c,a)})};J.prototype.readSplitZigzagVarint64=J.prototype.ea;J.prototype.$=function(){n(1==this.b);return this.a.$()};J.prototype.readFixedHash64=J.prototype.$;J.prototype.ta=function(a){n(1==this.b);return this.a.ta(a)};J.prototype.readSplitFixed64=J.prototype.ta;function L(a,b){n(2==a.b);var c=a.a.o();c=a.a.B()+c;for(var d=[];a.a.B()<c;)d.push(b.call(a.a));return d}J.prototype.gc=function(){return L(this,this.a.da)};
J.prototype.readPackedInt32=J.prototype.gc;J.prototype.hc=function(){return L(this,this.a.Ea)};J.prototype.readPackedInt32String=J.prototype.hc;J.prototype.ic=function(){return L(this,this.a.sa)};J.prototype.readPackedInt64=J.prototype.ic;J.prototype.jc=function(){return L(this,this.a.Fa)};J.prototype.readPackedInt64String=J.prototype.jc;J.prototype.qc=function(){return L(this,this.a.o)};J.prototype.readPackedUint32=J.prototype.qc;J.prototype.rc=function(){return L(this,this.a.O)};
J.prototype.readPackedUint32String=J.prototype.rc;J.prototype.sc=function(){return L(this,this.a.Ga)};J.prototype.readPackedUint64=J.prototype.sc;J.prototype.tc=function(){return L(this,this.a.Ha)};J.prototype.readPackedUint64String=J.prototype.tc;J.prototype.nc=function(){return L(this,this.a.Ia)};J.prototype.readPackedSint32=J.prototype.nc;J.prototype.oc=function(){return L(this,this.a.Ja)};J.prototype.readPackedSint64=J.prototype.oc;J.prototype.pc=function(){return L(this,this.a.Ka)};
J.prototype.readPackedSint64String=J.prototype.pc;J.prototype.bc=function(){return L(this,this.a.m)};J.prototype.readPackedFixed32=J.prototype.bc;J.prototype.cc=function(){return L(this,this.a.ga)};J.prototype.readPackedFixed64=J.prototype.cc;J.prototype.dc=function(){return L(this,this.a.ha)};J.prototype.readPackedFixed64String=J.prototype.dc;J.prototype.kc=function(){return L(this,this.a.P)};J.prototype.readPackedSfixed32=J.prototype.kc;J.prototype.lc=function(){return L(this,this.a.ba)};
J.prototype.readPackedSfixed64=J.prototype.lc;J.prototype.mc=function(){return L(this,this.a.ca)};J.prototype.readPackedSfixed64String=J.prototype.mc;J.prototype.fc=function(){return L(this,this.a.aa)};J.prototype.readPackedFloat=J.prototype.fc;J.prototype.$b=function(){return L(this,this.a.Z)};J.prototype.readPackedDouble=J.prototype.$b;J.prototype.Zb=function(){return L(this,this.a.pa)};J.prototype.readPackedBool=J.prototype.Zb;J.prototype.ac=function(){return L(this,this.a.ra)};
J.prototype.readPackedEnum=J.prototype.ac;J.prototype.uc=function(){return L(this,this.a.ia)};J.prototype.readPackedVarintHash64=J.prototype.uc;J.prototype.ec=function(){return L(this,this.a.$)};J.prototype.readPackedFixedHash64=J.prototype.ec;function Ya(a,b,c,d,f){this.ma=a;this.Ba=b;this.la=c;this.Na=d;this.na=f}g("jspb.ExtensionFieldInfo",Ya,void 0);function Za(a,b,c,d,f,h){this.Za=a;this.za=b;this.Aa=c;this.Wa=d;this.Ab=f;this.Nb=h}g("jspb.ExtensionFieldBinaryInfo",Za,void 0);Ya.prototype.F=function(){return!!this.la};Ya.prototype.isMessageType=Ya.prototype.F;function N(){}g("jspb.Message",N,void 0);N.GENERATE_TO_OBJECT=!0;N.GENERATE_FROM_OBJECT=!0;var $a="function"==typeof Uint8Array;N.prototype.Ib=function(){return this.b};
N.prototype.getJsPbMessageId=N.prototype.Ib;
N.initialize=function(a,b,c,d,f,h){a.f=null;b||(b=c?[c]:[]);a.b=c?String(c):void 0;a.D=0===c?-1:0;a.u=b;a:{c=a.u.length;b=-1;if(c&&(b=c-1,c=a.u[b],!(null===c||"object"!=typeof c||Array.isArray(c)||$a&&c instanceof Uint8Array))){a.G=b-a.D;a.i=c;break a}-1<d?(a.G=Math.max(d,b+1-a.D),a.i=null):a.G=Number.MAX_VALUE}a.a={};if(f)for(d=0;d<f.length;d++)b=f[d],b<a.G?(b+=a.D,a.u[b]=a.u[b]||ab):(bb(a),a.i[b]=a.i[b]||ab);if(h&&h.length)for(d=0;d<h.length;d++)cb(a,h[d])};
var ab=Object.freeze?Object.freeze([]):[];function bb(a){var b=a.G+a.D;a.u[b]||(a.i=a.u[b]={})}function db(a,b,c){for(var d=[],f=0;f<a.length;f++)d[f]=b.call(a[f],c,a[f]);return d}N.toObjectList=db;N.toObjectExtension=function(a,b,c,d,f){for(var h in c){var m=c[h],t=d.call(a,m);if(null!=t){for(var B in m.Ba)if(m.Ba.hasOwnProperty(B))break;b[B]=m.Na?m.na?db(t,m.Na,f):m.Na(f,t):t}}};
N.serializeBinaryExtensions=function(a,b,c,d){for(var f in c){var h=c[f],m=h.Za;if(!h.Aa)throw Error("Message extension present that was generated without binary serialization support");var t=d.call(a,m);if(null!=t)if(m.F())if(h.Wa)h.Aa.call(b,m.ma,t,h.Wa);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");else h.Aa.call(b,m.ma,t)}};
N.readBinaryExtension=function(a,b,c,d,f){var h=c[b.c];if(h){c=h.Za;if(!h.za)throw Error("Deserializing extension whose generated code does not support binary format");if(c.F()){var m=new c.la;h.za.call(b,m,h.Ab)}else m=h.za.call(b);c.na&&!h.Nb?(b=d.call(a,c))?b.push(m):f.call(a,c,[m]):f.call(a,c,m)}else b.C()};function O(a,b){if(b<a.G){b+=a.D;var c=a.u[b];return c===ab?a.u[b]=[]:c}if(a.i)return c=a.i[b],c===ab?a.i[b]=[]:c}N.getField=O;N.getRepeatedField=function(a,b){return O(a,b)};
function eb(a,b){a=O(a,b);return null==a?a:+a}N.getOptionalFloatingPointField=eb;function fb(a,b){a=O(a,b);return null==a?a:!!a}N.getBooleanField=fb;N.getRepeatedFloatingPointField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.a[b]=!0}return c};N.getRepeatedBooleanField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.a[b]=!0}return c};
function gb(a){if(null==a||"string"===typeof a)return a;if($a&&a instanceof Uint8Array)return Ba(a);p("Cannot coerce to b64 string: "+k(a));return null}N.bytesAsB64=gb;function hb(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return Da(a);p("Cannot coerce to Uint8Array: "+k(a));return null}N.bytesAsU8=hb;N.bytesListAsB64=function(a){ib(a);return a.length&&"string"!==typeof a[0]?l(a,gb):a};N.bytesListAsU8=function(a){ib(a);return!a.length||a[0]instanceof Uint8Array?a:l(a,hb)};
function ib(a){if(a&&1<a.length){var b=k(a[0]);qa(a,function(c){k(c)!=b&&p("Inconsistent type in JSPB repeated field array. Got "+k(c)+" expected "+b)})}}function jb(a,b,c){a=O(a,b);return null==a?c:a}N.getFieldWithDefault=jb;N.getBooleanFieldWithDefault=function(a,b,c){a=fb(a,b);return null==a?c:a};N.getFloatingPointFieldWithDefault=function(a,b,c){a=eb(a,b);return null==a?c:a};N.getFieldProto3=jb;
N.getMapField=function(a,b,c,d){a.f||(a.f={});if(b in a.f)return a.f[b];var f=O(a,b);if(!f){if(c)return;f=[];P(a,b,f)}return a.f[b]=new r(f,d)};function P(a,b,c){q(a,N);b<a.G?a.u[b+a.D]=c:(bb(a),a.i[b]=c);return a}N.setField=P;N.setProto3IntField=function(a,b,c){return Q(a,b,c,0)};N.setProto3FloatField=function(a,b,c){return Q(a,b,c,0)};N.setProto3BooleanField=function(a,b,c){return Q(a,b,c,!1)};N.setProto3StringField=function(a,b,c){return Q(a,b,c,"")};
N.setProto3BytesField=function(a,b,c){return Q(a,b,c,"")};N.setProto3EnumField=function(a,b,c){return Q(a,b,c,0)};N.setProto3StringIntField=function(a,b,c){return Q(a,b,c,"0")};function Q(a,b,c,d){q(a,N);c!==d?P(a,b,c):b<a.G?a.u[b+a.D]=null:(bb(a),delete a.i[b]);return a}N.addToRepeatedField=function(a,b,c,d){q(a,N);b=O(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};function kb(a,b,c,d){q(a,N);(c=cb(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),P(a,c,void 0));return P(a,b,d)}
N.setOneofField=kb;function cb(a,b){for(var c,d,f=0;f<b.length;f++){var h=b[f],m=O(a,h);null!=m&&(c=h,d=m,P(a,h,void 0))}return c?(P(a,c,d),c):0}N.computeOneofCase=cb;N.getWrapperField=function(a,b,c,d){a.f||(a.f={});if(!a.f[c]){var f=O(a,c);if(d||f)a.f[c]=new b(f)}return a.f[c]};N.getRepeatedWrapperField=function(a,b,c){lb(a,b,c);b=a.f[c];b==ab&&(b=a.f[c]=[]);return b};function lb(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=O(a,c),f=[],h=0;h<d.length;h++)f[h]=new b(d[h]);a.f[c]=f}}
N.setWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});var d=c?c.g():c;a.f[b]=c;return P(a,b,d)};N.setOneofWrapperField=function(a,b,c,d){q(a,N);a.f||(a.f={});var f=d?d.g():d;a.f[b]=d;return kb(a,b,c,f)};N.setRepeatedWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});c=c||[];for(var d=[],f=0;f<c.length;f++)d[f]=c[f].g();a.f[b]=c;return P(a,b,d)};
N.addToRepeatedWrapperField=function(a,b,c,d,f){lb(a,d,b);var h=a.f[b];h||(h=a.f[b]=[]);c=c?c:new d;a=O(a,b);void 0!=f?(h.splice(f,0,c),a.splice(f,0,c.g())):(h.push(c),a.push(c.g()));return c};N.toMap=function(a,b,c,d){for(var f={},h=0;h<a.length;h++)f[b.call(a[h])]=c?c.call(a[h],d,a[h]):a[h];return f};function mb(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].g();else c&&c.g()}}N.prototype.g=function(){mb(this);return this.u};
N.prototype.toArray=N.prototype.g;N.prototype.toString=function(){mb(this);return this.u.toString()};N.prototype.getExtension=function(a){if(this.i){this.f||(this.f={});var b=a.ma;if(a.na){if(a.F())return this.f[b]||(this.f[b]=l(this.i[b]||[],function(c){return new a.la(c)})),this.f[b]}else if(a.F())return!this.f[b]&&this.i[b]&&(this.f[b]=new a.la(this.i[b])),this.f[b];return this.i[b]}};N.prototype.getExtension=N.prototype.getExtension;
N.prototype.Kc=function(a,b){this.f||(this.f={});bb(this);var c=a.ma;a.na?(b=b||[],a.F()?(this.f[c]=b,this.i[c]=l(b,function(d){return d.g()})):this.i[c]=b):a.F()?(this.f[c]=b,this.i[c]=b?b.g():b):this.i[c]=b;return this};N.prototype.setExtension=N.prototype.Kc;N.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.g();b=b.g();var d=[],f=0,h=c.length>b.length?c.length:b.length;a.b&&(d[0]=a.b,f=1);for(;f<h;f++)nb(c[f],b[f])||(d[f]=b[f]);return new a.constructor(d)};
N.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&nb(a.g(),b.g())};function ob(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!nb(a[d],b[d]))return!1;return!0}N.compareExtensions=ob;
function nb(a,b){if(a==b)return!0;if(!la(a)||!la(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if($a&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,f=void 0,h=Math.max(a.length,b.length);for(c=0;c<h;c++){var m=a[c],t=b[c];m&&m.constructor==Object&&(n(void 0===d),n(c===a.length-1),d=m,m=void 0);t&&t.constructor==
Object&&(n(void 0===f),n(c===b.length-1),f=t,t=void 0);if(!nb(m,t))return!1}return d||f?(d=d||{},f=f||{},ob(d,f)):!0}if(a.constructor===Object)return ob(a,b);throw Error("Invalid type in JSPB array");}N.compareFields=nb;N.prototype.Bb=function(){return pb(this)};N.prototype.cloneMessage=N.prototype.Bb;N.prototype.clone=function(){return pb(this)};N.prototype.clone=N.prototype.clone;N.clone=function(a){return pb(a)};function pb(a){return new a.constructor(qb(a.g()))}
N.copyInto=function(a,b){q(a,N);q(b,N);n(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=pb(a);for(var c=b.g(),d=a.g(),f=c.length=0;f<d.length;f++)c[f]=d[f];b.f=a.f;b.i=a.i};function qb(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?qb(n(d)):d)}return b}if($a&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?qb(n(d)):d);return b}
N.registerMessageType=function(a,b){b.we=a};var R={dump:function(a){q(a,N,"jspb.Message instance expected");n(a.getExtension,"Only unobfuscated and unoptimized compilation modes supported.");return R.X(a)}};g("jspb.debug.dump",R.dump,void 0);
R.X=function(a){var b=k(a);if("number"==b||"string"==b||"boolean"==b||"null"==b||"undefined"==b||"undefined"!==typeof Uint8Array&&a instanceof Uint8Array)return a;if("array"==b)return ua(a),l(a,R.X);if(a instanceof r){var c={};a=a.entries();for(var d=a.next();!d.done;d=a.next())c[d.value[0]]=R.X(d.value[1]);return c}q(a,N,"Only messages expected: "+a);b=a.constructor;var f={$name:b.name||b.displayName};for(t in b.prototype){var h=/^get([A-Z]\w*)/.exec(t);if(h&&"getExtension"!=t&&"getJsPbMessageId"!=
t){var m="has"+h[1];if(!a[m]||a[m]())m=a[t](),f[R.$a(h[1])]=R.X(m)}}if(a.extensionObject_)return f.$extensions="Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly",f;for(d in b.extensions)if(/^\d+$/.test(d)){m=b.extensions[d];var t=a.getExtension(m);h=void 0;m=m.Ba;var B=[],M=0;for(h in m)B[M++]=h;h=B[0];null!=t&&(c||(c=f.$extensions={}),c[R.$a(h)]=R.X(t))}return f};R.$a=function(a){return a.replace(/^[A-Z]/,function(b){return b.toLowerCase()})};function S(){this.a=[]}g("jspb.BinaryEncoder",S,void 0);S.prototype.length=function(){return this.a.length};S.prototype.length=S.prototype.length;S.prototype.end=function(){var a=this.a;this.a=[];return a};S.prototype.end=S.prototype.end;S.prototype.l=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);for(n(0<=b&&4294967296>b);0<b||127<a;)this.a.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.a.push(a)};S.prototype.writeSplitVarint64=S.prototype.l;
S.prototype.A=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);n(0<=b&&4294967296>b);this.s(a);this.s(b)};S.prototype.writeSplitFixed64=S.prototype.A;S.prototype.j=function(a){n(a==Math.floor(a));for(n(0<=a&&4294967296>a);127<a;)this.a.push(a&127|128),a>>>=7;this.a.push(a)};S.prototype.writeUnsignedVarint32=S.prototype.j;S.prototype.M=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);if(0<=a)this.j(a);else{for(var b=0;9>b;b++)this.a.push(a&127|128),a>>=7;this.a.push(1)}};
S.prototype.writeSignedVarint32=S.prototype.M;S.prototype.va=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);A(a);this.l(y,z)};S.prototype.writeUnsignedVarint64=S.prototype.va;S.prototype.ua=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.l(y,z)};S.prototype.writeSignedVarint64=S.prototype.ua;S.prototype.wa=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.j((a<<1^a>>31)>>>0)};S.prototype.writeZigzagVarint32=S.prototype.wa;
S.prototype.xa=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);Ga(a);this.l(y,z)};S.prototype.writeZigzagVarint64=S.prototype.xa;S.prototype.Ta=function(a){this.W(H(a))};S.prototype.writeZigzagVarint64String=S.prototype.Ta;S.prototype.W=function(a){var b=this;C(a);Ja(y,z,function(c,d){b.l(c>>>0,d>>>0)})};S.prototype.writeZigzagVarintHash64=S.prototype.W;S.prototype.be=function(a){n(a==Math.floor(a));n(0<=a&&256>a);this.a.push(a>>>0&255)};S.prototype.writeUint8=S.prototype.be;
S.prototype.ae=function(a){n(a==Math.floor(a));n(0<=a&&65536>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeUint16=S.prototype.ae;S.prototype.s=function(a){n(a==Math.floor(a));n(0<=a&&4294967296>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeUint32=S.prototype.s;S.prototype.V=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);Fa(a);this.s(y);this.s(z)};S.prototype.writeUint64=S.prototype.V;
S.prototype.Qc=function(a){n(a==Math.floor(a));n(-128<=a&&128>a);this.a.push(a>>>0&255)};S.prototype.writeInt8=S.prototype.Qc;S.prototype.Pc=function(a){n(a==Math.floor(a));n(-32768<=a&&32768>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeInt16=S.prototype.Pc;S.prototype.S=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeInt32=S.prototype.S;
S.prototype.T=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.A(y,z)};S.prototype.writeInt64=S.prototype.T;S.prototype.ka=function(a){n(a==Math.floor(a));n(-9223372036854775808<=+a&&0x7fffffffffffffff>+a);C(H(a));this.A(y,z)};S.prototype.writeInt64String=S.prototype.ka;S.prototype.L=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-3.4028234663852886E38<=a&&3.4028234663852886E38>=a);Ha(a);this.s(y)};S.prototype.writeFloat=S.prototype.L;
S.prototype.J=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-1.7976931348623157E308<=a&&1.7976931348623157E308>=a);Ia(a);this.s(y);this.s(z)};S.prototype.writeDouble=S.prototype.J;S.prototype.I=function(a){n("boolean"===typeof a||"number"===typeof a);this.a.push(a?1:0)};S.prototype.writeBool=S.prototype.I;S.prototype.R=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.M(a)};S.prototype.writeEnum=S.prototype.R;S.prototype.ja=function(a){this.a.push.apply(this.a,a)};
S.prototype.writeBytes=S.prototype.ja;S.prototype.N=function(a){C(a);this.l(y,z)};S.prototype.writeVarintHash64=S.prototype.N;S.prototype.K=function(a){C(a);this.s(y);this.s(z)};S.prototype.writeFixedHash64=S.prototype.K;
S.prototype.U=function(a){var b=this.a.length;ta(a);for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.a.push(d);else if(2048>d)this.a.push(d>>6|192),this.a.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var f=a.charCodeAt(c+1);56320<=f&&57343>=f&&(d=1024*(d-55296)+f-56320+65536,this.a.push(d>>18|240),this.a.push(d>>12&63|128),this.a.push(d>>6&63|128),this.a.push(d&63|128),c++)}else this.a.push(d>>12|224),this.a.push(d>>6&63|128),this.a.push(d&63|128)}return this.a.length-
b};S.prototype.writeString=S.prototype.U;function T(a,b){this.lo=a;this.hi=b}g("jspb.arith.UInt64",T,void 0);T.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};T.prototype.cmp=T.prototype.cmp;T.prototype.La=function(){return new T((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};T.prototype.rightShift=T.prototype.La;T.prototype.Da=function(){return new T(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};T.prototype.leftShift=T.prototype.Da;
T.prototype.cb=function(){return!!(this.hi&2147483648)};T.prototype.msb=T.prototype.cb;T.prototype.Ob=function(){return!!(this.lo&1)};T.prototype.lsb=T.prototype.Ob;T.prototype.Ua=function(){return 0==this.lo&&0==this.hi};T.prototype.zero=T.prototype.Ua;T.prototype.add=function(a){return new T((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};T.prototype.add=T.prototype.add;
T.prototype.sub=function(a){return new T((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};T.prototype.sub=T.prototype.sub;function rb(a,b){var c=a&65535;a>>>=16;var d=b&65535,f=b>>>16;b=c*d+65536*(c*f&65535)+65536*(a*d&65535);for(c=a*f+(c*f>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new T(b>>>0,c>>>0)}T.mul32x32=rb;T.prototype.eb=function(a){var b=rb(this.lo,a);a=rb(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};T.prototype.mul=T.prototype.eb;
T.prototype.Xa=function(a){if(0==a)return[];var b=new T(0,0),c=new T(this.lo,this.hi);a=new T(a,0);for(var d=new T(1,0);!a.cb();)a=a.Da(),d=d.Da();for(;!d.Ua();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.La(),d=d.La();return[b,c]};T.prototype.div=T.prototype.Xa;T.prototype.toString=function(){for(var a="",b=this;!b.Ua();){b=b.Xa(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};T.prototype.toString=T.prototype.toString;
function U(a){for(var b=new T(0,0),c=new T(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;c.lo=parseInt(a[d],10);b=b.eb(10).add(c)}return b}T.fromString=U;T.prototype.clone=function(){return new T(this.lo,this.hi)};T.prototype.clone=T.prototype.clone;function V(a,b){this.lo=a;this.hi=b}g("jspb.arith.Int64",V,void 0);V.prototype.add=function(a){return new V((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};V.prototype.add=V.prototype.add;
V.prototype.sub=function(a){return new V((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};V.prototype.sub=V.prototype.sub;V.prototype.clone=function(){return new V(this.lo,this.hi)};V.prototype.clone=V.prototype.clone;V.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new T(this.lo,this.hi);a&&(b=(new T(0,0)).sub(b));return(a?"-":"")+b.toString()};V.prototype.toString=V.prototype.toString;
function sb(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=U(a);if(null===a)return null;b&&(a=(new T(0,0)).sub(a));return new V(a.lo,a.hi)}V.fromString=sb;function W(){this.c=[];this.b=0;this.a=new S;this.h=[]}g("jspb.BinaryWriter",W,void 0);function tb(a,b){var c=a.a.end();a.c.push(c);a.c.push(b);a.b+=c.length+b.length}function X(a,b){Y(a,b,2);b=a.a.end();a.c.push(b);a.b+=b.length;b.push(a.b);return b}function Z(a,b){var c=b.pop();c=a.b+a.a.length()-c;for(n(0<=c);127<c;)b.push(c&127|128),c>>>=7,a.b++;b.push(c);a.b++}W.prototype.pb=function(a,b,c){tb(this,a.subarray(b,c))};W.prototype.writeSerializedMessage=W.prototype.pb;
W.prototype.Pb=function(a,b,c){null!=a&&null!=b&&null!=c&&this.pb(a,b,c)};W.prototype.maybeWriteSerializedMessage=W.prototype.Pb;W.prototype.reset=function(){this.c=[];this.a.end();this.b=0;this.h=[]};W.prototype.reset=W.prototype.reset;W.prototype.ab=function(){n(0==this.h.length);for(var a=new Uint8Array(this.b+this.a.length()),b=this.c,c=b.length,d=0,f=0;f<c;f++){var h=b[f];a.set(h,d);d+=h.length}b=this.a.end();a.set(b,d);d+=b.length;n(d==a.length);this.c=[a];return a};
W.prototype.getResultBuffer=W.prototype.ab;W.prototype.Kb=function(a){return Ba(this.ab(),a)};W.prototype.getResultBase64String=W.prototype.Kb;W.prototype.Va=function(a){this.h.push(X(this,a))};W.prototype.beginSubMessage=W.prototype.Va;W.prototype.Ya=function(){n(0<=this.h.length);Z(this,this.h.pop())};W.prototype.endSubMessage=W.prototype.Ya;function Y(a,b,c){n(1<=b&&b==Math.floor(b));a.a.j(8*b+c)}
W.prototype.Nc=function(a,b,c){switch(a){case 1:this.J(b,c);break;case 2:this.L(b,c);break;case 3:this.T(b,c);break;case 4:this.V(b,c);break;case 5:this.S(b,c);break;case 6:this.Qa(b,c);break;case 7:this.Pa(b,c);break;case 8:this.I(b,c);break;case 9:this.U(b,c);break;case 10:p("Group field type not supported in writeAny()");break;case 11:p("Message field type not supported in writeAny()");break;case 12:this.ja(b,c);break;case 13:this.s(b,c);break;case 14:this.R(b,c);break;case 15:this.Ra(b,c);break;
case 16:this.Sa(b,c);break;case 17:this.rb(b,c);break;case 18:this.sb(b,c);break;case 30:this.K(b,c);break;case 31:this.N(b,c);break;default:p("Invalid field type in writeAny()")}};W.prototype.writeAny=W.prototype.Nc;function ub(a,b,c){null!=c&&(Y(a,b,0),a.a.j(c))}function vb(a,b,c){null!=c&&(Y(a,b,0),a.a.M(c))}W.prototype.S=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32=W.prototype.S;
W.prototype.ob=function(a,b){null!=b&&(b=parseInt(b,10),n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32String=W.prototype.ob;W.prototype.T=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.ua(b)))};W.prototype.writeInt64=W.prototype.T;W.prototype.ka=function(a,b){null!=b&&(b=sb(b),Y(this,a,0),this.a.l(b.lo,b.hi))};W.prototype.writeInt64String=W.prototype.ka;
W.prototype.s=function(a,b){null!=b&&(n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32=W.prototype.s;W.prototype.ub=function(a,b){null!=b&&(b=parseInt(b,10),n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32String=W.prototype.ub;W.prototype.V=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),null!=b&&(Y(this,a,0),this.a.va(b)))};W.prototype.writeUint64=W.prototype.V;W.prototype.vb=function(a,b){null!=b&&(b=U(b),Y(this,a,0),this.a.l(b.lo,b.hi))};
W.prototype.writeUint64String=W.prototype.vb;W.prototype.rb=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),null!=b&&(Y(this,a,0),this.a.wa(b)))};W.prototype.writeSint32=W.prototype.rb;W.prototype.sb=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.xa(b)))};W.prototype.writeSint64=W.prototype.sb;W.prototype.$d=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.W(b))};W.prototype.writeSintHash64=W.prototype.$d;
W.prototype.Zd=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.Ta(b))};W.prototype.writeSint64String=W.prototype.Zd;W.prototype.Pa=function(a,b){null!=b&&(n(0<=b&&4294967296>b),Y(this,a,5),this.a.s(b))};W.prototype.writeFixed32=W.prototype.Pa;W.prototype.Qa=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),Y(this,a,1),this.a.V(b))};W.prototype.writeFixed64=W.prototype.Qa;W.prototype.nb=function(a,b){null!=b&&(b=U(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeFixed64String=W.prototype.nb;
W.prototype.Ra=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,5),this.a.S(b))};W.prototype.writeSfixed32=W.prototype.Ra;W.prototype.Sa=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),Y(this,a,1),this.a.T(b))};W.prototype.writeSfixed64=W.prototype.Sa;W.prototype.qb=function(a,b){null!=b&&(b=sb(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeSfixed64String=W.prototype.qb;W.prototype.L=function(a,b){null!=b&&(Y(this,a,5),this.a.L(b))};
W.prototype.writeFloat=W.prototype.L;W.prototype.J=function(a,b){null!=b&&(Y(this,a,1),this.a.J(b))};W.prototype.writeDouble=W.prototype.J;W.prototype.I=function(a,b){null!=b&&(n("boolean"===typeof b||"number"===typeof b),Y(this,a,0),this.a.I(b))};W.prototype.writeBool=W.prototype.I;W.prototype.R=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,0),this.a.M(b))};W.prototype.writeEnum=W.prototype.R;W.prototype.U=function(a,b){null!=b&&(a=X(this,a),this.a.U(b),Z(this,a))};
W.prototype.writeString=W.prototype.U;W.prototype.ja=function(a,b){null!=b&&(b=Ua(b),Y(this,a,2),this.a.j(b.length),tb(this,b))};W.prototype.writeBytes=W.prototype.ja;W.prototype.Rc=function(a,b,c){null!=b&&(a=X(this,a),c(b,this),Z(this,a))};W.prototype.writeMessage=W.prototype.Rc;W.prototype.Sc=function(a,b,c){null!=b&&(Y(this,1,3),Y(this,2,0),this.a.M(a),a=X(this,3),c(b,this),Z(this,a),Y(this,1,4))};W.prototype.writeMessageSet=W.prototype.Sc;
W.prototype.Oc=function(a,b,c){null!=b&&(Y(this,a,3),c(b,this),Y(this,a,4))};W.prototype.writeGroup=W.prototype.Oc;W.prototype.K=function(a,b){null!=b&&(n(8==b.length),Y(this,a,1),this.a.K(b))};W.prototype.writeFixedHash64=W.prototype.K;W.prototype.N=function(a,b){null!=b&&(n(8==b.length),Y(this,a,0),this.a.N(b))};W.prototype.writeVarintHash64=W.prototype.N;W.prototype.A=function(a,b,c){Y(this,a,1);this.a.A(b,c)};W.prototype.writeSplitFixed64=W.prototype.A;
W.prototype.l=function(a,b,c){Y(this,a,0);this.a.l(b,c)};W.prototype.writeSplitVarint64=W.prototype.l;W.prototype.tb=function(a,b,c){Y(this,a,0);var d=this.a;Ja(b,c,function(f,h){d.l(f>>>0,h>>>0)})};W.prototype.writeSplitZigzagVarint64=W.prototype.tb;W.prototype.Ed=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)vb(this,a,b[c])};W.prototype.writeRepeatedInt32=W.prototype.Ed;W.prototype.Fd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ob(a,b[c])};
W.prototype.writeRepeatedInt32String=W.prototype.Fd;W.prototype.Gd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.ua(d))}};W.prototype.writeRepeatedInt64=W.prototype.Gd;W.prototype.Qd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.A(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitFixed64=W.prototype.Qd;W.prototype.Rd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.l(a,c(b[f]),d(b[f]))};
W.prototype.writeRepeatedSplitVarint64=W.prototype.Rd;W.prototype.Sd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.tb(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitZigzagVarint64=W.prototype.Sd;W.prototype.Hd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ka(a,b[c])};W.prototype.writeRepeatedInt64String=W.prototype.Hd;W.prototype.Ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)ub(this,a,b[c])};W.prototype.writeRepeatedUint32=W.prototype.Ud;
W.prototype.Vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ub(a,b[c])};W.prototype.writeRepeatedUint32String=W.prototype.Vd;W.prototype.Wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.va(d))}};W.prototype.writeRepeatedUint64=W.prototype.Wd;W.prototype.Xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.vb(a,b[c])};W.prototype.writeRepeatedUint64String=W.prototype.Xd;
W.prototype.Md=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.wa(d))}};W.prototype.writeRepeatedSint32=W.prototype.Md;W.prototype.Nd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.xa(d))}};W.prototype.writeRepeatedSint64=W.prototype.Nd;W.prototype.Od=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.Ta(d))}};W.prototype.writeRepeatedSint64String=W.prototype.Od;
W.prototype.Pd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.W(d))}};W.prototype.writeRepeatedSintHash64=W.prototype.Pd;W.prototype.yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Pa(a,b[c])};W.prototype.writeRepeatedFixed32=W.prototype.yd;W.prototype.zd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Qa(a,b[c])};W.prototype.writeRepeatedFixed64=W.prototype.zd;
W.prototype.Ad=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.nb(a,b[c])};W.prototype.writeRepeatedFixed64String=W.prototype.Ad;W.prototype.Jd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Ra(a,b[c])};W.prototype.writeRepeatedSfixed32=W.prototype.Jd;W.prototype.Kd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Sa(a,b[c])};W.prototype.writeRepeatedSfixed64=W.prototype.Kd;W.prototype.Ld=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.qb(a,b[c])};
W.prototype.writeRepeatedSfixed64String=W.prototype.Ld;W.prototype.Cd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.L(a,b[c])};W.prototype.writeRepeatedFloat=W.prototype.Cd;W.prototype.wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.J(a,b[c])};W.prototype.writeRepeatedDouble=W.prototype.wd;W.prototype.ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.I(a,b[c])};W.prototype.writeRepeatedBool=W.prototype.ud;
W.prototype.xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.R(a,b[c])};W.prototype.writeRepeatedEnum=W.prototype.xd;W.prototype.Td=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.U(a,b[c])};W.prototype.writeRepeatedString=W.prototype.Td;W.prototype.vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ja(a,b[c])};W.prototype.writeRepeatedBytes=W.prototype.vd;W.prototype.Id=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var f=X(this,a);c(b[d],this);Z(this,f)}};
W.prototype.writeRepeatedMessage=W.prototype.Id;W.prototype.Dd=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)Y(this,a,3),c(b[d],this),Y(this,a,4)};W.prototype.writeRepeatedGroup=W.prototype.Dd;W.prototype.Bd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.K(a,b[c])};W.prototype.writeRepeatedFixedHash64=W.prototype.Bd;W.prototype.Yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.N(a,b[c])};W.prototype.writeRepeatedVarintHash64=W.prototype.Yd;
W.prototype.ad=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(b[c]);Z(this,a)}};W.prototype.writePackedInt32=W.prototype.ad;W.prototype.bd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedInt32String=W.prototype.bd;W.prototype.cd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.ua(b[c]);Z(this,a)}};W.prototype.writePackedInt64=W.prototype.cd;
W.prototype.md=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.A(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitFixed64=W.prototype.md;W.prototype.nd=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.l(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitVarint64=W.prototype.nd;W.prototype.od=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=this.a,h=0;h<b.length;h++)Ja(c(b[h]),d(b[h]),function(m,t){f.l(m>>>0,t>>>0)});Z(this,a)}};
W.prototype.writePackedSplitZigzagVarint64=W.prototype.od;W.prototype.dd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=sb(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};W.prototype.writePackedInt64String=W.prototype.dd;W.prototype.pd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(b[c]);Z(this,a)}};W.prototype.writePackedUint32=W.prototype.pd;
W.prototype.qd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedUint32String=W.prototype.qd;W.prototype.rd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.va(b[c]);Z(this,a)}};W.prototype.writePackedUint64=W.prototype.rd;W.prototype.sd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=U(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};
W.prototype.writePackedUint64String=W.prototype.sd;W.prototype.hd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.wa(b[c]);Z(this,a)}};W.prototype.writePackedSint32=W.prototype.hd;W.prototype.jd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.xa(b[c]);Z(this,a)}};W.prototype.writePackedSint64=W.prototype.jd;W.prototype.kd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(H(b[c]));Z(this,a)}};
W.prototype.writePackedSint64String=W.prototype.kd;W.prototype.ld=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(b[c]);Z(this,a)}};W.prototype.writePackedSintHash64=W.prototype.ld;W.prototype.Wc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.s(b[a])};W.prototype.writePackedFixed32=W.prototype.Wc;W.prototype.Xc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.V(b[a])};
W.prototype.writePackedFixed64=W.prototype.Xc;W.prototype.Yc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++){var c=U(b[a]);this.a.A(c.lo,c.hi)}};W.prototype.writePackedFixed64String=W.prototype.Yc;W.prototype.ed=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.S(b[a])};W.prototype.writePackedSfixed32=W.prototype.ed;
W.prototype.fd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.T(b[a])};W.prototype.writePackedSfixed64=W.prototype.fd;W.prototype.gd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.ka(b[a])};W.prototype.writePackedSfixed64String=W.prototype.gd;W.prototype.$c=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.L(b[a])};W.prototype.writePackedFloat=W.prototype.$c;
W.prototype.Uc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.J(b[a])};W.prototype.writePackedDouble=W.prototype.Uc;W.prototype.Tc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(b.length),a=0;a<b.length;a++)this.a.I(b[a])};W.prototype.writePackedBool=W.prototype.Tc;W.prototype.Vc=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.R(b[c]);Z(this,a)}};W.prototype.writePackedEnum=W.prototype.Vc;
W.prototype.Zc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.K(b[a])};W.prototype.writePackedFixedHash64=W.prototype.Zc;W.prototype.td=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.N(b[c]);Z(this,a)}};W.prototype.writePackedVarintHash64=W.prototype.td; true&&(exports.debug=R,exports.Map=r,exports.Message=N,exports.BinaryReader=J,exports.BinaryWriter=W,exports.ExtensionFieldInfo=Ya,exports.ExtensionFieldBinaryInfo=Za,exports.exportSymbol=ma,exports.inherits=na,exports.object={extend:pa},exports.typeOf=k);


/***/ }),

/***/ "./node_modules/google-protobuf/google/protobuf/empty_pb.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-protobuf/google/protobuf/empty_pb.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// source: google/protobuf/empty.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.google.protobuf.Empty', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.Empty.displayName = 'proto.google.protobuf.Empty';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Empty;
  return proto.google.protobuf.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.google.protobuf);


/***/ }),

/***/ "./node_modules/grpc-web/index.js":
/*!****************************************!*\
  !*** ./node_modules/grpc-web/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ca(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ca(this);
function t(){t=function(){};r.Symbol||(r.Symbol=da)}function ea(a,b){this.a=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}ea.prototype.toString=function(){return this.a};var da=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ea("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function u(){t();var a=r.Symbol.iterator;a||(a=r.Symbol.iterator=r.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}});u=function(){}}function fa(a){u();a={next:a};a[r.Symbol.iterator]=function(){return this};return a}function ha(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ja;if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={V:!0},ma={};try{ma.__proto__=la;ka=ma.V;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function oa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function pa(a,b){u();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}function v(a,b){if(b){var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Array.prototype.keys",function(a){return a?a:function(){return pa(this,function(b){return b})}});v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var f=d.length,g=0;g<f;g++){var e=d[g];if(b.call(c,e,g,d)){b=e;break a}}b=void 0}return b}});v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
v("Promise",function(a){function b(e){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.b=function(e){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(e)};var f=r.setTimeout;c.prototype.c=function(e){f(e,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var e=this.a;this.a=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(e){this.c(function(){throw e;})};b.prototype.f=function(){function e(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:e(this.s),reject:e(this.g)}};b.prototype.s=function(e){if(e===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.v(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.m(e):this.h(e)}};
b.prototype.m=function(e){var h=void 0;try{h=e.then}catch(k){this.g(k);return}"function"==typeof h?this.w(h,e):this.h(e)};b.prototype.g=function(e){this.i(2,e)};b.prototype.h=function(e){this.i(1,e)};b.prototype.i=function(e,h){if(0!=this.b)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.b);this.b=e;this.c=h;this.l()};b.prototype.l=function(){if(null!=this.a){for(var e=0;e<this.a.length;++e)g.b(this.a[e]);this.a=null}};var g=new c;b.prototype.v=function(e){var h=this.f();
e.F(h.resolve,h.reject)};b.prototype.w=function(e,h){var k=this.f();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(q,w){return"function"==typeof q?function(A){try{l(q(A))}catch(L){m(L)}}:w}var l,m,p=new b(function(q,w){l=q;m=w});this.F(k(e,l),k(h,m));return p};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.F=function(e,h){function k(){switch(l.b){case 1:e(l.c);break;case 2:h(l.c);break;default:throw Error("Unexpected state: "+
l.b);}}var l=this;null==this.a?g.b(k):this.a.push(k)};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=ha(e),m=l.next();!m.done;m=l.next())d(m.value).F(h,k)})};b.all=function(e){var h=ha(e),k=h.next();return k.done?d([]):new b(function(l,m){function p(A){return function(L){q[A]=L;w--;0==w&&l(q)}}var q=[],w=0;do q.push(void 0),w++,d(k.value).F(p(q.length-1),m),k=h.next();while(!k.done)})};return b});var qa=qa||{},x=this||self;
function y(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function ra(){}function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}
function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=va:z=wa;return z.apply(null,arguments)}
function B(a,b){function c(){}c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a};function xa(a){this.a=a||{}}xa.prototype.get=function(a){return this.a[a]};xa.prototype.G=function(){return Object.keys(this.a)};function C(a,b,c,d){this.f=a;this.c=b;this.b=c;this.a=d}C.prototype.getRequestMessage=function(){return this.f};C.prototype.getMethodDescriptor=function(){return this.c};C.prototype.getMetadata=function(){return this.b};C.prototype.getCallOptions=function(){return this.a};function D(a,b,c,d){c=void 0===c?{}:c;this.c=a;this.a=c;this.b=b;this.f=void 0===d?null:d}D.prototype.getResponseMessage=function(){return this.c};D.prototype.getMetadata=function(){return this.a};D.prototype.getMethodDescriptor=function(){return this.b};D.prototype.getStatus=function(){return this.f};function ya(a,b,c,d,f,g){this.name=a;this.a=f;this.b=g}function za(a,b,c){c=void 0===c?{}:c;var d=void 0===d?new xa:d;return new C(b,a,c,d)}ya.prototype.getName=function(){return this.name};ya.prototype.getName=ya.prototype.getName;function Aa(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function Ba(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}};function E(a,b,c){c=void 0===c?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c}oa(E,Error);E.prototype.toString=function(){var a="RpcError("+(Ba(this.code)||String(this.code))+")";this.message&&(a+=": "+this.message);return a};E.prototype.name="RpcError";function Ca(a){this.a=a}Ca.prototype.on=function(a,b){return"data"==a||"error"==a?this:this.a.on(a,b)};Ca.prototype.removeListener=function(a,b){return this.a.removeListener(a,b)};Ca.prototype.cancel=function(){this.a.cancel()};function Da(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}B(F,Error);F.prototype.name="CustomError";function Ea(a,b){a=a.split("%s");for(var c="",d=a.length-1,f=0;f<d;f++)c+=a[f]+(f<b.length?b[f]:"%s");F.call(this,c+a[d])}B(Ea,F);Ea.prototype.name="AssertionError";function Fa(a,b){throw new Ea("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function Ga(){this.l=null;this.i=[];this.m=0;this.b=Ha;this.f=this.a=this.h=0;this.c=null;this.g=0}
function Ia(a,b){function c(l){l==Ja?e.h=l:l==G?e.h=l:Ka(e,h,k,"invalid frame byte");e.b=La;e.a=0;e.f=0}function d(l){e.f++;e.a=(e.a<<8)+l;4==e.f&&(e.b=Ma,e.g=0,"undefined"!==typeof Uint8Array?e.c=new Uint8Array(e.a):e.c=Array(e.a),0==e.a&&g())}function f(l){e.c[e.g++]=l;e.g==e.a&&g()}function g(){var l={};l[e.h]=e.c;e.i.push(l);e.b=Ha}var e=a,h,k=0;for(b instanceof Uint8Array||b instanceof Array?h=b:h=new Uint8Array(b);k<h.length;){switch(e.b){case Na:Ka(e,h,k,"stream already broken");break;case Ha:c(h[k]);
break;case La:d(h[k]);break;case Ma:f(h[k]);break;default:throw Error("unexpected parser state: "+e.b);}e.m++;k++}a=e.i;e.i=[];return 0<a.length?a:null}var Ha=0,La=1,Ma=2,Na=3,Ja=0,G=128;function Ka(a,b,c,d){a.b=Na;a.l="The stream is broken @"+a.m+"/"+c+". Error: "+d+". With input:\n"+b;throw Error(a.l);};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function H(a,b){return-1!=a.indexOf(b)}function Qa(a,b){return a<b?-1:a>b?1:0};var I;a:{var Ra=x.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){I=Sa;break a}}I=""};function Ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ua(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var g=0;g<Va.length;g++)c=Va[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Xa(a){var b=1;a=a.split(":");for(var c=[];0<b&&a.length;)c.push(a.shift()),b--;a.length&&c.push(a.join(":"));return c};function Ya(a){Ya[" "](a);return a}Ya[" "]=ra;function Za(a){var b=$a;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)};var ab=H(I,"Opera"),bb=H(I,"Trident")||H(I,"MSIE"),cb=H(I,"Edge"),db=H(I,"Gecko")&&!(H(I.toLowerCase(),"webkit")&&!H(I,"Edge"))&&!(H(I,"Trident")||H(I,"MSIE"))&&!H(I,"Edge"),eb=H(I.toLowerCase(),"webkit")&&!H(I,"Edge"),fb;
a:{var gb="",hb=function(){var a=I;if(db)return/rv:([^\);]+)(\)|;)/.exec(a);if(cb)return/Edge\/([\d\.]+)/.exec(a);if(bb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(eb)return/WebKit\/(\S+)/.exec(a);if(ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();hb&&(gb=hb?hb[1]:"");if(bb){var ib,jb=x.document;ib=jb?jb.documentMode:void 0;if(null!=ib&&ib>parseFloat(gb)){fb=String(ib);break a}}fb=gb}var $a={};
function kb(){return Za(function(){for(var a=0,b=Pa(String(fb)).split("."),c=Pa("9").split("."),d=Math.max(b.length,c.length),f=0;0==a&&f<d;f++){var g=b[f]||"",e=c[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];if(0==g[0].length&&0==e[0].length)break;a=Qa(0==g[1].length?0:parseInt(g[1],10),0==e[1].length?0:parseInt(e[1],10))||Qa(0==g[2].length,0==e[2].length)||Qa(g[2],e[2]);g=g[3];e=e[3]}while(0==a)}return 0<=a})};function lb(){0!=mb&&(Object.prototype.hasOwnProperty.call(this,ta)&&this[ta]||(this[ta]=++ua));this.K=this.K}var mb=0;lb.prototype.K=!1;var nb=Object.freeze||function(a){return a};function J(a,b){this.type=a;this.a=this.target=b;this.defaultPrevented=!1}J.prototype.b=function(){this.defaultPrevented=!0};var ob=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{x.addEventListener("test",ra,b),x.removeEventListener("test",ra,b)}catch(c){}return a}();function K(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(db){a:{try{Ya(b.nodeName);var f=!0;break a}catch(g){}f=!1}f||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:pb[a.pointerType]||"";this.c=a;a.defaultPrevented&&K.O.b.call(this)}}B(K,J);var pb=nb({2:"touch",3:"pen",4:"mouse"});K.prototype.b=function(){K.O.b.call(this);var a=this.c;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1E6*Math.random()|0);var qb=0;function rb(a,b,c,d,f){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.H=f;this.key=++qb;this.A=this.D=!1}function sb(a){a.A=!0;a.listener=null;a.proxy=null;a.src=null;a.H=null};function tb(a){this.src=a;this.a={};this.b=0}tb.prototype.add=function(a,b,c,d,f){var g=a.toString();a=this.a[g];a||(a=this.a[g]=[],this.b++);var e=ub(a,b,d,f);-1<e?(b=a[e],c||(b.D=!1)):(b=new rb(b,this.src,g,!!d,f),b.D=c,a.push(b));return b};tb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var f=this.a[a];b=ub(f,b,c,d);return-1<b?(sb(f[b]),Array.prototype.splice.call(f,b,1),0==f.length&&(delete this.a[a],this.b--),!0):!1};
function vb(a,b){var c=b.type;if(c in a.a){var d=a.a[c],f=Oa(d,b),g;(g=0<=f)&&Array.prototype.splice.call(d,f,1);g&&(sb(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function ub(a,b,c,d){for(var f=0;f<a.length;++f){var g=a[f];if(!g.A&&g.listener==b&&g.capture==!!c&&g.H==d)return f}return-1};var wb="closure_lm_"+(1E6*Math.random()|0),xb={},yb=0;function zb(a,b,c,d,f){if(d&&d.once)Ab(a,b,c,d,f);else if(Array.isArray(b))for(var g=0;g<b.length;g++)zb(a,b[g],c,d,f);else c=Bb(c),a&&a[M]?a.f.add(String(b),c,!1,sa(d)?!!d.capture:!!d,f):Cb(a,b,c,!1,d,f)}
function Cb(a,b,c,d,f,g){if(!b)throw Error("Invalid event type");var e=sa(f)?!!f.capture:!!f,h=Db(a);h||(a[wb]=h=new tb(a));c=h.add(b,c,d,e,g);if(!c.proxy){d=Eb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ob||(f=e),void 0===f&&(f=!1),a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Fb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");yb++}}
function Eb(){function a(c){return b.call(a.src,a.listener,c)}var b=Gb;return a}function Ab(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)Ab(a,b[g],c,d,f);else c=Bb(c),a&&a[M]?a.f.add(String(b),c,!0,sa(d)?!!d.capture:!!d,f):Cb(a,b,c,!0,d,f)}function Hb(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)Hb(a,b[g],c,d,f);else(d=sa(d)?!!d.capture:!!d,c=Bb(c),a&&a[M])?a.f.remove(String(b),c,d,f):a&&(a=Db(a))&&(b=a.a[b.toString()],a=-1,b&&(a=ub(b,c,d,f)),(c=-1<a?b[a]:null)&&Ib(c))}
function Ib(a){if("number"!==typeof a&&a&&!a.A){var b=a.src;if(b&&b[M])vb(b.f,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);yb--;(c=Db(b))?(vb(c,a),0==c.b&&(c.src=null,b[wb]=null)):sb(a)}}}function Fb(a){return a in xb?xb[a]:xb[a]="on"+a}function Gb(a,b){if(a.A)a=!0;else{b=new K(b,this);var c=a.listener,d=a.H||a.src;a.D&&Ib(a);a=c.call(d,b)}return a}
function Db(a){a=a[wb];return a instanceof tb?a:null}var Jb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Bb(a){if("function"===typeof a)return a;a[Jb]||(a[Jb]=function(b){return a.handleEvent(b)});return a[Jb]};function N(){lb.call(this);this.f=new tb(this);this.U=this}B(N,lb);N.prototype[M]=!0;N.prototype.addEventListener=function(a,b,c,d){zb(this,a,b,c,d)};N.prototype.removeEventListener=function(a,b,c,d){Hb(this,a,b,c,d)};function O(a,b){a=a.U;var c=b.type||b;if("string"===typeof b)b=new J(b,a);else if(b instanceof J)b.target=b.target||a;else{var d=b;b=new J(c,a);Wa(b,d)}a=b.a=a;Kb(a,c,!0,b);Kb(a,c,!1,b)}
function Kb(a,b,c,d){if(b=a.f.a[String(b)]){b=b.concat();for(var f=!0,g=0;g<b.length;++g){var e=b[g];if(e&&!e.A&&e.capture==c){var h=e.listener,k=e.H||e.src;e.D&&vb(a.f,e);f=!1!==h.call(k,d)&&f}}}};var Lb=x;function Mb(a,b,c){if("function"===typeof a)c&&(a=z(a,c));else if(a&&"function"==typeof a.handleEvent)a=z(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:Lb.setTimeout(a,b||0)};function Nb(a,b){this.name=a;this.value=b}Nb.prototype.toString=function(){return this.name};var Ob=new Nb("OFF",Infinity),Pb=new Nb("SEVERE",1E3),Qb=new Nb("CONFIG",700),Rb=new Nb("FINE",500);function Tb(){this.clear()}var Ub;Tb.prototype.clear=function(){};function Vb(a,b,c){this.reset(a||Ob,b,c,void 0,void 0)}Vb.prototype.reset=function(){};function Wb(a,b){this.a=null;this.f=[];this.b=(void 0===b?null:b)||null;this.c=[];this.g={getName:function(){return a}}}
function Xb(a){if(a.a)return a.a;if(a.b)return Xb(a.b);Fa("Root logger has no level set.");return Ob}function Yb(a,b){for(;a;)a.f.forEach(function(c){c(b)}),a=a.b}function Zb(){this.entries={};var a=new Wb("");a.a=Qb;this.entries[""]=a}var $b;function ac(a,b,c){var d=a.entries[b];if(d)return void 0!==c&&(d.a=c),d;d=ac(a,b.substr(0,b.lastIndexOf(".")));var f=new Wb(b,d);a.entries[b]=f;d.c.push(f);void 0!==c&&(f.a=c);return f}function bc(){$b||($b=new Zb);return $b}
function cc(a,b,c){var d;if(d=a)if(d=a&&b){d=b.value;var f=a?Xb(ac(bc(),a.getName())):Ob;d=d>=f.value}d&&(b=b||Ob,d=ac(bc(),a.getName()),"function"===typeof c&&(c=c()),Ub||(Ub=new Tb),a=a.getName(),a=new Vb(b,c,a),Yb(d,a))}function P(a,b){a&&cc(a,Rb,b)};function dc(){}dc.prototype.a=null;function ec(a){var b;(b=a.a)||(b={},fc(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var gc;function hc(){}B(hc,dc);function ic(a){return(a=fc(a))?new ActiveXObject(a):new XMLHttpRequest}function fc(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}gc=new hc;t();u();function jc(a,b){this.b=a[x.Symbol.iterator]();this.c=b;this.f=0}jc.prototype[Symbol.iterator]=function(){return this};jc.prototype.next=function(){var a=this.b.next();return{value:a.done?void 0:this.c.call(void 0,a.value,this.f++),done:a.done}};function kc(a,b){return new jc(a,b)}t();u();t();u();var lc="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function Q(){}Q.prototype.next=function(){return Q.prototype.a.call(this)};Q.prototype.a=function(){throw lc;};Q.prototype.u=function(){return this};function mc(a){if(a instanceof R||a instanceof S||a instanceof T)return a;if("function"==typeof a.next)return new R(function(){return nc(a)});t();u();if("function"==typeof a[Symbol.iterator])return t(),u(),new R(function(){return a[Symbol.iterator]()});if("function"==typeof a.u)return new R(function(){return nc(a.u())});throw Error("Not an iterator or iterable.");}
function nc(a){if(!(a instanceof Q))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.a();break}catch(d){if(d!==lc)throw d;b=!0}return{value:c,done:b}}}}t();u();function R(a){this.b=a}R.prototype.u=function(){return new S(this.b())};R.prototype[Symbol.iterator]=function(){return new T(this.b())};R.prototype.c=function(){return new T(this.b())};t();u();function S(a){this.b=a}oa(S,Q);S.prototype.a=function(){var a=this.b.next();if(a.done)throw lc;return a.value};S.prototype.next=function(){return S.prototype.a.call(this)};
S.prototype[Symbol.iterator]=function(){return new T(this.b)};S.prototype.c=function(){return new T(this.b)};function T(a){R.call(this,function(){return a});this.f=a}oa(T,R);T.prototype.next=function(){return this.f.next()};function oc(a,b){this.o={};this.j=[];this.B=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}n=oc.prototype;n.G=function(){pc(this);return this.j.concat()};n.has=function(a){return U(this.o,a)};n.clear=function(){this.o={};this.B=this.size=this.j.length=0};n.remove=function(a){return this.delete(a)};
n.delete=function(a){return U(this.o,a)?(delete this.o[a],--this.size,this.B++,this.j.length>2*this.size&&pc(this),!0):!1};function pc(a){if(a.size!=a.j.length){for(var b=0,c=0;b<a.j.length;){var d=a.j[b];U(a.o,d)&&(a.j[c++]=d);b++}a.j.length=c}if(a.size!=a.j.length){var f={};for(c=b=0;b<a.j.length;)d=a.j[b],U(f,d)||(a.j[c++]=d,f[d]=1),b++;a.j.length=c}}n.get=function(a,b){return U(this.o,a)?this.o[a]:b};n.set=function(a,b){U(this.o,a)||(this.size+=1,this.j.push(a),this.B++);this.o[a]=b};
n.addAll=function(a){if(a instanceof oc)for(var b=a.G(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};n.forEach=function(a,b){for(var c=this.G(),d=0;d<c.length;d++){var f=c[d],g=this.get(f);a.call(b,g,f,this)}};n.clone=function(){return new oc(this)};n.keys=function(){return mc(this.u(!0)).c()};n.values=function(){return mc(this.u(!1)).c()};n.entries=function(){var a=this;return kc(this.keys(),function(b){return[b,a.get(b)]})};
n.u=function(a){pc(this);var b=0,c=this.B,d=this,f=new Q;f.a=function(){if(c!=d.B)throw Error("The map has changed since the iterator was created");if(b>=d.j.length)throw lc;var g=d.j[b++];return a?g:d.o[g]};f.next=f.a.bind(f);return f};function U(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var qc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function rc(a){N.call(this);this.headers=new oc;this.C=a||null;this.c=!1;this.J=this.a=null;this.P=this.v="";this.g=0;this.l="";this.i=this.N=this.s=this.L=!1;this.h=0;this.w=null;this.m=sc;this.I=this.M=!1}B(rc,N);var sc="";rc.prototype.b=ac(bc(),"goog.net.XhrIo",void 0).g;var tc=/^https?$/i,uc=["POST","PUT"];
function vc(a,b,c){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.v+"; newUri="+b);a.v=b;a.l="";a.g=0;a.P="POST";a.L=!1;a.c=!0;a.a=a.C?ic(a.C):ic(gc);a.J=a.C?ec(a.C):ec(gc);a.a.onreadystatechange=z(a.R,a);try{P(a.b,V(a,"Opening Xhr")),a.N=!0,a.a.open("POST",String(b),!0),a.N=!1}catch(g){P(a.b,V(a,"Error opening Xhr: "+g.message));wc(a,g);return}b=c||"";c=a.headers.clone();var d=c.G().find(function(g){return"content-type"==g.toLowerCase()}),f=x.FormData&&b instanceof
x.FormData;!(0<=Oa(uc,"POST"))||d||f||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");c.forEach(function(g,e){this.a.setRequestHeader(e,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.M&&(a.a.withCredentials=a.M);try{xc(a),0<a.h&&(a.I=yc(a.a),P(a.b,V(a,"Will abort after "+a.h+"ms if incomplete, xhr2 "+a.I)),a.I?(a.a.timeout=a.h,a.a.ontimeout=z(a.T,a)):a.w=Mb(a.T,a.h,a)),P(a.b,V(a,"Sending request")),a.s=!0,a.a.send(b),a.s=!1}catch(g){P(a.b,
V(a,"Send error: "+g.message)),wc(a,g)}}function yc(a){return bb&&kb()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}n=rc.prototype;n.T=function(){"undefined"!=typeof qa&&this.a&&(this.l="Timed out after "+this.h+"ms, aborting",this.g=8,P(this.b,V(this,this.l)),O(this,"timeout"),this.abort(8))};function wc(a,b){a.c=!1;a.a&&(a.i=!0,a.a.abort(),a.i=!1);a.l=b;a.g=5;zc(a);Ac(a)}function zc(a){a.L||(a.L=!0,O(a,"complete"),O(a,"error"))}
n.abort=function(a){this.a&&this.c&&(P(this.b,V(this,"Aborting")),this.c=!1,this.i=!0,this.a.abort(),this.i=!1,this.g=a||7,O(this,"complete"),O(this,"abort"),Ac(this))};n.R=function(){this.K||(this.N||this.s||this.i?Bc(this):this.W())};n.W=function(){Bc(this)};
function Bc(a){if(a.c&&"undefined"!=typeof qa)if(a.J[1]&&4==W(a)&&2==a.getStatus())P(a.b,V(a,"Local request error detected and ignored"));else if(a.s&&4==W(a))Mb(a.R,0,a);else if(O(a,"readystatechange"),4==W(a)){P(a.b,V(a,"Request complete"));a.c=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var f;if(f=0===b){var g=String(a.v).match(qc)[1]||null;if(!g&&x.self&&x.self.location){var e=x.self.location.protocol;
g=e.substr(0,e.length-1)}f=!tc.test(g?g.toLowerCase():"")}d=f}if(d)O(a,"complete"),O(a,"success");else{a.g=6;try{var h=2<W(a)?a.a.statusText:""}catch(k){P(a.b,"Can not get status: "+k.message),h=""}a.l=h+" ["+a.getStatus()+"]";zc(a)}}finally{Ac(a)}}}function Ac(a){if(a.a){xc(a);var b=a.a,c=a.J[0]?ra:null;a.a=null;a.J=null;O(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.b)&&cc(a,Pb,"Problem encountered resetting onreadystatechange: "+d.message)}}}
function xc(a){a.a&&a.I&&(a.a.ontimeout=null);a.w&&(Lb.clearTimeout(a.w),a.w=null)}function W(a){return a.a?a.a.readyState:0}n.getStatus=function(){try{return 2<W(this)?this.a.status:-1}catch(a){return-1}};
function Cc(a){try{if(!a.a)return null;if("response"in a.a)return a.a.response;switch(a.m){case sc:case "text":return a.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.a)return a.a.mozResponseArrayBuffer}var b=a.b;b&&cc(b,Pb,"Response type "+a.m+" is not supported on this browser");return null}catch(c){return P(a.b,"Can not get response: "+c.message),null}}
function Dc(a){var b={};a=(a.a&&4==W(a)?a.a.getAllResponseHeaders()||"":"").split("\r\n");for(var c=0;c<a.length;c++)if(!/^[\s\xa0]*$/.test(a[c])){var d=Xa(a[c]),f=d[0];d=d[1];if("string"===typeof d){d=d.trim();var g=b[f]||[];b[f]=g;g.push(d)}}return Ua(b,function(e){return e.join(", ")})}function V(a,b){return b+" ["+a.P+" "+a.v+" "+a.getStatus()+"]"};var Ec={},Fc=null;function Gc(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):H("=.",a[b-1])&&(c=H("=.",a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Hc(a,function(g){d[f++]=g});return d.subarray(0,f)}
function Hc(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Fc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Ic();for(var d=0;;){var f=c(-1),g=c(0),e=c(64),h=c(64);if(64===h&&-1===f)break;b(f<<2|g>>4);64!=e&&(b(g<<4&240|e>>2),64!=h&&b(e<<6&192|h))}}
function Ic(){if(!Fc){Fc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ec[c]=d;for(var f=0;f<d.length;f++){var g=d[f];void 0===Fc[g]&&(Fc[g]=f)}}}};var Jc=["content-type","grpc-status","grpc-message"];
function X(a){this.a=a.Z;this.m=null;this.b=[];this.h=[];this.g=[];this.f=[];this.c=[];this.l=!1;this.i=0;this.s=new Ga;var b=this;zb(this.a,"readystatechange",function(){var c=b.a;if(c=c.a?c.a.getResponseHeader("Content-Type"):null){c=c.toLowerCase();if(0==c.lastIndexOf("application/grpc-web-text",0)){c=b.a;try{var d=c.a?c.a.responseText:""}catch(k){P(c.b,"Can not get responseText: "+k.message),d=""}c=d||"";d=c.length-c.length%4;c=c.substr(b.i,d-b.i);if(0==c.length)return;b.i=d;c=Gc(c)}else if(0==
c.lastIndexOf("application/grpc",0))c=new Uint8Array(Cc(b.a));else{Y(b,new E(2,"Unknown Content-type received."));return}d=null;try{d=Ia(b.s,c)}catch(k){Y(b,new E(2,"Error in parsing response body"))}if(d)for(c=0;c<d.length;c++){if(Ja in d[c]){var f=d[c][Ja];if(f){var g=!1,e=void 0;try{e=b.m(f),g=!0}catch(k){Y(b,new E(13,"Error when deserializing response data; error: "+k+(", response: "+e)))}if(g)for(f=e,g=0;g<b.b.length;g++)b.b[g](f)}}if(G in d[c]&&0<d[c][G].length){f="";for(g=0;g<d[c][G].length;g++)f+=
String.fromCharCode(d[c][G][g]);f=f.trim().split("\r\n");g={};for(e=0;e<f.length;e++){var h=f[e].indexOf(":");g[f[e].substring(0,h).trim()]=f[e].substring(h+1).trim()}f=g;g=0;e="";"grpc-status"in f&&(g=Number(f["grpc-status"]),delete f["grpc-status"]);"grpc-message"in f&&(e=f["grpc-message"],delete f["grpc-message"]);Y(b,new E(g,e,f))}}}});zb(this.a,"complete",function(){var c=b.a.g,d=2,f="",g={};d=Dc(b.a);var e={};for(h in d)d.hasOwnProperty(h)&&(e[h.toLowerCase()]=d[h]);Object.keys(e).forEach(function(k){Jc.includes(k)||
(g[k]=e[k])});Kc(b,g);var h=-1;if(0!=c){switch(c){case 7:d=10;break;case 8:d=4;break;case 6:h=b.a.getStatus();d=Aa(h);break;default:d=14}10==d&&b.l||(f=Da(c),-1!=h&&(f+=", http status code: "+h),Y(b,new E(d,f)))}else c=!1,"grpc-status"in e&&(d=Number(e["grpc-status"]),"grpc-message"in e&&(f=e["grpc-message"]),0!=d&&(Y(b,new E(d,f||"",e)),c=!0)),c||Lc(b)})}
X.prototype.on=function(a,b){"data"==a?this.b.push(b):"status"==a?this.h.push(b):"metadata"==a?this.g.push(b):"end"==a?this.c.push(b):"error"==a&&this.f.push(b);return this};function Mc(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)}X.prototype.removeListener=function(a,b){"data"==a?Mc(this.b,b):"status"==a?Mc(this.h,b):"metadata"==a?Mc(this.g,b):"end"==a?Mc(this.c,b):"error"==a&&Mc(this.f,b);return this};X.prototype.cancel=function(){this.l=!0;this.a.abort()};
function Y(a,b){if(0!=b.code)for(var c=new E(b.code,decodeURIComponent(b.message||""),b.metadata),d=0;d<a.f.length;d++)a.f[d](c);b={code:b.code,details:decodeURIComponent(b.message||""),metadata:b.metadata};for(c=0;c<a.h.length;c++)a.h[c](b)}function Kc(a,b){for(var c=0;c<a.g.length;c++)a.g[c](b)}function Lc(a){for(var b=0;b<a.c.length;b++)a.c[b]()}X.prototype.cancel=X.prototype.cancel;X.prototype.removeListener=X.prototype.removeListener;X.prototype.on=X.prototype.on;function Nc(a){var b="";Ta(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n"});return b};function Z(a,b){a=void 0===a?{}:a;this.a=a.format||y("format",a)||"text";this.g=a.aa||y("suppressCorsPreflight",a)||!1;this.f=a.withCredentials||y("withCredentials",a)||!1;this.b=a.$||y("streamInterceptors",a)||[];this.h=a.ba||y("unaryInterceptors",a)||[];this.c=b||null}Z.prototype.X=function(a,b,c,d,f){var g=this,e=a.substr(0,a.length-d.name.length);a=Oc(function(h){return Pc(g,h,e)},this.b).call(this,za(d,b,c));Qc(a,f,!1);return new Ca(a)};
Z.prototype.S=function(a,b,c,d){var f=this,g=a.substr(0,a.length-d.name.length);return Oc(function(e){return new Promise(function(h,k){var l=Pc(f,e,g),m,p,q;Qc(l,function(w,A,L,Sb,Rc){w?k(w):Rc?q=A:L?p=L:Sb?m=Sb:(w=e.getMethodDescriptor(),A=m,A=void 0===A?{}:A,h(new D(q,w,A,void 0===p?null:p)))},!0)})},this.h).call(this,za(d,b,c)).then(function(e){return e.getResponseMessage()})};Z.prototype.unaryCall=function(a,b,c,d){return this.S(a,b,c,d)};
Z.prototype.Y=function(a,b,c,d){var f=this,g=a.substr(0,a.length-d.name.length);return Oc(function(e){return Pc(f,e,g)},this.b).call(this,za(d,b,c))};
function Pc(a,b,c){var d=b.getMethodDescriptor(),f=c+d.getName();c=a.c?a.c:new rc;c.M=a.f;var g=new X({Z:c});g.m=d.b;var e=b.getMetadata();for(h in e)c.headers.set(h,e[h]);"text"==a.a?(c.headers.set("Content-Type","application/grpc-web-text"),c.headers.set("Accept","application/grpc-web-text")):c.headers.set("Content-Type","application/grpc-web+proto");c.headers.set("X-User-Agent","grpc-web-javascript/0.1");c.headers.set("X-Grpc-Web","1");if(c.headers.has("deadline")){var h=Number(c.headers.get("deadline"));
h=Math.ceil(h-(new Date).getTime());c.headers.delete("deadline");Infinity===h&&(h=0);0<h&&(c.headers.set("grpc-timeout",h+"m"),c.h=Math.max(0,Math.max(1E3,Math.ceil(1.1*h))))}if(a.g){e=c.headers;h={};for(var k=ha(e.keys()),l=k.next();!l.done;l=k.next())l=l.value,h[l]=e.get(l);c.headers.clear();b:{for(m in h){var m=!1;break b}m=!0}if(!m)if(h=Nc(h),"string"===typeof f){if(m=encodeURIComponent("$httpHeaders"),h=null!=h?"="+encodeURIComponent(String(h)):"",m+=h)h=f.indexOf("#"),0>h&&(h=f.length),e=f.indexOf("?"),
0>e||e>h?(e=h,k=""):k=f.substring(e+1,h),f=[f.substr(0,e),k,f.substr(h)],h=f[1],f[1]=m?h?h+"&"+m:m:h,f=f[0]+(f[1]?"?"+f[1]:"")+f[2]}else f.a("$httpHeaders",h)}b=(0,d.a)(b.getRequestMessage());d=b.length;m=[0,0,0,0];h=new Uint8Array(5+d);for(e=3;0<=e;e--)m[e]=d%256,d>>>=8;h.set(new Uint8Array(m),1);h.set(b,5);b=h;if("text"==a.a){a=b;var p;void 0===p&&(p=0);Ic();p=Ec[p];b=Array(Math.floor(a.length/3));d=p[64]||"";for(m=h=0;h<a.length-2;h+=3){l=a[h];var q=a[h+1];k=a[h+2];e=p[l>>2];l=p[(l&3)<<4|q>>4];
q=p[(q&15)<<2|k>>6];k=p[k&63];b[m++]=e+l+q+k}e=0;k=d;switch(a.length-h){case 2:e=a[h+1],k=p[(e&15)<<2]||d;case 1:a=a[h],b[m]=p[a>>2]+p[(a&3)<<4|e>>4]+k+d}b=b.join("")}else"binary"==a.a&&(c.m="arraybuffer");vc(c,f,b);return g}
function Qc(a,b,c){var d=!1,f=null,g=!1;a.on("data",function(e){d=!0;f=e});a.on("error",function(e){0==e.code||g||(g=!0,b(e,null))});a.on("status",function(e){0==e.code||g?c&&b(null,null,e):(g=!0,b({code:e.code,message:e.details,metadata:e.metadata},null))});if(c)a.on("metadata",function(e){b(null,null,null,e)});a.on("end",function(){g||(d?c?b(null,f,null,null,!0):b(null,f):b({code:2,message:"Incomplete response"}));c&&b(null,null)})}
function Oc(a,b){var c=a;b.forEach(function(d){var f=c;c=function(g){return d.intercept(g,f)}});return c}Z.prototype.serverStreaming=Z.prototype.Y;Z.prototype.unaryCall=Z.prototype.unaryCall;Z.prototype.thenableCall=Z.prototype.S;Z.prototype.rpcCall=Z.prototype.X;module.exports.CallOptions=xa;module.exports.MethodDescriptor=ya;module.exports.GrpcWebClientBase=Z;module.exports.RpcError=E;module.exports.StatusCode={OK:0,CANCELLED:1,UNKNOWN:2,INVALID_ARGUMENT:3,DEADLINE_EXCEEDED:4,NOT_FOUND:5,ALREADY_EXISTS:6,PERMISSION_DENIED:7,UNAUTHENTICATED:16,RESOURCE_EXHAUSTED:8,FAILED_PRECONDITION:9,ABORTED:10,OUT_OF_RANGE:11,UNIMPLEMENTED:12,INTERNAL:13,UNAVAILABLE:14,DATA_LOSS:15};module.exports.MethodType={UNARY:"unary",SERVER_STREAMING:"server_streaming",BIDI_STREAMING:"bidi_streaming"};
Lb="undefined"!==typeof globalThis&&globalThis||self;


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/css/images/background/background_game.jpg":
/*!*******************************************************!*\
  !*** ./src/css/images/background/background_game.jpg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/background/background_game.jpg");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/generated/item_grpc_web_pb.js":
/*!*******************************************!*\
  !*** ./src/generated/item_grpc_web_pb.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: item.proto

/* eslint-disable */
// @ts-nocheck

var grpc = {};
grpc.web = __webpack_require__(/*! grpc-web */ "./node_modules/grpc-web/index.js");
var google_protobuf_empty_pb = __webpack_require__(/*! google-protobuf/google/protobuf/empty_pb.js */ "./node_modules/google-protobuf/google/protobuf/empty_pb.js");
var proto = __webpack_require__(/*! ./item_pb.js */ "./src/generated/item_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ItemServiceClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ItemServicePromiseClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.Matrix>}
 */
var methodDescriptor_ItemService_generateMatrix = new grpc.web.MethodDescriptor('/ItemService/generateMatrix', grpc.web.MethodType.UNARY, google_protobuf_empty_pb.Empty, proto.Matrix,
/**
 * @param {!proto.google.protobuf.Empty} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.Matrix.deserializeBinary);

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Matrix)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Matrix>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ItemServiceClient.prototype.generateMatrix = function (request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ + '/ItemService/generateMatrix', request, metadata || {}, methodDescriptor_ItemService_generateMatrix, callback);
};

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Matrix>}
 *     Promise that resolves to the response
 */
proto.ItemServicePromiseClient.prototype.generateMatrix = function (request, metadata) {
  return this.client_.unaryCall(this.hostname_ + '/ItemService/generateMatrix', request, metadata || {}, methodDescriptor_ItemService_generateMatrix);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Matrix,
 *   !proto.Pairs>}
 */
var methodDescriptor_ItemService_scanMatrix = new grpc.web.MethodDescriptor('/ItemService/scanMatrix', grpc.web.MethodType.SERVER_STREAMING, proto.Matrix, proto.Pairs,
/**
 * @param {!proto.Matrix} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.Pairs.deserializeBinary);

/**
 * @param {!proto.Matrix} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Pairs>}
 *     The XHR Node Readable Stream
 */
proto.ItemServiceClient.prototype.scanMatrix = function (request, metadata) {
  return this.client_.serverStreaming(this.hostname_ + '/ItemService/scanMatrix', request, metadata || {}, methodDescriptor_ItemService_scanMatrix);
};

/**
 * @param {!proto.Matrix} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Pairs>}
 *     The XHR Node Readable Stream
 */
proto.ItemServicePromiseClient.prototype.scanMatrix = function (request, metadata) {
  return this.client_.serverStreaming(this.hostname_ + '/ItemService/scanMatrix', request, metadata || {}, methodDescriptor_ItemService_scanMatrix);
};
module.exports = proto;

/***/ }),

/***/ "./src/generated/item_pb.js":
/*!**********************************!*\
  !*** ./src/generated/item_pb.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// source: item.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global = typeof globalThis !== 'undefined' && globalThis || typeof window !== 'undefined' && window || typeof global !== 'undefined' && global || typeof self !== 'undefined' && self || function () {
  return this;
}.call(null) || Function('return this')();
var google_protobuf_empty_pb = __webpack_require__(/*! google-protobuf/google/protobuf/empty_pb.js */ "./node_modules/google-protobuf/google/protobuf/empty_pb.js");
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.Item', null, global);
goog.exportSymbol('proto.Matrix', null, global);
goog.exportSymbol('proto.Pair', null, global);
goog.exportSymbol('proto.Pairs', null, global);
goog.exportSymbol('proto.RowItem', null, global);
goog.exportSymbol('proto.TYPE', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Pair = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Pair.repeatedFields_, null);
};
goog.inherits(proto.Pair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Pair.displayName = 'proto.Pair';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Pairs = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Pairs.repeatedFields_, null);
};
goog.inherits(proto.Pairs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Pairs.displayName = 'proto.Pairs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Item = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Item.displayName = 'proto.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RowItem = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RowItem.repeatedFields_, null);
};
goog.inherits(proto.RowItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RowItem.displayName = 'proto.RowItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Matrix = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Matrix.repeatedFields_, null);
};
goog.inherits(proto.Matrix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Matrix.displayName = 'proto.Matrix';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Pair.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Pair.prototype.toObject = function (opt_includeInstance) {
    return proto.Pair.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Pair} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Pair.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        indexList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
      };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Pair}
 */
proto.Pair.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Pair();
  return proto.Pair.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Pair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Pair}
 */
proto.Pair.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var values = /** @type {!Array<number>} */reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()];
        for (var i = 0; i < values.length; i++) {
          msg.addIndex(values[i]);
        }
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Pair.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Pair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Pair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Pair.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getIndexList();
  if (f.length > 0) {
    writer.writePackedInt32(1, f);
  }
};

/**
 * repeated int32 index = 1;
 * @return {!Array<number>}
 */
proto.Pair.prototype.getIndexList = function () {
  return /** @type {!Array<number>} */jspb.Message.getRepeatedField(this, 1);
};

/**
 * @param {!Array<number>} value
 * @return {!proto.Pair} returns this
 */
proto.Pair.prototype.setIndexList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.Pair} returns this
 */
proto.Pair.prototype.addIndex = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Pair} returns this
 */
proto.Pair.prototype.clearIndexList = function () {
  return this.setIndexList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Pairs.repeatedFields_ = [2];
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Pairs.prototype.toObject = function (opt_includeInstance) {
    return proto.Pairs.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Pairs} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Pairs.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        type: jspb.Message.getFieldWithDefault(msg, 1, 0),
        pairsList: jspb.Message.toObjectList(msg.getPairsList(), proto.Pair.toObject, includeInstance)
      };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Pairs}
 */
proto.Pairs.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Pairs();
  return proto.Pairs.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Pairs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Pairs}
 */
proto.Pairs.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.TYPE} */reader.readEnum();
        msg.setType(value);
        break;
      case 2:
        var value = new proto.Pair();
        reader.readMessage(value, proto.Pair.deserializeBinaryFromReader);
        msg.addPairs(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Pairs.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Pairs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Pairs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Pairs.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getPairsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.Pair.serializeBinaryToWriter);
  }
};

/**
 * optional TYPE type = 1;
 * @return {!proto.TYPE}
 */
proto.Pairs.prototype.getType = function () {
  return /** @type {!proto.TYPE} */jspb.Message.getFieldWithDefault(this, 1, 0);
};

/**
 * @param {!proto.TYPE} value
 * @return {!proto.Pairs} returns this
 */
proto.Pairs.prototype.setType = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * repeated Pair pairs = 2;
 * @return {!Array<!proto.Pair>}
 */
proto.Pairs.prototype.getPairsList = function () {
  return /** @type{!Array<!proto.Pair>} */jspb.Message.getRepeatedWrapperField(this, proto.Pair, 2);
};

/**
 * @param {!Array<!proto.Pair>} value
 * @return {!proto.Pairs} returns this
*/
proto.Pairs.prototype.setPairsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.Pair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Pair}
 */
proto.Pairs.prototype.addPairs = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Pair, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Pairs} returns this
 */
proto.Pairs.prototype.clearPairsList = function () {
  return this.setPairsList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Item.prototype.toObject = function (opt_includeInstance) {
    return proto.Item.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Item} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Item.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, 0),
        index: jspb.Message.getFieldWithDefault(msg, 2, 0),
        isNew: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
        isVisited: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
        isQueue: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
      };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Item}
 */
proto.Item.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Item();
  return proto.Item.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Item}
 */
proto.Item.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */reader.readInt32();
        msg.setKey(value);
        break;
      case 2:
        var value = /** @type {number} */reader.readInt32();
        msg.setIndex(value);
        break;
      case 3:
        var value = /** @type {boolean} */reader.readBool();
        msg.setIsNew(value);
        break;
      case 4:
        var value = /** @type {boolean} */reader.readBool();
        msg.setIsVisited(value);
        break;
      case 5:
        var value = /** @type {boolean} */reader.readBool();
        msg.setIsQueue(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Item.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Item.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(2, f);
  }
  f = message.getIsNew();
  if (f) {
    writer.writeBool(3, f);
  }
  f = message.getIsVisited();
  if (f) {
    writer.writeBool(4, f);
  }
  f = message.getIsQueue();
  if (f) {
    writer.writeBool(5, f);
  }
};

/**
 * optional int32 key = 1;
 * @return {number}
 */
proto.Item.prototype.getKey = function () {
  return /** @type {number} */jspb.Message.getFieldWithDefault(this, 1, 0);
};

/**
 * @param {number} value
 * @return {!proto.Item} returns this
 */
proto.Item.prototype.setKey = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int32 index = 2;
 * @return {number}
 */
proto.Item.prototype.getIndex = function () {
  return /** @type {number} */jspb.Message.getFieldWithDefault(this, 2, 0);
};

/**
 * @param {number} value
 * @return {!proto.Item} returns this
 */
proto.Item.prototype.setIndex = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional bool is_new = 3;
 * @return {boolean}
 */
proto.Item.prototype.getIsNew = function () {
  return /** @type {boolean} */jspb.Message.getBooleanFieldWithDefault(this, 3, false);
};

/**
 * @param {boolean} value
 * @return {!proto.Item} returns this
 */
proto.Item.prototype.setIsNew = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional bool is_visited = 4;
 * @return {boolean}
 */
proto.Item.prototype.getIsVisited = function () {
  return /** @type {boolean} */jspb.Message.getBooleanFieldWithDefault(this, 4, false);
};

/**
 * @param {boolean} value
 * @return {!proto.Item} returns this
 */
proto.Item.prototype.setIsVisited = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional bool is_queue = 5;
 * @return {boolean}
 */
proto.Item.prototype.getIsQueue = function () {
  return /** @type {boolean} */jspb.Message.getBooleanFieldWithDefault(this, 5, false);
};

/**
 * @param {boolean} value
 * @return {!proto.Item} returns this
 */
proto.Item.prototype.setIsQueue = function (value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RowItem.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.RowItem.prototype.toObject = function (opt_includeInstance) {
    return proto.RowItem.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.RowItem} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.RowItem.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        itemList: jspb.Message.toObjectList(msg.getItemList(), proto.Item.toObject, includeInstance)
      };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RowItem}
 */
proto.RowItem.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RowItem();
  return proto.RowItem.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RowItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RowItem}
 */
proto.RowItem.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.Item();
        reader.readMessage(value, proto.Item.deserializeBinaryFromReader);
        msg.addItem(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RowItem.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.RowItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RowItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RowItem.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.Item.serializeBinaryToWriter);
  }
};

/**
 * repeated Item item = 1;
 * @return {!Array<!proto.Item>}
 */
proto.RowItem.prototype.getItemList = function () {
  return /** @type{!Array<!proto.Item>} */jspb.Message.getRepeatedWrapperField(this, proto.Item, 1);
};

/**
 * @param {!Array<!proto.Item>} value
 * @return {!proto.RowItem} returns this
*/
proto.RowItem.prototype.setItemList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Item}
 */
proto.RowItem.prototype.addItem = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Item, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RowItem} returns this
 */
proto.RowItem.prototype.clearItemList = function () {
  return this.setItemList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Matrix.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Matrix.prototype.toObject = function (opt_includeInstance) {
    return proto.Matrix.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Matrix} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Matrix.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        rowItemList: jspb.Message.toObjectList(msg.getRowItemList(), proto.RowItem.toObject, includeInstance)
      };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Matrix}
 */
proto.Matrix.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Matrix();
  return proto.Matrix.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Matrix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Matrix}
 */
proto.Matrix.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.RowItem();
        reader.readMessage(value, proto.RowItem.deserializeBinaryFromReader);
        msg.addRowItem(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Matrix.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Matrix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Matrix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Matrix.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRowItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.RowItem.serializeBinaryToWriter);
  }
};

/**
 * repeated RowItem row_item = 1;
 * @return {!Array<!proto.RowItem>}
 */
proto.Matrix.prototype.getRowItemList = function () {
  return /** @type{!Array<!proto.RowItem>} */jspb.Message.getRepeatedWrapperField(this, proto.RowItem, 1);
};

/**
 * @param {!Array<!proto.RowItem>} value
 * @return {!proto.Matrix} returns this
*/
proto.Matrix.prototype.setRowItemList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.RowItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.RowItem}
 */
proto.Matrix.prototype.addRowItem = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.RowItem, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Matrix} returns this
 */
proto.Matrix.prototype.clearRowItemList = function () {
  return this.setRowItemList([]);
};

/**
 * @enum {number}
 */
proto.TYPE = {
  NONE: 0,
  HORIZONTAL: 1,
  VERTICAL: 2
};
goog.object.extend(exports, proto);

/***/ }),

/***/ "./src/match3-game/index.js":
/*!**********************************!*\
  !*** ./src/match3-game/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ callBoard)
/* harmony export */ });
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "./src/match3-game/item.js");
/* harmony import */ var _shape_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape.js */ "./src/match3-game/shape.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var Score = document.getElementById('score');
var ROWS = 10;
var COLUMNS = 18;
var BOX_SIZE = 40;
var COLOR = "rgba(248 238 164 / 1)";
var COLOR_SELECTED = "rgba(250 128 114 / 1)";
var COLOR_BORDER = "#ccc";
var COLOR_SUGGESTED = "rgba(0 128 128 / 1)";
var SPECIAL = "SHAPE_SPECIAL";
var isLoop = false;
var preKey;
var dx = [-1, 1]; //trên dưới đảo ngược dx dy là trái phải
var dy = [0, 0];
var MAP_TYPE = ['NORMAL', 'BOOM', 'HORIZONAL', 'VERTICAL', 'DESTROY'];
var TYPE = Object.freeze({
  NORMAL: 'NORMAL',
  //0
  BOOM: 'BOOM',
  //1
  HORIZONAL: 'HORIZONAL',
  //3
  VERTICAL: 'VERTICAL',
  //5
  DESTROY: 'DESTROY',
  //7 //ăn 5
  CROSS: 'CROSS',
  //8
  MEGA_BOOM: 'MEGA_BOOM',
  //boom + boom 2
  COMBO_BOOM: 'COMBO_BOOM',
  //hori or verti + Bom //
  ULTRA_DESTROY: 'ULTRA_DESTROY',
  //DESTROY + BOOM
  EXTRA_DESTROY: 'EXTRA_DESTROY',
  //hori or verti + DESTROY
  MULTI_DESTROY: 'MULTI_DESTROY' //2 destroy
});
var DEFINE_COMBO = [{
  COMBO: [TYPE.HORIZONAL, TYPE.VERTICAL],
  result: "CROSS"
}, {
  COMBO: [TYPE.BOOM],
  result: "MEGA_BOOM"
}, {
  COMBO: [TYPE.BOOM, TYPE.HORIZONAL, TYPE.VERTICAL],
  result: "COMBO_BOOM"
}, {
  COMBO: [TYPE.DESTROY, TYPE.BOOM],
  result: "ULTRA_DESTROY"
}, {
  COMBO: [TYPE.DESTROY, TYPE.HORIZONAL, TYPE.VERTICAL],
  result: "EXTRA_DESTROY"
}, {
  COMBO: [TYPE.DESTROY],
  result: "MULTI_DESTROY"
}];
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
var _shape = /*#__PURE__*/new WeakMap();
var _items = /*#__PURE__*/new WeakMap();
var _score = /*#__PURE__*/new WeakMap();
var _listMatches = /*#__PURE__*/new WeakMap();
var _visited = /*#__PURE__*/new WeakMap();
var _Board_brand = /*#__PURE__*/new WeakSet();
var Board = /*#__PURE__*/function () {
  function Board(_ctx, shape, _items2) {
    var _this = this;
    _classCallCheck(this, Board);
    _classPrivateMethodInitSpec(this, _Board_brand);
    _classPrivateFieldInitSpec(this, _shape, void 0);
    _classPrivateFieldInitSpec(this, _items, void 0);
    _classPrivateFieldInitSpec(this, _score, void 0);
    _classPrivateFieldInitSpec(this, _listMatches, []);
    _classPrivateFieldInitSpec(this, _visited, void 0);
    _defineProperty(this, "swap", function (matches) {
      return new Promise(function (resolve) {
        var a;
        var b;
        var axis;
        var numberAxis;
        if (matches.length) {
          if (matches[0][0] == matches[1][0]) {
            axis = "HORIZONTAL";
            numberAxis = matches[0][0];
            a = Math.min(matches[0][1], matches[1][1]); //col
            b = Math.max(matches[0][1], matches[1][1]); //col
          } else if (matches[0][1] == matches[1][1]) {
            axis = "VERTICAL";
            numberAxis = matches[0][1];
            a = Math.min(matches[0][0], matches[1][0]); //row
            b = Math.max(matches[0][0], matches[1][0]); //row
          }
        }
        var speed = 0.09;
        var isAnimating = function isAnimating(k, l) {
          if (k >= b && l <= a) {
            return false;
          } else {
            return true;
          }
        };
        var drawBlock = function drawBlock(x, y, i) {
          var src;
          if (axis == 'HORIZONTAL') {
            src = _classPrivateFieldGet(_shape, _this).getSrcImage(_classPrivateFieldGet(_items, _this)[Math.floor(x)][Math.floor(i)].key, _classPrivateFieldGet(_items, _this)[Math.floor(x)][Math.floor(i)].index);
          } else if (axis == 'VERTICAL') {
            src = _classPrivateFieldGet(_shape, _this).getSrcImage(_classPrivateFieldGet(_items, _this)[Math.floor(i)][Math.floor(y)].key, _classPrivateFieldGet(_items, _this)[Math.floor(i)][Math.floor(y)].index);
          }
          _this.ctx.drawImage(src, y * BOX_SIZE, x * BOX_SIZE, BOX_SIZE, BOX_SIZE);
        };
        var isAnimated = isAnimating(a, b);
        var _draw = function draw(k, l) {
          if (axis == 'HORIZONTAL') {
            if (!isAnimated) {
              var temp = _classPrivateFieldGet(_items, _this)[numberAxis][a];
              _classPrivateFieldGet(_items, _this)[numberAxis][a] = _classPrivateFieldGet(_items, _this)[numberAxis][b];
              _this.drawDiamond(a, numberAxis, _classPrivateFieldGet(_items, _this)[numberAxis][a]);
              _classPrivateFieldGet(_items, _this)[numberAxis][b] = temp;
              _this.drawDiamond(b, numberAxis, _classPrivateFieldGet(_items, _this)[numberAxis][b]);
              resolve();
              return;
            }
            ;
            ctx.clearRect(a * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            ctx.clearRect(b * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            k += speed;
            drawBlock(numberAxis, k, a);
            // this.drawDiamond(k, numberAxis, this.#items[numberAxis][k]);
            l -= speed;
            drawBlock(numberAxis, l, b);
            // this.drawDiamond(l, numberAxis, this.#items[numberAxis][l]);
          } else if (axis == 'VERTICAL') {
            if (!isAnimated) {
              var _temp = _classPrivateFieldGet(_items, _this)[a][numberAxis];
              _classPrivateFieldGet(_items, _this)[a][numberAxis] = _classPrivateFieldGet(_items, _this)[b][numberAxis];
              _this.drawDiamond(numberAxis, a, _classPrivateFieldGet(_items, _this)[a][numberAxis]);
              _classPrivateFieldGet(_items, _this)[b][numberAxis] = _temp;
              _this.drawDiamond(numberAxis, b, _classPrivateFieldGet(_items, _this)[b][numberAxis]);
              resolve();
              return;
            }
            ;
            ctx.clearRect(numberAxis * BOX_SIZE, a * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            ctx.clearRect(numberAxis * BOX_SIZE, b * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            k += speed;
            drawBlock(k, numberAxis, a);
            // this.drawDiamond(numberAxis, k, this.#items[k][numberAxis]);
            l -= speed;
            drawBlock(l, numberAxis, b);
            // this.drawDiamond(numberAxis, l, this.#items[l][numberAxis]);
          }
          if (isAnimated) {
            requestAnimationFrame(function () {
              _draw(k, l);
            });
          }
          isAnimated = isAnimating(k, l);
        };
        _draw(a, b);
      });
    });
    this.ctx = _ctx;
    _classPrivateFieldSet(_shape, this, shape);
    _classPrivateFieldSet(_items, this, _assertClassBrand(_Board_brand, this, _generateItems).call(this, _items2));
    // this.#items = items;
    _classPrivateFieldSet(_visited, this, _assertClassBrand(_Board_brand, this, _init).call(this));
    _classPrivateFieldSet(_score, this, 0);
    this.suggestes = [];
    this.drawSuggest = [];
    this.queue = [];
  }
  return _createClass(Board, [{
    key: "items",
    get: function get() {
      return _classPrivateFieldGet(_items, this);
    }
  }, {
    key: "score",
    get: function get() {
      return _classPrivateFieldGet(_score, this);
    }
  }, {
    key: "listMatches",
    get: function get() {
      return _classPrivateFieldGet(_listMatches, this);
    }
  }, {
    key: "fadeAndShrinkEffect",
    value: function fadeAndShrinkEffect(col, row, fadeSpeed, shrinkRate, originalSize) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var fadeOpacity = 1.0;
        var currentSize = originalSize;
        var shrinkInterval = setInterval(function () {
          fadeOpacity -= fadeSpeed;
          _this2.ctx.clearRect(col * originalSize, row * originalSize, originalSize, originalSize);
          var x = col * originalSize + (originalSize - currentSize) / 2;
          var y = row * originalSize + (originalSize - currentSize) / 2;
          _this2.ctx.globalAlpha = fadeOpacity;
          _this2.ctx.fillRect(x, y, currentSize, currentSize);
          currentSize -= shrinkRate;
          if (currentSize <= 0) {
            currentSize = 0;
            clearInterval(shrinkInterval);
            resolve();
          }
        }, 50);
      });
    }
  }, {
    key: "drawDiamond",
    value: function drawDiamond(x, y, item) {
      //y: là row
      //x: là col
      this.ctx.fillStyle = item.color;
      this.ctx.fillRect(x * BOX_SIZE, y * BOX_SIZE, BOX_SIZE, BOX_SIZE);
      this.ctx.lineWidth = 3;
      this.ctx.globalAlpha = 1.0;
      this.ctx.strokeStyle = item.colorBorder;
      this.ctx.strokeRect(x * BOX_SIZE, y * BOX_SIZE, BOX_SIZE, BOX_SIZE);
      if (item) {
        if (item.index == "SHAPE_SPECIAL") {
          item.key = _classPrivateFieldGet(_shape, this).getIndexByKey("SHAPE_SPECIAL");
          item.index = 0;
        }
        var src = _classPrivateFieldGet(_shape, this).getSrcImage(item.key, item.index);
        this.ctx.drawImage(src, x * BOX_SIZE, y * BOX_SIZE, BOX_SIZE, BOX_SIZE);
      }
    }
  }, {
    key: "drawBoard",
    value: function drawBoard() {
      for (var r = 0; r < _classPrivateFieldGet(_items, this).length; r++) {
        for (var c = 0; c < _classPrivateFieldGet(_items, this)[0].length; c++) {
          this.drawDiamond(c, r, _classPrivateFieldGet(_items, this)[r][c]);
        }
      }
    }
  }, {
    key: "swapElement",
    value: function swapElement(pre, pos) {
      var a = _classPrivateFieldGet(_items, this)[pre.row][pre.col];
      _classPrivateFieldGet(_items, this)[pre.row][pre.col] = _classPrivateFieldGet(_items, this)[pos.row][pos.col];
      _classPrivateFieldGet(_items, this)[pos.row][pos.col] = a;
      this.drawDiamond(pre.col, pre.row, _classPrivateFieldGet(_items, this)[pre.row][pre.col]);
      this.drawDiamond(pos.col, pos.row, _classPrivateFieldGet(_items, this)[pos.row][pos.col]);
    }
  }, {
    key: "validSwap",
    value: function () {
      var _validSwap = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pre, pos) {
        var matches, isSwapBack;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              matches = [[pre.row, pre.col], [pos.row, pos.col]];
              _context.next = 3;
              return this.swap(matches);
            case 3:
              _context.prev = 3;
              _context.next = 6;
              return _assertClassBrand(_Board_brand, this, _specialMatch).call(this, pre, pos);
            case 6:
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);
              _context.next = 12;
              return this.browseDiamon(matches);
            case 12:
              if (!isLoop) {
                _context.next = 19;
                break;
              }
              _context.next = 15;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 15:
              // this.#init();
              this.autoScan();
              isSwapBack = false;
              _context.next = 20;
              break;
            case 19:
              isSwapBack = true;
            case 20:
              if (!isSwapBack) {
                _context.next = 23;
                break;
              }
              _context.next = 23;
              return this.swap(matches);
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 8]]);
      }));
      function validSwap(_x, _x2) {
        return _validSwap.apply(this, arguments);
      }
      return validSwap;
    }()
  }, {
    key: "effectClick",
    value: function effectClick(col, row) {
      _classPrivateFieldGet(_items, this)[row][col].color = COLOR_SELECTED;
      this.drawDiamond(col, row, _classPrivateFieldGet(_items, this)[row][col]);
      this.clickOn = {
        row: row,
        col: col
      };
      return this.clickOn;
    }
  }, {
    key: "suggestScore",
    value: function suggestScore() {
      var length = this.suggestes.length;
      this.drawSuggest = [];
      for (var i = 0; i < length; i++) {
        var isSuggest = this.showSuggest(this.suggestes[i]);
        if (isSuggest) {
          var temp = this.suggestes[i];
          this.drawSuggest.push([temp[0][0], temp[0][1]]);
          this.drawSuggest.push([temp[1][0], temp[1][1]]);
          break;
        }
        // console.log(this.suggestes[i]);
      }
    }
  }, {
    key: "isSuggest",
    value: function isSuggest(arr, dx, dy) {
      var key = _classPrivateFieldGet(_items, this)[arr[0]][arr[1]].key;
      var isSuggest = false;
      for (var i = 0; i < 3; i++) {
        var i1 = arr[0] + dx[i];
        var j1 = arr[1] + dy[i];
        if (i1 >= 0 && i1 < ROWS && j1 >= 0 && j1 < COLUMNS && _classPrivateFieldGet(_items, this)[i1][j1].key == key) {
          this.drawSuggest.push([i1, j1]);
          isSuggest = true;
        }
      }
      return isSuggest;
    }
  }, {
    key: "showSuggest",
    value: function showSuggest(arr) {
      //dx, dy cho hàng dọc
      //đảo dx, dy thì là ngang;
      var dx = [-2, -1, -1]; //
      var dy = [0, -1, +1];
      var isSuggest;
      if (arr[0][0] != arr[1][0]) {
        //2 dọc
        isSuggest = this.isSuggest(arr[0], dx, dy); //duyệt phía trên
        if (!isSuggest) {
          return this.isSuggest(arr[1], dx.filter(function (item) {
            return Math.abs(item);
          }), dy); //duyệt phía dưới
        } else {
          return isSuggest;
        }
      } else {
        isSuggest = this.isSuggest(arr[0], dy, dx); //duyệt bên trái
        if (!isSuggest) {
          return this.isSuggest(arr[1], dy, dx.filter(function (item) {
            return Math.abs(item);
          })); //duyệt bên phải
        } else {
          return isSuggest;
        }
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown(col, len) {
      var _this3 = this;
      new Promise(function (resolve, reject) {
        while (len >= 0) {
          if (_classPrivateFieldGet(_items, _this3)[len][col].key != 0) {
            len--;
            continue;
          } else {
            var _loop = function _loop() {
              if (k == 0) {
                var num = getRandomInt(_classPrivateFieldGet(_shape, _this3).length() - 1);
                _classPrivateFieldGet(_items, _this3)[k][col].key = num;
                _this3.drawDiamond(col, k, _classPrivateFieldGet(_items, _this3)[k][col]);
              } else {
                var pre = {
                  row: k,
                  col: col
                };
                var pos = {
                  row: k - 1,
                  col: col
                };
                var index = _this3.queue.findIndex(function (element) {
                  return JSON.stringify(element) === JSON.stringify([[pos.row, pos.col]]);
                });
                if (index >= 0) {
                  _this3.queue[index][0] = [pre.row, pre.col];
                }
                _this3.swapElement(pre, pos);
              }
            };
            for (var k = len; k >= 0; k--) {
              _loop();
            }
            len = ROWS - 1;
          }
          isLoop = true;
          _assertClassBrand(_Board_brand, _this3, _refeshVisitedItems).call(_this3);
          resolve();
        }
      });
    }
  }, {
    key: "defaultItems",
    value: function defaultItems(row, col) {
      _classPrivateFieldGet(_items, this)[row][col].index = 0;
      _classPrivateFieldGet(_items, this)[row][col].type = TYPE.NORMAL;
      _classPrivateFieldGet(_items, this)[row][col].color = COLOR;
      _classPrivateFieldGet(_items, this)[row][col].isQueue = false;
      _assertClassBrand(_Board_brand, this, _clearDraw).call(this, col, row, _classPrivateFieldGet(_items, this)[row][col]);
    }
  }, {
    key: "removeDiamon",
    value: function () {
      var _removeDiamon = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(matches) {
        var temp, length, promises, listMatches, i, row, col, fadePromise, _i, _row, _col, _fadePromise;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(matches == null)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              temp = matches.slice();
              length = temp.length; // if (length > 2) {
              promises = [];
              listMatches = [];
              resetTimer();
              _classPrivateFieldSet(_score, this, _assertClassBrand(_Board_brand, this, _generateScore).call(this, length));
              this.showScore(Score);
              for (i = 0; i < temp.length; i++) {
                row = temp[i][0];
                col = temp[i][1];
                if (!_classPrivateFieldGet(_items, this)[row][col].isNew) {
                  if (_classPrivateFieldGet(_items, this)[row][col].type != TYPE.NORMAL) {
                    listMatches = listMatches.concat(_assertClassBrand(_Board_brand, this, _handleSigleSkill).call(this, row, col));
                  }
                  if ((_classPrivateFieldGet(_items, this)[row][col].index != 0 || _classPrivateFieldGet(_items, this)[row][col].key == 6) && _classPrivateFieldGet(_items, this)[row][col].isQueue == false) {
                    if (_classPrivateFieldGet(_items, this)[row][col].key != 0 && _classPrivateFieldGet(_items, this)[row][col].key != 6) {
                      preKey = _classPrivateFieldGet(_items, this)[row][col].key;
                    }
                    // let newMatches = this.#handleSigleSkill(row, col, preKey);
                    // this.queue.push([[row, col]]);
                    // this.#items[row][col].isQueue = true;
                    // continue
                    // if (newMatches) {
                    //     temp = temp.concat(newMatches);
                    // }
                  }
                  fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, BOX_SIZE);
                  _classPrivateFieldGet(_items, this)[row][col].key = 0;
                  _classPrivateFieldGet(_items, this)[row][col].index = 0;
                  _classPrivateFieldGet(_items, this)[row][col].type = TYPE.NORMAL;
                  _classPrivateFieldGet(_items, this)[row][col].color = COLOR;
                  _classPrivateFieldGet(_items, this)[row][col].isQueue = false;
                  _assertClassBrand(_Board_brand, this, _clearDraw).call(this, col, row, _classPrivateFieldGet(_items, this)[row][col]);
                  promises.push(fadePromise);
                  // this.#clearDraw(col, row, this.#items[row][col]);
                } else {
                  _classPrivateFieldGet(_items, this)[row][col].isNew = false;
                }
              }
              if (!listMatches.length) {
                _context2.next = 36;
                break;
              }
              _i = 0;
            case 12:
              if (!(_i < listMatches.length)) {
                _context2.next = 36;
                break;
              }
              _row = listMatches[_i][0];
              _col = listMatches[_i][1];
              if (_classPrivateFieldGet(_items, this)[_row][_col].isNew) {
                _context2.next = 32;
                break;
              }
              if (!(_classPrivateFieldGet(_items, this)[_row][_col].index != 0 || _classPrivateFieldGet(_items, this)[_row][_col].key == 6)) {
                _context2.next = 21;
                break;
              }
              if (_classPrivateFieldGet(_items, this)[_row][_col].key != 0 && _classPrivateFieldGet(_items, this)[_row][_col].key != 6) {
                preKey = _classPrivateFieldGet(_items, this)[_row][_col].key;
              }
              this.queue.push([[_row, _col]]);
              this.queue = _toConsumableArray(new Set(this.queue.map(JSON.stringify))).map(JSON.parse);
              // this.#items[row][col].isQueue = true;
              return _context2.abrupt("continue", 33);
            case 21:
              _fadePromise = this.fadeAndShrinkEffect(_col, _row, 0.1, 5, BOX_SIZE);
              _classPrivateFieldGet(_items, this)[_row][_col].key = 0;
              _classPrivateFieldGet(_items, this)[_row][_col].index = 0;
              _classPrivateFieldGet(_items, this)[_row][_col].type = TYPE.NORMAL;
              _classPrivateFieldGet(_items, this)[_row][_col].color = COLOR;
              _classPrivateFieldGet(_items, this)[_row][_col].isQueue = false;
              _assertClassBrand(_Board_brand, this, _clearDraw).call(this, _col, _row, _classPrivateFieldGet(_items, this)[_row][_col]);
              temp.push([_row, _col]);
              promises.push(_fadePromise);
              // this.#clearDraw(col, row, this.#items[row][col]);
              _context2.next = 33;
              break;
            case 32:
              _classPrivateFieldGet(_items, this)[_row][_col].isNew = false;
            case 33:
              _i++;
              _context2.next = 12;
              break;
            case 36:
              _context2.next = 38;
              return Promise.all(promises);
            case 38:
              isLoop = true;
              // } else if (length == 2) {
              //     this.suggestes.push(matches);
              // }
              _assertClassBrand(_Board_brand, this, _refeshVisitedItems).call(this);
              return _context2.abrupt("return", temp);
            case 41:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function removeDiamon(_x3) {
        return _removeDiamon.apply(this, arguments);
      }
      return removeDiamon;
    }()
  }, {
    key: "mapSpecialShapes",
    value: function mapSpecialShapes(matches, match) {
      var row = matches[0][0];
      var col = matches[0][1];
      _classPrivateFieldGet(_items, this)[row][col].index = match;
      _classPrivateFieldGet(_items, this)[row][col].type = match == SPECIAL ? TYPE[MAP_TYPE[4]] : TYPE[MAP_TYPE[match]];
      _classPrivateFieldGet(_items, this)[row][col].isNew = true;
      _classPrivateFieldGet(_items, this)[row][col].colorBorder = matches.colorBorder;
      // this.#items[row][col].color = COLOR;
      _assertClassBrand(_Board_brand, this, _clearDraw).call(this, col, row, _classPrivateFieldGet(_items, this)[row][col]);
    }
  }, {
    key: "numberOfMatches",
    value: function numberOfMatches(matches) {
      var length = matches.length;
      return length >= 5 ? 2 : length > 3 && length < 5 ? 1 : length > 2 && length < 4 ? 0 : -1;
    }
  }, {
    key: "defineNumberOfMatches",
    value: function defineNumberOfMatches(matches) {
      var length = matches.length;
      return length >= 5 ? 5 : length > 3 && length < 5 ? 3 : -1;
    }
  }, {
    key: "autoScan",
    value: function () {
      var _autoScan = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var count, length;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              count = 0;
            case 1:
              this.suggestes = [];
              length = _classPrivateFieldGet(_shape, this).length() - 1;
              isLoop = false;
              _classPrivateFieldSet(_listMatches, this, []);
              _assertClassBrand(_Board_brand, this, _refeshVisitedItems).call(this);
              while (length >= 0) {
                _assertClassBrand(_Board_brand, this, _refreshBoardVisited).call(this);
                this.scanAllImage(length, _classPrivateFieldGet(_visited, this));
                length--;
              }
              if (!_classPrivateFieldGet(_listMatches, this).length) {
                _context3.next = 20;
                break;
              }
              _context3.prev = 8;
              _context3.next = 11;
              return _assertClassBrand(_Board_brand, this, _clearMatches).call(this, _classPrivateFieldGet(_listMatches, this));
            case 11:
              _context3.next = 13;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 13:
              _assertClassBrand(_Board_brand, this, _refreshBoardVisited).call(this);
              _assertClassBrand(_Board_brand, this, _refeshVisitedItems).call(this);
              _context3.next = 19;
              break;
            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](8);
            case 19:
              _assertClassBrand(_Board_brand, this, _refeshVisitedItems).call(this);
            case 20:
              count++;
            case 21:
              if (isLoop) {
                _context3.next = 1;
                break;
              }
            case 22:
              this.queue = [];
              this.suggestScore();
              if (this.drawSuggest.length == 0) {
                this.drawBoard();
              }
            case 25:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[8, 17]]);
      }));
      function autoScan() {
        return _autoScan.apply(this, arguments);
      }
      return autoScan;
    }()
  }, {
    key: "scanAllImage",
    value: function scanAllImage(key, visited) {
      for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j < COLUMNS; j++) {
          _assertClassBrand(_Board_brand, this, _elementMatch).call(this, i, j, key, visited);
        }
      }
    }
  }, {
    key: "browseDiamon",
    value: function () {
      var _browseDiamon = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(matches) {
        var _this4 = this;
        var promises, _loop2, i;
        return _regeneratorRuntime().wrap(function _callee5$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              isLoop = false;
              promises = [];
              if (!matches.length) {
                _context6.next = 11;
                break;
              }
              _assertClassBrand(_Board_brand, this, _refreshBoardVisited).call(this);
              _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                var row, col, key;
                return _regeneratorRuntime().wrap(function _loop2$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      _assertClassBrand(_Board_brand, _this4, _refeshVisitedItems).call(_this4);
                      row = matches[i][0];
                      col = matches[i][1];
                      key = _classPrivateFieldGet(_items, _this4)[row][col].key;
                      promises.push(new Promise(function (resolve, reject) {
                        _assertClassBrand(_Board_brand, _this4, _elementMatch).call(_this4, row, col, key, _classPrivateFieldGet(_visited, _this4));
                        resolve();
                      }));
                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }, _loop2);
              });
              i = 0;
            case 6:
              if (!(i < matches.length)) {
                _context6.next = 11;
                break;
              }
              return _context6.delegateYield(_loop2(), "t0", 8);
            case 8:
              i++;
              _context6.next = 6;
              break;
            case 11:
              return _context6.abrupt("return", Promise.all(promises).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!_classPrivateFieldGet(_listMatches, _this4).length) {
                        _context5.next = 9;
                        break;
                      }
                      _context5.prev = 1;
                      _context5.next = 4;
                      return _assertClassBrand(_Board_brand, _this4, _clearMatches).call(_this4, _classPrivateFieldGet(_listMatches, _this4));
                    case 4:
                      _assertClassBrand(_Board_brand, _this4, _refeshVisitedItems).call(_this4);
                      _context5.next = 9;
                      break;
                    case 7:
                      _context5.prev = 7;
                      _context5.t0 = _context5["catch"](1);
                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee4, null, [[1, 7]]);
              }))));
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee5, this);
      }));
      function browseDiamon(_x4) {
        return _browseDiamon.apply(this, arguments);
      }
      return browseDiamon;
    }()
  }, {
    key: "drawBoardSuggest",
    value: function drawBoardSuggest(color) {
      for (var i = 0; i < this.drawSuggest.length; i++) {
        var temp = this.drawSuggest[i];
        var row = temp[0];
        var col = temp[1];
        this.drawDiamond(col, row, _classPrivateFieldGet(_items, this)[row][col], color);
      }
    }
  }, {
    key: "showScore",
    value: function showScore(Score) {
      Score.innerText = this.score;
      Score.style.color = '#0744b6';
      Score.style.fontWeight = "900";
      Score.style.fontSize = "50px";
    }
  }]);
}();
function _generateItems(itemList) {
  // return mock();
  return itemList.map(function (element) {
    return element.map(function (item) {
      return new _item_js__WEBPACK_IMPORTED_MODULE_0__["default"](item.key, item.index, COLOR, COLOR_BORDER, false, false, TYPE.NORMAL, false);
    });
  });
}
function _refeshVisitedItems() {
  _classPrivateFieldGet(_items, this).map(function (elements) {
    return elements.map(function (item) {
      item.visited ? item.visited = false : item;
      item.isNew ? item.isNew = false : item;
    });
  });
}
function _generateScore(newScore) {
  if (newScore > 5) {
    return this.score + (newScore - 5) * 300;
  } else {
    return this.score + newScore * 100;
  }
}
function _init() {
  return Array.from({
    length: ROWS
  }, function () {
    return Array(COLUMNS).fill(false);
  });
}
function _refreshBoardVisited() {
  _classPrivateFieldSet(_visited, this, _classPrivateFieldGet(_visited, this).map(function (elements) {
    return elements.map(function (item) {
      return item === true ? false : item;
    });
  }));
}
function _dfs(i, j, matches, key, visited, dx, dy, isHori) {
  if (_classPrivateFieldGet(_items, this)[i][j].key == key) {
    matches.push([i, j]);
  }
  visited[i][j] = true;
  if (isHori) {
    _classPrivateFieldGet(_items, this)[i][j].visited = true;
  }
  for (var k = 0; k < 2; k++) {
    var i1 = i + dx[k];
    var j1 = j + dy[k];
    if (i1 >= 0 && i1 < ROWS && j1 >= 0 && j1 < COLUMNS && this.items[i1][j1].key == key && !visited[i1][j1] && !_classPrivateFieldGet(_items, this)[i1][j1].visited) {
      _assertClassBrand(_Board_brand, this, _dfs).call(this, i1, j1, matches, key, visited, dx, dy, isHori);
    }
  }
}
function _clearDraw(x, y, item) {
  if (item.key != 0) {
    item.color = COLOR;
    this.drawDiamond(x, y, item);
  }
}
function _specialMatch(pre, pos) {
  var _this5 = this;
  var type;
  var results;
  if (_classPrivateFieldGet(_items, this)[pre.row][pre.col].index != 0 && _classPrivateFieldGet(_items, this)[pos.row][pos.col].index != 0) {
    type = _assertClassBrand(_Board_brand, this, _defineType).call(this, _classPrivateFieldGet(_items, this)[pre.row][pre.col].type, _classPrivateFieldGet(_items, this)[pos.row][pos.col].type);
    _classPrivateFieldGet(_items, this)[pre.row][pre.col].isQueue = true;
    _classPrivateFieldGet(_items, this)[pos.row][pos.col].isQueue = true;
    results = _assertClassBrand(_Board_brand, this, _handleDoubleSkill).call(this, [pos.row, pos.col], type);
  } else if (_classPrivateFieldGet(_items, this)[pre.row][pre.col].key == 6 || _classPrivateFieldGet(_items, this)[pos.row][pos.col].key == 6) {
    type = _assertClassBrand(_Board_brand, this, _defineType).call(this, _classPrivateFieldGet(_items, this)[pre.row][pre.col].type, _classPrivateFieldGet(_items, this)[pos.row][pos.col].type);
    var key;
    var index;
    if (_assertClassBrand(_Board_brand, this, _defineType).call(this, _classPrivateFieldGet(_items, this)[pre.row][pre.col].key == 6)) {
      key = _assertClassBrand(_Board_brand, this, _defineType).call(this, _classPrivateFieldGet(_items, this)[pos.row][pos.col].key);
      index = _assertClassBrand(_Board_brand, this, _defineType).call(this, _classPrivateFieldGet(_items, this)[pos.row][pos.col].index);
      _classPrivateFieldGet(_items, this)[pos.row][pos.col].isQueue = true;
    } else {
      key = _assertClassBrand(_Board_brand, this, _defineType).call(this, _classPrivateFieldGet(_items, this)[pre.row][pre.col].key);
      index = _assertClassBrand(_Board_brand, this, _defineType).call(this, _classPrivateFieldGet(_items, this)[pre.row][pre.col].index);
      _classPrivateFieldGet(_items, this)[pre.row][pre.col].isQueue = true;
    }
    results = _assertClassBrand(_Board_brand, this, _handleDoubleSkill).call(this, [pre.row][pre.col], type, key, index);
  }
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var sortArr, newData, _sortArr;
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (!(results && results.length)) {
              _context7.next = 28;
              break;
            }
            _this5.defaultItems(pre.row, pre.col);
            _this5.defaultItems(pos.row, pos.col);
            //remove
            results = _toConsumableArray(new Set(results.map(JSON.stringify))).map(JSON.parse);
            _context7.next = 6;
            return _assertClassBrand(_Board_brand, _this5, _dismissItems).call(_this5, results);
          case 6:
            _context7.next = 8;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 300);
            });
          case 8:
            sortArr = _toConsumableArray(new Set(results.slice(1).sort(function (a, b) {
              return a - b;
            }).flat()));
            sortArr.forEach(function (e) {
              _this5.moveDown(e, ROWS - 1);
            });
            _context7.next = 12;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 500);
            });
          case 12:
            if (!_this5.queue.length) {
              _context7.next = 25;
              break;
            }
            newData = [];
            _context7.next = 16;
            return _this5.removeDiamon(_this5.queue.shift());
          case 16:
            newData = _context7.sent;
            _context7.next = 19;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 300);
            });
          case 19:
            _sortArr = _toConsumableArray(new Set(newData.slice(1).sort(function (a, b) {
              return a - b;
            }).flat()));
            _sortArr.forEach(function (e) {
              _this5.moveDown(e, ROWS - 1);
            });
            _context7.next = 23;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 500);
            });
          case 23:
            _context7.next = 12;
            break;
          case 25:
            resolve(true);
            _context7.next = 29;
            break;
          case 28:
            reject(false);
          case 29:
          case "end":
            return _context7.stop();
        }
      }, _callee6);
    }));
    return function (_x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());
}
function _dismissItems(_x7) {
  return _dismissItems2.apply(this, arguments);
}
function _dismissItems2() {
  _dismissItems2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(matches) {
    var promises, i, row, col, fadePromise;
    return _regeneratorRuntime().wrap(function _callee7$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          promises = [];
          if (!matches.length) {
            _context8.next = 26;
            break;
          }
          i = 0;
        case 3:
          if (!(i < matches.length)) {
            _context8.next = 26;
            break;
          }
          row = matches[i][0];
          col = matches[i][1];
          if (_classPrivateFieldGet(_items, this)[row][col].isNew) {
            _context8.next = 22;
            break;
          }
          if (!(_classPrivateFieldGet(_items, this)[row][col].index != 0 || _classPrivateFieldGet(_items, this)[row][col].key == 6)) {
            _context8.next = 12;
            break;
          }
          if (_classPrivateFieldGet(_items, this)[row][col].key != 0 && _classPrivateFieldGet(_items, this)[row][col].key != 6) {
            preKey = _classPrivateFieldGet(_items, this)[row][col].key;
          }
          this.queue.push([[row, col]]);
          this.queue = _toConsumableArray(new Set(this.queue.map(JSON.stringify))).map(JSON.parse);
          return _context8.abrupt("continue", 23);
        case 12:
          fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, BOX_SIZE);
          _classPrivateFieldGet(_items, this)[row][col].key = 0;
          _classPrivateFieldGet(_items, this)[row][col].index = 0;
          _classPrivateFieldGet(_items, this)[row][col].type = TYPE.NORMAL;
          _classPrivateFieldGet(_items, this)[row][col].color = COLOR;
          _classPrivateFieldGet(_items, this)[row][col].isQueue = false;
          _assertClassBrand(_Board_brand, this, _clearDraw).call(this, col, row, _classPrivateFieldGet(_items, this)[row][col]);
          promises.push(fadePromise);
          _context8.next = 23;
          break;
        case 22:
          _classPrivateFieldGet(_items, this)[row][col].isNew = false;
        case 23:
          i++;
          _context8.next = 3;
          break;
        case 26:
          _context8.next = 28;
          return Promise.all(promises);
        case 28:
          return _context8.abrupt("return", _context8.sent);
        case 29:
        case "end":
          return _context8.stop();
      }
    }, _callee7, this);
  }));
  return _dismissItems2.apply(this, arguments);
}
function _elementMatch(i, j, key, visited) {
  if (_classPrivateFieldGet(_items, this)[i][j].key == key && !visited[i][j]) {
    var newVisited = _assertClassBrand(_Board_brand, this, _init).call(this);
    var matchCols = new Array();
    _assertClassBrand(_Board_brand, this, _dfs).call(this, i, j, matchCols, key, visited, dx, dy, false);
    var matchRows = new Array();
    for (var k = 0; k < matchCols.length; k++) {
      _assertClassBrand(_Board_brand, this, _dfs).call(this, matchCols[k][0], matchCols[k][1], matchRows, key, newVisited, dy, dx, true);
    }
    var max = getMatch(matchRows);
    if (max != null) {
      matchRows = matchRows.filter(function (items) {
        return items[0] == max;
      });
    }
    var length = _classPrivateFieldGet(_listMatches, this).length;
    if (matchCols.length > 2) {
      if (!_classPrivateFieldGet(_listMatches, this)[length]) {
        _classPrivateFieldGet(_listMatches, this)[length] = {};
        _classPrivateFieldGet(_listMatches, this)[length].x;
        _classPrivateFieldGet(_listMatches, this)[length].y;
      }
      _classPrivateFieldGet(_listMatches, this)[length].y = matchCols;
    }
    if (matchRows.length > 2) {
      if (!_classPrivateFieldGet(_listMatches, this)[length]) {
        _classPrivateFieldGet(_listMatches, this)[length] = {};
        _classPrivateFieldGet(_listMatches, this)[length].y;
        _classPrivateFieldGet(_listMatches, this)[length].x;
      }
      _classPrivateFieldGet(_listMatches, this)[length].x = matchRows;
    }
  }
}
function _dfsSkill(i, j, indexs, limit) {
  if (i >= 0 && i < limit || j >= 0 && j < limit) {
    if (i < limit && i >= 0) {
      indexs.push(i);
    }
    if (j < limit && j >= 0) {
      indexs.push(j);
    }
    _assertClassBrand(_Board_brand, this, _dfsSkill).call(this, i - 1, j + 1, indexs, limit);
  }
}
function _dfsSkillBoom(i, j, dx, dy, indexs) {
  for (var k = 0; k < dx.length; k++) {
    var i1 = i + dx[k];
    var j1 = j + dy[k];
    if (i1 >= 0 && i1 < ROWS && j1 >= 0 && j1 < COLUMNS) {
      indexs.push([i1, j1]);
    }
  }
}
function _handleSigleSkill(row, col) {
  // let row = matches[0];
  // let col = matches[1];
  var matches = [];
  switch (_classPrivateFieldGet(_items, this)[row][col].type) {
    case TYPE.VERTICAL:
      var colsIndex = [];
      console.log('Power vertical.');
      _assertClassBrand(_Board_brand, this, _dfsSkill).call(this, row, row + 1, colsIndex, ROWS);
      if (colsIndex.length) {
        colsIndex.map(function (e) {
          return matches.push([e, col]);
        });
      }
      break;
    case TYPE.HORIZONAL:
      var rowsIndex = [];
      console.log('Power horizontal.');
      _assertClassBrand(_Board_brand, this, _dfsSkill).call(this, col, col + 1, rowsIndex, COLUMNS);
      if (rowsIndex.length) {
        rowsIndex.map(function (e) {
          return matches.push([row, e]);
        });
      }
      break;
    case TYPE.BOOM:
      var _dx = [-1, 0, 1, 1, 1, 0, -1, -1];
      var _dy = [-1, -1, -1, 0, 1, 1, 1, 0];
      _assertClassBrand(_Board_brand, this, _dfsSkillBoom).call(this, row, col, _dx, _dy, matches);
      break;
    case TYPE.DESTROY:
      matches = _assertClassBrand(_Board_brand, this, _clearByKey).call(this);
      break;
  }
  if (matches.length) {
    return matches;
  }
  return null;
}
function _handleDoubleSkill(matches, type, index) {
  var _this6 = this;
  var row = matches[0];
  var col = matches[1];
  var temp = [];
  // let matches = [];
  switch (type) {
    case TYPE.CROSS:
      var cols = [];
      var rows = [];
      console.log('Power CROSS.');
      _assertClassBrand(_Board_brand, this, _dfsSkill).call(this, col, col - 1, cols, COLUMNS);
      _assertClassBrand(_Board_brand, this, _dfsSkill).call(this, row, row - 1, rows, ROWS);
      if (cols.length) {
        cols.map(function (e) {
          return temp.push([row, e]);
        });
      }
      if (rows.length) {
        rows.map(function (e) {
          return temp.push([e, col]);
        });
      }
      break;
    case TYPE.COMBO_BOOM:
      var colsIndex = [];
      var rowsIndex = [];
      console.log('COMBO_BOOM');
      _assertClassBrand(_Board_brand, this, _dfsSkill).call(this, col, col - 1, colsIndex, COLUMNS);
      _assertClassBrand(_Board_brand, this, _dfsSkill).call(this, row, row - 1, rowsIndex, ROWS);
      if (colsIndex.length) {
        colsIndex.map(function (e) {
          temp.push([row, e]);
          if (row + 1 < ROWS && row + 1 >= 0) {
            temp.push([row + 1, e]);
          }
          if (row - 1 < ROWS && row - 1 >= 0) {
            temp.push([row - 1, e]);
          }
        });
      }
      if (rowsIndex.length) {
        rowsIndex.map(function (e) {
          temp.push([e, col]);
          if (col + 1 < COLUMNS && col + 1 >= 0) {
            temp.push([e, col + 1]);
          }
          if (col - 1 < COLUMNS && col - 1 >= 0) {
            temp.push([e, col - 1]);
          }
        });
      }
      break;
    case TYPE.MEGA_BOOM:
      //2 BOOM
      var _dx2 = [-1, 0, 1, 1, 1, 0, -1, -1, -2, 0, 2, 2, 2, 0, -2, -2];
      var _dy2 = [-1, -1, -1, 0, 1, 1, 1, 0, -2, -2, -2, 0, 2, 2, 2, 0];
      _assertClassBrand(_Board_brand, this, _dfsSkillBoom).call(this, row, col, _dx2, _dy2, temp);
      break;
    case TYPE.EXTRA_DESTROY:
      //hori or verti + DESTROY
      temp = _assertClassBrand(_Board_brand, this, _clearByKey).call(this);
      temp.forEach(function (e) {
        _classPrivateFieldGet(_items, _this6)[e[0][1]].index == index;
      });
      break;
    case TYPE.MULTI_DESTROY:
      //2 DESTROY
      break;
    case TYPE.ULTRA_DESTROY:
      //DESTROY + BOOM
      temp = _assertClassBrand(_Board_brand, this, _clearByKey).call(this);
      temp.forEach(function (e) {
        _classPrivateFieldGet(_items, _this6)[e[0][1]].index == index;
      });
      break;
  }
  if (temp.length) {
    return temp;
  }
}
function _clearByKey() {
  var matches = [];
  for (var i = 0; i < ROWS; i++) {
    for (var j = 0; j < COLUMNS; j++) {
      if (_classPrivateFieldGet(_items, this)[i][j].key == preKey) matches.push([i, j]);
    }
  }
  return matches;
}
function _clearMatches(_x8) {
  return _clearMatches2.apply(this, arguments);
}
function _clearMatches2() {
  _clearMatches2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(listMatches) {
    var _this7 = this;
    var mapSkill, newArr, promises, _iterator, _step, element, mapIndex, _mapIndex, newData, sortArr;
    return _regeneratorRuntime().wrap(function _callee9$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          mapSkill = [[[1], [1], [SPECIAL]], [[1], [2, 3], [2, SPECIAL]], [[SPECIAL], [SPECIAL, 3], [SPECIAL, SPECIAL]]];
          newArr = [];
          promises = [];
          _iterator = _createForOfIteratorHelper(listMatches);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              element = _step.value;
              // listMatches.forEach(element => {
              newArr = [];
              if (element.y && element.x) {
                mapIndex = mapSkill[this.numberOfMatches(element.x)][this.numberOfMatches(element.y)];
                this.mapSpecialShapes(element.x, mapIndex[0]);
                mapIndex.length >= 2 ? this.mapSpecialShapes(element.y, mapIndex[1]) : null;
                newArr = element.x.concat(element.y).slice();
                // newArr = new Set(...new Set(newArr.filter(e => JSON.stringify(e))));
                newArr = newArr.filter(function (e) {
                  return _classPrivateFieldGet(_items, _this7)[e[0]][e[1]].isNew != true;
                });
              } else {
                _mapIndex = void 0;
                if (element.y) {
                  _mapIndex = this.defineNumberOfMatches(element.y);
                  if (_mapIndex != -1) {
                    if (_mapIndex === 5) {
                      _mapIndex = SPECIAL;
                    }
                    this.mapSpecialShapes(element.y, _mapIndex);
                  }
                  newArr = element.y.slice();
                } else if (element.x) {
                  _mapIndex = this.defineNumberOfMatches(element.x);
                  if (_mapIndex != -1) {
                    if (_mapIndex === 5) {
                      _mapIndex = SPECIAL;
                    } else {
                      _mapIndex = _mapIndex - 1;
                    }
                    this.mapSpecialShapes(element.x, _mapIndex);
                  }
                  newArr = element.x.slice();
                }
              }
              promises.push(this.removeDiamon(newArr));
              // promises.push(this.removeDiamon(newArr))
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          ;
          _context10.next = 8;
          return Promise.all(promises).then(/*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
              var sortArr;
              return _regeneratorRuntime().wrap(function _callee8$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    data.forEach(function (item) {
                      newArr = newArr.concat(item);
                    });
                    _context9.next = 3;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 300);
                    });
                  case 3:
                    sortArr = _toConsumableArray(new Set(newArr.flatMap(function (e) {
                      return e.slice(1);
                    }).sort(function (a, b) {
                      return a - b;
                    }).flat()));
                    sortArr.forEach(function (e) {
                      _this7.moveDown(e, ROWS - 1);
                    });
                    _context9.next = 7;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 500);
                    });
                  case 7:
                    isLoop = true;
                  case 8:
                  case "end":
                    return _context9.stop();
                }
              }, _callee8);
            }));
            return function (_x9) {
              return _ref3.apply(this, arguments);
            };
          }());
        case 8:
          newData = [];
        case 9:
          if (!this.queue.length) {
            _context10.next = 22;
            break;
          }
          _context10.next = 12;
          return this.removeDiamon(this.queue.shift());
        case 12:
          newData = _context10.sent;
          _context10.next = 15;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 300);
          });
        case 15:
          sortArr = _toConsumableArray(new Set(newData.flatMap(function (e) {
            return e.slice(1);
          }).sort(function (a, b) {
            return a - b;
          }).flat()));
          sortArr.forEach(function (e) {
            _this7.moveDown(e, ROWS - 1);
          });
          _context10.next = 19;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 500);
          });
        case 19:
          isLoop = true;
          _context10.next = 9;
          break;
        case 22:
        case "end":
          return _context10.stop();
      }
    }, _callee9, this);
  }));
  return _clearMatches2.apply(this, arguments);
}
function _defineType(firstType, secondType) {
  for (var _i3 = 0, _DEFINE_COMBO = DEFINE_COMBO; _i3 < _DEFINE_COMBO.length; _i3++) {
    var items = _DEFINE_COMBO[_i3];
    if (items.COMBO.includes(firstType) && items.COMBO.includes(secondType)) {
      return items.result;
    }
  }
  return null;
}
var timeout;
function noClickDetected() {
  board.drawBoardSuggest(COLOR_SUGGESTED);
}
function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(noClickDetected, 5000); // 10000ms = 10 giây
}
var preClicked;
canvas.addEventListener('click', function (e) {
  playGame(e);
  resetTimer();
});
function playGame(e) {
  var rect = canvas.getBoundingClientRect();
  var mousePos = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
  // Tính toán chỉ số hàng và cột
  var col = Math.floor(mousePos.x / BOX_SIZE); // Xác định cột
  var row = Math.floor(mousePos.y / BOX_SIZE); // Xác định hàng
  if (preClicked) {
    var posClicked = board.effectClick(col, row);
    var k = posClicked.row;
    var l = posClicked.col;
    board.items[preClicked.row][preClicked.col].color = COLOR;
    board.items[posClicked.row][posClicked.col].color = COLOR;
    if ((l == preClicked.col && k <= preClicked.row + 1 && k >= preClicked.row - 1 //kiểm tra vị trí nhấn. Không được chọn ô chéo
    || k == preClicked.row && l <= preClicked.col + 1 && l >= preClicked.col - 1) && board.items[preClicked.row][preClicked.col].key != board.items[posClicked.row][posClicked.col].key) {
      //kiếm tra nếu 2 ô chọn giống thì chọn lại ô thứ 2
      board.validSwap(preClicked, posClicked);
      preClicked = null;
    } else if (preClicked.row == k && preClicked.col == l) {
      //trường hợp nhấn 1 ô 2 lần
      board.drawDiamond(preClicked.col, preClicked.row, board.items[preClicked.row][preClicked.col]);
      preClicked = null;
    } else {
      board.drawDiamond(preClicked.col, preClicked.row, board.items[preClicked.row][preClicked.col]);
      preClicked = posClicked;
    }
  } else {
    if (board.drawSuggest.length) {
      board.drawBoardSuggest(COLOR);
    }
    preClicked = board.effectClick(col, row);
  }
}
function countSort(arr) {
  var count = new Array(BOX_SIZE + 1).fill(0);
  for (var i = 0; i < arr.length; i++) {
    count[arr[i][0]]++;
  }
  var result = [];
  var max = 0;
  result.push([max, count[max]]);
  for (var _i2 = 1; _i2 < count.length; _i2++) {
    if (count[max] < count[_i2]) {
      max = _i2;
      result.push([max, count[max]]); //max là index, count[max] là số lần xuất hiện
    }
  }
  if (!result.length) {
    return null;
  }
  return result;
}
function getMatch(arr) {
  if (arr instanceof Array) {
    var temp = countSort(arr);
    return temp ? temp[temp.length - 1][0] : null;
  } else {
    return null;
  }
}
var shape = new _shape_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
function callBoard(itemList) {
  var board = new Board(ctx, shape, itemList);
  window.onload = function () {
    // console.log(mock())
    board.drawBoard();
    // setTimeout(() => {
    //     board.autoScan()
    // }, 1000);
  };
}
// let board = new Board(ctx, shape);
// window.onload = () => {
//     // console.log(mock())
//     board.drawBoard();
//     // setTimeout(() => {
//     //     board.autoScan()
//     // }, 1000);
// }

/***/ }),

/***/ "./src/match3-game/item.js":
/*!*********************************!*\
  !*** ./src/match3-game/item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _key = /*#__PURE__*/new WeakMap();
var _index = /*#__PURE__*/new WeakMap();
var _visited = /*#__PURE__*/new WeakMap();
var _color = /*#__PURE__*/new WeakMap();
var _colorBorder = /*#__PURE__*/new WeakMap();
var _isNew = /*#__PURE__*/new WeakMap();
var _type = /*#__PURE__*/new WeakMap();
var _isQueue = /*#__PURE__*/new WeakMap();
var Item = /*#__PURE__*/function () {
  function Item(key, index, color, colorBorder, visited, isNew, type, isQueue) {
    _classCallCheck(this, Item);
    _classPrivateFieldInitSpec(this, _key, void 0);
    _classPrivateFieldInitSpec(this, _index, void 0);
    _classPrivateFieldInitSpec(this, _visited, void 0);
    _classPrivateFieldInitSpec(this, _color, void 0);
    _classPrivateFieldInitSpec(this, _colorBorder, void 0);
    _classPrivateFieldInitSpec(this, _isNew, void 0);
    _classPrivateFieldInitSpec(this, _type, void 0);
    _classPrivateFieldInitSpec(this, _isQueue, void 0);
    _classPrivateFieldSet(_key, this, key);
    _classPrivateFieldSet(_index, this, index);
    _classPrivateFieldSet(_color, this, color);
    _classPrivateFieldSet(_colorBorder, this, colorBorder);
    _classPrivateFieldSet(_visited, this, visited);
    _classPrivateFieldSet(_isNew, this, isNew);
    _classPrivateFieldSet(_isQueue, this, isQueue);
    _classPrivateFieldSet(_type, this, type);
  }
  return _createClass(Item, [{
    key: "index",
    get: function get() {
      return _classPrivateFieldGet(_index, this);
    },
    set: function set(index) {
      _classPrivateFieldSet(_index, this, index);
    }
  }, {
    key: "key",
    get: function get() {
      return _classPrivateFieldGet(_key, this);
    },
    set: function set(key) {
      _classPrivateFieldSet(_key, this, key);
    }
  }, {
    key: "color",
    get: function get() {
      return _classPrivateFieldGet(_color, this);
    },
    set: function set(color) {
      _classPrivateFieldSet(_color, this, color);
    }
  }, {
    key: "colorBorder",
    get: function get() {
      return _classPrivateFieldGet(_colorBorder, this);
    },
    set: function set(colorBorder) {
      _classPrivateFieldSet(_colorBorder, this, colorBorder);
    }
  }, {
    key: "visited",
    get: function get() {
      return _classPrivateFieldGet(_visited, this);
    },
    set: function set(visited) {
      _classPrivateFieldSet(_visited, this, visited);
    }
  }, {
    key: "isNew",
    get: function get() {
      return _classPrivateFieldGet(_isNew, this);
    },
    set: function set(isNew) {
      _classPrivateFieldSet(_isNew, this, isNew);
    }
  }, {
    key: "type",
    get: function get() {
      return _classPrivateFieldGet(_type, this);
    },
    set: function set(type) {
      _classPrivateFieldSet(_type, this, type);
    }
  }, {
    key: "isQueue",
    get: function get() {
      return _classPrivateFieldGet(_isQueue, this);
    },
    set: function set(isQueue) {
      _classPrivateFieldSet(_isQueue, this, isQueue);
    }
  }]);
}();


/***/ }),

/***/ "./src/match3-game/shape.js":
/*!**********************************!*\
  !*** ./src/match3-game/shape.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Shape)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _srcImages = /*#__PURE__*/new WeakMap();
var _SOURCE_IMG = /*#__PURE__*/new WeakMap();
var _MAP_SRC_IMG = /*#__PURE__*/new WeakMap();
var _Shape_brand = /*#__PURE__*/new WeakSet();
var Shape = /*#__PURE__*/function () {
  function Shape() {
    _classCallCheck(this, Shape);
    _classPrivateMethodInitSpec(this, _Shape_brand);
    _classPrivateFieldInitSpec(this, _srcImages, void 0);
    _classPrivateFieldInitSpec(this, _SOURCE_IMG, {
      SHAPE_DRAFT: ['./images/diamond0.png', './images/diamond0.png', './images/diamond0.png', './images/diamond0.png'],
      SHAPE_ONE: ['./images/diamond1.png', './images/diamond_boom1.png', './images/diamond_hori1.png', './images/diamond_verti1.png'],
      SHAPE_TWO: ['./images/diamond2.png', './images/diamond_boom2.png', './images/diamond_hori2.png', './images/diamond_verti2.png'],
      SHAPE_THREE: ['./images/diamond3.png', './images/diamond_boom3.png', './images/diamond_hori3.png', './images/diamond_verti3.png'],
      SHAPE_FOUR: ['./images/diamond4.png', './images/diamond_boom4.png', './images/diamond_hori4.png', './images/diamond_verti4.png'],
      SHAPE_FIVE: ['./images/diamond5.png', './images/diamond_boom5.png', './images/diamond_hori5.png', './images/diamond_verti5.png'],
      SHAPE_SPECIAL: ['./images/diamond_all.png']
    });
    _classPrivateFieldInitSpec(this, _MAP_SRC_IMG, ['SHAPE_DRAFT', 'SHAPE_ONE', 'SHAPE_TWO', 'SHAPE_THREE', 'SHAPE_FOUR', 'SHAPE_FIVE', 'SHAPE_SPECIAL']);
    _classPrivateFieldSet(_srcImages, this, _assertClassBrand(_Shape_brand, this, _genSrcImage).call(this));
  }
  return _createClass(Shape, [{
    key: "srcImages",
    get: function get() {
      return _classPrivateFieldGet(_srcImages, this);
    }
  }, {
    key: "randIndex",
    value: function randIndex(max) {
      return Math.floor(Math.random() * max) + 1;
    }
  }, {
    key: "getSrcImage",
    value: function getSrcImage(indexKey, index) {
      return _classPrivateFieldGet(_srcImages, this)[_assertClassBrand(_Shape_brand, this, _getKey).call(this, indexKey)][index];
    }
  }, {
    key: "srcDefault",
    value: function srcDefault() {
      return {
        key: this.randIndex(_classPrivateFieldGet(_MAP_SRC_IMG, this).length - 2),
        index: 0
      };
    }
  }, {
    key: "length",
    value: function length() {
      return _classPrivateFieldGet(_MAP_SRC_IMG, this).length - 1;
    }
  }, {
    key: "getImage",
    value: function getImage(key, index) {
      return _classPrivateFieldGet(_srcImages, this)[key][index];
    }
  }, {
    key: "getIndexByKey",
    value: function getIndexByKey(key) {
      return _classPrivateFieldGet(_MAP_SRC_IMG, this).indexOf(key);
    }
  }]);
}();
function _genSrcImage() {
  var _this = this;
  var diamonds = [];
  _classPrivateFieldGet(_MAP_SRC_IMG, this).filter(function (key) {
    var temp = [];
    _classPrivateFieldGet(_SOURCE_IMG, _this)[key].filter(function (item) {
      return temp.push(Object.assign(new Image(), {
        src: item
      }));
    });
    diamonds[key] = temp;
  });
  return diamonds;
}
function _getKey(index) {
  return _classPrivateFieldGet(_MAP_SRC_IMG, this)[index];
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_item_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated/item_grpc_web_pb */ "./src/generated/item_grpc_web_pb.js");
/* harmony import */ var _generated_item_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_generated_item_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_protobuf_google_protobuf_empty_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-protobuf/google/protobuf/empty_pb */ "./node_modules/google-protobuf/google/protobuf/empty_pb.js");
/* harmony import */ var google_protobuf_google_protobuf_empty_pb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_protobuf_google_protobuf_empty_pb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_item_pb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generated/item_pb */ "./src/generated/item_pb.js");
/* harmony import */ var _generated_item_pb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_generated_item_pb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_images_background_background_game_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/images/background/background_game.jpg */ "./src/css/images/background/background_game.jpg");
/* harmony import */ var _match3_game_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match3-game/index.js */ "./src/match3-game/index.js");
// Import the generated gRPC-Web client stubs and message classes






document.body.style.backgroundImage = "url(".concat(_css_images_background_background_game_jpg__WEBPACK_IMPORTED_MODULE_4__["default"], ")");
var clientItem = new _generated_item_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0__.ItemServiceClient('http://localhost:8080');
function generateMatrix() {
  var emp = new google_protobuf_google_protobuf_empty_pb__WEBPACK_IMPORTED_MODULE_1__.Empty(); // Gửi yêu cầu với Empty message
  return new Promise(function (resolve, reject) {
    clientItem.generateMatrix(emp, {}, function (err, response) {
      if (err) {
        reject();
      } else {
        resolve(response.toObject().rowItemList);
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', function () {
  generateMatrix().then(function (result) {
    var itemList = result.map(function (row) {
      return row.itemList;
    });
    (0,_match3_game_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(itemList);
    console.log(result);
  })["catch"](function (err) {
    console.log(err);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map