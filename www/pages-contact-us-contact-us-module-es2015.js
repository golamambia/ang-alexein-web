(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-contact-us-module"],{

/***/ "+NA5":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function() { return ContactUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.page */ "vtAh");




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ "I+rJ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n\n  <app-header></app-header>\n\n  <!----- product search area start ----->\n  <section class=\"product_search_area\">\n    <div class=\"container\">\n      <h1>contact us</h1>\n      <ul class=\"pagger_link\">\n        <li><a [routerLink]=\"['/']\">home</a></li>\n        <li class=\"active\">contact us</li>\n      </ul>\n    </div>\n  </section>\n  <!----- product search area stop ----->\n\n  <!------- contact us area start ------->\n  <section class=\"main_area contact_us_area\">\n    <div class=\"container\">\n\n      <div class=\"row row-7\">\n        <div class=\"col-lg-4\">\n          <div class=\"contact_address\">\n            <div class=\"w-100\">\n              <div class=\"icon\"><i class=\"fa fa-map-o\" aria-hidden=\"true\"></i></div>\n              <h3>Address</h3>\n              <p>{{setData?.address}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"contact_address\">\n            <div class=\"w-100\">\n              <div class=\"icon\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></div>\n              <h3>Email Address</h3>\n              <a href=\"mailto:{{setData?.email_address}}\" class=\"link\">{{setData?.email_address}}</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"contact_address\">\n            <div class=\"w-100\">\n              <div class=\"icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></div>\n              <h3>Phone Number</h3>\n              <a href=\"tel:{{setData?.phone_number}}\" class=\"link\">{{setData?.phone_number}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row row-7\">\n        <div class=\"col-lg-6\">\n          <div class=\"map_area\">\n            <iframe\n              src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3968133620315!2d88.38073241418734!3d22.60165253760131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bb34e13008ab%3A0xb88776c0052769b0!2sKolkata%20Railway%20Station%20(Chitpur%20Station)!5e0!3m2!1sen!2sin!4v1615459976931!5m2!1sen!2sin\"\n              style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"contact_form_box\">\n            <h2>Get In Touch</h2>\n            <p>Have some suggestions or just want to say hi? Our support team are ready to help you 24/7.</p>\n            <div class=\"row row-7\">\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label>Name</label>\n                  <input type=\"text\" class=\"form-control\" value=\"\">\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label>Email ID</label>\n                  <input type=\"email\" class=\"form-control\" value=\"\">\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label>Phone No.</label>\n                  <input type=\"text\" class=\"form-control\" value=\"\">\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label>Subject</label>\n                  <input type=\"text\" class=\"form-control\" value=\"\">\n                </div>\n              </div>\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  <label>Message</label>\n                  <textarea class=\"form-control\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-lg-12\"><button class=\"btn btn-primary\">SUBMIT</button></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n  <!------- contact us area stop ------->\n\n\n  <app-footer></app-footer>\n\n</ion-content>");

/***/ }),

