import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categoriesList: string[] = ['Summer', 'Winter', 'Pajamas'];
  activeCategory: number = -1;

  constructor() {}

  ngOnInit() {}

  selectCategory(i: number) {
    this.activeCategory = i;
  }
}
