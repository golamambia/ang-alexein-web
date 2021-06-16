(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-registration-seller-registration-module"],{

/***/ "Qdht":
/*!************************************************************************!*\
  !*** ./src/app/seller/seller-registration/seller-registration.page.ts ***!
  \************************************************************************/
/*! exports provided: SellerRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegistrationPage", function() { return SellerRegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-registration.page.html */ "R2Ju");
/* harmony import */ var _seller_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-registration.page.scss */ "Ytdi");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/must-match.validator */ "h2xV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");











let SellerRegistrationPage = class SellerRegistrationPage {
    constructor(storage, loadingController, router, http, formBuilder, alertController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.submitted = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
    }
    ngOnInit() {
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
            validator: [Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'password_confirmation'),
                Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('email', 'email_confirmation')]
        });
    }
    ionViewDidEnter() {
        this.storage.get('auctionSeller').then(response => {
            //console.log(response);
            if (response != null) {
                //console.log(response.response_data);
                if (response.response_data.role_text == "Seller") {
                    this.router.navigate(['/seller/dashboard']);
                }
            }
            else {
                this.router.navigate(['/seller-login']);
            }
        }, err => {
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
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.loadingShow();
            let formData = new FormData;
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
            this.http.post(this.url + 'user-register-seller', formData).subscribe((res) => {
                this.loadingHide();
                if (res && res.status) {
                    this.presentAlert('Success', '', 'Thank you, have successfully registered. Please login...');
                    this.router.navigate(['/seller-login']);
                }
                else {
                    this.presentAlert('Validation Error!', '', 'Please try again later');
                }
            }, err => {
                this.loadingHide();
                this.presentAlert('Error!', '', 'Server error, please try again later');
            });
        }
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
    get f() { return this.registerForm.controls; }
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
            if (this.loading) {
                yield this.loading.dismiss();
            }
        });
    }
};
SellerRegistrationPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
SellerRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-seller-registration',
        template: _raw_loader_seller_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerRegistrationPage);



/***/ }),

