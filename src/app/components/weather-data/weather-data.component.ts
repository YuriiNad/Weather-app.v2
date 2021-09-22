import { Component, OnInit } from '@angular/core';

import { SharingWeatherDataService } from 'src/app/services/sharing-weather-data.service';

@Component({
	selector: 'app-weather-data',
	templateUrl: './weather-data.component.html',
	styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
	public openWeatherData!: any;
	public isAllowed = false

	constructor(private _sharing: SharingWeatherDataService) { }

	ngOnInit(): void {
		this.getWeather()
	}

	getWeather() {
		this._sharing.userWeatherData
			.subscribe((data) => {
				this.openWeatherData = data

				if (this.openWeatherData != null) {
					this.isAllowed = true
				}
			})
		return this.openWeatherData
	}
}
