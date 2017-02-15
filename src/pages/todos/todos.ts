import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { TodoModel } from '../../shared/todo-model'; 
import { TodoService } from '../../shared/todo-service';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal';

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


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public todoService: TodoService) {}

  ionViewDidLoad() {}

  setTodoStyles(item:TodoModel){
    let styles = {
      'text-decoration': item.isDone ? 'line-through' : 'none',
      'font-weight': item.isImportant ? '600' : 'normal'
    };
    return styles;
  }

  toogleTodo(todo:TodoModel){
    this.todoService.toogleTodo(todo);
  }

  removeTodo(todo:TodoModel){
    this.todoService.removeTodo(todo);
  }

  showAddTodo(){
    let modal = this.modalCtrl.create(AddTaskModalPage);
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.todoService.addTodo(data);
      }
    });
  }

}
