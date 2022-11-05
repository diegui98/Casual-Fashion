import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private activeCategory: BehaviorSubject<number>;

  constructor(private http: HttpService) {
    this.activeCategory = new BehaviorSubject<number>(-1);
  }

  getCategories(): string[] {
    let allProductsList = this.http.allProductsList;
    let categories: string[] = [];
    for (let productlist of allProductsList) {
      categories.push(productlist.category);
    }
    return categories;
  }

  setActiveCategory(i: number): void {
    this.activeCategory.next(i);
  }

  setActiveCategoryByCategory(category: string): void {
    let categories = this.getCategories();
    for (let i = 0; i < categories.length; i++) {
      if (categories[i] == category) {
        this.setActiveCategory(i);
      }
    }
  }

  getActiveCategory(): Observable<number> {
    return this.activeCategory.asObservable();
  }
}
