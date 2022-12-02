import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreComponent } from './pages/store/store.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    DetailsComponent,
    CartComponent,
    PaymentComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    RouterModule,
    HomeComponent,
    StoreComponent,
    DetailsComponent,
    CartComponent,
    PaymentComponent,
  ],
  providers: [CurrencyPipe],
})
export class FeaturesModule {}
