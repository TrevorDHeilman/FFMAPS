import { Placeable } from 'src/app/placeable';
import { Schedule } from './../../schedules/schedule';
import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/classfolder/event';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-attendant-view',
  templateUrl: './attendant-view.component.html',
  styleUrls: ['./attendant-view.component.css']
})
export class AttendantViewComponent implements OnInit {
  @Input() public schedule: Schedule;
  private schedules: Schedule[];
  private newSchedule: Schedule;
  private loggedUser: User;
  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.newSchedule = new Schedule();
    this.newSchedule.event = new Event();
    this.newSchedule.user = new User();
    this.newSchedule.placeable = new Placeable();
    this.loggedUser = this.userService.getCurrentUser();
  }

}
