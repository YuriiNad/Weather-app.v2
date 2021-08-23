import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { map, switchMap, take } from 'rxjs/operators';
import { WeatherItem } from 'src/app/objects-types/weather';
import { UserCoordinates } from 'src/app/objects-types/user-coordinates';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public openWeatherData!: object;

  constructor(private _weather: WeatherService, private _geolocation$: GeolocationService) { }

  ngOnInit(): void {
    this.getdefaultUserLocation();
  };

  getdefaultUserLocation() {
    this._geolocation$
      .pipe(
        take(1),
        map((position: GeolocationPosition): UserCoordinates => {  
          const coordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
          return coordinates;
        }),
        switchMap((data:UserCoordinates): any => {
          return this._weather.getDefaultWeatherData(data.lat!, data.lon!)
        })
      )
      .subscribe((position: any) => {
        this.openWeatherData = position
        console.log(this.openWeatherData);
      })
  };

  submit(cityName: string) {
    this._weather.getWeatherData(cityName)
      .subscribe((data) => {
        console.log(data);
        this.openWeatherData = data
      })
  };
}
