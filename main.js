(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n    <div class='preloader'>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>\n</div>\n<app-page-header></app-page-header>\n\n<router-outlet></router-outlet>\n\n<app-page-footer></app-page-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'alfanoos';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"single-page-header about-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>CONTACT US</h2>\n        <ol class=\"breadcrumb header-bradcrumb\">\n          <li><a routerLink=\"/\">Home</a></li>\n          <li class=\"active\">Contact Us</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section contact-head-section\">\n  <div class=\"container\">\n    <div class=\"col-md-10 col-md-offset-1 text-center\">\n      <div class=\"row\">\n        <div class=\"col-md-4 text-center\">\n          <i class=\"fas fa-map-marker-alt\" ></i>\n          <p><b>ADDRESS</b><br /><small>P.O. Box 24037, Jeddah 21446<br />Saudi Arabia</small></p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <i class=\"fas fa-phone\" ></i>\n          <p><b>PHONE</b><br /><small>+966 (12) 6377000</small></p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <i class=\"fas fa-envelope\" ></i>\n          <p><b>EMAIL</b><br /><small>info@contact.com</small></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"contact-section section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <h1>WRITE US</h1>\n        <br />\n        <br />\n      </div>\n      <div class=\"col-md-10 col-md-offset-1 text-center\">\n        <form id=\"contact-form\" method=\"post\" action=\"http://demo.themefisher.com/themefisher/bingo/sendmail.php\"\n          role=\"form\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"First Name\" class=\"form-control\" name=\"name\" id=\"name\">\n              </div>\n\n              <div class=\"form-group\">\n                <input type=\"email\" placeholder=\"Your Email\" class=\"form-control\" name=\"email\" id=\"email\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\" name=\"name\" id=\"name\">\n              </div>\n\n              <div class=\"form-group\">\n                <input type=\"email\" placeholder=\"Company\" class=\"form-control\" name=\"email\" id=\"email\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <textarea rows=\"6\" class=\"form-control\" placeholder=\"Message\"></textarea>\n            </div>\n          </div>\n          <div id=\"mail-success\" class=\"success\">\n            Thank you. The Mailman is on His Way :)\n          </div>\n\n          <div id=\"mail-fail\" class=\"error\">\n            Sorry, don't know what happened. Try later :(\n          </div>\n          <br />\n          <div id=\"cf-submit\">\n            <input type=\"submit\" id=\"contact-submit\" class=\"btn btn-main\" value=\"Send\">\n          </div>\n\n        </form>\n      </div>\n    </div> <!-- End row -->\n  </div> <!-- End container -->\n</section> <!-- End section -->\n<section class=\"section contact-foot-section text-center\">\n    <div class=\"container\">\n        <i class=\"fab fa-facebook\"></i>\n        <i class=\"fab fa-twitter\"></i>\n        <i class=\"fab fa-linkedin\"></i>\n        <i class=\"fab fa-instagram\"></i>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us/contact-us.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/pages/get-started/get-started.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/get-started/get-started.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".guide+.guide::before{\r\n    content: url(/assets/images/get-started/arrow.png);\r\n    position: absolute;\r\n    left : -25px;\r\n    top : 64px;\r\n}\r\n.guide img {\r\n    max-width: 190px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndWlkZSsuZ3VpZGU6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ltYWdlcy9nZXQtc3RhcnRlZC9hcnJvdy5wbmcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdCA6IC0yNXB4O1xyXG4gICAgdG9wIDogNjRweDtcclxufVxyXG4uZ3VpZGUgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTkwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/get-started/get-started.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/get-started/get-started.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"single-page-header get-started-header\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h2>GET STARTED</h2>\n\t\t\t\t<ol class=\"breadcrumb header-bradcrumb\">\n\t\t\t\t  <li><a routerLink=\"/\">Home</a></li>\n\t\t\t\t  <li class=\"active\">Get started</li>\n\t\t\t\t</ol>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <br />\n        <br />\n        <br />\n        <br />\n      </div>\n      <div class=\"col-md-10 col-md-offset-1 text-center\">\n        <div class=\"row\">\n          <div class=\"col-md-3 guide\">\n            <img src=\"/assets/images/get-started/guide-1.png\"/>\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat fuga sint doloremque in non ipsa ea iure aperiam blanditiis earum eum, sed explicabo ratione saepe. Fuga labore nobis repellat.\n          </div>\n          <div class=\"col-md-3 guide\">\n            <img src=\"/assets/images/get-started/guide-2.png\"/>\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat fuga sint doloremque in non ipsa ea iure aperiam blanditiis earum eum, sed explicabo ratione saepe. Fuga labore nobis repellat.\n          </div>\n          <div class=\"col-md-3 guide\">\n            <img src=\"/assets/images/get-started/guide-3.png\"/>\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat fuga sint doloremque in non ipsa ea iure aperiam blanditiis earum eum, sed explicabo ratione saepe. Fuga labore nobis repellat.\n          </div>\n          <div class=\"col-md-3 guide\">\n            <img src=\"/assets/images/get-started/guide-4.png\"/>\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat fuga sint doloremque in non ipsa ea iure aperiam blanditiis earum eum, sed explicabo ratione saepe. Fuga labore nobis repellat.\n          </div>\n        </div>\n        <br />\n        <br />\n        <br />\n        <br />\n      </div>\n      <div class=\"col-md-10 col-md-offset-1 text-center\">\n          \n      </div>\n    </div> <!-- End row -->\n  </div> <!-- End container -->\n</section> <!-- End section -->"

/***/ }),

