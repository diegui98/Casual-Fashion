/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SortByComponent } from './sortBy.component';

describe('SortByComponent', () => {
  let component: SortByComponent;
  let fixture: ComponentFixture<SortByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
