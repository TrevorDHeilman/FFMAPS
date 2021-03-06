import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from './classfolder/event';
import { Map } from './map';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private appUrl ='http://localhost:8080/FFMAPS/event';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Event[]> {
    return this.http.get('http://localhost:8080/FFMAPS/event?status=Accepted', {}).pipe(
      map( (resp) => resp as Event[] )
    );
  }

  public updateEventMaps(maps:Map[]): Observable<Map[]>{
    const body = JSON.stringify(maps);
    // console.log(body);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put('http://localhost:8080/FFMAPS/map/',
    body, {headers, withCredentials: true}).pipe(
      map( (resp) => resp as Map[] )
    );
  }

  public getEventMapById(id:number): Observable<Map[]>{
    return this.http.get('http://localhost:8080/FFMAPS/map/'+id, {}).pipe(
      map( (resp) => resp as Map[] )
    );
  }

  public getPendingEvents(): Observable<Event[]> {
    return this.http.get('http://localhost:8080/FFMAPS/event?status=Pending', {}).pipe(
      map( (resp) => resp as Event[] )
    );
  }

  public addEvent(event: Event): Observable<Event> {
    const body = JSON.stringify(event);
    return this.http.post(this.appUrl,
        body, {headers: this.headers, withCredentials: true}).pipe(
          map(resp => resp as Event)
    );
  }
  
  public updateEvent(event: Event): Observable<Event> {
    const body = JSON.stringify(event);
    return this.http
    .put(this.appUrl, body, {headers: this.headers, withCredentials: true})
    .pipe(map(resp => resp as Event));
  }
}
