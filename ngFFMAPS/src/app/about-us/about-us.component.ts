import { Component, OnInit } from '@angular/core';
import { Event } from '../classfolder/event';
import { Location } from '../classfolder/location';
import { Contact } from '../classfolder/contact';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  private newEvent: Event;
  private newLocation: Location;
  private newContact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
