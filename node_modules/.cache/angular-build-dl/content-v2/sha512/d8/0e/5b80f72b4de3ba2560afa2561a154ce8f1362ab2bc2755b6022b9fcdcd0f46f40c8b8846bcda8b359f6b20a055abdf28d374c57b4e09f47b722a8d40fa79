(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"], {
    /***/
    "22df":
    /*!**********************************************************!*\
      !*** ./src/app/user/user-profile/user-profile.module.ts ***!
      \**********************************************************/

    /*! exports provided: UserProfilePageModule */

    /***/
    function df(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function () {
        return UserProfilePageModule;
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


      var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-profile-routing.module */
      "Z6J+");
      /* harmony import */


      var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-profile.page */
      "gYpq");

      var UserProfilePageModule = function UserProfilePageModule() {
        _classCallCheck(this, UserProfilePageModule);
      };

      UserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfilePageRoutingModule"]],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
      })], UserProfilePageModule);
      /***/
    },

    /***/
    "QLfE":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-profile/user-profile.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QLfE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>User Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> Profile</h1>\n        </div>\n\n        <div class=\"profile_form_area\">\n          \n          \n          <form >\n          <div class=\"row\">\n            \n            <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Full name <sup>*</sup>\n                         \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter your full name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Email address <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"email\"name=\"email\" ngModel #emailref=\"ngModel\" readonly=\"\">\n          <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class =\"alert alert-danger\">\n           <div [hidden]=\"!emailref.errors?.pattern\">\n             Invalid pattern\n           </div>\n                      </div>\n                    </div>\n                  </div>\n                    \n                    \n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Mobile number <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"phone_no\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\" \n                          placeholder=\"Enter your mobile no.\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"12\">\n                      </div>\n                    </div>\n                   \n                    \n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Billing address <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"billing_address\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\" \n                          placeholder=\"Enter billing address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Country <sup>*</sup>\n                         \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"country\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter country name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>State <sup>*</sup>\n                         \n                        </label>\n                        <select [(ngModel)]=\"state\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\" >\n                          <option disabled selected value=\"\">Select State</option>\n                          <option value=\"West Bengal\">West Bengal</option>\n                          <option value=\"other\">Other</option>\n                        </select>\n                        \n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>City <sup>*</sup>\n                        \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"city\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter city name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Zip code <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"zip\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter zip code\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"6\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Date of birth <sup>*</sup>\n                        \n                        </label>\n                        <input [(ngModel)]=\"dob\" type=\"date\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                          >\n                      \n                      </div>\n                    </div>\n            \n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"onSubmit()\">SUBMIT</button>\n            </div>\n          </div>\n        </form>\n        \n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "UhRp":
    /*!**********************************************************!*\
      !*** ./src/app/user/user-profile/user-profile.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function UhRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sV0FBQTtFQUFZLFdBQUE7QUFHbEI7O0FBREE7RUFBUyxhQUFBO0FBS1Q7O0FBSkE7RUFBYSxnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsdUNBQUE7RUFBd0MsZ0JBQUE7RUFBaUIsa0JBQUE7QUFhdkg7O0FBWkE7RUFBZ0IsU0FBQTtFQUFVLFVBQUE7RUFBVyxlQUFBO0VBQWdCLGlCQUFBO0FBbUJyRDs7QUFsQkE7RUFBc0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixrQkFBQTtFQUFtQixpQkFBQTtFQUFrQixXQUFBO0VBQVksZUFBQTtFQUFnQixrQkFBQTtBQThCdko7O0FBNUJBLDBDQUFBOztBQUNBO0VBQ0Msa0JBQUE7RUFDRyx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUErQko7O0FBN0JBO0VBQ0MsZUFBQTtFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZ0NKOztBQTlCQTtFQUNDLGdCQUFBO0VBQ0EscUJBQUE7QUFpQ0Q7O0FBL0JBO0VBQ0MsYUFBQTtBQWtDRDs7QUFoQ0E7RUFDSSxpQkFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW9DSjs7QUFsQ0E7RUFDSSxrQkFBQTtBQXFDSjs7QUFuQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQXNDSjs7QUFwQ0E7RUFDQyxXQUFBO0FBdUNEOztBQXJDQSx5Q0FBQSIsImZpbGUiOiJ1c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW57ZmxvYXQ6bGVmdDsgd2lkdGg6MTAwJTt9XG5cbiNjb250ZW50e3BhZGRpbmc6MzBweDt9XG4ucGFnZS1oZWFkZXJ7bWFyZ2luOjAgMCAzMHB4OyBwYWRkaW5nOjEwcHggMThweDsgYm9yZGVyOm5vbmU7IGJveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyBiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6NXB4O31cbi5wYWdlLWhlYWRlciBoMXttYXJnaW46MDsgcGFkZGluZzowOyBmb250LXNpemU6MThweDsgbGluZS1oZWlnaHQ6MzBweDt9XG4ucGFnZS1oZWFkZXIgaDEgLmljb257d2lkdGg6MzBweDsgaGVpZ2h0OjMwcHg7IGJhY2tncm91bmQ6I2VkMWMyNDsgYm9yZGVyLXJhZGl1czozcHg7IHRleHQtYWxpZ246Y2VudGVyOyBsaW5lLWhlaWdodDozMHB4OyBjb2xvcjojZmZmOyBmb250LXNpemU6MTRweDsgbWFyZ2luLXJpZ2h0OjEwcHg7fVxuXG4vKi0tLS0tLS0gcHJvZmlsZSBmb3JtIGNzcyBzdGFydCAtLS0tLS0tLSovXG4ucHJvZmlsZV9mb3JtX2FyZWF7XG5cdHBhZGRpbmc6IDE4cHggMThweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIC5mb3JtLWdyb3VwIGxhYmVse1xuXHRmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1jb2xvcjogIzI2MjI2Mjtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSB0ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XG5cdGhlaWdodDogMTIwcHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmJ0biB7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG59XG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3Qge1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2luYXRpb24+LmFjdGl2ZT5hLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6Zm9jdXMsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpob3ZlciwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46Zm9jdXMsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpob3ZlciB7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjI2MjtcbiAgICBib3JkZXItY29sb3I6ICMyNjIyNjI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5wYWdpbmF0aW9uPmxpPmEsIC5wYWdpbmF0aW9uPmxpPnNwYW57XG5cdGNvbG9yOiAjMDAwO1xufVxuLyotLS0tLS0tIHByb2ZpbGUgZm9ybSBjc3Mgc3RvcCAtLS0tLS0tLSovIl19 */";
      /***/
    },

    /***/
    "Z6J+":
    /*!******************************************************************!*\
      !*** ./src/app/user/user-profile/user-profile-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: UserProfilePageRoutingModule */

    /***/
    function Z6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function () {
        return UserProfilePageRoutingModule;
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


      var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-profile.page */
      "gYpq");

      var routes = [{
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
      }];

      var UserProfilePageRoutingModule = function UserProfilePageRoutingModule() {
        _classCallCheck(this, UserProfilePageRoutingModule);
      };

      UserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserProfilePageRoutingModule);
      /***/
    },

    /***/
    "gYpq":
    /*!********************************************************!*\
      !*** ./src/app/user/user-profile/user-profile.page.ts ***!
      \********************************************************/

    /*! exports provided: UserProfilePage */

    /***/
    function gYpq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilePage", function () {
        return UserProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-profile.page.html */
      "QLfE");
      /* harmony import */


      var _user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile.page.scss */
      "UhRp");
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

      var UserProfilePage = /*#__PURE__*/function () {
        function UserProfilePage(http, alertController, formBuilder, loadingController, storage, router, route) {
          _classCallCheck(this, UserProfilePage);

          this.http = http;
          this.alertController = alertController;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.storage = storage;
          this.router = router;
          this.route = route;
          this.submitted = false;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
          this.state = '';
        }

        _createClass(UserProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.create().then(function (res) {});

                    case 2:
                      this.getUserDetails();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this = this;

            this.storage.get('auctionUser').then(function (response) {
              // console.log(response);
              if (response && response.response_data && response.response_data.id) {
                _this.buyerId = response.response_data.id;
                _this.buyerData = response.response_data;

                _this.getUserData();
              } else {
                _this.buyerId = null;

                _this.router.navigate(['/login']);
              }
            }, function (err) {
              _this.buyerId = null;

              _this.router.navigate(['/login']);
            });
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this2 = this;

            this.loadingShow();
            var formData = new FormData();
            formData.append('user_id', this.buyerId); // formData.append('password', this.loginForm.value.password);

            this.http.post(this.url + 'user-details', formData).subscribe(function (res) {
              _this2.loadingHide();

              console.log(_this2.buyerId);

              if (res && res.status) {
                _this2.buyerData = res.response_data;
                _this2.name = res.response_data.name;
                _this2.email = res.response_data.email;

                var _iterator = _createForOfIteratorHelper(res.response_data_one),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var rd = _step.value;

                    if (rd['meta_key'] == 'billing_address') {
                      _this2.billing_address = rd['meta_value'];
                    }

                    if (rd['meta_key'] == 'country') {
                      _this2.country = rd['meta_value'];
                    }

                    if (rd['meta_key'] == 'state') {
                      _this2.state = rd['meta_value'];
                    }

                    if (rd['meta_key'] == 'city') {
                      _this2.city = rd['meta_value'];
                    }

                    if (rd['meta_key'] == 'zip') {
                      _this2.zip = rd['meta_value'];
                    }

                    if (rd['meta_key'] == 'dob') {
                      var date = new Date();
                      var str_array = rd['meta_value'].split('-'); //console.log(str_array[0]);
                      //console.log(filter('date')("dd-MM-yyyy"));
                      //console.log(rd['meta_value'].DateofBirth | date: 'dd/MM/yyyy hh:mm a');

                      _this2.dob = rd['meta_value'];
                    }

                    if (rd['meta_key'] == 'phone_no') {
                      _this2.phone_no = rd['meta_value'];
                    }
                  } // 
                  // this.country=res.response_data.name;
                  // this.state=res.response_data.name;
                  // this.city=res.response_data.name;
                  // this.zip=res.response_data.name;
                  // this.dob=res.response_data.name;
                  // this.phone_no=res.response_data.name;

                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                _this2.presentAlert('Error!', '', res.message);
              }
            }, function (err) {
              _this2.loadingHide();

              _this2.presentAlert('Error!', '', 'Server error, please try again later');
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            // this.submitted = true;
            this.loadingShow();
            var formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('billing_address', this.billing_address);
            formData.append('country', this.country);
            formData.append('state', this.state);
            formData.append('city', this.city);
            formData.append('zip', this.zip);
            formData.append('dob', this.dob); //formData.append('dob', this.dob.year + '-' + this.dob.month + '-' +  this.dob.day);

            formData.append('phone_no', this.phone_no);
            formData.append('user_id', this.buyerId);
            this.http.post(this.url + 'user-update', formData).subscribe(function (res) {
              // console.log(res);
              _this3.loadingHide();

              if (res && res.status) {
                _this3.presentAlert('Success!', '', res.message);
              } else {
                _this3.presentAlert('Error!', '', res.message);
              }
            }, function (err) {
              _this3.loadingHide();

              _this3.presentAlert('Error!', '', 'Server error, please try again later');
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, subHeader, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: header,
                        subHeader: subHeader,
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
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
            return this.groupForm.controls;
          }
        }, {
          key: "loadingShow",
          value: function loadingShow() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context3.sent;
                      _context3.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loadingHide",
          value: function loadingHide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onlyNumberKey",
          value: function onlyNumberKey(event) {
            return event.charCode == 8 || event.charCode == 0 ? null : event.charCode >= 48 && event.charCode <= 57;
          }
        }]);

        return UserProfilePage;
      }();

      UserProfilePage.ctorParameters = function () {
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

      UserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-profile-user-profile-module-es5.js.map