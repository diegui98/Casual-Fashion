import { Component, OnInit } from '@angular/core';
import { ProductOverview } from 'src/app/core/models/productOverview';
import { Product } from 'src/app/core/models/product';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  productList!: Product[];
  productOverviewList!: ProductOverview;
  category!: string;
  defaultCategory: string = 'Summer';

  constructor(
    private storeService: StoreService,
    private sidebarService: SidebarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    //gets category from path query params
    let params = this.activatedRoute.snapshot.queryParamMap.get('category');
    if (params == null) {
      this.category = this.defaultCategory;
    } else {
      this.category = params;
    }

    //sets sidebar category and hides it
    this.sidebarService.setActiveCategoryByCategory(this.category);
    this.sidebarService.setActiveSidebar(false);

    //gets the product list based on the category
    this.http.getProductsData().subscribe({
      next: (res: ProductOverview[]) => {
        this.productOverviewList = this.storeService.getCategoryList(
          res,
          this.category
        );
        this.productList = this.productOverviewList.productList;
      },
    });
  }
}
