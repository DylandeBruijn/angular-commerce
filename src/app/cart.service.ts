import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: Product[] = [];

  public addtoCart(product: Product) {
    this.items.push(product);
  }

  public getItems() {
    return this.items;
  }

  public clearCart() {
    this.items = [];
    return this.items;
  }
}
