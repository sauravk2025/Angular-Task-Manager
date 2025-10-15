import { Component,signal,computed,Input, input, Output, EventEmitter, output} from '@angular/core';
import {type UserType} from './user.model'
//import { Card } from "../shared/card/card";
// type UserType = {

//   id:string,
//   avatar:string,
//   name:string
// }

//or interface  but interface can only be used to define objects meanwhile type can be used to define for all things


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  //imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone:false
})
export class User {

  //introducing dynamics in html
  // selectedUser = signal( DUMMY_USERS[randomIndex]); //initialising a signal selectedUser for automatic updation
  // imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar) // when we want to cpmputer something using signal
  
  //getter - function inside a class which can be used as a property without ()
  // get imagePath(){
  //   return 'assets/users/'+ this.selectedUser.avatar
  // }

  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!:string; // to recieve from parent component
  // @Input() name!:string;

  @Input({required:true}) user!: UserType ;
  @Output() select = new EventEmitter<string>(); //to pass to parent component
  @Input({required:true}) selected!:boolean;
  //select  = output<string>() //by default stored event emitter . Not signal

  // avatar = input.required<string>();
  // name = input.required<string>(); //signal by default

  // imagePath = computed(()=> 'assets/users/'+ this.avatar)

  get imagePath()
  {
    return 'assets/users/'+ this.user.avatar;
  }

  onSelectUser()
  {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]); //updating a signal
    // this.select.emit(this.id) //on button click i pass id of user to parent
    this.select.emit(this.user.id)
    //console.log("clicked")
  }
}
