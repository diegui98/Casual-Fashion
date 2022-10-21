import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input()
  productList!: ProductCard[];

  @Input()
  category: string = 'Category';

  colorFilter: string = 'none';
  priceToFilter!: number;
  orderedList!: ProductCard[] | undefined;

  constructor() {}

  ngOnInit() {}

  selectColorFilter(color: string) {
    this.colorFilter = color;
  }
  selectPriceToFilter(price: number) {
    this.priceToFilter = price;
  }
  backToNewProductList(productList: ProductCard[]) {
    this.productList = productList.slice();
  }
}
