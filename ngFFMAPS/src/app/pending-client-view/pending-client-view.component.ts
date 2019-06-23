import { Component, OnInit } from '@angular/core';
import { Event } from '../classfolder/event';
import { Location } from '../classfolder/location';
import { Contact } from '../classfolder/contact';
import { Eventstatus } from '../eventstatus';

@Component({
  selector: 'app-pending-client-view',
  templateUrl: './pending-client-view.component.html',
  styleUrls: ['./pending-client-view.component.css']
})
export class PendingClientViewComponent implements OnInit {
  private newEvent: Event;
  public pendString = "Pending";
  public acceptString = "Accept";
  
  constructor() { }

  ngOnInit() {
    this.newEvent = new Event();
    this.newEvent.location = new Location();
    this.newEvent.contact = new Contact();
    this.newEvent.eventStatus = new Eventstatus();
  }

}
