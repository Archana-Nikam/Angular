import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';  // <-- import NgIf here

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, NgIf],   // <-- add NgIf here
  templateUrl: './addition.html',
  styleUrls: ['./addition.css']
})
export class Calculator {
  number1: number = 0;
  number2: number = 0;
  sum: number | null = null;

  result: number | string | null = null;
  errorMessage: string | null = null;

  addNumbers() {
    this.sum = this.number1 + this.number2;
    console.log('Sum:', this.sum);
  }
    subtract() {
    this.clearError();
    if (this.validateTwoNumbers()) {
      this.result = this.number1! - this.number2!;
    }
  }

  multiply() {
    this.clearError();
    if (this.validateTwoNumbers()) {
      this.result = this.number1! * this.number2!;
    }
  }

  divide() {
    this.clearError();
    if (this.validateTwoNumbers()) {
      if (this.number2 === 0) {
        this.errorMessage = "Error: Division by zero is undefined.";
        this.result = null;
      } else {
        this.result = this.number1! / this.number2!;
      }
    }
  }

  square() {
    this.clearError();
    if (this.number1 !== null) {
      this.result = this.number1 * this.number1;
    } else {
      this.errorMessage = "Please enter Number 1 to calculate square.";
      this.result = null;
    }
  }

  clearError() {
    this.errorMessage = null;
  }

  private validateTwoNumbers(): boolean {
    if (this.number1 === null || this.number2 === null) {
      this.errorMessage = "Please enter both numbers.";
      this.result = null;
      return false;
    }
    return true;
  }
}
