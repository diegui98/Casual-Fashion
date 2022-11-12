import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cartItem';
import { Product } from 'src/app/core/models/product';

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

  constructor() {}

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
    console.log(cartItem);
  }
}