/***/ "./src/app/pages/get-started/get-started.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/get-started/get-started.component.ts ***!
  \************************************************************/
/*! exports provided: GetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GetStartedComponent = class GetStartedComponent {
    constructor() { }
    ngOnInit() {
    }
};
GetStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-started',
        template: __webpack_require__(/*! ./get-started.component.html */ "./src/app/pages/get-started/get-started.component.html"),
        styles: [__webpack_require__(/*! ./get-started.component.css */ "./src/app/pages/get-started/get-started.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GetStartedComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rev_slider_wrapper fullwidthbanner-container\">\n\n  <!-- the ID here will be used in the inline JavaScript below to initialize the slider -->\n  <div id=\"rev_slider_1\" class=\"rev_slider\" data-version=\"5.4.5\" style=\"display:none\">\n\n    <ul>\n      <!-- *********************** -->\n      <!-- Slides to be added here -->\n      <!-- *********************** -->\n      <li data-transition=\"slideremoveup\" data-delay=\"6000\">\n        <!-- Text Layer with Fade-In Transition -->\n        <!-- SLIDE'S MAIN BACKGROUND IMAGE -->\n        <div class=\"opacity-extra-medium bg-black position-relative z-index-1\"></div>\n        <img src=\"/assets/images/slider/slider-bg-1.jpg\" alt=\"Sky\" class=\"rev-slidebg\">\n        <!-- Start New layer -->\n        <div class=\"tp-caption tp-resizeme z-index-1\"\n          data-frames='[{\"delay\":600,\"speed\":1500,\"frame\":\"0\",\"from\":\"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]'\n          data-textAlign=\"['center']\" data-lineheight=\"['70', '32', '32', '24']\"\n          data-visibility=\"['on', 'on', 'on', 'on']\" data-x=\"center\" data-y=\"center\"\n          data-fontsize=\"['60', '24', '22', '18']\" data-color=\"['#FFF', '#FFF', '#000', '#000']\"\n          style=\"z-index: 7;font-family: 'Catamaran', sans-serif;  text-transform: uppercase;font-weight: 700; letter-spacing:2px;\">\n          DISCOVER OUR SPECIALITY<br>GREEN COFFEE SELECTIONS</div><!-- END LAYER -->\n\n        <a href=\"service.html\" class=\"tp-caption btn btn-main\" data-x=\"['center']\" data-y=\"['center']\"\n          data-whitespace=\"nowrap\" data-visibility=\"['on', 'on', 'on', 'on']\" data-type=\"text\" data-voffset=\"['120']\"\n          data-responsive_offset=\"on\" data-responsive=\"on\"\n          data-frames='[{\"delay\":1500,\"speed\":1500,\"frame\":\"0\",\"from\":\"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]'\n          data-textAlign=\"['center']\" data-basealign=\"slide\">SIGN UP NOW</a>\n\n\n      </li>\n      <li data-transition=\"slideremoveup\" data-delay=\"6000\">\n        <!-- Text Layer with Fade-In Transition -->\n        <!-- SLIDE'S MAIN BACKGROUND IMAGE -->\n        <div class=\"opacity-extra-medium bg-black position-relative z-index-1\"></div>\n        <img src=\"/assets/images/slider/slider-bg-1.jpg\" alt=\"Sky\" class=\"rev-slidebg\">\n        <!-- Start New layer -->\n        <div class=\"tp-caption tp-resizeme z-index-1\"\n          data-frames='[{\"delay\":900,\"speed\":1500,\"frame\":\"0\",\"from\":\"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]'\n          data-textAlign=\"['center']\" data-lineheight=\"['70', '32', '32', '24']\"\n          data-visibility=\"['on', 'on', 'on', 'on']\" data-x=\"center\" data-y=\"center\"\n          data-fontsize=\"['60', '24', '22', '18']\" data-color=\"['#FFF', '#FFF', '#000', '#000']\"\n          style=\"z-index: 7;font-family: 'Catamaran', sans-serif;  text-transform: uppercase;font-weight: 700; letter-spacing:2px;\">\n          DISCOVER OUR SPECIALITY<br>GREEN COFFEE SELECTIONS</div><!-- END LAYER -->\n\n        <a href=\"service.html\" class=\"tp-caption btn btn-main\" data-x=\"['center']\" data-y=\"['center']\"\n          data-whitespace=\"nowrap\" data-visibility=\"['on', 'on', 'on', 'on']\" data-type=\"text\" data-voffset=\"['120']\"\n          data-responsive_offset=\"on\" data-responsive=\"on\"\n          data-frames='[{\"delay\":2000,\"speed\":1500,\"frame\":\"0\",\"from\":\"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]'\n          data-textAlign=\"['center']\" data-basealign=\"slide\">SIGN UP NOW</a>\n\n\n      </li>\n\n    </ul>\n    <div class=\"tp-bannertimer  tp-bottom\" style=\"height: 6px; background-color: rgba(0, 0, 0, 0.25);\"></div>\n\n  </div>\n\n</div>\n<section class=\"blog\" id=\"blog\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- section title -->\n      <div class=\"title text-center\">\n        <h2>WE ARE GREEN SPECIALITY COFFEE SUPPLIERS</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur\n          adipisicing elit. Voluptates, earum. </p>\n        <!-- <div class=\"border\"></div> -->\n      </div>\n      <!-- /section title -->\n      <!-- single blog post -->\n      <article class=\"col-md-4 col-sm-6 col-xs-12 clearfix \">\n        <div class=\"post-item\">\n          <div class=\"media-wrapper\">\n            <img src=\"/assets/images/blog/post-1.jpg\" alt=\"amazing caves coverimage\" class=\"img-responsive\">\n          </div>\n\n          <div class=\"content\">\n            <h3><a href=\"single-post.html\">NEW SPOTS</a></h3>\n            <div class=\"border\"></div>\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non skateboard dolor brunch.</p>\n          </div>\n        </div>\n      </article>\n      <!-- /single blog post -->\n\n      <!-- single blog post -->\n      <article class=\"col-md-4 col-sm-6 col-xs-12 \">\n        <div class=\"post-item\">\n          <div class=\"media-wrapper\">\n            <img src=\"/assets/images/blog/post-2.jpg\" alt=\"amazing caves coverimage\" class=\"img-responsive\">\n          </div>\n\n          <div class=\"content\">\n            <h3><a href=\"single-post.html\">MICROLOTS</a></h3>\n            <div class=\"border\"></div>\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non skateboard dolor brunch.</p>\n          </div>\n        </div>\n      </article>\n      <!-- end single blog post -->\n\n      <!-- single blog post -->\n      <article class=\"col-md-4 col-sm-6 col-xs-12 \">\n        <div class=\"post-item\">\n          <div class=\"media-wrapper\">\n            <img src=\"/assets/images/blog/post-3.jpg\" alt=\"amazing caves coverimage\" class=\"img-responsive\">\n          </div>\n\n          <div class=\"content\">\n            <h3><a href=\"single-post.html\">ORGANICS</a></h3>\n            <div class=\"border\"></div>\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non skateboard dolor brunch.</p>\n          </div>\n        </div>\n      </article>\n      <!-- end single blog post -->\n    </div> <!-- end row -->\n  </div> <!-- end container -->\n</section> <!-- end section -->\n\n<!--\nStart Call To Action\n==================================== -->\n<section class=\"call-to-action section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <h1>ABOUT US</h1>\n        <br />\n      </div>\n      <div class=\"col-md-6 col-md-offset-3 text-center black-box\">\n        <p>We are Green Specialty Coffee suppliers. We import it from different parts of the world and sell them to\n          our clients. Our target audience are very very specific, micro-roasters (specialty coffee roasters) within\n          Saudi Arabia. Most of our target audience could be described as: young, entrepreneurs, trendy, westernized,\n          hippies, stylish, ...</p>\n        <a href=\"#\" class=\"btn btn-main\">Contact Us</a>\n      </div>\n    </div> <!-- End row -->\n  </div> <!-- End container -->\n</section> <!-- End section -->\n\n<!--\nStart Call To Action\n==================================== -->\n<section class=\"contact-section section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <h1>CONTACT US</h1>\n        <br />\n        <br />\n      </div>\n      <div class=\"col-md-10 col-md-offset-1 text-center\">\n          <div class=\"row\">\n              <div class=\"col-md-4 text-center\">\n                <i class=\"fas fa-map-marker-alt\" ></i>\n                <p><b>ADDRESS</b><br /><small>P.O. Box 24037, Jeddah 21446<br />Saudi Arabia</small></p>\n              </div>\n              <div class=\"col-md-4 text-center\">\n                <i class=\"fas fa-phone\" ></i>\n                <p><b>PHONE</b><br /><small>+966 (12) 6377000</small></p>\n              </div>\n              <div class=\"col-md-4 text-center\">\n                <i class=\"fas fa-envelope\" ></i>\n                <p><b>EMAIL</b><br /><small>info@contact.com</small></p>\n              </div>\n            </div>\n\n      <br/>\n      <br/>\n      <br/>\n      </div>\n      <div class=\"col-md-10 col-md-offset-1 text-center\">\n          <form id=\"contact-form\" method=\"post\" action=\"http://demo.themefisher.com/themefisher/bingo/sendmail.php\" role=\"form\">\n            <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"First Name\" class=\"form-control\" name=\"name\" id=\"name\">\n              </div>\n\n              <div class=\"form-group\">\n              <input type=\"email\" placeholder=\"Your Email\" class=\"form-control\" name=\"email\" id=\"email\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\" name=\"name\" id=\"name\">\n              </div>\n\n              <div class=\"form-group\">\n              <input type=\"email\" placeholder=\"Company\" class=\"form-control\" name=\"email\" id=\"email\">\n              </div>\n            </div>\n          </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <textarea rows=\"6\" class=\"form-control\" placeholder=\"Message\"></textarea>\n              </div>\n            </div>\n            <div id=\"mail-success\" class=\"success\">\n              Thank you. The Mailman is on His Way :)\n            </div>\n            \n            <div id=\"mail-fail\" class=\"error\">\n              Sorry, don't know what happened. Try later :(\n            </div>\n            <br/>\n            <div id=\"cf-submit\">\n              <input type=\"submit\" id=\"contact-submit\" class=\"btn btn-main\" value=\"Send\">\n            </div>\t\t\t\t\t\t\n            \n          </form>\n      </div>\n    </div> <!-- End row -->\n  </div> <!-- End container -->\n</section> <!-- End section -->"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        $('#rev_slider_1').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'fullscreen',
            /* basic navigation arrows and bullets */
            navigation: {
                arrows: {
                    style: 'zeus',
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 30,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: 'metis',
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: 'horizontal',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                }
            }
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./philosophy/philosophy.component */ "./src/app/pages/philosophy/philosophy.component.ts");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-started/get-started.component */ "./src/app/pages/get-started/get-started.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/pages/shop/shop.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'philosophy', component: _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_5__["PhilosophyComponent"] },
    { path: 'get-started', component: _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"] }
];
let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"], _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_5__["PhilosophyComponent"], _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/pages/philosophy/philosophy.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/philosophy/philosophy.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BoaWxvc29waHkvcGhpbG9zb3BoeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/philosophy/philosophy.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/philosophy/philosophy.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"single-page-header philosophy-header\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h2>OUR PHILOSOPHY</h2>\n\t\t\t\t<ol class=\"breadcrumb header-bradcrumb\">\n\t\t\t\t  <li><a routerLink=\"/\">Home</a></li>\n\t\t\t\t  <li class=\"active\">Our Philosophy</li>\n\t\t\t\t</ol>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"philosophy-1 section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <h1>RELATIONSHIPS</h1>\n        <br />\n      </div>\n      <div class=\"col-md-6 col-md-offset-3 text-center black-box\">\n        <p>We are Green Specialty Coffee suppliers. We import it from different parts of the world and sell them to\n          our clients. Our target audience are very very specific, micro-roasters (specialty coffee roasters) within\n          Saudi Arabia. Most of our target audience could be described as: young, entrepreneurs, trendy, westernized,\n          hippies, stylish, ...</p>\n        <!-- <a href=\"#\" class=\"btn btn-main\">Contact Us</a> -->\n      </div>\n    </div> <!-- End row -->\n  </div> <!-- End container -->\n</section> <!-- End section -->\n<section class=\"philosophy-2 section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <h1>QUALITY</h1>\n        <br />\n      </div>\n      <div class=\"col-md-6 col-md-offset-3 text-center black-box\">\n        <p>We are Green Specialty Coffee suppliers. We import it from different parts of the world and sell them to\n          our clients. Our target audience are very very specific, micro-roasters (specialty coffee roasters) within\n          Saudi Arabia. Most of our target audience could be described as: young, entrepreneurs, trendy, westernized,\n          hippies, stylish, ...</p>\n        <!-- <a href=\"#\" class=\"btn btn-main\">Contact Us</a> -->\n      </div>\n    </div> <!-- End row -->\n  </div> <!-- End container -->\n</section> <!-- End section -->\n<section class=\"philosophy-3 section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <h1>PARTNERS</h1>\n        <br />\n      </div>\n      <div class=\"col-md-6 col-md-offset-3 text-center black-box\">\n        <p>We are Green Specialty Coffee suppliers. We import it from different parts of the world and sell them to\n          our clients. Our target audience are very very specific, micro-roasters (specialty coffee roasters) within\n          Saudi Arabia. Most of our target audience could be described as: young, entrepreneurs, trendy, westernized,\n          hippies, stylish, ...</p>\n        <!-- <a href=\"#\" class=\"btn btn-main\">Contact Us</a> -->\n      </div>\n    </div> <!-- End row -->\n  </div> <!-- End container -->\n</section> <!-- End section -->"

/***/ }),

