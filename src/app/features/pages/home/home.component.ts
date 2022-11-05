import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselItem } from 'src/app/core/models/carouselItem';
import { HttpService } from 'src/app/core/services/http.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carouselList!: CarouselItem[];

  constructor(
    private http: HttpService,
    private router: Router,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.carouselList = this.http.carouselList;
  }

  slideClicked(category: string): void {
    let categories = this.sidebarService.getCategories();
    for (let i = 0; i < categories.length; i++) {
      if (categories[i] == category) {
        this.sidebarService.setActiveCategory(i);
      }
    }
    this.router.navigate(['/Store'], { queryParams: { category: category } });
  }
}
