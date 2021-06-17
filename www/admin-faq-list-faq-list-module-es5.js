(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-faq-list-faq-list-module"], {
    /***/
    "Ambs":
    /*!***************************************************!*\
      !*** ./src/app/admin/faq-list/faq-list.module.ts ***!
      \***************************************************/

    /*! exports provided: FaqListPageModule */

    /***/
    function Ambs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqListPageModule", function () {
        return FaqListPageModule;
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


      var _faq_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./faq-list-routing.module */
      "aVNy");
      /* harmony import */


      var _faq_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./faq-list.page */
      "xDPb");

      var FaqListPageModule = function FaqListPageModule() {
        _classCallCheck(this, FaqListPageModule);
      };

      FaqListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _faq_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqListPageRoutingModule"]],
        declarations: [_faq_list_page__WEBPACK_IMPORTED_MODULE_6__["FaqListPage"]]
      })], FaqListPageModule);
      /***/
    },

    /***/
    "ETuP":
    /*!***************************************************!*\
      !*** ./src/app/admin/faq-list/faq-list.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function ETuP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEtbGlzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "aVNy":
    /*!***********************************************************!*\
      !*** ./src/app/admin/faq-list/faq-list-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: FaqListPageRoutingModule */

    /***/
    function aVNy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqListPageRoutingModule", function () {
        return FaqListPageRoutingModule;
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


      var _faq_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./faq-list.page */
      "xDPb");

      var routes = [{
        path: '',
        component: _faq_list_page__WEBPACK_IMPORTED_MODULE_3__["FaqListPage"]
      }];

      var FaqListPageRoutingModule = function FaqListPageRoutingModule() {
        _classCallCheck(this, FaqListPageRoutingModule);
      };

      FaqListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FaqListPageRoutingModule);
      /***/
    },

    /***/
    "cqx0":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/faq-list/faq-list.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function cqx0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Faq List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Products...\n        </div> -->\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                \n               <th>Question</th>\n                <th>Answer</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n               <tr *ngFor=\"let c of catList\">\n                <td>{{c.faq_question}}</td>\n                <td>{{c.faq_asware}}</td>\n                \n                <td>\n                  <button (click)=\"deleteFaq(c)\" title=\"Delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                  <button routerLink=\"/admin/faq-update/{{c.id}}\" title=\"Edit\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li> -->\n              <!-- <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li> -->\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li> -->\n              <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li> -->\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "xDPb":
    /*!*************************************************!*\
      !*** ./src/app/admin/faq-list/faq-list.page.ts ***!
      \*************************************************/

    /*! exports provided: FaqListPage */

    /***/
    function xDPb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqListPage", function () {
        return FaqListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faq_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faq-list.page.html */
      "cqx0");
      /* harmony import */


      var _faq_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faq-list.page.scss */
      "ETuP");
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

      var FaqListPage = /*#__PURE__*/function () {
        function FaqListPage(loadingController, http, alertController) {
          _classCallCheck(this, FaqListPage);

          this.loadingController = loadingController;
          this.http = http;
          this.alertController = alertController;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_URL;
        }

        _createClass(FaqListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.faqList();
          }
        }, {
          key: "faqList",
          value: function faqList() {
            var _this = this;

            var formData = new FormData();
            formData.append('', '');
            this.http.post(this.url + 'get-faq-list', formData).subscribe(function (res) {
              //console.log(res);
              if (res && res.status) {
                _this.catList = res.response_data;
              } else {
                _this.catList = null;
              }
            });
          }
        }, {
          key: "deleteFaq",
          value: function deleteFaq(c) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var formData, successalrt, fail, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // this.loadingShow();
                      formData = new FormData();
                      formData.append('faq_id', c.id);
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

                              _this2.http.post(_this2.url + 'destroy-faq', formData).subscribe(function (res) {
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

                                  _this2.faqList();
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

        return FaqListPage;
      }();

      FaqListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      FaqListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faq-list',
        template: _raw_loader_faq_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faq_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FaqListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-faq-list-faq-list-module-es5.js.map