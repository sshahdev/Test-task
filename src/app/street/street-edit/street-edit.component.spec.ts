import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetEditComponent } from './street-edit.component';

describe('StreetEditComponent', () => {
  let component: StreetEditComponent;
  let fixture: ComponentFixture<StreetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
