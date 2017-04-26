import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { releaseDateValidator } from "app/movie-editor/release-date.validator";
// import { releaseDateValidator } from "./movie-editor.component";


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
  };

  @Input() movieId: number;
  @Output() showList = new EventEmitter();

  constructor(private moviesService: MoviesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: [ null, [Validators.required, Validators.maxLength(100) ] ],
      overview: [],
      release_date: [null, [Validators.required, Validators.pattern(/^\d\d\d\d-\d\d-\d\d$/), releaseDateValidator] ]
    });
    this.moviesService.getMovie(this.movieId)
      .subscribe(movie => {
        this.movie = movie;
        this.movieForm.reset(movie);
        this.validateMovie();
      });
    this.movieForm.valueChanges.subscribe( () => this.validateMovie());
  }


  onCancel(e) {
    e.preventDefault();
    this.showList.emit();
  }

  onSubmit() {
      const updatedMovie = Object.assign({}, this.movie, this.movieForm.getRawValue() );
      this.moviesService.updateMovie(updatedMovie)
      .subscribe(() => this.showList.emit());
  }

  validateMovie() {
      this.errors.title = "";
      const errors = this.movieForm.controls.release_date.errors;
      console.log(errors);
      if (errors) {
        if (errors.required) {
          this.errors.title = "Title is required";
        }
        if (errors.maxlength) {
          this.errors.title = "Title should not be longer than 100 characters";
        }
      } 
  }
}
