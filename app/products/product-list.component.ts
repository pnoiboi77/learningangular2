import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {
    title: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: any[] = [
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

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}