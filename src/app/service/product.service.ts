import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl:string="/api/products";




  constructor(private HttpC:HttpClient) { }


getP(){
  return this.HttpC.get<Product[]>(this.productsUrl);
}
postProduct(p:Product){
    return this.HttpC.post(this.productsUrl,p)
}
}
