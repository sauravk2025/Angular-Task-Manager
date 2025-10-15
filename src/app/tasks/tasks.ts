import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskList } from './task-list/task-list';
import { dummyTasks } from './dummy-task';
// import { JsonPipe } from '@angular/common';
import { NewTask } from '../new-task/new-task';
import { NewTaskType } from './task.model';
import { TaskService } from './task.service';



@Component({
  selector: 'app-tasks',
  // imports: [TaskList,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone:false
})

export class Tasks {

  // taskList = dummyTasks;
  isAdded = false;

  @Output() taskevent = new EventEmitter<string>()
  @Input() username: string | undefined;
  @Input() id!: string;

  //private tasksService = new TaskService(); //calling the service in this manner would cause to create multiple instance of the services such that if i made changes in any of the instance will affect only that.
  //so initialise using contructor

  private taskService : TaskService //setting up the variable inside class

  // setting up a dependency
  constructor (taskService : TaskService)//constructor runs when the class Tasks run
  {
    this.taskService = taskService //to call everything inside this taskService instance use this.taskService.methodname

  }

  get userTask() {
    // console.log("SS")
    return this.taskService.getUsersTasks(this.id);
  }

  onComplete(id:string)
  { 
    //console.log(id,this.taskList)
     this.taskService.onCompletingTask(id)
  } 

  onSelectUser() {
    // console.log("add");
    this.isAdded = true; // to check if add button is clicked
    this.taskevent.emit(this.id)
  }
  onClickUser()
  {
    console.log("isadded")
    this.isAdded=false
  }

  onSubmit(task:NewTaskType)
  {
    // this.taskService.onAdd(task,this.id);
    this.isAdded = false
  }

  // hh(e: any){
  //   console.log(e)
  // }
}




