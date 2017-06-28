import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { SQLite } from '@ionic-native/sqlite';
import { TodosPage } from '../pages/todos/todos';
import { ListsPage } from '../pages/lists/lists';
import { AddTaskModalPage } from '../pages/add-task-modal/add-task-modal';
import { TodoService } from '../shared/todo-service';
import { ListsService } from '../shared/lists-service';
import { PrioritizedTodosPipe } from '../pipes/prioritized-todos-pipe';
import { DoneTodosPipe } from '../pipes/done-todos-pipe';
import { DatabaseService } from '../shared/database-service';

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    ListsPage,
    AddTaskModalPage,
    PrioritizedTodosPipe,
    DoneTodosPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    ListsPage,
    AddTaskModalPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoService,
    ListsService,
    SQLite, 
    DatabaseService
    ]
})
export class AppModule {}
