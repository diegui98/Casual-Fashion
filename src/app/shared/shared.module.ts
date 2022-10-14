import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CategoryComponent } from './components/category/category.component';
import { SortByComponent } from './components/sortBy/sortBy.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductCardComponent,
    CatalogComponent,
    CategoryComponent,
    SortByComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ProductCardComponent,
    CatalogComponent,
    CategoryComponent,
    SortByComponent,
  ],
})
export class SharedModule {}
