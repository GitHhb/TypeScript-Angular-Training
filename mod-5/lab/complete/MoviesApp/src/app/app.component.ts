import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Popular movies';
  private selectedMovie = null;
  private savedMovie = null;

  movieSelected(movie) {
    this.savedMovie = movie;
    this.selectedMovie = Object.assign({}, movie);
  }

  movieSaved() {
    Object.assign(this.savedMovie, this.selectedMovie);
    this.selectedMovie = null;
    this.savedMovie = null;
  }

  cancelEdit() {
    this.selectedMovie = null;
    this.savedMovie = null;
  }
}
