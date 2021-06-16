(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+4uR":
/*!*******************************************************************************!*\
  !*** ./src/app/include/seller/seller-side-nav/seller-side-nav.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.site-content-contain-wrapper {\n  position: relative;\n  min-height: 400px;\n  overflow: hidden;\n}\n.site-content-contain-wrapper .left-panelbg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 278px;\n  background: #262262;\n  z-index: 0;\n}\n#left-panel {\n  width: 278px;\n  position: relative;\n  z-index: 9;\n  float: left;\n}\n#left-panel .btn-leftmenuclose {\n  width: 40px;\n  height: 40px;\n  color: #fff;\n  background: #ed1c24;\n  line-height: 40px;\n  text-align: center;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  display: none;\n}\n.leftmenu ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.leftmenu ul li {\n  margin-bottom: 1px;\n}\n.leftmenu ul li a {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 300;\n  padding: 10px 15px 10px 60px;\n  display: block;\n  position: relative;\n  border-left: solid 3px transparent;\n}\n.leftmenu ul li a .fa {\n  position: absolute;\n  left: 34px;\n  top: 14px;\n  font-size: 14px;\n}\n.leftmenu ul li a:hover,\n.leftmenu ul li:hover > a,\n.leftmenu ul li.active > a {\n  background-color: #ed1c24;\n  border-color: #fff;\n}\n.leftmenu ul li .icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.leftmenu ul ul li a {\n  padding-left: 72px;\n  color: #fff;\n  font-size: 13px;\n}\n.leftmenu ul ul li a:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 60px;\n}\n.leftmenu ul ul li a:hover,\n.leftmenu ul ul li.active > a {\n  background-color: transparent;\n  border-color: transparent;\n  color: #ed1c24;\n}\n.left-panelbg,\n#left-panel {\n  margin: 0;\n}\n#main {\n  width: calc(100% - 278px);\n}\n.btn-leftmenu {\n  position: absolute;\n  left: 10px;\n  top: 22px;\n  border-radius: 5px;\n  padding: 8px;\n  font-weight: 400;\n  display: none;\n  width: 38px;\n  text-align: center;\n}\n.btn-leftmenu:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n}\n.btn-leftmenu.on:before {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VsbGVyLXNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUE4QixrQkFBQTtFQUFtQixpQkFBQTtFQUFrQixnQkFBQTtBQUtuRTtBQUpBO0VBQTRDLGtCQUFBO0VBQW1CLE9BQUE7RUFBUSxNQUFBO0VBQU8sWUFBQTtFQUFhLFlBQUE7RUFBYSxtQkFBQTtFQUFvQixVQUFBO0FBYzVIO0FBYkE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLFdBQUE7QUFvQnZEO0FBbEJBO0VBQStCLFdBQUE7RUFBWSxZQUFBO0VBQWEsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxNQUFBO0VBQU8sYUFBQTtBQStCbEs7QUE3QkE7RUFBYSxVQUFBO0VBQVcsU0FBQTtFQUFVLGdCQUFBO0FBbUNsQztBQWxDQTtFQUFnQixrQkFBQTtBQXNDaEI7QUFyQ0E7RUFBa0IsV0FBQTtFQUFZLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsNEJBQUE7RUFBNkIsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLGtDQUFBO0FBK0M5SDtBQTlDQTtFQUFzQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsU0FBQTtFQUFVLGVBQUE7QUFxRDlEO0FBcERBOzs7RUFFMkIseUJBQUE7RUFBMEIsa0JBQUE7QUF5RHJEO0FBeERBO0VBQXNCLGNBQUE7RUFBZSxXQUFBO0VBQVksWUFBQTtBQThEakQ7QUE3REE7RUFBcUIsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLGVBQUE7QUFtRXBEO0FBbEVBO0VBQTRCLDBCQUFBO0VBQTJCLFlBQUE7RUFBaUIsa0JBQUE7RUFBbUIsU0FBQTtFQUFVLFVBQUE7QUEwRXJHO0FBekVBOztFQUM4Qiw2QkFBQTtFQUE4Qix5QkFBQTtFQUEwQixjQUFBO0FBK0V0RjtBQXpFQTs7RUFFWSxTQUFBO0FBNEVaO0FBMUVBO0VBQU0seUJBQUE7QUE4RU47QUE3RUE7RUFBYyxrQkFBQTtFQUFtQixVQUFBO0VBQVcsU0FBQTtFQUFVLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxnQkFBQTtFQUFpQixhQUFBO0VBQWMsV0FBQTtFQUFZLGtCQUFBO0FBeUZqSTtBQXhGQTtFQUFxQiwwQkFBQTtFQUEyQixZQUFBO0FBNkZoRDtBQTVGQTtFQUF3QixZQUFBO0FBZ0d4QiIsImZpbGUiOiJzZWxsZXItc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2l0ZS1jb250ZW50LWNvbnRhaW4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaXRlLWNvbnRlbnQtY29udGFpbi13cmFwcGVyIC5sZWZ0LXBhbmVsYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjc4cHg7XG4gIGJhY2tncm91bmQ6ICMyNjIyNjI7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNsZWZ0LXBhbmVsIHtcbiAgd2lkdGg6IDI3OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jbGVmdC1wYW5lbCAuYnRuLWxlZnRtZW51Y2xvc2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VkMWMyNDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZWZ0bWVudSB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxlZnRtZW51IHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4ubGVmdG1lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XG59XG5cbi5sZWZ0bWVudSB1bCBsaSBhIC5mYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzRweDtcbiAgdG9wOiAxNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sZWZ0bWVudSB1bCBsaSBhOmhvdmVyLFxuLmxlZnRtZW51IHVsIGxpOmhvdmVyID4gYSxcbi5sZWZ0bWVudSB1bCBsaS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ubGVmdG1lbnUgdWwgbGkgLmljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmxlZnRtZW51IHVsIHVsIGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDcycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5sZWZ0bWVudSB1bCB1bCBsaSBhOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiA2MHB4O1xufVxuXG4ubGVmdG1lbnUgdWwgdWwgbGkgYTpob3Zlcixcbi5sZWZ0bWVudSB1bCB1bCBsaS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4ubGVmdC1wYW5lbGJnLFxuI2xlZnQtcGFuZWwge1xuICBtYXJnaW46IDA7XG59XG5cbiNtYWluIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI3OHB4KTtcbn1cblxuLmJ0bi1sZWZ0bWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDM4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1sZWZ0bWVudTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+DiVwiO1xufVxuXG4uYnRuLWxlZnRtZW51Lm9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CNXCI7XG59Il19 */");

/***/ }),

/***/ "+TEy":
/*!*******************************************!*\
  !*** ./src/app/include/include.module.ts ***!
  \*******************************************/
/*! exports provided: IncludeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncludeModule", function() { return IncludeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "EEBF");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "Jfkb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-header/admin-header.component */ "VPLl");
/* harmony import */ var _admin_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-footer/admin-footer.component */ "W1dd");
/* harmony import */ var _admin_admin_side_nav_admin_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin-side-nav/admin-side-nav.component */ "Cv3j");
/* harmony import */ var _seller_seller_header_seller_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seller/seller-header/seller-header.component */ "w1uC");
/* harmony import */ var _seller_seller_footer_seller_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seller/seller-footer/seller-footer.component */ "O+Tl");
/* harmony import */ var _seller_seller_side_nav_seller_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seller/seller-side-nav/seller-side-nav.component */ "Lw7w");
/* harmony import */ var _user_user_header_user_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user-header/user-header.component */ "MyWw");
/* harmony import */ var _user_user_footer_user_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user-footer/user-footer.component */ "84/b");
/* harmony import */ var _user_user_side_nav_user_side_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user-side-nav/user-side-nav.component */ "jamG");















const PAGES_COMPONENTS = [
    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
    _admin_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_7__["AdminFooterComponent"],
    _admin_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_6__["AdminHeaderComponent"],
    _admin_admin_side_nav_admin_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["AdminSideNavComponent"],
    _seller_seller_footer_seller_footer_component__WEBPACK_IMPORTED_MODULE_10__["SellerFooterComponent"],
    _seller_seller_header_seller_header_component__WEBPACK_IMPORTED_MODULE_9__["SellerHeaderComponent"],
    _seller_seller_side_nav_seller_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SellerSideNavComponent"],
    _user_user_header_user_header_component__WEBPACK_IMPORTED_MODULE_12__["UserHeaderComponent"],
    _user_user_footer_user_footer_component__WEBPACK_IMPORTED_MODULE_13__["UserFooterComponent"],
    _user_user_side_nav_user_side_nav_component__WEBPACK_IMPORTED_MODULE_14__["UserSideNavComponent"]
];
let IncludeModule = class IncludeModule {
};
IncludeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // FormsModule,
            // IonicModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        declarations: [
            PAGES_COMPONENTS
        ],
        exports: [
            PAGES_COMPONENTS
        ],
        entryComponents: [],
    })
], IncludeModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\ionic\alexein-web\src\main.ts */"zUnb");


/***/ }),

/***/ "0+LX":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/admin-default-layout.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"theme\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n      <ion-item [routerLink]=\"['/admin']\" routerLinkActive=\"active\">Dashboard</ion-item>\n      <!-- <ion-item [routerLink]=\"['/seller/category-add']\" routerLinkActive=\"active\">Category Add</ion-item>\n      <ion-item [routerLink]=\"['/seller/category-list']\" routerLinkActive=\"active\">Category List</ion-item>\n      <ion-item [routerLink]=\"['/seller/sub-category-add']\" routerLinkActive=\"active\">Sub Category Add</ion-item>\n      <ion-item [routerLink]=\"['/seller/sub-category-list']\" routerLinkActive=\"active\">Sub Category List</ion-item> -->\n      <ion-item [routerLink]=\"['/admin/product-add']\" routerLinkActive=\"active\">Product Add</ion-item>\n      <ion-item [routerLink]=\"['/admin/product-list']\" routerLinkActive=\"active\">Product List</ion-item>\n      <!-- <ion-item [routerLink]=\"['/admin/group-add']\" routerLinkActive=\"active\">Group Add</ion-item>\n      <ion-item [routerLink]=\"['/admin/group-list']\" routerLinkActive=\"active\">Group List</ion-item>\n      <ion-item [routerLink]=\"['/admin/product-add-group']\" routerLinkActive=\"active\">Product Add To Group</ion-item> -->\n     <!--  <ion-item [routerLink]=\"['/admin/profile']\" routerLinkActive=\"active\">My Profile</ion-item> -->\n      <ion-item (click)=\"logout()\" style=\"cursor: pointer;\" routerLinkActive=\"active\">Logout</ion-item>\n    </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet [animated]=\"animated\" id=\"main\"></ion-router-outlet>");

/***/ }),

