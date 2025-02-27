import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product1: any;
  @Output() liked = new EventEmitter<any>();
  @Output() removed = new EventEmitter<any>();
  @Output() favorite = new EventEmitter<any>();

  likeProduct() {
    console.log('Product before emitting liked event:', this.product1);
    this.liked.emit(this.product1);
  }

  removeProduct() {
    console.log('Product before emitting removed event:', this.product1);
    this.removed.emit(this.product1);
  }
  favoriteProduct(){
    this.favorite.emit(this.product1);
  }
}