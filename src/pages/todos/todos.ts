import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TodoModel } from '../../shared/todo-model'; 

/*
  Generated class for the Todos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {

  public todos: TodoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
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

  setTodoStyles(item:TodoModel){

    let styles = {
      'text-decoration': item.isDone ? 'line-through' : 'none',
      'font-weight': item.isImportant ? '600' : 'normal'
    };

    return styles;

  }

  toogleTodo(todo:TodoModel){
    todo.isDone = ! todo.isDone;
  }

  showAddTodo(){
    console.log("hi!!!!");
  }

}
