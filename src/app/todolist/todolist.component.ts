import { Component, OnInit } from '@angular/core';
import {todo} from "../model/todo";
import {CalculService} from "../service/calcul.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist!:todo[];
  c!:number
  constructor(private calculService:CalculService) {

  }
  calcaul(){
    this.c=this.calculService.getNumberOf(this.todolist,"completed",false)
  }

  ngOnInit(): void {
    this.todolist =[

      {userId: 1, id: 1, title: "delectus aut autem",completed: false},
      {userId: 1, id: 2, title: "quis ut nam facilis etofficia qui", completed: false},
      {userId: 1, id: 3, title: "fugiat veniamminus", completed: false},
      {userId: 1, id: 4, title: "quo adipisci enim quam utab", completed: true}


    ]
  }

}
