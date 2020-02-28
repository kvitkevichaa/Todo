import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string;
  todos = [];

constructor(todoService: TodoService) { }

  addTodo(): void {
    this.todos.push(this.newTodo);
    this.remove();
  }

  remove(): void {
    this.newTodo = '';
  }

  deleteTodo(i): void {
this.todos.splice(i, 1);
  }

}
