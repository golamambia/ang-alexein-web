(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-product-add-admin-product-add-module"],{

/***/ "9Qk/":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-product-add/admin-product-add.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminProductAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductAddPageModule", function() { return AdminProductAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_product_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-product-add-routing.module */ "g7k2");
/* harmony import */ var _admin_product_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-product-add.page */ "lERD");







let AdminProductAddPageModule = class AdminProductAddPageModule {
};
AdminProductAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_product_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminProductAddPageRoutingModule"]
        ],
        declarations: [_admin_product_add_page__WEBPACK_IMPORTED_MODULE_6__["AdminProductAddPage"]]
    })
], AdminProductAddPageModule);



/***/ }),

/***/ "YKZ/":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-product-add/admin-product-add.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi1wcm9kdWN0LWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxXQUFBO0VBQVksV0FBQTtBQUdsQjs7QUFEQTtFQUFTLGFBQUE7QUFLVDs7QUFKQTtFQUFhLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSx1Q0FBQTtFQUF3QyxnQkFBQTtFQUFpQixrQkFBQTtBQWF2SDs7QUFaQTtFQUFnQixTQUFBO0VBQVUsVUFBQTtFQUFXLGVBQUE7RUFBZ0IsaUJBQUE7QUFtQnJEOztBQWxCQTtFQUFzQixXQUFBO0VBQVksWUFBQTtFQUFhLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLFdBQUE7RUFBWSxlQUFBO0VBQWdCLGtCQUFBO0FBOEJ2Sjs7QUE1QkEsMENBQUE7O0FBQ0E7RUFDQyxrQkFBQTtFQUNHLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStCSjs7QUE3QkE7RUFDQyxlQUFBO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFnQ0o7O0FBOUJBO0VBQ0MsZ0JBQUE7RUFDQSxxQkFBQTtBQWlDRDs7QUEvQkE7RUFDQyxhQUFBO0FBa0NEOztBQWhDQTtFQUNJLGlCQUFBO0FBbUNKOztBQWpDQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0NKOztBQWxDQTtFQUNJLGtCQUFBO0FBcUNKOztBQW5DQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBc0NKOztBQXBDQTtFQUNDLFdBQUE7QUF1Q0Q7O0FBckNBLHlDQUFBIiwiZmlsZSI6ImFkbWluLXByb2R1Y3QtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWlue2Zsb2F0OmxlZnQ7IHdpZHRoOjEwMCU7fVxuXG4jY29udGVudHtwYWRkaW5nOjMwcHg7fVxuLnBhZ2UtaGVhZGVye21hcmdpbjowIDAgMzBweDsgcGFkZGluZzoxMHB4IDE4cHg7IGJvcmRlcjpub25lOyBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjVweDt9XG4ucGFnZS1oZWFkZXIgaDF7bWFyZ2luOjA7IHBhZGRpbmc6MDsgZm9udC1zaXplOjE4cHg7IGxpbmUtaGVpZ2h0OjMwcHg7fVxuLnBhZ2UtaGVhZGVyIGgxIC5pY29ue3dpZHRoOjMwcHg7IGhlaWdodDozMHB4OyBiYWNrZ3JvdW5kOiNlZDFjMjQ7IGJvcmRlci1yYWRpdXM6M3B4OyB0ZXh0LWFsaWduOmNlbnRlcjsgbGluZS1oZWlnaHQ6MzBweDsgY29sb3I6I2ZmZjsgZm9udC1zaXplOjE0cHg7IG1hcmdpbi1yaWdodDoxMHB4O31cblxuLyotLS0tLS0tIHByb2ZpbGUgZm9ybSBjc3Mgc3RhcnQgLS0tLS0tLS0qL1xuLnByb2ZpbGVfZm9ybV9hcmVhe1xuXHRwYWRkaW5nOiAxOHB4IDE4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuZm9ybS1ncm91cCBsYWJlbHtcblx0Zm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuZm9ybS1jb250cm9sOmZvY3Vze1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXItY29sb3I6ICMyNjIyNjI7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgdGV4dGFyZWEuZm9ybS1jb250cm9se1xuXHRoZWlnaHQ6IDEyMHB4O1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcbiAgICB3aWR0aDogNzZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19maWx0ZXIgaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjIyNjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjYyMjYyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ucGFnaW5hdGlvbj5saT5hLCAucGFnaW5hdGlvbj5saT5zcGFue1xuXHRjb2xvcjogIzAwMDtcbn1cbi8qLS0tLS0tLSBwcm9maWxlIGZvcm0gY3NzIHN0b3AgLS0tLS0tLS0qLyJdfQ== */");

