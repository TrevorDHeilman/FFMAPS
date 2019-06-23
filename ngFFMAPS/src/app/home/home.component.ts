import { Component, OnInit, ViewChild } from '@angular/core';
import { DraglayoutComponent } from '../draglayout/draglayout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public acceptString = "Accept";
  public pendString = "Pending";
  @ViewChild(DraglayoutComponent, {static:false}) dndComp: DraglayoutComponent
  ;

  constructor() { }

  ngOnInit() {
  }
  searchMapId(searchVar:number){
    this.dndComp.searchMapId(searchVar);
  }
}
