// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { Arrayex } from './arrayex/arrayex';
// import { Product } from './product/product';
// import { Nav } from './nav/nav';
import { Apicall } from './apicall/apicall';

@Component({
  selector: 'app-root',
  // imports:[FormsModule,CommonModule,],
  // imports: [RouterOutlet,Arrayex,Product],
  // imports: [RouterOutlet,Nav,Apicall],
   imports: [RouterOutlet,Apicall],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'arrayNew';
}
