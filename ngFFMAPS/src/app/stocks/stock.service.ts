import { Stock } from './stock';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private appUrl = 'http://localhost:8080/FFMAPS/stock';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getStock(): Observable<Stock[]> {
    return this.http.get(this.appUrl, {withCredentials: true}).pipe(
      map( resp => resp as Stock[] )
    );
  }
  addStock(stock: Stock): Observable<Stock> {
    const body = JSON.stringify(stock);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/FFMAPS/stock',
        body, {headers, withCredentials: true}).pipe(
          map((resp) => resp as Stock)
    );
  }
}