/***/ "2V/l":
/*!************************************************************************!*\
  !*** ./src/app/include/admin/admin-header/admin-header.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f7fb;\n  cursor: default;\n  color: #737373;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  border: none;\n}\na {\n  text-decoration: none;\n  outline: none;\n  color: #c6223e;\n}\na:hover {\n  text-decoration: none;\n  color: #737373;\n}\na:focus {\n  text-decoration: none;\n}\np {\n  margin-bottom: 20px;\n}\nh5, .h5 {\n  margin-bottom: 14px;\n}\nh6, .h6 {\n  margin-bottom: 14px;\n  color: #444444;\n  font-weight: 500;\n}\nstrong {\n  font-weight: 500;\n}\n.btn {\n  text-transform: uppercase;\n  border-radius: 30px;\n  font-weight: 700;\n  padding: 10px 15px;\n}\n.btn-group-sm > .btn, .btn-sm {\n  padding: 8px 15px;\n}\n.btn-group-xs > .btn, .btn-xs {\n  padding: 8px 15px;\n  font-size: 10px;\n  padding: 4px 10px;\n}\n.btn-primary {\n  border-color: #ed1c24;\n  background-color: #ed1c24;\n  color: #fff;\n}\n.btn-primary:hover, .btn-primary:active, .btn-primary:active:hover, .btn-primary.focus, .btn-primary:focus {\n  border-color: #262262;\n  background-color: #262262;\n  color: #fff;\n}\n.btn-secondary {\n  border-color: #2bc7e0;\n  background-color: #2bc7e0;\n  color: #fff;\n}\n.btn-secondary:hover, .btn-secondary:active, .btn-secondary:active:hover, .btn-secondary.focus, .btn-secondary:focus {\n  border-color: #414141;\n  background-color: #414141;\n  color: #fff;\n}\n.btn-default {\n  border-color: #c6223e;\n  background-color: transparent;\n  color: #c6223e;\n}\n.btn-default:hover, .btn-default:active, .btn-default:active:hover, .btn-default.focus, .btn-default:focus {\n  border-color: #c6223e;\n  background-color: #c6223e;\n  color: #fff;\n}\n.btn-more {\n  color: #262262;\n  font-size: 14px;\n  font-weight: 400;\n}\n.btn-more .fa {\n  color: #ed1c24;\n  margin-left: 5px;\n}\n.btn-more:hover {\n  color: #ed1c24;\n}\n.btn-link {\n  text-decoration: underline;\n  color: #c6223e;\n}\n.btn-link:hover {\n  color: #737373;\n  text-decoration: none;\n}\n.btn-minwidth {\n  min-width: 125px;\n}\n.btn-group2 {\n  margin: 0 -3px;\n}\n.btn-group2 a,\n.btn-group2 .btn {\n  margin: 3px;\n}\n.input-group .btn {\n  border-radius: 4px;\n}\n.form-control {\n  height: 42px;\n  box-shadow: none;\n  border-color: #929292;\n  background-color: transparent;\n  border-radius: 0;\n}\nselect.form-control {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  background-image: url(/assets/images/down-arrow.png);\n  background-position: right 10px center;\n  background-repeat: no-repeat;\n  padding-right: 20px !important;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.input-group-addon {\n  border-radius: 0;\n}\n.req {\n  color: #ed1c24;\n}\nlabel {\n  font-weight: 300;\n}\n.checkbox-inline, .radio-inline {\n  margin: 0 10px 0 0 !important;\n}\n.no-padding {\n  padding: 0 !important;\n}\n.no-margin {\n  margin: 0 !important;\n}\n.no-border {\n  border: none !important;\n}\n.padding-15 {\n  padding: 15px !important;\n}\n.margin-bottom0 {\n  margin-bottom: 0 !important;\n}\n.margin-bottom5 {\n  margin-bottom: 5px !important;\n}\n.margin-bottom10 {\n  margin-bottom: 10px !important;\n}\n.margin-bottom15 {\n  margin-bottom: 15px !important;\n}\n.margin-bottom20 {\n  margin-bottom: 20px !important;\n}\n.margin-bottom25 {\n  margin-bottom: 25px !important;\n}\n.margin-bottom30 {\n  margin-bottom: 30px !important;\n}\n.margin-bottom50 {\n  margin-bottom: 50px !important;\n}\n/*Header CSS\n--------------------------------------------------------------------------------------------------*/\n.header {\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n.logo {\n  float: left;\n  padding: 23px 48px;\n  width: 278px;\n  text-align: center;\n  background: #fff;\n  box-shadow: 0 -5px 8px rgba(0, 0, 0, 0.3);\n}\n.header-search-box {\n  float: left;\n  padding: 20px 30px;\n  width: 445px;\n}\n.header-search-box .btn-default {\n  background: none;\n  color: #c6223e;\n  border-color: #d3d3d3;\n}\n.header-right {\n  float: right;\n  padding-right: 30px;\n  display: inline-table;\n}\nul.top-link {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  float: left;\n}\nul.top-link li.col {\n  padding: 0 20px;\n  border-left: solid 1px #d3d3d3;\n  height: 83px;\n  display: table-cell;\n  vertical-align: middle;\n}\nul.top-link li.col:first-child {\n  border-left: none;\n}\nul.top-link li.col.linkdb {\n  max-width: 125px;\n  text-align: center;\n}\nul.top-link li.col.linkdb a {\n  font-weight: 400;\n  color: #323232;\n  line-height: 1;\n}\nul.top-link li.col.linkdb a:hover {\n  color: #c6223e;\n}\n.userlink {\n  position: relative;\n  z-index: 999;\n}\n.userlink .thumb {\n  float: left;\n  border-radius: 100%;\n  margin: 10px 10px 0 0;\n}\n.userlink > a {\n  color: #ed1c24;\n}\n.userlink > a .fa-angle-down {\n  margin-left: 4px;\n  font-size: 12px;\n}\n.userlink > a .fa-user {\n  margin-right: 4px;\n  font-size: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  border: solid 2px #dedede;\n  text-align: center;\n  line-height: 30px;\n}\n.userlink > a:hover {\n  color: #262262;\n}\nul.dropdown-menu {\n  right: 0;\n  left: auto;\n  border-radius: 0;\n  padding: 10px;\n  margin: 0;\n  list-style: none;\n  background: #ffffff;\n  border: none;\n  display: none;\n  box-shadow: 5px 5px 0 rgba(161, 161, 161, 0.3);\n}\nul.dropdown-menu li {\n  border-top: solid 1px #e7e7e7;\n}\nul.dropdown-menu li:first-child {\n  border-top: none;\n}\nul.dropdown-menu li a {\n  padding: 8px 0;\n  color: #979797;\n  display: block;\n}\nul.dropdown-menu li a .fa {\n  margin-right: 3px;\n}\nul.dropdown-menu li a:hover {\n  background: none;\n  color: #262262;\n}\n.btn, .dashboard-link a {\n  transition: all 200ms linear;\n}\n.welcome_box {\n  display: inline-block;\n  padding: 28px 32px;\n}\n.welcome_box h1 {\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 24px;\n  font-weight: 600;\n}\n.site-content-contain-wrapper {\n  position: relative;\n  min-height: 400px;\n  overflow: hidden;\n}\n.site-content-contain-wrapper .left-panelbg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 278px;\n  background: #262262;\n  z-index: 0;\n}\n#left-panel {\n  width: 278px;\n  position: relative;\n  z-index: 9;\n  float: left;\n}\n#left-panel .btn-leftmenuclose {\n  width: 40px;\n  height: 40px;\n  color: #fff;\n  background: #ed1c24;\n  line-height: 40px;\n  text-align: center;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  display: none;\n}\n.leftmenu ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.leftmenu ul li {\n  margin-bottom: 1px;\n}\n.leftmenu ul li a {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 300;\n  padding: 10px 15px 10px 60px;\n  display: block;\n  position: relative;\n  border-left: solid 3px transparent;\n}\n.leftmenu ul li a .fa {\n  position: absolute;\n  left: 34px;\n  top: 14px;\n  font-size: 14px;\n}\n.leftmenu ul li a:hover,\n.leftmenu ul li:hover > a,\n.leftmenu ul li.active > a {\n  background-color: #ed1c24;\n  border-color: #fff;\n}\n.leftmenu ul li .icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.leftmenu ul ul li a {\n  padding-left: 72px;\n  color: #fff;\n  font-size: 13px;\n}\n.leftmenu ul ul li a:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 60px;\n}\n.leftmenu ul ul li a:hover,\n.leftmenu ul ul li.active > a {\n  background-color: transparent;\n  border-color: transparent;\n  color: #ed1c24;\n}\n.left-panelbg, #left-panel {\n  margin-left: -278px;\n}\n.leftmenuopen .left-panelbg,\n.leftmenuopen #left-panel {\n  margin: 0;\n}\n.leftmenuopen #main {\n  width: calc(100% - 278px);\n}\n.btn-leftmenu {\n  position: absolute;\n  left: 10px;\n  top: 22px;\n  border-radius: 5px;\n  padding: 8px;\n  font-weight: 400;\n  display: none;\n  width: 38px;\n  text-align: center;\n}\n.btn-leftmenu:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n}\n.btn-leftmenu.on:before {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUFLLFVBQUE7RUFBVyxTQUFBO0VBQVUseUJBQUE7RUFBMEIsZUFBQTtFQUFnQixjQUFBO0VBQWUsZ0JBQUE7RUFBaUIsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixpQ0FBQTtBQVdySTtBQVZBO0VBQUksZUFBQTtFQUFnQixZQUFBO0FBZXBCO0FBZEE7RUFBRSxxQkFBQTtFQUFzQixhQUFBO0VBQWMsY0FBQTtBQW9CdEM7QUFuQkE7RUFBUSxxQkFBQTtFQUFzQixjQUFBO0FBd0I5QjtBQXZCQTtFQUFRLHFCQUFBO0FBMkJSO0FBMUJBO0VBQUUsbUJBQUE7QUE4QkY7QUE3QkE7RUFBUSxtQkFBQTtBQWlDUjtBQWhDQTtFQUFRLG1CQUFBO0VBQW9CLGNBQUE7RUFBZSxnQkFBQTtBQXNDM0M7QUFyQ0E7RUFBTyxnQkFBQTtBQXlDUDtBQXhDQTtFQUFLLHlCQUFBO0VBQTBCLG1CQUFBO0VBQW9CLGdCQUFBO0VBQWlCLGtCQUFBO0FBK0NwRTtBQTlDQTtFQUE4QixpQkFBQTtBQWtEOUI7QUFqREE7RUFBOEIsaUJBQUE7RUFBa0IsZUFBQTtFQUFnQixpQkFBQTtBQXVEaEU7QUF0REE7RUFBYSxxQkFBQTtFQUFzQix5QkFBQTtFQUEwQixXQUFBO0FBNEQ3RDtBQTNEQTtFQUEyRyxxQkFBQTtFQUFzQix5QkFBQTtFQUEwQixXQUFBO0FBaUUzSjtBQWhFQTtFQUFlLHFCQUFBO0VBQXNCLHlCQUFBO0VBQTBCLFdBQUE7QUFzRS9EO0FBckVBO0VBQXFILHFCQUFBO0VBQXNCLHlCQUFBO0VBQTBCLFdBQUE7QUEyRXJLO0FBMUVBO0VBQWEscUJBQUE7RUFBc0IsNkJBQUE7RUFBOEIsY0FBQTtBQWdGakU7QUEvRUE7RUFBMkcscUJBQUE7RUFBc0IseUJBQUE7RUFBMEIsV0FBQTtBQXFGM0o7QUFwRkE7RUFBVSxj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ZUFBQTtBQTBWcEQ7QUF6VkE7RUFBNEIsMEJBQUE7RUFBMkIsWUFBQTtFQUFpQixrQkFBQTtFQUFtQixTQUFBO0VBQVUsVUFBQTtBQWlXckc7QUFoV0E7O0VBQzhCLDZCQUFBO0VBQThCLHlCQUFBO0VBQTBCLGNBQUE7QUFzV3RGO0FBcFdBO0VBQTJCLG1CQUFBO0FBd1czQjtBQXRXQTs7RUFDMEIsU0FBQTtBQTBXMUI7QUF6V0E7RUFBb0IseUJBQUE7QUE2V3BCO0FBNVdBO0VBQWMsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLFNBQUE7RUFBVSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsZ0JBQUE7RUFBaUIsYUFBQTtFQUFjLFdBQUE7RUFBWSxrQkFBQTtBQXdYakk7QUF2WEE7RUFBcUIsMEJBQUE7RUFBMkIsWUFBQTtBQTRYaEQ7QUEzWEE7RUFBd0IsWUFBQTtBQStYeEIiLCJmaWxlIjoiYWRtaW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmYjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogIzczNzM3MztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjYzYyMjNlO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzczNzM3Mztcbn1cblxuYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmg1LCAuaDUge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG5oNiwgLmg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5idG4tZ3JvdXAtc20gPiAuYnRuLCAuYnRuLXNtIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG59XG5cbi5idG4tZ3JvdXAteHMgPiAuYnRuLCAuYnRuLXhzIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogI2VkMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OmFjdGl2ZTpob3ZlciwgLmJ0bi1wcmltYXJ5LmZvY3VzLCAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMyNjIyNjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjIyNjI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzJiYzdlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiYzdlMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyLCAuYnRuLXNlY29uZGFyeTphY3RpdmUsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZTpob3ZlciwgLmJ0bi1zZWNvbmRhcnkuZm9jdXMsIC5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDE0MTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1kZWZhdWx0IHtcbiAgYm9yZGVyLWNvbG9yOiAjYzYyMjNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjNjIyM2U7XG59XG5cbi5idG4tZGVmYXVsdDpob3ZlciwgLmJ0bi1kZWZhdWx0OmFjdGl2ZSwgLmJ0bi1kZWZhdWx0OmFjdGl2ZTpob3ZlciwgLmJ0bi1kZWZhdWx0LmZvY3VzLCAuYnRuLWRlZmF1bHQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNjNjIyM2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjIyM2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLW1vcmUge1xuICBjb2xvcjogIzI2MjI2MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYnRuLW1vcmUgLmZhIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5idG4tbW9yZTpob3ZlciB7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4uYnRuLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICNjNjIyM2U7XG59XG5cbi5idG4tbGluazpob3ZlciB7XG4gIGNvbG9yOiAjNzM3MzczO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG4tbWlud2lkdGgge1xuICBtaW4td2lkdGg6IDEyNXB4O1xufVxuXG4uYnRuLWdyb3VwMiB7XG4gIG1hcmdpbjogMCAtM3B4O1xufVxuXG4uYnRuLWdyb3VwMiBhLFxuLmJ0bi1ncm91cDIgLmJ0biB7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uaW5wdXQtZ3JvdXAgLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDJweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjOTI5MjkyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtby1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZG93bi1hcnJvdy5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMHB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5yZXEge1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2hlY2tib3gtaW5saW5lLCAucmFkaW8taW5saW5lIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uby1ib3JkZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmctMTUge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tYm90dG9tMCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b201IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tYm90dG9tMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tYm90dG9tMTUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tYm90dG9tMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tYm90dG9tMjUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tYm90dG9tMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tYm90dG9tNTAge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qSGVhZGVyIENTU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAyM3B4IDQ4cHg7XG4gIHdpZHRoOiAyNzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIC01cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmhlYWRlci1zZWFyY2gtYm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgd2lkdGg6IDQ0NXB4O1xufVxuXG4uaGVhZGVyLXNlYXJjaC1ib3ggLmJ0bi1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNjNjIyM2U7XG4gIGJvcmRlci1jb2xvcjogI2QzZDNkMztcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xufVxuXG51bC50b3AtbGluayB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbnVsLnRvcC1saW5rIGxpLmNvbCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZDNkM2QzO1xuICBoZWlnaHQ6IDgzcHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnVsLnRvcC1saW5rIGxpLmNvbDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG51bC50b3AtbGluayBsaS5jb2wubGlua2RiIHtcbiAgbWF4LXdpZHRoOiAxMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG51bC50b3AtbGluayBsaS5jb2wubGlua2RiIGEge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbnVsLnRvcC1saW5rIGxpLmNvbC5saW5rZGIgYTpob3ZlciB7XG4gIGNvbG9yOiAjYzYyMjNlO1xufVxuXG4udXNlcmxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnVzZXJsaW5rIC50aHVtYiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG59XG5cbi51c2VybGluayA+IGEge1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLnVzZXJsaW5rID4gYSAuZmEtYW5nbGUtZG93biB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnVzZXJsaW5rID4gYSAuZmEtdXNlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMnB4ICNkZWRlZGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi51c2VybGluayA+IGE6aG92ZXIge1xuICBjb2xvcjogIzI2MjI2Mjtcbn1cblxudWwuZHJvcGRvd24tbWVudSB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDAgcmdiYSgxNjEsIDE2MSwgMTYxLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggMCByZ2JhKDE2MSwgMTYxLCAxNjEsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMCByZ2JhKDE2MSwgMTYxLCAxNjEsIDAuMyk7XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUgbGkge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2U3ZTdlNztcbn1cblxudWwuZHJvcGRvd24tbWVudSBsaTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjb2xvcjogIzk3OTc5NztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUgbGkgYSAuZmEge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxudWwuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMyNjIyNjI7XG59XG5cbi5idG4sIC5kYXNoYm9hcmQtbGluayBhIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xufVxuXG4ud2VsY29tZV9ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDI4cHggMzJweDtcbn1cblxuLndlbGNvbWVfYm94IGgxIHtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDAgMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2l0ZS1jb250ZW50LWNvbnRhaW4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaXRlLWNvbnRlbnQtY29udGFpbi13cmFwcGVyIC5sZWZ0LXBhbmVsYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjc4cHg7XG4gIGJhY2tncm91bmQ6ICMyNjIyNjI7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNsZWZ0LXBhbmVsIHtcbiAgd2lkdGg6IDI3OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jbGVmdC1wYW5lbCAuYnRuLWxlZnRtZW51Y2xvc2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VkMWMyNDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZWZ0bWVudSB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxlZnRtZW51IHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4ubGVmdG1lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XG59XG5cbi5sZWZ0bWVudSB1bCBsaSBhIC5mYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzRweDtcbiAgdG9wOiAxNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sZWZ0bWVudSB1bCBsaSBhOmhvdmVyLFxuLmxlZnRtZW51IHVsIGxpOmhvdmVyID4gYSxcbi5sZWZ0bWVudSB1bCBsaS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ubGVmdG1lbnUgdWwgbGkgLmljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmxlZnRtZW51IHVsIHVsIGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDcycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5sZWZ0bWVudSB1bCB1bCBsaSBhOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiA2MHB4O1xufVxuXG4ubGVmdG1lbnUgdWwgdWwgbGkgYTpob3Zlcixcbi5sZWZ0bWVudSB1bCB1bCBsaS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4ubGVmdC1wYW5lbGJnLCAjbGVmdC1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjc4cHg7XG59XG5cbi5sZWZ0bWVudW9wZW4gLmxlZnQtcGFuZWxiZyxcbi5sZWZ0bWVudW9wZW4gI2xlZnQtcGFuZWwge1xuICBtYXJnaW46IDA7XG59XG5cbi5sZWZ0bWVudW9wZW4gI21haW4ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjc4cHgpO1xufVxuXG4uYnRuLWxlZnRtZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWxlZnRtZW51OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwi74OJXCI7XG59XG5cbi5idG4tbGVmdG1lbnUub246YmVmb3JlIHtcbiAgY29udGVudDogXCLvgI1cIjtcbn0iXX0= */");

/***/ }),

