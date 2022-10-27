import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product = {
    id: 0,
    name: 'Missing Product',
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
  colorFilter?: string;
  @Input()
  priceToFilter?: number;
  @Input()
  detailsMode?: boolean = false;
  @Output()
  colorChanged: EventEmitter<number> = new EventEmitter<number>();

  backgroundColor: string = 'background-color: ';
  activeColor: number = 0;
  imagePath: string = '../../../../assets/';
  imageSrc?: string;

  constructor() {}

  ngOnInit() {
    this.imageSrc = this.imagePath + this.product?.image[0].image[0];
  }

  selectColor(i: number): void {
    this.activeColor = i;
    this.imageSrc = '../../../../assets/' + this.product.image[i].image[0];
    if (this.detailsMode) {
      this.colorChanged.emit(this.activeColor);
    }
  }

  swapImage(): void {
    if (
      this.product.image[this.activeColor].image[1] &&
      this.imageSrc ==
        this.imagePath + this.product.image[this.activeColor].image[0]
    ) {
      this.imageSrc =
        this.imagePath + this.product.image[this.activeColor].image[1];
      return;
    }
    if (this.product.image[this.activeColor].image[1]) {
      this.imageSrc =
        this.imagePath + this.product.image[this.activeColor].image[0];
    }
  }
}
