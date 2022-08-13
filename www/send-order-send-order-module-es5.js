function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-order-send-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/send-order/send-order.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-order/send-order.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSendOrderSendOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:7%\">\r\n    <ion-img src=\"assets/mi_carrito.png\" (click)=\"carrito()\"\r\n      style=\"width:20vh;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n  </div>\r\n  <div class=\"totales\" style=\"margin-top:3%\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;\">Subtotal de la compra: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">{{subtotal | currency}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"promo_seleccionada == null || promo_seleccionada?.tipo != 'ENVIO'\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;\">Tarifa de entrega: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">{{costo_envio | currency }}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"promo_seleccionada != null && promo_seleccionada.tipo == 'ENVIO'\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;text-decoration-line: line-through;\">Tarifa de entrega: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">$0.00</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"promo_seleccionada != null && promo_seleccionada.tipo == 'DESCUENTO'\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;\">Descuento: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">{{ promo_seleccionada.descuento_otorgado | currency }}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n\r\n  <div>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <textarea [(ngModel)]=\"pickUpNotes\" placeholder=\"AGREGA AQUI TUS COMENTARIOS SOBRE TU PEDIDO\" rows=\"6\"\r\n          style=\"text-align:center;border: 2px solid #dbdbdb;border-radius: 18px;width: 100% !important;height: 100% !important;background-color: #dbdbdb;color: black;font-weight: 300;\">\r\n        </textarea>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"promotions_available.length >= 1\" style=\"margin-top:3%\">\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <hr style=\"background-color:#ec760a;height:2px;\" />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngFor=\"let item of promotions_available; let i = index\">\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"11\" *ngIf=\"item.permitida\">\r\n        <ion-row>\r\n          <ion-col size=\"10\">\r\n            <span style=\"font-weight: bold;font-size: 15px;\">{{item.description}}\r\n            </span>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-checkbox (click)=\"updatePromoSeleccionada(item, i)\" [checked]=\"item.seleccionada\"></ion-checkbox>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"11\" *ngIf=\"!item.permitida\">\r\n        <ion-row>\r\n          <ion-col size=\"10\" *ngIf=\"item.tipo == 'DESCUENTO'\">\r\n            <span style=\"text-decoration-line: line-through;font-weight: bold;font-size: 15px;\">{{item.description}}\r\n            </span><br />\r\n            <span style=\"font-style: italic;font-size:13px;\">Necesitas {{item.diferencia | currency }} en tu carrito\r\n              para poder seleccionar esta promocion.\r\n            </span>\r\n          </ion-col>\r\n          <ion-col size=\"10\" *ngIf=\"item.tipo != 'DESCUENTO'\">\r\n            <span style=\"text-decoration-line: line-through;font-weight: bold;font-size: 15px;\">{{item.description}}\r\n            </span>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-checkbox disabled></ion-checkbox>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <hr style=\"background-color:#ec760a;height:2px;\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"total\">\r\n    <ion-row>\r\n      <ion-col size=\"3\"></ion-col>\r\n      <ion-col size=\"6\" style=\"text-align: center;\">\r\n        <span style=\"color:black;font-weight: bold;font-size: 17px;color:#ec760a\">Total Aproximado: {{total | currency }}</span>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:5%;margin-bottom:4%\">\r\n    <ion-row>\r\n      <ion-col size=\"3\"></ion-col>\r\n      <ion-col size=\"6\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%\" (click)=\"elegirHorario()\">CONTINUAR</button>\r\n      </ion-col>\r\n      <ion-col size=\"3\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/send-order/send-order-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/send-order/send-order-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SendOrderPageRoutingModule */

  /***/
  function srcAppSendOrderSendOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendOrderPageRoutingModule", function () {
      return SendOrderPageRoutingModule;
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


    var _send_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./send-order.page */
    "./src/app/send-order/send-order.page.ts");

    var routes = [{
      path: '',
      component: _send_order_page__WEBPACK_IMPORTED_MODULE_3__["SendOrderPage"]
    }];

    var SendOrderPageRoutingModule = /*#__PURE__*/_createClass(function SendOrderPageRoutingModule() {
      _classCallCheck(this, SendOrderPageRoutingModule);
    });

    SendOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendOrderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/send-order/send-order.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/send-order/send-order.module.ts ***!
    \*************************************************/

  /*! exports provided: SendOrderPageModule */

  /***/
  function srcAppSendOrderSendOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendOrderPageModule", function () {
      return SendOrderPageModule;
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


    var _send_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./send-order-routing.module */
    "./src/app/send-order/send-order-routing.module.ts");
    /* harmony import */


    var _send_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./send-order.page */
    "./src/app/send-order/send-order.page.ts");

    var SendOrderPageModule = /*#__PURE__*/_createClass(function SendOrderPageModule() {
      _classCallCheck(this, SendOrderPageModule);
    });

    SendOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _send_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendOrderPageRoutingModule"]],
      declarations: [_send_order_page__WEBPACK_IMPORTED_MODULE_6__["SendOrderPage"]]
    })], SendOrderPageModule);
    /***/
  },

  /***/
  "./src/app/send-order/send-order.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/send-order/send-order.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSendOrderSendOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.header {\n  --background: #00b050;\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n}\n\n.green {\n  background: #00b050;\n}\n\nion-spinner {\n  display: block;\n  margin: auto;\n}\n\n.img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #00b050;\n  color: white;\n  padding: 12px 12px 12px;\n}\n\n::-moz-placeholder {\n  text-align: center;\n  font-weight: 500;\n  vertical-align: middle;\n  color: black;\n}\n\n::placeholder {\n  text-align: center;\n  font-weight: 500;\n  vertical-align: middle;\n  color: black;\n}\n\n.header {\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n}\n\n.green {\n  background: #00b050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9zZW5kLW9yZGVyL3NlbmQtb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9zZW5kLW9yZGVyL3NlbmQtb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERFO0VBQ0UsbUJBQUE7QUNJSjs7QURGRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDS0o7O0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJSjs7QURGRTtFQUNFLHFCQUFBO0FDS0o7O0FERkM7RUFDQyxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDS0Y7O0FERkM7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDSUg7O0FEVEM7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDSUg7O0FEREU7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNJSjs7QURGRTtFQUNFLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9zZW5kLW9yZGVyL3NlbmQtb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ19oZWFkZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXIgaW9uLXRleHR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMGIwNTA7XHJcbiAgfVxyXG4gIGlvbi1zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4gIC5pbWdfaGVhZGVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcclxuIH1cclxuXHJcbiAuYnVzY2FyLWJ0bntcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDsgICAgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDEycHg7XHJcbn1cclxuXHJcbiA6OnBsYWNlaG9sZGVye1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLy8gIG1hcmdpbi10b3A6IDE1JTtcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gXHJcbiAgLmhlYWRlcntcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgLmhlYWRlciBpb24tdGV4dHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICB9XHJcbiAgXHJcbiIsIi5pbWdfaGVhZGVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMGIwNTA7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5oZWFkZXIgaW9uLXRleHQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbWdfaGVhZGVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xufVxuXG4uYnVzY2FyLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIwNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTJweCAxMnB4IDEycHg7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5oZWFkZXIgaW9uLXRleHQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/send-order/send-order.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/send-order/send-order.page.ts ***!
    \***********************************************/

  /*! exports provided: SendOrderPage */

  /***/
  function srcAppSendOrderSendOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendOrderPage", function () {
      return SendOrderPage;
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

    var SendOrderPage = /*#__PURE__*/function () {
      function SendOrderPage(apiService, g, router, activatedRoute, toastController, global, nav, modalCtrl) {
        _classCallCheck(this, SendOrderPage);

        this.apiService = apiService;
        this.g = g;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.global = global;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.cash = true;
        this.isLoading = false;
        this.showError = false;
        this.activated = false;
        this.promotions_available = [];
        this.subtotal = 0;
        this.total = 0;
        this.promo_seleccionada = null;
        this.costo_envio = 45.00;
        this.tipo = "send-order";
        this.shoppingList = [];
        this.totalCost = 0;
      }

      _createClass(SendOrderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedRadioGroup = 'M';
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.costo_envio = parseFloat(this.global.getAppConfigFlag("COSTO_ENVIO"));
          console.log('Res', this.global.user_info);
          this.getSubtotal();
          this.checkPromos();
          this.getTotalCost();
          console.log('Promos', this.promotions_available);
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

          this.g.shoppingList = this.shoppingList;
          console.log('Shipping list', this.shoppingList);
        }
      }, {
        key: "updatePromoSeleccionada",
        value: function updatePromoSeleccionada(item, index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            var i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    for (i = 0; i < this.promotions_available.length; i++) {
                      if (i != index) {
                        this.promotions_available[i].seleccionada = false;
                      }
                    }

                    setTimeout(function () {
                      if (_this.promotions_available[index].seleccionada == false) {
                        _this.promotions_available[index].seleccionada = true;
                      } else {
                        _this.promotions_available[index].seleccionada = false;
                      }

                      console.log('Promos Seleccionadas', _this.promotions_available);

                      var found = _this.promotions_available.filter(function (x) {
                        if (x.seleccionada == true) {
                          return x;
                        }
                      });

                      if (found.length >= 1) {
                        _this.promo_seleccionada = found[0];
                      } else {
                        _this.promo_seleccionada = null;
                      } // if(this.promo_seleccionada != null){


                      _this.getSubtotal(); // }

                    }, 200);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "carrito",
        value: function carrito() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // this.global.finish_order_return = "send-order";
                    this.router.navigate(['finish-order']);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "checkPromos",
        value: function checkPromos() {
          this.promotions_available = [];

          if (this.global.user_info.promotions_discount) {
            for (var i = 0; i < this.global.user_info.promotions_discount.length; i++) {
              var promo = this.global.user_info.promotions_discount[i];

              if (parseFloat(promo.minimum_amount) <= this.subtotal) {
                promo.permitida = true;
                promo.tipo = 'DESCUENTO';
                promo.diferencia = 0;
                promo.seleccionada = false;
                this.promotions_available.push(promo);
              } else {
                promo.permitida = false;
                promo.tipo = 'DESCUENTO';
                promo.seleccionada = false;
                promo.diferencia = (promo.minimum_amount - this.subtotal).toFixed(2);
                this.promotions_available.push(promo);
              }
            }
          }

          if (this.global.user_info.promotions_freedelivery) {
            for (var i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
              var exist = this.promotions_available.filter(function (x) {
                if (x.is_free_product == 1) {
                  return x;
                }
              });

              if (exist.length == 0) {
                this.global.user_info.promotions_freedelivery[i].permitida = true;
                this.global.user_info.promotions_freedelivery[i].tipo = 'ENVIO';
                this.global.user_info.promotions_freedelivery[i].diferencia = 0;
                this.global.user_info.promotions_freedelivery[i].seleccionada = false;
                this.promotions_available.push(this.global.user_info.promotions_freedelivery[i]);
              }
            }
          }

          if (this.global.user_info.promotions_freeproduct) {}
        }
      }, {
        key: "getSubtotal",
        value: function getSubtotal() {
          this.subtotal = 0;

          for (var i = 0; i < this.g.fruits.length; i++) {
            if (parseFloat(this.g.fruits[i].kg) > 0 || parseInt(this.g.fruits[i].pc, 10) > 0) {
              this.subtotal += this.g.fruits[i].selectedWeight / 1000 * this.g.fruits[i].price;
            }
          }

          for (var _i6 = 0; _i6 < this.g.vegetables.length; _i6++) {
            if (parseFloat(this.g.vegetables[_i6].kg) > 0 || parseInt(this.g.vegetables[_i6].pc, 10) > 0) {
              this.subtotal += this.g.vegetables[_i6].selectedWeight / 1000 * this.g.vegetables[_i6].price;
            }
          }

          for (var _i7 = 0; _i7 < this.g.spices.length; _i7++) {
            if (parseFloat(this.g.spices[_i7].kg) > 0 || parseInt(this.g.spices[_i7].pc, 10) > 0) {
              this.subtotal += this.g.spices[_i7].selectedWeight / 1000 * this.g.spices[_i7].price;
            }
          }

          for (var _i8 = 0; _i8 < this.g.carnes.length; _i8++) {
            if (parseFloat(this.g.carnes[_i8].kg) > 0 || parseInt(this.g.carnes[_i8].pc, 10) > 0) {
              this.subtotal += this.g.carnes[_i8].selectedWeight / 1000 * this.g.carnes[_i8].price;
            }
          }

          for (var _i9 = 0; _i9 < this.g.cremeria.length; _i9++) {
            if (parseFloat(this.g.cremeria[_i9].kg) > 0 || parseInt(this.g.cremeria[_i9].pc, 10) > 0) {
              this.subtotal += this.g.cremeria[_i9].selectedWeight / 1000 * this.g.cremeria[_i9].price;
            }
          }

          for (var _i10 = 0; _i10 < this.g.otros.length; _i10++) {
            if (parseFloat(this.g.otros[_i10].kg) > 0 || parseInt(this.g.otros[_i10].pc, 10) > 0) {
              this.subtotal += this.g.otros[_i10].selectedWeight / 1000 * this.g.otros[_i10].price;
            }
          }

          console.log('Subtotal', this.subtotal);
          this.total = 0;
          this.total = this.subtotal;
          this.total += this.costo_envio;

          if (this.promo_seleccionada != null) {
            if (this.promo_seleccionada.tipo == 'ENVIO') {
              this.total -= this.costo_envio;
            } else if (this.promo_seleccionada.tipo == 'DESCUENTO') {
              var descuento = this.subtotal * parseFloat("0." + this.promo_seleccionada.discount_price);
              this.promo_seleccionada.descuento_otorgado = descuento;
              this.total -= descuento;
            }
          }
        }
      }, {
        key: "back",
        value: function back() {
          if (this.global.finish_order == "products") {
            this.router.navigate(['/finish-order']);
          } else {
            this.router.navigate(['/tabs2/products/' + this.global.id_category]);
          }
        }
      }, {
        key: "radioGroupChange",
        value: function radioGroupChange(event) {
          this.selectedRadioGroup = event.detail.value;

          if (this.selectedRadioGroup == 'P') {
            this.activated = true;
          } else {
            this.activated = false;
          }
        }
      }, {
        key: "elegirHorario",
        value: function elegirHorario() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var obj, navigationExtras;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log('shoppingList Send Order', this.g.shoppingList);
                    this.g.notes = this.pickUpNotes;
                    this.g.total_orden = this.total;
                    this.g.promo_seleccionada = this.promo_seleccionada;
                    obj = {
                      tipo: this.tipo,
                      id_category: this.global.id_category
                    };
                    navigationExtras = {
                      state: obj
                    };
                    this.router.navigate(['horario-entrega'], navigationExtras);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return SendOrderPage;
    }();

    SendOrderPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    SendOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-send-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./send-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/send-order/send-order.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./send-order.page.scss */
      "./src/app/send-order/send-order.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], SendOrderPage);
    /***/
  }
}]);
//# sourceMappingURL=send-order-send-order-module-es5.js.map