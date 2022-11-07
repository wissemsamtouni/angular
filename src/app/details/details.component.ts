import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!:number;

  constructor(private ServiceRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ServiceRoute.snapshot.params['id']);
    this.id=this.ServiceRoute.snapshot.params['id'];
  }

}
