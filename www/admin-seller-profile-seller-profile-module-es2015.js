(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-seller-profile-seller-profile-module"],{

/***/ "0gKT":
/*!***********************************************************************!*\
  !*** ./src/app/admin/seller-profile/seller-profile-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SellerProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProfilePageRoutingModule", function() { return SellerProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-profile.page */ "mgcw");




const routes = [
    {
        path: '',
        component: _seller_profile_page__WEBPACK_IMPORTED_MODULE_3__["SellerProfilePage"]
    }
];
let SellerProfilePageRoutingModule = class SellerProfilePageRoutingModule {
};
SellerProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerProfilePageRoutingModule);



/***/ }),

/***/ "Dd4p":
/*!***************************************************************!*\
  !*** ./src/app/admin/seller-profile/seller-profile.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxsZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxXQUFBO0VBQVksV0FBQTtBQUdsQjs7QUFEQTtFQUFTLGFBQUE7QUFLVDs7QUFKQTtFQUFhLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSx1Q0FBQTtFQUF3QyxnQkFBQTtFQUFpQixrQkFBQTtBQWF2SDs7QUFaQTtFQUFnQixTQUFBO0VBQVUsVUFBQTtFQUFXLGVBQUE7RUFBZ0IsaUJBQUE7QUFtQnJEOztBQWxCQTtFQUFzQixXQUFBO0VBQVksWUFBQTtFQUFhLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLFdBQUE7RUFBWSxlQUFBO0VBQWdCLGtCQUFBO0FBOEJ2Sjs7QUE1QkEsMENBQUE7O0FBQ0E7RUFDQyxrQkFBQTtFQUNHLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStCSjs7QUE3QkE7RUFDQyxlQUFBO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFnQ0o7O0FBOUJBO0VBQ0MsZ0JBQUE7RUFDQSxxQkFBQTtBQWlDRDs7QUEvQkE7RUFDQyxhQUFBO0FBa0NEOztBQWhDQTtFQUNJLGlCQUFBO0FBbUNKOztBQWpDQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0NKOztBQWxDQTtFQUNJLGtCQUFBO0FBcUNKOztBQW5DQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBc0NKOztBQXBDQTtFQUNDLFdBQUE7QUF1Q0Q7O0FBckNBLHlDQUFBIiwiZmlsZSI6InNlbGxlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWlue2Zsb2F0OmxlZnQ7IHdpZHRoOjEwMCU7fVxuXG4jY29udGVudHtwYWRkaW5nOjMwcHg7fVxuLnBhZ2UtaGVhZGVye21hcmdpbjowIDAgMzBweDsgcGFkZGluZzoxMHB4IDE4cHg7IGJvcmRlcjpub25lOyBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjVweDt9XG4ucGFnZS1oZWFkZXIgaDF7bWFyZ2luOjA7IHBhZGRpbmc6MDsgZm9udC1zaXplOjE4cHg7IGxpbmUtaGVpZ2h0OjMwcHg7fVxuLnBhZ2UtaGVhZGVyIGgxIC5pY29ue3dpZHRoOjMwcHg7IGhlaWdodDozMHB4OyBiYWNrZ3JvdW5kOiNlZDFjMjQ7IGJvcmRlci1yYWRpdXM6M3B4OyB0ZXh0LWFsaWduOmNlbnRlcjsgbGluZS1oZWlnaHQ6MzBweDsgY29sb3I6I2ZmZjsgZm9udC1zaXplOjE0cHg7IG1hcmdpbi1yaWdodDoxMHB4O31cblxuLyotLS0tLS0tIHByb2ZpbGUgZm9ybSBjc3Mgc3RhcnQgLS0tLS0tLS0qL1xuLnByb2ZpbGVfZm9ybV9hcmVhe1xuXHRwYWRkaW5nOiAxOHB4IDE4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuZm9ybS1ncm91cCBsYWJlbHtcblx0Zm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuZm9ybS1jb250cm9sOmZvY3Vze1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXItY29sb3I6ICMyNjIyNjI7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgdGV4dGFyZWEuZm9ybS1jb250cm9se1xuXHRoZWlnaHQ6IDEyMHB4O1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcbiAgICB3aWR0aDogNzZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19maWx0ZXIgaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjIyNjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjYyMjYyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ucGFnaW5hdGlvbj5saT5hLCAucGFnaW5hdGlvbj5saT5zcGFue1xuXHRjb2xvcjogIzAwMDtcbn1cbi8qLS0tLS0tLSBwcm9maWxlIGZvcm0gY3NzIHN0b3AgLS0tLS0tLS0qLyJdfQ== */");

/***/ }),

/***/ "KIpT":
/*!***************************************************************!*\
  !*** ./src/app/admin/seller-profile/seller-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: SellerProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProfilePageModule", function() { return SellerProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-profile-routing.module */ "0gKT");
/* harmony import */ var _seller_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-profile.page */ "mgcw");







let SellerProfilePageModule = class SellerProfilePageModule {
};
SellerProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerProfilePageRoutingModule"]
        ],
        declarations: [_seller_profile_page__WEBPACK_IMPORTED_MODULE_6__["SellerProfilePage"]]
    })
], SellerProfilePageModule);



/***/ }),

