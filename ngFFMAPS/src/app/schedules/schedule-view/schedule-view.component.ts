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
  public empID: number;
  public schDay: string;
  public placeable: number;

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
    console.log('this.schedules');
    this.empID = this.newSchedule.user.id;
    this.schDay = this.newSchedule.scheduleDay;
    this.placeable = this.newSchedule.placeable.id;
    console.log(this.empID);
    console.log(this.schDay);
    console.log(this.placeable);
    for (let sche of this.schedules){
      if (sche.user.id == this.empID && sche.scheduleDay == this.schDay){
        this.newSchedule = sche;
        this.newSchedule.placeable.id = this.placeable;
      }
    }
    console.log(this.newSchedule);
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

  emittedSchedule(schedulez: Schedule[]){
    this.schedules = schedulez;
  }
}
