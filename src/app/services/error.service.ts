import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class ErrorService {

	constructor() { }
	notifyError(description: string, solveOption: string = "Please, try one more time!") {
		Swal.fire({
			icon: 'error',
			title: description,
			text: solveOption,
			allowOutsideClick: false,
			confirmButtonColor: '#F27474',
		})
	}
}
