import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private onHome :string;
  public loggedUser :User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.onHome = "home";
    this.loggedUser = null;
  }

  pushHome() {
    this.onHome = this.userService.hitHome();
  }

  pushPortal(){
    this.onHome = this.userService.hitPortal();
  }

  updateUser(user: User){
    console.log("updating Navbar user");
    this.loggedUser = user;
    console.log(this.loggedUser);
  }
}
