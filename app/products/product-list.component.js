"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.title = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.products = [
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
                'rating': 3.5,
                'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/284560/Fish-colored-remix.png'
            }
        ];
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        console.log('Component Initialized.');
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        moduleId: module.id,
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css']
    })
    /* Component Life Cycle
    ----------------------------
    1. Create
    2. Render
    3. Create and Render Children
    4. Process Changes
    5. Destroy
    */
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map