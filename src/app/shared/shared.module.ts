import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
  declarations: [ProductCardComponent, CatalogComponent],
  imports: [CommonModule],
  exports: [ProductCardComponent, CatalogComponent],
})
export class SharedModule {}
