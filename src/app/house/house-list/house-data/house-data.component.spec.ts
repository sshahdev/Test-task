import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDataComponent } from './house-data.component';

describe('HouseDataComponent', () => {
  let component: HouseDataComponent;
  let fixture: ComponentFixture<HouseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
