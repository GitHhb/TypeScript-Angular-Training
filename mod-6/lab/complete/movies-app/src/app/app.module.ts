import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MoviesService } from './movies.service';

import { AppComponent } from './app.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieEditorComponent,
    MovieListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
