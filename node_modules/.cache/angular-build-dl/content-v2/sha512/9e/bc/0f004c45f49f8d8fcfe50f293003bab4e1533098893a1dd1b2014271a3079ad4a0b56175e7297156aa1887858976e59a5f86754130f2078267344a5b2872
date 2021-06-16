(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-category-add-seller-category-add-module"], {
    /***/
    "K1TP":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-category-add/seller-category-add.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K1TP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Add new category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> Category Add</h1>\n        </div>\n        <div class=\"profile_form_area\">\n          <form [formGroup]=\"categoryForm\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Category Name</label>\n                <input type=\"text\" formControlName=\"category_name\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.category_name.errors }\" placeholder=\"Category name\">\n                <div *ngIf=\"submitted && f.category_name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.category_name.errors.required\">Name is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Category Image</label>\n                <input type=\"file\" (change)=\"importFile($event)\" formControlName=\"category_picture\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.category_picture.errors }\" placeholder=\"Category Image\">\n                <div *ngIf=\"submitted && f.category_picture.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.category_picture.errors.required\">Picture is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                <textarea formControlName=\"category_description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.category_description.errors }\" placeholder=\"Category description\"></textarea>\n                <div *ngIf=\"submitted && f.category_description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.category_description.errors.required\">Description is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"submit()\">SUBMIT</button>\n            </div>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "LLCT":
    /*!**************************************************************************!*\
      !*** ./src/app/seller/seller-category-add/seller-category-add.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function LLCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxsZXItY2F0ZWdvcnktYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLFdBQUE7RUFBWSxXQUFBO0FBR2xCOztBQURBO0VBQVMsYUFBQTtBQUtUOztBQUpBO0VBQWEsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLHVDQUFBO0VBQXdDLGdCQUFBO0VBQWlCLGtCQUFBO0FBYXZIOztBQVpBO0VBQWdCLFNBQUE7RUFBVSxVQUFBO0VBQVcsZUFBQTtFQUFnQixpQkFBQTtBQW1CckQ7O0FBbEJBO0VBQXNCLFdBQUE7RUFBWSxZQUFBO0VBQWEsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsV0FBQTtFQUFZLGVBQUE7RUFBZ0Isa0JBQUE7QUE4QnZKOztBQTVCQSwwQ0FBQTs7QUFDQTtFQUNDLGtCQUFBO0VBQ0csdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBK0JKOztBQTdCQTtFQUNDLGVBQUE7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWdDSjs7QUE5QkE7RUFDQyxnQkFBQTtFQUNBLHFCQUFBO0FBaUNEOztBQS9CQTtFQUNDLGFBQUE7QUFrQ0Q7O0FBaENBO0VBQ0ksaUJBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksa0JBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFzQ0o7O0FBcENBO0VBQ0MsV0FBQTtBQXVDRDs7QUFyQ0EseUNBQUEiLCJmaWxlIjoic2VsbGVyLWNhdGVnb3J5LWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlO31cblxuI2NvbnRlbnR7cGFkZGluZzozMHB4O31cbi5wYWdlLWhlYWRlcnttYXJnaW46MCAwIDMwcHg7IHBhZGRpbmc6MTBweCAxOHB4OyBib3JkZXI6bm9uZTsgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo1cHg7fVxuLnBhZ2UtaGVhZGVyIGgxe21hcmdpbjowOyBwYWRkaW5nOjA7IGZvbnQtc2l6ZToxOHB4OyBsaW5lLWhlaWdodDozMHB4O31cbi5wYWdlLWhlYWRlciBoMSAuaWNvbnt3aWR0aDozMHB4OyBoZWlnaHQ6MzBweDsgYmFja2dyb3VuZDojZWQxYzI0OyBib3JkZXItcmFkaXVzOjNweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGxpbmUtaGVpZ2h0OjMwcHg7IGNvbG9yOiNmZmY7IGZvbnQtc2l6ZToxNHB4OyBtYXJnaW4tcmlnaHQ6MTBweDt9XG5cbi8qLS0tLS0tLSBwcm9maWxlIGZvcm0gY3NzIHN0YXJ0IC0tLS0tLS0tKi9cbi5wcm9maWxlX2Zvcm1fYXJlYXtcblx0cGFkZGluZzogMThweCAxOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDEwJSk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmZvcm0tZ3JvdXAgbGFiZWx7XG5cdGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmZvcm0tY29udHJvbDpmb2N1c3tcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0Ym9yZGVyLWNvbG9yOiAjMjYyMjYyO1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIHRleHRhcmVhLmZvcm0tY29udHJvbHtcblx0aGVpZ2h0OiAxMjBweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCB7XG4gICAgd2lkdGg6IDc2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyMjYyO1xuICAgIGJvcmRlci1jb2xvcjogIzI2MjI2MjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnBhZ2luYXRpb24+bGk+YSwgLnBhZ2luYXRpb24+bGk+c3Bhbntcblx0Y29sb3I6ICMwMDA7XG59XG4vKi0tLS0tLS0gcHJvZmlsZSBmb3JtIGNzcyBzdG9wIC0tLS0tLS0tKi8iXX0= */";
      /***/
    },

    /***/
    "bFiY":
    /*!**********************************************************************************!*\
      !*** ./src/app/seller/seller-category-add/seller-category-add-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: SellerCategoryAddPageRoutingModule */

    /***/
    function bFiY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerCategoryAddPageRoutingModule", function () {
        return SellerCategoryAddPageRoutingModule;
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


      var _seller_category_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seller-category-add.page */
      "ujAd");

      var routes = [{
        path: '',
        component: _seller_category_add_page__WEBPACK_IMPORTED_MODULE_3__["SellerCategoryAddPage"]
      }];

      var SellerCategoryAddPageRoutingModule = function SellerCategoryAddPageRoutingModule() {
        _classCallCheck(this, SellerCategoryAddPageRoutingModule);
      };

      SellerCategoryAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellerCategoryAddPageRoutingModule);
      /***/
    },

    /***/
    "sCVv":
    /*!**************************************************************************!*\
      !*** ./src/app/seller/seller-category-add/seller-category-add.module.ts ***!
      \**************************************************************************/

    /*! exports provided: SellerCategoryAddPageModule */

    /***/
    function sCVv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerCategoryAddPageModule", function () {
        return SellerCategoryAddPageModule;
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


      var _seller_category_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seller-category-add-routing.module */
      "bFiY");
      /* harmony import */


      var _seller_category_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seller-category-add.page */
      "ujAd");

      var SellerCategoryAddPageModule = function SellerCategoryAddPageModule() {
        _classCallCheck(this, SellerCategoryAddPageModule);
      };

      SellerCategoryAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seller_category_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerCategoryAddPageRoutingModule"]],
        exports: [_seller_category_add_page__WEBPACK_IMPORTED_MODULE_6__["SellerCategoryAddPage"]],
        declarations: [_seller_category_add_page__WEBPACK_IMPORTED_MODULE_6__["SellerCategoryAddPage"]]
      })], SellerCategoryAddPageModule);
      /***/
    },

    /***/
    "ujAd":
    /*!************************************************************************!*\
      !*** ./src/app/seller/seller-category-add/seller-category-add.page.ts ***!
      \************************************************************************/

    /*! exports provided: SellerCategoryAddPage */

    /***/
    function ujAd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerCategoryAddPage", function () {
        return SellerCategoryAddPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_seller_category_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./seller-category-add.page.html */
      "K1TP");
      /* harmony import */


      var _seller_category_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./seller-category-add.page.scss */
      "LLCT");
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var SellerCategoryAddPage = /*#__PURE__*/function () {
        function SellerCategoryAddPage(alertController, http, formBuilder, loadingController) {
          _classCallCheck(this, SellerCategoryAddPage);

          this.alertController = alertController;
          this.http = http;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.submitted = false;
          this.imageLoaded = false;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL;
        }

        _createClass(SellerCategoryAddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoryForm = this.formBuilder.group({
              category_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              category_picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              category_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.submitted = true;

            if (this.categoryForm.invalid) {
              return;
            } else {
              this.loadingShow();
              var formData = new FormData();
              formData.append('category_name', this.categoryForm.value.category_name);
              formData.append('category_picture', this.image);
              formData.append('category_description', this.categoryForm.value.category_description);
              formData.append('category_status', '1');
              this.http.post(this.url + 'category-add', formData).subscribe(function (res) {
                _this.loadingHide();

                if (res.status) {
                  _this.categoryForm.reset();

                  _this.submitted = false;

                  _this.presentAlert('Success!', '', res.message ? res.message : 'Seccessfully added.');
                } else {
                  _this.presentAlert('Error!', '', 'Server error, please try again later');
                }
              }, function (err) {
                _this.loadingHide();

                _this.presentAlert('Error!', '', 'Server error, please try again later');
              });
            }
          }
        }, {
          key: "loadingShow",
          value: function loadingShow() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadingHide",
          value: function loadingHide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "f",
          get: function get() {
            return this.categoryForm.controls;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, subHeader, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: header,
                        subHeader: subHeader,
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "importFile",
          value: function importFile(event) {
            if (event.target.files && event.target.files.length > 0) {
              var files = event.target.files || event.dataTransfer.files;
              if (!files.length) return;
              var fileName = files[0].name.toUpperCase();

              if (fileName.endsWith(".JPG") || fileName.endsWith(".JPEG") || fileName.endsWith(".PNG")) {
                this.image = files[0];
                this.imageLoaded = true;
              } else {
                this.image = null;
                this.presentAlert("Error!", "", "Please select a valid image file jpeg/jpg/png");
              }
            }
          }
        }]);

        return SellerCategoryAddPage;
      }();

      SellerCategoryAddPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      SellerCategoryAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-category-add',
        template: _raw_loader_seller_category_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_category_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SellerCategoryAddPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=seller-seller-category-add-seller-category-add-module-es5.js.map