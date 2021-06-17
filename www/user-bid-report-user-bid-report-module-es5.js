(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-bid-report-user-bid-report-module"], {
    /***/
    "09GN":
    /*!****************************************************************!*\
      !*** ./src/app/user/user-bid-report/user-bid-report.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function GN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table th {\n  color: #262262;\n  font-weight: 500;\n}\n\n.table tfoot {\n  background-color: #c6223e;\n  color: #fff;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWJpZC1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsY0FBQTtFQUFlLGdCQUFBO0FBR3pCOztBQUZBO0VBQWEseUJBQUE7RUFBMEIsV0FBQTtFQUFZLGdCQUFBO0FBUW5EIiwiZmlsZSI6InVzZXItYmlkLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGh7Y29sb3I6IzI2MjI2MjsgZm9udC13ZWlnaHQ6NTAwO31cbi50YWJsZSB0Zm9vdHtiYWNrZ3JvdW5kLWNvbG9yOiNjNjIyM2U7IGNvbG9yOiNmZmY7IGZvbnQtd2VpZ2h0OjUwMDt9XG4iXX0= */";
      /***/
    },

    /***/
    "de0s":
    /*!************************************************************************!*\
      !*** ./src/app/user/user-bid-report/user-bid-report-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: UserBidReportPageRoutingModule */

    /***/
    function de0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserBidReportPageRoutingModule", function () {
        return UserBidReportPageRoutingModule;
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


      var _user_bid_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-bid-report.page */
      "lEN4");

      var routes = [{
        path: '',
        component: _user_bid_report_page__WEBPACK_IMPORTED_MODULE_3__["UserBidReportPage"]
      }];

      var UserBidReportPageRoutingModule = function UserBidReportPageRoutingModule() {
        _classCallCheck(this, UserBidReportPageRoutingModule);
      };

      UserBidReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserBidReportPageRoutingModule);
      /***/
    },

    /***/
    "k8Z8":
    /*!****************************************************************!*\
      !*** ./src/app/user/user-bid-report/user-bid-report.module.ts ***!
      \****************************************************************/

    /*! exports provided: UserBidReportPageModule */

    /***/
    function k8Z8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserBidReportPageModule", function () {
        return UserBidReportPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _user_bid_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-bid-report-routing.module */
      "de0s");
      /* harmony import */


      var _user_bid_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-bid-report.page */
      "lEN4");

      var UserBidReportPageModule = function UserBidReportPageModule() {
        _classCallCheck(this, UserBidReportPageModule);
      };

      UserBidReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_bid_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserBidReportPageRoutingModule"]],
        declarations: [_user_bid_report_page__WEBPACK_IMPORTED_MODULE_6__["UserBidReportPage"]]
      })], UserBidReportPageModule);
      /***/
    },

    /***/
    "lEN4":
    /*!**************************************************************!*\
      !*** ./src/app/user/user-bid-report/user-bid-report.page.ts ***!
      \**************************************************************/

    /*! exports provided: UserBidReportPage */

    /***/
    function lEN4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserBidReportPage", function () {
        return UserBidReportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_bid_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-bid-report.page.html */
      "qN01");
      /* harmony import */


      var _user_bid_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-bid-report.page.scss */
      "09GN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var UserBidReportPage = /*#__PURE__*/function () {
        function UserBidReportPage(http, alertController, formBuilder, loadingController, storage, router, route) {
          _classCallCheck(this, UserBidReportPage);

          this.http = http;
          this.alertController = alertController;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.storage = storage;
          this.router = router;
          this.route = route;
          this.image_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["image_path"];
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
        }

        _createClass(UserBidReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.create().then(function (res) {
              _this.getUserDetails();
            });
            this.bidListGet();
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this2 = this;

            this.storage.get('auctionUser').then(function (response) {
              //console.log(response);
              if (response && response.response_data && response.response_data.id) {
                _this2.userId = response.response_data.id;
                console.log(_this2.userId);
              } else {
                _this2.userId = null;
              }
            }, function (err) {
              _this2.userId = null;
            });
          }
        }, {
          key: "bidListGet",
          value: function bidListGet() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('user_id', this.userId);
            this.http.post(this.url + 'user-bid-list', formData).subscribe(function (res) {
              console.log(res);

              if (res && res.status) {
                _this3.bidlist = res.response_data;
              } else {
                _this3.bidlist = null;
              }
            });
          }
        }]);

        return UserBidReportPage;
      }();

      UserBidReportPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      UserBidReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-bid-report',
        template: _raw_loader_user_bid_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_bid_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserBidReportPage);
      /***/
    },

    /***/
    "qN01":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-bid-report/user-bid-report.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qN01(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bid Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Report...\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Image</th>\n                <th>Title</th>\n                <th>End Time</th>\n                <th>Pickup Location</th>\n                <th>Current Bid</th>\n                <th>Your Max Bid</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Product 1</td>\n                <td>2021/01/01</td>\n                 <td>Product 1</td>\n                <td>2021/01/01</td>\n                 <td>Product 1</td>\n                \n                <td>\n                  <div class=\"form-group\">\n                    <input type=\"\" class=\"form-control1\" name=\"\" placeholder=\"00\">\n                  <button><span class=\"badge badge-success\">MAX BID</span></button>\n                  </div>\n                  \n                  \n                </td>\n              </tr>\n            \n          \n            </tbody>\n          </table>\n         <!--  <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav> -->\n\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-bid-report-user-bid-report-module-es5.js.map