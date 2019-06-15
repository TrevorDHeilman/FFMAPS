import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Receipt} from '../classfolder/receipt';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private url = 'http://localhost:8080/FFMAPS/receipt';
  private receipt: Receipt;

  constructor(private http: HttpClient) { }

  getReceipt(email: string): Observable<Receipt> {
    const body = JSON.stringify(email);
    console.log(body);
    return this.http.get(this.url).pipe( map ( receipt => {
      this.receipt = receipt as Receipt;
      return this.receipt;
    }));
  }

  getDummyReceipt(email: string): Receipt {
    let tmpReceipt: Receipt;
    tmpReceipt = new Receipt();
    tmpReceipt.dateOfPurchase = 'date';
    tmpReceipt.numberOfTickets = 2;
    return tmpReceipt;
  }
}
