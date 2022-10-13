import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [ProductCardComponent, CatalogComponent, CategoryComponent],
  imports: [CommonModule],
  exports: [ProductCardComponent, CatalogComponent, CategoryComponent],
})
export class SharedModule {}
