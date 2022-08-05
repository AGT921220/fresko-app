(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verificacion-cliente-verificacion-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verificacion-cliente/verificacion-cliente.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verificacion-cliente/verificacion-cliente.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"backToHome()\" text=\"Volver\">\r\n    </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria.png\" style=\"width:5%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n    <div class=\"header\" style=\"text-align: center;\">\r\n      <ion-img src=\"assets/header_logo.png\" style=\"width: 55%;margin-left:22%\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n    </div>\r\n\r\n    <div class=\"body\" style=\"text-align: center;height: 42vh;background-color: #ff7709;border-radius: 30px;\">\r\n      <ion-img src=\"assets/icono_confirmacion.png\" style=\"width: 25%;margin-left: 38%;text-align: center;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n      <ion-img src=\"assets/confirmacion.png\" style=\"width: 60%;margin-left: 20%;text-align: center;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n      <ion-img src=\"assets/confirmacion_texto.png\" style=\"width: 60%;margin-left: 20%;text-align: center;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n    </div>\r\n    <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:8%\">\r\n      <ion-input required style=\"border-bottom: 4px solid black;\" inputmode=\"telephone\" autocomplete=\"one-time-code\" maxlength=\"5\" [(ngModel)]=\"codigo_verificacion\" type=\"number\"\r\n        name=\"telephone\" placeholder=\"INGRESA EL CODIGO\">\r\n      </ion-input>\r\n    </div>\r\n    <div class=\"body-button\" style=\"text-align: center;margin-top:2%\">\r\n      <button type=\"button\" class=\"buscar-btn\" style=\"width: 26vh;\" (click)=\"enviarSolicitud()\">ENVIAR</button>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/verificacion-cliente/verificacion-cliente-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/verificacion-cliente/verificacion-cliente-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: VerificacionClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionClientePageRoutingModule", function() { return VerificacionClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verificacion_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verificacion-cliente.page */ "./src/app/verificacion-cliente/verificacion-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _verificacion_cliente_page__WEBPACK_IMPORTED_MODULE_3__["VerificacionClientePage"]
    }
];
let VerificacionClientePageRoutingModule = class VerificacionClientePageRoutingModule {
};
VerificacionClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificacionClientePageRoutingModule);



/***/ }),

/***/ "./src/app/verificacion-cliente/verificacion-cliente.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/verificacion-cliente/verificacion-cliente.module.ts ***!
  \*********************************************************************/
/*! exports provided: VerificacionClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionClientePageModule", function() { return VerificacionClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verificacion_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verificacion-cliente-routing.module */ "./src/app/verificacion-cliente/verificacion-cliente-routing.module.ts");
/* harmony import */ var _verificacion_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verificacion-cliente.page */ "./src/app/verificacion-cliente/verificacion-cliente.page.ts");







let VerificacionClientePageModule = class VerificacionClientePageModule {
};
VerificacionClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verificacion_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificacionClientePageRoutingModule"]
        ],
        declarations: [_verificacion_cliente_page__WEBPACK_IMPORTED_MODULE_6__["VerificacionClientePage"]]
    })
], VerificacionClientePageModule);



/***/ }),

/***/ "./src/app/verificacion-cliente/verificacion-cliente.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/verificacion-cliente/verificacion-cliente.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #12a932;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2FjaW9uLWNsaWVudGUvQzpcXFVzZXJzXFxEZXZlbDItRmVyXFxEZXNrdG9wXFxmcmVzc2tvXFxGcmVzc2tvIEFwcCB5IFdlYi9zcmNcXGFwcFxcdmVyaWZpY2FjaW9uLWNsaWVudGVcXHZlcmlmaWNhY2lvbi1jbGllbnRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVyaWZpY2FjaW9uLWNsaWVudGUvdmVyaWZpY2FjaW9uLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVDO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFBO0FDRUo7O0FEQ0M7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQUE7QUNHSjs7QURBQztFQUNHLGtCQUFBO0FDR0o7O0FEQUM7RUFDRyw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC92ZXJpZmljYWNpb24tY2xpZW50ZS92ZXJpZmljYWNpb24tY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyYTkzMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gfVxyXG4gXHJcbiA6Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gfVxyXG4gXHJcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuIH1cclxuXHJcbiBpb24taW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogaW5pdGlhbDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xyXG59IiwiLmNwLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJhOTMyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpbml0aWFsO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/verificacion-cliente/verificacion-cliente.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/verificacion-cliente/verificacion-cliente.page.ts ***!
  \*******************************************************************/
/*! exports provided: VerificacionClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionClientePage", function() { return VerificacionClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");






let VerificacionClientePage = class VerificacionClientePage {
    constructor(global, api, router, g) {
        this.global = global;
        this.api = api;
        this.router = router;
        this.g = g;
        this.codigo_verificacion = "";
        const navigation = this.router.getCurrentNavigation();
        this.cliente = navigation.extras.state;
        console.log('Cliente Recibido', this.cliente);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.api.VerificacionSMS(this.cliente.telephone, this.cliente.codigo_verificacion).toPromise().then((response) => {
                console.log('Prueba', response);
            });
        });
    }
    backToHome() {
        this.router.navigate(['home']);
    }
    enviarSolicitud() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cliente.codigo_verificacion == this.codigo_verificacion) {
                yield this.global.showLoading("Verificando..");
                let result = null;
                yield this.api.updateVerificacionSMS(this.cliente.iduser).toPromise().then((response) => {
                    result = response;
                    if (!response.success) {
                        this.global.showToast(response.message, "danger");
                    }
                }).catch(error => {
                    this.global.dismissLoading();
                });
                yield this.global.dismissLoading();
                if (result) {
                    if (result.success) {
                        this.global.setItemStorage('idUser', this.g.idUser);
                        this.global.user_info.verificado = 1;
                        this.global.setItemStorage('user_info', JSON.stringify(this.global.user_info));
                        this.global.showToastAndRedirect(result.message, "/tabs/categories");
                    }
                }
            }
            else {
                this.codigo_verificacion = "";
                return this.global.showToast("El codigo proporcionado es incorrecto.", "danger");
            }
        });
    }
};
VerificacionClientePage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }
];
VerificacionClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-verificacion-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verificacion-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verificacion-cliente/verificacion-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verificacion-cliente.page.scss */ "./src/app/verificacion-cliente/verificacion-cliente.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
], VerificacionClientePage);



/***/ })

}]);
//# sourceMappingURL=verificacion-cliente-verificacion-cliente-module-es2015.js.map