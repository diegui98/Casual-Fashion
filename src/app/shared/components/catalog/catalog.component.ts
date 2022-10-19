import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  @Input()
  productList!: ProductCard[];
  @Input()
  colorFilter?: string;
  @Input()
  priceToFilter?: number;

  constructor() {}

  ngOnInit() {}
}
