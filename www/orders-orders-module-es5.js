function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-row>\r\n    <ion-toolbar mode=\"ios\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"custom-button\" (click)=\"back()\"\r\n          style=\"color: white !important;text-transform: capitalize !important;\">\r\n          <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n          </ion-icon>\r\n          <span style=\"color: white !important;font-weight: bold;\">ATRÁS</span>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-img src=\"assets/zanahoria_blanca.png\"\r\n        style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n        class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n    </ion-toolbar>\r\n  </ion-row>\r\n  <ion-row style=\"width:100%;\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"8\" style=\"text-align: center;\">\r\n      <span style=\"font-weight: bold;color:#00b050;text-align: center;\">LISTA DE PEDIDOS</span>\r\n    </ion-col>\r\n    <ion-col size=\"2\"></ion-col>\r\n\r\n  </ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"orders.length == 0 && isLoading == false\">\r\n    <h4 style=\"text-align: center;font-weight: bold;\">No hay ordenes disponibles.</h4>\r\n  </div>\r\n  <div *ngIf=\"orders.length >= 1\">\r\n    <ion-list lines=\"none\">\r\n      <div style=\"text-align: center !important;margin-bottom:8%\" *ngFor=\"let item of orders\"\r\n        (click)=\"openDetails(item.idorder)\">\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"8\" style=\"border-bottom: 1px solid black\">\r\n            <div *ngIf=\"item.tipo == 'A'\"\r\n              style=\"padding-left:3%;padding-right:3%;background-color:#ff7500;color:white;font-size:14px;font-weight:bold;height: 3.8vh;border-radius: 15px;\">\r\n              <span>PEDIDO #{{item.idorder}}</span>\r\n            </div>\r\n            <div *ngIf=\"item.tipo == 'B'\"\r\n              style=\"padding-left:3%;padding-right:3%;background-color:#00b050;color:white;font-size:14px;font-weight:bold;height: 3.8vh;border-radius: 15px;\">\r\n              <span>PEDIDO #{{item.idorder}}</span>\r\n            </div>\r\n            <ion-label style=\"padding-left:3%;padding-right:3%;font-size:13px;font-weight:bold\">{{\r\n              item.timestamp.split('=')[1] }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <!-- {{item.timestamp }}-->\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
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


    var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");

    var routes = [{
      path: '',
      component: _orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]
    }];

    var OrdersRoutingModule = /*#__PURE__*/_createClass(function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    });

    OrdersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrdersRoutingModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/orders/orders.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  /*   --background: url(\"../../assets/background_login.jpeg\");\n      background-repeat: no-repeat;\n      background-size: cover; */\n  --background: none;\n  --background-color: #fff;\n  background: #fff;\n}\n\n.img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.header {\n  --background: #00b050;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n  font-size: 1rem;\n}\n\nion-footer {\n  background: #00b050;\n  font-size: 1rem;\n}\n\n.green {\n  background: #00b050;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.button-native {\n  color: white !important;\n  text-transform: capitalize !important;\n}\n\n.custom-button {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7OytCQUFBO0VBR0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxtQkFBQTtBQ01GOztBREZBO0VBQ0UscUJBQUE7QUNLRjs7QUREQTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QUNJRjs7QUREQTtFQUNFLHVCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC8qICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZF9sb2dpbi5qcGVnXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uaW1nX2hlYWRlciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5oZWFkZXIgaW9uLXRleHQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG59XHJcblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcclxufVxyXG5cclxuXHJcbi5idXR0b24tbmF0aXZlIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWJ1dHRvbntcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLyogICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX2xvZ2luLmpwZWdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pbWdfaGVhZGVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMGIwNTA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5oZWFkZXIgaW9uLXRleHQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMwMGIwNTA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/global.service */
    "./src/app/services/global.service.ts");

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(router, g, apiService, global) {
        _classCallCheck(this, OrdersComponent);

        this.router = router;
        this.g = g;
        this.apiService = apiService;
        this.global = global;
        this.orders = [];
      }

      _createClass(OrdersComponent, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.obtenerOrdenes();

                  case 2:
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
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "obtenerOrdenes",
        value: function obtenerOrdenes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this = this;

            var orders, first, i;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = true;
                    this.idUser = String(this.g.idUser);
                    orders = [];

                    if (!(this.g.idUser !== -1)) {
                      _context3.next = 12;
                      break;
                    }

                    _context3.next = 6;
                    return this.global.showLoading("Cargando..");

                  case 6:
                    _context3.next = 8;
                    return this.apiService.getOrders(this.idUser).toPromise().then(function (response) {
                      orders = response.orders;
                    })["catch"](function (error) {
                      _this.global.dismissLoading();
                    });

                  case 8:
                    _context3.next = 10;
                    return this.global.dismissLoading();

                  case 10:
                    _context3.next = 13;
                    break;

                  case 12:
                    this.back();

                  case 13:
                    first = "B";

                    for (i = 0; i < orders.length; i++) {
                      if (first == "B") {
                        first = "A";
                      } else {
                        first = "B";
                      }

                      orders[i].tipo = first;
                    }

                    this.orders = orders;
                    this.isLoading = false;
                    console.log('Ordenes', this.orders);

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openDetails",
        value: function openDetails(id) {
          this.router.navigate(["order-details/".concat(id)]);
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['tabs/categories']);
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
      }];
    };

    OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./orders.component.scss */
      "./src/app/orders/orders.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
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


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");

    var OrdersModule = /*#__PURE__*/_createClass(function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    });

    OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersRoutingModule"]],
      declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]]
    })], OrdersModule);
    /***/
  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map