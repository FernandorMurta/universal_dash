import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalLeagueListComponent} from './modal-league-list/modal-league-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatIconModule,
	MatListModule,
	MatMenuModule,
	MatSidenavModule,
	MatToolbarModule,
	MatTooltipModule
} from '@angular/material';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
	declarations: [ModalLeagueListComponent, NavbarComponent],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatButtonModule,
		MatListModule,
		RouterModule,
		MatSidenavModule,
		MatCheckboxModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		HttpClientModule,
		MatTooltipModule
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
