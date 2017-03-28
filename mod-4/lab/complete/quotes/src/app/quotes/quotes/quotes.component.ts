import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: string[];
  quoteCount: number = 5;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes = this.quotesService.getQuotes();
  }
}
