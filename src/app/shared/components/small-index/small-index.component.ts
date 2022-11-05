import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {}

  changeSidebarCategory(i: number): void {
    this.sidebarService.setActiveCategory(i);
    this.sidebarService.setActiveSidebar(false);
  }

  changeSidebarCategoryByCategory(): void {
    this.sidebarService.setActiveCategoryByCategory(this.category);
    this.sidebarService.setActiveSidebar(false);
  }
}
