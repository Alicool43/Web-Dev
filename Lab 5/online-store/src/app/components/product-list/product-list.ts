import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="grid">
      @for (item of products; track item.id) {
        <app-product-item 
          [product]="item" 
          (remove)="onRemoveItem($event)">
        </app-product-item>
      } @empty {
        <p class="empty-msg">No products available in this category.</p>
      }
    </div>
  `,
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

onRemoveItem(productId: number) {
  
  const updatedProducts = this.products.filter(p => p.id !== productId);

  this.products = updatedProducts;
  
  console.log('Товар удален. Осталось товаров:', this.products.length);
}
  
}

