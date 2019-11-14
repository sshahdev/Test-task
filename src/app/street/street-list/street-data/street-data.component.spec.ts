import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetDataComponent } from './street-data.component';

describe('StreetDataComponent', () => {
  let component: StreetDataComponent;
  let fixture: ComponentFixture<StreetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
