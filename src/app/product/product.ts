import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  product1 = new ProductData("Laptop", 55000, "Electronics");
  product2 = new ProductData("Chair", 2500, "Furniture");

  products = [this.product1, this.product2];
}

export class ProductData {
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
