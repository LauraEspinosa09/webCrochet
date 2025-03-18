import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './app.routes';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterOutlet,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    DashboardComponent,
    HttpClientModule,
    AppComponent,
    ProductCatalogComponent,
    FormsModule,
    CommonModule,
    ],
  providers: [ProductService, AuthService]
})
export class AppModule { }