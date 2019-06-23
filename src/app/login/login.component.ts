import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ModalLeagueListComponent} from '../shared/components/modal-league-list/modal-league-list.component';
import {LeagueList} from '../shared/model/league-list/league-list';

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

	constructor(
		private formBuilder: FormBuilder,
		private snackBar: MatSnackBar,
		public dialog: MatDialog) {
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

		this.mock();
		this.openDialog();
	}


	openDialog(): void {
		this.spinner = false;
		const dialogRef = this.dialog.open(ModalLeagueListComponent, {
			width: '450px',
			data: this.leagueList
		});

		dialogRef.afterClosed().subscribe(() => {
			console.log('The dialog was closed');
		});
	}

	get login() {
		return this.form.get('login');
	}

	get password() {
		return this.form.get('password');
	}

	mock() {
		const list01: LeagueList = {
			name: 'Campeonato 01',
			active: true,
			startDate: new Date(),
			endDate: new Date()
		};

		const list02: LeagueList = {
			name: 'Campeonato 02',
			active: false,
			startDate: new Date(),
			endDate: new Date()
		};

		const list03: LeagueList = {
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
