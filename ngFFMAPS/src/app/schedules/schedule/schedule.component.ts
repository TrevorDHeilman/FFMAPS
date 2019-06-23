import { Schedule } from './../schedule';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input() public schedule: Schedule;
  constructor() { }

  ngOnInit() {
  }

}
