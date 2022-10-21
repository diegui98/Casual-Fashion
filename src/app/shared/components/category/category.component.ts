import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input()
  productList!: Product[];

  @Input()
  category: string = 'Category';

  colorFilter: string = 'none';
  priceToFilter!: number;
  orderedList!: Product[] | undefined;

  constructor() {}

  ngOnInit() {}

  selectColorFilter(color: string) {
    this.colorFilter = color;
  }
  selectPriceToFilter(price: number) {
    this.priceToFilter = price;
  }
  backToNewProductList(productList: Product[]) {
    this.productList = productList.slice();
  }
}
