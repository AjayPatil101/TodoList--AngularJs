import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() checkboxClick: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.todo = {
      id: 0,
      title: '',
      description: '',
      completed: false
    };
  }
  clickDelete(todo: Todo){
    this.deleteTodo.emit(todo);
  }
  onCheckboxClick(todo: Todo){
    this.checkboxClick.emit(todo);
  }
  ngOnInit(): void {
  }
}
