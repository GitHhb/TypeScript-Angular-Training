import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {
  movie: Movie = null;

  @Input() movieId: number;
  @Output() showList = new EventEmitter();

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovie(this.movieId)
      .subscribe(movie => this.movie = movie);
  }

  onCancel(e) {
    e.preventDefault();
    this.showList.emit();
  }

  onSubmit() {
    this.moviesService.updateMovie(this.movie)
      .subscribe(() => this.showList.emit());
  }
}
