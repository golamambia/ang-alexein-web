(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-seller-update-seller-add-module"],{

/***/ "Su/d":
/*!******************************************************************!*\
  !*** ./src/app/admin/seller-update/seller-add-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SellerAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAddPageRoutingModule", function() { return SellerAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-add.page */ "f4KX");




const routes = [
    {
        path: '',
        component: _seller_add_page__WEBPACK_IMPORTED_MODULE_3__["SellerAddPage"]
    }
];
let SellerAddPageRoutingModule = class SellerAddPageRoutingModule {
};
SellerAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerAddPageRoutingModule);



/***/ }),

/***/ "Y39Q":
/*!**********************************************************!*\
  !*** ./src/app/admin/seller-update/seller-add.module.ts ***!
  \**********************************************************/
/*! exports provided: SellerAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAddPageModule", function() { return SellerAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-add-routing.module */ "Su/d");
/* harmony import */ var _seller_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-add.page */ "f4KX");







let SellerAddPageModule = class SellerAddPageModule {
};
SellerAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerAddPageRoutingModule"]
        ],
        exports: [
            _seller_add_page__WEBPACK_IMPORTED_MODULE_6__["SellerAddPage"]
        ],
        declarations: [_seller_add_page__WEBPACK_IMPORTED_MODULE_6__["SellerAddPage"]]
    })
], SellerAddPageModule);



/***/ }),

/***/ "f4KX":
/*!********************************************************!*\
  !*** ./src/app/admin/seller-update/seller-add.page.ts ***!
  \********************************************************/
/*! exports provided: SellerAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAddPage", function() { return SellerAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-add.page.html */ "wvcM");
/* harmony import */ var _seller_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-add.page.scss */ "oKzE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let SellerAddPage = class SellerAddPage {
    constructor(alertController, http, formBuilder, loadingController, route) {
        this.alertController = alertController;
        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.route = route;
        this.submitted = false;
        this.imageLoaded = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params) {
                //let queryParams = params;
                this.catid = params['id'];
                //console.log(this.catid);
            }
        });
        let data = {
            "user_id": this.catid,
        };
        this.http.post(this.url + 'user-details', data)
            .subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.sellerForm.patchValue({
                    name: res.response_data.name,
                    dob: res.response_data.dob,
                    email: res.response_data.email,
                    email_confirmation: res.response_data.email,
                    phone_no: res.response_data.phone_no,
                    password: res.response_data.password,
                    password_confirmation: res.response_data.password_confirmation,
                    billing_address: res.response_data.billing_address,
                    country: res.response_data.country,
                    state: res.response_data.state,
                    city: res.response_data.city,
                    zip: res.response_data.zip,
                });
            }
            else {
                alert("Server error");
                //loading.dismiss();
            }
        }, (err) => {
            console.log(err);
            //loading.dismiss();
        });
        this.sellerForm = this.formBuilder.group({
            //seller_id: ['', [Validators.required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            billing_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            zip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    submit() {
        this.submitted = true;
        if (this.sellerForm.invalid) {
            return;
        }
        else if (this.sellerForm.value.email != this.sellerForm.value.email_confirmation) {
            this.presentAlert("Error!", "", "Email & confirm email must be same");
            return;
        }
        else if (this.sellerForm.value.password != this.sellerForm.value.password_confirmation) {
            this.presentAlert("Error!", "", "Password & confirm password must be same");
            return;
        }
        else {
            this.loadingShow();
            let formData = new FormData;
            formData.append('name', this.sellerForm.value.name);
            formData.append('dob', this.sellerForm.value.dob);
            formData.append('email', this.sellerForm.value.email);
            formData.append('email_confirmation', this.sellerForm.value.email_confirmation);
            formData.append('phone_no', this.sellerForm.value.phone_no);
            formData.append('password', this.sellerForm.value.password);
            formData.append('password_confirmation', this.sellerForm.value.password_confirmation);
            formData.append('billing_address', this.sellerForm.value.billing_address);
            formData.append('country', this.sellerForm.value.country);
            formData.append('state', this.sellerForm.value.state);
            formData.append('city', this.sellerForm.value.city);
            formData.append('zip', this.sellerForm.value.zip);
            formData.append('user_id', this.catid);
            this.http.post(this.url + 'user-update', formData).subscribe((res) => {
                this.loadingHide();
                if (res.status) {
                    //this.faqForm.reset();
                    this.submitted = false;
                    this.presentAlert('Success!', '', res.message ? res.message : 'Seccessfully updated.');
                }
                else {
                    this.presentAlert('Error!', '', 'Server error, please try again later');
                }
            }, err => {
                this.loadingHide();
                this.presentAlert('Error!', '', 'Server error, please try again later');
            });
        }
    }
    loadingShow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
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
    get f() { return this.sellerForm.controls; }
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
    importFile(event) {
        if (event.target.files && event.target.files.length > 0) {
            let files = event.target.files || event.dataTransfer.files;
            if (!files.length)
                return;
            var fileName = files[0].name.toUpperCase();
            if (fileName.endsWith(".JPG") || fileName.endsWith(".JPEG") || fileName.endsWith(".PNG")) {
                this.image = files[0];
                this.imageLoaded = true;
            }
            else {
                this.image = null;
                this.presentAlert("Error!", "", "Please select a valid image file jpeg/jpg/png");
            }
        }
    }
    onlyNumberKey(event) {
        return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
    }
};
SellerAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
SellerAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-add',
        template: _raw_loader_seller_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerAddPage);



