import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesService } from './quotes.service';
import { RandomizePipe } from './randomize.pipe';

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
