import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.categoriesList = this.sidebarService.getCategories();
    this.sidebarService.setActiveCategory(-1);
    this.sidebarService.getActiveCategory().subscribe((value) => {
      this.activeCategory = value;
    });
    this.sidebarService.getActiveSidebar().subscribe((value) => {
      this.activeSidebar = value;
    });
  }

  selectCategory(i: number) {
    this.sidebarService.setActiveCategory(i);
    this.sidebarService.toggleActiveSidebar();
  }
}
