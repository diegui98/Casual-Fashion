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
    for (let productList of allProductsList) {
      if (productList.category === category) {
        productListByCategory = productList;
      }
    }
    return productListByCategory;
  }

  getProductById(category: string, id: string): any {
    let productById: Product;
    let productList = this.getCategoryList(category);
    console.log(productList);
    for (let product of productList) {
      if (product.id == id) {
        productById = product;
        return productById;
      }
    }
  }
}