/***/ "4xsF":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/seller/seller-header/seller-header.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Seller Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "5ULd":
/*!*********************************************************************!*\
  !*** ./src/app/include/user/user-header/user-header.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6UaG":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header_area clearfix\">\n  <div class=\"header_top clearfix\">\n    <div class=\"container clearfix\">\n      <div class=\"header_top_left clearfix\">\n        <div class=\"logo\" [routerLink]=\"['/']\"><img src=\"assets/images/alexein.png\" alt=\"alexein\" title=\"\"></div>\n      </div>\n      <div class=\"header_top_right clearfix\">\n        <div class=\"search_bar\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for anything...\">\n          <button class=\"btn btn-primary\">search</button>\n        </div>\n        <div class=\"register_box\" *ngIf=\"!buyerId\">\n          <img src=\"assets/images/user.png\" alt=\"user\" title=\"\" class=\"icon\">\n          <p><a [routerLink]=\"['/registration']\" routerLinkActive=\"active\">Register</a></p>\n          <p>or <a [routerLink]=\"['/login']\" routerLinkActive=\"active\" class=\"active\">Log In</a></p>\n        </div>\n        <div class=\"register_box\" *ngIf=\"buyerId\">\n          <img src=\"assets/images/user.png\" alt=\"user\" title=\"\" class=\"icon\">\n          <p><a [routerLink]=\"['/user/profile']\" routerLinkActive=\"active\">{{buyerData.name}}'s Profile</a></p>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"header_bottom clearfix\">\n    <div class=\"container clearfix\">\n      <div class=\"logo\" [routerLink]=\"['/']\">\n        <img src=\"assets/images/flex-logo.png\" alt=\"\">\n      </div>\n      <a href=\"javascript:void(0);\" class=\"all_category dropdown-toggle\" data-toggle=\"dropdown\">\n        All Categories\n        <img src=\"assets/images/nav-bar.png\" alt=\"nav bar\" class=\"icon\" title=\"\">\n      </a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Category One</a>\n        <a class=\"dropdown-item\" href=\"#\">Category Two</a>\n        <a class=\"dropdown-item\" href=\"#\">Category Three</a>\n      </div>\n      <nav class=\"menubox\">\n        <a class=\"btn-topmenu d-lg-none\" href=\"javascript:void(0)\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n        <div class=\"top-menu\">\n          <a class=\"btn-topmenu-close d-lg-none\" href=\"javascript:void(0)\"><i class=\"fa fa-times\"\n              aria-hidden=\"true\"></i></a>\n          <ul>\n            <li routerLinkActive=\"current-menu-item\"><a [routerLink]=\"['/live-auctions']\" routerLinkActive=\"active\">LIVE AUCTIONS</a></li>\n            <li><a href=\"#\">DIY AUCTIONS</a></li>\n            <li *ngIf=\"!buyerId\" routerLinkActive=\"current-menu-item\"><a [routerLink]=\"['/login']\" routerLinkActive=\"active\">BUYERS</a></li>\n             <li *ngIf=\"buyerId\" routerLinkActive=\"current-menu-item\"><a [routerLink]=\"['/user/dashboard']\" routerLinkActive=\"active\" title=\"Buyer Dashboard\">Dashboard</a></li>\n            <li *ngIf=\"!sellerId\" routerLinkActive=\"current-menu-item\"><a [routerLink]=\"['/seller-login']\" routerLinkActive=\"active\">sell with us</a></li>\n            <li *ngIf=\"sellerId\" routerLinkActive=\"current-menu-item\"><a [routerLink]=\"['/seller/dashboard']\" routerLinkActive=\"active\">seller Dashboard</a></li>\n\n            <li><a href=\"#\">PAST AUCTIONS</a></li>\n            <li routerLinkActive=\"current-menu-item\"><a [routerLink]=\"['/faq']\" routerLinkActive=\"active\">FAQ</a></li>\n            <li routerLinkActive=\"current-menu-item\"><a [routerLink]=\"['/contact-us']\" routerLinkActive=\"active\">CONTACT</a></li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</header>");

/***/ }),

/***/ "6zAU":
/*!****************************************************************************!*\
  !*** ./src/app/containers/default-layout/user-default-layout.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserDefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefaultLayoutComponent", function() { return UserDefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-default-layout.component.html */ "aQuj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");





let UserDefaultLayoutComponent = class UserDefaultLayoutComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.sidebarMinimized = false;
        this.animated = false;
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create().then(res => {
                this.getUserDetails();
            });
        });
    }
    getUserDetails() {
        this.storage.get('auctionUser').then(response => {
            if (response != null) {
                //console.log(response.response_data);
                if (response.response_data.role_text == "Buyer") {
                    this.router.navigate(['/user/dashboard']);
                }
            }
            else {
                this.router.navigate(['/login']);
            }
        }, err => {
            this.router.navigate(['/login']);
        });
    }
    logout() {
        //alert(1);
        this.storage.remove("auctionUser");
        //this.userDetails = null;
        this.router.navigate(['/']);
        //this.menu.close();
    }
};
UserDefaultLayoutComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserDefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-app-dashboard',
        template: _raw_loader_user_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], UserDefaultLayoutComponent);



/***/ }),

/***/ "84/b":
/*!*******************************************************************!*\
  !*** ./src/app/include/user/user-footer/user-footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFooterComponent", function() { return UserFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-footer.component.html */ "oyan");
/* harmony import */ var _user_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-footer.component.scss */ "SfqJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserFooterComponent = class UserFooterComponent {
    constructor() { }
    ngOnInit() { }
};
UserFooterComponent.ctorParameters = () => [];
UserFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-footer',
        template: _raw_loader_user_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserFooterComponent);



/***/ }),

/***/ "Arpp":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!------ footer area start ------>\n<footer class=\"footer_main_area\">\n\n  <div class=\"footer_top\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"footer_top_box\">\n            <div class=\"media\">\n              <img class=\"img-icon\" src=\"assets/images/phone.png\" alt=\"phone\" title=\"\">\n              <div class=\"media-body\">\n                <h3>call us:</h3>\n                <a href=\"tel:{{setData?.phone_number}}\">{{setData?.phone_number}}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"footer_top_box pl-5\">\n            <div class=\"media\">\n              <img class=\"img-icon\" src=\"assets/images/email.png\" alt=\"email\" title=\"\">\n              <div class=\"media-body\">\n                <h3>emall us:</h3>\n                <a href=\"mailto:{{setData?.email_address}}\">{{setData?.email_address}}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"footer_social\">\n            <ul>\n              <li><a href=\"{{setData?.facebook}}\" target=\"_blank\"><img src=\"assets/images/facebook.png\" alt=\"facebook\" title=\"\"></a></li>\n              <li><a href=\"{{setData?.twitter}}\" target=\"_blank\"><img src=\"assets/images/twitter.png\" alt=\"twitter\" title=\"\"></a></li>\n              <li><a href=\"{{setData?.instagram}}\" target=\"_blank\"><img src=\"assets/images/instragram.png\" alt=\"instragram\" title=\"\"></a>\n              </li>\n              <li><a href=\"{{setData?.linkedend}}\" target=\"_blank\"><img src=\"assets/images/linkedin.png\" alt=\"linkedin\" title=\"\"></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-4\">\n          <div class=\"footer_logo\">\n            <img src=\"assets/images/footer-logo.png\" alt=\"footer logo\" title=\"\">\n          </div>\n          <div class=\"footer_store_box\">\n            <ul>\n              <li>\n                <a href=\"#\" target=\"_blank\"><img src=\"assets/images/app-store.png\" alt=\"app store\" title=\"\"></a>\n              </li>\n              <li>\n                <a href=\"#\" target=\"_blank\"><img src=\"assets/images/google-store.png\" alt=\"google store\" title=\"\"></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-lg-8\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-4\">\n              <div class=\"footer\">\n                <h4>Quick links</h4>\n                <ul>\n                  <li><a [routerLink]=\"['/live-auctions']\" routerLinkActive=\"active\" >Live Auctions</a></li>\n                  <li><a href=\"#\">AIY Auctions</a></li>\n                  <li><a href=\"#\">Buyers</a></li>\n                  <li><a href=\"#\">Past Auctions</a></li>\n                  <li><a [routerLink]=\"['/faq']\">Faq</a></li>\n                  <li><a [routerLink]=\"['/contact-us']\">Contact</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"footer\">\n                <h4>AUction LOCATIONS</h4>\n                <ul>\n                  <li><a href=\"#\">Columbus</a></li>\n                  <li><a href=\"#\">Dayton</a></li>\n                  <li><a href=\"#\">Chillicothe</a></li>\n                  <li><a href=\"#\">Elyria</a></li>\n                  <li><a href=\"#\">Mansfield</a></li>\n                  <li><a href=\"#\">West Union</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"footer\">\n                <h4>Live Auctions</h4>\n                <ul>\n                  <li><a href=\"#\">Hyundai Verna</a></li>\n                  <li><a href=\"#\">Apple iPhone 12 Pro 128 GB</a></li>\n                  <li><a href=\"#\">Royal Enfield Bullet 350</a></li>\n                  <li><a href=\"#\">Nikon D3500 DSLR Camera</a></li>\n                  <li><a href=\"#\">TCL 138.71 cm</a></li>\n                  <li><a href=\"#\">Sony PS4 1TB Slim Console</a></li>\n                </ul>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"copyright_area\">\n    <div class=\"container\">\n      <div class=\"copyright\">\n        <p>Copyright © 2021 <a href=\"/home\">Alexein</a>. All rights reserved.</p>\n      </div>\n    </div>\n  </div>\n</footer>\n<!------ footer area stop ------>");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, image_path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image_path", function() { return image_path; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'http://18.189.157.72/v1/index.php/api/'
};
const image_path = 'http://18.189.157.72/v1/public/upload/';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cv3j":
/*!**************************************************************************!*\
  !*** ./src/app/include/admin/admin-side-nav/admin-side-nav.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSideNavComponent", function() { return AdminSideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_side_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-side-nav.component.html */ "dvqD");
/* harmony import */ var _admin_side_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-side-nav.component.scss */ "s1PP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminSideNavComponent = class AdminSideNavComponent {
    constructor() { }
    ngOnInit() { }
};
AdminSideNavComponent.ctorParameters = () => [];
AdminSideNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-side-nav',
        template: _raw_loader_admin_side_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_side_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminSideNavComponent);



/***/ }),

