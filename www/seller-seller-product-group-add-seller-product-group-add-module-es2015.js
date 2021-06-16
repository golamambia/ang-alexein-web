(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-product-group-add-seller-product-group-add-module"],{

/***/ "JYeT":
/*!********************************************************************************************!*\
  !*** ./src/app/seller/seller-product-group-add/seller-product-group-add-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: SellerProductGroupAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductGroupAddPageRoutingModule", function() { return SellerProductGroupAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seller_product_group_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-product-group-add.page */ "yG7C");




const routes = [
    {
        path: '',
        component: _seller_product_group_add_page__WEBPACK_IMPORTED_MODULE_3__["SellerProductGroupAddPage"]
    }
];
let SellerProductGroupAddPageRoutingModule = class SellerProductGroupAddPageRoutingModule {
};
SellerProductGroupAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerProductGroupAddPageRoutingModule);



/***/ }),

/***/ "OElv":
/*!************************************************************************************!*\
  !*** ./src/app/seller/seller-product-group-add/seller-product-group-add.module.ts ***!
  \************************************************************************************/
/*! exports provided: SellerProductGroupAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductGroupAddPageModule", function() { return SellerProductGroupAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seller_product_group_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-product-group-add-routing.module */ "JYeT");
/* harmony import */ var _seller_product_group_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-product-group-add.page */ "yG7C");







let SellerProductGroupAddPageModule = class SellerProductGroupAddPageModule {
};
SellerProductGroupAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_product_group_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerProductGroupAddPageRoutingModule"]
        ],
        declarations: [_seller_product_group_add_page__WEBPACK_IMPORTED_MODULE_6__["SellerProductGroupAddPage"]]
    })
], SellerProductGroupAddPageModule);



/***/ }),

/***/ "wOM3":
/*!************************************************************************************!*\
  !*** ./src/app/seller/seller-product-group-add/seller-product-group-add.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItcHJvZHVjdC1ncm91cC1hZGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "yG7C":
/*!**********************************************************************************!*\
  !*** ./src/app/seller/seller-product-group-add/seller-product-group-add.page.ts ***!
  \**********************************************************************************/
/*! exports provided: SellerProductGroupAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerProductGroupAddPage", function() { return SellerProductGroupAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_product_group_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-product-group-add.page.html */ "zPt1");
/* harmony import */ var _seller_product_group_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-product-group-add.page.scss */ "wOM3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let SellerProductGroupAddPage = class SellerProductGroupAddPage {
    constructor(http, loadingController, alertController) {
        this.http = http;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
        this.emailFormArray = [];
        this.group_name = '';
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.productList();
        this.groupsList();
    }
    groupsList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'group-all-list', formData).subscribe((res) => {
            //console.log(res);
            if (res && res.status) {
                this.groupList = res.response_data;
            }
            else {
                this.groupList = null;
            }
        });
    }
    onChange(email, isChecked) {
        if (isChecked) {
            this.emailFormArray.push(email);
        }
        else {
            this.emailFormArray.splice(this.emailFormArray.indexOf(email), 1);
        }
    }
    getGroupid(id) {
        this.productList();
        //console.log(id);
        let formData = new FormData;
        formData.append('group_id', id);
        this.http.post(this.url + 'group-item-get', formData).subscribe((res) => {
            //console.log(res);
            if (res && res.status) {
                this.grp_id = id;
                for (let pro of this.pList2) {
                    for (let p of res.response_data) {
                        if (p.product_id == pro.id && p.category_group_id == id) {
                            pro.is_front = 1;
                            pro.is_front_two = p.id;
                            //break;
                        }
                    }
                }
                this.pList = this.pList2;
                //console.log(this.pList);
                // this.groupList = res.response_data;
            }
            else {
                this.pList = null;
            }
        });
    }
    productAdd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.group_name == '' || this.group_name == null) {
                this.alertController.create({
                    message: 'Please select group name',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else if (this.emailFormArray == '') {
                this.alertController.create({
                    message: 'Please select product',
                    buttons: ['OK']
                }).then(resalert => {
                    resalert.present();
                });
            }
            else {
                for (let i = 0; i < this.emailFormArray.length; i++) {
                    //console.log(this.emailFormArray[i]);
                    let formData = new FormData;
                    formData.append('category_group_id', this.group_name);
                    formData.append('product_id', this.emailFormArray[i]);
                    this.http.post(this.url + 'group-item-add', formData).subscribe((res) => {
                        //this.res = res;
                        //console.log(res);
                        if (res.status) {
                            this.alertController.create({
                                message: res.message,
                                buttons: ['OK']
                            }).then(resalert => {
                                resalert.present();
                            });
                            this.getGroupid(this.group_name);
                        }
                        else {
                            this.alertController.create({
                                message: 'Something went wrong, try again',
                                buttons: ['OK']
                            }).then(resalert => {
                                resalert.present();
                            });
                        }
                    });
                }
            }
        });
    }
    productList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'product-list', formData).subscribe((res) => {
            if (res && res.status) {
                this.pList2 = res.response_data;
            }
            else {
                this.pList2 = null;
            }
        });
    }
    deleteProduct(p, grupid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.loadingShow();
            let formData = new FormData;
            formData.append('group_item_id', grupid);
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
                                this.http.post(this.url + 'group-item-remove', formData)
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
                                        this.getGroupid(this.grp_id);
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
    editProduct(c) {
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
};
SellerProductGroupAddPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SellerProductGroupAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-product-group-add',
        template: _raw_loader_seller_product_group_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_product_group_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerProductGroupAddPage);



