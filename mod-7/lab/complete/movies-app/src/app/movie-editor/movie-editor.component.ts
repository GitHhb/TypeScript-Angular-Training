import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { releaseDateValidator } from './release-date.validator';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {
  movie: Movie = null;
  movieForm: FormGroup;
  errors = {
    title: null,
    release_date: null
  }

  @Input() movieId: number;
  @Output() showList = new EventEmitter();

  constructor(private moviesService: MoviesService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(100)]],
      overview: [],
      release_date: [null, [Validators.required, Validators.pattern(/^\d\d\d\d-\d\d-\d\d$/), releaseDateValidator]]
    });
    this.movieForm.valueChanges.subscribe(() => this.validateMovie())

    this.moviesService.getMovie(this.movieId)
      .subscribe(movie => {
        this.movie = movie;
        this.movieForm.reset(movie);
        this.validateMovie();
    });
  }

  validateMovie() {
    this.errors.title = null;
    this.errors.release_date = null;

    const titleErrors = this.movieForm.controls['title'].errors;
    if (titleErrors) {
      if (titleErrors.required) {
        this.errors.title = 'The title is required.'
      } else if (titleErrors.maxlength) {
        this.errors.release_date = `The maximum title length is ${titleErrors.maxlength.requiredLength}.`
      }
    }

    const releaseErrors = this.movieForm.controls['release_date'].errors;
    if (releaseErrors) {
      if (releaseErrors.required) {
        this.errors.release_date = 'The release date is required.'
      } else if (releaseErrors.pattern) {
        this.errors.release_date = 'The release date should be in the format YYYY-MM-DD.'
      } else if (releaseErrors.releaseDate) {
        if (releaseErrors.releaseDate.parseError) {
          this.errors.release_date = 'Invalid date.'
        } else if (releaseErrors.releaseDate.beforeCamera) {
          this.errors.release_date = 'The camera was not invented untill 1891.'
        } else if (releaseErrors.releaseDate.future) {
          this.errors.release_date = "The movie can't be released in the future."
        }
      }
    }
  }

  onCancel() {
    this.showList.emit();
  }

  onSubmit() {
    const updatedMovie = {...this.movie, ...this.movieForm.value};
    this.moviesService.updateMovie(updatedMovie)
      .subscribe(() => this.showList.emit());
  }
}
