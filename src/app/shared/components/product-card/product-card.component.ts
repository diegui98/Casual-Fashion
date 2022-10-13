import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  image: string[] = ['noimage.jpg'];
  @Input()
  name: string = 'Product Name';
  @Input()
  price: number = 0;
  @Input()
  colors: string[] = ['blue', 'green', 'yellow'];
  backgroundColor: string = 'background-color: ';
  activeColor: number = 0;
  imageSrc: string = '../../../../assets/' + this.image[0];

  constructor() {}

  ngOnInit() {}

  selectColor(i: number): void {
    this.activeColor = i;
    console.log(this.activeColor);
  }

  swapImage(): void {
    if (
      this.image[1] &&
      this.imageSrc == '../../../../assets/' + this.image[0]
    ) {
      this.imageSrc = '../../../../assets/' + this.image[1];
      return;
    }
    if (this.image[1]) {
      this.imageSrc = '../../../../assets/' + this.image[0];
    }
  }
}
