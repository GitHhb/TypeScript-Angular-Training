import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuotesModule } from './quotes/quotes.module';

import { AppComponent } from './app.component';
import { SkeetQuotesComponent } from './skeet-quotes/skeet-quotes.component';
import { NorrisQuotesComponent } from './norris-quotes/norris-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeetQuotesComponent,
    NorrisQuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    QuotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
