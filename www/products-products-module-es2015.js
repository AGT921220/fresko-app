(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-row style=\"width:100% !important\">\r\n      <ion-col size=\"4\" style=\"float: left;\">\r\n        <ion-img src=\"assets/zanahoria.png\" class=\"img_header ion-margin-top ion-padding-top\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width: 13.2%;float: left;\">\r\n        </ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"text-align: center !important;\">\r\n        <span style=\"font-size:18px;font-weight: bold;color:#21ac38\">{{nombre_categoria}}</span>\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"float: right;\">\r\n        <ion-img src=\"assets/cart_logo.png\" class=\"img_header ion-margin-top ion-padding-top\"\r\n          style=\"padding-top: 0px;margin-top: 0px;width: 35%;float: right;margin-right: 10%;\" (click)=\"finishOrder()\">\r\n        </ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <div class=\"submenus\" style=\"width:100%;overflow-x: auto;margin-top:1%;display:inline-flex\">\r\n        <div *ngFor=\"let item of submenus\" (click)=\"showProductsSubmenu(item)\"\r\n          style=\"width: 100%;height: 6vh;border: 2px solid #ec760a;color: #737373;font-weight: bold;text-align: center;font-size: 20px;margin-left: 10px;border-radius: 5px;padding-top: 1%;padding-left: 5px;padding-right: 5px;clear: both;display: inline-block; white-space: nowrap;\">\r\n          {{item.nombre}}\r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-list *ngIf=\"filterProducts().length >= 1\">\r\n    <ion-row>\r\n      <div *ngFor=\"let product of filterProducts(); let i = index;\" [style]=\"getStyle(product)\">\r\n        <ion-col size=\"6\" *ngIf=\"product.visible == 1\" style=\"padding:0;\">\r\n          <ion-card style=\"margin:10px; min-height: 100%;\">\r\n            <ion-card-header>\r\n              <div style=\"height:16vh;max-height:16vh\">\r\n                <ion-img style=\"max-height: 20vh;height: 20vh;\" [src]=\"product.url\"></ion-img>\r\n              </div>\r\n            </ion-card-header>\r\n            <ion-card-content style=\" padding:2px;\">\r\n              <div style=\"height:6vh\">\r\n                <ion-text class=\"ion-text-center\" style=\"margin:auto;display:block;font-weight: bold;font-size:12px\">\r\n                  {{product.product}}\r\n                </ion-text>\r\n              </div>\r\n              <div style=\"height: 3.5vh\">\r\n                <ion-text class=\"ion-text-center\"\r\n                  style=\"margin:auto;display:block;color:#ec760a;font-weight: bold;font-size: 12px;\">\r\n                  {{product.price | currency:'$' }} X KG\r\n                </ion-text>\r\n              </div>\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"product.isKg == 1\">\r\n                  <ion-col size=\"2\" style=\"background-color: #ec760a;\">\r\n                    <ion-icon name=\"remove\" style=\"color:white;\" (click)=\"count(-1995,product.idproduct,'K')\">\r\n                    </ion-icon>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"8\"\r\n                    style=\"text-align:center;margin:auto;display:block;border: 2px #ec760a solid !important;\">\r\n                    <ion-input style=\"text-align:center;\" style=\"height: 3.4vh;\" inputmode=\"decimal\" maxlength=\"15\"\r\n                      minlength=\"1\" type=\"number\" value=\"{{ products[i].kg | number : '1.2-2' }}\"\r\n                      (ionFocus)=\"$event.target.value=''\" (change)=\"saveKG($event.target.value,i)\">\r\n                    </ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" style=\"background-color: #ec760a;\">\r\n                    <ion-icon name=\"add\" style=\"color:white;\" (click)=\"count(1995,product.idproduct,'K')\"></ion-icon>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <div *ngIf=\"product.isKg == 1\" style=\"text-align: center;\">\r\n                  <span style=\"text-align: center;color:#ec760a;font-size:11px\">Kgs.</span>\r\n                </div>\r\n                <ion-row *ngIf=\"product.isPc == 1\">\r\n                  <ion-col size=\"2\" style=\"background-color: #ec760a;\">\r\n                    <ion-icon name=\"remove\" style=\"color:white;\" (click)=\"count(-1,product.idproduct,'P')\"></ion-icon>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"8\"\r\n                    style=\"text-align:center;margin:auto;display:block;border: 2px #ec760a solid !important;\">\r\n                    <ion-input style=\"text-align:center;\" style=\"height: 3.4vh;\" inputmode=\"decimal\" maxlength=\"15\"\r\n                      minlength=\"1\" type=\"number\" (ionFocus)=\"$event.target.value=''\"\r\n                      (change)=\"savePC($event.target.value,i)\" value=\"{{product.pc}}\">\r\n                    </ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" style=\"background-color: #ec760a;\">\r\n                    <ion-icon name=\"add\" style=\"color:white;\" (click)=\"count(1,product.idproduct,'P')\"></ion-icon>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <div *ngIf=\"product.isPc == 1\" style=\"text-align: center;\">\r\n                  <span style=\"text-align: center;color:#ec760a;font-size:11px\">Piezas</span>\r\n                </div>\r\n                <ion-text *ngIf=\"product.selectedWeight>0 && product.selectedWeight<1000 \" class=\"ion-text-center mt-2\"\r\n                  style=\"margin:auto;display:block;font-size:12px;color:#ec760a\">\r\n                  {{product.selectedWeight | number : '0.0-0'}} grs</ion-text>\r\n                <ion-text *ngIf=\"product.selectedWeight>=1000\" class=\"ion-text-center mt-2\"\r\n                  style=\"margin:auto;display:block;font-size:12px;color:#ec760a\">\r\n                  {{product.selectedWeight/1000 | number : '1.2-2'}}\r\n                  Kgs</ion-text>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </div>\r\n\r\n    </ion-row>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function() { return ProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");







