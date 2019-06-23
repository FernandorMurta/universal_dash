import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dash';

	constructor(private router: Router) {
	}

	isCurrentRouter(router, exact = true) {
		return this.router.isActive(router, exact);
	}

}
