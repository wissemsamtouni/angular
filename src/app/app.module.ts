import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import { ListeDesPersonnesComponent } from './liste-des-personnes/liste-des-personnes.component';
import {HttpClientModule} from "@angular/common/http";
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    NotFoundComponent,
    ListeDesPersonnesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
