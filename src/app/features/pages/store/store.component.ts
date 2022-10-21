import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProductOverview } from 'src/app/core/models/productOverview';
import { ProductCard } from 'src/app/core/models/productCard';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  productList!: ProductCard[];
  productOverviewList!: ProductOverview;
  category!: string;
  defaultCategory: string = 'summer';

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.queryParamMap.get('category');
    if (params == null) {
      this.category = this.defaultCategory;
    } else {
      this.category = params;
    }

    //gets the product list based on the category
    this.productOverviewList = this.storeService.getCategoryList(this.category);
    this.productList = this.productOverviewList.productList;
  }
}
