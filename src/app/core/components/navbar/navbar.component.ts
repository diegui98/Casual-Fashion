import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output()
  toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {}

  toggleSideBar() {
    this.sidebarService.toggleActiveSidebar();
  }
}
