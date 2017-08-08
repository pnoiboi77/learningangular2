import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [ // third party modules
    BrowserModule,
    FormsModule ],
  declarations: [ // modules local to application
    AppComponent,
    ProductListComponent,
    ProductFilterPipe ],
  bootstrap: [ AppComponent ] // starting component
})
export class AppModule { }
