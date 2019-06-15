import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedUser: User;
  public username: string;
  public password: string;
  @Input() public urlString :string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.login(null, null).subscribe(
      resp => {
        this.loggedUser = resp;
      }
    );
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      resp => {
        this.loggedUser = resp;
      }
    );
  }

  logout(): void {
    this.userService.logout().subscribe();
    this.loggedUser = null;
    this.username = null;
    this.password = null;
  }

}
