import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PlaceableType } from './placeabletype';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceableTypeService {

  constructor(private http: HttpClient) { }

  getPlaceableTypes(): Observable<PlaceableType[]>{
    return this.http.get('http://localhost:8080/FFMAPS/typelayout', {withCredentials: true}).pipe(
      map( (resp) => resp as PlaceableType[] )
    );
  }
}
