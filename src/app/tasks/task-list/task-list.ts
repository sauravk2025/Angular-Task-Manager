import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskListType } from './task-list.model'
import { Card } from "../../shared/card/card"; //importing interface or typedefinition from another file
import { DatePipe } from '@angular/common'; //inbuilt pipe to format Date
//saving type definiton in another file is a general convention.type keyword defines that it is typedefinition


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  standalone:false
})
export class TaskList {

  @Input() task!: TaskListType;
  @Output() completed = new EventEmitter<string>()


  complete() {
    this.completed.emit(this.task.id)
  }
}
