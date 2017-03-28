import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes/quotes.service';
import { SkeetQuotesService } from '../skeet-quotes.service';

@Component({
  selector: 'app-skeet-quotes',
  templateUrl: './skeet-quotes.component.html',
  styleUrls: ['./skeet-quotes.component.css'],
  providers: [{
    provide: QuotesService, useClass: SkeetQuotesService
  }]
})
export class SkeetQuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
