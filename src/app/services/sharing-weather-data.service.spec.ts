import { TestBed } from '@angular/core/testing';

import { SharingWeatherDataService } from './sharing-weather-data.service';

describe('SharingWeatherDataService', () => {
  let service: SharingWeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingWeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
