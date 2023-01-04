import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  activeSidebar!: boolean;

  categoriesList!: String[];
  activeCategory!: number;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.getCategories().subscribe((res: String[]) => {
      this.categoriesList = res;
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

  clickedOutOfSidebar() {
    this.sidebarService.toggleActiveSidebar();
  }
}
