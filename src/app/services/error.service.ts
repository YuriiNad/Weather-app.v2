import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class ErrorService {

	constructor() { }

	errorHandler(error: any, advice?: string): void {

		const errorMessage = error.message
		Swal.fire({
			icon: 'error',
			title: errorMessage,
			text: advice,
			allowOutsideClick: false,
			confirmButtonColor: '#F27474',
		})
	}
}
