"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product-service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Angular 2';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n    <nav class=\"navbar navbar-default navbar-static-top\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" \n                class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n                 data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">Acme</a>\n            </div>\n            <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['/products']\">Products</a></li>\n                </ul>          \n            </div><!--/.nav-collapse -->\n        </div>\n    </nav>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-1\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n    ",
        providers: [product_service_1.ProductService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map