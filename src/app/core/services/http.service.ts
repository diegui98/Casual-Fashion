import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOverview } from '../models/productOverview';
import { CarouselItem } from '../models/carouselItem';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public allProductsList: ProductOverview[] = [
    {
      category: 'Summer',
      productList: [
        {
          id: 1,
          name: 'Green Shirt',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'green',
              size: [1, 2, 3],
            },
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'blue',
              size: [1, 2],
            },
          ],
          price: 80,
          sale: false,
          inStock: true,
        },
        {
          id: 2,
          name: 'Blue Pants',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'blue',
              size: [1, 2],
            },
          ],
          price: 100,
          sale: false,
          inStock: true,
        },
        {
          id: 3,
          name: 'Red Shoes',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'red',
              size: [1, 2, 3],
            },
          ],
          price: 120,
          sale: false,
          inStock: false,
        },
        {
          id: 4,
          name: 'Black Hat',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'black',
              size: [1, 2, 3, 4],
            },
          ],
          price: 40,
          sale: true,
          inStock: true,
        },
      ],
    },
    {
      category: 'Winter',
      productList: [
        {
          id: 6,
          name: 'Blue jacket',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'blue',
              size: [1, 2, 3],
            },
          ],
          price: 100,
          sale: false,
          inStock: true,
        },
        {
          id: 5,
          name: 'Green sweater',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'green',
              size: [1, 2, 3],
            },
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'blue',
              size: [1, 2, 3],
            },
          ],
          price: 80,
          sale: false,
          inStock: true,
        },
        {
          id: 7,
          name: 'Red gloves',
          image: [
            { image: ['noimage.jpg', 'noimage2.png'], color: 'red', size: [1] },
          ],
          price: 120,
          sale: false,
          inStock: false,
        },
        {
          id: 8,
          name: 'Black slippers',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'black',
              size: [1, 2],
            },
          ],
          price: 40,
          sale: true,
          inStock: true,
        },
      ],
    },
  ];

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
