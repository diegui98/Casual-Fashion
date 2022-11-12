import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOverview } from '../models/productOverview';
import { CarouselItem } from '../models/carouselItem';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getProductsData<T>(): Observable<ProductOverview[]> {
    return this.http.get<ProductOverview[]>(
      '../../../assets/productsData.json'
    );
  }

  public getCarouselData<T>(): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>('../../../assets/carouselData.json');
  }
}
