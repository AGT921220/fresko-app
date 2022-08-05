(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <div class=\"header\" style=\"text-align: center;\">\r\n      <ion-img src=\"assets/logo_mercasav2.png\" style=\"width: 40%;margin-left:31%\"\r\n        class=\"img_header ion-margin-top ion-padding-top\">\r\n      </ion-img>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"body\" style=\"margin-top:15%\">\r\n      <div class=\"title\" style=\"text-align: center;\">\r\n        <span class=\"cp-text\">INGRESA TU </span><br />\r\n        <span class=\"cp-text\">CODIGO POSTAL</span>\r\n      </div>\r\n      <div class=\"body-input\" style=\"margin-left:10%;margin-right:10%\">\r\n\r\n        <!-- <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon> -->\r\n        <ion-input type=\"tel\" class=\"codigo-postal-custom\" (ionFocus)=\"setInputFocus()\"\r\n        (ionBlur)=\"unCheckFocus()\" maxlength=\"5\" minlength=\"5\" [(ngModel)]=\"codigo_postal\" placeholder=\"\">\r\n        </ion-input>\r\n      </div>\r\n      <div class=\"body-button\" style=\"text-align: center;margin-top:2%\">\r\n        <button type=\"button\" class=\"buscar-btn\" style=\"width: 32vh;\" (click)=\"buscarCodigoPostal()\">BUSCAR</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"showFooter\" no-border class=\"ion-no-border\">\r\n  <ion-row>\r\n  <ion-col size=\"6\">\r\n    <ion-img src=\"assets/volver.png\" style=\"width:35%;\" (click)=\"regresarInicio()\">\r\n    </ion-img>\r\n  </ion-col>\r\n  <ion-col size=\"6\">\r\n    <ion-img src=\"assets/ayuda.png\" (click)=\"openWhatsapp()\" style=\"width:35%;float:right\">\r\n    </ion-img>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/registro/registro-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/registro/registro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "./src/app/registro/registro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #ff7500 !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-footer {\n  --background: none;\n  background-color: #ff7500 !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  --border-color: white !important;\n}\n\n.cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.codigo-postal-custom {\n  color: black !important;\n  font-weight: bold !important;\n  background-color: #ffd6b3;\n  text-align: center !important;\n  border-radius: 4px !important;\n  border: 0px solid #ffd6b3 !important;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00a92d;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vQzpcXFVzZXJzXFxEZXZlbDItRmVyXFxEZXNrdG9wXFxmcmVzc2tvXFxGcmVzc2tvIEFwcCB5IFdlYi9zcmNcXGFwcFxccmVnaXN0cm9cXHJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0RKOztBREtBO0VBRUksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDSEo7O0FETUU7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSE47O0FETUU7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNISjs7QURNRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDSEo7O0FETUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzUwMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICBcclxuaW9uLWZvb3RlciB7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzUwMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNwLXRleHR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmNvZGlnby1wb3N0YWwtY3VzdG9tIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2YjM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZDZiMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYnVzY2FyLWJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOTJkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnVzY2FyLWJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NTAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29kaWdvLXBvc3RhbC1jdXN0b20ge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDZiMztcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDBweCBzb2xpZCAjZmZkNmIzICFpbXBvcnRhbnQ7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOTJkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/registro/registro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");






let RegistroPage = class RegistroPage {
    constructor(router, global, api, iab) {
        this.router = router;
        this.global = global;
        this.api = api;
        this.iab = iab;
        this.codigo_postal = "";
        this.showFooter = true;
    }
    ngOnInit() {
    }
    regresarInicio() {
        this.router.navigate(['/home']);
    }
    buscarCodigoPostal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.codigo_postal == "") {
                return this.global.showToast("Ingresa el codigo postal para validarlo.", "danger");
            }
            yield this.global.showLoading("Verificando..");
            let result = null;
            yield this.api.VerificarCobertura(this.codigo_postal).toPromise().then((response) => {
                result = response;
                this.codigo_postal = "";
                if (!response.success) {
                    this.global.showToastAndRedirect(response.message, "cp-nocobertura");
                }
            }).catch(error => {
                this.global.dismissLoading();
            });
            yield this.global.dismissLoading();
            if (result != null) {
                if (result.success) {
                    this.global.showToastAndRedirect(result.message, "registro-cliente", this.codigo_postal);
                }
            }
        });
    }
    openWhatsapp() {
        this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
    }
    setInputFocus() {
        this.showFooter = false;
        console.log("Input box is active");
    }
    unCheckFocus() {
        this.showFooter = true;
        console.log("Input box is Deactive");
    }
};
RegistroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro.page.scss */ "./src/app/registro/registro.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])
], RegistroPage);



/***/ })

}]);
//# sourceMappingURL=registro-registro-module-es2015.js.map