/***/ "DSeJ":
/*!***************************************************************************!*\
  !*** ./src/app/include/seller/seller-header/seller-header.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f7fb;\n  cursor: default;\n  color: #737373;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n}\nimg {\n  max-width: 100%;\n  border: none;\n}\na {\n  text-decoration: none;\n  outline: none;\n  color: #c6223e;\n}\na:hover {\n  text-decoration: none;\n  color: #737373;\n}\na:focus {\n  text-decoration: none;\n}\np {\n  margin-bottom: 20px;\n}\nh5, .h5 {\n  margin-bottom: 14px;\n}\nh6, .h6 {\n  margin-bottom: 14px;\n  color: #444444;\n  font-weight: 500;\n}\nstrong {\n  font-weight: 500;\n}\n.btn {\n  text-transform: uppercase;\n  border-radius: 30px;\n  font-weight: 700;\n  padding: 10px 15px;\n}\n.btn-group-sm > .btn, .btn-sm {\n  padding: 8px 15px;\n}\n.btn-group-xs > .btn, .btn-xs {\n  padding: 8px 15px;\n  font-size: 10px;\n  padding: 4px 10px;\n}\n.btn-primary {\n  border-color: #ed1c24;\n  background-color: #ed1c24;\n  color: #fff;\n}\n.btn-primary:hover, .btn-primary:active, .btn-primary:active:hover, .btn-primary.focus, .btn-primary:focus {\n  border-color: #262262;\n  background-color: #262262;\n  color: #fff;\n}\n.btn-secondary {\n  border-color: #2bc7e0;\n  background-color: #2bc7e0;\n  color: #fff;\n}\n.btn-secondary:hover, .btn-secondary:active, .btn-secondary:active:hover, .btn-secondary.focus, .btn-secondary:focus {\n  border-color: #414141;\n  background-color: #414141;\n  color: #fff;\n}\n.btn-default {\n  border-color: #c6223e;\n  background-color: transparent;\n  color: #c6223e;\n}\n.btn-default:hover, .btn-default:active, .btn-default:active:hover, .btn-default.focus, .btn-default:focus {\n  border-color: #c6223e;\n  background-color: #c6223e;\n  color: #fff;\n}\n.btn-more {\n  color: #262262;\n  font-size: 14px;\n  font-weight: 400;\n}\n.btn-more .fa {\n  color: #ed1c24;\n  margin-left: 5px;\n}\n.btn-more:hover {\n  color: #ed1c24;\n}\n.btn-link {\n  text-decoration: underline;\n  color: #c6223e;\n}\n.btn-link:hover {\n  color: #737373;\n  text-decoration: none;\n}\n.btn-minwidth {\n  min-width: 125px;\n}\n.btn-group2 {\n  margin: 0 -3px;\n}\n.btn-group2 a,\n.btn-group2 .btn {\n  margin: 3px;\n}\n.input-group .btn {\n  border-radius: 4px;\n}\n.form-control {\n  height: 42px;\n  box-shadow: none;\n  border-color: #929292;\n  background-color: transparent;\n  border-radius: 0;\n}\nselect.form-control {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  background-image: url(/assets/images/down-arrow.png);\n  background-position: right 10px center;\n  background-repeat: no-repeat;\n  padding-right: 20px !important;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.input-group-addon {\n  border-radius: 0;\n}\n.req {\n  color: #ed1c24;\n}\nlabel {\n  font-weight: 300;\n}\n.checkbox-inline, .radio-inline {\n  margin: 0 10px 0 0 !important;\n}\n.no-padding {\n  padding: 0 !important;\n}\n.no-margin {\n  margin: 0 !important;\n}\n.no-border {\n  border: none !important;\n}\n.padding-15 {\n  padding: 15px !important;\n}\n.margin-bottom0 {\n  margin-bottom: 0 !important;\n}\n.margin-bottom5 {\n  margin-bottom: 5px !important;\n}\n.margin-bottom10 {\n  margin-bottom: 10px !important;\n}\n.margin-bottom15 {\n  margin-bottom: 15px !important;\n}\n.margin-bottom20 {\n  margin-bottom: 20px !important;\n}\n.margin-bottom25 {\n  margin-bottom: 25px !important;\n}\n.margin-bottom30 {\n  margin-bottom: 30px !important;\n}\n.margin-bottom50 {\n  margin-bottom: 50px !important;\n}\n/*Header CSS\n--------------------------------------------------------------------------------------------------*/\n.header {\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  position: relative;\n  z-index: 999;\n}\n.logo {\n  float: left;\n  padding: 23px 48px;\n  width: 278px;\n  text-align: center;\n  background: #fff;\n  box-shadow: 0 -5px 8px rgba(0, 0, 0, 0.3);\n}\n.header-search-box {\n  float: left;\n  padding: 20px 30px;\n  width: 445px;\n}\n.header-search-box .btn-default {\n  background: none;\n  color: #c6223e;\n  border-color: #d3d3d3;\n}\n.header-right {\n  float: right;\n  padding-right: 30px;\n  display: inline-table;\n}\nul.top-link {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  float: left;\n}\nul.top-link li.col {\n  padding: 0 20px;\n  border-left: solid 1px #d3d3d3;\n  height: 83px;\n  display: table-cell;\n  vertical-align: middle;\n}\nul.top-link li.col:first-child {\n  border-left: none;\n}\nul.top-link li.col.linkdb {\n  max-width: 125px;\n  text-align: center;\n}\nul.top-link li.col.linkdb a {\n  font-weight: 400;\n  color: #323232;\n  line-height: 1;\n}\nul.top-link li.col.linkdb a:hover {\n  color: #c6223e;\n}\n.userlink {\n  position: relative;\n  z-index: 999;\n}\n.userlink .thumb {\n  float: left;\n  border-radius: 100%;\n  margin: 10px 10px 0 0;\n}\n.userlink > a {\n  color: #ed1c24;\n}\n.userlink > a .fa-angle-down {\n  margin-left: 4px;\n  font-size: 12px;\n}\n.userlink > a .fa-user {\n  margin-right: 4px;\n  font-size: 12px;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  border: solid 2px #dedede;\n  text-align: center;\n  line-height: 30px;\n}\n.userlink > a:hover {\n  color: #262262;\n}\nul.dropdown-menu {\n  right: 0;\n  left: auto;\n  border-radius: 0;\n  padding: 10px;\n  margin: 0;\n  list-style: none;\n  background: #ffffff;\n  border: none;\n  display: none;\n  box-shadow: 5px 5px 0 rgba(161, 161, 161, 0.3);\n}\nul.dropdown-menu li {\n  border-top: solid 1px #e7e7e7;\n}\nul.dropdown-menu li:first-child {\n  border-top: none;\n}\nul.dropdown-menu li a {\n  padding: 8px 0;\n  color: #979797;\n  display: block;\n}\nul.dropdown-menu li a .fa {\n  margin-right: 3px;\n}\nul.dropdown-menu li a:hover {\n  background: none;\n  color: #262262;\n}\n.btn, .dashboard-link a {\n  transition: all 200ms linear;\n}\n.welcome_box {\n  display: inline-block;\n  padding: 28px 32px;\n}\n.welcome_box h1 {\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 24px;\n  font-weight: 600;\n}\n.site-content-contain-wrapper {\n  position: relative;\n  min-height: 400px;\n  overflow: hidden;\n}\n.site-content-contain-wrapper .left-panelbg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 278px;\n  background: #262262;\n  z-index: 0;\n}\n#left-panel {\n  width: 278px;\n  position: relative;\n  z-index: 9;\n  float: left;\n}\n#left-panel .btn-leftmenuclose {\n  width: 40px;\n  height: 40px;\n  color: #fff;\n  background: #ed1c24;\n  line-height: 40px;\n  text-align: center;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  display: none;\n}\n.leftmenu ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.leftmenu ul li {\n  margin-bottom: 1px;\n}\n.leftmenu ul li a {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 300;\n  padding: 10px 15px 10px 60px;\n  display: block;\n  position: relative;\n  border-left: solid 3px transparent;\n}\n.leftmenu ul li a .fa {\n  position: absolute;\n  left: 34px;\n  top: 14px;\n  font-size: 14px;\n}\n.leftmenu ul li a:hover,\n.leftmenu ul li:hover > a,\n.leftmenu ul li.active > a {\n  background-color: #ed1c24;\n  border-color: #fff;\n}\n.leftmenu ul li .icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.leftmenu ul ul li a {\n  padding-left: 72px;\n  color: #fff;\n  font-size: 13px;\n}\n.leftmenu ul ul li a:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 60px;\n}\n.leftmenu ul ul li a:hover,\n.leftmenu ul ul li.active > a {\n  background-color: transparent;\n  border-color: transparent;\n  color: #ed1c24;\n}\n.left-panelbg, #left-panel {\n  margin-left: -278px;\n}\n.leftmenuopen .left-panelbg,\n.leftmenuopen #left-panel {\n  margin: 0;\n}\n.leftmenuopen #main {\n  width: calc(100% - 278px);\n}\n.btn-leftmenu {\n  position: absolute;\n  left: 10px;\n  top: 22px;\n  border-radius: 5px;\n  padding: 8px;\n  font-weight: 400;\n  display: none;\n  width: 38px;\n  text-align: center;\n}\n.btn-leftmenu:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n}\n.btn-leftmenu.on:before {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VsbGVyLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFBSyxVQUFBO0VBQVcsU0FBQTtFQUFVLHlCQUFBO0VBQTBCLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLGdCQUFBO0VBQWlCLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsaUNBQUE7QUFXckk7QUFWQTtFQUFJLGVBQUE7RUFBZ0IsWUFBQTtBQWVwQjtBQWRBO0VBQUUscUJBQUE7RUFBc0IsYUFBQTtFQUFjLGNBQUE7QUFvQnRDO0FBbkJBO0VBQVEscUJBQUE7RUFBc0IsY0FBQTtBQXdCOUI7QUF2QkE7RUFBUSxxQkFBQTtBQTJCUjtBQTFCQTtFQUFFLG1CQUFBO0FBOEJGO0FBN0JBO0VBQVEsbUJBQUE7QUFpQ1I7QUFoQ0E7RUFBUSxtQkFBQTtFQUFvQixjQUFBO0VBQWUsZ0JBQUE7QUFzQzNDO0FBckNBO0VBQU8sZ0JBQUE7QUF5Q1A7QUF4Q0E7RUFBSyx5QkFBQTtFQUEwQixtQkFBQTtFQUFvQixnQkFBQTtFQUFpQixrQkFBQTtBQStDcEU7QUE5Q0E7RUFBOEIsaUJBQUE7QUFrRDlCO0FBakRBO0VBQThCLGlCQUFBO0VBQWtCLGVBQUE7RUFBZ0IsaUJBQUE7QUF1RGhFO0FBdERBO0VBQWEscUJBQUE7RUFBc0IseUJBQUE7RUFBMEIsV0FBQTtBQTREN0Q7QUEzREE7RUFBMkcscUJBQUE7RUFBc0IseUJBQUE7RUFBMEIsV0FBQTtBQWlFM0o7QUFoRUE7RUFBZSxxQkFBQTtFQUFzQix5QkFBQTtFQUEwQixXQUFBO0FBc0UvRDtBQXJFQTtFQUFxSCxxQkFBQTtFQUFzQix5QkFBQTtFQUEwQixXQUFBO0FBMkVySztBQTFFQTtFQUFhLHFCQUFBO0VBQXNCLDZCQUFBO0VBQThCLGNBQUE7QUFnRmpFO0FBL0VBO0VBQTJHLHFCQUFBO0VBQXNCLHlCQUFBO0VBQTBCLFdBQUE7QUFxRjNKO0FBcEZBO0VBQVUs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LGVBQUE7QUEwVnBEO0FBelZBO0VBQTRCLDBCQUFBO0VBQTJCLFlBQUE7RUFBaUIsa0JBQUE7RUFBbUIsU0FBQTtFQUFVLFVBQUE7QUFpV3JHO0FBaFdBOztFQUM4Qiw2QkFBQTtFQUE4Qix5QkFBQTtFQUEwQixjQUFBO0FBc1d0RjtBQXBXQTtFQUEyQixtQkFBQTtBQXdXM0I7QUF0V0E7O0VBQzBCLFNBQUE7QUEwVzFCO0FBeldBO0VBQW9CLHlCQUFBO0FBNldwQjtBQTVXQTtFQUFjLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxTQUFBO0VBQVUsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLGdCQUFBO0VBQWlCLGFBQUE7RUFBYyxXQUFBO0VBQVksa0JBQUE7QUF3WGpJO0FBdlhBO0VBQXFCLDBCQUFBO0VBQTJCLFlBQUE7QUE0WGhEO0FBM1hBO0VBQXdCLFlBQUE7QUErWHhCIiwiZmlsZSI6InNlbGxlci1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2ZiO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNjNjIyM2U7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuXG5hOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaDUsIC5oNSB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbmg2LCAuaDYge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLmJ0bi1ncm91cC1zbSA+IC5idG4sIC5idG4tc20ge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuLmJ0bi1ncm91cC14cyA+IC5idG4sIC5idG4teHMge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzI0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6YWN0aXZlLCAuYnRuLXByaW1hcnk6YWN0aXZlOmhvdmVyLCAuYnRuLXByaW1hcnkuZm9jdXMsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzI2MjI2MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjI2MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjMmJjN2UwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJjN2UwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1zZWNvbmRhcnk6YWN0aXZlOmhvdmVyLCAuYnRuLXNlY29uZGFyeS5mb2N1cywgLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM0MTQxNDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWRlZmF1bHQge1xuICBib3JkZXItY29sb3I6ICNjNjIyM2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2M2MjIzZTtcbn1cblxuLmJ0bi1kZWZhdWx0OmhvdmVyLCAuYnRuLWRlZmF1bHQ6YWN0aXZlLCAuYnRuLWRlZmF1bHQ6YWN0aXZlOmhvdmVyLCAuYnRuLWRlZmF1bHQuZm9jdXMsIC5idG4tZGVmYXVsdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2M2MjIzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2MjIzZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tbW9yZSB7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idG4tbW9yZSAuZmEge1xuICBjb2xvcjogI2VkMWMyNDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ0bi1tb3JlOmhvdmVyIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5idG4tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogI2M2MjIzZTtcbn1cblxuLmJ0bi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM3MzczNzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi1taW53aWR0aCB7XG4gIG1pbi13aWR0aDogMTI1cHg7XG59XG5cbi5idG4tZ3JvdXAyIHtcbiAgbWFyZ2luOiAwIC0zcHg7XG59XG5cbi5idG4tZ3JvdXAyIGEsXG4uYnRuLWdyb3VwMiAuYnRuIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5pbnB1dC1ncm91cCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItY29sb3I6ICM5MjkyOTI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1vLWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9kb3duLWFycm93LnBuZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnJlcSB7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jaGVja2JveC1pbmxpbmUsIC5yYWRpby1pbmxpbmUge1xuICBtYXJnaW46IDAgMTBweCAwIDAgIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZy0xNSB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b20wIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFyZ2luLWJvdHRvbTUge1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b20xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b20xNSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b20yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b20yNSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b20zMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1ib3R0b201MCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcbn1cblxuLypIZWFkZXIgQ1NTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5sb2dvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDIzcHggNDhweDtcbiAgd2lkdGg6IDI3OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgLTVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uaGVhZGVyLXNlYXJjaC1ib3gge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICB3aWR0aDogNDQ1cHg7XG59XG5cbi5oZWFkZXItc2VhcmNoLWJveCAuYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2M2MjIzZTtcbiAgYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG59XG5cbnVsLnRvcC1saW5rIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbn1cblxudWwudG9wLWxpbmsgbGkuY29sIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNkM2QzZDM7XG4gIGhlaWdodDogODNweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudWwudG9wLWxpbmsgbGkuY29sOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbnVsLnRvcC1saW5rIGxpLmNvbC5saW5rZGIge1xuICBtYXgtd2lkdGg6IDEyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsLnRvcC1saW5rIGxpLmNvbC5saW5rZGIgYSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxudWwudG9wLWxpbmsgbGkuY29sLmxpbmtkYiBhOmhvdmVyIHtcbiAgY29sb3I6ICNjNjIyM2U7XG59XG5cbi51c2VybGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4udXNlcmxpbmsgLnRodW1iIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcbn1cblxuLnVzZXJsaW5rID4gYSB7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4udXNlcmxpbmsgPiBhIC5mYS1hbmdsZS1kb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udXNlcmxpbmsgPiBhIC5mYS11c2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2RlZGVkZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnVzZXJsaW5rID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjMjYyMjYyO1xufVxuXG51bC5kcm9wZG93bi1tZW51IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMCByZ2JhKDE2MSwgMTYxLCAxNjEsIDAuMyk7XG4gIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCAwIHJnYmEoMTYxLCAxNjEsIDE2MSwgMC4zKTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwIHJnYmEoMTYxLCAxNjEsIDE2MSwgMC4zKTtcbn1cblxudWwuZHJvcGRvd24tbWVudSBsaSB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTdlN2U3O1xufVxuXG51bC5kcm9wZG93bi1tZW51IGxpOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxudWwuZHJvcGRvd24tbWVudSBsaSBhIHtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwuZHJvcGRvd24tbWVudSBsaSBhIC5mYSB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG51bC5kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzI2MjI2Mjtcbn1cblxuLmJ0biwgLmRhc2hib2FyZC1saW5rIGEge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG59XG5cbi53ZWxjb21lX2JveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMjhweCAzMnB4O1xufVxuXG4ud2VsY29tZV9ib3ggaDEge1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMCAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zaXRlLWNvbnRlbnQtY29udGFpbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpdGUtY29udGVudC1jb250YWluLXdyYXBwZXIgLmxlZnQtcGFuZWxiZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNzhweDtcbiAgYmFja2dyb3VuZDogIzI2MjI2MjtcbiAgei1pbmRleDogMDtcbn1cblxuI2xlZnQtcGFuZWwge1xuICB3aWR0aDogMjc4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNsZWZ0LXBhbmVsIC5idG4tbGVmdG1lbnVjbG9zZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZWQxYzI0O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxlZnRtZW51IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGVmdG1lbnUgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5sZWZ0bWVudSB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcbn1cblxuLmxlZnRtZW51IHVsIGxpIGEgLmZhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNHB4O1xuICB0b3A6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxlZnRtZW51IHVsIGxpIGE6aG92ZXIsXG4ubGVmdG1lbnUgdWwgbGk6aG92ZXIgPiBhLFxuLmxlZnRtZW51IHVsIGxpLmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzI0O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5sZWZ0bWVudSB1bCBsaSAuaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubGVmdG1lbnUgdWwgdWwgbGkgYSB7XG4gIHBhZGRpbmctbGVmdDogNzJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmxlZnRtZW51IHVsIHVsIGxpIGE6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDYwcHg7XG59XG5cbi5sZWZ0bWVudSB1bCB1bCBsaSBhOmhvdmVyLFxuLmxlZnRtZW51IHVsIHVsIGxpLmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5sZWZ0LXBhbmVsYmcsICNsZWZ0LXBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNzhweDtcbn1cblxuLmxlZnRtZW51b3BlbiAubGVmdC1wYW5lbGJnLFxuLmxlZnRtZW51b3BlbiAjbGVmdC1wYW5lbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxlZnRtZW51b3BlbiAjbWFpbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNzhweCk7XG59XG5cbi5idG4tbGVmdG1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tbGVmdG1lbnU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLvg4lcIjtcbn1cblxuLmJ0bi1sZWZ0bWVudS5vbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjVwiO1xufSJdfQ== */");

/***/ }),

/***/ "DodC":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: UserDefaultLayoutComponent, SellerDefaultLayoutComponent, AdminDefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-default-layout.component */ "6zAU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDefaultLayoutComponent", function() { return _user_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["UserDefaultLayoutComponent"]; });

/* harmony import */ var _seller_default_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller-default-layout.component */ "cSMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellerDefaultLayoutComponent", function() { return _seller_default_layout_component__WEBPACK_IMPORTED_MODULE_1__["SellerDefaultLayoutComponent"]; });

/* harmony import */ var _admin_default_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-default-layout.component */ "qVCW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminDefaultLayoutComponent", function() { return _admin_default_layout_component__WEBPACK_IMPORTED_MODULE_2__["AdminDefaultLayoutComponent"]; });






/***/ }),

/***/ "EEBF":
/*!****************************************************!*\
  !*** ./src/app/include/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "Arpp");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "erN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






let FooterComponent = class FooterComponent {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
    }
    ngOnInit() {
        this.setingsData();
    }
    setingsData() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'get-setting-list', formData).subscribe((res) => {
            //console.log(res);
            if (res && res.status) {
                this.setData = res.response_data[0];
            }
            else {
                this.setData = null;
            }
        });
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: UserDefaultLayoutComponent, SellerDefaultLayoutComponent, AdminDefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "DodC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["UserDefaultLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellerDefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["SellerDefaultLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminDefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["AdminDefaultLayoutComponent"]; });




/***/ }),

/***/ "Jfkb":
/*!****************************************************!*\
  !*** ./src/app/include/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "6UaG");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "o1Sz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let HeaderComponent = class HeaderComponent {
    constructor(storage, router, loadingController) {
        this.storage = storage;
        this.router = router;
        this.loadingController = loadingController;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_URL;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            $(".top-menu ul ul").parent().addClass("dropdown");
            $(".top-menu ul li.dropdown").append("<span class='arrow'></span>");
            $(".top-menu ul li.dropdown .arrow").click(function () {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass("open");
                }
                else {
                    $(this).parent().addClass("open");
                }
            });
            $(".btn-topmenu").click(function () {
                $("body").addClass("modal-open");
                $('.top-menu').addClass("open");
            });
            $(".btn-topmenu-close").click(function () {
                $("body").removeClass("modal-open");
                $('.top-menu').removeClass("open");
            });
            yield this.storage.create().then(res => {
                this.getUserDetails();
            });
            //console.log(this.buyerId);
        });
    }
    registration() {
        this.router.navigate(['/registration']);
    }
    getUserDetails() {
        this.storage.get('auctionUser').then(response => {
            // console.log(response);
            if (response && response.response_data && response.response_data.id) {
                this.buyerId = response.response_data.id;
                this.buyerData = response.response_data;
            }
            else {
                this.buyerId = null;
            }
        }, err => {
            this.buyerId = null;
        });
        this.storage.get('auctionSeller').then(response => {
            // console.log(response);
            if (response && response.response_data && response.response_data.id) {
                this.sellerId = response.response_data.id;
                //this.buyerData=response.response_data;
            }
            else {
                this.sellerId = null;
            }
        }, err => {
            this.sellerId = null;
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "KKPp":
/*!*************************************************************************!*\
  !*** ./src/app/include/user/user-side-nav/user-side-nav.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Lw7w":
/*!*****************************************************************************!*\
  !*** ./src/app/include/seller/seller-side-nav/seller-side-nav.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SellerSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerSideNavComponent", function() { return SellerSideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_side_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-side-nav.component.html */ "SoO9");
