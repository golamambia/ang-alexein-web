(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-product-update-seller-product-update-module"],{

/***/ "BE1H":
/*!******************************************************************************!*\
  !*** ./src/app/seller/seller-product-update/seller-product-update.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxsZXItcHJvZHVjdC11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sV0FBQTtFQUFZLFdBQUE7QUFHbEI7O0FBREE7RUFBUyxhQUFBO0FBS1Q7O0FBSkE7RUFBYSxnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsdUNBQUE7RUFBd0MsZ0JBQUE7RUFBaUIsa0JBQUE7QUFhdkg7O0FBWkE7RUFBZ0IsU0FBQTtFQUFVLFVBQUE7RUFBVyxlQUFBO0VBQWdCLGlCQUFBO0FBbUJyRDs7QUFsQkE7RUFBc0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixrQkFBQTtFQUFtQixpQkFBQTtFQUFrQixXQUFBO0VBQVksZUFBQTtFQUFnQixrQkFBQTtBQThCdko7O0FBNUJBLDBDQUFBOztBQUNBO0VBQ0Msa0JBQUE7RUFDRyx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUErQko7O0FBN0JBO0VBQ0MsZUFBQTtFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZ0NKOztBQTlCQTtFQUNDLGdCQUFBO0VBQ0EscUJBQUE7QUFpQ0Q7O0FBL0JBO0VBQ0MsYUFBQTtBQWtDRDs7QUFoQ0E7RUFDSSxpQkFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW9DSjs7QUFsQ0E7RUFDSSxrQkFBQTtBQXFDSjs7QUFuQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQXNDSjs7QUFwQ0E7RUFDQyxXQUFBO0FBdUNEOztBQXJDQSx5Q0FBQSIsImZpbGUiOiJzZWxsZXItcHJvZHVjdC11cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW57ZmxvYXQ6bGVmdDsgd2lkdGg6MTAwJTt9XG5cbiNjb250ZW50e3BhZGRpbmc6MzBweDt9XG4ucGFnZS1oZWFkZXJ7bWFyZ2luOjAgMCAzMHB4OyBwYWRkaW5nOjEwcHggMThweDsgYm9yZGVyOm5vbmU7IGJveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyBiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6NXB4O31cbi5wYWdlLWhlYWRlciBoMXttYXJnaW46MDsgcGFkZGluZzowOyBmb250LXNpemU6MThweDsgbGluZS1oZWlnaHQ6MzBweDt9XG4ucGFnZS1oZWFkZXIgaDEgLmljb257d2lkdGg6MzBweDsgaGVpZ2h0OjMwcHg7IGJhY2tncm91bmQ6I2VkMWMyNDsgYm9yZGVyLXJhZGl1czozcHg7IHRleHQtYWxpZ246Y2VudGVyOyBsaW5lLWhlaWdodDozMHB4OyBjb2xvcjojZmZmOyBmb250LXNpemU6MTRweDsgbWFyZ2luLXJpZ2h0OjEwcHg7fVxuXG4vKi0tLS0tLS0gcHJvZmlsZSBmb3JtIGNzcyBzdGFydCAtLS0tLS0tLSovXG4ucHJvZmlsZV9mb3JtX2FyZWF7XG5cdHBhZGRpbmc6IDE4cHggMThweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIC5mb3JtLWdyb3VwIGxhYmVse1xuXHRmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1jb2xvcjogIzI2MjI2Mjtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSB0ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XG5cdGhlaWdodDogMTIwcHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmJ0biB7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG59XG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3Qge1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2luYXRpb24+LmFjdGl2ZT5hLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6Zm9jdXMsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpob3ZlciwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46Zm9jdXMsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpob3ZlciB7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjI2MjtcbiAgICBib3JkZXItY29sb3I6ICMyNjIyNjI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5wYWdpbmF0aW9uPmxpPmEsIC5wYWdpbmF0aW9uPmxpPnNwYW57XG5cdGNvbG9yOiAjMDAwO1xufVxuLyotLS0tLS0tIHByb2ZpbGUgZm9ybSBjc3Mgc3RvcCAtLS0tLS0tLSovIl19 */");

/***/ }),

