(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-group-add-seller-group-add-module"],{

/***/ "2t8D":
/*!********************************************************************!*\
  !*** ./src/app/seller/seller-group-add/seller-group-add.module.ts ***!
  \********************************************************************/
/*! exports provided: SellerGroupAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupAddPageModule", function() { return SellerGroupAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_group_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-group-add-routing.module */ "D1Ad");
/* harmony import */ var _seller_group_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-group-add.page */ "7Cyr");







let SellerGroupAddPageModule = class SellerGroupAddPageModule {
};
SellerGroupAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_group_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerGroupAddPageRoutingModule"]
        ],
        exports: [
            _seller_group_add_page__WEBPACK_IMPORTED_MODULE_6__["SellerGroupAddPage"]
        ],
        declarations: [_seller_group_add_page__WEBPACK_IMPORTED_MODULE_6__["SellerGroupAddPage"]]
    })
], SellerGroupAddPageModule);



/***/ }),

/***/ "7Cyr":
/*!******************************************************************!*\
  !*** ./src/app/seller/seller-group-add/seller-group-add.page.ts ***!
  \******************************************************************/
/*! exports provided: SellerGroupAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupAddPage", function() { return SellerGroupAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_group_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-group-add.page.html */ "h+J1");
/* harmony import */ var _seller_group_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-group-add.page.scss */ "Kb9F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");











