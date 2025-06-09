// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Arrayex } from './arrayex/arrayex';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  // imports:[FormsModule,CommonModule,],
  imports: [RouterOutlet,Arrayex,Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'arrayNew';
}
