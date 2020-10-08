import { TestBed } from '@angular/core/testing';

import { PokemonGetService } from './pokemon-get.service';

describe('PokemonGetService', () => {
  let service: PokemonGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
