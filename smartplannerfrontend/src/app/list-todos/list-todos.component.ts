import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

 todos = [
  new Todo(1, "pray", false, new Date()),
  new Todo(2, "exercise", false, new Date()),
  new Todo(3, "Take breakfast", false, new Date()),
  new Todo(4, "Go to work", false, new Date()),
  new Todo(5, "Code", false, new Date()),
  new Todo(6, "Take Lunch", false, new Date()),
  new Todo(7, "Go home", false, new Date()),
  new Todo(8, "Check business", false, new Date()),
  new Todo(9, "Code", false, new Date()),
  new Todo(10, "Take Supper", false, new Date()),
  new Todo(10, "Pray", false, new Date()),
  new Todo(10, "Sleep", false, new Date())
 ]
 constructor() { }

  ngOnInit(): void {
  }

}
