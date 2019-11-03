import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() suKienThayDoiSoLuong = new EventEmitter();

  removeProduct(productId: number) {
    this.onRemoveProduct.emit(productId);
  }

  changeQuantity(inputElement: HTMLInputElement, productId: number) {
    this.suKienThayDoiSoLuong.emit({
      maSanPham: productId,
      soLuong: inputElement.value
    });
  }
}
