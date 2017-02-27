import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { TodosPage } from '../todos/todos';
import { ListsService } from '../../shared/lists-service';
import { ListModel } from '../../shared/list-model';

/*
  Generated class for the Lists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public listsService:ListsService, private loadingCtrl:LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  goToList(list:ListModel){
    this.navCtrl.push(TodosPage, {list});
  }

  addNewList(name:string){
    let loader = this.loadingCtrl.create();
    loader.present();

    let list = this.listsService.addList(name)
    .subscribe(list =>{
      this.goToList(list);
      loader.dismiss();
    }, error => loader.dismiss());

  }

  showAddList(){
    console.log("show add list");
    let addListAlert = this.alertCtrl.create({
      title: 'New list',
      message: 'Give a name to the new list',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {}
        },
        {
          text: 'Add',
          handler: data => {
            let navTransition = addListAlert.dismiss();
            navTransition.then(()=>{this.addNewList(data.name)});
          }
        }
      ]
    });

    addListAlert.present();
    
  }

}
