import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/core/models/cartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: CartItem[] = [];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.loadCart();
    this.products = this.cartService.getProducts();
    console.log(this.products);
  }

  //Remove a Product from Cart
  removeFromCart(product: any) {
    this.cartService.removeProduct(product);
    this.products = this.cartService.getProducts();
  }

  //Calculate Total

  get total() {
    return this.products?.reduce(
      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.ammount * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price;
  }

  checkout() {
    localStorage.setItem('cart_total', JSON.stringify(this.total));
    this.router.navigate(['/Payment']);
  }
}