/***/ }),

/***/ "oKzE":
/*!**********************************************************!*\
  !*** ./src/app/admin/seller-update/seller-add.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxsZXItYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLFdBQUE7RUFBWSxXQUFBO0FBR2xCOztBQURBO0VBQVMsYUFBQTtBQUtUOztBQUpBO0VBQWEsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLHVDQUFBO0VBQXdDLGdCQUFBO0VBQWlCLGtCQUFBO0FBYXZIOztBQVpBO0VBQWdCLFNBQUE7RUFBVSxVQUFBO0VBQVcsZUFBQTtFQUFnQixpQkFBQTtBQW1CckQ7O0FBbEJBO0VBQXNCLFdBQUE7RUFBWSxZQUFBO0VBQWEsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsV0FBQTtFQUFZLGVBQUE7RUFBZ0Isa0JBQUE7QUE4QnZKOztBQTVCQSwwQ0FBQTs7QUFDQTtFQUNDLGtCQUFBO0VBQ0csdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBK0JKOztBQTdCQTtFQUNDLGVBQUE7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWdDSjs7QUE5QkE7RUFDQyxnQkFBQTtFQUNBLHFCQUFBO0FBaUNEOztBQS9CQTtFQUNDLGFBQUE7QUFrQ0Q7O0FBaENBO0VBQ0ksaUJBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksa0JBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFzQ0o7O0FBcENBO0VBQ0MsV0FBQTtBQXVDRDs7QUFyQ0EseUNBQUEiLCJmaWxlIjoic2VsbGVyLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlO31cblxuI2NvbnRlbnR7cGFkZGluZzozMHB4O31cbi5wYWdlLWhlYWRlcnttYXJnaW46MCAwIDMwcHg7IHBhZGRpbmc6MTBweCAxOHB4OyBib3JkZXI6bm9uZTsgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo1cHg7fVxuLnBhZ2UtaGVhZGVyIGgxe21hcmdpbjowOyBwYWRkaW5nOjA7IGZvbnQtc2l6ZToxOHB4OyBsaW5lLWhlaWdodDozMHB4O31cbi5wYWdlLWhlYWRlciBoMSAuaWNvbnt3aWR0aDozMHB4OyBoZWlnaHQ6MzBweDsgYmFja2dyb3VuZDojZWQxYzI0OyBib3JkZXItcmFkaXVzOjNweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGxpbmUtaGVpZ2h0OjMwcHg7IGNvbG9yOiNmZmY7IGZvbnQtc2l6ZToxNHB4OyBtYXJnaW4tcmlnaHQ6MTBweDt9XG5cbi8qLS0tLS0tLSBwcm9maWxlIGZvcm0gY3NzIHN0YXJ0IC0tLS0tLS0tKi9cbi5wcm9maWxlX2Zvcm1fYXJlYXtcblx0cGFkZGluZzogMThweCAxOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDEwJSk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmZvcm0tZ3JvdXAgbGFiZWx7XG5cdGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmZvcm0tY29udHJvbDpmb2N1c3tcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0Ym9yZGVyLWNvbG9yOiAjMjYyMjYyO1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIHRleHRhcmVhLmZvcm0tY29udHJvbHtcblx0aGVpZ2h0OiAxMjBweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCB7XG4gICAgd2lkdGg6IDc2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyMjYyO1xuICAgIGJvcmRlci1jb2xvcjogIzI2MjI2MjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnBhZ2luYXRpb24+bGk+YSwgLnBhZ2luYXRpb24+bGk+c3Bhbntcblx0Y29sb3I6ICMwMDA7XG59XG4vKi0tLS0tLS0gcHJvZmlsZSBmb3JtIGNzcyBzdG9wIC0tLS0tLS0tKi8iXX0= */");

