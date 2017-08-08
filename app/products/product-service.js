"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return [
            {
                'productId': 1,
                'name': 'Babel',
                'code': 'G22-SDFF',
                'available': 'March 18, 2016',
                'description': 'blah',
                'price': 20.99,
                'rating': 4.2,
                'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/284562/publicdomainq-strong_smartphone-mobile-phone.png'
            },
            {
                'productId': 3,
                'name': 'Hot Dog',
                'code': 'ABB-388D',
                'available': 'December 18, 2016',
                'description': 'blah',
                'price': 40.99,
                'rating': 1.5,
                'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/284560/Fish-colored-remix.png'
            },
            {
                'productId': 3,
                'name': 'Hot Dog',
                'code': 'ABB-388D',
                'available': 'December 18, 2016',
                'description': 'blah',
                'price': 40.99,
                'rating': 3.5,
                'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/284560/Fish-colored-remix.png'
            }
        ];
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map