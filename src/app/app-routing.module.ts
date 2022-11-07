import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {BodyComponent} from "./body/body.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ListeDesStagesComponent} from "./liste-des-stages/liste-des-stages.component";

const routes: Routes = [
  {path:'acceuil',component:ListeDesStagesComponent},
  {path:'Ajouter une video',component:FormComponent},
  {path:'Afficher une video',component:ListeDesStagesComponent},
  {path:'update/:id',component:FormComponent},


//{path:'',redirectTo:'/acceuil',pathMatch:'full'} --> pour initialiser l'ouvertur sur cette path
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
