import { NgModule } from "@angular/core";
import { App } from "./app";
import { BrowserModule } from "@angular/platform-browser";
import { Header } from "./header/header";
import { User } from "./user/user";
// import { Tasks } from "./tasks/tasks";
import { NgFor,NgIf } from "@angular/common";

// import { TaskList } from "./tasks/task-list/task-list";
// import { NewTask } from "./new-task/new-task";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [App,Header,User], //takes only the non standalone components. For Modules to be available modules need to be exported
    bootstrap : [App], //specify the root module component . only present here
    imports : [BrowserModule,NgFor,NgIf,SharedModule,TaskModule] // to import other standalone components as we can implement modules and standalone components together or to import other modules we built. BrowserModule automatically import all the pipes so no need of actually adding the date pipe .THESE MODULES ARE MADE AVAILABLE TO COMPONENTS IN DECLARATION
    //we can also import modules inside standalone component LIKE FORMMODULES
    //browser module used in only here root
})

export class AppModule
{

}