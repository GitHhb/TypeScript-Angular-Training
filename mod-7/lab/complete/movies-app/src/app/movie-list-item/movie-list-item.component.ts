import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  private movies: Movie[] = [];
  @Output() movieSelected = new EventEmitter<number>();

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  showMore(movie: Movie) {
    this.movieSelected.emit(movie.id);
  }
}