/***/ "Pt6G":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*----- product search css start ------*/\n.product_search_area {\n  padding: 35px 0px;\n  background: #f7f6ff;\n}\n.product_search_area .search_area .form-group {\n  width: 316px;\n  display: inline-block;\n  position: relative;\n  margin: 0 2px 0 0;\n}\n.product_search_area .search_area .form-control {\n  width: 100%;\n  height: 48px !important;\n  border: 1px solid #c9c9c9;\n  box-sizing: border-box;\n  border-radius: 5px;\n  outline: none;\n  padding-left: 40px;\n  font-size: 15px;\n}\n.product_search_area .search_area .form-group .icon {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  left: 18px;\n}\n.product_search_area .search_area .btn {\n  padding: 11px 30px;\n}\n.product_search_area .sort_by {\n  width: 117px;\n  position: relative;\n}\n.product_search_area .sort_by select.form-control {\n  width: 100%;\n  height: 48px !important;\n  border-radius: 5px;\n  border: 1px solid #c9c9c9;\n  font-size: 15px;\n  cursor: pointer;\n  outline: none;\n}\n.product_search_area .sort_by .icon {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.product_search_area .sort_by:after {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  right: 28px;\n  width: 1px;\n  height: 55%;\n  background: #c9c9c9;\n  box-sizing: border-box;\n}\n/*----- product search css stop ------*/\n.product_search_area h1 {\n  color: #262262;\n  font-size: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  line-height: normal;\n}\n.product_search_area ul.pagger_link {\n  padding: 0 0;\n  margin: 0 0;\n}\n.product_search_area ul.pagger_link li {\n  padding: 0 0 0 0;\n  margin: 0 0 0 0;\n  list-style: none;\n  display: inline-block;\n  position: relative;\n  padding-right: 8px;\n  margin-right: 8px;\n}\n.product_search_area ul.pagger_link li:after {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  top: 1px;\n  right: -5px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000;\n}\n.product_search_area ul.pagger_link li:last-child {\n  padding-right: 0px;\n  margin-right: 0px;\n}\n.product_search_area ul.pagger_link li:last-child:after {\n  display: none;\n}\n.product_search_area ul.pagger_link li a {\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.product_search_area ul.pagger_link li a:hover {\n  color: #ed1c24;\n}\n.product_search_area ul.pagger_link li.active {\n  color: #ed1c24;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n}\n/*--------- contact us css start --------*/\n.contact_us_area .contact_address {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  box-sizing: border-box;\n  border-radius: 5px;\n  box-shadow: 0 0 5px #dcdbef;\n  padding: 20px 20px;\n  margin-bottom: 20px;\n}\n.contact_us_area .contact_address h3 {\n  text-transform: capitalize;\n  line-height: normal;\n  font-size: 22px;\n  font-weight: 600;\n  color: #262262;\n  margin: 0 0 0;\n}\n.contact_us_area .contact_address p {\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n}\n.contact_us_area .contact_address .icon {\n  font-size: 55px;\n  color: #ed1c24;\n}\n.contact_us_area .contact_address a.link {\n  padding: 0 0;\n  margin: 0 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.contact_us_area .contact_address a.link:hover {\n  color: #ed1c24;\n}\n.contact_us_area .contact_form_box {\n  background: #f6f6f9;\n  padding: 30px;\n}\n.contact_us_area .contact_form_box h2 {\n  line-height: normal;\n  margin: 0 0 0;\n  color: #262262;\n  font-size: 30px;\n  font-weight: 600;\n}\n.contact_us_area .contact_form_box p {\n  font-size: 15px;\n  font-weight: 400;\n  color: #333333;\n  line-height: normal;\n  margin-bottom: 15px;\n}\n.contact_us_area .contact_form_box textarea.form-control {\n  height: 120px !important;\n}\n.contact_us_area .map_area iframe {\n  width: 100%;\n  height: 572px;\n}\n/*--------- contact us css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsd0NBQUE7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR0o7QUFEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSUo7QUFGQTtFQUNJLGtCQUFBO0FBS0o7QUFIQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSkE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBT0o7QUFMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBUUo7QUFOQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBU0o7QUFQQSx1Q0FBQTtBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNKO0FBUEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVVKO0FBUkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBV0o7QUFUQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBWUo7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFhSjtBQVhBO0VBQ0ksYUFBQTtBQWNKO0FBWkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWVKO0FBYkE7RUFDSSxjQUFBO0FBZ0JKO0FBZEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQWlCSjtBQWRBLDBDQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFnQko7QUFkQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWlCSjtBQWZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBa0JKO0FBaEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFtQko7QUFqQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFvQko7QUFsQkE7RUFDSSxjQUFBO0FBcUJKO0FBbEJBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FBcUJKO0FBbkJBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXNCSjtBQXBCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdUJKO0FBckJBO0VBQ0ksd0JBQUE7QUF3Qko7QUFyQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQXdCSjtBQXJCQSx5Q0FBQSIsImZpbGUiOiJjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qLS0tLS0gcHJvZHVjdCBzZWFyY2ggY3NzIHN0YXJ0IC0tLS0tLSovXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB7XG4gIHBhZGRpbmc6IDM1cHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmNmZmO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc2VhcmNoX2FyZWEgLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMzE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMnB4IDAgMDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNlYXJjaF9hcmVhIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zZWFyY2hfYXJlYSAuZm9ybS1ncm91cCAuaWNvbiB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICBsZWZ0OiAxOHB4O1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc2VhcmNoX2FyZWEgLmJ0biB7XG4gIHBhZGRpbmc6IDExcHggMzBweDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNvcnRfYnkge1xuICB3aWR0aDogMTE3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNvcnRfYnkgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNvcnRfYnkgLmljb24ge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zb3J0X2J5OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiAyOHB4O1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDU1JTtcbiAgYmFja2dyb3VuZDogI2M5YzljOTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyotLS0tLSBwcm9kdWN0IHNlYXJjaCBjc3Mgc3RvcCAtLS0tLS0qL1xuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgaDEge1xuICBjb2xvcjogIzI2MjI2MjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayB7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwIDA7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIGxpIHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcHg7XG4gIHJpZ2h0OiAtNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayBsaTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIGxpIGEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayBsaS5hY3RpdmUge1xuICBjb2xvcjogI2VkMWMyNDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4vKi0tLS0tLS0tLSBjb250YWN0IHVzIGNzcyBzdGFydCAtLS0tLS0tLSovXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X2FkZHJlc3Mge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjZGNkYmVmO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250YWN0X3VzX2FyZWEgLmNvbnRhY3RfYWRkcmVzcyBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICBtYXJnaW46IDAgMCAwO1xufVxuXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X2FkZHJlc3MgcCB7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwIDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb250YWN0X3VzX2FyZWEgLmNvbnRhY3RfYWRkcmVzcyAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5jb250YWN0X3VzX2FyZWEgLmNvbnRhY3RfYWRkcmVzcyBhLmxpbmsge1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF9hZGRyZXNzIGEubGluazpob3ZlciB7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4uY29udGFjdF91c19hcmVhIC5jb250YWN0X2Zvcm1fYm94IHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmOTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmNvbnRhY3RfdXNfYXJlYSAuY29udGFjdF9mb3JtX2JveCBoMiB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDA7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb250YWN0X3VzX2FyZWEgLmNvbnRhY3RfZm9ybV9ib3ggcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb250YWN0X3VzX2FyZWEgLmNvbnRhY3RfZm9ybV9ib3ggdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFjdF91c19hcmVhIC5tYXBfYXJlYSBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NzJweDtcbn1cblxuLyotLS0tLS0tLS0gY29udGFjdCB1cyBjc3Mgc3RvcCAtLS0tLS0tLSovIl19 */");

/***/ }),

/***/ "QCdY":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us-routing.module */ "+NA5");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "vtAh");
/* harmony import */ var _include_include_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../include/include.module */ "+TEy");








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageRoutingModule"],
            _include_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"]
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "vtAh":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-us.page.html */ "I+rJ");
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.page.scss */ "Pt6G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






let ContactUsPage = class ContactUsPage {
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
    logScrolling(event) {
        if (event.detail.scrollTop > 100) {
            $('.header_bottom').addClass("fix");
        }
        else {
            $('.header_bottom').removeClass("fix");
        }
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-contact-us-module-es2015.js.map