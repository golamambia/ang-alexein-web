(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-items-group-items-module"],{

/***/ "1cma":
/*!***************************************************!*\
  !*** ./src/app/group-items/group-items.module.ts ***!
  \***************************************************/
/*! exports provided: GroupItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupItemsPageModule", function() { return GroupItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ "uxF4");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _group_items_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-items-routing.module */ "SyKQ");
/* harmony import */ var _group_items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-items.page */ "oFq3");
/* harmony import */ var _include_include_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../include/include.module */ "+TEy");









let GroupItemsPageModule = class GroupItemsPageModule {
};
GroupItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _group_items_routing_module__WEBPACK_IMPORTED_MODULE_6__["GroupItemsPageRoutingModule"],
            _include_include_module__WEBPACK_IMPORTED_MODULE_8__["IncludeModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlModule"]
        ],
        declarations: [_group_items_page__WEBPACK_IMPORTED_MODULE_7__["GroupItemsPage"]]
    })
], GroupItemsPageModule);



/***/ }),

/***/ "SyKQ":
/*!***********************************************************!*\
  !*** ./src/app/group-items/group-items-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GroupItemsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupItemsPageRoutingModule", function() { return GroupItemsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _group_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-items.page */ "oFq3");




const routes = [
    {
        path: '',
        component: _group_items_page__WEBPACK_IMPORTED_MODULE_3__["GroupItemsPage"]
    }
];
let GroupItemsPageRoutingModule = class GroupItemsPageRoutingModule {
};
GroupItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupItemsPageRoutingModule);



/***/ }),

