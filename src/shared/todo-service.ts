import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { TodoModel } from './todo-model';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {

  private todos: TodoModel[] = [];

  constructor(public http: Http, public local:Storage) {

  }

  public loadFromList(id:number){
    this.getFromLocal(id);
  }

  private getFromLocal(id:number){
    this.local.ready().then(()=>{
      this.local.get(`list/${id}`).then(
        data => {
          if(!data){
            this.todos = [];
            return;
          }
          let localTodos:TodoModel[] =[];
          for(let todo of data){
            localTodos.push(new TodoModel(todo.description, todo.isImportant, todo.isDone));
          }
          this.todos = localTodos;
        }
      )
    })
  }

  public saveLocally(id:number){
    this.local.ready().then(()=>{
      this.local.set(`list/${id}`, this.todos);
    })
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
