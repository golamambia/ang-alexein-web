(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "Oez0":
/*!*******************************************************************!*\
  !*** ./src/app/product-details/product-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageRoutingModule", function() { return ProductDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details.page */ "iSGO");




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsPage"]
    }
];
let ProductDetailsPageRoutingModule = class ProductDetailsPageRoutingModule {
};
ProductDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailsPageRoutingModule);



/***/ }),

/***/ "SqMz":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ "uxF4");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details-routing.module */ "Oez0");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details.page */ "iSGO");
/* harmony import */ var _include_include_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../include/include.module */ "+TEy");









let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPageRoutingModule"],
            _include_include_module__WEBPACK_IMPORTED_MODULE_8__["IncludeModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlModule"]
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "dmuU":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header></app-header>\n\n  <section class=\"main_area product_details_area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n\n          <div class=\"product_image_box\">\n\n\n            <div class=\"exzoom clearfix\" id=\"exzoom\">\n              <div class=\"exzoom_img_box\">\n                <ul class='exzoom_img_ul'>\n                  <li><img src=\"{{image_path + product_deltail?.product_picture}}\" /></li>\n                  <!-- <li><img src=\"assets/images/product-details1.png\" /></li>\n                  <li><img src=\"assets/images/product-details1.png\" /></li>\n                  <li><img src=\"assets/images/product-details1.png\" /></li> -->\n                </ul>\n              </div>\n              <div class=\"exzoom_nav\"></div>\n              <p class=\"exzoom_btn\">\n                <a href=\"javascript:void(0);\" class=\"exzoom_prev_btn\"><i class=\"fa fa-angle-up\"\n                    aria-hidden=\"true\"></i></a>\n                <a href=\"javascript:void(0);\" class=\"exzoom_next_btn\"><i class=\"fa fa-angle-down\"\n                    aria-hidden=\"true\"></i></a>\n              </p>\n            </div>\n\n          </div>\n\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"product_details_contain\">\n            <div class=\"contain_box\">\n              <h1>\n                {{product_deltail?.product_name}}\n                <strong>Auction : {{groupdetails?.auction_cg_number}}</strong>\n              </h1>\n            </div>\n            <div class=\"contain_box\">\n              <h3>max bid : <strong>{{maxbidamt}}</strong></h3>\n               <h3>Bidder : <strong></strong></h3>\n              <h4><strong style=\"color: #0e0790\">Auction status  : </strong> <strong id=\"demo\" ></strong></h4>\n              <h4><strong>End Date & Time :</strong>{{groupdetails?.end_date | date:'MMM dd, yyyy'  + '     ' + groupdetails?.end_time}}</h4>\n              <h4><strong>Location :</strong> {{product_deltail?.product_location}}</h4>\n            </div>\n            <div class=\"contain_box\">\n              <h5>highlights :</h5>\n              <p>{{product_deltail?.product_important_highlights}}\n              </p>\n              <div *ngIf=\"buyerId\">\n                <a *ngIf=\"bid_status==1\" href=\"javascript:void(0);\" class=\"btn btn-primary\"  (click)=\"triggerModal(modalData)\">bid now <i class=\"zmdi zmdi-plus-circle\"></i></a>\n              </div>\n               <div *ngIf=\"!buyerId\">\n              <a *ngIf=\"bid_status==1\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\" class=\"btn btn-primary\"  >Login to bid <i class=\"zmdi zmdi-plus-circle\"></i></a>\n            </div>\n            </div>\n          </div>\n        </div>\n        <ng-template #modalData let-modal >\n  <div class=\"modal-header\" style=\"background: #3092A6;\n    border-radius: 5px 5px 0 0;\n    color: #FFF;\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Your Bid</h4>\n   <!--  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">×</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body text-center\" id=\"modalBody_Text\"><span style=\"font-size:1.5rem;margin-bottom:15px;\">Your Bid Will Be</span> <br> <span style=\"font-weight:bold;font-size:1.5rem;\">{{product_deltail?.product_bid_starting_price}}!</span> <br><br> Pickup Location: <strong>{{product_deltail?.product_location}}</strong> <br> Are you sure?</div>\n  <table align=\"center\">\n          <tbody><tr>\n            <td>\n              <div class=\"text-center modal-footer m-t-10\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"bidNow(product_deltail)\">YES</button>\n                  <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.close('Save click')\">NO</button>\n                </div>\n              </td>\n            </tr>\n        </tbody></table>\n  <!-- <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Close</button>\n  </div> -->\n</ng-template>\n\n        <div class=\"col-lg-12\">\n\n          <div class=\"product_description_area\">\n\n            <ul class=\"nav nav-tabs\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">description</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">acution terms</a>\n              </li>\n             <!--  <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu2\">bid increment</a>\n              </li> -->\n            </ul>\n\n            <!-- Tab panes -->\n            <div class=\"tab-content\">\n              <div id=\"home\" class=\"tab-pane active\">\n                <div class=\"product_description\">\n                   <p [innerHtml]=\"groupdetails?.product_long_description\"></p>\n                \n                </div>\n              </div>\n              <div id=\"menu1\" class=\"tab-pane fade\">\n                <div class=\"product_description\">\n                  <p [innerHtml]=\"groupdetails?.terms\"></p>\n                </div>\n              </div>\n              <!-- <div id=\"menu2\" class=\"tab-pane fade\">\n                <div class=\"product_description\">\n                  \n                </div>\n              </div> -->\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!------- product details area stop -------->\n\n\n  <!----- product listing two area start ----->\n  <section class=\"main_area product_listing_area mt-0\">\n    <div class=\"container\">\n      <h2 class=\"h2 mb-2\"><strong>Related Auctions</strong></h2>\n      <owl-carousel [options]=\"carouselOptions\" [carouselClasses]=\"['product-carousel']\">\n        <div class=\"product\" *ngFor=\"let image of images;let i= index\">\n          <div class=\"product_box\">\n            <div class=\"image_box\">\n              <img src=\"{{image.image}}\" alt=\"product\" title=\"\" [routerLink]=\"['/product-details']\">\n            </div>\n            <div class=\"contain_box\">\n              <h4>Auction ID. BB31470</h4>\n              <a [routerLink]=\"['/product-details']\" routerLinkActive=\"active\" class=\"link\">OnePlus Band 1.1'' AMOLED Display</a>\n              <h3>Max Bid: $150.00</h3>\n              <button class=\"btn btn-bid\" [routerLink]=\"['/product-details']\">bid now <i class=\"zmdi zmdi-plus-circle\"></i></button>\n            </div>\n          </div>\n        </div>\n      </owl-carousel>\n    </div>\n  </section>\n\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "fLsq":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*----- product details area css start ------*/\n.product_details_area .product_details_contain .contain_box {\n  border-bottom: 1px solid #dfdee8;\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n}\n.product_details_area .product_details_contain .contain_box:last-child {\n  border-bottom: 0px;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n.product_details_area .product_details_contain .contain_box h1 {\n  line-height: normal;\n  text-transform: uppercase;\n  font-size: 24px;\n  font-weight: 500;\n  color: #000;\n  margin: 0 0 0;\n}\n.product_details_area .product_details_contain .contain_box h1 strong {\n  display: block;\n  font-size: 18px;\n  font-weight: 500;\n  color: #ed1c24;\n}\n.product_details_area .product_details_contain .contain_box h3 {\n  line-height: normal;\n  text-transform: capitalize;\n  font-size: 18px;\n  font-weight: 500;\n  color: #131038;\n  margin-bottom: 2px;\n}\n.product_details_area .product_details_contain .contain_box h3 strong {\n  font-size: 24px;\n  font-weight: 500;\n  color: #ed1c24;\n}\n.product_details_area .product_details_contain .contain_box h4 {\n  line-height: normal;\n  font-size: 17px;\n  font-weight: 500;\n  color: #282828;\n  margin-bottom: 2px;\n}\n.product_details_area .product_details_contain .contain_box h4 strong {\n  line-height: normal;\n  font-weight: 500;\n  color: #131037;\n}\n.product_details_area .product_details_contain .contain_box h5 {\n  line-height: normal;\n  font-size: 24px;\n  font-weight: 500;\n  color: #262262;\n  text-transform: capitalize;\n}\n.product_details_area .product_details_contain .contain_box p {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0 0 20px;\n}\n.product_details_area .product_details_contain .contain_box p a {\n  color: #262262;\n  font-weight: 600;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.product_details_area .product_details_contain .contain_box p a:hover {\n  color: #ed1c24;\n}\n.product_details_area .product_details_contain .contain_box .btn-primary {\n  background: #262262;\n  border-color: #262262;\n}\n.product_details_area .product_details_contain .contain_box .btn-primary:hover {\n  background: #ed1c24;\n  border-color: #ed1c24;\n}\n#exzoom {\n  width: 350px;\n  position: relative;\n  left: 25%;\n}\n.product_description_area {\n  margin-top: 70px;\n}\n.product_description_area .nav-tabs .nav-item {\n  margin-right: 5px;\n}\n.product_description_area .nav-tabs .nav-link {\n  border: 1px solid #dcdcdc;\n  background: #f7f5ff;\n  color: #34343a;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-bottom: none;\n  padding: 10px 30px;\n}\n.product_description_area .nav-tabs .nav-link.active {\n  color: #ed1c24;\n  background: #fff;\n  border-bottom: none;\n  position: relative;\n}\n.product_description_area .nav-tabs .nav-link.active:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.product_description_area .product_description {\n  padding: 30px;\n  border: 1px solid #dcdcdc;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.product_description_area .product_description .description_box {\n  min-height: 20px;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n.product_description_area .product_description .description_box:last-child {\n  margin-bottom: 0px;\n}\n.product_description_area .product_description .description_box .number {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 18px;\n  font-weight: 500;\n  color: #ed1c24;\n}\n.product_description_area .product_description .description_box h3 {\n  line-height: normal;\n  font-size: 16px;\n  font-weight: 500;\n  color: #282828;\n  margin: 0 0 0;\n}\n.product_description_area .product_description .description_box h3 strong {\n  color: #131037;\n  font-weight: 600;\n}\n.product_description_area .product_description .description_box ul {\n  padding: 0 0 0 0;\n  margin: 0 0 0 0;\n}\n.product_description_area .product_description .description_box ul li {\n  position: relative;\n  padding-left: 20px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  margin-bottom: 7px;\n}\n.product_description_area .product_description .description_box ul li:last-child {\n  margin-bottom: 0px;\n}\n.product_description_area .product_description .description_box ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: FontAwesome;\n  color: #ed1c24;\n}\n/*----- product details area css stop ------*/\n/*--------- product listing css start ---------*/\n.product_box {\n  border: 1px solid #c9c9c9;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 15px 15px;\n  position: relative;\n}\n.product_box .image_box {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #c9c9c9;\n  overflow: hidden;\n}\n.product_box .image_box img {\n  transition: 0.5s;\n  -o-object-fit: none;\n     object-fit: none;\n}\n.product_box:hover .image_box img {\n  transform: scale(1.1);\n}\n.product_box .contain_box {\n  text-align: center;\n  padding: 20px 0;\n}\n.product_box .contain_box a.link {\n  color: #000000;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.5s;\n  line-height: 24px;\n  display: block;\n  margin-bottom: 4px;\n}\n.product_box .contain_box a.link:hover {\n  color: #262262;\n}\n.product_box .contain_box h4 {\n  font-size: 13px;\n  font-weight: 500;\n  color: #ed1c24;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.product_box .contain_box h3 {\n  line-height: normal;\n  font-size: 16px;\n  font-weight: 600;\n  color: #262262;\n  margin: 3px 0 0;\n}\n.product_box .btn {\n  content: \"\";\n  position: absolute;\n  bottom: -18px;\n  left: 0;\n  right: 0;\n}\n.product {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLDhDQUFBO0FBR0E7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdKO0FBREE7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSUo7QUFGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLSjtBQUhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUpBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFPSjtBQUxBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFRSjtBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBU0o7QUFQQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVVKO0FBUkE7RUFDSSxjQUFBO0FBV0o7QUFUQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFZSjtBQVZBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQWFKO0FBVEE7RUFDUSxZQUFBO0VBQ0osa0JBQUE7RUFDQSxTQUFBO0FBWUo7QUFUQTtFQUNJLGdCQUFBO0FBWUo7QUFWQTtFQUNJLGlCQUFBO0FBYUo7QUFYQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBY0o7QUFaQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFlSjtBQWJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBZ0JKO0FBZEE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFpQko7QUFmQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBa0JKO0FBaEJBO0VBQ0ksa0JBQUE7QUFtQko7QUFqQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFvQko7QUFsQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBcUJKO0FBbkJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBc0JKO0FBcEJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBdUJKO0FBckJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBd0JKO0FBdEJBO0VBQ0ksa0JBQUE7QUF5Qko7QUF2QkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQTBCSjtBQXhCQSw2Q0FBQTtBQUVBLGdEQUFBO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBMEJKO0FBeEJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUEyQko7QUF6QkE7RUFJSSxnQkFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7QUE0Qko7QUExQkE7RUFJSSxxQkFBQTtBQTZCSjtBQTNCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQThCSjtBQTVCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUlBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUErQko7QUE3QkE7RUFDSSxjQUFBO0FBZ0NKO0FBOUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFpQ0o7QUEvQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBa0NKO0FBaENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBbUNKO0FBakNBO0VBQ0ksb0JBQUE7QUFvQ0oiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qLS0tLS0gcHJvZHVjdCBkZXRhaWxzIGFyZWEgY3NzIHN0YXJ0IC0tLS0tLSovXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZWU4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCBoMSB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbjogMCAwIDA7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IGgxIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCBoMyB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMTMxMDM4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IGgzIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IGg0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI4MjgyODtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCBoNCBzdHJvbmcge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzEzMTAzNztcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggaDUge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IHAgYSB7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggcCBhOmhvdmVyIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMyNjIyNjI7XG4gIGJvcmRlci1jb2xvcjogIzI2MjI2Mjtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VkMWMyNDtcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI0O1xufVxuXG4jZXh6b29tIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLm5hdi10YWJzIC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICBiYWNrZ3JvdW5kOiAjZjdmNWZmO1xuICBjb2xvcjogIzM0MzQzYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2VkMWMyNDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb25fYm94IHtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uX2JveDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbl9ib3ggLm51bWJlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbl9ib3ggaDMge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjgyODI4O1xuICBtYXJnaW46IDAgMCAwO1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbl9ib3ggaDMgc3Ryb25nIHtcbiAgY29sb3I6ICMxMzEwMzc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uX2JveCB1bCB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb25fYm94IHVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb25fYm94IHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uX2JveCB1bCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EgVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLyotLS0tLSBwcm9kdWN0IGRldGFpbHMgYXJlYSBjc3Mgc3RvcCAtLS0tLS0qL1xuLyotLS0tLS0tLS0gcHJvZHVjdCBsaXN0aW5nIGNzcyBzdGFydCAtLS0tLS0tLS0qL1xuLnByb2R1Y3RfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2R1Y3RfYm94IC5pbWFnZV9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzljOWM5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVjdF9ib3ggLmltYWdlX2JveCBpbWcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb2JqZWN0LWZpdDogbm9uZTtcbn1cblxuLnByb2R1Y3RfYm94OmhvdmVyIC5pbWFnZV9ib3ggaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4ucHJvZHVjdF9ib3ggLmNvbnRhaW5fYm94IGEubGluayB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCBhLmxpbms6aG92ZXIge1xuICBjb2xvcjogIzI2MjI2Mjtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCBoNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNlZDFjMjQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCBoMyB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyNjIyNjI7XG4gIG1hcmdpbjogM3B4IDAgMDtcbn1cblxuLnByb2R1Y3RfYm94IC5idG4ge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTE4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucHJvZHVjdCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "iSGO":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details.page.html */ "dmuU");
/* harmony import */ var _product_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details.page.scss */ "fLsq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);














