import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesService } from './quotes.service';
import { RandomizePipe } from './randomize.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [QuotesService],
  declarations: [QuotesComponent, RandomizePipe],
  exports: [QuotesComponent]
})
export class QuotesModule { }
