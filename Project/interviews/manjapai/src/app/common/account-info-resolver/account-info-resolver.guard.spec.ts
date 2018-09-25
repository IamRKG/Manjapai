import { TestBed, async, inject } from '@angular/core/testing';

import { AccountInfoResolverGuard } from './account-info-resolver.guard';

describe('AccountInfoResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountInfoResolverGuard]
    });
  });

  it('should ...', inject([AccountInfoResolverGuard], (guard: AccountInfoResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
