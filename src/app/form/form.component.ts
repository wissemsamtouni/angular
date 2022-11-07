import { Component, OnInit } from '@angular/core';
import {stage} from "../model/stage";
import {StageService} from "../services/stage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  liststage!:stage[];
  Stage!:stage;
  public action !: string;


  constructor(private StageService:StageService, private router: Router, private currentRoute: ActivatedRoute) { }





  ngOnInit(): void {

    console.log(this.currentRoute.snapshot.params['id'])
    //condition id
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action = "update";
      //update  +1 examen
      this.StageService.getProductById(id).subscribe(
        (data: stage)=> this.Stage= data
      )
    }else
    {
      this.action = "save";
      this.Stage=new stage();
    }

  }
  save(){if(this.action == "save"){


    this.StageService.postStage(this.Stage).subscribe(()=>this.router.navigate(['Consulter un stage']));

    alert("stage ajouter avec succes")
  }
  else{
    this.StageService.updateProduct(this.Stage.id,this.Stage).subscribe(()=>this.router.navigate(['Consulter un stage']));
  }
  }
}
