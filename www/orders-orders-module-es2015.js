(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-row>\r\n    <ion-toolbar mode=\"ios\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"custom-button\" (click)=\"back()\"\r\n          style=\"color: white !important;text-transform: capitalize !important;\">\r\n          <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n          </ion-icon>\r\n          <span style=\"color: white !important;font-weight: bold;\">ATRÁS</span>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-img src=\"assets/zanahoria_blanca.png\"\r\n        style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n        class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n    </ion-toolbar>\r\n  </ion-row>\r\n  <ion-row style=\"width:100%;\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"8\" style=\"text-align: center;\">\r\n      <span style=\"font-weight: bold;color:#00b050;text-align: center;\">LISTA DE PEDIDOS</span>\r\n    </ion-col>\r\n    <ion-col size=\"2\"></ion-col>\r\n\r\n  </ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"orders.length == 0 && isLoading == false\">\r\n    <h4 style=\"text-align: center;font-weight: bold;\">No hay ordenes disponibles.</h4>\r\n  </div>\r\n  <div *ngIf=\"orders.length >= 1\">\r\n    <ion-list lines=\"none\">\r\n      <div style=\"text-align: center !important;margin-bottom:8%\" *ngFor=\"let item of orders\"\r\n        (click)=\"openDetails(item.idorder)\">\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"8\" style=\"border-bottom: 1px solid black\">\r\n            <div *ngIf=\"item.tipo == 'A'\"\r\n              style=\"padding-left:3%;padding-right:3%;background-color:#ff7500;color:white;font-size:14px;font-weight:bold;height: 3.8vh;border-radius: 15px;\">\r\n              <span>PEDIDO #{{item.idorder}}</span>\r\n            </div>\r\n            <div *ngIf=\"item.tipo == 'B'\"\r\n              style=\"padding-left:3%;padding-right:3%;background-color:#00b050;color:white;font-size:14px;font-weight:bold;height: 3.8vh;border-radius: 15px;\">\r\n              <span>PEDIDO #{{item.idorder}}</span>\r\n            </div>\r\n            <ion-label style=\"padding-left:3%;padding-right:3%;font-size:13px;font-weight:bold\">{{\r\n              item.timestamp.split('=')[1] }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <!-- {{item.timestamp }}-->\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");




const routes = [
    {
        path: '',
        component: _orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"],
    },
];
let OrdersRoutingModule = class OrdersRoutingModule {
};
OrdersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersRoutingModule);



/***/ }),

/***/ "./src/app/orders/orders.component.scss":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  /*   --background: url(\"../../assets/background_login.jpeg\");\n      background-repeat: no-repeat;\n      background-size: cover; */\n  --background: none;\n  --background-color: #fff;\n  background: #fff;\n}\n\n.img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.header {\n  --background: #00b050;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n  font-size: 1rem;\n}\n\nion-footer {\n  background: #00b050;\n  font-size: 1rem;\n}\n\n.green {\n  background: #00b050;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.button-native {\n  color: white !important;\n  text-transform: capitalize !important;\n}\n\n.custom-button {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7OytCQUFBO0VBR0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxtQkFBQTtBQ01GOztBREZBO0VBQ0UscUJBQUE7QUNLRjs7QUREQTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QUNJRjs7QUREQTtFQUNFLHVCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC8qICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZF9sb2dpbi5qcGVnXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uaW1nX2hlYWRlciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5oZWFkZXIgaW9uLXRleHQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG59XHJcblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcclxufVxyXG5cclxuXHJcbi5idXR0b24tbmF0aXZlIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWJ1dHRvbntcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLyogICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX2xvZ2luLmpwZWdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pbWdfaGVhZGVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMGIwNTA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5oZWFkZXIgaW9uLXRleHQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMwMGIwNTA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");






let OrdersComponent = class OrdersComponent {
    constructor(router, g, apiService, global) {
        this.router = router;
        this.g = g;
        this.apiService = apiService;
        this.global = global;
        this.orders = [];
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.obtenerOrdenes();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    obtenerOrdenes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.idUser = String(this.g.idUser);
            let orders = [];
            if (this.g.idUser !== -1) {
                yield this.global.showLoading("Cargando..");
                yield this.apiService.getOrders(this.idUser).toPromise().then((response) => {
                    orders = response.orders;
                }).catch(error => {
                    this.global.dismissLoading();
                });
                yield this.global.dismissLoading();
            }
            else {
                this.back();
            }
            let first = "B";
            for (var i = 0; i < orders.length; i++) {
                if (first == "B") {
                    first = "A";
                }
                else {
                    first = "B";
                }
                orders[i].tipo = first;
            }
            this.orders = orders;
            this.isLoading = false;
            console.log('Ordenes', this.orders);
        });
    }
    openDetails(id) {
        this.router.navigate([`order-details/${id}`]);
    }
    back() {
        this.router.navigate(['tabs/categories']);
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.component.scss */ "./src/app/orders/orders.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
], OrdersComponent);



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");







let OrdersModule = class OrdersModule {
};
OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersRoutingModule"]],
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]],
    })
], OrdersModule);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map