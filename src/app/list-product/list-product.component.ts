import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {observeNotification} from "rxjs/internal/Notification";
import {CalculService} from "../service/calcul.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
contenu="";
listProduct!:Product[];
prix!:number;
p!:number;
  ngOnInit():void{
    this.listProduct=[
      {id:'1', title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0},


    ]
  }
  buy(i:number){
     alert('produit acheter avec succes ');
     return this.listProduct[i].quantity--;
  }
  like(i:number){
    alert('produit Ajouter avec succes ');

    return this.listProduct[i].quantity++;

  }

  constructor(private calculServicep:CalculService) { }

calcul(){
    this.p=(this.calculServicep.getNumberOf(this.listProduct,"quantity",0))
}
}
