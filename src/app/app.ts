import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Addition } from './addition/addition';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Addition],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'calculator';
  
}

