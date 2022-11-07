import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menu = "";
property:boolean=false;
message:string='';
methodA(){
  this.message="c'est le EB"
}
newproperty:string = "bonjour";
  constructor() { }

  ngOnInit(): void {
  }

}