/***/ }),

/***/ "zPt1":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller/seller-product-group-add/seller-product-group-add.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Product add to group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Products...\n        </div> -->\n        <div class=\"row\" style=\"margin-top: 7px;margin-left: 5px;\">\n          <div class=\"col-md-4\">\n            <select  class=\"form-control\" [(ngModel)]=\"group_name\" [ngModelOptions]=\"{standalone:true}\" (change)=\"getGroupid($event.target.value)\">\n            <option value=\"\" selected>Select group</option>\n            <option *ngFor=\"let gl of groupList\"   value=\"{{gl.id}}\">{{gl.category_group_name}}</option>\n          </select>\n          </div>\n          <div class=\"col-md-2\">\n           <button class=\"btn btn-sm1 btn-primary\" title=\"Click here to add\" (click)=\"productAdd()\"> Save</button>\n          </div>\n          \n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Title</th>\n                <th>\n                  Sort Description\n                </th>\n                <th>Bid Starting Price</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let p of pList\">\n                <td>{{p.product_name}}</td>\n                <td>\n                  {{p.product_short_description}}\n                </td>\n                <td>{{p.product_bid_starting_price}}</td>\n                <td><button *ngIf=\"p.status=='1'\"  class=\"btn btn-sm btn-success\" ><i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Active</button>\n                  <button *ngIf=\"p.status=='0'\"  class=\"btn btn-sm btn-warning\" ><i class=\"fa fa-times-circle-o \" aria-hidden=\"true\"></i> Deactive</button>\n                </td>\n                <td>\n                              \n                   <div *ngIf=\"p.is_front==1\" >\n                      <input type=\"checkbox\" value=\"{{p.id}}\"  name=\"\" (change)=\"onChange(p.id, $event.target.checked)\" checked=\"true\">\n                  <button (click)=\"deleteProduct(p,p.is_front_two)\" title=\"Product delete from group\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                  </div>\n                \n                  <input *ngIf=\"p.is_front==0\"  type=\"checkbox\" value=\"{{p.id}}\"  name=\"\" (change)=\"onChange(p.id, $event.target.checked)\" >\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <!-- <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav> -->\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=seller-seller-product-group-add-seller-product-group-add-module-es2015.js.map