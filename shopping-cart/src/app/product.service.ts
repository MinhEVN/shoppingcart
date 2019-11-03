import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone XS',
      price: 1000000,
      description: 'Màu Xanh',
      quantity: 10,
      image:
        'https://galaxydidong.vn/wp-content/uploads/2017/11/iphone-x-64gb-quoc-te-95-99.jpg'
    },
    {
      id: 2,
      name: 'Iphone 4',
      price: 500000,
      description: 'Màu tím đỏ',
      quantity: 5,
      image:
        'https://galaxydidong.vn/wp-content/uploads/2017/11/iphone-x-64gb-quoc-te-95-99.jpg'
    }
  ];
  removeProduct(productId: number) {
    const index = this.products.findIndex(product => product.id === productId);
    const nameProduct = this.products[index].name;

    if (index !== -1) {
      this.products.splice(index, 1);
      alert('Da xoa san pham ' + nameProduct);
    }
  }
}
