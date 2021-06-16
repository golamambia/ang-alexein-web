(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-dashboard-user-dashboard-module"], {
    /***/
    "Cbeh":
    /*!**************************************************************!*\
      !*** ./src/app/user/user-dashboard/user-dashboard.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function Cbeh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  line-height: 1.2;\n  margin-top: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #262262;\n}\n\n#main {\n  float: left;\n  width: 100%;\n}\n\n#content {\n  padding: 30px;\n}\n\n.page-header {\n  margin: 0 0 30px;\n  padding: 10px 18px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.page-header h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.page-header h1 .icon {\n  width: 30px;\n  height: 30px;\n  background: #ed1c24;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\nhr {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n.whitebg {\n  background: #fff;\n  margin-bottom: 30px;\n}\n\n.well {\n  background: #fff;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  border-radius: 0;\n  border: none;\n  padding: 15px 15px !important;\n  color: #000;\n}\n\n.table th {\n  color: #262262;\n  font-weight: 500;\n}\n\n.table tfoot {\n  background-color: #c6223e;\n  color: #fff;\n  font-weight: 500;\n}\n\n.modal-custome .modal-header {\n  background: #c6223e;\n  border: none;\n  color: #fff;\n}\n\n.modal-custome .modal-header .close {\n  color: #fff;\n  opacity: 1;\n}\n\n.modal-custome .modal-header .modal-title {\n  color: #fff;\n}\n\n@media screen and (min-width: 640px) {\n  .modal-custome .modal-body {\n    padding: 35px 50px;\n  }\n}\n\n.modal-content {\n  border-radius: 0;\n}\n\n.widget-dashboard {\n  padding: 15px 30px;\n  margin: 30px 0;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 5px;\n  min-height: 135px;\n  position: relative;\n}\n\n.widget-dashboard .icon {\n  background: #000;\n  border-radius: 5px;\n  width: 68px;\n  height: 48px;\n  position: absolute;\n  top: -15px;\n  left: 30px;\n}\n\n.widget-dashboard .icon img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.widget-dashboard .top {\n  text-align: right;\n}\n\n.widget-dashboard .top h2 {\n  color: #000;\n  font-weight: 500;\n}\n\n.widget-dashboard .top h5 {\n  color: #000;\n  font-size: 16px;\n  text-transform: none;\n  font-weight: 500;\n  margin: 0 0 5px;\n}\n\n.widget-dashboard.wdred .icon {\n  background: #ed1c24;\n}\n\n.widget-dashboard.wdred h5 {\n  color: #ed1c24;\n}\n\n.widget-dashboard.wdblue .icon {\n  background: #262262;\n}\n\n.widget-dashboard.wdblue h5 {\n  color: #262262;\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  background-color: #262262;\n  border-color: #262262;\n  outline: none;\n}\n\n.pagination > li > a, .pagination > li > span {\n  color: #262262;\n}\n\ndiv.dataTables_wrapper div.dataTables_length select {\n  height: 44px;\n}\n\n#example_wrapper .row {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUQsZ0JBQUE7RUFBaUIsYUFBQTtFQUFjLGlDQUFBO0VBQW1DLGdCQUFBO0VBQWlCLHlCQUFBO0VBQTBCLGNBQUE7QUFPbEs7O0FBTkE7RUFBTSxXQUFBO0VBQVksV0FBQTtBQVdsQjs7QUFWQTtFQUFTLGFBQUE7QUFjVDs7QUFiQTtFQUFhLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSx1Q0FBQTtFQUF3QyxnQkFBQTtFQUFpQixrQkFBQTtBQXNCdkg7O0FBckJBO0VBQWdCLFNBQUE7RUFBVSxVQUFBO0VBQVcsZUFBQTtFQUFnQixpQkFBQTtBQTRCckQ7O0FBM0JBO0VBQXNCLFdBQUE7RUFBWSxZQUFBO0VBQWEsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsV0FBQTtFQUFZLGVBQUE7RUFBZ0Isa0JBQUE7QUF1Q3ZKOztBQXBDQTtFQUFHLG1CQUFBO0VBQW9CLGdCQUFBO0FBeUN2Qjs7QUF4Q0E7RUFBUyxnQkFBQTtFQUFpQixtQkFBQTtBQTZDMUI7O0FBNUNBO0VBQU0sZ0JBQUE7RUFBaUIsc0NBQUE7RUFBdUMsZ0JBQUE7RUFBaUIsWUFBQTtFQUFZLDZCQUFBO0VBQThCLFdBQUE7QUFxRHpIOztBQW5EQTtFQUFVLGNBQUE7RUFBZSxnQkFBQTtBQXdEekI7O0FBdkRBO0VBQWEseUJBQUE7RUFBMEIsV0FBQTtFQUFZLGdCQUFBO0FBNkRuRDs7QUExREE7RUFBNkIsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFdBQUE7QUFnRTlEOztBQS9EQTtFQUFvQyxXQUFBO0VBQVksVUFBQTtBQW9FaEQ7O0FBbkVBO0VBQTBDLFdBQUE7QUF1RTFDOztBQXRFQTtFQUNBO0lBQTJCLGtCQUFBO0VBMEV6QjtBQUNGOztBQXhFQTtFQUFlLGdCQUFBO0FBMkVmOztBQXpFQTtFQUFrQixrQkFBQTtFQUFtQixjQUFBO0VBQWUsWUFBQTtFQUFhLHVDQUFBO0VBQXdDLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLGtCQUFBO0FBb0YvSjs7QUFuRkE7RUFBd0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixVQUFBO0VBQVcsVUFBQTtBQTZGbkg7O0FBNUZBO0VBQTRCLFdBQUE7RUFBWSxZQUFBO0VBQWEsc0JBQUE7S0FBQSxtQkFBQTtBQWtHckQ7O0FBakdBO0VBQXVCLGlCQUFBO0FBcUd2Qjs7QUFwR0E7RUFBMEIsV0FBQTtFQUFZLGdCQUFBO0FBeUd0Qzs7QUF4R0E7RUFBMEIsV0FBQTtFQUFZLGVBQUE7RUFBZ0Isb0JBQUE7RUFBcUIsZ0JBQUE7RUFBaUIsZUFBQTtBQWdINUY7O0FBL0dBO0VBQThCLG1CQUFBO0FBbUg5Qjs7QUFsSEE7RUFBMkIsY0FBQTtBQXNIM0I7O0FBckhBO0VBQStCLG1CQUFBO0FBeUgvQjs7QUF4SEE7RUFBNEIsY0FBQTtBQTRINUI7O0FBMUhBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUE2SEo7O0FBM0hBO0VBQ0ksY0FBQTtBQThISjs7QUE1SEE7RUFDSSxZQUFBO0FBK0hKOztBQTdIQTtFQUF1QixXQUFBO0FBaUl2QiIsImZpbGUiOiJ1c2VyLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2e2xpbmUtaGVpZ2h0OjEuMjsgbWFyZ2luLXRvcDowOyBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OjcwMDsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyBjb2xvcjojMjYyMjYyO31cbiNtYWlue2Zsb2F0OmxlZnQ7IHdpZHRoOjEwMCU7fVxuI2NvbnRlbnR7cGFkZGluZzozMHB4O31cbi5wYWdlLWhlYWRlcnttYXJnaW46MCAwIDMwcHg7IHBhZGRpbmc6MTBweCAxOHB4OyBib3JkZXI6bm9uZTsgYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo1cHg7fVxuLnBhZ2UtaGVhZGVyIGgxe21hcmdpbjowOyBwYWRkaW5nOjA7IGZvbnQtc2l6ZToxOHB4OyBsaW5lLWhlaWdodDozMHB4O31cbi5wYWdlLWhlYWRlciBoMSAuaWNvbnt3aWR0aDozMHB4OyBoZWlnaHQ6MzBweDsgYmFja2dyb3VuZDojZWQxYzI0OyBib3JkZXItcmFkaXVzOjNweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGxpbmUtaGVpZ2h0OjMwcHg7IGNvbG9yOiNmZmY7IGZvbnQtc2l6ZToxNHB4OyBtYXJnaW4tcmlnaHQ6MTBweDt9XG5cblxuaHJ7bWFyZ2luLWJvdHRvbTozMHB4OyBtYXJnaW4tdG9wOjMwcHg7fVxuLndoaXRlYmd7YmFja2dyb3VuZDojZmZmOyBtYXJnaW4tYm90dG9tOjMwcHg7fVxuLndlbGx7YmFja2dyb3VuZDojZmZmOyBib3gtc2hhZG93OjAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItcmFkaXVzOjA7IGJvcmRlcjpub25lO3BhZGRpbmc6IDE1cHggMTVweCAhaW1wb3J0YW50O2NvbG9yOiAjMDAwO31cblxuLnRhYmxlIHRoe2NvbG9yOiMyNjIyNjI7IGZvbnQtd2VpZ2h0OjUwMDt9XG4udGFibGUgdGZvb3R7YmFja2dyb3VuZC1jb2xvcjojYzYyMjNlOyBjb2xvcjojZmZmOyBmb250LXdlaWdodDo1MDA7fVxuXG4ubW9kYWwtY3VzdG9tZXt9XG4ubW9kYWwtY3VzdG9tZSAubW9kYWwtaGVhZGVye2JhY2tncm91bmQ6I2M2MjIzZTsgYm9yZGVyOm5vbmU7IGNvbG9yOiNmZmY7fVxuLm1vZGFsLWN1c3RvbWUgLm1vZGFsLWhlYWRlciAuY2xvc2V7Y29sb3I6I2ZmZjsgb3BhY2l0eToxO31cbi5tb2RhbC1jdXN0b21lIC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxle2NvbG9yOiNmZmY7fVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbi5tb2RhbC1jdXN0b21lIC5tb2RhbC1ib2R5e3BhZGRpbmc6MzVweCA1MHB4O31cbn1cblxuLm1vZGFsLWNvbnRlbnR7Ym9yZGVyLXJhZGl1czowO31cblxuLndpZGdldC1kYXNoYm9hcmR7cGFkZGluZzoxNXB4IDMwcHg7IG1hcmdpbjozMHB4IDA7IGJvcmRlcjpub25lOyBib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjVweDsgbWluLWhlaWdodDoxMzVweDsgcG9zaXRpb246cmVsYXRpdmU7fVxuLndpZGdldC1kYXNoYm9hcmQgLmljb257YmFja2dyb3VuZDojMDAwOyBib3JkZXItcmFkaXVzOjVweDsgd2lkdGg6NjhweDsgaGVpZ2h0OjQ4cHg7IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6LTE1cHg7IGxlZnQ6MzBweDt9XG4ud2lkZ2V0LWRhc2hib2FyZCAuaWNvbiBpbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47fVxuLndpZGdldC1kYXNoYm9hcmQgLnRvcHt0ZXh0LWFsaWduOnJpZ2h0O31cbi53aWRnZXQtZGFzaGJvYXJkIC50b3AgaDJ7Y29sb3I6IzAwMDsgZm9udC13ZWlnaHQ6NTAwO31cbi53aWRnZXQtZGFzaGJvYXJkIC50b3AgaDV7Y29sb3I6IzAwMDsgZm9udC1zaXplOjE2cHg7IHRleHQtdHJhbnNmb3JtOm5vbmU7IGZvbnQtd2VpZ2h0OjUwMDsgbWFyZ2luOjAgMCA1cHg7fVxuLndpZGdldC1kYXNoYm9hcmQud2RyZWQgLmljb257YmFja2dyb3VuZDojZWQxYzI0O31cbi53aWRnZXQtZGFzaGJvYXJkLndkcmVkIGg1e2NvbG9yOiNlZDFjMjQ7fVxuLndpZGdldC1kYXNoYm9hcmQud2RibHVlIC5pY29ue2JhY2tncm91bmQ6IzI2MjI2Mjt9XG4ud2lkZ2V0LWRhc2hib2FyZC53ZGJsdWUgaDV7Y29sb3I6IzI2MjI2Mjt9XG5cbi5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjIyNjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjYyMjYyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ucGFnaW5hdGlvbj5saT5hLCAucGFnaW5hdGlvbj5saT5zcGFuIHtcbiAgICBjb2xvcjogIzI2MjI2Mjtcbn1cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0NHB4O1xufVxuI2V4YW1wbGVfd3JhcHBlciAucm93eyB3aWR0aDogMTAwJTsgfVxuXG5cblxuXG5cbi8vIC5zaXRlLWNvbnRlbnQtY29udGFpbi13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlOyBtaW4taGVpZ2h0OjQwMHB4OyBvdmVyZmxvdzpoaWRkZW47fVxuLy8gLnNpdGUtY29udGVudC1jb250YWluLXdyYXBwZXIgLmxlZnQtcGFuZWxiZ3twb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgaGVpZ2h0OjEwMCU7IHdpZHRoOjI3OHB4OyBiYWNrZ3JvdW5kOiMyNjIyNjI7IHotaW5kZXg6MDt9XG4vLyAjbGVmdC1wYW5lbHt3aWR0aDoyNzhweDsgcG9zaXRpb246cmVsYXRpdmU7IHotaW5kZXg6OTsgZmxvYXQ6bGVmdDt9XG5cbi8vICNsZWZ0LXBhbmVsIC5idG4tbGVmdG1lbnVjbG9zZXt3aWR0aDo0MHB4OyBoZWlnaHQ6NDBweDsgY29sb3I6I2ZmZjsgYmFja2dyb3VuZDojZWQxYzI0OyBsaW5lLWhlaWdodDo0MHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MTAwJTsgdG9wOjA7IGRpc3BsYXk6bm9uZTt9XG4vLyAubGVmdG1lbnV7fVxuLy8gLmxlZnRtZW51IHVse3BhZGRpbmc6MDsgbWFyZ2luOjA7IGxpc3Qtc3R5bGU6bm9uZTt9XG4vLyAubGVmdG1lbnUgdWwgbGl7bWFyZ2luLWJvdHRvbToxcHg7fVxuLy8gLmxlZnRtZW51IHVsIGxpIGF7Y29sb3I6I2ZmZjsgZm9udC1zaXplOjE0cHg7IGZvbnQtd2VpZ2h0OjMwMDsgcGFkZGluZzoxMHB4IDE1cHggMTBweCA2MHB4OyBkaXNwbGF5OmJsb2NrOyBwb3NpdGlvbjpyZWxhdGl2ZTsgYm9yZGVyLWxlZnQ6c29saWQgM3B4IHRyYW5zcGFyZW50O31cbi8vIC5sZWZ0bWVudSB1bCBsaSBhIC5mYXtwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDozNHB4OyB0b3A6MTRweDsgZm9udC1zaXplOjE0cHg7fVxuLy8gLmxlZnRtZW51IHVsIGxpIGE6aG92ZXIsIFxuLy8gLmxlZnRtZW51IHVsIGxpOmhvdmVyID4gYSxcbi8vIC5sZWZ0bWVudSB1bCBsaS5hY3RpdmUgPiBhe2JhY2tncm91bmQtY29sb3I6ICNlZDFjMjQ7Ym9yZGVyLWNvbG9yOiAjZmZmO31cbi8vIC5sZWZ0bWVudSB1bCBsaSAuaWNvbntkaXNwbGF5OmJsb2NrOyB3aWR0aDoyMHB4OyBoZWlnaHQ6MjBweDt9XG4vLyAubGVmdG1lbnUgdWwgdWwgbGkgYXtwYWRkaW5nLWxlZnQ6NzJweDsgY29sb3I6I2ZmZjsgZm9udC1zaXplOjEzcHg7fVxuLy8gLmxlZnRtZW51IHVsIHVsIGxpIGE6YmVmb3Jle2ZvbnQtZmFtaWx5OidGb250QXdlc29tZSc7IGNvbnRlbnQ6XCJcXGYxMDVcIjsgcG9zaXRpb246YWJzb2x1dGU7IHRvcDoxMHB4OyBsZWZ0OjYwcHg7fVxuLy8gLmxlZnRtZW51IHVsIHVsIGxpIGE6aG92ZXIsIFxuLy8gLmxlZnRtZW51IHVsIHVsIGxpLmFjdGl2ZSA+IGF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDsgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50OyBjb2xvcjojZWQxYzI0O31cblxuLy8gLmxlZnQtcGFuZWxiZywgI2xlZnQtcGFuZWx7XG4vLyAgICAgLy9tYXJnaW4tbGVmdDotMjc4cHg7XG4vLyB9XG4vLyAubGVmdG1lbnVvcGVue31cbi8vIC5sZWZ0bWVudW9wZW4gLmxlZnQtcGFuZWxiZyxcbi8vIC5sZWZ0bWVudW9wZW4gI2xlZnQtcGFuZWx7bWFyZ2luOjA7fVxuLy8gLy8gLmxlZnRtZW51b3BlbiBcbi8vICNtYWlue3dpZHRoOiBjYWxjKDEwMCUgLSAyNzhweCk7fVxuLy8gLmJ0bi1sZWZ0bWVudXtwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDoxMHB4OyB0b3A6MjJweDsgYm9yZGVyLXJhZGl1czo1cHg7IHBhZGRpbmc6OHB4OyBmb250LXdlaWdodDo0MDA7IGRpc3BsYXk6bm9uZTsgd2lkdGg6MzhweDsgdGV4dC1hbGlnbjpjZW50ZXI7fVxuLy8gLmJ0bi1sZWZ0bWVudTpiZWZvcmV7Zm9udC1mYW1pbHk6J0ZvbnRBd2Vzb21lJzsgY29udGVudDpcIlxcZjBjOVwiO31cbi8vIC5idG4tbGVmdG1lbnUub246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMGRcIjt9Il19 */";
      /***/
    },

    /***/
    "E9uz":
    /*!************************************************************!*\
      !*** ./src/app/user/user-dashboard/user-dashboard.page.ts ***!
      \************************************************************/

    /*! exports provided: UserDashboardPage */

    /***/
    function E9uz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDashboardPage", function () {
        return UserDashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-dashboard.page.html */
      "uR65");
      /* harmony import */


      var _user_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-dashboard.page.scss */
      "Cbeh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserDashboardPage = /*#__PURE__*/function () {
        function UserDashboardPage() {
          _classCallCheck(this, UserDashboardPage);
        }

        _createClass(UserDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserDashboardPage;
      }();

      UserDashboardPage.ctorParameters = function () {
        return [];
      };

      UserDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-dashboard',
        template: _raw_loader_user_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserDashboardPage);
      /***/
    },

    /***/
    "R15X":
    /*!**************************************************************!*\
      !*** ./src/app/user/user-dashboard/user-dashboard.module.ts ***!
      \**************************************************************/

    /*! exports provided: UserDashboardPageModule */

    /***/
    function R15X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDashboardPageModule", function () {
        return UserDashboardPageModule;
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


      var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-dashboard-routing.module */
      "q6ro");
      /* harmony import */


      var _user_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-dashboard.page */
      "E9uz");
      /* harmony import */


      var src_app_include_include_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/include/include.module */
      "+TEy");

      var UserDashboardPageModule = function UserDashboardPageModule() {
        _classCallCheck(this, UserDashboardPageModule);
      };

      UserDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDashboardPageRoutingModule"], src_app_include_include_module__WEBPACK_IMPORTED_MODULE_7__["IncludeModule"]],
        declarations: [_user_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["UserDashboardPage"]]
      })], UserDashboardPageModule);
      /***/
    },

    /***/
    "q6ro":
    /*!**********************************************************************!*\
      !*** ./src/app/user/user-dashboard/user-dashboard-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: UserDashboardPageRoutingModule */

    /***/
    function q6ro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDashboardPageRoutingModule", function () {
        return UserDashboardPageRoutingModule;
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


      var _user_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-dashboard.page */
      "E9uz");

      var routes = [{
        path: '',
        component: _user_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["UserDashboardPage"]
      }];

      var UserDashboardPageRoutingModule = function UserDashboardPageRoutingModule() {
        _classCallCheck(this, UserDashboardPageRoutingModule);
      };

      UserDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserDashboardPageRoutingModule);
      /***/
    },

    /***/
    "uR65":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uR65(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<app-user-header></app-user-header>  \n<ion-content>\n\n  <div class=\"site-content-contain-wrapper clearfix\">\n    <!-- <app-seller-side-nav></app-seller-side-nav> -->\n    <!--Left Panel Start-->\n    <!-- <div class=\"left-panelbg\"></div>\n    <aside id=\"left-panel\">\n      <nav class=\"leftmenu\">\n\n        <ul>\n          <li class=\"active\"><a href=\"dashboard.html\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Dashboard</a></li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Profile Details</a>\n            <ul>\n              <li><a href=\"profile.html\">Profile</a></li>\n              <li><a href=\"javascript:void(0);\">Change password</a></li>\n            </ul>\n          </li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-product-hunt\" aria-hidden=\"true\"></i> Product Management</a>\n            <ul>\n              <li><a href=\"javascript:void(0);\">Add Categories</a></li>\n              <li><a href=\"javascript:void(0);\">Add Products</a></li>\n            </ul>\n          </li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Order Details</a>\n            <ul>\n              <li><a href=\"javascript:void(0);\">Bids Reports</a></li>\n            </ul>\n          </li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i> Customer Feedback</a>\n          </li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> Chatbox</a></li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Pallet Auction</a></li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Payment Details</a>\n          </li>\n          <li><a href=\"javascript:void(0);\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a></li>\n        </ul>\n      </nav>\n    </aside> -->\n    <!--Left Panel End-->\n\n    <!--Main Contaner Start-->\n\n    <div id=\"main\">\n      <div class=\"site-content-contain\">\n        <div id=\"content\" class=\"site-content\">\n          <div class=\"page-header clearfix\">\n            <h1 class=\"pull-left\"><i class=\"icon fa fa-home\" aria-hidden=\"true\"></i> User dashboard</h1>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <section class=\"widget-dashboard\">\n                <div class=\"icon\"><img src=\"assets/images/packing.png\" alt=\"\"></div>\n                <div class=\"top\">\n                  <h5>Total Auction</h5>\n                  <h2>1020</h2>\n                </div>\n                <a href=\"#\" class=\"btn-more\">View More <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n              </section>\n            </div>\n            <div class=\"col-sm-4\">\n              <section class=\"widget-dashboard wdred\">\n                <div class=\"icon\"><img src=\"assets/images/wd-icon2.png\" alt=\"\"></div>\n                <div class=\"top\">\n                  <h5>Expired Auction</h5>\n                  <h2>20,500</h2>\n                </div>\n                <a href=\"#\" class=\"btn-more\">View More <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n              </section>\n            </div>\n            <div class=\"col-sm-4\">\n              <section class=\"widget-dashboard wdblue\">\n                <div class=\"icon\"><img src=\"assets/images/wd-icon3.png\" alt=\"\"></div>\n                <div class=\"top\">\n                  <h5>Live Auction</h5>\n                  <h2>0</h2>\n                </div>\n                <a href=\"#\" class=\"btn-more\">View More <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n              </section>\n            </div>\n          </div>\n\n\n          <!-- <div class=\"row\">\n            <div class=\"col-md-8\">\n              <h5>Customer Feedback</h5>\n              <div class=\"well no-padding margin-bottom10\">\n                <div class=\"table-responsive no-margin\">\n                  <table class=\"table table-bordered no-margin\">\n                    <thead>\n                      <tr>\n                        <th>Order ID</th>\n                        <th>Order ID</th>\n                      </tr>\n                    </thead>\n                    <tr>\n                      <td>7594198637</td>\n                      <td>4578963158</td>\n                    </tr>\n                    <tr>\n                      <td>5879314892</td>\n                      <td>8267196348</td>\n                    </tr>\n                    <tr>\n                      <td>7594198637</td>\n                      <td>4578963158</td>\n                    </tr>\n                    <tr>\n                      <td>5879314892</td>\n                      <td>9947463812</td>\n                    </tr>\n                    <tr>\n                      <td>5879314892</td>\n                      <td>8267196348</td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n              <p><a href=\"#\" class=\"btn-more\">View More <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a></p>\n            </div>\n            <div class=\"col-md-4\">\n              <h5>latest Auction</h5>\n              <div class=\"well no-padding margin-bottom20\">\n                <div class=\"table-responsive no-margin\">\n                  <table class=\"table table-bordered no-margin\">\n                    <thead>\n                      <tr>\n                        <th>Product Name</th>\n                        <th>Seller</th>\n                      </tr>\n                    </thead>\n                    <tr>\n                      <td>Foxbro</td>\n                      <td>Z158367</td>\n                    </tr>\n                    <tr>\n                      <td>Avas</td>\n                      <td>Z158367</td>\n                    </tr>\n                    <tr>\n                      <td>Rozavel</td>\n                      <td>Z158367</td>\n                    </tr>\n                    <tr>\n                      <td>Doxinaet</td>\n                      <td>Z158367</td>\n                    </tr>\n                    <tr>\n                      <td>Foxbro</td>\n                      <td>Z158367</td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div> -->\n\n          \n\n        </div>\n      </div>\n    </div>\n\n    <!--Main Contaner Start-->\n  </div>\n  \n  <!-- <app-user-footer></app-user-footer> -->\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-dashboard-user-dashboard-module-es5.js.map