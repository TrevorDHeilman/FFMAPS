import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {PurchaseComponent} from '../purchase/purchase.component';
import { Event } from '../classfolder/event';

@Component({
  selector: 'app-dialog-overview-purchase',
  templateUrl: './dialog-overview-purchase.component.html',
  styleUrls: ['./dialog-overview-purchase.component.css']
})
export class DialogOverviewPurchaseComponent implements OnInit {

  eventId: number;
  locationId: number;
  constructor(private dialog: MatDialog) { }

  openPurchaseDialogForEvent(event: Event): void {
    this.eventId = event.id;
    this.locationId = event.location.id;
    const dialogRef = this.dialog.open(PurchaseComponent, {
      data: {
        eventId: this.eventId,
        locationId: this.locationId,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.eventId = NaN;
      this.locationId = NaN;
    });
  }

  ngOnInit() {
  }

}
