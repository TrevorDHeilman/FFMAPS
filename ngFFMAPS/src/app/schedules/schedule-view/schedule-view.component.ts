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
  private updatedSchedule: Schedule;
  public empID: number;
  public schDay: string;
  public placeable: number;
  public acceptString = 'Accept';

  constructor(
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.newSchedule = new Schedule();
    this.newSchedule.event = new Event();
    this.newSchedule.user = new User();
    this.newSchedule.placeable = new Placeable();
    this.updatedSchedule = new Schedule();
    this.updatedSchedule.event = new Event();
    this.updatedSchedule.user = new User();
    this.updatedSchedule.placeable = new Placeable();
  }
  submit(): void {
    // sets values to be updated
    this.empID = this.newSchedule.user.id;
    this.schDay = this.newSchedule.scheduleDay;
    this.placeable = this.newSchedule.placeable.id;
    let i = 0;
    // if id and day of event match any in the schedule change the placeable they work at
    for (let sche of this.schedules){
      if (sche.user.id == this.empID && sche.scheduleDay == this.schDay){
        this.updatedSchedule = sche;
        this.updatedSchedule.placeable.id = this.placeable;
        i++;
      }
    }
    // if nothing is needed to update, add new schedule
    if(i == 0){
      this.scheduleService.addSchedule(this.newSchedule).subscribe(
        schedule => {
          this.schedules.push(schedule);  
          this.newSchedule = new Schedule();
          this.newSchedule.event = new Event();
          this.newSchedule.user = new User();
          this.newSchedule.placeable = new Placeable();
        }
      );
    // else update that schedule
    } else {
      this.scheduleService.updateSchedule(this.updatedSchedule).subscribe(
        updatedSchedule => {
          this.updatedSchedule = updatedSchedule;
        }
      );
    }
  }

  // submit2(){
  //   this.scheduleService.addSchedule(this.newSchedule).subscribe(
  //     schedule => {
  //       this.schedules.push(schedule);      
  //       console.log(this.newSchedule);
  //       this.newSchedule = new Schedule();
  //       this.newSchedule.event = new Event();
  //       this.newSchedule.user = new User();
  //       this.newSchedule.placeable = new Placeable();
  //     }
  //   );
  // }

  emittedSchedule(schedulez: Schedule[]){
    this.schedules = schedulez;
  }
}