/***/ "CHEl":
/*!****************************************************************************!*\
  !*** ./src/app/seller/seller-product-update/seller-product-update.page.ts ***!
  \****************************************************************************/
/*! exports provided: SellerProductUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductUpdatePage", function() { return SellerProductUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_product_update_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-product-update.page.html */ "d77i");
/* harmony import */ var _seller_product_update_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-product-update.page.scss */ "BE1H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












let SellerProductUpdatePage = class SellerProductUpdatePage {
    constructor(alertController, formBuilder, http, loadingController, storage, router, route) {
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingController = loadingController;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.image_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["image_path"];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_URL;
        this.submitted = false;
        this.imageLoaded = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productForm = this.formBuilder.group({
                product_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_picture: [''],
                product_pictures: [''],
                product_short_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_long_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_important_highlights: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_bid_starting_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_bid_start_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                product_bid_end_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            });
            yield this.storage.create().then(res => {
                this.getUserDetails();
            });
            this.sub = this.route.params.subscribe(params => {
                if (params) {
                    //let queryParams = params;
                    this.id = params['id'];
                    //console.log(this.catid);
                    if (params['id']) {
                        this.getProductById(params['id']);
                        this.getMultiImage();
                    }
                }
            });
        });
    }
    getMultiImage() {
        if (this.id) {
            let formData2 = new FormData;
            formData2.append('product_id', this.id);
            this.http.post(this.url + 'product-multiple-image-list', formData2).subscribe((res2) => {
                // console.log(res2);
                this.more_picture = res2.response_data_ine;
            }, err => {
                this.loadingHide();
            });
        }
    }
    getUserDetails() {
        this.storage.get('auctionSeller').then(response => {
            if (response && response.response_data && response.response_data.id) {
                this.userId = response.response_data.id;
            }
            else {
                this.userId = null;
            }
        }, err => {
            this.userId = null;
        });
    }
    getProductById(id) {
        this.loadingShow();
        let formData = new FormData;
        formData.append('product_id', id);
        this.http.post(this.url + 'product-single', formData).subscribe((res) => {
            if (res.status) {
                this.loadingHide();
                //console.log(res);
                this.product_picture = res.response_data.product_picture;
                this.productForm.patchValue({ product_bid_start_date_and_time: res.response_data.product_bid_start_date_and_time.replace(/ /g, "T"), });
                this.productForm.patchValue({ product_bid_end_date_and_time: res.response_data.product_bid_end_date_and_time.replace(/ /g, "T"), });
                this.productForm.patchValue(res.response_data);
                //this.loadingHide();
            }
            else {
                this.loadingHide();
                this.presentAlert('Error!', '', 'Server error, please try again later');
            }
        }, err => {
            this.loadingHide();
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
            formData.append('seller_id', this.userId);
            formData.append('product_name', this.productForm.value.product_name);
            formData.append('product_picture', this.image);
            formData.append('product_short_description', this.productForm.value.product_short_description);
            formData.append('product_long_description', this.productForm.value.product_long_description);
            formData.append('product_important_highlights', this.productForm.value.product_important_highlights);
            formData.append('product_location', this.productForm.value.product_location);
            formData.append('product_bid_starting_price', this.productForm.value.product_bid_starting_price);
            formData.append('product_bid_start_date_and_time', (this.productForm.value.product_bid_start_date_and_time)
                .split("T")[0] + ' ' + (this.productForm.value.product_bid_start_date_and_time).split("T")[1]);
            formData.append('product_bid_end_date_and_time', (this.productForm.value.product_bid_end_date_and_time).split("T")[0] + ' ' + (this.productForm.value.product_bid_end_date_and_time).split("T")[1]);
            formData.append('is_approved', '0');
            formData.append('status', '0');
            formData.append('product_id', this.id);
            this.http.post(this.url + 'product-update', formData).subscribe((res) => {
                this.loadingHide();
                if (res.status) {
                    if (this.photos) {
                        let formData2 = new FormData;
                        for (let i = 0; i < this.photos.length; i++) {
                            formData2.append('photos[]', this.photos[i]);
                        }
                        formData2.append('product_id', res.response_data.id);
                        this.http.post(this.url + 'product-multiple-image', formData2).subscribe((response) => {
                            if (response.status) {
                                //this.productForm.reset();
                                this.getMultiImage();
                                this.submitted = false;
                                //this.presentAlert('Success!', '', response.message);
                            }
                            else {
                                this.presentAlert('Error!', '', 'Server error, please try again later');
                            }
                        }, err => {
                            this.presentAlert('Error!', '', 'Server error, please try again later');
                        });
                    }
                    this.ngOnInit();
                    this.presentAlert('Success!', '', res.message);
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
    deleteMultiImage(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.loadingShow();
            let formData = new FormData;
            formData.append('product_id', p.id);
            const successalrt = yield this.alertController.create({
                message: 'Data successfully delete',
                buttons: ['OK']
            });
            const fail = yield this.alertController.create({
                message: 'Something went wrong',
                buttons: ['OK']
            });
            const alert = yield this.alertController.create({
                message: 'Are you sure to delete',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                            //console.log('Confirm Okay');
                            if (p.id) {
                                this.loadingShow();
                                this.http.post(this.url + 'product-multiple-image-remove', formData)
                                    .subscribe((res) => {
                                    // this.res = res.json();
                                    //console.log(res);
                                    if (res.status == false) {
                                        fail.present();
                                        this.loadingHide();
                                    }
                                    else if (res.status == true) {
                                        successalrt.present();
                                        //this.constructor();
                                        //this.navCtrl.navigateForward('address-list');
                                        this.loadingHide();
                                        this.getMultiImage();
                                    }
                                    else {
                                        //alert("Server error");
                                        this.loadingHide();
                                    }
                                }, (err) => {
                                    console.log(err);
                                    this.loadingHide();
                                });
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
SellerProductUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
SellerProductUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-product-update',
        template: _raw_loader_seller_product_update_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_product_update_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerProductUpdatePage);



/***/ }),

/***/ "S8EL":
/*!******************************************************************************!*\
  !*** ./src/app/seller/seller-product-update/seller-product-update.module.ts ***!
  \******************************************************************************/
/*! exports provided: SellerProductUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductUpdatePageModule", function() { return SellerProductUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_product_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-product-update-routing.module */ "ZP40");
/* harmony import */ var _seller_product_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-product-update.page */ "CHEl");







let SellerProductUpdatePageModule = class SellerProductUpdatePageModule {
};
SellerProductUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_product_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerProductUpdatePageRoutingModule"]
        ],
        declarations: [_seller_product_update_page__WEBPACK_IMPORTED_MODULE_6__["SellerProductUpdatePage"]]
    })
], SellerProductUpdatePageModule);



