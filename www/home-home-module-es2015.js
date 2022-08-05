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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  /*   --background: url(\"../../assets/background_login.jpeg\");\n  background-repeat: no-repeat;\n  background-size: cover; */\n  --background: none;\n  background-color: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.img_header {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\nion-spinner {\n  display: block;\n  margin: auto;\n}\n\n.button {\n  --background: #00b050;\n  --background-activated: #009744;\n  --background-focused: #009744;\n  --background-hover: #009744;\n}\n\n.input-custom {\n  color: #00a92d !important;\n  font-weight: bold !important;\n  text-align: center !important;\n  /* border: red 1px; */\n  border-radius: 5px !important;\n  border: 4px solid #00a92d !important;\n}\n\n.custom-button {\n  margin-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n  --background: #ff7500;\n  color: white;\n  font-size: 18px;\n  --background-activated: #ff7500;\n  --background-focused: #ff7500;\n  --background-hover: #ff7500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7OzJCQUFBO0VBR0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC8qICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZF9sb2dpbi5qcGVnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmltZ19oZWFkZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLXNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMDk3NDQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMwMDk3NDQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA5NzQ0O1xyXG59XHJcblxyXG4uaW5wdXQtY3VzdG9tIHtcclxuICBjb2xvcjogIzAwYTkyZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLyogYm9yZGVyOiByZWQgMXB4OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICMwMGE5MmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmNzUwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZjc1MDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZjc1MDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmY3NTAwO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAvKiAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmRfbG9naW4uanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW1nX2hlYWRlciB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMGIwNTA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMDk3NDQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMDA5NzQ0O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMDk3NDQ7XG59XG5cbi5pbnB1dC1jdXN0b20ge1xuICBjb2xvcjogIzAwYTkyZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLyogYm9yZGVyOiByZWQgMXB4OyAqL1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwYTkyZCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIC0tYmFja2dyb3VuZDogI2ZmNzUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZjc1MDA7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmY3NTAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZjc1MDA7XG59Il19 */");

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