(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\"\r\n          name=\"arrow-back-circle-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">VOLVER</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-item class=\"header ion-text-center\">\r\n    <ion-text class=\"ion-text-center\">Lista pedido</ion-text>\r\n  </ion-item>\r\n  <ion-list lines=\"none\" *ngIf=\"order\" class=\"mt-3\">\r\n    <ion-item *ngFor=\"let product of contentOrder; let i = index\">\r\n      <ion-grid>\r\n        <ion-row style=\"margin-top: 0px;\">\r\n          <ion-col size=\"1\"></ion-col>\r\n          <ion-col size=\"11\">\r\n            <ion-label>{{ product.product }}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"font-size: 0.7rem; margin-bottom: 1px;\">\r\n          <ion-col size=\"1\"></ion-col>\r\n\r\n          <ion-col size=\"11\" *ngIf=\"product.kg > 0 && product.pc > 0\">\r\n            <ion-label>{{ product.kg | number: '1.2-2' }} Kgs - {{ product.pc }} Pzas - ${{\r\n                product.price | number: '1.2-2'\r\n              }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\" *ngIf=\"product.kg > 0 && product.pc == 0\">\r\n            <ion-label>{{ product.kg | number: '1.2-2' }} Kgs - ${{ product.price | number: '1.2-2' }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\" *ngIf=\"product.kg == 0 && product.pc > 0\">\r\n            <ion-label>{{ product.pc }} Pzas - ${{ product.price | number: '1.2-2' }}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div *ngIf=\"order\">\r\n    <div *ngIf=\"order.notes.length > 0\" class=\"custom-box\">\r\n      <h6>Total aproximado: {{ getTotal() | currency }}</h6>\r\n    </div>\r\n    <div *ngIf=\"order.notes.length > 0\" class=\"custom-box\">\r\n      <h6>Total Real: {{ order.price_real | currency }}</h6>\r\n    </div>\r\n\r\n    <div class=\"custom-box\">\r\n      <h5 style=\"text-align: justify; text-justify: inter-word;\" *ngIf=\"order.pickup == 0\">A Domicilio</h5>\r\n      <h5 style=\"text-align: justify; text-justify: inter-word;\" *ngIf=\"order.pickup == 1\">En Escuela</h5>\r\n      <h5 style=\"text-align: justify; text-justify: inter-word;\" *ngIf=\"order.pickup == 2\">Horario Especial</h5>\r\n    </div>\r\n\r\n    <div *ngIf=\"order.notes.length > 0\" class=\"custom-box\">\r\n      <h5>Notas: {{ order.notes }}</h5>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"order\">\r\n    <div class=\"pagado\" *ngIf=\"order.pagado == 1\">\r\n      <h4 style=\"text-align: center;color:#ff7f23;font-weight: bold;font-size: 28px;\">Pedido Pagado</h4>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"order\">\r\n    <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:10%\"\r\n      *ngIf=\"(order.tipo_pago == 'TRANSFERENCIA' || order.tipo_pago == 'TARJETA') && order.pagado == 0 && order.subtotal_real >= 1\">\r\n      <ion-row>\r\n        <ion-col size=\"2\"></ion-col>\r\n        <ion-col size=\"8\" style=\"text-align: center;\">\r\n          <button type=\"button\" class=\"buscar-btn2\" style=\"width: 100%;\" (click)=\"pagar()\">PAGAR</button>\r\n        </ion-col>\r\n        <ion-col size=\"2\"></ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/order-details/order-details-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/order-details/order-details-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsRoutingModule", function() { return OrderDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.component */ "./src/app/order-details/order-details.component.ts");




const routes = [
    {
        path: '',
        component: _order_details_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsComponent"],
    },
];
let OrderDetailsRoutingModule = class OrderDetailsRoutingModule {
};
OrderDetailsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailsRoutingModule);



/***/ }),

/***/ "./src/app/order-details/order-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/order-details/order-details.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n\n.custom-box {\n  color: white !important;\n  font-weight: bold !important;\n  background-color: #05a82d;\n  border-color: #c3e6cb;\n  font-weight: bold;\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  margin: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9DOlxcVXNlcnNcXERldmVsMi1GZXJcXERlc2t0b3BcXGZyZXNza29cXEZyZXNza28gQXBwIHkgV2ViL3NyY1xcYXBwXFxvcmRlci1kZXRhaWxzXFxvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESEE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1c2Nhci1idG4yIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuXHJcbi5idXNjYXItYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcclxufVxyXG5cclxuLmJ1c2Nhci1idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpbml0aWFsO1xyXG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tYm94IHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWE4MmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcclxufSIsIi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnVzY2FyLWJ0bjIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdmMjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWJveCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhODJkO1xuICBib3JkZXItY29sb3I6ICNjM2U2Y2I7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/order-details/order-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-details/order-details.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");






let OrderDetailsComponent = class OrderDetailsComponent {
    constructor(router, activatedRoute, g, apiService, global) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.g = g;
        this.apiService = apiService;
        this.global = global;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id != null) {
                this.idUser = String(this.g.idUser);
                this.apiService.getOrders(this.idUser).subscribe((response) => {
                    const orders = response.orders;
                    this.order = orders.find((x) => Number(x.idorder) === Number(params.id));
                    this.contentOrder = this.order.content_order;
                    console.log('Order', this.order);
                });
            }
            else {
                this.back();
            }
        });
    }
    pagar() {
        this.global.a_pagar = {
            idorder: this.order.idorder,
            precio_final: this.order.subtotal_real
        };
        this.router.navigate(['/terminar-compra']);
    }
    getTotal() {
        let total = 0;
        for (const product of this.contentOrder) {
            total += Number(product.price);
        }
        return total;
    }
    back() {
        this.router.navigate(['orders']);
    }
};
OrderDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
];
OrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-order-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-details.component.scss */ "./src/app/order-details/order-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
], OrderDetailsComponent);



/***/ }),

/***/ "./src/app/order-details/order-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-details/order-details.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsModule", function() { return OrderDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details.component */ "./src/app/order-details/order-details.component.ts");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/order-details/order-details-routing.module.ts");







let OrderDetailsModule = class OrderDetailsModule {
};
OrderDetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_details_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsRoutingModule"]],
        declarations: [_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"]],
    })
], OrderDetailsModule);



/***/ })

}]);
//# sourceMappingURL=order-details-order-details-module-es2015.js.map