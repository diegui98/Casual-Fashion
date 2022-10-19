import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: string = 'Category';
  colorFilter: string = 'none';
  priceToFilter!: number;
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
      image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'red' }],
      price: 120,
      sale: false,
      inStock: false,
    },
    {
      name: 'Black Hat',
      image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'black' }],
      price: 40,
      sale: true,
      inStock: true,
    },
  ];
  orderedList!: ProductCard[] | undefined;

  constructor() {}

  ngOnInit() {}

  selectColorFilter(color: string) {
    this.colorFilter = color;
  }
  selectPriceToFilter(price: number) {
    this.priceToFilter = price;
  }
}