/***/ "eqCX":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-items/group-items.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header></app-header>\n<section class=\"product_search_area\">\n  <div class=\"container\">\n    <h1>Item List</h1>\n    <!-- <ul class=\"pagger_link\">\n      <li><a href=\"#\">home</a></li>\n      <li class=\"active\">Item List</li>\n    </ul> -->\n  </div>\n</section>\n<!----- product search area stop ----->\n\n <!------- product listing area start ------->\n <section class=\"main_area product_listing_area\">\n   <div class=\"container\">\n\n    <div class=\"item_listing_main_area\">\n        \n        \n        \n        <div class=\"item_box\" *ngFor=\"let p of product_deltail\">\n            <div class=\"img_box\">\n                <a routerLink=\"/product-details/{{p.id}}\">\n                    <img src=\"assets/images/product2.jpg\" alt=\"product\">\n                    <div class=\"sold\">Sold Qty 1</div>\n                </a>\n            </div>\n            <h3>\n                {{p.product_name}}\n                <div class=\"price\">\n                    MSRP: {{maxbidprice}} <a href=\"javascript:void(0)\" data-toggle=\"tooltip\" title=\"Hooray!\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i></a>\n                </div>\n            </h3>\n            <p>{{p.product_short_description}}</p>\n            <!-- <p>GRY1072322</p> -->\n            <h4>Unit Price: {{p.product_bid_starting_price}}</h4>\n            <p><strong style=\"color: #0e0790\">This Auction closes in  : </strong> <strong id=\"demo{{p.id}}\">{{time_count(group_details?.end_date | date:'MMM dd, yyyy'  + '     ' + group_details?.end_time,p.id)}}</strong></p>\n            <a href=\"javascript:void(0)\" class=\"number\">\n                <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n                <p>10</p>\n            </a>\n        </div>\n       \n        \n        \n    </div>\n\n     <!------ pagination area start ----->\n     <!-- <div class=\"pagination_area mt-5\">\n       <p>Showing 1 to 10 of 120 Auctions</p>\n       <ul class=\"pagination\">\n         <li><a href=\"#\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a></li>\n         <li class=\"active\"><a href=\"#\">1</a></li>\n         <li><a href=\"#\">2</a></li>\n         <li><a href=\"#\">3</a></li>\n         <li><a href=\"#\">4</a></li>\n         <li><a href=\"#\">...</a></li>\n         <li><a href=\"#\">10</a></li>\n         <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a></li>\n       </ul>\n       <div class=\"go_page\">\n         <input type=\"text\" class=\"form-control\" value=\"\">\n         <p>/ 10</p>\n         <button class=\"btn btn-primary\">go</button>\n       </div>\n     </div> -->\n     <!------ pagination area stop ----->\n\n   </div>\n </section>\n\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "l0Nq":
/*!***************************************************!*\
  !*** ./src/app/group-items/group-items.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*----- product details area css start ------*/\n.product_details_area .product_details_contain .contain_box {\n  border-bottom: 1px solid #dfdee8;\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n}\n.product_details_area .product_details_contain .contain_box:last-child {\n  border-bottom: 0px;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n.product_details_area .product_details_contain .contain_box h1 {\n  line-height: normal;\n  text-transform: uppercase;\n  font-size: 24px;\n  font-weight: 500;\n  color: #000;\n  margin: 0 0 0;\n}\n.product_details_area .product_details_contain .contain_box h1 strong {\n  display: block;\n  font-size: 18px;\n  font-weight: 500;\n  color: #ed1c24;\n}\n.product_details_area .product_details_contain .contain_box h3 {\n  line-height: normal;\n  text-transform: capitalize;\n  font-size: 18px;\n  font-weight: 500;\n  color: #131038;\n  margin-bottom: 2px;\n}\n.product_details_area .product_details_contain .contain_box h3 strong {\n  font-size: 24px;\n  font-weight: 500;\n  color: #ed1c24;\n}\n.product_details_area .product_details_contain .contain_box h4 {\n  line-height: normal;\n  font-size: 17px;\n  font-weight: 500;\n  color: #282828;\n  margin-bottom: 2px;\n}\n.product_details_area .product_details_contain .contain_box h4 strong {\n  line-height: normal;\n  font-weight: 500;\n  color: #131037;\n}\n.product_details_area .product_details_contain .contain_box h5 {\n  line-height: normal;\n  font-size: 24px;\n  font-weight: 500;\n  color: #262262;\n  text-transform: capitalize;\n}\n.product_details_area .product_details_contain .contain_box p {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0 0 20px;\n}\n.product_details_area .product_details_contain .contain_box p a {\n  color: #262262;\n  font-weight: 600;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.product_details_area .product_details_contain .contain_box p a:hover {\n  color: #ed1c24;\n}\n.product_details_area .product_details_contain .contain_box .btn-primary {\n  background: #262262;\n  border-color: #262262;\n}\n.product_details_area .product_details_contain .contain_box .btn-primary:hover {\n  background: #ed1c24;\n  border-color: #ed1c24;\n}\n#exzoom {\n  width: 350px;\n  position: relative;\n  left: 25%;\n}\n.product_description_area {\n  margin-top: 70px;\n}\n.product_description_area .nav-tabs .nav-item {\n  margin-right: 5px;\n}\n.product_description_area .nav-tabs .nav-link {\n  border: 1px solid #dcdcdc;\n  background: #f7f5ff;\n  color: #34343a;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-bottom: none;\n  padding: 10px 30px;\n}\n.product_description_area .nav-tabs .nav-link.active {\n  color: #ed1c24;\n  background: #fff;\n  border-bottom: none;\n  position: relative;\n}\n.product_description_area .nav-tabs .nav-link.active:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.product_description_area .product_description {\n  padding: 30px;\n  border: 1px solid #dcdcdc;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.product_description_area .product_description .description_box {\n  min-height: 20px;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n.product_description_area .product_description .description_box:last-child {\n  margin-bottom: 0px;\n}\n.product_description_area .product_description .description_box .number {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 18px;\n  font-weight: 500;\n  color: #ed1c24;\n}\n.product_description_area .product_description .description_box h3 {\n  line-height: normal;\n  font-size: 16px;\n  font-weight: 500;\n  color: #282828;\n  margin: 0 0 0;\n}\n.product_description_area .product_description .description_box h3 strong {\n  color: #131037;\n  font-weight: 600;\n}\n.product_description_area .product_description .description_box ul {\n  padding: 0 0 0 0;\n  margin: 0 0 0 0;\n}\n.product_description_area .product_description .description_box ul li {\n  position: relative;\n  padding-left: 20px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #000000;\n  list-style: none;\n  margin-bottom: 7px;\n}\n.product_description_area .product_description .description_box ul li:last-child {\n  margin-bottom: 0px;\n}\n.product_description_area .product_description .description_box ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: FontAwesome;\n  color: #ed1c24;\n}\n/*----- product details area css stop ------*/\n/*--------- product listing css start ---------*/\n.product_box {\n  border: 1px solid #c9c9c9;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 15px 15px;\n  position: relative;\n}\n.product_box .image_box {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #c9c9c9;\n  overflow: hidden;\n}\n.product_box .image_box img {\n  transition: 0.5s;\n  -o-object-fit: none;\n     object-fit: none;\n}\n.product_box:hover .image_box img {\n  transform: scale(1.1);\n}\n.product_box .contain_box {\n  text-align: center;\n  padding: 20px 0;\n}\n.product_box .contain_box a.link {\n  color: #000000;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.5s;\n  line-height: 24px;\n  display: block;\n  margin-bottom: 4px;\n}\n.product_box .contain_box a.link:hover {\n  color: #262262;\n}\n.product_box .contain_box h4 {\n  font-size: 13px;\n  font-weight: 500;\n  color: #ed1c24;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.product_box .contain_box h3 {\n  line-height: normal;\n  font-size: 16px;\n  font-weight: 600;\n  color: #262262;\n  margin: 3px 0 0;\n}\n.product_box .btn {\n  content: \"\";\n  position: absolute;\n  bottom: -18px;\n  left: 0;\n  right: 0;\n}\n.product {\n  padding-bottom: 20px;\n}\n/*----------- item listing area start ------------*/\n.item_listing_main_area {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n.item_box {\n  min-height: 175px;\n  position: relative;\n  box-sizing: border-box;\n  border: 1px solid #c9c9c9;\n  border-radius: 5px;\n  padding: 15px 15px 15px 175px;\n  transition: 0.5s;\n  margin: 0 0 30px;\n}\n.item_box:last-child {\n  margin: 0 0 0;\n}\n.item_box:hover {\n  border-color: transparent;\n  box-shadow: 0 0 30px rgba(201, 201, 201, 0.7);\n}\n.item_box .img_box {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 100%;\n  max-width: 150px;\n  height: 150px;\n  border: 1px solid #c9c9c9;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.item_box .img_box img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 80%;\n  margin: auto;\n}\n.item_box .img_box .sold {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 10px;\n  font-weight: 500;\n  padding: 4px 4px;\n  background: #d8d8d8;\n  color: #000;\n  box-sizing: border-box;\n  border-radius: 2px;\n}\n.item_box h3 {\n  line-height: normal;\n  margin: 0 0 10px;\n  font-size: 17px;\n  font-weight: 600;\n  color: #262262;\n}\n.item_box h3 .price {\n  float: right;\n  font-weight: 500;\n  line-height: 20px;\n}\n.item_box h3 .price a {\n  font-size: 20px;\n}\n.item_box p {\n  font-size: 15px;\n  font-weight: 400;\n  margin: 0 0 5px;\n}\n.item_box h4 {\n  font-size: 15px;\n  font-weight: 600;\n  color: #000000;\n  margin: 0 0 0;\n}\n.item_box .number {\n  content: \"\";\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  border: 1px solid #c9c9c9;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  transition: 0.5s;\n  padding: 3px 3px;\n  text-align: center;\n}\n.item_box .number i {\n  font-size: 16px;\n  font-weight: 500;\n  color: #262262;\n  transition: 0.5s;\n}\n.item_box .number p {\n  padding: 0 0;\n  margin: 0 0 0;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 14px;\n  transition: 0.5s;\n}\n.item_box .number:hover {\n  border-color: #262262;\n  background: #262262;\n}\n.item_box .number:hover i, .item_box .number:hover p {\n  color: #ffffff;\n}\n/*----------- item listing area stop ------------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdyb3VwLWl0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsOENBQUE7QUFHQTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0o7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtKO0FBSEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU9KO0FBTEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVFKO0FBTkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTSjtBQVBBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBVUo7QUFSQTtFQUNJLGNBQUE7QUFXSjtBQVRBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQVlKO0FBVkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBYUo7QUFUQTtFQUNRLFlBQUE7RUFDSixrQkFBQTtFQUNBLFNBQUE7QUFZSjtBQVRBO0VBQ0ksZ0JBQUE7QUFZSjtBQVZBO0VBQ0ksaUJBQUE7QUFhSjtBQVhBO0VBQ0kseUJBQUE7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Q0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUEwQ0o7QUF4Q0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTJDSjtBQXpDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBNENKO0FBMUNBO0VBQ0ksZUFBQTtBQTZDSjtBQTNDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUE4Q0o7QUE1Q0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQStDSjtBQTdDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZ0RKO0FBOUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBaURKO0FBL0NBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBa0RKO0FBaERBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQW1ESjtBQWpEQTtFQUNJLGNBQUE7QUFvREo7QUFsREEsa0RBQUEiLCJmaWxlIjoiZ3JvdXAtaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyotLS0tLSBwcm9kdWN0IGRldGFpbHMgYXJlYSBjc3Mgc3RhcnQgLS0tLS0tKi9cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRlZTg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IGgxIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwIDAgMDtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggaDEgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IGgzIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMxMzEwMzg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggaDMgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggaDQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjgyODI4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5wcm9kdWN0X2RldGFpbHNfYXJlYSAucHJvZHVjdF9kZXRhaWxzX2NvbnRhaW4gLmNvbnRhaW5fYm94IGg0IHN0cm9uZyB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMTMxMDM3O1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCBoNSB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyNjIyNjI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggcCBhIHtcbiAgY29sb3I6ICMyNjIyNjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCBwIGE6aG92ZXIge1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLnByb2R1Y3RfZGV0YWlsc19hcmVhIC5wcm9kdWN0X2RldGFpbHNfY29udGFpbiAuY29udGFpbl9ib3ggLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzI2MjI2MjtcbiAgYm9yZGVyLWNvbG9yOiAjMjYyMjYyO1xufVxuXG4ucHJvZHVjdF9kZXRhaWxzX2FyZWEgLnByb2R1Y3RfZGV0YWlsc19jb250YWluIC5jb250YWluX2JveCAuYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWQxYzI0O1xuICBib3JkZXItY29sb3I6ICNlZDFjMjQ7XG59XG5cbiNleHpvb20ge1xuICB3aWR0aDogMzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjUlO1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGJhY2tncm91bmQ6ICNmN2Y1ZmY7XG4gIGNvbG9yOiAjMzQzNDNhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZWQxYzI0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbl9ib3gge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb25fYm94Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uX2JveCAubnVtYmVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNlZDFjMjQ7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uX2JveCBoMyB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyODI4Mjg7XG4gIG1hcmdpbjogMCAwIDA7XG59XG5cbi5wcm9kdWN0X2Rlc2NyaXB0aW9uX2FyZWEgLnByb2R1Y3RfZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uX2JveCBoMyBzdHJvbmcge1xuICBjb2xvcjogIzEzMTAzNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb25fYm94IHVsIHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbl9ib3ggdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4ucHJvZHVjdF9kZXNjcmlwdGlvbl9hcmVhIC5wcm9kdWN0X2Rlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbl9ib3ggdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb25fYXJlYSAucHJvZHVjdF9kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb25fYm94IHVsIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SBXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGNvbG9yOiAjZWQxYzI0O1xufVxuXG4vKi0tLS0tIHByb2R1Y3QgZGV0YWlscyBhcmVhIGNzcyBzdG9wIC0tLS0tLSovXG4vKi0tLS0tLS0tLSBwcm9kdWN0IGxpc3RpbmcgY3NzIHN0YXJ0IC0tLS0tLS0tLSovXG4ucHJvZHVjdF9ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdF9ib3ggLmltYWdlX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOWM5Yzk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0X2JveCAuaW1hZ2VfYm94IGltZyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvYmplY3QtZml0OiBub25lO1xufVxuXG4ucHJvZHVjdF9ib3g6aG92ZXIgLmltYWdlX2JveCBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ucHJvZHVjdF9ib3ggLmNvbnRhaW5fYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5wcm9kdWN0X2JveCAuY29udGFpbl9ib3ggYS5saW5rIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4ucHJvZHVjdF9ib3ggLmNvbnRhaW5fYm94IGEubGluazpob3ZlciB7XG4gIGNvbG9yOiAjMjYyMjYyO1xufVxuXG4ucHJvZHVjdF9ib3ggLmNvbnRhaW5fYm94IGg0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2VkMWMyNDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ucHJvZHVjdF9ib3ggLmNvbnRhaW5fYm94IGgzIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzI2MjI2MjtcbiAgbWFyZ2luOiAzcHggMCAwO1xufVxuXG4ucHJvZHVjdF9ib3ggLmJ0biB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMThweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wcm9kdWN0IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0gaXRlbSBsaXN0aW5nIGFyZWEgc3RhcnQgLS0tLS0tLS0tLS0tKi9cbi5pdGVtX2xpc3RpbmdfbWFpbl9hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLml0ZW1fYm94IHtcbiAgbWluLWhlaWdodDogMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNzVweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luOiAwIDAgMzBweDtcbn1cblxuLml0ZW1fYm94Omxhc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCAwO1xufVxuXG4uaXRlbV9ib3g6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDIwMSwgMjAxLCAyMDEsIDAuNyk7XG59XG5cbi5pdGVtX2JveCAuaW1nX2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbV9ib3ggLmltZ19ib3ggaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaXRlbV9ib3ggLmltZ19ib3ggLnNvbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNHB4IDRweDtcbiAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgY29sb3I6ICMwMDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLml0ZW1fYm94IGgzIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzI2MjI2Mjtcbn1cblxuLml0ZW1fYm94IGgzIC5wcmljZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5pdGVtX2JveCBoMyAucHJpY2UgYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLml0ZW1fYm94IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMCAwIDVweDtcbn1cblxuLml0ZW1fYm94IGg0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwIDAgMDtcbn1cblxuLml0ZW1fYm94IC5udW1iZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogM3B4IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbV9ib3ggLm51bWJlciBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI2MjI2MjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLml0ZW1fYm94IC5udW1iZXIgcCB7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwIDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLml0ZW1fYm94IC5udW1iZXI6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMyNjIyNjI7XG4gIGJhY2tncm91bmQ6ICMyNjIyNjI7XG59XG5cbi5pdGVtX2JveCAubnVtYmVyOmhvdmVyIGksIC5pdGVtX2JveCAubnVtYmVyOmhvdmVyIHAge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLyotLS0tLS0tLS0tLSBpdGVtIGxpc3RpbmcgYXJlYSBzdG9wIC0tLS0tLS0tLS0tLSovIl19 */");

/***/ }),

