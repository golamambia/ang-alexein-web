(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-login-seller-login-module"], {
    /***/
    "CgnY":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-login/seller-login.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CgnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <app-header></app-header>\n  <section class=\"main_area login_area\">\n    <div class=\"container\">\n\n      <div class=\"login_body_area\">\n        <div class=\"login_body\">\n          <form [formGroup]=\"loginForm\">\n            <div class=\"text-center\">\n              <h1>Seller Login</h1>\n            </div>\n            <div class=\"form-group\">\n              <label>E-mail Address</label>\n              <input type=\"text\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" formControlName=\"email\" autocomplete=\"off\"\n                placeholder=\"Please enter Email/Bidder ID\">\n              <div class=\"icon\"><img src=\"assets/images/login-user.png\" alt=\"login user\"></div>\n              <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" formControlName=\"password\" autocomplete=\"off\"\n                placeholder=\"Please enter password\">\n              <div class=\"icon\"><img src=\"assets/images/login-password.png\" alt=\"login user\"></div>\n              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              </div>\n            </div>\n            <div class=\"form-group form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"> Remember me\n              </label>\n              <a href=\"#\" class=\"forgot_password\">forgot password</a>\n            </div>\n            <button class=\"btn btn-primary w-100\" (click)=\"onSubmit()\">login</button>\n          </form>\n          <!-- <h6><strong>or login with</strong></h6>\n          <ul>\n            <li>\n              <button class=\"btn btn-primary\">\n                <img src=\"assets/images/google.png\" alt=\"google\" title=\"\" class=\"mr-2\">\n                Google\n              </button>\n            </li>\n            <li>\n              <button class=\"btn btn-success\">\n                <img src=\"assets/images/login-facebook.png\" alt=\"facebook\" title=\"\" class=\"mr-2\">\n                facebook\n              </button>\n            </li>\n          </ul> -->\n          <p>Doesn’t have an account yet? <a [routerLink]=\"['/seller-registration']\">Sign up Now</a></p>\n        </div>\n      </div>\n\n    </div>\n  </section>\n  <app-footer></app-footer>\n\n</ion-content>";
      /***/
    },

    /***/
    "KDAZ":
    /*!************************************************************!*\
      !*** ./src/app/seller/seller-login/seller-login.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function KDAZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*-------- login area css start --------*/\n.login_area .login_body_area {\n  background: #f7f6ff;\n  padding: 50px 0px;\n}\n.login_area .login_body_area .login_body {\n  width: 100%;\n  max-width: 420px;\n  margin: 0 auto;\n}\n.login_area .login_body_area .login_body h1 {\n  color: #262262;\n  font-size: 36px;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: capitalize;\n  text-align: center;\n  position: relative;\n  display: inline-block;\n}\n.login_area .login_body_area .login_body h1:after {\n  content: \"\";\n  position: absolute;\n  bottom: 6px;\n  right: 0;\n  width: 30px;\n  height: 3px;\n  background: #ed1c24;\n}\n.login_area .login_body_area .login_body .form-group {\n  position: relative;\n}\n.login_area .login_body_area .login_body .form-control {\n  font-size: 14px;\n  padding-left: 40px;\n}\n.login_area .login_body_area .login_body .form-group .icon {\n  content: \"\";\n  position: absolute;\n  bottom: 10px;\n  left: 12px;\n}\n.login_area .login_body_area .login_body .form-group .forgot_password {\n  float: right;\n  color: #262262;\n  font-weight: 500;\n  text-transform: capitalize;\n  text-decoration: underline;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.login_area .login_body_area .login_body .form-group .forgot_password:hover {\n  color: #ed1c24;\n}\n.login_area .login_body_area .login_body .btn {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.login_area .login_body_area .login_body h6 {\n  position: relative;\n  text-align: center;\n  margin: 24px 0;\n}\n.login_area .login_body_area .login_body h6:before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #e0e0e0;\n}\n.login_area .login_body_area .login_body h6 strong {\n  margin: 0 auto;\n  font-size: 16px;\n  font-weight: 400;\n  color: #969696;\n  background: #f7f6ff;\n  position: relative;\n  padding: 0 10px;\n}\n.login_area .login_body_area .login_body ul {\n  margin: 0 0;\n  padding: 0 0;\n  text-align: center;\n  list-style: none;\n}\n.login_area .login_body_area .login_body ul li {\n  display: inline-block;\n  margin-right: 8px;\n}\n.login_area .login_body_area .login_body ul li:last-child {\n  margin-right: 0px;\n}\n.login_area .login_body_area .login_body ul li .btn {\n  padding: 8px 35px;\n  text-transform: capitalize;\n}\n.login_area .login_body_area .login_body ul li .btn.btn-primary {\n  background: transparent !important;\n  color: #4c4c4c !important;\n  border-color: #e2878a !important;\n}\n.login_area .login_body_area .login_body ul li .btn.btn-primary:hover {\n  box-shadow: 0 0 4px #f78a8e !important;\n}\n.login_area .login_body_area .login_body ul li .btn.btn-success {\n  background: transparent !important;\n  color: #127ae7 !important;\n  border-color: #6863af !important;\n}\n.login_area .login_body_area .login_body ul li .btn.btn-success:hover {\n  box-shadow: 0 0 4px #7069c7 !important;\n}\n.login_area .login_body_area .login_body p {\n  margin: 20px 0 0;\n  padding: 0 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: #525252;\n  text-align: center;\n}\n.login_area .login_body_area .login_body p a {\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n  color: #262262;\n}\n.login_area .login_body_area .login_body p a:hover {\n  color: #ed1c24;\n}\n/*-------- login area css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxsZXItbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUFBO0FBRUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFFSjtBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0o7QUFEQTtFQUNJLGtCQUFBO0FBSUo7QUFGQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUtKO0FBSEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQU1KO0FBSkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQU9KO0FBTEE7RUFDSSxjQUFBO0FBUUo7QUFOQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFTSjtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFVSjtBQVJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBV0o7QUFUQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFZSjtBQVZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYUo7QUFYQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFjSjtBQVpBO0VBQ0ksaUJBQUE7QUFlSjtBQWJBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQWdCSjtBQWRBO0VBQ0ksa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBaUJKO0FBZkE7RUFDSSxzQ0FBQTtBQWtCSjtBQWhCQTtFQUNJLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQW1CSjtBQWpCQTtFQUNJLHNDQUFBO0FBb0JKO0FBbEJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBcUJKO0FBbkJBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXNCSjtBQXBCQTtFQUNJLGNBQUE7QUF1Qko7QUFyQkEsd0NBQUEiLCJmaWxlIjoic2VsbGVyLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0gbG9naW4gYXJlYSBjc3Mgc3RhcnQgLS0tLS0tLS0qL1xuLmxvZ2luX2FyZWF7fVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYXtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmNmZmO1xuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xufVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSBoMXtcbiAgICBjb2xvcjogIzI2MjI2MjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSBoMTphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA2cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogI2VkMWMyNDtcbn1cbi5sb2dpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLmZvcm0tZ3JvdXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSAuZm9ybS1jb250cm9se1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5mb3JtLWdyb3VwIC5pY29ue1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMTJweDtcbn1cbi5sb2dpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgLmZvcm0tZ3JvdXAgLmZvcmdvdF9wYXNzd29yZHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMyNjIyNjI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1vLXRyYW5zaXRpb246IDAuNXM7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5mb3JtLWdyb3VwIC5mb3Jnb3RfcGFzc3dvcmQ6aG92ZXJ7XG4gICAgY29sb3I6ICNlZDFjMjQ7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IC5idG57XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IGg2e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNHB4IDA7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IGg2OmJlZm9yZXtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbn1cbi5sb2dpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgaDYgc3Ryb25ne1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgIGJhY2tncm91bmQ6ICNmN2Y2ZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5sb2dpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgdWx7XG4gICAgbWFyZ2luOiAwIDA7XG4gICAgcGFkZGluZzogMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSB1bCBsaXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IHVsIGxpOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IHVsIGxpIC5idG57XG4gICAgcGFkZGluZzogOHB4IDM1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IHVsIGxpIC5idG4uYnRuLXByaW1hcnl7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzRjNGM0YyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2UyODc4YSAhaW1wb3J0YW50O1xufVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSB1bCBsaSAuYnRuLmJ0bi1wcmltYXJ5OmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiKDI0NyAxMzggMTQyKSAhaW1wb3J0YW50O1xufVxuLmxvZ2luX2FyZWEgLmxvZ2luX2JvZHlfYXJlYSAubG9naW5fYm9keSB1bCBsaSAuYnRuLmJ0bi1zdWNjZXNze1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMxMjdhZTcgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICM2ODYzYWYgIWltcG9ydGFudDtcbn1cbi5sb2dpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgdWwgbGkgLmJ0bi5idG4tc3VjY2Vzczpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYigxMTIgMTA1IDE5OSkgIWltcG9ydGFudDtcbn1cbi5sb2dpbl9hcmVhIC5sb2dpbl9ib2R5X2FyZWEgLmxvZ2luX2JvZHkgcHtcbiAgICBtYXJnaW46IDIwcHggMCAwO1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzUyNTI1MjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IHAgYXtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gICAgY29sb3I6ICMyNjIyNjI7XG59XG4ubG9naW5fYXJlYSAubG9naW5fYm9keV9hcmVhIC5sb2dpbl9ib2R5IHAgYTpob3ZlcntcbiAgICBjb2xvcjogI2VkMWMyNDtcbn1cbi8qLS0tLS0tLS0gbG9naW4gYXJlYSBjc3Mgc3RvcCAtLS0tLS0tLSovIl19 */";
      /***/
    },

    /***/
    "itr5":
    /*!********************************************************************!*\
      !*** ./src/app/seller/seller-login/seller-login-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: SellerLoginPageRoutingModule */

    /***/
    function itr5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerLoginPageRoutingModule", function () {
        return SellerLoginPageRoutingModule;
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


      var _seller_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seller-login.page */
      "rlpH");

      var routes = [{
        path: '',
        component: _seller_login_page__WEBPACK_IMPORTED_MODULE_3__["SellerLoginPage"]
      }];

      var SellerLoginPageRoutingModule = function SellerLoginPageRoutingModule() {
        _classCallCheck(this, SellerLoginPageRoutingModule);
      };

      SellerLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellerLoginPageRoutingModule);
      /***/
    },

    /***/
    "rlpH":
    /*!**********************************************************!*\
      !*** ./src/app/seller/seller-login/seller-login.page.ts ***!
      \**********************************************************/

    /*! exports provided: SellerLoginPage */

    /***/
    function rlpH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerLoginPage", function () {
        return SellerLoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_seller_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./seller-login.page.html */
      "CgnY");
      /* harmony import */


      var _seller_login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./seller-login.page.scss */
      "KDAZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var SellerLoginPage = /*#__PURE__*/function () {
        function SellerLoginPage(storage, router, loadingController, http, formBuilder, alertController) {
          _classCallCheck(this, SellerLoginPage);

          this.storage = storage;
          this.router = router;
          this.loadingController = loadingController;
          this.http = http;
          this.formBuilder = formBuilder;
          this.alertController = alertController;
          this.submitted = false;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
        }

        _createClass(SellerLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loginForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
                      });
                      _context.next = 3;
                      return this.storage.create();

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

            this.storage.get('auctionSeller').then(function (response) {
              //console.log(response);
              if (response != null) {
                //console.log(response.response_data);
                if (response.response_data.role_text == "Seller") {
                  _this.router.navigate(['/seller/dashboard']);
                }
              } else {
                _this.router.navigate(['/seller-login']);
              }
            }, function (err) {});
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.submitted = true;

            if (this.loginForm.invalid) {
              return;
            } else {
              this.loadingShow();
              var formData = new FormData();
              formData.append('email', this.loginForm.value.email);
              formData.append('password', this.loginForm.value.password);
              this.http.post(this.url + 'user-login', formData).subscribe(function (res) {
                if (res && res.status) {
                  if (res.response_data.role_text == 'Seller') {
                    _this2.storage.set('auctionSeller', res).then(function (response) {
                      _this2.loadingHide();

                      _this2.router.navigate(['/seller/dashboard']);
                    });
                  } else {
                    _this2.loadingHide();

                    _this2.presentAlert('Error!', '', 'Please check username & password');
                  }
                } else {
                  _this2.loadingHide();

                  _this2.presentAlert('Error!', '', res.message ? res.message : 'Please try again later');
                }
              }, function (err) {
                _this2.loadingHide();

                _this2.presentAlert('Error!', '', 'Server error, please try again later');
              });
            }
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
          key: "f",
          get: function get() {
            return this.loginForm.controls;
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
          key: "loadingShow",
          value: function loadingShow() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 4000
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
                      if (!this.loading) {
                        _context4.next = 3;
                        break;
                      }

                      _context4.next = 3;
                      return this.loading.dismiss();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return SellerLoginPage;
      }();

      SellerLoginPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      SellerLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-seller-login',
        template: _raw_loader_seller_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SellerLoginPage);
      /***/
    },

    /***/
    "uOCY":
    /*!************************************************************!*\
      !*** ./src/app/seller/seller-login/seller-login.module.ts ***!
      \************************************************************/

    /*! exports provided: SellerLoginPageModule */

    /***/
    function uOCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerLoginPageModule", function () {
        return SellerLoginPageModule;
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


      var src_app_include_include_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/include/include.module */
      "+TEy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _seller_login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seller-login-routing.module */
      "itr5");
      /* harmony import */


      var _seller_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./seller-login.page */
      "rlpH");

      var SellerLoginPageModule = function SellerLoginPageModule() {
        _classCallCheck(this, SellerLoginPageModule);
      };

      SellerLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _seller_login_routing_module__WEBPACK_IMPORTED_MODULE_6__["SellerLoginPageRoutingModule"], src_app_include_include_module__WEBPACK_IMPORTED_MODULE_2__["IncludeModule"]],
        declarations: [_seller_login_page__WEBPACK_IMPORTED_MODULE_7__["SellerLoginPage"]]
      })], SellerLoginPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=seller-seller-login-seller-login-module-es5.js.map