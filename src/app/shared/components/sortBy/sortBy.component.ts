import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-sortBy',
  templateUrl: './sortBy.component.html',
  styleUrls: ['./sortBy.component.css'],
})
export class SortByComponent implements OnInit {
  @Input()
  productList!: Product[];

  @Output()
  backToNewProductList: EventEmitter<Product[]> = new EventEmitter();

  sortByNewList!: Product[];

  constructor() {}

  ngOnInit() {
    this.sortByNewList = this.productList.slice();
  }

  orderList(event: any) {
    let value = event.target.value;
    if (value == 'new') {
      this.backToNewProductList.emit(this.sortByNewList);
    }
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
  }

  //ascending order sort
  dynamicSort(property: any) {
    //strings sort
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    //number sort
    return function (a: any, b: any) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  //desencing order sort
  dynamicReverseSort(property: any) {
    //strings sort
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = 1;
      property = property.substr(1);
    }
    //number sort
    return function (a: any, b: any) {
      var result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
}
