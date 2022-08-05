(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pago-electronico-pago-electronico-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pago-electronico/pago-electronico.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pago-electronico/pago-electronico.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">Atrás</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-row style=\"margin-top: 25%;\">\r\n    <ion-col size=\"2\">\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n        <div style=\"text-align: center !important;margin-top:3%\">\r\n          <ion-img src=\"assets/enviaremos_costo.png\" style=\"padding-top:0px!important;margin-top:0px!important\"\r\n            class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n        </div>\r\n\r\n    </ion-col>\r\n    <ion-col size=\"2\"></ion-col>\r\n  </ion-row>\r\n\r\n\r\n\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:6%\">\r\n    <button type=\"button\" class=\"buscar-btn\" style=\"width: 28vh;font-weight: bold;\"\r\n      (click)=\"finalizar()\">ENVIAR PEDIDO</button>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pago-electronico/pago-electronico-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pago-electronico/pago-electronico-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PagoElectronicoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoElectronicoPageRoutingModule", function() { return PagoElectronicoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pago_electronico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pago-electronico.page */ "./src/app/pago-electronico/pago-electronico.page.ts");




const routes = [
    {
        path: '',
        component: _pago_electronico_page__WEBPACK_IMPORTED_MODULE_3__["PagoElectronicoPage"]
    }
];
let PagoElectronicoPageRoutingModule = class PagoElectronicoPageRoutingModule {
};
PagoElectronicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PagoElectronicoPageRoutingModule);



/***/ }),

/***/ "./src/app/pago-electronico/pago-electronico.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pago-electronico/pago-electronico.module.ts ***!
  \*************************************************************/
/*! exports provided: PagoElectronicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoElectronicoPageModule", function() { return PagoElectronicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pago_electronico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pago-electronico-routing.module */ "./src/app/pago-electronico/pago-electronico-routing.module.ts");
/* harmony import */ var _pago_electronico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pago-electronico.page */ "./src/app/pago-electronico/pago-electronico.page.ts");







let PagoElectronicoPageModule = class PagoElectronicoPageModule {
};
PagoElectronicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pago_electronico_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagoElectronicoPageRoutingModule"]
        ],
        declarations: [_pago_electronico_page__WEBPACK_IMPORTED_MODULE_6__["PagoElectronicoPage"]]
    })
], PagoElectronicoPageModule);



/***/ }),

/***/ "./src/app/pago-electronico/pago-electronico.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pago-electronico/pago-electronico.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 16px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9wYWdvLWVsZWN0cm9uaWNvL3BhZ28tZWxlY3Ryb25pY28ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdvLWVsZWN0cm9uaWNvL3BhZ28tZWxlY3Ryb25pY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRyxxQkFBQTtBQ0FIOztBREdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREpBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0M7RUFBb0IsZ0JBQUE7RUFDakIsa0JBQUE7QUNHSjs7QURBQztFQUFzQixnQkFBQTtFQUNuQixrQkFBQTtBQ0lKOztBRERDO0VBQ0csa0JBQUE7QUNJSjs7QUREQztFQUNHLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ28tZWxlY3Ryb25pY28vcGFnby1lbGVjdHJvbmljby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2YyMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xyXG59XHJcblxyXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcclxufSIsIi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnVzY2FyLWJ0bjIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIwNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pago-electronico/pago-electronico.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pago-electronico/pago-electronico.page.ts ***!
  \***********************************************************/
/*! exports provided: PagoElectronicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoElectronicoPage", function() { return PagoElectronicoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");






let PagoElectronicoPage = class PagoElectronicoPage {
    constructor(nav, global, g, api) {
        this.nav = nav;
        this.global = global;
        this.g = g;
        this.api = api;
        // let client_id = null;
        // client_id = this.global.getAppConfigFlag("PAYPAL_CLIENTID");
        // console.log('Client ID', client_id);
        // const script = document.createElement('script');
        // script.src = `https://www.paypal.com/sdk/js?client-id=${client_id}&currency=MXN`;
        // document.head.appendChild(script);
    }
    ngOnInit() {
    }
    back() {
        this.nav.pop();
    }
    finalizar() {
        this.sendOrder();
    }
    sendOrder() {
        if (navigator.onLine) {
            let pickup = 1;
            if (this.g.horario == 'MATUTINO') {
                pickup = 0;
            }
            else {
                pickup = 2;
            }
            if (!this.g.notes) {
                this.g.notes = '';
            }
            if (!this.g.pickUpNotes) {
                this.g.pickUpNotes = '';
            }
            let free_delivery = 0;
            let free_product = 0;
            let discount = 0;
            if (this.g.promo_seleccionada != null) {
                if (this.g.promo_seleccionada.tipo == "ENVIO") {
                    free_delivery = 1;
                }
                else if (this.g.promo_seleccionada.tipo == "DESCUENTO") {
                    discount = this.g.promo_seleccionada = this.g.promo_seleccionada.discount_price;
                }
            }
            this.api
                .createOrder(this.g.idUser, pickup, this.g.shoppingList, this.g.notes, this.g.pickUpNotes, free_delivery, discount, free_product, this.g.metodo_pago)
                .subscribe((response) => {
                if (response.success == '1') {
                    this.g.fruits = [];
                    this.g.vegetables = [];
                    this.g.carnes = [];
                    this.g.cremeria = [];
                    this.g.otros = [];
                    this.g.spices = [];
                    this.g.total_orden = 0;
                    this.g.metodo_pago = "";
                    this.g.shoppingList = [];
                    this.g.notes = '';
                    this.g.pickUpNotes = '';
                    this.global.showToastAndRedirect(response.message, "/tabs/categories");
                }
                else {
                    this.global.showToast(response.message, "danger");
                }
            });
        }
        else {
            this.global.showToast('No dispone de conexión a Internet', "danger");
        }
    }
};
PagoElectronicoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
PagoElectronicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pago-electronico',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pago-electronico.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pago-electronico/pago-electronico.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pago-electronico.page.scss */ "./src/app/pago-electronico/pago-electronico.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
], PagoElectronicoPage);



/***/ })

}]);
//# sourceMappingURL=pago-electronico-pago-electronico-module-es2015.js.map