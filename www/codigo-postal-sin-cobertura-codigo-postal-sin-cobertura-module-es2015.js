(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["codigo-postal-sin-cobertura-codigo-postal-sin-cobertura-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"custom-button\" (click)=\"back()\"\r\n        style=\"color: white !important;text-transform: capitalize !important;\">\r\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\r\n        </ion-icon>\r\n        <span style=\"color: white !important;font-weight: bold;\">Atrás</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/zanahoria_blanca.png\"\r\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\r\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n    <div class=\"header\" style=\"text-align: center;\">\r\n      <ion-img src=\"assets/header_logo.png\" style=\"width: 55%;margin-left:22%\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n    </div>\r\n\r\n    <div class=\"body\" style=\"text-align: center;height: 45vh;background-color: #00a82d;border-radius: 30px;\">\r\n      <ion-img src=\"../assets/close_nocobertura.png\" style=\"width: 25%;margin-left: 38%;text-align: center;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n      <div style=\"text-align: center !important;margin-top:3%\">\r\n        <span style=\"color: white;font-weight: 500;font-size: 22px;width: 100%;display: block;\">NO TENEMOS</span>\r\n        <span style=\"color: white;font-weight: 500;font-size: 22px;width: 100%;display: block;\">COBERTURA EN </span>\r\n        <span style=\"color: white;font-weight: 500;font-size: 22px;width: 100%;display: block;\">TU ZONA.</span>\r\n      </div>\r\n      <div style=\"text-align: center !important;margin-top:3%\">\r\n        <span style=\"color: white;font-size: 14px;width: 100%;display: block;font-weight: 400;\">DEJANOS TUS DATOS Y</span>\r\n        <span style=\"color: white;font-size: 14px;width: 100%;display: block;font-weight: 400;\">TE AVISAREMOS CUANDO</span>\r\n        <span style=\"color: white;font-size: 14px;width: 100%;display: block;font-weight: 400;\">LLEGUEMOS CONTIGO</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%;margin-top:10%\">\r\n      <ion-input required style=\"border-bottom: 4px solid black;\" type=\"tel\" inputmode=\"telephone\" maxlength=\"5\"\r\n        [(ngModel)]=\"codigo_postal\" minlength=\"5\" name=\"telephone\" placeholder=\"Codigo Postal\">\r\n      </ion-input>\r\n      <ion-input required style=\"border-bottom: 4px solid black;\" inputmode=\"email\" name=\"email\" placeholder=\"Correo\"\r\n        [(ngModel)]=\"correo\">\r\n      </ion-input>\r\n    </div>\r\n    <div class=\"body-button\" style=\"text-align: center;margin-top:3%\">\r\n      <button type=\"button\" class=\"buscar-btn\" style=\"width: 26vh;\" (click)=\"enviarSolicitud()\">ENVIAR</button>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CodigoPostalSinCoberturaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodigoPostalSinCoberturaPageRoutingModule", function() { return CodigoPostalSinCoberturaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _codigo_postal_sin_cobertura_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codigo-postal-sin-cobertura.page */ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.ts");




const routes = [
    {
        path: '',
        component: _codigo_postal_sin_cobertura_page__WEBPACK_IMPORTED_MODULE_3__["CodigoPostalSinCoberturaPage"]
    }
];
let CodigoPostalSinCoberturaPageRoutingModule = class CodigoPostalSinCoberturaPageRoutingModule {
};
CodigoPostalSinCoberturaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CodigoPostalSinCoberturaPageRoutingModule);



/***/ }),

/***/ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CodigoPostalSinCoberturaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodigoPostalSinCoberturaPageModule", function() { return CodigoPostalSinCoberturaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _codigo_postal_sin_cobertura_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codigo-postal-sin-cobertura-routing.module */ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura-routing.module.ts");
/* harmony import */ var _codigo_postal_sin_cobertura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codigo-postal-sin-cobertura.page */ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.ts");







let CodigoPostalSinCoberturaPageModule = class CodigoPostalSinCoberturaPageModule {
};
CodigoPostalSinCoberturaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _codigo_postal_sin_cobertura_routing_module__WEBPACK_IMPORTED_MODULE_5__["CodigoPostalSinCoberturaPageRoutingModule"]
        ],
        declarations: [_codigo_postal_sin_cobertura_page__WEBPACK_IMPORTED_MODULE_6__["CodigoPostalSinCoberturaPage"]]
    })
], CodigoPostalSinCoberturaPageModule);



/***/ }),

/***/ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9jb2RpZ28tcG9zdGFsLXNpbi1jb2JlcnR1cmEvY29kaWdvLXBvc3RhbC1zaW4tY29iZXJ0dXJhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29kaWdvLXBvc3RhbC1zaW4tY29iZXJ0dXJhL2NvZGlnby1wb3N0YWwtc2luLWNvYmVydHVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0cscUJBQUE7QUNESDs7QURJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVDO0VBQW9CLGdCQUFBO0VBQ2pCLGtCQUFBO0FDRUo7O0FEQ0M7RUFBc0IsZ0JBQUE7RUFDbkIsa0JBQUE7QUNHSjs7QURBQztFQUNHLGtCQUFBO0FDR0o7O0FEQUM7RUFDRyw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb2RpZ28tcG9zdGFsLXNpbi1jb2JlcnR1cmEvY29kaWdvLXBvc3RhbC1zaW4tY29iZXJ0dXJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcC10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4uYnVzY2FyLWJ0bntcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAtLWJhY2tncm91bmQ6ICNmZjdmMjM7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gfVxyXG4gXHJcbiA6Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gfVxyXG4gXHJcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuIH1cclxuXHJcbiBpb24taW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogaW5pdGlhbDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xyXG59IiwiLmNwLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.ts ***!
  \*********************************************************************************/
/*! exports provided: CodigoPostalSinCoberturaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodigoPostalSinCoberturaPage", function() { return CodigoPostalSinCoberturaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let CodigoPostalSinCoberturaPage = class CodigoPostalSinCoberturaPage {
    constructor(router, api, global) {
        this.router = router;
        this.api = api;
        this.global = global;
        this.codigo_postal = "";
        this.correo = "";
    }
    ngOnInit() {
    }
    enviarSolicitud() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.codigo_postal == "") {
                return this.global.showToast("Ingresa el codigo postal de tu zona", "danger");
            }
            if (this.correo == "") {
                return this.global.showToast("Ingresa tu correo electronico.", "danger");
            }
            let obj = {
                codigo_postal: this.codigo_postal,
                correo: this.correo
            };
            yield this.global.showLoading("Cargando..");
            let result = null;
            yield this.api.RegistrarSinCobertura(obj).toPromise().then((response) => {
                result = response;
                if (!response.success) {
                    this.global.showToast(response.message, "danger");
                }
            }).catch(error => {
                this.global.dismissLoading();
            });
            yield this.global.dismissLoading();
            if (result != null) {
                if (result.success) {
                    this.global.showToastAndRedirect(result.message, "/home");
                }
            }
        });
    }
    back() {
        this.router.navigate(['registro']);
    }
};
CodigoPostalSinCoberturaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
];
CodigoPostalSinCoberturaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-codigo-postal-sin-cobertura',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./codigo-postal-sin-cobertura.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./codigo-postal-sin-cobertura.page.scss */ "./src/app/codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
], CodigoPostalSinCoberturaPage);



/***/ })

}]);
//# sourceMappingURL=codigo-postal-sin-cobertura-codigo-postal-sin-cobertura-module-es2015.js.map