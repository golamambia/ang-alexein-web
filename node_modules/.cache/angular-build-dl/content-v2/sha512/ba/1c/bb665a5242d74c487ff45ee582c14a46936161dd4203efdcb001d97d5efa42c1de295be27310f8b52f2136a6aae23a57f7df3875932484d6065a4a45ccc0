(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-buyer-list-user-list-module"], {
    /***/
    "4by6":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/buyer-list/user-list.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function by6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Buyer List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Products...\n        </div> -->\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n               <tr>\n                <th>Buyer Name</th>\n                <th>Email</th>\n                <th>Created At</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let c of sellList\">\n                <td>{{c.name}}</td>\n                <td>{{c.email}}</td>\n                <td>{{c.created_at}}</td>\n                <td>\n                  <button (click)=\"deleteData(c)\" title=\"Delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                  <button (click)=\"editCategory(c)\" title=\"Edit\" routerLink=\"/admin/buyer-update/{{c.id}}\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li> -->\n              <!-- <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li> -->\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li> -->\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li> -->\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "P7Kr":
    /*!******************************************************!*\
      !*** ./src/app/admin/buyer-list/user-list.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function P7Kr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "cpkS":
    /*!******************************************************!*\
      !*** ./src/app/admin/buyer-list/user-list.module.ts ***!
      \******************************************************/

    /*! exports provided: UserListPageModule */

    /***/
    function cpkS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListPageModule", function () {
        return UserListPageModule;
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


      var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-list-routing.module */
      "fU8V");
      /* harmony import */


      var _user_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-list.page */
      "rn6V");

      var UserListPageModule = function UserListPageModule() {
        _classCallCheck(this, UserListPageModule);
      };

      UserListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserListPageRoutingModule"]],
        declarations: [_user_list_page__WEBPACK_IMPORTED_MODULE_6__["UserListPage"]]
      })], UserListPageModule);
      /***/
    },

    /***/
    "fU8V":
    /*!**************************************************************!*\
      !*** ./src/app/admin/buyer-list/user-list-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: UserListPageRoutingModule */

    /***/
    function fU8V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListPageRoutingModule", function () {
        return UserListPageRoutingModule;
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


      var _user_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-list.page */
      "rn6V");

      var routes = [{
        path: '',
        component: _user_list_page__WEBPACK_IMPORTED_MODULE_3__["UserListPage"]
      }];

      var UserListPageRoutingModule = function UserListPageRoutingModule() {
        _classCallCheck(this, UserListPageRoutingModule);
      };

      UserListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserListPageRoutingModule);
      /***/
    },

    /***/
    "rn6V":
    /*!****************************************************!*\
      !*** ./src/app/admin/buyer-list/user-list.page.ts ***!
      \****************************************************/

    /*! exports provided: UserListPage */

    /***/
    function rn6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListPage", function () {
        return UserListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-list.page.html */
      "4by6");
      /* harmony import */


      var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-list.page.scss */
      "P7Kr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var UserListPage = /*#__PURE__*/function () {
        function UserListPage(loadingController, http, alertController) {
          _classCallCheck(this, UserListPage);

          this.loadingController = loadingController;
          this.http = http;
          this.alertController = alertController;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_URL;
        }

        _createClass(UserListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataList();
          }
        }, {
          key: "dataList",
          value: function dataList() {
            var _this = this;

            var formData = new FormData();
            formData.append('', '');
            this.http.post(this.url + 'buyer-list', formData).subscribe(function (res) {
              //console.log(res);
              if (res && res.status) {
                _this.sellList = res.response_data;
              } else {
                _this.sellList = null;
              }
            });
          }
        }, {
          key: "deleteData",
          value: function deleteData(c) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var formData, successalrt, fail, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // this.loadingShow();
                      formData = new FormData();
                      formData.append('user_id', c.id);
                      _context.next = 4;
                      return this.alertController.create({
                        message: 'Data successfully delete',
                        buttons: ['OK']
                      });

                    case 4:
                      successalrt = _context.sent;
                      _context.next = 7;
                      return this.alertController.create({
                        message: 'Something went wrong',
                        buttons: ['OK']
                      });

                    case 7:
                      fail = _context.sent;
                      _context.next = 10;
                      return this.alertController.create({
                        message: 'Are you sure to delete',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            //console.log('Confirm Okay');
                            if (c.id) {
                              _this2.loadingShow();

                              _this2.http.post(_this2.url + 'user-delete', formData).subscribe(function (res) {
                                // this.res = res.json();
                                //console.log(res);
                                if (res.status == false) {
                                  fail.present();

                                  _this2.loadingHide();
                                } else if (res.status == true) {
                                  successalrt.present(); //this.constructor();
                                  //this.navCtrl.navigateForward('address-list');

                                  //this.constructor();
                                  //this.navCtrl.navigateForward('address-list');
                                  _this2.loadingHide();

                                  _this2.dataList();
                                } else {
                                  //alert("Server error");
                                  _this2.loadingHide();
                                }
                              }, function (err) {
                                console.log(err);

                                _this2.loadingHide();
                              });
                            }
                          }
                        }]
                      });

                    case 10:
                      alert = _context.sent;
                      _context.next = 13;
                      return alert.present();

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "editCategory",
          value: function editCategory(c) {}
        }, {
          key: "loadingShow",
          value: function loadingShow() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadingHide",
          value: function loadingHide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return UserListPage;
      }();

      UserListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      UserListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-list',
        template: _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-buyer-list-user-list-module-es5.js.map