import { Injectable } from '@angular/core';

@Injectable()
export class QuotesService {

  constructor() { }

  getQuotes(): string[] {
    return ["Hello there", "I'm here", "who are you"];
  }

}
