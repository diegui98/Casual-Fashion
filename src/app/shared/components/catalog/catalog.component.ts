import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  @Input()
  productList!: Product[];
  @Input()
  colorFilter?: string;
  @Input()
  priceToFilter?: number;

  constructor() {}

  ngOnInit() {}
}
