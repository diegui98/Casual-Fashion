import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input()
  category?: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDetails(i: number) {
    this.router.navigate(['/Store/Details'], {
      queryParams: { category: this.category, id: i },
    });
  }
}
