import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() liked = new EventEmitter<any>();
  @Output() removed = new EventEmitter<any>();

  likeProduct() {
    console.log('Product before emitting liked event:', this.product);
    this.liked.emit(this.product);
  }

  removeProduct() {
    console.log('Product before emitting removed event:', this.product);
    this.removed.emit(this.product);
  }
}