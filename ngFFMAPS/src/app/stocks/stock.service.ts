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

  public getStock(): Observable<Stock[]> {
    return this.http.get(this.appUrl, {withCredentials: true}).pipe(
      map( resp => resp as Stock[] )
    );
  }
  public updateStock(stock: Stock): Observable<Stock>{
    const body = JSON.stringify(stock);
    if(stock.id) {
      const url = this.appUrl + '/' + stock.id;
      return this.http.put(url, body,
        {headers: this.headers, withCredentials: true}).pipe(
          map(resp => resp as Stock)
        );
    } else {
      return this.http.post(this.appUrl, body,
        { headers: this.headers, withCredentials: true}).pipe(
          map(resp => resp as Stock)
      );
    }
  }
}
