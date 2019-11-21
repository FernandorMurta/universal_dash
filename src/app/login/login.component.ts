import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ModalLeagueListComponent} from '../shared/components/modal-league-list/modal-league-list.component';
import {LeagueList} from '../shared/model/league-list/league-list';
import {LoginInterface} from '../shared/model/login/login-interface';
import {UserService} from '../shared/services/user/user.service';
import {SnackbarService} from '../shared/components/snackbar-service/snackbar-service.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	submitted = false;
	spinner = false;

	leagueList: Array<LeagueList> = new Array<LeagueList>();
	loginEntity: LoginInterface;

	constructor(
		private formBuilder: FormBuilder,
		private snackBar: SnackbarService,
		public dialog: MatDialog,
		private userService: UserService) {
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			login: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	openSnackBarInvalidForm() {
		this.snackBar.openSnackBarInvalidRequest('Todos os campos Obrigatórios devem ser preenchidos');
	}

	submitLogin() {
		this.submitted = true;
		this.spinner = true;

		if (this.form.invalid) {
			this.openSnackBarInvalidForm();
			this.spinner = false;
			return;
		}

		this.fillEntity(this.login.value, this.password.value);

		this.userService.login(this.loginEntity)
			.subscribe(res => {
					this.submitted = false;
					this.spinner = false;
					sessionStorage.setItem('user', res.data);
				},
				error => {
					this.snackBar.openSnackBarInvalidRequest(error);
					this.spinner = false;
				},
				() => {
					this.openDialog();
				});
		this.mock();
	}


	openDialog(): void {
		this.spinner = false;
		const dialogRef = this.dialog.open(ModalLeagueListComponent, {
			width: '450px',
			data: this.leagueList
		});

		dialogRef.afterClosed().subscribe(() => {
			this.resetForm();
		});
	}

	get login() {
		return this.form.get('login');
	}

	get password() {
		return this.form.get('password');
	}

	resetForm(): void {
		this.login.setValue('');
		this.password.setValue('');

		this.fillEntity('', '');
	}

	fillEntity(loginValue: string, passwordValue: string): void {
		this.loginEntity = {
			email: loginValue,
			password: passwordValue
		};
	}

	mock() {
		const list01: LeagueList = {
			id: 1,
			name: 'Campeonato 01',
			active: true,
			startDate: new Date(),
			endDate: new Date()
		};

		const list02: LeagueList = {
			id: 2,
			name: 'Campeonato 02',
			active: false,
			startDate: new Date(),
			endDate: new Date()
		};

		const list03: LeagueList = {
			id: 3,
			name: 'Campeonato 03',
			active: true,
			startDate: new Date(),
			endDate: new Date()
		};

		this.leagueList.push(list01);
		this.leagueList.push(list02);
		this.leagueList.push(list03);
	}
}
