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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #ff7500 !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-footer {\n  --background: none;\n  background-color: #ff7500 !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  --border-color: white !important;\n}\n\n.cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.codigo-postal-custom {\n  color: black !important;\n  font-weight: bold !important;\n  background-color: #ffd6b3;\n  text-align: center !important;\n  border-radius: 4px !important;\n  border: 0px solid #ffd6b3 !important;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00a92d;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURLQTtFQUVJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0hKOztBRE1FO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hOOztBRE1FO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FDSEo7O0FETUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0hKOztBRE1FO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgXHJcbmlvbi1mb290ZXIge1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcC10ZXh0e1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5jb2RpZ28tcG9zdGFsLWN1c3RvbSB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNmIzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNmZmQ2YjMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1c2Nhci1idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTkyZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1c2Nhci1idG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NTAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzUwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY3AtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvZGlnby1wb3N0YWwtY3VzdG9tIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2YjM7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcHggc29saWQgI2ZmZDZiMyAhaW1wb3J0YW50O1xufVxuXG4uYnVzY2FyLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTkyZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */");

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