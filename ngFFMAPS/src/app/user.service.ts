import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private currentUser: User;
private appUrl = 'http://localhost:8080/FFMAPS/login';
private headers = new HttpHeaders({'Content-Type': 'application/json'});
private onHome :string = "home";
//private urlSource: UrlService, private http: HttpClient 
  constructor(private http: HttpClient) { }

  // public login(username: string, password: string): Observable<User> {
  //   let user = new User;
  //     user.username = username;
  //     user.password = password;
  //     console.log(user);
  //   const body = JSON.stringify(user);
  //   console.log(body);
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   return this.http.post(this.appUrl,
  //       body, {headers, withCredentials: true}).pipe(
  //         map((resp) => resp as User)
  //   );
  // }

  login(username: string, password: string): Observable<User> {
    if ( username && password ) {
      // actually log in
      let user = new User;
      user.username = username;
      user.password = password;
      // const headers = new HttpHeaders({'Content-Type': 'application/json'});
      const body = JSON.stringify(user);
      const headers = this.headers;
      //`user=${username}&pass=${password}`; // "user=rorr&pass=pswd"
      console.log(body);
      return this.http.post(this.appUrl, body,
        {headers, withCredentials: true})
        .pipe( map( resp => {
          const user: User = resp as User;
          if (user) {
            this.currentUser = user;
          }
          return user;
        }));
    } else {
      // just checking if we are logged in already.
      return this.http.get(this.appUrl, {withCredentials: true})
        .pipe( map( resp => {
          const user: User = resp as User;
          if (user) {
            this.currentUser = user;
          }
          return user;
        }));
    }
  }

  logout(): Observable<object> {
    return this.http.delete(this.appUrl, {withCredentials: true}).pipe(
      map(success => {
        this.currentUser = null;
        return success;
      })
    );
  }
  
  getCurrentUser(): User {
    return this.currentUser;
  }

  hitHome():string{
    return this.onHome = "home";
  }

  hitPortal():string{
    return this.onHome = "portal";
  }
}
