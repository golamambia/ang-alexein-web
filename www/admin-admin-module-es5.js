(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "0Em7":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminRoutingModule */

    /***/
    function Em7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
        return AdminRoutingModule;
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


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../containers */
      "G/4p");

      var routes = [{
        path: '',
        data: {
          title: 'Admin'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["AdminDefaultLayoutComponent"],
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'dashboard'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | admin-admin-dashboard-admin-dashboard-module */
            "admin-admin-dashboard-admin-dashboard-module").then(__webpack_require__.bind(null,
            /*! ../admin/admin-dashboard/admin-dashboard.module */
            "8KgI")).then(function (m) {
              return m.AdminDashboardPageModule;
            });
          }
        }, {
          path: 'product-add',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | admin-admin-product-add-admin-product-add-module */
            "admin-admin-product-add-admin-product-add-module").then(__webpack_require__.bind(null,
            /*! ../admin/admin-product-add/admin-product-add.module */
            "9Qk/")).then(function (m) {
              return m.AdminProductAddPageModule;
            });
          }
        }, {
          path: 'product-update/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | admin-admin-product-update-admin-product-update-module */
            "admin-admin-product-update-admin-product-update-module").then(__webpack_require__.bind(null,
            /*! ../admin/admin-product-update/admin-product-update.module */
            "EQkK")).then(function (m) {
              return m.AdminProductUpdatePageModule;
            });
          }
        }, {
          path: 'product-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | admin-admin-product-list-admin-product-list-module */
            "admin-admin-product-list-admin-product-list-module").then(__webpack_require__.bind(null,
            /*! ../admin/admin-product-list/admin-product-list.module */
            "JkdR")).then(function (m) {
              return m.AdminProductListPageModule;
            });
          }
        }, {
          path: 'category-add',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-category-add-seller-category-add-module */
            "seller-seller-category-add-seller-category-add-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-category-add/seller-category-add.module */
            "sCVv")).then(function (m) {
              return m.SellerCategoryAddPageModule;
            });
          }
        }, {
          path: 'category-update/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-category-update-seller-category-update-module */
            "seller-seller-category-update-seller-category-update-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-category-update/seller-category-update.module */
            "x6oC")).then(function (m) {
              return m.SellerCategoryUpdatePageModule;
            });
          }
        }, {
          path: 'category-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-category-list-seller-category-list-module */
            "seller-seller-category-list-seller-category-list-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-category-list/seller-category-list.module */
            "k92t")).then(function (m) {
              return m.SellerCategoryListPageModule;
            });
          }
        }, {
          path: 'sub-category-add',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-subcategory-add-seller-subcategory-add-module */
            "seller-seller-subcategory-add-seller-subcategory-add-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-subcategory-add/seller-subcategory-add.module */
            "qlTU")).then(function (m) {
              return m.SellerSubcategoryAddPageModule;
            });
          }
        }, {
          path: 'sub-category-update/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-subcategory-update-seller-subcategory-update-module */
            "seller-seller-subcategory-update-seller-subcategory-update-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-subcategory-update/seller-subcategory-update.module */
            "lVch")).then(function (m) {
              return m.SellerSubcategoryUpdatePageModule;
            });
          }
        }, {
          path: 'sub-category-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-subcategory-list-seller-subcategory-list-module */
            "seller-seller-subcategory-list-seller-subcategory-list-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-subcategory-list/seller-subcategory-list.module */
            "MiwJ")).then(function (m) {
              return m.SellerSubcategoryListPageModule;
            });
          }
        }, {
          path: 'group-add',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-group-add-seller-group-add-module */
            "seller-seller-group-add-seller-group-add-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-group-add/seller-group-add.module */
            "2t8D")).then(function (m) {
              return m.SellerGroupAddPageModule;
            });
          }
        }, {
          path: 'group-edit/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-group-add-seller-group-add-module */
            "seller-seller-group-add-seller-group-add-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-group-add/seller-group-add.module */
            "2t8D")).then(function (m) {
              return m.SellerGroupAddPageModule;
            });
          }
        }, {
          path: 'group-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-group-list-seller-group-list-module */
            "seller-seller-group-list-seller-group-list-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-group-list/seller-group-list.module */
            "0mSw")).then(function (m) {
              return m.SellerGroupListPageModule;
            });
          }
        }, {
          path: 'group-details/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-group-details-seller-group-details-module */
            "seller-seller-group-details-seller-group-details-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-group-details/seller-group-details.module */
            "801O")).then(function (m) {
              return m.SellerGroupDetailsPageModule;
            });
          }
        }, {
          path: 'product-add-group',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-seller-product-group-add-seller-product-group-add-module */
            "seller-seller-product-group-add-seller-product-group-add-module").then(__webpack_require__.bind(null,
            /*! ../seller/seller-product-group-add/seller-product-group-add.module */
            "OElv")).then(function (m) {
              return m.SellerProductGroupAddPageModule;
            });
          }
        }]
      }];

      var AdminRoutingModule = function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      };

      AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminRoutingModule);
      /***/
    },

    /***/
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin-routing.module */
      "0Em7");
      /* harmony import */


      var _include_include_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../include/include.module */
      "+TEy");

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"], _include_include_module__WEBPACK_IMPORTED_MODULE_5__["IncludeModule"]]
      })], AdminModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map