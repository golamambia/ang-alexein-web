(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-group-list-seller-group-list-module"],{

/***/ "0mSw":
/*!**********************************************************************!*\
  !*** ./src/app/seller/seller-group-list/seller-group-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: SellerGroupListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupListPageModule", function() { return SellerGroupListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_group_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-group-list-routing.module */ "yGJ2");
/* harmony import */ var _seller_group_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-group-list.page */ "yHas");







let SellerGroupListPageModule = class SellerGroupListPageModule {
};
SellerGroupListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_group_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerGroupListPageRoutingModule"]
        ],
        declarations: [_seller_group_list_page__WEBPACK_IMPORTED_MODULE_6__["SellerGroupListPage"]]
    })
], SellerGroupListPageModule);



/***/ }),

/***/ "3Aou":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-group-list/seller-group-list.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Group list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Products...\n        </div> -->\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Auction CG number</th>\n                <th>Group name</th>\n                <th>End date & time</th>\n                <th>Location</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let c of groupList\">\n                <td>{{c.auction_cg_number}}</td>\n                <td>{{c.category_group_name}}</td>\n                <td>{{c.end_date}} {{c.end_time}}</td>\n                <td>\n                  {{c.location}}\n                </td>\n                <!-- <td>\n                  <span class=\"badge badge-success\" *ngIf=\"c.category_status\">Active</span>\n                  <span class=\"badge badge-error\" *ngIf=\"!c.category_status\">Inactive</span>\n                </td> -->\n                <td>\n                  <button (click)=\"deleteGroup(c)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                  <button (click)=\"editGroup(c.id)\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button>\n                  <button (click)=\"groupItems(c)\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li> -->\n              <!-- <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li> -->\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li> -->\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li> -->\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "qHoj":
/*!**********************************************************************!*\
  !*** ./src/app/seller/seller-group-list/seller-group-list.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItZ3JvdXAtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "yGJ2":
/*!******************************************************************************!*\
  !*** ./src/app/seller/seller-group-list/seller-group-list-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SellerGroupListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupListPageRoutingModule", function() { return SellerGroupListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_group_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-group-list.page */ "yHas");




const routes = [
    {
        path: '',
        component: _seller_group_list_page__WEBPACK_IMPORTED_MODULE_3__["SellerGroupListPage"]
    }
];
let SellerGroupListPageRoutingModule = class SellerGroupListPageRoutingModule {
};
SellerGroupListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerGroupListPageRoutingModule);



/***/ }),

/***/ "yHas":
/*!********************************************************************!*\
  !*** ./src/app/seller/seller-group-list/seller-group-list.page.ts ***!
  \********************************************************************/
/*! exports provided: SellerGroupListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupListPage", function() { return SellerGroupListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_group_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-group-list.page.html */ "3Aou");
/* harmony import */ var _seller_group_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-group-list.page.scss */ "qHoj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let SellerGroupListPage = class SellerGroupListPage {
    constructor(router, http, loadingController) {
        this.router = router;
        this.http = http;
        this.loadingController = loadingController;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_URL;
    }
    ngOnInit() {
        this.groupListGet();
    }
    groupListGet() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'group-all-list', formData).subscribe((res) => {
            if (res && res.status) {
                this.groupList = res.response_data;
            }
            else {
                this.groupList = null;
            }
        });
    }
    deleteGroup(c) {
        this.loadingShow();
        let formData = new FormData;
        formData.append('group_id', c.id);
        this.http.post(this.url + 'group-remove', formData).subscribe(res => {
            this.loadingHide();
            this.groupListGet();
        }, err => {
            this.loadingHide();
        });
    }
    editGroup(id) {
        this.router.navigate(['seller/group-edit', id]);
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
    groupItems(c) {
        this.router.navigate(['seller/group-details', c.id]);
    }
};
SellerGroupListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
SellerGroupListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-group-list',
        template: _raw_loader_seller_group_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_group_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerGroupListPage);



/***/ })

}]);
//# sourceMappingURL=seller-seller-group-list-seller-group-list-module-es2015.js.map