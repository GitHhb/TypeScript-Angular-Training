import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any[] = [];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {title: "brood", done: true},
      {title: "kaas", done: false}
    ]
  }

}
