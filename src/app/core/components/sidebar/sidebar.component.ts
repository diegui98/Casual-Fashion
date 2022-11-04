import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input()
  activeSidebar!: boolean;
  @Output()
  toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  categoriesList!: string[];
  activeCategory!: number;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.categoriesList = this.sidebarService.getCategories();
    this.sidebarService.setActiveCategory(-1);
    this.sidebarService.getActiveCategory().subscribe((value) => {
      this.activeCategory = value;
    });
  }

  selectCategory(i: number) {
    this.sidebarService.setActiveCategory(i);
    this.toggleSidebar.emit();
  }
}
