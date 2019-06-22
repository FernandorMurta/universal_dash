import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	submitted = false;
	spinner = false;

	constructor(
		private formBuilder: FormBuilder,
		private snackBar: MatSnackBar) {
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			login: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	openSnackBarInvalidForm() {
		this.snackBar.open('Todos os campos Obrigatórios devem ser preenchidos', 'Entendi', {
			duration: 5 * 1000,
		});
	}

	submitLogin() {
		this.submitted = true;
		this.spinner = true;

		if (this.form.invalid) {
			this.openSnackBarInvalidForm();
			this.spinner = false;
			return;
		}


	}

	get login() {
		return this.form.get('login');
	}

	get password() {
		return this.form.get('password');
	}
}
