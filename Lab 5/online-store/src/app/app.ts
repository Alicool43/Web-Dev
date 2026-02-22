import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['../styles.css'] 
})
export class AppComponent implements OnInit {
  private productService = inject(ProductService);
  
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.updateFilteredProducts();
  }

  updateFilteredProducts() {
    if (this.selectedCategoryId) {
      this.filteredProducts = this.productService.getProducts()
        .filter(p => p.categoryId === this.selectedCategoryId);
    } else {
      this.filteredProducts = [];
    }
  }

  title = 'Kaspi Shop';
}
