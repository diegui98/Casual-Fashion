import { Component, Input, OnInit } from '@angular/core';
import { ProductOverview } from 'src/app/core/models/productOverview';
import { HttpService } from 'src/app/core/services/http.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-small-index',
  templateUrl: './small-index.component.html',
  styleUrls: ['./small-index.component.css'],
})
export class SmallIndexComponent implements OnInit {
  @Input()
  category!: string;
  @Input()
  detailsMode?: boolean = false;
  @Input()
  productName?: string;

  constructor(
    private sidebarService: SidebarService,
    private http: HttpService
  ) {}

  ngOnInit() {}

  changeSidebarCategory(i: number): void {
    this.sidebarService.setActiveCategory(i);
    this.sidebarService.setActiveSidebar(false);
  }

  changeSidebarCategoryByCategory(): void {
    this.http.getProductsData().subscribe({
      next: (res: ProductOverview[]) => {
        this.sidebarService.setActiveCategoryByCategory(res, this.category);
      },
    });
    this.sidebarService.setActiveSidebar(false);
  }
}
