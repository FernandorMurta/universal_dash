import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
	MatButtonModule,
	MatDialogModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatProgressSpinnerModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalLeagueListComponent} from './shared/components/modal-league-list/modal-league-list.component';
import {ComponentsModule} from './shared/components/components.module';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		ComponentsModule,
		MatMenuModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	entryComponents: [
		ModalLeagueListComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
