import {Component, Input, OnInit} from '@angular/core';
import {PurchaseService} from '../purchase.service';
import {Purchase} from '../purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  @Input() purchase: Purchase;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    if (!this.purchase) {
      this.purchase = new Purchase();
      this.purchase.email = 'jonadiazz@hotmail.com';
    }
  }

  makePurchase(): void {
    this.purchaseService.makePurchase(this.purchase).subscribe(
      resp => {
        this.purchase = resp;
        console.log(resp);
      }
      //purch => this.purchase = purch );
    );
  }

}