/***/ "./src/app/pages/philosophy/philosophy.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/philosophy/philosophy.component.ts ***!
  \**********************************************************/
/*! exports provided: PhilosophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhilosophyComponent", function() { return PhilosophyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhilosophyComponent = class PhilosophyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhilosophyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-philosophy',
        template: __webpack_require__(/*! ./philosophy.component.html */ "./src/app/pages/philosophy/philosophy.component.html"),
        styles: [__webpack_require__(/*! ./philosophy.component.css */ "./src/app/pages/philosophy/philosophy.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhilosophyComponent);



/***/ }),

/***/ "./src/app/pages/shop/shop.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/shop/shop.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop-section{\r\n    min-height: 100%;\r\n    min-height: 100%\r\n}\r\n\r\n.filter-area{\r\n    background: #eceade;\r\n    height: 100%;\r\n}\r\n\r\n.products-area{\r\n    background: #ffffff;\r\n}\r\n\r\n.shop-section .content-area{\r\n    margin-top: 40px;\r\n    padding: 3px 30px;\r\n}\r\n\r\n.table>tbody>tr>th, .table>tbody>tr>td {\r\n    padding: 30px 10px;\r\n}\r\n\r\n.table>tbody>tr>th{\r\n    font-weight: 800;\r\n    font-size: 16px;\r\n    font-family: \"Catamaran\", sans-serif;\r\n}\r\n\r\n.table>tbody>tr>th .description, .table>tbody>tr>td .description{\r\n    display: block;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    color: #d0af7a;\r\n}\r\n\r\n.table>tbody>tr>th button, .table>tbody>tr>td button{\r\n    padding: 5px 40px;\r\n    font-size: 14px;\r\n}\r\n\r\n.create-offer-sheet-button{\r\n    padding: 5px 40px;\r\n    background: white;\r\n    font-size: 14px;\r\n}\r\n\r\n.panel-heading{\r\n    background-color: #eceade;\r\n    border-color: #eceade;\r\n}\r\n\r\n.panel-body{\r\n    background-color: #eceade;\r\n}\r\n\r\n.panel{\r\n    box-shadow:none;\r\n    border: none;\r\n    /* border-color: #eceade; */\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.panel-title {\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    color: #7a7770;\r\n}\r\n\r\n.chip {\r\n    display: inline-block;\r\n    padding: 0px 15px;\r\n    margin-bottom: 10px;\r\n    line-height: 27px;\r\n    height: 28px;\r\n    font-size: 16px;\r\n    border-radius: 25px;\r\n    color: white;\r\n  }\r\n\r\n.color{\r\n    background-color: #d0af7a;\r\n  }\r\n\r\n.white{\r\n    background-color: #fff;\r\n    color: #7a7770;\r\n  }\r\n\r\n.closebtn {\r\n    padding-left: 10px;\r\n    color: #ffffffbd;\r\n    font-weight: bold;\r\n    float: right;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.closebtn:hover {\r\n    color: #000;\r\n  }\r\n\r\n.panel-default>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:transparent;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLDRCQUE0QjtFQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3Atc2VjdGlvbntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbi5maWx0ZXItYXJlYXtcclxuICAgIGJhY2tncm91bmQ6ICNlY2VhZGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1hcmVhe1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNob3Atc2VjdGlvbiAuY29udGVudC1hcmVhe1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmc6IDNweCAzMHB4O1xyXG59XHJcblxyXG4udGFibGU+dGJvZHk+dHI+dGgsIC50YWJsZT50Ym9keT50cj50ZCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbn1cclxuXHJcbi50YWJsZT50Ym9keT50cj50aHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYXRhbWFyYW5cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRhYmxlPnRib2R5PnRyPnRoIC5kZXNjcmlwdGlvbiwgLnRhYmxlPnRib2R5PnRyPnRkIC5kZXNjcmlwdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZDBhZjdhO1xyXG59XHJcblxyXG4udGFibGU+dGJvZHk+dHI+dGggYnV0dG9uLCAudGFibGU+dGJvZHk+dHI+dGQgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jcmVhdGUtb2ZmZXItc2hlZXQtYnV0dG9ue1xyXG4gICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlYWRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWNlYWRlO1xyXG59XHJcblxyXG4ucGFuZWwtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VhZGU7XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgIGJveC1zaGFkb3c6bm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8qIGJvcmRlci1jb2xvcjogI2VjZWFkZTsgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4ucGFuZWwtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjN2E3NzcwO1xyXG59XHJcblxyXG4uY2hpcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBhZjdhO1xyXG4gIH1cclxuXHJcbiAgLndoaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjN2E3NzcwO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmYmQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/shop/shop.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/shop/shop.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"single-page-header shop-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>ALL CURRENT CROP</h2>\n        <ol class=\"breadcrumb header-bradcrumb\">\n          <li><a routerLink=\"/\">Home</a></li>\n          <li class=\"active\">Shop</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"shop-section\">\n  <div class=\"container\">\n    <div class=\"relative\">\n      <div class=\"col-md-3 filter-area\">\n        <div class=\"content-area\">\n          <h4>FILTER COFFEES</h4>\n          <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                <h4 class=\"panel-title\">\n                  <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"\n                    aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                    STATUS\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"panel-body\">\n                  <div class=\"chip color\">\n                    America\n                    <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none'\">&times;</span>\n                  </div>\n                  <div class=\"chip white\">\n                    Colombia\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                <h4 class=\"panel-title\">\n                  <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\"\n                    aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                    ORIGIN\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                <div class=\"panel-body\">\n                  <div class=\"chip color\">\n                    America\n                    <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none'\">&times;</span>\n                  </div>\n                  <div class=\"chip white\">\n                    Colombia\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                <h4 class=\"panel-title\">\n                  <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                    href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                    CERTIFICATIONS\n                  </a>\n                </h4>\n              </div>\n              <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                <div class=\"panel-body\">\n                  <div class=\"chip color\">\n                    America\n                    <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none'\">&times;</span>\n                  </div>\n                  <div class=\"chip white\">\n                    Colombia\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-9 products-area\">\n        <div class=\"row\">\n          <div class=\"content-area\">\n            <p class=\"text-muted\">Shop all our green coffees from over 25 different origins. We're proud to work with\n              some of the finest producers, mills and exporters worldwide. Filter by spot, forward, top lots, processing\n              method and more to find what you need.</p>\n            <div class=\"text-center\">\n              <br />\n              <button class=\"create-offer-sheet-button btn btn-transparent\">Create offer sheet</button>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Bolivia SHG EP FTO - Bio Arabica <span class=\"description\">Dried apple, toffee,\n                            walnut</span></th>\n                        <td><b>Lot#:</b><br /><span class=\"text-muted\">PC1213#1</span></td>\n                        <td><b>ETA:</b><br /><span class=\"text-muted\">Spot</span></td>\n                        <td><b>Bags Available:</b><br /><span class=\"text-muted\">115</span></td>\n                        <td><b>Price Per Kg:</b><span class=\"description\">Login</span></td>\n                        <td><button class=\"btn btn-main\" type=\"button\">DETAILS</button></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> <!-- End container -->\n</section> <!-- End section -->"

