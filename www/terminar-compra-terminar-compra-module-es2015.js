(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terminar-compra-terminar-compra-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/terminar-compra/terminar-compra.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terminar-compra/terminar-compra.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\"\r\n          name=\"arrow-back-circle-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-row style=\"margin-top: 20%;\">\r\n    <ion-col size=\"1\">\r\n    </ion-col>\r\n    <ion-col size=\"9\" *ngIf=\"this.global.a_pagar\">\r\n      <h3 style=\"font-weight: bold;font-size: 38px;text-align: center;\">EL TOTAL DE SU COMPRA ES:</h3>\r\n      <h3 style=\"font-weight: bold;font-size: 52px;text-align: center;color:#00b050\">{{this.global.a_pagar.precio_final | currency }} MXN</h3>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"margin-top:2%\">\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      <h4 style=\"font-weight: bold;\">Si desea pagar con tarjeta se le cobrara una comision del 3.6% + IVA. Dando un total de {{total_tarjeta | currency }} MXN.</h4>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:10%\">\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"9\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn2\" style=\"width: 100%;\"\r\n          (click)=\"elegirMetodoPago('TRANSFERENCIA')\">TRANSFERENCIA</button>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"9\" style=\"text-align: center;\">\r\n\r\n        <button type=\"button\" class=\"buscar-btn2\" style=\"width: 100%;\"\r\n        (click)=\"elegirMetodoPago('TARJETA')\">TARJETA</button>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  \r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/terminar-compra/terminar-compra-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/terminar-compra/terminar-compra-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TerminarCompraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminarCompraPageRoutingModule", function() { return TerminarCompraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _terminar_compra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminar-compra.page */ "./src/app/terminar-compra/terminar-compra.page.ts");




const routes = [
    {
        path: '',
        component: _terminar_compra_page__WEBPACK_IMPORTED_MODULE_3__["TerminarCompraPage"]
    }
];
let TerminarCompraPageRoutingModule = class TerminarCompraPageRoutingModule {
};
TerminarCompraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TerminarCompraPageRoutingModule);



/***/ }),

/***/ "./src/app/terminar-compra/terminar-compra.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/terminar-compra/terminar-compra.module.ts ***!
  \***********************************************************/
/*! exports provided: TerminarCompraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminarCompraPageModule", function() { return TerminarCompraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _terminar_compra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminar-compra-routing.module */ "./src/app/terminar-compra/terminar-compra-routing.module.ts");
/* harmony import */ var _terminar_compra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terminar-compra.page */ "./src/app/terminar-compra/terminar-compra.page.ts");







let TerminarCompraPageModule = class TerminarCompraPageModule {
};
TerminarCompraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terminar_compra_routing_module__WEBPACK_IMPORTED_MODULE_5__["TerminarCompraPageRoutingModule"]
        ],
        declarations: [_terminar_compra_page__WEBPACK_IMPORTED_MODULE_6__["TerminarCompraPage"]]
    })
], TerminarCompraPageModule);



/***/ }),

/***/ "./src/app/terminar-compra/terminar-compra.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/terminar-compra/terminar-compra.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 18px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 18px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluYXItY29tcHJhL0M6XFxVc2Vyc1xcRGV2ZWwyLUZlclxcRGVza3RvcFxcZnJlc3Nrb1xcRnJlc3NrbyBBcHAgeSBXZWIvc3JjXFxhcHBcXHRlcm1pbmFyLWNvbXByYVxcdGVybWluYXItY29tcHJhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVybWluYXItY29tcHJhL3Rlcm1pbmFyLWNvbXByYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNHLHFCQUFBO0FDQUg7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQztFQUFvQixnQkFBQTtFQUNqQixrQkFBQTtBQ0dKOztBREFDO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFBO0FDSUo7O0FEREM7RUFDRyxrQkFBQTtBQ0lKOztBRERDO0VBQ0csNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvdGVybWluYXItY29tcHJhL3Rlcm1pbmFyLWNvbXByYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xyXG59XHJcblxyXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcclxufSIsIi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnVzY2FyLWJ0bjIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdmMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/terminar-compra/terminar-compra.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/terminar-compra/terminar-compra.page.ts ***!
  \*********************************************************/
/*! exports provided: TerminarCompraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminarCompraPage", function() { return TerminarCompraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pagar_stripe_pagar_stripe_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pagar-stripe/pagar-stripe.page */ "./src/app/pagar-stripe/pagar-stripe.page.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let TerminarCompraPage = class TerminarCompraPage {
    constructor(nav, router, global, api, modalCtrl) {
        this.nav = nav;
        this.router = router;
        this.global = global;
        this.api = api;
        this.modalCtrl = modalCtrl;
        let comision = parseFloat(this.global.a_pagar.precio_final) * 0.036;
        let comision_iva = comision * 0.16;
        let a_pagar = (parseFloat(this.global.a_pagar.precio_final) + comision + comision_iva).toFixed(2);
        this.total_tarjeta = a_pagar;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('A Pagar', this.global.a_pagar);
            if (this.global.a_pagar == null) {
                this.back();
            }
        });
    }
    back() {
        this.router.navigate(['tabs/categories']);
    }
    elegirMetodoPago(tipo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (tipo == "TARJETA") {
                let colorModal = "cupertino-bottom-modal-black";
                const modal = yield this.modalCtrl.create({
                    component: _pagar_stripe_pagar_stripe_page__WEBPACK_IMPORTED_MODULE_1__["PagarStripePage"],
                    componentProps: {},
                    showBackdrop: true,
                    backdropDismiss: true,
                    mode: "ios",
                    cssClass: colorModal,
                    swipeToClose: true
                });
                yield modal.present();
                let resp = yield modal.onDidDismiss();
                if (resp != null) {
                    if (resp.data.success) {
                        let obj = {
                            idorder: this.global.a_pagar.idorder,
                            id_paypal: resp.data.data.id_pago,
                            email: resp.data.data.card,
                            nombre: "Stripe",
                            subtotal: resp.data.data.pago,
                        };
                        this.api.updatePayment(obj.idorder, obj.subtotal, obj.id_paypal, obj.email, obj.nombre).toPromise().then((response) => {
                            if (response.success) {
                                this.global.showToastAndRedirect(response.message, "/tabs/categories");
                            }
                            else {
                                this.global.showToast(response.message, "danger");
                            }
                        });
                    }
                }
            }
            else {
                this.router.navigate(['pago-transferencia']);
            }
        });
    }
    cobrarMercadoPago() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['mercado-pago']);
        });
    }
};
TerminarCompraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('stripeButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], TerminarCompraPage.prototype, "stripeButton", void 0);
TerminarCompraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-terminar-compra',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terminar-compra.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/terminar-compra/terminar-compra.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terminar-compra.page.scss */ "./src/app/terminar-compra/terminar-compra.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], TerminarCompraPage);



/***/ })

}]);
//# sourceMappingURL=terminar-compra-terminar-compra-module-es2015.js.map