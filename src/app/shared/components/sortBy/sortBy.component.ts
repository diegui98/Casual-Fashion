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
  productList?: ProductCard[];

  @Output()
  orderedList!: ProductCard[] | undefined;

  constructor() {}

  ngOnInit() {}

  orderList(event: any) {
    let value = event.target.value;
    if (value == 'A-Z') {
      this.productList?.sort(this.dynamicSort('name'));
    }
    if (value == 'Z-A') {
      this.productList?.sort(this.dynamicReverseSort('name'));
    }
    if (value == 'cheap') {
      this.productList?.sort(this.dynamicSort('price'));
    }
    if (value == 'expensive') {
      this.productList?.sort(this.dynamicReverseSort('price'));
    }
    this.orderedList = this.productList;
  }

  dynamicSort(property: any) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a: any, b: any) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  dynamicReverseSort(property: any) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = 1;
      property = property.substr(1);
    }
    return function (a: any, b: any) {
      var result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
}
