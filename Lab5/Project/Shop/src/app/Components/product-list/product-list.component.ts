import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() liked = new EventEmitter<any>();
  @Output() removed = new EventEmitter<any>();

  likeProduct(product: any) {
    this.liked.emit(product);
    console.log('productList.likeProduct worked success');
  }

  removeProduct(product: any) {
    this.removed.emit(product);
    console.log('productList.removeProduct worked success');
  }
}