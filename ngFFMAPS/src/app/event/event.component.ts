import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../classfolder/event';
import {DialogOverviewPurchaseComponent} from '../dialog-overview-purchase/dialog-overview-purchase.component';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() public event: Event;
  @Input() public acceptString: String = "";
  @Output() public emittedEvent: EventEmitter<number> = new EventEmitter();

  constructor(
    private dialogOverviewPurchase: DialogOverviewPurchaseComponent,
    private eventService: EventService
    ) {}

  openDialog(): void {
    this.dialogOverviewPurchase.openPurchaseDialogForEvent(this.event);
  }

  accept() {
    this.event.eventStatus.id = 2;
    this.event.eventStatus.status = 'Accepted';
    console.log(this.event);
    this.eventService.updateEvent(this.event).subscribe(
      (event) => {
        this.event = event;
        this.emittedEvent.emit(0);
      }
    );
  }
  decline() {
    this.event.eventStatus.id = 3;
    this.event.eventStatus.status = 'Declined';
    this.eventService.updateEvent(this.event).subscribe(
      (event) => {
        this.event = event;
        this.emittedEvent.emit(0);
      }
    );
  }

  ngOnInit() {
    console.log(this.acceptString);
  }
}
