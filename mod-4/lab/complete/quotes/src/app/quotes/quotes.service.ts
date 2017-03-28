import { Injectable } from '@angular/core';

@Injectable()
export class QuotesService {

  constructor() { }

  getQuotes(): string[] {
    return [
      'This is a quote.',
      'This is another quote.',
      'Create your custom QuotesService to display other quotes.'
    ]
  }
}
