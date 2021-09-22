import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-social-media-sharing',
	templateUrl: './social-media-sharing.component.html',
	styleUrls: ['./social-media-sharing.component.scss']
})
export class SocialMediaSharingComponent implements OnInit {
	constructor(private _router: Router) { }

	ngOnInit(): void {
	}
	goToSocial(url: string): void {
		this._router.navigateByUrl(url)
	}
}
