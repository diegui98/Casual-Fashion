import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  @Input()
  productList!: Product[];
  @Input()
  colorFilter?: string;
  @Input()
  priceToFilter?: number;
  @Input()
  category?: string;

  imageIndex: number = 0;

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit() {}

  goToDetails(i: number) {
    this.sidebarService.setActiveSidebar(false);
    this.router.navigate(['/Store/Details'], {
      queryParams: {
        category: this.category,
        id: i,
        imageIndex: this.imageIndex,
      },
    });
  }

  colorChanged(event: number) {
    this.imageIndex = event;
  }
}
