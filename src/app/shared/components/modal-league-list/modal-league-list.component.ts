import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LeagueList} from '../../model/league-list/league-list';
import {Router} from '@angular/router';


export interface DialogData {
	animal: string;
	name: string;
}

@Component({
	selector: 'app-modal-league-list',
	templateUrl: './modal-league-list.component.html',
	styleUrls: ['./modal-league-list.component.css']
})
export class ModalLeagueListComponent {

	constructor(
		public dialogRef: MatDialogRef<ModalLeagueListComponent>,
		private router: Router,
		@Inject(MAT_DIALOG_DATA) public data: Array<LeagueList>) {
	}

	redirect(): void {
		this.router.navigate(['/home']);
		this.dialogRef.close();
	}

	close() {
		this.dialogRef.close();
	}
}
