(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-product-update-admin-product-update-module"], {
    /***/
    "EQkK":
    /*!***************************************************************************!*\
      !*** ./src/app/admin/admin-product-update/admin-product-update.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminProductUpdatePageModule */

    /***/
    function EQkK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductUpdatePageModule", function () {
        return AdminProductUpdatePageModule;
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


      var _admin_product_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-product-update-routing.module */
      "QiYt");
      /* harmony import */


      var _admin_product_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-product-update.page */
      "FV+B");

      var AdminProductUpdatePageModule = function AdminProductUpdatePageModule() {
        _classCallCheck(this, AdminProductUpdatePageModule);
      };

      AdminProductUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_product_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminProductUpdatePageRoutingModule"]],
        declarations: [_admin_product_update_page__WEBPACK_IMPORTED_MODULE_6__["AdminProductUpdatePage"]]
      })], AdminProductUpdatePageModule);
      /***/
    },

    /***/
    "FV+B":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/admin-product-update/admin-product-update.page.ts ***!
      \*************************************************************************/

    /*! exports provided: AdminProductUpdatePage */

    /***/
    function FVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductUpdatePage", function () {
        return AdminProductUpdatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_product_update_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-product-update.page.html */
      "e2CL");
      /* harmony import */


      var _admin_product_update_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-product-update.page.scss */
      "WCIQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AdminProductUpdatePage = /*#__PURE__*/function () {
        function AdminProductUpdatePage(alertController, formBuilder, http, loadingController, storage, router, route) {
          _classCallCheck(this, AdminProductUpdatePage);

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

        _createClass(AdminProductUpdatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (window.CKEDITOR) {
                        window.CKEDITOR.replace('editor');
                      }

                      this.productForm = this.formBuilder.group({
                        seller_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_picture: [''],
                        product_pictures: [''],
                        product_short_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_long_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_important_highlights: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_bid_starting_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_bid_start_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        product_bid_end_date_and_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
                      });
                      _context.next = 4;
                      return this.storage.create().then(function (res) {});

                    case 4:
                      this.sub = this.route.params.subscribe(function (params) {
                        if (params) {
                          //let queryParams = params;
                          _this.id = params['id']; //console.log(this.catid);

                          if (params['id']) {
                            _this.getMultiImage();
                          }
                        }

                        var data = {
                          "product_id": _this.id
                        };

                        _this.http.post(_this.url + 'product-single', data).subscribe(function (res) {
                          //console.log(res);
                          // console.log(res);
                          if (res.status) {
                            _this.product_picture = res.response_data.product_picture;
                            window.CKEDITOR.instances['editor'].setData(res.response_data.product_long_description);

                            _this.productForm.patchValue({
                              seller_id: res.response_data.user_id,
                              product_name: res.response_data.product_name,
                              //product_picture: res.response_data.product_picture,
                              product_important_highlights: res.response_data.product_important_highlights,
                              product_location: res.response_data.product_location,
                              product_bid_starting_price: res.response_data.product_bid_starting_price,
                              //product_bid_start_date_and_time:res.response_data.product_bid_start_date_and_time,
                              //product_bid_end_date_and_time:res.response_data.product_bid_end_date_and_time,
                              product_bid_start_date_and_time: res.response_data.product_bid_start_date_and_time.replace(/ /g, "T"),
                              product_bid_end_date_and_time: res.response_data.product_bid_end_date_and_time.replace(/ /g, "T"),
                              product_short_description: res.response_data.product_short_description,
                              product_long_description: res.response_data.product_long_description
                            });
                          } else {
                            alert("Server error"); //loading.dismiss();
                          }
                        }, function (err) {
                          console.log(err); //loading.dismiss();
                        });
                      });
                      this.sellerList();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sellerList",
          value: function sellerList() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('', '');
            this.http.post(this.url + 'seller-list', formData).subscribe(function (res) {
              if (res && res.status) {
                //console.log(res.response_data);
                _this2.sellList = res.response_data;
              } else {
                _this2.sellList = null;
              }
            });
          }
        }, {
          key: "getMultiImage",
          value: function getMultiImage() {
            var _this3 = this;

            if (this.id) {
              var formData2 = new FormData();
              formData2.append('product_id', this.id);
              this.http.post(this.url + 'product-multiple-image-list', formData2).subscribe(function (res2) {
                // console.log(res2);
                _this3.more_picture = res2.response_data_ine;
              }, function (err) {
                _this3.loadingHide();
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.productForm.controls;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

            // let lol= window.CKEDITOR.instances['editor'].getData();
            // console.log(lol);
            this.submitted = true;

            if (this.productForm.invalid) {
              return;
            } else {
              this.loadingShow();
              var formData = new FormData();
              formData.append('seller_id', this.productForm.value.seller_id);
              formData.append('product_name', this.productForm.value.product_name);
              formData.append('product_picture', this.image);
              formData.append('product_short_description', this.productForm.value.product_short_description);
              formData.append('product_long_description', window.CKEDITOR.instances['editor'].getData());
              formData.append('product_important_highlights', this.productForm.value.product_important_highlights);
              formData.append('product_location', this.productForm.value.product_location);
              formData.append('product_bid_starting_price', this.productForm.value.product_bid_starting_price);
              formData.append('product_bid_start_date_and_time', this.productForm.value.product_bid_start_date_and_time.split("T")[0] + ' ' + this.productForm.value.product_bid_start_date_and_time.split("T")[1]);
              formData.append('product_bid_end_date_and_time', this.productForm.value.product_bid_end_date_and_time.split("T")[0] + ' ' + this.productForm.value.product_bid_end_date_and_time.split("T")[1]);
              formData.append('is_approved', '0');
              formData.append('status', '0');
              formData.append('product_id', this.id);
              this.http.post(this.url + 'product-update', formData).subscribe(function (res) {
                _this4.loadingHide();

                if (res.status) {
                  if (_this4.photos) {
                    var formData2 = new FormData();

                    for (var i = 0; i < _this4.photos.length; i++) {
                      formData2.append('photos[]', _this4.photos[i]);
                    }

                    formData2.append('product_id', res.response_data.id);

                    _this4.http.post(_this4.url + 'product-multiple-image', formData2).subscribe(function (response) {
                      if (response.status) {
                        //this.productForm.reset();
                        _this4.getMultiImage();

                        _this4.submitted = false; //this.presentAlert('Success!', '', response.message);
                      } else {
                        _this4.presentAlert('Error!', '', 'Server error, please try again later');
                      }
                    }, function (err) {
                      _this4.presentAlert('Error!', '', 'Server error, please try again later');
                    });
                  }

                  _this4.ngOnInit();

                  _this4.presentAlert('Success!', '', res.message);
                } else {
                  _this4.presentAlert('Error!', '', 'Server error, please try again later');
                }
              }, function (err) {
                _this4.loadingHide();

                _this4.presentAlert('Error!', '', 'Server error, please try again later');
              });
            }
          }
        }, {
          key: "deleteMultiImage",
          value: function deleteMultiImage(p) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var formData, successalrt, fail, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      //this.loadingShow();
                      formData = new FormData();
                      formData.append('product_id', p.id);
                      _context2.next = 4;
                      return this.alertController.create({
                        message: 'Data successfully delete',
                        buttons: ['OK']
                      });

                    case 4:
                      successalrt = _context2.sent;
                      _context2.next = 7;
                      return this.alertController.create({
                        message: 'Something went wrong',
                        buttons: ['OK']
                      });

                    case 7:
                      fail = _context2.sent;
                      _context2.next = 10;
                      return this.alertController.create({
                        message: 'Are you sure to delete',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            //console.log('Confirm Okay');
                            if (p.id) {
                              _this5.loadingShow();

                              _this5.http.post(_this5.url + 'product-multiple-image-remove', formData).subscribe(function (res) {
                                // this.res = res.json();
                                //console.log(res);
                                if (res.status == false) {
                                  fail.present();

                                  _this5.loadingHide();
                                } else if (res.status == true) {
                                  successalrt.present(); //this.constructor();
                                  //this.navCtrl.navigateForward('address-list');

                                  //this.constructor();
                                  //this.navCtrl.navigateForward('address-list');
                                  _this5.loadingHide();

                                  _this5.getMultiImage();
                                } else {
                                  //alert("Server error");
                                  _this5.loadingHide();
                                }
                              }, function (err) {
                                console.log(err);

                                _this5.loadingHide();
                              });
                            }
                          }
                        }]
                      });

                    case 10:
                      alert = _context2.sent;
                      _context2.next = 13;
                      return alert.present();

                    case 13:
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
        }, {
          key: "presentAlert",
          value: function presentAlert(header, subHeader, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: header,
                        subHeader: subHeader,
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "importFile",
          value: function importFile(event) {
            if (event.target.files && event.target.files.length > 0) {
              var files = event.target.files || event.dataTransfer.files;
              if (!files.length) return;
              var fileName = files[0].name.toUpperCase();

              if (fileName.endsWith(".JPG") || fileName.endsWith(".JPEG") || fileName.endsWith(".PNG")) {
                this.image = files[0];
                this.imageLoaded = true;
              } else {
                this.image = null;
                this.presentAlert("Error!", "", "Please select a valid image file jpeg/jpg/png");
              }
            }
          }
        }, {
          key: "importFiles",
          value: function importFiles(event) {
            if (event.target.files && event.target.files.length > 0) {
              var files = event.target.files || event.dataTransfer.files;
              if (!files.length) return;
              this.photos = files;
            }
          }
        }]);

        return AdminProductUpdatePage;
      }();

      AdminProductUpdatePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      AdminProductUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-product-update',
        template: _raw_loader_admin_product_update_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_product_update_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminProductUpdatePage);
      /***/
    },

    /***/
    "QiYt":
    /*!***********************************************************************************!*\
      !*** ./src/app/admin/admin-product-update/admin-product-update-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: AdminProductUpdatePageRoutingModule */

    /***/
    function QiYt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductUpdatePageRoutingModule", function () {
        return AdminProductUpdatePageRoutingModule;
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


      var _admin_product_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-product-update.page */
      "FV+B");

      var routes = [{
        path: '',
        component: _admin_product_update_page__WEBPACK_IMPORTED_MODULE_3__["AdminProductUpdatePage"]
      }];

      var AdminProductUpdatePageRoutingModule = function AdminProductUpdatePageRoutingModule() {
        _classCallCheck(this, AdminProductUpdatePageRoutingModule);
      };

      AdminProductUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminProductUpdatePageRoutingModule);
      /***/
    },

    /***/
    "WCIQ":
    /*!***************************************************************************!*\
      !*** ./src/app/admin/admin-product-update/admin-product-update.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WCIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n/*------- profile form css start --------*/\n\n.profile_form_area {\n  padding: 18px 18px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.profile_form_area .form-group label {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.profile_form_area .form-control:focus {\n  box-shadow: none;\n  border-color: #262262;\n}\n\n.profile_form_area textarea.form-control {\n  height: 120px;\n}\n\n.profile_form_area .btn {\n  padding: 8px 24px;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: 76px;\n  display: inline-block;\n  height: 38px;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\ndiv.dataTables_wrapper div.dataTables_filter input {\n  border-radius: 5px;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #000;\n}\n\n/*------- profile form css stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi1wcm9kdWN0LXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxXQUFBO0VBQVksV0FBQTtBQUdsQjs7QUFEQTtFQUFTLGFBQUE7QUFLVDs7QUFKQTtFQUFhLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSx1Q0FBQTtFQUF3QyxnQkFBQTtFQUFpQixrQkFBQTtBQWF2SDs7QUFaQTtFQUFnQixTQUFBO0VBQVUsVUFBQTtFQUFXLGVBQUE7RUFBZ0IsaUJBQUE7QUFtQnJEOztBQWxCQTtFQUFzQixXQUFBO0VBQVksWUFBQTtFQUFhLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLFdBQUE7RUFBWSxlQUFBO0VBQWdCLGtCQUFBO0FBOEJ2Sjs7QUE1QkEsMENBQUE7O0FBQ0E7RUFDQyxrQkFBQTtFQUNHLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStCSjs7QUE3QkE7RUFDQyxlQUFBO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFnQ0o7O0FBOUJBO0VBQ0MsZ0JBQUE7RUFDQSxxQkFBQTtBQWlDRDs7QUEvQkE7RUFDQyxhQUFBO0FBa0NEOztBQWhDQTtFQUNJLGlCQUFBO0FBbUNKOztBQWpDQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0NKOztBQWxDQTtFQUNJLGtCQUFBO0FBcUNKOztBQW5DQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBc0NKOztBQXBDQTtFQUNDLFdBQUE7QUF1Q0Q7O0FBckNBLHlDQUFBIiwiZmlsZSI6ImFkbWluLXByb2R1Y3QtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWlue2Zsb2F0OmxlZnQ7IHdpZHRoOjEwMCU7fVxuXG4jY29udGVudHtwYWRkaW5nOjMwcHg7fVxuLnBhZ2UtaGVhZGVye21hcmdpbjowIDAgMzBweDsgcGFkZGluZzoxMHB4IDE4cHg7IGJvcmRlcjpub25lOyBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjVweDt9XG4ucGFnZS1oZWFkZXIgaDF7bWFyZ2luOjA7IHBhZGRpbmc6MDsgZm9udC1zaXplOjE4cHg7IGxpbmUtaGVpZ2h0OjMwcHg7fVxuLnBhZ2UtaGVhZGVyIGgxIC5pY29ue3dpZHRoOjMwcHg7IGhlaWdodDozMHB4OyBiYWNrZ3JvdW5kOiNlZDFjMjQ7IGJvcmRlci1yYWRpdXM6M3B4OyB0ZXh0LWFsaWduOmNlbnRlcjsgbGluZS1oZWlnaHQ6MzBweDsgY29sb3I6I2ZmZjsgZm9udC1zaXplOjE0cHg7IG1hcmdpbi1yaWdodDoxMHB4O31cblxuLyotLS0tLS0tIHByb2ZpbGUgZm9ybSBjc3Mgc3RhcnQgLS0tLS0tLS0qL1xuLnByb2ZpbGVfZm9ybV9hcmVhe1xuXHRwYWRkaW5nOiAxOHB4IDE4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuZm9ybS1ncm91cCBsYWJlbHtcblx0Zm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9maWxlX2Zvcm1fYXJlYSAuZm9ybS1jb250cm9sOmZvY3Vze1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXItY29sb3I6ICMyNjIyNjI7XG59XG4ucHJvZmlsZV9mb3JtX2FyZWEgdGV4dGFyZWEuZm9ybS1jb250cm9se1xuXHRoZWlnaHQ6IDEyMHB4O1xufVxuLnByb2ZpbGVfZm9ybV9hcmVhIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcbiAgICB3aWR0aDogNzZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19maWx0ZXIgaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjIyNjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjYyMjYyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ucGFnaW5hdGlvbj5saT5hLCAucGFnaW5hdGlvbj5saT5zcGFue1xuXHRjb2xvcjogIzAwMDtcbn1cbi8qLS0tLS0tLSBwcm9maWxlIGZvcm0gY3NzIHN0b3AgLS0tLS0tLS0qLyJdfQ== */";
      /***/
    },

    /***/
    "e2CL":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-product-update/admin-product-update.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e2CL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Update product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"main\">\n    <div class=\"site-content-contain\">\n      <div id=\"content\" class=\"site-content\">\n        <div class=\"page-header clearfix\">\n          <h1 class=\"pull-left\"><i class=\"icon fa fa-user-o\" aria-hidden=\"true\"></i> Product Update</h1>\n        </div>\n\n\n        <!----- profile form area start ------>\n        <form [formGroup]=\"productForm\">\n        <div class=\"profile_form_area\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n          <label>Select Seller</label>\n          <select formControlName=\"seller_id\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.seller_id.errors }\">\n            <option value=\"\" selected>Select one</option>\n            <option *ngFor=\"let c of sellList\" [value]=\"c.id\">{{c.name}}</option>\n          </select>\n          <!-- <input type=\"text\" formControlName=\"parent_category_id\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.parent_category_id.errors }\" placeholder=\"Category name\"> -->\n          <div *ngIf=\"submitted && f.seller_id.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.seller_id.errors.required\">Please select a seller</div>\n          </div>\n        </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Product Name</label>\n                <input type=\"text\" formControlName=\"product_name\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_name.errors }\" placeholder=\"Product Name\">\n                <div *ngIf=\"submitted && f.product_name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_name.errors.required\">Product Name is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid Starting Price</label>\n                <input type=\"text\" formControlName=\"product_bid_starting_price\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_starting_price.errors }\" placeholder=\"Bid Starting Price\">\n                <div *ngIf=\"submitted && f.product_bid_starting_price.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_starting_price.errors.required\">Bid starting price is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Sort Description</label>\n                <textarea formControlName=\"product_short_description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_short_description.errors }\" placeholder=\"Product sort description\"></textarea>\n                <div *ngIf=\"submitted && f.product_short_description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_short_description.errors.required\">Sort description is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Long Description</label>\n                <textarea name=\"editor\" formControlName=\"product_long_description\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_long_description.errors }\" placeholder=\"Product long description\"></textarea>\n                <div *ngIf=\"submitted && f.product_long_description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_long_description.errors.required\">Long description is required</div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Important Highlights</label>\n                <input type=\"text\" formControlName=\"product_important_highlights\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_important_highlights.errors }\" placeholder=\"Important Highlights\">\n                <div *ngIf=\"submitted && f.product_important_highlights.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_important_highlights.errors.required\">Important Highlights is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Product Location</label>\n                <input type=\"text\" formControlName=\"product_location\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_location.errors }\" placeholder=\"Location\">\n                <div *ngIf=\"submitted && f.product_location.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_location.errors.required\">Location is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid start date and time</label>\n                <input type=\"datetime-local\" formControlName=\"product_bid_start_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_start_date_and_time.errors }\" placeholder=\"Bid start date and time\">\n                <div *ngIf=\"submitted && f.product_bid_start_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_start_date_and_time.errors.required\">Bid start date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Bid end date and time</label>\n                <input type=\"datetime-local\" formControlName=\"product_bid_end_date_and_time\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_bid_end_date_and_time.errors }\" placeholder=\"Bid end date and time\">\n                <div *ngIf=\"submitted && f.product_bid_end_date_and_time.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_bid_end_date_and_time.errors.required\">Bid end date and time is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Product Main Image</label>\n                <input type=\"file\" (change)=\"importFile($event)\" formControlName=\"product_picture\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_picture.errors }\" placeholder=\"Product Image\">\n                <div *ngIf=\"submitted && f.product_picture.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_picture.errors.required\">Picture is required</div>\n                </div>\n                <br>\n                <div>\n          <img src=\"{{image_path + product_picture}}\" style=\"width: 100px;height: 100px;\">\n        </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Multiple Images</label>\n                <input type=\"file\" multiple=\"false\" (change)=\"importFiles($event)\" formControlName=\"product_pictures\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.product_pictures.errors }\" placeholder=\"Product Image\">\n                <div *ngIf=\"submitted && f.product_pictures.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.product_pictures.errors.required\">Multiple images is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div *ngFor=\"let mp of more_picture\"  style=\"float: left;\n    margin-right: 10px;max-width: 40%;max-height: 40%;margin-bottom: 20px;position: relative;\">\n          <img src=\"{{image_path + mp.product_image}}\" style=\"width: 100px;height: 100px;\">\n          <div (click)=\"deleteMultiImage(mp)\" style=\"position: absolute;\n    top: 0;\n    right: 0;\n    margin-right: 10px;\n    color: red;\n    font-size: 25px;\n    font-weight: bold;\n    cursor: pointer;\"><i class=\"icon fa fa-trash\" aria-hidden=\"true\"></i></div>\n        </div>\n            </div>\n            <br>\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-primary\" (click)=\"submit()\">SUBMIT</button>\n            </div>\n          </div>\n        </div>\n        </form>\n        <!----- profile form area stop ------>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-product-update-admin-product-update-module-es5.js.map