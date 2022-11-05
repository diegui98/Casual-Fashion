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
    this.sidebarService.setActiveCategoryByCategory(category);
    this.router.navigate(['/Store'], { queryParams: { category: category } });
  }
}