/* harmony import */ var _seller_side_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-side-nav.component.scss */ "+4uR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SellerSideNavComponent = class SellerSideNavComponent {
    constructor() { }
    ngOnInit() { }
};
SellerSideNavComponent.ctorParameters = () => [];
SellerSideNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-side-nav',
        template: _raw_loader_seller_side_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_side_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerSideNavComponent);



/***/ }),

/***/ "MyWw":
/*!*******************************************************************!*\
  !*** ./src/app/include/user/user-header/user-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHeaderComponent", function() { return UserHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-header.component.html */ "djBe");
/* harmony import */ var _user_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-header.component.scss */ "5ULd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserHeaderComponent = class UserHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
UserHeaderComponent.ctorParameters = () => [];
UserHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-header',
        template: _raw_loader_user_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserHeaderComponent);



/***/ }),

/***/ "O+Tl":
/*!*************************************************************************!*\
  !*** ./src/app/include/seller/seller-footer/seller-footer.component.ts ***!
  \*************************************************************************/
/*! exports provided: SellerFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerFooterComponent", function() { return SellerFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-footer.component.html */ "gf75");
/* harmony import */ var _seller_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-footer.component.scss */ "s01X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SellerFooterComponent = class SellerFooterComponent {
    constructor() { }
    ngOnInit() { }
};
SellerFooterComponent.ctorParameters = () => [];
SellerFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-footer',
        template: _raw_loader_seller_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerFooterComponent);



/***/ }),

/***/ "QvHX":
/*!********************************************!*\
  !*** ./src/app/services/window.service.ts ***!
  \********************************************/
/*! exports provided: WINDOW, WindowRef, BrowserWindowRef, windowFactory, browserWindowProvider, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowFactory", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserWindowProvider", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/* Create a new injection token for injecting the window into a component. */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/* Define class that implements the abstract class and returns the native window object. */
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return window;
    }
}
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
};
/* Create an array of providers. */
const WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "SfqJ":
/*!*********************************************************************!*\
  !*** ./src/app/include/user/user-footer/user-footer.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Footer CSS\n--------------------------------------------------------------------------------------------------*/\n.footer {\n  text-align: center;\n  padding: 20px 0;\n  color: #ed1c24;\n  font-weight: 300;\n  font-size: 13px;\n  background: url(/assets/images/footer-bg.jpg) 0 0 repeat-x #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7bUdBQUE7QUFFQTtFQUFRLGtCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLGdCQUFBO0VBQWlCLGVBQUE7RUFBZ0IsK0RBQUE7QUFPM0YiLCJmaWxlIjoidXNlci1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkZvb3RlciBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb290ZXJ7dGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MjBweCAwOyBjb2xvcjojZWQxYzI0OyBmb250LXdlaWdodDozMDA7IGZvbnQtc2l6ZToxM3B4OyBiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2ltYWdlcy9mb290ZXItYmcuanBnKSAwIDAgcmVwZWF0LXggI2ZmZjt9XG5cbiJdfQ== */");

/***/ }),

/***/ "SoO9":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/seller/seller-side-nav/seller-side-nav.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Left Panel Start-->\n<div class=\"left-panelbg\"></div>\n<aside id=\"left-panel\">\n\t<nav class=\"leftmenu\">\n\n    \t<ul>\n        \t<li class=\"active\"><a href=\"dashboard.html\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Dashboard</a></li>\n        \t<li><a href=\"javascript:void(0);\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Profile Details</a>\n            \t<ul>\n                \t<li><a href=\"profile.html\">Profile</a></li>\n                \t<li><a href=\"javascript:void(0);\">Change password</a></li>             \n                </ul>\n            </li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-product-hunt\" aria-hidden=\"true\"></i> Product Management</a>\n            \t<ul>\n                \t<li><a href=\"javascript:void(0);\">Add Categories</a></li>\n                \t<li><a href=\"javascript:void(0);\">Add Products</a></li>             \n                </ul>\n            </li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Order Details</a>\n            \t<ul>\n                \t<li><a href=\"javascript:void(0);\">Bids Reports</a></li>            \n                </ul>\n            </li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i> Customer Feedback</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> Chatbox</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Pallet Auction</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Payment Details</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a></li>\n        \t<!-- <li><a href=\"javascript:void(0)\"><i class=\"fa fa-usd\" aria-hidden=\"true\"></i> Manage Orders</a>\n            \t<ul>\n                \t<li><a href=\"manage-invoice.html\">Manage Invoices</a></li>\n                \t<li><a href=\"sales-repor.html\">Sales Report</a></li>\n                \t<li><a href=\"overall-sales-report.html\">Overall Sales Report</a></li>\n                </ul>\n            </li>\n        \t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i> Manage Disputes as a Seller</a>\n            \t<ul>\n                \t<li><a href=\"#\">View Disputes</a></li>\n                </ul>\n            </li> -->\n        </ul>\n    </nav>\n</aside>\n<!--Left Panel End-->");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.animated = false;
    }
    ionScroll() { }
    onPageScroll(e) { }
    ionViewDidLoad() {
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VPLl":
/*!**********************************************************************!*\
  !*** ./src/app/include/admin/admin-header/admin-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-header.component.html */ "nYKQ");
/* harmony import */ var _admin_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-header.component.scss */ "2V/l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminHeaderComponent = class AdminHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
AdminHeaderComponent.ctorParameters = () => [];
AdminHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-header',
        template: _raw_loader_admin_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminHeaderComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app #ionapp>\n  <ion-router-outlet [animated]=\"animated\"></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "W1dd":
/*!**********************************************************************!*\
  !*** ./src/app/include/admin/admin-footer/admin-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function() { return AdminFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-footer.component.html */ "YYYg");
/* harmony import */ var _admin_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-footer.component.scss */ "j2PU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminFooterComponent = class AdminFooterComponent {
    constructor() { }
    ngOnInit() { }
};
AdminFooterComponent.ctorParameters = () => [];
AdminFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-footer',
        template: _raw_loader_admin_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminFooterComponent);



/***/ }),

/***/ "YYYg":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/admin/admin-footer/admin-footer.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n\tCopyright 2021 ALEXEIN. All Rights Reserved.\n</footer>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel */ "uxF4");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/window.service */ "QvHX");
/* harmony import */ var _include_include_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./include/include.module */ "+TEy");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
















//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AngularEditorModule } from '@kolkov/angular-editor';
const APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_14__["UserDefaultLayoutComponent"],
    _containers__WEBPACK_IMPORTED_MODULE_14__["SellerDefaultLayoutComponent"],
    _containers__WEBPACK_IMPORTED_MODULE_14__["AdminDefaultLayoutComponent"]
];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ...APP_CONTAINERS],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__["OwlModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _include_include_module__WEBPACK_IMPORTED_MODULE_13__["IncludeModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _services_window_service__WEBPACK_IMPORTED_MODULE_12__["WINDOW_PROVIDERS"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aQuj":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/user-default-layout.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"theme\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n        <ion-item [routerLink]=\"['/user/dashboard']\" routerLinkActive=\"active\">Dashboard</ion-item>\n        <ion-item [routerLink]=\"['/user/profile']\" routerLinkActive=\"active\">My Profile</ion-item>\n        <ion-item [routerLink]=\"['/user/bid-report']\" routerLinkActive=\"active\">Bid Report</ion-item>\n        <ion-item (click)=\"logout()\" style=\"cursor: pointer;\" routerLinkActive=\"active\">Logout</ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet [animated]=\"animated\" id=\"main\"></ion-router-outlet>");

/***/ }),

/***/ "cSMY":
/*!******************************************************************************!*\
  !*** ./src/app/containers/default-layout/seller-default-layout.component.ts ***!
  \******************************************************************************/
/*! exports provided: SellerDefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerDefaultLayoutComponent", function() { return SellerDefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-default-layout.component.html */ "uzjm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");





let SellerDefaultLayoutComponent = class SellerDefaultLayoutComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.sidebarMinimized = false;
        this.animated = false;
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create().then(res => {
                this.getUserDetails();
            });
        });
    }
    getUserDetails() {
        this.storage.get('auctionSeller').then(response => {
            if (response != null) {
                //console.log(response.response_data);
                if (response.response_data.role_text == "Seller") {
                    this.router.navigate(['/seller/dashboard']);
                }
            }
            else {
                this.router.navigate(['/seller-login']);
            }
        }, err => {
        });
    }
    logout() {
        //alert(1);
        this.storage.remove("auctionSeller");
        //this.userDetails = null;
        this.router.navigate(['/']);
        //this.menu.close();
    }
};
SellerDefaultLayoutComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SellerDefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'seller-app-dashboard',
        template: _raw_loader_seller_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], SellerDefaultLayoutComponent);



/***/ }),

/***/ "djBe":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/user/user-header/user-header.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>User Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "dvqD":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/admin/admin-side-nav/admin-side-nav.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Left Panel Start-->\n<div class=\"left-panelbg\"></div>\n<aside id=\"left-panel\">\n\t<nav class=\"leftmenu\">\n\n    \t<ul>\n        \t<li class=\"active\"><a href=\"dashboard.html\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Dashboard</a></li>\n        \t<li><a href=\"javascript:void(0);\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Profile Details</a>\n            \t<ul>\n                \t<li><a href=\"profile.html\">Profile</a></li>\n                \t<li><a href=\"javascript:void(0);\">Change password</a></li>             \n                </ul>\n            </li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-product-hunt\" aria-hidden=\"true\"></i> Product Management</a>\n            \t<ul>\n                \t<li><a href=\"javascript:void(0);\">Add Categories</a></li>\n                \t<li><a href=\"javascript:void(0);\">Add Products</a></li>             \n                </ul>\n            </li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Order Details</a>\n            \t<ul>\n                \t<li><a href=\"javascript:void(0);\">Bids Reports</a></li>            \n                </ul>\n            </li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i> Customer Feedback</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> Chatbox</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Pallet Auction</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Payment Details</a></li>\n            <li><a href=\"javascript:void(0);\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a></li>\n        \t<!-- <li><a href=\"javascript:void(0)\"><i class=\"fa fa-usd\" aria-hidden=\"true\"></i> Manage Orders</a>\n            \t<ul>\n                \t<li><a href=\"manage-invoice.html\">Manage Invoices</a></li>\n                \t<li><a href=\"sales-repor.html\">Sales Report</a></li>\n                \t<li><a href=\"overall-sales-report.html\">Overall Sales Report</a></li>\n                </ul>\n            </li>\n        \t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i> Manage Disputes as a Seller</a>\n            \t<ul>\n                \t<li><a href=\"#\">View Disputes</a></li>\n                </ul>\n            </li> -->\n        </ul>\n    </nav>\n</aside>\n<!--Left Panel End-->");

/***/ }),

