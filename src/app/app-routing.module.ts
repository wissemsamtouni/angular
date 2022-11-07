import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailsComponent} from "./details/details.component";
import {TodolistComponent} from "./todolist/todolist.component";
import {CrudComponent} from "./crud/crud.component";

const routes: Routes = [
  {path:'acceuil',component:ListProductComponent},
  {path:'ajouter',component:FormComponent},
  {path:'todolist',component:TodolistComponent},
  {path:'acceuil/:id',component:DetailsComponent},
  {path:'crud',component:CrudComponent},
//{path:'',redirectTo:'/acceuil',pathMatch:'full'} --> pour initialiser l'ouvertur sur cette path
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
