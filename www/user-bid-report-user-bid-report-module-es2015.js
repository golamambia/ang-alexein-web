(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-bid-report-user-bid-report-module"],{

/***/ "09GN":
/*!****************************************************************!*\
  !*** ./src/app/user/user-bid-report/user-bid-report.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table th {\n  color: #262262;\n  font-weight: 500;\n}\n\n.table tfoot {\n  background-color: #c6223e;\n  color: #fff;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWJpZC1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsY0FBQTtFQUFlLGdCQUFBO0FBR3pCOztBQUZBO0VBQWEseUJBQUE7RUFBMEIsV0FBQTtFQUFZLGdCQUFBO0FBUW5EIiwiZmlsZSI6InVzZXItYmlkLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGh7Y29sb3I6IzI2MjI2MjsgZm9udC13ZWlnaHQ6NTAwO31cbi50YWJsZSB0Zm9vdHtiYWNrZ3JvdW5kLWNvbG9yOiNjNjIyM2U7IGNvbG9yOiNmZmY7IGZvbnQtd2VpZ2h0OjUwMDt9XG4iXX0= */");

/***/ }),

/***/ "de0s":
/*!************************************************************************!*\
  !*** ./src/app/user/user-bid-report/user-bid-report-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserBidReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBidReportPageRoutingModule", function() { return UserBidReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_bid_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-bid-report.page */ "lEN4");




const routes = [
    {
        path: '',
        component: _user_bid_report_page__WEBPACK_IMPORTED_MODULE_3__["UserBidReportPage"]
    }
];
let UserBidReportPageRoutingModule = class UserBidReportPageRoutingModule {
};
UserBidReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserBidReportPageRoutingModule);



/***/ }),

/***/ "k8Z8":
/*!****************************************************************!*\
  !*** ./src/app/user/user-bid-report/user-bid-report.module.ts ***!
  \****************************************************************/
/*! exports provided: UserBidReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBidReportPageModule", function() { return UserBidReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_bid_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-bid-report-routing.module */ "de0s");
/* harmony import */ var _user_bid_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-bid-report.page */ "lEN4");







let UserBidReportPageModule = class UserBidReportPageModule {
};
UserBidReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_bid_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserBidReportPageRoutingModule"]
        ],
        declarations: [_user_bid_report_page__WEBPACK_IMPORTED_MODULE_6__["UserBidReportPage"]]
    })
], UserBidReportPageModule);



/***/ }),

/***/ "lEN4":
/*!**************************************************************!*\
  !*** ./src/app/user/user-bid-report/user-bid-report.page.ts ***!
  \**************************************************************/
/*! exports provided: UserBidReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBidReportPage", function() { return UserBidReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_bid_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-bid-report.page.html */ "qN01");
/* harmony import */ var _user_bid_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-bid-report.page.scss */ "09GN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserBidReportPage = class UserBidReportPage {
    constructor() { }
    ngOnInit() {
    }
};
UserBidReportPage.ctorParameters = () => [];
UserBidReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-bid-report',
        template: _raw_loader_user_bid_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_bid_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserBidReportPage);



/***/ }),

/***/ "qN01":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-bid-report/user-bid-report.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bid Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Report...\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Title</th>\n                <th>Date</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Product 1</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 2</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 3</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 1</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 2</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 3</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 1</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 2</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 3</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 1</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 2</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Product 3</td>\n                <td>2021/01/01</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=user-bid-report-user-bid-report-module-es2015.js.map