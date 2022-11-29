import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductOverview } from '../../models/productOverview';
import { HttpService } from '../../services/http.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  activeSidebar!: boolean;

  categoriesList!: string[];
  activeCategory!: number;

  constructor(
    private sidebarService: SidebarService,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.http.getProductsData().subscribe({
      next: (res: ProductOverview[]) => {
        this.categoriesList = this.sidebarService.getCategories(res);
      },
    });
    //Loads the sidebar without a category selected
    this.sidebarService.setActiveCategory(-1);

    //Subscribes to display current active category
    this.sidebarService.getActiveCategory().subscribe((value) => {
      this.activeCategory = value;
    });
    //Subscribes to react to sidebar toggles
    this.sidebarService.getActiveSidebar().subscribe((value) => {
      this.activeSidebar = value;
    });
  }

  selectCategory(i: number) {
    this.sidebarService.setActiveCategory(i);
    this.sidebarService.toggleActiveSidebar();
  }
}
