import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { UserCoordinates } from 'src/app/objects-types/user-coordinates';
import { SharingWeatherDataService } from 'src/app/services/sharing-weather-data.service';
import { mapStyle } from './map-style';
// import { mapStyle } from 'src/app/components/city-location/map-style.ts'
@Component({
	selector: 'app-city-location',
	templateUrl: './city-location.component.html',
	styleUrls: ['./city-location.component.scss']
})
export class CityLocationComponent implements OnInit, AfterViewInit {
	private weatherAPIkey = 'AIzaSyCawDz-TKGdLqMk-N7zZKrZRJxpfZKU32k'
	public isHidden = true;
	public cityMap!: HTMLElement;
	public cityMapSecond!: HTMLElement;

	@ViewChild('cityMap') mapContainer!: ElementRef;

	constructor(private _sharing: SharingWeatherDataService) { }



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

					// this.mapCreation(data.lat, data.lon) // creates current city map;

					this.isHidden = true;
				} else {
					// here shoud be WARNING WINDOW or "map isn't available in your region"
				}
			})
	}

	mapCreation(coordLat: number | null, coordLon: number | null): void {
		const location = { lat: coordLat, lng: coordLon };

		let loader = new Loader({
			apiKey: this.weatherAPIkey,
			language: 'en-AU'
		});

		loader.load().then(() => {

			const currentMap = new google.maps.Map(this.cityMap, {
				center: location,
				zoom: 9,
				disableDefaultUI: true,
				draggable: false,
				styles: mapStyle,
			} as google.maps.MapOptions)
		})
	}
}
