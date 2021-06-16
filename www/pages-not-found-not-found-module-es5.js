(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-not-found-not-found-module"], {
    /***/
    "CsCB":
    /*!***************************************************!*\
      !*** ./src/app/pages/not-found/not-found.page.ts ***!
      \***************************************************/

    /*! exports provided: NotFoundPage */

    /***/
    function CsCB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPage", function () {
        return NotFoundPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-found.page.html */
      "SHFN");
      /* harmony import */


      var _not_found_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found.page.scss */
      "XEu9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundPage = /*#__PURE__*/function () {
        function NotFoundPage() {
          _classCallCheck(this, NotFoundPage);
        }

        _createClass(NotFoundPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundPage;
      }();

      NotFoundPage.ctorParameters = function () {
        return [];
      };

      NotFoundPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotFoundPage);
      /***/
    },

    /***/
    "SHFN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function SHFN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <app-header></app-header>\n  <div class=\"page-wrap d-flex flex-row align-items-center m-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 text-center\">\n                <span class=\"display-1 d-block\">404</span>\n                <div class=\"mb-4 lead\">The page you are looking for was not found.</div>\n                <a [routerLink]=\"['/']\" class=\"btn btn-primary\">Back to Home</a>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>\n</ion-content>\n";
      /***/
    },

    /***/
    "XEu9":
    /*!*****************************************************!*\
      !*** ./src/app/pages/not-found/not-found.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XEu9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "jSwP":
    /*!*****************************************************!*\
      !*** ./src/app/pages/not-found/not-found.module.ts ***!
      \*****************************************************/

    /*! exports provided: NotFoundPageModule */

    /***/
    function jSwP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPageModule", function () {
        return NotFoundPageModule;
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


      var src_app_include_include_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/include/include.module */
      "+TEy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./not-found-routing.module */
      "kzfG");
      /* harmony import */


      var _not_found_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./not-found.page */
      "CsCB");

      var NotFoundPageModule = function NotFoundPageModule() {
        _classCallCheck(this, NotFoundPageModule);
      };

      NotFoundPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundPageRoutingModule"], src_app_include_include_module__WEBPACK_IMPORTED_MODULE_2__["IncludeModule"]],
        declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_7__["NotFoundPage"]]
      })], NotFoundPageModule);
      /***/
    },

    /***/
    "kzfG":
    /*!*************************************************************!*\
      !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: NotFoundPageRoutingModule */

    /***/
    function kzfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPageRoutingModule", function () {
        return NotFoundPageRoutingModule;
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


      var _not_found_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./not-found.page */
      "CsCB");

      var routes = [{
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_3__["NotFoundPage"]
      }];

      var NotFoundPageRoutingModule = function NotFoundPageRoutingModule() {
        _classCallCheck(this, NotFoundPageRoutingModule);
      };

      NotFoundPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotFoundPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-not-found-not-found-module-es5.js.map