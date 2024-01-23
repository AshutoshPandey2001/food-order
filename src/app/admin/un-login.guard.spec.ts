import { TestBed } from '@angular/core/testing';

import { UnLoginGuard } from './un-login.guard';

describe('UnLoginGuard', () => {
  let guard: UnLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