/***/ }),

/***/ "./src/app/pages/shop/shop.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/shop/shop.component.ts ***!
  \**********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShopComponent = class ShopComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! ./shop.component.html */ "./src/app/pages/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/pages/shop/shop.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShopComponent);



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"single-page-header about-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2>CREATE YOUR ACCOUNT</h2>\n          <ol class=\"breadcrumb header-bradcrumb\">\n            <li><a routerLink=\"/\">Home</a></li>\n            <li class=\"active\">Create your account</li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </section>\n<section class=\"contact-section section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\">\n          <form id=\"contact-form\" method=\"post\" role=\"form\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"First Name *\" class=\"form-control\" name=\"name\" id=\"name\">\n                </div>\n  \n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Company\" class=\"form-control\" name=\"email\" id=\"email\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Last Name *\" class=\"form-control\" name=\"name\" id=\"name\">\n                </div>\n  \n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Mobile number *\" class=\"form-control\" name=\"email\" id=\"email\">\n                  <span class=\"text-left text-muted\">This will be used as your user name</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Email Address *\" class=\"form-control\" name=\"name\" id=\"name\">\n                </div>\n  \n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"City\" class=\"form-control\" name=\"email\" id=\"email\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Country *\" class=\"form-control\" name=\"name\" id=\"name\">\n                </div>\n  \n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Area *\" class=\"form-control\" name=\"email\" id=\"email\">\n                  <span class=\"text-left text-muted\">For the delivery location</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Nearest Landmark (if any) *\" class=\"form-control\" name=\"name\" id=\"name\">\n                  <span class=\"text-left text-muted\">For the delivery location</span>\n                </div>\n                <br/>\n              <br/>\n              <br/>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"checkbox checkbox-warning\">\n                        <input id=\"checkbox5\" type=\"checkbox\" checked=\"\">\n                        <label for=\"checkbox5\">Contact person for delivery is different</label>\n                      </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"First Name *\" class=\"form-control\" name=\"name\" id=\"name\">\n                  </div>\n    \n                  <div class=\"form-group\">\n                    <input type=\"email\" placeholder=\"Mobile number *\" class=\"form-control\" name=\"email\" id=\"email\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Last Name *\" class=\"form-control\" name=\"name\" id=\"name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n            <div id=\"mail-success\" class=\"success\">\n              Thank you. The Mailman is on His Way :)\n            </div>\n  \n            <div id=\"mail-fail\" class=\"error\">\n              Sorry, don't know what happened. Try later :(\n            </div>\n          </div>\n            <br />\n            <div class=\"row text-center\">\n            <div id=\"cf-submit\">\n              <input type=\"submit\" id=\"contact-submit\" class=\"btn btn-transparent\" value=\"Reset\" style=\"margin-right:5px\">\n              <input type=\"submit\" id=\"contact-submit\" class=\"btn btn-main\" value=\"Next\">\n            </div>\n          </div>\n          </form>\n        </div>\n      </div> <!-- End row -->\n    </div> <!-- End container -->\n  </section> <!-- End section -->"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignUpComponent = class SignUpComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/pages/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/pages/sign-up/sign-up.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignUpComponent);



