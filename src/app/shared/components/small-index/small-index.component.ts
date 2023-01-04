import { Component, Input, OnInit } from '@angular/core';
import { ProductOverview } from 'src/app/core/models/productOverview';
import { HttpService } from 'src/app/core/services/http.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-small-index',
  templateUrl: './small-index.component.html',
  styleUrls: ['./small-index.component.css'],
})
export class SmallIndexComponent implements OnInit {
  @Input()
  category!: string;
  @Input()
  detailsMode?: boolean = false;
  @Input()
  productName?: string;

  constructor() {}

  ngOnInit() {}
}
