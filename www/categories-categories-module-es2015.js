(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-item class=\"header ion-text-center\" style=\"padding-top:8%\">\r\n    <div class=\"first\">\r\n      <ion-img src=\"assets/header_mercasa.png\"\r\n        style=\"width: 55%;padding-left: 0px !important;margin-left: 0px !important;padding-top: 0px !important;margin-top: 0px !important;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n    </div>\r\n    <div class=\"second\">\r\n      <ion-img src=\"assets/cart_logo.png\" class=\"img_header ion-margin-top ion-padding-top\"\r\n        style=\"padding-top: 0px;margin-top: 0px;width: 70%;float: right;\" (click)=\"shoppingList()\">\r\n      </ion-img>\r\n    </div>\r\n\r\n  </ion-item>\r\n  <div class=\"promociones\" style=\"display:block;\" *ngIf=\"this.global.esInvitado == true\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"button-invitado\" style=\"height: 80px;background-color: #f29e24;border-radius: 20px;text-align: center;\">\r\n          <p style=\"font-weight: bold;color:white;padding-top:8%;font-size:22px\">Sesion Invitado</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-img src=\"assets/invitado.png\" class=\"img_header ion-margin-top ion-padding-top\" style=\"padding-top: 0px;margin-top: 0px;\">\r\n        </ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"promociones\" style=\"display: block;\" *ngIf=\"this.global.esInvitado == false && this.global.user_info != null\">\r\n    <!-- <ion-row\r\n      *ngIf=\"this.global.user_info.promotions_discount.length >= 1 || this.global.user_info.promotions_freedelivery.length >= 1 || this.global.user_info.promotions_freeproduct.length >= 1\">\r\n      <ion-col size=\"12\">\r\n        <h4 style=\"font-size: 17px;font-weight: 490;\">PROMOCIONES DISPONIBLES</h4>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row *ngIf=\"this.global.esInvitado == false && this.global.user_info\">\r\n      <ion-col size=\"6\">\r\n        <ion-img src=\"assets/promociones.png\" class=\"img_header ion-margin-top ion-padding-top\"\r\n          (click)=\"verPromosDisponibles()\" style=\"padding-top: 0px;margin-top: 0px;\">\r\n        </ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-img src=\"assets/paquetes.png\" class=\"img_header ion-margin-top ion-padding-top\"\r\n          style=\"padding-top: 0px;margin-top: 0px;\" (click)=\"verPaquetesDisponibles()\">\r\n        </ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"slider-promos\" style=\"margin-top:3.4%\" *ngIf=\"this.global.esInvitado == false && this.global.user_info != null && this.global.user_info.anuncios.length >= 1\">\r\n    <ion-slides #slides class=\"slide-padding\" [options]=\"sliderOptions\" style=\"height:100% !important;\" pager=\"true\">\r\n      <ion-slide *ngFor=\"let item of this.global.user_info.anuncios\">\r\n\r\n        <img src=\"{{item.imagen}}\"\r\n          style=\"max-width: 300px !important;max-height: 300px !important;object-fit: contain !important;\" />\r\n\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n\r\n  <div class=\"categorias\" style=\"margin-left:2%;margin-right:2%;\">\r\n    <!-- <ion-row>\r\n      <ion-col size=\"12\">\r\n        <h4 style=\"font-size: 17px;font-weight: 490;\">CATEGORIAS</h4>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col size=\"4\" style=\"margin-bottom: 2.1%;\">\r\n        <ion-img src=\"assets/frutas_new.png\" (click)=\"verProductos(0)\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width:90%\">\r\n        </ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"margin-bottom: 2.1%;\">\r\n        <ion-img src=\"assets/verduras_new.png\" (click)=\"verProductos(1)\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width:90%\">\r\n        </ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"margin-bottom: 2.1%;\">\r\n        <ion-img src=\"assets/cremeria_new.png\" (click)=\"verProductos(4)\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width:90%\">\r\n        </ion-img> <!-- CUAL ID? -->\r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\" style=\"margin-bottom: 2.1%;\">\r\n        <ion-img src=\"assets/carnes_new.png\" (click)=\"verProductos(3)\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width:90%\">\r\n        </ion-img> <!-- CUAL ID? -->\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"margin-bottom: 2.1%;\">\r\n        <ion-img src=\"assets/especias_new.png\" (click)=\"verProductos(2)\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width:90%\">\r\n        </ion-img> <!-- CUAL ID? -->\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"margin-bottom: 2.1%;\">\r\n        <ion-img src=\"assets/otros_new.png\" (click)=\"verProductos(5)\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width:90%\">\r\n        </ion-img> <!-- CUAL ID? -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n\r\n\r\n  <!-- <ion-grid class=\"p-0\" style=\"text-align: center;color:white;\">\r\n    <ion-row class=\"green\">\r\n      <ion-col class=\"pb-3 m-0\" size=\"6\" class=\"green\">\r\n        <ion-text (click)=\"shoppingList()\">Ir al carrito</ion-text>\r\n      </ion-col>\r\n      <ion-col class=\"pb-3 m-0\" size=\"6\" style=\"background: #000;\">\r\n        <ion-text (click)=\"viewOrders()\">Ver pedidos</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  /*   --background: url(\"../../assets/background_login.jpeg\");\n    background-repeat: no-repeat;\n    background-size: cover; */\n  --background: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.header {\n  --background: white;\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n  font-size: 1rem;\n}\n\n.green {\n  background: #00b050;\n}\n\nion-row {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-tab-bar, ion-tab-button {\n  background-color: #ec760a;\n}\n\nion-icon {\n  color: #d7d8da;\n}\n\nion-footer {\n  display: block;\n  position: initial !important;\n  order: 1;\n  order: 1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-item {\n  --border-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9DOlxcVXNlcnNcXERldmVsMi1GZXJcXERlc2t0b3BcXGZyZXNza29cXEZyZXNza28gQXBwIHkgV2ViL3NyY1xcYXBwXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzs2QkFBQTtFQUdFLG1CQUFBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ047O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENDO0VBQ0UsY0FBQTtBQ0VIOztBRENDO0VBQ0MsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLyogICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX2xvZ2luLmpwZWdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4uaGVhZGVye1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4uaGVhZGVyIGlvbi10ZXh0e1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjVweDtcclxufVxyXG5cclxuaW9uLXRhYi1iYXIsIGlvbi10YWItYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzc2MGE7XHJcbiB9XHJcbiBcclxuIGlvbi1pY29ue1xyXG4gICBjb2xvcjogI2Q3ZDhkYTtcclxuIH1cclxuXHJcbiBpb24tZm9vdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIG9yZGVyOiAxO1xyXG4gIG9yZGVyOiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC8qICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZF9sb2dpbi5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmhlYWRlciBpb24tdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzAwYjA1MDtcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi10YWItYmFyLCBpb24tdGFiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzc2MGE7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNkN2Q4ZGE7XG59XG5cbmlvbi1mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGluaXRpYWwgIWltcG9ydGFudDtcbiAgb3JkZXI6IDE7XG4gIG9yZGVyOiAxO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");








