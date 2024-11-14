import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Import isPlatformBrowser and CommonModule
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoAddComponent } from "../todo-add/todo-add.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoAddComponent], // Add CommonModule here
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  localItem: string | null = '';
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    // Check if we are running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      // Only access localStorage in the browser
      this.localItem = localStorage.getItem('todos');
      if (this.localItem !== null) {
        this.todos = JSON.parse(this.localItem);
      } else {
        this.todos = [];
      }
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(this.todos);

    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log(this.todos);

    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
  onCheckboxClick(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !this.todos[index].completed;
    console.log(this.todos);

    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  ngOnInit() {
  }
}
