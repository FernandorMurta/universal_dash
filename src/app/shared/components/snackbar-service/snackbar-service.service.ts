import {Injectable} from '@angular/core';
import {ValidationHelper} from '../../util/validation';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class SnackbarService {

	constructor(
		private snackBar: MatSnackBar,
		private route: Router) {
	}

	openSnackBarInvalidForm() {
		this.snackBar.open('Todos os campos Obrigatórios devem ser preenchidos', 'Entendi', {
			duration: 5 * 1000,
		});
	}

	openSnackBarInvalidRequest(msg: string) {
		this.snackBar.open(msg, 'Entendi', {
			duration: 5 * 1000,
		});
	}

	openSnackBarInvalidEmail() {
		this.snackBar.open(ValidationHelper.EMAIL_ERROR, 'Entendi', {
			duration: 5 * 1000,
		});
	}

	openSnackBarSuccess(msg: string, absolutePath ?: string) {
		absolutePath
			? this.snackBar.open(msg, 'Great').onAction().subscribe(() => this.route.navigate([absolutePath]))
			: this.snackBar.open(msg, 'Great');
	}
}
