import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-filterBy',
  templateUrl: './filterBy.component.html',
  styleUrls: ['./filterBy.component.css'],
})
export class FilterByComponent implements OnInit {
  @Input()
  productList?: ProductCard[];

  clickedFilter: boolean = false;
  colorList: string[] = ['red', 'green', 'black', 'blue'];
  backgroundColor: string = 'background-color: ';
  activeColor: number = 0;

  constructor() {}

  ngOnInit() {}

  toggleFilter(): void {
    this.clickedFilter = !this.clickedFilter;
  }

  selectColor(color: string, i: number): void {
    this.activeColor = i;
  }
}
