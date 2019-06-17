import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from './classfolder/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Event[]> {
    return this.http.get('http://localhost:8080/FFMAPS/event', {}).pipe(
      map( (resp) => resp as Event[] )
    );
  }

  public addEvent(event: Event): Observable<Event> {
    const body = JSON.stringify(event);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/FFMAPS/event',
        body, {headers, withCredentials: true}).pipe(
          map((resp) => resp as Event)
    );
  }
}