/***/ }),

/***/ "./src/app/shared/components/page-footer/page-footer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/page-footer/page-footer.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtZm9vdGVyL3BhZ2UtZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/page-footer/page-footer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-footer/page-footer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-bottom\">\n    <img src=\"/assets/images/logo-white.png\" />\n    <h5>&copy; 2019 Al Fanoos Specialty Coffee</h5>\n  </div>\n</footer> <!-- end footer -->\n"

/***/ }),

/***/ "./src/app/shared/components/page-footer/page-footer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-footer/page-footer.component.ts ***!
  \************************************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageFooterComponent = class PageFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-footer',
        template: __webpack_require__(/*! ./page-footer.component.html */ "./src/app/shared/components/page-footer/page-footer.component.html"),
        styles: [__webpack_require__(/*! ./page-footer.component.css */ "./src/app/shared/components/page-footer/page-footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageFooterComponent);



/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navigation navbar navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <!-- responsive nav button -->\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- /responsive nav button -->\n      <!-- logo -->\n      <a class=\"navbar-brand logo\" routerLink=\"/\">\n        <img class=\"logo-default\" src=\"/assets/images/logo.png\" alt=\"logo\" />\n        <img class=\"logo-white\" src=\"/assets/images/logo-white.png\" alt=\"logo\" />\n      </a>\n      <!-- /logo -->\n    </div>\n    <!-- main nav -->\n    <nav class=\"collapse navbar-collapse navbar-right\">\n      <ul id=\"nav\" class=\"nav navbar-nav menu\">\n        <li><a routerLink=\"/philosophy\">OUR PHILOSOPHY</a></li>\n        <li><a routerLink=\"/get-started\">GET STARTED</a></li>\n        <li><a routerLink=\"/shop\">SHOP COFFEES</a></li>\n        <li><a routerLink=\"/contact-us\">CONTACT</a></li>\n        <li class=\"dropdown\">\n          <a style=\"border: 1px solid #ccc;border-radius: 17px;padding: 1px 20px !important;margin-top: 19px;\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">DAVID <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/sign-up\">MY ACCOUNT</a></li>\n            <li><a href=\"blog.html\">MY ORDERS</a></li>\n            <li><a href=\"blog.html\">MY WISHLIST</a></li>\n            <li><a href=\"blog.html\">TALK TO US</a></li>\n            <li><a href=\"blog.html\">LOGOUT</a></li>\n          </ul>\n        </li>\n        <li><a href=\"about.html\"><i class=\"fas fa-shopping-cart\" style=\"color: #d0af7a;\"></i></a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">ENG <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"404.html\">FR</a></li>\n            <li><a href=\"blog.html\">SY</a></li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- /main nav -->\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageHeaderComponent = class PageHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/shared/components/page-header/page-header.component.html"),
        styles: [__webpack_require__(/*! ./page-header.component.css */ "./src/app/shared/components/page-header/page-header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _components_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-footer/page-footer.component */ "./src/app/shared/components/page-footer/page-footer.component.ts");






const components = [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _components_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__["PageFooterComponent"]];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: components,
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        exports: components
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Storilabs\al-fanoos\alfanoos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map