(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-cliente-registro-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-cliente/registro-cliente.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro-cliente/registro-cliente.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER A INICIO</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n  <div class=\"campos\" style=\"margin-left:10%;text-align: left;font-size: 14px;color: #21ac38;margin-top:8%\">\r\n    <span style=\"font-weight: bold;\">REGISTRO</span>\r\n  </div>\r\n  <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:3%\">\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Nombre Completo <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.nombre_completo\">\r\n    </ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Celular <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"tel\" inputmode=\"telephone\"\r\n      [(ngModel)]=\"cliente.celular\">\r\n    </ion-input>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"padding-left:0px\">\r\n        <ion-label position=\"stacked\" style=\"font-weight: bold;\">Calle <span\r\n            style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n        <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.calle\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"padding-left:0px\">\r\n        <ion-label position=\"stacked\" style=\"font-weight: bold;\">Numero <span\r\n            style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n        <ion-input required style=\"border-bottom: 4px solid black;\" type=\"tel\" [(ngModel)]=\"cliente.numero\">\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Cruces</ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.cruces\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Colonia <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.colonia\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Municipio <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.municipio\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Estado <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.estado\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Correo <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" [(ngModel)]=\"cliente.correo\"></ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Contraseña <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"password\" [(ngModel)]=\"cliente.password\">\r\n    </ion-input>\r\n    <ion-label position=\"stacked\" style=\"font-weight: bold;\">Confirmar Contraseña <span\r\n        style=\"color:#21ac38;padding-left:5px\">*</span></ion-label>\r\n    <ion-input required style=\"border-bottom: 4px solid black;\" type=\"password\"\r\n      [(ngModel)]=\"cliente.confirmar_password\"></ion-input>\r\n    <div class=\"campos\" style=\"padding-top: 5%;text-align: right;font-size: 11px;color: #21ac38;\">\r\n      <span> * Campos obligatorios</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:5%;margin-bottom:6%\">\r\n    <button type=\"button\" class=\"buscar-btn\" style=\"width: 23vh;\" (click)=\"enviarSolicitud()\">ENVIAR</button>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/registro-cliente/registro-cliente-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroClientePageRoutingModule", function() { return RegistroClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-cliente.page */ "./src/app/registro-cliente/registro-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _registro_cliente_page__WEBPACK_IMPORTED_MODULE_3__["RegistroClientePage"]
    }
];
let RegistroClientePageRoutingModule = class RegistroClientePageRoutingModule {
};
RegistroClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroClientePageRoutingModule);



/***/ }),

/***/ "./src/app/registro-cliente/registro-cliente.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistroClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroClientePageModule", function() { return RegistroClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-cliente-routing.module */ "./src/app/registro-cliente/registro-cliente-routing.module.ts");
/* harmony import */ var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-cliente.page */ "./src/app/registro-cliente/registro-cliente.page.ts");







let RegistroClientePageModule = class RegistroClientePageModule {
};
RegistroClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroClientePageRoutingModule"]
        ],
        declarations: [_registro_cliente_page__WEBPACK_IMPORTED_MODULE_6__["RegistroClientePage"]]
    })
], RegistroClientePageModule);



/***/ }),

/***/ "./src/app/registro-cliente/registro-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 21px;\n  font-weight: bold;\n  background-color: #21ac39;\n  color: white;\n  padding: 12px 12px 12px;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  --placeholder-opacity: unset !important;\n  padding-bottom: 0px !important;\n}\n\ninput.native-input {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9yZWdpc3Ryby1jbGllbnRlL3JlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby1jbGllbnRlL3JlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRElBO0VBQ0csbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0RIOztBRElBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREhBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0M7RUFBb0IsZ0JBQUE7RUFDakIsa0JBQUE7QUNDSjs7QURFQztFQUFzQixnQkFBQTtFQUNuQixrQkFBQTtBQ0VKOztBRENDO0VBQ0csa0JBQUE7QUNFSjs7QURDQztFQUNHLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUNFSjs7QURDQTtFQUNHLDJCQUFBO0VBQ0EsOEJBQUE7QUNFSCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvLWNsaWVudGUvcmVnaXN0cm8tY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyMWFjMzk7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgcGFkZGluZzogMTJweCAxMnB4IDEycHg7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0Lm5hdGl2ZS1pbnB1dCB7XHJcbiAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59IiwiLmNwLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYWMzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDEycHggMTJweDtcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQubmF0aXZlLWlucHV0IHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/registro-cliente/registro-cliente.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente.page.ts ***!
  \***********************************************************/
/*! exports provided: RegistroClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroClientePage", function() { return RegistroClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");






let RegistroClientePage = class RegistroClientePage {
    constructor(global, api, router, g) {
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
        const navigation = this.router.getCurrentNavigation();
        this.codigo_postal = navigation.extras.state;
        console.log('codigo_postal', this.codigo_postal);
        this.cliente.codigo_postal = this.codigo_postal;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['home']);
    }
    validarFormulario() {
        if (this.cliente.nombre_completo == "") {
            this.global.showToast("Ingresa tu nombre completo", "danger");
            return false;
        }
        else if (this.cliente.nombre_completo.length <= 4) {
            this.global.showToast("Debes escribir tu nombre completo", "danger");
            return false;
        }
        if (this.cliente.celular == "") {
            this.global.showToast("Ingresa tu numero de celular", "danger");
            return false;
        }
        else if (this.cliente.celular.length <= 7) {
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
        }
        else if (this.cliente.colonia.length <= 3) {
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
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    enviarSolicitud() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let validation = this.validarFormulario();
            if (!validation) {
                return;
            }
            yield this.global.showLoading("Registrando...");
            let response = null;
            yield this.api.RegistrarCliente(this.cliente).toPromise().then((data) => {
                response = data;
                if (!data.success) {
                    this.global.showToast(data.message, "danger");
                }
            }).catch(error => {
                this.global.dismissLoading();
            });
            yield this.global.dismissLoading();
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
                    for (var i = 0; i < this.global.user_info.promotions_discount.length; i++) {
                        if (this.global.user_info.promotions_discount[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_discount[i]);
                        }
                    }
                    for (var i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
                        if (this.global.user_info.promotions_freedelivery[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_freedelivery[i]);
                        }
                    }
                    for (var i = 0; i < this.global.user_info.promotions_freeproduct.length; i++) {
                        if (this.global.user_info.promotions_freeproduct[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_freeproduct[i]);
                        }
                    }
                    for (var i = 0; i < this.global.user_info.anuncios.length; i++) {
                        this.global.user_info.anuncios[i].imagen = "data:image/png;base64," + this.global.user_info.anuncios[i].imagen;
                    }
                    for (var i = 0; i < this.global.user_info.paquetes.length; i++) {
                        this.global.user_info.paquetes[i].imagen = "data:image/png;base64," + this.global.user_info.paquetes[i].url;
                    }
                    this.global.user_info = response.data;
                    this.g.idUser = this.global.user_info.iduser;
                    this.global.showToastAndRedirect(response.message, "verificacion-cliente", response.data);
                }
            }
        });
    }
};
RegistroClientePage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }
];
RegistroClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-registro-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-cliente/registro-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro-cliente.page.scss */ "./src/app/registro-cliente/registro-cliente.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
], RegistroClientePage);



/***/ })

}]);
//# sourceMappingURL=registro-cliente-registro-cliente-module-es2015.js.map