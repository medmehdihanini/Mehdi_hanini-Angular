import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../home/home.component";
import {ListeUsersComponent} from "../liste-users/liste-users.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {UserUpdateComponent} from "../user-update/user-update.component";

const routes: Routes = [
  {
    path: '',
    component: ListeUsersComponent,
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent,
  },
];

@NgModule({

  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class ListeUserRoutingModule { }
