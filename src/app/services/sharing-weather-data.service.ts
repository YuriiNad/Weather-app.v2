import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


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
