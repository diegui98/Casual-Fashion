import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/core/models/cartItem';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import Swal from 'sweetalert2';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: CartItem[] = [];
  constructor(
    private cartService: CartService,
    private router: Router,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    //sets sidebar category to none and hides it
    this.sidebarService.setActiveCategory(-2);
    this.sidebarService.setActiveSidebar(false);
    //loads carts and products
    this.cartService.loadCart();
    this.products = this.cartService.getProducts();
    //displays an alert if the cart is empty on page load
    if (this.products.length <= 0) {
      Swal.fire({
        title: 'Cart is empty!',
        text: 'Add your favorite products to your cart and come back to do the checkout.',
        icon: 'info',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok!',
      });
    }
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
