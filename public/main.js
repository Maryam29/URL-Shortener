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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"margin:5px\">\n    <router-outlet></router-outlet>\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url.service */ "./src/app/url.service.ts");
/* harmony import */ var _file_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-client.service */ "./src/app/file-client.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _short_url_short_url_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./short-url/short-url.component */ "./src/app/short-url/short-url.component.ts");
/* harmony import */ var _input_url_input_url_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-url/input-url.component */ "./src/app/input-url/input-url.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], children: [
            { path: '', component: _input_url_input_url_component__WEBPACK_IMPORTED_MODULE_9__["InputURLComponent"], pathMatch: 'full' },
            { path: ':shorturl', component: _short_url_short_url_component__WEBPACK_IMPORTED_MODULE_8__["ShortURLComponent"] },
        ] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _short_url_short_url_component__WEBPACK_IMPORTED_MODULE_8__["ShortURLComponent"],
                _input_url_input_url_component__WEBPACK_IMPORTED_MODULE_9__["InputURLComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_url_service__WEBPACK_IMPORTED_MODULE_5__["URLService"], _file_client_service__WEBPACK_IMPORTED_MODULE_6__["FileUploadClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file-client.service.ts":
/*!****************************************!*\
  !*** ./src/app/file-client.service.ts ***!
  \****************************************/
/*! exports provided: FileUploadClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadClientService", function() { return FileUploadClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploadClientService = /** @class */ (function () {
    function FileUploadClientService(http) {
        this.http = http;
    }
    FileUploadClientService.prototype.uploadDatasource = function (payload) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Accept', 'application/json, text/plain,');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post("API_UPLOAD_PATH", payload, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var data = res.json();
            return data;
        }));
    };
    FileUploadClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FileUploadClientService);
    return FileUploadClientService;
}());



/***/ }),

/***/ "./src/app/input-url/input-url.component.css":
/*!***************************************************!*\
  !*** ./src/app/input-url/input-url.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/input-url/input-url.component.html":
/*!****************************************************!*\
  !*** ./src/app/input-url/input-url.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Welcome to the URL shortening Service</h4>\n<div class=\"row\">\n    <div class=\"col-md-10\">\n        <div class=\"form-group\">\n            <input type=\"text\" \n            class=\"form-control\" \n            placeholder=\"Enter the link to shorten it\" \n            [(ngModel)]=\"longurl\"\n            #url=\"ngModel\"/>\n            <br>\n          </div>\n        </div>\n        \n        <div class=\"col-md-2\">\n            <button class=\"btn btn-primary\" (click)=\"onShortenURL()\">Shorten URL</button>\n        </div>\n        <div class=\"col-md-4\" *ngIf=\"shorturl\">\n            Output: \n            <a [routerLink]=\"['/',shorturl]\"  [target]=\"'_blank'\">\n             /{{shorturl}}\n          </a>\n        </div>\n        <div class=\"col-md-10\" style=\"margin:5px\">\n          <input type=\"file\" class=\"upload\" (change)=\"changeListener($event.target.files)\">\n        </div>\n        <br>\n</div>\n\n\n\n <div class=\"row\">\n   <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-striped table-condensed\" *ngIf=\"allurls.length>0\">\n          <tr><th></th><th>Original URL</th><th>ShortURL</th><th>Created At</th></tr>\n          <tr *ngFor=\"let url of allurls; let j=index\">\n            <td>\n                <input type=\"checkbox\" [checked]=\"isChecked[j]\" (change)=\"ToggleSelection(j)\">\n            </td>\n            <td>\n              <a [href]='url.OriginalURL'  [target]=\"'_blank'\">\n                  {{url.OriginalURL}}\n             </a>\n            </td>\n            <td>\n              <a [routerLink]=\"['/',url.ShortURL]\"  [target]=\"'_blank'\">\n                /{{url.ShortURL}}\n             </a>\n            </td>\n            <td>\n              {{url.updatedAt | date:'mediumDate'}}\n            </td>\n          </tr>\n        </table>\n        <button class=\"btn btn-danger pull-right\" *ngIf=\"allurls.length>0\" (click)=\"DeleteURLs()\">Delete URLs</button>\n   </div>\n </div>\n\n"

/***/ }),

/***/ "./src/app/input-url/input-url.component.ts":
/*!**************************************************!*\
  !*** ./src/app/input-url/input-url.component.ts ***!
  \**************************************************/
