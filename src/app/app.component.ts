import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HttpClientModule,
    ProductCatalogComponent,
],
  providers: [ProductService],
  template: '<app-product-catalog></app-product-catalog>'
})
export class AppComponent {}