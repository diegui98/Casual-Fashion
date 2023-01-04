import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    //hides the sidebar
    this.sidebarService.setActiveSidebar(false);
  }
}
