import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MoviesService } from './movies.service';

import { AppComponent } from './app.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieEditorComponent,
    MovieListItemComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
