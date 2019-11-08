import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginInterface} from '../shared/model/login/login-interface';
import {UserService} from '../shared/services/user/user.service';
import {ValidationHelper} from '../shared/util/validation';
import {SnackbarService} from '../shared/components/snackbar-service/snackbar-service.service';
import absoluteRoutes from '../shared/constants/absolute-routes';

@Component({
	selector: 'app-new-user-hidden',
	templateUrl: './new-user-hidden.component.html',
	styleUrls: ['./new-user-hidden.component.css']
})
export class NewUserHiddenComponent implements OnInit {

	form: FormGroup;
	submitted = false;
	spinner = false;

	loginEntity: LoginInterface;

	constructor(
		private formBuilder: FormBuilder,
		private snackBar: SnackbarService,
		private userService: UserService) {
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			login: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			token: ['', Validators.required]
		});
	}

	submitLogin() {
		this.submitted = true;
		this.spinner = true;

		if (this.form.invalid) {
			this.snackBar.openSnackBarInvalidForm();
			this.spinner = false;
			return;
		}

		if (!ValidationHelper.validateEmail(this.login.value)) {
			this.snackBar.openSnackBarInvalidEmail();
			this.token.setValue('');
			this.spinner = false;
			return;
		}

		this.fillEntity(this.login.value, this.password.value);
		this.userService.createUser(this.loginEntity, this.token.value)
			.subscribe(() => {
					this.submitted = false;
					this.resetForm();
				},
				error => {
					this.snackBar.openSnackBarInvalidRequest(error);
					this.token.setValue('');
					this.spinner = false;
				},
				() => {
					this.spinner = false;
					this.snackBar.openSnackBarSuccess('User Created', absoluteRoutes.LOGIN);
				});
	}

	resetForm(): void {
		this.login.setValue('');
		this.password.setValue('');
		this.token.setValue('');

		this.fillEntity('', '');
	}

	fillEntity(loginValue: string, passwordValue: string): void {
		this.loginEntity = {
			email: loginValue,
			password: passwordValue
		};
	}

	//#region SnackBar

	//#endregion

	//#region Getter Form

	get login() {
		return this.form.get('login');
	}

	get password() {
		return this.form.get('password');
	}

	get token() {
		return this.form.get('token');
	}

	//#endregion

}
