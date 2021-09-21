import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherItem } from '../objects-types/weather';
import { ErrorService } from './error.service';
import { catchError, map } from 'rxjs/operators';



@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	private openWeatherApiKey: string = '&appid=8c11b9f0aba5f87af6fee00297f1a0f2';
	private openWeatherData!: WeatherItem;

	constructor(private _http: HttpClient, private _error: ErrorService) { }

	getWeatherData(cityName: string): Observable<object> {
		return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}${this.openWeatherApiKey}&units=metric`)
			.pipe(
				catchError((error: any): any => {
					const weatherAdvice = 'Input is empty, or incorrect city name!'
					this._error.errorHandler(error.error, weatherAdvice)
				}),
				map((data: any): WeatherItem => {
					this.openWeatherData = {
						name: data.name,
						country: data.sys['country'],
						temperature: data.main['temp'],
						feels_like: data.main['feels_like'],
						icon: `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`,
						description: data.weather[0]['description'],
						pressure: data.main['pressure'],
						humidity: data.main['humidity'],
						lat: data.coord['lat'],
						lon: data.coord['lon'],
					}

					return this.openWeatherData
				})
			)
	}

	getDefaultWeatherData(lat: number, lon: number): Observable<object> {
		return this._http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8c11b9f0aba5f87af6fee00297f1a0f2&units=metric`)
			.pipe(
				map((data: any): WeatherItem => {
					this.openWeatherData = {
						name: data.name,
						country: data.sys['country'],
						temperature: data.main['temp'],
						feels_like: data.main['feels_like'],
						icon: `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`,
						description: data.weather[0]['description'],
						pressure: data.main['pressure'],
						humidity: data.main['humidity'],
						lat: data.coord['lat'],
						lon: data.coord['lon'],
					}
					return this.openWeatherData
				})
			)
	}

}
