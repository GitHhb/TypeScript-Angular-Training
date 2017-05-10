import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MoviesService } from './movies.service';

import { AppComponent } from './app.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

var routes: Routes = [
  { path: 'movies', component: MovieListItemComponent },
  { path: 'movie/:modieId', component: MovieEditorComponent },
  { path: '**', redirectTo: 'movies'}
];

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
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})


export class AppModule { }
