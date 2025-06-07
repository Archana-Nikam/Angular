import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addition',
  standalone: true, // Required for standalone components
  imports: [FormsModule],
  templateUrl: './addition.html',
  styleUrls: ['./addition.css']
})



export class Addition {
  no1: number = 10;
  no2: number = 20;
  answer: number = 0;

  add() {
    this.answer = this.no1 + this.no2;
    console.log(this.answer);
  }
}
