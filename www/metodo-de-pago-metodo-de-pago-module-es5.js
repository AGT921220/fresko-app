function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metodo-de-pago-metodo-de-pago-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/metodo-de-pago/metodo-de-pago.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMetodoDePagoMetodoDePagoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">Atrás</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-row style=\"margin-top: 20%;\">\r\n    <ion-col size=\"2\">\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <div class=\"body\" style=\"text-align: center;height: 28vh;background-color: #00b050;border-radius: 30px;\">\r\n        <div style=\"margin-top: 5%\">\r\n          <ion-icon name=\"cash-outline\" style=\"font-size:58px;color:white;font-weight: bold;\"></ion-icon>\r\n          <div style=\"text-align: center !important;margin-top:3%\">\r\n            <span\r\n              style=\"color: white;font-weight: 500;font-size: 24px;width: 100%;display: block;font-weight: bold;\">ELIGE\r\n              TU</span>\r\n            <span\r\n              style=\"color: white;font-weight: 500;font-size: 24px;width: 100%;display: block;font-weight: bold;\">FORMA\r\n              DE </span>\r\n            <span\r\n              style=\"color: white;font-weight: 500;font-size: 24px;width: 100%;display: block;font-weight: bold;\">PAGO.</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"2\"></ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:10%\">\r\n    <ion-row>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%;font-weight: bold\"\r\n          (click)=\"elegirMetodo('EFECTIVO')\">EFECTIVO</button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%;font-weight: bold\"\r\n          (click)=\"elegirMetodo('TRANSFERENCIA')\">TRANSFERENCIA</button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%;font-weight: bold;\"\r\n          (click)=\"elegirMetodo('TARJETA')\">TARJETA</button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-row>\r\n    <ion-col size=\"4\"></ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-img src=\"assets/secure.jpg\"\r\n        style=\"padding-top:0px!important;margin-top:0px!important;width:85%;margin-left: 5%;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n    </ion-col>\r\n    <ion-col size=\"4\"></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"metodo_de_pago !='' && metodo_de_pago != null\">\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      <span style=\"color:#ff7f23;font-weight: bold;\">Metodo de Pago Seleccionado: {{metodo_de_pago}}</span><br/>\r\n      <span *ngIf=\"metodo_de_pago == 'TARJETA'\" style=\"font-size: 14px;color:black;text-decoration: underline;\">SE COBRA UNA COMISION DE 3.6% EN PAGO CON TARJETA</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:4%\">\r\n    <button type=\"button\" class=\"buscar-btn2\" style=\"width: 28vh;font-weight: bold;\"\r\n      (click)=\"continuar()\">CONFIRMAR</button>\r\n  </div>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/metodo-de-pago/metodo-de-pago-routing.module.ts": function srcAppMetodoDePagoMetodoDePagoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetodoDePagoPageRoutingModule", function () {
      return MetodoDePagoPageRoutingModule;
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


    var _metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./metodo-de-pago.page */
    "./src/app/metodo-de-pago/metodo-de-pago.page.ts");

    var routes = [{
      path: '',
      component: _metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_3__["MetodoDePagoPage"]
    }];

    var MetodoDePagoPageRoutingModule = function MetodoDePagoPageRoutingModule() {
      _classCallCheck(this, MetodoDePagoPageRoutingModule);
    };

    MetodoDePagoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MetodoDePagoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/metodo-de-pago/metodo-de-pago.module.ts": function srcAppMetodoDePagoMetodoDePagoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetodoDePagoPageModule", function () {
      return MetodoDePagoPageModule;
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


    var _metodo_de_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./metodo-de-pago-routing.module */
    "./src/app/metodo-de-pago/metodo-de-pago-routing.module.ts");
    /* harmony import */


    var _metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./metodo-de-pago.page */
    "./src/app/metodo-de-pago/metodo-de-pago.page.ts");

    var MetodoDePagoPageModule = function MetodoDePagoPageModule() {
      _classCallCheck(this, MetodoDePagoPageModule);
    };

    MetodoDePagoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _metodo_de_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__["MetodoDePagoPageRoutingModule"]],
      declarations: [_metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_6__["MetodoDePagoPage"]]
    })], MetodoDePagoPageModule);
    /***/
  },

  /***/
  "./src/app/metodo-de-pago/metodo-de-pago.page.scss": function srcAppMetodoDePagoMetodoDePagoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 16px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0b2RvLWRlLXBhZ28vQzpcXFVzZXJzXFxEZXZlbDItRmVyXFxEZXNrdG9wXFxmcmVzc2tvXFxGcmVzc2tvIEFwcCB5IFdlYi9zcmNcXGFwcFxcbWV0b2RvLWRlLXBhZ29cXG1ldG9kby1kZS1wYWdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWV0b2RvLWRlLXBhZ28vbWV0b2RvLWRlLXBhZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRyxxQkFBQTtBQ0FIOztBREdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREpBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0M7RUFBb0IsZ0JBQUE7RUFDakIsa0JBQUE7QUNHSjs7QURBQztFQUFzQixnQkFBQTtFQUNuQixrQkFBQTtBQ0lKOztBRERDO0VBQ0csa0JBQUE7QUNJSjs7QUREQztFQUNHLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL21ldG9kby1kZS1wYWdvL21ldG9kby1kZS1wYWdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcC10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJ1c2Nhci1idG4ye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIwNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcblxyXG4uYnVzY2FyLWJ0bntcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAtLWJhY2tncm91bmQ6ICNmZjdmMjM7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gfVxyXG4gXHJcbiA6Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gfVxyXG4gXHJcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuIH1cclxuXHJcbiBpb24taW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogaW5pdGlhbDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xyXG59IiwiLmNwLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXNjYXItYnRuMiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcbn1cblxuLmJ1c2Nhci1idG4ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdmMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xufVxuXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpbml0aWFsO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/metodo-de-pago/metodo-de-pago.page.ts": function srcAppMetodoDePagoMetodoDePagoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetodoDePagoPage", function () {
      return MetodoDePagoPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var MetodoDePagoPage = /*#__PURE__*/function () {
      function MetodoDePagoPage(nav, router, global, g) {
        _classCallCheck(this, MetodoDePagoPage);

        this.nav = nav;
        this.router = router;
        this.global = global;
        this.g = g;
        this.metodo_de_pago = "";
      }

      _createClass(MetodoDePagoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.nav.pop();
        }
      }, {
        key: "elegirMetodo",
        value: function elegirMetodo(tipo) {
          this.metodo_de_pago = tipo;
        }
      }, {
        key: "continuar",
        value: function continuar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.metodo_de_pago == "")) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", this.global.showToast("Selecciona un metodo de pago.", "danger"));

                  case 2:
                    this.g.metodo_pago = this.metodo_de_pago;

                    if (this.g.metodo_pago == "EFECTIVO") {
                      this.router.navigate(['/efectivo-compra']);
                    } else if (this.g.metodo_pago == "TARJETA" || this.g.metodo_pago == "TRANSFERENCIA") {
                      this.router.navigate(['/pago-electronico']);
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return MetodoDePagoPage;
    }();

    MetodoDePagoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]
      }];
    };

    MetodoDePagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-metodo-de-pago',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./metodo-de-pago.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/metodo-de-pago/metodo-de-pago.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./metodo-de-pago.page.scss */
      "./src/app/metodo-de-pago/metodo-de-pago.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])], MetodoDePagoPage);
    /***/
  }
}]);
//# sourceMappingURL=metodo-de-pago-metodo-de-pago-module-es5.js.map