import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetStartComponent } from './street-start.component';

describe('StreetStartComponent', () => {
  let component: StreetStartComponent;
  let fixture: ComponentFixture<StreetStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
