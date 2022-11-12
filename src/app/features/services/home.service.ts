import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductOverview } from 'src/app/core/models/productOverview';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  //transforms a ProductOverview[] into a small list of Product[] for the featured products in home page
  getSmallProductList(
    object: ProductOverview[],
    category: string,
    quantity: number
  ): Product[] {
    let allProductsList: ProductOverview[];
    allProductsList = object;
    for (let productOverview of allProductsList) {
      if (productOverview.category == category) {
        let productListByCategory: Product[];
        productListByCategory = productOverview.productList;
        let smallProductList: Product[];
        smallProductList = productListByCategory.slice(0, quantity);
        return smallProductList;
      }
    }
    return allProductsList[0].productList.slice(0, quantity);
  }
}
