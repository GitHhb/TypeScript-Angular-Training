import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {

  @Input() movie;
  @Output() movieSaved = new EventEmitter();
  @Output() cancelEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.movieSaved.emit();
  }

  onCancel(e) {
    e.preventDefault();
    this.cancelEdit.emit();
  }
}
