import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  private movies: Movie[] = [];

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  showMore(movie: Movie) {
    this.router.navigate(['movie', movie.id])
  }
}
