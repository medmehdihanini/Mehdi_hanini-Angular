import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FournisseurComponent } from './DATABINDING-WORKSHOP/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './DATABINDING-WORKSHOP/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './DATABINDING-WORKSHOP/list-produits/list-produits.component';
import {WorkshopRoutingModule} from "./workshop-routing/workshop-routing.module";
import {ListeUserRoutingModule} from "./USERS/liste-user/liste-user-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ListeUserModule} from "./USERS/liste-user/liste-user.module";
import { UserUpdateComponent } from './USERS/user-update/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent,
    UserUpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WorkshopRoutingModule,
    ListeUserRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
