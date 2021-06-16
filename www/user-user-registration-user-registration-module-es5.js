(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-registration-user-registration-module"], {
    /***/
    "0Ja4":
    /*!****************************************************************************!*\
      !*** ./src/app/user/user-registration/user-registration-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: UserRegistrationPageRoutingModule */

    /***/
    function Ja4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationPageRoutingModule", function () {
        return UserRegistrationPageRoutingModule;
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


      var _user_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-registration.page */
      "ewX9");

      var routes = [{
        path: '',
        component: _user_registration_page__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationPage"]
      }];

      var UserRegistrationPageRoutingModule = function UserRegistrationPageRoutingModule() {
        _classCallCheck(this, UserRegistrationPageRoutingModule);
      };

      UserRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserRegistrationPageRoutingModule);
      /***/
    },

    /***/
    "Va5f":
    /*!********************************************************************!*\
      !*** ./src/app/user/user-registration/user-registration.module.ts ***!
      \********************************************************************/

    /*! exports provided: UserRegistrationPageModule */

    /***/
    function Va5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationPageModule", function () {
        return UserRegistrationPageModule;
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


      var _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-registration-routing.module */
      "0Ja4");
      /* harmony import */


      var _user_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-registration.page */
      "ewX9");
      /* harmony import */


      var src_app_include_include_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/include/include.module */
      "+TEy");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var UserRegistrationPageModule = function UserRegistrationPageModule() {
        _classCallCheck(this, UserRegistrationPageModule);
      };

      UserRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationPageRoutingModule"], src_app_include_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"]],
        declarations: [_user_registration_page__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationPage"]]
      })], UserRegistrationPageModule);
      /***/
    },

    /***/
    "bVO4":
    /*!********************************************************************!*\
      !*** ./src/app/user/user-registration/user-registration.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function bVO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*-------- register main css start ---------*/\n.register_account_area .register_img_box {\n  height: 723px;\n  overflow: hidden;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.register_account_area .register_img_box img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.register_account_area .register_img_box .contain_box {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100px;\n  text-align: center;\n  padding: 60px 40px;\n}\n.register_account_area .register_img_box .contain_box h1 {\n  margin: 0 0 10px;\n  padding: 0 0 0;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.register_account_area .register_img_box .contain_box h1 strong {\n  color: #fff;\n  font-size: 28px;\n  font-weight: 500;\n  position: relative;\n}\n.register_account_area .register_img_box .contain_box h1 strong:after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n}\n.register_account_area .register_img_box .contain_box p {\n  padding: 0 0;\n  margin: 0 0;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n}\n.register_account_area .customer_info_box {\n  padding: 30px 30px;\n  background: #f3f2fc;\n  min-height: 723px;\n  /* overflow: hidden; */\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.register_account_area .customer_info_box h2 {\n  font-size: 24px;\n  font-weight: 500;\n  color: #262262;\n  line-height: normal;\n  margin: 0 0 10px;\n  padding: 0 0 0;\n  text-transform: capitalize;\n}\n.register_account_area .customer_info_box .form-group {\n  margin-bottom: 14px;\n  margin-right: 14px;\n  position: relative;\n}\n.register_account_area .customer_info_box .form-group label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n  text-transform: capitalize;\n  line-height: normal;\n}\n.register_account_area .customer_info_box .form-group label sup {\n  color: #ed1c24;\n  font-size: 13px;\n}\n.register_account_area .customer_info_box .form-control {\n  height: 48px !important;\n  border: 1px solid #d6d6d6;\n  outline: none;\n  background: #fff;\n  color: #000;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-size: 13px;\n}\n.register_account_area .customer_info_box .form-group label.form-check-label {\n  color: #000000;\n  font-size: 16px;\n  font-weight: 600;\n}\n.register_account_area .customer_info_box .form-group .min {\n  font-size: 10px;\n  font-weight: 500;\n  color: #ed1c24;\n  display: block;\n  text-transform: none;\n}\n.register_account_area .customer_info_box .form-group .select_icon {\n  content: \"\";\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\n.verification_area {\n  margin-bottom: 30px;\n}\n.verification_area .verification_box {\n  min-height: 343px;\n  box-sizing: border-box;\n  border-radius: 5px;\n  background: #f3f2fc;\n  border: 1px solid #e0e0e0;\n  padding: 30px 30px;\n}\n.verification_area .verification_box h3 {\n  line-height: normal;\n  margin: 0 0 12px;\n  font-size: 24px;\n  font-weight: 500;\n  color: #262262;\n}\n.register_account_area {\n  margin-bottom: 30px;\n}\n.verification_area .verification_box h3 strong {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ed1c24;\n  display: block;\n}\n.verification_area .verification_box .form-group {\n  position: relative;\n}\n.verification_area .verification_box .form-group label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n  text-transform: capitalize;\n  line-height: normal;\n}\n.verification_area .verification_box .form-group label sup {\n  color: #ed1c24;\n  font-size: 13px;\n}\n.verification_area .verification_box .form-control {\n  height: 48px !important;\n  border: 1px solid #d6d6d6;\n  outline: none;\n  background: #fff;\n  color: #000;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-size: 13px;\n}\n.verification_area .verification_box .btn {\n  width: 100%;\n  height: 48px;\n}\n.verification_area .verification_box .btn.btn-primary {\n  background: #262262;\n  border-color: #262262;\n}\n.verification_area .verification_box .btn.btn-primary:hover {\n  background: #ed1c24;\n  border-color: #ed1c24;\n}\n.verification_area .verification_box .form-group .select_icon {\n  content: \"\";\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\n.submit_area img.capture_img {\n  width: 302px;\n  height: 76px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n}\n.submit_area p {\n  font-size: 15px;\n  font-weight: 400;\n  color: #000000;\n  line-height: normal;\n}\n.submit_area a {\n  font-size: 15px;\n  font-weight: 600;\n  color: #262262;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.submit_area a:hover {\n  color: #ed1c24;\n}\n.submit_area a.btn-primary {\n  color: #fff;\n}\n/*-------- register main css stop ---------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQUFKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFDSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFHSjtBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSUo7QUFGQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUtKO0FBSEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUpBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBT0o7QUFMQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBUUo7QUFOQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVNKO0FBUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQVVKO0FBUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVdKO0FBVEE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWUo7QUFWQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFhSjtBQVhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWNKO0FBWkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWVKO0FBWkE7RUFBbUIsbUJBQUE7QUFnQm5CO0FBZkE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFrQko7QUFoQkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW1CSjtBQWpCQTtFQUNJLG1CQUFBO0FBb0JKO0FBbEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFxQko7QUFuQkE7RUFDSSxrQkFBQTtBQXNCSjtBQXBCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBdUJKO0FBckJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUF3Qko7QUF0QkE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBeUJKO0FBdkJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUEwQko7QUF4QkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBMkJKO0FBekJBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQTRCSjtBQTFCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNkJKO0FBekJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUE0Qko7QUExQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUE2Qko7QUEzQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBOEJKO0FBNUJBO0VBQ0ksY0FBQTtBQStCSjtBQTdCQTtFQUNJLFdBQUE7QUFnQ0o7QUE5QkEsNENBQUEiLCJmaWxlIjoidXNlci1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLSByZWdpc3RlciBtYWluIGNzcyBzdGFydCAtLS0tLS0tLS0qL1xuLnJlZ2lzdGVyX2FyZWF7fVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAucmVnaXN0ZXJfaW1nX2JveHtcbiAgICBoZWlnaHQ6IDcyM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5yZWdpc3Rlcl9pbWdfYm94IGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5yZWdpc3Rlcl9pbWdfYm94IC5jb250YWluX2JveHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDYwcHggNDBweDtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLnJlZ2lzdGVyX2ltZ19ib3ggLmNvbnRhaW5fYm94IGgxe1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgcGFkZGluZzogMCAwIDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAucmVnaXN0ZXJfaW1nX2JveCAuY29udGFpbl9ib3ggaDEgc3Ryb25ne1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLnJlZ2lzdGVyX2ltZ19ib3ggLmNvbnRhaW5fYm94IGgxIHN0cm9uZzphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLnJlZ2lzdGVyX2ltZ19ib3ggLmNvbnRhaW5fYm94IHB7XG4gICAgcGFkZGluZzogMCAwO1xuICAgIG1hcmdpbjogMCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAuY3VzdG9tZXJfaW5mb19ib3h7XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmM2YyZmM7XG4gICAgbWluLWhlaWdodDogNzIzcHg7XG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5jdXN0b21lcl9pbmZvX2JveCBoMntcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzI2MjI2MjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgcGFkZGluZzogMCAwIDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5jdXN0b21lcl9pbmZvX2JveCAuZm9ybS1ncm91cHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5jdXN0b21lcl9pbmZvX2JveCAuZm9ybS1ncm91cCBsYWJlbHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAuY3VzdG9tZXJfaW5mb19ib3ggLmZvcm0tZ3JvdXAgbGFiZWwgc3Vwe1xuICAgIGNvbG9yOiAjZWQxYzI0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLmN1c3RvbWVyX2luZm9fYm94IC5mb3JtLWNvbnRyb2x7XG4gICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAuY3VzdG9tZXJfaW5mb19ib3ggLmZvcm0tZ3JvdXAgbGFiZWwuZm9ybS1jaGVjay1sYWJlbHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLmN1c3RvbWVyX2luZm9fYm94IC5mb3JtLWdyb3VwIC5taW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlZDFjMjQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5jdXN0b21lcl9pbmZvX2JveCAuZm9ybS1ncm91cCAuc2VsZWN0X2ljb257XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTJweDtcbiAgICByaWdodDogMTJweDtcbn1cblxuLnZlcmlmaWNhdGlvbl9hcmVhe21hcmdpbi1ib3R0b206IDMwcHg7fVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94e1xuICAgIG1pbi1oZWlnaHQ6IDM0M3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmM2YyZmM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG59XG4udmVyaWZpY2F0aW9uX2FyZWEgLnZlcmlmaWNhdGlvbl9ib3ggaDN7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMjYyMjYyO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYXtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94IGgzIHN0cm9uZ3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2VkMWMyNDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveCAuZm9ybS1ncm91cHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udmVyaWZpY2F0aW9uX2FyZWEgLnZlcmlmaWNhdGlvbl9ib3ggLmZvcm0tZ3JvdXAgbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveCAuZm9ybS1ncm91cCBsYWJlbCBzdXB7XG4gICAgY29sb3I6ICNlZDFjMjQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94IC5mb3JtLWNvbnRyb2x7XG4gICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94IC5idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xufVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94IC5idG4uYnRuLXByaW1hcnl7XG4gICAgYmFja2dyb3VuZDogIzI2MjI2MjtcbiAgICBib3JkZXItY29sb3I6ICMyNjIyNjI7XG59XG4udmVyaWZpY2F0aW9uX2FyZWEgLnZlcmlmaWNhdGlvbl9ib3ggLmJ0bi5idG4tcHJpbWFyeTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjZWQxYzI0O1xuICAgIGJvcmRlci1jb2xvcjogI2VkMWMyNDtcbn1cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveCAuZm9ybS1ncm91cCAuc2VsZWN0X2ljb24ge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEycHg7XG4gICAgcmlnaHQ6IDEycHg7XG59XG5cbi5zdWJtaXRfYXJlYXt9XG4uc3VibWl0X2FyZWEgaW1nLmNhcHR1cmVfaW1ne1xuICAgIHdpZHRoOiAzMDJweDtcbiAgICBoZWlnaHQ6IDc2cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zdWJtaXRfYXJlYSBwe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4uc3VibWl0X2FyZWEgYXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzI2MjI2MjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1vLXRyYW5zaXRpb246IDAuNXM7XG59XG4uc3VibWl0X2FyZWEgYTpob3ZlcntcbiAgICBjb2xvcjogI2VkMWMyNDtcbn1cbi5zdWJtaXRfYXJlYSBhLmJ0bi1wcmltYXJ5e1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLyotLS0tLS0tLSByZWdpc3RlciBtYWluIGNzcyBzdG9wIC0tLS0tLS0tLSovIl19 */";
      /***/
    },

    /***/
    "ewX9":
    /*!******************************************************************!*\
      !*** ./src/app/user/user-registration/user-registration.page.ts ***!
      \******************************************************************/

    /*! exports provided: UserRegistrationPage */

    /***/
    function ewX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationPage", function () {
        return UserRegistrationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-registration.page.html */
      "rQIe");
      /* harmony import */


      var _user_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-registration.page.scss */
      "bVO4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_helpers/must-match.validator */
      "h2xV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");

      var UserRegistrationPage = /*#__PURE__*/function () {
        function UserRegistrationPage(storage, formBuilder, loadingController, router, http, alertController) {
          _classCallCheck(this, UserRegistrationPage);

          this.storage = storage;
          this.formBuilder = formBuilder;
          this.loadingController = loadingController;
          this.router = router;
          this.http = http;
          this.alertController = alertController;
          this.submitted = false;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
        }

        _createClass(UserRegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.registerForm = this.formBuilder.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
                        email_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8)]],
                        password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        billing_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
                      }, {
                        validator: [Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'password_confirmation'), Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('email', 'email_confirmation')]
                      });
                      _context.next = 3;
                      return this.storage.create().then(function (res) {//this.getUserDetails();
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.storage.get('auctionUser').then(function (response) {
              //console.log(response);
              if (response != null) {
                //console.log(response.response_data);
                if (response.response_data.role_text == "Buyer") {
                  _this.router.navigate(['/user/dashboard']);
                }
              } else {
                _this.router.navigate(['/login']);
              }
            }, function (err) {
              _this.router.navigate(['/login']);
            });
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this2 = this;

            this.storage.get('auctionUser').then(function (response) {
              //console.log(response);
              if (response && response.response_data && response.response_data.id) {
                _this2.buyerId = response.response_data.id;
                _this2.buyerData = response.response_data;

                _this2.router.navigate(['/user/dashboard']);
              } else {
                _this2.buyerId = null; //this.router.navigate(['/login']);
              }
            }, function (err) {
              _this2.buyerId = null; //this.router.navigate(['/login']);
            });
          }
        }, {
          key: "logScrolling",
          value: function logScrolling(event) {
            if (event.detail.scrollTop > 100) {
              $('.header_bottom').addClass("fix");
            } else {
              $('.header_bottom').removeClass("fix");
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.submitted = true;

            if (this.registerForm.invalid) {
              return;
            } else {
              this.loadingShow();
              var formData = new FormData();
              formData.append('name', this.registerForm.value.name);
              formData.append('email', this.registerForm.value.email);
              formData.append('email_confirmation', this.registerForm.value.email_confirmation);
              formData.append('password', this.registerForm.value.password);
              formData.append('password_confirmation', this.registerForm.value.password_confirmation);
              formData.append('billing_address', this.registerForm.value.billing_address);
              formData.append('country', this.registerForm.value.country);
              formData.append('state', this.registerForm.value.state);
              formData.append('city', this.registerForm.value.city);
              formData.append('zip', this.registerForm.value.zip);
              formData.append('dob', this.registerForm.value.dob.year + '-' + this.registerForm.value.dob.month + '-' + this.registerForm.value.dob.day);
              formData.append('phone_no', this.registerForm.value.phone_no);
              this.http.post(this.url + 'user-register-buyer', formData).subscribe(function (res) {
                _this3.loadingHide();

                if (res && res.status) {
                  _this3.presentAlert('Success', '', res.message);

                  _this3.router.navigate(['/login']);
                } else {
                  _this3.presentAlert('Validation Error!', '', 'Please try again later');
                }
              }, function (err) {
                _this3.loadingHide();

                _this3.presentAlert('Error!', '', 'Server error, please try again later');
              });
            }
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
                        cssClass: 'my-alert-class',
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
            return this.registerForm.controls;
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
        }]);

        return UserRegistrationPage;
      }();

      UserRegistrationPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__["Storage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      UserRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-user-registration',
        template: _raw_loader_user_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserRegistrationPage);
      /***/
    },

    /***/
    "rQIe":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-registration/user-registration.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rQIe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <app-header></app-header>\n\n  <section class=\"main_area register_area\">\n    <form [formGroup]=\"registerForm\">\n      <div class=\"container\">\n\n        <div class=\"register_account_area\">\n          <div class=\"row row-0\">\n            <div class=\"col-lg-5\">\n              <div class=\"register_img_box\">\n                <img src=\"assets/images/register-image.png\" alt=\"register image\" title=\"\">\n                <div class=\"contain_box\">\n                  <h1><strong>Register An Account</strong></h1>\n                  <p>We take your privacy seriously. Please refer to our Privacy Policy.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-7\">\n              <div class=\"\">\n                <div class=\"customer_info_box\">\n                  <h2>customer info :</h2>\n                  <div class=\"row row-0\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label>full name <sup>*</sup>\n                          <span *ngIf=\"submitted && f.name.errors\">\n                            <span class=\"min\" *ngIf=\"f.name.errors.required\">Name is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Enter your full name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>email address <sup>*</sup>\n                          <span *ngIf=\"submitted && f.email.errors\">\n                            <span class=\"min\" *ngIf=\"f.email.errors.required\">Email is required</span>\n                            <span class=\"min\" *ngIf=\"f.email.errors.email\">Email must be a valid email address</span>\n                          </span>\n                        </label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>confirm email address <sup>*</sup>\n                          <span *ngIf=\"submitted && f.email_confirmation.errors\">\n                            <span class=\"min\" *ngIf=\"f.email_confirmation.errors.required\">Confirm email is\n                              required</span>\n                              <span class=\"min\" *ngIf=\"f.email_confirmation.errors.mustMatch\">Email and confirm\n                                email address must match</span>\n                          </span>\n                        </label>\n                        <input type=\"email\" formControlName=\"email_confirmation\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.email_confirmation.errors }\"\n                          placeholder=\"Confirm email address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group form-check\">\n                        <label class=\"form-check-label\">\n                          <input class=\"form-check-input\" type=\"checkbox\"> Receive promotional Emails?\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>password <sup>*</sup>\n                          <span *ngIf=\"submitted && f.password.errors\">\n                            <span class=\"min\" *ngIf=\"f.password.errors.required\">Password is required</span>\n                            <span class=\"min\" *ngIf=\"f.password.errors.minlength\">Password must be at least 6\n                              characters</span>\n                          </span>\n                        </label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>confirm password <sup>*</sup>\n                          <span *ngIf=\"submitted && f.password_confirmation.errors\">\n                            <span class=\"min\" *ngIf=\"f.password_confirmation.errors.required\">Confirm password is\n                              required</span>\n                            <span class=\"min\" *ngIf=\"f.password_confirmation.errors.mustMatch\">Password and confirm\n                              password must match</span>\n                          </span>\n                        </label>\n                        <input type=\"password\" formControlName=\"password_confirmation\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.password_confirmation.errors }\"\n                          placeholder=\"Confirm password\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>billing address <sup>*</sup>\n                          <span *ngIf=\"submitted && f.billing_address.errors\">\n                            <span class=\"min\" *ngIf=\"f.billing_address.errors.required\">Billing address is\n                              required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"billing_address\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.billing_address.errors }\"\n                          placeholder=\"Enter billing address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Country <sup>*</sup>\n                          <span *ngIf=\"submitted && f.country.errors\">\n                            <span class=\"min\" *ngIf=\"f.country.errors.required\">Country is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"country\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" placeholder=\"Enter country name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>state <sup>*</sup>\n                          <span *ngIf=\"submitted && f.state.errors\">\n                            <span class=\"min\" *ngIf=\"f.state.errors.required\">State is required</span>\n                          </span>\n                        </label>\n                        <select formControlName=\"state\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\n                          <option disabled selected value=\"\">Select State</option>\n                          <option value=\"West Bengal\">West Bengal</option>\n                          <option value=\"other\">Other</option>\n                        </select>\n                        <div class=\"select_icon\"><img src=\"assets/images/sape3.png\" alt=\"sape\" title=\"\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>city <sup>*</sup>\n                          <span *ngIf=\"submitted && f.city.errors\">\n                            <span class=\"min\" *ngIf=\"f.city.errors.required\">City is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"city\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" placeholder=\"Enter city name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>zip code <sup>*</sup>\n                          <span *ngIf=\"submitted && f.zip.errors\">\n                            <span class=\"min\" *ngIf=\"f.zip.errors.required\">Zip is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"zip\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.zip.errors }\" placeholder=\"Enter zip code\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>date of birth <sup>*</sup>\n                          <span *ngIf=\"submitted && f.dob.errors\">\n                            <span class=\"min\" *ngIf=\"f.dob.errors.required\">Date of birth is required</span>\n                          </span>\n                        </label>\n                        <input formControlName=\"dob\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                          ngbDatepicker #d=\"ngbDatepicker\">\n                        <div class=\"select_icon\" (click)=\"d.toggle()\">\n                          <img src=\"assets/images/sape4.png\" alt=\"sape\" title=\"\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>mobile number <sup>*</sup>\n                          <span *ngIf=\"submitted && f.phone_no.errors\">\n                            <span class=\"min\" *ngIf=\"f.phone_no.errors.required\">Mobile number is required</span>\n                            <span class=\"min\" *ngIf=\"f.phone_no.errors.pattern\">Please enter 10 digit mobile number</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"phone_no\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.phone_no.errors }\"\n                          placeholder=\"Enter your mobile no.\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!------- register account stop ------->\n\n        <!------ verification area start ------->\n        <!-- <div class=\"verification_area\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"verification_box\">\n                <h3>\n                  Cell Phone Verification :\n                  <strong>Cell phone verification required to receive SMS Notifications.</strong>\n                </h3>\n                <div class=\"form-group\">\n                  <label>cell phone <sup>*</sup></label>\n                  <div class=\"row row-7\">\n                    <div class=\"col-lg-6\">\n                      <input type=\"text\" class=\"form-control\" value=\"\">\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <button class=\"btn btn-primary\">verify now</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"verification_box\">\n                <h3>\n                  credit card :\n                  <strong>If you are using a Pre-Paid card, please be sure to keep the card until all transactions are\n                    finalized</strong>\n                </h3>\n                <div class=\"row row-7\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label>name on card <sup>*</sup></label>\n                      <input type=\"text\" class=\"form-control\" value=\"\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label>card number <sup>*</sup></label>\n                      <input type=\"text\" class=\"form-control\" value=\"\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label>expiration <sup>*</sup></label>\n                      <select class=\"form-control\">\n                        <option>January</option>\n                      </select>\n                      <div class=\"select_icon\"><img src=\"assets/images/sape3.png\" alt=\"sape\" title=\"\"></div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label>years <sup>*</sup></label>\n                      <select class=\"form-control\">\n                        <option>2023</option>\n                      </select>\n                      <div class=\"select_icon\"><img src=\"assets/images/sape3.png\" alt=\"sape\" title=\"\"></div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label>cvv <sup>*</sup></label>\n                      <input type=\"text\" class=\"form-control\" value=\"561\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n        <div class=\"submit_area\">\n          <p>By submitting this form you acknowledge that you have read, understand, and agree to the <a\n              [routerLink]=\"['/registration']\">Terms and Conditions</a>.</p>\n          <button class=\"btn btn-primary\" (click)=\"onSubmit()\">submit now</button>\n        </div>\n\n      </div>\n    </form>\n  </section>\n  <app-footer></app-footer>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-registration-user-registration-module-es5.js.map