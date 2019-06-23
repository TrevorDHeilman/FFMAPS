import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Receipt} from '../classfolder/receipt';
import {Observable} from 'rxjs';
import {Sales} from '../classfolder/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private url = 'http://localhost:8080/FFMAPS/receipt';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getSales(): Observable<Receipt[]> {
    console.log('Querying the database for a sales');
    return this.http.get(this.url, { headers: this.headers }).pipe( map ( resp => resp as Receipt[]));
  }
}
