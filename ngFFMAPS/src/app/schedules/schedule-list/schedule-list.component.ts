import { UserService } from './../../user.service';
import { Placeable } from './../../placeable';
import { ScheduleService } from './../schedule.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Schedule } from '../schedule';
import { User } from 'src/app/user';
import { Event } from 'src/app/classfolder/event';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  @Output() emittedSchedule: EventEmitter<Schedule[]> = new EventEmitter();
  public schedules: Schedule[];
  public attendantSchedule: Schedule[];
  public newSchedule: Schedule;
  public loggedUser: User;
  
  constructor(private scheduleService: ScheduleService, private userService: UserService) { }

  ngOnInit() {
    this.attendantSchedule = [];
    this.newSchedule = new Schedule();
    this.newSchedule.event = new Event();
    this.newSchedule.user = new User();
    this.newSchedule.placeable = new Placeable();
    this.loggedUser = this.userService.getCurrentUser();
    this.scheduleService.getSchedule().subscribe(
      (schedules) => {
        console.log(schedules) 
          if (this.loggedUser.id < 3){
            this.schedules = schedules;
            this.emittedSchedule.emit(this.schedules);
          }
          if(this.loggedUser.userType.id == 3){
            let i = 0;
            for(let sche of schedules){
              
              if(sche.user.id == this.loggedUser.id){
                console.log(sche);
                this.attendantSchedule[i] = sche;
                console.log(this.attendantSchedule[i]);
                console.log(i);
                i++;
                // this.attendantSchedule.push(sche);
              }
              
            }
            console.log(this.attendantSchedule);
            this.schedules = this.attendantSchedule;
          }
      });
  }
}
