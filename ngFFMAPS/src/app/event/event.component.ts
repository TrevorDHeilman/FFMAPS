import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../classfolder/event';
import {DialogOverviewPurchaseComponent} from '../dialog-overview-purchase/dialog-overview-purchase.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() public event: Event;
  constructor(private dialogOverviewPurchase: DialogOverviewPurchaseComponent) {}

  openDialog() {
    this.dialogOverviewPurchase.openPurchaseDialogForEvent(this.event);
  }

  ngOnInit() {
  }
}
