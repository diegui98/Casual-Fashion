import { Component, Input, OnInit } from '@angular/core';

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
