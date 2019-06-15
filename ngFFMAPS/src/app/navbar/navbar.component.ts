import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private onHome :string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.onHome = "home";
  }

  pushHome() {
    this.onHome = this.userService.hitHome();
  }

  pushPortal(){
    this.onHome = this.userService.hitPortal();
  }
}
