import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import movies from '../../../../../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies = movies;
  @Output() movieSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMovieSelected(movie) {
    this.movieSelected.emit(movie);
  }

}
