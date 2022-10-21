import { Injectable } from '@angular/core';
import { ProductCard } from 'src/app/core/models/productCard';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpService) {}

  getCategoryList(category: string): any {
    let productListByCategory;
    let allProductsList = this.http.allProductsList;
    for (let product of allProductsList) {
      if (product.category === category) {
        productListByCategory = product;
      }
    }
    return productListByCategory;
  }
}
