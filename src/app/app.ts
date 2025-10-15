import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from './header/header';
import { DUMMY_USERS } from './dummy-users'
// import { User } from './user/user';
// import { Tasks } from './tasks/tasks';
// import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:false
})
export class App {

  users = DUMMY_USERS;
  selectedUserID?:string;

  get selectedUser()
  {
    // console.log(this.users.find((item)=>item.id === this.selectedUserID))
    return this.users.find((item)=>item.id === this.selectedUserID) //returns the corresponding user !telling that it always returns a value
  }

  onSelectUser(id:string)
  {
    this.selectedUserID =  id;
  }
  // protected readonly title = signal('hello-world');
}
