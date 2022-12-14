import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { ProductOverview } from '../models/productOverview';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private activeCategory: BehaviorSubject<number>;
  private activeSidebar: BehaviorSubject<boolean>;

  constructor(private http: HttpService) {
    this.activeCategory = new BehaviorSubject<number>(-1);
    this.activeSidebar = new BehaviorSubject<boolean>(false);
  }

  getCategories(): Observable<String[]> {
    return this.http.getProductsData().pipe(
      map((res: ProductOverview[]) => {
        let allProductsList = res;
        let categories: string[] = [];
        for (let productlist of allProductsList) {
          categories.push(productlist.category);
        }
        return categories;
      })
    );
  }

  setActiveCategory(i: number): void {
    this.activeCategory.next(i);
  }

  //searchs in the category list for a specified category and sets it as active
  setActiveCategoryByCategory(category: String): void {
    this.getCategories().subscribe((res: String[]) => {
      let categories = res;
      for (let i = 0; i < categories.length; i++) {
        if (categories[i] == category) {
          this.setActiveCategory(i);
        }
      }
    });
  }

  getActiveCategory(): Observable<number> {
    return this.activeCategory.asObservable();
  }

  setActiveSidebar(show: boolean): void {
    this.activeSidebar.next(show);
  }

  getActiveSidebar(): Observable<boolean> {
    return this.activeSidebar.asObservable();
  }

  toggleActiveSidebar() {
    this.getActiveSidebar()
      .pipe(take(1))
      .subscribe((value) => {
        this.setActiveSidebar(!value);
      });
  }
}
