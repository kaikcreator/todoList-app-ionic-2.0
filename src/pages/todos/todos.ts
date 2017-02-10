import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  public todos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.todos = [
      {
        description: "esto es una tarea",
        isDone: false
      },
      {
        description: "esto es otra tarea",
        isDone: false
      },
      {
        description: "esto es una tercera tarea",
        isDone: false
      },
      {
        description: "esto es una 4a tarea",
        isDone: false
      },                  
      {
        description: "esto es una 5a tarea",
        isDone: false
      },      
      {
        description: "esto es una 6a tarea",
        isDone: false
      },      
    ]
  }

}
