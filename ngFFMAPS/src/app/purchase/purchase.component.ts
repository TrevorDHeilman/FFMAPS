import {Component, Input, OnInit} from '@angular/core';
import {PurchaseService} from '../purchase.service';
import {Purchase} from '../purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  @Input() numberOfTickets: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() locationId: number;
  @Input() eventId: number;
  @Input() dateOfPurchase: Date;

  @Input() purchase: Purchase;

  showCurrentReceipt: boolean;

  private toggleReceiptView: boolean;
  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    if (!this.purchase) {
      this.purchase = new Purchase();

      this.showCurrentReceipt = true;
      this.purchase.numberOfTickets = 0;
      this.purchase.firstName = null;
      this.purchase.lastName = null;
      this.purchase.locationId = 0;
      this.purchase.eventId = 0;
      this.purchase.dateOfPurchase = null;
      this.purchase.email = null;
    }
  }

  makePurchase(): void {
    this.purchase = new Purchase();
    this.purchase.numberOfTickets = this.numberOfTickets;
    this.purchase.firstName = this.firstName;
    this.purchase.lastName = this.lastName;
    this.purchase.locationId = this.locationId;
    this.purchase.eventId = this.eventId;
    this.purchase.dateOfPurchase = this.dateOfPurchase;
    this.purchase.email = this.email;
    console.log(this.dateOfPurchase);
    this.purchaseService.makePurchase(this.purchase).subscribe(
      purchase => {
        this.purchase = purchase;
        console.log(purchase);
      }
    );
  }

  putDateOfPurchase($event: any) {
    this.purchase.dateOfPurchase = $event;

    this.dateOfPurchase = $event;
    console.log($event);
  }
}