/***/ }),

/***/ "ZP40":
/*!**************************************************************************************!*\
  !*** ./src/app/seller/seller-product-update/seller-product-update-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SellerProductUpdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductUpdatePageRoutingModule", function() { return SellerProductUpdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_product_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-product-update.page */ "CHEl");




const routes = [
    {
        path: '',
        component: _seller_product_update_page__WEBPACK_IMPORTED_MODULE_3__["SellerProductUpdatePage"]
    }
];
let SellerProductUpdatePageRoutingModule = class SellerProductUpdatePageRoutingModule {
};
SellerProductUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerProductUpdatePageRoutingModule);



/***/ }),

/***/ "d77i":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-product-update/seller-product-update.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Update product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> Product Update</h1>\n        </div>\n\n\n        <!----- profile form area start ------>\n        <form [formGroup]=\"productForm\">\n        <div class=\"profile_form_area\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Product Name</label>\n                <input type=\"text\" formControlName=\"product_name\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_name.errors }\" placeholder=\"Product Name\">\n                <div *ngIf=\"submitted && f.product_name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_name.errors.required\">Product Name is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid Starting Price</label>\n                <input type=\"text\" formControlName=\"product_bid_starting_price\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_starting_price.errors }\" placeholder=\"Bid Starting Price\">\n                <div *ngIf=\"submitted && f.product_bid_starting_price.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_starting_price.errors.required\">Bid starting price is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Sort Description</label>\n                <textarea formControlName=\"product_short_description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_short_description.errors }\" placeholder=\"Product sort description\"></textarea>\n                <div *ngIf=\"submitted && f.product_short_description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_short_description.errors.required\">Sort description is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Long Description</label>\n                <textarea formControlName=\"product_long_description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_long_description.errors }\" placeholder=\"Product long description\"></textarea>\n                <div *ngIf=\"submitted && f.product_long_description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_long_description.errors.required\">Long description is required</div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Important Highlights</label>\n                <input type=\"text\" formControlName=\"product_important_highlights\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_important_highlights.errors }\" placeholder=\"Important Highlights\">\n                <div *ngIf=\"submitted && f.product_important_highlights.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_important_highlights.errors.required\">Important Highlights is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Product Location</label>\n                <input type=\"text\" formControlName=\"product_location\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_location.errors }\" placeholder=\"Location\">\n                <div *ngIf=\"submitted && f.product_location.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_location.errors.required\">Location is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid start date and time</label>\n                <input type=\"datetime-local\" formControlName=\"product_bid_start_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_start_date_and_time.errors }\" placeholder=\"Bid start date and time\">\n                <div *ngIf=\"submitted && f.product_bid_start_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_start_date_and_time.errors.required\">Bid start date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid end date and time</label>\n                <input type=\"datetime-local\" formControlName=\"product_bid_end_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_end_date_and_time.errors }\" placeholder=\"Bid end date and time\">\n                <div *ngIf=\"submitted && f.product_bid_end_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_end_date_and_time.errors.required\">Bid end date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Product Main Image</label>\n                <input type=\"file\" (change)=\"importFile($event)\" formControlName=\"product_picture\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_picture.errors }\" placeholder=\"Product Image\">\n                <div *ngIf=\"submitted && f.product_picture.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_picture.errors.required\">Picture is required</div>\n                </div>\n                <br>\n                <div >\n          <img src=\"{{image_path + product_picture}}\" style=\"width: 100px;height: 100px;\">\n        </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Multiple Images</label>\n                <input type=\"file\" multiple=\"false\" (change)=\"importFiles($event)\" formControlName=\"product_pictures\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_pictures.errors }\" placeholder=\"Product Image\">\n                <div *ngIf=\"submitted && f.product_pictures.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_pictures.errors.required\">Multiple images is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div *ngFor=\"let mp of more_picture\"  style=\"float: left;\n    margin-right: 10px;max-width: 40%;max-height: 40%;margin-bottom: 20px;position: relative;\">\n          <img src=\"{{image_path + mp.product_image}}\" style=\"width: 100px;height: 100px;\">\n          <div (click)=\"deleteMultiImage(mp)\" style=\"position: absolute;\n    top: 0;\n    right: 0;\n    margin-right: 10px;\n    color: red;\n    font-size: 25px;\n    font-weight: bold;\n    cursor: pointer;\"><i class=\"icon fa fa-trash\" aria-hidden=\"true\"></i></div>\n        </div>\n            </div>\n            <br>\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"submit()\">SUBMIT</button>\n            </div>\n          </div>\n        </div>\n        </form>\n        <!----- profile form area stop ------>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=seller-seller-product-update-seller-product-update-module-es2015.js.map