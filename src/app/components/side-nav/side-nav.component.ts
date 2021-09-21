import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { WeatherItem } from 'src/app/objects-types/weather';
import { UserCoordinates } from 'src/app/objects-types/user-coordinates';

import { WeatherService } from 'src/app/services/weather.service';
import { SharingWeatherDataService } from 'src/app/services/sharing-weather-data.service';
import { Observable, pipe } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';
@Component({
	selector: 'app-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
	public openWeatherData!: any;

	constructor(private _weather: WeatherService, private _geolocation$: GeolocationService, private _sharing: SharingWeatherDataService, private _error: ErrorService) { }


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
				switchMap((data: UserCoordinates): any => {
					return this._weather.getDefaultWeatherData(data.lat!, data.lon!)
				}),
				catchError((error: any): any => {
					const geolocationAdvice = 'Allow your computer to use your geolocation, or type a city name in imput!'
					this._error.errorHandler(error, geolocationAdvice)
				})
			)
			.subscribe((position: any) => {
				this.openWeatherData = position

				// pass data to "_sharing.servise"
				this._sharing.setUserWeatherData(this.openWeatherData);
			})

	};


	submit(cityName: string) {
		this._weather.getWeatherData(cityName)
			.subscribe((data) => {
				this.openWeatherData = data
				console.log(this.openWeatherData);
				// pass data to "_sharing.servise"
				this._sharing.setUserWeatherData(this.openWeatherData);
			})
	};
}
