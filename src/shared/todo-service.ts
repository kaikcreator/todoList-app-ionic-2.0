import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TodoModel } from './todo-model';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {

  private todos: TodoModel[];

  constructor(public http: Http) {
    this.getTodos();
  }

  getTodos(){
    this.todos = [
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element", true),
      new TodoModel("this is an element"),
      new TodoModel("this is an element", false, true),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
    ];
  }

  toogleTodo(todo:TodoModel){
    todo.isDone = ! todo.isDone;
  }

  removeTodo(todo:TodoModel){
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index+1)];
  }

  addTodo(todo:TodoModel){
    this.todos.push(todo);
  }  

}
