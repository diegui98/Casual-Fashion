import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private sidebarService: SidebarService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    //resets the checkout state to false, in case the user goes back and tries to re-enter payment page without using the checkout button
    this.cartService.checkoutReset();
    //hides the sidebar
    this.sidebarService.setActiveSidebar(false);
  }
}
