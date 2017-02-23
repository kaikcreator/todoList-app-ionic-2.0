import { Injectable, Pipe } from '@angular/core';
import { TodoModel } from '../shared/todo-model';

/*
  Generated class for the DoneTodosPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'doneTodosPipe'
})
@Injectable()
export class DoneTodosPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(todos: TodoModel[]) {
    return todos.filter(todo => todo.isDone);
  }
}
