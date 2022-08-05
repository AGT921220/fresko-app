function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mercado-pago-mercado-pago-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mercado-pago/mercado-pago.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mercado-pago/mercado-pago.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMercadoPagoMercadoPagoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"custom-button\" (click)=\"back()\"\n        style=\"color: white !important;text-transform: capitalize !important;\">\n        <ion-icon style=\"color: white !important;text-transform: capitalize !important;\" name=\"chevron-back-outline\">\n        </ion-icon>\n        <span style=\"color: white !important;font-weight: bold;\">Atrás</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-img src=\"assets/zanahoria_blanca.png\"\n      style=\"width:6%;float:right;padding-top:0px!important;margin-top:0px!important\"\n      class=\"img_header ion-margin-top ion-padding-top\"></ion-img>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n  <form id=\"form-checkout\">\n    <input type=\"text\" name=\"cardNumber\" id=\"form-checkout__cardNumber\" />\n    <input type=\"text\" name=\"cardExpirationMonth\" id=\"form-checkout__cardExpirationMonth\" />\n    <input type=\"text\" name=\"cardExpirationYear\" id=\"form-checkout__cardExpirationYear\" />\n    <input type=\"text\" name=\"cardholderName\" id=\"form-checkout__cardholderName\" />\n    <input type=\"email\" name=\"cardholderEmail\" id=\"form-checkout__cardholderEmail\" />\n    <input type=\"text\" name=\"securityCode\" id=\"form-checkout__securityCode\" />\n    <select name=\"issuer\" id=\"form-checkout__issuer\"></select>\n    <select name=\"identificationType\" id=\"form-checkout__identificationType\"></select>\n    <input type=\"text\" name=\"identificationNumber\" id=\"form-checkout__identificationNumber\" />\n    <select name=\"installments\" id=\"form-checkout__installments\"></select>\n    <button type=\"submit\" id=\"form-checkout__submit\">Pay</button>\n\n    <progress value=\"0\" class=\"progress-bar\">loading...</progress>\n  </form>\n";
    /***/
  },

  /***/
  "./src/app/mercado-pago/mercado-pago-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/mercado-pago/mercado-pago-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: MercadoPagoPageRoutingModule */

  /***/
  function srcAppMercadoPagoMercadoPagoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MercadoPagoPageRoutingModule", function () {
      return MercadoPagoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mercado_pago_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mercado-pago.page */
    "./src/app/mercado-pago/mercado-pago.page.ts");

    var routes = [{
      path: '',
      component: _mercado_pago_page__WEBPACK_IMPORTED_MODULE_3__["MercadoPagoPage"]
    }];

    var MercadoPagoPageRoutingModule = /*#__PURE__*/_createClass(function MercadoPagoPageRoutingModule() {
      _classCallCheck(this, MercadoPagoPageRoutingModule);
    });

    MercadoPagoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MercadoPagoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/mercado-pago/mercado-pago.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/mercado-pago/mercado-pago.module.ts ***!
    \*****************************************************/

  /*! exports provided: MercadoPagoPageModule */

  /***/
  function srcAppMercadoPagoMercadoPagoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MercadoPagoPageModule", function () {
      return MercadoPagoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _mercado_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mercado-pago-routing.module */
    "./src/app/mercado-pago/mercado-pago-routing.module.ts");
    /* harmony import */


    var _mercado_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mercado-pago.page */
    "./src/app/mercado-pago/mercado-pago.page.ts");

    var MercadoPagoPageModule = /*#__PURE__*/_createClass(function MercadoPagoPageModule() {
      _classCallCheck(this, MercadoPagoPageModule);
    });

    MercadoPagoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mercado_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__["MercadoPagoPageRoutingModule"]],
      declarations: [_mercado_pago_page__WEBPACK_IMPORTED_MODULE_6__["MercadoPagoPage"]]
    })], MercadoPagoPageModule);
    /***/
  },

  /***/
  "./src/app/mercado-pago/mercado-pago.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/mercado-pago/mercado-pago.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMercadoPagoMercadoPagoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cp-text {\n  font-weight: bold;\n  font-size: 21px;\n  color: white;\n}\n\n.buscar-btn2 {\n  border-radius: 20px;\n  font-size: 22px;\n  background-color: #00b050;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\n.buscar-btn {\n  border-radius: 20px;\n  font-size: 16px;\n  background-color: #ff7f23;\n  color: white;\n  padding: 10px 10px 10px;\n}\n\nion-toolbar {\n  --background: #ff7f23;\n}\n\n.buscar-btn:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n::-moz-placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::placeholder {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: bold !important;\n  text-align: center !important;\n  --placeholder-opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZnJlZG8vQWxmcmVkby9QZXJzb25hbC9Qcm95ZWN0b3MvRnJlc2tvL2ZyZXNrby1hcHAvc3JjL2FwcC9tZXJjYWRvLXBhZ28vbWVyY2Fkby1wYWdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVyY2Fkby1wYWdvL21lcmNhZG8tcGFnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNHLHFCQUFBO0FDQUg7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQztFQUFvQixnQkFBQTtFQUNqQixrQkFBQTtBQ0dKOztBREFDO0VBQXNCLGdCQUFBO0VBQ25CLGtCQUFBO0FDSUo7O0FEREM7RUFDRyxrQkFBQTtBQ0lKOztBRERDO0VBQ0csNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbWVyY2Fkby1wYWdvL21lcmNhZG8tcGFnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5idXNjYXItYnRuMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmJ1c2Nhci1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2YyMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgLS1iYWNrZ3JvdW5kOiAjZmY3ZjIzO1xyXG59XHJcblxyXG4uYnVzY2FyLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuIH1cclxuIFxyXG4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcclxufSIsIi5jcC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnVzY2FyLWJ0bjIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIwNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG5cbi5idXNjYXItYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjIzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmN2YyMztcbn1cblxuLmJ1c2Nhci1idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGluaXRpYWw7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mercado-pago/mercado-pago.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/mercado-pago/mercado-pago.page.ts ***!
    \***************************************************/

  /*! exports provided: MercadoPagoPage */

  /***/
  function srcAppMercadoPagoMercadoPagoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MercadoPagoPage", function () {
      return MercadoPagoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MercadoPagoPage = /*#__PURE__*/function () {
      function MercadoPagoPage(nav) {
        _classCallCheck(this, MercadoPagoPage);

        this.nav = nav;
      }

      _createClass(MercadoPagoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Step #3
          var mp = new MercadoPago('TEST-33282014-4d13-4154-b658-09514cf35a12', {
            locale: 'es-MX'
          });
          var cardForm = mp.cardForm({
            amount: '1',
            autoMount: true,
            processingMode: 'aggregator',
            form: {
              id: 'form-checkout',
              cardholderName: {
                id: 'form-checkout__cardholderName',
                placeholder: 'Cardholder name'
              },
              cardholderEmail: {
                id: 'form-checkout__cardholderEmail',
                placeholder: 'Email'
              },
              cardNumber: {
                id: 'form-checkout__cardNumber',
                placeholder: 'Card number'
              },
              cardExpirationMonth: {
                id: 'form-checkout__cardExpirationMonth',
                placeholder: 'MM'
              },
              cardExpirationYear: {
                id: 'form-checkout__cardExpirationYear',
                placeholder: 'YYYY'
              },
              securityCode: {
                id: 'form-checkout__securityCode',
                placeholder: 'CVV'
              },
              installments: {
                id: 'form-checkout__installments',
                placeholder: 'Total installments'
              },
              identificationType: {
                id: 'form-checkout__identificationType',
                placeholder: 'Document type'
              },
              identificationNumber: {
                id: 'form-checkout__identificationNumber',
                placeholder: 'Document number'
              },
              issuer: {
                id: 'form-checkout__issuer',
                placeholder: 'Issuer'
              }
            },
            callbacks: {
              onFormMounted: function onFormMounted(error) {
                if (error) return console.warn('Form Mounted handling error: ', error);
                console.log('Form mounted');
              },
              onFormUnmounted: function onFormUnmounted(error) {
                if (error) return console.warn('Form Unmounted handling error: ', error);
                console.log('Form unmounted');
              },
              onIdentificationTypesReceived: function onIdentificationTypesReceived(error, identificationTypes) {
                if (error) return console.warn('identificationTypes handling error: ', error);
                console.log('Identification types available: ', identificationTypes);
              },
              onPaymentMethodsReceived: function onPaymentMethodsReceived(error, paymentMethods) {
                if (error) return console.warn('paymentMethods handling error: ', error);
                console.log('Payment Methods available: ', paymentMethods);
              },
              onIssuersReceived: function onIssuersReceived(error, issuers) {
                if (error) return console.warn('issuers handling error: ', error);
                console.log('Issuers available: ', issuers);
              },
              onInstallmentsReceived: function onInstallmentsReceived(error, installments) {
                if (error) return console.warn('installments handling error: ', error);
                console.log('Installments available: ', installments);
              },
              onCardTokenReceived: function onCardTokenReceived(error, token) {
                if (error) return console.warn('Token handling error: ', error);
                console.log('Token available: ', token);
              },
              onSubmit: function onSubmit(event) {
                event.preventDefault();
                var cardData = cardForm.getCardFormData();
                console.log('CardForm data available: ', cardData);
              },
              onFetching: function onFetching(resource) {
                console.log('Fetching resource: ', resource); // Animate progress bar

                var progressBar = document.querySelector('.progress-bar');
                progressBar.removeAttribute('value');
                return function () {
                  progressBar.setAttribute('value', '0');
                };
              }
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.nav.pop();
        }
      }]);

      return MercadoPagoPage;
    }();

    MercadoPagoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    MercadoPagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mercado-pago',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mercado-pago.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mercado-pago/mercado-pago.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mercado-pago.page.scss */
      "./src/app/mercado-pago/mercado-pago.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], MercadoPagoPage);
    /***/
  }
}]);
//# sourceMappingURL=mercado-pago-mercado-pago-module-es5.js.map