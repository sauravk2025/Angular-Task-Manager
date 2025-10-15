import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { TaskList } from "./task-list/task-list";
import { NewTask } from "../new-task/new-task";
import { SharedModule } from "../shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({

    declarations:[Tasks,TaskList,NewTask], //COMPONENTS USEED IN TASKS.HENCE MUST BE DECLARED
    exports:[Tasks], //EXPORED ONLY THOSE COMPONETS THAT IS USED IN THE DECLARATION OF PARENT MODULE DECLARATION . HERE APP MODULES
    imports : [SharedModule,DatePipe,CommonModule,FormsModule] //tasklist uses card component but it is not available and we cannot put tasklist or new tasklist in exports since it is not used as mentioned above . so we have to import the modules consiting of components.COMMON MODULES IS A SUBSTITUE OF BROWSERMODULE as browser module can only be useed in root.FormModule since newtask used ngmODULE
})

export class TaskModule{

}