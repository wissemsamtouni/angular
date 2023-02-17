import { Component, OnInit } from '@angular/core';
import {PersonService} from "../services/person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {person} from "../model/person";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  listpersons!:person[];
  Person!:person
  public action !: string;


  constructor(private PersonService:PersonService,private router: Router, private currentRoute: ActivatedRoute) { }


  ngOnInit(): void {

    console.log(this.currentRoute.snapshot.params['id'])
    //condition id
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action = "update";
      //update  +1 examen
      this.PersonService.getPersonById(id).subscribe(
        (data: person)=> this.Person= data
      )
    }else
    {
      this.action = "save";
      this.Person=new person();
    }

  }
  save(){if(this.action == "save"){


    this.PersonService.postStage(this.Person).subscribe(()=>this.router.navigate(['/Afficher des personnes']));

    alert("personne ajouter avec succes")
  }
  else{
    this.PersonService.update(this.Person.id,this.Person).subscribe(()=>this.router.navigate(['Afficher des personnes']));
  }
  }
}
