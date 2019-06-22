import { Component, OnInit } from '@angular/core';
import { Event } from '../classfolder/event';
import { Location } from '../classfolder/location';
import { Contact } from '../classfolder/contact';
import { EventService } from '../event.service';
import { Eventstatus } from '../eventstatus';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  private newEvent: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.newEvent = new Event();
    this.newEvent.location = new Location();
    this.newEvent.contact = new Contact();
    this.newEvent.eventStatus = new Eventstatus
  }

  public apply() {
    this.newEvent.eventStatus.id = 1;
    this.newEvent.eventStatus.status = 'Pending';
    let newDate = new Date(this.newEvent.startDate);
    newDate.setDate(newDate.getDate() + 2);
    let dateStr = newDate.toISOString().substring(0,10);
    this.newEvent.endDate = dateStr;
    // this.eventService.addEvent(this.newEvent).subscribe(
    //   newEvent => {
    //     this.newEvent = newEvent;
    //   }
    // );
    
  }
}
