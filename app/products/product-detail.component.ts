import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {    
    product: IProduct;
    pageTitle: string = this.product.name;    

    ngOnInit(): void {
        return;
    }
}