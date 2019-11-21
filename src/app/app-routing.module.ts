import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewUserHiddenComponent} from './new-user-hidden/new-user-hidden.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
	{path: '', redirectTo: 'pages/home', pathMatch: 'full'},
	{path: 'pages/home', loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)},
	{path: 'login', component: LoginComponent},
	{path: 'error', component: ErrorComponent},
	{path: 'hidden-create-user', component: NewUserHiddenComponent},
	{path: '**', redirectTo: 'error'}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
