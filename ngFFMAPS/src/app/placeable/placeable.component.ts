import { Component, OnInit, Input } from '@angular/core';
import { Placeable } from '../placeable';

@Component({
  selector: 'app-placeable',
  templateUrl: './placeable.component.html',
  styleUrls: ['./placeable.component.css']
})
export class PlaceableComponent implements OnInit {

  @Input() public placeable: Placeable;
  @Input() public minify:number =0;

  constructor() { }

  ngOnInit() {
  }
}
