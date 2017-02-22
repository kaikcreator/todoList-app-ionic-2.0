import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ListModel } from './list-model';

/*
  Generated class for the ListsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListsService {

  public lists:ListModel[] = [];

  constructor(public http: Http) {
    this.getLists();
  }

  private getLists(){
    this.lists = [
      new ListModel("My list #1", 0),
      new ListModel("My list #2", 1),
      new ListModel("My list #3", 2),
      new ListModel("My list #4", 3),
      new ListModel("My list #5", 4),
      new ListModel("My list #6", 5),
      new ListModel("My list #7", 6)
    ];
  }

  public addList(name:string){
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
  }

}
