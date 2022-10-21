import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOverview } from '../models/productOverview';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public allProductsList: ProductOverview[] = [
    {
      category: 'Summer',
      productList: [
        {
          name: 'Green Shirt',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'green',
            },
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'blue',
            },
          ],
          price: 80,
          sale: false,
          inStock: true,
          size: [1, 2, 3],
        },
        {
          name: 'Blue Pants',
          image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'blue' }],
          price: 100,
          sale: false,
          inStock: true,
          size: [1, 2],
        },
        {
          name: 'Red Shoes',
          image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'red' }],
          price: 120,
          sale: false,
          inStock: false,
          size: [1, 2, 3],
        },
        {
          name: 'Black Hat',
          image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'black' }],
          price: 40,
          sale: true,
          inStock: true,
          size: [1, 2, 3, 4],
        },
      ],
    },
    {
      category: 'Winter',
      productList: [
        {
          name: 'Green sweater',
          image: [
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'green',
            },
            {
              image: ['noimage.jpg', 'noimage2.png'],
              color: 'blue',
            },
          ],
          price: 80,
          sale: false,
          inStock: true,
          size: [1, 2, 3],
        },
        {
          name: 'Blue jacket',
          image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'blue' }],
          price: 100,
          sale: false,
          inStock: true,
          size: [1, 2, 3],
        },
        {
          name: 'Red gloves',
          image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'red' }],
          price: 120,
          sale: false,
          inStock: false,
          size: [1],
        },
        {
          name: 'Black slippers',
          image: [{ image: ['noimage.jpg', 'noimage2.png'], color: 'black' }],
          price: 40,
          sale: true,
          inStock: true,
          size: [1, 2],
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  public get<T>(): Observable<Object> {
    return this.http.get('../../../assets/allProducts.json');
  }
}