/***/ }),

/***/ "g7k2":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/admin-product-add/admin-product-add-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminProductAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductAddPageRoutingModule", function() { return AdminProductAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_product_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-product-add.page */ "lERD");




const routes = [
    {
        path: '',
        component: _admin_product_add_page__WEBPACK_IMPORTED_MODULE_3__["AdminProductAddPage"]
    }
];
let AdminProductAddPageRoutingModule = class AdminProductAddPageRoutingModule {
};
AdminProductAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminProductAddPageRoutingModule);



/***/ }),

/***/ "lERD":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-product-add/admin-product-add.page.ts ***!
  \*******************************************************************/
/*! exports provided: AdminProductAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductAddPage", function() { return AdminProductAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_product_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-product-add.page.html */ "xO/x");
/* harmony import */ var _admin_product_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-product-add.page.scss */ "YKZ/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










let AdminProductAddPage = class AdminProductAddPage {
    constructor(alertController, formBuilder, http, loadingController, storage, router) {
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingController = loadingController;
        this.storage = storage;
        this.router = router;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_URL;
        this.submitted = false;
        this.imageLoaded = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let today = new Date('05 October 2011 14:48 UTC');
            console.log(today.toISOString());
            this.productForm = this.formBuilder.group({
                seller_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_pictures: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_short_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_long_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_important_highlights: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_bid_starting_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_bid_start_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_bid_end_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            });
            yield this.storage.create().then(res => {
            });
            this.sellerList();
        });
    }
    sellerList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'seller-list', formData).subscribe((res) => {
            if (res && res.status) {
                //console.log(res.response_data);
                this.sellList = res.response_data;
            }
            else {
                this.sellList = null;
            }
        });
    }
    get f() { return this.productForm.controls; }
    submit() {
        if (this.userId === null) {
            this.router.navigate(['/login']);
        }
        this.submitted = true;
        if (this.productForm.invalid) {
            return;
        }
        else {
            this.loadingShow();
            let formData = new FormData;
            formData.append('seller_id', this.productForm.value.seller_id);
            formData.append('product_name', this.productForm.value.product_name);
            formData.append('product_picture', this.image);
            formData.append('product_short_description', this.productForm.value.product_short_description);
            formData.append('product_long_description', this.productForm.value.product_long_description);
            formData.append('product_important_highlights', this.productForm.value.product_important_highlights);
            formData.append('product_location', this.productForm.value.product_location);
            formData.append('product_bid_starting_price', this.productForm.value.product_bid_starting_price);
            formData.append('product_bid_start_date_and_time', (this.productForm.value.product_bid_start_date_and_time).split("T")[0] + ' ' + (this.productForm.value.product_bid_start_date_and_time).split("T")[1]);
            formData.append('product_bid_end_date_and_time', (this.productForm.value.product_bid_end_date_and_time).split("T")[0] + ' ' + (this.productForm.value.product_bid_end_date_and_time).split("T")[1]);
            formData.append('is_approved', '0');
            formData.append('status', '0');
            this.http.post(this.url + 'product-add', formData).subscribe((res) => {
                this.loadingHide();
                if (res.status) {
                    if (res.response_data.id) {
                        let formData2 = new FormData;
                        for (let i = 0; i < this.photos.length; i++) {
                            formData2.append('photos[]', this.photos[i]);
                        }
                        formData2.append('product_id', res.response_data.id);
                        this.http.post(this.url + 'product-multiple-image', formData2).subscribe((response) => {
                            if (response.status) {
                                this.productForm.reset();
                                this.submitted = false;
                                this.presentAlert('Success!', '', response.message);
                            }
                            else {
                                this.presentAlert('Error!', '', 'Server error, please try again later');
                            }
                        }, err => {
                            this.presentAlert('Error!', '', 'Server error, please try again later');
                        });
                    }
                    else {
                        this.presentAlert('Error!', '', 'Server error, please try again later');
                    }
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
    importFiles(event) {
        if (event.target.files && event.target.files.length > 0) {
            let files = event.target.files || event.dataTransfer.files;
            if (!files.length)
                return;
            this.photos = files;
        }
    }
};
AdminProductAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AdminProductAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-product-add',
        template: _raw_loader_admin_product_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_product_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminProductAddPage);



/***/ }),

/***/ "xO/x":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-product-add/admin-product-add.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Add new product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> Product Add</h1>\n        </div>\n\n\n        <!----- profile form area start ------>\n        <form [formGroup]=\"productForm\">\n        <div class=\"profile_form_area\">\n          <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"form-group\">\n          <label>Select Seller</label>\n          <select formControlName=\"seller_id\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.seller_id.errors }\">\n            <option value=\"\" selected>Select one</option>\n            <option *ngFor=\"let c of sellList\" [value]=\"c.id\">{{c.name}}</option>\n          </select>\n          <!-- <input type=\"text\" formControlName=\"parent_category_id\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.parent_category_id.errors }\" placeholder=\"Category name\"> -->\n          <div *ngIf=\"submitted && f.seller_id.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.seller_id.errors.required\">Please select a seller</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Product Name</label>\n                <input type=\"text\" formControlName=\"product_name\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_name.errors }\" placeholder=\"Product Name\">\n                <div *ngIf=\"submitted && f.product_name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_name.errors.required\">Product Name is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid Starting Price</label>\n                <input type=\"text\" formControlName=\"product_bid_starting_price\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_starting_price.errors }\" placeholder=\"Bid Starting Price\">\n                <div *ngIf=\"submitted && f.product_bid_starting_price.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_starting_price.errors.required\">Bid starting price is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Sort Description</label>\n                <textarea formControlName=\"product_short_description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_short_description.errors }\" placeholder=\"Product sort description\"></textarea>\n                <div *ngIf=\"submitted && f.product_short_description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_short_description.errors.required\">Sort description is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Long Description</label>\n                <textarea formControlName=\"product_long_description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_long_description.errors }\" placeholder=\"Product long description\"></textarea>\n                <div *ngIf=\"submitted && f.product_long_description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_long_description.errors.required\">Long description is required</div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Important Highlights</label>\n                <input type=\"text\" formControlName=\"product_important_highlights\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_important_highlights.errors }\" placeholder=\"Important Highlights\">\n                <div *ngIf=\"submitted && f.product_important_highlights.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_important_highlights.errors.required\">Important Highlights is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Product Location</label>\n                <input type=\"text\" formControlName=\"product_location\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_location.errors }\" placeholder=\"Location\">\n                <div *ngIf=\"submitted && f.product_location.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_location.errors.required\">Location is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid start date and time</label>\n                <input type=\"datetime-local\" formControlName=\"product_bid_start_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_start_date_and_time.errors }\" placeholder=\"Bid start date and time\">\n                <div *ngIf=\"submitted && f.product_bid_start_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_start_date_and_time.errors.required\">Bid start date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid end date and time</label>\n                <input type=\"datetime-local\" formControlName=\"product_bid_end_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_end_date_and_time.errors }\" placeholder=\"Bid end date and time\">\n                <div *ngIf=\"submitted && f.product_bid_end_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_end_date_and_time.errors.required\">Bid end date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Product Main Image</label>\n                <input type=\"file\" (change)=\"importFile($event)\" formControlName=\"product_picture\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_picture.errors }\" placeholder=\"Product Image\">\n                <div *ngIf=\"submitted && f.product_picture.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_picture.errors.required\">Picture is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Multiple Images</label>\n                <input type=\"file\" multiple=\"false\" (change)=\"importFiles($event)\" formControlName=\"product_pictures\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_pictures.errors }\" placeholder=\"Product Image\">\n                <div *ngIf=\"submitted && f.product_pictures.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_pictures.errors.required\">Multiple images is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"submit()\">SUBMIT</button>\n            </div>\n          </div>\n        </div>\n        </form>\n        <!----- profile form area stop ------>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=admin-admin-product-add-admin-product-add-module-es2015.js.map