import { Injectable } from '@angular/core';

import { TodoModel } from './todo-model';
import { DatabaseService } from "./database-service";

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {

  public todos: TodoModel[] = [];

  constructor(public database: DatabaseService) {

  }

  public loadFromList(id:number){
    this.getTodos(id);
  }

  private getTodos(id:number){
    return this.database.getTodosFromList(id)
    .then((data:any) => {
        if(!data){
          this.todos = [];
          return;
        }
        let localTodos:TodoModel[] =[];
        for(let todo of data){
          localTodos.push(TodoModel.clone(todo));
        }
        this.todos = localTodos;
      }
    )
  }

  toogleTodo(todo:TodoModel){
    let updatedTodo = TodoModel.clone(todo);
    updatedTodo.isDone = ! todo.isDone;

    return this.updateTodo(todo, updatedTodo);
  }

  removeTodo(todo:TodoModel){
    return this.database.removeTodo(todo.id)
    .then(()=>{
      return this.getTodos(todo.listId);
    })
  }

  updateTodo(originalTodo:TodoModel, modifiedTodo:TodoModel){
    return this.database.modifyTodo(modifiedTodo.description, modifiedTodo.isImportant, modifiedTodo.isDone, modifiedTodo.id)
    .then(()=>{
      return this.getTodos(modifiedTodo.listId);
    })
  }

  addTodo(todo:TodoModel){
    return this.database.addTodo(todo.description, todo.isImportant, todo.isDone, todo.listId)
    .then(()=>{
      return this.getTodos(todo.listId);
    })
  }  

}
