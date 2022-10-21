import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  product: ProductCard = {
    name: 'Product Name',
    image: [
      { image: ['noimage.jpg', 'noimage2.png'], color: 'blue' },
      { image: ['noimage2.png'], color: 'green' },
    ],
    price: 0,
    sale: false,
    inStock: false,
  };

  constructor() {}

  ngOnInit() {}
}
