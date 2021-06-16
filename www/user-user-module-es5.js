(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "7UCR":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserModule */

    /***/
    function UCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-routing.module */
      "Yu5h");
      /* harmony import */


      var _include_include_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../include/include.module */
      "+TEy");

      var UserModule = function UserModule() {
        _classCallCheck(this, UserModule);
      };

      UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["BaseRoutingModule"], _include_include_module__WEBPACK_IMPORTED_MODULE_5__["IncludeModule"]]
      })], UserModule);
      /***/
    },

    /***/
    "Yu5h":
    /*!*********************************************!*\
      !*** ./src/app/user/user-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: BaseRoutingModule */

    /***/
    function Yu5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function () {
        return BaseRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../containers */
      "G/4p");

      var routes = [{
        path: '',
        data: {
          title: 'User'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["UserDefaultLayoutComponent"],
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'dashboard'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | user-dashboard-user-dashboard-module */
            "user-dashboard-user-dashboard-module").then(__webpack_require__.bind(null,
            /*! ./user-dashboard/user-dashboard.module */
            "R15X")).then(function (m) {
              return m.UserDashboardPageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | user-profile-user-profile-module */
            "user-profile-user-profile-module").then(__webpack_require__.bind(null,
            /*! ./user-profile/user-profile.module */
            "22df")).then(function (m) {
              return m.UserProfilePageModule;
            });
          }
        }, {
          path: 'bid-report',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | user-bid-report-user-bid-report-module */
            "user-bid-report-user-bid-report-module").then(__webpack_require__.bind(null,
            /*! ./user-bid-report/user-bid-report.module */
            "k8Z8")).then(function (m) {
              return m.UserBidReportPageModule;
            });
          }
        }]
      }];

      var BaseRoutingModule = function BaseRoutingModule() {
        _classCallCheck(this, BaseRoutingModule);
      };

      BaseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BaseRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map