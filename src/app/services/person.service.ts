import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personUrl:string="/api/person/";
  public listperson !: person[];




  constructor(private HttpC:HttpClient) { }


  getS(){
    return this.HttpC.get<person[]>(this.personUrl);
  }
  postStage(p:person){
    return this.HttpC.post(this.personUrl,p)
  }
  supprimer(id:number){
   return this.HttpC.delete(this.personUrl+id)

  }
  update(id:number,s:person){
    return this.HttpC.put(this.personUrl+id,s)
  }
  getPersonById(id:number){
    return this.HttpC.get<person>(this.personUrl+id)
  }

}
