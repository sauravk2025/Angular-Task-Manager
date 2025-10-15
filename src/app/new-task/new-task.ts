import { Component, EventEmitter,inject,Input,Output,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskType } from '../tasks/task.model';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-new-task',
  // imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone:false
})
export class NewTask {

@Output() cancel = new EventEmitter<void>();
//@Output() submited = new EventEmitter<NewTaskType>();
@Input() userID!:string;

enteredTitle = signal('');
enteredSummary = signal('');
enteredDate=signal('');

// console.log(enteredDate,enteredSummary);

private taskService = inject(TaskService) //another alternative of using the same service

onCancel()
{
  
  this.cancel.emit()
}

onSubmit(e:Event)
{
  // e.stopPropagation();
  // console.log("hi");

  //DIRECTLY ADDING TO ONADD
  this.taskService.onAdd({
    title:this.enteredTitle(),
    summary : this.enteredSummary(),
    date:this.enteredDate(),
  }, this.userID)

  this.cancel.emit()  

  // this.submited.emit({
  //   title:this.enteredTitle(),
  //   summary:this.enteredSummary(),
  //   date:this.enteredDate()
  // })

}


}
