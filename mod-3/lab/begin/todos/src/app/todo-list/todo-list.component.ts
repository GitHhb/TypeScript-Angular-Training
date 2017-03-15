import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any[] = [];
  newTodo: string = "nieuwe entry";

  constructor() { }

  ngOnInit() {
    this.todos = [
      {title: "brood", done: false},
      {title: "melk", done: true},
      {title: "vlees", done: false},
      {title: "pindakaas", done: true},
      {title: "kaas", done: false}
    ]
  }

  addTodo () {
    this.todos.push({
      title: this.newTodo,
      done: false
    });
    this.newTodo = '';
  }

  clearDone () {
    for (let t in this.todos) {
      if (this.todos[t].done) this.todos.splice(+t, 1);
    }
  }

  noDoneElementsLeft(): boolean {
    return this.todos.every(item => !item.done);
  }
}
