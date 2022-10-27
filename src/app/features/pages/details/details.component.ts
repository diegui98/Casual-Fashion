import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  category!: string;
  productId!: string;
  product!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    //gets category from path query params
    const categoryParam = this.route.snapshot.queryParamMap.get('category');
    const productIdParam = this.route.snapshot.queryParamMap.get('id');
    if (categoryParam == null || productIdParam == null) {
      this.router.navigate(['/Store']);
    } else {
      this.category = categoryParam;
      this.productId = productIdParam;
    }

    this.product = this.storeService.getProductById(
      this.category,
      this.productId
    );
  }
}