/***/ "erN1":
/*!******************************************************!*\
  !*** ./src/app/include/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*-------- footer css start --------*/\n.footer_bottom {\n  background: #eeeef4;\n  padding: 70px 0px;\n}\n.footer_bottom .footer_logo {\n  width: 217px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.footer_bottom .footer_logo img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.footer_bottom .footer_store_box ul {\n  padding: 0 0;\n  margin: 0 0;\n}\n.footer_bottom .footer_store_box ul li {\n  padding: 0 0 0 0;\n  margin: 0 2px 0 0;\n  display: inline-block;\n}\n.footer_bottom .footer_store_box ul li:last-child {\n  margin: 0 0 0 0;\n}\n.footer_bottom .footer_store_box ul li a {\n  display: inline-block;\n}\n.footer_bottom .footer h4 {\n  text-transform: uppercase;\n  color: #120f38;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n.footer_bottom .footer ul {\n  padding: 0 0;\n  margin: 0 0;\n}\n.footer_bottom .footer ul li {\n  list-style: none;\n  position: relative;\n  margin-bottom: 8px;\n  transition: 0.5s;\n}\n.footer_bottom .footer ul li:hover {\n  padding-left: 8px;\n}\n.footer_bottom .footer ul li:last-child {\n  margin-bottom: 0px;\n}\n.footer_bottom .footer ul li a:before {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #000000;\n  transition: 0.5s;\n}\n.footer_bottom .footer ul li a {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  position: relative;\n  padding-left: 18px;\n  transition: 0.5s;\n}\n.footer_bottom .footer ul li:hover a {\n  color: #ed1c24;\n}\n.footer_bottom .footer ul li:hover a:before {\n  color: #ed1c24;\n}\n.copyright_area {\n  background: #ddddee;\n  padding: 15px 0px;\n}\n.copyright_area .copyright {\n  text-align: center;\n}\n.copyright_area .copyright p {\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 15px;\n  font-weight: 400;\n  color: #000000;\n}\n.copyright_area .copyright p a {\n  transition: 0.5s;\n  color: #ed1c24;\n}\n.copyright_area .copyright p a:hover {\n  text-decoration: underline;\n}\n.footer_top {\n  background: #262262;\n  padding: 30px 0px;\n}\n.footer_top .footer_top_box {\n  position: relative;\n  padding: 0 80px;\n}\n.footer_top .footer_top_box:after {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  right: 0;\n  width: 1px;\n  height: 85%;\n  background: #9391b1;\n}\n.footer_top .footer_top_box .media .media-body h3 {\n  text-transform: uppercase;\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  line-height: normal;\n}\n.footer_top .footer_top_box .media .media-body a {\n  transition: 0.5s;\n  color: #dddddd;\n  font-size: 16px;\n  font-weight: 400px;\n}\n.footer_top .footer_top_box .media .media-body a:hover {\n  color: #ed1c24;\n}\n.footer_top .footer_top_box .media .img-icon {\n  margin-right: 25px;\n  width: 48px;\n  height: 48px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: all 0.9s 0s ease;\n}\n.footer_top .footer_top_box .media:hover .img-icon {\n  transform: rotate(360deg);\n}\n.footer_top .footer_social {\n  text-align: center;\n}\n.footer_top .footer_social ul {\n  padding: 0 0;\n  margin: 0 0;\n}\n.footer_top .footer_social ul li {\n  display: inline-block;\n  padding: 0 0;\n  margin: 0 5px 0 0;\n  list-style: none;\n}\n.footer_top .footer_social ul li:last-child {\n  margin: 0 0 0 0;\n}\n.footer_top .footer_social ul li a {\n  display: inline-block;\n  transition: all 0.9s 0s ease;\n}\n.footer_top .footer_social ul li a:hover {\n  transform: rotate(360deg);\n}\n/*-------- footer css stop --------*/\n/*--------- chatbox css start -----------*/\n#chartbox {\n  position: fixed;\n  left: 30px;\n  bottom: 20px;\n  z-index: 9;\n  -webkit-animation: float ease-in-out 5s infinite alternate;\n          animation: float ease-in-out 5s infinite alternate;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n@-webkit-keyframes float {\n  0%, 100% {\n    -webkit-transform: translateY(0);\n  }\n  50% {\n    -webkit-transform: translateY(-20px);\n  }\n}\n/*--------- chatbox css stop -----------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLHFDQUFBO0FBRUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBR0o7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBR0o7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUlKO0FBRkE7RUFDSSxlQUFBO0FBS0o7QUFIQTtFQUNJLHFCQUFBO0FBTUo7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBS0o7QUFIQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTUo7QUFKQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUlBLGdCQUFBO0FBT0o7QUFMQTtFQUNJLGlCQUFBO0FBUUo7QUFOQTtFQUNJLGtCQUFBO0FBU0o7QUFQQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBSUEsZ0JBQUE7QUFVSjtBQVJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFJQSxnQkFBQTtBQVdKO0FBVEE7RUFDSSxjQUFBO0FBWUo7QUFWQTtFQUNJLGNBQUE7QUFhSjtBQVZBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQWFKO0FBWEE7RUFDSSxrQkFBQTtBQWNKO0FBWkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFlSjtBQWJBO0VBSUksZ0JBQUE7RUFDQSxjQUFBO0FBZ0JKO0FBZEE7RUFDSSwwQkFBQTtBQWlCSjtBQWRBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQWlCSjtBQWRBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBaUJKO0FBZkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFrQko7QUFoQkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBbUJKO0FBakJBO0VBSUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBb0JKO0FBbEJBO0VBQ0ksY0FBQTtBQXFCSjtBQW5CQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBSUEsNEJBQUE7QUFzQko7QUFwQkE7RUFJSSx5QkFBQTtBQXVCSjtBQXJCQTtFQUNJLGtCQUFBO0FBd0JKO0FBdEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF5Qko7QUF2QkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBMEJKO0FBeEJBO0VBQ0ksZUFBQTtBQTJCSjtBQXpCQTtFQUNJLHFCQUFBO0VBSUEsNEJBQUE7QUE0Qko7QUExQkE7RUFJSSx5QkFBQTtBQTZCSjtBQTNCQSxvQ0FBQTtBQUVBLDBDQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtBQTZCSjtBQTFCQTtFQUVJO0lBRUksd0JBQUE7RUEyQk47RUF6QkU7SUFFSSw0QkFBQTtFQTBCTjtBQUNGO0FBeEJBO0VBRUk7SUFFSSxnQ0FBQTtFQXdCTjtFQXRCRTtJQUVJLG9DQUFBO0VBdUJOO0FBQ0Y7QUFyQkEseUNBQUEiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyotLS0tLS0tLSBmb290ZXIgY3NzIHN0YXJ0IC0tLS0tLS0tKi9cbi5mb290ZXJfYm90dG9tIHtcbiAgYmFja2dyb3VuZDogI2VlZWVmNDtcbiAgcGFkZGluZzogNzBweCAwcHg7XG59XG5cbi5mb290ZXJfYm90dG9tIC5mb290ZXJfbG9nbyB7XG4gIHdpZHRoOiAyMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvb3Rlcl9ib3R0b20gLmZvb3Rlcl9sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZvb3Rlcl9ib3R0b20gLmZvb3Rlcl9zdG9yZV9ib3ggdWwge1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMCAwO1xufVxuXG4uZm9vdGVyX2JvdHRvbSAuZm9vdGVyX3N0b3JlX2JveCB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIG1hcmdpbjogMCAycHggMCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb290ZXJfYm90dG9tIC5mb290ZXJfc3RvcmVfYm94IHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbi5mb290ZXJfYm90dG9tIC5mb290ZXJfc3RvcmVfYm94IHVsIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb290ZXJfYm90dG9tIC5mb290ZXIgaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzEyMGYzODtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9vdGVyX2JvdHRvbSAuZm9vdGVyIHVsIHtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDAgMDtcbn1cblxuLmZvb3Rlcl9ib3R0b20gLmZvb3RlciB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZvb3Rlcl9ib3R0b20gLmZvb3RlciB1bCBsaTpob3ZlciB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uZm9vdGVyX2JvdHRvbSAuZm9vdGVyIHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5mb290ZXJfYm90dG9tIC5mb290ZXIgdWwgbGkgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EgVwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5mb290ZXJfYm90dG9tIC5mb290ZXIgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZvb3Rlcl9ib3R0b20gLmZvb3RlciB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5mb290ZXJfYm90dG9tIC5mb290ZXIgdWwgbGk6aG92ZXIgYTpiZWZvcmUge1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLmNvcHlyaWdodF9hcmVhIHtcbiAgYmFja2dyb3VuZDogI2RkZGRlZTtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbi5jb3B5cmlnaHRfYXJlYSAuY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29weXJpZ2h0X2FyZWEgLmNvcHlyaWdodCBwIHtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDAgMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNvcHlyaWdodF9hcmVhIC5jb3B5cmlnaHQgcCBhIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4uY29weXJpZ2h0X2FyZWEgLmNvcHlyaWdodCBwIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvb3Rlcl90b3Age1xuICBiYWNrZ3JvdW5kOiAjMjYyMjYyO1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbn1cblxuLmZvb3Rlcl90b3AgLmZvb3Rlcl90b3BfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDgwcHg7XG59XG5cbi5mb290ZXJfdG9wIC5mb290ZXJfdG9wX2JveDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDg1JTtcbiAgYmFja2dyb3VuZDogIzkzOTFiMTtcbn1cblxuLmZvb3Rlcl90b3AgLmZvb3Rlcl90b3BfYm94IC5tZWRpYSAubWVkaWEtYm9keSBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZvb3Rlcl90b3AgLmZvb3Rlcl90b3BfYm94IC5tZWRpYSAubWVkaWEtYm9keSBhIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbn1cblxuLmZvb3Rlcl90b3AgLmZvb3Rlcl90b3BfYm94IC5tZWRpYSAubWVkaWEtYm9keSBhOmhvdmVyIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5mb290ZXJfdG9wIC5mb290ZXJfdG9wX2JveCAubWVkaWEgLmltZy1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC45cyAwcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjlzIDBzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjlzIDBzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjlzIDBzIGVhc2U7XG59XG5cbi5mb290ZXJfdG9wIC5mb290ZXJfdG9wX2JveCAubWVkaWE6aG92ZXIgLmltZy1pY29uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG59XG5cbi5mb290ZXJfdG9wIC5mb290ZXJfc29jaWFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyX3RvcCAuZm9vdGVyX3NvY2lhbCB1bCB7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwIDA7XG59XG5cbi5mb290ZXJfdG9wIC5mb290ZXJfc29jaWFsIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMCA1cHggMCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZm9vdGVyX3RvcCAuZm9vdGVyX3NvY2lhbCB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufVxuXG4uZm9vdGVyX3RvcCAuZm9vdGVyX3NvY2lhbCB1bCBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjlzIDBzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuOXMgMHMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuOXMgMHMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuOXMgMHMgZWFzZTtcbn1cblxuLmZvb3Rlcl90b3AgLmZvb3Rlcl9zb2NpYWwgdWwgbGkgYTpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuXG4vKi0tLS0tLS0tIGZvb3RlciBjc3Mgc3RvcCAtLS0tLS0tLSovXG4vKi0tLS0tLS0tLSBjaGF0Ym94IGNzcyBzdGFydCAtLS0tLS0tLS0tLSovXG4jY2hhcnRib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgei1pbmRleDogOTtcbiAgYW5pbWF0aW9uOiBmbG9hdCBlYXNlLWluLW91dCA1cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgZmxvYXQge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZsb2F0IHtcbiAgMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG4vKi0tLS0tLS0tLSBjaGF0Ym94IGNzcyBzdG9wIC0tLS0tLS0tLS0tKi8iXX0= */");

/***/ }),

/***/ "gf75":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/seller/seller-footer/seller-footer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n\tCopyright 2021 ALEXEIN. All Rights Reserved.\n</footer>");

/***/ }),

/***/ "j2PU":
/*!************************************************************************!*\
  !*** ./src/app/include/admin/admin-footer/admin-footer.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Footer CSS\n--------------------------------------------------------------------------------------------------*/\n.footer {\n  text-align: center;\n  padding: 20px 0;\n  color: #ed1c24;\n  font-weight: 300;\n  font-size: 13px;\n  background: url(/assets/images/footer-bg.jpg) 0 0 repeat-x #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO21HQUFBO0FBRUE7RUFBUSxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLGNBQUE7RUFBZSxnQkFBQTtFQUFpQixlQUFBO0VBQWdCLCtEQUFBO0FBTzNGIiwiZmlsZSI6ImFkbWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qRm9vdGVyIENTU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZvb3Rlcnt0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzoyMHB4IDA7IGNvbG9yOiNlZDFjMjQ7IGZvbnQtd2VpZ2h0OjMwMDsgZm9udC1zaXplOjEzcHg7IGJhY2tncm91bmQ6dXJsKC9hc3NldHMvaW1hZ2VzL2Zvb3Rlci1iZy5qcGcpIDAgMCByZXBlYXQteCAjZmZmO31cblxuIl19 */");

/***/ }),

/***/ "jamG":
/*!***********************************************************************!*\
  !*** ./src/app/include/user/user-side-nav/user-side-nav.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSideNavComponent", function() { return UserSideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_side_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-side-nav.component.html */ "vNbm");
/* harmony import */ var _user_side_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-side-nav.component.scss */ "KKPp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserSideNavComponent = class UserSideNavComponent {
    constructor() { }
    ngOnInit() { }
};
UserSideNavComponent.ctorParameters = () => [];
UserSideNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-side-nav',
        template: _raw_loader_user_side_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_side_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserSideNavComponent);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nYKQ":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/admin/admin-header/admin-header.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Admin Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "o1Sz":
