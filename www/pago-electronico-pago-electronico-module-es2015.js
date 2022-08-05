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
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 16px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnby1lbGVjdHJvbmljby9DOlxcVXNlcnNcXERldmVsMi1GZXJcXERlc2t0b3BcXGZyZXNza29cXEZyZXNza28gQXBwIHkgV2ViL3NyY1xcYXBwXFxwYWdvLWVsZWN0cm9uaWNvXFxwYWdvLWVsZWN0cm9uaWNvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnby1lbGVjdHJvbmljby9wYWdvLWVsZWN0cm9uaWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0cscUJBQUE7QUNBSDs7QURHQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENDO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFBO0FDR0o7O0FEQUM7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQUE7QUNJSjs7QUREQztFQUNHLGtCQUFBO0FDSUo7O0FEREM7RUFDRyw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdvLWVsZWN0cm9uaWNvL3BhZ28tZWxlY3Ryb25pY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNwLXRleHR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uYnVzY2FyLWJ0bjJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi5idXNjYXItYnRue1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdmMjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcclxufVxyXG5cclxuLmJ1c2Nhci1idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiB9XHJcbiBcclxuIDo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiB9XHJcbiBcclxuIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gfVxyXG5cclxuIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn0iLCIuY3AtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1c2Nhci1idG4yIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG4uYnVzY2FyLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2YyMztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZjdmMjM7XG59XG5cbi5idXNjYXItYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBpbml0aWFsO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */");

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