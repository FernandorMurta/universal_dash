import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	opened: boolean;

	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
		iconRegistry.addSvgIcon(
			'user',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icon/user_circle.svg'));

		iconRegistry.addSvgIcon('settings',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icon/settings.svg'));

		iconRegistry.addSvgIcon('exit',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icon/cancel.svg'));

		iconRegistry.addSvgIcon('menu',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icon/menu.svg'));
	}

	ngOnInit() {
	}
}
