import {Component, OnInit,ViewChild} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})

export class ListeUsersComponent  implements OnInit {

  constructor(private userService :UserService, private R:Router) {}


usersList:User[]=[];

usersListDbJson: User[] =[];

  ngOnInit(): void {
this.usersList=this.userService.getAllUsers();
    this.userService.getAllUsersDBjson().subscribe(data =>{
        console.log(data);
        this.usersListDbJson = data;
    }

    );

  }


  delete(u:User) {
    this.userService.deleteUser(u).subscribe();
  }



  add(formUser: NgForm) {
    console.log(formUser.value);
    this.userService.addUser(formUser.value).subscribe();

  }


  updateuser() {

  }
}
