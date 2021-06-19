(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-live-auctions-live-auctions-module"],{

/***/ "0EHv":
/*!*************************************************************!*\
  !*** ./src/app/pages/live-auctions/live-auctions.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*----- product search css start ------*/\n.product_search_area {\n  padding: 35px 0px;\n  background: #f7f6ff;\n}\n.product_search_area .search_area .form-group {\n  width: 316px;\n  display: inline-block;\n  position: relative;\n  margin: 0 2px 0 0;\n}\n.product_search_area .search_area .form-control {\n  width: 100%;\n  height: 48px !important;\n  border: 1px solid #c9c9c9;\n  box-sizing: border-box;\n  border-radius: 5px;\n  outline: none;\n  padding-left: 40px;\n  font-size: 15px;\n}\n.product_search_area .search_area .form-group .icon {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  left: 18px;\n}\n.product_search_area .search_area .btn {\n  padding: 11px 30px;\n}\n.product_search_area .sort_by {\n  width: 117px;\n  position: relative;\n}\n.product_search_area .sort_by select.form-control {\n  width: 100%;\n  height: 48px !important;\n  border-radius: 5px;\n  border: 1px solid #c9c9c9;\n  font-size: 15px;\n  cursor: pointer;\n  outline: none;\n}\n.product_search_area .sort_by .icon {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.product_search_area .sort_by:after {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  right: 28px;\n  width: 1px;\n  height: 55%;\n  background: #c9c9c9;\n  box-sizing: border-box;\n}\n/*----- product search css stop ------*/\n.product_search_area h1 {\n  color: #262262;\n  font-size: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  line-height: normal;\n}\n.product_search_area ul.pagger_link {\n  padding: 0 0;\n  margin: 0 0;\n}\n.product_search_area ul.pagger_link li {\n  padding: 0 0 0 0;\n  margin: 0 0 0 0;\n  list-style: none;\n  display: inline-block;\n  position: relative;\n  padding-right: 8px;\n  margin-right: 8px;\n}\n.product_search_area ul.pagger_link li:after {\n  content: \"\";\n  font-family: FontAwesome;\n  position: absolute;\n  top: 1px;\n  right: -5px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000;\n}\n.product_search_area ul.pagger_link li:last-child {\n  padding-right: 0px;\n  margin-right: 0px;\n}\n.product_search_area ul.pagger_link li:last-child:after {\n  display: none;\n}\n.product_search_area ul.pagger_link li a {\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.product_search_area ul.pagger_link li a:hover {\n  color: #ed1c24;\n}\n.product_search_area ul.pagger_link li.active {\n  color: #ed1c24;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-transform: capitalize;\n}\n.product_box {\n  border: 1px solid #c9c9c9;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 15px 15px;\n  position: relative;\n}\n.product_box .image_box {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #c9c9c9;\n  overflow: hidden;\n}\n.product_box .image_box img {\n  transition: 0.5s;\n  -o-object-fit: none;\n     object-fit: none;\n}\n.product_box:hover .image_box img {\n  transform: scale(1.1);\n}\n.product_box .contain_box {\n  text-align: center;\n  padding: 20px 0;\n}\n.product_box .contain_box a.link {\n  color: #000000;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.5s;\n  line-height: 24px;\n  display: block;\n  margin-bottom: 4px;\n}\n.product_box .contain_box a.link:hover {\n  color: #262262;\n}\n.product_box .contain_box h4 {\n  font-size: 13px;\n  font-weight: 500;\n  color: #ed1c24;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.product_box .contain_box h3 {\n  line-height: normal;\n  font-size: 16px;\n  font-weight: 600;\n  color: #262262;\n  margin: 3px 0 0;\n}\n.product_box .btn {\n  content: \"\";\n  position: absolute;\n  bottom: -18px;\n  left: 0;\n  right: 0;\n}\n.product {\n  padding-bottom: 20px;\n}\n.product_listing_area .product {\n  margin-bottom: 20px;\n}\n.pagination_area {\n  text-align: center;\n}\n.pagination_area p {\n  display: inline-block;\n  margin: 0 10px 0 0;\n  color: #393939;\n  font-size: 15px;\n  font-weight: 400;\n}\n.pagination_area ul.pagination {\n  margin: 0 20px 0 0;\n  padding: 0 0;\n  display: inline-block;\n}\n.pagination_area ul.pagination li {\n  display: inline-block;\n  margin-right: 2px;\n  list-style: none;\n}\n.pagination_area ul.pagination li a {\n  display: inline-block;\n  color: #393939;\n  border: 1px solid #393939;\n  box-sizing: border-box;\n  border-radius: 5px;\n  background: #fff;\n  padding: 2px 11px;\n  font-size: 14px;\n  font-weight: 600;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.pagination_area ul.pagination li a:hover {\n  border-color: #262262;\n  background: #262262;\n  color: #fff;\n}\n.pagination_area ul.pagination li.active a {\n  border-color: #262262;\n  background: #262262;\n  color: #fff;\n}\n.pagination_area .go_page {\n  display: inline-block;\n}\n.pagination_area .go_page .form-control {\n  width: 35px;\n  border: 1px solid #393939;\n  height: 28px !important;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 0 2px;\n  text-align: center;\n  outline: none;\n  display: inline-block;\n}\n.pagination_area .go_page p {\n  padding: 0 0;\n  margin: 0 6px;\n  font-size: 15px;\n  color: #393939;\n  font-weight: 500;\n  display: inline-block;\n}\n.pagination_area .go_page .btn {\n  font-size: 13px;\n  padding: 3px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXZlLWF1Y3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsd0NBQUE7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR0o7QUFEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSUo7QUFGQTtFQUNJLGtCQUFBO0FBS0o7QUFIQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSkE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBT0o7QUFMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBUUo7QUFOQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBU0o7QUFQQSx1Q0FBQTtBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNKO0FBUEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVVKO0FBUkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBV0o7QUFUQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBWUo7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFhSjtBQVhBO0VBQ0ksYUFBQTtBQWNKO0FBWkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWVKO0FBYkE7RUFDSSxjQUFBO0FBZ0JKO0FBZEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQWlCSjtBQWJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWdCSjtBQWRBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFpQko7QUFmQTtFQUlJLGdCQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBQWtCSjtBQWhCQTtFQUlJLHFCQUFBO0FBbUJKO0FBakJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBb0JKO0FBbEJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBSUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXFCSjtBQW5CQTtFQUNJLGNBQUE7QUFzQko7QUFwQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXVCSjtBQXJCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF3Qko7QUF0QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUF5Qko7QUF2QkE7RUFDSSxvQkFBQTtBQTBCSjtBQXZCQTtFQUNJLG1CQUFBO0FBMEJKO0FBeEJBO0VBQ0ksa0JBQUE7QUEyQko7QUF6QkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTRCSjtBQTFCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBNkJKO0FBM0JBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBOEJKO0FBNUJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQStCSjtBQTdCQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBZ0NKO0FBOUJBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFpQ0o7QUEvQkE7RUFDSSxxQkFBQTtBQWtDSjtBQWhDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBbUNKO0FBakNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFvQ0o7QUFsQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFxQ0oiLCJmaWxlIjoibGl2ZS1hdWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKi0tLS0tIHByb2R1Y3Qgc2VhcmNoIGNzcyBzdGFydCAtLS0tLS0qL1xuLnByb2R1Y3Rfc2VhcmNoX2FyZWEge1xuICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjZmZjtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNlYXJjaF9hcmVhIC5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDMxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDJweCAwIDA7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zZWFyY2hfYXJlYSAuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc2VhcmNoX2FyZWEgLmZvcm0tZ3JvdXAgLmljb24ge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgbGVmdDogMThweDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgLnNlYXJjaF9hcmVhIC5idG4ge1xuICBwYWRkaW5nOiAxMXB4IDMwcHg7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zb3J0X2J5IHtcbiAgd2lkdGg6IDExN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zb3J0X2J5IHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIC5zb3J0X2J5IC5pY29uIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSAuc29ydF9ieTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogMjhweDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA1NSU7XG4gIGJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qLS0tLS0gcHJvZHVjdCBzZWFyY2ggY3NzIHN0b3AgLS0tLS0tKi9cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIGgxIHtcbiAgY29sb3I6ICMyNjIyNjI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsge1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMCAwO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayBsaSB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICByaWdodDogLTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsgbGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvZHVjdF9zZWFyY2hfYXJlYSB1bC5wYWdnZXJfbGluayBsaSBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wcm9kdWN0X3NlYXJjaF9hcmVhIHVsLnBhZ2dlcl9saW5rIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2VkMWMyNDtcbn1cblxuLnByb2R1Y3Rfc2VhcmNoX2FyZWEgdWwucGFnZ2VyX2xpbmsgbGkuYWN0aXZlIHtcbiAgY29sb3I6ICNlZDFjMjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2R1Y3RfYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2R1Y3RfYm94IC5pbWFnZV9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzljOWM5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVjdF9ib3ggLmltYWdlX2JveCBpbWcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb2JqZWN0LWZpdDogbm9uZTtcbn1cblxuLnByb2R1Y3RfYm94OmhvdmVyIC5pbWFnZV9ib3ggaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4ucHJvZHVjdF9ib3ggLmNvbnRhaW5fYm94IGEubGluayB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCBhLmxpbms6aG92ZXIge1xuICBjb2xvcjogIzI2MjI2Mjtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCBoNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNlZDFjMjQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCBoMyB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyNjIyNjI7XG4gIG1hcmdpbjogM3B4IDAgMDtcbn1cblxuLnByb2R1Y3RfYm94IC5idG4ge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTE4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucHJvZHVjdCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvZHVjdF9saXN0aW5nX2FyZWEgLnByb2R1Y3Qge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucGFnaW5hdGlvbl9hcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFnaW5hdGlvbl9hcmVhIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgY29sb3I6ICMzOTM5Mzk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBhZ2luYXRpb25fYXJlYSB1bC5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICBwYWRkaW5nOiAwIDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBhZ2luYXRpb25fYXJlYSB1bC5wYWdpbmF0aW9uIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnBhZ2luYXRpb25fYXJlYSB1bC5wYWdpbmF0aW9uIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDJweCAxMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucGFnaW5hdGlvbl9hcmVhIHVsLnBhZ2luYXRpb24gbGkgYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzI2MjI2MjtcbiAgYmFja2dyb3VuZDogIzI2MjI2MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdpbmF0aW9uX2FyZWEgdWwucGFnaW5hdGlvbiBsaS5hY3RpdmUgYSB7XG4gIGJvcmRlci1jb2xvcjogIzI2MjI2MjtcbiAgYmFja2dyb3VuZDogIzI2MjI2MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdpbmF0aW9uX2FyZWEgLmdvX3BhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wYWdpbmF0aW9uX2FyZWEgLmdvX3BhZ2UgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICBoZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBhZ2luYXRpb25fYXJlYSAuZ29fcGFnZSBwIHtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDAgNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wYWdpbmF0aW9uX2FyZWEgLmdvX3BhZ2UgLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "3Laz":
/*!*********************************************************************!*\
  !*** ./src/app/pages/live-auctions/live-auctions-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LiveAuctionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAuctionsPageRoutingModule", function() { return LiveAuctionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _live_auctions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./live-auctions.page */ "iS+6");




const routes = [
    {
        path: '',
        component: _live_auctions_page__WEBPACK_IMPORTED_MODULE_3__["LiveAuctionsPage"]
    }
];
let LiveAuctionsPageRoutingModule = class LiveAuctionsPageRoutingModule {
};
LiveAuctionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LiveAuctionsPageRoutingModule);



