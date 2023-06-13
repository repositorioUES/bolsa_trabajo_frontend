import { TestBed } from '@angular/core/testing';

import { AspiranteGuard } from './aspirante.guard';

describe('AspiranteGuard', () => {
  let guard: AspiranteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AspiranteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
