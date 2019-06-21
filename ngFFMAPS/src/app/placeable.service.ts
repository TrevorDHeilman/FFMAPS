import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Placeable } from './placeable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlaceableType } from './placeabletype';

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

  public getPlaceableTypes(): Observable<Array<PlaceableType>> {
    return this.http.get('http://localhost:8080/FFMAPS/layout', {withCredentials: true}).pipe(
      map( (resp) => resp as PlaceableType[] )
    );
  }

  public addPlaceable(placeableType:PlaceableType, employeeCapacity:number, size:number, name:string): Observable<Placeable> {
    if(placeableType != null && employeeCapacity > 0){
      var placeable: Placeable = new Placeable();
      placeable.placeableType = placeableType;
      placeable.employeeCapacity = employeeCapacity;
      placeable.name = name;
      placeable.size = size;
      placeable.ownerId = 1;
      console.log("placeable service Placeable ");
      console.log(placeable);
      const body = JSON.stringify(placeable);
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post('http://localhost:8080/FFMAPS/layout',
          body, {headers, withCredentials: true}).pipe(
            map((resp) => resp as Placeable)
      );
    }
  }
}
