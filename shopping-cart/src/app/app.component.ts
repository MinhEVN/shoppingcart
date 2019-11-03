import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, DoCheck {

  tongSoLuong: number = 0;
  totalMoney: number = 0;

constructor(public productServie: ProductService){}

  ngOnInit() {
   this.products=
   this.productServie.products;
  }

  ngAfterViewInit() {
    console.log('AfterViewInit cua AppComponent');
  }

  ngDoCheck() {
    console.log('DoCheck cua AppComponent');
    let toTalItem = 0;
    let money = 0;
    for (const product of this.products) {
      toTalItem += Number(product.quantity);
      money += Number(product.price) * Number(product.quantity);
    }
    this.tongSoLuong = toTalItem;
    this.totalMoney = money;
  }

  removeProduct(productId: number) {
    this.productServie.removeProduct(productId);
  }

  getCountProduct() {
    let toTalItem: number = 0;

    // Cách 1
    // for (let i = 0; i < this.products.length; i++) {
    //   toTalItem += Number(this.products[i].quantity);
    // }

    // Cách 2
    for (const product of this.products) {
      toTalItem += Number(product.quantity);
    }

    return toTalItem;
  }

  xuLyKhiBatDuocSuKienThayDoiSoLuong(obj: {
    maSanPham: number;
    soLuong: number;
  }) {
    const product = this.products.find(product => product.id === obj.maSanPham);
    product.quantity = obj.soLuong;
  }
}
