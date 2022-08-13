function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-order/finish-order.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish-order/finish-order.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinishOrderFinishOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\" style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\"></ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">Atrás</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"header-content\" style=\"width:100%\">\r\n      <ion-col size=\"12\" style=\"padding-left: 20px;\">\r\n        <span style=\"font-weight: bold;font-size: 18px;color:#009744\">PRODUCTOS DISPONIBLES</span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list lines=\"none\" *ngIf=\"showList\" class=\"mt-3\" style=\"margin-left:2%;margin-right:2%\">\r\n    <ion-item *ngFor=\"let product of shoppingList;let i = index;\">\r\n      <ion-grid>\r\n        <ion-row style=\"background: white;margin-top: 0px;border-bottom: 1px solid black;\">\r\n          <ion-col size=\"3\">\r\n            <ion-img style=\"height: 80px;width: 70px;\" [src]=\"product.url\"></ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"5\" style=\"padding-left:5px\">\r\n            <ion-label style=\"font-weight: bold;font-size:13px;text-overflow: ellipsis;\">{{product.product}}</ion-label>\r\n            <ion-text class=\"ion-text-center\"\r\n              style=\"display:block;color:#ec760a;font-weight: bold;font-size: 12px;text-align: left !important;\">\r\n              {{product.price | currency:'$' }} X KG\r\n            </ion-text>\r\n            <div *ngIf=\"product.isKg == 1 && product.selectedWeight > 0 && product.selectedWeight < 1000\" style=\"font-size: 12px;text-align: left !important;\">\r\n              <ion-text *ngIf=\"product.isPc == 0 || product.isKg == 1 || product.isKg == 0 && product.selectedWeight>0 && product.selectedWeight<1000 \" style=\"text-align: center;color:#ec760a;font-size:11px\">\r\n                {{product.selectedWeight | number : '0.0-0'}} grs - ${{product.selectedWeight/1000 *\r\n                  product.price | number : '1.2-2'}}</ion-text>\r\n            </div>\r\n            <div *ngIf=\"product.isKg == 1 && product.selectedWeight >= 1000\" style=\"font-size: 12px;text-align: left !important;\">\r\n              <span style=\"text-align: center;color:#ec760a;font-size:11px\">{{product.kg | number : '1.2-2'}} kgs - ${{product.selectedWeight/1000 *\r\n                product.price | number : '1.2-2'}}.</span>\r\n            </div>\r\n            <div *ngIf=\"product.kg==0 && product.pc>0\" style=\"font-size: 12px;text-align: left !important;\">\r\n              <span style=\"text-align: center;color:#ec760a;font-size:11px\">{{product.pc}} pzs - ${{product.selectedWeight/1000 * product.price | number : '1.2-2'}}</span>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"4\" style=\"margin-top: 9%;\">\r\n            <div *ngIf=\"product.isKg == 1 && product.selectedWeight > 0\">\r\n              <ion-col size=\"2\" style=\"background-color: #ec760a;\">\r\n                <ion-icon name=\"add\" style=\"color:white;font-size: 12px;\" (click)=\"count(1995,product.idproduct,'K')\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <span style=\"font-size:10px\">{{product.kg | number : '1.2-2'}}</span>\r\n              </ion-col>\r\n              <ion-col size=\"2\" style=\"background-color: #ec760a;\">\r\n                <ion-icon name=\"remove\" style=\"color:white;font-size:12px;\" (click)=\"count(-1995,product.idproduct,'K')\"></ion-icon>\r\n              </ion-col>\r\n            </div>\r\n            <div *ngIf=\"product.isPc == 1 && product.isKg == 0\">\r\n              <ion-col size=\"4\" style=\"background-color: #ec760a;\">\r\n                <ion-icon name=\"add\" style=\"color:white;font-size: 12px;\" (click)=\"count(1,product.idproduct,'P')\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <span style=\"font-size:10px\">{{product.pc }}</span>\r\n              </ion-col>\r\n              <ion-col size=\"2\" style=\"background-color: #ec760a;\">\r\n                <ion-icon name=\"remove\" style=\"color:white;font-size: 12px;\" (click)=\"count(-1,product.idproduct,'P')\"></ion-icon>\r\n              </ion-col>\r\n            </div>\r\n            <!-- <ion-icon name=\"close\" (click)=\"removePosition(i)\"\r\n              style=\"margin: 0px; padding: 0px; width: 100%; height: 100%; color: red;\"></ion-icon> -->\r\n          </ion-col>\r\n        </ion-row>\r\n        <hr>\r\n\r\n\r\n        <!--         \r\n        <ion-row style=\"font-size: 0.7rem; background: rgb(239, 248, 243); margin-bottom: 1px;\">\r\n          <ion-col size=\"1\">\r\n          </ion-col>\r\n\r\n          <ion-col size=\"11\" *ngIf=\"product.kg>0 && product.pc>0\">\r\n            <ion-label>{{product.kg | number : '1.2-2'}} Kgs - {{product.pc}} Pzas - ${{product.selectedWeight/1000 *\r\n              product.price | number : '1.2-2'}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\" *ngIf=\"product.kg>0 && product.pc==0\">\r\n            <ion-label>{{product.kg | number : '1.2-2'}} Kgs - ${{product.selectedWeight/1000 * product.price | number :\r\n              '1.2-2'}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\" *ngIf=\"product.kg==0 && product.pc>0\">\r\n            <ion-label>{{product.pc}} Pzas - ${{product.selectedWeight/1000 * product.price | number : '1.2-2'}}\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"total-body\" style=\"text-align: center;\">\r\n    <span style=\"font-weight: bold;color:#009744\">SUBTOTAL {{ totalCost | currency : '$'}}</span>\r\n  </div>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:5%;margin-bottom:5%\" *ngIf=\"this.global.esInvitado == false\">\r\n    <button type=\"button\" class=\"buscar-btn\" style=\"width: 28vh;\" (click)=\"sendOrder()\">CONTINUAR LA COMPRA</button>\r\n  </div>\r\n\r\n  <!--   \r\n  <div *ngIf=\"g.idUser!== -46\">\r\n    <div *ngIf=\"!showList\" class=\"alert alert-danger m-3\" role=\"alert\">\r\n      <h5 style=\"text-align: justify; text-justify: inter-word;\">\r\n        Si desea agregar algo a su pedido, realice una nueva lista y le llegara junto a su pedido con el mismo costo de\r\n        envió. <br /><br />\r\n        Si desea cancelar su pedido envié un WhatsApp al numero 3331502581.\r\n        <br />En los siguientes Horarios <br />Lunes a Viernes: 9:00am a 7:00 pm<br />\r\n        Sabados: 9:00am a 1:00 pm\r\n      </h5>\r\n    </div> -->\r\n\r\n  <!-- <div *ngIf=\"showList\" class=\"alert alert-success m-3\" role=\"alert\">\r\n      <h5>Total aproximado: {{ totalCost | currency : '$'}}</h5>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" *ngIf=\"showList\" class=\"m-3\" style=\"border-radius: 10px; border: 2px solid #00b050;\">\r\n      <ion-label position=\"floating\">Comentarios sobre el pedido</ion-label>\r\n      <ion-textarea [(ngModel)]=\"notes\"></ion-textarea>\r\n    </ion-item>\r\n  </div> -->\r\n  <!-- <div *ngIf=\"g.idUser === -46\" class=\"alert alert-success m-3 text-center\" role=\"alert\">\r\n    <h5>\r\n      PARA PODER ENVIAR TU PEDIDO ES NECESARIO QUE INICIES SESION. SI NO TIENES CONTRASEÑA ENVIA UN MENSAJE DE WHATSAPP\r\n      PARA REGISTRARTE AL: 3331502581\r\n    </h5>\r\n  </div> -->\r\n</ion-content>\r\n<!-- <ion-footer *ngIf=\"g.idUser !== -46\">\r\n  <ion-grid class=\"p-0\" style=\"text-align: center; color: white;\">\r\n    <ion-row class=\"green\">\r\n      <ion-col class=\"pb-3 m-0\" size=\"6\" class=\"green\">\r\n        <ion-text (click)=\"back()\">Ir atrás</ion-text>\r\n      </ion-col>\r\n      <ion-col class=\"pb-3 m-0\" size=\"6\" style=\"background: #000;\">\r\n        <ion-text (click)=\"sendOrder()\">Confirmar</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n<ion-footer *ngIf=\"g.idUser === -46\">\r\n  <ion-grid class=\"p-0\" style=\"text-align: center; color: white;\">\r\n    <ion-row class=\"green\">\r\n      <ion-col class=\"pb-3 m-0\" size=\"12\" class=\"green\">\r\n        <ion-text (click)=\"back()\">Ir atrás</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagar-stripe/pagar-stripe.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagar-stripe/pagar-stripe.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagarStripePagarStripePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header (click)=\"closeModal(false)\">\n  <ion-button fill=\"clear\" expand=\"full\" (click)=\"closeModal(false)\">\n    <div class=\"drawer-pull\"></div>\n  </ion-button>\n</ion-header>\n\n\n<ion-content>\n  <h4 style=\"font-size: 17px;font-weight: bold;color:#ec760a;margin-left: 6%;\">PAGAR CON TARJETA</h4>\n  <ion-card>\n\n    <ion-item-divider>Información de la Tarjeta</ion-item-divider>\n    <ion-item class=\"item-border-bottom\">\n      <!-- <ion-icon slot=\"start\" *ngIf=\"bank_icon != null\" [src]=\"bank_icon\"></ion-icon> -->\n      <ion-input type=\"tel\" required maxlength=\"19\" minlength=\"19\" placeholder=\"Número de Tarjeta\" ixMaxLength=\"18\"\n        [(ngModel)]=\"cardNumber\" (ionChange)=\"findIssuerName()\" [brmasker]=\"{mask:'0000 0000 0000 0000', len:19}\">\n      </ion-input>\n    </ion-item>\n    <ion-row padding justify-content-center class=\"card-expiration\">\n      <ion-col size=\"12\" class=\"exp-col\">\n        <ion-item>\n          <ion-label class=\"tdc-select-label\">Mes</ion-label>\n          <ion-select id=\"expirationMonth\" [(ngModel)]=\"cardMonth\" okText=\"Confirmar\" cancelText=\"Cancelar\" required\n            [interfaceOptions]=\"{ header: 'Mes', message: 'Seleccione el mes que se encuentra en su tarjeta'}\">\n            <ion-select-option value=\"01\">01</ion-select-option>\n            <ion-select-option value=\"02\">02</ion-select-option>\n            <ion-select-option value=\"03\">03</ion-select-option>\n            <ion-select-option value=\"04\">04</ion-select-option>\n            <ion-select-option value=\"05\">05</ion-select-option>\n            <ion-select-option value=\"06\">06</ion-select-option>\n            <ion-select-option value=\"07\">07</ion-select-option>\n            <ion-select-option value=\"08\">08</ion-select-option>\n            <ion-select-option value=\"09\">09</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n            <ion-select-option value=\"12\">12</ion-select-option>\n          </ion-select>\n          <ion-label class=\"tdc-select-label\">Año</ion-label>\n          <ion-select okText=\"Confirmar\" [(ngModel)]=\"cardYear\" cancelText=\"Cancelar\" required\n            [interfaceOptions]=\"{ header: 'Año', message: 'Seleccione el año que se encuentra en su tarjeta'}\">\n            <ion-select-option value=\"2021\">21</ion-select-option>\n            <ion-select-option value=\"2022\">22</ion-select-option>\n            <ion-select-option value=\"2023\">23</ion-select-option>\n            <ion-select-option value=\"2024\">24</ion-select-option>\n            <ion-select-option value=\"2025\">25</ion-select-option>\n            <ion-select-option value=\"2026\">26</ion-select-option>\n            <ion-select-option value=\"2027\">27</ion-select-option>\n            <ion-select-option value=\"2028\">28</ion-select-option>\n            <ion-select-option value=\"2029\">29</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-list padding class=\"card-cvv border-bottom-list\">\n      <ion-item class=\"item-border-bottom\">\n        <ion-label>CVV</ion-label>\n        <ion-input style=\"-webkit-text-security:disc\" type=\"number\" required maxlength=\"4\" minlength=\"3\"\n          [(ngModel)]=\"cardCVV\" ixMaxLength=\"4\">\n        </ion-input>\n        <ion-icon slot=\"end\" [src]=\"icon_cvv\"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button expand=\"full\" color=\"danger\" (click)=\"closeModal(false)\">CANCELAR</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"validacionesTarjeta()\">PAGAR</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-img src=\"assets/secure.jpg\"\n        style=\"padding-top:0px!important;margin-top:0px!important;width:45%;margin-left: 20%;\"\n        class=\"img_header ion-margin-top ion-padding-top\"></ion-img><br />\n\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-img src=\"assets/visa.png\"\n        style=\"padding-top:0px!important;margin-top:0px!important;width:75%;margin-left: 5%;\"\n        class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\n    </ion-col>\n  </ion-row>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n      <ion-tab-button (click)=\"viewOrders()\" *ngIf=\"this.global.esInvitado == false\">\r\n        <!-- <img class=\"custom-bag\" style=\"width: 4.2vh;margin-top: 3%;\"/> -->\r\n        <ion-icon color=\"light\" name=\"basket-outline\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">PEDIDOS</span>\r\n        <!-- <ion-icon color=\"light\" name=\"cart-outline\"></ion-icon> -->\r\n      </ion-tab-button>\r\n\r\n      <!-- <ion-tab-button (click)=\"verPerfil()\" *ngIf=\"this.global.esInvitado == false\">\r\n        <ion-icon color=\"light\" name=\"person-outline\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">PERFIL</span>\r\n      </ion-tab-button> -->\r\n\r\n      \r\n      <ion-tab-button (click)=\"showRederred()\" *ngIf=\"this.global.esInvitado == false\">\r\n        <ion-icon color=\"light\" name=\"person-outline\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">REFERIDOS</span>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"openWhatsapp()\">\r\n        <ion-icon color=\"light\" name=\"help-outline\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">AYUDA</span>\r\n      </ion-tab-button>\r\n      \r\n      <ion-tab-button (click)=\"logout()\">\r\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">SALIR</span>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n\r\n  </ion-tabs>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabs2Tabs2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n      <ion-tab-button (click)=\"carrito()\" *ngIf=\"this.global.esInvitado == false\">\r\n        <ion-icon name=\"cart-outline\" style=\"color:white;\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">VER CARRITO</span>\r\n        <!-- <img class=\"custom-cart\" style=\"width: 6.4vh;margin-top: 10%;\"/> -->\r\n        <!-- <ion-icon color=\"light\" name=\"cart-outline\"></ion-icon> -->\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"pagar()\" *ngIf=\"this.global.esInvitado == false\">\r\n        <ion-icon name=\"cash-outline\"  style=\"color:white;\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">FINALIZAR</span>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"openWhatsapp()\">\r\n        <ion-icon name=\"help-outline\" style=\"color:white;\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">AYUDA</span>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back-outline\" style=\"color:white;\"></ion-icon>\r\n        <span style=\"font-size: 1.3vh;font-weight: 480;color: white;\">AGREGAR MÁS</span>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n\r\n  </ion-tabs>\r\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'categories',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | categories-categories-module */
        "categories-categories-module").then(__webpack_require__.bind(null,
        /*! ./categories/categories.module */
        "./src/app/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      }
    }, {
      path: 'referred-register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | referred-register-referred-register-module */
        "referred-register-referred-register-module").then(__webpack_require__.bind(null,
        /*! ./referred-register/referred-register.module */
        "./src/app/referred-register/referred-register.module.ts")).then(function (m) {
          return m.ReferredRegisterPageModule;
        });
      }
    }, {
      path: 'products/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | products-products-module */
        "products-products-module").then(__webpack_require__.bind(null,
        /*! ./products/products.module */
        "./src/app/products/products.module.ts")).then(function (m) {
          return m.ProductsPageModule;
        });
      }
    }, {
      path: 'finish-order',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./finish-order/finish-order.module */
        "./src/app/finish-order/finish-order.module.ts")).then(function (m) {
          return m.FinishOrderPageModule;
        });
      }
    }, {
      path: 'send-order',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | send-order-send-order-module */
        "send-order-send-order-module").then(__webpack_require__.bind(null,
        /*! ./send-order/send-order.module */
        "./src/app/send-order/send-order.module.ts")).then(function (m) {
          return m.SendOrderPageModule;
        });
      }
    }, {
      path: 'orders',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | orders-orders-module */
        "orders-orders-module").then(__webpack_require__.bind(null,
        /*! ./orders/orders.module */
        "./src/app/orders/orders.module.ts")).then(function (m) {
          return m.OrdersModule;
        });
      }
    }, {
      path: 'order-details/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | order-details-order-details-module */
        "order-details-order-details-module").then(__webpack_require__.bind(null,
        /*! ./order-details/order-details.module */
        "./src/app/order-details/order-details.module.ts")).then(function (m) {
          return m.OrderDetailsModule;
        });
      }
    }, {
      path: 'registro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registro-registro-module */
        "registro-registro-module").then(__webpack_require__.bind(null,
        /*! ./registro/registro.module */
        "./src/app/registro/registro.module.ts")).then(function (m) {
          return m.RegistroPageModule;
        });
      }
    }, {
      path: 'cp-nocobertura',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | codigo-postal-sin-cobertura-codigo-postal-sin-cobertura-module */
        "codigo-postal-sin-cobertura-codigo-postal-sin-cobertura-module").then(__webpack_require__.bind(null,
        /*! ./codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.module */
        "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.module.ts")).then(function (m) {
          return m.CodigoPostalSinCoberturaPageModule;
        });
      }
    }, {
      path: 'registro-cliente',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registro-cliente-registro-cliente-module */
        "registro-cliente-registro-cliente-module").then(__webpack_require__.bind(null,
        /*! ./registro-cliente/registro-cliente.module */
        "./src/app/registro-cliente/registro-cliente.module.ts")).then(function (m) {
          return m.RegistroClientePageModule;
        });
      }
    }, {
      path: 'verificacion-cliente',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | verificacion-cliente-verificacion-cliente-module */
        "verificacion-cliente-verificacion-cliente-module").then(__webpack_require__.bind(null,
        /*! ./verificacion-cliente/verificacion-cliente.module */
        "./src/app/verificacion-cliente/verificacion-cliente.module.ts")).then(function (m) {
          return m.VerificacionClientePageModule;
        });
      }
    }, {
      path: 'promos-disponibles',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | promos-disponibles-promos-disponibles-module */
        "promos-disponibles-promos-disponibles-module").then(__webpack_require__.bind(null,
        /*! ./promos-disponibles/promos-disponibles.module */
        "./src/app/promos-disponibles/promos-disponibles.module.ts")).then(function (m) {
          return m.PromosDisponiblesPageModule;
        });
      }
    }, {
      path: 'horario-entrega',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | horario-entrega-horario-entrega-module */
        "horario-entrega-horario-entrega-module").then(__webpack_require__.bind(null,
        /*! ./horario-entrega/horario-entrega.module */
        "./src/app/horario-entrega/horario-entrega.module.ts")).then(function (m) {
          return m.HorarioEntregaPageModule;
        });
      }
    }, {
      path: 'metodo-de-pago',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | metodo-de-pago-metodo-de-pago-module */
        "metodo-de-pago-metodo-de-pago-module").then(__webpack_require__.bind(null,
        /*! ./metodo-de-pago/metodo-de-pago.module */
        "./src/app/metodo-de-pago/metodo-de-pago.module.ts")).then(function (m) {
          return m.MetodoDePagoPageModule;
        });
      }
    }, {
      path: 'efectivo-compra',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | efectivo-compra-efectivo-compra-module */
        "efectivo-compra-efectivo-compra-module").then(__webpack_require__.bind(null,
        /*! ./efectivo-compra/efectivo-compra.module */
        "./src/app/efectivo-compra/efectivo-compra.module.ts")).then(function (m) {
          return m.EfectivoCompraPageModule;
        });
      }
    }, {
      path: 'pago-electronico',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pago-electronico-pago-electronico-module */
        "pago-electronico-pago-electronico-module").then(__webpack_require__.bind(null,
        /*! ./pago-electronico/pago-electronico.module */
        "./src/app/pago-electronico/pago-electronico.module.ts")).then(function (m) {
          return m.PagoElectronicoPageModule;
        });
      }
    }, {
      path: 'terminar-compra',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | terminar-compra-terminar-compra-module */
        "terminar-compra-terminar-compra-module").then(__webpack_require__.bind(null,
        /*! ./terminar-compra/terminar-compra.module */
        "./src/app/terminar-compra/terminar-compra.module.ts")).then(function (m) {
          return m.TerminarCompraPageModule;
        });
      }
    }, {
      path: 'pago-transferencia',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pago-transferencia-pago-transferencia-module */
        "pago-transferencia-pago-transferencia-module").then(__webpack_require__.bind(null,
        /*! ./pago-transferencia/pago-transferencia.module */
        "./src/app/pago-transferencia/pago-transferencia.module.ts")).then(function (m) {
          return m.PagoTransferenciaPageModule;
        });
      }
    }, {
      path: 'paquetes-disponibles',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | paquetes-disponibles-paquetes-disponibles-module */
        "paquetes-disponibles-paquetes-disponibles-module").then(__webpack_require__.bind(null,
        /*! ./paquetes-disponibles/paquetes-disponibles.module */
        "./src/app/paquetes-disponibles/paquetes-disponibles.module.ts")).then(function (m) {
          return m.PaquetesDisponiblesPageModule;
        });
      }
    }, {
      path: 'tabs2',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./tabs2/tabs2.module */
        "./src/app/tabs2/tabs2.module.ts")).then(function (m) {
          return m.Tabs2PageModule;
        });
      }
    }, {
      path: 'mercado-pago',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mercado-pago-mercado-pago-module */
        "mercado-pago-mercado-pago-module").then(__webpack_require__.bind(null,
        /*! ./mercado-pago/mercado-pago.module */
        "./src/app/mercado-pago/mercado-pago.module.ts")).then(function (m) {
          return m.MercadoPagoPageModule;
        });
      }
    }, {
      path: 'pagar-stripe',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pagar-stripe/pagar-stripe.module */
        "./src/app/pagar-stripe/pagar-stripe.module.ts")).then(function (m) {
          return m.PagarStripePageModule;
        });
      }
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, global, g, router, api, navCtrl) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.global = global;
        this.g = g;
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.oneSignalAppId = null;
        this.fireBaseKey = null;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getFlags();

                  case 2:
                    this.oneSignalAppId = this.global.getAppConfigFlag("ONE_SIGNAL_APP_ID");
                    this.fireBaseKey = this.global.getAppConfigFlag("FIREBASE_KEY");
                    _context.next = 6;
                    return this.platform.ready().then(function () {
                      _this.statusBar.styleDefault();

                      _this.splashScreen.hide();

                      if (_this.global.isApp) {
                        _this.setupPush();
                      }
                    });

                  case 6:
                    _context.next = 8;
                    return this.global.verificarVersion();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.global.getCredentials();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getFlags",
        value: function getFlags() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.api.getFlags().toPromise().then(function (res) {
                      _this2.global.flags = res.data;
                    })["catch"](function (error) {});

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "setupPush",
        value: function setupPush() {
          var _this3 = this;

          console.log('Plugins', window["plugins"]);
          var self = this;

          var notificationOpenedCallback = function notificationOpenedCallback(jsonData) {
            try {
              console.log(jsonData);
              var response = jsonData;
              console.log('Response', response);
              var data = response.notification.payload.additionalData;

              if (self.global.user_info != null) {
                if (data.url) {
                  if (self.global.user_info) {
                    if (self.global.user_info.iduser) {
                      var currentUrl = self.router.url;
                      console.log('Current URL', currentUrl);

                      if (data.url == "terminar-compra") {
                        self.global.a_pagar = data;
                        self.navCtrl.navigateRoot("terminar-compra", {
                          animated: true,
                          animationDirection: 'forward'
                        });
                      }

                      console.log('URL', data.url);
                    }
                  }
                }
              }
            } catch (error) {
              console.error('error', error);
            }
          };

          var iosSettings = {};
          iosSettings["kOSSettingsKeyAutoPrompt"] = false;
          iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
          window["plugins"].OneSignal.startInit(this.oneSignalAppId, this.fireBaseKey).handleNotificationOpened(notificationOpenedCallback).iOSSettings(iosSettings).inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification).endInit();
          window["plugins"].OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
            console.log("User accepted notifications: " + accepted);
          });
          window["plugins"].OneSignal.getIds(function (ids) {
            _this3.global.device_id = ids.userId;

            if (_this3.global.user_info != null) {
              if (_this3.global.user_info.iduser) {
                _this3.api.updateDevice(_this3.global.user_info.iduser, _this3.global.device_id).toPromise().then(function (resp) {
                  console.log('Respuesta', resp);
                });
              }
            }
          });
          window["plugins"].OneSignal.addSubscriptionObserver(function (state) {
            if (!state.from.subscribed && state.to.subscribed) {
              _this3.global.device_id = state.to.userId;
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_7__["Globals"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _globals__WEBPACK_IMPORTED_MODULE_7__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pagar_stripe_pagar_stripe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pagar-stripe/pagar-stripe.module */
    "./src/app/pagar-stripe/pagar-stripe.module.ts");
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs/tabs.module */
    "./src/app/tabs/tabs.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _tabs2_tabs2_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./tabs2/tabs2.module */
    "./src/app/tabs2/tabs2.module.ts");
    /* harmony import */


    var _finish_order_finish_order_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./finish-order/finish-order.module */
    "./src/app/finish-order/finish-order.module.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _finish_order_finish_order_module__WEBPACK_IMPORTED_MODULE_20__["FinishOrderPageModule"], _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageModule"], _pagar_stripe_pagar_stripe_module__WEBPACK_IMPORTED_MODULE_1__["PagarStripePageModule"], _tabs2_tabs2_module__WEBPACK_IMPORTED_MODULE_19__["Tabs2PageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicRouteStrategy"]
      }, _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__["InAppBrowser"], _globals__WEBPACK_IMPORTED_MODULE_9__["Globals"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_17__["AppVersion"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_18__["OneSignal"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/custom-icons.ts":
  /*!*********************************!*\
    !*** ./src/app/custom-icons.ts ***!
    \*********************************/

  /*! exports provided: CustomIcons */

  /***/
  function srcAppCustomIconsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomIcons", function () {
      return CustomIcons;
    });

    var CustomIcons = {
      cart: "../assets/cart.svg",
      visa: "../assets/tarjeta-visa.svg",
      mastercard: "../assets/tarjeta-mastercard.svg",
      american_express: "../assets/tarjeta-american-express.svg",
      cvv: "../assets/cvv.svg"
    };
    /***/
  },

  /***/
  "./src/app/finish-order/finish-order-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/finish-order/finish-order-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: FinishOrderPageRoutingModule */

  /***/
  function srcAppFinishOrderFinishOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishOrderPageRoutingModule", function () {
      return FinishOrderPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _finish_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finish-order.page */
    "./src/app/finish-order/finish-order.page.ts");

    var routes = [{
      path: '',
      component: _finish_order_page__WEBPACK_IMPORTED_MODULE_3__["FinishOrderPage"]
    }];

    var FinishOrderPageRoutingModule = /*#__PURE__*/_createClass(function FinishOrderPageRoutingModule() {
      _classCallCheck(this, FinishOrderPageRoutingModule);
    });

    FinishOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FinishOrderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/finish-order/finish-order.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/finish-order/finish-order.module.ts ***!
    \*****************************************************/

  /*! exports provided: FinishOrderPageModule */

  /***/
  function srcAppFinishOrderFinishOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishOrderPageModule", function () {
      return FinishOrderPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _finish_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./finish-order-routing.module */
    "./src/app/finish-order/finish-order-routing.module.ts");
    /* harmony import */


    var _finish_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./finish-order.page */
    "./src/app/finish-order/finish-order.page.ts");

    var FinishOrderPageModule = /*#__PURE__*/_createClass(function FinishOrderPageModule() {
      _classCallCheck(this, FinishOrderPageModule);
    });

    FinishOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _finish_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinishOrderPageRoutingModule"]],
      declarations: [_finish_order_page__WEBPACK_IMPORTED_MODULE_6__["FinishOrderPage"]]
    })], FinishOrderPageModule);
    /***/
  },

  /***/
  "./src/app/finish-order/finish-order.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/finish-order/finish-order.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinishOrderFinishOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.header {\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n}\n\n.green {\n  background: #00b050;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #ec760a;\n  color: white;\n  padding: 12px 12px 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9maW5pc2gtb3JkZXIvZmluaXNoLW9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmluaXNoLW9yZGVyL2ZpbmlzaC1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLHFCQUFBO0FDRUo7O0FERUU7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLG1CQUFBO0FDRUo7O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9maW5pc2gtb3JkZXIvZmluaXNoLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdfaGVhZGVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcclxuIH1cclxuXHJcbiBcclxuICAuaGVhZGVye1xyXG4gICAgLy8tLWJhY2tncm91bmQ6ICMwMGIwNTA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAuaGVhZGVyIGlvbi10ZXh0e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG4gIH1cclxuICBcclxuICAuYnVzY2FyLWJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7ICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM3NjBhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4IDEycHg7XHJcbiB9IiwiLmltZ19oZWFkZXIge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZjdmMjM7XG59XG5cbi5oZWFkZXIge1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaGVhZGVyIGlvbi10ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzAwYjA1MDtcbn1cblxuLmJ1c2Nhci1idG4ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM3NjBhO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMTJweCAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/finish-order/finish-order.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/finish-order/finish-order.page.ts ***!
    \***************************************************/

  /*! exports provided: FinishOrderPage */

  /***/
  function srcAppFinishOrderFinishOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishOrderPage", function () {
      return FinishOrderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var FinishOrderPage = /*#__PURE__*/function () {
      function FinishOrderPage(apiService, g, router, activatedRoute, nav, global) {
        _classCallCheck(this, FinishOrderPage);

        this.apiService = apiService;
        this.g = g;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.nav = nav;
        this.global = global; // implements OnInit

        this.showList = true;
        this.shoppingList = [];
        this.totalCost = 0;
        this.notes = '';
        this.id_category = 0;
      }

      _createClass(FinishOrderPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getTotalCost();
          console.log('Shipping list', this.shoppingList);
        }
      }, {
        key: "getTotalCost",
        value: function getTotalCost() {
          this.totalCost = 0;
          this.shoppingList = [];

          for (var i = 0; i < this.g.fruits.length; i++) {
            if (parseFloat(this.g.fruits[i].kg) > 0 || parseInt(this.g.fruits[i].pc, 10) > 0) {
              this.shoppingList.push(this.g.fruits[i]);
              this.totalCost += this.g.fruits[i].selectedWeight / 1000 * this.g.fruits[i].price;
            }
          }

          for (var _i = 0; _i < this.g.vegetables.length; _i++) {
            if (parseFloat(this.g.vegetables[_i].kg) > 0 || parseInt(this.g.vegetables[_i].pc, 10) > 0) {
              this.shoppingList.push(this.g.vegetables[_i]);
              this.totalCost += this.g.vegetables[_i].selectedWeight / 1000 * this.g.vegetables[_i].price;
            }
          }

          for (var _i2 = 0; _i2 < this.g.spices.length; _i2++) {
            if (parseFloat(this.g.spices[_i2].kg) > 0 || parseInt(this.g.spices[_i2].pc, 10) > 0) {
              this.shoppingList.push(this.g.spices[_i2]);
              this.totalCost += this.g.spices[_i2].selectedWeight / 1000 * this.g.spices[_i2].price;
            }
          }

          for (var _i3 = 0; _i3 < this.g.carnes.length; _i3++) {
            if (parseFloat(this.g.carnes[_i3].kg) > 0 || parseInt(this.g.carnes[_i3].pc, 10) > 0) {
              this.shoppingList.push(this.g.carnes[_i3]);
              this.totalCost += this.g.carnes[_i3].selectedWeight / 1000 * this.g.carnes[_i3].price;
            }
          }

          for (var _i4 = 0; _i4 < this.g.cremeria.length; _i4++) {
            if (parseFloat(this.g.cremeria[_i4].kg) > 0 || parseInt(this.g.cremeria[_i4].pc, 10) > 0) {
              this.shoppingList.push(this.g.cremeria[_i4]);
              this.totalCost += this.g.cremeria[_i4].selectedWeight / 1000 * this.g.cremeria[_i4].price;
            }
          }

          for (var _i5 = 0; _i5 < this.g.otros.length; _i5++) {
            if (parseFloat(this.g.otros[_i5].kg) > 0 || parseInt(this.g.otros[_i5].pc, 10) > 0) {
              this.shoppingList.push(this.g.otros[_i5]);
              this.totalCost += this.g.otros[_i5].selectedWeight / 1000 * this.g.otros[_i5].price;
            }
          }

          if (this.shoppingList.length === 0) {
            this.showList = false;
          } else {
            this.showList = true;
          }

          if (this.g.notes) {
            if (this.g.notes.length > 0) {
              this.notes = this.g.notes;
            }
          }

          console.log('Shipping list', this.shoppingList);
        }
      }, {
        key: "back",
        value: function back() {
          if (this.global.finish_order_return == "") {
            this.router.navigate(['/tabs/categories']);
          } else {
            this.router.navigate([this.global.finish_order_return]);
          }
        }
      }, {
        key: "sendOrder",
        value: function sendOrder() {
          if (this.shoppingList.length > 0) {
            this.g.notes = this.notes;
            this.g.shoppingList = this.shoppingList;
            this.router.navigate(['send-order']);
          } else {
            return this.global.showToast("No hay nada en el carrito", "danger");
          }
        }
      }, {
        key: "removePosition",
        value: function removePosition(position) {
          var idproduct = this.shoppingList[position].idproduct;
          this.shoppingList = this.shoppingList.filter(function (obj) {
            return obj.idproduct !== idproduct;
          });

          for (var i = 0; i < this.g.fruits.length; i++) {
            if (this.g.fruits[i].idproduct == idproduct) {
              this.g.fruits[i].kg = 0;
              this.g.fruits[i].pc = 0;
              this.g.fruits[i].selectedWeight = 0;
            }
          }

          for (var _i6 = 0; _i6 < this.g.vegetables.length; _i6++) {
            if (this.g.vegetables[_i6].idproduct == idproduct) {
              this.g.vegetables[_i6].kg = 0;
              this.g.vegetables[_i6].pc = 0;
              this.g.vegetables[_i6].selectedWeight = 0;
            }
          }

          for (var _i7 = 0; _i7 < this.g.spices.length; _i7++) {
            if (this.g.spices[_i7].idproduct == idproduct) {
              this.g.spices[_i7].kg = 0;
              this.g.spices[_i7].pc = 0;
              this.g.spices[_i7].selectedWeight = 0;
            }
          }

          for (var _i8 = 0; _i8 < this.g.carnes.length; _i8++) {
            if (this.g.carnes[_i8].idproduct == idproduct) {
              this.g.carnes[_i8].kg = 0;
              this.g.carnes[_i8].pc = 0;
              this.g.carnes[_i8].selectedWeight = 0;
            }
          }

          for (var _i9 = 0; _i9 < this.g.cremeria.length; _i9++) {
            if (this.g.cremeria[_i9].idproduct == idproduct) {
              this.g.cremeria[_i9].kg = 0;
              this.g.cremeria[_i9].pc = 0;
              this.g.cremeria[_i9].selectedWeight = 0;
            }
          }

          for (var _i10 = 0; _i10 < this.g.otros.length; _i10++) {
            if (this.g.otros[_i10].idproduct == idproduct) {
              this.g.otros[_i10].kg = 0;
              this.g.otros[_i10].pc = 0;
              this.g.otros[_i10].selectedWeight = 0;
            }
          }

          if (this.shoppingList.length === 0) {
            this.showList = false;
          } else {
            this.totalCost = 0;
            this.showList = true;

            for (var _i11 = 0; _i11 < this.shoppingList.length; _i11++) {
              if (this.shoppingList[_i11].isKg == '0' && this.shoppingList[_i11].isPc == '1') {
                this.totalCost += this.shoppingList[_i11].pc * this.shoppingList[_i11].price;
              } else {
                this.totalCost += this.shoppingList[_i11].selectedWeight / 1000 * this.shoppingList[_i11].price;
              }
            }
          }
        }
      }, {
        key: "count",
        value: function count(_count, idproduct, type) {
          for (var i = 0; i < this.shoppingList.length; i++) {
            if (this.shoppingList[i]["idproduct"] == idproduct) {
              if (type == "K") {
                if (_count == 1995) {
                  this.shoppingList[i]["kg"] = parseFloat(this.shoppingList[i]["kg"]) + parseFloat(this.shoppingList[i]["sum"]);
                } else if (_count == -1995) {
                  this.shoppingList[i]["kg"] = parseFloat(this.shoppingList[i]["kg"]) - parseFloat(this.shoppingList[i]["sum"]);
                  this.shoppingList[i]["pc"] = parseFloat(this.shoppingList[i]["pc"]) - 1;
                } else {
                  this.shoppingList[i]["kg"] = parseFloat(this.shoppingList[i]["kg"]) + _count;
                }

                if (parseFloat(this.shoppingList[i]["kg"]) < 0) {
                  this.shoppingList[i]["kg"] = 0;
                }
              } else {
                this.shoppingList[i]["pc"] = parseInt(this.shoppingList[i]["pc"], 10) + _count;

                if (parseInt(this.shoppingList[i]["pc"], 10) < 0) {
                  this.shoppingList[i]["pc"] = 0;
                }
              }

              this.shoppingList[i]["selectedWeight"] = this.shoppingList[i]["pc"] * this.shoppingList[i]["weight"] + parseFloat(this.shoppingList[i]["kg"]) * 1000;
              break;
            }
          }

          this.getTotalCost();
        }
      }]);

      return FinishOrderPage;
    }();

    FinishOrderPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]
      }];
    };

    FinishOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-finish-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./finish-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-order/finish-order.page.html"))["default"],
      providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./finish-order.page.scss */
      "./src/app/finish-order/finish-order.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])], FinishOrderPage);
    /***/
  },

  /***/
  "./src/app/globals.ts":
  /*!****************************!*\
    !*** ./src/app/globals.ts ***!
    \****************************/

  /*! exports provided: Globals */

  /***/
  function srcAppGlobalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Globals", function () {
      return Globals;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Globals = /*#__PURE__*/_createClass(function Globals() {
      _classCallCheck(this, Globals);

      this.idUser = -1;
      this.pickUpNotes = '';
      this.fruits = [];
      this.vegetables = [];
      this.spices = [];
      this.carnes = [];
      this.cremeria = [];
      this.otros = [];
      this.horario = "";
      this.promo_seleccionada = null;
      this.metodo_pago = "";
      this.shoppingList = [];
      this.total_orden = 0;
      this.notes = '';
    });

    Globals = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Globals);
    /***/
  },

  /***/
  "./src/app/pagar-stripe/pagar-stripe-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagar-stripe/pagar-stripe-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PagarStripePageRoutingModule */

  /***/
  function srcAppPagarStripePagarStripeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagarStripePageRoutingModule", function () {
      return PagarStripePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pagar_stripe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pagar-stripe.page */
    "./src/app/pagar-stripe/pagar-stripe.page.ts");

    var routes = [{
      path: '',
      component: _pagar_stripe_page__WEBPACK_IMPORTED_MODULE_3__["PagarStripePage"]
    }];

    var PagarStripePageRoutingModule = /*#__PURE__*/_createClass(function PagarStripePageRoutingModule() {
      _classCallCheck(this, PagarStripePageRoutingModule);
    });

    PagarStripePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagarStripePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagar-stripe/pagar-stripe.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagar-stripe/pagar-stripe.module.ts ***!
    \*****************************************************/

  /*! exports provided: PagarStripePageModule */

  /***/
  function srcAppPagarStripePagarStripeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagarStripePageModule", function () {
      return PagarStripePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pagar_stripe_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pagar-stripe-routing.module */
    "./src/app/pagar-stripe/pagar-stripe-routing.module.ts");
    /* harmony import */


    var _pagar_stripe_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pagar-stripe.page */
    "./src/app/pagar-stripe/pagar-stripe.page.ts");

    var PagarStripePageModule = /*#__PURE__*/_createClass(function PagarStripePageModule() {
      _classCallCheck(this, PagarStripePageModule);
    });

    PagarStripePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], br_mask__WEBPACK_IMPORTED_MODULE_1__["BrMaskerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _pagar_stripe_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagarStripePageRoutingModule"]],
      declarations: [_pagar_stripe_page__WEBPACK_IMPORTED_MODULE_7__["PagarStripePage"]]
    })], PagarStripePageModule);
    /***/
  },

  /***/
  "./src/app/pagar-stripe/pagar-stripe.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pagar-stripe/pagar-stripe.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagarStripePagarStripePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-col {\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.full {\n  width: 100% !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.drawer-pull {\n  background: #cccccc;\n  height: 4px;\n  width: 60px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9wYWdhci1zdHJpcGUvcGFnYXItc3RyaXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnYXItc3RyaXBlL3BhZ2FyLXN0cmlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdhci1zdHJpcGUvcGFnYXItc3RyaXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnVsbHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDowcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDowcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJhd2VyLXB1bGwge1xyXG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn0iLCJpb24tY29sIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZnVsbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRyYXdlci1wdWxsIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pagar-stripe/pagar-stripe.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pagar-stripe/pagar-stripe.page.ts ***!
    \***************************************************/

  /*! exports provided: PagarStripePage */

  /***/
  function srcAppPagarStripePagarStripePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagarStripePage", function () {
      return PagarStripePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/stripe/ngx */
    "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _custom_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../custom-icons */
    "./src/app/custom-icons.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagarStripePage = /*#__PURE__*/function () {
      function PagarStripePage(global, stripe, http, modalCtrl) {
        _classCallCheck(this, PagarStripePage);

        this.global = global;
        this.stripe = stripe;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.years = [21, 22, 23, 24, 25, 26, 26, 27, 28, 30]; //Iconos

        this.bank_icon = null;
        this.icon_visa = _custom_icons__WEBPACK_IMPORTED_MODULE_5__["CustomIcons"].visa;
        this.icon_mastercard = _custom_icons__WEBPACK_IMPORTED_MODULE_5__["CustomIcons"].mastercard;
        this.icon_american_express = _custom_icons__WEBPACK_IMPORTED_MODULE_5__["CustomIcons"].american_express;
        this.icon_cvv = _custom_icons__WEBPACK_IMPORTED_MODULE_5__["CustomIcons"].cvv;
        this.cardNumber = "";
        this.cardMonth = "";
        this.cardCVV = "";
        this.cardYear = "";
        this.stripeKey = "pk_test_51JUanZHp7t5AdMQYDT4tXnoji8StJQFqnnzbQR9JXMpsovRohmjWxi8rgNMR3Ypo9L97vnNsVArPrsPBNM4iCTQf00R1gWa9cy";
        this.stripeKey = this.global.getAppConfigFlag("STRIPE_KEY");
      }

      _createClass(PagarStripePage, [{
        key: "closeModal",
        value: function closeModal() {
          var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.modalCtrl.dismiss({
            success: success,
            data: data
          });
        }
      }, {
        key: "findIssuerName",
        value: function findIssuerName() {
          console.log('cardNumber', this.cardNumber);

          if (this.cardNumber.length >= 4) {
            var issuerName = this.detectCardType(this.cardNumber.replace(' ', ''));
            console.log('Issuer', issuerName);

            switch (issuerName) {
              case "visa":
                this.bank_icon = this.icon_visa;
                break;

              case "mastercard":
                this.bank_icon = this.icon_mastercard;
                break;

              case "amex":
                this.bank_icon = this.icon_american_express;
                break;

              default:
                this.bank_icon = null;
                break;
            }
          } else {
            this.bank_icon = null;
          }
        }
      }, {
        key: "detectCardType",
        value: function detectCardType(number) {
          var re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62|88)\d+$/,
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
          };

          for (var key in re) {
            if (re[key].test(number)) {
              return key;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.fillYearList();
          console.log('Years', this.years);
        }
      }, {
        key: "validacionesTarjeta",
        value: function validacionesTarjeta() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.cardNumber == "")) {
                      _context4.next = 4;
                      break;
                    }

                    _context4.next = 3;
                    return this.global.showToast("Ingresa el numero de tarjeta", "danger");

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                    if (!(this.cardNumber.length != 19)) {
                      _context4.next = 8;
                      break;
                    }

                    _context4.next = 7;
                    return this.global.showToast("El número de tarjeta proporcionado no es válido", "danger");

                  case 7:
                    return _context4.abrupt("return", _context4.sent);

                  case 8:
                    if (!(this.cardMonth == "")) {
                      _context4.next = 12;
                      break;
                    }

                    _context4.next = 11;
                    return this.global.showToast("La fecha de vencimiento proporcionada no es válida", "danger");

                  case 11:
                    return _context4.abrupt("return", _context4.sent);

                  case 12:
                    if (!(this.cardYear == "")) {
                      _context4.next = 16;
                      break;
                    }

                    _context4.next = 15;
                    return this.global.showToast("El año proporcionado no es válido", "danger");

                  case 15:
                    return _context4.abrupt("return", _context4.sent);

                  case 16:
                    if (!(this.cardCVV == "")) {
                      _context4.next = 20;
                      break;
                    }

                    _context4.next = 19;
                    return this.global.showToast("El código CVV proporcionado no es válido", "danger");

                  case 19:
                    return _context4.abrupt("return", _context4.sent);

                  case 20:
                    this.payWithStripe();

                  case 21:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "fillYearList",
        value: function fillYearList() {
          var initYear = 21;
          this.years = [];

          for (var year = initYear; year < initYear + 10; year++) {
            this.years.push(year);
          }
        }
      }, {
        key: "payWithStripe",
        value: function payWithStripe() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this4 = this;

            var comision, comision_iva, a_pagar, cardDetails;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    comision = parseFloat(this.global.a_pagar.precio_final) * 0.036;
                    comision_iva = comision * 0.16;
                    a_pagar = (parseFloat(this.global.a_pagar.precio_final) + comision + comision_iva).toFixed(2);
                    console.log('A Pagar', a_pagar);
                    cardDetails = {
                      number: this.cardNumber.toString().replace(/ /g, ''),
                      expMonth: parseInt(this.cardMonth),
                      expYear: parseInt(this.cardYear),
                      cvc: this.cardCVV.toString()
                    };
                    _context5.next = 7;
                    return this.global.showLoading("Cobrando..");

                  case 7:
                    try {
                      console.log('cardDetails', cardDetails);
                      this.stripe.setPublishableKey(this.stripeKey);
                      this.stripe.createCardToken(cardDetails).then(function (token) {
                        console.log(token);

                        _this4.makePayment(token.id);
                      })["catch"](function (error) {
                        _this4.global.dismissLoading();

                        _this4.global.showToast(error, "danger");
                      });
                    } catch (error) {
                      this.global.dismissLoading();
                    }

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "makePayment",
        value: function makePayment(token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this5 = this;

            var comision, comision_iva, a_pagar, amount;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    comision = parseFloat(this.global.a_pagar.precio_final) * 0.036;
                    comision_iva = comision * 0.16;
                    a_pagar = (parseFloat(this.global.a_pagar.precio_final) + comision + comision_iva).toFixed(2);
                    console.log('A Pagar', a_pagar);
                    amount = parseInt(a_pagar) * 100;
                    _context6.prev = 5;
                    this.http.get("https://us-central1-mercasa-e6e4d.cloudfunctions.net/payWithStripe?token=".concat(token, "&amount=").concat(amount, "&currency=MXN")).subscribe(function (data) {
                      console.log(data);

                      _this5.global.dismissLoading();

                      if (data.status) {
                        if (data.status == "succeeded") {
                          _this5.global.showToast("El pago ha sido completado con exito");

                          var obj = {
                            id_pago: data.id,
                            card: data.payment_method_details.card.last4,
                            pago: data.amount / 100
                          };

                          _this5.closeModal(true, obj);
                        }
                      } else {
                        if (data.raw) {
                          if (data.raw.statusCode) {
                            var param = "";

                            if (data.raw.param) {
                              param = " en " + data.raw.param;
                            }

                            _this5.global.showToast(data.raw.message + param, "danger");
                          }
                        }
                      }
                    });
                    _context6.next = 13;
                    break;

                  case 9:
                    _context6.prev = 9;
                    _context6.t0 = _context6["catch"](5);
                    _context6.next = 13;
                    return this.global.dismissLoading();

                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[5, 9]]);
          }));
        }
      }]);

      return PagarStripePage;
    }();

    PagarStripePage.ctorParameters = function () {
      return [{
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
      }, {
        type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
      }];
    };

    PagarStripePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-pagar-stripe',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pagar-stripe.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagar-stripe/pagar-stripe.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pagar-stripe.page.scss */
      "./src/app/pagar-stripe/pagar-stripe.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])], PagarStripePage);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      //readonly HOST = 'http://localhost:4430/API/';
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.HOST = 'https://mercasa.mx/API/';
      }

      _createClass(ApiService, [{
        key: "getUser",
        value: function getUser(id_user) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('iduser', id_user);
          return this.http.post(this.HOST + 'getUser.php', httpParams);
        }
      }, {
        key: "updatePayment",
        value: function updatePayment(idorder, subtotal, id_paypal, email, nombre) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idorder', idorder).set('subtotal', subtotal).set('id_paypal', id_paypal).set('email', email).set('nombre', nombre);
          return this.http.post(this.HOST + 'updatePayment.php', httpParams);
        }
      }, {
        key: "RegistrarCliente",
        value: function RegistrarCliente(obj) {
          return this.http.post(String(this.HOST + 'registrarCliente.php'), this.getFormData(obj));
        }
      }, {
        key: "RegistrarSinCobertura",
        value: function RegistrarSinCobertura(obj) {
          return this.http.post(String(this.HOST + 'registrarNoCobertura.php'), this.getFormData(obj));
        }
      }, {
        key: "getFlags",
        value: function getFlags() {
          return this.http.get(String(this.HOST + 'getFlags.php'));
        }
      }, {
        key: "VerificarCobertura",
        value: function VerificarCobertura(codigo_postal) {
          var obj = {
            codigo_postal: codigo_postal
          };
          return this.http.post(String(this.HOST + 'verificarCobertura.php'), this.getFormData(obj));
        }
      }, {
        key: "VerificacionSMS",
        value: function VerificacionSMS(celular, code) {
          var obj = {
            celular: celular,
            code: code
          };
          return this.http.post(String(this.HOST + 'enviarSMSConfirmacion.php'), this.getFormData(obj));
        }
      }, {
        key: "updateVerificacionSMS",
        value: function updateVerificacionSMS(id_user) {
          var obj = {
            id_user: id_user
          };
          return this.http.post(String(this.HOST + 'updateVerificacionSMS.php'), this.getFormData(obj));
        }
      }, {
        key: "updateDevice",
        value: function updateDevice(iduser, device_id) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('iduser', iduser).set('device_id', device_id);
          return this.http.post(this.HOST + 'updateDevice.php', httpParams);
        }
      }, {
        key: "login",
        value: function login(telephone, password) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', telephone).set('password', password);
          return this.http.post(this.HOST + 'login.php', httpParams);
        }
      }, {
        key: "getProducts",
        value: function getProducts(id) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idcategory', id);
          return this.http.post(this.HOST + 'getProductsV2.php', httpParams);
        }
      }, {
        key: "createOrder",
        value: function createOrder(iduser, pickup, shoppingList, notes, pickupnotes, free_delivery, discount, free_product, metodo_pago) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('iduser', '' + iduser).set('notes', '' + notes).set('pickupnotes', '' + pickupnotes).set('pickup', '' + pickup).set('free_delivery', '' + free_delivery).set('discount', '' + discount).set('free_product', '' + free_product).set('metodo_pago', '' + metodo_pago);
          shoppingList.forEach(function (product) {
            httpParams = httpParams.append('idproduct[]', product['idproduct']);
            httpParams = httpParams.append('kg[]', '' + parseFloat(product['kg']));
            httpParams = httpParams.append('pc[]', product['pc']);
            var val = product['selectedWeight'] / 1000 * product['price'];
            var strVal = '' + val;
            httpParams = httpParams.append('prices[]', strVal);
          });
          return this.http.post(this.HOST + 'createOrderV2.php', httpParams);
        }
      }, {
        key: "getOrders",
        value: function getOrders(idUser) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('iduser', idUser).set('token', 'RBE_DEV_@_#_|__*');
          return this.http.post(this.HOST + 'getOrders.php', httpParams);
        }
      }, {
        key: "getFormData",
        value: function getFormData(data) {
          var formData = new FormData();
          formData.append("data", JSON.stringify(data));
          return formData;
        }
      }, {
        key: "checkReferredCode",
        value: function checkReferredCode(referred_code) {
          return this.http.get(this.HOST + 'checkReferredCode.php?referred_code=' + referred_code);
        }
      }, {
        key: "registerReferredCode",
        value: function registerReferredCode(referred_code, user_id) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('referido_id', referred_code).set('referenciado_id', user_id);
          return this.http.post(this.HOST + 'registerReferredCode.php', httpParams);
        }
      }, {
        key: "getReferredCommissionsByUserId",
        value: function getReferredCommissionsByUserId(userId) {
          return this.http.get(this.HOST + 'getReferredCommissions.php?user_id=' + userId);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/global.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/global.service.ts ***!
    \********************************************/

  /*! exports provided: GlobalService */

  /***/
  function srcAppServicesGlobalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
      return GlobalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

    var GlobalService = /*#__PURE__*/function () {
      function GlobalService(toastCtrl, router, loadingCtrl, storage, g, appVersion, alert, platform) {
        _classCallCheck(this, GlobalService);

        this.toastCtrl = toastCtrl;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.g = g;
        this.appVersion = appVersion;
        this.alert = alert;
        this.platform = platform;
        this.user_info = null;
        this.promotions = [];
        this.id_category = 0;
        this.flags = [];
        this.promotions_carrousel = [];
        this.isApp = false;
        this.device_id = null;
        this.a_pagar = null;
        this.finish_order = "products";
        this.finish_order_return = "";
        this.send_order_return = "";
        this.esInvitado = false;

        if (this.platform.is('mobileweb')) {
          this.isApp = false;
        } else {
          this.isApp = true;
        }
      }

      _createClass(GlobalService, [{
        key: "getAppConfigFlag",
        value: function getAppConfigFlag(flag) {
          var result = this.flags.filter(function (x) {
            if (x.flag == flag) {
              return x;
            }
          });

          if (result.length >= 1) {
            return result[0].value;
          } else {
            return null;
          }
        }
      }, {
        key: "verificarVersion",
        value: function verificarVersion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var version, versionNumber, alert;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(this.isApp == true)) {
                      _context7.next = 19;
                      break;
                    }

                    _context7.next = 3;
                    return this.getAppConfigFlag("VERSION");

                  case 3:
                    version = _context7.sent;

                    if (!(version != null)) {
                      _context7.next = 19;
                      break;
                    }

                    versionNumber = null;
                    _context7.next = 8;
                    return this.appVersion.getVersionNumber().then(function (data) {
                      versionNumber = data;
                    });

                  case 8:
                    if (!(versionNumber != null)) {
                      _context7.next = 19;
                      break;
                    }

                    versionNumber = versionNumber.replace('.', '').replace('.', '');
                    version = version.replace('.', '').replace('.', '');
                    console.log('version de db', version);
                    console.log('version de configxml', versionNumber);

                    if (!(parseInt(versionNumber) < parseInt(version))) {
                      _context7.next = 19;
                      break;
                    }

                    _context7.next = 16;
                    return this.alert.create({
                      header: 'Alerta',
                      message: 'La versión de tu aplicación esta desactualizada, dirígete a la PlayStore y actualízala',
                      buttons: [{
                        text: 'Aceptar',
                        handler: function handler() {
                          navigator['app'].exitApp();
                        }
                      }]
                    });

                  case 16:
                    alert = _context7.sent;
                    _context7.next = 19;
                    return alert.present();

                  case 19:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getCredentials",
        value: function getCredentials() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var _this6 = this;

            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.storage.get('user_info').then(function (val) {
                      if (val != null) {
                        _this6.user_info = JSON.parse(val);
                      }
                    });

                  case 2:
                    _context8.next = 4;
                    return this.storage.get('esInvitado').then(function (val) {
                      if (val != null) {
                        _this6.esInvitado = val;
                      }
                    });

                  case 4:
                    _context8.next = 6;
                    return this.storage.get('idUser').then(function (val) {
                      if (val != null) {
                        _this6.g.idUser = val;

                        if (_this6.user_info.verificado == 1) {
                          _this6.router.navigate(['tabs/categories']);
                        } else {
                          _this6.router.navigate(['verificacion-cliente']);
                        }
                      }
                    });

                  case 6:
                    return _context8.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "setItemStorage",
        value: function setItemStorage(keyName, value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.storage.set(keyName, value);

                  case 2:
                    return _context9.abrupt("return", true);

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storage.set('idUser', null);
          this.storage.set('user_info', null);
          this.user_info = null;
          this.router.navigate(['home']);
        }
      }, {
        key: "showToastAndRedirect",
        value: function showToastAndRedirect(message, routerUrl) {
          var cliente = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var _this7 = this;

            var color, navigationExtras;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    color = 'primary';
                    _context10.prev = 1;
                    _context10.next = 4;
                    return this.dismissToast();

                  case 4:
                    _context10.next = 8;
                    break;

                  case 6:
                    _context10.prev = 6;
                    _context10.t0 = _context10["catch"](1);

                  case 8:
                    navigationExtras = {
                      state: cliente
                    };
                    _context10.next = 11;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 2500,
                      color: color
                    }).then(function (data) {
                      data.present();

                      if (routerUrl != null) {
                        _this7.router.navigate([routerUrl], navigationExtras);
                      }
                    });

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[1, 6]]);
          }));
        }
      }, {
        key: "showToast",
        value: function showToast(message, anotherColor) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var color;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    color = 'primary';

                    if (anotherColor) {
                      color = anotherColor;
                    }

                    _context11.prev = 2;
                    _context11.next = 5;
                    return this.dismissToast();

                  case 5:
                    _context11.next = 9;
                    break;

                  case 7:
                    _context11.prev = 7;
                    _context11.t0 = _context11["catch"](2);

                  case 9:
                    _context11.next = 11;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 2500,
                      color: color,
                      buttons: [{
                        text: 'x',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    }).then(function (data) {
                      data.present();
                    });

                  case 11:
                    return _context11.abrupt("return", true);

                  case 12:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[2, 7]]);
          }));
        }
      }, {
        key: "dismissToast",
        value: function dismissToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toastCtrl.dismiss();

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "showLoading",
        value: function showLoading(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    _context13.next = 3;
                    return this.dismissLoading();

                  case 3:
                    _context13.next = 7;
                    break;

                  case 5:
                    _context13.prev = 5;
                    _context13.t0 = _context13["catch"](0);

                  case 7:
                    _context13.next = 9;
                    return this.loadingCtrl.create({
                      message: msg + '..'
                    });

                  case 9:
                    this.loading = _context13.sent;
                    this.loading.present();

                  case 11:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[0, 5]]);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.prev = 0;
                    _context14.next = 3;
                    return this.loading.dismiss();

                  case 3:
                    _context14.next = 7;
                    break;

                  case 5:
                    _context14.prev = 5;
                    _context14.t0 = _context14["catch"](0);

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[0, 5]]);
          }));
        }
      }]);

      return GlobalService;
    }();

    GlobalService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"], _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], GlobalService);
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'categories',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | categories-categories-module */
            "categories-categories-module").then(__webpack_require__.bind(null,
            /*! ../categories/categories.module */
            "./src/app/categories/categories.module.ts")).then(function (m) {
              return m.CategoriesPageModule;
            });
          }
        }]
      }, {
        path: 'referred',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | referred-referred-module */
            "referred-referred-module").then(__webpack_require__.bind(null,
            /*! ../referred/referred.module */
            "./src/app/referred/referred.module.ts")).then(function (m) {
              return m.ReferredPageModule;
            });
          }
        }]
      }, {
        path: 'orders',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | orders-orders-module */
            "orders-orders-module").then(__webpack_require__.bind(null,
            /*! ../orders/orders.module */
            "./src/app/orders/orders.module.ts")).then(function (m) {
              return m.OrdersModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = /*#__PURE__*/_createClass(function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    });

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = /*#__PURE__*/_createClass(function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    });

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _custom_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../custom-icons */
    "./src/app/custom-icons.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage(modalCtrl, global, router, iab) {
        _classCallCheck(this, TabsPage);

        this.modalCtrl = modalCtrl;
        this.global = global;
        this.router = router;
        this.iab = iab;
        this.cart_icon = _custom_icons__WEBPACK_IMPORTED_MODULE_1__["CustomIcons"].cart;
        console.log('cart_icon', this.cart_icon);
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));
        }
      }, {
        key: "viewOrders",
        value: function viewOrders() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.router.navigate(['/tabs/orders']);

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "verPerfil",
        value: function verPerfil() {
          this.router.navigate(['/tabs/categories']);
        }
      }, {
        key: "showRederred",
        value: function showRederred() {
          this.router.navigate(['/tabs/referred']);
        }
      }, {
        key: "openWhatsapp",
        value: function openWhatsapp() {
          this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.global.logout();

                  case 2:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }];
    };

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs2/tabs2-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: Tabs2PageRoutingModule */

  /***/
  function srcAppTabs2Tabs2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2PageRoutingModule", function () {
      return Tabs2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tabs2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs2.page */
    "./src/app/tabs2/tabs2.page.ts");

    var routes = [{
      path: 'tabs2',
      component: _tabs2_page__WEBPACK_IMPORTED_MODULE_3__["Tabs2Page"],
      children: [{
        path: 'products/:id',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | products-products-module */
            "products-products-module").then(__webpack_require__.bind(null,
            /*! ../products/products.module */
            "./src/app/products/products.module.ts")).then(function (m) {
              return m.ProductsPageModule;
            });
          }
        }]
      }, {
        path: 'pagar',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | send-order-send-order-module */
            "send-order-send-order-module").then(__webpack_require__.bind(null,
            /*! ../send-order/send-order.module */
            "./src/app/send-order/send-order.module.ts")).then(function (m) {
              return m.SendOrderPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var Tabs2PageRoutingModule = /*#__PURE__*/_createClass(function Tabs2PageRoutingModule() {
      _classCallCheck(this, Tabs2PageRoutingModule);
    });

    Tabs2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tabs2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.module.ts":
  /*!***************************************!*\
    !*** ./src/app/tabs2/tabs2.module.ts ***!
    \***************************************/

  /*! exports provided: Tabs2PageModule */

  /***/
  function srcAppTabs2Tabs2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2PageModule", function () {
      return Tabs2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs2-routing.module */
    "./src/app/tabs2/tabs2-routing.module.ts");
    /* harmony import */


    var _tabs2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs2.page */
    "./src/app/tabs2/tabs2.page.ts");

    var Tabs2PageModule = /*#__PURE__*/_createClass(function Tabs2PageModule() {
      _classCallCheck(this, Tabs2PageModule);
    });

    Tabs2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs2PageRoutingModule"]],
      declarations: [_tabs2_page__WEBPACK_IMPORTED_MODULE_6__["Tabs2Page"]]
    })], Tabs2PageModule);
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.page.scss":
  /*!***************************************!*\
    !*** ./src/app/tabs2/tabs2.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabs2Tabs2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMyL3RhYnMyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.page.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs2/tabs2.page.ts ***!
    \*************************************/

  /*! exports provided: Tabs2Page */

  /***/
  function srcAppTabs2Tabs2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2Page", function () {
      return Tabs2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/global.service */
    "./src/app/services/global.service.ts");

    var Tabs2Page = /*#__PURE__*/function () {
      function Tabs2Page(nav, router, g, global, iab) {
        _classCallCheck(this, Tabs2Page);

        this.nav = nav;
        this.router = router;
        this.g = g;
        this.global = global;
        this.iab = iab;
      }

      _createClass(Tabs2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/tabs/categories']);
        }
      }, {
        key: "carrito",
        value: function carrito() {
          this.global.finish_order = "tabs";
          this.global.finish_order_return = "/tabs2/products/" + this.global.id_category;
          this.router.navigate(["finish-order"]);
        }
      }, {
        key: "pagar",
        value: function pagar() {
          if (this.g.fruits.length >= 1 || this.g.vegetables.length >= 1 || this.g.spices.length >= 1 || this.g.carnes.length >= 1 || this.g.cremeria.length >= 1 || this.g.otros.length >= 1) {
            this.global.send_order_return = "/tabs2/products/" + this.global.id_category;
            this.global.finish_order_return = "/tabs2/products/" + this.global.id_category;
            this.global.finish_order = "tabs";
            this.router.navigate(['send-order']);
          } else {
            return this.global.showToast("No hay nada en el carrito", "danger");
          }
        }
      }, {
        key: "openWhatsapp",
        value: function openWhatsapp() {
          this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
        }
      }]);

      return Tabs2Page;
    }();

    Tabs2Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]
      }];
    };

    Tabs2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs2.page.scss */
      "./src/app/tabs2/tabs2.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])], Tabs2Page);
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/alfredo/Alfredo/Personal/Proyectos/Fresko/fresko-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map