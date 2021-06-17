(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers */ "G/4p");




const routes = [
    {
        path: '',
        data: {
            title: 'Admin'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["AdminDefaultLayoutComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-dashboard-admin-dashboard-module */ "admin-admin-dashboard-admin-dashboard-module").then(__webpack_require__.bind(null, /*! ../admin/admin-dashboard/admin-dashboard.module */ "8KgI")).then(m => m.AdminDashboardPageModule)
            },
            {
                path: 'product-add',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-product-add-admin-product-add-module */ "admin-admin-product-add-admin-product-add-module").then(__webpack_require__.bind(null, /*! ../admin/admin-product-add/admin-product-add.module */ "9Qk/")).then(m => m.AdminProductAddPageModule)
            },
            {
                path: 'product-update/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-product-update-admin-product-update-module */ "admin-admin-product-update-admin-product-update-module").then(__webpack_require__.bind(null, /*! ../admin/admin-product-update/admin-product-update.module */ "EQkK")).then(m => m.AdminProductUpdatePageModule)
            },
            {
                path: 'product-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-product-list-admin-product-list-module */ "admin-admin-product-list-admin-product-list-module").then(__webpack_require__.bind(null, /*! ../admin/admin-product-list/admin-product-list.module */ "JkdR")).then(m => m.AdminProductListPageModule)
            },
            {
                path: 'category-add',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-category-add-seller-category-add-module */ "admin-seller-category-add-seller-category-add-module").then(__webpack_require__.bind(null, /*! ../admin/seller-category-add/seller-category-add.module */ "yiAy")).then(m => m.SellerCategoryAddPageModule)
            },
            {
                path: 'category-update/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-category-update-seller-category-update-module */ "admin-seller-category-update-seller-category-update-module").then(__webpack_require__.bind(null, /*! ../admin/seller-category-update/seller-category-update.module */ "NSI4")).then(m => m.SellerCategoryUpdatePageModule)
            },
            {
                path: 'category-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-category-list-seller-category-list-module */ "admin-seller-category-list-seller-category-list-module").then(__webpack_require__.bind(null, /*! ../admin/seller-category-list/seller-category-list.module */ "UpNt")).then(m => m.SellerCategoryListPageModule)
            },
            {
                path: 'sub-category-add',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-subcategory-add-seller-subcategory-add-module */ "admin-seller-subcategory-add-seller-subcategory-add-module").then(__webpack_require__.bind(null, /*! ../admin/seller-subcategory-add/seller-subcategory-add.module */ "i6WZ")).then(m => m.SellerSubcategoryAddPageModule)
            },
            {
                path: 'sub-category-update/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-subcategory-update-seller-subcategory-update-module */ "admin-seller-subcategory-update-seller-subcategory-update-module").then(__webpack_require__.bind(null, /*! ../admin/seller-subcategory-update/seller-subcategory-update.module */ "ogmf")).then(m => m.SellerSubcategoryUpdatePageModule)
            },
            {
                path: 'sub-category-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-subcategory-list-seller-subcategory-list-module */ "admin-seller-subcategory-list-seller-subcategory-list-module").then(__webpack_require__.bind(null, /*! ../admin/seller-subcategory-list/seller-subcategory-list.module */ "VR+/")).then(m => m.SellerSubcategoryListPageModule)
            },
            {
                path: 'group-add',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-group-add-seller-group-add-module */ "admin-seller-group-add-seller-group-add-module").then(__webpack_require__.bind(null, /*! ../admin/seller-group-add/seller-group-add.module */ "vJRn")).then(m => m.SellerGroupAddPageModule)
            },
            {
                path: 'group-edit/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-group-add-seller-group-add-module */ "admin-seller-group-add-seller-group-add-module").then(__webpack_require__.bind(null, /*! ../admin/seller-group-add/seller-group-add.module */ "vJRn")).then(m => m.SellerGroupAddPageModule)
            },
            {
                path: 'group-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-group-list-seller-group-list-module */ "admin-seller-group-list-seller-group-list-module").then(__webpack_require__.bind(null, /*! ../admin/seller-group-list/seller-group-list.module */ "DD8F")).then(m => m.SellerGroupListPageModule)
            },
            {
                path: 'group-details/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-group-details-seller-group-details-module */ "admin-seller-group-details-seller-group-details-module").then(__webpack_require__.bind(null, /*! ../admin/seller-group-details/seller-group-details.module */ "NzRz")).then(m => m.SellerGroupDetailsPageModule)
            },
            {
                path: 'product-add-group',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-product-group-add-seller-product-group-add-module */ "admin-seller-product-group-add-seller-product-group-add-module").then(__webpack_require__.bind(null, /*! ../admin/seller-product-group-add/seller-product-group-add.module */ "tSim")).then(m => m.SellerProductGroupAddPageModule)
            },
            {
                path: 'buyer-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-buyer-list-user-list-module */ "admin-buyer-list-user-list-module").then(__webpack_require__.bind(null, /*! ../admin/buyer-list/user-list.module */ "cpkS")).then(m => m.UserListPageModule)
            },
            {
                path: 'buyer-update12/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-buyer-update-seller-add-module */ "admin-buyer-update-seller-add-module").then(__webpack_require__.bind(null, /*! ../admin/buyer-update/seller-add.module */ "NeOZ")).then(m => m.SellerAddPageModule)
            },
            {
                path: 'buyer-update/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-buyer-profile-seller-profile-module */ "admin-buyer-profile-seller-profile-module").then(__webpack_require__.bind(null, /*! ../admin/buyer-profile/seller-profile.module */ "vcgQ")).then(m => m.SellerProfilePageModule)
            },
            {
                path: 'seller-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-list-user-list-module */ "admin-seller-list-user-list-module").then(__webpack_require__.bind(null, /*! ../admin/seller-list/user-list.module */ "1bvg")).then(m => m.UserListPageModule)
            },
            {
                path: 'seller-update11/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-update-seller-add-module */ "admin-seller-update-seller-add-module").then(__webpack_require__.bind(null, /*! ../admin/seller-update/seller-add.module */ "Y39Q")).then(m => m.SellerAddPageModule)
            },
            {
                path: 'seller-update/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-seller-profile-seller-profile-module */ "admin-seller-profile-seller-profile-module").then(__webpack_require__.bind(null, /*! ../admin/seller-profile/seller-profile.module */ "KIpT")).then(m => m.SellerProfilePageModule)
            },
            {
                path: 'faq-add',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-faq-add-faq-add-module */ "admin-faq-add-faq-add-module").then(__webpack_require__.bind(null, /*! ../admin/faq-add/faq-add.module */ "A0KT")).then(m => m.FaqAddPageModule)
            },
            {
                path: 'faq-update/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-faq-update-faq-add-module */ "admin-faq-update-faq-add-module").then(__webpack_require__.bind(null, /*! ../admin/faq-update/faq-add.module */ "dAln")).then(m => m.FaqAddPageModule)
            },
            {
                path: 'faq-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-faq-list-faq-list-module */ "admin-faq-list-faq-list-module").then(__webpack_require__.bind(null, /*! ../admin/faq-list/faq-list.module */ "Ambs")).then(m => m.FaqListPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-settings-settings-module */ "admin-settings-settings-module").then(__webpack_require__.bind(null, /*! ../admin/settings/settings.module */ "zwdw")).then(m => m.SettingsPageModule)
            },
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _include_include_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../include/include.module */ "+TEy");






let AdminModule = class AdminModule {
};
AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
            _include_include_module__WEBPACK_IMPORTED_MODULE_5__["IncludeModule"],
        ],
    })
], AdminModule);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map