/***/ "R2Ju":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-registration/seller-registration.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <app-header></app-header>\n\n  <section class=\"main_area register_area\">\n    <form [formGroup]=\"registerForm\">\n      <div class=\"container\">\n        <div class=\"register_account_area\">\n          <div class=\"row row-0\">\n            <div class=\"col-lg-5\">\n              <div class=\"register_img_box\">\n                <img src=\"assets/images/register-image.png\" alt=\"register image\" title=\"\">\n                <div class=\"contain_box\">\n                  <h1><strong>Register An Account</strong></h1>\n                  <p>We take your privacy seriously. Please refer to our Privacy Policy.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-7\">\n              <div class=\"\">\n                <div class=\"customer_info_box\">\n                  <h2>Seller Info :</h2>\n                  <div class=\"row row-0\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group\">\n                        <label>full name <sup>*</sup>\n                          <span *ngIf=\"submitted && f.name.errors\">\n                            <span class=\"min\" *ngIf=\"f.name.errors.required\">Name is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Enter your full name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>email address <sup>*</sup>\n                          <span *ngIf=\"submitted && f.email.errors\">\n                            <span class=\"min\" *ngIf=\"f.email.errors.required\">Email is required</span>\n                            <span class=\"min\" *ngIf=\"f.email.errors.email\">Email must be a valid email address</span>\n                          </span>\n                        </label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>confirm email address <sup>*</sup>\n                          <span *ngIf=\"submitted && f.email_confirmation.errors\">\n                            <span class=\"min\" *ngIf=\"f.email_confirmation.errors.required\">Confirm email is\n                              required</span>\n                              <span class=\"min\" *ngIf=\"f.email_confirmation.errors.mustMatch\">Email and confirm\n                                email address must match</span>\n                          </span>\n                        </label>\n                        <input type=\"email\" formControlName=\"email_confirmation\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.email_confirmation.errors }\"\n                          placeholder=\"Confirm email address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"form-group form-check\">\n                        <label class=\"form-check-label\">\n                          <input class=\"form-check-input\" type=\"checkbox\"> Receive promotional Emails?\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>password <sup>*</sup>\n                          <span *ngIf=\"submitted && f.password.errors\">\n                            <span class=\"min\" *ngIf=\"f.password.errors.required\">Password is required</span>\n                            <span class=\"min\" *ngIf=\"f.password.errors.minlength\">Password must be at least 6\n                              characters</span>\n                          </span>\n                        </label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>confirm password <sup>*</sup>\n                          <span *ngIf=\"submitted && f.password_confirmation.errors\">\n                            <span class=\"min\" *ngIf=\"f.password_confirmation.errors.required\">Confirm password is\n                              required</span>\n                            <span class=\"min\" *ngIf=\"f.password_confirmation.errors.mustMatch\">Password and confirm\n                              password must match</span>\n                          </span>\n                        </label>\n                        <input type=\"password\" formControlName=\"password_confirmation\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.password_confirmation.errors }\"\n                          placeholder=\"Confirm password\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>billing address <sup>*</sup>\n                          <span *ngIf=\"submitted && f.billing_address.errors\">\n                            <span class=\"min\" *ngIf=\"f.billing_address.errors.required\">Billing address is\n                              required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"billing_address\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.billing_address.errors }\"\n                          placeholder=\"Enter billing address\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>Country <sup>*</sup>\n                          <span *ngIf=\"submitted && f.country.errors\">\n                            <span class=\"min\" *ngIf=\"f.country.errors.required\">Country is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"country\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" placeholder=\"Enter country name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>state <sup>*</sup>\n                          <span *ngIf=\"submitted && f.state.errors\">\n                            <span class=\"min\" *ngIf=\"f.state.errors.required\">State is required</span>\n                          </span>\n                        </label>\n                        <select formControlName=\"state\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\n                          <option disabled selected value=\"\">Select State</option>\n                          <option value=\"West Bengal\">West Bengal</option>\n                          <option value=\"other\">Other</option>\n                        </select>\n                        <div class=\"select_icon\"><img src=\"assets/images/sape3.png\" alt=\"sape\" title=\"\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>city <sup>*</sup>\n                          <span *ngIf=\"submitted && f.city.errors\">\n                            <span class=\"min\" *ngIf=\"f.city.errors.required\">City is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"city\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" placeholder=\"Enter city name\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"form-group\">\n                        <label>zip code <sup>*</sup>\n                          <span *ngIf=\"submitted && f.zip.errors\">\n                            <span class=\"min\" *ngIf=\"f.zip.errors.required\">Zip is required</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"zip\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.zip.errors }\" placeholder=\"Enter zip code\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>date of birth <sup>*</sup>\n                          <span *ngIf=\"submitted && f.dob.errors\">\n                            <span class=\"min\" *ngIf=\"f.dob.errors.required\">Date of birth is required</span>\n                          </span>\n                        </label>\n                        <input formControlName=\"dob\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                          ngbDatepicker #d=\"ngbDatepicker\">\n                        <div class=\"select_icon\" (click)=\"d.toggle()\">\n                          <img src=\"assets/images/sape4.png\" alt=\"sape\" title=\"\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                        <label>mobile number <sup>*</sup>\n                          <span *ngIf=\"submitted && f.phone_no.errors\">\n                            <span class=\"min\" *ngIf=\"f.phone_no.errors.required\">Mobile number is required</span>\n                            <span class=\"min\" *ngIf=\"f.phone_no.errors.pattern\">Please enter 10 digit mobile number</span>\n                          </span>\n                        </label>\n                        <input type=\"text\" formControlName=\"phone_no\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.phone_no.errors }\"\n                          placeholder=\"Enter your mobile no.\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!------- register account stop ------->\n\n        <!------ verification area start ------->\n        <!-- <div class=\"verification_area\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"verification_box\">\n                <h3>\n                  Cell Phone Verification :\n                  <strong>Cell phone verification required to receive SMS Notifications.</strong>\n                </h3>\n                <div class=\"form-group\">\n                  <label>cell phone <sup>*</sup></label>\n                  <div class=\"row row-7\">\n                    <div class=\"col-lg-6\">\n                      <input type=\"text\" class=\"form-control\" value=\"\">\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <button class=\"btn btn-primary\">verify now</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"verification_box\">\n                <h3>\n                  credit card :\n                  <strong>If you are using a Pre-Paid card, please be sure to keep the card until all transactions are\n                    finalized</strong>\n                </h3>\n                <div class=\"row row-7\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label>name on card <sup>*</sup></label>\n                      <input type=\"text\" class=\"form-control\" value=\"\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label>card number <sup>*</sup></label>\n                      <input type=\"text\" class=\"form-control\" value=\"\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label>expiration <sup>*</sup></label>\n                      <select class=\"form-control\">\n                        <option>January</option>\n                      </select>\n                      <div class=\"select_icon\"><img src=\"assets/images/sape3.png\" alt=\"sape\" title=\"\"></div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label>years <sup>*</sup></label>\n                      <select class=\"form-control\">\n                        <option>2023</option>\n                      </select>\n                      <div class=\"select_icon\"><img src=\"assets/images/sape3.png\" alt=\"sape\" title=\"\"></div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label>cvv <sup>*</sup></label>\n                      <input type=\"text\" class=\"form-control\" value=\"561\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n        <div class=\"submit_area\">\n          <!-- <img src=\"assets/images/capture.jpg\" class=\"capture_img\" alt=\"capture\" title=\"\"> -->\n          <p>By submitting this form you acknowledge that you have read, understand, and agree to the <a\n              [routerLink]=\"['/registration']\">Terms and Conditions</a>.</p>\n          <button class=\"btn btn-primary\" (click)=\"onSubmit()\">submit now</button>\n        </div>\n\n      </div>\n    </form>\n  </section>\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "Ytdi":
/*!**************************************************************************!*\
  !*** ./src/app/seller/seller-registration/seller-registration.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*-------- register main css start ---------*/\n.register_account_area .register_img_box {\n  height: 723px;\n  overflow: hidden;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.register_account_area .register_img_box img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.register_account_area .register_img_box .contain_box {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100px;\n  text-align: center;\n  padding: 60px 40px;\n}\n.register_account_area .register_img_box .contain_box h1 {\n  margin: 0 0 10px;\n  padding: 0 0 0;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.register_account_area .register_img_box .contain_box h1 strong {\n  color: #fff;\n  font-size: 28px;\n  font-weight: 500;\n  position: relative;\n}\n.register_account_area .register_img_box .contain_box h1 strong:after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n}\n.register_account_area .register_img_box .contain_box p {\n  padding: 0 0;\n  margin: 0 0;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n}\n.register_account_area .customer_info_box {\n  padding: 30px 30px;\n  background: #f3f2fc;\n  min-height: 723px;\n  /* overflow: hidden; */\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.register_account_area .customer_info_box h2 {\n  font-size: 24px;\n  font-weight: 500;\n  color: #262262;\n  line-height: normal;\n  margin: 0 0 10px;\n  padding: 0 0 0;\n  text-transform: capitalize;\n}\n.register_account_area .customer_info_box .form-group {\n  margin-bottom: 14px;\n  margin-right: 14px;\n  position: relative;\n}\n.register_account_area .customer_info_box .form-group label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n  text-transform: capitalize;\n  line-height: normal;\n}\n.register_account_area .customer_info_box .form-group label sup {\n  color: #ed1c24;\n  font-size: 13px;\n}\n.register_account_area .customer_info_box .form-control {\n  height: 48px !important;\n  border: 1px solid #d6d6d6;\n  outline: none;\n  background: #fff;\n  color: #000;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-size: 13px;\n}\n.register_account_area .customer_info_box .form-group label.form-check-label {\n  color: #000000;\n  font-size: 16px;\n  font-weight: 600;\n}\n.register_account_area .customer_info_box .form-group .min {\n  font-size: 10px;\n  font-weight: 500;\n  color: #ed1c24;\n  display: block;\n  text-transform: none;\n}\n.register_account_area .customer_info_box .form-group .select_icon {\n  content: \"\";\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\n.verification_area {\n  margin-bottom: 30px;\n}\n.verification_area .verification_box {\n  min-height: 343px;\n  box-sizing: border-box;\n  border-radius: 5px;\n  background: #f3f2fc;\n  border: 1px solid #e0e0e0;\n  padding: 30px 30px;\n}\n.verification_area .verification_box h3 {\n  line-height: normal;\n  margin: 0 0 12px;\n  font-size: 24px;\n  font-weight: 500;\n  color: #262262;\n}\n.register_account_area {\n  margin-bottom: 30px;\n}\n.verification_area .verification_box h3 strong {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ed1c24;\n  display: block;\n}\n.verification_area .verification_box .form-group {\n  position: relative;\n}\n.verification_area .verification_box .form-group label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n  text-transform: capitalize;\n  line-height: normal;\n}\n.verification_area .verification_box .form-group label sup {\n  color: #ed1c24;\n  font-size: 13px;\n}\n.verification_area .verification_box .form-control {\n  height: 48px !important;\n  border: 1px solid #d6d6d6;\n  outline: none;\n  background: #fff;\n  color: #000;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-size: 13px;\n}\n.verification_area .verification_box .btn {\n  width: 100%;\n  height: 48px;\n}\n.verification_area .verification_box .btn.btn-primary {\n  background: #262262;\n  border-color: #262262;\n}\n.verification_area .verification_box .btn.btn-primary:hover {\n  background: #ed1c24;\n  border-color: #ed1c24;\n}\n.verification_area .verification_box .form-group .select_icon {\n  content: \"\";\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\n.submit_area img.capture_img {\n  width: 302px;\n  height: 76px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n}\n.submit_area p {\n  font-size: 15px;\n  font-weight: 400;\n  color: #000000;\n  line-height: normal;\n}\n.submit_area a {\n  font-size: 15px;\n  font-weight: 600;\n  color: #262262;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.submit_area a:hover {\n  color: #ed1c24;\n}\n.submit_area a.btn-primary {\n  color: #fff;\n}\n/*-------- register main css stop ---------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxsZXItcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKO0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUdKO0FBREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQUZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0o7QUFIQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KO0FBSkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFPSjtBQUxBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFRSjtBQU5BO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBU0o7QUFQQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBVUo7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBV0o7QUFUQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFZSjtBQVZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWFKO0FBWEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBY0o7QUFaQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZUo7QUFaQTtFQUFtQixtQkFBQTtBQWdCbkI7QUFmQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWtCSjtBQWhCQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbUJKO0FBakJBO0VBQ0ksbUJBQUE7QUFvQko7QUFsQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQXFCSjtBQW5CQTtFQUNJLGtCQUFBO0FBc0JKO0FBcEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUF1Qko7QUFyQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXdCSjtBQXRCQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF5Qko7QUF2QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTBCSjtBQXhCQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUEyQko7QUF6QkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBNEJKO0FBMUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE2Qko7QUF6QkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQTRCSjtBQTFCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTZCSjtBQTNCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUE4Qko7QUE1QkE7RUFDSSxjQUFBO0FBK0JKO0FBN0JBO0VBQ0ksV0FBQTtBQWdDSjtBQTlCQSw0Q0FBQSIsImZpbGUiOiJzZWxsZXItcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0gcmVnaXN0ZXIgbWFpbiBjc3Mgc3RhcnQgLS0tLS0tLS0tKi9cbi5yZWdpc3Rlcl9hcmVhe31cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLnJlZ2lzdGVyX2ltZ19ib3h7XG4gICAgaGVpZ2h0OiA3MjNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAucmVnaXN0ZXJfaW1nX2JveCBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAucmVnaXN0ZXJfaW1nX2JveCAuY29udGFpbl9ib3h7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHg7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5yZWdpc3Rlcl9pbWdfYm94IC5jb250YWluX2JveCBoMXtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLnJlZ2lzdGVyX2ltZ19ib3ggLmNvbnRhaW5fYm94IGgxIHN0cm9uZ3tcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5yZWdpc3Rlcl9pbWdfYm94IC5jb250YWluX2JveCBoMSBzdHJvbmc6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5yZWdpc3Rlcl9pbWdfYm94IC5jb250YWluX2JveCBwe1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLmN1c3RvbWVyX2luZm9fYm94e1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmMmZjO1xuICAgIG1pbi1oZWlnaHQ6IDcyM3B4O1xuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAuY3VzdG9tZXJfaW5mb19ib3ggaDJ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMyNjIyNjI7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAuY3VzdG9tZXJfaW5mb19ib3ggLmZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAuY3VzdG9tZXJfaW5mb19ib3ggLmZvcm0tZ3JvdXAgbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLmN1c3RvbWVyX2luZm9fYm94IC5mb3JtLWdyb3VwIGxhYmVsIHN1cHtcbiAgICBjb2xvcjogI2VkMWMyNDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5jdXN0b21lcl9pbmZvX2JveCAuZm9ybS1jb250cm9se1xuICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWEgLmN1c3RvbWVyX2luZm9fYm94IC5mb3JtLWdyb3VwIGxhYmVsLmZvcm0tY2hlY2stbGFiZWx7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmVnaXN0ZXJfYWNjb3VudF9hcmVhIC5jdXN0b21lcl9pbmZvX2JveCAuZm9ybS1ncm91cCAubWlue1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjZWQxYzI0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLnJlZ2lzdGVyX2FjY291bnRfYXJlYSAuY3VzdG9tZXJfaW5mb19ib3ggLmZvcm0tZ3JvdXAgLnNlbGVjdF9pY29ue1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEycHg7XG4gICAgcmlnaHQ6IDEycHg7XG59XG5cbi52ZXJpZmljYXRpb25fYXJlYXttYXJnaW4tYm90dG9tOiAzMHB4O31cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveHtcbiAgICBtaW4taGVpZ2h0OiAzNDNweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmMmZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94IGgze1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzI2MjI2Mjtcbn1cbi5yZWdpc3Rlcl9hY2NvdW50X2FyZWF7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveCBoMyBzdHJvbmd7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlZDFjMjQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udmVyaWZpY2F0aW9uX2FyZWEgLnZlcmlmaWNhdGlvbl9ib3ggLmZvcm0tZ3JvdXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94IC5mb3JtLWdyb3VwIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4udmVyaWZpY2F0aW9uX2FyZWEgLnZlcmlmaWNhdGlvbl9ib3ggLmZvcm0tZ3JvdXAgbGFiZWwgc3Vwe1xuICAgIGNvbG9yOiAjZWQxYzI0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveCAuZm9ybS1jb250cm9se1xuICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveCAuYnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDhweDtcbn1cbi52ZXJpZmljYXRpb25fYXJlYSAudmVyaWZpY2F0aW9uX2JveCAuYnRuLmJ0bi1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQ6ICMyNjIyNjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjYyMjYyO1xufVxuLnZlcmlmaWNhdGlvbl9hcmVhIC52ZXJpZmljYXRpb25fYm94IC5idG4uYnRuLXByaW1hcnk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogI2VkMWMyNDtcbiAgICBib3JkZXItY29sb3I6ICNlZDFjMjQ7XG59XG4udmVyaWZpY2F0aW9uX2FyZWEgLnZlcmlmaWNhdGlvbl9ib3ggLmZvcm0tZ3JvdXAgLnNlbGVjdF9pY29uIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xufVxuXG4uc3VibWl0X2FyZWF7fVxuLnN1Ym1pdF9hcmVhIGltZy5jYXB0dXJlX2ltZ3tcbiAgICB3aWR0aDogMzAycHg7XG4gICAgaGVpZ2h0OiA3NnB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc3VibWl0X2FyZWEgcHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnN1Ym1pdF9hcmVhIGF7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyNjIyNjI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xufVxuLnN1Ym1pdF9hcmVhIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNlZDFjMjQ7XG59XG4uc3VibWl0X2FyZWEgYS5idG4tcHJpbWFyeXtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi8qLS0tLS0tLS0gcmVnaXN0ZXIgbWFpbiBjc3Mgc3RvcCAtLS0tLS0tLS0qLyJdfQ== */");

/***/ }),

/***/ "tjxZ":
/*!**************************************************************************!*\
  !*** ./src/app/seller/seller-registration/seller-registration.module.ts ***!
  \**************************************************************************/
/*! exports provided: SellerRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegistrationPageModule", function() { return SellerRegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-registration-routing.module */ "u+JC");
/* harmony import */ var _seller_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-registration.page */ "Qdht");
/* harmony import */ var src_app_include_include_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/include/include.module */ "+TEy");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









let SellerRegistrationPageModule = class SellerRegistrationPageModule {
};
SellerRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerRegistrationPageRoutingModule"],
            src_app_include_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"]
        ],
        declarations: [_seller_registration_page__WEBPACK_IMPORTED_MODULE_6__["SellerRegistrationPage"]]
    })
], SellerRegistrationPageModule);



/***/ }),

/***/ "u+JC":
/*!**********************************************************************************!*\
  !*** ./src/app/seller/seller-registration/seller-registration-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SellerRegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegistrationPageRoutingModule", function() { return SellerRegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-registration.page */ "Qdht");




const routes = [
    {
        path: '',
        component: _seller_registration_page__WEBPACK_IMPORTED_MODULE_3__["SellerRegistrationPage"]
    }
];
let SellerRegistrationPageRoutingModule = class SellerRegistrationPageRoutingModule {
};
SellerRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerRegistrationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=seller-seller-registration-seller-registration-module-es2015.js.map