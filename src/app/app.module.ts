import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    ProductCatalogComponent,
  ],
  providers: [ProductService]
  // Elimina la línea de bootstrap
})
export class AppModule { }