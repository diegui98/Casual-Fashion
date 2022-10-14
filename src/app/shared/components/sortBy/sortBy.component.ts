import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-sortBy',
  templateUrl: './sortBy.component.html',
  styleUrls: ['./sortBy.component.css'],
})
export class SortByComponent implements OnInit {
  @Input()
  productList?: ProductCard[] = [
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

  @Output()
  orderedList!: ProductCard[];

  constructor() {}

  ngOnInit() {}

  orderList(event: any) {
    let value = event.target.value;
    //finish method
  }
}
