import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreComponent } from './pages/store/store.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [HomeComponent, StoreComponent, DetailsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [RouterModule, StoreComponent, DetailsComponent],
  providers: [CurrencyPipe],
})
export class FeaturesModule {}
