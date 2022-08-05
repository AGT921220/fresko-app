(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-order-send-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/send-order/send-order.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-order/send-order.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:7%\">\r\n    <ion-img src=\"assets/mi_carrito.png\" (click)=\"carrito()\"\r\n      style=\"width:20vh;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n  </div>\r\n  <div class=\"totales\" style=\"margin-top:3%\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;\">Subtotal de la compra: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">{{subtotal | currency}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"promo_seleccionada == null || promo_seleccionada?.tipo != 'ENVIO'\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;\">Tarifa de entrega: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">{{costo_envio | currency }}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"promo_seleccionada != null && promo_seleccionada.tipo == 'ENVIO'\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;text-decoration-line: line-through;\">Tarifa de entrega: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">$0.00</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"promo_seleccionada != null && promo_seleccionada.tipo == 'DESCUENTO'\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <span style=\"color:black;font-weight: bold;\">Descuento: </span>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span style=\"color:black;font-weight: bold;\">{{ promo_seleccionada.descuento_otorgado | currency }}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n\r\n  <div>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <textarea [(ngModel)]=\"pickUpNotes\" placeholder=\"AGREGA AQUI TUS COMENTARIOS SOBRE TU PEDIDO\" rows=\"6\"\r\n          style=\"text-align:center;border: 2px solid #dbdbdb;border-radius: 18px;width: 100% !important;height: 100% !important;background-color: #dbdbdb;color: black;font-weight: 300;\">\r\n        </textarea>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"promotions_available.length >= 1\" style=\"margin-top:3%\">\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <hr style=\"background-color:#ec760a;height:2px;\" />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngFor=\"let item of promotions_available; let i = index\">\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"11\" *ngIf=\"item.permitida\">\r\n        <ion-row>\r\n          <ion-col size=\"10\">\r\n            <span style=\"font-weight: bold;font-size: 15px;\">{{item.description}}\r\n            </span>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-checkbox (click)=\"updatePromoSeleccionada(item, i)\" [checked]=\"item.seleccionada\"></ion-checkbox>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"11\" *ngIf=\"!item.permitida\">\r\n        <ion-row>\r\n          <ion-col size=\"10\" *ngIf=\"item.tipo == 'DESCUENTO'\">\r\n            <span style=\"text-decoration-line: line-through;font-weight: bold;font-size: 15px;\">{{item.description}}\r\n            </span><br />\r\n            <span style=\"font-style: italic;font-size:13px;\">Necesitas {{item.diferencia | currency }} en tu carrito\r\n              para poder seleccionar esta promocion.\r\n            </span>\r\n          </ion-col>\r\n          <ion-col size=\"10\" *ngIf=\"item.tipo != 'DESCUENTO'\">\r\n            <span style=\"text-decoration-line: line-through;font-weight: bold;font-size: 15px;\">{{item.description}}\r\n            </span>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-checkbox disabled></ion-checkbox>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <hr style=\"background-color:#ec760a;height:2px;\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"total\">\r\n    <ion-row>\r\n      <ion-col size=\"3\"></ion-col>\r\n      <ion-col size=\"6\" style=\"text-align: center;\">\r\n        <span style=\"color:black;font-weight: bold;font-size: 17px;color:#ec760a\">Total Aproximado: {{total | currency }}</span>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"body-button\" style=\"text-align: center;margin-top:5%;margin-bottom:4%\">\r\n    <ion-row>\r\n      <ion-col size=\"3\"></ion-col>\r\n      <ion-col size=\"6\" style=\"text-align: center;\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 100%\" (click)=\"elegirHorario()\">PAGAR</button>\r\n      </ion-col>\r\n      <ion-col size=\"3\"></ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/send-order/send-order-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/send-order/send-order-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SendOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOrderPageRoutingModule", function() { return SendOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _send_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-order.page */ "./src/app/send-order/send-order.page.ts");




const routes = [
    {
        path: '',
        component: _send_order_page__WEBPACK_IMPORTED_MODULE_3__["SendOrderPage"]
    }
];
let SendOrderPageRoutingModule = class SendOrderPageRoutingModule {
};
SendOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/send-order/send-order.module.ts":
/*!*************************************************!*\
  !*** ./src/app/send-order/send-order.module.ts ***!
  \*************************************************/
/*! exports provided: SendOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOrderPageModule", function() { return SendOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _send_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-order-routing.module */ "./src/app/send-order/send-order-routing.module.ts");
/* harmony import */ var _send_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-order.page */ "./src/app/send-order/send-order.page.ts");







