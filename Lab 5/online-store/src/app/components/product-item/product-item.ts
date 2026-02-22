import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() remove = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  deleteMe() {
    if (confirm(`Are you sure you want to delete ${this.product.name}?`)) {
      this.remove.emit(this.product.id);
    }
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}