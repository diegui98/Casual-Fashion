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

  imageIndex: number = 0;
  activeSize: number = -1;
  buyAmount: number = 1;

  constructor() {}

  ngOnInit() {}

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
  }
}
