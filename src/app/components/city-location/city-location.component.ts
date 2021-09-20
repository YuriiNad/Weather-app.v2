import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { SharingWeatherDataService } from 'src/app/services/sharing-weather-data.service';
@Component({
	selector: 'app-city-location',
	templateUrl: './city-location.component.html',
	styleUrls: ['./city-location.component.scss']
})
export class CityLocationComponent implements OnInit, AfterViewInit {
	public isHidden = true;
	public cityMap!: HTMLElement;

	@ViewChild('cityMap') mapContainer!: ElementRef;

	constructor(private _sharing: SharingWeatherDataService, private _map: MapService) { }

	ngOnInit(): void {
		this.getCoordinates();
	}

	ngAfterViewInit() {
		this.cityMap = this.mapContainer.nativeElement;
	}

	getCoordinates(): void {
		this._sharing.userWeatherData
			.subscribe((data) => {
				if (data != null && data != undefined) {
					// this._map.mapCreation(data.lat, data.lon, this.cityMap); // creates current city map;
					this.isHidden = true;
				} else {
					// here shoud be WARNING WINDOW or "map isn't available in your region"
				}
			})
	}
}
