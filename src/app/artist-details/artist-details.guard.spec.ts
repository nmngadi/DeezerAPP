import { TestBed } from '@angular/core/testing';

import { ArtistDetailsGuard } from './artist-details.guard';

describe('ArtistDetailsGuard', () => {
  let guard: ArtistDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ArtistDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
