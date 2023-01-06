import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/core/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: CartItem[] = [];
  checkout: boolean = false;

  constructor() {}

  getCheckoutClicked(): boolean {
    return this.checkout;
  }

  checkoutClicked(): void {
    this.checkout = true;
  }

  checkoutReset(): void {
    this.checkout = false;
  }

  getProducts(): CartItem[] {
    return this.products;
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.products));
  }

  addToCart(addedProduct: CartItem): void {
    this.products.push(addedProduct);
    this.saveCart();
  }

  loadCart(): void {
    this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  productInCart(product: CartItem): boolean {
    return this.products.findIndex((x: any) => x.id === product.id) > -1;
  }

  removeProduct(product: CartItem): void {
    const index = this.products.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
    }
  }

  clearProducts(): void {
    localStorage.clear();
  }
}