let SendOrderPageModule = class SendOrderPageModule {
};
SendOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _send_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendOrderPageRoutingModule"]
        ],
        declarations: [_send_order_page__WEBPACK_IMPORTED_MODULE_6__["SendOrderPage"]]
    })
], SendOrderPageModule);



/***/ }),

/***/ "./src/app/send-order/send-order.page.scss":
/*!*************************************************!*\
  !*** ./src/app/send-order/send-order.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.header {\n  --background: #00b050;\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n}\n\n.green {\n  background: #00b050;\n}\n\nion-spinner {\n  display: block;\n  margin: auto;\n}\n\n.img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #00b050;\n  color: white;\n  padding: 12px 12px 12px;\n}\n\n::-moz-placeholder {\n  text-align: center;\n  font-weight: 500;\n  vertical-align: middle;\n  color: black;\n}\n\n::placeholder {\n  text-align: center;\n  font-weight: 500;\n  vertical-align: middle;\n  color: black;\n}\n\n.header {\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n}\n\n.green {\n  background: #00b050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1vcmRlci9DOlxcVXNlcnNcXERldmVsMi1GZXJcXERlc2t0b3BcXGZyZXNza29cXEZyZXNza28gQXBwIHkgV2ViL3NyY1xcYXBwXFxzZW5kLW9yZGVyXFxzZW5kLW9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VuZC1vcmRlci9zZW5kLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLG1CQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0tKOztBRERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkU7RUFDRSxxQkFBQTtBQ0tKOztBREZDO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREZDO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQ0lIOztBRFRDO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQ0lIOztBRERFO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHSjs7QURERTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkU7RUFDRSxtQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvc2VuZC1vcmRlci9zZW5kLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdfaGVhZGVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5oZWFkZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMGIwNTA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAuaGVhZGVyIGlvbi10ZXh0e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG4gIH1cclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG5cclxuICAuaW1nX2hlYWRlciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZjdmMjM7XHJcbiB9XHJcblxyXG4gLmJ1c2Nhci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7ICAgIFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIwNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAxMnB4O1xyXG59XHJcblxyXG4gOjpwbGFjZWhvbGRlcntcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC8vICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuIH1cclxuIFxyXG4gIC5oZWFkZXJ7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXIgaW9uLXRleHR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMGIwNTA7XHJcbiAgfVxyXG4gIFxyXG4iLCIuaW1nX2hlYWRlciB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiMDUwO1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaGVhZGVyIGlvbi10ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzAwYjA1MDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW1nX2hlYWRlciB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG4ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMTJweCAxMnB4O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIge1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaGVhZGVyIGlvbi10ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzAwYjA1MDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/send-order/send-order.page.ts":
/*!***********************************************!*\
  !*** ./src/app/send-order/send-order.page.ts ***!
  \***********************************************/
