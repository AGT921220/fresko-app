(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metodo-de-pago-metodo-de-pago-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/metodo-de-pago/metodo-de-pago.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/metodo-de-pago/metodo-de-pago.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">Atrás</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-row style=\"margin-top: 20%;\">\r\n    <ion-col size=\"2\">\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <div class=\"body\" style=\"text-align: center;height: 28vh;background-color: #00b050;border-radius: 30px;\">\r\n        <div style=\"margin-top: 5%\">\r\n          <ion-icon name=\"cash-outline\" style=\"font-size:58px;color:white;font-weight: bold;\"></ion-icon>\r\n          <div style=\"text-align: center !important;margin-top:3%\">\r\n            <span\r\n              style=\"color: white;font-weight: 500;font-size: 24px;width: 100%;display: block;font-weight: bold;\">ELIGE\r\n              TU</span>\r\n            <span\r\n              style=\"color: white;font-weight: 500;font-size: 24px;width: 100%;display: block;font-weight: bold;\">FORMA\r\n              DE </span>\r\n            <span\r\n              style=\"color: white;font-weight: 500;font-size: 24px;width: 100%;display: block;font-weight: bold;\">PAGO.</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"2\"></ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:10%\">\r\n    <ion-row>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%;font-weight: bold\"\r\n          (click)=\"elegirMetodo('EFECTIVO')\">EFECTIVO</button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%;font-weight: bold\"\r\n          (click)=\"elegirMetodo('TRANSFERENCIA')\">TRANSFERENCIA</button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%;font-weight: bold;\"\r\n          (click)=\"elegirMetodo('TARJETA')\">TARJETA</button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-row>\r\n    <ion-col size=\"4\"></ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-img src=\"assets/secure.jpg\"\r\n        style=\"padding-top:0px!important;margin-top:0px!important;width:85%;margin-left: 5%;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n    </ion-col>\r\n    <ion-col size=\"4\"></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"metodo_de_pago !='' && metodo_de_pago != null\">\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      <span style=\"color:#ff7f23;font-weight: bold;\">Metodo de Pago Seleccionado: {{metodo_de_pago}}</span><br/>\r\n      <span *ngIf=\"metodo_de_pago == 'TARJETA'\" style=\"font-size: 14px;color:black;text-decoration: underline;\">SE COBRA UNA COMISION DE 3.6% EN PAGO CON TARJETA</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:4%\">\r\n    <button type=\"button\" class=\"buscar-btn2\" style=\"width: 28vh;font-weight: bold;\"\r\n      (click)=\"continuar()\">CONFIRMAR</button>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/metodo-de-pago/metodo-de-pago-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/metodo-de-pago/metodo-de-pago-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MetodoDePagoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoDePagoPageRoutingModule", function() { return MetodoDePagoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metodo-de-pago.page */ "./src/app/metodo-de-pago/metodo-de-pago.page.ts");




const routes = [
    {
        path: '',
        component: _metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_3__["MetodoDePagoPage"]
    }
];
let MetodoDePagoPageRoutingModule = class MetodoDePagoPageRoutingModule {
};
MetodoDePagoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MetodoDePagoPageRoutingModule);



/***/ }),

/***/ "./src/app/metodo-de-pago/metodo-de-pago.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/metodo-de-pago/metodo-de-pago.module.ts ***!
  \*********************************************************/
/*! exports provided: MetodoDePagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoDePagoPageModule", function() { return MetodoDePagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _metodo_de_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metodo-de-pago-routing.module */ "./src/app/metodo-de-pago/metodo-de-pago-routing.module.ts");
/* harmony import */ var _metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metodo-de-pago.page */ "./src/app/metodo-de-pago/metodo-de-pago.page.ts");







let MetodoDePagoPageModule = class MetodoDePagoPageModule {
};
MetodoDePagoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _metodo_de_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__["MetodoDePagoPageRoutingModule"]
        ],
        declarations: [_metodo_de_pago_page__WEBPACK_IMPORTED_MODULE_6__["MetodoDePagoPage"]]
    })
], MetodoDePagoPageModule);



/***/ }),

/***/ "./src/app/metodo-de-pago/metodo-de-pago.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/metodo-de-pago/metodo-de-pago.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 16px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9tZXRvZG8tZGUtcGFnby9tZXRvZG8tZGUtcGFnby5wYWdlLnNjc3MiLCJzcmMvYXBwL21ldG9kby1kZS1wYWdvL21ldG9kby1kZS1wYWdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0cscUJBQUE7QUNBSDs7QURHQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENDO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFBO0FDR0o7O0FEQUM7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQUE7QUNJSjs7QUREQztFQUNHLGtCQUFBO0FDSUo7O0FEREM7RUFDRyw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9tZXRvZG8tZGUtcGFnby9tZXRvZG8tZGUtcGFnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2YyMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xyXG59XHJcblxyXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcclxufSIsIi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnVzY2FyLWJ0bjIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIwNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/metodo-de-pago/metodo-de-pago.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/metodo-de-pago/metodo-de-pago.page.ts ***!
  \*******************************************************/
/*! exports provided: MetodoDePagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoDePagoPage", function() { return MetodoDePagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");






let MetodoDePagoPage = class MetodoDePagoPage {
    constructor(nav, router, global, g) {
        this.nav = nav;
        this.router = router;
        this.global = global;
        this.g = g;
        this.metodo_de_pago = "";
    }
    ngOnInit() {
    }
    back() {
        this.nav.pop();
    }
    elegirMetodo(tipo) {
        this.metodo_de_pago = tipo;
    }
    continuar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.metodo_de_pago == "") {
                return this.global.showToast("Selecciona un metodo de pago.", "danger");
            }
            this.g.metodo_pago = this.metodo_de_pago;
            if (this.g.metodo_pago == "EFECTIVO") {
                this.router.navigate(['/efectivo-compra']);
            }
            else if (this.g.metodo_pago == "TARJETA" || this.g.metodo_pago == "TRANSFERENCIA") {
                this.router.navigate(['/pago-electronico']);
            }
        });
    }
};
MetodoDePagoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }
];
MetodoDePagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-metodo-de-pago',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./metodo-de-pago.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/metodo-de-pago/metodo-de-pago.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./metodo-de-pago.page.scss */ "./src/app/metodo-de-pago/metodo-de-pago.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"],
        _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
], MetodoDePagoPage);



/***/ })

}]);
//# sourceMappingURL=metodo-de-pago-metodo-de-pago-module-es2015.js.map