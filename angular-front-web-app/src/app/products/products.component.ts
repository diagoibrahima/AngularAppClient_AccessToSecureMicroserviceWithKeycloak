import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products; 
  constructor() { }

  ngOnInit() {
    this.products=[
{id:1, name:"Computer HP", price:78520},
{id:2, name:"machine HP", price:78520},
{id:3, name:"samsung HP", price:78520},
]
  }

}
