import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router} from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loggedUser: User; 
 @Output() onloggedUser: EventEmitter<User> = new EventEmitter();
  public username: string;
  public password: string;
  @Input() public urlString :string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.login(null, null).subscribe(
      resp => {
        this.loggedUser = resp;
        this.onloggedUser.emit(this.loggedUser);
      }
    );
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      resp => {
        console.log("logging in: ");
        console.log(resp);

        this.loggedUser = resp;
        this.onloggedUser.emit(this.loggedUser);
      }
    );
  }

  logout(): void {
    this.userService.logout().subscribe();
    console.log("logging out!")
    this.loggedUser = null;
    this.username = null;
    this.password = null;
    this.onloggedUser.emit(this.loggedUser);
  }

}
