import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {

  @Input() movieId: number;
  @Output() showList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancel(e) {
    e.preventDefault();
    this.showList.emit();
  }
}