/*!******************************************************!*\
  !*** ./src/app/include/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.header_area {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 99;\n  margin-bottom: 10px;\n}\n.header_area.innerheader {\n  position: relative;\n}\n.header_area.innerheader .header_top {\n  background-color: #100798;\n}\n.header_area .header_top {\n  min-height: 44px;\n  background: #fff;\n  border-top: 5px solid #110f39;\n  position: relative;\n  padding: 20px 0px;\n}\n.header_area .header_top:before {\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  left: 0;\n  width: 50%;\n  height: 5px;\n  background: #ed1c24;\n}\n.header_top .header_top_left {\n  float: left;\n}\n.header_top .header_top_right {\n  float: right;\n}\n.header_top .header_top_left ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.header_top .header_top_left ul li {\n  float: left;\n  line-height: 44px;\n}\n.header_top .header_top_left ul li a {\n  color: #FFF;\n  padding: 0 15px;\n  border-right: 1px solid #FFF;\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n}\n.header_top .header_top_left ul li:first-child a {\n  border-left: 1px solid #FFF;\n}\n.header_top .header_top_left ul li a:hover {\n  background: #3a82d7;\n  color: #fff;\n  display: block;\n}\n.header_top .header_top_right ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.header_top .header_top_right ul li {\n  float: right;\n  border-left: 1px solid #FFF;\n  padding: 0 15px;\n  line-height: 44px;\n}\n.header_top .header_top_right ul li a {\n  color: #fff;\n}\n.header_top .header_top_right ul li a i {\n  margin-right: 5px;\n  font-size: 14px;\n  font-weight: 300;\n}\n.header_top .header_top_right ul li a:hover {\n  color: #CCCCCC;\n}\n.form-group.has-search {\n  margin-bottom: 0;\n}\n.has-search .form-control {\n  padding-left: 24px;\n  height: 44px !important;\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 14px;\n  width: 280px;\n  font-weight: 300;\n}\n.has-search .form-control-feedback {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: auto;\n  height: auto;\n  line-height: 44px;\n  text-align: center;\n  pointer-events: none;\n  color: #fff;\n  font-size: 14px;\n}\n.header_bottom {\n  box-sizing: border-box;\n  padding: 0;\n  background: #262262;\n}\n.header_bottom .container {\n  position: relative;\n}\n.header_bottom .logo {\n  max-width: 120px;\n  width: 100%;\n  float: left;\n  position: relative;\n  z-index: 9;\n  display: none;\n}\n.header_area.innerheader .header_bottom .logo img.two {\n  display: block;\n}\n.header_area.innerheader .header_bottom .logo img.one {\n  display: none;\n}\n.header_bottom .logo img.two {\n  display: none;\n}\n.header_bottom .booking_box {\n  float: right;\n  position: relative;\n  z-index: 9;\n}\n.header_bottom .booking_box .btn-primary {\n  font-weight: 500;\n}\n.menubox {\n  float: right;\n}\n.btn-topmenu {\n  color: #283891;\n  font-size: 24px;\n}\n.btn-topmenu:hover {\n  color: #bf1e2d;\n}\n.header_area.innerheader .top-menu ul li a {\n  color: #100798;\n}\n.header_area.innerheader .top-menu ul ul li a:hover,\n.header_area.innerheader .top-menu ul ul li:hover > a,\n.header_area.innerheader .top-menu ul ul li.current-menu-item > a {\n  color: #ffffff;\n  background: #100798;\n}\n@media screen and (min-width: 992px) {\n  .top-menu {\n    padding: 0;\n  }\n\n  .top-menu ul {\n    padding: 0;\n    margin: 0 -14px;\n    list-style: none;\n  }\n\n  .top-menu ul li {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n\n  .top-menu ul li:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 1px;\n    height: 100%;\n    background: #3a3670;\n  }\n\n  .top-menu ul li:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: -1px;\n    width: 1px;\n    height: 100%;\n    background: #1b1844;\n  }\n\n  .top-menu ul li:last-child:after {\n    display: none;\n  }\n\n  .top-menu ul li:last-child:before {\n    display: none;\n  }\n\n  .top-menu ul li a {\n    color: #fff;\n    font-weight: 500;\n    font-size: 16px;\n    padding: 0;\n    position: relative;\n    margin: 14px 14px;\n    display: block;\n    text-transform: uppercase;\n  }\n\n  .top-menu.top-menu-inner ul li a {\n    color: #3a82d7;\n  }\n\n  .header_bottom.fix .top-menu ul li a {\n    color: #fff;\n    margin: 20px 18px;\n  }\n\n  .header_bottom.fix .top-menu {\n    padding: 0 0;\n  }\n\n  .header_bottom.fix .booking_box {\n    margin-top: 15px;\n  }\n\n  .top-menu ul li a:hover,\n.top-menu ul li:hover > a,\n.top-menu ul li.current-menu-item > a {\n    color: #ed1c24 !important;\n  }\n\n  .top-menu ul ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    float: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 200px;\n    background: #fff;\n    border-top: solid 3px #0a035b;\n  }\n\n  .top-menu ul ul li {\n    float: none;\n    border-top: solid 1px #9b9b9b4d;\n    margin-right: 0;\n    display: block;\n  }\n\n  .top-menu ul ul li a {\n    color: #100798;\n    padding: 8px 10px;\n    margin: 0;\n    text-align: left;\n    font-size: 14px;\n    font-weight: 300;\n    text-transform: capitalize;\n  }\n\n  .top-menu ul ul li a:hover,\n.top-menu ul ul li:hover > a,\n.top-menu ul ul li.current-menu-item > a {\n    color: #ffffff;\n    background: #100798;\n  }\n\n  .top-menu ul ul ul {\n    left: 100%;\n    top: 0;\n  }\n\n  .top-menu ul li:hover > ul {\n    display: block;\n    z-index: 999;\n  }\n\n  .top-menu ul ul {\n    opacity: 0;\n    z-index: 990;\n    top: -9999em;\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);\n    transform: scale(0.9);\n    transform-origin: center top;\n    transition-property: transform, opacity, top;\n    transition-duration: 0.3s, 0.3s, 0s;\n    transition-delay: 0s, 0s, 0.3s;\n  }\n\n  .top-menu ul li:hover > ul {\n    top: 100%;\n    opacity: 1;\n    transform: scale(1);\n    transition-delay: 0s;\n    margin-top: 0px;\n  }\n\n  .top-menu ul ul li:hover > ul {\n    top: -10px;\n    left: 100%;\n  }\n}\n@media screen and (min-width: 992px) {\n  .header_area.innerheader .header_bottom.fix {\n    background: #FFFFFF;\n  }\n\n  .header_bottom.fix {\n    position: fixed;\n    width: 100%;\n    left: 0;\n    top: 0;\n    background: #fff;\n    z-index: 991;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    box-shadow: 1px 1px 7px rgba(165, 165, 165, 0.31);\n    padding: 0;\n    background: #262262;\n  }\n\n  .header_bottom.fix .logo {\n    max-width: 160px;\n    width: 100%;\n    margin: 16px 0;\n  }\n\n  @-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  @keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  .header_area.innerheader .header_bottom.fix .top-menu ul li a:hover, .header_area.innerheader .header_bottom.fix .top-menu ul li:hover > a, .header_area.innerheader .header_bottom.fix .top-menu ul li.current-menu-item > a {\n    color: #000b19;\n  }\n\n  .header_bottom.fix .all_category {\n    display: none;\n  }\n\n  .header_bottom.fix .logo {\n    display: block;\n    outline: none;\n    cursor: pointer;\n  }\n}\n/*--- header top css start ---*/\n.header_top .header_top_left .logo {\n  width: 217px;\n  overflow: hidden;\n  outline: none;\n}\n.header_top .header_top_left .logo img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n}\n.header_top .header_top_right .search_bar {\n  width: 456px;\n  position: relative;\n  float: left;\n  margin-right: 25px;\n}\n.header_top .header_top_right .search_bar .form-control {\n  width: 100%;\n  height: 49px;\n  border: 1px solid #bbbbbb;\n  border-radius: 5px;\n  padding: 15px 115px 15px 40px;\n}\n.header_top .header_top_right .search_bar .btn {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  border-radius: 5px;\n}\n.header_top .header_top_right .search_bar:before {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  top: 4px;\n  left: 14px;\n  color: #757575;\n  font-size: 23px;\n}\n.header_top .header_top_right .register_box {\n  float: right;\n  position: relative;\n  padding-left: 34px;\n  padding-top: 4px;\n}\n.header_top .header_top_right .register_box p {\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: #4d4d4d;\n  font-weight: 400;\n  line-height: 14px;\n}\n.header_top .header_top_right .register_box p:last-child {\n  margin-bottom: 0px;\n}\n.header_top .header_top_right .register_box img.icon {\n  content: \"\";\n  position: absolute;\n  top: 7px;\n  left: 0;\n  width: 26px;\n  height: 26px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header_top .header_top_right .register_box p a {\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: #4d4d4d;\n  font-weight: 400;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.header_top .header_top_right .register_box p a:hover {\n  color: #ed1c24;\n}\n.header_top .header_top_right .register_box p a.active {\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: #ed1c24;\n  font-weight: 400;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.header_top .header_top_right .register_box p a.active:hover {\n  color: #262262;\n}\n.header_bottom .all_category {\n  width: 221px;\n  height: 53px;\n  position: relative;\n  padding: 15px 15px 15px 60px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #fff;\n  text-transform: uppercase;\n  float: left;\n  background: #ed1c24;\n}\n.header_bottom .all_category img.icon {\n  content: \"\";\n  position: absolute;\n  top: 19px;\n  left: 18px;\n  width: 26px;\n  height: 16px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header_bottom .dropdown-menu {\n  width: 223px;\n  box-shadow: 0 0 8px rgba(160, 160, 160, 0.39);\n  border-radius: 0px;\n  border: none;\n}\n.header_bottom .dropdown-menu .dropdown-item {\n  position: relative;\n  border-bottom: 1px solid #e6e6e6;\n  color: #323144;\n  font-weight: 400;\n  font-size: 14px;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n  padding: 8px 15px;\n}\n.header_bottom .dropdown-menu .dropdown-item:hover {\n  color: #ed1c24;\n}\n.header_bottom .dropdown-menu .dropdown-item:last-child {\n  border-bottom: 0px;\n}\n.header_bottom .dropdown-menu .dropdown-item:after {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  top: 7px;\n  right: 12px;\n  font-size: 16px;\n  color: #ed1c24;\n  font-weight: 600;\n}\n.main_area {\n  padding: 70px 0px;\n}\nh3.h3 {\n  text-transform: uppercase;\n  font-size: 28px;\n  font-weight: 500;\n  color: #000000;\n  border-bottom: 1px solid #cccccc;\n  line-height: normal;\n  padding-bottom: 10px;\n  position: relative;\n  margin-bottom: 40px;\n}\nh3.h3:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 82px;\n  height: 2px;\n  background: #ed1c24;\n}\nh2.h2 {\n  position: relative;\n  text-align: center;\n  min-height: 60px;\n  margin: 0 0;\n}\nh2.h2 strong {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  color: #000000;\n  font-size: 28px;\n  font-weight: 500;\n  background: #fff;\n  text-transform: uppercase;\n  width: 100%;\n  max-width: 330px;\n  z-index: 9;\n}\nh2.h2:before {\n  content: \"\";\n  position: absolute;\n  top: 25px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #cccccc;\n}\nh2.h2:after {\n  content: \"\";\n  position: absolute;\n  top: 28px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFBO0VBQTBCLGtCQUFBO0FBSTFCO0FBSEE7RUFBc0MseUJBQUE7QUFPdEM7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFTSjtBQVBBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVUo7QUFSQTtFQUE4QixXQUFBO0FBWTlCO0FBWEE7RUFBK0IsWUFBQTtBQWUvQjtBQWRBO0VBQWlDLFNBQUE7RUFBVSxVQUFBO0VBQVcsZ0JBQUE7QUFvQnREO0FBbkJBO0VBQW9DLFdBQUE7RUFBYSxpQkFBQTtBQXdCakQ7QUF2QkE7RUFBc0MsV0FBQTtFQUFZLGVBQUE7RUFBZ0IsNEJBQUE7RUFBNkIsY0FBQTtFQUFlLGVBQUE7RUFBZ0IsZ0JBQUE7QUFnQzlIO0FBL0JBO0VBQWtELDJCQUFBO0FBbUNsRDtBQWxDQTtFQUE0QyxtQkFBQTtFQUFvQixXQUFBO0VBQVksY0FBQTtBQXdDNUU7QUF2Q0E7RUFBa0MsU0FBQTtFQUFVLFVBQUE7RUFBVyxnQkFBQTtBQTZDdkQ7QUE1Q0E7RUFBcUMsWUFBQTtFQUFhLDJCQUFBO0VBQTRCLGVBQUE7RUFBZ0IsaUJBQUE7QUFtRDlGO0FBbERBO0VBQXVDLFdBQUE7QUFzRHZDO0FBckRBO0VBQXlDLGlCQUFBO0VBQWtCLGVBQUE7RUFBZ0IsZ0JBQUE7QUEyRDNFO0FBMURBO0VBQTZDLGNBQUE7QUE4RDdDO0FBNURBO0VBQXdCLGdCQUFBO0FBZ0V4QjtBQTlEQTtFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFB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RUFDSSxpQkFBQTtBQW1KSjtBQWpKQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFvSko7QUFsSkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFxSko7QUFuSkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBc0pKO0FBcEpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXVKSjtBQXJKQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXdKSjtBQXRKQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXlKSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVhZGVyX2FyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaGVhZGVyX2FyZWEuaW5uZXJoZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfYXJlYS5pbm5lcmhlYWRlciAuaGVhZGVyX3RvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDA3OTg7XG59XG5cbi5oZWFkZXJfYXJlYSAuaGVhZGVyX3RvcCB7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMTEwZjM5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4uaGVhZGVyX2FyZWEgLmhlYWRlcl90b3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWQxYzI0O1xufVxuXG4uaGVhZGVyX3RvcCAuaGVhZGVyX3RvcF9sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaGVhZGVyX3RvcCAuaGVhZGVyX3RvcF9sZWZ0IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uaGVhZGVyX3RvcCAuaGVhZGVyX3RvcF9sZWZ0IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuXG4uaGVhZGVyX3RvcCAuaGVhZGVyX3RvcF9sZWZ0IHVsIGxpIGEge1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRkZGO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZGVyX3RvcCAuaGVhZGVyX3RvcF9sZWZ0IHVsIGxpOmZpcnN0LWNoaWxkIGEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNGRkY7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX2xlZnQgdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzYTgyZDc7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IHVsIGxpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNGRkY7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgdWwgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xufVxuXG4uZm9ybS1ncm91cC5oYXMtc2VhcmNoIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyODBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyX2JvdHRvbSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICMyNjIyNjI7XG59XG5cbi5oZWFkZXJfYm90dG9tIC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfYm90dG9tIC5sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXJfYXJlYS5pbm5lcmhlYWRlciAuaGVhZGVyX2JvdHRvbSAubG9nbyBpbWcudHdvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXJfYXJlYS5pbm5lcmhlYWRlciAuaGVhZGVyX2JvdHRvbSAubG9nbyBpbWcub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlcl9ib3R0b20gLmxvZ28gaW1nLnR3byB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXJfYm90dG9tIC5ib29raW5nX2JveCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xufVxuXG4uaGVhZGVyX2JvdHRvbSAuYm9va2luZ19ib3ggLmJ0bi1wcmltYXJ5IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1lbnVib3gge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idG4tdG9wbWVudSB7XG4gIGNvbG9yOiAjMjgzODkxO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idG4tdG9wbWVudTpob3ZlciB7XG4gIGNvbG9yOiAjYmYxZTJkO1xufVxuXG4uaGVhZGVyX2FyZWEuaW5uZXJoZWFkZXIgLnRvcC1tZW51IHVsIGxpIGEge1xuICBjb2xvcjogIzEwMDc5ODtcbn1cblxuLmhlYWRlcl9hcmVhLmlubmVyaGVhZGVyIC50b3AtbWVudSB1bCB1bCBsaSBhOmhvdmVyLFxuLmhlYWRlcl9hcmVhLmlubmVyaGVhZGVyIC50b3AtbWVudSB1bCB1bCBsaTpob3ZlciA+IGEsXG4uaGVhZGVyX2FyZWEuaW5uZXJoZWFkZXIgLnRvcC1tZW51IHVsIHVsIGxpLmN1cnJlbnQtbWVudS1pdGVtID4gYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjMTAwNzk4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAudG9wLW1lbnUge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAudG9wLW1lbnUgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIC0xNHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAudG9wLW1lbnUgdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC50b3AtbWVudSB1bCBsaTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjM2EzNjcwO1xuICB9XG5cbiAgLnRvcC1tZW51IHVsIGxpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzFiMTg0NDtcbiAgfVxuXG4gIC50b3AtbWVudSB1bCBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRvcC1tZW51IHVsIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRvcC1tZW51IHVsIGxpIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTRweCAxNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAudG9wLW1lbnUudG9wLW1lbnUtaW5uZXIgdWwgbGkgYSB7XG4gICAgY29sb3I6ICMzYTgyZDc7XG4gIH1cblxuICAuaGVhZGVyX2JvdHRvbS5maXggLnRvcC1tZW51IHVsIGxpIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMjBweCAxOHB4O1xuICB9XG5cbiAgLmhlYWRlcl9ib3R0b20uZml4IC50b3AtbWVudSB7XG4gICAgcGFkZGluZzogMCAwO1xuICB9XG5cbiAgLmhlYWRlcl9ib3R0b20uZml4IC5ib29raW5nX2JveCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIC50b3AtbWVudSB1bCBsaSBhOmhvdmVyLFxuLnRvcC1tZW51IHVsIGxpOmhvdmVyID4gYSxcbi50b3AtbWVudSB1bCBsaS5jdXJyZW50LW1lbnUtaXRlbSA+IGEge1xuICAgIGNvbG9yOiAjZWQxYzI0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudG9wLW1lbnUgdWwgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweCAjMGEwMzViO1xuICB9XG5cbiAgLnRvcC1tZW51IHVsIHVsIGxpIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzliOWI5YjRkO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50b3AtbWVudSB1bCB1bCBsaSBhIHtcbiAgICBjb2xvcjogIzEwMDc5ODtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4gIC50b3AtbWVudSB1bCB1bCBsaSBhOmhvdmVyLFxuLnRvcC1tZW51IHVsIHVsIGxpOmhvdmVyID4gYSxcbi50b3AtbWVudSB1bCB1bCBsaS5jdXJyZW50LW1lbnUtaXRlbSA+IGEge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICMxMDA3OTg7XG4gIH1cblxuICAudG9wLW1lbnUgdWwgdWwgdWwge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnRvcC1tZW51IHVsIGxpOmhvdmVyID4gdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuXG4gIC50b3AtbWVudSB1bCB1bCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiA5OTA7XG4gICAgdG9wOiAtOTk5OWVtO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtLCBvcGFjaXR5LCB0b3A7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5LCB0b3A7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzLCAwLjNzLCAwcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzLCAwLjNzLCAwcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4zcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuM3M7XG4gIH1cblxuICAudG9wLW1lbnUgdWwgbGk6aG92ZXIgPiB1bCB7XG4gICAgdG9wOiAxMDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAudG9wLW1lbnUgdWwgdWwgbGk6aG92ZXIgPiB1bCB7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyX2FyZWEuaW5uZXJoZWFkZXIgLmhlYWRlcl9ib3R0b20uZml4IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICB9XG5cbiAgLmhlYWRlcl9ib3R0b20uZml4IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTE7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuMzEpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogIzI2MjI2MjtcbiAgfVxuXG4gIC5oZWFkZXJfYm90dG9tLmZpeCAubG9nbyB7XG4gICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmhlYWRlcl9hcmVhLmlubmVyaGVhZGVyIC5oZWFkZXJfYm90dG9tLmZpeCAudG9wLW1lbnUgdWwgbGkgYTpob3ZlciwgLmhlYWRlcl9hcmVhLmlubmVyaGVhZGVyIC5oZWFkZXJfYm90dG9tLmZpeCAudG9wLW1lbnUgdWwgbGk6aG92ZXIgPiBhLCAuaGVhZGVyX2FyZWEuaW5uZXJoZWFkZXIgLmhlYWRlcl9ib3R0b20uZml4IC50b3AtbWVudSB1bCBsaS5jdXJyZW50LW1lbnUtaXRlbSA+IGEge1xuICAgIGNvbG9yOiAjMDAwYjE5O1xuICB9XG5cbiAgLmhlYWRlcl9ib3R0b20uZml4IC5hbGxfY2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaGVhZGVyX2JvdHRvbS5maXggLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4vKi0tLSBoZWFkZXIgdG9wIGNzcyBzdGFydCAtLS0qL1xuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfbGVmdCAubG9nbyB7XG4gIHdpZHRoOiAyMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfbGVmdCAubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgLnNlYXJjaF9iYXIge1xuICB3aWR0aDogNDU2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgLnNlYXJjaF9iYXIgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmJiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweCAxMTVweCAxNXB4IDQwcHg7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IC5zZWFyY2hfYmFyIC5idG4ge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICByaWdodDogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IC5zZWFyY2hfYmFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CCXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogMTRweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgLnJlZ2lzdGVyX2JveCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDM0cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IC5yZWdpc3Rlcl9ib3ggcCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IC5yZWdpc3Rlcl9ib3ggcDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaGVhZGVyX3RvcCAuaGVhZGVyX3RvcF9yaWdodCAucmVnaXN0ZXJfYm94IGltZy5pY29uIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZWFkZXJfdG9wIC5oZWFkZXJfdG9wX3JpZ2h0IC5yZWdpc3Rlcl9ib3ggcCBhIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgLnJlZ2lzdGVyX2JveCBwIGE6aG92ZXIge1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgLnJlZ2lzdGVyX2JveCBwIGEuYWN0aXZlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWQxYzI0O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmhlYWRlcl90b3AgLmhlYWRlcl90b3BfcmlnaHQgLnJlZ2lzdGVyX2JveCBwIGEuYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICMyNjIyNjI7XG59XG5cbi5oZWFkZXJfYm90dG9tIC5hbGxfY2F0ZWdvcnkge1xuICB3aWR0aDogMjIxcHg7XG4gIGhlaWdodDogNTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA2MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2VkMWMyNDtcbn1cblxuLmhlYWRlcl9ib3R0b20gLmFsbF9jYXRlZ29yeSBpbWcuaWNvbiB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAxOHB4O1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRlcl9ib3R0b20gLmRyb3Bkb3duLW1lbnUge1xuICB3aWR0aDogMjIzcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjM5KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZWFkZXJfYm90dG9tIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgY29sb3I6ICMzMjMxNDQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xufVxuXG4uaGVhZGVyX2JvdHRvbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4uaGVhZGVyX2JvdHRvbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuXG4uaGVhZGVyX2JvdHRvbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNlZDFjMjQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluX2FyZWEge1xuICBwYWRkaW5nOiA3MHB4IDBweDtcbn1cblxuaDMuaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaDMuaDM6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDgycHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWQxYzI0O1xufVxuXG5oMi5oMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgMDtcbn1cblxuaDIuaDIgc3Ryb25nIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHotaW5kZXg6IDk7XG59XG5cbmgyLmgyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG59XG5cbmgyLmgyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbn0iXX0= */");

/***/ }),

