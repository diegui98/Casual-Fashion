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
  }

  changeSidebarCategoryByCategory(): void {
    let categories = this.sidebarService.getCategories();
    for (let i = 0; i < categories.length; i++) {
      if (categories[i] == this.category) {
        console.log(i);
        this.changeSidebarCategory(i);
      }
    }
  }
}
