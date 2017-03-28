import { TestBed, inject } from '@angular/core/testing';

import { SkeetQuotesService } from './skeet-quotes.service';

describe('SkeetQuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkeetQuotesService]
    });
  });

  it('should ...', inject([SkeetQuotesService], (service: SkeetQuotesService) => {
    expect(service).toBeTruthy();
  }));
});