/***/ }),

/***/ "wvcM":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/seller-update/seller-add.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Update seller</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> Seller Update</h1>\n        </div>\n        <div class=\"profile_form_area\">\n          <form [formGroup]=\"sellerForm\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n               <div class=\"form-group\">\n          <label>Seller Name</label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Seller name\">\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n       \n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n          <label>DOB</label>\n          <input type=\"date\" formControlName=\"dob\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" placeholder=\"DOB\">\n          <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.dob.errors.required\">DOB is required</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\">\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          </div>\n        </div>\n       \n            </div>\n             <div class=\"col-md-12\">\n              <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"email\" formControlName=\"email_confirmation\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.email_confirmation.errors }\" placeholder=\"Confirm Email\">\n          <div *ngIf=\"submitted && f.email_confirmation.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email_confirmation.errors.required\">Confirm email is required</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n          <label>Phone</label>\n          <input type=\"text\" formControlName=\"phone_no\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.phone_no.errors }\" placeholder=\"Phone no\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"12\">\n          <div *ngIf=\"submitted && f.phone_no.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.phone_no.errors.required\">Phone no is required</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-12\">\n               <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n        </div>\n       \n            </div>\n            <div class=\"col-md-12\">\n               <div class=\"form-group\">\n          <label>Confirm Password</label>\n          <input type=\"password\" formControlName=\"password_confirmation\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.password_confirmation.errors }\" placeholder=\"Confirm Password\">\n          <div *ngIf=\"submitted && f.password_confirmation.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password_confirmation.errors.required\">Confirm password is required</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-12\">\n               <div class=\"form-group\">\n          <label>Billing Address</label>\n          <textarea formControlName=\"billing_address\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.billing_address.errors }\"\n            placeholder=\"Billing Address\"></textarea>\n          <div *ngIf=\"submitted && f.billing_address.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.billing_address.errors.required\">Address is required</div>\n          </div>\n        </div>\n       \n            </div>\n            <div class=\"col-md-12\">\n               <div class=\"form-group\">\n          <label>Country</label>\n          <input type=\"text\" formControlName=\"country\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" placeholder=\"Country\">\n          <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.country.errors.required\">Country is required</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-12\">\n              \n        <div class=\"form-group\">\n          <label>State</label>\n          <input type=\"text\" formControlName=\"state\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" placeholder=\"State\">\n          <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.state.errors.required\">State is required</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n          <label>City</label>\n          <input type=\"text\" formControlName=\"city\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" placeholder=\"City\">\n          <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.city.errors.required\">City is required</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n          <label>Zip</label>\n          <input type=\"text\" formControlName=\"zip\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.zip.errors }\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"6\" placeholder=\"Zip\">\n          <div *ngIf=\"submitted && f.zip.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.zip.errors.required\">Zip is required</div>\n          </div>\n        </div>\n       \n            </div>\n           \n            \n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"submit()\">UPDATE</button>\n            </div>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=admin-seller-update-seller-add-module-es2015.js.map