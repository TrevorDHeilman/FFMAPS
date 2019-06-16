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

  private receipt: Receipt;

  constructor(private receiptService: ReceiptService) { }

  ngOnInit() {
    this.receipt = this.getReceipt(this.email);
  }

  getReceipt(email: string): Receipt {
    this.receipt = new Receipt();
    return this.receiptService.getDummyReceipt(email);
    // return this.receiptService.getDummyReceipt(email).subscribe(
    //   receipt => {
    //     this.receipt = receipt;
    //   }
    // );
  }
}