/*! exports provided: InputURLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputURLComponent", function() { return InputURLComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url.service */ "./src/app/url.service.ts");
/* harmony import */ var _file_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-client.service */ "./src/app/file-client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputURLComponent = /** @class */ (function () {
    function InputURLComponent(URLservice, route, router, fileuploadclientservice) {
        this.URLservice = URLservice;
        this.route = route;
        this.router = router;
        this.fileuploadclientservice = fileuploadclientservice;
        this.shorturl = '';
    }
    InputURLComponent.prototype.ngOnInit = function () {
        this.allurls = new Array();
        this.GetAllURLs();
    };
    InputURLComponent.prototype.GetAllURLs = function () {
        var _this = this;
        this.URLservice.GetAllURLs().subscribe(function (res) {
            if (res) {
                _this.allurls = res;
                _this.isChecked = new Array(_this.allurls.length).fill(false);
            }
        });
    };
    InputURLComponent.prototype.onShortenURL = function () {
        var _this = this;
        this.URLservice.GenerateShortenedURL(this.longurl).subscribe(function (res) {
            if (res) {
                // console.log(this.router.url);
                _this.shorturl = res.ShortURL;
                _this.GetAllURLs();
                _this.isChecked = new Array(_this.allurls.length).fill(false);
            }
        });
    };
    InputURLComponent.prototype.ToggleSelection = function (j) {
        this.isChecked[j] = !this.isChecked[j];
    };
    InputURLComponent.prototype.DeleteURLs = function () {
        var _this = this;
        var Objects = new Array();
        for (var j = 0; j < this.allurls.length; j++) {
            if (this.isChecked[j]) {
                Objects.push(this.allurls[j]);
            }
        }
        if (Objects.length > 0) {
            this.URLservice.DeleteURLs(Objects).subscribe(function (res) {
                console.log(res);
                if (res.n > 0) {
                    _this.GetAllURLs();
                }
            });
        }
    };
    InputURLComponent.prototype.changeListener = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0);
            //  console.log(file.name);
            //  console.log(file.size);
            //  console.log(file.type);
            var reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (e) {
                var csv = reader_1.result;
                var allTextLines = csv.split(/\r?\n|\r/);
                console.log(allTextLines.length);
                for (var i = 0; i < allTextLines.length; i++) {
                    var data = allTextLines[i].split(',');
                    console.log(data[0]);
                    if (data[0] !== '') {
                        _this.URLservice.GenerateShortenedURL(data[0]).subscribe(function (res) {
                            if (res) {
                                _this.GetAllURLs();
                                _this.isChecked = new Array(_this.allurls.length).fill(false);
                            }
                        });
                    }
                }
            };
        }
    };
    InputURLComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-url',
            template: __webpack_require__(/*! ./input-url.component.html */ "./src/app/input-url/input-url.component.html"),
            styles: [__webpack_require__(/*! ./input-url.component.css */ "./src/app/input-url/input-url.component.css")]
        }),
        __metadata("design:paramtypes", [_url_service__WEBPACK_IMPORTED_MODULE_2__["URLService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _file_client_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadClientService"]])
    ], InputURLComponent);
    return InputURLComponent;
}());



/***/ }),

/***/ "./src/app/short-url/short-url.component.css":
/*!***************************************************!*\
  !*** ./src/app/short-url/short-url.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/short-url/short-url.component.html":
/*!****************************************************!*\
  !*** ./src/app/short-url/short-url.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Fetching Original URL...\n</p>\n"

/***/ }),

/***/ "./src/app/short-url/short-url.component.ts":
/*!**************************************************!*\
  !*** ./src/app/short-url/short-url.component.ts ***!
  \**************************************************/
/*! exports provided: ShortURLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortURLComponent", function() { return ShortURLComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url.service */ "./src/app/url.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShortURLComponent = /** @class */ (function () {
    function ShortURLComponent(URLservice, route, router) {
        this.URLservice = URLservice;
        this.route = route;
        this.router = router;
    }
    ShortURLComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](params)) {
                _this.URLservice.FetchOriginalURL(params['shorturl']).subscribe(function (res) {
                    if (res.length > 0) {
                        _this.OriginalURL = res[0].OriginalURL;
                        console.log(_this.OriginalURL);
                        window.location.href = _this.OriginalURL;
                        // this.router.navigate([this.OriginalURL]);
                    }
                });
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    ShortURLComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-short-url',
            template: __webpack_require__(/*! ./short-url.component.html */ "./src/app/short-url/short-url.component.html"),
            styles: [__webpack_require__(/*! ./short-url.component.css */ "./src/app/short-url/short-url.component.css")]
        }),
        __metadata("design:paramtypes", [_url_service__WEBPACK_IMPORTED_MODULE_2__["URLService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShortURLComponent);
    return ShortURLComponent;
}());



/***/ }),

/***/ "./src/app/url.service.ts":
/*!********************************!*\
  !*** ./src/app/url.service.ts ***!
  \********************************/
/*! exports provided: URLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLService", function() { return URLService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URLService = /** @class */ (function () {
    function URLService(http) {
        this.http = http;
        this.countries = new Array();
    }
    URLService.prototype.GenerateShortenedURL = function (originalUrl) {
        var domain = this.getDomain(originalUrl);
        var longurl = 'https://' + 'www.' + domain;
        return this.http.post('getURLshortened', { originalUrl: longurl }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Generate Short URL');
            }
            else {
                return res.json();
            }
        }));
    };
    URLService.prototype.getDomain = function (originalUrl) {
        var prefix = /^https?:\/\//;
        var prefix2 = /^www./;
        var domain = /^[^\/:]+/;
        // remove any prefix
        originalUrl = originalUrl.replace(prefix, '');
        originalUrl = originalUrl.replace(prefix2, '');
        // assume any URL that starts with a / is on the current page's domain
        if (originalUrl.charAt(0) === '/') {
            originalUrl = window.location.hostname + originalUrl;
        }
        return originalUrl;
        // now extract just the domain
        // const match = originalUrl.match(domain);
        // if (match) {
        //     return(match[0]);
        // }
        // return(null);
    };
    URLService.prototype.GetAllURLs = function () {
        return this.http.get('getAllURLs').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t get form controls');
            }
            else {
                return res.json();
            }
        }));
    };
    URLService.prototype.FetchOriginalURL = function (shorturl) {
        return this.http.post('fetchOriginalURL', { shorturl: shorturl }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Generate Short URL');
            }
            else {
                return res.json();
            }
        }));
    };
    URLService.prototype.DeleteURLs = function (Objectids) {
        return this.http.post('deleteURLs', { ObjectIds: Objectids }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t delete URLs');
            }
            else {
                return res.json();
            }
        }));
    };
    URLService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], URLService);
    return URLService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Backup\Personal stuff\CodingPractice\AngularJS\ZipGoAssignment\Urlshortener\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map