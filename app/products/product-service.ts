import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()

export class ProductService {
    getProducts(): IProduct[] {
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
    }
}