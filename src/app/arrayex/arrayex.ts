import { Component } from '@angular/core';

@Component({
  selector: 'app-arrayex',
  imports: [],
  templateUrl: './arrayex.html',
  styleUrl: './arrayex.css'
})
export class Arrayex {
   userdata1=new UserData("john","john123",87569)
   userdata2=new UserData("blake","blake123",678943)

  }

export class UserData{
  username:string
  password:string
  mobno:number

  constructor(username:string,password:string,mobno:number){
    this.username=username
    this.password=password
    this.mobno=mobno
  }
}  
