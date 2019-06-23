import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Event} from '../classfolder/event';
import {PurchaseComponent} from '../purchase/purchase.component';
import {ReceiptComponent} from '../receipt/receipt.component';

@Component({
  selector: 'app-dialog-overview-search-receipt',
  templateUrl: './dialog-overview-search-receipt.component.html',
  styleUrls: ['./dialog-overview-search-receipt.component.css']
})
export class DialogOverviewSearchReceiptComponent implements OnInit {

  email: string;
  constructor(private dialog: MatDialog) { }

  openReceiptSearchDialog(): void {
    const dialogRef = this.dialog.open(ReceiptComponent, {
      data: {
        email: this.email,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = '';
      // this.eventId = NaN;
      // this.locationId = NaN;
    });
  }

  ngOnInit() {
  }

}