let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsPageRoutingModule"]
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".green {\n  background: #00b050;\n}\n\nion-input {\n  --padding-top:0px;\n  --padding-bottom: 0px;\n}\n\n.header {\n  --background: white;\n  color: #FFF;\n  text-align: center;\n  width: 100%;\n  padding: 0px;\n}\n\n.header ion-text {\n  margin: auto;\n  display: block;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxEZXZlbDItRmVyXFxEZXNrdG9wXFxmcmVzc2tvXFxGcmVzc2tvIEFwcCB5IFdlYi9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXRvcDowcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4uaGVhZGVyIGlvbi10ZXh0e1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxufSIsIi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMwMGIwNTA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy10b3A6MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaGVhZGVyIGlvbi10ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");






let ProductsPage = class ProductsPage {
    constructor(apiService, g, global, router, activatedRoute) {
        this.apiService = apiService;
        this.g = g;
        this.global = global;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.products = [];
        this.nombre_categoria = "";
        this.categorias = [
            {
                id: 1,
                text: "VERDURAS",
            },
            {
                id: 0,
                text: "FRUTAS"
            }, {
                id: 2,
                text: "ESPECIAS"
            },
            {
                id: 3,
                text: "CARNES"
            },
            {
                id: 4,
                text: "CREMERIA"
            }, {
                id: 5,
                text: "OTROS"
            }
        ];
        this.submenus = [];
        this.productsAux = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = params["id"];
            this.global.id_category = parseInt(this.id);
            this.getCategoryName(this.id);
            this.productsAux = [];
            if (parseInt(this.id, 10) === 0) {
                this.productsAux = this.g.fruits;
            }
            else if (parseInt(this.id, 10) === 1) {
                this.productsAux = this.g.vegetables;
            }
            else if (parseInt(this.id, 10) == 2) {
                this.productsAux = this.g.spices;
            }
            else if (parseInt(this.id, 10) == 3) {
                this.productsAux = this.g.carnes;
            }
            else if (parseInt(this.id, 10) == 4) {
                this.productsAux = this.g.cremeria;
            }
            else if (parseInt(this.id, 10) == 5) {
                this.productsAux = this.g.otros;
            }
            if (this.productsAux.length == 0) {
                this.apiService.getProducts(this.id).subscribe((response) => {
                    this.submenus = response.submenus;
                    this.products = this.submenus[0].products;
                    this.showProductsSubmenu(this.submenus[0]);
                });
            }
            else {
                this.apiService.getProducts(this.id).subscribe((response) => {
                    this.submenus = response.submenus;
                });
                this.products = this.productsAux;
                this.products.map(x => {
                    let exist = this.productsAux.filter(y => {
                        if (y.idproduct == x.idproduct) {
                            return y;
                        }
                    });
                    if (exist.length >= 1) {
                        x = exist[0];
                    }
                });
                this.filterProducts();
            }
        });
    }
    getStyle(product) {
        if (product.visible == 1) {
            return "padding:0;width:50%";
        }
        else {
            return "padding:0;";
        }
    }
    showProductsSubmenu(item) {
        let submenu_products = item.products;
        this.products.map(x => {
            let exist = this.productsAux.filter(y => {
                if (y.idproduct == x.idproduct) {
                    return y;
                }
            });
            if (exist.length >= 1) {
                x = exist[0];
            }
        });
        this.products.map(x => {
            let exist = submenu_products.filter(y => {
                if (x.idproduct == y.idproduct) {
                    return y;
                }
            });
            if (exist.length >= 1) {
                x.visible = 1;
            }
            else {
                x.visible = 0;
            }
        });
        this.filterProducts();
    }
    getCategoryName(id) {
        let result = this.categorias.filter(x => {
            if (x.id == id) {
                return x;
            }
        });
        let text = "";
        if (result.length >= 1) {
            text = result[0].text;
        }
        this.nombre_categoria = text;
    }
    count(count, idproduct, type) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i]["idproduct"] == idproduct) {
                if (type == "K") {
                    if (count == 1995) {
                        this.products[i]["kg"] =
                            parseFloat(this.products[i]["kg"]) +
                                parseFloat(this.products[i]["sum"]);
                    }
                    else if (count == -1995) {
                        this.products[i]["kg"] =
                            parseFloat(this.products[i]["kg"]) -
                                parseFloat(this.products[i]["sum"]);
                    }
                    else {
                        this.products[i]["kg"] = parseFloat(this.products[i]["kg"]) + count;
                    }
                    if (parseFloat(this.products[i]["kg"]) < 0) {
                        this.products[i]["kg"] = 0;
                    }
                }
                else {
                    this.products[i]["pc"] = parseInt(this.products[i]["pc"], 10) + count;
                    if (parseInt(this.products[i]["pc"], 10) < 0) {
                        this.products[i]["pc"] = 0;
                    }
                }
                this.products[i]["selectedWeight"] =
                    this.products[i]["pc"] * this.products[i]["weight"] +
                        parseFloat(this.products[i]["kg"]) * 1000;
                break;
            }
        }
        if (parseInt(this.id, 10) === 0) {
            this.g.fruits = this.products;
        }
        else if (parseInt(this.id, 10) === 1) {
            this.g.vegetables = this.products;
        }
        else if (parseInt(this.id, 10) == 2) {
            this.g.spices = this.products;
        }
        else if (parseInt(this.id, 10) == 3) {
            this.g.carnes = this.products;
        }
        else if (parseInt(this.id, 10) == 4) {
            this.g.cremeria = this.products;
        }
        else if (parseInt(this.id, 10) == 5) {
            this.g.otros = this.products;
        }
    }
    saveKG(value, i) {
        if (!isNaN(value)) {
            if (parseFloat(value) < 0) {
                this.products[i]["kg"] = 0;
            }
            else {
                this.products[i]["kg"] = value;
            }
        }
        else {
            let kg = value.split(" ")[0];
            this.products[i]["kg"] = kg;
        }
        this.products[i]["selectedWeight"] =
            this.products[i]["pc"] * this.products[i]["weight"] +
                parseFloat(this.products[i]["kg"]) * 1000;
        if (parseInt(this.id, 10) === 0) {
            this.g.fruits = this.products;
        }
        else if (parseInt(this.id, 10) === 1) {
            this.g.vegetables = this.products;
        }
        else {
            this.g.spices = this.products;
        }
    }
    savePC(value, i) {
        if (!isNaN(value)) {
            if (parseFloat(value) < 0) {
                this.products[i]["pc"] = 0;
            }
            else {
                this.products[i]["pc"] = value;
            }
        }
        else {
            let pc = value.split(" ")[0];
            this.products[i]["pc"] = pc;
        }
        this.products[i]["selectedWeight"] =
            this.products[i]["pc"] * this.products[i]["weight"] +
                parseFloat(this.products[i]["kg"]) * 1000;
        if (parseInt(this.id, 10) === 0) {
            this.g.fruits = this.products;
        }
        else if (parseInt(this.id, 10) === 1) {
            this.g.vegetables = this.products;
        }
        else if (parseInt(this.id, 10) == 2) {
            this.g.spices = this.products;
        }
        else if (parseInt(this.id, 10) == 3) {
            this.g.carnes = this.products;
        }
        else if (parseInt(this.id, 10) == 4) {
            this.g.cremeria = this.products;
        }
        else if (parseInt(this.id, 10) == 5) {
            this.g.otros = this.products;
        }
    }
    filterProducts() {
        this.products = this.products.filter(product => product.activated == 1);
        return this.products;
    }
    back() {
        this.router.navigate(["tabs/categories"]);
    }
    finishOrder() {
        this.global.finish_order = "products";
        this.global.finish_order_return = "/tabs2/products/" + this.global.id_category;
        this.router.navigate(["finish-order"]);
    }
};
ProductsPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-products",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map