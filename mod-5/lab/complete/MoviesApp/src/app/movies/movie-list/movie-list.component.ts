import { Component, Output, EventEmitter } from '@angular/core';

import movies from '../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  @Output() movieSelected = new EventEmitter();

  private movies = movies;

  onMovieSelected(movie) {
    this.movieSelected.emit(movie);
  }
}