/***/ }),

/***/ "UGf8":
/*!*************************************************************!*\
  !*** ./src/app/pages/live-auctions/live-auctions.module.ts ***!
  \*************************************************************/
/*! exports provided: LiveAuctionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAuctionsPageModule", function() { return LiveAuctionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _live_auctions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live-auctions-routing.module */ "3Laz");
/* harmony import */ var _live_auctions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live-auctions.page */ "iS+6");
/* harmony import */ var _include_include_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../include/include.module */ "+TEy");








let LiveAuctionsPageModule = class LiveAuctionsPageModule {
};
LiveAuctionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _live_auctions_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiveAuctionsPageRoutingModule"],
            _include_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"]
        ],
        declarations: [_live_auctions_page__WEBPACK_IMPORTED_MODULE_6__["LiveAuctionsPage"]]
    })
], LiveAuctionsPageModule);



/***/ }),

/***/ "V39J":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/live-auctions/live-auctions.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <app-header></app-header>\n  <section class=\"product_search_area\">\n    <div class=\"container\">\n      <div class=\"d-flex justify-content-between\">\n        <div class=\"search_area\">\n          <div class=\"form-group\">\n            <div class=\"icon\"><img src=\"assets/images/location-icon.png\" alt=\"location icon\" title=\"\"></div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Choose Location\">\n          </div>\n          <button class=\"btn btn-success\">filter</button>\n          <button class=\"btn btn-primary\">reset</button>\n        </div>\n        <div class=\"sort_by\">\n          <select class=\"form-control\">\n            <option>Sort by</option>\n          </select>\n          <div class=\"icon\"><img src=\"assets/images/sape3.png\" alt=\"sape\" title=\"\"></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"main_area product_listing_area\">\n    <div class=\"container\">\n\n      <!------ pagination area start ----->\n      <!-- <div class=\"pagination_area text-right mb-5\">\n        <ul class=\"pagination\">\n          <li><a href=\"#\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a></li>\n          <li class=\"active\"><a href=\"#\">1</a></li>\n          <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n        <div class=\"go_page\">\n          <input type=\"text\" class=\"form-control\" value=\"\">\n          <p>/ 10</p>\n          <button class=\"btn btn-primary\">go</button>\n        </div>\n      </div> -->\n      <!------ pagination area stop ----->\n\n      <div class=\"row row-7\">\n\n        <div  *ngFor=\"let p of pList\" class=\"col-lg-3\" >\n          <div class=\"product\">\n            <div class=\"product_box\">\n              <div class=\"image_box\">\n                <a [routerLink]=\"['/auction-details/'+ p.id]\">\n                  <img src=\"{{image_path + p.category_group_image}}\" alt=\"product\" title=\"\">\n                  <!-- <img src=\"http://18.189.157.72/v1/public/upload/1622030961.jpg\"> -->\n                </a>\n              </div>\n              <div class=\"contain_box\">\n                <h4>Auction. {{p.auction_cg_number}}</h4>\n                <a [routerLink]=\"['/auction-details/'+ p.id]\" class=\"link\">{{p.category_group_name}}</a>\n                <!-- <h3>Max Bid: {{p.product_bid_starting_price}}</h3> -->\n                <p class=\"auctionLocation\"><i class=\"zmdi zmdi-pin\"></i>\n                                          {{p.location}} \n                                        </p>\n                                        <p class=\"auctionEnd\" ><!-- <i class=\"zmdi zmdi-timer\"></i> --> <strong>Auction status :</strong><strong id=\"demo{{p.id}}\">{{time_count(p.end_date | date:'MMM dd, yyyy'  + '     ' + p.end_time,p.id)}}</strong> </p>\n                                        <p class=\"auctionEnd\"><strong>End Time :</strong>{{p.end_date | date:'MMM dd, yyyy'  + '     ' + p.end_time}} </p>\n                <!-- <button [routerLink]=\"['/product-details/'+ p.id]\" class=\"btn btn-bid\">bid now <i class=\"zmdi zmdi-plus-circle\"></i></button> -->\n              </div>\n            </div>\n          </div>\n        </div>\n       \n\n        \n\n      </div>\n\n      <!------ pagination area start ----->\n    <!--   <div class=\"pagination_area mt-5\">\n        <p>Showing 1 to 10 of 120 Auctions</p>\n        <ul class=\"pagination\">\n          <li><a href=\"#\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a></li>\n          <li class=\"active\"><a href=\"#\">1</a></li>\n          \n          <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n        <div class=\"go_page\">\n          <input type=\"text\" class=\"form-control\" value=\"\">\n          <p>/ 10</p>\n          <button class=\"btn btn-primary\">go</button>\n        </div>\n      </div> -->\n      <!------ pagination area stop ----->\n\n    </div>\n  </section>\n\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "iS+6":
/*!***********************************************************!*\
  !*** ./src/app/pages/live-auctions/live-auctions.page.ts ***!
  \***********************************************************/
/*! exports provided: LiveAuctionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAuctionsPage", function() { return LiveAuctionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_live_auctions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./live-auctions.page.html */ "V39J");
/* harmony import */ var _live_auctions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-auctions.page.scss */ "0EHv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












let LiveAuctionsPage = class LiveAuctionsPage {
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
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.productList();
        // this.lol();
    }
    productList() {
        let formData = new FormData;
        formData.append('', '');
        this.http.post(this.url + 'group-all-list', formData).subscribe((res) => {
            // console.log(res);
            if (res && res.status) {
                this.pList = res.response_data;
            }
            else {
                this.pList = null;
            }
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
    time_count(countDownDate1, id) {
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
            document.getElementById("demo" + id).innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo" + id).innerHTML = "Expired";
            }
        }, 1000);
    }
};
LiveAuctionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
LiveAuctionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-live-auctions',
        template: _raw_loader_live_auctions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_live_auctions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LiveAuctionsPage);



/***/ })

}]);
//# sourceMappingURL=pages-live-auctions-live-auctions-module-es2015.js.map