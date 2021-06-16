(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-product-list-admin-product-list-module"], {
    /***/
    "JkdR":
    /*!***********************************************************************!*\
      !*** ./src/app/admin/admin-product-list/admin-product-list.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AdminProductListPageModule */

    /***/
    function JkdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductListPageModule", function () {
        return AdminProductListPageModule;
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


      var _admin_product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-product-list-routing.module */
      "LEkb");
      /* harmony import */


      var _admin_product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-product-list.page */
      "oYpw");

      var AdminProductListPageModule = function AdminProductListPageModule() {
        _classCallCheck(this, AdminProductListPageModule);
      };

      AdminProductListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminProductListPageRoutingModule"]],
        declarations: [_admin_product_list_page__WEBPACK_IMPORTED_MODULE_6__["AdminProductListPage"]]
      })], AdminProductListPageModule);
      /***/
    },

    /***/
    "LEkb":
    /*!*******************************************************************************!*\
      !*** ./src/app/admin/admin-product-list/admin-product-list-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: AdminProductListPageRoutingModule */

    /***/
    function LEkb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductListPageRoutingModule", function () {
        return AdminProductListPageRoutingModule;
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


      var _admin_product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-product-list.page */
      "oYpw");

      var routes = [{
        path: '',
        component: _admin_product_list_page__WEBPACK_IMPORTED_MODULE_3__["AdminProductListPage"]
      }];

      var AdminProductListPageRoutingModule = function AdminProductListPageRoutingModule() {
        _classCallCheck(this, AdminProductListPageRoutingModule);
      };

      AdminProductListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminProductListPageRoutingModule);
      /***/
    },

    /***/
    "Ws+F":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-product-list/admin-product-list.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WsF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Product list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Products...\n        </div> -->\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Title</th>\n                <th>\n                  Sort Description\n                </th>\n                <th>Bid Starting Price</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let p of pList\">\n                <td>{{p.product_name}}</td>\n                <td>\n                  {{p.product_short_description}}\n                </td>\n                <td>{{p.product_bid_starting_price}}</td>\n                <td><button *ngIf=\"p.status=='1'\"  class=\"btn btn-sm btn-success\" ><i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Active</button>\n                  <button *ngIf=\"p.status=='0'\"  class=\"btn btn-sm btn-warning\" ><i class=\"fa fa-times-circle-o \" aria-hidden=\"true\"></i> Deactive</button>\n                </td>\n                <td>\n                  <button (click)=\"deleteProduct(p)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                  <button  routerLink=\"/admin/product-update/{{p.id}}\"><i class=\"fa fa-edit\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <!-- <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav> -->\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "oYpw":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/admin-product-list/admin-product-list.page.ts ***!
      \*********************************************************************/

    /*! exports provided: AdminProductListPage */

    /***/
    function oYpw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductListPage", function () {
        return AdminProductListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_product_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-product-list.page.html */
      "Ws+F");
      /* harmony import */


      var _admin_product_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-product-list.page.scss */
      "zYih");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AdminProductListPage = /*#__PURE__*/function () {
        function AdminProductListPage(http, loadingController, alertController) {
          _classCallCheck(this, AdminProductListPage);

          this.http = http;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
        }

        _createClass(AdminProductListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.productList();
          }
        }, {
          key: "productList",
          value: function productList() {
            var _this = this;

            var formData = new FormData();
            formData.append('', '');
            this.http.post(this.url + 'product-list', formData).subscribe(function (res) {
              if (res && res.status) {
                _this.pList = res.response_data;
              } else {
                _this.pList = null;
              }
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(p) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var formData, successalrt, fail, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //this.loadingShow();
                      formData = new FormData();
                      formData.append('product_id', p.id);
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
                            if (p.id) {
                              _this2.loadingShow();

                              _this2.http.post(_this2.url + 'product-remove', formData).subscribe(function (res) {
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

                                  _this2.productList();
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
          key: "editProduct",
          value: function editProduct(c) {}
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

        return AdminProductListPage;
      }();

      AdminProductListPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      AdminProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-product-list',
        template: _raw_loader_admin_product_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_product_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminProductListPage);
      /***/
    },

    /***/
    "zYih":
    /*!***********************************************************************!*\
      !*** ./src/app/admin/admin-product-list/admin-product-list.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function zYih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9kdWN0LWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-product-list-admin-product-list-module-es5.js.map