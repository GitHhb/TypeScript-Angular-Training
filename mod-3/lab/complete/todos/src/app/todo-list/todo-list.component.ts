import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor() { }

  todos: any[];

  ngOnInit() {
    this.todos = [
      { title:'Create Angular 2 application using the CLI', done: true },
      { title:'Implement the to-do application', done: false },
    ];
  }

  newTodo: string = 'Make the application interactive';
  addTodo() {
    this.todos.push({
      title: this.newTodo,
      done: false
    });
    this.newTodo = '';
  }

  clearDone() {
    this.todos = this.todos.filter(todo => !todo.done);
  }

  get allDone() {
    return !this.todos.some(todo => todo.done);
  }
}
