function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-cliente-registro-cliente-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-cliente/registro-cliente.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro-cliente/registro-cliente.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistroClienteRegistroClientePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER A INICIO</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n  <div class=\"campos\" style=\"margin-left:10%;text-align: left;font-size: 14px;color: #21ac38;margin-top:8%\">\r\n    <span style=\"font-weight: bold;\">REGISTRO</span>\r\n  </div>\r\n  <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:3%\">\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Nombre Completo <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.nombre_completo\">\r\n    </ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Celular <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"tel\" inputmode=\"telephone\"\r\n      [(ngModel)]=\"cliente.celular\">\r\n    </ion-input>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"padding-left:0px\">\r\n        <ion-label position=\"stacked\" style=\"font-weight: bold;\">Calle <span\r\n            style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n        <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.calle\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"padding-left:0px\">\r\n        <ion-label position=\"stacked\" style=\"font-weight: bold;\">Numero <span\r\n            style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n        <ion-input required style=\"border-bottom: 4px solid black;\" type=\"tel\" [(ngModel)]=\"cliente.numero\">\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Cruces</ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.cruces\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Colonia <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.colonia\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Municipio <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.municipio\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Estado <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.estado\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Correo <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.correo\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Contraseña <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"password\" [(ngModel)]=\"cliente.password\">\r\n    </ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Confirmar Contraseña <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"password\"\r\n      [(ngModel)]=\"cliente.confirmar_password\"></ion-input>\r\n    <div class=\"campos\" style=\"padding-top: 5%;text-align: right;font-size: 11px;color: #21ac38;\">\r\n      <span> * Campos obligatorios</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:5%;margin-bottom:6%\">\r\n    <button type=\"button\" class=\"buscar-btn\" style=\"width: 23vh;\" (click)=\"enviarSolicitud()\">ENVIAR</button>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/registro-cliente/registro-cliente-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RegistroClientePageRoutingModule */

  /***/
  function srcAppRegistroClienteRegistroClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroClientePageRoutingModule", function () {
      return RegistroClientePageRoutingModule;
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


    var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro-cliente.page */
    "./src/app/registro-cliente/registro-cliente.page.ts");

    var routes = [{
      path: '',
      component: _registro_cliente_page__WEBPACK_IMPORTED_MODULE_3__["RegistroClientePage"]
    }];

    var RegistroClientePageRoutingModule = /*#__PURE__*/_createClass(function RegistroClientePageRoutingModule() {
      _classCallCheck(this, RegistroClientePageRoutingModule);
    });

    RegistroClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroClientePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/registro-cliente/registro-cliente.module.ts ***!
    \*************************************************************/

  /*! exports provided: RegistroClientePageModule */

  /***/
  function srcAppRegistroClienteRegistroClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroClientePageModule", function () {
      return RegistroClientePageModule;
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


    var _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-cliente-routing.module */
    "./src/app/registro-cliente/registro-cliente-routing.module.ts");
    /* harmony import */


    var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro-cliente.page */
    "./src/app/registro-cliente/registro-cliente.page.ts");

    var RegistroClientePageModule = /*#__PURE__*/_createClass(function RegistroClientePageModule() {
      _classCallCheck(this, RegistroClientePageModule);
    });

    RegistroClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroClientePageRoutingModule"]],
      declarations: [_registro_cliente_page__WEBPACK_IMPORTED_MODULE_6__["RegistroClientePage"]]
    })], RegistroClientePageModule);
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/registro-cliente/registro-cliente.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistroClienteRegistroClientePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 21px;\n  font-weight: bold;\n  background-color: #21ac39;\n  color: white;\n  padding: 12px 12px 12px;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  --placeholder-opacity: unset !important;\n  padding-bottom: 0px !important;\n}\n\ninput.native-input {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9yZWdpc3Ryby1jbGllbnRlL3JlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby1jbGllbnRlL3JlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRElBO0VBQ0csbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0RIOztBRElBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREhBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0M7RUFBb0IsZ0JBQUE7RUFDakIsa0JBQUE7QUNDSjs7QURFQztFQUFzQixnQkFBQTtFQUNuQixrQkFBQTtBQ0VKOztBRENDO0VBQ0csa0JBQUE7QUNFSjs7QURDQztFQUNHLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUNFSjs7QURDQTtFQUNHLDJCQUFBO0VBQ0EsOEJBQUE7QUNFSCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvLWNsaWVudGUvcmVnaXN0cm8tY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyMWFjMzk7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgcGFkZGluZzogMTJweCAxMnB4IDEycHg7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0Lm5hdGl2ZS1pbnB1dCB7XHJcbiAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59IiwiLmNwLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYWMzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDEycHggMTJweDtcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQubmF0aXZlLWlucHV0IHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/registro-cliente/registro-cliente.page.ts ***!
    \***********************************************************/

  /*! exports provided: RegistroClientePage */

  /***/
  function srcAppRegistroClienteRegistroClientePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroClientePage", function () {
      return RegistroClientePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var RegistroClientePage = /*#__PURE__*/function () {
      function RegistroClientePage(global, api, router, g) {
        _classCallCheck(this, RegistroClientePage);

        this.global = global;
        this.api = api;
        this.router = router;
        this.g = g;
        this.cliente = {
          nombre_completo: "",
          celular: "",
          calle: "",
          numero: "",
          codigo_postal: "",
          cruces: "",
          colonia: "",
          correo: "",
          password: "",
          confirmar_password: "",
          municipio: "",
          estado: ""
        };
        var navigation = this.router.getCurrentNavigation();
        this.codigo_postal = navigation.extras.state;
        console.log('codigo_postal', this.codigo_postal);
        this.cliente.codigo_postal = this.codigo_postal;
      }

      _createClass(RegistroClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['home']);
        }
      }, {
        key: "validarFormulario",
        value: function validarFormulario() {
          if (this.cliente.nombre_completo == "") {
            this.global.showToast("Ingresa tu nombre completo", "danger");
            return false;
          } else if (this.cliente.nombre_completo.length <= 4) {
            this.global.showToast("Debes escribir tu nombre completo", "danger");
            return false;
          }

          if (this.cliente.celular == "") {
            this.global.showToast("Ingresa tu numero de celular", "danger");
            return false;
          } else if (this.cliente.celular.length <= 7) {
            this.global.showToast("Debes escribir tu celular completo", "danger");
            return false;
          }

          if (this.cliente.calle == "") {
            this.global.showToast("Ingresa el nombre de tu calle", "danger");
            return false;
          }

          if (this.cliente.calle.length <= 3) {
            this.global.showToast("Ingresa correctamente el nombre de tu calle", "danger");
            return false;
          }

          if (this.cliente.numero == "") {
            this.global.showToast("Ingresa el numero de casa", "danger");
            return false;
          }

          if (this.cliente.colonia == "") {
            this.global.showToast("Ingresa el nombre de tu colonia", "danger");
            return false;
          } else if (this.cliente.colonia.length <= 3) {
            this.global.showToast("Ingresa correctamente el nombre de tu colonia.", "danger");
            return false;
          }

          if (this.cliente.municipio == "") {
            this.global.showToast("Ingresa el nombre de tu municipio", "danger");
            return false;
          }

          if (this.cliente.estado == "") {
            this.global.showToast("Ingresa el nombre de tu estado", "danger");
            return false;
          }

          if (this.cliente.correo == "") {
            this.global.showToast("Ingresa tu correo electronico", "danger");
            return false;
          }

          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!re.test(this.cliente.correo)) {
            this.global.showToast("El correo electronico es invalido.", "danger");
            return false;
          }

          if (this.cliente.password == "") {
            this.global.showToast("Debes indicar tu contraseña", "danger");
            return false;
          }

          if (this.cliente.password.length <= 5) {
            this.global.showToast("La contraseña debe ser minimo de 5 caracteres.", "danger");
            return false;
          }

          if (this.cliente.confirmar_password == "") {
            this.global.showToast("Debes teclear la confirmacion de la contraseña", "danger");
            return false;
          }

          if (this.cliente.password != this.cliente.confirmar_password) {
            this.global.showToast("Las contraseñas no coinciden.", "danger");
            return false;
          }

          return true;
        }
      }, {
        key: "enviarSolicitud",
        value: function enviarSolicitud() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            var validation, response, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    validation = this.validarFormulario();

                    if (validation) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    _context.next = 5;
                    return this.global.showLoading("Registrando...");

                  case 5:
                    response = null;
                    _context.next = 8;
                    return this.api.RegistrarCliente(this.cliente).toPromise().then(function (data) {
                      response = data;

                      if (!data.success) {
                        _this.global.showToast(data.message, "danger");
                      }
                    })["catch"](function (error) {
                      _this.global.dismissLoading();
                    });

                  case 8:
                    _context.next = 10;
                    return this.global.dismissLoading();

                  case 10:
                    if (response != null) {
                      if (response.success) {
                        console.log('Data', response.data);
                        this.g.idUser = response.iduser;
                        this.global.user_info = response.data;
                        this.global.user_info.promotions_discount = response.promotions_discount;
                        this.global.user_info.promotions_freedelivery = response.promotions_freedelivery;
                        this.global.user_info.promotions_freeproduct = response.promotions_freeproduct;
                        this.global.user_info.anuncios = response.anuncios;
                        this.global.user_info.paquetes = response.paquetes;

                        for (i = 0; i < this.global.user_info.promotions_discount.length; i++) {
                          if (this.global.user_info.promotions_discount[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_discount[i]);
                          }
                        }

                        for (i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
                          if (this.global.user_info.promotions_freedelivery[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_freedelivery[i]);
                          }
                        }

                        for (i = 0; i < this.global.user_info.promotions_freeproduct.length; i++) {
                          if (this.global.user_info.promotions_freeproduct[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_freeproduct[i]);
                          }
                        }

                        for (i = 0; i < this.global.user_info.anuncios.length; i++) {
                          this.global.user_info.anuncios[i].imagen = "data:image/png;base64," + this.global.user_info.anuncios[i].imagen;
                        }

                        for (i = 0; i < this.global.user_info.paquetes.length; i++) {
                          this.global.user_info.paquetes[i].imagen = "data:image/png;base64," + this.global.user_info.paquetes[i].url;
                        }

                        this.global.user_info = response.data;
                        this.g.idUser = this.global.user_info.iduser;
                        this.global.showToastAndRedirect(response.message, "verificacion-cliente", response.data);
                      }
                    }

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return RegistroClientePage;
    }();

    RegistroClientePage.ctorParameters = function () {
      return [{
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]
      }];
    };

    RegistroClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-registro-cliente',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-cliente.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-cliente/registro-cliente.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-cliente.page.scss */
      "./src/app/registro-cliente/registro-cliente.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])], RegistroClientePage);
    /***/
  }
}]);
//# sourceMappingURL=registro-cliente-registro-cliente-module-es5.js.map