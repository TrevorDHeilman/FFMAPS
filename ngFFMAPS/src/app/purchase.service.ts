import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Purchase} from './purchase';
import {User} from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private url = 'http://localhost:8080/FFMAPS/purchase';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  makePurchase(purchase: Purchase): Observable<Purchase> {
    const body = JSON.stringify(purchase);
    console.log(body);
    return this.http.post(this.url, body, { headers: this.headers }).pipe(map(resp => resp as Purchase));
  }
}
