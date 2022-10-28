import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpService) {}

  getCategoryList(category: string): any {
    let productListByCategory;
    let allProductsList = this.http.allProductsList;
    for (let productOverview of allProductsList) {
      if (productOverview.category === category) {
        productListByCategory = productOverview;
      }
    }
    return productListByCategory;
  }

  getProductById(category: string, id: string): any {
    let productById: Product;
    let productOverview = this.getCategoryList(category);
    let productList = productOverview.productList;
    for (let product of productList) {
      if (product.id == id) {
        productById = product;
        return productById;
      }
    }
  }
}
