import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { UserCoordinates } from 'src/app/objects-types/user-coordinates';
import { SharingWeatherDataService } from 'src/app/services/sharing-weather-data.service';
@Component({
	selector: 'app-city-location',
	templateUrl: './city-location.component.html',
	styleUrls: ['./city-location.component.scss']
})
export class CityLocationComponent implements OnInit, AfterViewInit {
	public coordinates!: UserCoordinates;
	public isHidden = true;
	public cityMap!: HTMLElement;
	public cityMapSecond!: HTMLElement;

	@ViewChild('cityMap') mapContainer!: ElementRef;

	constructor(private _sharing: SharingWeatherDataService, private renderer: Renderer2) { }



	ngOnInit(): void {
		setTimeout(() => {
			console.log(this.cityMap);

			let loader = new Loader({
				apiKey: 'AIzaSyCawDz-TKGdLqMk-N7zZKrZRJxpfZKU32k',
			});

			loader.load().then(() => {

				const currentMap = new google.maps.Map(this.cityMap, {
					center: { lat: 49.83, lng: 24.029 },
					zoom: 9,
					disableDefaultUI: true,
					draggable: false,
					styles: [
						{
							'stylers': [
								{
									'saturation': -45
								},
								{
									'lightness': 13
								}
							]
						},
						{
							'featureType': 'road.highway',
							'elementType': 'geometry.fill',
							'stylers': [
								{
									'color': '#8fa7b3'
								}
							]
						},
						{
							'featureType': 'road.highway',
							'elementType': 'geometry.stroke',
							'stylers': [
								{
									'color': '#667780'
								}
							]
						},
						{
							'featureType': 'road.highway',
							'elementType': 'labels.text.fill',
							'stylers': [
								{
									'color': '#333333'
								}
							]
						},
						{
							'featureType': 'road.highway',
							'elementType': 'labels.text.stroke',
							'stylers': [
								{
									'color': '#8fa7b3'
								},
								{
									'gamma': 2
								}
							]
						},
						{
							'featureType': 'road.arterial',
							'elementType': 'geometry.fill',
							'stylers': [
								{
									'color': '#a3becc'
								}
							]
						},
						{
							'featureType': 'road.arterial',
							'elementType': 'geometry.stroke',
							'stylers': [
								{
									'color': '#7a8f99'
								}
							]
						},
						{
							'featureType': 'road.arterial',
							'elementType': 'labels.text.fill',
							'stylers': [
								{
									'color': '#555555'
								}
							]
						},
						{
							'featureType': 'road.local',
							'elementType': 'geometry.fill',
							'stylers': [
								{
									'color': '#a3becc'
								}
							]
						},
						{
							'featureType': 'road.local',
							'elementType': 'geometry.stroke',
							'stylers': [
								{
									'color': '#7a8f99'
								}
							]
						},
						{
							'featureType': 'road.local',
							'elementType': 'labels.text.fill',
							'stylers': [
								{
									'color': '#555555'
								}
							]
						},
						{
							'featureType': 'water',
							'elementType': 'geometry.fill',
							'stylers': [
								{
									'color': '#bbd9e9'
								}
							]
						},
						{
							'featureType': 'administrative',
							'elementType': 'labels.text.fill',
							'stylers': [
								{
									'color': '#525f66'
								}
							]
						},
						{
							'featureType': 'transit',
							'elementType': 'labels.text.stroke',
							'stylers': [
								{
									'color': '#bbd9e9'
								},
								{
									'gamma': 2
								}
							]
						},
						{
							'featureType': 'transit.line',
							'elementType': 'geometry.fill',
							'stylers': [
								{
									'color': '#a3aeb5'
								}
							]
						}
					]
				} as google.maps.MapOptions)
			})
		}, 0)


	}


	ngAfterViewInit() {
		this.cityMap = this.mapContainer.nativeElement;
		console.log(this.cityMap);
	}

	// getCoordinates(): void {
	// 	this._sharing.userWeatherData
	// 		.subscribe((data) => {
	// 			this.coordinates = data;
	// 			if (this.coordinates != null) {

	// 				// re-assignment coordinates to the same variable
	// 				this.coordinates = {
	// 					lat: data.lat,
	// 					lon: data.lon,
	// 				}
	// 				console.log(this.coordinates);

	// 				this.isHidden = true;
	// 			}
	// 		})
	// }
	// mapCreation():void {

	// }
}
