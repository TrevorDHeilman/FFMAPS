import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Placeable } from './placeable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceableService {

  constructor(private http: HttpClient) { }

  public getPlaceables(): Observable<Placeable[]> {
    return this.http.get('http://localhost:8080/FFMAPS/layout', {withCredentials: true}).pipe(
      map( (resp) => resp as Placeable[] )
    );
  }

  public addPlaceable(placeable: Placeable): Observable<Placeable> {
    const body = JSON.stringify(placeable);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/FFMAPS/layout',
        body, {headers, withCredentials: true}).pipe(
          map((resp) => resp as Placeable)
    );
  }
}
