import {Component, Input, OnInit} from '@angular/core';
import {ReceiptService} from '../services/receipt.service';
import {Receipt} from '../classfolder/receipt';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  @Input() numberOfTickets: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() locationId: number;
  @Input() eventId: number;
  @Input() dateOfPurchase: Date;

  private receipts: Receipt[];

  constructor(private receiptService: ReceiptService) { }

  ngOnInit() {
    this.receipts = this.getDummyReceipt(this.email);
  }

  getDummyReceipt(email: string): Receipt[] {
    return this.receiptService.getDummyReceipt(email);
  }

  getReceipt($event: any): void {
    console.log($event);
    this.receiptService.getReceipt($event).subscribe( resp => {
      this.receipts = resp;
    });
  }
}