let CategoriesPage = class CategoriesPage {
    constructor(apiService, router, platform, g, toastController, global, iab) {
        this.platform = platform;
        this.g = g;
        this.toastController = toastController;
        this.global = global;
        this.iab = iab;
        this.sliderOptions = {
            zoom: false,
            slidesPerView: 1,
            spaceBetween: 20,
            pager: true,
            autoHeight: true,
        };
        console.log('User', this.global.user_info);
        this.apiService = apiService;
        this.router = router;
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.global.logout();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("User", this.global.user_info);
            if (this.global.user_info != null) {
                if (this.global.user_info.iduser) {
                    yield this.apiService.updateDevice(this.global.user_info.iduser, this.global.device_id).toPromise().then((resp) => {
                        console.log('Respuesta', resp);
                    });
                    yield this.obtenerInformacionUser();
                }
                else {
                    this.router.navigate(['home']);
                }
            }
            // this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
            //   navigator['app'].exitApp();
            // });
            //this.verProductos(0);
        });
    }
    ionViewDidLeave() {
        // this.backButtonSubscription.unsubscribe();
    }
    obtenerInformacionUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.apiService.getUser(this.global.user_info.iduser).toPromise().then((response) => {
                if (response.success) {
                    this.global.user_info = response.data;
                    this.global.user_info.promotions_discount = response.promotions_discount;
                    this.global.user_info.promotions_freedelivery = response.promotions_freedelivery;
                    this.global.user_info.promotions_freeproduct = response.promotions_freeproduct;
                    this.global.user_info.anuncios = response.anuncios;
                    this.global.user_info.paquetes = response.paquetes;
                    for (var i = 0; i < this.global.user_info.promotions_discount.length; i++) {
                        this.global.user_info.promotions_discount[i].url = "data:image/png;base64," + this.global.user_info.promotions_discount[i].url;
                        if (this.global.user_info.promotions_discount[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_discount[i]);
                        }
                    }
                    for (var i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
                        this.global.user_info.promotions_freedelivery[i].url = "data:image/png;base64," + this.global.user_info.promotions_freedelivery[i].url;
                        if (this.global.user_info.promotions_freedelivery[i].promotions_carrousel == 1) {
                            this.global.promotions_carrousel.push(this.global.user_info.promotions_freedelivery[i]);
                        }
                    }
                    for (var i = 0; i < this.global.user_info.promotions_freeproduct.length; i++) {
                        this.global.user_info.promotions_freeproduct[i].url = "data:image/png;base64," + this.global.user_info.promotions_freeproduct[i].url;
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
                    this.global.setItemStorage('user_info', JSON.stringify(this.global.user_info));
                }
            }).catch(error => {
                console.error('Error', error);
            });
        });
    }
    verProductos(id) {
        this.router.navigate(['/tabs2/products', id]);
    }
    shoppingList() {
        this.router.navigate(['finish-order']);
    }
    verPromosDisponibles() {
        this.router.navigate(['promos-disponibles']);
    }
    verPaquetesDisponibles() {
        this.router.navigate(['paquetes-disponibles']);
    }
    viewOrders() {
        if (this.g.idUser === -46) {
            this.global.showToast("Para ver los pedidos debes iniciar sesion", "danger");
        }
        else {
            this.router.navigate(['orders']);
        }
    }
    openWhatsapp() {
        this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
    }
    verPerfil() {
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map