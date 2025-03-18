import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductService } from './services/product.service';
import { LoginComponent } from "./login/login.component";
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { auditTime } from 'rxjs';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HttpClientModule,
    ProductCatalogComponent,
    LoginComponent,
    DashboardComponent,
    RouterOutlet,
    RouterModule
],
  providers: [ProductService,AuthService],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}