/***/ "fMcX":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/seller-profile/seller-profile.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Seller Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> Profile</h1>\n        </div>\n\n        <div class=\"profile_form_area\">\n          \n          \n          <form >\n          <div class=\"row\">\n            \n            <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Full name <sup>*</sup>\n                         \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter your full name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Email address <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"email\"name=\"email\" ngModel #emailref=\"ngModel\" >\n          <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class =\"alert alert-danger\">\n           <div [hidden]=\"!emailref.errors?.pattern\">\n             Invalid pattern\n           </div>\n                      </div>\n                    </div>\n                  </div>\n                    \n                    \n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Mobile number <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"phone_no\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\" \n                          placeholder=\"Enter your mobile no.\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"12\">\n                      </div>\n                    </div>\n                   \n                    \n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Billing address <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"billing_address\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\" \n                          placeholder=\"Enter billing address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Country <sup>*</sup>\n                         \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"country\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter country name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>State <sup>*</sup>\n                         \n                        </label>\n                        <select [(ngModel)]=\"state\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\" >\n                          <option disabled selected value=\"\">Select State</option>\n                          <option value=\"West Bengal\">West Bengal</option>\n                          <option value=\"other\">Other</option>\n                        </select>\n                        \n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>City <sup>*</sup>\n                        \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"city\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter city name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Zip code <sup>*</sup>\n                          \n                        </label>\n                        <input type=\"text\" [(ngModel)]=\"zip\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"Enter zip code\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"6\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Date of birth <sup>*</sup>\n                        \n                        </label>\n                        <input [(ngModel)]=\"dob\" type=\"date\" class=\"form-control\"\n                          [ngModelOptions]=\"{standalone:true}\"  placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                          >\n                        \n                      </div>\n                    </div>\n            \n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"onSubmit()\">SUBMIT</button>\n            </div>\n          </div>\n        </form>\n        \n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "mgcw":
/*!*************************************************************!*\
  !*** ./src/app/admin/seller-profile/seller-profile.page.ts ***!
  \*************************************************************/
/*! exports provided: SellerProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProfilePage", function() { return SellerProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-profile.page.html */ "fMcX");
/* harmony import */ var _seller_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-profile.page.scss */ "Dd4p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let SellerProfilePage = class SellerProfilePage {
    constructor(http, alertController, formBuilder, loadingController, storage, router, route) {
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
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sub = this.route.params.subscribe(params => {
                if (params) {
                    //let queryParams = params;
                    this.catid = params['id'];
                    //console.log(this.catid);
                    this.getUserData();
                }
            });
            yield this.storage.create();
        });
    }
    getUserData() {
        this.loadingShow();
        let formData = new FormData;
        formData.append('user_id', this.catid);
        // formData.append('password', this.loginForm.value.password);
        this.http.post(this.url + 'user-details', formData).subscribe((res) => {
            this.loadingHide();
            // console.log(res);
            if (res && res.status) {
                this.buyerData = res.response_data;
                this.name = res.response_data.name;
                this.email = res.response_data.email;
                for (let rd of res.response_data_one) {
                    if (rd['meta_key'] == 'billing_address') {
                        this.billing_address = rd['meta_value'];
                    }
                    if (rd['meta_key'] == 'country') {
                        this.country = rd['meta_value'];
                    }
                    if (rd['meta_key'] == 'state') {
                        this.state = rd['meta_value'];
                    }
                    if (rd['meta_key'] == 'city') {
                        this.city = rd['meta_value'];
                    }
                    if (rd['meta_key'] == 'zip') {
                        this.zip = rd['meta_value'];
                    }
                    if (rd['meta_key'] == 'dob') {
                        var date = new Date();
                        var str_array = rd['meta_value'].split('-');
                        //console.log(str_array[0]);
                        //console.log(filter('date')("dd-MM-yyyy"));
                        //console.log(rd['meta_value'].DateofBirth | date: 'dd/MM/yyyy hh:mm a');
                        this.dob = rd['meta_value'];
                    }
                    if (rd['meta_key'] == 'phone_no') {
                        this.phone_no = rd['meta_value'];
                    }
                }
                // 
                // this.country=res.response_data.name;
                // this.state=res.response_data.name;
                // this.city=res.response_data.name;
                // this.zip=res.response_data.name;
                // this.dob=res.response_data.name;
                // this.phone_no=res.response_data.name;
            }
            else {
                this.presentAlert('Error!', '', res.message);
            }
        }, err => {
            this.loadingHide();
            this.presentAlert('Error!', '', 'Server error, please try again later');
        });
    }
    onSubmit() {
        // this.submitted = true;
        this.loadingShow();
        let formData = new FormData;
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('billing_address', this.billing_address);
        formData.append('country', this.country);
        formData.append('state', this.state);
        formData.append('city', this.city);
        formData.append('zip', this.zip);
        formData.append('dob', this.dob);
        //formData.append('dob', this.dob.year + '-' + this.dob.month + '-' +  this.dob.day);
        formData.append('phone_no', this.phone_no);
        formData.append('user_id', this.catid);
        this.http.post(this.url + 'user-update', formData).subscribe((res) => {
            // console.log(res);
            this.loadingHide();
            if (res && res.status) {
                this.presentAlert('Success!', '', res.message);
            }
            else {
                this.presentAlert('Error!', '', res.message);
            }
        }, err => {
            this.loadingHide();
            this.presentAlert('Error!', '', 'Server error, please try again later');
        });
    }
    presentAlert(header, subHeader, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                subHeader,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    get f() { return this.groupForm.controls; }
    loadingShow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield this.loading.present();
        });
    }
    loadingHide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
    onlyNumberKey(event) {
        return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
    }
};
SellerProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
SellerProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-profile',
        template: _raw_loader_seller_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerProfilePage);



/***/ })

}]);
//# sourceMappingURL=admin-seller-profile-seller-profile-module-es2015.js.map