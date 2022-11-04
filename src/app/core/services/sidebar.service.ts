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
    console.log(categories);
    return categories;
  }

  setActiveCategory(i: number): void {
    this.activeCategory.next(i);
  }

  getActiveCategory(): Observable<number> {
    return this.activeCategory.asObservable();
  }
}
