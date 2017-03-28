import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes/quotes.service';
import { NorrisQuotesService } from '../norris-quotes.service';

@Component({
  selector: 'app-norris-quotes',
  templateUrl: './norris-quotes.component.html',
  styleUrls: ['./norris-quotes.component.css'],
  providers: [{
    provide: QuotesService, useClass: NorrisQuotesService
  }]
})
export class NorrisQuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
