import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Observable} from "rxjs";
import {Product} from "../model/Product";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  list!:Product[];
  Product!:Product;


  constructor(private crudService:ProductService) { }





  ngOnInit(): void {
    this.Product=new Product();
    this.crudService.getP().subscribe((data:Product[])=>this.list=data,);
  }
save(){
    this.crudService.postProduct(this.Product).subscribe(()=>this.list=[this.Product,...this.list])
}
}
