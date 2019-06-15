import {Component, Input, OnInit} from '@angular/core';
import {PurchaseService} from '../services/purchase.service';
import {Purchase} from '../classfolder/purchase';

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
      this.purchase.dateOfPurchase = new Date();
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

    this.cleanInputFields();
    console.log(this.dateOfPurchase);
    this.purchaseService.makePurchase(this.purchase).subscribe(
      purchase => {
        this.purchase = purchase;
        console.log(purchase);
      }
    );
  }

  cleanInputFields(): void {
    this.email = null;
    this.dateOfPurchase = new Date();
    this.lastName = null;
    this.firstName = null;
    this.numberOfTickets = 0;
    this.eventId = 0;
    this.locationId = 0;
  }
  putDateOfPurchase($event: any) {
    this.purchase.dateOfPurchase = $event;

    this.dateOfPurchase = $event;
    console.log($event);
  }
}
