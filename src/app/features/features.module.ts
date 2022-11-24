import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreComponent } from './pages/store/store.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    DetailsComponent,
    CartComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [RouterModule, StoreComponent, DetailsComponent, CartComponent],
  providers: [CurrencyPipe],
})
export class FeaturesModule {}
