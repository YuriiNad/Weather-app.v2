import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherItem } from 'src/app/objects-types/weather';


@Injectable({
  providedIn: 'root'
})
export class SharingWeatherDataService {
  private weatherData = new BehaviorSubject<any>(null);
  userWeatherData = this.weatherData.asObservable();

  constructor() { }

  setUserWeatherData(weatherData:any) {
    this.weatherData.next(weatherData);
  }
}
