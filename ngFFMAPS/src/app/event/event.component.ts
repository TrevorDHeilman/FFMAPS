import { Component, OnInit, Input } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() public event: Event
  constructor() { }
  
  ngOnInit() {
  }
}
