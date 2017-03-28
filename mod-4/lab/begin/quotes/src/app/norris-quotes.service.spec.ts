import { TestBed, inject } from '@angular/core/testing';

import { NorrisQuotesService } from './norris-quotes.service';

describe('NorrisQuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NorrisQuotesService]
    });
  });

  it('should ...', inject([NorrisQuotesService], (service: NorrisQuotesService) => {
    expect(service).toBeTruthy();
  }));
});
