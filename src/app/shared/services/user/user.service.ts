import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginInterface} from '../../model/login/login-interface';
import {Observable} from 'rxjs';
import Endpoint from '../../constants/endpoint';
import {ServiceClass} from '../service.class';
import {catchError} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService extends ServiceClass {

	constructor(private http: HttpClient) {
		super();
	}

	public createUser(user: LoginInterface, key: string): Observable<any> {
		user.password = window.btoa(user.password);
		key = window.btoa(key);
		return this.http.post(Endpoint.USER.CREATE_USER, user, {params: {key}})
			.pipe(catchError(this.handleError));
	}
}
