(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "/rnz":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function rnz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.sliders-container {\n  width: 100%;\n  height: 100%;\n}\n.sliders-div {\n  position: relative;\n  height: inherit;\n}\n.slider-div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.sliders-div .con {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-width: 538px;\n  /* float: left; */\n  padding-right: 0;\n  text-align: left;\n  box-sizing: border-box;\n  padding: 30px 0px;\n  margin: 50px 100px;\n}\n.sliders-div .con h1 {\n  padding-bottom: 0;\n  margin: 0;\n  line-height: 75px;\n  font-size: 70px;\n  font-family: \"Playfair Display\", serif;\n  margin-bottom: 10px;\n  color: #fff;\n}\n.sliders-div .con p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 25px;\n  text-transform: capitalize;\n  color: #fff;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n  padding: 0 0;\n  text-transform: uppercase;\n}\n.sliders-img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*-------- find live auction css start -------*/\n.find_oction {\n  position: relative;\n  background: #110f39;\n  overflow: hidden;\n  margin-top: 10px;\n}\n.find_oction:before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  right: -140px;\n  width: 874px;\n  height: 112px;\n  background-image: url(/assets/images/sape1.png);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.find_oction:after {\n  content: \"\";\n  position: absolute;\n  bottom: -20px;\n  left: -190px;\n  width: 874px;\n  height: 112px;\n  background-image: url(/assets/images/sape2.png);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.find_oction .find_oction_body {\n  width: 100%;\n  max-width: 862px;\n  margin: 0 auto;\n  padding: 30px 0px;\n}\n.find_oction .find_oction_body h3 {\n  margin: 0 0 0;\n  text-align: center;\n  color: #ffffff;\n  font-size: 36px;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n}\n.find_oction .find_oction_body .form-group {\n  margin: 0 0;\n}\n.find_oction .find_oction_body .form-control {\n  height: 51px;\n  transition: 0.5s;\n  border-color: #fff;\n  color: #fff;\n  background: transparent;\n  border-radius: 5px;\n}\n.find_oction .find_oction_body .form-control:focus {\n  background: #fff;\n  color: #000;\n}\n.find_oction .find_oction_body input.form-control::-moz-placeholder {\n  color: #fff;\n}\n.find_oction .find_oction_body input.form-control:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #fff;\n}\n.find_oction .find_oction_body input.form-control::placeholder {\n  /* Most modern browsers support this now. */\n  color: #fff;\n}\n.find_oction .find_oction_body .form-select {\n  position: relative;\n}\n.find_oction .find_oction_body .form-select:after {\n  content: \"\";\n  position: absolute;\n  font-family: FontAwesome;\n  top: 9px;\n  right: 12px;\n  color: #fff;\n}\n.find_oction .find_oction_body .btn {\n  height: 46px;\n  outline: none;\n}\n.find_oction .find_oction_body .btn.btn-reset {\n  transition: 0.5s;\n  background-color: #fff !important;\n  border-color: #fff !important;\n}\n.find_oction .find_oction_body .btn.btn-reset i {\n  color: #110f39 !important;\n  transition: 0.5s;\n}\n.find_oction .find_oction_body .btn.btn-reset:hover {\n  background: #ed1c24 !important;\n  border-color: #ed1c24 !important;\n  color: #fff !important;\n}\n.find_oction .find_oction_body .btn.btn-reset:hover i {\n  color: #fff !important;\n}\n.find_oction .find_oction_body .btn.btn-find {\n  background: #ed1c24 !important;\n  border-color: #ed1c24 !important;\n  color: #ed1c24 !important;\n  position: relative;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.find_oction .find_oction_body .btn.btn-find:before {\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  left: 2px;\n  width: 98%;\n  height: 40px;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.find_oction .find_oction_body .btn.btn-find span {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  color: #fff;\n  margin: 0 auto;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.find_oction .find_oction_body .btn.btn-find:hover {\n  background: #fff;\n  border-color: #fff;\n  color: #000;\n}\n.find_oction .find_oction_body .btn.btn-find:hover span {\n  color: #000;\n}\n.find_oction .find_oction_body .btn.btn-find:hover:before {\n  border-color: #000;\n}\n/*-------- find live auction css stop -------*/\n/*--------- product listing css start ---------*/\n.product_box {\n  border: 1px solid #c9c9c9;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 15px 15px;\n  position: relative;\n}\n.product_box .image_box {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #c9c9c9;\n  overflow: hidden;\n}\n.product_box .image_box img {\n  transition: 0.5s;\n  -o-object-fit: none;\n     object-fit: none;\n}\n.product_box:hover .image_box img {\n  transform: scale(1.1);\n}\n.product_box .contain_box {\n  text-align: center;\n  padding: 20px 0;\n}\n.product_box .contain_box a.link {\n  color: #000000;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.5s;\n  line-height: 24px;\n  display: block;\n  margin-bottom: 4px;\n}\n.product_box .contain_box a.link:hover {\n  color: #262262;\n}\n.product_box .contain_box h4 {\n  font-size: 13px;\n  font-weight: 500;\n  color: #ed1c24;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.product_box .contain_box h3 {\n  line-height: normal;\n  font-size: 16px;\n  font-weight: 600;\n  color: #262262;\n  margin: 3px 0 0;\n}\n.product_box .btn {\n  content: \"\";\n  position: absolute;\n  bottom: -18px;\n  left: 0;\n  right: 0;\n}\n.product {\n  padding-bottom: 20px;\n}\n.product-carousel {\n  position: relative;\n}\n.product-carousel .owl-nav {\n  content: \"\";\n  position: absolute;\n  top: -84px;\n  right: 0;\n  width: 100%;\n}\n.product-carousel .owl-nav button {\n  background: #262262 !important;\n  width: 30px;\n  height: 30px;\n  outline: none;\n  cursor: pointer !important;\n  border: 1px solid #262262 !important;\n  color: #fff !important;\n  transition: 0.5s !important;\n  border-radius: 5px;\n}\n.product-carousel .owl-nav button:hover {\n  color: #fff !important;\n  background: #ed1c24 !important;\n  border-color: #ed1c24 !important;\n}\n.product-carousel .owl-nav button.owl-prev {\n  position: absolute;\n  top: 0;\n  right: 40px;\n}\n.product-carousel .owl-nav button.owl-prev:after {\n  content: \"\";\n  font-family: FontAwesome;\n}\n.product-carousel .owl-nav button.owl-next {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.product-carousel .owl-nav button.owl-next:after {\n  content: \"\";\n  font-family: FontAwesome;\n}\n/*--------- product listing css stop ---------*/\n/*-------- upcoming auction css start ---------*/\n.auctions_box {\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n  border-radius: 5px;\n  background: #f7f6ff;\n  margin-bottom: 14px;\n  transition: 0.5s;\n}\n.Auctions_Div:nth-child(2) .auctions_box {\n  background: #fff5f5;\n}\n.Auctions_Div:nth-child(4) .auctions_box {\n  background: #fff5f5;\n}\n.Auctions_Div:nth-child(5) .auctions_box {\n  background: #fff5f5;\n}\n.Auctions_Div:nth-child(7) .auctions_box {\n  background: #fff5f5;\n}\n.auctions_box .auctions_box_image {\n  height: 225px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.auctions_box .auctions_box_image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.upcoming_auction_area h2 {\n  margin-bottom: 40px;\n}\n.auctions_box .auctions_box_contain {\n  text-align: center;\n  padding: 15px 0px;\n}\n.auctions_box .auctions_box_contain h3 {\n  margin: 0 0;\n  text-transform: uppercase;\n  font-size: 17px;\n  font-weight: 500;\n  color: #000000;\n  line-height: 24px;\n}\n.auctions_box .auctions_box_contain h3 strong {\n  line-height: normal;\n  font-size: 13px;\n  color: #ed1c24;\n  display: block;\n  font-weight: 500;\n  margin-bottom: 2px;\n}\n.auctions_box h4 {\n  margin: 0 0;\n  padding: 15px 10px;\n  position: relative;\n  font-size: 16px;\n  font-weight: 500;\n  color: #262262;\n  text-transform: uppercase;\n  text-align: center;\n}\n.auctions_box h4:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #ebebeb;\n}\n.auctions_box h4:after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #ebebeb;\n}\n.auctions_box .auctions_box_image .mask {\n  position: absolute;\n  width: 150%;\n  height: 500px;\n  display: block;\n  right: 0;\n  bottom: 0;\n  transform: rotate(-45deg);\n  background-color: #fff;\n  background-color: var(--white);\n  zoom: 1;\n  filter: alpha(opacity=20);\n  -webkit-opacity: 0.2;\n  -moz-opacity: 0.2;\n  opacity: 0.2;\n  transform: translate(100%, 100%);\n  transform: translate(100%, 100%) rotate(-45deg);\n  transition: all 0s ease;\n}\n.auctions_box:hover .auctions_box_image .mask {\n  zoom: 1;\n  filter: alpha(opacity=0);\n  -webkit-opacity: 0;\n  -moz-opacity: 0;\n  opacity: 0;\n  transform: translate(-100%, -100%) rotate(-45deg);\n  transition: all 1s ease;\n}\n/*-------- upcoming auction css stop ---------*/\n/*--------- popular categories css start ---------*/\n.popular_categories_three {\n  height: 556px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.popular_categories_three img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.popular_categories_three:hover img {\n  transform: scale(1.1);\n}\n.popular_categories_three .contain_box {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: left;\n  padding: 30px 25px;\n}\n.popular_categories_three .contain_box h4 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #141234;\n  margin: 0 0 10px;\n  line-height: normal;\n}\n.popular_categories_two {\n  height: 269px;\n  overflow: hidden;\n  border-radius: 5px;\n  margin-bottom: 14px;\n}\n.popular_categories_two img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.popular_categories_two:hover img {\n  transform: scale(1.1);\n}\n.popular_categories_two .contain_box {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 25px 25px;\n}\n.popular_categories_two .contain_box h4 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #141234;\n  margin: 0 0 24px;\n  line-height: 45px;\n}\n/*----*/\n.popular_categories_one {\n  height: 271px;\n  overflow: hidden;\n  border-radius: 5px;\n  margin-bottom: 14px;\n}\n.popular_categories_one img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.popular_categories_one:hover img {\n  transform: scale(1.1);\n}\n.popular_categories_one .contain_box {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 25px 25px;\n}\n.popular_categories_one .contain_box h4 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 10px;\n  line-height: 45px;\n}\n.popular_categories_one .contain_box h5 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #141234;\n  margin: 0 0 10px;\n  line-height: 45px;\n}\n.popular_categories_four {\n  height: 269px;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n}\n.popular_categories_four img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.popular_categories_four:hover img {\n  transform: scale(1.1);\n}\n.popular_categories_four .contain_box {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 25px 25px;\n}\n.popular_categories_four .contain_box h4 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #141234;\n  margin: 0 0 25px;\n  line-height: 45px;\n}\n.popular_categories_four .contain_box h5 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 25px;\n  line-height: 45px;\n}\n/*--------- popular categories css stop ---------*/\n/*-------- main banner area css start --------*/\n.main_banner_area .banner_right_box {\n  height: 280px;\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 10px;\n  border-left: 10px solid #fff;\n}\n.main_banner_area .banner_right_box:last-child {\n  margin-bottom: 0px;\n}\n.main_banner_area .banner_right_box img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n}\n.main_banner_area .banner_right_box:hover img {\n  transform: scale(1.1);\n}\n.main_banner_area .banner_right_box .contain_box {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 25px 25px;\n}\n.main_banner_area .banner_right_box .contain_box h4 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #141234;\n  margin: 0 0 25px;\n  line-height: 45px;\n}\n.main_banner_area .banner_right_box .contain_box h5 {\n  text-transform: capitalize;\n  font-size: 44px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 25px;\n  line-height: 45px;\n}\n/*-------- main banner area css stop --------*/\n/*---------- home slider start ---------*/\n.home-slider {\n  position: relative;\n  overflow: hidden;\n}\n.home-slider:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.56);\n  /*z-index: 9;*/\n}\n.home-slideshow {\n  width: 100%;\n  z-index: 8;\n}\n.home-slideshow .slide {\n  width: 100%;\n  position: relative;\n  background-position: center;\n  min-height: 570px;\n  background-size: cover;\n}\n.home-slideshow .slide .caption {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20%;\n  width: 100%;\n  text-align: left;\n  z-index: 99;\n  transform: translate(0, -50%);\n  margin-top: 50px;\n}\n.home-slider .container {\n  position: relative;\n}\n.home-pager {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  width: 100%;\n  text-align: right;\n  z-index: 9;\n  font-size: 0;\n  display: none;\n}\n.home-pager span {\n  display: inline-block;\n  text-indent: -9999px;\n  border: solid 1px #fff;\n  border-radius: 100%;\n  width: 11px;\n  height: 11px;\n  background-color: transparent;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.home-pager span.cycle-pager-active {\n  background-color: #fff;\n  border-color: #fff;\n}\n.home-slideshow .slide .con {\n  /* max-width: 100%; */\n  margin: auto;\n  max-width: 538px;\n  /* float: left; */\n  padding-right: 0;\n  text-align: left;\n  box-sizing: border-box;\n  padding: 0px 0px;\n}\n.home-slideshow .slide .con p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 25px;\n  text-transform: capitalize;\n  color: #fff;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n  padding: 0 0;\n  text-transform: uppercase;\n}\n.home-slideshow .slide .con h1 {\n  padding-bottom: 0;\n  margin: 0;\n  line-height: 75px;\n  font-size: 70px;\n  font-family: \"Playfair Display\", serif;\n  margin-bottom: 10px;\n  color: #fff;\n}\n.home-slideshow .slide .con h1 span {\n  text-align: right;\n  text-transform: uppercase;\n  color: #eb4960;\n  font-size: 24px;\n  font-weight: 700;\n  font-family: \"Roboto\", sans-serif;\n  display: block;\n}\n.home-slideshow .slide .con a.banner_button {\n  text-align: center;\n  border: 4px solid #ffffff;\n  color: #ffffff;\n  text-transform: uppercase;\n  float: left;\n  padding: 10px 29px;\n  font-size: 15px;\n}\n.home-slideshow .slide .con a.banner_button:hover {\n  background: #a82243;\n  border-color: #a82243;\n}\n.home-slider-nav {\n  position: absolute;\n  z-index: 9;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.home-slider-nav a {\n  width: 34px;\n  height: 63px;\n  background-position: left top;\n  background-repeat: no-repeat;\n  display: block;\n}\n#HomePrev {\n  background-image: url(/assets/images/next.png);\n  float: left;\n  /* left: -27px; */\n  margin-left: -60px;\n  display: none;\n}\n#HomePrev:hover {\n  background-position: left bottom;\n}\n#HomeNext {\n  background-image: url(/assets/images/prev.png);\n  float: right;\n  margin-right: -60px;\n  display: none;\n}\n#HomeNext:hover {\n  background-position: left bottom;\n}\n.home-slideshow .slide .con {\n  z-index: 5;\n  position: relative;\n  transform: translate3d(0, -10%, 0);\n  opacity: 0;\n  transition: opacity 0.4s ease, transform 0.5s ease-out;\n}\n.home-slideshow .slide.cycle-slide-active .con {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n  transition: opacity 0.4s ease, transform 0.5s ease-out;\n}\n.home-slideshow .slide.cycle-slide-active .con > * {\n  -webkit-animation: fade-down 1.5s ease both;\n  animation: fade-down 1.5s ease both;\n}\n@-webkit-keyframes fade-down {\n  0% {\n    transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fade-down {\n  0% {\n    transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.box_leftshow {\n  width: 0;\n  height: 0;\n  border-top: 504px solid rgba(58, 130, 215, 0.7);\n  border-right: 80px solid transparent;\n  position: absolute;\n  left: -2px;\n  top: 44px;\n  z-index: 99;\n}\n.box_rightshow {\n  width: 0;\n  height: 0;\n  border-bottom: 504px solid rgba(58, 130, 215, 0.7);\n  border-left: 80px solid transparent;\n  position: absolute;\n  right: -2px;\n  top: auto;\n  z-index: 99;\n  bottom: 0;\n}\n.boxshowone {\n  max-width: 538px;\n  width: 100%;\n  background: rgba(58, 130, 215, 0.7);\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 9;\n  top: 44px;\n  /* IE 9 */\n  /* Safari prior 9.0 */\n  transform: skew(-10deg);\n  /* Standard syntax */\n}\n.boxshowone span {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.boxshowone:after {\n  position: absolute;\n  left: -30px;\n  top: 0;\n  width: 1px;\n  height: 170px;\n  background: rgba(58, 130, 215, 0.7);\n  content: \"\";\n  z-index: 9;\n}\n.boxshowone span:after {\n  position: absolute;\n  left: -30px;\n  bottom: 44px;\n  width: 1px;\n  height: 170px;\n  background: rgba(255, 255, 255, 0.63);\n  content: \"\";\n  z-index: 9;\n}\n.boxshowone:before {\n  position: absolute;\n  right: -30px;\n  top: 0;\n  width: 1px;\n  height: 170px;\n  background: rgba(255, 255, 255, 0.63);\n  content: \"\";\n  z-index: 9;\n}\n.boxshowone span:before {\n  position: absolute;\n  right: -30px;\n  bottom: 44px;\n  width: 1px;\n  height: 170px;\n  background: rgba(58, 130, 215, 0.7);\n  content: \"\";\n  z-index: 9;\n}\n/*-------- home slider stop --------*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBR0EsZUFBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBR0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQVFBO0VBQ0UsaUJBQUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFMSjtBQVFBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDRyx5QkFBQTtBQUxKO0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFMRjtBQW1CQSwrQ0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFoQkY7QUFrQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNB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QTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQThERjtBQTVEQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQStERjtBQTVEQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDNkIsU0FBQTtFQUNFLHFCQUFBO0VBQ2pDLHVCQUFBO0VBQXlCLG9CQUFBO0FBa0V6QjtBQWhFQTtFQUFrQixrQkFBQTtFQUFtQixPQUFBO0VBQVEsV0FBQTtFQUFZLFlBQUE7QUF1RXpEO0FBdEVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQXlFRjtBQXRFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUF5RUY7QUF0RUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBeUVGO0FBdkVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQTBFRjtBQXhFQSxxQ0FBQSIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2xpZGVycy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2xpZGVycy1kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLnNsaWRlci1kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlcnMtZGl2IC5jb24ge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTM4cHg7XG4gIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgbWFyZ2luOiA1MHB4IDEwMHB4O1xufVxuXG4uc2xpZGVycy1kaXYgLmNvbiBoMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xuICBmb250LXNpemU6IDcwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGVycy1kaXYgLmNvbiBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDAgMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNsaWRlcnMtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi8qLS0tLS0tLS0gZmluZCBsaXZlIGF1Y3Rpb24gY3NzIHN0YXJ0IC0tLS0tLS0qL1xuLmZpbmRfb2N0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMTEwZjM5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZmluZF9vY3Rpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogLTE0MHB4O1xuICB3aWR0aDogODc0cHg7XG4gIGhlaWdodDogMTEycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zYXBlMS5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5maW5kX29jdGlvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjBweDtcbiAgbGVmdDogLTE5MHB4O1xuICB3aWR0aDogODc0cHg7XG4gIGhlaWdodDogMTEycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zYXBlMi5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5maW5kX29jdGlvbiAuZmluZF9vY3Rpb25fYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDg2MnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzBweCAwcHg7XG59XG5cbi5maW5kX29jdGlvbiAuZmluZF9vY3Rpb25fYm9keSBoMyB7XG4gIG1hcmdpbjogMCAwIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luOiAwIDA7XG59XG5cbi5maW5kX29jdGlvbiAuZmluZF9vY3Rpb25fYm9keSAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA1MXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IGlucHV0LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZmluZF9vY3Rpb24gLmZpbmRfb2N0aW9uX2JvZHkgaW5wdXQuZm9ybS1jb250cm9sOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IGlucHV0LmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZmluZF9vY3Rpb24gLmZpbmRfb2N0aW9uX2JvZHkgaW5wdXQuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZmluZF9vY3Rpb24gLmZpbmRfb2N0aW9uX2JvZHkgaW5wdXQuZm9ybS1jb250cm9sOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IGlucHV0LmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICAvKiBNb3N0IG1vZGVybiBicm93c2VycyBzdXBwb3J0IHRoaXMgbm93LiAqL1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5mb3JtLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5mb3JtLXNlbGVjdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74SHXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICB0b3A6IDlweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZmluZF9vY3Rpb24gLmZpbmRfb2N0aW9uX2JvZHkgLmJ0biB7XG4gIGhlaWdodDogNDZweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5idG4uYnRuLXJlc2V0IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5maW5kX29jdGlvbiAuZmluZF9vY3Rpb25fYm9keSAuYnRuLmJ0bi1yZXNldCBpIHtcbiAgY29sb3I6ICMxMTBmMzkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5maW5kX29jdGlvbiAuZmluZF9vY3Rpb25fYm9keSAuYnRuLmJ0bi1yZXNldDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZDFjMjQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5maW5kX29jdGlvbiAuZmluZF9vY3Rpb25fYm9keSAuYnRuLmJ0bi1yZXNldDpob3ZlciBpIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5idG4uYnRuLWZpbmQge1xuICBiYWNrZ3JvdW5kOiAjZWQxYzI0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2VkMWMyNCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VkMWMyNCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZmluZF9vY3Rpb24gLmZpbmRfb2N0aW9uX2JvZHkgLmJ0bi5idG4tZmluZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAycHg7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5idG4uYnRuLWZpbmQgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZpbmRfb2N0aW9uIC5maW5kX29jdGlvbl9ib2R5IC5idG4uYnRuLWZpbmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uZmluZF9vY3Rpb24gLmZpbmRfb2N0aW9uX2JvZHkgLmJ0bi5idG4tZmluZDpob3ZlciBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5maW5kX29jdGlvbiAuZmluZF9vY3Rpb25fYm9keSAuYnRuLmJ0bi1maW5kOmhvdmVyOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbn1cblxuLyotLS0tLS0tLSBmaW5kIGxpdmUgYXVjdGlvbiBjc3Mgc3RvcCAtLS0tLS0tKi9cbi8qLS0tLS0tLS0tIHByb2R1Y3QgbGlzdGluZyBjc3Mgc3RhcnQgLS0tLS0tLS0tKi9cbi5wcm9kdWN0X2JveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0X2JveCAuaW1hZ2VfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M5YzljOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3RfYm94IC5pbWFnZV9ib3ggaW1nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9iamVjdC1maXQ6IG5vbmU7XG59XG5cbi5wcm9kdWN0X2JveDpob3ZlciAuaW1hZ2VfYm94IGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5wcm9kdWN0X2JveCAuY29udGFpbl9ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLnByb2R1Y3RfYm94IC5jb250YWluX2JveCBhLmxpbmsge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5wcm9kdWN0X2JveCAuY29udGFpbl9ib3ggYS5saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMyNjIyNjI7XG59XG5cbi5wcm9kdWN0X2JveCAuY29udGFpbl9ib3ggaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZWQxYzI0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5wcm9kdWN0X2JveCAuY29udGFpbl9ib3ggaDMge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICBtYXJnaW46IDNweCAwIDA7XG59XG5cbi5wcm9kdWN0X2JveCAuYnRuIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xOHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnByb2R1Y3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnByb2R1Y3QtY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0LWNhcm91c2VsIC5vd2wtbmF2IHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04NHB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMyNjIyNjIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjIyNjIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzICFpbXBvcnRhbnQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyAhaW1wb3J0YW50O1xuICAtby10cmFuc2l0aW9uOiAwLjVzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuNXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZHVjdC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b246aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWQxYzI0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2VkMWMyNCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLXByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5wcm9kdWN0LWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtcHJldjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74SEXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbn1cblxuLnByb2R1Y3QtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucHJvZHVjdC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLW5leHQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+EhVwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG59XG5cbi8qLS0tLS0tLS0tIHByb2R1Y3QgbGlzdGluZyBjc3Mgc3RvcCAtLS0tLS0tLS0qL1xuLyotLS0tLS0tLSB1cGNvbWluZyBhdWN0aW9uIGNzcyBzdGFydCAtLS0tLS0tLS0qL1xuLmF1Y3Rpb25zX2JveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5BdWN0aW9uc19EaXY6bnRoLWNoaWxkKDIpIC5hdWN0aW9uc19ib3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmNWY1O1xufVxuXG4uQXVjdGlvbnNfRGl2Om50aC1jaGlsZCg0KSAuYXVjdGlvbnNfYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjVmNTtcbn1cblxuLkF1Y3Rpb25zX0RpdjpudGgtY2hpbGQoNSkgLmF1Y3Rpb25zX2JveCB7XG4gIGJhY2tncm91bmQ6ICNmZmY1ZjU7XG59XG5cbi5BdWN0aW9uc19EaXY6bnRoLWNoaWxkKDcpIC5hdWN0aW9uc19ib3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmNWY1O1xufVxuXG4uYXVjdGlvbnNfYm94IC5hdWN0aW9uc19ib3hfaW1hZ2Uge1xuICBoZWlnaHQ6IDIyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXVjdGlvbnNfYm94IC5hdWN0aW9uc19ib3hfaW1hZ2UgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi51cGNvbWluZ19hdWN0aW9uX2FyZWEgaDIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uYXVjdGlvbnNfYm94IC5hdWN0aW9uc19ib3hfY29udGFpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbi5hdWN0aW9uc19ib3ggLmF1Y3Rpb25zX2JveF9jb250YWluIGgzIHtcbiAgbWFyZ2luOiAwIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uYXVjdGlvbnNfYm94IC5hdWN0aW9uc19ib3hfY29udGFpbiBoMyBzdHJvbmcge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZWQxYzI0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uYXVjdGlvbnNfYm94IGg0IHtcbiAgbWFyZ2luOiAwIDA7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjYyMjYyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hdWN0aW9uc19ib3ggaDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmF1Y3Rpb25zX2JveCBoNDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmF1Y3Rpb25zX2JveCAuYXVjdGlvbnNfYm94X2ltYWdlIC5tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICB6b29tOiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xuICAtd2Via2l0LW9wYWNpdHk6IDAuMjtcbiAgLW1vei1vcGFjaXR5OiAwLjI7XG4gIG9wYWNpdHk6IDAuMjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAxMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMTAwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMTAwJSkgcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMTAwJSkgcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAxMDAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMTAwJSkgcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDEwMCUpIHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDBzIGVhc2U7XG59XG5cbi5hdWN0aW9uc19ib3g6aG92ZXIgLmF1Y3Rpb25zX2JveF9pbWFnZSAubWFzayB7XG4gIHpvb206IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAwO1xuICAtbW96LW9wYWNpdHk6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC0xMDAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTEwMCUpIHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC0xMDAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC0xMDAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC0xMDAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuXG4vKi0tLS0tLS0tIHVwY29taW5nIGF1Y3Rpb24gY3NzIHN0b3AgLS0tLS0tLS0tKi9cbi8qLS0tLS0tLS0tIHBvcHVsYXIgY2F0ZWdvcmllcyBjc3Mgc3RhcnQgLS0tLS0tLS0tKi9cbi5wb3B1bGFyX2NhdGVnb3JpZXNfdGhyZWUge1xuICBoZWlnaHQ6IDU1NnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfdGhyZWUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucG9wdWxhcl9jYXRlZ29yaWVzX3RocmVlOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnBvcHVsYXJfY2F0ZWdvcmllc190aHJlZSAuY29udGFpbl9ib3gge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDMwcHggMjVweDtcbn1cblxuLnBvcHVsYXJfY2F0ZWdvcmllc190aHJlZSAuY29udGFpbl9ib3ggaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzE0MTIzNDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnBvcHVsYXJfY2F0ZWdvcmllc190d28ge1xuICBoZWlnaHQ6IDI2OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfdHdvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnBvcHVsYXJfY2F0ZWdvcmllc190d286aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ucG9wdWxhcl9jYXRlZ29yaWVzX3R3byAuY29udGFpbl9ib3gge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfdHdvIC5jb250YWluX2JveCBoNCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMTQxMjM0O1xuICBtYXJnaW46IDAgMCAyNHB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbn1cblxuLyotLS0tKi9cbi5wb3B1bGFyX2NhdGVnb3JpZXNfb25lIHtcbiAgaGVpZ2h0OiAyNzFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4ucG9wdWxhcl9jYXRlZ29yaWVzX29uZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfb25lOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnBvcHVsYXJfY2F0ZWdvcmllc19vbmUgLmNvbnRhaW5fYm94IHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuXG4ucG9wdWxhcl9jYXRlZ29yaWVzX29uZSAuY29udGFpbl9ib3ggaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfb25lIC5jb250YWluX2JveCBoNSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMTQxMjM0O1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbn1cblxuLnBvcHVsYXJfY2F0ZWdvcmllc19mb3VyIHtcbiAgaGVpZ2h0OiAyNjlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfZm91ciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfZm91cjpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfZm91ciAuY29udGFpbl9ib3gge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfZm91ciAuY29udGFpbl9ib3ggaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzE0MTIzNDtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5wb3B1bGFyX2NhdGVnb3JpZXNfZm91ciAuY29udGFpbl9ib3ggaDUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi8qLS0tLS0tLS0tIHBvcHVsYXIgY2F0ZWdvcmllcyBjc3Mgc3RvcCAtLS0tLS0tLS0qL1xuLyotLS0tLS0tLSBtYWluIGJhbm5lciBhcmVhIGNzcyBzdGFydCAtLS0tLS0tLSovXG4ubWFpbl9iYW5uZXJfYXJlYSAuYmFubmVyX3JpZ2h0X2JveCB7XG4gIGhlaWdodDogMjgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmZjtcbn1cblxuLm1haW5fYmFubmVyX2FyZWEgLmJhbm5lcl9yaWdodF9ib3g6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1haW5fYmFubmVyX2FyZWEgLmJhbm5lcl9yaWdodF9ib3ggaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ubWFpbl9iYW5uZXJfYXJlYSAuYmFubmVyX3JpZ2h0X2JveDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5tYWluX2Jhbm5lcl9hcmVhIC5iYW5uZXJfcmlnaHRfYm94IC5jb250YWluX2JveCB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDI1cHggMjVweDtcbn1cblxuLm1haW5fYmFubmVyX2FyZWEgLmJhbm5lcl9yaWdodF9ib3ggLmNvbnRhaW5fYm94IGg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogNDRweDtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMxNDEyMzQ7XG4gIG1hcmdpbjogMCAwIDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuXG4ubWFpbl9iYW5uZXJfYXJlYSAuYmFubmVyX3JpZ2h0X2JveCAuY29udGFpbl9ib3ggaDUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi8qLS0tLS0tLS0gbWFpbiBiYW5uZXIgYXJlYSBjc3Mgc3RvcCAtLS0tLS0tLSovXG4vKi0tLS0tLS0tLS0gaG9tZSBzbGlkZXIgc3RhcnQgLS0tLS0tLS0tKi9cbi5ob21lLXNsaWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWUtc2xpZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41Nik7XG4gIC8qei1pbmRleDogOTsqL1xufVxuXG4uaG9tZS1zbGlkZXNob3cge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogODtcbn1cblxuLmhvbWUtc2xpZGVzaG93IC5zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTcwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ob21lLXNsaWRlc2hvdyAuc2xpZGUgLmNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHotaW5kZXg6IDk5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmhvbWUtc2xpZGVyIC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ob21lLXBhZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgei1pbmRleDogOTtcbiAgZm9udC1zaXplOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaG9tZS1wYWdlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWluZGVudDogLTk5OTlweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDExcHg7XG4gIGhlaWdodDogMTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWUtcGFnZXIgc3Bhbi5jeWNsZS1wYWdlci1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5ob21lLXNsaWRlc2hvdyAuc2xpZGUgLmNvbiB7XG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDUzOHB4O1xuICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgcGFkZGluZy1yaWdodDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuLmhvbWUtc2xpZGVzaG93IC5zbGlkZSAuY29uIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogMCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaG9tZS1zbGlkZXNob3cgLnNsaWRlIC5jb24gaDEge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogNzVweDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhvbWUtc2xpZGVzaG93IC5zbGlkZSAuY29uIGgxIHNwYW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNlYjQ5NjA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaG9tZS1zbGlkZXNob3cgLnNsaWRlIC5jb24gYS5iYW5uZXJfYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmZmZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHggMjlweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaG9tZS1zbGlkZXNob3cgLnNsaWRlIC5jb24gYS5iYW5uZXJfYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2E4MjI0MztcbiAgYm9yZGVyLWNvbG9yOiAjYTgyMjQzO1xufVxuXG4uaG9tZS1zbGlkZXItbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmhvbWUtc2xpZGVyLW5hdiBhIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogNjNweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jSG9tZVByZXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbmV4dC5wbmcpO1xuICBmbG9hdDogbGVmdDtcbiAgLyogbGVmdDogLTI3cHg7ICovXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI0hvbWVQcmV2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG59XG5cbiNIb21lTmV4dCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wcmV2LnBuZyk7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAtNjBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI0hvbWVOZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG59XG5cbi5ob21lLXNsaWRlc2hvdyAuc2xpZGUgLmNvbiB7XG4gIHotaW5kZXg6IDU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMCUsIDApO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5ob21lLXNsaWRlc2hvdyAuc2xpZGUuY3ljbGUtc2xpZGUtYWN0aXZlIC5jb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbn1cblxuLmhvbWUtc2xpZGVzaG93IC5zbGlkZS5jeWNsZS1zbGlkZS1hY3RpdmUgLmNvbiA+ICoge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1kb3duIDEuNXMgZWFzZSBib3RoO1xuICBhbmltYXRpb246IGZhZGUtZG93biAxLjVzIGVhc2UgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtZG93biB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAlLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1kb3duIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMCUsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmJveF9sZWZ0c2hvdyB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDUwNHB4IHNvbGlkIHJnYmEoNTgsIDEzMCwgMjE1LCAwLjcpO1xuICBib3JkZXItcmlnaHQ6IDgwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJweDtcbiAgdG9wOiA0NHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmJveF9yaWdodHNob3cge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiA1MDRweCBzb2xpZCByZ2JhKDU4LCAxMzAsIDIxNSwgMC43KTtcbiAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0ycHg7XG4gIHRvcDogYXV0bztcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJveHNob3dvbmUge1xuICBtYXgtd2lkdGg6IDUzOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg1OCwgMTMwLCAyMTUsIDAuNyk7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB6LWluZGV4OiA5O1xuICB0b3A6IDQ0cHg7XG4gIC1tcy10cmFuc2Zvcm06IHNrZXcoLTEwZGVnKTtcbiAgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMTBkZWcpO1xuICAvKiBTYWZhcmkgcHJpb3IgOS4wICovXG4gIHRyYW5zZm9ybTogc2tldygtMTBkZWcpO1xuICAvKiBTdGFuZGFyZCBzeW50YXggKi9cbn1cblxuLmJveHNob3dvbmUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJveHNob3dvbmU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zMHB4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTgsIDEzMCwgMjE1LCAwLjcpO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5O1xufVxuXG4uYm94c2hvd29uZSBzcGFuOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMzBweDtcbiAgYm90dG9tOiA0NHB4O1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMpO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5O1xufVxuXG4uYm94c2hvd29uZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMzBweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMpO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5O1xufVxuXG4uYm94c2hvd29uZSBzcGFuOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMHB4O1xuICBib3R0b206IDQ0cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTgsIDEzMCwgMjE1LCAwLjcpO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5O1xufVxuXG4vKi0tLS0tLS0tIGhvbWUgc2xpZGVyIHN0b3AgLS0tLS0tLS0qLyJdfQ== */";
      /***/
    },

    /***/
    "99Un":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function Un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "9oos");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-owl-carousel */
      "uxF4");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _include_include_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../include/include.module */
      "+TEy");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"], _include_include_module__WEBPACK_IMPORTED_MODULE_8__["IncludeModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "9oos":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function oos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "eUf4":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function eUf4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart($event)\"\n  (ionScroll)=\"logScrolling($event)\" (ionScrollEnd)=\"logScrollEnd($event)\">\n  <app-header></app-header>\n\n  <section class=\"main_banner_area\">\n    <div class=\"\">\n      <div class=\"row row-0\">\n        <div class=\"col-lg-7\">\n          <div class=\"sliders-container\">\n            <div class=\"sliders-div\">\n              <ng-container *ngFor=\"let s of img_list; let i = index\">\n                <div class=\"slider-div\" *ngIf=\"current == i\" @fade>\n                  <img class=\"sliders-img\" [src]=\"s.url\">\n                  <div class=\"con\" *ngIf=\"current == i\" @fade>\n                    <!-- <h1>Retail <br />Inventory</h1>\n                    <p>Exentended for today 60% off</p> -->\n                    <h1>{{s.title}}</h1>\n                    <p>{{s.off}}</p>\n                    <a href=\"#\" class=\"btn btn-primary\">bid now</a>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5\">\n          <div class=\"banner_right_box\">\n            <img src=\"assets/images/category7.jpg\" alt=\"banner\" title=\"\">\n            <div class=\"contain_box\">\n              <div class=\"w-100\">\n                <h5>Women’s <br />Jewelry</h5>\n                <a href=\"#\" class=\"btn btn-primary\">bid now</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"banner_right_box\">\n            <img src=\"assets/images/category8.jpg\" alt=\"banner\" title=\"\">\n            <div class=\"contain_box\">\n              <div class=\"w-100\">\n                <h4>AIY <br />Auctions</h4>\n                <a href=\"#\" class=\"btn btn-primary\">bid now</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-------- find live auction area start -------->\n  <section class=\"main_area find_oction\">\n    <div class=\"container\">\n      <div class=\"find_oction_body\">\n        <h3>Find Live Auctions</h3>\n        <div class=\"row row-7\">\n          <div class=\"col-lg-2\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" value=\"Zip Code\">\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"form-group\">\n              <div class=\"form-select\">\n                <select class=\"form-control\">\n                  <option>Choose Miles</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-2\">\n            <button class=\"btn btn-reset w-100\">RESET <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i></button>\n          </div>\n          <div class=\"col-lg-4\">\n            <button class=\"btn btn-find w-100\"><span>View all auctions</span></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  \n  <section class=\"main_area product_listing_area\">\n    <div class=\"container\">\n      <h3 class=\"h3\">live Auctions</h3>\n      <owl-carousel [options]=\"carouselOptions\" [carouselClasses]=\"['product-carousel']\">\n        <div class=\"product\" *ngFor=\"let image of images;let i= index\">\n          <div class=\"product_box\">\n            <div class=\"image_box\">\n              <img src=\"{{image.image}}\" alt=\"product\" title=\"\" [routerLink]=\"['/product-details']\">\n            </div>\n            <div class=\"contain_box\">\n              <h4>Auction ID. BB31470</h4>\n              <a [routerLink]=\"['/product-details']\" routerLinkActive=\"active\" class=\"link\">OnePlus Band 1.1'' AMOLED Display</a>\n              <h3>Max Bid: $150.00</h3>\n              <button class=\"btn btn-bid\" [routerLink]=\"['/product-details']\">bid now <i class=\"zmdi zmdi-plus-circle\"></i></button>\n            </div>\n          </div>\n        </div>\n      </owl-carousel>\n    </div>\n  </section>\n\n  <section class=\"main_area upcoming_auction_area\">\n    <div class=\"container\">\n      <h2 class=\"h2\"><strong>Upcoming Auctions</strong></h2>\n      <div class=\"row row-7\">\n\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product9.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  Apple 14q Core i3 7th Gen <br />- 4 GB/1\n                </h3>\n              </div>\n              <h4>Open After 5 Hours</h4>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product10.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  Ryan Howard #2 Sketch <br />Card Limited\n                </h3>\n              </div>\n              <h4>Open After 2 Days</h4>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product11.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  Invicta Akula 32349 Men's <br />Automatic Watch\n                </h3>\n              </div>\n              <h4>Open After 9 Days</h4>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product12.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  Samsung 138.71 cm <br />(55 inches)Smart LED TV\n                </h3>\n              </div>\n              <h4>Open After 30 minites</h4>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product13.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  Fasttrackazon <br />Inventory Sale\n                </h3>\n              </div>\n              <h4>Open After 5 hours</h4>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product14.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  Swarovski NIL MULTI <br />NECKLACE #1084562 BNIB\n                </h3>\n              </div>\n              <h4>Open After 2 days</h4>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product15.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  G.H. Bass Genuine Leather <br />Shoulder Bag\n                </h3>\n              </div>\n              <h4>Open After 9 days</h4>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-3 Auctions_Div\">\n          <div class=\"auctions_box\">\n            <a [routerLink]=\"['/product-details']\">\n              <div class=\"auctions_box_image\">\n                <img src=\"assets/images/product16.png\" alt=\"auction image\" title=\"\">\n                <div class=\"mask\"></div>\n              </div>\n              <div class=\"auctions_box_contain\">\n                <h3>\n                  <strong>Auction ID. BB31470</strong>\n                  Ladies Leather Shoes in <br />Light Pink Size 40\n                </h3>\n              </div>\n              <h4>Open After 30 minites</h4>\n            </a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  \n  <section class=\"main_area popular_categories_area\">\n    <div class=\"container\">\n      <h2 class=\"h2\"><strong>POPULAR CATEGORIES</strong></h2>\n      <div class=\"row row-7\">\n        <div class=\"col-lg-8\">\n          <div class=\"row row-7\">\n            <div class=\"col-lg-6\">\n              <div class=\"popular_categories_one\">\n                <img src=\"assets/images/category3.jpg\" alt=\"category\" title=\"\">\n                <div class=\"contain_box\">\n                  <div class=\"w-100\">\n                    <h4>Retail <br />Inventory</h4>\n                    <a href=\"#\" class=\"btn btn-primary\">view more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"popular_categories_one\">\n                <img src=\"assets/images/category4.jpg\" alt=\"category\" title=\"\">\n                <div class=\"contain_box\">\n                  <div class=\"w-100\">\n                    <h5>Building Materials</h5>\n                    <a href=\"#\" class=\"btn btn-primary\">view more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"popular_categories_two\">\n                <img src=\"assets/images/category2.jpg\" alt=\"category\" title=\"\">\n                <div class=\"contain_box\">\n                  <div class=\"w-100\">\n                    <h4>Food Service <br />Equipment</h4>\n                    <a href=\"#\" class=\"btn btn-primary\">view more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"popular_categories_three\">\n            <img src=\"assets/images/category1.jpg\" alt=\"category\" title=\"\">\n            <div class=\"contain_box\">\n              <div class=\"w-100\">\n                <h4>Truck Loads</h4>\n                <a href=\"#\" class=\"btn btn-primary\">view more</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"popular_categories_four\">\n            <img src=\"assets/images/category5.jpg\" alt=\"category\" title=\"\">\n            <div class=\"contain_box\">\n              <div class=\"w-100\">\n                <h5>Women’s <br />Jewelry</h5>\n                <a href=\"#\" class=\"btn btn-primary\">view more</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"popular_categories_four\">\n            <img src=\"assets/images/category6.jpg\" alt=\"category\" title=\"\">\n            <div class=\"contain_box\">\n              <div class=\"w-100\">\n                <h4>AIY <br />Auctions</h4>\n                <a href=\"#\" class=\"btn btn-primary\">view more</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  \n  <section class=\"main_area product_listing_area\">\n    <div class=\"container\">\n      <h3 class=\"h3\">Close Auctions</h3>\n      <owl-carousel [options]=\"carouselOptions\" [carouselClasses]=\"['product-carousel']\">\n        <div class=\"product\" *ngFor=\"let image of images2;let i= index\">\n          <div class=\"product_box\">\n            <div class=\"image_box\">\n              <img src=\"{{image.image}}\" alt=\"product\" title=\"\">\n            </div>\n            <div class=\"slide-text\">\n              <div class=\"contain_box\">\n                <h4>Auction ID. BB31470</h4>\n                <a routerLinkActive=\"active\" class=\"link\">Computer Electronics Blowout Auction!</a>\n                <h3>Closed / Ended: $ 100.00</h3>\n                <button class=\"btn btn-primary\">closed</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </owl-carousel>\n    </div>\n  </section>\n\n  <app-footer></app-footer>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "hsj+":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function hsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "eUf4");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "/rnz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(alertController, formBuilder, http, loadingController, storage, router, route) {
          _classCallCheck(this, HomePage);

          this.alertController = alertController;
          this.formBuilder = formBuilder;
          this.http = http;
          this.loadingController = loadingController;
          this.storage = storage;
          this.router = router;
          this.route = route;
          this.images_g = [944, 1011, 984].map(function (n) {
            return "https://picsum.photos/id/".concat(n, "/900/500");
          });
          this.current = 0;
          this.img_list = [{
            url: 'assets/images/banner1.jpg',
            title: 'Retail Inventory11',
            off: 'Exentended for today 60% off'
          }, {
            url: 'assets/images/category7.jpg',
            title: 'Retail Inventory2',
            off: 'Exentended for today 80% off'
          }];
          this.image_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["image_path"];
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
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
          this.images = [{
            text: "Everfresh Flowers",
            image: "assets/images/product5.jpg"
          }, {
            text: "Festive Deer",
            image: "assets/images/product6.jpg"
          }, {
            text: "Morning Greens",
            image: "assets/images/product7.jpg"
          }, {
            text: "Bunch of Love",
            image: "assets/images/product8.jpg"
          }, {
            text: "Blue Clear",
            image: "assets/images/product5.jpg"
          }];
          this.images2 = [{
            text: "Everfresh Flowers",
            image: "assets/images/product1.jpg"
          }, {
            text: "Festive Deer",
            image: "assets/images/product2.jpg"
          }, {
            text: "Morning Greens",
            image: "assets/images/product3.jpg"
          }, {
            text: "Bunch of Love",
            image: "assets/images/product4.jpg"
          }, {
            text: "Blue Clear",
            image: "assets/images/product1.jpg"
          }];
        }

        _createClass(HomePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.productList();
          }
        }, {
          key: "productList",
          value: function productList() {
            var _this = this;

            var formData = new FormData();
            formData.append('', '');
            this.http.post(this.url + 'product-list', formData).subscribe(function (res) {
              console.log(res);

              if (res && res.status) {
                _this.pList = res.response_data;
              } else {
                _this.pList = null;
              }
            });
          }
        }, {
          key: "logScrollStart",
          value: function logScrollStart(event) {}
        }, {
          key: "logScrolling",
          value: function logScrolling(event) {
            if (event.detail.scrollTop > 100) {
              $('.header_bottom').addClass("fix");
            } else {
              $('.header_bottom').removeClass("fix");
            }
          }
        }, {
          key: "logScrollEnd",
          value: function logScrollEnd(event) {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            setInterval(function () {
              _this2.current = ++_this2.current % _this2.img_list.length;
            }, 3000);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      HomePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            read: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"]
          }]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideView', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'translateX(100%)',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'translateX(0)',
          'opacity': 1
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('1 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'translateX(100%)',
          'opacity': 0
        })))])],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map