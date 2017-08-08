import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

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
    errorMessage: string;
    products: IProduct[];
    
    constructor(private _ps: ProductService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }    

    ngOnInit(): void {
        console.log('Component Initialized.');
        this._ps.getProducts()
            .subscribe(
                data => this.products = data,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.title = 'Product List: ' + message;
    }
}