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

  }

  public loadFromList(id:number){
    if(id < 3){
      this.todos = [
        new TodoModel("this is an element", true),
        new TodoModel("this is an element"),
        new TodoModel("this is an element", false, true),
      ];
    }else{
      this.todos = [];
    }

  }

  toogleTodo(todo:TodoModel){
    let isDone = !todo.isDone;
    const todoIndex = this.todos.indexOf(todo);
    let updatedTodo = new TodoModel(todo.description, todo.isImportant, isDone);

    this.todos = [
      ...this.todos.slice(0,todoIndex),
      updatedTodo,
      ...this.todos.slice(todoIndex+1)
    ];
  }

  removeTodo(todo:TodoModel){
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index+1)];
  }

  updateTodo(originalTodo:TodoModel, modifiedTodo:TodoModel){
    const index = this.todos.indexOf(originalTodo);
    this.todos = [
      ...this.todos.slice(0, index),
      modifiedTodo,
      ...this.todos.slice(index+1)];
  }

  addTodo(todo:TodoModel){
    this.todos = [...this.todos, todo];
  }  

}
