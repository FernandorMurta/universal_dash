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
import { NewUserHiddenComponent } from './new-user-hidden/new-user-hidden.component';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './error/error.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NewUserHiddenComponent,
		ErrorComponent
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
		MatListModule,
		HttpClientModule
	],
	entryComponents: [
		ModalLeagueListComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