/***/ "oFq3":
/*!*************************************************!*\
  !*** ./src/app/group-items/group-items.page.ts ***!
  \*************************************************/
/*! exports provided: GroupItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupItemsPage", function() { return GroupItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_group_items_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./group-items.page.html */ "eqCX");
/* harmony import */ var _group_items_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-items.page.scss */ "l0Nq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");













let GroupItemsPage = class GroupItemsPage {
    constructor(modalService, alertController, formBuilder, http, loadingController, storage, router, route) {
        this.modalService = modalService;
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
            // this.time_count();
            //console.log(countDownDate);
            yield this.storage.create().then(res => {
                //this.getUserDetails();
            });
            this.route.queryParams.subscribe(params => {
                if (params) {
                    //let queryParams = params;
                    this.idauctions = params.idauctions;
                    ;
                    //console.log(this.idauctions);
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
            this.getGroupItem(this.idauctions);
            this.getGroup(this.idauctions);
            this.getMaxbid();
        });
    }
    getGroupItem(id) {
        //this.loadingShow();
        let formData = new FormData;
        formData.append('group_id', id);
        this.http.post(this.url + 'group-item-get', formData).subscribe((res) => {
            if (res.status) {
                //this.loadingHide();
                // let countDownDate1 = new Date("Jun 10, 2021 22:05").getTime();
                // this.time_count(countDownDate1);
                console.log(res);
                this.product_deltail = res.response_data;
            }
            else {
                //this.loadingHide();
                this.presentAlert('Error!', '', 'Server error, please try again later');
            }
        }, err => {
            //this.loadingHide();
        });
    }
    getGroup(id) {
        // this.loadingShow();
        let formData = new FormData;
        formData.append('group_id', id);
        this.http.post(this.url + 'group-details', formData).subscribe((res) => {
            if (res.status) {
                // this.loadingHide();
                // console.log(res);
                this.group_details = res.response_data;
            }
            else {
                //this.loadingHide();
                this.presentAlert('Error!', '', 'Server error, please try again later');
            }
        }, err => {
            //this.loadingHide();
        });
    }
    getMaxbid() {
        // this.loadingShow();
        let formData = new FormData;
        formData.append('product_id', '13');
        this.http.post(this.url + 'max-bid-by-product', formData).subscribe((res) => {
            if (res.status) {
                // this.loadingHide();
                // console.log(res);
                this.maxbidprice = res.response_data;
            }
            else {
                //this.loadingHide();
            }
        }, err => {
            //this.loadingHide();
        });
    }
    time_count(countDownDate1, idno) {
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
            document.getElementById("demo" + idno).innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                //return "EXPIRED";
                document.getElementById("demo" + idno).innerHTML = "EXPIRED";
            }
        }, 1000);
        //return idno;
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
                console.log(res);
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
};
GroupItemsPage.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
GroupItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group-items',
        template: _raw_loader_group_items_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_items_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GroupItemsPage);



/***/ })

}]);
//# sourceMappingURL=group-items-group-items-module-es2015.js.map