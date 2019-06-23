import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalLeagueListComponent} from './modal-league-list.component';

describe('ModalLeagueListComponent', () => {
	let component: ModalLeagueListComponent;
	let fixture: ComponentFixture<ModalLeagueListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ModalLeagueListComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalLeagueListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
