import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: any = {
    name: 'Product Name',
    image: [
      { image: ['noimage.jpg', 'noimage2.png'], color: 'blue' },
      { image: ['noimage2.png'], color: 'green' },
    ],
    price: 0,
  };
  backgroundColor: string = 'background-color: ';
  activeColor: number = 0;
  imagePath: string = '../../../../assets/';
  imageSrc: string = this.imagePath + this.product.image[0].image[0];

  constructor() {}

  ngOnInit() {}

  selectColor(i: number): void {
    this.activeColor = i;
    this.imageSrc = '../../../../assets/' + this.product.image[i].image[0];
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
