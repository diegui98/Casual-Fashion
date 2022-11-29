import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/core/models/cartItem';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/features/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  category: string = 'Summer';
  @Input()
  product!: Product;
  @Input()
  imageIndex: number = 0;

  activeSize: number = -1;
  buyAmount: number = 1;
  imagePath: string = '../../../../assets/';
  imageSrc?: string;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.imageSrc =
      this.imagePath + this.product?.image[this.imageIndex].image[0];
  }

  selectSize(i: number) {
    this.activeSize = i;
  }

  removeAmount() {
    if (this.buyAmount == 1) {
      return;
    }
    this.buyAmount -= 1;
  }

  addAmount() {
    this.buyAmount += 1;
  }

  colorChanged(i: number) {
    this.activeSize = -1;
    this.imageIndex = i;
    this.imageSrc = '../../../../assets/' + this.product.image[i].image[0];
  }

  swapImage(): void {
    if (
      this.product.image[this.imageIndex].image[1] &&
      this.imageSrc ==
        this.imagePath + this.product.image[this.imageIndex].image[0]
    ) {
      this.imageSrc =
        this.imagePath + this.product.image[this.imageIndex].image[1];
      return;
    }
    if (this.product.image[this.imageIndex].image[1]) {
      this.imageSrc =
        this.imagePath + this.product.image[this.imageIndex].image[0];
    }
  }

  //creates and saves to cart a new object with the desired buy options
  //and shows a Swal as feedback and redirects user to cart or previous category section
  addToCart() {
    let cartItem: CartItem = {
      id: this.product.id,
      name: this.product.name,
      image: this.imagePath + this.product.image[this.imageIndex].image[0],
      color: this.product.image[this.imageIndex].color,
      size: this.activeSize + 1,
      ammount: this.buyAmount,
      price: this.product.price,
    };
    this.cartService.addToCart(cartItem);
    Swal.fire({
      title: 'Item added!',
      text: 'You can find your items in your cart.',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Go to Cart!',
      cancelButtonText: 'Keep shopping!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/Cart']);
      } else if (result.isDismissed) {
        this.router.navigate(['/Store'], {
          queryParams: {
            category: this.category,
          },
        });
      }
    });
  }
}
