function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terminar-compra-terminar-compra-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/terminar-compra/terminar-compra.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terminar-compra/terminar-compra.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTerminarCompraTerminarCompraPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\"\r\n          name=\"arrow-back-circle-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-row style=\"margin-top: 20%;\">\r\n    <ion-col size=\"1\">\r\n    </ion-col>\r\n    <ion-col size=\"9\" *ngIf=\"this.global.a_pagar\">\r\n      <h3 style=\"font-weight: bold;font-size: 38px;text-align: center;\">EL TOTAL DE SU COMPRA ES:</h3>\r\n      <h3 style=\"font-weight: bold;font-size: 52px;text-align: center;color:#00b050\">{{this.global.a_pagar.precio_final | currency }} MXN</h3>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:2%\">\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      <h4 style=\"font-weight: bold;\">Si desea pagar con tarjeta se le cobrara una comision del 3.6% + IVA. Dando un total de {{total_tarjeta | currency }} MXN.</h4>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:10%\">\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"9\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn2\" style=\"width: 100%;\"\r\n          (click)=\"elegirMetodoPago('TRANSFERENCIA')\">TRANSFERENCIA</button>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"9\" style=\"text-align: center;\">\r\n\r\n        <button type=\"button\" class=\"buscar-btn2\" style=\"width: 100%;\"\r\n        (click)=\"elegirMetodoPago('TARJETA')\">TARJETA</button>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  \r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/terminar-compra/terminar-compra-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/terminar-compra/terminar-compra-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TerminarCompraPageRoutingModule */

  /***/
  function srcAppTerminarCompraTerminarCompraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminarCompraPageRoutingModule", function () {
      return TerminarCompraPageRoutingModule;
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


    var _terminar_compra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terminar-compra.page */
    "./src/app/terminar-compra/terminar-compra.page.ts");

    var routes = [{
      path: '',
      component: _terminar_compra_page__WEBPACK_IMPORTED_MODULE_3__["TerminarCompraPage"]
    }];

    var TerminarCompraPageRoutingModule = /*#__PURE__*/_createClass(function TerminarCompraPageRoutingModule() {
      _classCallCheck(this, TerminarCompraPageRoutingModule);
    });

    TerminarCompraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TerminarCompraPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/terminar-compra/terminar-compra.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/terminar-compra/terminar-compra.module.ts ***!
    \***********************************************************/

  /*! exports provided: TerminarCompraPageModule */

  /***/
  function srcAppTerminarCompraTerminarCompraModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminarCompraPageModule", function () {
      return TerminarCompraPageModule;
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


    var _terminar_compra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./terminar-compra-routing.module */
    "./src/app/terminar-compra/terminar-compra-routing.module.ts");
    /* harmony import */


    var _terminar_compra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./terminar-compra.page */
    "./src/app/terminar-compra/terminar-compra.page.ts");

    var TerminarCompraPageModule = /*#__PURE__*/_createClass(function TerminarCompraPageModule() {
      _classCallCheck(this, TerminarCompraPageModule);
    });

    TerminarCompraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terminar_compra_routing_module__WEBPACK_IMPORTED_MODULE_5__["TerminarCompraPageRoutingModule"]],
      declarations: [_terminar_compra_page__WEBPACK_IMPORTED_MODULE_6__["TerminarCompraPage"]]
    })], TerminarCompraPageModule);
    /***/
  },

  /***/
  "./src/app/terminar-compra/terminar-compra.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/terminar-compra/terminar-compra.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTerminarCompraTerminarCompraPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 18px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 18px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC90ZXJtaW5hci1jb21wcmEvdGVybWluYXItY29tcHJhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVybWluYXItY29tcHJhL3Rlcm1pbmFyLWNvbXByYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNHLHFCQUFBO0FDQUg7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQztFQUFvQixnQkFBQTtFQUNqQixrQkFBQTtBQ0dKOztBREFDO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFBO0FDSUo7O0FEREM7RUFDRyxrQkFBQTtBQ0lKOztBRERDO0VBQ0csNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvdGVybWluYXItY29tcHJhL3Rlcm1pbmFyLWNvbXByYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xyXG59XHJcblxyXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcclxufSIsIi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnVzY2FyLWJ0bjIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdmMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/terminar-compra/terminar-compra.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/terminar-compra/terminar-compra.page.ts ***!
    \*********************************************************/

  /*! exports provided: TerminarCompraPage */

  /***/
  function srcAppTerminarCompraTerminarCompraPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminarCompraPage", function () {
      return TerminarCompraPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pagar_stripe_pagar_stripe_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../pagar-stripe/pagar-stripe.page */
    "./src/app/pagar-stripe/pagar-stripe.page.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TerminarCompraPage = /*#__PURE__*/function () {
      function TerminarCompraPage(nav, router, global, api, modalCtrl) {
        _classCallCheck(this, TerminarCompraPage);

        this.nav = nav;
        this.router = router;
        this.global = global;
        this.api = api;
        this.modalCtrl = modalCtrl;
        var comision = parseFloat(this.global.a_pagar.precio_final) * 0.036;
        var comision_iva = comision * 0.16;
        var a_pagar = (parseFloat(this.global.a_pagar.precio_final) + comision + comision_iva).toFixed(2);
        this.total_tarjeta = a_pagar;
      }

      _createClass(TerminarCompraPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('A Pagar', this.global.a_pagar);

                    if (this.global.a_pagar == null) {
                      this.back();
                    }

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['tabs/categories']);
        }
      }, {
        key: "elegirMetodoPago",
        value: function elegirMetodoPago(tipo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this = this;

            var colorModal, modal, resp, obj;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(tipo == "TARJETA")) {
                      _context2.next = 13;
                      break;
                    }

                    colorModal = "cupertino-bottom-modal-black";
                    _context2.next = 4;
                    return this.modalCtrl.create({
                      component: _pagar_stripe_pagar_stripe_page__WEBPACK_IMPORTED_MODULE_1__["PagarStripePage"],
                      componentProps: {},
                      showBackdrop: true,
                      backdropDismiss: true,
                      mode: "ios",
                      cssClass: colorModal,
                      swipeToClose: true
                    });

                  case 4:
                    modal = _context2.sent;
                    _context2.next = 7;
                    return modal.present();

                  case 7:
                    _context2.next = 9;
                    return modal.onDidDismiss();

                  case 9:
                    resp = _context2.sent;

                    if (resp != null) {
                      if (resp.data.success) {
                        obj = {
                          idorder: this.global.a_pagar.idorder,
                          id_paypal: resp.data.data.id_pago,
                          email: resp.data.data.card,
                          nombre: "Stripe",
                          subtotal: resp.data.data.pago
                        };
                        this.api.updatePayment(obj.idorder, obj.subtotal, obj.id_paypal, obj.email, obj.nombre).toPromise().then(function (response) {
                          if (response.success) {
                            _this.global.showToastAndRedirect(response.message, "/tabs/categories");
                          } else {
                            _this.global.showToast(response.message, "danger");
                          }
                        });
                      }
                    }

                    _context2.next = 14;
                    break;

                  case 13:
                    this.router.navigate(['pago-transferencia']);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "cobrarMercadoPago",
        value: function cobrarMercadoPago() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['mercado-pago']);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return TerminarCompraPage;
    }();

    TerminarCompraPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('stripeButton', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])], TerminarCompraPage.prototype, "stripeButton", void 0);
    TerminarCompraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-terminar-compra',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./terminar-compra.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/terminar-compra/terminar-compra.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./terminar-compra.page.scss */
      "./src/app/terminar-compra/terminar-compra.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], TerminarCompraPage);
    /***/
  }
}]);
//# sourceMappingURL=terminar-compra-terminar-compra-module-es5.js.map