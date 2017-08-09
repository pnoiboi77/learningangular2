import { Component } from '@angular/core';
import { ProductService } from './products/product-service';

@Component({
    selector: 'pm-app',
    template: `
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" 
                class="navbar-toggle collapsed" data-toggle="collapse"
                 data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Acme</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Products</a></li>
                </ul>          
            </div><!--/.nav-collapse -->
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
    `,
    providers: [ProductService]
})

export class AppComponent {
    pageTitle: string = 'Angular 2';
}