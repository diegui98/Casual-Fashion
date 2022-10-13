import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  @Input()
  productList: ProductCard[] = [
    {
      name: 'Green Shirt',
      image: [
        { image: ['noimage.jpg', 'noimage2.png'], color: 'green' },
        { image: ['noimage.jpg', 'noimage2.png'], color: 'blue' },
      ],
      price: 80,
      sale: false,
      inStock: true,
    },
    {
      name: 'Blue Pants',
      image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'blue' }],
      price: 100,
      sale: false,
      inStock: true,
    },
    {
      name: 'Red Shoes',
      image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'Red' }],
      price: 120,
      sale: false,
      inStock: false,
    },
    {
      name: 'Black Hat',
      image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'Black' }],
      price: 40,
      sale: true,
      inStock: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
