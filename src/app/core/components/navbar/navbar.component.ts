import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output()
  toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  toggleSideBar() {
    this.toggleSidebar.emit();
  }
}
