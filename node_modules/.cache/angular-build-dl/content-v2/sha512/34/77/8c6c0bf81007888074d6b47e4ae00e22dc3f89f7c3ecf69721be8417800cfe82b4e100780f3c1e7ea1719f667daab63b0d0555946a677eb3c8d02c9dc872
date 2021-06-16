(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-product-list-seller-product-list-module"],{

/***/ "7Yyf":
/*!**************************************************************************!*\
  !*** ./src/app/seller/seller-product-list/seller-product-list.module.ts ***!
  \**************************************************************************/
/*! exports provided: SellerProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductListPageModule", function() { return SellerProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-product-list-routing.module */ "7mdK");
/* harmony import */ var _seller_product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-product-list.page */ "e7Ub");







let SellerProductListPageModule = class SellerProductListPageModule {
};
SellerProductListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerProductListPageRoutingModule"]
        ],
        declarations: [_seller_product_list_page__WEBPACK_IMPORTED_MODULE_6__["SellerProductListPage"]]
    })
], SellerProductListPageModule);



/***/ }),

/***/ "7mdK":
/*!**********************************************************************************!*\
  !*** ./src/app/seller/seller-product-list/seller-product-list-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SellerProductListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductListPageRoutingModule", function() { return SellerProductListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-product-list.page */ "e7Ub");




const routes = [
    {
        path: '',
        component: _seller_product_list_page__WEBPACK_IMPORTED_MODULE_3__["SellerProductListPage"]
    }
];
let SellerProductListPageRoutingModule = class SellerProductListPageRoutingModule {
};
SellerProductListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerProductListPageRoutingModule);



/***/ }),

/***/ "e7Ub":
/*!************************************************************************!*\
  !*** ./src/app/seller/seller-product-list/seller-product-list.page.ts ***!
  \************************************************************************/
/*! exports provided: SellerProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductListPage", function() { return SellerProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_product_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-product-list.page.html */ "gzWe");
/* harmony import */ var _seller_product_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-product-list.page.scss */ "kXgj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let SellerProductListPage = class SellerProductListPage {
    constructor(http, loadingController, alertController) {
        this.http = http;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.productList();
    }
    productList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'product-list', formData).subscribe((res) => {
            if (res && res.status) {
                this.pList = res.response_data;
            }
            else {
                this.pList = null;
            }
        });
    }
    deleteProduct(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.loadingShow();
            let formData = new FormData;
            formData.append('product_id', p.id);
            const successalrt = yield this.alertController.create({
                message: 'Data successfully delete',
                buttons: ['OK']
            });
            const fail = yield this.alertController.create({
                message: 'Something went wrong',
                buttons: ['OK']
            });
            const alert = yield this.alertController.create({
                message: 'Are you sure to delete',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                            //console.log('Confirm Okay');
                            if (p.id) {
                                this.loadingShow();
                                this.http.post(this.url + 'product-remove', formData)
                                    .subscribe((res) => {
                                    // this.res = res.json();
                                    //console.log(res);
                                    if (res.status == false) {
                                        fail.present();
                                        this.loadingHide();
                                    }
                                    else if (res.status == true) {
                                        successalrt.present();
                                        //this.constructor();
                                        //this.navCtrl.navigateForward('address-list');
                                        this.loadingHide();
                                        this.productList();
                                    }
                                    else {
                                        //alert("Server error");
                                        this.loadingHide();
                                    }
                                }, (err) => {
                                    console.log(err);
                                    this.loadingHide();
                                });
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editProduct(c) {
    }
    loadingShow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield this.loading.present();
        });
    }
    loadingHide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
};
SellerProductListPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SellerProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-product-list',
        template: _raw_loader_seller_product_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_product_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerProductListPage);



/***/ }),

/***/ "gzWe":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-product-list/seller-product-list.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Product list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Products...\n        </div> -->\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Title</th>\n                <th>\n                  Sort Description\n                </th>\n                <th>Bid Starting Price</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let p of pList\">\n                <td>{{p.product_name}}</td>\n                <td>\n                  {{p.product_short_description}}\n                </td>\n                <td>{{p.product_bid_starting_price}}</td>\n                <td><button *ngIf=\"p.status=='1'\"  class=\"btn btn-sm btn-success\" ><i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Active</button>\n                  <button *ngIf=\"p.status=='0'\"  class=\"btn btn-sm btn-warning\" ><i class=\"fa fa-times-circle-o \" aria-hidden=\"true\"></i> Deactive</button>\n                </td>\n                <td>\n                  <button (click)=\"deleteProduct(p)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                  <button (click)=\"editProduct(p)\" routerLink=\"/seller/product-update/{{p.id}}\"><i class=\"fa fa-edit\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <!-- <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav> -->\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "kXgj":
/*!**************************************************************************!*\
  !*** ./src/app/seller/seller-product-list/seller-product-list.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=seller-seller-product-list-seller-product-list-module-es2015.js.map