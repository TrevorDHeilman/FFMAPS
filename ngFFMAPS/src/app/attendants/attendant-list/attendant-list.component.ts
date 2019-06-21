import { AttendantService } from './../attendant.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserType } from 'src/app/usertype';

@Component({
  selector: 'app-attendant-list',
  templateUrl: './attendant-list.component.html',
  styleUrls: ['./attendant-list.component.css']
})
export class AttendantListComponent implements OnInit {
  public attendants: User[];
  public newAttendant: User;

  constructor(private attendantService: AttendantService) { }

  ngOnInit() {
    this.newAttendant = new User();
    this.newAttendant.userType = new UserType();
    this.attendantService.getAttendants().subscribe(
      (attendants) => {
        console.log(attendants)
        this.attendants = attendants;
      });
  }
  
}
