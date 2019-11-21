import { TestBed, inject } from '@angular/core/testing';

import { LoggedGuard } from './logged-guard.guard';

describe('LoggedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedGuard]
    });
  });

  it('should ...', inject([LoggedGuard], (guard: LoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
