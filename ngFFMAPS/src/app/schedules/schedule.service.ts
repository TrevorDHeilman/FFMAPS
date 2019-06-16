import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from './schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private appUrl = 'http://localhost:8080/FFMAPS/stock';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public getSchedule(): Observable<Schedule[]> {
    return this.http.get(this.appUrl, {withCredentials: true}).pipe(
      map( resp => resp as Schedule[] )
    );
  }
  
  public addSchedule(schedule: Schedule): Observable<Schedule> {
    const body = JSON.stringify(schedule);
    if(!schedule.id) {
      return this.http
      .post(this.appUrl, body, {headers: this.headers, withCredentials: true})
      .pipe(map(resp => resp as Schedule));
    }
    const url = this.appUrl + '/' + schedule.id;
    return this.http
    .put(this.appUrl, body, {headers: this.headers, withCredentials:true})
    .pipe(map(resp => resp as Schedule));
  }
}
