(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"],{

/***/ "BhQr":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "IQNL");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "E6Se");
/* harmony import */ var _include_include_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../include/include.module */ "+TEy");








let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"],
            _include_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "E6Se":
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faq.page.html */ "S26M");
/* harmony import */ var _faq_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.page.scss */ "b+so");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






let FaqPage = class FaqPage {
    // hrefval=' href="#collapseOne"';
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
    }
    ngOnInit() {
        this.faqList();
    }
    faqList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'get-faq-list', formData).subscribe((res) => {
            //console.log(res);
            if (res && res.status) {
                this.catList = res.response_data;
            }
            else {
                this.catList = null;
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
FaqPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqPage);



/***/ }),

/***/ "IQNL":
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "E6Se");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "S26M":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n\n  <app-header></app-header>\n\n  <!----- product search area start ----->\n  <section class=\"product_search_area\">\n    <div class=\"container\">\n      <h1>frequently asked questions</h1>\n      <ul class=\"pagger_link\">\n        <li><a [routerLink]=\"['/']\">home</a></li>\n        <li class=\"active\">FAQ</li>\n      </ul>\n    </div>\n  </section>\n  <!----- product search area stop ----->\n\n  <!------- faq area start ------->\n  <section class=\"main_area faq_area\">\n    <div class=\"container\">\n\n      <div class=\"row row-25\">\n        <div class=\"col-lg-9\">\n          <div class=\"faq_body\">\n\n            <div id=\"accordion\" class=\"accordion\">\n              <div class=\"card mb-0\">\n                <div *ngFor=\"let f of catList; let i=index;\">\n                <div class=\"card-header collapsed \" data-toggle=\"collapse\" href=\"#collapseOne\">\n                  <div class=\"number_box\">{{i+1}}.</div>\n                  <a class=\"card-title\">\n                    {{f.faq_question}}\n                  </a>\n                </div>\n                <div id=\"collapseOne\" class=\"card-body collapse\" data-parent=\"#accordion\">\n                  <p>{{f.faq_asware}}</p>\n                </div>\n               </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"faq_help\">\n            <h4>How we can help you!</h4>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n            <a [routerLink]=\"['/contact-us']\" class=\"btn btn-primary\">contact us <i class=\"fa fa-long-arrow-right\"\n                aria-hidden=\"true\"></i></a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n  <!------- faq area stop ------->\n\n\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "b+so":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*----- product search css start ------*/\n.product_search_area {\n  padding: 35px 0px;\n  background: #f7f6ff;\n}\n.product_search_area .search_area .form-group {\n  width: 316px;\n  display: inline-block;\n  position: relative;\n  margin: 0 2px 0 0;\n}\n.product_search_area .search_area .form-control {\n  width: 100%;\n  height: 48px !important;\n  border: 1px solid #c9c9c9;\n  box-sizing: border-box;\n  border-radius: 5px;\n  outline: none;\n  padding-left: 40px;\n  font-size: 15px;\n}\n.product_search_area .search_area .form-group .icon {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  left: 18px;\n}\n.product_search_area .search_area .btn {\n  padding: 11px 30px;\n}\n.product_search_area .sort_by {\n  width: 117px;\n  position: relative;\n}\n.product_search_area .sort_by select.form-control {\n  width: 100%;\n  height: 48px !important;\n  border-radius: 5px;\n  border: 1px solid #c9c9c9;\n  font-size: 15px;\n  cursor: pointer;\n  outline: none;\n}\n.product_search_area .sort_by .icon {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.product_search_area .sort_by:after {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  right: 28px;\n  width: 1px;\n  height: 55%;\n  background: #c9c9c9;\n  box-sizing: border-box;\n}\n/*----- product search css stop ------*/\n.product_search_area h1 {\n  color: #262262;\n  font-size: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  line-height: normal;\n}\n.product_search_area ul.pagger_link {\n  padding: 0 0;\n  margin: 0 0;\n}\n.product_search_area ul.pagger_link li {\n  padding: 0 0 0 0;\n  margin: 0 0 0 0;\n  list-style: none;\n  display: inline-block;\n  position: relative;\n  padding-right: 8px;\n  margin-right: 8px;\n}\n.product_search_area ul.pagger_link li:after {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  top: 1px;\n  right: -5px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000;\n}\n.product_search_area ul.pagger_link li:last-child {\n  padding-right: 0px;\n  margin-right: 0px;\n}\n.product_search_area ul.pagger_link li:last-child:after {\n  display: none;\n}\n.product_search_area ul.pagger_link li a {\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.product_search_area ul.pagger_link li a:hover {\n  color: #ed1c24;\n}\n.product_search_area ul.pagger_link li.active {\n  color: #ed1c24;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n}\n/*---------- faq area css start ----------*/\n.faq_area .faq_help {\n  position: relative;\n  color: #fff;\n  background: #262262;\n  padding: 28px 30px 40px 30px;\n  -webkit-clip-path: polygon(90% 0, 100% 18%, 100% 100%, 0 100%, 0 0);\n  clip-path: polygon(90% 0, 100% 18%, 100% 100%, 0 100%, 0 0);\n  position: relative;\n}\n.faq_area .faq_help:after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  right: 6px;\n  width: 100px;\n  height: 100px;\n  background-image: url(/assets/images/faq-help-icon.png);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.faq_area .faq_help h4 {\n  color: #fff;\n  font-size: 25px;\n  font-weight: 600;\n  line-height: normal;\n  margin-bottom: 10px;\n}\n.faq_area .faq_help p {\n  font-size: 15px;\n  font-weight: 400;\n  color: #f6f5ff;\n}\n.faq_area .faq_help .btn-primary {\n  background: transparent !important;\n  border-color: #fff !important;\n}\n.faq_area .faq_help .btn-primary:hover {\n  color: #000 !important;\n  background: #fff !important;\n}\n.faq_area .faq_body .accordion .card-header:after {\n  font-family: \"FontAwesome\";\n  content: \"\";\n  float: right;\n  color: #262262;\n}\n.faq_area .faq_body .accordion .card-header.collapsed:after {\n  /* symbol for \"collapsed\" panels */\n  content: \"\";\n}\n.faq_area .faq_body .card {\n  border: none;\n}\n.faq_area .faq_body .card .card-header {\n  background: transparent;\n  padding-left: 30px;\n  padding-right: 0px;\n  position: relative;\n  cursor: pointer;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.faq_area .faq_body .card .card-header .card-title {\n  font-weight: 600;\n  color: #262262;\n  font-size: 16px;\n}\n.faq_area .faq_body .card .card-header .number_box {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: 0;\n  font-size: 18px;\n  color: #ed1c24;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.faq_area .faq_body .card .card-body {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.faq_area .faq_body .card .card-body p {\n  font-size: 15px;\n}\n.faq_area .faq_body .card .card-body p:last-child {\n  margin-bottom: 0px;\n}\n/*---------- faq area css stop ----------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQix3Q0FBQTtBQUNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjtBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFJSjtBQUZBO0VBQ0ksa0JBQUE7QUFLSjtBQUhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBTUo7QUFKQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFPSjtBQUxBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFRSjtBQU5BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFTSjtBQVBBLHVDQUFBO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBU0o7QUFQQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBVUo7QUFSQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFXSjtBQVRBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFZSjtBQVZBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQWFKO0FBWEE7RUFDSSxhQUFBO0FBY0o7QUFaQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBZUo7QUFiQTtFQUNJLGNBQUE7QUFnQko7QUFkQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBaUJKO0FBZEEsMkNBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtRUFBQTtFQUNBLDJEQUFBO0VBQ0Esa0JBQUE7QUFnQko7QUFkQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1REFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQWlCSjtBQWZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFrQko7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbUJKO0FBakJBO0VBQ0ksa0NBQUE7RUFDQSw2QkFBQTtBQW9CSjtBQWxCQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7QUFxQko7QUFqQkE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQW9CSjtBQWxCQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtBQXFCSjtBQW5CQTtFQUNJLFlBQUE7QUFzQko7QUFwQkE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBdUJKO0FBckJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXdCSjtBQXRCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBeUJKO0FBdkJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQTBCSjtBQXhCQTtFQUNJLGVBQUE7QUEyQko7QUF6QkE7RUFDSSxrQkFBQTtBQTRCSjtBQTFCQSwwQ0FBQSIsImZpbGUiOiJmYXEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyotLS0tLSBwcm9kdWN0IHNlYXJjaCBjc3Mgc3RhcnQgLS0tLS0tKi9cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHtcbiAgcGFkZGluZzogMzVweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y2ZmY7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zZWFyY2hfYXJlYSAuZm9ybS1ncm91cCB7XG4gIHdpZHRoOiAzMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAycHggMCAwO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc2VhcmNoX2FyZWEgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNlYXJjaF9hcmVhIC5mb3JtLWdyb3VwIC5pY29uIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIGxlZnQ6IDE4cHg7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zZWFyY2hfYXJlYSAuYnRuIHtcbiAgcGFkZGluZzogMTFweCAzMHB4O1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc29ydF9ieSB7XG4gIHdpZHRoOiAxMTdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc29ydF9ieSBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc29ydF9ieSAuaWNvbiB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNvcnRfYnk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogNTUlO1xuICBiYWNrZ3JvdW5kOiAjYzljOWM5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKi0tLS0tIHByb2R1Y3Qgc2VhcmNoIGNzcyBzdG9wIC0tLS0tLSovXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSBoMSB7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIHtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDAgMDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsgbGkge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgcmlnaHQ6IC01cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIGxpOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsgbGkgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZWQxYzI0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi8qLS0tLS0tLS0tLSBmYXEgYXJlYSBjc3Mgc3RhcnQgLS0tLS0tLS0tLSovXG4uZmFxX2FyZWEgLmZhcV9oZWxwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzI2MjI2MjtcbiAgcGFkZGluZzogMjhweCAzMHB4IDQwcHggMzBweDtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oOTAlIDAsIDEwMCUgMTglLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkwJSAwLCAxMDAlIDE4JSwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZhcV9hcmVhIC5mYXFfaGVscDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtOHB4O1xuICByaWdodDogNnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9mYXEtaGVscC1pY29uLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZmFxX2FyZWEgLmZhcV9oZWxwIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZhcV9hcmVhIC5mYXFfaGVscCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2Y2ZjVmZjtcbn1cblxuLmZhcV9hcmVhIC5mYXFfaGVscCAuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmZhcV9hcmVhIC5mYXFfaGVscCAuYnRuLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5mYXFfYXJlYSAuZmFxX2JvZHkgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXI6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+BqFwiO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMjYyMjYyO1xufVxuXG4uZmFxX2FyZWEgLmZhcV9ib2R5IC5hY2NvcmRpb24gLmNhcmQtaGVhZGVyLmNvbGxhcHNlZDphZnRlciB7XG4gIC8qIHN5bWJvbCBmb3IgXCJjb2xsYXBzZWRcIiBwYW5lbHMgKi9cbiAgY29udGVudDogXCLvgadcIjtcbn1cblxuLmZhcV9hcmVhIC5mYXFfYm9keSAuY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZhcV9hcmVhIC5mYXFfYm9keSAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5mYXFfYXJlYSAuZmFxX2JvZHkgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyNjIyNjI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZhcV9hcmVhIC5mYXFfYm9keSAuY2FyZCAuY2FyZC1oZWFkZXIgLm51bWJlcl9ib3gge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2VkMWMyNDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZhcV9hcmVhIC5mYXFfYm9keSAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmZhcV9hcmVhIC5mYXFfYm9keSAuY2FyZCAuY2FyZC1ib2R5IHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mYXFfYXJlYSAuZmFxX2JvZHkgLmNhcmQgLmNhcmQtYm9keSBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi8qLS0tLS0tLS0tLSBmYXEgYXJlYSBjc3Mgc3RvcCAtLS0tLS0tLS0tKi8iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-faq-faq-module-es2015.js.map