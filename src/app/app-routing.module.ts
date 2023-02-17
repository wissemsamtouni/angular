import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ListeDesPersonnesComponent} from "./liste-des-personnes/liste-des-personnes.component";

const routes: Routes = [
  {path:'',redirectTo:'/Afficher des personnes',pathMatch:'full'},
  {path:'Afficher des personnes',component:ListeDesPersonnesComponent},
  {path:'Ajouter une personne',component:FormComponent},
  {path:'Afficher des personnes',component:ListeDesPersonnesComponent},
  {path:'update/:id',component:FormComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
