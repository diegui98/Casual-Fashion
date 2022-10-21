import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProductOverview } from 'src/app/core/models/productOverview';
import { ProductCard } from 'src/app/core/models/productCard';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  productList!: ProductCard[];
  productOverviewList!: ProductOverview;
  category: string = 'summer';

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.productOverviewList = this.storeService.getCategoryList(this.category);
    this.productList = this.productOverviewList.productList;
  }
}
