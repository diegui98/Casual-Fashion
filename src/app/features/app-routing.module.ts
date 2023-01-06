import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentGuard } from '../core/guards/payment.guard';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'Store/Details', component: DetailsComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Payment', component: PaymentComponent, canActivate: [PaymentGuard] },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
