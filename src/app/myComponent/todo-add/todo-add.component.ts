import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit {
  title: string = '';
  description: string = '';
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  private idCounter: number = 0; // Counter to keep track of unique IDs

  constructor() {}

  onSubmit() {
    const todo = {
      id: this.idCounter++,
      title: this.title,
      description: this.description,
      completed: false
    }
    this.addTodo.emit(todo);
    this.title = '';
    this.description = '';
  }
  ngOnInit(): void {
  }
}
