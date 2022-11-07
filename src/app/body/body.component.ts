import { Component, OnInit } from '@angular/core';
import {personne} from "../model/personne";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  person!:personne;

  constructor() { }
  ajouter(){
    return console.log(this.person)
  }

  ngOnInit(): void {
    this.person =new personne()
  }

}
