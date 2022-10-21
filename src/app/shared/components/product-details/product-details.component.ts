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
      { image: ['noimage.jpg', 'noimage2.png'], color: 'blue' },
      { image: ['noimage2.png'], color: 'green' },
    ],
    price: 0,
    sale: false,
    inStock: false,
    size: [1, 2, 3],
  };

  constructor() {}

  ngOnInit() {}
}
