import { Placeable } from './../../placeable';
import { ScheduleService } from './../schedule.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { User } from 'src/app/user';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  public schedules: Schedule[];
  public newSchedule: Schedule;
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.newSchedule = new Schedule();
    // this.newSchedule.event = new Event();
    this.newSchedule.user = new User();
    this.newSchedule.placeable = new Placeable();
    this.scheduleService.getSchedule().subscribe(
      (schedules) => {
        console.log(schedules)
        this.schedules = schedules;
      });
  }
  submit(): void {
    this.scheduleService.addSchedule(this.newSchedule).subscribe(
      newSchedule => {
        this.schedules.push(newSchedule);
      }
    );
  }
}
