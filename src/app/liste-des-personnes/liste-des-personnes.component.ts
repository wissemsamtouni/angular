import { Component, OnInit } from '@angular/core';
import {PersonService} from "../services/person.service";
import {person} from "../model/person";

@Component({
  selector: 'app-liste-des-personnes',
  templateUrl: './liste-des-personnes.component.html',
  styleUrls: ['./liste-des-personnes.component.css']
})
export class ListeDesPersonnesComponent implements OnInit {
  listpersons!:person[];
  aaa!:string;

  constructor(private PersonService:PersonService) { }

  ngOnInit(): void {


    this.PersonService.getS().subscribe((data:person[])=>this.listpersons=data,);
  }


  delete(Person:person){
    this.PersonService.supprimer(Person.id).subscribe(
      ()=>{
        let i= this.listpersons.indexOf(Person)
        this.listpersons.splice(i,1)
      }
    );
  }
}



