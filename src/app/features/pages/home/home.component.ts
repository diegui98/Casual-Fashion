import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselItem } from 'src/app/core/models/carouselItem';
import { Product } from 'src/app/core/models/product';
import { ProductOverview } from 'src/app/core/models/productOverview';
import { HttpService } from 'src/app/core/services/http.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carouselList!: CarouselItem[];
  productsQuantity: number = 3;
  summerList!: Product[];
  winterList!: Product[];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private sidebarService: SidebarService,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.carouselList = this.homeService.getCarouselList();

    //loads the fetured items in the page
    this.http.getProductsData().subscribe({
      next: (res: ProductOverview[]) => {
        this.summerList = this.homeService.getSmallProductList(
          res,
          'Summer',
          this.productsQuantity
        );
        this.winterList = this.homeService.getSmallProductList(
          res,
          'Winter',
          this.productsQuantity
        );
      },
    });
  }

  slideClicked(category: string): void {
    this.sidebarService.setActiveCategoryByCategory(category);
    this.sidebarService.setActiveSidebar(false);
    this.router.navigate(['/Store'], { queryParams: { category: category } });
  }
}
