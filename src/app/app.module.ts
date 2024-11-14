import { TodoComponent } from './myComponent/todo/todo.component';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './myComponent/todo-add/todo-add.component';
import { TodoItemComponent } from './myComponent/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponentComponent } from './myComponent/about-component/about-component.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent, 
    TodoAddComponent,
    TodoItemComponent,
    AboutComponentComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
