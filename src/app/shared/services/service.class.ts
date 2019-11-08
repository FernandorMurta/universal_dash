import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

export class ServiceClass {

	private static ERROR_SIDE_SERVER = 'An error occurred:';

	public handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.log(ServiceClass.ERROR_SIDE_SERVER + error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.log(error.error);
		}

		if (error.status === 400) {
			return throwError(
				error.error.errors[0]);
		}

		return throwError(
			error.error.message);
	}

}
