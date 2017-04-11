import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie;
  @Output() movieSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showMore() {
    this.movieSelected.emit(this.movie);
  }

}
