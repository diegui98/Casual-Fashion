import { Component, Input, OnInit } from '@angular/core';
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
  product: Product = {
    id: 0,
    name: 'Product Name',
    image: [
      {
        image: ['noimage.jpg', 'noimage2.png'],
        color: 'blue',
        size: [1, 2, 3],
      },
      { image: ['noimage2.png'], color: 'green', size: [1, 2] },
    ],
    price: 0,
    sale: false,
    inStock: false,
  };
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
}
