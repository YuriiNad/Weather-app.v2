import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { mapStyle } from '../components/city-location/map-style';


@Injectable({
	providedIn: 'root'
})
export class MapService {
	private weatherAPIkey = 'AIzaSyCawDz-TKGdLqMk-N7zZKrZRJxpfZKU32k'
	constructor() { }

	mapCreation(coordLat: number, coordLon: number, cityMap: HTMLElement): void {
		const location = { lat: coordLat, lng: coordLon };

		let loader = new Loader({
			apiKey: this.weatherAPIkey,
			language: 'en-AU'
		});

		loader.load().then(() => {

			const currentMap = new google.maps.Map(cityMap, {
				center: location,
				zoom: 11,
				disableDefaultUI: true,
				draggable: false,
				styles: mapStyle,
			} as google.maps.MapOptions)

			const marker = new google.maps.Marker({
				position: location,
			});

			marker.setMap(currentMap);
		})
	}
}
