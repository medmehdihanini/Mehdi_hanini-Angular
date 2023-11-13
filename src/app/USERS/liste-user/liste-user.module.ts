import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeUserRoutingModule } from './liste-user-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ListeUsersComponent} from "../liste-users/liste-users.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    ListeUsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListeUserRoutingModule,
    FormsModule,
  ]
})
export class ListeUserModule { }
