import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CategoryComponent } from './components/category/category.component';
import { SortByComponent } from './components/sortBy/sortBy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterByComponent } from './components/filterBy/filterBy.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SmallIndexComponent } from './components/small-index/small-index.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    CatalogComponent,
    CategoryComponent,
    SortByComponent,
    FilterByComponent,
    ProductDetailsComponent,
    SmallIndexComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    ProductCardComponent,
    CatalogComponent,
    CategoryComponent,
    SortByComponent,
    FilterByComponent,
    ProductDetailsComponent,
    SmallIndexComponent,
    CarouselComponent,
  ],
})
export class SharedModule {}
