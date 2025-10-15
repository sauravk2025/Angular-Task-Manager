import { Injectable } from "@angular/core";
import { dummyTasks } from "./dummy-task"
import { NewTaskType } from "./task.model";
//when dependency is encountered this code is injected

@Injectable({
    providedIn:"root" //Automatically create one single instance of this service and make it available everywhere in the app.”
})

export class TaskService
{
    private taskList = dummyTasks; //private so that it can only be used inside this class

    constructor() //RUNS FIRST
    {
        const storeTask = localStorage.getItem('task');

        if(storeTask)
        {
            this.taskList = JSON.parse(storeTask);
        }
    }

    onAdd(task:NewTaskType,id:string)
    {
        this.taskList.push({
        id:new Date().getTime().toString(),
        userId:id,
        title:task.title,
        summary:task.summary,
        dueDate:task.date
        })
        localStorage.setItem('task',JSON.stringify(this.taskList))
    }

    getUsersTasks(id:string)
    {
        return this.taskList.filter((item) => item.userId === id);
    }

    onCompletingTask(id:string)
    {
        this.taskList = this.taskList.filter((item) => item.id != id)
        localStorage.setItem('task',JSON.stringify(this.taskList))
    }
}