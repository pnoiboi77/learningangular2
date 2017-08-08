import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
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

export class ProductListComponent
    implements OnInit {

    title: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[] = [
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

    ngOnInit(): void {
        console.log('Component Initialized.');
    }
}