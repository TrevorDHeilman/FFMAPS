import { User } from 'src/app/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendantService {
  private appUrl = 'http://localhost:8080/FFMAPS/employee';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  
  public getAttendants(): Observable<User[]>{
    let usertype = 3;
    let url = this.appUrl + '/' + usertype;
    return this.http.get(this.appUrl, {withCredentials: true}).pipe(
      map(resp => resp as User[])
      );
  }
}
