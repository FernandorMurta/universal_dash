import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserHiddenComponent } from './new-user-hidden.component';

describe('NewUserHiddenComponent', () => {
  let component: NewUserHiddenComponent;
  let fixture: ComponentFixture<NewUserHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
