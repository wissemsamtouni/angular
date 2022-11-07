import { Component, OnInit } from '@angular/core';
import {stage} from "../model/stage";
import {StageService} from "../services/stage.service";

@Component({
  selector: 'app-liste-des-stages',
  templateUrl: './liste-des-stages.component.html',
  styleUrls: ['./liste-des-stages.component.css']
})
export class ListeDesStagesComponent implements OnInit {
  liststage!:stage[];
  aaa!:string;

  constructor(private StageService:StageService) { }

  ngOnInit(): void {


    this.StageService.getS().subscribe((data:stage[])=>this.liststage=data,);
  }
  like(i:number){
    alert('produit Ajouter avec succes ');

    return this.liststage[i].nbrInteresse++;

  }

  delete(Stage:stage){
    this.StageService.supprimer(Stage.id).subscribe(
      ()=>{
        let i= this.liststage.indexOf(Stage)
        this.liststage.splice(i,1)
      }
    );
  }
}



