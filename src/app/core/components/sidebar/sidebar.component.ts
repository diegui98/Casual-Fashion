import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  categoriesList: string[] = ['Summer', 'Winter', 'Pajamas'];
  activeCategory: number = -1;

  constructor() {}

  ngOnInit() {}

  selectCategory(i: number) {
    this.activeCategory = i;
    this.toggleSidebar.emit();
  }
}
