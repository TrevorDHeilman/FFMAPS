import { Event } from 'src/app/classfolder/event';
import { ScheduleService } from './../schedule.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';
import { Placeable } from 'src/app/placeable';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.css']
})
export class ScheduleViewComponent implements OnInit {
  @Input() public schedule: Schedule;
  private schedules: Schedule[];
  private newSchedule: Schedule;

  constructor(
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.newSchedule = new Schedule();
    this.newSchedule.event = new Event();
    this.newSchedule.user = new User();
    this.newSchedule.placeable = new Placeable();
  }
  submit(): void {
    this.scheduleService.addSchedule(this.newSchedule).subscribe(
      schedule => {
        this.schedules.push(schedule);
        this.newSchedule = new Schedule();
        this.newSchedule.event = new Event();
        this.newSchedule.user = new User();
        this.newSchedule.placeable = new Placeable();
      }
    );
  }
}
