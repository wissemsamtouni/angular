import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {stage} from "../model/stage";

@Injectable({
  providedIn: 'root'
})
export class StageService {
  productsUrl:string="/api/stage/";
  public list !: stage[];




  constructor(private HttpC:HttpClient) { }


  getS(){
    return this.HttpC.get<stage[]>(this.productsUrl);
  }
  postStage(p:stage){
    return this.HttpC.post(this.productsUrl,p)
  }
  supprimer(id:number){
   return this.HttpC.delete(this.productsUrl+id)

  }
  updateProduct(id:number,s:stage){
    return this.HttpC.put(this.productsUrl+id,s)
  }
  getProductById(id:number){
    return this.HttpC.get<stage>(this.productsUrl+id)
  }

}
