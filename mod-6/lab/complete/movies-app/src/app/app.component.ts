import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMovie: number = null;

  constructor() { }

  movieSelected(id) {
    this.selectedMovie = id;
  }

  showList() {
    this.selectedMovie = null;
  }
}
