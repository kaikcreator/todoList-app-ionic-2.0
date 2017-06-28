import { Injectable } from '@angular/core';

import { ListModel } from './list-model';
import { DatabaseService } from "./database-service";

/*
  Generated class for the ListsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListsService {

  public lists:ListModel[] = [];

  constructor(public database:DatabaseService) {
    this.getLists();
  }

  public addList(name:string){
    return this.database.addList(name).then((list)=>{
      //update list of items, and then return the added list
      return this.getLists().then(()=>{
        return list;
      })
    });
  }

  public getLists(){
    return this.database.getLists()
    .then((data:any) =>{
          let localLists:ListModel[] = [];
          if(data){
            for(let list of data){
              localLists.push(new ListModel(list.name, list.id));
            }
          }
          this.lists = localLists;
        })
  }


  public removeList(list:ListModel){
    return this.database.deleteList(list.id).then(()=>{
      return this.getLists();
    });
  }

}
