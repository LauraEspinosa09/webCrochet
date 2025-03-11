import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  isEditMode: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        console.log('Datos recibidos:', JSON.stringify(data, null, 2));
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching products', error);
      }
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = { ...product };
    this.isEditMode = true;
  }

  openCreateForm() {
    this.selectedProduct = { id: 0, name: '', description: '', price: 0, image: '' };
    this.isEditMode = false;
  }

  closeModal(event: Event) {
    // Only close if clicking directly on the backdrop or close button
    if (
      (event.target as HTMLElement).classList.contains('modal-backdrop') ||
      (event.target as HTMLElement).classList.contains('close-btn') ||
      (event.target as HTMLElement).classList.contains('cancel-btn')
    ) {
      this.selectedProduct = null;
    }
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe({
      next: () => {
        this.loadProducts();
        this.selectedProduct = null;
        this.isEditMode = false;
      },
      error: (error) => {
        console.error('Error actualizando el producto', error);
      }
    });
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe({
      next: (newProduct) => {
        console.log('Producto creado:', newProduct);
        this.loadProducts();
        this.selectedProduct = null;
        this.isEditMode = false;
      },
      error: (error) => {
        console.error('Error creando el producto', error);
      }
    });
  }

  deleteProduct(id: number) {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmDelete) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (error) => {
          console.error('Error eliminando el producto', error);
        }
      });
    }
  }
}