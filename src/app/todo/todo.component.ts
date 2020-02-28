import { Component } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  public newTodo: string;
  public todoItems: string[] = [];

  constructor() {}

  addTodo(): void {
    this.todoItems.push(this.newTodo);
    this.remove();
  }

  remove(): void {
    this.newTodo = "";
  }

  deleteTodo(i: number): void {
    this.todoItems.splice(i, 1);
  }
}
