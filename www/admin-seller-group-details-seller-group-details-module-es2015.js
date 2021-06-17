(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-seller-group-details-seller-group-details-module"],{

/***/ "+f/5":
/*!*************************************************************************!*\
  !*** ./src/app/admin/seller-group-details/seller-group-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: SellerGroupDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupDetailsPage", function() { return SellerGroupDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_group_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-group-details.page.html */ "HW6Q");
/* harmony import */ var _seller_group_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-group-details.page.scss */ "sVZ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");









let SellerGroupDetailsPage = class SellerGroupDetailsPage {
    constructor(loadingController, http, storage, router, route) {
        this.loadingController = loadingController;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.groupItems = [];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_URL;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            if (params.get('id')) {
                this.id = params.get('id');
                this.getGroupById(this.id);
            }
        });
    }
    getGroupById(id) {
        this.loadingShow();
        let formData = new FormData;
        formData.append('group_id', id);
        this.http.post(this.url + 'group-details', formData).subscribe((res) => {
            this.loadingHide();
            if (res && res.status) {
                this.groupDetails = res.response_data;
            }
            else {
                this.router.navigate(['/seller/group-list']);
            }
        }, err => {
            this.loadingHide();
        });
    }
    loadingShow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 4000
            });
            yield this.loading.present();
        });
    }
    loadingHide() {
        setTimeout(() => {
            if (this.loading) {
                this.loading.dismiss();
            }
            else {
                this.loading = null;
            }
        }, 1000);
        setTimeout(() => {
            if (this.loading) {
                this.loading.dismiss();
            }
            else {
                this.loading = null;
            }
        }, 3000);
    }
    ionViewWillEnter() {
        this.productList();
    }
    productList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'product-list', formData).subscribe((res) => {
            if (res && res.status) {
                this.pList = res.response_data;
                this.getGroupItemsByGroup();
            }
            else {
                this.pList = null;
            }
        });
    }
    getGroupItemsByGroup() {
        let formData = new FormData;
        formData.append('group_id', this.id);
        this.http.post(this.url + 'group-item-get', formData).subscribe((res) => {
            this.groupItems = res.response_data;
        });
    }
    addProduct(product) {
        let formData = new FormData;
        formData.append('category_group_id', this.id);
        formData.append('product_id', product.id);
        this.http.post(this.url + 'group-item-add', formData).subscribe((res) => {
            this.getGroupItemsByGroup();
        });
    }
    removeProduct(product) {
        let formData = new FormData;
        formData.append('group_item_id', product.id);
        this.http.post(this.url + 'group-item-remove', formData).subscribe((res) => {
            this.getGroupItemsByGroup();
        });
    }
};
SellerGroupDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
SellerGroupDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-group-details',
        template: _raw_loader_seller_group_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_group_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerGroupDetailsPage);



/***/ }),

/***/ "HW6Q":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/seller-group-details/seller-group-details.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Group Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item *ngIf=\"groupDetails\">\n    <ion-label>\n      <ion-text color=\"primary\">\n        <h4>Group Name: {{groupDetails.category_group_name}}</h4>\n      </ion-text>\n      <!-- <p></p> -->\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"groupDetails\">\n    <ion-label>\n      <ion-text color=\"primary\">\n        <h3>CG Number: </h3>\n      </ion-text>\n      <p>{{groupDetails.auction_cg_number}}</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"groupDetails\">\n    <ion-label>\n      <ion-text color=\"primary\">\n        <h3>location: </h3>\n      </ion-text>\n      <p>{{groupDetails.location}}</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"groupDetails\">\n    <ion-label>\n      <ion-text color=\"primary\">\n        <h3>Highlights: </h3>\n      </ion-text>\n      <p>{{groupDetails.highlights}}</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"groupDetails\">\n    <ion-label>\n      <ion-text color=\"primary\">\n        <h3>Notes: </h3>\n      </ion-text>\n      <p>{{groupDetails.notes}}</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"groupDetails\">\n    <ion-label>\n      <ion-text color=\"primary\">\n        <h3>Terms: </h3>\n      </ion-text>\n      <p>{{groupDetails.terms}}</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-row>\n\n    <ion-col col-8>\n      <ion-list>\n        <ion-list-header>\n          <h3>Added Products</h3>\n        </ion-list-header>\n\n\n        <ion-item *ngFor=\"let t of groupItems\">\n          <!-- <ion-thumbnail slot=\"start\">\n            <ion-img src=\"https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg\"></ion-img>\n          </ion-thumbnail> -->\n          <ion-label>\n\n            <ion-text color=\"primary\">\n              <h3>{{t.product_name}}</h3>\n            </ion-text>\n            <p>Bid starting price: {{t.product_bid_starting_price}}</p>\n          </ion-label>\n          <!-- <h5></h5> -->\n          <ion-button slot=\"end\" (click)=\"removeProduct(t)\">Remove</ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n\n    <ion-col col-4>\n      <ion-list>\n        <ion-list-header>\n          <h3>All Product list</h3>\n        </ion-list-header>\n\n\n        <ion-item *ngFor=\"let p of pList\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img [src]='\"http://18.189.157.72/public/upload/\"+p.product_picture'></ion-img>\n          </ion-thumbnail>\n          <ion-label>{{p.product_name}}</ion-label>\n          <ion-button (click)=\"addProduct(p)\">Add+</ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n\n  </ion-row>\n\n\n</ion-content>");

/***/ }),

/***/ "NzRz":
/*!***************************************************************************!*\
  !*** ./src/app/admin/seller-group-details/seller-group-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: SellerGroupDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupDetailsPageModule", function() { return SellerGroupDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_group_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-group-details-routing.module */ "xIxY");
/* harmony import */ var _seller_group_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-group-details.page */ "+f/5");







let SellerGroupDetailsPageModule = class SellerGroupDetailsPageModule {
};
SellerGroupDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_group_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerGroupDetailsPageRoutingModule"]
        ],
        declarations: [_seller_group_details_page__WEBPACK_IMPORTED_MODULE_6__["SellerGroupDetailsPage"]]
    })
], SellerGroupDetailsPageModule);



/***/ }),

/***/ "sVZ2":
/*!***************************************************************************!*\
  !*** ./src/app/admin/seller-group-details/seller-group-details.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItZ3JvdXAtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "xIxY":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/seller-group-details/seller-group-details-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SellerGroupDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupDetailsPageRoutingModule", function() { return SellerGroupDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_group_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-group-details.page */ "+f/5");




const routes = [
    {
        path: '',
        component: _seller_group_details_page__WEBPACK_IMPORTED_MODULE_3__["SellerGroupDetailsPage"]
    }
];
let SellerGroupDetailsPageRoutingModule = class SellerGroupDetailsPageRoutingModule {
};
SellerGroupDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerGroupDetailsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=admin-seller-group-details-seller-group-details-module-es2015.js.map