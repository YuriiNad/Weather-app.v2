import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLocationComponent } from './city-location.component';

describe('CityLocationComponent', () => {
  let component: CityLocationComponent;
  let fixture: ComponentFixture<CityLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