/*! exports provided: SendOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOrderPage", function() { return SendOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let SendOrderPage = class SendOrderPage {
    constructor(apiService, g, router, activatedRoute, toastController, global, nav, modalCtrl) {
        this.apiService = apiService;
        this.g = g;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.global = global;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.cash = true;
        this.isLoading = false;
        this.showError = false;
        this.activated = false;
        this.promotions_available = [];
        this.subtotal = 0;
        this.total = 0;
        this.promo_seleccionada = null;
        this.costo_envio = 45.00;
        this.tipo = "send-order";
        this.shoppingList = [];
        this.totalCost = 0;
    }
    ngOnInit() {
        this.selectedRadioGroup = 'M';
    }
    ionViewDidEnter() {
        this.costo_envio = parseFloat(this.global.getAppConfigFlag("COSTO_ENVIO"));
        console.log('Res', this.global.user_info);
        this.getSubtotal();
        this.checkPromos();
        this.getTotalCost();
        console.log('Promos', this.promotions_available);
    }
    getTotalCost() {
        this.totalCost = 0;
        this.shoppingList = [];
        for (let i = 0; i < this.g.fruits.length; i++) {
            if (parseFloat(this.g.fruits[i].kg) > 0 || parseInt(this.g.fruits[i].pc, 10) > 0) {
                this.shoppingList.push(this.g.fruits[i]);
                this.totalCost += (this.g.fruits[i].selectedWeight / 1000) * this.g.fruits[i].price;
            }
        }
        for (let i = 0; i < this.g.vegetables.length; i++) {
            if (parseFloat(this.g.vegetables[i].kg) > 0 || parseInt(this.g.vegetables[i].pc, 10) > 0) {
                this.shoppingList.push(this.g.vegetables[i]);
                this.totalCost += (this.g.vegetables[i].selectedWeight / 1000) * this.g.vegetables[i].price;
            }
        }
        for (let i = 0; i < this.g.spices.length; i++) {
            if (parseFloat(this.g.spices[i].kg) > 0 || parseInt(this.g.spices[i].pc, 10) > 0) {
                this.shoppingList.push(this.g.spices[i]);
                this.totalCost += (this.g.spices[i].selectedWeight / 1000) * this.g.spices[i].price;
            }
        }
        for (let i = 0; i < this.g.carnes.length; i++) {
            if (parseFloat(this.g.carnes[i].kg) > 0 || parseInt(this.g.carnes[i].pc, 10) > 0) {
                this.shoppingList.push(this.g.carnes[i]);
                this.totalCost += (this.g.carnes[i].selectedWeight / 1000) * this.g.carnes[i].price;
            }
        }
        for (let i = 0; i < this.g.cremeria.length; i++) {
            if (parseFloat(this.g.cremeria[i].kg) > 0 || parseInt(this.g.cremeria[i].pc, 10) > 0) {
                this.shoppingList.push(this.g.cremeria[i]);
                this.totalCost += (this.g.cremeria[i].selectedWeight / 1000) * this.g.cremeria[i].price;
            }
        }
        for (let i = 0; i < this.g.otros.length; i++) {
            if (parseFloat(this.g.otros[i].kg) > 0 || parseInt(this.g.otros[i].pc, 10) > 0) {
                this.shoppingList.push(this.g.otros[i]);
                this.totalCost += (this.g.otros[i].selectedWeight / 1000) * this.g.otros[i].price;
            }
        }
        this.g.shoppingList = this.shoppingList;
        console.log('Shipping list', this.shoppingList);
    }
    updatePromoSeleccionada(item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let i = 0; i < this.promotions_available.length; i++) {
                if (i != index) {
                    this.promotions_available[i].seleccionada = false;
                }
            }
            setTimeout(() => {
                if (this.promotions_available[index].seleccionada == false) {
                    this.promotions_available[index].seleccionada = true;
                }
                else {
                    this.promotions_available[index].seleccionada = false;
                }
                console.log('Promos Seleccionadas', this.promotions_available);
                let found = this.promotions_available.filter(x => {
                    if (x.seleccionada == true) {
                        return x;
                    }
                });
                if (found.length >= 1) {
                    this.promo_seleccionada = found[0];
                }
                else {
                    this.promo_seleccionada = null;
                }
                // if(this.promo_seleccionada != null){
                this.getSubtotal();
                // }
            }, 200);
        });
    }
    carrito() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.global.finish_order_return = "send-order";
            this.router.navigate(['finish-order']);
        });
    }
    checkPromos() {
        this.promotions_available = [];
        if (this.global.user_info.promotions_discount) {
            for (var i = 0; i < this.global.user_info.promotions_discount.length; i++) {
                var promo = this.global.user_info.promotions_discount[i];
                if (parseFloat(promo.minimum_amount) <= this.subtotal) {
                    promo.permitida = true;
                    promo.tipo = 'DESCUENTO';
                    promo.diferencia = 0;
                    promo.seleccionada = false;
                    this.promotions_available.push(promo);
                }
                else {
                    promo.permitida = false;
                    promo.tipo = 'DESCUENTO';
                    promo.seleccionada = false;
                    promo.diferencia = (promo.minimum_amount - this.subtotal).toFixed(2);
                    this.promotions_available.push(promo);
                }
            }
        }
        if (this.global.user_info.promotions_freedelivery) {
            for (var i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
                let exist = this.promotions_available.filter(x => {
                    if (x.is_free_product == 1) {
                        return x;
                    }
                });
                if (exist.length == 0) {
                    this.global.user_info.promotions_freedelivery[i].permitida = true;
                    this.global.user_info.promotions_freedelivery[i].tipo = 'ENVIO';
                    this.global.user_info.promotions_freedelivery[i].diferencia = 0;
                    this.global.user_info.promotions_freedelivery[i].seleccionada = false;
                    this.promotions_available.push(this.global.user_info.promotions_freedelivery[i]);
                }
            }
        }
        if (this.global.user_info.promotions_freeproduct) {
        }
    }
    getSubtotal() {
        this.subtotal = 0;
        for (let i = 0; i < this.g.fruits.length; i++) {
            if (parseFloat(this.g.fruits[i].kg) > 0 || parseInt(this.g.fruits[i].pc, 10) > 0) {
                this.subtotal += (this.g.fruits[i].selectedWeight / 1000) * this.g.fruits[i].price;
            }
        }
        for (let i = 0; i < this.g.vegetables.length; i++) {
            if (parseFloat(this.g.vegetables[i].kg) > 0 || parseInt(this.g.vegetables[i].pc, 10) > 0) {
                this.subtotal += (this.g.vegetables[i].selectedWeight / 1000) * this.g.vegetables[i].price;
            }
        }
        for (let i = 0; i < this.g.spices.length; i++) {
            if (parseFloat(this.g.spices[i].kg) > 0 || parseInt(this.g.spices[i].pc, 10) > 0) {
                this.subtotal += (this.g.spices[i].selectedWeight / 1000) * this.g.spices[i].price;
            }
        }
        for (let i = 0; i < this.g.carnes.length; i++) {
            if (parseFloat(this.g.carnes[i].kg) > 0 || parseInt(this.g.carnes[i].pc, 10) > 0) {
                this.subtotal += (this.g.carnes[i].selectedWeight / 1000) * this.g.carnes[i].price;
            }
        }
        for (let i = 0; i < this.g.cremeria.length; i++) {
            if (parseFloat(this.g.cremeria[i].kg) > 0 || parseInt(this.g.cremeria[i].pc, 10) > 0) {
                this.subtotal += (this.g.cremeria[i].selectedWeight / 1000) * this.g.cremeria[i].price;
            }
        }
        for (let i = 0; i < this.g.otros.length; i++) {
            if (parseFloat(this.g.otros[i].kg) > 0 || parseInt(this.g.otros[i].pc, 10) > 0) {
                this.subtotal += (this.g.otros[i].selectedWeight / 1000) * this.g.otros[i].price;
            }
        }
        console.log('Subtotal', this.subtotal);
        this.total = 0;
        this.total = this.subtotal;
        this.total += this.costo_envio;
        if (this.promo_seleccionada != null) {
            if (this.promo_seleccionada.tipo == 'ENVIO') {
                this.total -= this.costo_envio;
            }
            else if (this.promo_seleccionada.tipo == 'DESCUENTO') {
                let descuento = this.subtotal * parseFloat("0." + this.promo_seleccionada.discount_price);
                this.promo_seleccionada.descuento_otorgado = descuento;
                this.total -= descuento;
            }
        }
    }
    back() {
        if (this.global.finish_order == "products") {
            this.router.navigate(['/finish-order']);
        }
        else {
            this.router.navigate(['/tabs2/products/' + this.global.id_category]);
        }
    }
    radioGroupChange(event) {
        this.selectedRadioGroup = event.detail.value;
        if (this.selectedRadioGroup == 'P') {
            this.activated = true;
        }
        else {
            this.activated = false;
        }
    }
    elegirHorario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('shoppingList Send Order', this.g.shoppingList);
            this.g.notes = this.pickUpNotes;
            this.g.total_orden = this.total;
            this.g.promo_seleccionada = this.promo_seleccionada;
            let obj = {
                tipo: this.tipo,
                id_category: this.global.id_category
            };
            let navigationExtras = {
                state: obj
            };
            this.router.navigate(['horario-entrega'], navigationExtras);
        });
    }
};
SendOrderPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
SendOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-send-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./send-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/send-order/send-order.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./send-order.page.scss */ "./src/app/send-order/send-order.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], SendOrderPage);



/***/ })

}]);
//# sourceMappingURL=send-order-send-order-module-es2015.js.map