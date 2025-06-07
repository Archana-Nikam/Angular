import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [FormsModule],  // <-- Add comma here
  templateUrl: './addition.html',
  styleUrls: ['./addition.css']
})
export class Addition {
  number1: number = 0;
  number2: number = 0;
  sum: number | null = null;

  addNumbers() {
    this.sum = Number(this.number1) + Number(this.number2);
    console.log('Sum:', this.sum);
  }
}
