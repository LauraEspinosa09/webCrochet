import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
    { path: 'products', component: ProductCatalogComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent } // Ruta con parámetro
  ];