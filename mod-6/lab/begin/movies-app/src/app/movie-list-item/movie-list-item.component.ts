import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  @Output() movieSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  showMore() {
  }
}
