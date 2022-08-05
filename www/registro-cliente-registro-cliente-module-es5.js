function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-cliente-registro-cliente-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-cliente/registro-cliente.page.html": function node_modulesRawLoaderDistCjsJsSrcAppRegistroClienteRegistroClientePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER A INICIO</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n  <div class=\"campos\" style=\"margin-left:10%;text-align: left;font-size: 14px;color: #21ac38;margin-top:8%\">\r\n    <span style=\"font-weight: bold;\">REGISTRO</span>\r\n  </div>\r\n  <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:3%\">\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Nombre Completo <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.nombre_completo\">\r\n    </ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Celular <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"tel\" inputmode=\"telephone\"\r\n      [(ngModel)]=\"cliente.celular\">\r\n    </ion-input>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"padding-left:0px\">\r\n        <ion-label position=\"stacked\" style=\"font-weight: bold;\">Calle <span\r\n            style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n        <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.calle\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"padding-left:0px\">\r\n        <ion-label position=\"stacked\" style=\"font-weight: bold;\">Numero <span\r\n            style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n        <ion-input required style=\"border-bottom: 4px solid black;\" type=\"tel\" [(ngModel)]=\"cliente.numero\">\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Cruces</ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.cruces\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Colonia <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.colonia\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Municipio <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.municipio\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Estado <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.estado\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Correo <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.correo\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Contraseña <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"password\" [(ngModel)]=\"cliente.password\">\r\n    </ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Confirmar Contraseña <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"password\"\r\n      [(ngModel)]=\"cliente.confirmar_password\"></ion-input>\r\n    <div class=\"campos\" style=\"padding-top: 5%;text-align: right;font-size: 11px;color: #21ac38;\">\r\n      <span> * Campos obligatorios</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:5%;margin-bottom:6%\">\r\n    <button type=\"button\" class=\"buscar-btn\" style=\"width: 23vh;\" (click)=\"enviarSolicitud()\">ENVIAR</button>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente-routing.module.ts": function srcAppRegistroClienteRegistroClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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

    var RegistroClientePageRoutingModule = function RegistroClientePageRoutingModule() {
      _classCallCheck(this, RegistroClientePageRoutingModule);
    };

    RegistroClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroClientePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente.module.ts": function srcAppRegistroClienteRegistroClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
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

    var RegistroClientePageModule = function RegistroClientePageModule() {
      _classCallCheck(this, RegistroClientePageModule);
    };

    RegistroClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroClientePageRoutingModule"]],
      declarations: [_registro_cliente_page__WEBPACK_IMPORTED_MODULE_6__["RegistroClientePage"]]
    })], RegistroClientePageModule);
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente.page.scss": function srcAppRegistroClienteRegistroClientePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 21px;\n  font-weight: bold;\n  background-color: #21ac39;\n  color: white;\n  padding: 12px 12px 12px;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  --placeholder-opacity: unset !important;\n  padding-bottom: 0px !important;\n}\n\ninput.native-input {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tY2xpZW50ZS9DOlxcVXNlcnNcXERldmVsMi1GZXJcXERlc2t0b3BcXGZyZXNza29cXEZyZXNza28gQXBwIHkgV2ViL3NyY1xcYXBwXFxyZWdpc3Ryby1jbGllbnRlXFxyZWdpc3Ryby1jbGllbnRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0cm8tY2xpZW50ZS9yZWdpc3Ryby1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURJQTtFQUNHLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNESDs7QURJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdDO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFBO0FDQ0o7O0FERUM7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQUE7QUNFSjs7QURDQztFQUNHLGtCQUFBO0FDRUo7O0FEQ0M7RUFDRyw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQ0E7RUFDRywyQkFBQTtFQUNBLDhCQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Ryby1jbGllbnRlL3JlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNwLXRleHR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi5idXNjYXItYnRue1xyXG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICBmb250LXNpemU6IDIxcHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFhYzM5O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4O1xyXG59XHJcblxyXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiB9XHJcbiBcclxuIDo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiB9XHJcbiBcclxuIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gfVxyXG5cclxuIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dC5uYXRpdmUtaW5wdXQge1xyXG4gICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufSIsIi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnVzY2FyLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWFjMzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTJweCAxMnB4IDEycHg7XG59XG5cbi5idXNjYXItYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBpbml0aWFsO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0Lm5hdGl2ZS1pbnB1dCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/registro-cliente/registro-cliente.page.ts": function srcAppRegistroClienteRegistroClientePageTs(module, __webpack_exports__, __webpack_require__) {
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var validation, response, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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