/***/ "oyan":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/user/user-footer/user-footer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n\tCopyright 2021 ALEXEIN. All Rights Reserved.\n</footer>");

/***/ }),

/***/ "qVCW":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/default-layout/admin-default-layout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminDefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDefaultLayoutComponent", function() { return AdminDefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-default-layout.component.html */ "0+LX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");





let AdminDefaultLayoutComponent = class AdminDefaultLayoutComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.sidebarMinimized = false;
        this.animated = false;
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create().then(res => {
                this.getUserDetails();
            });
        });
    }
    getUserDetails() {
        this.storage.get('auctionAdmin').then(response => {
            //console.log(response);
            if (response != null) {
                //console.log(response.response_data);
                if (response.response_data.role_text == "Admin") {
                    //this.router.navigate(['/admin-login']);
                }
            }
            else {
                this.router.navigate(['/admin-login']);
            }
        }, err => {
        });
    }
    logout() {
        //alert(1);
        this.storage.remove("auctionAdmin");
        //this.userDetails = null;
        this.router.navigate(['/admin-login']);
        //this.menu.close();
    }
};
AdminDefaultLayoutComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminDefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'admin-app-dashboard',
        template: _raw_loader_admin_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AdminDefaultLayoutComponent);



/***/ }),

/***/ "s01X":
/*!***************************************************************************!*\
  !*** ./src/app/include/seller/seller-footer/seller-footer.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Footer CSS\n--------------------------------------------------------------------------------------------------*/\n.footer {\n  text-align: center;\n  padding: 20px 0;\n  color: #ed1c24;\n  font-weight: 300;\n  font-size: 13px;\n  background: url(/assets/images/footer-bg.jpg) 0 0 repeat-x #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VsbGVyLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTttR0FBQTtBQUVBO0VBQVEsa0JBQUE7RUFBbUIsZUFBQTtFQUFnQixjQUFBO0VBQWUsZ0JBQUE7RUFBaUIsZUFBQTtFQUFnQiwrREFBQTtBQU8zRiIsImZpbGUiOiJzZWxsZXItZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypGb290ZXIgQ1NTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZm9vdGVye3RleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOjIwcHggMDsgY29sb3I6I2VkMWMyNDsgZm9udC13ZWlnaHQ6MzAwOyBmb250LXNpemU6MTNweDsgYmFja2dyb3VuZDp1cmwoL2Fzc2V0cy9pbWFnZXMvZm9vdGVyLWJnLmpwZykgMCAwIHJlcGVhdC14ICNmZmY7fVxuXG4iXX0= */");

/***/ }),

/***/ "s1PP":
/*!****************************************************************************!*\
  !*** ./src/app/include/admin/admin-side-nav/admin-side-nav.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.site-content-contain-wrapper {\n  position: relative;\n  min-height: 400px;\n  overflow: hidden;\n}\n.site-content-contain-wrapper .left-panelbg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 278px;\n  background: #262262;\n  z-index: 0;\n}\n#left-panel {\n  width: 278px;\n  position: relative;\n  z-index: 9;\n  float: left;\n}\n#left-panel .btn-leftmenuclose {\n  width: 40px;\n  height: 40px;\n  color: #fff;\n  background: #ed1c24;\n  line-height: 40px;\n  text-align: center;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  display: none;\n}\n.leftmenu ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.leftmenu ul li {\n  margin-bottom: 1px;\n}\n.leftmenu ul li a {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 300;\n  padding: 10px 15px 10px 60px;\n  display: block;\n  position: relative;\n  border-left: solid 3px transparent;\n}\n.leftmenu ul li a .fa {\n  position: absolute;\n  left: 34px;\n  top: 14px;\n  font-size: 14px;\n}\n.leftmenu ul li a:hover,\n.leftmenu ul li:hover > a,\n.leftmenu ul li.active > a {\n  background-color: #ed1c24;\n  border-color: #fff;\n}\n.leftmenu ul li .icon {\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.leftmenu ul ul li a {\n  padding-left: 72px;\n  color: #fff;\n  font-size: 13px;\n}\n.leftmenu ul ul li a:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 60px;\n}\n.leftmenu ul ul li a:hover,\n.leftmenu ul ul li.active > a {\n  background-color: transparent;\n  border-color: transparent;\n  color: #ed1c24;\n}\n.left-panelbg,\n#left-panel {\n  margin: 0;\n}\n#main {\n  width: calc(100% - 278px);\n}\n.btn-leftmenu {\n  position: absolute;\n  left: 10px;\n  top: 22px;\n  border-radius: 5px;\n  padding: 8px;\n  font-weight: 400;\n  display: none;\n  width: 38px;\n  text-align: center;\n}\n.btn-leftmenu:before {\n  font-family: \"FontAwesome\";\n  content: \"\";\n}\n.btn-leftmenu.on:before {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQThCLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLGdCQUFBO0FBS25FO0FBSkE7RUFBNEMsa0JBQUE7RUFBbUIsT0FBQTtFQUFRLE1BQUE7RUFBTyxZQUFBO0VBQWEsWUFBQTtFQUFhLG1CQUFBO0VBQW9CLFVBQUE7QUFjNUg7QUFiQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixVQUFBO0VBQVcsV0FBQTtBQW9CdkQ7QUFsQkE7RUFBK0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxXQUFBO0VBQVksbUJBQUE7RUFBb0IsaUJBQUE7RUFBa0Isa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLE1BQUE7RUFBTyxhQUFBO0FBK0JsSztBQTdCQTtFQUFhLFVBQUE7RUFBVyxTQUFBO0VBQVUsZ0JBQUE7QUFtQ2xDO0FBbENBO0VBQWdCLGtCQUFBO0FBc0NoQjtBQXJDQTtFQUFrQixXQUFBO0VBQVksZUFBQTtFQUFnQixnQkFBQTtFQUFpQiw0QkFBQTtFQUE2QixjQUFBO0VBQWUsa0JBQUE7RUFBbUIsa0NBQUE7QUErQzlIO0FBOUNBO0VBQXNCLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxTQUFBO0VBQVUsZUFBQTtBQXFEOUQ7QUFwREE7OztFQUUyQix5QkFBQTtFQUEwQixrQkFBQTtBQXlEckQ7QUF4REE7RUFBc0IsY0FBQTtFQUFlLFdBQUE7RUFBWSxZQUFBO0FBOERqRDtBQTdEQTtFQUFxQixrQkFBQTtFQUFtQixXQUFBO0VBQVksZUFBQTtBQW1FcEQ7QUFsRUE7RUFBNEIsMEJBQUE7RUFBMkIsWUFBQTtFQUFpQixrQkFBQTtFQUFtQixTQUFBO0VBQVUsVUFBQTtBQTBFckc7QUF6RUE7O0VBQzhCLDZCQUFBO0VBQThCLHlCQUFBO0VBQTBCLGNBQUE7QUErRXRGO0FBekVBOztFQUVZLFNBQUE7QUE0RVo7QUExRUE7RUFBTSx5QkFBQTtBQThFTjtBQTdFQTtFQUFjLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxTQUFBO0VBQVUsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLGdCQUFBO0VBQWlCLGFBQUE7RUFBYyxXQUFBO0VBQVksa0JBQUE7QUF5RmpJO0FBeEZBO0VBQXFCLDBCQUFBO0VBQTJCLFlBQUE7QUE2RmhEO0FBNUZBO0VBQXdCLFlBQUE7QUFnR3hCIiwiZmlsZSI6ImFkbWluLXNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNpdGUtY29udGVudC1jb250YWluLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2l0ZS1jb250ZW50LWNvbnRhaW4td3JhcHBlciAubGVmdC1wYW5lbGJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI3OHB4O1xuICBiYWNrZ3JvdW5kOiAjMjYyMjYyO1xuICB6LWluZGV4OiAwO1xufVxuXG4jbGVmdC1wYW5lbCB7XG4gIHdpZHRoOiAyNzhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2xlZnQtcGFuZWwgLmJ0bi1sZWZ0bWVudWNsb3NlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNlZDFjMjQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGVmdG1lbnUgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5sZWZ0bWVudSB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmxlZnRtZW51IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCA2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogc29saWQgM3B4IHRyYW5zcGFyZW50O1xufVxuXG4ubGVmdG1lbnUgdWwgbGkgYSAuZmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM0cHg7XG4gIHRvcDogMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGVmdG1lbnUgdWwgbGkgYTpob3Zlcixcbi5sZWZ0bWVudSB1bCBsaTpob3ZlciA+IGEsXG4ubGVmdG1lbnUgdWwgbGkuYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmxlZnRtZW51IHVsIGxpIC5pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5sZWZ0bWVudSB1bCB1bCBsaSBhIHtcbiAgcGFkZGluZy1sZWZ0OiA3MnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubGVmdG1lbnUgdWwgdWwgbGkgYTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNjBweDtcbn1cblxuLmxlZnRtZW51IHVsIHVsIGxpIGE6aG92ZXIsXG4ubGVmdG1lbnUgdWwgdWwgbGkuYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLmxlZnQtcGFuZWxiZyxcbiNsZWZ0LXBhbmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jbWFpbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNzhweCk7XG59XG5cbi5idG4tbGVmdG1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tbGVmdG1lbnU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLvg4lcIjtcbn1cblxuLmJ0bi1sZWZ0bWVudS5vbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjVwiO1xufSJdfQ== */");

/***/ }),

/***/ "uzjm":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/seller-default-layout.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"theme\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n      <ion-item [routerLink]=\"['/seller']\" routerLinkActive=\"active\">Dashboard</ion-item>\n      <!-- <ion-item [routerLink]=\"['/seller/category-add']\" routerLinkActive=\"active\">Category Add</ion-item>\n      <ion-item [routerLink]=\"['/seller/category-list']\" routerLinkActive=\"active\">Category List</ion-item>\n      <ion-item [routerLink]=\"['/seller/sub-category-add']\" routerLinkActive=\"active\">Sub Category Add</ion-item>\n      <ion-item [routerLink]=\"['/seller/sub-category-list']\" routerLinkActive=\"active\">Sub Category List</ion-item> -->\n      <ion-item [routerLink]=\"['/seller/product-add']\" routerLinkActive=\"active\">Product Add</ion-item>\n      <ion-item [routerLink]=\"['/seller/product-list']\" routerLinkActive=\"active\">Product List</ion-item>\n      <ion-item [routerLink]=\"['/seller/group-add']\" routerLinkActive=\"active\">Group Add</ion-item>\n      <ion-item [routerLink]=\"['/seller/group-list']\" routerLinkActive=\"active\">Group List</ion-item>\n      <ion-item [routerLink]=\"['/seller/product-add-group']\" routerLinkActive=\"active\">Product Add To Group</ion-item>\n      <ion-item [routerLink]=\"['/seller/profile']\" routerLinkActive=\"active\">My Profile</ion-item>\n      <ion-item (click)=\"logout()\" style=\"cursor: pointer;\" routerLinkActive=\"active\">Logout</ion-item>\n    </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet [animated]=\"animated\" id=\"main\"></ion-router-outlet>");

/***/ }),

/***/ "vNbm":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/user/user-side-nav/user-side-nav.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  user-side-nav works!\n</p>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | user-user-login-user-login-module */ "user-user-login-user-login-module").then(__webpack_require__.bind(null, /*! ./user/user-login/user-login.module */ "elCr")).then(m => m.UserLoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => Promise.all(/*! import() | user-user-registration-user-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("user-user-registration-user-registration-module")]).then(__webpack_require__.bind(null, /*! ./user/user-registration/user-registration.module */ "Va5f")).then(m => m.UserRegistrationPageModule)
    },
    {
        path: 'seller-login',
        loadChildren: () => __webpack_require__.e(/*! import() | seller-seller-login-seller-login-module */ "seller-seller-login-seller-login-module").then(__webpack_require__.bind(null, /*! ./seller/seller-login/seller-login.module */ "uOCY")).then(m => m.SellerLoginPageModule)
    },
    {
        path: 'seller-registration',
        loadChildren: () => Promise.all(/*! import() | seller-seller-registration-seller-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("seller-seller-registration-seller-registration-module")]).then(__webpack_require__.bind(null, /*! ./seller/seller-registration/seller-registration.module */ "tjxZ")).then(m => m.SellerRegistrationPageModule)
    },
    {
        path: 'live-auctions',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-live-auctions-live-auctions-module */ "pages-live-auctions-live-auctions-module").then(__webpack_require__.bind(null, /*! ./pages/live-auctions/live-auctions.module */ "UGf8")).then(m => m.LiveAuctionsPageModule)
    },
    {
        path: 'product-details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | product-details-product-details-module */ "product-details-product-details-module").then(__webpack_require__.bind(null, /*! ./product-details/product-details.module */ "SqMz")).then(m => m.ProductDetailsPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-faq-faq-module */ "pages-faq-faq-module").then(__webpack_require__.bind(null, /*! ./pages/faq/faq.module */ "BhQr")).then(m => m.FaqPageModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-contact-us-contact-us-module */ "pages-contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ./pages/contact-us/contact-us.module */ "QCdY")).then(m => m.ContactUsPageModule)
    },
    {
        path: 'seller',
        loadChildren: () => __webpack_require__.e(/*! import() | seller-seller-module */ "seller-seller-module").then(__webpack_require__.bind(null, /*! ./seller/seller.module */ "2P2X")).then(m => m.SellerModule),
    },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule),
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule),
    },
    {
        path: 'admin-login',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-login-admin-login-module */ "admin-admin-login-admin-login-module").then(__webpack_require__.bind(null, /*! ./admin/admin-login/admin-login.module */ "LiIn")).then(m => m.AdminLoginPageModule)
    },
    {
        path: 'not-found',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-not-found-not-found-module */ "pages-not-found-not-found-module").then(__webpack_require__.bind(null, /*! ./pages/not-found/not-found.module */ "jSwP")).then(m => m.NotFoundPageModule)
    },
    { path: '**', redirectTo: 'not-found' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "w1uC":
/*!*************************************************************************!*\
  !*** ./src/app/include/seller/seller-header/seller-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: SellerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerHeaderComponent", function() { return SellerHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-header.component.html */ "4xsF");
/* harmony import */ var _seller_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-header.component.scss */ "DSeJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SellerHeaderComponent = class SellerHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
SellerHeaderComponent.ctorParameters = () => [];
SellerHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-header',
        template: _raw_loader_seller_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerHeaderComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map