let SellerGroupAddPage = class SellerGroupAddPage {
    constructor(http, alertController, formBuilder, loadingController, storage, router, route) {
        this.http = http;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.image_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["image_path"];
        this.submitted = false;
        this.titleText1 = "Group Add";
        this.titleText = "Add new group";
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
        this.imageLoaded = false;
    }
    ngOnInit() {
        this.groupForm = this.formBuilder.group({
            auction_cg_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            category_group_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            category_id: [''],
            start_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            end_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            zip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            category_group_image1: [''],
            highlights: [''],
            description: [''],
            notes: [''],
            terms: ['']
        });
        this.storage.create().then(res => {
            this.getUserDetails();
        });
        this.route.paramMap.subscribe(params => {
            if (params.get('id')) {
                this.id = params.get('id');
                this.getGroupById(this.id);
            }
        });
        this.catList();
    }
    catList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'category-list', formData).subscribe((res) => {
            if (res && res.status) {
                //console.log(res.response_data);
                this.categoryList = res.response_data;
            }
            else {
                this.categoryList = null;
            }
        });
    }
    getGroupById(id) {
        this.loadingShow();
        let formData = new FormData;
        formData.append('group_id', id);
        this.http.post(this.url + 'group-details', formData).subscribe((res) => {
            console.log(res);
            this.loadingHide();
            this.titleText = 'Update Group';
            this.titleText1 = 'Update group';
            this.product_picture = res.response_data.category_group_image;
            this.groupForm.patchValue(res.response_data);
            this.groupForm.patchValue({ 'end_date_and_time': res.response_data.end_date + 'T' + res.response_data.end_time });
            this.groupForm.patchValue({ 'start_date_and_time': res.response_data.start_date + 'T' + res.response_data.start_time });
        }, err => {
            this.loadingHide();
        });
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
    get f() { return this.groupForm.controls; }
    submit() {
        this.submitted = true;
        if (this.groupForm.invalid) {
            return;
        }
        else {
            this.loadingShow();
            let formData = new FormData;
            formData.append('creator_id', this.userId);
            formData.append('auction_cg_number', this.groupForm.value.auction_cg_number);
            formData.append('category_group_name', this.groupForm.value.category_group_name);
            formData.append('category_id', this.groupForm.value.category_id);
            formData.append('start_date', (this.groupForm.value.start_date_and_time).split("T")[0]);
            formData.append('start_time', (this.groupForm.value.start_date_and_time).split("T")[1]);
            formData.append('end_date', (this.groupForm.value.end_date_and_time).split("T")[0]);
            formData.append('end_time', (this.groupForm.value.end_date_and_time).split("T")[1]);
            formData.append('location', this.groupForm.value.location);
            formData.append('zip', this.groupForm.value.zip);
            formData.append('highlights', this.groupForm.value.highlights);
            formData.append('description', this.groupForm.value.description);
            formData.append('category_group_image', this.image);
            formData.append('notes', this.groupForm.value.notes);
            formData.append('terms', this.groupForm.value.terms);
            if (this.id) {
                formData.append('group_id', this.id);
                this.http.post(this.url + 'group-update', formData).subscribe((res) => {
                    //console.log(res);
                    this.loadingHide();
                    if (res.status) {
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
            else {
                this.http.post(this.url + 'group-add', formData).subscribe((res) => {
                    console.log(res);
                    this.loadingHide();
                    if (res.status) {
                        this.groupForm.reset();
                        this.submitted = false;
                        this.presentAlert('Success!', '', res.message ? res.message : 'Seccessfully added.');
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
                cssClass: 'my-alert-class',
                header,
                subHeader,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onlyNumberKey(event) {
        return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
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
};
SellerGroupAddPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
SellerGroupAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-group-add',
        template: _raw_loader_seller_group_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_group_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerGroupAddPage);



/***/ }),

/***/ "D1Ad":
/*!****************************************************************************!*\
  !*** ./src/app/seller/seller-group-add/seller-group-add-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SellerGroupAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerGroupAddPageRoutingModule", function() { return SellerGroupAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_group_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-group-add.page */ "7Cyr");




const routes = [
    {
        path: '',
        component: _seller_group_add_page__WEBPACK_IMPORTED_MODULE_3__["SellerGroupAddPage"]
    }
];
let SellerGroupAddPageRoutingModule = class SellerGroupAddPageRoutingModule {
};
SellerGroupAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerGroupAddPageRoutingModule);



/***/ }),

/***/ "Kb9F":
/*!********************************************************************!*\
  !*** ./src/app/seller/seller-group-add/seller-group-add.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxsZXItZ3JvdXAtYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLFdBQUE7RUFBWSxXQUFBO0FBR2xCOztBQURBO0VBQVMsYUFBQTtBQUtUOztBQUpBO0VBQWEsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLHVDQUFBO0VBQXdDLGdCQUFBO0VBQWlCLGtCQUFBO0FBYXZIOztBQVpBO0VBQWdCLFNBQUE7RUFBVSxVQUFBO0VBQVcsZUFBQTtFQUFnQixpQkFBQTtBQW1CckQ7O0FBbEJBO0VBQXNCLFdBQUE7RUFBWSxZQUFBO0VBQWEsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsV0FBQTtFQUFZLGVBQUE7RUFBZ0Isa0JBQUE7QUE4QnZKOztBQTVCQSwwQ0FBQTs7QUFDQTtFQUNDLGtCQUFBO0VBQ0csdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBK0JKOztBQTdCQTtFQUNDLGVBQUE7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWdDSjs7QUE5QkE7RUFDQyxnQkFBQTtFQUNBLHFCQUFBO0FBaUNEOztBQS9CQTtFQUNDLGFBQUE7QUFrQ0Q7O0FBaENBO0VBQ0ksaUJBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksa0JBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFzQ0o7O0FBcENBO0VBQ0MsV0FBQTtBQXVDRDs7QUFyQ0EseUNBQUEiLCJmaWxlIjoic2VsbGVyLWdyb3VwLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlO31cblxuI2NvbnRlbnR7cGFkZGluZzozMHB4O31cbi5wYWdlLWhlYWRlcnttYXJnaW46MCAwIDMwcHg7IHBhZGRpbmc6MTBweCAxOHB4OyBib3JkZXI6bm9uZTsgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo1cHg7fVxuLnBhZ2UtaGVhZGVyIGgxe21hcmdpbjowOyBwYWRkaW5nOjA7IGZvbnQtc2l6ZToxOHB4OyBsaW5lLWhlaWdodDozMHB4O31cbi5wYWdlLWhlYWRlciBoMSAuaWNvbnt3aWR0aDozMHB4OyBoZWlnaHQ6MzBweDsgYmFja2dyb3VuZDojZWQxYzI0OyBib3JkZXItcmFkaXVzOjNweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGxpbmUtaGVpZ2h0OjMwcHg7IGNvbG9yOiNmZmY7IGZvbnQtc2l6ZToxNHB4OyBtYXJnaW4tcmlnaHQ6MTBweDt9XG5cbi8qLS0tLS0tLSBwcm9maWxlIGZvcm0gY3NzIHN0YXJ0IC0tLS0tLS0tKi9cbi5wcm9maWxlX2Zvcm1fYXJlYXtcblx0cGFkZGluZzogMThweCAxOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDEwJSk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmZvcm0tZ3JvdXAgbGFiZWx7XG5cdGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgLmZvcm0tY29udHJvbDpmb2N1c3tcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0Ym9yZGVyLWNvbG9yOiAjMjYyMjYyO1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIHRleHRhcmVhLmZvcm0tY29udHJvbHtcblx0aGVpZ2h0OiAxMjBweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCB7XG4gICAgd2lkdGg6IDc2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyMjYyO1xuICAgIGJvcmRlci1jb2xvcjogIzI2MjI2MjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnBhZ2luYXRpb24+bGk+YSwgLnBhZ2luYXRpb24+bGk+c3Bhbntcblx0Y29sb3I6ICMwMDA7XG59XG4vKi0tLS0tLS0gcHJvZmlsZSBmb3JtIGNzcyBzdG9wIC0tLS0tLS0tKi8iXX0= */");

/***/ }),

/***/ "h+J1":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-group-add/seller-group-add.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{titleText}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> {{titleText1}}</h1>\n        </div>\n\n\n        <!----- profile form area start ------>\n        <div class=\"profile_form_area\">\n          <form [formGroup]=\"groupForm\">\n          <div class=\"row\">\n            \n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>CG Number</label>\n                <input type=\"text\" formControlName=\"auction_cg_number\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.auction_cg_number.errors }\" placeholder=\"CG Number\">\n                <div *ngIf=\"submitted && f.auction_cg_number.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.auction_cg_number.errors.required\">CG Number is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Group Name</label>\n                <input type=\"text\" formControlName=\"category_group_name\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.category_group_name.errors }\" placeholder=\"Group name\">\n                <div *ngIf=\"submitted && f.category_group_name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.category_group_name.errors.required\">Group name is required</div>\n                </div>\n              </div>\n            </div>\n             <div class=\"col-md-12\">\n            <div class=\"form-group\">\n          <label>Category</label>\n          <select formControlName=\"category_id\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.category_id.errors }\">\n            <option value=\"\" selected>Select one</option>\n            <option *ngFor=\"let c of categoryList\" [value]=\"c.category_id\">{{c.category_name}}</option>\n          </select>\n         \n          <div *ngIf=\"submitted && f.category_id.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.category_id.errors.required\">Please select a category</div>\n          </div>\n        </div>\n      </div>\n<div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Start date and Time</label>\n                <input type=\"datetime-local\" formControlName=\"start_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.start_date_and_time.errors }\" placeholder=\"End date and time\">\n                <div *ngIf=\"submitted && f.start_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.start_date_and_time.errors.required\">End date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>End date and Time</label>\n                <input type=\"datetime-local\" formControlName=\"end_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.end_date_and_time.errors }\" placeholder=\"End date and time\">\n                <div *ngIf=\"submitted && f.end_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.end_date_and_time.errors.required\">End date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Location</label>\n                <input type=\"text\" formControlName=\"location\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\" placeholder=\"Location\">\n                <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.location.errors.required\">Location is required</div>\n                </div>\n              </div>\n            </div>\n             <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Zipcode</label>\n                <input type=\"text\" formControlName=\"zip\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.zip.errors }\" placeholder=\"Zipcode\" (keypress)=\"onlyNumberKey($event)\" maxlength=\"6\">\n                <div *ngIf=\"submitted && f.zip.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.zip.errors.required\">Zipcode is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                \n                <textarea formControlName=\"description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" placeholder=\"Description\"></textarea>\n                <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.description.errors.required\">Description is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Highlights</label>\n              \n                 <textarea formControlName=\"highlights\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.highlights.errors }\" placeholder=\"Highlights\"></textarea>\n                \n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Notes</label>\n                 <textarea formControlName=\"notes\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.notes.errors }\" placeholder=\"Notes\"></textarea>\n                \n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Terms</label>\n                 <textarea formControlName=\"terms\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.terms.errors }\" placeholder=\"Terms\"></textarea>\n              \n              </div>\n            </div>\n             <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Main Image</label>\n                <input type=\"file\" (change)=\"importFile($event)\" formControlName=\"category_group_image1\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.category_group_image1.errors }\" placeholder=\"Product Image\">\n                <div *ngIf=\"submitted && f.category_group_image1.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.category_group_image1.errors.required\">Picture is required</div>\n                </div>\n                <br>\n                 <div *ngIf=\"product_picture\">\n          <img src=\"{{image_path + product_picture}}\" style=\"width: 100px;height: 100px;\">\n        </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"submit()\">SUBMIT</button>\n            </div>\n          </div>\n        </form>\n        </div>\n        <!----- profile form area stop ------>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=seller-seller-group-add-seller-group-add-module-es2015.js.map