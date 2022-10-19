import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-filterBy',
  templateUrl: './filterBy.component.html',
  styleUrls: ['./filterBy.component.css'],
})
export class FilterByComponent implements OnInit {
  @Input()
  productList?: ProductCard[];
  @Output()
  colorFilterChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  priceToFilter: EventEmitter<number> = new EventEmitter<number>();

  clickedFilter: boolean = false;
  colorList: string[] = ['red', 'green', 'black', 'blue'];
  backgroundColor: string = 'background-color: ';
  activeColor: number = -1;

  constructor() {}

  ngOnInit() {}

  toggleFilter(): void {
    this.clickedFilter = !this.clickedFilter;
  }

  selectColor(color: string, i: number): void {
    if (this.activeColor == i) {
      this.activeColor = -1;
      this.colorFilterChanged.emit('none');
      return;
    }
    this.activeColor = i;
    this.colorFilterChanged.emit(color);
  }

  filterPrice(event: any): void {
    let value = event.target.value;
    this.priceToFilter.emit(value);
  }
}
