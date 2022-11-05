import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarouselItem } from 'src/app/core/models/carouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input()
  carouselList!: CarouselItem[];
  @Output()
  slideClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  slideClick(category: string): void {
    this.slideClicked.emit(category);
  }
}