let ProductDetailsPage = class ProductDetailsPage {
    constructor(modalService, alertController, formBuilder, http, loadingController, storage, router, route) {
        this.modalService = modalService;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingController = loadingController;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.images = [
            {
                text: "Everfresh Flowers",
                image: "assets/images/product5.jpg"
            },
            {
                text: "Festive Deer",
                image: "assets/images/product6.jpg"
            },
            {
                text: "Morning Greens",
                image: "assets/images/product7.jpg"
            },
            {
                text: "Bunch of Love",
                image: "assets/images/product8.jpg"
            },
            {
                text: "Blue Clear",
                image: "assets/images/product5.jpg"
            }
        ];
        this.image_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["image_path"];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_URL;
        this.submitted = false;
        this.imageLoaded = false;
        this.bid_status = 1;
        this.carouselOptions = {
            loop: true,
            autoplay: false,
            margin: 30,
            dots: false,
            nav: true,
            navText: [],
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                640: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create().then(res => {
                //this.getUserDetails();
            });
            this.sub = this.route.params.subscribe(params => {
                if (params) {
                    //console.log(params);
                    this.id = params['id'];
                    this.gid = params['gid'];
                    if (params['id']) {
                    }
                }
            });
            this.storage.get('auctionUser').then(response => {
                // console.log(response);
                if (response && response.response_data && response.response_data.id) {
                    this.buyerId = response.response_data.id;
                    // this.buyerData=response.response_data;
                }
                else {
                    this.buyerId = null;
                }
            }, err => {
                this.buyerId = null;
            });
        });
    }
    ionViewWillEnter() {
        this.getProductById(this.id);
        this.getProductBid(this.id);
        this.getGroup();
    }
    getProductById(id) {
        //this.loadingShow();
        let formData = new FormData;
        formData.append('product_id', id);
        this.http.post(this.url + 'product-single', formData).subscribe((res) => {
            //console.log(res);
            if (res.status) {
                //this.loadingHide();
                //this.getGroup();
                this.product_deltail = res.response_data;
            }
            else {
                //this.loadingHide();
                this.presentAlert('Error!', '', 'Server error, please try again later1');
            }
        }, err => {
            //this.loadingHide();
        });
    }
    getProductBid(id) {
        // this.loadingShow();
        let formData = new FormData;
        formData.append('product_id', id);
        this.http.post(this.url + 'max-bid-by-product', formData).subscribe((res) => {
            if (res.status) {
                // this.loadingHide();
                // console.log(res);
                this.maxbidamt = res.response_data;
            }
            else {
                //this.loadingHide();
                //this.presentAlert('Error!', '', 'Server error, please try again later2');
            }
        }, err => {
            //this.loadingHide();
        });
    }
    getGroup() {
        // this.loadingShow();
        let formData = new FormData;
        formData.append('group_id', this.gid);
        this.http.post(this.url + 'group-details', formData).subscribe((res) => {
            //console.log(res);
            if (res.status) {
                // this.loadingHide();
                // console.log(res);
                let m = moment__WEBPACK_IMPORTED_MODULE_11__(res.response_data.end_date, "YYYY-MM-DD").format('MMM D, YYYY') + ' ' + res.response_data.end_time;
                // this.time_count(m);
                let countDownDate2 = new Date(m).getTime();
                let now2 = new Date().getTime();
                // Find the distance between now and the count down date
                let distance2 = countDownDate2 - now2;
                if (distance2 < 0) {
                    this.htmlStr = "Expired";
                    document.getElementById("demo").innerHTML = "Expired";
                    this.bid_status = 0;
                }
                this.groupdetails = res.response_data;
                let countDownDate = new Date(m).getTime();
                // Update the count down every 1 second
                let x = setInterval(function () {
                    // Get todays date and time
                    let now = new Date().getTime();
                    // Find the distance between now and the count down date
                    let distance = countDownDate - now;
                    // Time calculations for days, hours, minutes and seconds
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    //console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);
                    // Output the result in an element with id="demo"
                    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                        + minutes + "m " + seconds + "s ";
                    // If the count down is over, write some text 
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById("demo").innerHTML = "Expired";
                        this.bid_status = 0;
                    }
                }, 1000);
            }
            else {
                //this.loadingHide();
                this.presentAlert('Error!', '', 'Server error, please try again later2');
            }
        }, err => {
            //this.loadingHide();
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
    triggerModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
            this.closeModal = `Closed with: ${res}`;
        }, (res) => {
            this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    bidNow(c) {
        //console.log(c.id);
        let formData = new FormData;
        //formData.append('id', '9');
        formData.append('user_id', this.buyerId);
        formData.append('product_id', c.id);
        formData.append('bid_amount', c.product_bid_starting_price);
        if (this.buyerId) {
            this.http.post(this.url + 'bid-add', formData).subscribe((res) => {
                //this.res = res;
                // console.log(res);
                if (res.status == true) {
                    this.modalService.dismissAll();
                    this.presentAlert('Success!', '', res.message);
                    //this.dataList();
                }
                else {
                    this.modalService.dismissAll();
                    this.loadingHide();
                    this.presentAlert('Error!', '', 'Server error, please try again later');
                }
            });
        }
        else {
            this.modalService.dismissAll();
            this.loadingHide();
            this.presentAlert('Error!', '', 'Please login first');
        }
    }
    time_count(countDownDate1) {
        let countDownDate = new Date(countDownDate1).getTime();
        // Update the count down every 1 second
        let x = setInterval(function () {
            // Get todays date and time
            let now = new Date().getTime();
            // Find the distance between now and the count down date
            let distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            //console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);
            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Expired";
                this.bid_status = 0;
            }
        }, 1000);
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ProductDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-details',
        template: _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module-es2015.js.map