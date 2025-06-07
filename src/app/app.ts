import { Component } from '@angular/core';
import {  Calculator } from './calculator/addition';  // adjust path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Calculator],
  template: `<h1>Simple Addition</h1><app-addition></app-addition>`
})
export class App {

}
