import { TestBed } from '@angular/core/testing';

import { CardslistResolverService } from './cardslist-resolver.service';

describe('CardslistResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardslistResolverService = TestBed.get(CardslistResolverService);
    expect(service).toBeTruthy();
  });
});
