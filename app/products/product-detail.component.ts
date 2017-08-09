import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from './product-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

// guards canactivate, candeactivate, resolve, canload.

export class ProductDetailComponent implements OnInit {      
    product: IProduct = new Product();
    pageTitle: string = 'Product Detail';    

    constructor(private _route: ActivatedRoute,
        private _router: Router) { }
    
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id']; // plus is shortcut to convert string to numeric id.

        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}