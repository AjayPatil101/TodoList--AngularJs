import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './myComponent/todo/todo.component';
import { AboutComponentComponent } from './myComponent/about-component/about-component.component';

const routes: Routes = [
  { path: '', component: TodoComponent },   // Default path
  { path: 'about', component: AboutComponentComponent }  // 'about' path
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }