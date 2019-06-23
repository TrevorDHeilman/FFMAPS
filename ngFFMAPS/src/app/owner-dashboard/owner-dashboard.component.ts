import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PlaceableService } from '../placeable.service';
import { Placeable } from '../placeable';
import { PlaceableListComponent } from '../placeable-list/placeable-list.component';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  
  //@Output() onNewAttraction: EventEmitter<number> = new EventEmitter();\
  @ViewChild(PlaceableListComponent, {static:false}) placeableListComp: PlaceableListComponent;


  constructor() { }

  ngOnInit() { }

  updateAttractions(){
    //this.onNewAttraction.emit(1);
    this.placeableListComp.onStartUp();
  }
}
