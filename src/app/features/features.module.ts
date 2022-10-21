import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreComponent } from './pages/store/store.component';

@NgModule({
  declarations: [HomeComponent, StoreComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [RouterModule, StoreComponent],
  providers: [CurrencyPipe],
})
export class FeaturesModule {}
