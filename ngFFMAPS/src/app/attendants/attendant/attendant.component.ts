import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-attendant',
  templateUrl: './attendant.component.html',
  styleUrls: ['./attendant.component.css']
})
export class AttendantComponent implements OnInit {
  @Input() public attendant: User;
  constructor() { }

  ngOnInit() {
  }

}
