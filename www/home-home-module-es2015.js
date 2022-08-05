(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <ion-content>\r\n    <div class=\"ion-padding\">\r\n      <ion-img\r\n        src=\"assets/pantalla_inicio.png\"\r\n        style=\"width: 59%; margin-top: 15%; margin-bottom: 14%;\"\r\n        class=\"img_header ion-margin-top ion-padding-top\"\r\n      ></ion-img>\r\n\r\n      <ion-item lines=\"none\" class=\"ion-margin-top\">\r\n        <!-- <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon> -->\r\n        <ion-input\r\n          required\r\n          type=\"tel\"\r\n          class=\"input-custom\"\r\n          inputmode=\"telephone\"\r\n          maxlength=\"15\"\r\n          minlength=\"5\"\r\n          name=\"telephone\"\r\n          placeholder=\"Celular\"\r\n          [(ngModel)]=\"telephone\"\r\n        >\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"mt-2\">\r\n        <!-- <ion-icon name=\"lock-closed\" class=\"ion-padding-end\"></ion-icon> -->\r\n        <ion-input\r\n          required\r\n          class=\"input-custom\"\r\n          inputmode=\"password\"\r\n          type=\"password\"\r\n          maxlength=\"50\"\r\n          minlength=\"5\"\r\n          name=\"password\"\r\n          placeholder=\"Contraseña\"\r\n          [(ngModel)]=\"password\"\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button class=\"custom-button ion-margin-top\" style=\"margin-top: 3%;\" expand=\"block\" (click)=\"login()\"\r\n        >INGRESAR</ion-button\r\n      >\r\n\r\n      <h4 style=\"text-align: center;text-decoration: underline;color:black;padding-top:2%\" (click)=\"goToRegistro()\">REGISTRATE</h4>\r\n      <h5 style=\"text-align: center;color:black;padding-top:3%;font-size:16px\" (click)=\"goToInvitado()\">INVITADO</h5>\r\n      <div style=\"text-align: center;padding-top:10%\" (click)=\"openWhatsapp()\">\r\n        <ion-icon color=\"dark\" style=\"font-size:48px\" name=\"help-circle-outline\"></ion-icon>\r\n      </div>\r\n      <!--       <ion-item\r\n        lines=\"none\"\r\n        class=\"ion-text-center\"\r\n        style=\"display:block;\"\r\n        *ngIf=\"isLoading\"\r\n      >\r\n        <ion-spinner name=\"lines\"></ion-spinner>\r\n      </ion-item> -->\r\n\r\n      \r\n      <div *ngIf=\"showError\" class=\"alert alert-danger mt-3\" role=\"alert\">\r\n        <h5>Error: {{message}}</h5>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</body>\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  /*   --background: url(\"../../assets/background_login.jpeg\");\n  background-repeat: no-repeat;\n  background-size: cover; */\n  --background: none;\n  background-color: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\nion-spinner {\n  display: block;\n  margin: auto;\n}\n\n.button {\n  --background: #00b050;\n  --background-activated: #009744;\n  --background-focused: #009744;\n  --background-hover: #009744;\n}\n\n.input-custom {\n  color: #00a92d !important;\n  font-weight: bold !important;\n  text-align: center !important;\n  /* border: red 1px; */\n  border-radius: 5px !important;\n  border: 4px solid #00a92d !important;\n}\n\n.custom-button {\n  margin-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n  --background: #ff7500;\n  color: white;\n  font-size: 18px;\n  --background-activated: #ff7500;\n  --background-focused: #ff7500;\n  --background-hover: #ff7500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXERldmVsMi1GZXJcXERlc2t0b3BcXGZyZXNza29cXEZyZXNza28gQXBwIHkgV2ViL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzsyQkFBQTtFQUdBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvKiAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmRfbG9naW4uanBlZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5pbWdfaGVhZGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwYjA1MDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDA5NzQ0O1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMDA5NzQ0O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzAwOTc0NDtcclxufVxyXG5cclxuLmlucHV0LWN1c3RvbSB7XHJcbiAgY29sb3I6ICMwMGE5MmQgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC8qIGJvcmRlcjogcmVkIDFweDsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjMDBhOTJkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAtLWJhY2tncm91bmQ6ICNmZjc1MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmY3NTAwO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmY3NTAwO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmNzUwMDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLyogICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX2xvZ2luLmpwZWdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmltZ19oZWFkZXIge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiMDUwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDA5NzQ0O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzAwOTc0NDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA5NzQ0O1xufVxuXG4uaW5wdXQtY3VzdG9tIHtcbiAgY29sb3I6ICMwMGE5MmQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC8qIGJvcmRlcjogcmVkIDFweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMwMGE5MmQgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAtLWJhY2tncm91bmQ6ICNmZjc1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmY3NTAwO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmNzUwMDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmY3NTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");








