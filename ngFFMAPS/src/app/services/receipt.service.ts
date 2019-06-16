import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Receipt} from '../classfolder/receipt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Stock} from '../stocks/stock';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private url = 'http://localhost:8080/FFMAPS/receipt';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private receipt: Receipt;

  constructor(private http: HttpClient) { }

  getReceipt(email: string): Observable<Receipt[]> {
    this.receipt = new Receipt();
    this.receipt.email = email;
    const body = JSON.stringify(this.receipt);

    console.log('Querying the database for a receipt using ' + body);
    return this.http.post(this.url, body, { headers: this.headers }).pipe( map ( resp => resp as Receipt[]));
  }

  getDummyReceipt(email: string): Receipt[] {
    let tmpReceipt: Receipt;
    tmpReceipt = new Receipt();
    tmpReceipt.dateOfPurchase = 'yyyy-MM-dd';
    tmpReceipt.numberOfTickets = 2;
    tmpReceipt.firstName = 'Dummy';
    tmpReceipt.lastName = 'Test';
    tmpReceipt.email = 'testing@receiptView.com';
    tmpReceipt.eventId = 5;
    tmpReceipt.locationId = 2;
    return [tmpReceipt];
  }
}
