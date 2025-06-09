import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrayex',
  imports: [FormsModule,CommonModule],
  templateUrl: './arrayex.html',
  styleUrl: './arrayex.css'
})
export class Arrayex {
   userdata1=new UserData("john","john123",87569)
   userdata2=new UserData("blake","blake123",678943)
   users=[this.userdata1,this.userdata2]
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
