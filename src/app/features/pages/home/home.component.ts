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
  //choose first category to display
  firstFeaturedCategory: string = 'Summer';
  firstFeaturedTitle: string = 'Dreaming of Summer';
  firstFeaturedList!: Product[];
  //choose second category to display
  secondFeaturedCategory: string = 'Winter';
  secondFeaturedTitle: string = 'Trendings of Winter';
  secondFeaturedList!: Product[];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private sidebarService: SidebarService,
    private http: HttpService
  ) {}

  ngOnInit() {
    //sets sidebar category to Home and hides it
    this.sidebarService.setActiveCategory(-1);
    this.sidebarService.setActiveSidebar(false);
    //loads the carousel
    this.http.getCarouselData().subscribe({
      next: (res: CarouselItem[]) => {
        this.carouselList = res;
      },
    });

    //loads the fetured items in the page
    this.http.getProductsData().subscribe({
      next: (res: ProductOverview[]) => {
        this.firstFeaturedList = this.homeService.getSmallProductList(
          res,
          this.firstFeaturedCategory,
          this.productsQuantity
        );
        this.secondFeaturedList = this.homeService.getSmallProductList(
          res,
          this.secondFeaturedCategory,
          this.productsQuantity
        );
      },
    });
  }

  //manages the sidebar actives classes and redirects the user to Store + category clicked
  slideClicked(category: string): void {
    this.router.navigate(['/Store'], { queryParams: { category: category } });
  }
}
