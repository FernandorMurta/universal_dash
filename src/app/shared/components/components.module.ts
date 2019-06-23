import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalLeagueListComponent} from './modal-league-list/modal-league-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatListModule} from '@angular/material';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [ModalLeagueListComponent, NavbarComponent],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatButtonModule,
		MatListModule,
		RouterModule
	],
	entryComponents: [
		ModalLeagueListComponent
	],
	exports: [
		NavbarComponent,
		ModalLeagueListComponent
	],

})
export class ComponentsModule {
}