let HomePage = class HomePage {
    constructor(apiService, router, g, platform, global, iab) {
        this.apiService = apiService;
        this.router = router;
        this.g = g;
        this.platform = platform;
        this.global = global;
        this.iab = iab;
        this.isLoading = false;
        this.showError = false;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.backButtonSubscription = this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                navigator['app'].exitApp();
            }));
        });
    }
    ionViewDidLeave() {
        this.backButtonSubscription.unsubscribe();
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.global.esInvitado = false;
            if (this.telephone == "") {
                return this.global.showToast("Ingresa tu celular", "danger");
            }
            if (this.password == "") {
                return this.global.showToast("Ingresa tu contraseña", "danger");
            }
            this.isLoading = true;
            this.showError = false;
            yield this.global.showLoading("Conectando..");
            if (navigator.onLine) {
                this.apiService.login(this.telephone, this.password).subscribe((response) => {
                    if (response.success == 1) {
                        this.telephone = "";
                        this.password = "";
                        this.g.idUser = response.iduser;
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
                    }
                    if (response.success == 1) {
                        if (response.data.verificado == 0) {
                            if (this.global.user_info != null) {
                                if (this.global.user_info.iduser) {
                                    this.apiService.updateDevice(this.global.user_info.iduser, this.global.device_id).toPromise().then((resp) => {
                                        console.log('Respuesta', resp);
                                    });
                                }
                            }
                            this.global.dismissLoading();
                            this.global.showToastAndRedirect("Es necesario que verifiques tu cuenta para poder usarla.", "verificacion-cliente", response.data);
                        }
                        else {
                            this.g.idUser = response.iduser;
                            this.global.setItemStorage('idUser', response.iduser);
                            this.global.setItemStorage('user_info', JSON.stringify(response.data));
                            this.global.setItemStorage('esInvitado', this.global.esInvitado);
                            if (this.global.user_info != null) {
                                if (this.global.user_info.iduser) {
                                    this.apiService.updateDevice(this.global.user_info.iduser, this.global.device_id).toPromise().then((resp) => {
                                        console.log('Respuesta', resp);
                                    });
                                }
                            }
                            this.global.dismissLoading();
                            this.router.navigate(['tabs/categories']);
                        }
                    }
                    else {
                        // this.message = response.mensaje;
                        this.global.dismissLoading();
                        this.global.showToast(response.mensaje, "danger");
                        //this.showError = true;
                    }
                    this.isLoading = false;
                });
            }
            else {
                this.global.dismissLoading();
                this.global.showToast('No dispone de conexión a Internet', "danger");
                //this.showError = true;
            }
        });
    }
    goToRegistro() {
        this.router.navigate(['/registro']);
    }
    goToInvitado() {
        this.global.esInvitado = true;
        this.global.setItemStorage('esInvitado', this.global.esInvitado);
        this.router.navigate(['tabs/categories']);
    }
    openWhatsapp() {
        this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
    }
};
HomePage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map