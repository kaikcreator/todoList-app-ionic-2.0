import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { TodoModel } from '../../shared/todo-model';

/*
  Generated class for the AddTaskModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-task-modal',
  templateUrl: 'add-task-modal.html'
})
export class AddTaskModalPage {

  public model = new TodoModel('');

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskModalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  submit(){
    console.log(this.model);
  }

}
