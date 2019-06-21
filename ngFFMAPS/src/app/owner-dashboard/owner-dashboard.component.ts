import { Component, OnInit } from '@angular/core';
import { PlaceableService } from '../placeable.service';
import { Placeable } from '../placeable';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}
