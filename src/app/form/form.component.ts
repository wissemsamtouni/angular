import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
model!: Product;
  constructor() { }
  save(){
    return console.log(this.model)
  }

  ngOnInit(): void {
    this.model =new Product()
  }

}
